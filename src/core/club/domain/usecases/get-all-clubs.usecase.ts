import {UseCase} from "../../../../utils/use-case";
import {ClubModel} from "../models/club.model";
import {ClubRepository} from "../repositories/club.repository";
import {Observable, of} from "rxjs";

export class GetAllClubsUseCase implements UseCase<void, ClubModel[]> {
  constructor(private clubRepository: ClubRepository) { }

  execute(): Observable<ClubModel[]> {
    return this.clubRepository.getAllClubs();
  }
}
