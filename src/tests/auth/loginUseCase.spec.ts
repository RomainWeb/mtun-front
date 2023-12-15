import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { LoginUseCase } from '@domain/auth/usecase/login.useCase';
import { InMemoryLoginAdapter } from '@infrastructure/data/auth/adapters/inMemoryLogin.adapter';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { LoginPort } from '@domain/auth/ports/login.port';

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

    const loginUseCase = buildLoginUseCase(loginResponse);

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

    const loginUseCase = buildLoginUseCase(loginResponse);

    loginUseCase.execute(loginRequest).subscribe((result: LoginResponseDto) => {
      expect(result.statusCode).toEqual(200);
      expect(result.accessToken).toEqual('testToken');
      done();
    });
  });

  function buildLoginUseCase(loginResponse: LoginResponseDto): LoginUseCase {
    const loginPort: LoginPort = new InMemoryLoginAdapter(loginResponse);
    return new LoginUseCase(loginPort);
  }
});
