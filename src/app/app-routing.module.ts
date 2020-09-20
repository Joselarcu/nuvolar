import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserDetailComponent } from './containers/user-detail/user-detail.component'
import { UserListComponent } from './containers/user-list/user-list.component'

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    data: { animationState: 'Users' },
  },
  {
    path: 'users/:login',
    component: UserDetailComponent,
    data: { animationState: 'User' },
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
