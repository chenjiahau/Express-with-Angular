import { OnInit, Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[unless]' 
})
export class UnlessDirective implements OnInit {
  // input a value, and set unless to method, write your condition 
  @Input() set unless(condition: boolean) {
    if (condition) {
      // Create the view on this ViewContainer
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // Clear everything on this ViewContainer
      this.vcRef.clear();
    }
  } 

  // TemplateRef, access the template, the directive was on 
  // ViewContainerRef, mark the place where we placed this directive in the document
  constructor(private  templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

  ngOnInit() {
  }
}