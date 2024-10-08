import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// Observable => An (object) that (create + control) a (stream of data)
// Operators => functions can be use on observables to make some transformation on there values

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
// #####################################
// ### 1st way of create observables ###  (((( Subjects )))) => used to emit data from place to place
// #####################################

// (BehaviorSubject)  => AN observable use to emit data that I can listen to in another part of the app
// ----------------
// EX:-

// In Service
// -----------
// messages$ = new BehaviorSubject<string[]>([]);
// private messages: string[] = [];
// addMessage(message: string) {
//   this.messages = [...this.messages, message];
//   this.messages$.next([...this.messages]);
// }

// In Component
// ------------
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

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

// ...$ => Indicates that that variable holds an objservable
// For any (observable) to listen to it and use the value inside => you must to (subscribe) to it.
// interval(1000).subscribe(); => If I did not use ( subscribe() ) the (interval()) will not do anything.

// interval(1000) => This code produces an observable every 1 second. (it is only used if I need a (timer) or something like that in my app)
// subscribe() has paramter function
// 1) [[ next: (val) => {...} ]] => Runs every time an observable made
// 2) [[ completed: () => {} ]] => When this observable stops making any new value
// 3) [[ error: () => {} ]] => When any error occures (like in send http requestes)
// I must make sure to (clear this observable) to (avoid any unwanted behined the sence objservable work) which leads to (memory leak)
// Can clear it with 1)DestroyRef() - or - 2)ngOnDestroy() {}

// Operator (ex:- map())
// ---------
// interval(1000).pipe(map((val) => val * 2))

// The differance between (BehaviorSubject - interval) that the (BehaviorSubject) 1)produce and 2)emit the value inside it
// (interval) only produce the value and don't emit it.

//--------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------

// ###############
// ### Signals ###
// ###############
// 1) set() => To give it a new value
// 2) update(prevValue => {}) => same as [set()] but it provides the latest value of this signal
// 3) computed() => like (getter function) in normal variables.

// {{computed()}} in signal used like (getter function) in normal variables.
// (more efficient, because it only changes when it's signal changes, (not using zone.js))
// EX:-
// 1) computed => imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
// 2) Getter => get imagePath() {
//   return 'assets/users/' + this.selectedUser().avatar;
//  }

// effect(() => {
//   console.log(`Clicked button ${this.clickCount()} times.`);
// });
// effect() used with signals
// This effect will always reexcute when ever a signal inside it changes

//--------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------

// Observables looks like signals in many cases
// like define data and emitting it, that can be done with both of them

// ************************************
// observable => values over (time)
// signal => values in a (container)
// ************************************

// *************************************************
// observable => greate for (events - stream data)
// signal => greate for (application state)
// *************************************************

// *************************************************
// observable => has no (initila value) [except {{ subjects }}]
// signal => always has initial value
// *************************************************
