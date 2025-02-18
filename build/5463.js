"use strict";(globalThis.webpackChunkwordpress_particles=globalThis.webpackChunkwordpress_particles||[]).push([[5463,4660,9394,9573,7283,4404,4224,879],{1688:(i,t,e)=>{e.d(t,{$:()=>o});class o{constructor(i){this.container=i,this.type="particles"}}},4660:(i,t,e)=>{e.r(t),e.d(t,{Links:()=>u,LinksShadow:()=>d,LinksTriangle:()=>p,loadParticlesLinksInteraction:()=>x});var o=e(5302),n=e(1688),s=e(6720),a=e(9201),c=e(573);class r extends a.C{constructor(i,t,e,o){super(i,t,e),this.canvasSize=o,this.canvasSize={...o}}contains(i){const{width:t,height:e}=this.canvasSize,{x:o,y:n}=i;return super.contains(i)||super.contains({x:o-t,y:n})||super.contains({x:o-t,y:n-e})||super.contains({x:o,y:n-e})}intersects(i){if(super.intersects(i))return!0;const t=i,e=i,o={x:i.position.x-this.canvasSize.width,y:i.position.y-this.canvasSize.height};if(void 0!==e.radius){const i=new a.C(o.x,o.y,2*e.radius);return super.intersects(i)}if(void 0!==t.size){const i=new c.A(o.x,o.y,2*t.size.width,2*t.size.height);return super.intersects(i)}return!1}}var l=e(2187);class d{constructor(){this.blur=5,this.color=new l.O,this.color.value="#000",this.enable=!1}load(i){i&&(void 0!==i.blur&&(this.blur=i.blur),this.color=l.O.create(this.color,i.color),void 0!==i.enable&&(this.enable=i.enable))}}class p{constructor(){this.enable=!1,this.frequency=1}load(i){i&&(void 0!==i.color&&(this.color=l.O.create(this.color,i.color)),void 0!==i.enable&&(this.enable=i.enable),void 0!==i.frequency&&(this.frequency=i.frequency),void 0!==i.opacity&&(this.opacity=i.opacity))}}class u{constructor(){this.blink=!1,this.color=new l.O,this.color.value="#fff",this.consent=!1,this.distance=100,this.enable=!1,this.frequency=1,this.opacity=1,this.shadow=new d,this.triangles=new p,this.width=1,this.warp=!1}load(i){i&&(void 0!==i.id&&(this.id=i.id),void 0!==i.blink&&(this.blink=i.blink),this.color=l.O.create(this.color,i.color),void 0!==i.consent&&(this.consent=i.consent),void 0!==i.distance&&(this.distance=i.distance),void 0!==i.enable&&(this.enable=i.enable),void 0!==i.frequency&&(this.frequency=i.frequency),void 0!==i.opacity&&(this.opacity=i.opacity),this.shadow.load(i.shadow),this.triangles.load(i.triangles),void 0!==i.width&&(this.width=i.width),void 0!==i.warp&&(this.warp=i.warp))}}function y(i,t,e,n,s){const{dx:a,dy:c,distance:r}=(0,o.oW)(i,t);if(!s||r<=e)return r;const l={x:Math.abs(a),y:Math.abs(c)},d=Math.min(l.x,n.width-l.x),p=Math.min(l.y,n.height-l.y);return Math.sqrt(d**2+p**2)}class h extends n.${constructor(i){super(i),this._setColor=i=>{if(!i.options.links)return;const t=this.linkContainer,e=i.options.links;let o=void 0===e.id?t.particles.linksColor:t.particles.linksColors.get(e.id);if(o)return;const n=e.color;o=(0,s.Dt)(n,e.blink,e.consent),void 0===e.id?t.particles.linksColor=o:t.particles.linksColors.set(e.id,o)},this.linkContainer=i}clear(){}init(){this.linkContainer.particles.linksColor=void 0,this.linkContainer.particles.linksColors=new Map}async interact(i){if(!i.options.links)return;i.links=[];const t=i.getPosition(),e=this.container,o=e.canvas.size;if(t.x<0||t.y<0||t.x>o.width||t.y>o.height)return;const n=i.options.links,s=n.opacity,c=i.retina.linksDistance??0,l=n.warp,d=l?new r(t.x,t.y,c,o):new a.C(t.x,t.y,c),p=e.particles.quadTree.query(d);for(const e of p){const a=e.options.links;if(i===e||!a?.enable||n.id!==a.id||e.spawning||e.destroyed||!e.links||i.links.some((i=>i.destination===e))||e.links.some((t=>t.destination===i)))continue;const r=e.getPosition();if(r.x<0||r.y<0||r.x>o.width||r.y>o.height)continue;const d=y(t,r,c,o,l&&a.warp);if(d>c)continue;const p=(1-d/c)*s;this._setColor(i),i.links.push({destination:e,opacity:p})}}isEnabled(i){return!!i.options.links?.enable}loadParticlesOptions(i,...t){i.links||(i.links=new u);for(const e of t)i.links.load(e?.links??e?.lineLinked??e?.line_linked)}reset(){}}var v=e(3326);function f(i,t){const e=((n=i.map((i=>i.id))).sort(((i,t)=>i-t)),n.join("_"));var n;let s=t.get(e);return void 0===s&&(s=(0,o.sZ)(),t.set(e,s)),s}class m{constructor(i){this.container=i,this._drawLinkLine=(i,t)=>{const e=this.container,n=e.actualOptions,a=t.destination,c=i.getPosition(),r=a.getPosition();let l=t.opacity;e.canvas.draw((t=>{if(!i.options.links)return;let d;const p=i.options.twinkle?.lines;if(p?.enable){const i=p.frequency,t=(0,s.tX)(p.color);(0,o.sZ)()<i&&t&&(d=t,l=(0,o.Gu)(p.opacity))}const u=i.options.links;if(!d){const t=void 0!==u?.id?e.particles.linksColors.get(u.id):e.particles.linksColor;d=(0,s.BE)(i,a,t)}if(!d)return;const y=i.retina.linksWidth??0,h=i.retina.linksDistance??0,{backgroundMask:f}=n;!function(i){let t=!1;const{begin:e,end:n,maxDistance:a,context:c,canvasSize:r,width:l,backgroundMask:d,colorLine:p,opacity:u,links:y}=i;if((0,o.Sp)(e,n)<=a)(0,v.pS)(c,e,n),t=!0;else if(y.warp){let i,s;const l={x:n.x-r.width,y:n.y},d=(0,o.oW)(e,l);if(d.distance<=a){const t=e.y-d.dy/d.dx*e.x;i={x:0,y:t},s={x:r.width,y:t}}else{const t={x:n.x,y:n.y-r.height},c=(0,o.oW)(e,t);if(c.distance<=a){const t=-(e.y-c.dy/c.dx*e.x)/(c.dy/c.dx);i={x:t,y:0},s={x:t,y:r.height}}else{const t={x:n.x-r.width,y:n.y-r.height},c=(0,o.oW)(e,t);if(c.distance<=a){const t=e.y-c.dy/c.dx*e.x;i={x:-t/(c.dy/c.dx),y:t},s={x:i.x+r.width,y:i.y+r.height}}}}i&&s&&((0,v.pS)(c,e,i),(0,v.pS)(c,n,s),t=!0)}if(!t)return;c.lineWidth=l,d.enable&&(c.globalCompositeOperation=d.composite),c.strokeStyle=(0,s.iz)(p,u);const{shadow:h}=y;if(h.enable){const i=(0,s.tX)(h.color);i&&(c.shadowBlur=h.blur,c.shadowColor=(0,s.iz)(i))}c.stroke()}({context:t,width:y,begin:c,end:r,maxDistance:h,canvasSize:e.canvas.size,links:u,backgroundMask:f,colorLine:d,opacity:l})}))},this._drawLinkTriangle=(i,t,e)=>{if(!i.options.links)return;const n=this.container,a=n.actualOptions,c=t.destination,r=e.destination,l=i.options.links.triangles,d=l.opacity??(t.opacity+e.opacity)/2;d<=0||n.canvas.draw((t=>{const e=i.getPosition(),p=c.getPosition(),u=r.getPosition(),y=i.retina.linksDistance??0;if((0,o.Sp)(e,p)>y||(0,o.Sp)(u,p)>y||(0,o.Sp)(u,e)>y)return;let h=(0,s.tX)(l.color);if(!h){const t=i.options.links,e=void 0!==t?.id?n.particles.linksColors.get(t.id):n.particles.linksColor;h=(0,s.BE)(i,c,e)}h&&function(i){const{context:t,pos1:e,pos2:o,pos3:n,backgroundMask:a,colorTriangle:c,opacityTriangle:r}=i;(0,v.Wd)(t,e,o,n),a.enable&&(t.globalCompositeOperation=a.composite),t.fillStyle=(0,s.iz)(c,r),t.fill()}({context:t,pos1:e,pos2:p,pos3:u,backgroundMask:a.backgroundMask,colorTriangle:h,opacityTriangle:d})}))},this._drawTriangles=(i,t,e,o)=>{const n=e.destination;if(!i.links?.triangles.enable||!n.options.links?.triangles.enable)return;const s=n.links?.filter((i=>{const t=this._getLinkFrequency(n,i.destination);return n.options.links&&t<=n.options.links.frequency&&o.findIndex((t=>t.destination===i.destination))>=0}));if(s?.length)for(const o of s){const s=o.destination;this._getTriangleFrequency(t,n,s)>i.links.triangles.frequency||this._drawLinkTriangle(t,e,o)}},this._getLinkFrequency=(i,t)=>f([i,t],this._freqs.links),this._getTriangleFrequency=(i,t,e)=>f([i,t,e],this._freqs.triangles),this._freqs={links:new Map,triangles:new Map}}drawParticle(i,t){const{links:e,options:o}=t;if(!e||e.length<=0)return;const n=e.filter((i=>o.links&&this._getLinkFrequency(t,i.destination)<=o.links.frequency));for(const i of n)this._drawTriangles(o,t,i,n),i.opacity>0&&(t.retina.linksWidth??0)>0&&this._drawLinkLine(t,i)}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map}particleCreated(i){if(i.links=[],!i.options.links)return;const t=this.container.retina.pixelRatio,{retina:e}=i,{distance:o,width:n}=i.options.links;e.linksDistance=o*t,e.linksWidth=n*t}particleDestroyed(i){i.links=[]}}class g{constructor(){this.id="links"}getPlugin(i){return new m(i)}loadOptions(){}needsPlugin(){return!0}}async function x(i,t=!0){await async function(i,t=!0){await i.addInteractor("particlesLinks",(i=>new h(i)),t)}(i,t),await async function(i,t=!0){const e=new g;await i.addPlugin(e,t)}(i,t)}},9394:(i,t,e)=>{e.r(t),e.d(t,{loadBaseMover:()=>s});var o=e(5302);class n{constructor(){this._initSpin=i=>{const t=i.container,e=i.options.move.spin;if(!e.enable)return;const n=e.position??{x:50,y:50},s={x:n.x/100*t.canvas.size.width,y:n.y/100*t.canvas.size.height},a=i.getPosition(),c=(0,o.Sp)(a,s),r=(0,o.Gu)(e.acceleration);i.retina.spinAcceleration=r*t.retina.pixelRatio,i.spin={center:s,direction:i.velocity.x>=0?"clockwise":"counter-clockwise",angle:i.velocity.angle,radius:c,acceleration:i.retina.spinAcceleration}}}init(i){const t=i.options.move.gravity;i.gravity={enable:t.enable,acceleration:(0,o.Gu)(t.acceleration),inverse:t.inverse},this._initSpin(i)}isEnabled(i){return!i.destroyed&&i.options.move.enable}move(i,t){const e=i.options,n=e.move;if(!n.enable)return;const s=i.container,a=s.retina.pixelRatio,c=function(i){return i.slow.inRange?i.slow.factor:1}(i),r=(i.retina.moveSpeed??=(0,o.Gu)(n.speed)*a)*s.retina.reduceFactor,l=i.retina.moveDrift??=(0,o.Gu)(i.options.move.drift)*a,d=(0,o.KI)(e.size.value)*a,p=r*(n.size?i.getRadius()/d:1)*c*(t.factor||1)/2,u=i.retina.maxSpeed??s.retina.maxSpeed;n.spin.enable?function(i,t){const e=i.container;if(!i.spin)return;const o={x:"clockwise"===i.spin.direction?Math.cos:Math.sin,y:"clockwise"===i.spin.direction?Math.sin:Math.cos};i.position.x=i.spin.center.x+i.spin.radius*o.x(i.spin.angle),i.position.y=i.spin.center.y+i.spin.radius*o.y(i.spin.angle),i.spin.radius+=i.spin.acceleration;const n=Math.max(e.canvas.size.width,e.canvas.size.height);i.spin.radius>n/2?(i.spin.radius=n/2,i.spin.acceleration*=-1):i.spin.radius<0&&(i.spin.radius=0,i.spin.acceleration*=-1),i.spin.angle+=t/100*(1-i.spin.radius/n)}(i,p):function(i,t,e,n,s,a){!function(i,t){const e=i.options.move.path;if(!e.enable)return;if(i.lastPathTime<=i.pathDelay)return void(i.lastPathTime+=t.value);const n=i.pathGenerator?.generate(i,t);n&&i.velocity.addTo(n),e.clamp&&(i.velocity.x=(0,o.uZ)(i.velocity.x,-1,1),i.velocity.y=(0,o.uZ)(i.velocity.y,-1,1)),i.lastPathTime-=i.pathDelay}(i,a);const c=i.gravity,r=c?.enable&&c.inverse?-1:1;s&&e&&(i.velocity.x+=s*a.factor/(60*e)),c?.enable&&e&&(i.velocity.y+=r*(c.acceleration*a.factor)/(60*e));const l=i.moveDecay;i.velocity.multTo(l);const d=i.velocity.mult(e);c?.enable&&n>0&&(!c.inverse&&d.y>=0&&d.y>=n||c.inverse&&d.y<=0&&d.y<=-n)&&(d.y=r*n,e&&(i.velocity.y=d.y/e));const p=i.options.zIndex,u=(1-i.zIndexFactor)**p.velocityRate;d.multTo(u);const{position:y}=i;y.addTo(d),t.vibrate&&(y.x+=Math.sin(y.x*Math.cos(y.y)),y.y+=Math.cos(y.y*Math.sin(y.x)))}(i,n,p,u,l,t),function(i){const t=i.initialPosition,{dx:e,dy:n}=(0,o.oW)(t,i.position),s=Math.abs(e),a=Math.abs(n),{maxDistance:c}=i.retina,r=c.horizontal,l=c.vertical;if(r||l)if((r&&s>=r||l&&a>=l)&&!i.misplaced)i.misplaced=!!r&&s>r||!!l&&a>l,r&&(i.velocity.x=i.velocity.y/2-i.velocity.x),l&&(i.velocity.y=i.velocity.x/2-i.velocity.y);else if((!r||s<r)&&(!l||a<l)&&i.misplaced)i.misplaced=!1;else if(i.misplaced){const e=i.position,n=i.velocity;r&&(e.x<t.x&&n.x<0||e.x>t.x&&n.x>0)&&(n.x*=-(0,o.sZ)()),l&&(e.y<t.y&&n.y<0||e.y>t.y&&n.y>0)&&(n.y*=-(0,o.sZ)())}}(i)}}async function s(i,t=!0){await i.addMover("base",(()=>new n),t)}},5463:(i,t,e)=>{e.r(t),e.d(t,{loadTrianglesPreset:()=>p});var o=e(9394),n=e(9573),s=e(7283),a=e(4404),c=e(4224),r=e(4660),l=e(879);const d={background:{color:"#000000"},particles:{number:{value:100},links:{distance:125,enable:!0,triangles:{enable:!0,opacity:.1}},move:{enable:!0,speed:5},size:{value:1},shape:{type:"circle"}}};async function p(i,t=!0){await(0,o.loadBaseMover)(i,!1),await(0,n.loadCircleShape)(i,!1),await(0,s.loadColorUpdater)(i,!1),await(0,r.loadParticlesLinksInteraction)(i,!1),await(0,c.loadOutModesUpdater)(i,!1),await(0,a.loadOpacityUpdater)(i,!1),await(0,l.loadSizeUpdater)(i,!1),await i.addPreset("triangles",d,t)}},9573:(i,t,e)=>{e.r(t),e.d(t,{loadCircleShape:()=>s});var o=e(4684);class n{draw(i,t,e){t.circleRange||(t.circleRange={min:0,max:2*Math.PI});const o=t.circleRange;i.arc(0,0,e,o.min,o.max,!1)}getSidesCount(){return 12}particleInit(i,t){const e=t.shapeData,n=e?.angle??{max:360,min:0};t.circleRange=(0,o.Kn)(n)?{min:n.min*Math.PI/180,max:n.max*Math.PI/180}:{min:0,max:n*Math.PI/180}}}async function s(i,t=!0){await i.addShape("circle",new n,t)}},7283:(i,t,e)=>{e.r(t),e.d(t,{loadColorUpdater:()=>c});var o=e(6720),n=e(5302);function s(i,t,e,o,s){if(!t||!e.enable||(t.maxLoops??0)>0&&(t.loops??0)>(t.maxLoops??0))return;if(t.time||(t.time=0),(t.delayTime??0)>0&&t.time<(t.delayTime??0)&&(t.time+=i.value),(t.delayTime??0)>0&&t.time<(t.delayTime??0))return;const a=(0,n.vd)(e.offset),c=(t.velocity??0)*i.factor+3.6*a,r=t.decay??1;s&&"increasing"!==t.status?(t.value-=c,t.value<0&&(t.loops||(t.loops=0),t.loops++,t.status="increasing",t.value+=t.value)):(t.value+=c,t.value>o&&(t.loops||(t.loops=0),t.loops++,s&&(t.status="decreasing",t.value-=t.value%o))),t.velocity&&1!==r&&(t.velocity*=r),t.value>o&&(t.value%=o)}class a{constructor(i){this.container=i}init(i){const t=(0,o.lN)(i.options.color,i.id,i.options.reduceDuplicates);t&&(i.color=(0,o.bS)(t,i.options.color.animation,this.container.retina.reduceFactor))}isEnabled(i){const{h:t,s:e,l:o}=i.options.color.animation,{color:n}=i;return!i.destroyed&&!i.spawning&&(void 0!==n?.h.value&&t.enable||void 0!==n?.s.value&&e.enable||void 0!==n?.l.value&&o.enable)}update(i,t){!function(i,t){const{h:e,s:o,l:n}=i.options.color.animation,{color:a}=i;if(!a)return;const{h:c,s:r,l}=a;c&&s(t,c,e,360,!1),r&&s(t,r,o,100,!0),l&&s(t,l,n,100,!0)}(i,t)}}async function c(i,t=!0){await i.addParticleUpdater("color",(i=>new a(i)),t)}},4404:(i,t,e)=>{e.r(t),e.d(t,{loadOpacityUpdater:()=>a});var o=e(4684),n=e(5302);class s{constructor(i){this.container=i}init(i){const t=i.options.opacity;i.opacity=(0,o.V0)(t,1);const e=t.animation;e.enable&&(i.opacity.velocity=(0,n.Gu)(e.speed)/100*this.container.retina.reduceFactor,e.sync||(i.opacity.velocity*=(0,n.sZ)()))}isEnabled(i){return!i.destroyed&&!i.spawning&&!!i.opacity&&i.opacity.enable&&((i.opacity.maxLoops??0)<=0||(i.opacity.maxLoops??0)>0&&(i.opacity.loops??0)<(i.opacity.maxLoops??0))}reset(i){i.opacity&&(i.opacity.time=0,i.opacity.loops=0)}update(i,t){this.isEnabled(i)&&function(i,t){const e=i.opacity;if(i.destroyed||!e?.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0))return;const o=e.min,s=e.max,a=e.decay??1;if(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=t.value),!((e.delayTime??0)>0&&e.time<(e.delayTime??0))){switch(e.status){case"increasing":e.value>=s?(e.status="decreasing",e.loops||(e.loops=0),e.loops++):e.value+=(e.velocity??0)*t.factor;break;case"decreasing":e.value<=o?(e.status="increasing",e.loops||(e.loops=0),e.loops++):e.value-=(e.velocity??0)*t.factor}e.velocity&&1!==e.decay&&(e.velocity*=a),function(i,t,e,o){switch(i.options.opacity.animation.destroy){case"max":t>=o&&i.destroy();break;case"min":t<=e&&i.destroy()}}(i,e.value,o,s),i.destroyed||(e.value=(0,n.uZ)(e.value,o,s))}}(i,t)}}async function a(i,t=!0){await i.addParticleUpdater("opacity",(i=>new s(i)),t)}},4224:(i,t,e)=>{e.r(t),e.d(t,{loadOutModesUpdater:()=>p});var o=e(4684),n=e(5302);class s{constructor(i){this.container=i,this.modes=["bounce","bounce-vertical","bounce-horizontal","bounceVertical","bounceHorizontal","split"]}update(i,t,e,s){if(!this.modes.includes(s))return;const a=this.container;let c=!1;for(const[,o]of a.plugins)if(void 0!==o.particleBounce&&(c=o.particleBounce(i,e,t)),c)break;if(c)return;const r=i.getPosition(),l=i.offset,d=i.getRadius(),p=(0,o.M_)(r,d),u=a.canvas.size;!function(i){if("bounce"!==i.outMode&&"bounce-horizontal"!==i.outMode&&"bounceHorizontal"!==i.outMode&&"split"!==i.outMode)return;i.bounds.right<0?i.particle.position.x=i.size+i.offset.x:i.bounds.left>i.canvasSize.width&&(i.particle.position.x=i.canvasSize.width-i.size-i.offset.x);const t=i.particle.velocity.x;let e=!1;if("right"===i.direction&&i.bounds.right>=i.canvasSize.width&&t>0||"left"===i.direction&&i.bounds.left<=0&&t<0){const t=(0,n.NA)(i.particle.options.bounce.horizontal);i.particle.velocity.x*=-t,e=!0}if(!e)return;const o=i.offset.x+i.size;i.bounds.right>=i.canvasSize.width?i.particle.position.x=i.canvasSize.width-o:i.bounds.left<=0&&(i.particle.position.x=o),"split"===i.outMode&&i.particle.destroy()}({particle:i,outMode:s,direction:t,bounds:p,canvasSize:u,offset:l,size:d}),function(i){if("bounce"!==i.outMode&&"bounce-vertical"!==i.outMode&&"bounceVertical"!==i.outMode&&"split"!==i.outMode)return;i.bounds.bottom<0?i.particle.position.y=i.size+i.offset.y:i.bounds.top>i.canvasSize.height&&(i.particle.position.y=i.canvasSize.height-i.size-i.offset.y);const t=i.particle.velocity.y;let e=!1;if("bottom"===i.direction&&i.bounds.bottom>=i.canvasSize.height&&t>0||"top"===i.direction&&i.bounds.top<=0&&t<0){const t=(0,n.NA)(i.particle.options.bounce.vertical);i.particle.velocity.y*=-t,e=!0}if(!e)return;const o=i.offset.y+i.size;i.bounds.bottom>=i.canvasSize.height?i.particle.position.y=i.canvasSize.height-o:i.bounds.top<=0&&(i.particle.position.y=o),"split"===i.outMode&&i.particle.destroy()}({particle:i,outMode:s,direction:t,bounds:p,canvasSize:u,offset:l,size:d})}}var a=e(2613);class c{constructor(i){this.container=i,this.modes=["destroy"]}update(i,t,e,s){if(!this.modes.includes(s))return;const c=this.container;switch(i.outType){case"normal":case"outside":if((0,o.Ac)(i.position,c.canvas.size,a.O.origin,i.getRadius(),t))return;break;case"inside":{const{dx:t,dy:e}=(0,n.oW)(i.position,i.moveCenter),{x:o,y:s}=i.velocity;if(o<0&&t>i.moveCenter.radius||s<0&&e>i.moveCenter.radius||o>=0&&t<-i.moveCenter.radius||s>=0&&e<-i.moveCenter.radius)return;break}}c.particles.remove(i,void 0,!0)}}class r{constructor(i){this.container=i,this.modes=["none"]}update(i,t,e,n){if(!this.modes.includes(n))return;if(i.options.move.distance.horizontal&&("left"===t||"right"===t)||i.options.move.distance.vertical&&("top"===t||"bottom"===t))return;const s=i.options.move.gravity,c=this.container,r=c.canvas.size,l=i.getRadius();if(s.enable){const e=i.position;(!s.inverse&&e.y>r.height+l&&"bottom"===t||s.inverse&&e.y<-l&&"top"===t)&&c.particles.remove(i)}else{if(i.velocity.y>0&&i.position.y<=r.height+l||i.velocity.y<0&&i.position.y>=-l||i.velocity.x>0&&i.position.x<=r.width+l||i.velocity.x<0&&i.position.x>=-l)return;(0,o.Ac)(i.position,c.canvas.size,a.O.origin,l,t)||c.particles.remove(i)}}}class l{constructor(i){this.container=i,this.modes=["out"]}update(i,t,e,s){if(!this.modes.includes(s))return;const c=this.container;switch(i.outType){case"inside":{const{x:t,y:e}=i.velocity,o=a.O.origin;o.length=i.moveCenter.radius,o.angle=i.velocity.angle+Math.PI,o.addTo(a.O.create(i.moveCenter));const{dx:s,dy:r}=(0,n.oW)(i.position,o);if(t<=0&&s>=0||e<=0&&r>=0||t>=0&&s<=0||e>=0&&r<=0)return;i.position.x=Math.floor((0,n.vd)({min:0,max:c.canvas.size.width})),i.position.y=Math.floor((0,n.vd)({min:0,max:c.canvas.size.height}));const{dx:l,dy:d}=(0,n.oW)(i.position,i.moveCenter);i.direction=Math.atan2(-d,-l),i.velocity.angle=i.direction;break}default:if((0,o.Ac)(i.position,c.canvas.size,a.O.origin,i.getRadius(),t))return;switch(i.outType){case"outside":{i.position.x=Math.floor((0,n.vd)({min:-i.moveCenter.radius,max:i.moveCenter.radius}))+i.moveCenter.x,i.position.y=Math.floor((0,n.vd)({min:-i.moveCenter.radius,max:i.moveCenter.radius}))+i.moveCenter.y;const{dx:t,dy:e}=(0,n.oW)(i.position,i.moveCenter);i.moveCenter.radius&&(i.direction=Math.atan2(e,t),i.velocity.angle=i.direction);break}case"normal":{const e=i.options.move.warp,s=c.canvas.size,a={bottom:s.height+i.getRadius()+i.offset.y,left:-i.getRadius()-i.offset.x,right:s.width+i.getRadius()+i.offset.x,top:-i.getRadius()-i.offset.y},r=i.getRadius(),l=(0,o.M_)(i.position,r);"right"===t&&l.left>s.width+i.offset.x?(i.position.x=a.left,i.initialPosition.x=i.position.x,e||(i.position.y=(0,n.sZ)()*s.height,i.initialPosition.y=i.position.y)):"left"===t&&l.right<-i.offset.x&&(i.position.x=a.right,i.initialPosition.x=i.position.x,e||(i.position.y=(0,n.sZ)()*s.height,i.initialPosition.y=i.position.y)),"bottom"===t&&l.top>s.height+i.offset.y?(e||(i.position.x=(0,n.sZ)()*s.width,i.initialPosition.x=i.position.x),i.position.y=a.top,i.initialPosition.y=i.position.y):"top"===t&&l.bottom<-i.offset.y&&(e||(i.position.x=(0,n.sZ)()*s.width,i.initialPosition.x=i.position.x),i.position.y=a.bottom,i.initialPosition.y=i.position.y);break}}}}}class d{constructor(i){this.container=i,this._updateOutMode=(i,t,e,o)=>{for(const n of this.updaters)n.update(i,o,t,e)},this.updaters=[new s(i),new c(i),new l(i),new r(i)]}init(){}isEnabled(i){return!i.destroyed&&!i.spawning}update(i,t){const e=i.options.move.outModes;this._updateOutMode(i,t,e.bottom??e.default,"bottom"),this._updateOutMode(i,t,e.left??e.default,"left"),this._updateOutMode(i,t,e.right??e.default,"right"),this._updateOutMode(i,t,e.top??e.default,"top")}}async function p(i,t=!0){await i.addParticleUpdater("outModes",(i=>new d(i)),t)}},879:(i,t,e)=>{e.r(t),e.d(t,{loadSizeUpdater:()=>s});var o=e(5302);class n{init(i){const t=i.container,e=i.options.size.animation;e.enable&&(i.size.velocity=(i.retina.sizeAnimationSpeed??t.retina.sizeAnimationSpeed)/100*t.retina.reduceFactor,e.sync||(i.size.velocity*=(0,o.sZ)()))}isEnabled(i){return!i.destroyed&&!i.spawning&&i.size.enable&&((i.size.maxLoops??0)<=0||(i.size.maxLoops??0)>0&&(i.size.loops??0)<(i.size.maxLoops??0))}reset(i){i.size.loops=0}update(i,t){this.isEnabled(i)&&function(i,t){const e=i.size;if(i.destroyed||!e||!e.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0))return;const n=(e.velocity??0)*t.factor,s=e.min,a=e.max,c=e.decay??1;if(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=t.value),!((e.delayTime??0)>0&&e.time<(e.delayTime??0))){switch(e.status){case"increasing":e.value>=a?(e.status="decreasing",e.loops||(e.loops=0),e.loops++):e.value+=n;break;case"decreasing":e.value<=s?(e.status="increasing",e.loops||(e.loops=0),e.loops++):e.value-=n}e.velocity&&1!==c&&(e.velocity*=c),function(i,t,e,o){switch(i.options.size.animation.destroy){case"max":t>=o&&i.destroy();break;case"min":t<=e&&i.destroy()}}(i,e.value,s,a),i.destroyed||(e.value=(0,o.uZ)(e.value,s,a))}}(i,t)}}async function s(i,t=!0){await i.addParticleUpdater("size",(()=>new n),t)}}}]);