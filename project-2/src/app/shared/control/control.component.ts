import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  inject,
  input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements OnInit, AfterContentInit {
  label = input.required<string>();

  // @HostBinding('class') className = 'control';

  // @HostListener('click') onClickField() {
  //   console.log('clicked');
  // }

  private element = inject(ElementRef); // this reterns a (referance) to the host hement here (app-control)

  // _____________________________________________________________________
  // _____________________________________________________________________

  // ***** Content wrapped in the the other component
  // (I can add multiple refs on the same element)
  // (I can give the same ref name to multiple elements)
  // (#input) is given to the (input) and (textarea)

  // <app-control label="Title">
  //       <input name="title" id="title" #titleInput #input />
  //   </app-control>
  //   <app-control label="Request">
  //       <textarea name="request" id="request" rows="3" #textInput #input></textarea>
  //   </app-control>

  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >; // Here I used (ContentChild) not (ContentChildren), because in each instance of that component there is only one content input (((or))) textarea

  // _____________________________________________________________________
  // _____________________________________________________________________

  onClick() {
    console.log('clicked');

    console.log(this.element);

    console.log(this.control);
  }

  // _____________________________________________________________________
  // _____________________________________________________________________

  // *****Importantttttttttttttttttttttttttt

  ngOnInit() {
    console.log('OnInit');
    console.log(this.control?.nativeElement); // undefined
  }

  ngAfterContentInit() {
    console.log('Afetr View Init');
    console.log(this.control?.nativeElement); // Correct
  }
}
