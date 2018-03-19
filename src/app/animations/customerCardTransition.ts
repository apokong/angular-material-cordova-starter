import {animationConfig} from "./animationConfig";
import {trigger, animate, style, transition} from '@angular/animations';

export const customerCardTransition = trigger('customerCardTransition', [
    transition(':enter', [
        style({opacity: 0, width: '0px', transform: 'translateX(-20px)'}),
        animate(`${animationConfig.duration}ms ${animationConfig.transitionFunc}`, style({ opacity: 1, width: '308px', transform: 'translateX(0px)' }))
    ]),
    transition(':leave', [
        animate(`${animationConfig.duration}ms ${animationConfig.transitionFunc}`, style({opacity: 0, width: '0px', transform: 'translateX(-20px)'}))
    ]),
]);