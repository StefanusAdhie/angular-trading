import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'


const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent }
]

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
	exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule {
	ngOnInit() {
		this._checkToken()
	}

	_checkToken() {
		if(localStorage.getItem('@_Token')) {
			console.log('true')
			return '/dashboard'
		} else {
			console.log('false')
			return '/login'
		}
	}
}
