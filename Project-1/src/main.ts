import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// (main.ts) is the first excuted file, which in there the (bootstrap) the (app component)
// @component is a decorator that add (metadata) to the component.
// Math.floor(Math.random() * DUMMY_USERS.length); => select a number between [0, DUMMY_USERS.length]

// Signals don't use (zone.js), it detects the change in it's component only.
// in zone.js it check the whole app when a single var changes in a single component

// {{computed()}} in signal used like (getter function) in normal variables.
// (more efficient, because it only changes when it's signal changes, (not using zone.js))
// EX:-
// 1) computed => imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
// 2) Getter => get imagePath() {
//   return 'assets/users/' + this.selectedUser().avatar;
//  }

// using ((( ! ))) after a variable means that I will never get ( undefined ) but that variable [ will always has a values ]
// using ((( ? ))) after a variable means that I am not sure if that variable will have 1) a value 2) undefined. [ @Input() name?: string =  @Input() name: string | undefined]
// You can't use both on the sae variable.

// Dynamic class names => [class.active]="selected" (selected = true, the [active] class will be added)

// (( Component )) are [directive + template]

// We do not need to type (e.preventDefault()) on form submition here, because angular prevent this behaviour only by (importing [FormsModule])

// ######################################################################################################################
// ##### The main goal of (( Signals )) is not to use zone.js and handle the change of data in a more efficient way #####
// ######################################################################################################################
