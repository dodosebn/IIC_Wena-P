import { StaticImageData } from "next/image";

export type MetricCardProps = {
  id: string;
  title: string;
  value: string | number;
  icon: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  description: string;
  color: string;
};

export interface SlideModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: StaticImageData[]; 
  initialIndex: number;
  showSocialLinks?: boolean;
}
export type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
  setActiveIndex: (index: number) => void;
  activeIndex: number;
};

export interface BtnBgProps {
  // children: ReactNode;
  btnName: string;
  btnpath: string;
}
export interface ImageSliderProps {
  images: StaticImageData[]; 
  showSocialLinks?: boolean;
}
export type UseInfoProps = {
  headerfirstSpan?: string;
  headerfirstH1?: string;
  headerfirstP?: string;
  photoCite?: string;
  imgforPhotocite1?: StaticImageData;
  imgforphotocite2?: StaticImageData;
  describp1?: string;
  describp2?: string;
  describp3?: string;
  Slider?: React.FC; 
};

export interface NavbarState {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;

  activeIndex: number;
  setActiveIndex: (value: number) => void;
}

export interface NavBarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  pageTitle: string;
}

export interface MobileNavProps {
  toggleSidebar: () => void;
  handleMenu: () => void;
  showTitleOnly: boolean;
  handleMenuItemClick: (path: string) => void;
}

export interface SideProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
