import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// Extending build-in elements
// selector: 'button[appButton]' => mean that any button in my app that cotains the (attribute) of (appButton) will take control of this created component
// selector: 'button.appButton', => The same as before but if button has (class) of (appButton)
// The goal of this way is that I can take a functionality of an html element and use use it in a custom component. (I can do the same if wrap the conetent of my component with button element)
// But I can see the diffence in the console if I use this (selector: 'button[appButton]') this will make the button be the element in the DOM
// But if I wrapped the component with button tag (from inside the custom component) this will make the custom component (app-button) appears in the DOM.

//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________

// I can use the property (( select )) on (ng-content), if I have multiple (ng-content) to sepcify which content go which (ng-content).
// Unless that, all the content will be used in the place of the last (ng-content)
// <span>
// <ng-content />
// </span>
// <span class="icon">
//     <ng-content select=".icon" />
// </span>

//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________

// encapsulation: ViewEncapsulation.None, ===> This makes the styles of the component global
// :host {} => Can be used to affect the host element of my component (ex:- <button appButton></button> => The [:host] used in [appButton] and affects the [button] parent element)

// host: {
//     class: 'control',
//   },
// This adds any property to the host component of the component I write this code in.
// === this way is the same if I added the class on the host itself. (<app-control class="control">...</app-control>)
// === @HostBinding() class = 'control'; (we write [[@HostBinding('class') className = 'control']], to avoid confussion with the word class in the component, so we use (className), but the accual binded word is (class) here)

// There are 3 ways to a property to the host element (app-...) that I am inside 1)host: { class: 'control'} 2)@HostBinding() class = 'control' 3)<app-test property="test" />

// I can remove any wrapper like (div) I ony use to add wrapper styles from any component and use [[:host]] in the componeent css and give it the wrapper styles I want
// These styles will be applied on the slector of the component in the dom (app-...) and the styles will be applies as the same as useing div as a wrapper to hold class with sertain styles.

// HostListener => Used if I want to bind a (function) to the component
// Ex;-
// 1) @HostListener('click') onClickField() {
//      console.log('clicked');
//    }
// 2) host: {
//     '(click)': 'onClick()',
//    },

//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________

// ##############################################################################
// ### If I am in the (HeaderComponent) so (the host element) is (app-header) ###
// ##############################################################################

// [class.status]="currentStatus === 'online'" => if "currentStatus === 'online'" is true, set the class (status)
// [class]="{
//   status: true,
//   'status-online': currentStatus === 'online',
//   'status-offline': currentStatus === 'offline',
//   'status-unknown': currentStatus === 'unknown',
// }"

//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________

// [style.fontSize]= "20px"
// [style]="{'font-size': 20px}" = [style]="{'fontSize': 20px}"

// currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

// If I set an interval that runs behined the sence and it's component destroys, so I must use [ngOnDestroy]
// If I didn't this will lead to (memory leak)

//console.dir()

// <input name="title" id="title" #titleInput /> => (titleInput) is a (ref) on the input

//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________

// ##################
// ### @ViewChild ###
// ##################
// @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
// (@ViewChild) is used to select an elemenet from the template
// @ViewChild('form') => 'form' is a ref put on an element in the template (<form #form></form>)
// @ViewChild('form') form => this will be put in the variable (form)
// @ViewChild('form') form?: ElementRef<HTMLFormElement> => here the type of it is (ElementRef) because the (ViewChild) wraps the selected component with a (ElementRef)
// and the refelement here is holding an element of type <HTMLFormElement> (could be anything else)
// (Signal way) (function version) => private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

// ngAfterViewInit() {} => Is useful here, [[[ because data here (form) is not loaded to the (constructor) nor to (ngOnInit() {}) ]]]

//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________

// #####################
// ### @ContentChild ### (with ng-content)
// #####################
// ***** Content wrapped in the the other component
// (I can add multiple refs on the same element)
// (I can give the same ref name to multiple elements)
// (#input) is given to the (input) and (textarea)

// ## Content in ather component
//   <app-control label="Title">
//       <input name="title" id="title" #titleInput #input />
//   </app-control>
//   <app-control label="Request">
//       <textarea name="request" id="request" rows="3" #textInput #input></textarea>
//   </app-control>

// @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

// Here I used (ContentChild) not (ContentChildren), because in each instance of that component there is only one content input (((or))) textarea

// ngAfterContentInit() {} => Is useful here, [[[ because data here (form) is not loaded to the (constructor) nor to (ngOnInit() {}) ]]]

//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________

//   constructor() {
//     afterRender(() => {
//       console.log('afterRender');
//     }); // *****Runs after  any change in any where in the app

//     afterNextRender(() => {
//       console.log('afterNextRender');
//     }); // *****Runs after any (next) change in any where in the app
//   }

//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________

// I used (effect()) because when I Use signal it does not give a subscription to the (.ts file), so if the signal changes the (.ts file) can not listen to that
// The (effect()) gives a subsccription to the .ts file to listen the changes of the signal
// **** Signal outmatically gives a subscription to the template

//   constructor() {
//     effect(() => {
//       console.log(this.currentStatus())
//     })
//   }

//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________

// {{first}} - {{last}} - {{even}} - {{odd}} - {{count}} => These are available by default in (for loop) (they return [true - false], exept {{count}})

//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________

// signal => I can use (.set() - .update())
// .update() is exactly like the [.set() + can get the old value of the signal inside it] [ex:- .update((oldValue) => {})]

//***** Update sertain objects in an array
//  onCloseTicket(id: string) {
//     this.tickets = this.tickets.map((ticket) => {
//       if (ticket.id === id) {
//         return { ...ticket, status: 'closed' };
//       }

//       return ticket;
//     });
//  }

//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________

// data = input.required<Ticket>(); => Here on the (input() - output()) there are 2 configuarations you can add.
// data = input.required<Ticket>({alias: "ticket"}); [not recomended] => 1)outside the component (use "ticket") 2)inside the component (use "data")
// data = input.required<Ticket>({transform: (resivedValue) => {}}); => (on input() only) Make some changes and transformation on the accepted values.

//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________
