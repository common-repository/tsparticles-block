"use strict";(globalThis.webpackChunkwordpress_particles=globalThis.webpackChunkwordpress_particles||[]).push([[3857],{1688:(o,i,s)=>{s.d(i,{$:()=>e});class e{constructor(o){this.container=o,this.type="particles"}}},3857:(o,i,s)=>{s.r(i),s.d(i,{loadParticlesCollisionsInteraction:()=>u});var e=s(1688),t=s(5302);function n(o,i,s,e,n,a){const d=(0,t.uZ)(o.options.collisions.absorb.speed*n.factor/10,0,e);o.size.value+=d/2,s.size.value-=d,e<=a&&(s.size.value=0,s.destroy())}var a=s(4684);const d=o=>{void 0===o.collisionMaxSpeed&&(o.collisionMaxSpeed=(0,t.Gu)(o.options.collisions.maxSpeed)),o.velocity.length>o.collisionMaxSpeed&&(o.velocity.length=o.collisionMaxSpeed)};function c(o,i){(0,a.kR)((0,a.gy)(o),(0,a.gy)(i)),d(o),d(i)}function l(o,i,s,e){switch(o.options.collisions.mode){case"absorb":!function(o,i,s,e){const t=o.getRadius(),a=i.getRadius();void 0===t&&void 0!==a?o.destroy():void 0!==t&&void 0===a?i.destroy():void 0!==t&&void 0!==a&&(t>=a?n(o,0,i,a,s,e):n(i,0,o,t,s,e))}(o,i,s,e);break;case"bounce":c(o,i);break;case"destroy":!function(o,i){o.unbreakable||i.unbreakable||c(o,i),void 0===o.getRadius()&&void 0!==i.getRadius()?o.destroy():void 0!==o.getRadius()&&void 0===i.getRadius()?i.destroy():void 0!==o.getRadius()&&void 0!==i.getRadius()&&(o.getRadius()>=i.getRadius()?i:o).destroy()}(o,i)}}class r extends e.${constructor(o){super(o)}clear(){}init(){}async interact(o,i){if(o.destroyed||o.spawning)return;const s=this.container,e=o.getPosition(),n=o.getRadius(),a=s.particles.quadTree.queryCircle(e,2*n);for(const d of a){if(o===d||!d.options.collisions.enable||o.options.collisions.mode!==d.options.collisions.mode||d.destroyed||d.spawning)continue;const a=d.getPosition(),c=d.getRadius();Math.abs(Math.round(e.z)-Math.round(a.z))>n+c||((0,t.Sp)(e,a)>n+c||l(o,d,i,s.retina.pixelRatio))}}isEnabled(o){return o.options.collisions.enable}reset(){}}async function u(o,i=!0){await o.addInteractor("particlesCollisions",(o=>new r(o)),i)}}}]);