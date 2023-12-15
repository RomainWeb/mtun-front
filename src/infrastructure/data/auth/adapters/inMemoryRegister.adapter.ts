import { RegisterPort } from '@domain/auth/ports/register.port';
import { RegisterRequestDto } from '@infrastructure/data/auth/dtos/registerRequest.dto';
import { Observable, of } from 'rxjs';
import { RegisterResponseDto } from '@infrastructure/data/auth/dtos/registerResponse.dto';

export class InMemoryRegisterAdapter implements RegisterPort {
  _registerResponse: RegisterResponseDto;

  constructor(private registerResponse: RegisterResponseDto) {
    this._registerResponse = registerResponse;
  }
  register(data: RegisterRequestDto): Observable<RegisterResponseDto> {
    return of(this._registerResponse);
  }
}
