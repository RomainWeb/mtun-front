import { AuthPort } from '@domain/auth/ports/auth.port';
import { InMemoryAuthAdapter } from '@infrastructure/data/auth/adapters/inMemoryAuth.adapter';
import { LoginUseCase } from '@domain/auth/usecase/login.useCase';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { ProfileUseCase } from '@domain/auth/usecase/profile.useCase';
import { ProfileResponseDto } from '@infrastructure/data/auth/dtos/profileResponse.dto';

describe('login use case', () => {
  let loginRequest: LoginRequestDto;

  beforeEach(() => {
    loginRequest = {
      email: 'romain.mercier@gmail.com',
      password: '123456',
    };
  });

  describe('login use case', () => {
    it('should return an unauthorized status code when password or email are incorrect', (done) => {
      const loginResponse: LoginResponseDto = {
        message: 'User or password not match',
        statusCode: 401,
      };

      const loginUseCase = buildLoginUseCase(loginResponse);

      loginUseCase
        .execute(loginRequest)
        .subscribe((result: LoginResponseDto) => {
          expect(result.statusCode).toEqual(401);
          done();
        });
    });

    it('should return a success status code when email an password are correct', (done) => {
      const loginResponse: LoginResponseDto = {
        message: 'User or password not match',
        statusCode: 200,
        accessToken: 'testToken',
      };

      const loginUseCase = buildLoginUseCase(loginResponse);

      loginUseCase
        .execute(loginRequest)
        .subscribe((result: LoginResponseDto) => {
          expect(result.statusCode).toEqual(200);
          expect(result.accessToken).toEqual('testToken');
          done();
        });
    });
  });

  describe('profile use case', () => {
    it('should return a user profile with email', () => {
      const loginResponse: LoginResponseDto = {
        message: 'User or password not match',
        statusCode: 200,
        accessToken: 'testToken',
      };

      const profileResponse: ProfileResponseDto = {
        name: 'Yann name',
        email: 'yann@gmail.com',
        display_name: 'yann pseudo',
        id: '8e3399e6-1d94-11ec-9621-0242ac130002',
      };

      const profileUseCase = buildProfileUseCase(loginResponse);

      profileUseCase.execute().subscribe((result: ProfileResponseDto) => {
        expect(result).toEqual(profileResponse);
      });
    });
  });

  function buildLoginUseCase(loginResponse: LoginResponseDto): LoginUseCase {
    const loginPort: AuthPort = new InMemoryAuthAdapter(loginResponse);
    return new LoginUseCase(loginPort);
  }

  function buildProfileUseCase(
    loginResponse: LoginResponseDto
  ): ProfileUseCase {
    const profilePort: AuthPort = new InMemoryAuthAdapter(loginResponse);
    return new ProfileUseCase(profilePort);
  }
});
