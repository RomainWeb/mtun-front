import {Observable} from "rxjs";
import {ClubModel} from "../models/club.model";

export abstract class ClubRepository {
  abstract getAllClubs(): Observable<ClubModel[]>;
}
