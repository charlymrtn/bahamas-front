import { Component, OnInit } from '@angular/core';

export interface Task {
  position: number;
  instanceId: number;
  leadName: string;
  taskName: string;
  taskOwner: string;
  status: string;
}

const tasks: Task[] = [
  {position: 1, leadName: 'Jhon Doe', instanceId: 1378, taskName: 'Task 1', taskOwner: 'Ben Smith', status: 'Claim'},
  {position: 2, leadName: 'Jane Doe', instanceId: 1379, taskName: 'Task 2', taskOwner: 'Ben Smith', status: 'Complete'},
  {position: 3, leadName: 'Jim Doe', instanceId: 1380, taskName: 'Task 3', taskOwner: 'Ben Smith', status: 'Complete'},
];

@Component({
  selector: 'pib-task-inbox',
  templateUrl: './task-inbox.component.html',
  styleUrls: ['./task-inbox.component.scss']
})
export class TaskInboxComponent implements OnInit {

  displayedColumns: string[] = ['position', 'instanceId', 'leadName', 'taskName', 'taskOwner', 'status'];
  dataSource = tasks;

  constructor() { }

  ngOnInit() {
  }

}
