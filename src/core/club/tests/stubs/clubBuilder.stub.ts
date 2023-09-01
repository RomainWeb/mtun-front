import { ClubBuilder } from '../../useCases/club.builder';

export class ClubBuilderStub extends ClubBuilder {
  protected _id: number = 1;
  protected _name: string = 'defaultName';
  protected _logoUrl: string = 'logoUrl';
}
