import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// Take a look on 1)app.routes 2)app.config 3)bootstrapApplication(AppComponent, appConfig)  {{{appConfig}}}

// -----------------------------------------------------------------

// Making active route has spetcial styles => <a routerLink="/tasks" routerLinkActive="selected">

// -----------------------------------------------------------------

// Anything doesn't work => Make sure that you imported it in component
// Ex:- this is not working ((( routerLink="/tasks" ))) in template file until I type ((( imports: [RouterLink] ))) in component file
// I can also add (query params) and ....

// -----------------------------------------------------------------

// Navigate using dynamic routes => {{{ [routerLink]="['/users', user().id]" }}}

// -----------------------------------------------------------------

// routerLink="../" => go one level out of your current path
// Ex:- If I am in (/users/test) => go to (/test)

// routerLink="./" => The current route
// Ex:- routerLink="./user/test"

// -----------------------------------------------------------------

// Navigating programmatically
// 1) private router = inject(Router);
// 2) this.router.navigate(['/users', this.userId(), 'tasks']);
// ******* I can pass an array of configuartions to this like ({replaceUrl: true}) which privents going back word in navigation using back button.

// -----------------------------------------------------------------

// <a routerLink="tasks/new">Add Task</a>
// here I used the route (( tasks/new )) only and this will move to the route (( /users/u2/tasks/new )) since it is a child to (/users/u2) route,
// so I can simply type the rest of the route only to go to this child route

// -----------------------------------------------------------------

// activatedRoute - vs - activatedRoute.snapshot
// (activatedRoute.snapshot) is the same as (activatedRoute) but it is not reactive

// -----------------------------------------------------------------

// // Extracting the (id) from the url
// 1) providers: [provideRouter(routes, withComponentInputBinding())] => add [[[ withComponentInputBinding() ]]] to configurations
// 2) use ((( userID = input.required<string>(); ))) in thecomponent

// **************** To work with child components in routing use => bootstrapApplication(AppComponent, providers: [provideRouter(routes, withComponentInputBinding(), withRouterConfig({paramsInheritanceStrategy: 'always'}))])
// withRouterConfig({paramsInheritanceStrategy: 'always'}) => this is the key of it to work inside the components of child routes

// ------

// // (( Older way )) to get dynamic route  [[[[[ Work for child routes ]]]]]
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

// ###################
// ### QueryParams ###
// ###################

// [queryParams]="{order: 'asc'}" => Make sure to put ((( withComponentInputBinding() ))) in configurations of the app
// order = input<'asc' | 'des'>(); => Extracting it like (dynamic routes)

// --------- older way of extracting ( quary params ) ------------- //

// private activatedRoute = inject(ActivatedRoute);
//   orderQueryParam?: 'asc' | 'desc';

//   private distroyRef = inject(DestroyRef);

//   ngOnInit(): void {
//     const subscription = this.activatedRoute.queryParams.subscribe({
//       next: (params) => (this.orderQueryParam = params['order']),
//     });

//     this.distroyRef.onDestroy(() => subscription.unsubscribe());
// }

// -----------------------------------------------------------------

// // This shold be the configuration any time I use
// provideRouter(
//   routes,
//   withComponentInputBinding(),
//   withRouterConfig({ paramsInheritanceStrategy: 'always' })
// ),

// -----------------------------------------------------------------
