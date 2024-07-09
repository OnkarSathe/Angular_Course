import { Component, Input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/ui/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  constructor(private tasksService: TaskService){}

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
