# Nx Design System Sandbox

A modern monorepo for building, testing, and customizing a reusable UI component library with Angular, Nx, and PrimeNG.

## Features
- **UI Library**: Develop reusable Angular components in `libs/ui-library`.
- **Theming**: Customize design tokens and themes using PrimeNG's theme preset system.
- **Playground App**: Preview and test your components in `apps/ui-playground`.

---

## Getting Started

### 1. Install dependencies
```sh
npm install
```

### 2. Run the Playground app
```sh
npx nx serve ui-playground
```
The app will be available at [http://localhost:4200](http://localhost:4200).

---

## Using the UI Library

The UI library is published as `@nx-design-system-sandbox/ui-library` and exposes Angular components (e.g., Button, Input).

### Import Components
```typescript
import { ButtonComponent, InputComponent } from '@nx-design-system-sandbox/ui-library';
```
Add them to your component's imports:
```typescript
@Component({
  imports: [ButtonComponent, InputComponent],
  // ...
})
```

### Provide the UI Library (with theme)
```typescript
import { providerUiLibrary } from '@nx-design-system-sandbox/ui-library';

export const appConfig: ApplicationConfig = {
  providers: [
    ...providerUiLibrary(), // use default theme
  ],
};
```

---

## Customizing Design Tokens (PrimeNG Theme Preset)

The UI library uses PrimeNG's theme preset system for flexible design token customization. The default theme is based on Aura, but you can override tokens for your app.

### How to Customize

1. **Pass a custom theme preset to `providerUiLibrary`:**
```typescript
import { providerUiLibrary } from '@nx-design-system-sandbox/ui-library';
import { Preset } from '@primeng/themes/types';

const customTheme: Preset = {
  semantic: {
    primaryColor: '#007bff',
    borderRadius: '8px',
  },
  components: {
    button: {
      background: '#007bff',
      color: '#fff',
    },
  },
  // ...extend or override other tokens as needed
};

export const appConfig: ApplicationConfig = {
  providers: [
    ...providerUiLibrary(customTheme),
  ],
};
```

2. **Reference**
   - See `libs/ui-library/src/lib/theme/library.theme.ts` for the base theme setup.
   - Refer to [PrimeNG Theme Docs](https://primeng.org/theming/#presets) for available tokens and options.

3. **Live Reload**
   - Changes to theme tokens will reflect immediately in the running app (when using `nx serve`).

---

## Project Structure
- `apps/ui-playground` — Demo Angular app consuming the UI library
- `libs/ui-library` — Angular component library and theme setup

---

## Testing
```sh
npx nx test ui-library
```

---

## Storybook: View UI Library Components

Storybook provides an interactive environment to browse, test, and develop the UI components in isolation—without running an app.

### Running Storybook

To start Storybook for the UI library, run:

```sh
npm run ui:storybook
```

This will launch Storybook at [http://localhost:4400](http://localhost:4400), where you can explore all available components, view their states, and interact with their props/inputs.

### Why Use Storybook?
- **Preview components in isolation**: No need to run an app.
- **Explore all component variants**: See all stories and states.
- **Design, develop, and test faster**: Great for UI development, documentation, and QA.

### Where are the stories?
Stories for each component live alongside the component source in files named `*.stories.ts` within `libs/ui-library/src/lib/components/`.

### Customizing Storybook
Storybook's configuration for the UI library is found in:
- `libs/ui-library/.storybook/`

You can customize addons, theming, and more by editing these files. See the [Storybook documentation](https://storybook.js.org/docs/angular/get-started/introduction) for advanced usage.

---