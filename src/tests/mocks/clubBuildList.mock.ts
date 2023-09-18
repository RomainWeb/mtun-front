import { ClubEntity } from '../../core/domain/club/entities/club.entity';
import { ClubBuilder } from '@domain/club/builders/club.builder';
import { SportTypeEnum } from '../../core/common/enums/sportType.enum';

export const CLUB_LIST_MOCK: ClubEntity[] = [
  new ClubBuilder()
    .withId(1)
    .withName('clubOne')
    .withLogoUrl('logoPath')
    .withSportType(SportTypeEnum.Tennis)
    .withShortName('TCV')
    .withClubCreationDate(new Date(98))
    .withEmailContact('test.contact@test.com')
    .build(),
  new ClubBuilder()
    .withId(2)
    .withName('clubTwo')
    .withLogoUrl('logoPath')
    .withSportType(SportTypeEnum.Football)
    .withShortName('TCV')
    .withClubCreationDate(new Date(98))
    .withEmailContact('test.contact@test.com')
    .build(),
  new ClubBuilder()
    .withId(3)
    .withName('clubThree')
    .withLogoUrl('logoPath')
    .withSportType(SportTypeEnum.Basketball)
    .withShortName('TCV')
    .withClubCreationDate(new Date(98))
    .withEmailContact('test.contact@test.com')
    .build(),
];
