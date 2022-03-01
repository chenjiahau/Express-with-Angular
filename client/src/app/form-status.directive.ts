import { Directive, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appFormStatus]'
})
export class FormStatusDirective implements OnInit {

  constructor(
    private controlName: NgControl
  ) { }

  ngOnInit() {
    this.controlName.control.parent.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    )
  }
}
