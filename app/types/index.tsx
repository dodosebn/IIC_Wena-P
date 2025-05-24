import { StaticImageData } from "next/image";

export interface SlideModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: StaticImageData[]; 
  initialIndex: number;
  showSocialLinks?: boolean;
}


export interface ImageSliderProps {
  images: StaticImageData[]; 
  showSocialLinks?: boolean;
}
export type UseInfoProps = {
  headerfirstSpan: string;
  headerfirstH1: string;
  headerfirstP: string;
  photoCite: string;
  imgforPhotocite1: StaticImageData;
  imgforphotocite2: StaticImageData;
  describp1: string;
  describp2: string;
  describp3: string;
  Slider: React.FC; // or FC<SliderProps> if it takes props
};

