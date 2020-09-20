import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { User } from '../../models/user'
import { SearchService } from '../../services/search.service'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users$: Observable<User[]>
  subscription: Subscription

  constructor(
    public userService: UserService,
    public searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.subscription = this.searchService.searchText$
      .pipe(distinctUntilChanged(), debounceTime(500))
      .subscribe((text) => {
        if (text) {
          this.users$ = this.userService.getAll(text)
        }
      })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
