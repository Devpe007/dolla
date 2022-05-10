import svgOne from '../../images/svg-1.svg';
import svgTwo from '../../images/svg-2.svg';
import svgThree from '../../images/svg-3.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description: 'Get acess to our exclusive app that allows you to send unlimited transactions without getting charged any fess.',
  buttonLabel: 'Get started',
  imgStart: false,
  img: svgOne,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Ulimited Access',
  headline: 'Login to your account at any time',
  description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: svgTwo,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description: 'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you`re ready to go.',
  buttonLabel: 'Start now',
  imgStart: false,
  img: svgThree,
  alt: 'Datas',
  dark: false,
  primary: false,
  darkText: true,
};
