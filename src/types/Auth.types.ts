export interface AuthSwitcher {
    onClose: () => void;
    onLogin: () => void;
  }

export interface AdminData {
    name: string; 
    password: string; 
  }
  
 export interface AdminResponse {
    name: string; 
    password: string; 
    role: string; 
  }
  
 export interface GetAdminResponse {
    items: AdminResponse[]; 
  }

  export interface AuthState {
    username: string | null; 
    role: string | null;      
  }

