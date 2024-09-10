import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  @Input({ required: true }) size!: {
    width: string;
    height: string;
  };

  @Output() sizeChange = new EventEmitter<{
    width: string;
    height: string;
  }>(); // Must be name like the (input name + 'change')

  onReset() {
    this.sizeChange.emit({
      width: '100',
      height: '100',
    });
  }

  // New way of custom 2 way binding (> 17.2)
  // size = model.required<{width: string, height: string}>()
  // onReset() {
  //   this.size.set({
  //     width: '100',
  //     height: '100',
  //   });
  // }
}
