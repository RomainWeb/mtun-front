import { RegisterPort } from '@domain/auth/ports/register.port';
import { RegisterResponseDto } from '@infrastructure/data/auth/dtos/registerResponse.dto';
import { InMemoryRegisterAdapter } from '@infrastructure/data/auth/adapters/inMemoryRegister.adapter';
import { RegisterUseCase } from '@domain/auth/usecase/register.useCase';
import { RegisterRequestDto } from '@infrastructure/data/auth/dtos/registerRequest.dto';

describe('register use case', () => {
  it('should return a status code 200 and successfully message', (done) => {
    const response: RegisterResponseDto = {
      message: 'Register successfully',
      statusCode: 200,
    };
    const request: RegisterRequestDto = {
      lastname: 'lastname',
      firstname: 'firstname',
      email: 'email@gmail.com',
      phone_number: '0606060606',
      password: '123456',
    };
    const registerPort: RegisterPort = new InMemoryRegisterAdapter(response);
    const registerUseCase: RegisterUseCase = new RegisterUseCase(registerPort);

    registerUseCase
      .execute(request)
      .subscribe((result: RegisterResponseDto) => {
        expect(result.statusCode).toEqual(200);
        expect(result.message).toEqual('Register successfully');
        done();
      });
  });
});
