import { Directive, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrMsgDirective implements OnInit{

  private _color    : string = 'blue';
  private _message  : string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }
  @Input() set message(value: string) {
    this._message = value;
    this.setMessage();
  }
  @Input() set valid(value: boolean) {
    value
      ? this.htmlElement.nativeElement.classList.add('hidden')
      : this.htmlElement.nativeElement.classList.remove('hidden');
  }

  constructor(private element: ElementRef<HTMLElement>) {
    this.htmlElement = this.element;
   }

   ngOnInit(): void {
    this.setColor();
    this.setStyle();
    this.setMessage();
   }

   setStyle(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
   }

   setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
   }

   setMessage() {
    this.htmlElement.nativeElement.innerHTML = this._message;
   }



}
