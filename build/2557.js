"use strict";(globalThis.webpackChunk_tsparticles_wordpress=globalThis.webpackChunk_tsparticles_wordpress||[]).push([[2557],{2557:(t,i,s)=>{s.d(i,{loadExternalTrailInteraction:()=>r});var a=s(9201);class e{constructor(){this.delay=1,this.pauseOnStop=!1,this.quantity=1}load(t){t&&(void 0!==t.delay&&(this.delay=t.delay),void 0!==t.quantity&&(this.quantity=t.quantity),void 0!==t.particles&&(this.particles=(0,a.ZB)({},t.particles)),void 0!==t.pauseOnStop&&(this.pauseOnStop=t.pauseOnStop))}}const o="trail";class n extends a.L8{constructor(t){super(t),this._delay=0}clear(){}init(){}async interact(t){const i=this.container,{interactivity:s}=i;if(!i.retina.reduceFactor)return;const a=i.actualOptions.interactivity.modes.trail;if(!a)return;const e=1e3*a.delay/this.container.retina.reduceFactor;if(this._delay<e&&(this._delay+=t.value),this._delay<e)return;const o=!(a.pauseOnStop&&(s.mouse.position===this._lastPosition||s.mouse.position?.x===this._lastPosition?.x&&s.mouse.position?.y===this._lastPosition?.y)),n=i.interactivity.mouse.position;n?this._lastPosition={...n}:delete this._lastPosition,o&&i.particles.push(a.quantity,i.interactivity.mouse,a.particles),this._delay-=e}isEnabled(t){const i=this.container,s=i.actualOptions,e=i.interactivity.mouse,n=(t?.interactivity??s.interactivity).events;return e.clicking&&e.inside&&!!e.position&&(0,a.dB)(o,n.onClick.mode)||e.inside&&!!e.position&&(0,a.dB)(o,n.onHover.mode)}loadModeOptions(t,...i){t.trail||(t.trail=new e);for(const s of i)t.trail.load(s?.trail)}reset(){}}async function r(t,i=!0){await t.addInteractor("externalTrail",(t=>new n(t)),i)}}}]);