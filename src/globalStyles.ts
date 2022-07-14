import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle(() => ({
  '#root': {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
  },
  ':root': {
    fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    colorScheme: 'light dark',
    color: 'rgba(255, 255, 255, 0.87)',
    backgroundColor: '#242424',
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-text-size-adjust': '100%',
  },
  body: {
    margin: 0,
    display: 'flex',
    placeItems: 'center',
    minWidth: '320px',
    minHeight: '100vh',
  },
}));
