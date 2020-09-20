import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { AlertService } from 'src/app/services/alert.service'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  showAlerts = false
  alerts$: Observable<string[]>

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alerts$ = this.alertService.alerts$.pipe(
      tap(() => (this.showAlerts = true))
    )
  }

  hideAlerts(): void {
    this.showAlerts = false
  }
}
