import { SidebarData } from './sidebar.model';
import { animate, style, transition, trigger } from '@angular/animations';

export const SIDEBAR_ANIMATIONS = [
  trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('350ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('350ms', style({ opacity: 0 })),
    ]),
  ]),
];

export const SIDEBAR_DATA: SidebarData = {
  links: [
    {
      label: 'Home',
      routerLink: '/home',
      icon: 'fa-solid fa-house-user',
    },
    {
      label: 'Home',
      routerLink: '/home2',
      icon: 'fa-solid fa-house-user',
    },
    {
      label: 'Home',
      routerLink: '/home3',
      icon: 'fa-solid fa-house-user',
    },
    {
      label: 'Home',
      routerLink: '/home4',
      icon: 'fa-solid fa-house-user',
    },
  ],
};
