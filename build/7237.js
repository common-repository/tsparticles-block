"use strict";(globalThis.webpackChunkwordpress_particles=globalThis.webpackChunkwordpress_particles||[]).push([[7237],{7237:(a,s,t)=>{t.r(s),t.d(s,{loadStarShape:()=>n});var e=t(5302);class r{draw(a,s,t){const e=s.sides,r=s.starInset??2;a.moveTo(0,0-t);for(let s=0;s<e;s++)a.rotate(Math.PI/e),a.lineTo(0,0-t*r),a.rotate(Math.PI/e),a.lineTo(0,0-t)}getSidesCount(a){const s=a.shapeData;return Math.round((0,e.Gu)(s?.sides??s?.nb_sides??5))}particleInit(a,s){const t=s.shapeData,r=(0,e.Gu)(t?.inset??2);s.starInset=r}}async function n(a,s=!0){await a.addShape("star",new r,s)}}}]);