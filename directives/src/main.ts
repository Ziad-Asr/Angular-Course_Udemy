import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// Note: there are two diectives here in this app 1)safe-link (attribute directive) - 2)auth (structural directive)

// 1)Attribute directive => Adding extra functionality or logic for the targeted element.

// 2)Structural directive => Render targeted element based on certain condations.
// (this certain condition based on a passed value to the directive as an (input) but we use an alies of the same name of the directive to pass to this name not to add another word to descripe the input, but that way make us use one word to use the directive and pass the input at the same time)
// ex:- userType = input.required<'user' | 'admin' | 'guist'>({alias: "appAuth"}); => we used here an alies name as same as the name of the directive,
//      <p appAuth="admin">Only admins can see</p> => here we used the name one and this one time for 1)to use this dirctive on this element 2)to pass an input to the directive

// 1) We put a (*) before structural directives - or - 2) we use (<ng-template></ng-template>) without the (*)
// because the (*) is only a syntactic suger for adding this (<ng-template></ng-template>)
// ex:- <ng-template ngIf="..."></ng-template> => (ngIf) here without the (*)

// ex:- <ng-template ngIf="..."> <p>test</p> </ng-template> = <p *ngIf="...">test</p>

// _________________________________________________________
// _________________________________________________________

// Directives => are components without templates
// Components => are (dirctives + templates)

// Directives are an enhancement to the component
// ex:- (ngModle) => that add extra functionality to the input field by making it's value be awaird of in the components file (.ts file)

// (ngModle) is not only for 2 way binding,
// but it also adds dynamic css classes for the field like (ng-untouched - ng-touched) and that is useful for adding dynamic styling for the field also
// (ng) in the start referce that that thing made be angular team.

// (ngModule) => is a (built-in diractive)
// We can also (custom directives) for our project

// (ngModule) and any directive like it called (((attribute directives)))
// (*ngIf) and any directive like it called (((structural directives)))

// Directives types => 1) Attribute directives - 2) Structural directives - #) Custom directives

// { selector: 'a[appSafeLink]' }=> Means apply this directive to any (<a></a>) that has (appSafeLink) attribute on it.

// for (attribute directives) I can add ((( hostDirectives: [myDirective] ))) to add this directive for all elements of this component template.

// _________________________________________________________
// _________________________________________________________

// [Computed()] usage => 1) like gitter function but for signals - 2) compute a new value from a signal
// ex (on 2):- isAdmin = computed(() => this.authService.activePermission() === 'admin')

// (effect()) is used tp run sme code if a (signal) changes.
// constructor() {
//   effect(() => {});
// }
