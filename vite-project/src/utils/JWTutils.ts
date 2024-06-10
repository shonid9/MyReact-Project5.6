import jwtDecode, { JwtPayload } from 'jwt-decode';

interface DecodedToken extends JwtPayload {
    _id: string;
    isBusiness: boolean;
    isAdmin: boolean;
    iat: number;
}

export const decodeToken = (token: string): DecodedToken => {
    return JwtPayload<DecodedToken>(token);
};
