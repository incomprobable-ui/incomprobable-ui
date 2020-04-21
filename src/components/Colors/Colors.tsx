import { InstitutionalColors, PrimaryColors, SecondaryColors, NeutralColors } from '../../types';

const Institutional: InstitutionalColors = {
  Blue: {
    c50: '#e3ecff',
    c100: '#bed0e5',
    c200: '#9db0c9',
    c300: '#7b91ae',
    c400: '#627a99',
    c500: '#486586',
    c600: '#3b5775',
    c700: '#2c4560',
    c800: '#1e334a',
    c900: '#0B2033',
  },
  Orange: {
    c50: '#fff7e0',
    c100: '#ffe9b0',
    c200: '#ffda7d',
    c300: '#ffcd47',
    c400: '#ffc11b',
    c500: '#ffb700',
    c600: '#ffa900',
    c700: '#ff9600',
    c800: '#ff8400',
    c900: '#FF6300',
  }
}

const Primary: PrimaryColors = {
  Milhouse: {
    c100: '#e3f1f8',
    c200: '#bbdcef',
    c300: '#93c6e4',
    c400: '#6dafd9',
    c500: '#2c91d1',
    c600: '#2284c4',
  },
  Mario: {
    c100: '#ffcbd2',
    c200: '#f69799',
    c300: '#ee6d71',
    c400: '#ff3030',
    c500: '#de123a',
    c600: '#d10322',
  },
  Luigi: {
    c100: '#c0e6c8',
    c200: '#97d5a5',
    c300: '#6ac682',
    c400: '#07ad4b',
    c500: '#009e43',
    c600: '#007b2c',
  },
  Randy: {
    c100: '#e0f8f8',
    c200: '#b2edee',
    c300: '#80e1e4',
    c400: '#1dcad3',
    c500: '#00b0bc',
    c600: '#00878b',
  },
  Kirby: {
    c100: '#fde5ed',
    c200: '#fbbed2',
    c300: '#f995b4',
    c400: '#f44c7e',
    c500: '#e12f65',
    c600: '#b5265c',
  },
}

export const Secondary: SecondaryColors = {
  c1: '#6db8ff',
  c2: '#ffb74d',
  c3: '#e57373',
  c4: '#aed581',
  c5: '#9575cd',
  c6: '#78afd1',
  c7: '#f06292',
  c8: '#4dcfe1',
  c9: '#ba68c8',
  c10: '#ff8a65',
  c11: '#50c4f7',
  c12: '#81c784',
  c13: '#d07f83',
  c14: '#80deea',
  c15: '#7986cb',
  c16: '#f48fb0',
  c17: '#ffaa91',
  c18: '#c5e1a5',
  c19: '#4db6ac',
  c20: '#e69deb',
}

export const Neutral: NeutralColors = {
  c0: '#ffffff',
  c300: '#eeeeee',
  c400: '#e3e3e3',
  c500: '#d1d1d1',
  c600: '#acacac',
  c700: '#8b8b8b',
  c800: '#646464',
  c900: '#333333',
  c1000: '#000000',
}

export default { Institutional, Primary, Secondary, Neutral };