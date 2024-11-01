"use strict";(globalThis.webpackChunkwordpress_particles=globalThis.webpackChunkwordpress_particles||[]).push([[7034],{7034:(e,a,t)=>{t.r(a),t.d(a,{loadGradientUpdater:()=>m});var i=t(6720),s=t(4684),o=t(5302),n=t(7327);class c{constructor(){this.count=0,this.enable=!1,this.speed=0,this.decay=0,this.delay=0,this.sync=!1,this.startValue="random"}load(e){e&&(void 0!==e.count&&(this.count=(0,o.Cs)(e.count)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.speed&&(this.speed=(0,o.Cs)(e.speed)),void 0!==e.sync&&(this.sync=e.sync),void 0!==e.startValue&&(this.startValue=e.startValue),void 0!==e.decay&&(this.decay=(0,o.Cs)(e.decay)),void 0!==e.delay&&(this.delay=(0,o.Cs)(e.delay)))}}class l{constructor(){this.value=0,this.animation=new c}load(e){e&&(this.animation.load(e.animation),void 0!==e.value&&(this.value=(0,o.Cs)(e.value)))}}class r{constructor(){this.stop=0,this.value=new n.R}load(e){e&&(void 0!==e.stop&&(this.stop=e.stop),this.value=n.R.create(this.value,e.value),void 0!==e.opacity&&(this.opacity=new l,(0,s.hj)(e.opacity)?this.opacity.value=e.opacity:this.opacity.load(e.opacity)))}}class d{constructor(){this.count=0,this.enable=!1,this.speed=0,this.decay=0,this.delay=0,this.sync=!1}load(e){e&&(void 0!==e.count&&(this.count=(0,o.Cs)(e.count)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.speed&&(this.speed=(0,o.Cs)(e.speed)),void 0!==e.decay&&(this.decay=(0,o.Cs)(e.decay)),void 0!==e.delay&&(this.delay=(0,o.Cs)(e.delay)),void 0!==e.sync&&(this.sync=e.sync))}}class u{constructor(){this.value=0,this.animation=new d,this.direction="clockwise"}load(e){e&&(this.animation.load(e.animation),void 0!==e.value&&(this.value=(0,o.Cs)(e.value)),void 0!==e.direction&&(this.direction=e.direction))}}class v{constructor(){this.angle=new u,this.colors=[],this.type="random"}load(e){e&&(this.angle.load(e.angle),void 0!==e.colors&&(this.colors=e.colors.map((e=>{const a=new r;return a.load(e),a}))),void 0!==e.type&&(this.type=e.type))}}function y(e,a){if(!a.enable)return;const t=a.decay??1;switch(a.status){case"increasing":a.value>=a.max?a.status="decreasing":a.value+=(a.velocity??0)*e.factor;break;case"decreasing":a.value<=a.min?a.status="increasing":a.value-=(a.velocity??0)*e.factor}a.velocity&&1!==t&&(a.velocity*=t)}function h(e,a,t,i){if(!a||!a.enable)return;if(a.time||(a.time=0),(a.delayTime??0)>0&&a.time<(a.delayTime??0)&&(a.time+=e.value),(a.delayTime??0)>0&&a.time<(a.delayTime??0))return;const s=(a.velocity??0)*e.factor,o=a.decay??1;i&&"increasing"!==a.status?(a.value-=s,a.value<0&&(a.status="increasing",a.value+=a.value)):(a.value+=s,i&&a.value>t&&(a.status="decreasing",a.value-=a.value%t)),a.value>t&&(a.value%=t),a.velocity&&1!==o&&(a.velocity*=o)}class p{getColorStyles(e,a,t,s){const o=e.gradient;if(!o)return{};const n=o.angle.value,c="radial"===o.type?a.createRadialGradient(0,0,0,0,0,t):a.createLinearGradient(Math.cos(n)*-t,Math.sin(n)*-t,Math.cos(n)*t,Math.sin(n)*t);for(const{stop:e,value:a,opacity:t}of o.colors)c.addColorStop(e,(0,i.vz)({h:a.h.value,s:a.s.value,l:a.l.value},t?.value??s));return{fill:c}}init(e){const a=(0,s.wA)(e.options.gradient);if(!a)return;const{angle:t}=a;e.gradient={angle:{value:(0,o.Gu)(t.value),enable:t.animation.enable,velocity:(0,o.Gu)(t.animation.speed)/360*e.container.retina.reduceFactor,decay:1-(0,o.Gu)(t.animation.decay),delayTime:1e3*(0,o.Gu)(t.animation.delay),time:0},type:a.type,colors:[]};let n=a.angle.direction;switch("random"===n&&(n=(0,o.sZ)()>.5?"counter-clockwise":"clockwise"),n){case"counter-clockwise":case"counterClockwise":e.gradient.angle.status="decreasing";break;case"clockwise":e.gradient.angle.status="increasing"}const c=e.options.reduceDuplicates;for(const t of a.colors){const a=(0,i.lN)(t.value,e.id,c);if(!a)continue;const s=(0,i.bS)(a,t.value.animation,e.container.retina.reduceFactor),n={stop:t.stop,value:s,opacity:t.opacity?{enable:t.opacity.animation.enable,max:(0,o.KI)(t.opacity.value),min:(0,o.Uv)(t.opacity.value),status:"increasing",value:(0,o.Gu)(t.opacity.value),velocity:(0,o.Gu)(t.opacity.animation.speed)/100*e.container.retina.reduceFactor,decay:1-(0,o.Gu)(t.opacity.animation.decay),delayTime:1e3*(0,o.Gu)(t.opacity.animation.delay),time:0}:void 0},{opacity:l}=n;if(t.opacity&&l){const e=t.opacity.value;switch(l.min=(0,o.Uv)(e),l.max=(0,o.KI)(e),t.opacity.animation.startValue){case"min":l.value=l.min,l.status="increasing";break;case"max":l.value=l.max,l.status="decreasing";break;default:l.value=(0,o.vd)(l),l.status=(0,o.sZ)()>=.5?"increasing":"decreasing"}}e.gradient.colors.push(n)}}isEnabled(e){return!e.destroyed&&!e.spawning&&(e.gradient?.angle.enable||(e.gradient?.colors.some((e=>e.value.h.enable||e.value.s.enable||e.value.l.enable))??!1))}loadOptions(e,...a){for(const t of a){if(!t?.gradient)continue;const a=t.gradient;a&&(e.gradient=(0,s.KH)(a,(e=>{const a=new v;return a.load(e),a})))}}update(e,a){!function(e,a){const{gradient:t}=e;if(t){!function(e,a){const t=(a.velocity??0)*e.factor,i=2*Math.PI,s=a.decay??1;a.enable&&("increasing"===a.status?(a.value+=t,a.value>i&&(a.value-=i)):(a.value-=t,a.value<0&&(a.value+=i)),a.velocity&&1!==s&&(a.velocity*=s))}(a,t.angle);for(const i of t.colors)void 0!==e.color?.h&&h(a,i.value.h,360,!1),void 0!==e.color?.s&&h(a,i.value.s,100,!0),void 0!==e.color?.l&&h(a,i.value.l,100,!0),i.opacity&&y(a,i.opacity)}}(e,a)}}async function m(e,a=!0){await e.addParticleUpdater("gradient",(()=>new p),a)}}}]);