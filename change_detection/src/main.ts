import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// ### Change detection in (( Zone.js )) ### => Zone.js is a wrapper that wraps the whole app.
// By default anugular uses ( zone.js ) library, which handle the change detection in the whole angular project. ( when 1-event 2-change  happens )
// this zone.js library ( looks in {{ all }} components, when a ( 1-change 2-event ) made {{ in any }} component in the app and check { 1-string interpullations 2-Template bindings }. )
// المكتبة دي بتبص علي كل المشروع تاني جزء جزء لو حصل تغيير بس في اي مكان
// And off course that will leed to (performance issues) in complex apps.
// note: the change made ((( twice ))) in dev and ((( once ))) in production.
// (if there is a console.log() will print twice in dev mode and only one in production)

// ######################
// ### Optimization 1 ###
// ######################
// Avoid using complext functions in (Template bindings), because that will lead to be reexcuted where any change happens in any where in the app.
// not good (avoid doing this) ex:-  in (ts file):[[ get debugOutput(){... complex logic} ]], in (html file): [[ <p>{{ debugOutput }}</p> ]]
// If you avoided the latest code is a kind of (optimisation)
// That is why (pips) are cashed by default, because pips are functions and using complix logic functions in the template will lead performance issues due to reexcution with every change in events or variable.

// ######################
// ### Optimization 2 ###
// ######################
// By using in (ts file): [ private zone = inject(NgZone); this.zone.runOutsideAngular(() => {})] =====> here change detection is not trigered for this (event)
// if I wrapped any function with this code, this will make this fuction does not reexcuted with every change in the app. (will only reecuted if 1)one of it's variables changed 2)function called )

// ######################
// ### Optimization 3 ### (Recommended) if needed
// ######################
// By using in (ts file): [ changeDetection: ChangeDetectionStrategy.OnPush ]
// Will only (check for changes) if a 1)change or event happens in it's ((( sub tree (in it or inside it's children) ))) 2)An input changes
// ex;- (parent componet) contains ( 2 child components ) if I put [ changeDetection: ChangeDetectionStrategy.OnPus ] in the parent => It will never check for changes unless 1)App init 2)event or change happens in ((( 1-inside this compoent 2-inside one of it's children ))) so then the changes check work for all this subtree (parent + 2 children)
// But if a change made here inside any of these 3 components, the (change detection) will work for (all the app) again.
// Because the role of this solution is to (avoid checking these {{subtree}} unessiserly) but if an action happens inside it (change detection will work normally for all the other components)

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// ############
// ### RXJS ###
// ############

// BehaviorSubject => It's an (RXJS) service that
// creates a wrapper around the variable and makea subscription on it (to make others know when this variable changes)

// ...$ => we name any rxjs variable with ($) in end.

// -----------------------------------
// -----------------------------------
// ############# Making manual changes variable detection (because we on {onPush} + useing (normal variables not signals))

// In the service
// ----------------
// EX:- messages$ = new BehaviorSubject<string[]>([]);
// this.messages$.next(...) => Emmiting a new value for the observable

// In the component
// -----------------
// private messageService = inject(MessagesService);
// private cdRef = inject(ChangeDetectorRef);
// private destroyRef = inject(DestroyRef)
// messages: string[] = []
// ngOnInit() {
//   const subscription = this.messageService.messages$.subscribe((messages) => {
//     this.messages = messages;
//     this.cdRef.markForCheck();
//   });
//   this.destroyRef.onDestroy(() => subscription.unSbscribe())
// }

// Here we made manual change detection.
// Because 1)we use (onPush) on that component + 2) we use (normal variables [not signals])
// We use observables for that to subscribe on targeted variable and inform the component when it changes.

//**** (signals) handle all that by default, so useing signals is better.
// -----------------------------------
// -----------------------------------

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------

// ************** This is not without working properly (normal variables + services), it works will with (signals + services).

// => because if the change detection is disabled because I used that code [ changeDetection: ChangeDetectionStrategy.OnPush ], so if the value changes in the (service) {it does not reflect in the component}, so I should (handel that manually) using {{ RXJS }}
// =>{but signals handels that from its own}.
// when using [ changeDetection: ChangeDetectionStrategy.OnPush ] ====>>>>> 1-(RXJS + normal variables + services) 2- (signals + services)
// (RXJS + normal variables + services) => in RXJs we create an observable in  the service and use .next(new value) on it, and use (async) pipe in the template

//*************** (Not recommended) (V18) I can use sinals in all the app + removing the (zone.js)

// Check whatsapp voices and photos

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------

// Changes detection with (onPush)
// 1) Signals + serice (Recommended)
// 2) normal variables + objservables + service

// 3) async pipe
// In the service
// ----------------
// EX:- messages$ = new BehaviorSubject<string[]>([]);
// this.messages$.next(...) => Emmiting a new value for the observable

// in component
// -------------
// private messagesService = inject(MessagesService);
// messages$ = this.messagesService.messages$;

// in template
// ------------
// {{ messages$ | async }}
