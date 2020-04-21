import {
  trigger,
  transition,
  style,
  query as q,
  animateChild,
  group,
  animate,
} from '@angular/animations';

const query = (s, a, o = { optional: true }) => q(s, a, o);

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      style({ position: 'fixed', width: '100%', height: '100%' })
    ),
    query(':enter', style({ transform: 'translateX(100%)' })),

    group([
      query(':self', [
        style({ transform: 'translateX(0%)' }),
        animate('1.0s ease-in-out', style({ transform: 'translateX(-100%)' })),
      ]),
      query('router-outlet ~ *', [
        animate('1.0s ease-in-out', style({ transform: 'translateX(0%)' })),
        animateChild(),
      ]),
    ]),
  ]),
]);

export const slideInAnimation1 = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    // query(':enter', [style({ left: '-100%' })], { optional: true }),
    // query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], {
        optional: true,
      }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
    // query(':enter', animateChild(), { optional: true }),
  ]),
]);

export const slideInAnimation4 = trigger('routeAnimations', [
  transition('* <=> *', [
    // Set a default  style for enter and leave
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ],
      { optional: true }
    ),
    // Animate the new page in
    query(
      ':enter',
      [
        animate(
          '600ms ease',
          style({ opacity: 1, transform: 'scale(1) translateY(0)' })
        ),
      ],
      { optional: true }
    ),
  ]),
]);

const an = [
  style({ transform: 'translateX(0%)' }),
  animate('1.0s ease-in-out', style({ transform: 'translateX(-100%)' })),
];
export const slideInAnimation3 = trigger('routeAnimations', [
  transition('* <=> *', [
    // query(
    //   ':enter, :leave',
    //   style({ position: 'fixed', width: '100%', height: '100%' })
    // ),
    // query(':enter', style({ transform: 'translateX(100%)' })),

    group([
      query(':self', an),
      query('router-outlet ~ *', [
        animate('1.0s ease-in-out', style({ transform: 'translateX(0%)' })),
        animateChild(),
      ]),
    ]),
  ]),
]);

// group([
//   query(':leave', [
//     style({ transform: 'translateX(0%)' }),
//     animate('1.0s ease-in-out', style({ transform: 'translateX(-100%)' })),
//   ]),
//   query(':enter', [
//     animate('1.0s ease-in-out', style({ transform: 'translateX(0%)' })),
//     animateChild(),
//   ]),
// ]),
