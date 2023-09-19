import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { Observable, of, Subject } from 'rxjs';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { Injectable } from '@angular/core';

export class InMemoryTimeSlotAdapter implements TimeSlotPort {
  private readonly _timeSlot: TimeSlotEntity[];

  constructor(timeSlotList: TimeSlotEntity[]) {
    this._timeSlot = timeSlotList;
  }

  getAllTimeSlotsByUserId(): Observable<TimeSlotEntity[]> {
    return of(this._timeSlot);
  }
}
