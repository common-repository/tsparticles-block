"use strict";(globalThis.webpackChunkwordpress_particles=globalThis.webpackChunkwordpress_particles||[]).push([[6710],{6710:(t,o,e)=>{e.r(o),e.d(o,{loadRoundedRectShape:()=>d});var i=e(5302);const a=Math.sqrt(2);class r{draw(t,o,e){const i=e/a,r=2*i,d=o.borderRadius??5;"roundRect"in t?t.roundRect(-i,-i,r,r,d):((t,o,e={topRight:4,bottomRight:4,bottomLeft:4,topLeft:4})=>{const{x:i,y:a,width:r,height:d}=o,h=i+r,s=a+d;t.moveTo(i+e.topLeft,a),t.lineTo(h-e.topRight,a),t.quadraticCurveTo(h,a,h,a+e.topRight),t.lineTo(h,a+d-e.bottomRight),t.quadraticCurveTo(h,s,h-e.bottomRight,s),t.lineTo(i+e.bottomLeft,s),t.quadraticCurveTo(i,s,i,s-e.bottomLeft),t.lineTo(i,a+e.topLeft),t.quadraticCurveTo(i,a,i+e.topLeft,a)})(t,{x:-i,y:-i,height:r,width:r},{topLeft:d,topRight:d,bottomLeft:d,bottomRight:d})}particleInit(t,o){const e=o.shapeData;o.borderRadius=(0,i.Gu)(e?.radius??5)*t.retina.pixelRatio}}async function d(t,o=!0){await t.addShape("rounded-rect",new r,o)}}}]);