import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { User } from 'src/app/models/user'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user$: Observable<User>
  followers$: Observable<string[]>
  repositories$: Observable<string[]>
  subscription: Subscription

  constructor(public userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('login')
    this.user$ = this.userService.getUser(username)
    this.followers$ = this.userService.getFollowers(username)
    this.repositories$ = this.userService.getRepositories(username)
  }
}
