import { Directive, EventEmitter, Input, OnChanges, Output, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngIfMichael]'
})
export class Directive2Directive implements OnChanges {

  @Input() ngIfMichael:boolean = true;

  @Output() test = new EventEmitter<any>(null);

  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { 

  }

  ngOnChanges(changes:any){
    console.log('changes: ', changes.ngIfMichael.currentValue)
    this.setViewContainer(changes.ngIfMichael.currentValue);
    
  }

  setViewContainer(show:boolean){
    if(show){
      this.test.emit('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear();
    } 
  }


}