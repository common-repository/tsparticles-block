"use strict";(globalThis.webpackChunk_tsparticles_wordpress=globalThis.webpackChunk_tsparticles_wordpress||[]).push([[9233],{9233:(t,e,i)=>{i.d(e,{loadEmittersShapeCanvas:()=>g});var s=i(1814),o=i(9201);function a(t,e,i,s=!0){const o=t.getImageData(0,0,e.width,e.height).data;s&&t.clearRect(0,0,e.width,e.height);const a=[];for(let t=0;t<o.length;t+=i){const s=t/i,n={x:s%e.width,y:Math.floor(s/e.width)};a[n.y]||(a[n.y]=[]),a[n.y][n.x]={r:o[t],g:o[t+1],b:o[t+2],a:o[t+3]/255}}return{pixels:a,width:Math.min(...a.map((t=>t.length))),height:a.length}}class n extends s.F{constructor(t,e,i,s){super(t,e,i,s);const a=s.filter;let n=t=>t.a>0;if(void 0!==a)if((0,o.HD)(a)){if(Object.hasOwn(window,a)){const t=window[a];(0,o.mf)(t)&&(n=t)}}else n=a;this.filter=n,this.scale=s.scale,this.pixelData={pixels:[],height:0,width:0}}async init(){let t;const e=this.options,i=e.selector,s=e.pixels,n=e.image,r=e.element,l=e.text,h=s.offset;if(n){const e=n.src;if(!e)return;t=await function(t,e){const i=new Image;i.crossOrigin="Anonymous";const s=new Promise(((t,s)=>{i.onerror=s,i.onload=()=>{const n=document.createElement("canvas");n.width=i.width,n.height=i.height;const r=n.getContext("2d");if(!r)return s(new Error(`${o.gK} Could not get canvas context`));r.drawImage(i,0,0,i.width,i.height,0,0,n.width,n.height),t(a(r,n,e))}}));return i.src=t,s}(e,h)}else if(l){const e=function(t,e,i){const s=document.createElement("canvas"),n=s.getContext("2d"),{font:r,text:l,lines:h,color:c}=t;if(!l||!n)return;const d=l.split(h.separator),f=(0,o.hj)(r.size)?`${r.size}px`:r.size,g=[];let u=0,x=0;for(const t of d){n.font=`${r.style||""} ${r.variant||""} ${r.weight||""} ${f} ${r.family}`;const e=n.measureText(t),i={measure:e,text:t,height:e.actualBoundingBoxAscent+e.actualBoundingBoxDescent,width:e.width};u=Math.max(u||0,i.width),x+=i.height+h.spacing,g.push(i)}s.width=u,s.height=x;let w=0;for(const t of g)n.font=`${r.style||""} ${r.variant||""} ${r.weight||""} ${f} ${r.family}`,i?(n.fillStyle=c,n.fillText(t.text,0,w+t.measure.actualBoundingBoxAscent)):(n.strokeStyle=c,n.strokeText(t.text,0,w+t.measure.actualBoundingBoxAscent)),w+=t.height+h.spacing;return a(n,s,e)}(l,h,this.fill);if(!e)return;t=e}else if(r||i){const e=r||i&&document.querySelector(i);if(!e)return;const s=e.getContext("2d");if(!s)return;t=a(s,e,h)}t&&(this.pixelData=t)}async randomPosition(){const{height:t,width:e}=this.pixelData,i=this.pixelData,s=this.position,a=this.scale,n=s.x-e*a/2,r=s.y-t*a/2;for(let s=0;s<100;s++){const s=Math.floor((0,o.sZ)()*e*t),l={x:s%e,y:Math.floor(s/e)},h=i.pixels[l.y][l.x];if(this.filter(h))return{position:{x:l.x*a+n,y:l.y*a+r},color:{...h},opacity:h.a}}return null}resize(t,e){super.resize(t,e)}}class r{constructor(){this.offset=4}load(t){t&&void 0!==t.offset&&(this.offset=t.offset)}}class l{constructor(){this.family="Verdana",this.size=32,this.style="",this.variant="",this.weight=""}load(t){t&&(void 0!==t.family&&(this.family=t.family),void 0!==t.size&&(this.size=t.size),void 0!==t.style&&(this.style=t.style),void 0!==t.variant&&(this.variant=t.variant),void 0!==t.weight&&(this.weight=t.weight))}}class h{constructor(){this.separator="\n",this.spacing=0}load(t){t&&(void 0!==t.separator&&(this.separator=t.separator),void 0!==t.spacing&&(this.spacing=t.spacing))}}class c{constructor(){this.color="#000000",this.font=new l,this.lines=new h,this.text=""}load(t){t&&(void 0!==t.color&&(this.color=t.color),this.font.load(t.font),this.lines.load(t.lines),void 0!==t.text&&(this.text=t.text))}}class d{constructor(){this.filter=t=>t.a>0,this.pixels=new r,this.scale=1,this.selector="",this.text=new c}load(t){t&&(void 0!==t.element&&(this.element=t.element),void 0!==t.filter&&(this.filter=t.filter),this.pixels.load(t.pixels),void 0!==t.scale&&(this.scale=t.scale),void 0!==t.selector&&(this.selector=t.selector),void 0!==t.image&&(this.image=t.image),this.text.load(t.text))}}class f{generate(t,e,i,s){const o=new d;return o.load(s),new n(t,e,i,o)}}async function g(t,e=!0){const i=t;i.addEmitterShapeGenerator&&i.addEmitterShapeGenerator("canvas",new f),await i.refresh(e)}}}]);