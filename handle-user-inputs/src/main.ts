import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// Handling forms in angular done in 2 ways 1)Reactive forms 2)Template-driven forms

// #######################
// ### Template-driven ### 1)Interacting with DOM - 2)Is not created in (intialization)
// #######################
// imports: [FormsModule] => One I import (FormsModule), angular knows that I have a form in my template.
// Afetr angular detectes that, it make an (object) for the form behined the scence and manages it.
// If I want to access that (form object) from the DOM => {{{ #form="ngForm" }}} (If I typed {#form} so I will access the (HtmlFormElement) only not the (form object))
// To add inputs to that form object use (ngModel) on them.

// <input name="email" ngModel /> => I must give the input (a name) if I use (ngModule) on it
// <input name="email" ngModel required /> => If I used (required), angular diable the default browser validation and check by iself for the existance of a value in the input or not
// Note:- (required) must be typed after (ngModule)

// #email="ngModel" => This means I want to store the (input object) that created under the hood into the variable (email)

//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------

//***** This is how I get the value of all the inputs inside the form (with each key strock)

// private form = viewChild.required<NgForm>('form');
// private distroyRef = inject(DestroyRef);
//  constructor() {
//     afterNextRender(() => {
//       const subscription = this.form()
//         .valueChanges?.pipe(debounceTime(500))
//         .subscribe({
//           next: (value) =>
//             window.localStorage.setItem(
//               'saved-login-form',
//               JSON.stringify({ email: value.email })
//             ),
//         });
//       this.distroyRef.onDestroy(() => subscription?.unsubscribe());
//     });
//  }

// I used here (afterNextRender) because this (NgForm) is not available from intialization,
// so if I want to access it should be after the whole render of  the page
// this.form().valueChanges; => Returns an (observable), that emits a new value each time form changes.

// .pipe(debounceTime(500)) => Make sure that the (subscription is only triggred after 500ms when user stop typing)
// If the value changes before 500ms afetr user stops writting so this function start counting again and after 500ms the subscription is triggered

//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------

// Once I added (ngModule) to an input, it gets some (classes) and (properties) to descripe it.

// 1) ng-pristine - ng-dirty
// EX:- (ng-pristine) => has not intered value
// EX:- (ng-dirty) => has intered value

// 2) ng-touched - ng-untouched
// 3) ng-valid - ng-inValid

//-------------------------------------------------

//*** I can access these classes and work with them in the (styles)
// EX:-
// .control:has(.ng-invalid.ng-touched.ng-dirty) label {
//   color: #f98b75;
// }

// input.ng-invalid.ng-touched.ng-dirty {
//   background-color: #fbdcd6;
//   border-color: #f84e2c;
// }

//-------------------------------------------------

//*** I can access these classes and work with them in the (Template)
// @if(email.touched && email.dirty && email.invalid) {
//   <p class="control-error">Invalid email address entered</p>
// }

//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------

// ((2 way binding)) [(ngModule)]
// If I want to access the values in the form with each key strock
// used => If want the to make a change this each key strock in an input
