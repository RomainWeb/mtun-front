import { ClubEntity } from '../domain/entities/club.entity';

export class ClubBuilder {
  club: ClubEntity;

  constructor() {
    this.club = new ClubEntity();
  }

  withId(value: number): ClubBuilder {
    this.club._id = value;
    return this;
  }

  withName(value: string): ClubBuilder {
    this.club._name = value;
    return this;
  }

  withLogoUrl(value: string): ClubBuilder {
    this.club._logoUrl = value;
    return this;
  }

  build(): ClubEntity {
    return this.club;
  }
}
