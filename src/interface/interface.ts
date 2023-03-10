export interface Props {
  classOne: string;
  classTwo: string;
  classThree: string;
  renderImages: boolean;
  imageDektop: string;
  imageMobile: string;
  title: string;
  description: string;
}
export interface PropsBg {
  imageDesktop: string;
  imageMobile: string;
  title: string;
  description: string;
}
export interface PropsCard {
  name: string;
  testimonial: string;
  job: string;
  image: string;
}
export interface PropsImages {
  imageDesktop: string;
  imageMobile: string;
}
export interface PropsMenu {
  switchMenu: boolean;
}
export interface StylesMenuInterface {
  height?: string;
  transitionTimingFunction?: string;
}
