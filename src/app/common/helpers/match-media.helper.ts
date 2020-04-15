enum media {
  sm = 576,
  md = 768,
  lg = 1024,
  xl = 1280,
}

type Viewport = 'sm' | 'md' | 'lg' | 'xl';

/** generate css media query */
export function mediaQuery(size: Viewport) {
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
