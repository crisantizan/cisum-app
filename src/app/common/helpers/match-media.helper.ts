enum media {
  sm = 576,
  md = 768,
  lg = 1024,
  xl = 1280,
}

type Viewport = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** generate css media query */
export function mediaQuery(size: Viewport) {
  switch (size) {
    case 'xs':
      return `(max-width: ${media.sm}px)`;

    case 'sm':
      return `(min-width: ${media.sm}px) and (max-width: ${media.md}px)`;

    case 'md':
      return `(min-width: ${media.md}px) and (max-width: ${media.lg}px)`;

    case 'lg':
      return `(min-width: ${media.lg}px) and (max-width: ${media.xl}px)`;

    default:
      return `(min-width: ${media.xl}px)`;
  }
}
