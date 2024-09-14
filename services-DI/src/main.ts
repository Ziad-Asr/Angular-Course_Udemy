import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

//**** Made on signals
// this.tasks.set([newTask]);
// this.tasks.update((tasks) => [...tasks, newTask]);
// tasks = computed()  => Returns a signal that depends on other signals, and recomputed if any signal of those changed.

// 1)[asReadOnly()] -- or -- 2)[Getter function] -- (+ {{ private }} keyword on the protected varuable)

// ______________________________________________________________________________________________________________________________
// ______________________________________________________________________________________________________________________________

// @Injectable({ providedIn: 'root' })
// provider: [TasksService] => called {{ Element injector }}

// I can use the provder code and remove the injectable part, to make an (instance) of that service inside a (specific component and it's children).

// ______________________________________________________________________________________________________________________________
// ______________________________________________________________________________________________________________________________

// Instead of using [[[@Injectable({providedIn: 'root',})]]] we can use [[[ providers: [TaskService] ]]] in [[[[[[ the (main.ts)]]]]]]
//******** (((The downside))) of this way that it uses the code inside the service from the intialization of the app event if it is not important
// That is because it used in the (bootstrapApplication), so angular think it is important from the start.
// bootstrapApplication(AppComponent, {providers: [TaskService]}).catch((err) => console.error(err));
// That named (Environment injector)

// Instead of using [[[@Injectable({providedIn: 'root',})]]] also I can use [[[ providers: [TaskService] ]]] inside [[[[[[Any component]]]]]]
// That makes the service be used inside 1)this component 2)it's child components
//********* (The downside) of this way that it give each component (a separated new instance of the servace)
// That named (Elemenet injector)

// In summary there are (3 way) to inject a service
// 1) @Injectable({providedIn: 'root'}) => in the service itself. (Recommended)
// 2) Environment injector => bootstrapApplication(AppComponent, {providers: [TaskService]}).catch((err) => console.error(err));
// 3) Element injector => [[[ providers: [TaskService] ]]] inside the component

// ______________________________________________________________________________________________________________________________
// ______________________________________________________________________________________________________________________________

// The best here is to (replace) than mutating the object inside the array.
// this.tasks.update((oldTasks) =>
//     oldTasks.map((task) =>
//         task.id === taskId ? { ...task, status: newStatus } : task
//     )
// );

// ______________________________________________________________________________________________________________________________
// ______________________________________________________________________________________________________________________________

// Look at (task.module.ts) on the injection token
// injected in the (task-list)
// Wantch video 187

// export const TASKSTATUSOPTIONSToken = new InjectionToken<taskStatusOptions>(
//  'task-status-options'
// );
// 'task-status-options' => the title of the token

// providers: [
//   {
//     provide: TASKSTATUSOPTIONS,
//     useValue: TaskStatusOptions
//   },
// ],

// useClass => to inject (components)
// useValue => to inject (value)
// [[ useFactoru: () => {} ]] => Accepts the value and make some changes on it

//** I can also export this provider in the model file
