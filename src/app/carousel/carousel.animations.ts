import {style, animate, keyframes, animation} from '@angular/animations';

export const fadeIn = animation([
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 }))
]);

export const fadeOut = animation([
    animate('300ms', style({ opacity: 1 }))
]);