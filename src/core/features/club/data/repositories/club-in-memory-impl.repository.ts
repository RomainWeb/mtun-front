import {ClubRepository} from "../../domain/repositories/club.repository";
import {Injectable} from "@angular/core";
import {ClubModel} from "../../domain/models/club.model";
import {Observable, of} from "rxjs";
import {CLUBS} from "../mocks/clubs";

@Injectable({
  providedIn: 'root',
})
export class ClubInMemoryImplRepository extends ClubRepository {

  getAllClubs(): Observable<ClubModel[]> {
    return of(CLUBS);
  }
}
