import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomPipe } from './pipe/custom.pipe';
import { MyDirective } from './directive/my.directive';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    CustomPipe,
    MyDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
