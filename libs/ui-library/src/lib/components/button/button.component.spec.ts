import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { ButtonModule } from 'primeng/button';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonModule],
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label', () => {
    component.label = 'Test Button';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain('Test Button');
  });

  it('should apply severity class', () => {
    component.severity = 'danger';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.className).toMatch(/p-button-danger/);
  });

  it('should render icon when provided', () => {
    component.icon = 'pi pi-check';
    fixture.detectChanges();
    const icon = fixture.nativeElement.querySelector('.pi.pi-check');
    expect(icon).toBeTruthy();
  });

  it('should set icon position to right when specified', () => {
    component.icon = 'pi pi-check';
    component.iconPos = 'right';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.className).toMatch(/p-button-icon-right/);
  });

  it('should apply custom className', () => {
    component.className = 'my-custom-class';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.className).toMatch(/my-custom-class/);
  });
});
