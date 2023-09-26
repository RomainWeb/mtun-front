import { TokenPort } from '@domain/auth/ports/token.port';
import { UserEntity } from '@domain/user/entities/user.entity';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const REFRESH_TOKEN_KEY = 'auth-refresh-token';
const USER_KEY = 'auth-user';

@Injectable()
export class TokenAdapter implements TokenPort {
  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  saveRefreshToken(token: string): void {}

  saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  saveUser(user: UserEntity): void {}

  signOut(): void {
    localStorage.clear();
  }
}
