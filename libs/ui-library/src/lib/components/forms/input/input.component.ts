import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule, InputTextModule],
  template: `
    <input 
      [type]="type"
      [class]="class"
      [placeholder]="placeholder"
      pInputText      
    />
  `,
})
export class InputComponent {
  @Input() type = 'text';
  @Input() class?: string;
  @Input() placeholder?: string;
}