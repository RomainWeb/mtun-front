import { ClubBuilder } from '../builders/club.builder';
import { SportTypeEnum } from '@enums/sportType.enum';

export class ClubEntity {
  id: number;
  name: string;
  logoUrl: string;
  shortName: string;
  sportType: SportTypeEnum;
  clubCreationDate: Date;
  emailContact: string;
  address: string;

  constructor(builder: ClubBuilder) {
    this.id = builder.id;
    this.name = builder.name;
    this.logoUrl = builder.logoUrl;
    this.shortName = builder.shortName;
    this.sportType = builder.sportType;
    this.clubCreationDate = builder.clubCreationDate;
    this.emailContact = builder.emailContact;
    this.address = builder.address;
  }
}
