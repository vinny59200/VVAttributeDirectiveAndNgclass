import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[vvdirective]'
})
export class VVdirectiveDirective {
  @Input('vvdirective') params: string;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) { }
  ngOnInit() {
    if (this.params === 'vvstyle number two') {
      console.log("in the first condition for other style number two")
      console.log(this.params)
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'black');
      this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
    } else {
      console.log("in the default condition for default style")
      console.log(this.params)
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'gray');
      this.renderer.setStyle(this.elRef.nativeElement, 'color', 'navy');
    }
  }
}
