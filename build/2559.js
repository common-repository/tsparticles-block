"use strict";(globalThis.webpackChunkwordpress_particles=globalThis.webpackChunkwordpress_particles||[]).push([[2559],{3151:(t,e,a)=>{a.d(e,{L:()=>s});class s{constructor(t){this.container=t,this.type="external"}}},2559:(t,e,a)=>{a.r(e),a.d(e,{loadExternalPauseInteraction:()=>r});var s=a(3151);class n extends s.L{constructor(t){super(t),this.handleClickMode=t=>{if("pause"!==t)return;const e=this.container;e.getAnimationStatus()?e.pause():e.play()}}clear(){}init(){}async interact(){}isEnabled(){return!0}reset(){}}async function r(t,e=!0){await t.addInteractor("externalPause",(t=>new n(t)),e)}}}]);