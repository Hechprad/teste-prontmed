import { DefaultTheme as StyledDefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string }
    fontTypes: { [key in keyof typeof fontTypes]: string }
    fontFamily: string
    gutter: number
    shadows: { [key in keyof typeof shadows]: string }
    spacing: (px: number) => number
  }
}

export const themeColors = {
  black: '#0F0F0F',
  blue1: '#4989b5',
  gray1: '#E7E7E7',
  gray2: '#9f9f9f',
  green1: '#12c16c',
  red1: '#F53C3C',
  white: '#FFFFFF',
  success: '#55B046',
  alert: '#FFA800',
  error: '#F31A1A',
}

export const shadows = {
  shadow1:
    '0px 0px 1px 1px rgba(53, 124, 173, 0.2), 0px 6px 14px 2px rgba(53, 124, 173, 0.06)',
}

export const fontTypes = {
  heading: ` font-family: Nunito Sans Bold; font-size: 24; line-height: 33.6px;`,
  body: `font-family: Nunito Sans Regular; font-size: 16; font-weight: 600; line-height: 22.4px;`,
  subtitle: `font-family: Nunito Sans Bold; font-size: 14; font-weight: 700; line-height: 22.4px;`,
}

const theme: StyledDefaultTheme = {
  colors: themeColors,
  fontTypes,
  fontFamily: 'Nunito Sans',
  gutter: 16,
  shadows,
  spacing: (number) => number * 8,
}

export default theme
