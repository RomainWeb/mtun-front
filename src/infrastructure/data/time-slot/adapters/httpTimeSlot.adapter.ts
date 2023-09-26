import { Injectable } from '@angular/core';
import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { Observable } from 'rxjs';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class HttpTimeSlotAdapter implements TimeSlotPort {
  constructor(private readonly http: HttpClient) {}

  getAllTimeSlotsByUserId(): Observable<TimeSlotEntity[]> {
    return this.http.get<TimeSlotEntity[]>(
      environment.apiUrl + 'time-slot/' + 3
    );
  }
}
