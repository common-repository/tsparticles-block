"use strict";(globalThis.webpackChunk_tsparticles_wordpress=globalThis.webpackChunk_tsparticles_wordpress||[]).push([[2709],{2709:(e,n,t)=>{t.d(n,{U:()=>a,loadCurvesPath:()=>c});var o=t(9201);class r{constructor(){this.options={rndFunc:null,period:100,nbHarmonics:2,attenHarmonics:.8,lowValue:-.03,highValue:.03}}generate(e){if(!e.pathGen){const n=this.options;e.pathGen=function(e,n,t,r,a=0,c=1){const i=[],l=[],s=[],u=[],h=[],p=e??o.sZ;let d=0;t<1&&(t=1);for(let e=1;e<=t;++e)i[e]=p(),l[e]=p(),s[e]=1===e?1:s[e-1]*r,d+=s[e],u[e]=e/n,h[e]=p();return s.forEach(((e,n)=>s[n]=e/d*(c-a))),()=>{let e,n,o=0;for(let r=t;r>=1;--r)e=h[r]+=u[r],h[r]>=1&&(e=h[r]-=1,i[r]=l[r],l[r]=p()),n=e**2*(3-2*e),o+=(i[r]*(1-n)+l[r]*n)*s[r];return o+a}}(n.rndFunc,n.period,n.nbHarmonics,n.attenHarmonics,n.lowValue,n.highValue)}return e.curveVelocity?(e.curveVelocity.length+=.01,e.curveVelocity.angle=(e.curveVelocity.angle+e.pathGen())%(2*Math.PI)):(e.curveVelocity=o.OW.origin,e.curveVelocity.length=.6*(0,o.sZ)()+.8,e.curveVelocity.angle=(0,o.sZ)()*Math.PI*2),e.velocity.x=0,e.velocity.y=0,e.curveVelocity}init(e){const n=e.actualOptions.particles.move.path.options,{options:t}=this;(0,o.mf)(n.rndFunc)?t.rndFunc=n.rndFunc:(0,o.HD)(n.rndFunc)&&(t.rndFunc=window[n.rndFunc]||this.options.rndFunc),t.period=n.period??t.period,t.nbHarmonics=n.nbHarmonics??t.nbHarmonics,t.attenHarmonics=n.attenHarmonics??t.attenHarmonics,t.lowValue=n.lowValue??t.lowValue,t.highValue=n.highValue??t.highValue}reset(e){delete e.pathGen,delete e.curveVelocity}update(){}}const a="curvesPathGenerator";async function c(e,n=!0){await e.addPathGenerator(a,new r,n)}}}]);