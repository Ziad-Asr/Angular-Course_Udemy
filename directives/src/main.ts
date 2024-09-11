import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

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

// _________________________________________________________
// _________________________________________________________

// [Computed()] usage => 1) like gitter function but for signals - 2) compute a new value from a signal
// ex (on 2):- isAdmin = computed(() => this.authService.activePermission() === 'admin')
