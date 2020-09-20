import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AlertComponent } from './components/alert/alert.component'
import { CardComponent } from './components/card/card.component'
import { HeaderComponent } from './components/header/header.component'
import { ListComponent } from './components/list/list.component'
import { LoadingComponent } from './components/loading/loading.component'
import { UserDetailComponent } from './containers/user-detail/user-detail.component'
import { UserListComponent } from './containers/user-list/user-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailComponent,
    CardComponent,
    ListComponent,
    LoadingComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
