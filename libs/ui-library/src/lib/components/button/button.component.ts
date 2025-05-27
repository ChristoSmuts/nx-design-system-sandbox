import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, ButtonProps, ButtonSeverity } from 'primeng/button';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <p-button
      [label]="label"
      [icon]="icon"
      [iconPos]="iconPos ?? 'left'"
      [severity]="severity"
      [class]="className"
    ></p-button>
  `,
})
export class ButtonComponent {
  @Input() label: ButtonProps['label'];
  @Input() icon: ButtonProps['icon'];
  @Input() severity: ButtonSeverity = null;
  @Input() className: ButtonProps['styleClass'];
  @Input() iconPos: ButtonProps['iconPos'];
}