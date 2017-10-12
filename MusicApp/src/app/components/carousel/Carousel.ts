export class Carousel {
  grid: Grid;
  slide?: number;
  speed?: number;
  interval?: number;
  animation?: Animate;
  point?: boolean;
  type?: string;
  load?: number;
  custom?: Custom;
  loop?: boolean;
  easing: string;
  touch?: boolean;
  dynamicLength: boolean;
}

export class Grid {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  all: number;
}

export type Custom = 'banner';
export type Animate = 'lazy';
