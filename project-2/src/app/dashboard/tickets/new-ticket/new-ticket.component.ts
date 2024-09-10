import {
  afterNextRender,
  afterRender,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  add = output<{ title: string; text: string }>();

  enteredTitle = '';
  enteredText = '';

  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit() {
    console.log('OnInit');
    console.log(this.form().nativeElement); // undefined
  }

  ngAfterViewInit() {
    console.log('Afetr View Init');
    console.log(this.form().nativeElement); // Correct
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      text: this.enteredText,
    });

    this.enteredTitle = '';
    this.enteredText = '';

    // this.form().nativeElement.reset();
  }

  // _____________________________________________________________________
  // _____________________________________________________________________

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    }); // Runs after  any change in any where in the app

    afterNextRender(() => {
      console.log('afterNextRender');
    }); // Runs after any (next) change in any where in the app
  }
}
