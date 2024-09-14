import { InjectionToken, Provider } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

// Another way of providing a value (instead of {services})
// This is not the best practice in this case (use service)

type taskStatusOptions = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  text: string;
}[];

export const TaskStatusOptions: taskStatusOptions = [
  { value: 'open', taskStatus: 'OPEN', text: 'Open' },
  { value: 'in-progress', taskStatus: 'IN_PROGRESS', text: 'In-Progress' },
  { value: 'done', taskStatus: 'DONE', text: 'Completed' },
];

export const TASKSTATUSOPTIONSToken = new InjectionToken<taskStatusOptions>(
  'task-status-options'
);

export const TasksStatusOtionsSProvider: Provider = {
  provide: TASKSTATUSOPTIONSToken,
  useValue: TaskStatusOptions,
};
