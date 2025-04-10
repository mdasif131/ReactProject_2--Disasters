import React from 'react'
import { Blizzard } from '../ReuseComponents/Blizzard';
import { Tree } from './IconInfo';

export const navItems = [
  {
    label: 'Dashboard',
    link: '/',

  },
  {
    label: 'Incidents',
    link: '/incident',

  },
  {
    label: 'Locations',
    link: '/locations',
  },
  {
    label: 'Activities',
    link: '#',
  },
  {
    label: 'Documents ',
    link: '#',
  },
  {
    label: 'Cypher AI',
    link: '#',
  },
];
export const navItemsArray = [
  { label: 'Dashboard', des: ' Welcome back', buttonText: 'Cypher AI' },
  { label: 'Incidents', des: ' Welcome back', buttonText: '+ New Incident' },
  {
    label: 'DR-4699 March 2023 Severe Storms',
    img: <Tree />,
    des: 'Incidents - DR-4699 March 2023 Severe Storms ',
    buttonText: '+ New Location',
  },
];

export const ImageCardInfo = [
  {
    image: '/imageCard1.svg',
    blizzard: <Blizzard />,
    title: 'Whitechapel Rd.',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
  {
    image: '/imageCard2.svg',
    blizzard: <Blizzard />,
    title: 'Whitechapel Rd.',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
  {
    image: '/imageCard3.svg',
    blizzard: <Blizzard />,
    title: 'Tulare County',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
  {
    image: '/imageCard4.svg',
    blizzard: <Blizzard />,
    title: 'Tulare County',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
  {
    image: '/imageCard5.png',
    blizzard: <Blizzard />,
    title: 'Tulare County',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
  {
    image: '/imageCard6.svg',
    blizzard: <Blizzard />,
    title: 'Tulare County',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
];