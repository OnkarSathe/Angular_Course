import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-data/dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TasksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first_project';
  users = DUMMY_USERS;
  selected_user?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selected_user);
  }

  onSelectUser(id : string){
    this.selected_user = id;
  }
}
