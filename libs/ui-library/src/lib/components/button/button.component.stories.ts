import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  argTypes: {
    label: { control: 'text' },
    severity: { control: 'select', options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'contrast'] },
    icon: { control: 'text' },
    iconPos: { control: 'radio', options: ['left', 'right'] },
  },
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    severity: 'primary',
    icon: 'pi pi-check',
    iconPos: 'right'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Primary/gi)).toBeTruthy();
  },
};
