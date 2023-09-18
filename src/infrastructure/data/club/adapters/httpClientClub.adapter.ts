import { ClubPort } from '@domain/club/ports/club.port';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ClubEntity } from '@domain/club/entities/club.entity';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpClientClubAdapter implements ClubPort {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ClubEntity[]> {
    return of([]);
  }

  getById(id: number): Observable<ClubEntity> {
    return this.http.get<ClubEntity>(environment.apiUrl + 'club/' + 2);
  }
}
