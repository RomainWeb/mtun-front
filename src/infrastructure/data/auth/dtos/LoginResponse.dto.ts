export interface LoginResponseDto {
  statusCode: number;
  message: string;
  accessToken?: string;
  refreshToken?: string;
}
