"use strict";(globalThis.webpackChunkwordpress_particles=globalThis.webpackChunkwordpress_particles||[]).push([[2374],{2374:(s,r,t)=>{t.r(r),t.d(r,{loadHsvColorPlugin:()=>h});var a=t(5302);function o(s){const r={b:0,g:0,r:0},t=s.h/60,a=s.s/100,o=s.v/100,e=o*a,n=e*(1-Math.abs(t%2-1));let h;if(t>=0&&t<=1?h={r:e,g:n,b:0}:t>1&&t<=2?h={r:n,g:e,b:0}:t>2&&t<=3?h={r:0,g:e,b:n}:t>3&&t<=4?h={r:0,g:n,b:e}:t>4&&t<=5?h={r:n,g:0,b:e}:t>5&&t<=6&&(h={r:e,g:0,b:n}),h){const s=o-e;r.r=Math.floor(255*(h.r+s)),r.g=Math.floor(255*(h.g+s)),r.b=Math.floor(255*(h.b+s))}return r}class e{constructor(){this.key="hsv",this.stringPrefix="hsv"}handleColor(s){const r=s.value.hsv??s.value;if(void 0!==r.h&&void 0!==r.v)return o(r)}handleRangeColor(s){const r=s.value.hsv??s.value;if(void 0!==r.h&&void 0!==r.v)return o({h:(0,a.Gu)(r.h),s:(0,a.Gu)(r.s),v:(0,a.Gu)(r.v)})}parseString(s){if(!s.startsWith("hsv"))return;const r=/hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(s);return r?{a:(t={a:r.length>4?(0,a.BV)(r[5]):1,h:parseInt(r[1],10),s:parseInt(r[2],10),v:parseInt(r[3],10)}).a,...o(t)}:void 0;var t}}var n=t(6720);async function h(){(0,n.VI)(new e)}}}]);