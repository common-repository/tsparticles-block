"use strict";(globalThis.webpackChunkwordpress_particles=globalThis.webpackChunkwordpress_particles||[]).push([[2442],{2442:(e,t,s)=>{s.r(t),s.d(t,{loadPolygonPath:()=>r,polygonPathName:()=>h});var i=s(2613),o=s(5302);class n{constructor(){this._createDirs=()=>{this.dirsList=[];for(let e=0;e<360;e+=360/this.options.sides){const t=this.options.angle+e;this.dirsList.push(i.O.create(Math.cos(t*Math.PI/180),Math.sin(t*Math.PI/180)))}},this.dirsList=[],this.options={sides:6,turnSteps:20,angle:30}}generate(e){const{sides:t}=this.options;void 0===e.hexStep&&(e.hexStep=0),void 0===e.hexDirection&&(e.hexDirection=6===t?2*(3*(0,o.sZ)()|0):(0,o.sZ)()*t|0),void 0===e.hexSpeed&&(e.hexSpeed=e.velocity.length),e.hexStep%this.options.turnSteps==0&&(e.hexDirection=(0,o.sZ)()>.5?(e.hexDirection+1)%t:(e.hexDirection+t-1)%t),e.velocity.x=0,e.velocity.y=0,e.hexStep++;const s=this.dirsList[e.hexDirection];return i.O.create(s.x*e.hexSpeed,s.y*e.hexSpeed)}init(e){const t=e.actualOptions.particles.move.path.options;this.options.sides=t.sides>0?t.sides:6,this.options.angle=t.angle??30,this.options.turnSteps=t.turnSteps>=0?t.turnSteps:20,this._createDirs()}reset(e){delete e.hexStep,delete e.hexDirection,delete e.hexSpeed}update(){}}const h="polygonPathGenerator";async function r(e,t=!0){await e.addPathGenerator(h,new n,t)}}}]);