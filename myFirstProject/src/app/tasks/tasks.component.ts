import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Task } from '../Tasks';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
tasks: Task[] =[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.dataService.getTasks().subscribe((tasks)=> this.tasks = tasks); 
  }

}
