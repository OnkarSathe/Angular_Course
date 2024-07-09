import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.interface';
import { CardComponent } from '../shared/ui/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required:true }) selected!: boolean;
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  imagePath() {
    return '../../../assets/users/' + this.user.avatar;
  }

  onUserButtonClick() {
    this.select.emit(this.user.id);
  }
}
