import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appFormStatus]'
})
export class FormStatusDirective implements OnInit {

  constructor(
    private controlName: NgControl,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.controlName.control.statusChanges
      .subscribe(
        (status) => {
          this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', '');

          if (status === 'INVALID') {
            this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
          }
        }
    )
  }
}
