import Shopify from '../../assets/images/shopify.svg';
import Coinbase from '../../assets/images/coinbase.svg';
import Dropbox from '../../assets/images/dropbox.svg';
import Marvel from '../../assets/images/marvel.svg';
import Automatic from '../../assets/images/automatic.svg';

import VideoIcon from '../../assets/images/video-icon.svg';
import VoiceIcon from '../../assets/images/voice-icon.svg';
import SecurityIcon from '../../assets/images/security-icon.svg';
import CalendarIcon from '../../assets/images/calendar-icon.svg';

export const SocialProofs = [
  {
    name: 'Shopify logo',
    image: `${Shopify}`,
  },

  {
    name: 'Coinbase logo',
    image: `${Coinbase}`,
  },

  {
    name: 'Dropbos logo',
    image: `${Dropbox}`,
  },
  {
    name: 'Marvel logo',
    image: `${Marvel}`,
  },
  {
    name: 'Automatic logo',
    image: `${Automatic}`,
  },
];

export const whyLectieRowOneOptions = [
  {
    id: 1,
    image: `${VideoIcon}`,
    name: 'Crystal-clear HD video',
    content:
      'No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.',
  },

  {
    id: 2,
    image: `${CalendarIcon}`,
    name: 'Scheduling made easy',
    content: `Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.`,
  },
];

export const whyLectieRowTwoOptions = [
  {
    id: 1,
    image: `${VoiceIcon}`,
    name: 'Noise-canceling audio',
    content:
      'Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.',
  },
  {
    id: 2,
    image: `${SecurityIcon}`,
    name: 'Bank-grade security',
    content:
      'Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.',
  },
];
