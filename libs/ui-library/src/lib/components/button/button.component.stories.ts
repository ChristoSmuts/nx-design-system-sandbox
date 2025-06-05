import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonProps } from 'primeng/button';
import { within } from '@storybook/testing-library';

const meta: Meta<ButtonProps> = {
  component: ButtonComponent,
  title: 'Components/Button',
  argTypes: {
    type: {
      description: 'Specifies the button type attribute.',
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
      defaultValue: { summary: 'button' },
    },
    iconPos: {
      description: 'Position of the icon.',
      options: ['left', 'right', 'top', 'bottom'],
      control: { type: 'select' },
      defaultValue: { summary: 'left' },
    },
    icon: {
      description: 'Icon to display in the button.',
      control: { type: 'text' },
      defaultValue: { summary: 'null' },
    },
    badge: {
      description: 'Value of the badge.',
      control: { type: 'text' },
      defaultValue: { summary: 'null' },
    },
    label: {
      description: 'Text of the button.',
      control: { type: 'text' },
      defaultValue: { summary: 'null' },
    },
    disabled: {
      description: 'When true, disables the button.',
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    loading: {
      description: 'Displays a loading indicator.',
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    loadingIcon: {
      description: 'Icon to display in loading state.',
      control: { type: 'text' },
      defaultValue: { summary: 'null' },
    },
    raised: {
      description: 'Adds a shadow to indicate elevation.',
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    rounded: {
      description: 'Displays a rounded button.',
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    text: {
      description: 'Displays a text button.',
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    severity: {
      description: 'Defines the button style severity.',
      options: ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast'],
      control: { type: 'select' },
      defaultValue: { summary: 'info' },
    },
    outlined: {
      description: 'Displays an outlined button.',
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    link: {
      description: 'Displays a link button.',
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    tabindex: {
      description: 'Index of the element in tabbing order.',
      control: { type: 'number' },
      defaultValue: { summary: 0 },
    },
    size: {
      description: 'Defines the size of the button.',
      options: ['small', 'large'],
      control: { type: 'select' },
      table: {
        type: {
          summary: '"small" | "large"',
        },
      },
      defaultValue: { summary: 'null' },
    },
    style: {
      description: 'Inline style of the element.',
      control: { type: 'object' },
      table: {
        type: {
          summary: '{ [klass: string]: any } | null',
        },
      },
      defaultValue: { summary: 'null' },
    },
    styleClass: {
      description: 'Style class of the element.',
      control: { type: 'text' },
      defaultValue: { summary: 'null' },
    },
    badgeSeverity: {
      description: 'Severity type of the badge.',
      options: ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast'],
      control: { type: 'select' },
      defaultValue: { summary: 'info' },
    },
    ariaLabel: {
      description: 'Defines a string value that labels the button for accessibility.',
      control: { type: 'text' },
      defaultValue: { summary: 'null' },
    },
    autofocus: {
      description: 'When true, the button receives focus on load.',
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    }
  }
};
export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    severity: 'primary',
    size: undefined,
    iconPos: 'left',
    icon: 'pi pi-check',
    disabled: false,
    loading: false,
    loadingIcon: undefined,
    raised: false,
    rounded: false,
    text: false,
    outlined: false,
    link: false,
    tabindex: 0,
    style: undefined,
    styleClass: '',
    badgeSeverity: undefined,
    ariaLabel: 'Primary Button',
    autofocus: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Primary/gi)).toBeTruthy();
  },
};
