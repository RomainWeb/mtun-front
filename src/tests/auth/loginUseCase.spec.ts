import { AuthPort } from '@domain/auth/ports/auth.port';
import { InMemoryAuthAdapter } from '@infrastructure/data/auth/adapters/inMemoryAuth.adapter';
import { LoginUseCase } from '@domain/auth/usecase/login.useCase';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';

describe('login use case', () => {
  let loginRequest: LoginRequestDto;

  beforeEach(() => {
    loginRequest = {
      email: 'romain.mercier@gmail.com',
      password: '123456',
    };
  });

  it('should return an unauthorized status code when password or email are incorrect', (done) => {
    const loginResponse: LoginResponseDto = {
      message: 'User or password not match',
      statusCode: 401,
    };

    const loginUseCase = buildUseCase(loginResponse);

    loginUseCase.execute(loginRequest).subscribe((result: LoginResponseDto) => {
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

    const loginUseCase = buildUseCase(loginResponse);

    loginUseCase.execute(loginRequest).subscribe((result: LoginResponseDto) => {
      expect(result.statusCode).toEqual(200);
      expect(result.accessToken).toEqual('testToken');
      done();
    });
  });

  function buildUseCase(loginResponse: LoginResponseDto): LoginUseCase {
    const loginPort: AuthPort = new InMemoryAuthAdapter(loginResponse);
    return new LoginUseCase(loginPort);
  }
});
