import { Theme } from '../features/themes/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
