"use strict";(globalThis.webpackChunk_tsparticles_wordpress=globalThis.webpackChunk_tsparticles_wordpress||[]).push([[9440],{9440:(a,t,o)=>{o.d(t,{loadArrowShape:()=>r});var e=o(9201);class i{draw(a){const{context:t,particle:o,radius:e}=a,i=2*e,r=i*(o.heightFactor??.5),h=i*(o.headWidthFactor??.2),c=r*(o.bodyHeightFactor??.5);t.moveTo(-i/2,0),t.lineTo(-i/2,-c/2),t.lineTo(i/2-h,-c/2),t.lineTo(i/2-h,-r/2),t.lineTo(i/2+h,0),t.lineTo(i/2-h,r/2),t.lineTo(i/2-h,c/2),t.lineTo(-i/2,c/2),t.lineTo(-i/2,0)}particleInit(a,t){const o=t.shapeData;t.heightFactor=(0,e.Gu)(o?.heightFactor??.5),t.headWidthFactor=(0,e.Gu)(o?.headWidthFactor??.2),t.bodyHeightFactor=(0,e.Gu)(o?.bodyHeightFactor??.5)}}async function r(a,t=!0){await a.addShape("arrow",new i,t)}}}]);