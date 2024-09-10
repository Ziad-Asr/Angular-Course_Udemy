import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

/*
  constructor() {
    // does not resive all data in the page initially (ex:- input, output)
  }

  ngOnInit(): void {
    // Called on initialization only

    // greate for sending http requests
  }

  ngOnChanges(changes: SimpleChanges): void) {
    // Trigger changes in (((input - output)))
    // Called on each change made

    ##########################
    ## console.log(changes) ##
    ##########################
  }

  ngDoCheck(): void {
    // 1) Called afetr initialization , 2) after each change in (input - output)
    // after (OnChanges) and (OnInit)
    // Used if on runtime some changes igonred , so now I should check if they have done.
    //******** Have some performance issues.

    // Angular runs it if (any change) in (any part of the entire app) made. (like zone.js)
  }

  ngAfterViewInit(): void {
    // Make sure that the current component and it's children views get initialized
    // Called {one time} on (after) views initialization of current component and it's children
    // view => References to the dom (behined the scences)

    // ###################################################
    // ### Called once the template (html) initialized ###
    // ###################################################
  }

  ngAfterViewChecked(): void {
    // Called 1) (one time) after (ngAfterViewInit)
    // 2) Then called each time after (ngAfterContentChecked)

    // #######################################################
    // ### Called when the content in the template changes ###
    // #######################################################
    
    // called with angular change mechanism
  }

    ngAfterContentInit(): void {
    // Called only (one time) after the first time (DoCheck) called.

    // Differce from (ngAfterViewInit()), because it runs after 1)template (views) changes, **2)ng-content changes
    // Runs when any (ng-content) changes

    // ####################################################################
    // ### Called once the 1) template (html) 2) ng-content initialized ###
    // ####################################################################
  }

  ngAfterContentChecked(): void {
    // usually used with {Content projection (ng-content)}.
    // 1) Called first time after (ngAfterContentInit)
    // 2) Then called each time after (ngDoCheck)

    // ################################################################################
    // ### Called when the content in the 1) template changes 2) ng-content changes ###
    // ################################################################################

    // called with angular change mechanism
  }

  ngOnDestroy() {
    // Called only when theis component removed from the screen (view).
    // used to avoid memoty leack
    // Used because the grabage collector may did not remove all garbage.
    // ex: remove timers, remove subscriptions, ....
  }

  // ##################################################################################
  // Any thing from here called more than (one time) => {{{Has performance issues}}} ##
  // ##################################################################################
*/

/*
    1) constructor
    2) ngOnChanges
    3) ngOnInit
    4) ngDoCheck
    5) ngAfterContentInit
    6) ngAfterViewChecked
    7) ngAfterViewInit
    8) ngAfterViewChecked

    *** ngOnDestroy
*/
