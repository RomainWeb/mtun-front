import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { ProfileUseCase } from '@domain/auth/usecase/profile.useCase';
import { ProfileResponseDto } from '@infrastructure/data/auth/dtos/profileResponse.dto';
import { InMemoryProfileAdapter } from '@infrastructure/data/auth/adapters/inMemoryProfile.adapter';
import { ProfilePort } from '@domain/auth/ports/profile.port';

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

function buildProfileUseCase(loginResponse: LoginResponseDto): ProfileUseCase {
  const profilePort: ProfilePort = new InMemoryProfileAdapter();
  return new ProfileUseCase(profilePort);
}
