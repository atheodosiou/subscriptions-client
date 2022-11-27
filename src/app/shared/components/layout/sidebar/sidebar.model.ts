export interface SidebarLink {
  routerLink?: string;
  icon?: string;
  label?: string;
}

export interface SidebarData {
  links: SidebarLink[];
}

export interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
