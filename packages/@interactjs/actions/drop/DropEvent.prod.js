import{BaseEvent as t}from"../../core/BaseEvent.prod.js";import*as e from"../../utils/arr.prod.js";export class DropEvent extends t{constructor(t,e,o){super(e._interaction),this.target=void 0,this.dropzone=void 0,this.dragEvent=void 0,this.relatedTarget=void 0,this.draggable=void 0,this.timeStamp=void 0,this.propagationStopped=!1,this.immediatePropagationStopped=!1;const{element:r,dropzone:i}="dragleave"===o?t.prev:t.cur;this.type=o,this.target=r,this.currentTarget=r,this.dropzone=i,this.dragEvent=e,this.relatedTarget=e.target,this.draggable=e.interactable,this.timeStamp=e.timeStamp}reject(){const{dropState:t}=this._interaction;if("dropactivate"===this.type||this.dropzone&&t.cur.dropzone===this.dropzone&&t.cur.element===this.target)if(t.prev.dropzone=this.dropzone,t.prev.element=this.target,t.rejected=!0,t.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){const o=t.activeDrops,r=e.findIndex(o,({dropzone:t,element:e})=>t===this.dropzone&&e===this.target);t.activeDrops.splice(r,1);const i=new DropEvent(t,this.dragEvent,"dropdeactivate");i.dropzone=this.dropzone,i.target=this.target,this.dropzone.fire(i)}else this.dropzone.fire(new DropEvent(t,this.dragEvent,"dragleave"))}preventDefault(){}stopPropagation(){this.propagationStopped=!0}stopImmediatePropagation(){this.immediatePropagationStopped=this.propagationStopped=!0}}
//# sourceMappingURL=DropEvent.prod.js.map