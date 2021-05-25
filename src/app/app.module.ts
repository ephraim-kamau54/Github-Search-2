import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ReposComponent } from './repos/repos.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserComponent } from './user/user.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ReposComponent,
    SearchFormComponent,
    UserComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
