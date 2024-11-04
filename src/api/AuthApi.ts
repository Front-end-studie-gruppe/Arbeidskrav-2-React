import { AdminData, AdminResponse, GetAdminResponse } from "../types/Auth.types";

const API_KEY_Admin = import.meta.env.VITE_API_KEY_Admin;
const BASE_URL = import.meta.env.VITE_BASE_URL;


const adminHeaders: HeadersInit = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${API_KEY_Admin}`,
};

//Admin sjekk
export const checkAdminExists = async (): Promise<boolean> => {
  const response = await fetch(`${BASE_URL}/admin`, { headers: adminHeaders });
  if (!response.ok) {
    throw new Error("Failed to fetch admin status");
  }

  const data: GetAdminResponse = await response.json();
  return data.items.length > 0; 
};

// Registrering
export const registerAdmin = async (adminData: AdminData): Promise<AdminResponse> => {
  const adminExists = await checkAdminExists();

  if (adminExists) {
    throw new Error("An admin account already exists. Registration is not allowed.");
  }

  const payload = [{
    name: adminData.name,
    password: adminData.password,
    role: "admin", 
  }];

  const response = await fetch(`${BASE_URL}/admin`, {
    method: "POST",
    headers: adminHeaders,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Failed to register admin: ${errorData.message || "Something went wrong"}`);
  }

  return await response.json();
};

// Henter 
export const getAdmin = async (name: string): Promise<AdminResponse> => {
  const response = await fetch(`${BASE_URL}/admin?name=${name}&role=admin`, { 
    method: "GET",
    headers: adminHeaders,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Failed to retrieve admin: ${errorData.message || "Unknown error"}`);
  }

  const data: GetAdminResponse = await response.json();
  return data.items[0]; 
};

// logger inn
export const loginAdmin = async (adminData: AdminData): Promise<{ username: string; role: string; token: string }> => {
  const admin = await getAdmin(adminData.name);

  if (admin && admin.password === adminData.password) {
    return { username: admin.name, role: admin.role, token: API_KEY_Admin }; 
  } else {
    throw new Error("Invalid credentials"); 
  }
};