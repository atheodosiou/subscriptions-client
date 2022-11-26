export interface SidebarLink {
  routerLink?: string;
  icon?: string;
  label?: string;
}

export interface SidebarData {
  links: SidebarLink[];
}

export interface SidebarToggle {
  screenWidth: number;
  collapsed: boolean;
}
