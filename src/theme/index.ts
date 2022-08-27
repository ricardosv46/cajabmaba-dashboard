// 1. Import the extendTheme function
import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	primary: {
		50: '#780417',
		100: '#6D0415',
		200: '#630413',
		300: '#5A0411',
		400: '#52040F',
		500: '#A02E2B',
		600: '#30090D',
		700: '#780417',
		800: '#780417'
	},
	second: {
		50: '#fff9dc',
		100: '#fbe7b3',
		200: '#f7d286',
		300: '#f2bb59',
		400: '#eea22a',
		500: '#F0AC42',
		600: '#a57f0a',
		700: '#776205',
		800: '#484000',
		900: '#1d1700'
	}
}

const components: Record<string, ComponentStyleConfig> = {
	Container: {
		baseStyle: {
			maxWidth: '100%'
		}
	}
}

const theme = extendTheme({ colors, components })

export default theme
