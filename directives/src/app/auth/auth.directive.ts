import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<'user' | 'admin' | 'guest'>({ alias: 'appAuth' });
  private authService = inject(AuthService);

  private templateRef = inject(TemplateRef);
  // <ng-template> that wraps the content (added by angular) = (*)
  // It's value contains the targeted html content  (<p>Only admins can see</p>)

  private viewContainerRef = inject(ViewContainerRef);
  // A ref in DOM where the (templateRef) is used.

  // I use both (templateRef) and (viewContainerRef) to tell angular (where to render what)

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        // <ng-template> is not rendered intialy, we show gie it order to render and be showen on the screen
        // This part gives acces for <ng-template> to render it's content on the screen
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
