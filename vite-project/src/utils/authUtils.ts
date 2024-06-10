import { JwtPayload } from 'jwt-decode';

export interface DecodedToken extends JwtPayload {
    _id: string;
    isBusiness: boolean;
    isAdmin: boolean;
    iat: number;
}

export const setToken = (token: string) => {
    localStorage.setItem('token', token);
}
