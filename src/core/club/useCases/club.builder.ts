import { ClubEntity } from '../domain/entities/club.entity';

export class ClubBuilder {
  private _id!: number;
  private _name!: string;
  private _logoUrl!: string;

  constructor() {}

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
}
