import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-technologies',
  standalone:true,
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', animate('600ms ease-out'))
    ]),
    trigger('wobble', [
      state('normal', style({ transform: 'rotate(0deg)' })),
      state('wobbling', style({ transform: 'rotate(0deg)' })),
      transition('normal => wobbling', [
        animate('125ms ease-in-out', style({ transform: 'rotate(-5deg)' })),
        animate('125ms ease-in-out', style({ transform: 'rotate(5deg)' })),
        animate('125ms ease-in-out', style({ transform: 'rotate(-3deg)' })),
        animate('125ms ease-in-out', style({ transform: 'rotate(0deg)' }))
      ])
    ])
  ]
})
export class TechnologiesComponent implements AfterViewInit {
  @ViewChild('techStack') techStack!: ElementRef;
  animationState = 'void';
  wobbleState: { [key: number]: string } = {};

  ngAfterViewInit() {
    // Trigger fade-in animation when component is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animationState = '*';
          entry.target.classList.add('visible'); 
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.techStack.nativeElement);
  }

  @HostListener('window:devicemotion', ['$event'])
  handleShake(event: DeviceMotionEvent) {
    const acceleration = event.accelerationIncludingGravity;
    if (!acceleration) return;

    const shakeThreshold = 15;
    if (Math.abs(acceleration.x!) > shakeThreshold ||
        Math.abs(acceleration.y!) > shakeThreshold ||
        Math.abs(acceleration.z!) > shakeThreshold) {
      this.triggerWobble();
    }
  }

  triggerWobble() {
    // Wobble all icons
    Object.keys(this.wobbleState).forEach(key => {
      this.wobbleState[+key] = 'wobbling';
    });
    
    setTimeout(() => {
      Object.keys(this.wobbleState).forEach(key => {
        this.wobbleState[+key] = 'normal';
      });
    }, 500);
  }

  onMouseEnter(index: number) {
    this.wobbleState[index] = 'wobbling';
  }

  onMouseLeave(index: number) {
    this.wobbleState[index] = 'normal';
  }
}