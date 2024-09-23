import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// Take a look on 1)app.routes 2)app.config 3)bootstrapApplication(AppComponent, appConfig)  {{{appConfig}}}

// Making active route has spetcial styles => <a routerLink="/tasks" routerLinkActive="selected">

// Anything doesn't work => Make sure that you imported it in component
// Ex:- this is not working ((( routerLink="/tasks" ))) in template file until I type ((( imports: [RouterLink] ))) in component file

// Navigate using dynamic routes => {{{ [routerLink]="['/users', user().id]" }}}

// <a routerLink="tasks/new">Add Task</a>
// here I used the route (( tasks/new )) only and this will move to the route (( /users/u2/tasks/new )) since it is a child to (/users/u2) route,
// so I can simply type the rest of the route only to go to this child route

// -----------------------------------------------------------------

// // Extracting the (id) from the url
// 1) providers: [provideRouter(routes, withComponentInputBinding())] => add [[[ withComponentInputBinding() ]]] to configurations
// 2) use ((( userID = input.required<string>(); ))) in thecomponent

// ------

// // (( Older way )) to get dynamic route
// private activatedRoute = inject(ActivatedRoute);
// userName_oldWay = '';

// ngOnInit(): void {
//   this.activatedRoute.paramMap.subscribe({
//     next: (paramMap) =>
//       (this.userName_oldWay =
//         this.usersService.users.find((u) => u.id === paramMap.get('userId'))
//           ?.name || ''),
//   });
// }

// -----------------------------------------------------------------
