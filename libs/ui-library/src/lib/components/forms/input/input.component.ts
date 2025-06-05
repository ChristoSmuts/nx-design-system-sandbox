import { Component, Input, forwardRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { PasswordModule } from "primeng/password";
import { InputMaskModule } from "primeng/inputmask";
import { DatePickerModule } from "primeng/datepicker";
import { 
  ControlValueAccessor, 
  NG_VALUE_ACCESSOR, 
  FormsModule, 
  ReactiveFormsModule
} from "@angular/forms";

@Component({
  selector: "lib-input",
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    InputNumberModule,
    PasswordModule,
    InputMaskModule,
    DatePickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  template: `
    @switch (true) {
      @case (type !== 'number' && type !== 'password' && type !== 'date' && !mask) {
        <!-- Default text input when no special type or mask is specified -->
        <input
          [type]="type"
          [id]="id"
          [placeholder]="placeholder"
          [variant]="variant"
          [fluid]="fluid"
          [attr.disabled]="isDisabled ? 'disabled' : undefined"
          [pSize]="size"
          [attr.aria-label]="ariaLabel"
          [attr.aria-labelledby]="ariaLabelledBy"
          [ngModel]="value"
          (ngModelChange)="onInputChange($event)"
          (blur)="onTouched()"
          [class.ng-touched]="isTouched"
          [class]="styleClass"
          pInputText
        />
      }
      @case (type === 'number') {
        <!-- Number input -->
        <p-inputNumber
          [inputId]="id"
          [placeholder]="placeholder"
          [variant]="variant"
          [fluid]="fluid"
          [disabled]="isDisabled"
          [size]="size"
          [ariaLabel]="ariaLabel"
          [ariaLabelledBy]="ariaLabelledBy"
          [ngModel]="value"
          (ngModelChange)="onInputChange($event)"
          (onBlur)="onTouched()"
          [class.ng-touched]="isTouched"
          [styleClass]="styleClass"
        />
      }
      @case (type === 'password') {
        <!-- Password input -->
        <p-password
          [feedback]="feedback"
          [inputId]="id"
          [placeholder]="placeholder"
          [variant]="variant"
          [fluid]="fluid"
          [disabled]="isDisabled"
          [size]="size"
          [ariaLabel]="ariaLabel"
          [ariaLabelledBy]="ariaLabelledBy"
          [ngModel]="value"
          (ngModelChange)="onInputChange($event)"
          (onBlur)="onTouched()"
          [class.ng-touched]="isTouched"
          [styleClass]="styleClass"
        />
      }
      @case (type === 'date') {
        <!-- Date picker -->
        <p-datepicker
          [inputId]="id"
          [placeholder]="placeholder"
          [variant]="variant"
          [fluid]="fluid"
          [disabled]="isDisabled"
          [size]="size"
          [ariaLabel]="ariaLabel"
          [ariaLabelledBy]="ariaLabelledBy"
          [ngModel]="value"
          (ngModelChange)="onInputChange($event)"
          (onBlur)="onTouched()"
          [class.ng-touched]="isTouched"
          [styleClass]="styleClass"
        />
      }
      @case (!!mask) {
        <!-- Input with mask -->
        <p-inputMask
          [type]="type"
          [mask]="mask"
          [inputId]="id"
          [placeholder]="placeholder"
          [variant]="variant"
          [disabled]="isDisabled"
          [size]="size"
          [ariaLabel]="ariaLabel"
          [ariaLabelledBy]="ariaLabelledBy"
          [ngModel]="value"
          (ngModelChange)="onInputChange($event)"
          (onBlur)="onTouched()"
          [class.ng-touched]="isTouched"
          [styleClass]="styleClass"
        />
      }
    }
  `,
})
export class InputComponent implements ControlValueAccessor {
  @Input() id?: string;
  @Input() type = "text";
  @Input() placeholder?: string;
  @Input() feedback?: boolean;
  @Input() variant: "filled" | "outlined" = "outlined";
  @Input() fluid?: boolean = false;
  @Input() disabled?: boolean = false;
  @Input() size!: "small" | "large";
  @Input() mask?: string;
  @Input() ariaLabel?: string;
  @Input() ariaLabelledBy?: string;
  @Input() styleClass?: string;

  // Internal value
  private _value: string | number | Date | null = '';
  private _isDisabled = false;
  private _isTouched = false;

  // These empty functions will be overwritten by the form control
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onChange: (value: string | number | Date | null) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onTouched: () => void = () => {};

  // Getters for template
  get value(): string | number | Date | null {
    return this._value;
  }

  get isDisabled(): boolean {
    return this._isDisabled || !!this.disabled;
  }

  get isInvalid(): boolean {
    // Since we removed NgControl injection, this will be handled by CSS classes
    // that Angular automatically applies to invalid form controls
    return false;
  }

  get isTouched(): boolean {
    return this._isTouched;
  }

  // ControlValueAccessor methods
  writeValue(value: string | number | Date | null): void {
    this._value = value ?? '';
  }

  registerOnChange(fn: (value: string | number | Date | null) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }

  // Event handlers
  onInputChange(value: string | number | Date | null): void {
    this._value = value;
    this._onChange(value);
  }

  onTouched(): void {
    this._isTouched = true;
    this._onTouched();
  }
}