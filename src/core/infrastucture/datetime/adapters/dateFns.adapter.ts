import { DateTimeRepository } from '../repositories/dateTime.repository';
import { format } from 'date-fns';

export class DateFnsAdapter implements DateTimeRepository {
  formatDate(dateTime: Date, formatting: string, options: Object = {}): string {
    return format(dateTime, formatting, options);
  }
}
