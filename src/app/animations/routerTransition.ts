import {animationConfig} from "./animationConfig";
import {trigger, animate, style, stagger, group, query as q, transition, animateChild} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [    

    query(':enter, :leave', style({ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 })),

    query(':enter, :enter .router-transition, :enter .router-transition-left, :enter .router-transition-right', style({ opacity: 0 })),

    group([
      query(':leave .router-transition', stagger(100, [
        style({ opacity: 1 }),
        animate(`${animationConfig.duration}ms ${animationConfig.transitionFunc}`, style({ opacity: 0 })),
      ])),
      query(':leave .router-transition-left', stagger(100, [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate(`${animationConfig.duration}ms ${animationConfig.transitionFunc}`, style({ transform: `translateX(-${animationConfig.translateX}px)`, opacity: 0 })),
      ])),
      query(':leave .router-transition-right', stagger(100, [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate(`${animationConfig.duration}ms ${animationConfig.transitionFunc}`, style({ transform: `translateX(${animationConfig.translateX}px)`, opacity: 0 })),
      ])),
    ]),
    
    group([
      query(':leave', [
        style({ opacity: 1 }),
        animate(`${animationConfig.duration}ms ${animationConfig.transitionFunc}`, style({ opacity: 0 }))
      ]),
      query(':enter', [
        style({ opacity: 0 }),
        animate(`500ms ${animationConfig.transitionFunc}`, style({ opacity: 1 })),
      ]),
    ]),

    group([
      query(':enter .router-transition', stagger(100, [
        style({ opacity: 0 }),
        animate(`${animationConfig.duration}ms ${animationConfig.transitionFunc}`, style({ opacity: 1 })),
      ])),
      query(':enter .router-transition-left', stagger(100, [
        style({ transform: `translateX(-${animationConfig.translateX}px)`, opacity: 0 }),
        animate(`${animationConfig.duration}ms ${animationConfig.transitionFunc}`, style({ transform: 'translateX(0)', opacity: 1 })),
      ])),
      query(':enter .router-transition-right', stagger(100, [
        style({ transform: `translateX(${animationConfig.translateX}px)`, opacity: 0 }),
        animate(`${animationConfig.duration}ms ${animationConfig.transitionFunc}`, style({ transform: 'translateX(0)', opacity: 1 })),
      ])),
    ]),
    
  ])
])
