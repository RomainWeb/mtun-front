import { Observable } from 'rxjs';
import { ClubEntity } from '../entities/club.entity';

export abstract class ClubRepository {
  abstract getAll(): Observable<ClubEntity[]>;
  abstract getById(id: number): Observable<ClubEntity>;
}
