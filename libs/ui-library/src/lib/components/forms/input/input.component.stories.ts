import type { Meta, StoryObj } from "@storybook/angular";
import { InputComponent } from "./input.component";
import { within } from "@storybook/testing-library";

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: "Components/Input",
  argTypes: {
    type: {
      description: "The type of input field",
      control: "select",
      options: ["text", "number", "email", "tel", "password", "date", "search"],
      table: {
        type: { summary: "string" },
      },
      defaultValue: { summary: "text" },
    },
    id: {
      description: "The ID attribute for the input field",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    placeholder: {
      description: "The placeholder text for the input field",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    feedback: {
      description: "Whether to show feedback",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: false },
    },
    variant: {
      description: "The variant of the input field",
      control: "select",
      options: ["filled", "outlined"],
      table: {
        defaultValue: { summary: "outlined" },
        type: { summary: "string" },
      },
    },
    fluid: {
      description: "Whether the input field is fluid",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: false },
    },
    disabled: {
      description: "Whether the input field is disabled",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: false },
    },
    size: {
      description: "The size of the input field",
      control: "select",
      options: ["small", "large", "normal"],
      table: {
        defaultValue: { summary: "small" },
        type: { summary: "string" },
      },
    },
    ariaLabel: {
      description: "The aria label for the input field",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    ariaLabelledBy: {
      description: "The aria label for the input field",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    mask: {
      description: "The mask for the input field",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    styleClass: {
      description: "The style class for the input field",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
  },
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    type: "text",
    placeholder: "Placeholder",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input works!/gi)).toBeTruthy();
  },
};
