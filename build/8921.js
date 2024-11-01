"use strict";(globalThis.webpackChunk_tsparticles_wordpress=globalThis.webpackChunk_tsparticles_wordpress||[]).push([[8921],{8921:(e,i,t)=>{t.d(i,{loadExternalBubbleInteraction:()=>r});var o=t(9201);class b{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(e){if(e){if(void 0!==e.distance&&(this.distance=e.distance),void 0!==e.duration&&(this.duration=e.duration),void 0!==e.mix&&(this.mix=e.mix),void 0!==e.opacity&&(this.opacity=e.opacity),void 0!==e.color){const i=(0,o.kJ)(this.color)?void 0:this.color;this.color=(0,o.KH)(e.color,(e=>o.Oz.create(i,e)))}void 0!==e.size&&(this.size=e.size)}}}class s extends b{constructor(){super(),this.selectors=[]}load(e){super.load(e),e&&void 0!==e.selectors&&(this.selectors=e.selectors)}}class l extends b{load(e){super.load(e),e&&(this.divs=(0,o.KH)(e.divs,(e=>{const i=new s;return i.load(e),i})))}}function n(e,i,t,b){if(i>=t){const s=e+(i-t)*b;return(0,o.uZ)(s,e,i)}if(i<t){const s=e-(t-i)*b;return(0,o.uZ)(s,i,e)}}const a="bubble";class c extends o.L8{constructor(e){super(e),this._clickBubble=()=>{const e=this.container,i=e.actualOptions,t=e.interactivity.mouse.clickPosition,b=i.interactivity.modes.bubble;if(!b||!t)return;e.bubble||(e.bubble={});const s=e.retina.bubbleModeDistance;if(!s||s<0)return;const l=e.particles.quadTree.queryCircle(t,s,(e=>this.isEnabled(e))),{bubble:n}=e;for(const i of l){if(!n.clicking)continue;i.bubble.inRange=!n.durationEnd;const l=i.getPosition(),a=(0,o.Sp)(l,t),c=((new Date).getTime()-(e.interactivity.mouse.clickTime||0))/1e3;c>b.duration&&(n.durationEnd=!0),c>2*b.duration&&(n.clicking=!1,n.durationEnd=!1);const r={bubbleObj:{optValue:e.retina.bubbleModeSize,value:i.bubble.radius},particlesObj:{optValue:(0,o.KI)(i.options.size.value)*e.retina.pixelRatio,value:i.size.value},type:"size"};this._process(i,a,c,r);const u={bubbleObj:{optValue:b.opacity,value:i.bubble.opacity},particlesObj:{optValue:(0,o.KI)(i.options.opacity.value),value:i.opacity?.value??1},type:"opacity"};this._process(i,a,c,u),!n.durationEnd&&a<=s?this._hoverBubbleColor(i,a):delete i.bubble.color}},this._hoverBubble=()=>{const e=this.container,i=e.interactivity.mouse.position,t=e.retina.bubbleModeDistance;if(!t||t<0||void 0===i)return;const b=e.particles.quadTree.queryCircle(i,t,(e=>this.isEnabled(e)));for(const s of b){s.bubble.inRange=!0;const b=s.getPosition(),l=(0,o.Sp)(b,i),n=1-l/t;l<=t?n>=0&&e.interactivity.status===o.Wt&&(this._hoverBubbleSize(s,n),this._hoverBubbleOpacity(s,n),this._hoverBubbleColor(s,n)):this.reset(s),e.interactivity.status===o.aM&&this.reset(s)}},this._hoverBubbleColor=(e,i,t)=>{const b=this.container.actualOptions,s=t??b.interactivity.modes.bubble;if(s){if(!e.bubble.finalColor){const i=s.color;if(!i)return;const t=(0,o.wA)(i);e.bubble.finalColor=(0,o.lN)(t)}if(e.bubble.finalColor)if(s.mix){e.bubble.color=void 0;const t=e.getFillColor();e.bubble.color=t?(0,o.lC)((0,o.oc)(t,e.bubble.finalColor,1-i,i)):e.bubble.finalColor}else e.bubble.color=e.bubble.finalColor}},this._hoverBubbleOpacity=(e,i,t)=>{const b=this.container.actualOptions,s=t?.opacity??b.interactivity.modes.bubble?.opacity;if(!s)return;const l=e.options.opacity.value,a=n(e.opacity?.value??1,s,(0,o.KI)(l),i);void 0!==a&&(e.bubble.opacity=a)},this._hoverBubbleSize=(e,i,t)=>{const b=this.container,s=t?.size?t.size*b.retina.pixelRatio:b.retina.bubbleModeSize;if(void 0===s)return;const l=(0,o.KI)(e.options.size.value)*b.retina.pixelRatio,a=n(e.size.value,s,l,i);void 0!==a&&(e.bubble.radius=a)},this._process=(e,i,t,o)=>{const b=this.container,s=o.bubbleObj.optValue,l=b.actualOptions.interactivity.modes.bubble;if(!l||void 0===s)return;const n=l.duration,a=b.retina.bubbleModeDistance,c=o.particlesObj.optValue,r=o.bubbleObj.value,u=o.particlesObj.value||0,d=o.type;if(a&&!(a<0)&&s!==c)if(b.bubble||(b.bubble={}),b.bubble.durationEnd)r&&("size"===d&&delete e.bubble.radius,"opacity"===d&&delete e.bubble.opacity);else if(i<=a){if((r??u)!==s){const i=u-t*(u-s)/n;"size"===d&&(e.bubble.radius=i),"opacity"===d&&(e.bubble.opacity=i)}}else"size"===d&&delete e.bubble.radius,"opacity"===d&&delete e.bubble.opacity},this._singleSelectorHover=(e,i,t)=>{const b=this.container,s=document.querySelectorAll(i),l=b.actualOptions.interactivity.modes.bubble;l&&s.length&&s.forEach((i=>{const s=i,n=b.retina.pixelRatio,a={x:(s.offsetLeft+s.offsetWidth/2)*n,y:(s.offsetTop+s.offsetHeight/2)*n},c=s.offsetWidth/2*n,r="circle"===t.type?new o.Cd(a.x,a.y,c):new o.Ae(s.offsetLeft*n,s.offsetTop*n,s.offsetWidth*n,s.offsetHeight*n),u=b.particles.quadTree.query(r,(e=>this.isEnabled(e)));for(const i of u){if(!r.contains(i.getPosition()))continue;i.bubble.inRange=!0;const t=l.divs,b=(0,o.iC)(t,s);i.bubble.div&&i.bubble.div===s||(this.clear(i,e,!0),i.bubble.div=s),this._hoverBubbleSize(i,1,b),this._hoverBubbleOpacity(i,1,b),this._hoverBubbleColor(i,1,b)}}))},e.bubble||(e.bubble={}),this.handleClickMode=i=>{i===a&&(e.bubble||(e.bubble={}),e.bubble.clicking=!0)}}clear(e,i,t){e.bubble.inRange&&!t||(delete e.bubble.div,delete e.bubble.opacity,delete e.bubble.radius,delete e.bubble.color)}init(){const e=this.container,i=e.actualOptions.interactivity.modes.bubble;i&&(e.retina.bubbleModeDistance=i.distance*e.retina.pixelRatio,void 0!==i.size&&(e.retina.bubbleModeSize=i.size*e.retina.pixelRatio))}async interact(e){const i=this.container.actualOptions.interactivity.events,t=i.onHover,b=i.onClick,s=t.enable,l=t.mode,n=b.enable,c=b.mode,r=i.onDiv;s&&(0,o.dB)(a,l)?this._hoverBubble():n&&(0,o.dB)(a,c)?this._clickBubble():(0,o.XD)(a,r,((i,t)=>this._singleSelectorHover(e,i,t)))}isEnabled(e){const i=this.container,t=i.actualOptions,b=i.interactivity.mouse,s=(e?.interactivity??t.interactivity).events,{onClick:l,onDiv:n,onHover:c}=s,r=(0,o.wm)(a,n);return!!(r||c.enable&&b.position||l.enable&&b.clickPosition)&&((0,o.dB)(a,c.mode)||(0,o.dB)(a,l.mode)||r)}loadModeOptions(e,...i){e.bubble||(e.bubble=new l);for(const t of i)e.bubble.load(t?.bubble)}reset(e){e.bubble.inRange=!1}}async function r(e,i=!0){await e.addInteractor("externalBubble",(e=>new c(e)),i)}}}]);