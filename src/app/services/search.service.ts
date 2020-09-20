import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private subject = new BehaviorSubject<string>('')
  searchText$: Observable<string> = this.subject.asObservable()

  constructor() {}

  updateSearch(text: string): void {
    this.subject.next(text)
  }
}
