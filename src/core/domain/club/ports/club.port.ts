import { Observable } from 'rxjs';
import { ClubEntity } from '../entities/club.entity';

export abstract class ClubPort {
  abstract getAll(): Observable<ClubEntity[]>;
  abstract getById(id: number): Observable<ClubEntity>;
}
