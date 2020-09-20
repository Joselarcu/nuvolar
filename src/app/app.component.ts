import { Component, OnInit } from '@angular/core'
import {
  ActivatedRoute,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router'
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { routeTransitionAnimations } from './route-transition-animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations],
})
export class AppComponent implements OnInit {
  theme = ''
  disableInput$: Observable<boolean>

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.disableInput$ = this.router.events.pipe(
      filter((event: NavigationStart) => event instanceof NavigationStart),
      map((event) => event.url.split('/').length > 2)
    )
  }

  prepareRoute(outlet: RouterOutlet): void {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData.animationState
    )
  }

  switchTheme(): void {
    this.theme = this.theme ? '' : 'second-theme'
  }
}
