import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSkeleton]',
})
export class SkeletonDirective implements OnInit {
  @Input() loading: boolean | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    if (this.loading) {
      this.renderer.addClass(this.el.nativeElement, 'skeleton');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'skeleton');
    }
  }
}
