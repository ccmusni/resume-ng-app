import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
          appRoutes
        )
      ],
    exports: [
        RouterModule, HomeModule, UserModule
    ]
})
export class AppRoutingModule {}