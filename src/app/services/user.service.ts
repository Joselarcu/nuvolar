import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import {
  catchError,
  distinctUntilChanged,
  map,
  shareReplay,
  finalize,
  tap,
} from 'rxjs/operators'
import { User } from '../models/user'
import { AlertService } from './alert.service'
import { LoadingService } from './loading.service'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private loadingService: LoadingService
  ) {}

  getAll(name: string): Observable<User[]> {
    this.loadingService.showLoading()
    return this.http
      .get<any>(`https://api.github.com/search/users?q=${name}`)
      .pipe(
        map((response) => response.items),
        distinctUntilChanged(),
        shareReplay(),
        finalize(() => this.loadingService.hideLoading()),
        catchError((err) => {
          this.loadingService.hideLoading()
          this.alertService.showErrors(err.message)
          return throwError(err)
        })
      )
  }
  getUser(username: string): Observable<User> {
    this.loadingService.showLoading()
    return this.http.get<any>(`https://api.github.com/users/${username}`).pipe(
      finalize(() => this.loadingService.hideLoading()),
      catchError((err) => {
        this.loadingService.hideLoading()
        this.alertService.showErrors(err.message)
        return throwError(err)
      })
    )
  }

  getFollowers(username: string): Observable<string[]> {
    return this.http
      .get<any>(`https://api.github.com/users/${username}/followers`)
      .pipe(map((followers) => followers.map(({ login }) => login)))
  }
  getRepositories(username: string): Observable<string[]> {
    return this.http
      .get<any>(`https://api.github.com/users/${username}/repos`)
      .pipe(map((repositories) => repositories.map(({ name }) => name)))
  }
}
