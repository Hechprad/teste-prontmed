import { DefaultTheme as StyledDefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string }
    fontTypes: FontTypesInterface
    fontFamily: string
    gutter: number
    shadows: { [key in keyof typeof shadows]: string }
    spacing: (px: number) => number
  }
}

export const themeColors = {
  black: '#0F0F0F',
  blue1: '#357cad',
  background3: '#3f83b1',
  background4: '#4989b5',
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
    '0px 0px 1px 1px rgba(53, 124, 173, 0.02), 0px 6px 14px 2px rgba(53, 124, 173, 0.06)',
}

interface FontTypesInterface {
  [key: string]: {
    fontFamily: string
    fontSize: number
    fontWeight?: number
    lineHeight: string
  }
}

export const fontTypes: FontTypesInterface = {
  heading: {
    fontFamily: 'Nunito Sans Bold',
    fontSize: 24,
    lineHeight: '33.6px',
  },
  subtitle: {
    fontFamily: 'Nunito Sans Bold',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '22.4px',
  },
  body: {
    fontFamily: 'Nunito Sans Regular',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '22.4px',
  },
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
