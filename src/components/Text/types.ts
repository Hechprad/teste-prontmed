import { themeColors, fontTypes } from 'styles/theme'

export interface TextProps {
  color?: keyof typeof themeColors
  bold?: boolean
  textAlign?: 'left' | 'center' | 'right' | 'unset'
  type?: keyof typeof fontTypes
}
