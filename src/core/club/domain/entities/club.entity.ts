export class ClubEntity {
  _id!: number;
  _name!: string;
  _logoUrl!: string;

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
