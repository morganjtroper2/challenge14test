import { JwtPayload, jwtDecode } from 'jwt-decode';

class Auth {
  getToken(): string | null {
    return localStorage.getItem('jwt') || null;
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded.exp ? Date.now() >= decoded.exp * 1000 : false;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  }

  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  login(idToken: string): void {
    localStorage.setItem('jwt', idToken);
  }

  logout(): void {
    localStorage.removeItem('jwt');
  }
}

export default new Auth();