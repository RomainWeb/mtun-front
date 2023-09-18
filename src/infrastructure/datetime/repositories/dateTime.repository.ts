export abstract class DateTimeRepository {
  abstract formatDate(
    dateTime: Date,
    formatting: string,
    options?: Array<any>
  ): string;
}
