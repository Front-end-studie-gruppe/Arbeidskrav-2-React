const API_KEY_Admin = import.meta.env.VITE_API_KEY_Admin;
const BASE_URL = import.meta.env.VITE_BASE_URL;



const adminHeaders: HeadersInit = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${API_KEY_Admin}`,
};

interface AdminData {
  name: string;
  password: string;
}

interface AdminResponse {
  name: string;
  password: string;
  role: string;
}

interface GetAdminResponse {
  items: AdminResponse[];
}

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
    throw new Error(`Failed to register admin: ${errorData.message || "Unknown error"}`);
  }

  return await response.json();
};

// Henter basser på navn
export const getAdmin = async (name: string): Promise<AdminResponse> => {
  const response = await fetch(`${BASE_URL}/admin?name=${name}&role=admin`, { // Rolle er hardkodet i tilfelle jeg trenger den senere
    method: "GET",
    headers: adminHeaders,
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error fetching Admin:", errorData);
    throw new Error(`Failed to retrieve admin: ${errorData.message || "Unknown error"}`);
  }

  const data: GetAdminResponse = await response.json();
  return data.items[0]; 
};

// logger inn
export const loginAdmin = async (adminData: AdminData): Promise<boolean> => {
  const admin = await getAdmin(adminData.name); 

  if (admin && admin.password === adminData.password) {
    return true; 
  } else {
    throw new Error("Invalid credentials");
  }
};
