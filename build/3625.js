"use strict";(globalThis.webpackChunkwordpress_particles=globalThis.webpackChunkwordpress_particles||[]).push([[3625],{3625:(t,e,s)=>{s.r(e),s.d(e,{loadSVGPath:()=>o,svgPathName:()=>g});var i=s(5302),h=s(4684),a=s(2613);class n{constructor(){this._paths=[],this._reverse=!1,this._size={width:0,height:0},this._scale=1,this._offset={x:0,y:0,mode:"percent"},this._width=0}generate(t,e){const s=t.container.retina.pixelRatio;void 0===t.svgDirection&&(t.svgDirection=(0,i.sZ)()>.5?0:1),void 0===t.svgPathIndex&&(t.svgPathIndex=Math.floor(Math.random()*this._paths.length)),void 0===t.svgSpeed&&(t.svgSpeed=t.velocity.mult((t.retina.moveSpeed??1)/2).length),void 0===t.svgStep&&(t.svgStep=(0,i.vd)({min:0,max:this._paths[t.svgPathIndex].length})*s),void 0===t.svgOffset&&(t.svgOffset={width:(0,i.vd)({min:-this._width/2,max:this._width/2})*s,height:(0,i.vd)({min:-this._width/2,max:this._width/2})*s}),void 0===t.svgInitialPosition&&(t.svgInitialPosition={...t.position}),t.velocity.x=0,t.velocity.y=0,0===t.svgDirection?t.svgStep+=t.svgSpeed*e.factor:t.svgStep-=t.svgSpeed*e.factor;let n=this._paths[t.svgPathIndex];if(n){const e=n.length;t.svgStep>=e?(t.svgPathIndex=t.svgPathIndex+1,t.svgPathIndex>=this._paths.length&&(this._reverse?(t.svgPathIndex=this._paths.length-1,t.svgDirection=1):(t.svgPathIndex=0,t.svgStep=0))):t.svgStep<=0&&(t.svgPathIndex=t.svgPathIndex-1,t.svgPathIndex<0&&(this._reverse?(t.svgPathIndex=0,t.svgDirection=0):(t.svgPathIndex=this._paths.length-1,n=this._paths[t.svgPathIndex],t.svgStep=n.length))),n=this._paths[t.svgPathIndex]}if(n){const e=n.element.getPointAtLength(t.svgStep),i=t.container.canvas.size,a=(0,h.bt)(this._offset,i),g=this._scale*s;t.position.x=(e.x-this._size.width/2)*g+t.svgInitialPosition.x+a.x+t.svgOffset.width,t.position.y=(e.y-this._size.height/2)*g+t.svgInitialPosition.y+a.y+t.svgOffset.height}return a.O.origin}init(t){const e=t.actualOptions.particles.move.path.options,s=e.position??this._offset;if(this._reverse=e.reverse??this._reverse,this._scale=e.scale??1,this._offset.x=s.x,this._offset.y=s.y,this._offset.mode=s.mode,this._width=e.width??0,e.url&&!e.path){const t=e.url;(async()=>{const e=await fetch(t),s=await e.text(),i=(new DOMParser).parseFromString(s,"image/svg+xml"),h=i.getElementsByTagName("svg")[0];let a=h.getElementsByTagName("path");a.length||(a=i.getElementsByTagName("path")),this._paths=[];for(let t=0;t<a.length;t++){const e=a.item(t);e&&this._paths.push({element:e,length:e.getTotalLength()})}this._size.height=parseFloat(h.getAttribute("height")??"0"),this._size.width=parseFloat(h.getAttribute("width")??"0")})()}else if(e.path){const t=e.path;this._paths=[];for(const e of t.data){const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",e),this._paths.push({element:t,length:t.getTotalLength()})}this._size.height=t.size.height,this._size.width=t.size.width}}reset(){}update(){}}const g="svgPathGenerator";async function o(t,e=!0){await t.addPathGenerator(g,new n,e)}}}]);