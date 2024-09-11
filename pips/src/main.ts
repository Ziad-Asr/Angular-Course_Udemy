import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// Read the official dosc for that section, and search for anything related to that section there.

//| number:'1.1-2' => (min) number of (degits).(min) number of (decimals)-(max) number of (decimals)

// The pipe is only rerendered when 1) initialization 2) input value changes(cashing the input value)
//*** That will make some problems with ((arrays)),
// if only values inside the array changes the pipe will not be used again, because the (array referance in the memory) is the same, so according to Javascript the array did not change
// (due to cashing of the input value)

// #######################################################
// ##### Solution1 => Generate a new array each time #####
// #######################################################
// onReset(index: number) {
//   const newTemps = [...this.historicTemperatures];
//   newTemps[index] = 18;
//   this.historicTemperatures = newTemps;
// }

// ####################################
// ##### Solution2 => pure: false #####
// ####################################
// This will disapple the cashong property in the pipe

// Keep in mind that (pips) have limitations, and it could not be the best solution for many cases (like sorting temperature example in this app)

// ### A better solution for this limitation here ###
// constructor() {
//   this.historicTemperatures.sort((a, b) => (a > b ? 1 : -1));
// }
