import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { TakeListComponent } from './take/take-list/take-list.component';
import { CreateTakeComponent } from './take/create-take/create-take.component';
import { TakeDetailComponent } from './take/take-detail/take-detail.component';
import { TakeUpdateComponent } from './take/take-update/take-update.component';

const routes: Routes = [
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'take/:id/edit', component: TakeUpdateComponent, canActivate: [LoggedInGuard]},
  { path: 'take/:id', component: TakeDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'take', component: TakeListComponent, canActivate: [LoggedInGuard]},
  { path: 'take/add', component: CreateTakeComponent, canActivate: [LoggedInGuard] },
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
