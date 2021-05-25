import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProfileComponent } from './profile/profile.component';
import { githubservice } from './service.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [githubservice]
})
export class AppComponent {
  title = 'app';
}