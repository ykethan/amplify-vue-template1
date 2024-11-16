module.exports = {
  content: ['./public/**/*.html', './src/**/*.{ts,vue}'],
  theme: {
    colors: {
      purple: {
        20: 'rgba(234, 234, 255, 1)',
        40: 'rgba(211, 213, 255, 1)',
        60: 'rgba(177, 180, 255, 1)',
        80: 'rgba(122, 127, 255, 1)',
        100: 'rgba(88, 68, 255, 1)',
        dark: 'rgba(48, 24, 197, 1)'
      },
      'blue-gray': {
        20: 'rgba(239, 243, 252, 1)',
        40: 'rgba(199, 206, 224, 1)',
        60: 'rgba(128, 139, 168, 1)',
        80: 'rgba(73, 82, 113, 1)',
        100: 'rgba(0, 9, 41, 1)'
      },
      turqoise: 'rgba(0, 231, 231, 1)',
      white: 'rgba(255, 255, 255, 1)',
      black: 'rgba(0, 0, 0, 1)',
      'red-bright': 'rgba(255, 0, 0, 1)'
    },
    fontFamily: {
      roboto: ['Roboto Flex', 'sans-serif'],
      grotesk: ['Space Grotesk', 'san-serif']
    },
    spacing: {
      none: '0px',
      '3xs': '4px',
      '2xs': '8px',
      xs: '12px',
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '40px',
      '2xl': '48px',
      '3xl': '56px',
      '4xl': '64px'
    },
    screens: {
      xs: '0px',
      sm: '456px',
      md: '768px',
      lg: '1024px',
      xl: '1240px',
      '2xl': '1440px',
      '3xl': '2560px'
    },
    extend: {
      borderRadius: {
        none: '0px',
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '48px',
        full: '999px'
      }
    }
  },
  variants: {
    extend: {}
  }
};
