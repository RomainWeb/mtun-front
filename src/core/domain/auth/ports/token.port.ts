import { UserEntity } from '@domain/user/entities/user.entity';

export abstract class TokenPort {
  abstract signOut(): void;
  abstract saveToken(token: string): void;
  abstract getToken(): string | null;
  abstract saveRefreshToken(token: string): void;
  abstract getRefreshToken(): string | null;
}
