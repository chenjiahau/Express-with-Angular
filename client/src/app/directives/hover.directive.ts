import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  @Input() index: number;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  checkIndex() {
    if (this.index % 2 === 0) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'gold');
    }
  }

  ngOnInit(): void {
    this.checkIndex();
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'gold');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.checkIndex();
  }
}
