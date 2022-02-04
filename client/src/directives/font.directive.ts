import { OnInit, Directive, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[font]' 
})
export class FontDirective implements OnInit {
  @Input() defaultFontSize: string = '12px'; // if this DOM doesn't have this property, will use this defaut value 
  @HostBinding('style.fontSize') fontSize: string;
  @HostBinding('class.click-add-btn') isClicked: boolean = false;

  constructor() {
  }

  ngOnInit() {
    // set defaultFontSize to fontSize
    this.fontSize = this.defaultFontSize;
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    this.fontSize = '32px';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.fontSize = this.defaultFontSize;
    this.isClicked = false;
  }

  @HostListener('click') toggleClickAddBtn() {
    this.isClicked = !this.isClicked;
  }
}