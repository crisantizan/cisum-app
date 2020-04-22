enum media {
  sm = 576,
  md = 768,
  lg = 1024,
  xl = 1280,
}

type ViewportMF = 'sm' | 'md' | 'lg' | 'xl';
type Viewport = 'xs' | ViewportMF;

/** generate css media query */
export function mediaQueryMf(size: ViewportMF) {
  switch (size) {
    case 'sm':
      return `(min-width: ${media.sm}px)`;

    case 'md':
      return `(min-width: ${media.md}px)`;

    case 'lg':
      return `(min-width: ${media.lg}px)`;

    default:
      return `(min-width: ${media.xl}px)`;
  }
}

/** generate css media query */
export function mediaQuery(size: Viewport) {
  switch (size) {
    case 'xs':
      return `(max-width: ${media.sm - 1}px)`;
    case 'sm':
      return `(min-width: ${media.sm}px) and (max-width: ${media.md - 1}px)`;

    case 'md':
      return `(min-width: ${media.md}px) and (max-width: ${media.lg - 1}px)`;

    case 'lg':
      return `(min-width: ${media.lg}px) and (max-width: ${media.xl - 1}px)`;

    default:
      return `(min-width: ${media.xl}px)`;
  }
}
