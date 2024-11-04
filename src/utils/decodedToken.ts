import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '../types/Auth.types';

const decodedToken = (token: string): DecodedToken | null => {
    try {
        return jwtDecode<DecodedToken>(token); 
    } catch (error) {
        console.error("Some gone bad", error);
        return null;
    }
};

export default decodedToken;