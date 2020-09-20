import { Component, EventEmitter, Input, Output } from '@angular/core'
import { SearchService } from '../../services/search.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() disableInput = false
  @Output() switchTheme: EventEmitter<any> = new EventEmitter()
  text: string

  constructor(private searchService: SearchService) {}

  onInput($event: any): void {
    this.searchService.updateSearch($event.target.value)
  }

  onSwitch(): void {
    this.switchTheme.emit()
  }
}
