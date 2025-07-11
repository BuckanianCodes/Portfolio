import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate,keyframes,query,stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  animations: [
  trigger('staggeredBounceIn', [
    transition(':enter', [
      query('.tech-icon', [
        stagger(150, [
          animate('700ms ease-out', keyframes([
            style({ transform: 'translateY(-100px)', opacity: 0, offset: 0 }),
            style({ transform: 'translateY(15px)', opacity: 1, offset: 0.6 }),
            style({ transform: 'translateY(-5px)', offset: 0.8 }),
            style({ transform: 'translateY(0)', offset: 1.0 })
          ]))
        ])
      ])
    ])
  ]),
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
export class TechnologiesComponent implements AfterViewInit,OnInit {

  icons = [
  'angular-icon.png', 'react-icon.png', 'graphql-icon.png',
  'nodejs-icon.png', 'dotnet-icon.png', 'hotchocolate.png',
  'docker.png', 'mongodb.png', 'sql.png'
];

iconStyles: { [key: number]: any } = {};
  @ViewChild('techStack') techStack!: ElementRef;
  animationState = 'void';
  wobbleState: { [key: number]: string } = {};


  ngOnInit() {
   const positions = [
    { top: '10px', left: '10%' },
    { top: '10px', left: '30%' },
    { top: '10px', left: '50%' },
    { top: '50px', left: '20%' },
    { top: '50px', left: '40%' },
    { top: '50px', left: '60%' },
    { top: '90px', left: '15%' },
    { top: '90px', left: '35%' },
    { top: '90px', left: '55%' }
  ];
   this.icons.forEach((_, i) => {
  
    const delay = Math.floor(Math.random() * 1000); 

    this.iconStyles[i] = {
       ...positions[i],
      animationDelay: `${delay}ms`
    };
  });
}


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