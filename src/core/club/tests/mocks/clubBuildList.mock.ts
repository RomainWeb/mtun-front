import { ClubEntity } from '@club/domain/entities/club.entity';
import { ClubBuilder } from '@club/useCases/club.builder';

export const CLUB_LIST_MOCK: ClubEntity[] = [
  new ClubBuilder()
    .withId(1)
    .withName('clubOne')
    .withLogoUrl('logoPath')
    .build(),
  new ClubBuilder()
    .withId(2)
    .withName('clubTwo')
    .withLogoUrl('logoPath')
    .build(),
  new ClubBuilder()
    .withId(3)
    .withName('clubThree')
    .withLogoUrl('logoPath')
    .build(),
];
