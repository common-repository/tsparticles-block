"use strict";(globalThis.webpackChunkwordpress_particles=globalThis.webpackChunkwordpress_particles||[]).push([[6140],{6140:(e,s,a)=>{a.r(s),a.d(s,{loadWobbleUpdater:()=>d});var o=a(5302),n=a(4684);class t{constructor(){this.angle=50,this.move=10}load(e){e&&(void 0!==e.angle&&(this.angle=(0,o.Cs)(e.angle)),void 0!==e.move&&(this.move=(0,o.Cs)(e.move)))}}class i{constructor(){this.distance=5,this.enable=!1,this.speed=new t}load(e){if(e&&(void 0!==e.distance&&(this.distance=(0,o.Cs)(e.distance)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.speed))if((0,n.hj)(e.speed))this.speed.load({angle:e.speed});else{const s=e.speed;void 0!==s.min?this.speed.load({angle:s}):this.speed.load(e.speed)}}}class l{constructor(e){this.container=e}init(e){const s=e.options.wobble;e.wobble=s?.enable?{angle:(0,o.sZ)()*Math.PI*2,angleSpeed:(0,o.Gu)(s.speed.angle)/360,moveSpeed:(0,o.Gu)(s.speed.move)/10}:{angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=(0,o.Gu)(s?.distance??0)*this.container.retina.pixelRatio}isEnabled(e){return!e.destroyed&&!e.spawning&&!!e.options.wobble?.enable}loadOptions(e,...s){e.wobble||(e.wobble=new i);for(const a of s)e.wobble.load(a?.wobble)}update(e,s){this.isEnabled(e)&&function(e,s){const{wobble:a}=e.options,{wobble:o}=e;if(!a?.enable||!o)return;const n=o.angleSpeed*s.factor,t=o.moveSpeed*s.factor*((e.retina.wobbleDistance??0)*s.factor)/(1e3/60),i=2*Math.PI,{position:l}=e;o.angle+=n,o.angle>i&&(o.angle-=i),l.x+=t*Math.cos(o.angle),l.y+=t*Math.abs(Math.sin(o.angle))}(e,s)}}async function d(e,s=!0){await e.addParticleUpdater("wobble",(e=>new l(e)),s)}}}]);