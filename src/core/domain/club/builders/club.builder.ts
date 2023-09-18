import { ClubEntity } from '../entities/club.entity';
import { SportTypeEnum } from '@enums/sportType.enum';

export class ClubBuilder {
  private _id!: number;
  private _name!: string;
  private _logoUrl!: string;
  private _sportType!: SportTypeEnum;
  private _shortName!: string;
  private _clubCreationDate!: Date;
  private _emailContact!: string;
  private _address!: string;

  withId(value: number): ClubBuilder {
    this._id = value;
    return this;
  }

  withName(value: string): ClubBuilder {
    this._name = value;
    return this;
  }

  withLogoUrl(value: string): ClubBuilder {
    this._logoUrl = value;
    return this;
  }

  withSportType(value: SportTypeEnum) {
    this._sportType = value;
    return this;
  }

  withShortName(value: string) {
    this._shortName = value;
    return this;
  }

  withClubCreationDate(value: Date) {
    this._clubCreationDate = value;
    return this;
  }

  withEmailContact(value: string) {
    this._emailContact = value;
    return this;
  }

  withAddress(value: string) {
    this._address = value;
    return this;
  }

  build(): ClubEntity {
    return new ClubEntity(this);
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get logoUrl(): string {
    return this._logoUrl;
  }

  get sportType(): SportTypeEnum {
    return this._sportType;
  }

  get shortName(): string {
    return this._shortName;
  }

  get clubCreationDate(): Date {
    return this._clubCreationDate;
  }

  get emailContact(): string {
    return this._emailContact;
  }

  get address(): string {
    return this._address;
  }
}
