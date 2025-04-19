import React from 'react';
import { Blizzard } from '../ReuseComponents/Blizzard';
import { Tree } from './IconInfo';
import {
  DesIcon1,
  DesIcon2,
  DesIcon3,
  DesIcon4,
  DesIcon5,
  DesIcon6,
  DesIcon7,
  DesIcon8,
  DesIcon9,
  DesIcon10,
  DesIcon11,
  DesIcon12,
  DesIcon13,
  DesIcon14,
  DesIcon15,
  DesIcon16,
  DesIcon17,
  DesIcon18,
} from '../Data/IconInfo';

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

export const LocCardInfo = [
  {
    img: '/locImage.png',
    title: 'Whitechapel Rd.',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
  {
    img: '/locImage2.png',
    title: 'Whitechapel Rd.',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
  {
    img: '/locImage3.png',
    title: 'Whitechapel Rd.',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
  {
    img: '/locImage4.png',
    title: 'Whitechapel Rd.',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
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

export const GetStartInfo = [
  {
    img: '/get1.png',
    title: 'What type of incident?',
    des: 'Choose the category that best describes the incident.',
  },
  {
    img: '/get2.png',
    title: 'Tell us about the incident?',
    des: 'Let’s connect the dots and see where to start.',
  },
  {
    img: '/get3.png',
    title: 'Where did the incident occur?',
    des: 'Lorem ipsum dolar sit general sac mascho werho',
  },
];

export const DescribesInfo = [
  { icon: <DesIcon1 size={25} />, iconName: 'Avalanche' },
  { icon: <DesIcon2 />, iconName: 'Biological' },
  { icon: <DesIcon3 />, iconName: 'Blizzard' },
  { icon: <DesIcon4 />, iconName: 'Cold/Freezing' },
  { icon: <DesIcon5 />, iconName: 'Drought' },
  { icon: <DesIcon6 />, iconName: 'Earthquake' },
  { icon: <DesIcon7 />, iconName: 'Flooding' },
  { icon: <DesIcon8 />, iconName: 'Heat Wave' },
  { icon: <DesIcon9 />, iconName: 'Hail' },
  { icon: <DesIcon10 />, iconName: 'Lightning' },
  { icon: <DesIcon11 />, iconName: 'Man Made' },
  { icon: <DesIcon12 />, iconName: 'Mudslide' },
  { icon: <DesIcon13 />, iconName: 'Severe Storm' },
  { icon: <DesIcon14 />, iconName: 'Strong Wind' },
  { icon: <DesIcon15 />, iconName: 'Tornado' },
  { icon: <DesIcon16 />, iconName: 'Tsunami' },
  { icon: <DesIcon17 />, iconName: 'Volcanic Eruption' },
  { icon: <DesIcon18 />, iconName: 'Wildfire' },
];

export const ActiveInfo = [
  {
    img: '/ActDocimg.png',
    title:'Actvity name',
    des: 'Location name • 16.12212, -122.1424',
    price:'$ 1,456,654,00'
  },
  {
    img: '/ActDocimg.png',
    title:'Actvity name',
    des: 'Location name • 16.12212, -122.1424',
    price:'$ 1,456,654,00'
  },
];
export const DocumentInfo = [
  {
    img: '/ActDocimg.png',
    title: 'Document name',
    des: 'Location name • 16.12212, -122.1424',
    price: '$ 1,456,654,00',
  },
  {
    img: '/ActDocimg.png',
    title: 'Document name',
    des: 'Location name • 16.12212, -122.1424',
    price: '$ 1,456,654,00',
  },
];