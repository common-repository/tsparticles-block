"use strict";(globalThis.webpackChunkwordpress_particles=globalThis.webpackChunkwordpress_particles||[]).push([[5509],{5509:(a,i,s)=>{s.r(i),s.d(i,{loadSpiralShape:()=>p});var r=s(5302);class n{draw(a,i,s){if(void 0===i.spiralInnerRadius||void 0===i.spiralLineSpacing||void 0===i.spiralWidthFactor)return;const r=(s-i.spiralInnerRadius)/i.spiralLineSpacing;for(let s=0;s<10*r;s++){const r=s/10,n=i.spiralInnerRadius+i.spiralLineSpacing*r,p={x:n*Math.cos(r),y:n*Math.sin(r)};a.lineTo(p.x,p.y)}}particleInit(a,i){const s=a.retina.pixelRatio,n=i.shapeData;i.spiralInnerRadius=(0,r.Gu)(n.innerRadius??1)*s,i.spiralLineSpacing=(0,r.Gu)(n.lineSpacing??1)*s,i.spiralWidthFactor=(0,r.Gu)(n.widthFactor??10)}}async function p(a,i=!0){await a.addShape("spiral",new n,i)}}}]);