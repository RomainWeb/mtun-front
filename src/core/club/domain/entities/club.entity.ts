import { ClubBuilder } from '@club/useCases/club.builder';

export class ClubEntity {
  id: number;
  name: string;
  logoUrl: string;

  constructor(builder: ClubBuilder) {
    this.id = builder.id;
    this.name = builder.name;
    this.logoUrl = builder.logoUrl;
  }
}
