import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// import type => Make sure that the import is a ( type or interface ).

// ? , !
// ? => {{ Might }} have a value of that shape.
// ! => Will {{ always }} have a value of that shape.

// (ngModel) => Do not use () after [signal var] with ngmodel, because ngModel handle that properly.

// initialInvestment: +this.enteredInitialInvestment, ====> If I typed this .emit(...) so {I send the signal itself} not it's value.
// So I should type  {{{ initialInvestment: +this.enteredInitialInvestment() }}} with it's {{ () }}.

// ----------------Signals ---------------------
// ----------------Signals ---------------------

// enteredInitialInvestment = signal<string>('0');
// enteredInitialInvestment = '0';

// resultsData = signal<
//   | {
//       year: number;
//       interest: number;
//       valueEndOfYear: number;
//       annualInvestment: number;
//       totalInterest: number;
//       totalAmountInvested: number;
//     }[]
//   | undefined
// >(undefined);
//
// resultsData?: {
//   year: number;
//   interest: number;
//   valueEndOfYear: number;
//   annualInvestment: number;
//   totalInterest: number;
//   totalAmountInvested: number;
// }[];

// @Input() results?: {
//   year: number;
//   interest: number;
//   valueEndOfYear: number;
//   annualInvestment: number;
//   totalInterest: number;
//   totalAmountInvested: number;
// }[];
//
// results = input<
//   | {
//       year: number;
//       interest: number;
//       valueEndOfYear: number;
//       annualInvestment: number;
//       totalInterest: number;
//       totalAmountInvested: number;
//     }[]
// >();

// @Output() calculate = new EventEmitter<InvestmentInput>();
// calculate = output<InvestmentInput>();

// onSubmit() {
//   this.calculate.emit({
//*************************************************************************************************
//    initialInvestment: +this.enteredInitialInvestment, ====> If I typed this so {I send the signal itself} not it's value
//*************************************************************************************************
//     initialInvestment: +this.enteredInitialInvestment(),
//     annualInvestment: +this.enteredAnnualInvestment(),
//     expectedReturn: +this.enteredExpectedReturn(),
//     duration: +this.enteredDuration(),
//   });
// }
