import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { Observable } from 'rxjs/internal/Observable'
import { filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  private subject = new BehaviorSubject<string[]>([])

  alerts$: Observable<string[]> = this.subject
    .asObservable()
    .pipe(filter((messages) => messages && messages.length > 0))

  showErrors(...alerts: string[]): void {
    this.subject.next(alerts)
  }
}
