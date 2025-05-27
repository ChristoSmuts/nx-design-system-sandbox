import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { Preset } from '@primeng/themes/types';
import UiLibraryTheme from '../theme/library.theme';

export function providerUiLibrary(theme?: Preset) {
  return [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: { ...UiLibraryTheme, ...theme },
        options: {
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng',
          },
        },
      },
    }),
  ];
}
  