import{O as uQ,K as fQ,d as hQ,f as mQ,g as dQ,t as yQ,j as vQ}from"./index-2d73d3b2.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="148",Xr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gQ=0,Va=1,CQ=2,D6=1,SQ=2,Jo=3,tr=0,Vn=1,v_=2,Vs=3,er=0,po=1,ja=2,Ha=3,qa=4,xQ=5,lo=100,wQ=101,MQ=102,ba=103,Xa=104,TQ=200,RQ=201,kQ=202,DQ=203,A6=204,E6=205,AQ=206,EQ=207,IQ=208,LQ=209,PQ=210,OQ=0,FQ=1,BQ=2,nc=3,NQ=4,WQ=5,GQ=6,UQ=7,g_=0,zQ=1,VQ=2,B1=0,jQ=1,HQ=2,qQ=3,bQ=4,XQ=5,I6=300,ho=301,mo=302,rc=303,oc=304,C_=306,yo=1e3,Un=1001,m_=1002,Fi=1003,sc=1004,u_=1005,Tn=1006,L6=1007,kr=1008,Dr=1009,KQ=1010,ZQ=1011,P6=1012,YQ=1013,xr=1014,J1=1015,is=1016,QQ=1017,JQ=1018,uo=1020,$Q=1021,eJ=1022,zn=1023,tJ=1024,iJ=1025,Mr=1026,vo=1027,nJ=1028,rJ=1029,oJ=1030,sJ=1031,_J=1033,S4=33776,x4=33777,w4=33778,M4=33779,Ka=35840,Za=35841,Ya=35842,Qa=35843,cJ=36196,Ja=37492,$a=37496,e8=37808,t8=37809,i8=37810,n8=37811,r8=37812,o8=37813,s8=37814,_8=37815,c8=37816,l8=37817,a8=37818,p8=37819,u8=37820,f8=37821,h8=36492,ns=2300,go=2301,T4=2302,m8=2400,d8=2401,y8=2402,lJ=2500,aJ=1,O6=2,Ar=3e3,xt=3001,pJ=3200,uJ=3201,S_=0,fJ=1,a1="srgb",rs="srgb-linear",R4=7680,hJ=519,_c=35044,v8="300 es",cc=1035;class Pr{addEventListener(u,y){this._listeners===void 0&&(this._listeners={});const w=this._listeners;w[u]===void 0&&(w[u]=[]),w[u].indexOf(y)===-1&&w[u].push(y)}hasEventListener(u,y){if(this._listeners===void 0)return!1;const w=this._listeners;return w[u]!==void 0&&w[u].indexOf(y)!==-1}removeEventListener(u,y){if(this._listeners===void 0)return;const g=this._listeners[u];if(g!==void 0){const O=g.indexOf(y);O!==-1&&g.splice(O,1)}}dispatchEvent(u){if(this._listeners===void 0)return;const w=this._listeners[u.type];if(w!==void 0){u.target=this;const g=w.slice(0);for(let O=0,V=g.length;O<V;O++)g[O].call(this,u);u.target=null}}}const Xi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let g8=1234567;const es=Math.PI/180,os=180/Math.PI;function Qn(){const q=Math.random()*4294967295|0,u=Math.random()*4294967295|0,y=Math.random()*4294967295|0,w=Math.random()*4294967295|0;return(Xi[q&255]+Xi[q>>8&255]+Xi[q>>16&255]+Xi[q>>24&255]+"-"+Xi[u&255]+Xi[u>>8&255]+"-"+Xi[u>>16&15|64]+Xi[u>>24&255]+"-"+Xi[y&63|128]+Xi[y>>8&255]+"-"+Xi[y>>16&255]+Xi[y>>24&255]+Xi[w&255]+Xi[w>>8&255]+Xi[w>>16&255]+Xi[w>>24&255]).toLowerCase()}function Ki(q,u,y){return Math.max(u,Math.min(y,q))}function mc(q,u){return(q%u+u)%u}function mJ(q,u,y,w,g){return w+(q-u)*(g-w)/(y-u)}function dJ(q,u,y){return q!==u?(y-q)/(u-q):0}function ts(q,u,y){return(1-y)*q+y*u}function yJ(q,u,y,w){return ts(q,u,1-Math.exp(-y*w))}function vJ(q,u=1){return u-Math.abs(mc(q,u*2)-u)}function gJ(q,u,y){return q<=u?0:q>=y?1:(q=(q-u)/(y-u),q*q*(3-2*q))}function CJ(q,u,y){return q<=u?0:q>=y?1:(q=(q-u)/(y-u),q*q*q*(q*(q*6-15)+10))}function SJ(q,u){return q+Math.floor(Math.random()*(u-q+1))}function xJ(q,u){return q+Math.random()*(u-q)}function wJ(q){return q*(.5-Math.random())}function MJ(q){q!==void 0&&(g8=q);let u=g8+=1831565813;return u=Math.imul(u^u>>>15,u|1),u^=u+Math.imul(u^u>>>7,u|61),((u^u>>>14)>>>0)/4294967296}function TJ(q){return q*es}function RJ(q){return q*os}function lc(q){return(q&q-1)===0&&q!==0}function F6(q){return Math.pow(2,Math.ceil(Math.log(q)/Math.LN2))}function d_(q){return Math.pow(2,Math.floor(Math.log(q)/Math.LN2))}function kJ(q,u,y,w,g){const O=Math.cos,V=Math.sin,z=O(y/2),K=V(y/2),Q=O((u+w)/2),n0=V((u+w)/2),_0=O((u-w)/2),c0=V((u-w)/2),g0=O((w-u)/2),R0=V((w-u)/2);switch(g){case"XYX":q.set(z*n0,K*_0,K*c0,z*Q);break;case"YZY":q.set(K*c0,z*n0,K*_0,z*Q);break;case"ZXZ":q.set(K*_0,K*c0,z*n0,z*Q);break;case"XZX":q.set(z*n0,K*R0,K*g0,z*Q);break;case"YXY":q.set(K*g0,z*n0,K*R0,z*Q);break;case"ZYZ":q.set(K*R0,K*g0,z*n0,z*Q);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+g)}}function O1(q,u){switch(u.constructor){case Float32Array:return q;case Uint16Array:return q/65535;case Uint8Array:return q/255;case Int16Array:return Math.max(q/32767,-1);case Int8Array:return Math.max(q/127,-1);default:throw new Error("Invalid component type.")}}function Et(q,u){switch(u.constructor){case Float32Array:return q;case Uint16Array:return Math.round(q*65535);case Uint8Array:return Math.round(q*255);case Int16Array:return Math.round(q*32767);case Int8Array:return Math.round(q*127);default:throw new Error("Invalid component type.")}}var DJ=Object.freeze({__proto__:null,DEG2RAD:es,RAD2DEG:os,generateUUID:Qn,clamp:Ki,euclideanModulo:mc,mapLinear:mJ,inverseLerp:dJ,lerp:ts,damp:yJ,pingpong:vJ,smoothstep:gJ,smootherstep:CJ,randInt:SJ,randFloat:xJ,randFloatSpread:wJ,seededRandom:MJ,degToRad:TJ,radToDeg:RJ,isPowerOfTwo:lc,ceilPowerOfTwo:F6,floorPowerOfTwo:d_,setQuaternionFromProperEuler:kJ,normalize:Et,denormalize:O1});class Le{constructor(u=0,y=0){Le.prototype.isVector2=!0,this.x=u,this.y=y}get width(){return this.x}set width(u){this.x=u}get height(){return this.y}set height(u){this.y=u}set(u,y){return this.x=u,this.y=y,this}setScalar(u){return this.x=u,this.y=u,this}setX(u){return this.x=u,this}setY(u){return this.y=u,this}setComponent(u,y){switch(u){case 0:this.x=y;break;case 1:this.y=y;break;default:throw new Error("index is out of range: "+u)}return this}getComponent(u){switch(u){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+u)}}clone(){return new this.constructor(this.x,this.y)}copy(u){return this.x=u.x,this.y=u.y,this}add(u){return this.x+=u.x,this.y+=u.y,this}addScalar(u){return this.x+=u,this.y+=u,this}addVectors(u,y){return this.x=u.x+y.x,this.y=u.y+y.y,this}addScaledVector(u,y){return this.x+=u.x*y,this.y+=u.y*y,this}sub(u){return this.x-=u.x,this.y-=u.y,this}subScalar(u){return this.x-=u,this.y-=u,this}subVectors(u,y){return this.x=u.x-y.x,this.y=u.y-y.y,this}multiply(u){return this.x*=u.x,this.y*=u.y,this}multiplyScalar(u){return this.x*=u,this.y*=u,this}divide(u){return this.x/=u.x,this.y/=u.y,this}divideScalar(u){return this.multiplyScalar(1/u)}applyMatrix3(u){const y=this.x,w=this.y,g=u.elements;return this.x=g[0]*y+g[3]*w+g[6],this.y=g[1]*y+g[4]*w+g[7],this}min(u){return this.x=Math.min(this.x,u.x),this.y=Math.min(this.y,u.y),this}max(u){return this.x=Math.max(this.x,u.x),this.y=Math.max(this.y,u.y),this}clamp(u,y){return this.x=Math.max(u.x,Math.min(y.x,this.x)),this.y=Math.max(u.y,Math.min(y.y,this.y)),this}clampScalar(u,y){return this.x=Math.max(u,Math.min(y,this.x)),this.y=Math.max(u,Math.min(y,this.y)),this}clampLength(u,y){const w=this.length();return this.divideScalar(w||1).multiplyScalar(Math.max(u,Math.min(y,w)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(u){return this.x*u.x+this.y*u.y}cross(u){return this.x*u.y-this.y*u.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(u){return Math.sqrt(this.distanceToSquared(u))}distanceToSquared(u){const y=this.x-u.x,w=this.y-u.y;return y*y+w*w}manhattanDistanceTo(u){return Math.abs(this.x-u.x)+Math.abs(this.y-u.y)}setLength(u){return this.normalize().multiplyScalar(u)}lerp(u,y){return this.x+=(u.x-this.x)*y,this.y+=(u.y-this.y)*y,this}lerpVectors(u,y,w){return this.x=u.x+(y.x-u.x)*w,this.y=u.y+(y.y-u.y)*w,this}equals(u){return u.x===this.x&&u.y===this.y}fromArray(u,y=0){return this.x=u[y],this.y=u[y+1],this}toArray(u=[],y=0){return u[y]=this.x,u[y+1]=this.y,u}fromBufferAttribute(u,y){return this.x=u.getX(y),this.y=u.getY(y),this}rotateAround(u,y){const w=Math.cos(y),g=Math.sin(y),O=this.x-u.x,V=this.y-u.y;return this.x=O*w-V*g+u.x,this.y=O*g+V*w+u.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(){Ln.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(u,y,w,g,O,V,z,K,Q){const n0=this.elements;return n0[0]=u,n0[1]=g,n0[2]=z,n0[3]=y,n0[4]=O,n0[5]=K,n0[6]=w,n0[7]=V,n0[8]=Q,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(u){const y=this.elements,w=u.elements;return y[0]=w[0],y[1]=w[1],y[2]=w[2],y[3]=w[3],y[4]=w[4],y[5]=w[5],y[6]=w[6],y[7]=w[7],y[8]=w[8],this}extractBasis(u,y,w){return u.setFromMatrix3Column(this,0),y.setFromMatrix3Column(this,1),w.setFromMatrix3Column(this,2),this}setFromMatrix4(u){const y=u.elements;return this.set(y[0],y[4],y[8],y[1],y[5],y[9],y[2],y[6],y[10]),this}multiply(u){return this.multiplyMatrices(this,u)}premultiply(u){return this.multiplyMatrices(u,this)}multiplyMatrices(u,y){const w=u.elements,g=y.elements,O=this.elements,V=w[0],z=w[3],K=w[6],Q=w[1],n0=w[4],_0=w[7],c0=w[2],g0=w[5],R0=w[8],f0=g[0],h0=g[3],k0=g[6],G0=g[1],P0=g[4],F0=g[7],W0=g[2],Q0=g[5],o2=g[8];return O[0]=V*f0+z*G0+K*W0,O[3]=V*h0+z*P0+K*Q0,O[6]=V*k0+z*F0+K*o2,O[1]=Q*f0+n0*G0+_0*W0,O[4]=Q*h0+n0*P0+_0*Q0,O[7]=Q*k0+n0*F0+_0*o2,O[2]=c0*f0+g0*G0+R0*W0,O[5]=c0*h0+g0*P0+R0*Q0,O[8]=c0*k0+g0*F0+R0*o2,this}multiplyScalar(u){const y=this.elements;return y[0]*=u,y[3]*=u,y[6]*=u,y[1]*=u,y[4]*=u,y[7]*=u,y[2]*=u,y[5]*=u,y[8]*=u,this}determinant(){const u=this.elements,y=u[0],w=u[1],g=u[2],O=u[3],V=u[4],z=u[5],K=u[6],Q=u[7],n0=u[8];return y*V*n0-y*z*Q-w*O*n0+w*z*K+g*O*Q-g*V*K}invert(){const u=this.elements,y=u[0],w=u[1],g=u[2],O=u[3],V=u[4],z=u[5],K=u[6],Q=u[7],n0=u[8],_0=n0*V-z*Q,c0=z*K-n0*O,g0=Q*O-V*K,R0=y*_0+w*c0+g*g0;if(R0===0)return this.set(0,0,0,0,0,0,0,0,0);const f0=1/R0;return u[0]=_0*f0,u[1]=(g*Q-n0*w)*f0,u[2]=(z*w-g*V)*f0,u[3]=c0*f0,u[4]=(n0*y-g*K)*f0,u[5]=(g*O-z*y)*f0,u[6]=g0*f0,u[7]=(w*K-Q*y)*f0,u[8]=(V*y-w*O)*f0,this}transpose(){let u;const y=this.elements;return u=y[1],y[1]=y[3],y[3]=u,u=y[2],y[2]=y[6],y[6]=u,u=y[5],y[5]=y[7],y[7]=u,this}getNormalMatrix(u){return this.setFromMatrix4(u).invert().transpose()}transposeIntoArray(u){const y=this.elements;return u[0]=y[0],u[1]=y[3],u[2]=y[6],u[3]=y[1],u[4]=y[4],u[5]=y[7],u[6]=y[2],u[7]=y[5],u[8]=y[8],this}setUvTransform(u,y,w,g,O,V,z){const K=Math.cos(O),Q=Math.sin(O);return this.set(w*K,w*Q,-w*(K*V+Q*z)+V+u,-g*Q,g*K,-g*(-Q*V+K*z)+z+y,0,0,1),this}scale(u,y){return this.premultiply(k4.makeScale(u,y)),this}rotate(u){return this.premultiply(k4.makeRotation(-u)),this}translate(u,y){return this.premultiply(k4.makeTranslation(u,y)),this}makeTranslation(u,y){return this.set(1,0,u,0,1,y,0,0,1),this}makeRotation(u){const y=Math.cos(u),w=Math.sin(u);return this.set(y,-w,0,w,y,0,0,0,1),this}makeScale(u,y){return this.set(u,0,0,0,y,0,0,0,1),this}equals(u){const y=this.elements,w=u.elements;for(let g=0;g<9;g++)if(y[g]!==w[g])return!1;return!0}fromArray(u,y=0){for(let w=0;w<9;w++)this.elements[w]=u[w+y];return this}toArray(u=[],y=0){const w=this.elements;return u[y]=w[0],u[y+1]=w[1],u[y+2]=w[2],u[y+3]=w[3],u[y+4]=w[4],u[y+5]=w[5],u[y+6]=w[6],u[y+7]=w[7],u[y+8]=w[8],u}clone(){return new this.constructor().fromArray(this.elements)}}const k4=new Ln;function B6(q){for(let u=q.length-1;u>=0;--u)if(q[u]>=65535)return!0;return!1}function ss(q){return document.createElementNS("http://www.w3.org/1999/xhtml",q)}function Tr(q){return q<.04045?q*.0773993808:Math.pow(q*.9478672986+.0521327014,2.4)}function f_(q){return q<.0031308?q*12.92:1.055*Math.pow(q,.41666)-.055}const D4={[a1]:{[rs]:Tr},[rs]:{[a1]:f_}},cn={legacyMode:!0,get workingColorSpace(){return rs},set workingColorSpace(q){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(q,u,y){if(this.legacyMode||u===y||!u||!y)return q;if(D4[u]&&D4[u][y]!==void 0){const w=D4[u][y];return q.r=w(q.r),q.g=w(q.g),q.b=w(q.b),q}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(q,u){return this.convert(q,this.workingColorSpace,u)},toWorkingColorSpace:function(q,u){return this.convert(q,u,this.workingColorSpace)}},N6={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={r:0,g:0,b:0},Kn={h:0,s:0,l:0},js={h:0,s:0,l:0};function A4(q,u,y){return y<0&&(y+=1),y>1&&(y-=1),y<1/6?q+(u-q)*6*y:y<1/2?u:y<2/3?q+(u-q)*6*(2/3-y):q}function Hs(q,u){return u.r=q.r,u.g=q.g,u.b=q.b,u}class Pe{constructor(u,y,w){return this.isColor=!0,this.r=1,this.g=1,this.b=1,y===void 0&&w===void 0?this.set(u):this.setRGB(u,y,w)}set(u){return u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u),this}setScalar(u){return this.r=u,this.g=u,this.b=u,this}setHex(u,y=a1){return u=Math.floor(u),this.r=(u>>16&255)/255,this.g=(u>>8&255)/255,this.b=(u&255)/255,cn.toWorkingColorSpace(this,y),this}setRGB(u,y,w,g=cn.workingColorSpace){return this.r=u,this.g=y,this.b=w,cn.toWorkingColorSpace(this,g),this}setHSL(u,y,w,g=cn.workingColorSpace){if(u=mc(u,1),y=Ki(y,0,1),w=Ki(w,0,1),y===0)this.r=this.g=this.b=w;else{const O=w<=.5?w*(1+y):w+y-w*y,V=2*w-O;this.r=A4(V,O,u+1/3),this.g=A4(V,O,u),this.b=A4(V,O,u-1/3)}return cn.toWorkingColorSpace(this,g),this}setStyle(u,y=a1){function w(O){O!==void 0&&parseFloat(O)<1&&console.warn("THREE.Color: Alpha component of "+u+" will be ignored.")}let g;if(g=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(u)){let O;const V=g[1],z=g[2];switch(V){case"rgb":case"rgba":if(O=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(z))return this.r=Math.min(255,parseInt(O[1],10))/255,this.g=Math.min(255,parseInt(O[2],10))/255,this.b=Math.min(255,parseInt(O[3],10))/255,cn.toWorkingColorSpace(this,y),w(O[4]),this;if(O=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(z))return this.r=Math.min(100,parseInt(O[1],10))/100,this.g=Math.min(100,parseInt(O[2],10))/100,this.b=Math.min(100,parseInt(O[3],10))/100,cn.toWorkingColorSpace(this,y),w(O[4]),this;break;case"hsl":case"hsla":if(O=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(z)){const K=parseFloat(O[1])/360,Q=parseFloat(O[2])/100,n0=parseFloat(O[3])/100;return w(O[4]),this.setHSL(K,Q,n0,y)}break}}else if(g=/^\#([A-Fa-f\d]+)$/.exec(u)){const O=g[1],V=O.length;if(V===3)return this.r=parseInt(O.charAt(0)+O.charAt(0),16)/255,this.g=parseInt(O.charAt(1)+O.charAt(1),16)/255,this.b=parseInt(O.charAt(2)+O.charAt(2),16)/255,cn.toWorkingColorSpace(this,y),this;if(V===6)return this.r=parseInt(O.charAt(0)+O.charAt(1),16)/255,this.g=parseInt(O.charAt(2)+O.charAt(3),16)/255,this.b=parseInt(O.charAt(4)+O.charAt(5),16)/255,cn.toWorkingColorSpace(this,y),this}return u&&u.length>0?this.setColorName(u,y):this}setColorName(u,y=a1){const w=N6[u.toLowerCase()];return w!==void 0?this.setHex(w,y):console.warn("THREE.Color: Unknown color "+u),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(u){return this.r=u.r,this.g=u.g,this.b=u.b,this}copySRGBToLinear(u){return this.r=Tr(u.r),this.g=Tr(u.g),this.b=Tr(u.b),this}copyLinearToSRGB(u){return this.r=f_(u.r),this.g=f_(u.g),this.b=f_(u.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(u=a1){return cn.fromWorkingColorSpace(Hs(this,Si),u),Ki(Si.r*255,0,255)<<16^Ki(Si.g*255,0,255)<<8^Ki(Si.b*255,0,255)<<0}getHexString(u=a1){return("000000"+this.getHex(u).toString(16)).slice(-6)}getHSL(u,y=cn.workingColorSpace){cn.fromWorkingColorSpace(Hs(this,Si),y);const w=Si.r,g=Si.g,O=Si.b,V=Math.max(w,g,O),z=Math.min(w,g,O);let K,Q;const n0=(z+V)/2;if(z===V)K=0,Q=0;else{const _0=V-z;switch(Q=n0<=.5?_0/(V+z):_0/(2-V-z),V){case w:K=(g-O)/_0+(g<O?6:0);break;case g:K=(O-w)/_0+2;break;case O:K=(w-g)/_0+4;break}K/=6}return u.h=K,u.s=Q,u.l=n0,u}getRGB(u,y=cn.workingColorSpace){return cn.fromWorkingColorSpace(Hs(this,Si),y),u.r=Si.r,u.g=Si.g,u.b=Si.b,u}getStyle(u=a1){return cn.fromWorkingColorSpace(Hs(this,Si),u),u!==a1?`color(${u} ${Si.r} ${Si.g} ${Si.b})`:`rgb(${Si.r*255|0},${Si.g*255|0},${Si.b*255|0})`}offsetHSL(u,y,w){return this.getHSL(Kn),Kn.h+=u,Kn.s+=y,Kn.l+=w,this.setHSL(Kn.h,Kn.s,Kn.l),this}add(u){return this.r+=u.r,this.g+=u.g,this.b+=u.b,this}addColors(u,y){return this.r=u.r+y.r,this.g=u.g+y.g,this.b=u.b+y.b,this}addScalar(u){return this.r+=u,this.g+=u,this.b+=u,this}sub(u){return this.r=Math.max(0,this.r-u.r),this.g=Math.max(0,this.g-u.g),this.b=Math.max(0,this.b-u.b),this}multiply(u){return this.r*=u.r,this.g*=u.g,this.b*=u.b,this}multiplyScalar(u){return this.r*=u,this.g*=u,this.b*=u,this}lerp(u,y){return this.r+=(u.r-this.r)*y,this.g+=(u.g-this.g)*y,this.b+=(u.b-this.b)*y,this}lerpColors(u,y,w){return this.r=u.r+(y.r-u.r)*w,this.g=u.g+(y.g-u.g)*w,this.b=u.b+(y.b-u.b)*w,this}lerpHSL(u,y){this.getHSL(Kn),u.getHSL(js);const w=ts(Kn.h,js.h,y),g=ts(Kn.s,js.s,y),O=ts(Kn.l,js.l,y);return this.setHSL(w,g,O),this}equals(u){return u.r===this.r&&u.g===this.g&&u.b===this.b}fromArray(u,y=0){return this.r=u[y],this.g=u[y+1],this.b=u[y+2],this}toArray(u=[],y=0){return u[y]=this.r,u[y+1]=this.g,u[y+2]=this.b,u}fromBufferAttribute(u,y){return this.r=u.getX(y),this.g=u.getY(y),this.b=u.getZ(y),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Pe.NAMES=N6;let Zr;class W6{static getDataURL(u){if(/^data:/i.test(u.src)||typeof HTMLCanvasElement>"u")return u.src;let y;if(u instanceof HTMLCanvasElement)y=u;else{Zr===void 0&&(Zr=ss("canvas")),Zr.width=u.width,Zr.height=u.height;const w=Zr.getContext("2d");u instanceof ImageData?w.putImageData(u,0,0):w.drawImage(u,0,0,u.width,u.height),y=Zr}return y.width>2048||y.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",u),y.toDataURL("image/jpeg",.6)):y.toDataURL("image/png")}static sRGBToLinear(u){if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap){const y=ss("canvas");y.width=u.width,y.height=u.height;const w=y.getContext("2d");w.drawImage(u,0,0,u.width,u.height);const g=w.getImageData(0,0,u.width,u.height),O=g.data;for(let V=0;V<O.length;V++)O[V]=Tr(O[V]/255)*255;return w.putImageData(g,0,0),y}else if(u.data){const y=u.data.slice(0);for(let w=0;w<y.length;w++)y instanceof Uint8Array||y instanceof Uint8ClampedArray?y[w]=Math.floor(Tr(y[w]/255)*255):y[w]=Tr(y[w]);return{data:y,width:u.width,height:u.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),u}}class G6{constructor(u=null){this.isSource=!0,this.uuid=Qn(),this.data=u,this.version=0}set needsUpdate(u){u===!0&&this.version++}toJSON(u){const y=u===void 0||typeof u=="string";if(!y&&u.images[this.uuid]!==void 0)return u.images[this.uuid];const w={uuid:this.uuid,url:""},g=this.data;if(g!==null){let O;if(Array.isArray(g)){O=[];for(let V=0,z=g.length;V<z;V++)g[V].isDataTexture?O.push(E4(g[V].image)):O.push(E4(g[V]))}else O=E4(g);w.url=O}return y||(u.images[this.uuid]=w),w}}function E4(q){return typeof HTMLImageElement<"u"&&q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&q instanceof ImageBitmap?W6.getDataURL(q):q.data?{data:Array.from(q.data),width:q.width,height:q.height,type:q.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AJ=0;class ji extends Pr{constructor(u=ji.DEFAULT_IMAGE,y=ji.DEFAULT_MAPPING,w=Un,g=Un,O=Tn,V=kr,z=zn,K=Dr,Q=ji.DEFAULT_ANISOTROPY,n0=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AJ++}),this.uuid=Qn(),this.name="",this.source=new G6(u),this.mipmaps=[],this.mapping=y,this.wrapS=w,this.wrapT=g,this.magFilter=O,this.minFilter=V,this.anisotropy=Q,this.format=z,this.internalFormat=null,this.type=K,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ln,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=n0,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(u){this.source.data=u}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(u){return this.name=u.name,this.source=u.source,this.mipmaps=u.mipmaps.slice(0),this.mapping=u.mapping,this.wrapS=u.wrapS,this.wrapT=u.wrapT,this.magFilter=u.magFilter,this.minFilter=u.minFilter,this.anisotropy=u.anisotropy,this.format=u.format,this.internalFormat=u.internalFormat,this.type=u.type,this.offset.copy(u.offset),this.repeat.copy(u.repeat),this.center.copy(u.center),this.rotation=u.rotation,this.matrixAutoUpdate=u.matrixAutoUpdate,this.matrix.copy(u.matrix),this.generateMipmaps=u.generateMipmaps,this.premultiplyAlpha=u.premultiplyAlpha,this.flipY=u.flipY,this.unpackAlignment=u.unpackAlignment,this.encoding=u.encoding,this.userData=JSON.parse(JSON.stringify(u.userData)),this.needsUpdate=!0,this}toJSON(u){const y=u===void 0||typeof u=="string";if(!y&&u.textures[this.uuid]!==void 0)return u.textures[this.uuid];const w={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(u).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(w.userData=this.userData),y||(u.textures[this.uuid]=w),w}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(u){if(this.mapping!==I6)return u;if(u.applyMatrix3(this.matrix),u.x<0||u.x>1)switch(this.wrapS){case yo:u.x=u.x-Math.floor(u.x);break;case Un:u.x=u.x<0?0:1;break;case m_:Math.abs(Math.floor(u.x)%2)===1?u.x=Math.ceil(u.x)-u.x:u.x=u.x-Math.floor(u.x);break}if(u.y<0||u.y>1)switch(this.wrapT){case yo:u.y=u.y-Math.floor(u.y);break;case Un:u.y=u.y<0?0:1;break;case m_:Math.abs(Math.floor(u.y)%2)===1?u.y=Math.ceil(u.y)-u.y:u.y=u.y-Math.floor(u.y);break}return this.flipY&&(u.y=1-u.y),u}set needsUpdate(u){u===!0&&(this.version++,this.source.needsUpdate=!0)}}ji.DEFAULT_IMAGE=null;ji.DEFAULT_MAPPING=I6;ji.DEFAULT_ANISOTROPY=1;class It{constructor(u=0,y=0,w=0,g=1){It.prototype.isVector4=!0,this.x=u,this.y=y,this.z=w,this.w=g}get width(){return this.z}set width(u){this.z=u}get height(){return this.w}set height(u){this.w=u}set(u,y,w,g){return this.x=u,this.y=y,this.z=w,this.w=g,this}setScalar(u){return this.x=u,this.y=u,this.z=u,this.w=u,this}setX(u){return this.x=u,this}setY(u){return this.y=u,this}setZ(u){return this.z=u,this}setW(u){return this.w=u,this}setComponent(u,y){switch(u){case 0:this.x=y;break;case 1:this.y=y;break;case 2:this.z=y;break;case 3:this.w=y;break;default:throw new Error("index is out of range: "+u)}return this}getComponent(u){switch(u){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+u)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(u){return this.x=u.x,this.y=u.y,this.z=u.z,this.w=u.w!==void 0?u.w:1,this}add(u){return this.x+=u.x,this.y+=u.y,this.z+=u.z,this.w+=u.w,this}addScalar(u){return this.x+=u,this.y+=u,this.z+=u,this.w+=u,this}addVectors(u,y){return this.x=u.x+y.x,this.y=u.y+y.y,this.z=u.z+y.z,this.w=u.w+y.w,this}addScaledVector(u,y){return this.x+=u.x*y,this.y+=u.y*y,this.z+=u.z*y,this.w+=u.w*y,this}sub(u){return this.x-=u.x,this.y-=u.y,this.z-=u.z,this.w-=u.w,this}subScalar(u){return this.x-=u,this.y-=u,this.z-=u,this.w-=u,this}subVectors(u,y){return this.x=u.x-y.x,this.y=u.y-y.y,this.z=u.z-y.z,this.w=u.w-y.w,this}multiply(u){return this.x*=u.x,this.y*=u.y,this.z*=u.z,this.w*=u.w,this}multiplyScalar(u){return this.x*=u,this.y*=u,this.z*=u,this.w*=u,this}applyMatrix4(u){const y=this.x,w=this.y,g=this.z,O=this.w,V=u.elements;return this.x=V[0]*y+V[4]*w+V[8]*g+V[12]*O,this.y=V[1]*y+V[5]*w+V[9]*g+V[13]*O,this.z=V[2]*y+V[6]*w+V[10]*g+V[14]*O,this.w=V[3]*y+V[7]*w+V[11]*g+V[15]*O,this}divideScalar(u){return this.multiplyScalar(1/u)}setAxisAngleFromQuaternion(u){this.w=2*Math.acos(u.w);const y=Math.sqrt(1-u.w*u.w);return y<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=u.x/y,this.y=u.y/y,this.z=u.z/y),this}setAxisAngleFromRotationMatrix(u){let y,w,g,O;const K=u.elements,Q=K[0],n0=K[4],_0=K[8],c0=K[1],g0=K[5],R0=K[9],f0=K[2],h0=K[6],k0=K[10];if(Math.abs(n0-c0)<.01&&Math.abs(_0-f0)<.01&&Math.abs(R0-h0)<.01){if(Math.abs(n0+c0)<.1&&Math.abs(_0+f0)<.1&&Math.abs(R0+h0)<.1&&Math.abs(Q+g0+k0-3)<.1)return this.set(1,0,0,0),this;y=Math.PI;const P0=(Q+1)/2,F0=(g0+1)/2,W0=(k0+1)/2,Q0=(n0+c0)/4,o2=(_0+f0)/4,E0=(R0+h0)/4;return P0>F0&&P0>W0?P0<.01?(w=0,g=.707106781,O=.707106781):(w=Math.sqrt(P0),g=Q0/w,O=o2/w):F0>W0?F0<.01?(w=.707106781,g=0,O=.707106781):(g=Math.sqrt(F0),w=Q0/g,O=E0/g):W0<.01?(w=.707106781,g=.707106781,O=0):(O=Math.sqrt(W0),w=o2/O,g=E0/O),this.set(w,g,O,y),this}let G0=Math.sqrt((h0-R0)*(h0-R0)+(_0-f0)*(_0-f0)+(c0-n0)*(c0-n0));return Math.abs(G0)<.001&&(G0=1),this.x=(h0-R0)/G0,this.y=(_0-f0)/G0,this.z=(c0-n0)/G0,this.w=Math.acos((Q+g0+k0-1)/2),this}min(u){return this.x=Math.min(this.x,u.x),this.y=Math.min(this.y,u.y),this.z=Math.min(this.z,u.z),this.w=Math.min(this.w,u.w),this}max(u){return this.x=Math.max(this.x,u.x),this.y=Math.max(this.y,u.y),this.z=Math.max(this.z,u.z),this.w=Math.max(this.w,u.w),this}clamp(u,y){return this.x=Math.max(u.x,Math.min(y.x,this.x)),this.y=Math.max(u.y,Math.min(y.y,this.y)),this.z=Math.max(u.z,Math.min(y.z,this.z)),this.w=Math.max(u.w,Math.min(y.w,this.w)),this}clampScalar(u,y){return this.x=Math.max(u,Math.min(y,this.x)),this.y=Math.max(u,Math.min(y,this.y)),this.z=Math.max(u,Math.min(y,this.z)),this.w=Math.max(u,Math.min(y,this.w)),this}clampLength(u,y){const w=this.length();return this.divideScalar(w||1).multiplyScalar(Math.max(u,Math.min(y,w)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(u){return this.x*u.x+this.y*u.y+this.z*u.z+this.w*u.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(u){return this.normalize().multiplyScalar(u)}lerp(u,y){return this.x+=(u.x-this.x)*y,this.y+=(u.y-this.y)*y,this.z+=(u.z-this.z)*y,this.w+=(u.w-this.w)*y,this}lerpVectors(u,y,w){return this.x=u.x+(y.x-u.x)*w,this.y=u.y+(y.y-u.y)*w,this.z=u.z+(y.z-u.z)*w,this.w=u.w+(y.w-u.w)*w,this}equals(u){return u.x===this.x&&u.y===this.y&&u.z===this.z&&u.w===this.w}fromArray(u,y=0){return this.x=u[y],this.y=u[y+1],this.z=u[y+2],this.w=u[y+3],this}toArray(u=[],y=0){return u[y]=this.x,u[y+1]=this.y,u[y+2]=this.z,u[y+3]=this.w,u}fromBufferAttribute(u,y){return this.x=u.getX(y),this.y=u.getY(y),this.z=u.getZ(y),this.w=u.getW(y),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Er extends Pr{constructor(u=1,y=1,w={}){super(),this.isWebGLRenderTarget=!0,this.width=u,this.height=y,this.depth=1,this.scissor=new It(0,0,u,y),this.scissorTest=!1,this.viewport=new It(0,0,u,y);const g={width:u,height:y,depth:1};this.texture=new ji(g,w.mapping,w.wrapS,w.wrapT,w.magFilter,w.minFilter,w.format,w.type,w.anisotropy,w.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=w.generateMipmaps!==void 0?w.generateMipmaps:!1,this.texture.internalFormat=w.internalFormat!==void 0?w.internalFormat:null,this.texture.minFilter=w.minFilter!==void 0?w.minFilter:Tn,this.depthBuffer=w.depthBuffer!==void 0?w.depthBuffer:!0,this.stencilBuffer=w.stencilBuffer!==void 0?w.stencilBuffer:!1,this.depthTexture=w.depthTexture!==void 0?w.depthTexture:null,this.samples=w.samples!==void 0?w.samples:0}setSize(u,y,w=1){(this.width!==u||this.height!==y||this.depth!==w)&&(this.width=u,this.height=y,this.depth=w,this.texture.image.width=u,this.texture.image.height=y,this.texture.image.depth=w,this.dispose()),this.viewport.set(0,0,u,y),this.scissor.set(0,0,u,y)}clone(){return new this.constructor().copy(this)}copy(u){this.width=u.width,this.height=u.height,this.depth=u.depth,this.viewport.copy(u.viewport),this.texture=u.texture.clone(),this.texture.isRenderTargetTexture=!0;const y=Object.assign({},u.texture.image);return this.texture.source=new G6(y),this.depthBuffer=u.depthBuffer,this.stencilBuffer=u.stencilBuffer,u.depthTexture!==null&&(this.depthTexture=u.depthTexture.clone()),this.samples=u.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class U6 extends ji{constructor(u=null,y=1,w=1,g=1){super(null),this.isDataArrayTexture=!0,this.image={data:u,width:y,height:w,depth:g},this.magFilter=Fi,this.minFilter=Fi,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class EJ extends ji{constructor(u=null,y=1,w=1,g=1){super(null),this.isData3DTexture=!0,this.image={data:u,width:y,height:w,depth:g},this.magFilter=Fi,this.minFilter=Fi,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class u1{constructor(u=0,y=0,w=0,g=1){this.isQuaternion=!0,this._x=u,this._y=y,this._z=w,this._w=g}static slerpFlat(u,y,w,g,O,V,z){let K=w[g+0],Q=w[g+1],n0=w[g+2],_0=w[g+3];const c0=O[V+0],g0=O[V+1],R0=O[V+2],f0=O[V+3];if(z===0){u[y+0]=K,u[y+1]=Q,u[y+2]=n0,u[y+3]=_0;return}if(z===1){u[y+0]=c0,u[y+1]=g0,u[y+2]=R0,u[y+3]=f0;return}if(_0!==f0||K!==c0||Q!==g0||n0!==R0){let h0=1-z;const k0=K*c0+Q*g0+n0*R0+_0*f0,G0=k0>=0?1:-1,P0=1-k0*k0;if(P0>Number.EPSILON){const W0=Math.sqrt(P0),Q0=Math.atan2(W0,k0*G0);h0=Math.sin(h0*Q0)/W0,z=Math.sin(z*Q0)/W0}const F0=z*G0;if(K=K*h0+c0*F0,Q=Q*h0+g0*F0,n0=n0*h0+R0*F0,_0=_0*h0+f0*F0,h0===1-z){const W0=1/Math.sqrt(K*K+Q*Q+n0*n0+_0*_0);K*=W0,Q*=W0,n0*=W0,_0*=W0}}u[y]=K,u[y+1]=Q,u[y+2]=n0,u[y+3]=_0}static multiplyQuaternionsFlat(u,y,w,g,O,V){const z=w[g],K=w[g+1],Q=w[g+2],n0=w[g+3],_0=O[V],c0=O[V+1],g0=O[V+2],R0=O[V+3];return u[y]=z*R0+n0*_0+K*g0-Q*c0,u[y+1]=K*R0+n0*c0+Q*_0-z*g0,u[y+2]=Q*R0+n0*g0+z*c0-K*_0,u[y+3]=n0*R0-z*_0-K*c0-Q*g0,u}get x(){return this._x}set x(u){this._x=u,this._onChangeCallback()}get y(){return this._y}set y(u){this._y=u,this._onChangeCallback()}get z(){return this._z}set z(u){this._z=u,this._onChangeCallback()}get w(){return this._w}set w(u){this._w=u,this._onChangeCallback()}set(u,y,w,g){return this._x=u,this._y=y,this._z=w,this._w=g,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(u){return this._x=u.x,this._y=u.y,this._z=u.z,this._w=u.w,this._onChangeCallback(),this}setFromEuler(u,y){const w=u._x,g=u._y,O=u._z,V=u._order,z=Math.cos,K=Math.sin,Q=z(w/2),n0=z(g/2),_0=z(O/2),c0=K(w/2),g0=K(g/2),R0=K(O/2);switch(V){case"XYZ":this._x=c0*n0*_0+Q*g0*R0,this._y=Q*g0*_0-c0*n0*R0,this._z=Q*n0*R0+c0*g0*_0,this._w=Q*n0*_0-c0*g0*R0;break;case"YXZ":this._x=c0*n0*_0+Q*g0*R0,this._y=Q*g0*_0-c0*n0*R0,this._z=Q*n0*R0-c0*g0*_0,this._w=Q*n0*_0+c0*g0*R0;break;case"ZXY":this._x=c0*n0*_0-Q*g0*R0,this._y=Q*g0*_0+c0*n0*R0,this._z=Q*n0*R0+c0*g0*_0,this._w=Q*n0*_0-c0*g0*R0;break;case"ZYX":this._x=c0*n0*_0-Q*g0*R0,this._y=Q*g0*_0+c0*n0*R0,this._z=Q*n0*R0-c0*g0*_0,this._w=Q*n0*_0+c0*g0*R0;break;case"YZX":this._x=c0*n0*_0+Q*g0*R0,this._y=Q*g0*_0+c0*n0*R0,this._z=Q*n0*R0-c0*g0*_0,this._w=Q*n0*_0-c0*g0*R0;break;case"XZY":this._x=c0*n0*_0-Q*g0*R0,this._y=Q*g0*_0-c0*n0*R0,this._z=Q*n0*R0+c0*g0*_0,this._w=Q*n0*_0+c0*g0*R0;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+V)}return y!==!1&&this._onChangeCallback(),this}setFromAxisAngle(u,y){const w=y/2,g=Math.sin(w);return this._x=u.x*g,this._y=u.y*g,this._z=u.z*g,this._w=Math.cos(w),this._onChangeCallback(),this}setFromRotationMatrix(u){const y=u.elements,w=y[0],g=y[4],O=y[8],V=y[1],z=y[5],K=y[9],Q=y[2],n0=y[6],_0=y[10],c0=w+z+_0;if(c0>0){const g0=.5/Math.sqrt(c0+1);this._w=.25/g0,this._x=(n0-K)*g0,this._y=(O-Q)*g0,this._z=(V-g)*g0}else if(w>z&&w>_0){const g0=2*Math.sqrt(1+w-z-_0);this._w=(n0-K)/g0,this._x=.25*g0,this._y=(g+V)/g0,this._z=(O+Q)/g0}else if(z>_0){const g0=2*Math.sqrt(1+z-w-_0);this._w=(O-Q)/g0,this._x=(g+V)/g0,this._y=.25*g0,this._z=(K+n0)/g0}else{const g0=2*Math.sqrt(1+_0-w-z);this._w=(V-g)/g0,this._x=(O+Q)/g0,this._y=(K+n0)/g0,this._z=.25*g0}return this._onChangeCallback(),this}setFromUnitVectors(u,y){let w=u.dot(y)+1;return w<Number.EPSILON?(w=0,Math.abs(u.x)>Math.abs(u.z)?(this._x=-u.y,this._y=u.x,this._z=0,this._w=w):(this._x=0,this._y=-u.z,this._z=u.y,this._w=w)):(this._x=u.y*y.z-u.z*y.y,this._y=u.z*y.x-u.x*y.z,this._z=u.x*y.y-u.y*y.x,this._w=w),this.normalize()}angleTo(u){return 2*Math.acos(Math.abs(Ki(this.dot(u),-1,1)))}rotateTowards(u,y){const w=this.angleTo(u);if(w===0)return this;const g=Math.min(1,y/w);return this.slerp(u,g),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(u){return this._x*u._x+this._y*u._y+this._z*u._z+this._w*u._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let u=this.length();return u===0?(this._x=0,this._y=0,this._z=0,this._w=1):(u=1/u,this._x=this._x*u,this._y=this._y*u,this._z=this._z*u,this._w=this._w*u),this._onChangeCallback(),this}multiply(u){return this.multiplyQuaternions(this,u)}premultiply(u){return this.multiplyQuaternions(u,this)}multiplyQuaternions(u,y){const w=u._x,g=u._y,O=u._z,V=u._w,z=y._x,K=y._y,Q=y._z,n0=y._w;return this._x=w*n0+V*z+g*Q-O*K,this._y=g*n0+V*K+O*z-w*Q,this._z=O*n0+V*Q+w*K-g*z,this._w=V*n0-w*z-g*K-O*Q,this._onChangeCallback(),this}slerp(u,y){if(y===0)return this;if(y===1)return this.copy(u);const w=this._x,g=this._y,O=this._z,V=this._w;let z=V*u._w+w*u._x+g*u._y+O*u._z;if(z<0?(this._w=-u._w,this._x=-u._x,this._y=-u._y,this._z=-u._z,z=-z):this.copy(u),z>=1)return this._w=V,this._x=w,this._y=g,this._z=O,this;const K=1-z*z;if(K<=Number.EPSILON){const g0=1-y;return this._w=g0*V+y*this._w,this._x=g0*w+y*this._x,this._y=g0*g+y*this._y,this._z=g0*O+y*this._z,this.normalize(),this._onChangeCallback(),this}const Q=Math.sqrt(K),n0=Math.atan2(Q,z),_0=Math.sin((1-y)*n0)/Q,c0=Math.sin(y*n0)/Q;return this._w=V*_0+this._w*c0,this._x=w*_0+this._x*c0,this._y=g*_0+this._y*c0,this._z=O*_0+this._z*c0,this._onChangeCallback(),this}slerpQuaternions(u,y,w){return this.copy(u).slerp(y,w)}random(){const u=Math.random(),y=Math.sqrt(1-u),w=Math.sqrt(u),g=2*Math.PI*Math.random(),O=2*Math.PI*Math.random();return this.set(y*Math.cos(g),w*Math.sin(O),w*Math.cos(O),y*Math.sin(g))}equals(u){return u._x===this._x&&u._y===this._y&&u._z===this._z&&u._w===this._w}fromArray(u,y=0){return this._x=u[y],this._y=u[y+1],this._z=u[y+2],this._w=u[y+3],this._onChangeCallback(),this}toArray(u=[],y=0){return u[y]=this._x,u[y+1]=this._y,u[y+2]=this._z,u[y+3]=this._w,u}fromBufferAttribute(u,y){return this._x=u.getX(y),this._y=u.getY(y),this._z=u.getZ(y),this._w=u.getW(y),this}_onChange(u){return this._onChangeCallback=u,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class t2{constructor(u=0,y=0,w=0){t2.prototype.isVector3=!0,this.x=u,this.y=y,this.z=w}set(u,y,w){return w===void 0&&(w=this.z),this.x=u,this.y=y,this.z=w,this}setScalar(u){return this.x=u,this.y=u,this.z=u,this}setX(u){return this.x=u,this}setY(u){return this.y=u,this}setZ(u){return this.z=u,this}setComponent(u,y){switch(u){case 0:this.x=y;break;case 1:this.y=y;break;case 2:this.z=y;break;default:throw new Error("index is out of range: "+u)}return this}getComponent(u){switch(u){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+u)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(u){return this.x=u.x,this.y=u.y,this.z=u.z,this}add(u){return this.x+=u.x,this.y+=u.y,this.z+=u.z,this}addScalar(u){return this.x+=u,this.y+=u,this.z+=u,this}addVectors(u,y){return this.x=u.x+y.x,this.y=u.y+y.y,this.z=u.z+y.z,this}addScaledVector(u,y){return this.x+=u.x*y,this.y+=u.y*y,this.z+=u.z*y,this}sub(u){return this.x-=u.x,this.y-=u.y,this.z-=u.z,this}subScalar(u){return this.x-=u,this.y-=u,this.z-=u,this}subVectors(u,y){return this.x=u.x-y.x,this.y=u.y-y.y,this.z=u.z-y.z,this}multiply(u){return this.x*=u.x,this.y*=u.y,this.z*=u.z,this}multiplyScalar(u){return this.x*=u,this.y*=u,this.z*=u,this}multiplyVectors(u,y){return this.x=u.x*y.x,this.y=u.y*y.y,this.z=u.z*y.z,this}applyEuler(u){return this.applyQuaternion(C8.setFromEuler(u))}applyAxisAngle(u,y){return this.applyQuaternion(C8.setFromAxisAngle(u,y))}applyMatrix3(u){const y=this.x,w=this.y,g=this.z,O=u.elements;return this.x=O[0]*y+O[3]*w+O[6]*g,this.y=O[1]*y+O[4]*w+O[7]*g,this.z=O[2]*y+O[5]*w+O[8]*g,this}applyNormalMatrix(u){return this.applyMatrix3(u).normalize()}applyMatrix4(u){const y=this.x,w=this.y,g=this.z,O=u.elements,V=1/(O[3]*y+O[7]*w+O[11]*g+O[15]);return this.x=(O[0]*y+O[4]*w+O[8]*g+O[12])*V,this.y=(O[1]*y+O[5]*w+O[9]*g+O[13])*V,this.z=(O[2]*y+O[6]*w+O[10]*g+O[14])*V,this}applyQuaternion(u){const y=this.x,w=this.y,g=this.z,O=u.x,V=u.y,z=u.z,K=u.w,Q=K*y+V*g-z*w,n0=K*w+z*y-O*g,_0=K*g+O*w-V*y,c0=-O*y-V*w-z*g;return this.x=Q*K+c0*-O+n0*-z-_0*-V,this.y=n0*K+c0*-V+_0*-O-Q*-z,this.z=_0*K+c0*-z+Q*-V-n0*-O,this}project(u){return this.applyMatrix4(u.matrixWorldInverse).applyMatrix4(u.projectionMatrix)}unproject(u){return this.applyMatrix4(u.projectionMatrixInverse).applyMatrix4(u.matrixWorld)}transformDirection(u){const y=this.x,w=this.y,g=this.z,O=u.elements;return this.x=O[0]*y+O[4]*w+O[8]*g,this.y=O[1]*y+O[5]*w+O[9]*g,this.z=O[2]*y+O[6]*w+O[10]*g,this.normalize()}divide(u){return this.x/=u.x,this.y/=u.y,this.z/=u.z,this}divideScalar(u){return this.multiplyScalar(1/u)}min(u){return this.x=Math.min(this.x,u.x),this.y=Math.min(this.y,u.y),this.z=Math.min(this.z,u.z),this}max(u){return this.x=Math.max(this.x,u.x),this.y=Math.max(this.y,u.y),this.z=Math.max(this.z,u.z),this}clamp(u,y){return this.x=Math.max(u.x,Math.min(y.x,this.x)),this.y=Math.max(u.y,Math.min(y.y,this.y)),this.z=Math.max(u.z,Math.min(y.z,this.z)),this}clampScalar(u,y){return this.x=Math.max(u,Math.min(y,this.x)),this.y=Math.max(u,Math.min(y,this.y)),this.z=Math.max(u,Math.min(y,this.z)),this}clampLength(u,y){const w=this.length();return this.divideScalar(w||1).multiplyScalar(Math.max(u,Math.min(y,w)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(u){return this.x*u.x+this.y*u.y+this.z*u.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(u){return this.normalize().multiplyScalar(u)}lerp(u,y){return this.x+=(u.x-this.x)*y,this.y+=(u.y-this.y)*y,this.z+=(u.z-this.z)*y,this}lerpVectors(u,y,w){return this.x=u.x+(y.x-u.x)*w,this.y=u.y+(y.y-u.y)*w,this.z=u.z+(y.z-u.z)*w,this}cross(u){return this.crossVectors(this,u)}crossVectors(u,y){const w=u.x,g=u.y,O=u.z,V=y.x,z=y.y,K=y.z;return this.x=g*K-O*z,this.y=O*V-w*K,this.z=w*z-g*V,this}projectOnVector(u){const y=u.lengthSq();if(y===0)return this.set(0,0,0);const w=u.dot(this)/y;return this.copy(u).multiplyScalar(w)}projectOnPlane(u){return I4.copy(this).projectOnVector(u),this.sub(I4)}reflect(u){return this.sub(I4.copy(u).multiplyScalar(2*this.dot(u)))}angleTo(u){const y=Math.sqrt(this.lengthSq()*u.lengthSq());if(y===0)return Math.PI/2;const w=this.dot(u)/y;return Math.acos(Ki(w,-1,1))}distanceTo(u){return Math.sqrt(this.distanceToSquared(u))}distanceToSquared(u){const y=this.x-u.x,w=this.y-u.y,g=this.z-u.z;return y*y+w*w+g*g}manhattanDistanceTo(u){return Math.abs(this.x-u.x)+Math.abs(this.y-u.y)+Math.abs(this.z-u.z)}setFromSpherical(u){return this.setFromSphericalCoords(u.radius,u.phi,u.theta)}setFromSphericalCoords(u,y,w){const g=Math.sin(y)*u;return this.x=g*Math.sin(w),this.y=Math.cos(y)*u,this.z=g*Math.cos(w),this}setFromCylindrical(u){return this.setFromCylindricalCoords(u.radius,u.theta,u.y)}setFromCylindricalCoords(u,y,w){return this.x=u*Math.sin(y),this.y=w,this.z=u*Math.cos(y),this}setFromMatrixPosition(u){const y=u.elements;return this.x=y[12],this.y=y[13],this.z=y[14],this}setFromMatrixScale(u){const y=this.setFromMatrixColumn(u,0).length(),w=this.setFromMatrixColumn(u,1).length(),g=this.setFromMatrixColumn(u,2).length();return this.x=y,this.y=w,this.z=g,this}setFromMatrixColumn(u,y){return this.fromArray(u.elements,y*4)}setFromMatrix3Column(u,y){return this.fromArray(u.elements,y*3)}setFromEuler(u){return this.x=u._x,this.y=u._y,this.z=u._z,this}equals(u){return u.x===this.x&&u.y===this.y&&u.z===this.z}fromArray(u,y=0){return this.x=u[y],this.y=u[y+1],this.z=u[y+2],this}toArray(u=[],y=0){return u[y]=this.x,u[y+1]=this.y,u[y+2]=this.z,u}fromBufferAttribute(u,y){return this.x=u.getX(y),this.y=u.getY(y),this.z=u.getZ(y),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const u=(Math.random()-.5)*2,y=Math.random()*Math.PI*2,w=Math.sqrt(1-u**2);return this.x=w*Math.cos(y),this.y=w*Math.sin(y),this.z=u,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const I4=new t2,C8=new u1;class xo{constructor(u=new t2(1/0,1/0,1/0),y=new t2(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=u,this.max=y}set(u,y){return this.min.copy(u),this.max.copy(y),this}setFromArray(u){let y=1/0,w=1/0,g=1/0,O=-1/0,V=-1/0,z=-1/0;for(let K=0,Q=u.length;K<Q;K+=3){const n0=u[K],_0=u[K+1],c0=u[K+2];n0<y&&(y=n0),_0<w&&(w=_0),c0<g&&(g=c0),n0>O&&(O=n0),_0>V&&(V=_0),c0>z&&(z=c0)}return this.min.set(y,w,g),this.max.set(O,V,z),this}setFromBufferAttribute(u){let y=1/0,w=1/0,g=1/0,O=-1/0,V=-1/0,z=-1/0;for(let K=0,Q=u.count;K<Q;K++){const n0=u.getX(K),_0=u.getY(K),c0=u.getZ(K);n0<y&&(y=n0),_0<w&&(w=_0),c0<g&&(g=c0),n0>O&&(O=n0),_0>V&&(V=_0),c0>z&&(z=c0)}return this.min.set(y,w,g),this.max.set(O,V,z),this}setFromPoints(u){this.makeEmpty();for(let y=0,w=u.length;y<w;y++)this.expandByPoint(u[y]);return this}setFromCenterAndSize(u,y){const w=dr.copy(y).multiplyScalar(.5);return this.min.copy(u).sub(w),this.max.copy(u).add(w),this}setFromObject(u,y=!1){return this.makeEmpty(),this.expandByObject(u,y)}clone(){return new this.constructor().copy(this)}copy(u){return this.min.copy(u.min),this.max.copy(u.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(u){return this.isEmpty()?u.set(0,0,0):u.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(u){return this.isEmpty()?u.set(0,0,0):u.subVectors(this.max,this.min)}expandByPoint(u){return this.min.min(u),this.max.max(u),this}expandByVector(u){return this.min.sub(u),this.max.add(u),this}expandByScalar(u){return this.min.addScalar(-u),this.max.addScalar(u),this}expandByObject(u,y=!1){u.updateWorldMatrix(!1,!1);const w=u.geometry;if(w!==void 0)if(y&&w.attributes!=null&&w.attributes.position!==void 0){const O=w.attributes.position;for(let V=0,z=O.count;V<z;V++)dr.fromBufferAttribute(O,V).applyMatrix4(u.matrixWorld),this.expandByPoint(dr)}else w.boundingBox===null&&w.computeBoundingBox(),L4.copy(w.boundingBox),L4.applyMatrix4(u.matrixWorld),this.union(L4);const g=u.children;for(let O=0,V=g.length;O<V;O++)this.expandByObject(g[O],y);return this}containsPoint(u){return!(u.x<this.min.x||u.x>this.max.x||u.y<this.min.y||u.y>this.max.y||u.z<this.min.z||u.z>this.max.z)}containsBox(u){return this.min.x<=u.min.x&&u.max.x<=this.max.x&&this.min.y<=u.min.y&&u.max.y<=this.max.y&&this.min.z<=u.min.z&&u.max.z<=this.max.z}getParameter(u,y){return y.set((u.x-this.min.x)/(this.max.x-this.min.x),(u.y-this.min.y)/(this.max.y-this.min.y),(u.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(u){return!(u.max.x<this.min.x||u.min.x>this.max.x||u.max.y<this.min.y||u.min.y>this.max.y||u.max.z<this.min.z||u.min.z>this.max.z)}intersectsSphere(u){return this.clampPoint(u.center,dr),dr.distanceToSquared(u.center)<=u.radius*u.radius}intersectsPlane(u){let y,w;return u.normal.x>0?(y=u.normal.x*this.min.x,w=u.normal.x*this.max.x):(y=u.normal.x*this.max.x,w=u.normal.x*this.min.x),u.normal.y>0?(y+=u.normal.y*this.min.y,w+=u.normal.y*this.max.y):(y+=u.normal.y*this.max.y,w+=u.normal.y*this.min.y),u.normal.z>0?(y+=u.normal.z*this.min.z,w+=u.normal.z*this.max.z):(y+=u.normal.z*this.max.z,w+=u.normal.z*this.min.z),y<=-u.constant&&w>=-u.constant}intersectsTriangle(u){if(this.isEmpty())return!1;this.getCenter(zo),qs.subVectors(this.max,zo),Yr.subVectors(u.a,zo),Qr.subVectors(u.b,zo),Jr.subVectors(u.c,zo),q1.subVectors(Qr,Yr),b1.subVectors(Jr,Qr),yr.subVectors(Yr,Jr);let y=[0,-q1.z,q1.y,0,-b1.z,b1.y,0,-yr.z,yr.y,q1.z,0,-q1.x,b1.z,0,-b1.x,yr.z,0,-yr.x,-q1.y,q1.x,0,-b1.y,b1.x,0,-yr.y,yr.x,0];return!P4(y,Yr,Qr,Jr,qs)||(y=[1,0,0,0,1,0,0,0,1],!P4(y,Yr,Qr,Jr,qs))?!1:(bs.crossVectors(q1,b1),y=[bs.x,bs.y,bs.z],P4(y,Yr,Qr,Jr,qs))}clampPoint(u,y){return y.copy(u).clamp(this.min,this.max)}distanceToPoint(u){return dr.copy(u).clamp(this.min,this.max).sub(u).length()}getBoundingSphere(u){return this.getCenter(u.center),u.radius=this.getSize(dr).length()*.5,u}intersect(u){return this.min.max(u.min),this.max.min(u.max),this.isEmpty()&&this.makeEmpty(),this}union(u){return this.min.min(u.min),this.max.max(u.max),this}applyMatrix4(u){return this.isEmpty()?this:(k1[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(u),k1[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(u),k1[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(u),k1[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(u),k1[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(u),k1[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(u),k1[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(u),k1[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(u),this.setFromPoints(k1),this)}translate(u){return this.min.add(u),this.max.add(u),this}equals(u){return u.min.equals(this.min)&&u.max.equals(this.max)}}const k1=[new t2,new t2,new t2,new t2,new t2,new t2,new t2,new t2],dr=new t2,L4=new xo,Yr=new t2,Qr=new t2,Jr=new t2,q1=new t2,b1=new t2,yr=new t2,zo=new t2,qs=new t2,bs=new t2,vr=new t2;function P4(q,u,y,w,g){for(let O=0,V=q.length-3;O<=V;O+=3){vr.fromArray(q,O);const z=g.x*Math.abs(vr.x)+g.y*Math.abs(vr.y)+g.z*Math.abs(vr.z),K=u.dot(vr),Q=y.dot(vr),n0=w.dot(vr);if(Math.max(-Math.max(K,Q,n0),Math.min(K,Q,n0))>z)return!1}return!0}const IJ=new xo,Vo=new t2,O4=new t2;class wo{constructor(u=new t2,y=-1){this.center=u,this.radius=y}set(u,y){return this.center.copy(u),this.radius=y,this}setFromPoints(u,y){const w=this.center;y!==void 0?w.copy(y):IJ.setFromPoints(u).getCenter(w);let g=0;for(let O=0,V=u.length;O<V;O++)g=Math.max(g,w.distanceToSquared(u[O]));return this.radius=Math.sqrt(g),this}copy(u){return this.center.copy(u.center),this.radius=u.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(u){return u.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(u){return u.distanceTo(this.center)-this.radius}intersectsSphere(u){const y=this.radius+u.radius;return u.center.distanceToSquared(this.center)<=y*y}intersectsBox(u){return u.intersectsSphere(this)}intersectsPlane(u){return Math.abs(u.distanceToPoint(this.center))<=this.radius}clampPoint(u,y){const w=this.center.distanceToSquared(u);return y.copy(u),w>this.radius*this.radius&&(y.sub(this.center).normalize(),y.multiplyScalar(this.radius).add(this.center)),y}getBoundingBox(u){return this.isEmpty()?(u.makeEmpty(),u):(u.set(this.center,this.center),u.expandByScalar(this.radius),u)}applyMatrix4(u){return this.center.applyMatrix4(u),this.radius=this.radius*u.getMaxScaleOnAxis(),this}translate(u){return this.center.add(u),this}expandByPoint(u){if(this.isEmpty())return this.center.copy(u),this.radius=0,this;Vo.subVectors(u,this.center);const y=Vo.lengthSq();if(y>this.radius*this.radius){const w=Math.sqrt(y),g=(w-this.radius)*.5;this.center.addScaledVector(Vo,g/w),this.radius+=g}return this}union(u){return u.isEmpty()?this:this.isEmpty()?(this.copy(u),this):(this.center.equals(u.center)===!0?this.radius=Math.max(this.radius,u.radius):(O4.subVectors(u.center,this.center).setLength(u.radius),this.expandByPoint(Vo.copy(u.center).add(O4)),this.expandByPoint(Vo.copy(u.center).sub(O4))),this)}equals(u){return u.center.equals(this.center)&&u.radius===this.radius}clone(){return new this.constructor().copy(this)}}const D1=new t2,F4=new t2,Xs=new t2,X1=new t2,B4=new t2,Ks=new t2,N4=new t2;class dc{constructor(u=new t2,y=new t2(0,0,-1)){this.origin=u,this.direction=y}set(u,y){return this.origin.copy(u),this.direction.copy(y),this}copy(u){return this.origin.copy(u.origin),this.direction.copy(u.direction),this}at(u,y){return y.copy(this.direction).multiplyScalar(u).add(this.origin)}lookAt(u){return this.direction.copy(u).sub(this.origin).normalize(),this}recast(u){return this.origin.copy(this.at(u,D1)),this}closestPointToPoint(u,y){y.subVectors(u,this.origin);const w=y.dot(this.direction);return w<0?y.copy(this.origin):y.copy(this.direction).multiplyScalar(w).add(this.origin)}distanceToPoint(u){return Math.sqrt(this.distanceSqToPoint(u))}distanceSqToPoint(u){const y=D1.subVectors(u,this.origin).dot(this.direction);return y<0?this.origin.distanceToSquared(u):(D1.copy(this.direction).multiplyScalar(y).add(this.origin),D1.distanceToSquared(u))}distanceSqToSegment(u,y,w,g){F4.copy(u).add(y).multiplyScalar(.5),Xs.copy(y).sub(u).normalize(),X1.copy(this.origin).sub(F4);const O=u.distanceTo(y)*.5,V=-this.direction.dot(Xs),z=X1.dot(this.direction),K=-X1.dot(Xs),Q=X1.lengthSq(),n0=Math.abs(1-V*V);let _0,c0,g0,R0;if(n0>0)if(_0=V*K-z,c0=V*z-K,R0=O*n0,_0>=0)if(c0>=-R0)if(c0<=R0){const f0=1/n0;_0*=f0,c0*=f0,g0=_0*(_0+V*c0+2*z)+c0*(V*_0+c0+2*K)+Q}else c0=O,_0=Math.max(0,-(V*c0+z)),g0=-_0*_0+c0*(c0+2*K)+Q;else c0=-O,_0=Math.max(0,-(V*c0+z)),g0=-_0*_0+c0*(c0+2*K)+Q;else c0<=-R0?(_0=Math.max(0,-(-V*O+z)),c0=_0>0?-O:Math.min(Math.max(-O,-K),O),g0=-_0*_0+c0*(c0+2*K)+Q):c0<=R0?(_0=0,c0=Math.min(Math.max(-O,-K),O),g0=c0*(c0+2*K)+Q):(_0=Math.max(0,-(V*O+z)),c0=_0>0?O:Math.min(Math.max(-O,-K),O),g0=-_0*_0+c0*(c0+2*K)+Q);else c0=V>0?-O:O,_0=Math.max(0,-(V*c0+z)),g0=-_0*_0+c0*(c0+2*K)+Q;return w&&w.copy(this.direction).multiplyScalar(_0).add(this.origin),g&&g.copy(Xs).multiplyScalar(c0).add(F4),g0}intersectSphere(u,y){D1.subVectors(u.center,this.origin);const w=D1.dot(this.direction),g=D1.dot(D1)-w*w,O=u.radius*u.radius;if(g>O)return null;const V=Math.sqrt(O-g),z=w-V,K=w+V;return z<0&&K<0?null:z<0?this.at(K,y):this.at(z,y)}intersectsSphere(u){return this.distanceSqToPoint(u.center)<=u.radius*u.radius}distanceToPlane(u){const y=u.normal.dot(this.direction);if(y===0)return u.distanceToPoint(this.origin)===0?0:null;const w=-(this.origin.dot(u.normal)+u.constant)/y;return w>=0?w:null}intersectPlane(u,y){const w=this.distanceToPlane(u);return w===null?null:this.at(w,y)}intersectsPlane(u){const y=u.distanceToPoint(this.origin);return y===0||u.normal.dot(this.direction)*y<0}intersectBox(u,y){let w,g,O,V,z,K;const Q=1/this.direction.x,n0=1/this.direction.y,_0=1/this.direction.z,c0=this.origin;return Q>=0?(w=(u.min.x-c0.x)*Q,g=(u.max.x-c0.x)*Q):(w=(u.max.x-c0.x)*Q,g=(u.min.x-c0.x)*Q),n0>=0?(O=(u.min.y-c0.y)*n0,V=(u.max.y-c0.y)*n0):(O=(u.max.y-c0.y)*n0,V=(u.min.y-c0.y)*n0),w>V||O>g||((O>w||isNaN(w))&&(w=O),(V<g||isNaN(g))&&(g=V),_0>=0?(z=(u.min.z-c0.z)*_0,K=(u.max.z-c0.z)*_0):(z=(u.max.z-c0.z)*_0,K=(u.min.z-c0.z)*_0),w>K||z>g)||((z>w||w!==w)&&(w=z),(K<g||g!==g)&&(g=K),g<0)?null:this.at(w>=0?w:g,y)}intersectsBox(u){return this.intersectBox(u,D1)!==null}intersectTriangle(u,y,w,g,O){B4.subVectors(y,u),Ks.subVectors(w,u),N4.crossVectors(B4,Ks);let V=this.direction.dot(N4),z;if(V>0){if(g)return null;z=1}else if(V<0)z=-1,V=-V;else return null;X1.subVectors(this.origin,u);const K=z*this.direction.dot(Ks.crossVectors(X1,Ks));if(K<0)return null;const Q=z*this.direction.dot(B4.cross(X1));if(Q<0||K+Q>V)return null;const n0=-z*X1.dot(N4);return n0<0?null:this.at(n0/V,O)}applyMatrix4(u){return this.origin.applyMatrix4(u),this.direction.transformDirection(u),this}equals(u){return u.origin.equals(this.origin)&&u.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(u,y,w,g,O,V,z,K,Q,n0,_0,c0,g0,R0,f0,h0){const k0=this.elements;return k0[0]=u,k0[4]=y,k0[8]=w,k0[12]=g,k0[1]=O,k0[5]=V,k0[9]=z,k0[13]=K,k0[2]=Q,k0[6]=n0,k0[10]=_0,k0[14]=c0,k0[3]=g0,k0[7]=R0,k0[11]=f0,k0[15]=h0,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(u){const y=this.elements,w=u.elements;return y[0]=w[0],y[1]=w[1],y[2]=w[2],y[3]=w[3],y[4]=w[4],y[5]=w[5],y[6]=w[6],y[7]=w[7],y[8]=w[8],y[9]=w[9],y[10]=w[10],y[11]=w[11],y[12]=w[12],y[13]=w[13],y[14]=w[14],y[15]=w[15],this}copyPosition(u){const y=this.elements,w=u.elements;return y[12]=w[12],y[13]=w[13],y[14]=w[14],this}setFromMatrix3(u){const y=u.elements;return this.set(y[0],y[3],y[6],0,y[1],y[4],y[7],0,y[2],y[5],y[8],0,0,0,0,1),this}extractBasis(u,y,w){return u.setFromMatrixColumn(this,0),y.setFromMatrixColumn(this,1),w.setFromMatrixColumn(this,2),this}makeBasis(u,y,w){return this.set(u.x,y.x,w.x,0,u.y,y.y,w.y,0,u.z,y.z,w.z,0,0,0,0,1),this}extractRotation(u){const y=this.elements,w=u.elements,g=1/$r.setFromMatrixColumn(u,0).length(),O=1/$r.setFromMatrixColumn(u,1).length(),V=1/$r.setFromMatrixColumn(u,2).length();return y[0]=w[0]*g,y[1]=w[1]*g,y[2]=w[2]*g,y[3]=0,y[4]=w[4]*O,y[5]=w[5]*O,y[6]=w[6]*O,y[7]=0,y[8]=w[8]*V,y[9]=w[9]*V,y[10]=w[10]*V,y[11]=0,y[12]=0,y[13]=0,y[14]=0,y[15]=1,this}makeRotationFromEuler(u){const y=this.elements,w=u.x,g=u.y,O=u.z,V=Math.cos(w),z=Math.sin(w),K=Math.cos(g),Q=Math.sin(g),n0=Math.cos(O),_0=Math.sin(O);if(u.order==="XYZ"){const c0=V*n0,g0=V*_0,R0=z*n0,f0=z*_0;y[0]=K*n0,y[4]=-K*_0,y[8]=Q,y[1]=g0+R0*Q,y[5]=c0-f0*Q,y[9]=-z*K,y[2]=f0-c0*Q,y[6]=R0+g0*Q,y[10]=V*K}else if(u.order==="YXZ"){const c0=K*n0,g0=K*_0,R0=Q*n0,f0=Q*_0;y[0]=c0+f0*z,y[4]=R0*z-g0,y[8]=V*Q,y[1]=V*_0,y[5]=V*n0,y[9]=-z,y[2]=g0*z-R0,y[6]=f0+c0*z,y[10]=V*K}else if(u.order==="ZXY"){const c0=K*n0,g0=K*_0,R0=Q*n0,f0=Q*_0;y[0]=c0-f0*z,y[4]=-V*_0,y[8]=R0+g0*z,y[1]=g0+R0*z,y[5]=V*n0,y[9]=f0-c0*z,y[2]=-V*Q,y[6]=z,y[10]=V*K}else if(u.order==="ZYX"){const c0=V*n0,g0=V*_0,R0=z*n0,f0=z*_0;y[0]=K*n0,y[4]=R0*Q-g0,y[8]=c0*Q+f0,y[1]=K*_0,y[5]=f0*Q+c0,y[9]=g0*Q-R0,y[2]=-Q,y[6]=z*K,y[10]=V*K}else if(u.order==="YZX"){const c0=V*K,g0=V*Q,R0=z*K,f0=z*Q;y[0]=K*n0,y[4]=f0-c0*_0,y[8]=R0*_0+g0,y[1]=_0,y[5]=V*n0,y[9]=-z*n0,y[2]=-Q*n0,y[6]=g0*_0+R0,y[10]=c0-f0*_0}else if(u.order==="XZY"){const c0=V*K,g0=V*Q,R0=z*K,f0=z*Q;y[0]=K*n0,y[4]=-_0,y[8]=Q*n0,y[1]=c0*_0+f0,y[5]=V*n0,y[9]=g0*_0-R0,y[2]=R0*_0-g0,y[6]=z*n0,y[10]=f0*_0+c0}return y[3]=0,y[7]=0,y[11]=0,y[12]=0,y[13]=0,y[14]=0,y[15]=1,this}makeRotationFromQuaternion(u){return this.compose(LJ,u,PJ)}lookAt(u,y,w){const g=this.elements;return En.subVectors(u,y),En.lengthSq()===0&&(En.z=1),En.normalize(),K1.crossVectors(w,En),K1.lengthSq()===0&&(Math.abs(w.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),K1.crossVectors(w,En)),K1.normalize(),Zs.crossVectors(En,K1),g[0]=K1.x,g[4]=Zs.x,g[8]=En.x,g[1]=K1.y,g[5]=Zs.y,g[9]=En.y,g[2]=K1.z,g[6]=Zs.z,g[10]=En.z,this}multiply(u){return this.multiplyMatrices(this,u)}premultiply(u){return this.multiplyMatrices(u,this)}multiplyMatrices(u,y){const w=u.elements,g=y.elements,O=this.elements,V=w[0],z=w[4],K=w[8],Q=w[12],n0=w[1],_0=w[5],c0=w[9],g0=w[13],R0=w[2],f0=w[6],h0=w[10],k0=w[14],G0=w[3],P0=w[7],F0=w[11],W0=w[15],Q0=g[0],o2=g[4],E0=g[8],K0=g[12],l2=g[1],E2=g[5],P2=g[9],p2=g[13],_2=g[2],M2=g[6],F2=g[10],N2=g[14],L2=g[3],j2=g[7],O2=g[11],R2=g[15];return O[0]=V*Q0+z*l2+K*_2+Q*L2,O[4]=V*o2+z*E2+K*M2+Q*j2,O[8]=V*E0+z*P2+K*F2+Q*O2,O[12]=V*K0+z*p2+K*N2+Q*R2,O[1]=n0*Q0+_0*l2+c0*_2+g0*L2,O[5]=n0*o2+_0*E2+c0*M2+g0*j2,O[9]=n0*E0+_0*P2+c0*F2+g0*O2,O[13]=n0*K0+_0*p2+c0*N2+g0*R2,O[2]=R0*Q0+f0*l2+h0*_2+k0*L2,O[6]=R0*o2+f0*E2+h0*M2+k0*j2,O[10]=R0*E0+f0*P2+h0*F2+k0*O2,O[14]=R0*K0+f0*p2+h0*N2+k0*R2,O[3]=G0*Q0+P0*l2+F0*_2+W0*L2,O[7]=G0*o2+P0*E2+F0*M2+W0*j2,O[11]=G0*E0+P0*P2+F0*F2+W0*O2,O[15]=G0*K0+P0*p2+F0*N2+W0*R2,this}multiplyScalar(u){const y=this.elements;return y[0]*=u,y[4]*=u,y[8]*=u,y[12]*=u,y[1]*=u,y[5]*=u,y[9]*=u,y[13]*=u,y[2]*=u,y[6]*=u,y[10]*=u,y[14]*=u,y[3]*=u,y[7]*=u,y[11]*=u,y[15]*=u,this}determinant(){const u=this.elements,y=u[0],w=u[4],g=u[8],O=u[12],V=u[1],z=u[5],K=u[9],Q=u[13],n0=u[2],_0=u[6],c0=u[10],g0=u[14],R0=u[3],f0=u[7],h0=u[11],k0=u[15];return R0*(+O*K*_0-g*Q*_0-O*z*c0+w*Q*c0+g*z*g0-w*K*g0)+f0*(+y*K*g0-y*Q*c0+O*V*c0-g*V*g0+g*Q*n0-O*K*n0)+h0*(+y*Q*_0-y*z*g0-O*V*_0+w*V*g0+O*z*n0-w*Q*n0)+k0*(-g*z*n0-y*K*_0+y*z*c0+g*V*_0-w*V*c0+w*K*n0)}transpose(){const u=this.elements;let y;return y=u[1],u[1]=u[4],u[4]=y,y=u[2],u[2]=u[8],u[8]=y,y=u[6],u[6]=u[9],u[9]=y,y=u[3],u[3]=u[12],u[12]=y,y=u[7],u[7]=u[13],u[13]=y,y=u[11],u[11]=u[14],u[14]=y,this}setPosition(u,y,w){const g=this.elements;return u.isVector3?(g[12]=u.x,g[13]=u.y,g[14]=u.z):(g[12]=u,g[13]=y,g[14]=w),this}invert(){const u=this.elements,y=u[0],w=u[1],g=u[2],O=u[3],V=u[4],z=u[5],K=u[6],Q=u[7],n0=u[8],_0=u[9],c0=u[10],g0=u[11],R0=u[12],f0=u[13],h0=u[14],k0=u[15],G0=_0*h0*Q-f0*c0*Q+f0*K*g0-z*h0*g0-_0*K*k0+z*c0*k0,P0=R0*c0*Q-n0*h0*Q-R0*K*g0+V*h0*g0+n0*K*k0-V*c0*k0,F0=n0*f0*Q-R0*_0*Q+R0*z*g0-V*f0*g0-n0*z*k0+V*_0*k0,W0=R0*_0*K-n0*f0*K-R0*z*c0+V*f0*c0+n0*z*h0-V*_0*h0,Q0=y*G0+w*P0+g*F0+O*W0;if(Q0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const o2=1/Q0;return u[0]=G0*o2,u[1]=(f0*c0*O-_0*h0*O-f0*g*g0+w*h0*g0+_0*g*k0-w*c0*k0)*o2,u[2]=(z*h0*O-f0*K*O+f0*g*Q-w*h0*Q-z*g*k0+w*K*k0)*o2,u[3]=(_0*K*O-z*c0*O-_0*g*Q+w*c0*Q+z*g*g0-w*K*g0)*o2,u[4]=P0*o2,u[5]=(n0*h0*O-R0*c0*O+R0*g*g0-y*h0*g0-n0*g*k0+y*c0*k0)*o2,u[6]=(R0*K*O-V*h0*O-R0*g*Q+y*h0*Q+V*g*k0-y*K*k0)*o2,u[7]=(V*c0*O-n0*K*O+n0*g*Q-y*c0*Q-V*g*g0+y*K*g0)*o2,u[8]=F0*o2,u[9]=(R0*_0*O-n0*f0*O-R0*w*g0+y*f0*g0+n0*w*k0-y*_0*k0)*o2,u[10]=(V*f0*O-R0*z*O+R0*w*Q-y*f0*Q-V*w*k0+y*z*k0)*o2,u[11]=(n0*z*O-V*_0*O-n0*w*Q+y*_0*Q+V*w*g0-y*z*g0)*o2,u[12]=W0*o2,u[13]=(n0*f0*g-R0*_0*g+R0*w*c0-y*f0*c0-n0*w*h0+y*_0*h0)*o2,u[14]=(R0*z*g-V*f0*g-R0*w*K+y*f0*K+V*w*h0-y*z*h0)*o2,u[15]=(V*_0*g-n0*z*g+n0*w*K-y*_0*K-V*w*c0+y*z*c0)*o2,this}scale(u){const y=this.elements,w=u.x,g=u.y,O=u.z;return y[0]*=w,y[4]*=g,y[8]*=O,y[1]*=w,y[5]*=g,y[9]*=O,y[2]*=w,y[6]*=g,y[10]*=O,y[3]*=w,y[7]*=g,y[11]*=O,this}getMaxScaleOnAxis(){const u=this.elements,y=u[0]*u[0]+u[1]*u[1]+u[2]*u[2],w=u[4]*u[4]+u[5]*u[5]+u[6]*u[6],g=u[8]*u[8]+u[9]*u[9]+u[10]*u[10];return Math.sqrt(Math.max(y,w,g))}makeTranslation(u,y,w){return this.set(1,0,0,u,0,1,0,y,0,0,1,w,0,0,0,1),this}makeRotationX(u){const y=Math.cos(u),w=Math.sin(u);return this.set(1,0,0,0,0,y,-w,0,0,w,y,0,0,0,0,1),this}makeRotationY(u){const y=Math.cos(u),w=Math.sin(u);return this.set(y,0,w,0,0,1,0,0,-w,0,y,0,0,0,0,1),this}makeRotationZ(u){const y=Math.cos(u),w=Math.sin(u);return this.set(y,-w,0,0,w,y,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(u,y){const w=Math.cos(y),g=Math.sin(y),O=1-w,V=u.x,z=u.y,K=u.z,Q=O*V,n0=O*z;return this.set(Q*V+w,Q*z-g*K,Q*K+g*z,0,Q*z+g*K,n0*z+w,n0*K-g*V,0,Q*K-g*z,n0*K+g*V,O*K*K+w,0,0,0,0,1),this}makeScale(u,y,w){return this.set(u,0,0,0,0,y,0,0,0,0,w,0,0,0,0,1),this}makeShear(u,y,w,g,O,V){return this.set(1,w,O,0,u,1,V,0,y,g,1,0,0,0,0,1),this}compose(u,y,w){const g=this.elements,O=y._x,V=y._y,z=y._z,K=y._w,Q=O+O,n0=V+V,_0=z+z,c0=O*Q,g0=O*n0,R0=O*_0,f0=V*n0,h0=V*_0,k0=z*_0,G0=K*Q,P0=K*n0,F0=K*_0,W0=w.x,Q0=w.y,o2=w.z;return g[0]=(1-(f0+k0))*W0,g[1]=(g0+F0)*W0,g[2]=(R0-P0)*W0,g[3]=0,g[4]=(g0-F0)*Q0,g[5]=(1-(c0+k0))*Q0,g[6]=(h0+G0)*Q0,g[7]=0,g[8]=(R0+P0)*o2,g[9]=(h0-G0)*o2,g[10]=(1-(c0+f0))*o2,g[11]=0,g[12]=u.x,g[13]=u.y,g[14]=u.z,g[15]=1,this}decompose(u,y,w){const g=this.elements;let O=$r.set(g[0],g[1],g[2]).length();const V=$r.set(g[4],g[5],g[6]).length(),z=$r.set(g[8],g[9],g[10]).length();this.determinant()<0&&(O=-O),u.x=g[12],u.y=g[13],u.z=g[14],Zn.copy(this);const Q=1/O,n0=1/V,_0=1/z;return Zn.elements[0]*=Q,Zn.elements[1]*=Q,Zn.elements[2]*=Q,Zn.elements[4]*=n0,Zn.elements[5]*=n0,Zn.elements[6]*=n0,Zn.elements[8]*=_0,Zn.elements[9]*=_0,Zn.elements[10]*=_0,y.setFromRotationMatrix(Zn),w.x=O,w.y=V,w.z=z,this}makePerspective(u,y,w,g,O,V){const z=this.elements,K=2*O/(y-u),Q=2*O/(w-g),n0=(y+u)/(y-u),_0=(w+g)/(w-g),c0=-(V+O)/(V-O),g0=-2*V*O/(V-O);return z[0]=K,z[4]=0,z[8]=n0,z[12]=0,z[1]=0,z[5]=Q,z[9]=_0,z[13]=0,z[2]=0,z[6]=0,z[10]=c0,z[14]=g0,z[3]=0,z[7]=0,z[11]=-1,z[15]=0,this}makeOrthographic(u,y,w,g,O,V){const z=this.elements,K=1/(y-u),Q=1/(w-g),n0=1/(V-O),_0=(y+u)*K,c0=(w+g)*Q,g0=(V+O)*n0;return z[0]=2*K,z[4]=0,z[8]=0,z[12]=-_0,z[1]=0,z[5]=2*Q,z[9]=0,z[13]=-c0,z[2]=0,z[6]=0,z[10]=-2*n0,z[14]=-g0,z[3]=0,z[7]=0,z[11]=0,z[15]=1,this}equals(u){const y=this.elements,w=u.elements;for(let g=0;g<16;g++)if(y[g]!==w[g])return!1;return!0}fromArray(u,y=0){for(let w=0;w<16;w++)this.elements[w]=u[w+y];return this}toArray(u=[],y=0){const w=this.elements;return u[y]=w[0],u[y+1]=w[1],u[y+2]=w[2],u[y+3]=w[3],u[y+4]=w[4],u[y+5]=w[5],u[y+6]=w[6],u[y+7]=w[7],u[y+8]=w[8],u[y+9]=w[9],u[y+10]=w[10],u[y+11]=w[11],u[y+12]=w[12],u[y+13]=w[13],u[y+14]=w[14],u[y+15]=w[15],u}}const $r=new t2,Zn=new $e,LJ=new t2(0,0,0),PJ=new t2(1,1,1),K1=new t2,Zs=new t2,En=new t2,S8=new $e,x8=new u1;class ls{constructor(u=0,y=0,w=0,g=ls.DefaultOrder){this.isEuler=!0,this._x=u,this._y=y,this._z=w,this._order=g}get x(){return this._x}set x(u){this._x=u,this._onChangeCallback()}get y(){return this._y}set y(u){this._y=u,this._onChangeCallback()}get z(){return this._z}set z(u){this._z=u,this._onChangeCallback()}get order(){return this._order}set order(u){this._order=u,this._onChangeCallback()}set(u,y,w,g=this._order){return this._x=u,this._y=y,this._z=w,this._order=g,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(u){return this._x=u._x,this._y=u._y,this._z=u._z,this._order=u._order,this._onChangeCallback(),this}setFromRotationMatrix(u,y=this._order,w=!0){const g=u.elements,O=g[0],V=g[4],z=g[8],K=g[1],Q=g[5],n0=g[9],_0=g[2],c0=g[6],g0=g[10];switch(y){case"XYZ":this._y=Math.asin(Ki(z,-1,1)),Math.abs(z)<.9999999?(this._x=Math.atan2(-n0,g0),this._z=Math.atan2(-V,O)):(this._x=Math.atan2(c0,Q),this._z=0);break;case"YXZ":this._x=Math.asin(-Ki(n0,-1,1)),Math.abs(n0)<.9999999?(this._y=Math.atan2(z,g0),this._z=Math.atan2(K,Q)):(this._y=Math.atan2(-_0,O),this._z=0);break;case"ZXY":this._x=Math.asin(Ki(c0,-1,1)),Math.abs(c0)<.9999999?(this._y=Math.atan2(-_0,g0),this._z=Math.atan2(-V,Q)):(this._y=0,this._z=Math.atan2(K,O));break;case"ZYX":this._y=Math.asin(-Ki(_0,-1,1)),Math.abs(_0)<.9999999?(this._x=Math.atan2(c0,g0),this._z=Math.atan2(K,O)):(this._x=0,this._z=Math.atan2(-V,Q));break;case"YZX":this._z=Math.asin(Ki(K,-1,1)),Math.abs(K)<.9999999?(this._x=Math.atan2(-n0,Q),this._y=Math.atan2(-_0,O)):(this._x=0,this._y=Math.atan2(z,g0));break;case"XZY":this._z=Math.asin(-Ki(V,-1,1)),Math.abs(V)<.9999999?(this._x=Math.atan2(c0,Q),this._y=Math.atan2(z,O)):(this._x=Math.atan2(-n0,g0),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+y)}return this._order=y,w===!0&&this._onChangeCallback(),this}setFromQuaternion(u,y,w){return S8.makeRotationFromQuaternion(u),this.setFromRotationMatrix(S8,y,w)}setFromVector3(u,y=this._order){return this.set(u.x,u.y,u.z,y)}reorder(u){return x8.setFromEuler(this),this.setFromQuaternion(x8,u)}equals(u){return u._x===this._x&&u._y===this._y&&u._z===this._z&&u._order===this._order}fromArray(u){return this._x=u[0],this._y=u[1],this._z=u[2],u[3]!==void 0&&(this._order=u[3]),this._onChangeCallback(),this}toArray(u=[],y=0){return u[y]=this._x,u[y+1]=this._y,u[y+2]=this._z,u[y+3]=this._order,u}_onChange(u){return this._onChangeCallback=u,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ls.DefaultOrder="XYZ";ls.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class z6{constructor(){this.mask=1}set(u){this.mask=(1<<u|0)>>>0}enable(u){this.mask|=1<<u|0}enableAll(){this.mask=-1}toggle(u){this.mask^=1<<u|0}disable(u){this.mask&=~(1<<u|0)}disableAll(){this.mask=0}test(u){return(this.mask&u.mask)!==0}isEnabled(u){return(this.mask&(1<<u|0))!==0}}let OJ=0;const w8=new t2,eo=new u1,A1=new $e,Ys=new t2,jo=new t2,FJ=new t2,BJ=new u1,M8=new t2(1,0,0),T8=new t2(0,1,0),R8=new t2(0,0,1),NJ={type:"added"},k8={type:"removed"};class Zt extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OJ++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DefaultUp.clone();const u=new t2,y=new ls,w=new u1,g=new t2(1,1,1);function O(){w.setFromEuler(y,!1)}function V(){y.setFromQuaternion(w,void 0,!1)}y._onChange(O),w._onChange(V),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:u},rotation:{configurable:!0,enumerable:!0,value:y},quaternion:{configurable:!0,enumerable:!0,value:w},scale:{configurable:!0,enumerable:!0,value:g},modelViewMatrix:{value:new $e},normalMatrix:{value:new Ln}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Zt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Zt.DefaultMatrixWorldAutoUpdate,this.layers=new z6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(u){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(u),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(u){return this.quaternion.premultiply(u),this}setRotationFromAxisAngle(u,y){this.quaternion.setFromAxisAngle(u,y)}setRotationFromEuler(u){this.quaternion.setFromEuler(u,!0)}setRotationFromMatrix(u){this.quaternion.setFromRotationMatrix(u)}setRotationFromQuaternion(u){this.quaternion.copy(u)}rotateOnAxis(u,y){return eo.setFromAxisAngle(u,y),this.quaternion.multiply(eo),this}rotateOnWorldAxis(u,y){return eo.setFromAxisAngle(u,y),this.quaternion.premultiply(eo),this}rotateX(u){return this.rotateOnAxis(M8,u)}rotateY(u){return this.rotateOnAxis(T8,u)}rotateZ(u){return this.rotateOnAxis(R8,u)}translateOnAxis(u,y){return w8.copy(u).applyQuaternion(this.quaternion),this.position.add(w8.multiplyScalar(y)),this}translateX(u){return this.translateOnAxis(M8,u)}translateY(u){return this.translateOnAxis(T8,u)}translateZ(u){return this.translateOnAxis(R8,u)}localToWorld(u){return this.updateWorldMatrix(!0,!1),u.applyMatrix4(this.matrixWorld)}worldToLocal(u){return this.updateWorldMatrix(!0,!1),u.applyMatrix4(A1.copy(this.matrixWorld).invert())}lookAt(u,y,w){u.isVector3?Ys.copy(u):Ys.set(u,y,w);const g=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?A1.lookAt(jo,Ys,this.up):A1.lookAt(Ys,jo,this.up),this.quaternion.setFromRotationMatrix(A1),g&&(A1.extractRotation(g.matrixWorld),eo.setFromRotationMatrix(A1),this.quaternion.premultiply(eo.invert()))}add(u){if(arguments.length>1){for(let y=0;y<arguments.length;y++)this.add(arguments[y]);return this}return u===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",u),this):(u&&u.isObject3D?(u.parent!==null&&u.parent.remove(u),u.parent=this,this.children.push(u),u.dispatchEvent(NJ)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",u),this)}remove(u){if(arguments.length>1){for(let w=0;w<arguments.length;w++)this.remove(arguments[w]);return this}const y=this.children.indexOf(u);return y!==-1&&(u.parent=null,this.children.splice(y,1),u.dispatchEvent(k8)),this}removeFromParent(){const u=this.parent;return u!==null&&u.remove(this),this}clear(){for(let u=0;u<this.children.length;u++){const y=this.children[u];y.parent=null,y.dispatchEvent(k8)}return this.children.length=0,this}attach(u){return this.updateWorldMatrix(!0,!1),A1.copy(this.matrixWorld).invert(),u.parent!==null&&(u.parent.updateWorldMatrix(!0,!1),A1.multiply(u.parent.matrixWorld)),u.applyMatrix4(A1),this.add(u),u.updateWorldMatrix(!1,!0),this}getObjectById(u){return this.getObjectByProperty("id",u)}getObjectByName(u){return this.getObjectByProperty("name",u)}getObjectByProperty(u,y){if(this[u]===y)return this;for(let w=0,g=this.children.length;w<g;w++){const V=this.children[w].getObjectByProperty(u,y);if(V!==void 0)return V}}getObjectsByProperty(u,y){let w=[];this[u]===y&&w.push(this);for(let g=0,O=this.children.length;g<O;g++){const V=this.children[g].getObjectsByProperty(u,y);V.length>0&&(w=w.concat(V))}return w}getWorldPosition(u){return this.updateWorldMatrix(!0,!1),u.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(u){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,u,FJ),u}getWorldScale(u){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,BJ,u),u}getWorldDirection(u){this.updateWorldMatrix(!0,!1);const y=this.matrixWorld.elements;return u.set(y[8],y[9],y[10]).normalize()}raycast(){}traverse(u){u(this);const y=this.children;for(let w=0,g=y.length;w<g;w++)y[w].traverse(u)}traverseVisible(u){if(this.visible===!1)return;u(this);const y=this.children;for(let w=0,g=y.length;w<g;w++)y[w].traverseVisible(u)}traverseAncestors(u){const y=this.parent;y!==null&&(u(y),y.traverseAncestors(u))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(u){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||u)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,u=!0);const y=this.children;for(let w=0,g=y.length;w<g;w++){const O=y[w];(O.matrixWorldAutoUpdate===!0||u===!0)&&O.updateMatrixWorld(u)}}updateWorldMatrix(u,y){const w=this.parent;if(u===!0&&w!==null&&w.matrixWorldAutoUpdate===!0&&w.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),y===!0){const g=this.children;for(let O=0,V=g.length;O<V;O++){const z=g[O];z.matrixWorldAutoUpdate===!0&&z.updateWorldMatrix(!1,!0)}}}toJSON(u){const y=u===void 0||typeof u=="string",w={};y&&(u={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},w.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const g={};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.castShadow===!0&&(g.castShadow=!0),this.receiveShadow===!0&&(g.receiveShadow=!0),this.visible===!1&&(g.visible=!1),this.frustumCulled===!1&&(g.frustumCulled=!1),this.renderOrder!==0&&(g.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(g.userData=this.userData),g.layers=this.layers.mask,g.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(g.matrixAutoUpdate=!1),this.isInstancedMesh&&(g.type="InstancedMesh",g.count=this.count,g.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(g.instanceColor=this.instanceColor.toJSON()));function O(z,K){return z[K.uuid]===void 0&&(z[K.uuid]=K.toJSON(u)),K.uuid}if(this.isScene)this.background&&(this.background.isColor?g.background=this.background.toJSON():this.background.isTexture&&(g.background=this.background.toJSON(u).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(g.environment=this.environment.toJSON(u).uuid);else if(this.isMesh||this.isLine||this.isPoints){g.geometry=O(u.geometries,this.geometry);const z=this.geometry.parameters;if(z!==void 0&&z.shapes!==void 0){const K=z.shapes;if(Array.isArray(K))for(let Q=0,n0=K.length;Q<n0;Q++){const _0=K[Q];O(u.shapes,_0)}else O(u.shapes,K)}}if(this.isSkinnedMesh&&(g.bindMode=this.bindMode,g.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(O(u.skeletons,this.skeleton),g.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const z=[];for(let K=0,Q=this.material.length;K<Q;K++)z.push(O(u.materials,this.material[K]));g.material=z}else g.material=O(u.materials,this.material);if(this.children.length>0){g.children=[];for(let z=0;z<this.children.length;z++)g.children.push(this.children[z].toJSON(u).object)}if(this.animations.length>0){g.animations=[];for(let z=0;z<this.animations.length;z++){const K=this.animations[z];g.animations.push(O(u.animations,K))}}if(y){const z=V(u.geometries),K=V(u.materials),Q=V(u.textures),n0=V(u.images),_0=V(u.shapes),c0=V(u.skeletons),g0=V(u.animations),R0=V(u.nodes);z.length>0&&(w.geometries=z),K.length>0&&(w.materials=K),Q.length>0&&(w.textures=Q),n0.length>0&&(w.images=n0),_0.length>0&&(w.shapes=_0),c0.length>0&&(w.skeletons=c0),g0.length>0&&(w.animations=g0),R0.length>0&&(w.nodes=R0)}return w.object=g,w;function V(z){const K=[];for(const Q in z){const n0=z[Q];delete n0.metadata,K.push(n0)}return K}}clone(u){return new this.constructor().copy(this,u)}copy(u,y=!0){if(this.name=u.name,this.up.copy(u.up),this.position.copy(u.position),this.rotation.order=u.rotation.order,this.quaternion.copy(u.quaternion),this.scale.copy(u.scale),this.matrix.copy(u.matrix),this.matrixWorld.copy(u.matrixWorld),this.matrixAutoUpdate=u.matrixAutoUpdate,this.matrixWorldNeedsUpdate=u.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=u.matrixWorldAutoUpdate,this.layers.mask=u.layers.mask,this.visible=u.visible,this.castShadow=u.castShadow,this.receiveShadow=u.receiveShadow,this.frustumCulled=u.frustumCulled,this.renderOrder=u.renderOrder,this.userData=JSON.parse(JSON.stringify(u.userData)),y===!0)for(let w=0;w<u.children.length;w++){const g=u.children[w];this.add(g.clone())}return this}}Zt.DefaultUp=new t2(0,1,0);Zt.DefaultMatrixAutoUpdate=!0;Zt.DefaultMatrixWorldAutoUpdate=!0;const Yn=new t2,E1=new t2,W4=new t2,I1=new t2,to=new t2,io=new t2,D8=new t2,G4=new t2,U4=new t2,z4=new t2;class P1{constructor(u=new t2,y=new t2,w=new t2){this.a=u,this.b=y,this.c=w}static getNormal(u,y,w,g){g.subVectors(w,y),Yn.subVectors(u,y),g.cross(Yn);const O=g.lengthSq();return O>0?g.multiplyScalar(1/Math.sqrt(O)):g.set(0,0,0)}static getBarycoord(u,y,w,g,O){Yn.subVectors(g,y),E1.subVectors(w,y),W4.subVectors(u,y);const V=Yn.dot(Yn),z=Yn.dot(E1),K=Yn.dot(W4),Q=E1.dot(E1),n0=E1.dot(W4),_0=V*Q-z*z;if(_0===0)return O.set(-2,-1,-1);const c0=1/_0,g0=(Q*K-z*n0)*c0,R0=(V*n0-z*K)*c0;return O.set(1-g0-R0,R0,g0)}static containsPoint(u,y,w,g){return this.getBarycoord(u,y,w,g,I1),I1.x>=0&&I1.y>=0&&I1.x+I1.y<=1}static getUV(u,y,w,g,O,V,z,K){return this.getBarycoord(u,y,w,g,I1),K.set(0,0),K.addScaledVector(O,I1.x),K.addScaledVector(V,I1.y),K.addScaledVector(z,I1.z),K}static isFrontFacing(u,y,w,g){return Yn.subVectors(w,y),E1.subVectors(u,y),Yn.cross(E1).dot(g)<0}set(u,y,w){return this.a.copy(u),this.b.copy(y),this.c.copy(w),this}setFromPointsAndIndices(u,y,w,g){return this.a.copy(u[y]),this.b.copy(u[w]),this.c.copy(u[g]),this}setFromAttributeAndIndices(u,y,w,g){return this.a.fromBufferAttribute(u,y),this.b.fromBufferAttribute(u,w),this.c.fromBufferAttribute(u,g),this}clone(){return new this.constructor().copy(this)}copy(u){return this.a.copy(u.a),this.b.copy(u.b),this.c.copy(u.c),this}getArea(){return Yn.subVectors(this.c,this.b),E1.subVectors(this.a,this.b),Yn.cross(E1).length()*.5}getMidpoint(u){return u.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(u){return P1.getNormal(this.a,this.b,this.c,u)}getPlane(u){return u.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(u,y){return P1.getBarycoord(u,this.a,this.b,this.c,y)}getUV(u,y,w,g,O){return P1.getUV(u,this.a,this.b,this.c,y,w,g,O)}containsPoint(u){return P1.containsPoint(u,this.a,this.b,this.c)}isFrontFacing(u){return P1.isFrontFacing(this.a,this.b,this.c,u)}intersectsBox(u){return u.intersectsTriangle(this)}closestPointToPoint(u,y){const w=this.a,g=this.b,O=this.c;let V,z;to.subVectors(g,w),io.subVectors(O,w),G4.subVectors(u,w);const K=to.dot(G4),Q=io.dot(G4);if(K<=0&&Q<=0)return y.copy(w);U4.subVectors(u,g);const n0=to.dot(U4),_0=io.dot(U4);if(n0>=0&&_0<=n0)return y.copy(g);const c0=K*_0-n0*Q;if(c0<=0&&K>=0&&n0<=0)return V=K/(K-n0),y.copy(w).addScaledVector(to,V);z4.subVectors(u,O);const g0=to.dot(z4),R0=io.dot(z4);if(R0>=0&&g0<=R0)return y.copy(O);const f0=g0*Q-K*R0;if(f0<=0&&Q>=0&&R0<=0)return z=Q/(Q-R0),y.copy(w).addScaledVector(io,z);const h0=n0*R0-g0*_0;if(h0<=0&&_0-n0>=0&&g0-R0>=0)return D8.subVectors(O,g),z=(_0-n0)/(_0-n0+(g0-R0)),y.copy(g).addScaledVector(D8,z);const k0=1/(h0+f0+c0);return V=f0*k0,z=c0*k0,y.copy(w).addScaledVector(to,V).addScaledVector(io,z)}equals(u){return u.a.equals(this.a)&&u.b.equals(this.b)&&u.c.equals(this.c)}}let WJ=0;class jn extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WJ++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=po,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=A6,this.blendDst=E6,this.blendEquation=lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hJ,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=R4,this.stencilZFail=R4,this.stencilZPass=R4,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(u){this._alphaTest>0!=u>0&&this.version++,this._alphaTest=u}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(u){if(u!==void 0)for(const y in u){const w=u[y];if(w===void 0){console.warn("THREE.Material: '"+y+"' parameter is undefined.");continue}const g=this[y];if(g===void 0){console.warn("THREE."+this.type+": '"+y+"' is not a property of this material.");continue}g&&g.isColor?g.set(w):g&&g.isVector3&&w&&w.isVector3?g.copy(w):this[y]=w}}toJSON(u){const y=u===void 0||typeof u=="string";y&&(u={textures:{},images:{}});const w={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};w.uuid=this.uuid,w.type=this.type,this.name!==""&&(w.name=this.name),this.color&&this.color.isColor&&(w.color=this.color.getHex()),this.roughness!==void 0&&(w.roughness=this.roughness),this.metalness!==void 0&&(w.metalness=this.metalness),this.sheen!==void 0&&(w.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(w.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(w.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(w.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(w.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(w.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(w.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(w.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(w.shininess=this.shininess),this.clearcoat!==void 0&&(w.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(w.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(w.clearcoatMap=this.clearcoatMap.toJSON(u).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(w.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(u).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(w.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(u).uuid,w.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(w.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(w.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(w.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(w.iridescenceMap=this.iridescenceMap.toJSON(u).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(w.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(u).uuid),this.map&&this.map.isTexture&&(w.map=this.map.toJSON(u).uuid),this.matcap&&this.matcap.isTexture&&(w.matcap=this.matcap.toJSON(u).uuid),this.alphaMap&&this.alphaMap.isTexture&&(w.alphaMap=this.alphaMap.toJSON(u).uuid),this.lightMap&&this.lightMap.isTexture&&(w.lightMap=this.lightMap.toJSON(u).uuid,w.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(w.aoMap=this.aoMap.toJSON(u).uuid,w.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(w.bumpMap=this.bumpMap.toJSON(u).uuid,w.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(w.normalMap=this.normalMap.toJSON(u).uuid,w.normalMapType=this.normalMapType,w.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(w.displacementMap=this.displacementMap.toJSON(u).uuid,w.displacementScale=this.displacementScale,w.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(w.roughnessMap=this.roughnessMap.toJSON(u).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(w.metalnessMap=this.metalnessMap.toJSON(u).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(w.emissiveMap=this.emissiveMap.toJSON(u).uuid),this.specularMap&&this.specularMap.isTexture&&(w.specularMap=this.specularMap.toJSON(u).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(w.specularIntensityMap=this.specularIntensityMap.toJSON(u).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(w.specularColorMap=this.specularColorMap.toJSON(u).uuid),this.envMap&&this.envMap.isTexture&&(w.envMap=this.envMap.toJSON(u).uuid,this.combine!==void 0&&(w.combine=this.combine)),this.envMapIntensity!==void 0&&(w.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(w.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(w.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(w.gradientMap=this.gradientMap.toJSON(u).uuid),this.transmission!==void 0&&(w.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(w.transmissionMap=this.transmissionMap.toJSON(u).uuid),this.thickness!==void 0&&(w.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(w.thicknessMap=this.thicknessMap.toJSON(u).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(w.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(w.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(w.size=this.size),this.shadowSide!==null&&(w.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(w.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(w.blending=this.blending),this.side!==tr&&(w.side=this.side),this.vertexColors&&(w.vertexColors=!0),this.opacity<1&&(w.opacity=this.opacity),this.transparent===!0&&(w.transparent=this.transparent),w.depthFunc=this.depthFunc,w.depthTest=this.depthTest,w.depthWrite=this.depthWrite,w.colorWrite=this.colorWrite,w.stencilWrite=this.stencilWrite,w.stencilWriteMask=this.stencilWriteMask,w.stencilFunc=this.stencilFunc,w.stencilRef=this.stencilRef,w.stencilFuncMask=this.stencilFuncMask,w.stencilFail=this.stencilFail,w.stencilZFail=this.stencilZFail,w.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(w.rotation=this.rotation),this.polygonOffset===!0&&(w.polygonOffset=!0),this.polygonOffsetFactor!==0&&(w.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(w.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(w.linewidth=this.linewidth),this.dashSize!==void 0&&(w.dashSize=this.dashSize),this.gapSize!==void 0&&(w.gapSize=this.gapSize),this.scale!==void 0&&(w.scale=this.scale),this.dithering===!0&&(w.dithering=!0),this.alphaTest>0&&(w.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(w.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(w.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(w.wireframe=this.wireframe),this.wireframeLinewidth>1&&(w.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(w.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(w.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(w.flatShading=this.flatShading),this.visible===!1&&(w.visible=!1),this.toneMapped===!1&&(w.toneMapped=!1),this.fog===!1&&(w.fog=!1),Object.keys(this.userData).length>0&&(w.userData=this.userData);function g(O){const V=[];for(const z in O){const K=O[z];delete K.metadata,V.push(K)}return V}if(y){const O=g(u.textures),V=g(u.images);O.length>0&&(w.textures=O),V.length>0&&(w.images=V)}return w}clone(){return new this.constructor().copy(this)}copy(u){this.name=u.name,this.blending=u.blending,this.side=u.side,this.vertexColors=u.vertexColors,this.opacity=u.opacity,this.transparent=u.transparent,this.blendSrc=u.blendSrc,this.blendDst=u.blendDst,this.blendEquation=u.blendEquation,this.blendSrcAlpha=u.blendSrcAlpha,this.blendDstAlpha=u.blendDstAlpha,this.blendEquationAlpha=u.blendEquationAlpha,this.depthFunc=u.depthFunc,this.depthTest=u.depthTest,this.depthWrite=u.depthWrite,this.stencilWriteMask=u.stencilWriteMask,this.stencilFunc=u.stencilFunc,this.stencilRef=u.stencilRef,this.stencilFuncMask=u.stencilFuncMask,this.stencilFail=u.stencilFail,this.stencilZFail=u.stencilZFail,this.stencilZPass=u.stencilZPass,this.stencilWrite=u.stencilWrite;const y=u.clippingPlanes;let w=null;if(y!==null){const g=y.length;w=new Array(g);for(let O=0;O!==g;++O)w[O]=y[O].clone()}return this.clippingPlanes=w,this.clipIntersection=u.clipIntersection,this.clipShadows=u.clipShadows,this.shadowSide=u.shadowSide,this.colorWrite=u.colorWrite,this.precision=u.precision,this.polygonOffset=u.polygonOffset,this.polygonOffsetFactor=u.polygonOffsetFactor,this.polygonOffsetUnits=u.polygonOffsetUnits,this.dithering=u.dithering,this.alphaTest=u.alphaTest,this.alphaToCoverage=u.alphaToCoverage,this.premultipliedAlpha=u.premultipliedAlpha,this.visible=u.visible,this.toneMapped=u.toneMapped,this.userData=JSON.parse(JSON.stringify(u.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(u){u===!0&&this.version++}}class $1 extends jn{constructor(u){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=g_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(u)}copy(u){return super.copy(u),this.color.copy(u.color),this.map=u.map,this.lightMap=u.lightMap,this.lightMapIntensity=u.lightMapIntensity,this.aoMap=u.aoMap,this.aoMapIntensity=u.aoMapIntensity,this.specularMap=u.specularMap,this.alphaMap=u.alphaMap,this.envMap=u.envMap,this.combine=u.combine,this.reflectivity=u.reflectivity,this.refractionRatio=u.refractionRatio,this.wireframe=u.wireframe,this.wireframeLinewidth=u.wireframeLinewidth,this.wireframeLinecap=u.wireframeLinecap,this.wireframeLinejoin=u.wireframeLinejoin,this.fog=u.fog,this}}const di=new t2,Qs=new Le;class Zi{constructor(u,y,w=!1){if(Array.isArray(u))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=u,this.itemSize=y,this.count=u!==void 0?u.length/y:0,this.normalized=w,this.usage=_c,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(u){u===!0&&this.version++}setUsage(u){return this.usage=u,this}copy(u){return this.name=u.name,this.array=new u.array.constructor(u.array),this.itemSize=u.itemSize,this.count=u.count,this.normalized=u.normalized,this.usage=u.usage,this}copyAt(u,y,w){u*=this.itemSize,w*=y.itemSize;for(let g=0,O=this.itemSize;g<O;g++)this.array[u+g]=y.array[w+g];return this}copyArray(u){return this.array.set(u),this}applyMatrix3(u){if(this.itemSize===2)for(let y=0,w=this.count;y<w;y++)Qs.fromBufferAttribute(this,y),Qs.applyMatrix3(u),this.setXY(y,Qs.x,Qs.y);else if(this.itemSize===3)for(let y=0,w=this.count;y<w;y++)di.fromBufferAttribute(this,y),di.applyMatrix3(u),this.setXYZ(y,di.x,di.y,di.z);return this}applyMatrix4(u){for(let y=0,w=this.count;y<w;y++)di.fromBufferAttribute(this,y),di.applyMatrix4(u),this.setXYZ(y,di.x,di.y,di.z);return this}applyNormalMatrix(u){for(let y=0,w=this.count;y<w;y++)di.fromBufferAttribute(this,y),di.applyNormalMatrix(u),this.setXYZ(y,di.x,di.y,di.z);return this}transformDirection(u){for(let y=0,w=this.count;y<w;y++)di.fromBufferAttribute(this,y),di.transformDirection(u),this.setXYZ(y,di.x,di.y,di.z);return this}set(u,y=0){return this.array.set(u,y),this}getX(u){let y=this.array[u*this.itemSize];return this.normalized&&(y=O1(y,this.array)),y}setX(u,y){return this.normalized&&(y=Et(y,this.array)),this.array[u*this.itemSize]=y,this}getY(u){let y=this.array[u*this.itemSize+1];return this.normalized&&(y=O1(y,this.array)),y}setY(u,y){return this.normalized&&(y=Et(y,this.array)),this.array[u*this.itemSize+1]=y,this}getZ(u){let y=this.array[u*this.itemSize+2];return this.normalized&&(y=O1(y,this.array)),y}setZ(u,y){return this.normalized&&(y=Et(y,this.array)),this.array[u*this.itemSize+2]=y,this}getW(u){let y=this.array[u*this.itemSize+3];return this.normalized&&(y=O1(y,this.array)),y}setW(u,y){return this.normalized&&(y=Et(y,this.array)),this.array[u*this.itemSize+3]=y,this}setXY(u,y,w){return u*=this.itemSize,this.normalized&&(y=Et(y,this.array),w=Et(w,this.array)),this.array[u+0]=y,this.array[u+1]=w,this}setXYZ(u,y,w,g){return u*=this.itemSize,this.normalized&&(y=Et(y,this.array),w=Et(w,this.array),g=Et(g,this.array)),this.array[u+0]=y,this.array[u+1]=w,this.array[u+2]=g,this}setXYZW(u,y,w,g,O){return u*=this.itemSize,this.normalized&&(y=Et(y,this.array),w=Et(w,this.array),g=Et(g,this.array),O=Et(O,this.array)),this.array[u+0]=y,this.array[u+1]=w,this.array[u+2]=g,this.array[u+3]=O,this}onUpload(u){return this.onUploadCallback=u,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const u={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(u.name=this.name),this.usage!==_c&&(u.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(u.updateRange=this.updateRange),u}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class V6 extends Zi{constructor(u,y,w){super(new Uint16Array(u),y,w)}}class j6 extends Zi{constructor(u,y,w){super(new Uint32Array(u),y,w)}}class un extends Zi{constructor(u,y,w){super(new Float32Array(u),y,w)}}let GJ=0;const Wn=new $e,V4=new Zt,no=new t2,In=new xo,Ho=new xo,Oi=new t2;class Rn extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GJ++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(u){return Array.isArray(u)?this.index=new(B6(u)?j6:V6)(u,1):this.index=u,this}getAttribute(u){return this.attributes[u]}setAttribute(u,y){return this.attributes[u]=y,this}deleteAttribute(u){return delete this.attributes[u],this}hasAttribute(u){return this.attributes[u]!==void 0}addGroup(u,y,w=0){this.groups.push({start:u,count:y,materialIndex:w})}clearGroups(){this.groups=[]}setDrawRange(u,y){this.drawRange.start=u,this.drawRange.count=y}applyMatrix4(u){const y=this.attributes.position;y!==void 0&&(y.applyMatrix4(u),y.needsUpdate=!0);const w=this.attributes.normal;if(w!==void 0){const O=new Ln().getNormalMatrix(u);w.applyNormalMatrix(O),w.needsUpdate=!0}const g=this.attributes.tangent;return g!==void 0&&(g.transformDirection(u),g.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(u){return Wn.makeRotationFromQuaternion(u),this.applyMatrix4(Wn),this}rotateX(u){return Wn.makeRotationX(u),this.applyMatrix4(Wn),this}rotateY(u){return Wn.makeRotationY(u),this.applyMatrix4(Wn),this}rotateZ(u){return Wn.makeRotationZ(u),this.applyMatrix4(Wn),this}translate(u,y,w){return Wn.makeTranslation(u,y,w),this.applyMatrix4(Wn),this}scale(u,y,w){return Wn.makeScale(u,y,w),this.applyMatrix4(Wn),this}lookAt(u){return V4.lookAt(u),V4.updateMatrix(),this.applyMatrix4(V4.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(u){const y=[];for(let w=0,g=u.length;w<g;w++){const O=u[w];y.push(O.x,O.y,O.z||0)}return this.setAttribute("position",new un(y,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const u=this.attributes.position,y=this.morphAttributes.position;if(u&&u.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new t2(-1/0,-1/0,-1/0),new t2(1/0,1/0,1/0));return}if(u!==void 0){if(this.boundingBox.setFromBufferAttribute(u),y)for(let w=0,g=y.length;w<g;w++){const O=y[w];In.setFromBufferAttribute(O),this.morphTargetsRelative?(Oi.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Oi),Oi.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Oi)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wo);const u=this.attributes.position,y=this.morphAttributes.position;if(u&&u.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new t2,1/0);return}if(u){const w=this.boundingSphere.center;if(In.setFromBufferAttribute(u),y)for(let O=0,V=y.length;O<V;O++){const z=y[O];Ho.setFromBufferAttribute(z),this.morphTargetsRelative?(Oi.addVectors(In.min,Ho.min),In.expandByPoint(Oi),Oi.addVectors(In.max,Ho.max),In.expandByPoint(Oi)):(In.expandByPoint(Ho.min),In.expandByPoint(Ho.max))}In.getCenter(w);let g=0;for(let O=0,V=u.count;O<V;O++)Oi.fromBufferAttribute(u,O),g=Math.max(g,w.distanceToSquared(Oi));if(y)for(let O=0,V=y.length;O<V;O++){const z=y[O],K=this.morphTargetsRelative;for(let Q=0,n0=z.count;Q<n0;Q++)Oi.fromBufferAttribute(z,Q),K&&(no.fromBufferAttribute(u,Q),Oi.add(no)),g=Math.max(g,w.distanceToSquared(Oi))}this.boundingSphere.radius=Math.sqrt(g),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const u=this.index,y=this.attributes;if(u===null||y.position===void 0||y.normal===void 0||y.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const w=u.array,g=y.position.array,O=y.normal.array,V=y.uv.array,z=g.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*z),4));const K=this.getAttribute("tangent").array,Q=[],n0=[];for(let l2=0;l2<z;l2++)Q[l2]=new t2,n0[l2]=new t2;const _0=new t2,c0=new t2,g0=new t2,R0=new Le,f0=new Le,h0=new Le,k0=new t2,G0=new t2;function P0(l2,E2,P2){_0.fromArray(g,l2*3),c0.fromArray(g,E2*3),g0.fromArray(g,P2*3),R0.fromArray(V,l2*2),f0.fromArray(V,E2*2),h0.fromArray(V,P2*2),c0.sub(_0),g0.sub(_0),f0.sub(R0),h0.sub(R0);const p2=1/(f0.x*h0.y-h0.x*f0.y);isFinite(p2)&&(k0.copy(c0).multiplyScalar(h0.y).addScaledVector(g0,-f0.y).multiplyScalar(p2),G0.copy(g0).multiplyScalar(f0.x).addScaledVector(c0,-h0.x).multiplyScalar(p2),Q[l2].add(k0),Q[E2].add(k0),Q[P2].add(k0),n0[l2].add(G0),n0[E2].add(G0),n0[P2].add(G0))}let F0=this.groups;F0.length===0&&(F0=[{start:0,count:w.length}]);for(let l2=0,E2=F0.length;l2<E2;++l2){const P2=F0[l2],p2=P2.start,_2=P2.count;for(let M2=p2,F2=p2+_2;M2<F2;M2+=3)P0(w[M2+0],w[M2+1],w[M2+2])}const W0=new t2,Q0=new t2,o2=new t2,E0=new t2;function K0(l2){o2.fromArray(O,l2*3),E0.copy(o2);const E2=Q[l2];W0.copy(E2),W0.sub(o2.multiplyScalar(o2.dot(E2))).normalize(),Q0.crossVectors(E0,E2);const p2=Q0.dot(n0[l2])<0?-1:1;K[l2*4]=W0.x,K[l2*4+1]=W0.y,K[l2*4+2]=W0.z,K[l2*4+3]=p2}for(let l2=0,E2=F0.length;l2<E2;++l2){const P2=F0[l2],p2=P2.start,_2=P2.count;for(let M2=p2,F2=p2+_2;M2<F2;M2+=3)K0(w[M2+0]),K0(w[M2+1]),K0(w[M2+2])}}computeVertexNormals(){const u=this.index,y=this.getAttribute("position");if(y!==void 0){let w=this.getAttribute("normal");if(w===void 0)w=new Zi(new Float32Array(y.count*3),3),this.setAttribute("normal",w);else for(let c0=0,g0=w.count;c0<g0;c0++)w.setXYZ(c0,0,0,0);const g=new t2,O=new t2,V=new t2,z=new t2,K=new t2,Q=new t2,n0=new t2,_0=new t2;if(u)for(let c0=0,g0=u.count;c0<g0;c0+=3){const R0=u.getX(c0+0),f0=u.getX(c0+1),h0=u.getX(c0+2);g.fromBufferAttribute(y,R0),O.fromBufferAttribute(y,f0),V.fromBufferAttribute(y,h0),n0.subVectors(V,O),_0.subVectors(g,O),n0.cross(_0),z.fromBufferAttribute(w,R0),K.fromBufferAttribute(w,f0),Q.fromBufferAttribute(w,h0),z.add(n0),K.add(n0),Q.add(n0),w.setXYZ(R0,z.x,z.y,z.z),w.setXYZ(f0,K.x,K.y,K.z),w.setXYZ(h0,Q.x,Q.y,Q.z)}else for(let c0=0,g0=y.count;c0<g0;c0+=3)g.fromBufferAttribute(y,c0+0),O.fromBufferAttribute(y,c0+1),V.fromBufferAttribute(y,c0+2),n0.subVectors(V,O),_0.subVectors(g,O),n0.cross(_0),w.setXYZ(c0+0,n0.x,n0.y,n0.z),w.setXYZ(c0+1,n0.x,n0.y,n0.z),w.setXYZ(c0+2,n0.x,n0.y,n0.z);this.normalizeNormals(),w.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const u=this.attributes.normal;for(let y=0,w=u.count;y<w;y++)Oi.fromBufferAttribute(u,y),Oi.normalize(),u.setXYZ(y,Oi.x,Oi.y,Oi.z)}toNonIndexed(){function u(z,K){const Q=z.array,n0=z.itemSize,_0=z.normalized,c0=new Q.constructor(K.length*n0);let g0=0,R0=0;for(let f0=0,h0=K.length;f0<h0;f0++){z.isInterleavedBufferAttribute?g0=K[f0]*z.data.stride+z.offset:g0=K[f0]*n0;for(let k0=0;k0<n0;k0++)c0[R0++]=Q[g0++]}return new Zi(c0,n0,_0)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const y=new Rn,w=this.index.array,g=this.attributes;for(const z in g){const K=g[z],Q=u(K,w);y.setAttribute(z,Q)}const O=this.morphAttributes;for(const z in O){const K=[],Q=O[z];for(let n0=0,_0=Q.length;n0<_0;n0++){const c0=Q[n0],g0=u(c0,w);K.push(g0)}y.morphAttributes[z]=K}y.morphTargetsRelative=this.morphTargetsRelative;const V=this.groups;for(let z=0,K=V.length;z<K;z++){const Q=V[z];y.addGroup(Q.start,Q.count,Q.materialIndex)}return y}toJSON(){const u={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),Object.keys(this.userData).length>0&&(u.userData=this.userData),this.parameters!==void 0){const K=this.parameters;for(const Q in K)K[Q]!==void 0&&(u[Q]=K[Q]);return u}u.data={attributes:{}};const y=this.index;y!==null&&(u.data.index={type:y.array.constructor.name,array:Array.prototype.slice.call(y.array)});const w=this.attributes;for(const K in w){const Q=w[K];u.data.attributes[K]=Q.toJSON(u.data)}const g={};let O=!1;for(const K in this.morphAttributes){const Q=this.morphAttributes[K],n0=[];for(let _0=0,c0=Q.length;_0<c0;_0++){const g0=Q[_0];n0.push(g0.toJSON(u.data))}n0.length>0&&(g[K]=n0,O=!0)}O&&(u.data.morphAttributes=g,u.data.morphTargetsRelative=this.morphTargetsRelative);const V=this.groups;V.length>0&&(u.data.groups=JSON.parse(JSON.stringify(V)));const z=this.boundingSphere;return z!==null&&(u.data.boundingSphere={center:z.center.toArray(),radius:z.radius}),u}clone(){return new this.constructor().copy(this)}copy(u){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const y={};this.name=u.name;const w=u.index;w!==null&&this.setIndex(w.clone(y));const g=u.attributes;for(const Q in g){const n0=g[Q];this.setAttribute(Q,n0.clone(y))}const O=u.morphAttributes;for(const Q in O){const n0=[],_0=O[Q];for(let c0=0,g0=_0.length;c0<g0;c0++)n0.push(_0[c0].clone(y));this.morphAttributes[Q]=n0}this.morphTargetsRelative=u.morphTargetsRelative;const V=u.groups;for(let Q=0,n0=V.length;Q<n0;Q++){const _0=V[Q];this.addGroup(_0.start,_0.count,_0.materialIndex)}const z=u.boundingBox;z!==null&&(this.boundingBox=z.clone());const K=u.boundingSphere;return K!==null&&(this.boundingSphere=K.clone()),this.drawRange.start=u.drawRange.start,this.drawRange.count=u.drawRange.count,this.userData=u.userData,u.parameters!==void 0&&(this.parameters=Object.assign({},u.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const A8=new $e,ro=new dc,j4=new wo,qo=new t2,bo=new t2,Xo=new t2,H4=new t2,Js=new t2,$s=new Le,e_=new Le,t_=new Le,q4=new t2,i_=new t2;class ii extends Zt{constructor(u=new Rn,y=new $1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=u,this.material=y,this.updateMorphTargets()}copy(u,y){return super.copy(u,y),u.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=u.morphTargetInfluences.slice()),u.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},u.morphTargetDictionary)),this.material=u.material,this.geometry=u.geometry,this}updateMorphTargets(){const y=this.geometry.morphAttributes,w=Object.keys(y);if(w.length>0){const g=y[w[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let O=0,V=g.length;O<V;O++){const z=g[O].name||String(O);this.morphTargetInfluences.push(0),this.morphTargetDictionary[z]=O}}}}getVertexPosition(u,y){const w=this.geometry,g=w.attributes.position,O=w.morphAttributes.position,V=w.morphTargetsRelative;y.fromBufferAttribute(g,u);const z=this.morphTargetInfluences;if(O&&z){Js.set(0,0,0);for(let K=0,Q=O.length;K<Q;K++){const n0=z[K],_0=O[K];n0!==0&&(H4.fromBufferAttribute(_0,u),V?Js.addScaledVector(H4,n0):Js.addScaledVector(H4.sub(y),n0))}y.add(Js)}return this.isSkinnedMesh&&this.boneTransform(u,y),y}raycast(u,y){const w=this.geometry,g=this.material,O=this.matrixWorld;if(g===void 0||(w.boundingSphere===null&&w.computeBoundingSphere(),j4.copy(w.boundingSphere),j4.applyMatrix4(O),u.ray.intersectsSphere(j4)===!1)||(A8.copy(O).invert(),ro.copy(u.ray).applyMatrix4(A8),w.boundingBox!==null&&ro.intersectsBox(w.boundingBox)===!1))return;let V;const z=w.index,K=w.attributes.position,Q=w.attributes.uv,n0=w.attributes.uv2,_0=w.groups,c0=w.drawRange;if(z!==null)if(Array.isArray(g))for(let g0=0,R0=_0.length;g0<R0;g0++){const f0=_0[g0],h0=g[f0.materialIndex],k0=Math.max(f0.start,c0.start),G0=Math.min(z.count,Math.min(f0.start+f0.count,c0.start+c0.count));for(let P0=k0,F0=G0;P0<F0;P0+=3){const W0=z.getX(P0),Q0=z.getX(P0+1),o2=z.getX(P0+2);V=n_(this,h0,u,ro,Q,n0,W0,Q0,o2),V&&(V.faceIndex=Math.floor(P0/3),V.face.materialIndex=f0.materialIndex,y.push(V))}}else{const g0=Math.max(0,c0.start),R0=Math.min(z.count,c0.start+c0.count);for(let f0=g0,h0=R0;f0<h0;f0+=3){const k0=z.getX(f0),G0=z.getX(f0+1),P0=z.getX(f0+2);V=n_(this,g,u,ro,Q,n0,k0,G0,P0),V&&(V.faceIndex=Math.floor(f0/3),y.push(V))}}else if(K!==void 0)if(Array.isArray(g))for(let g0=0,R0=_0.length;g0<R0;g0++){const f0=_0[g0],h0=g[f0.materialIndex],k0=Math.max(f0.start,c0.start),G0=Math.min(K.count,Math.min(f0.start+f0.count,c0.start+c0.count));for(let P0=k0,F0=G0;P0<F0;P0+=3){const W0=P0,Q0=P0+1,o2=P0+2;V=n_(this,h0,u,ro,Q,n0,W0,Q0,o2),V&&(V.faceIndex=Math.floor(P0/3),V.face.materialIndex=f0.materialIndex,y.push(V))}}else{const g0=Math.max(0,c0.start),R0=Math.min(K.count,c0.start+c0.count);for(let f0=g0,h0=R0;f0<h0;f0+=3){const k0=f0,G0=f0+1,P0=f0+2;V=n_(this,g,u,ro,Q,n0,k0,G0,P0),V&&(V.faceIndex=Math.floor(f0/3),y.push(V))}}}}function UJ(q,u,y,w,g,O,V,z){let K;if(u.side===Vn?K=w.intersectTriangle(V,O,g,!0,z):K=w.intersectTriangle(g,O,V,u.side===tr,z),K===null)return null;i_.copy(z),i_.applyMatrix4(q.matrixWorld);const Q=y.ray.origin.distanceTo(i_);return Q<y.near||Q>y.far?null:{distance:Q,point:i_.clone(),object:q}}function n_(q,u,y,w,g,O,V,z,K){q.getVertexPosition(V,qo),q.getVertexPosition(z,bo),q.getVertexPosition(K,Xo);const Q=UJ(q,u,y,w,qo,bo,Xo,q4);if(Q){g&&($s.fromBufferAttribute(g,V),e_.fromBufferAttribute(g,z),t_.fromBufferAttribute(g,K),Q.uv=P1.getUV(q4,qo,bo,Xo,$s,e_,t_,new Le)),O&&($s.fromBufferAttribute(O,V),e_.fromBufferAttribute(O,z),t_.fromBufferAttribute(O,K),Q.uv2=P1.getUV(q4,qo,bo,Xo,$s,e_,t_,new Le));const n0={a:V,b:z,c:K,normal:new t2,materialIndex:0};P1.getNormal(qo,bo,Xo,n0.normal),Q.face=n0}return Q}class ir extends Rn{constructor(u=1,y=1,w=1,g=1,O=1,V=1){super(),this.type="BoxGeometry",this.parameters={width:u,height:y,depth:w,widthSegments:g,heightSegments:O,depthSegments:V};const z=this;g=Math.floor(g),O=Math.floor(O),V=Math.floor(V);const K=[],Q=[],n0=[],_0=[];let c0=0,g0=0;R0("z","y","x",-1,-1,w,y,u,V,O,0),R0("z","y","x",1,-1,w,y,-u,V,O,1),R0("x","z","y",1,1,u,w,y,g,V,2),R0("x","z","y",1,-1,u,w,-y,g,V,3),R0("x","y","z",1,-1,u,y,w,g,O,4),R0("x","y","z",-1,-1,u,y,-w,g,O,5),this.setIndex(K),this.setAttribute("position",new un(Q,3)),this.setAttribute("normal",new un(n0,3)),this.setAttribute("uv",new un(_0,2));function R0(f0,h0,k0,G0,P0,F0,W0,Q0,o2,E0,K0){const l2=F0/o2,E2=W0/E0,P2=F0/2,p2=W0/2,_2=Q0/2,M2=o2+1,F2=E0+1;let N2=0,L2=0;const j2=new t2;for(let O2=0;O2<F2;O2++){const R2=O2*E2-p2;for(let w2=0;w2<M2;w2++){const X2=w2*l2-P2;j2[f0]=X2*G0,j2[h0]=R2*P0,j2[k0]=_2,Q.push(j2.x,j2.y,j2.z),j2[f0]=0,j2[h0]=0,j2[k0]=Q0>0?1:-1,n0.push(j2.x,j2.y,j2.z),_0.push(w2/o2),_0.push(1-O2/E0),N2+=1}}for(let O2=0;O2<E0;O2++)for(let R2=0;R2<o2;R2++){const w2=c0+R2+M2*O2,X2=c0+R2+M2*(O2+1),H2=c0+(R2+1)+M2*(O2+1),Q2=c0+(R2+1)+M2*O2;K.push(w2,X2,Q2),K.push(X2,H2,Q2),L2+=6}z.addGroup(g0,L2,K0),g0+=L2,c0+=N2}}static fromJSON(u){return new ir(u.width,u.height,u.depth,u.widthSegments,u.heightSegments,u.depthSegments)}}function Co(q){const u={};for(const y in q){u[y]={};for(const w in q[y]){const g=q[y][w];g&&(g.isColor||g.isMatrix3||g.isMatrix4||g.isVector2||g.isVector3||g.isVector4||g.isTexture||g.isQuaternion)?u[y][w]=g.clone():Array.isArray(g)?u[y][w]=g.slice():u[y][w]=g}}return u}function an(q){const u={};for(let y=0;y<q.length;y++){const w=Co(q[y]);for(const g in w)u[g]=w[g]}return u}function zJ(q){const u=[];for(let y=0;y<q.length;y++)u.push(q[y].clone());return u}function H6(q){return q.getRenderTarget()===null&&q.outputEncoding===xt?a1:rs}const VJ={clone:Co,merge:an};var jJ=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HJ=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends jn{constructor(u){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jJ,this.fragmentShader=HJ,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,u!==void 0&&this.setValues(u)}copy(u){return super.copy(u),this.fragmentShader=u.fragmentShader,this.vertexShader=u.vertexShader,this.uniforms=Co(u.uniforms),this.uniformsGroups=zJ(u.uniformsGroups),this.defines=Object.assign({},u.defines),this.wireframe=u.wireframe,this.wireframeLinewidth=u.wireframeLinewidth,this.fog=u.fog,this.lights=u.lights,this.clipping=u.clipping,this.extensions=Object.assign({},u.extensions),this.glslVersion=u.glslVersion,this}toJSON(u){const y=super.toJSON(u);y.glslVersion=this.glslVersion,y.uniforms={};for(const g in this.uniforms){const V=this.uniforms[g].value;V&&V.isTexture?y.uniforms[g]={type:"t",value:V.toJSON(u).uuid}:V&&V.isColor?y.uniforms[g]={type:"c",value:V.getHex()}:V&&V.isVector2?y.uniforms[g]={type:"v2",value:V.toArray()}:V&&V.isVector3?y.uniforms[g]={type:"v3",value:V.toArray()}:V&&V.isVector4?y.uniforms[g]={type:"v4",value:V.toArray()}:V&&V.isMatrix3?y.uniforms[g]={type:"m3",value:V.toArray()}:V&&V.isMatrix4?y.uniforms[g]={type:"m4",value:V.toArray()}:y.uniforms[g]={value:V}}Object.keys(this.defines).length>0&&(y.defines=this.defines),y.vertexShader=this.vertexShader,y.fragmentShader=this.fragmentShader;const w={};for(const g in this.extensions)this.extensions[g]===!0&&(w[g]=!0);return Object.keys(w).length>0&&(y.extensions=w),y}}class q6 extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e}copy(u,y){return super.copy(u,y),this.matrixWorldInverse.copy(u.matrixWorldInverse),this.projectionMatrix.copy(u.projectionMatrix),this.projectionMatrixInverse.copy(u.projectionMatrixInverse),this}getWorldDirection(u){this.updateWorldMatrix(!0,!1);const y=this.matrixWorld.elements;return u.set(-y[8],-y[9],-y[10]).normalize()}updateMatrixWorld(u){super.updateMatrixWorld(u),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(u,y){super.updateWorldMatrix(u,y),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends q6{constructor(u=50,y=1,w=.1,g=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=u,this.zoom=1,this.near=w,this.far=g,this.focus=10,this.aspect=y,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(u,y){return super.copy(u,y),this.fov=u.fov,this.zoom=u.zoom,this.near=u.near,this.far=u.far,this.focus=u.focus,this.aspect=u.aspect,this.view=u.view===null?null:Object.assign({},u.view),this.filmGauge=u.filmGauge,this.filmOffset=u.filmOffset,this}setFocalLength(u){const y=.5*this.getFilmHeight()/u;this.fov=os*2*Math.atan(y),this.updateProjectionMatrix()}getFocalLength(){const u=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/u}getEffectiveFOV(){return os*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(u,y,w,g,O,V){this.aspect=u/y,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=u,this.view.fullHeight=y,this.view.offsetX=w,this.view.offsetY=g,this.view.width=O,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const u=this.near;let y=u*Math.tan(es*.5*this.fov)/this.zoom,w=2*y,g=this.aspect*w,O=-.5*g;const V=this.view;if(this.view!==null&&this.view.enabled){const K=V.fullWidth,Q=V.fullHeight;O+=V.offsetX*g/K,y-=V.offsetY*w/Q,g*=V.width/K,w*=V.height/Q}const z=this.filmOffset;z!==0&&(O+=u*z/this.getFilmWidth()),this.projectionMatrix.makePerspective(O,O+g,y,y-w,u,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(u){const y=super.toJSON(u);return y.object.fov=this.fov,y.object.zoom=this.zoom,y.object.near=this.near,y.object.far=this.far,y.object.focus=this.focus,y.object.aspect=this.aspect,this.view!==null&&(y.object.view=Object.assign({},this.view)),y.object.filmGauge=this.filmGauge,y.object.filmOffset=this.filmOffset,y}}const oo=-90,so=1;class qJ extends Zt{constructor(u,y,w){super(),this.type="CubeCamera",this.renderTarget=w;const g=new pn(oo,so,u,y);g.layers=this.layers,g.up.set(0,1,0),g.lookAt(1,0,0),this.add(g);const O=new pn(oo,so,u,y);O.layers=this.layers,O.up.set(0,1,0),O.lookAt(-1,0,0),this.add(O);const V=new pn(oo,so,u,y);V.layers=this.layers,V.up.set(0,0,-1),V.lookAt(0,1,0),this.add(V);const z=new pn(oo,so,u,y);z.layers=this.layers,z.up.set(0,0,1),z.lookAt(0,-1,0),this.add(z);const K=new pn(oo,so,u,y);K.layers=this.layers,K.up.set(0,1,0),K.lookAt(0,0,1),this.add(K);const Q=new pn(oo,so,u,y);Q.layers=this.layers,Q.up.set(0,1,0),Q.lookAt(0,0,-1),this.add(Q)}update(u,y){this.parent===null&&this.updateMatrixWorld();const w=this.renderTarget,[g,O,V,z,K,Q]=this.children,n0=u.getRenderTarget(),_0=u.toneMapping,c0=u.xr.enabled;u.toneMapping=B1,u.xr.enabled=!1;const g0=w.texture.generateMipmaps;w.texture.generateMipmaps=!1,u.setRenderTarget(w,0),u.render(y,g),u.setRenderTarget(w,1),u.render(y,O),u.setRenderTarget(w,2),u.render(y,V),u.setRenderTarget(w,3),u.render(y,z),u.setRenderTarget(w,4),u.render(y,K),w.texture.generateMipmaps=g0,u.setRenderTarget(w,5),u.render(y,Q),u.setRenderTarget(n0),u.toneMapping=_0,u.xr.enabled=c0,w.texture.needsPMREMUpdate=!0}}class b6 extends ji{constructor(u,y,w,g,O,V,z,K,Q,n0){u=u!==void 0?u:[],y=y!==void 0?y:ho,super(u,y,w,g,O,V,z,K,Q,n0),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(u){this.image=u}}class bJ extends Er{constructor(u=1,y={}){super(u,u,y),this.isWebGLCubeRenderTarget=!0;const w={width:u,height:u,depth:1},g=[w,w,w,w,w,w];this.texture=new b6(g,y.mapping,y.wrapS,y.wrapT,y.magFilter,y.minFilter,y.format,y.type,y.anisotropy,y.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=y.generateMipmaps!==void 0?y.generateMipmaps:!1,this.texture.minFilter=y.minFilter!==void 0?y.minFilter:Tn}fromEquirectangularTexture(u,y){this.texture.type=y.type,this.texture.encoding=y.encoding,this.texture.generateMipmaps=y.generateMipmaps,this.texture.minFilter=y.minFilter,this.texture.magFilter=y.magFilter;const w={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},g=new ir(5,5,5),O=new Ir({name:"CubemapFromEquirect",uniforms:Co(w.uniforms),vertexShader:w.vertexShader,fragmentShader:w.fragmentShader,side:Vn,blending:er});O.uniforms.tEquirect.value=y;const V=new ii(g,O),z=y.minFilter;return y.minFilter===kr&&(y.minFilter=Tn),new qJ(1,10,this).update(u,V),y.minFilter=z,V.geometry.dispose(),V.material.dispose(),this}clear(u,y,w,g){const O=u.getRenderTarget();for(let V=0;V<6;V++)u.setRenderTarget(this,V),u.clear(y,w,g);u.setRenderTarget(O)}}const b4=new t2,XJ=new t2,KJ=new Ln;class gr{constructor(u=new t2(1,0,0),y=0){this.isPlane=!0,this.normal=u,this.constant=y}set(u,y){return this.normal.copy(u),this.constant=y,this}setComponents(u,y,w,g){return this.normal.set(u,y,w),this.constant=g,this}setFromNormalAndCoplanarPoint(u,y){return this.normal.copy(u),this.constant=-y.dot(this.normal),this}setFromCoplanarPoints(u,y,w){const g=b4.subVectors(w,y).cross(XJ.subVectors(u,y)).normalize();return this.setFromNormalAndCoplanarPoint(g,u),this}copy(u){return this.normal.copy(u.normal),this.constant=u.constant,this}normalize(){const u=1/this.normal.length();return this.normal.multiplyScalar(u),this.constant*=u,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(u){return this.normal.dot(u)+this.constant}distanceToSphere(u){return this.distanceToPoint(u.center)-u.radius}projectPoint(u,y){return y.copy(this.normal).multiplyScalar(-this.distanceToPoint(u)).add(u)}intersectLine(u,y){const w=u.delta(b4),g=this.normal.dot(w);if(g===0)return this.distanceToPoint(u.start)===0?y.copy(u.start):null;const O=-(u.start.dot(this.normal)+this.constant)/g;return O<0||O>1?null:y.copy(w).multiplyScalar(O).add(u.start)}intersectsLine(u){const y=this.distanceToPoint(u.start),w=this.distanceToPoint(u.end);return y<0&&w>0||w<0&&y>0}intersectsBox(u){return u.intersectsPlane(this)}intersectsSphere(u){return u.intersectsPlane(this)}coplanarPoint(u){return u.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(u,y){const w=y||KJ.getNormalMatrix(u),g=this.coplanarPoint(b4).applyMatrix4(u),O=this.normal.applyMatrix3(w).normalize();return this.constant=-g.dot(O),this}translate(u){return this.constant-=u.dot(this.normal),this}equals(u){return u.normal.equals(this.normal)&&u.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _o=new wo,r_=new t2;class yc{constructor(u=new gr,y=new gr,w=new gr,g=new gr,O=new gr,V=new gr){this.planes=[u,y,w,g,O,V]}set(u,y,w,g,O,V){const z=this.planes;return z[0].copy(u),z[1].copy(y),z[2].copy(w),z[3].copy(g),z[4].copy(O),z[5].copy(V),this}copy(u){const y=this.planes;for(let w=0;w<6;w++)y[w].copy(u.planes[w]);return this}setFromProjectionMatrix(u){const y=this.planes,w=u.elements,g=w[0],O=w[1],V=w[2],z=w[3],K=w[4],Q=w[5],n0=w[6],_0=w[7],c0=w[8],g0=w[9],R0=w[10],f0=w[11],h0=w[12],k0=w[13],G0=w[14],P0=w[15];return y[0].setComponents(z-g,_0-K,f0-c0,P0-h0).normalize(),y[1].setComponents(z+g,_0+K,f0+c0,P0+h0).normalize(),y[2].setComponents(z+O,_0+Q,f0+g0,P0+k0).normalize(),y[3].setComponents(z-O,_0-Q,f0-g0,P0-k0).normalize(),y[4].setComponents(z-V,_0-n0,f0-R0,P0-G0).normalize(),y[5].setComponents(z+V,_0+n0,f0+R0,P0+G0).normalize(),this}intersectsObject(u){const y=u.geometry;return y.boundingSphere===null&&y.computeBoundingSphere(),_o.copy(y.boundingSphere).applyMatrix4(u.matrixWorld),this.intersectsSphere(_o)}intersectsSprite(u){return _o.center.set(0,0,0),_o.radius=.7071067811865476,_o.applyMatrix4(u.matrixWorld),this.intersectsSphere(_o)}intersectsSphere(u){const y=this.planes,w=u.center,g=-u.radius;for(let O=0;O<6;O++)if(y[O].distanceToPoint(w)<g)return!1;return!0}intersectsBox(u){const y=this.planes;for(let w=0;w<6;w++){const g=y[w];if(r_.x=g.normal.x>0?u.max.x:u.min.x,r_.y=g.normal.y>0?u.max.y:u.min.y,r_.z=g.normal.z>0?u.max.z:u.min.z,g.distanceToPoint(r_)<0)return!1}return!0}containsPoint(u){const y=this.planes;for(let w=0;w<6;w++)if(y[w].distanceToPoint(u)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function X6(){let q=null,u=!1,y=null,w=null;function g(O,V){y(O,V),w=q.requestAnimationFrame(g)}return{start:function(){u!==!0&&y!==null&&(w=q.requestAnimationFrame(g),u=!0)},stop:function(){q.cancelAnimationFrame(w),u=!1},setAnimationLoop:function(O){y=O},setContext:function(O){q=O}}}function ZJ(q,u){const y=u.isWebGL2,w=new WeakMap;function g(Q,n0){const _0=Q.array,c0=Q.usage,g0=q.createBuffer();q.bindBuffer(n0,g0),q.bufferData(n0,_0,c0),Q.onUploadCallback();let R0;if(_0 instanceof Float32Array)R0=5126;else if(_0 instanceof Uint16Array)if(Q.isFloat16BufferAttribute)if(y)R0=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else R0=5123;else if(_0 instanceof Int16Array)R0=5122;else if(_0 instanceof Uint32Array)R0=5125;else if(_0 instanceof Int32Array)R0=5124;else if(_0 instanceof Int8Array)R0=5120;else if(_0 instanceof Uint8Array)R0=5121;else if(_0 instanceof Uint8ClampedArray)R0=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_0);return{buffer:g0,type:R0,bytesPerElement:_0.BYTES_PER_ELEMENT,version:Q.version}}function O(Q,n0,_0){const c0=n0.array,g0=n0.updateRange;q.bindBuffer(_0,Q),g0.count===-1?q.bufferSubData(_0,0,c0):(y?q.bufferSubData(_0,g0.offset*c0.BYTES_PER_ELEMENT,c0,g0.offset,g0.count):q.bufferSubData(_0,g0.offset*c0.BYTES_PER_ELEMENT,c0.subarray(g0.offset,g0.offset+g0.count)),g0.count=-1),n0.onUploadCallback()}function V(Q){return Q.isInterleavedBufferAttribute&&(Q=Q.data),w.get(Q)}function z(Q){Q.isInterleavedBufferAttribute&&(Q=Q.data);const n0=w.get(Q);n0&&(q.deleteBuffer(n0.buffer),w.delete(Q))}function K(Q,n0){if(Q.isGLBufferAttribute){const c0=w.get(Q);(!c0||c0.version<Q.version)&&w.set(Q,{buffer:Q.buffer,type:Q.type,bytesPerElement:Q.elementSize,version:Q.version});return}Q.isInterleavedBufferAttribute&&(Q=Q.data);const _0=w.get(Q);_0===void 0?w.set(Q,g(Q,n0)):_0.version<Q.version&&(O(_0.buffer,Q,n0),_0.version=Q.version)}return{get:V,remove:z,update:K}}class x_ extends Rn{constructor(u=1,y=1,w=1,g=1){super(),this.type="PlaneGeometry",this.parameters={width:u,height:y,widthSegments:w,heightSegments:g};const O=u/2,V=y/2,z=Math.floor(w),K=Math.floor(g),Q=z+1,n0=K+1,_0=u/z,c0=y/K,g0=[],R0=[],f0=[],h0=[];for(let k0=0;k0<n0;k0++){const G0=k0*c0-V;for(let P0=0;P0<Q;P0++){const F0=P0*_0-O;R0.push(F0,-G0,0),f0.push(0,0,1),h0.push(P0/z),h0.push(1-k0/K)}}for(let k0=0;k0<K;k0++)for(let G0=0;G0<z;G0++){const P0=G0+Q*k0,F0=G0+Q*(k0+1),W0=G0+1+Q*(k0+1),Q0=G0+1+Q*k0;g0.push(P0,F0,Q0),g0.push(F0,W0,Q0)}this.setIndex(g0),this.setAttribute("position",new un(R0,3)),this.setAttribute("normal",new un(f0,3)),this.setAttribute("uv",new un(h0,2))}static fromJSON(u){return new x_(u.width,u.height,u.widthSegments,u.heightSegments)}}var YJ=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,QJ=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JJ=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$J=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e$=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t$=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i$="vec3 transformed = vec3( position );",n$=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r$=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,o$=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s$=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_$=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,c$=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l$=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a$=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p$=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u$=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f$=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,h$=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,m$=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,d$=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y$=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v$=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g$=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,C$=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S$=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x$="gl_FragColor = linearToOutputTexel( gl_FragColor );",w$=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M$=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,T$=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R$=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k$=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D$=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A$=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E$=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I$=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L$=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P$=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O$=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,F$=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B$=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N$=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W$=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,G$=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,U$=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z$=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V$=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j$=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H$=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,q$=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b$=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X$=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K$=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Z$=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y$=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q$=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,J$=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$$=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e00=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t00=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,i00=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n00=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r00=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o00=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s00=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_00=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,c00=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,l00=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,a00=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p00=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u00=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f00=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h00=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,m00=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,d00=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,y00=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,v00=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g00=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C00=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,S00=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x00=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w00=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M00=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T00=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R00=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k00=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,D00=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A00=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,E00=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I00=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L00=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,P00=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O00=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,F00=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B00=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N00=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W00=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G00=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,U00=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,z00=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,V00=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,j00=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,H00=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,q00=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,b00=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,X00=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K00=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z00=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Y00=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q00=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,J00=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$00=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,e20=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t20=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,i20=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,n20=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r20=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o20=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,s20=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_20=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c20=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,l20=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a20=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p20=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u20=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f20=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h20=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m20=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d20=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y20=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v20=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,g20=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C20=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S20=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x20=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w20=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M20=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T20=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,R20=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k20=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ke={alphamap_fragment:YJ,alphamap_pars_fragment:QJ,alphatest_fragment:JJ,alphatest_pars_fragment:$J,aomap_fragment:e$,aomap_pars_fragment:t$,begin_vertex:i$,beginnormal_vertex:n$,bsdfs:r$,iridescence_fragment:o$,bumpmap_pars_fragment:s$,clipping_planes_fragment:_$,clipping_planes_pars_fragment:c$,clipping_planes_pars_vertex:l$,clipping_planes_vertex:a$,color_fragment:p$,color_pars_fragment:u$,color_pars_vertex:f$,color_vertex:h$,common:m$,cube_uv_reflection_fragment:d$,defaultnormal_vertex:y$,displacementmap_pars_vertex:v$,displacementmap_vertex:g$,emissivemap_fragment:C$,emissivemap_pars_fragment:S$,encodings_fragment:x$,encodings_pars_fragment:w$,envmap_fragment:M$,envmap_common_pars_fragment:T$,envmap_pars_fragment:R$,envmap_pars_vertex:k$,envmap_physical_pars_fragment:G$,envmap_vertex:D$,fog_vertex:A$,fog_pars_vertex:E$,fog_fragment:I$,fog_pars_fragment:L$,gradientmap_pars_fragment:P$,lightmap_fragment:O$,lightmap_pars_fragment:F$,lights_lambert_fragment:B$,lights_lambert_pars_fragment:N$,lights_pars_begin:W$,lights_toon_fragment:U$,lights_toon_pars_fragment:z$,lights_phong_fragment:V$,lights_phong_pars_fragment:j$,lights_physical_fragment:H$,lights_physical_pars_fragment:q$,lights_fragment_begin:b$,lights_fragment_maps:X$,lights_fragment_end:K$,logdepthbuf_fragment:Z$,logdepthbuf_pars_fragment:Y$,logdepthbuf_pars_vertex:Q$,logdepthbuf_vertex:J$,map_fragment:$$,map_pars_fragment:e00,map_particle_fragment:t00,map_particle_pars_fragment:i00,metalnessmap_fragment:n00,metalnessmap_pars_fragment:r00,morphcolor_vertex:o00,morphnormal_vertex:s00,morphtarget_pars_vertex:_00,morphtarget_vertex:c00,normal_fragment_begin:l00,normal_fragment_maps:a00,normal_pars_fragment:p00,normal_pars_vertex:u00,normal_vertex:f00,normalmap_pars_fragment:h00,clearcoat_normal_fragment_begin:m00,clearcoat_normal_fragment_maps:d00,clearcoat_pars_fragment:y00,iridescence_pars_fragment:v00,output_fragment:g00,packing:C00,premultiplied_alpha_fragment:S00,project_vertex:x00,dithering_fragment:w00,dithering_pars_fragment:M00,roughnessmap_fragment:T00,roughnessmap_pars_fragment:R00,shadowmap_pars_fragment:k00,shadowmap_pars_vertex:D00,shadowmap_vertex:A00,shadowmask_pars_fragment:E00,skinbase_vertex:I00,skinning_pars_vertex:L00,skinning_vertex:P00,skinnormal_vertex:O00,specularmap_fragment:F00,specularmap_pars_fragment:B00,tonemapping_fragment:N00,tonemapping_pars_fragment:W00,transmission_fragment:G00,transmission_pars_fragment:U00,uv_pars_fragment:z00,uv_pars_vertex:V00,uv_vertex:j00,uv2_pars_fragment:H00,uv2_pars_vertex:q00,uv2_vertex:b00,worldpos_vertex:X00,background_vert:K00,background_frag:Z00,backgroundCube_vert:Y00,backgroundCube_frag:Q00,cube_vert:J00,cube_frag:$00,depth_vert:e20,depth_frag:t20,distanceRGBA_vert:i20,distanceRGBA_frag:n20,equirect_vert:r20,equirect_frag:o20,linedashed_vert:s20,linedashed_frag:_20,meshbasic_vert:c20,meshbasic_frag:l20,meshlambert_vert:a20,meshlambert_frag:p20,meshmatcap_vert:u20,meshmatcap_frag:f20,meshnormal_vert:h20,meshnormal_frag:m20,meshphong_vert:d20,meshphong_frag:y20,meshphysical_vert:v20,meshphysical_frag:g20,meshtoon_vert:C20,meshtoon_frag:S20,points_vert:x20,points_frag:w20,shadow_vert:M20,shadow_frag:T20,sprite_vert:R20,sprite_frag:k20},Y2={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ln},uv2Transform:{value:new Ln},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ln}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ln}}},p1={basic:{uniforms:an([Y2.common,Y2.specularmap,Y2.envmap,Y2.aomap,Y2.lightmap,Y2.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:an([Y2.common,Y2.specularmap,Y2.envmap,Y2.aomap,Y2.lightmap,Y2.emissivemap,Y2.bumpmap,Y2.normalmap,Y2.displacementmap,Y2.fog,Y2.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:an([Y2.common,Y2.specularmap,Y2.envmap,Y2.aomap,Y2.lightmap,Y2.emissivemap,Y2.bumpmap,Y2.normalmap,Y2.displacementmap,Y2.fog,Y2.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:an([Y2.common,Y2.envmap,Y2.aomap,Y2.lightmap,Y2.emissivemap,Y2.bumpmap,Y2.normalmap,Y2.displacementmap,Y2.roughnessmap,Y2.metalnessmap,Y2.fog,Y2.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:an([Y2.common,Y2.aomap,Y2.lightmap,Y2.emissivemap,Y2.bumpmap,Y2.normalmap,Y2.displacementmap,Y2.gradientmap,Y2.fog,Y2.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:an([Y2.common,Y2.bumpmap,Y2.normalmap,Y2.displacementmap,Y2.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:an([Y2.points,Y2.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:an([Y2.common,Y2.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:an([Y2.common,Y2.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:an([Y2.common,Y2.bumpmap,Y2.normalmap,Y2.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:an([Y2.sprite,Y2.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ln},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:an([Y2.common,Y2.displacementmap,{referencePosition:{value:new t2},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:an([Y2.lights,Y2.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};p1.physical={uniforms:an([p1.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const o_={r:0,b:0,g:0};function D20(q,u,y,w,g,O,V){const z=new Pe(0);let K=O===!0?0:1,Q,n0,_0=null,c0=0,g0=null;function R0(h0,k0){let G0=!1,P0=k0.isScene===!0?k0.background:null;P0&&P0.isTexture&&(P0=(k0.backgroundBlurriness>0?y:u).get(P0));const F0=q.xr,W0=F0.getSession&&F0.getSession();W0&&W0.environmentBlendMode==="additive"&&(P0=null),P0===null?f0(z,K):P0&&P0.isColor&&(f0(P0,1),G0=!0),(q.autoClear||G0)&&q.clear(q.autoClearColor,q.autoClearDepth,q.autoClearStencil),P0&&(P0.isCubeTexture||P0.mapping===C_)?(n0===void 0&&(n0=new ii(new ir(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:Co(p1.backgroundCube.uniforms),vertexShader:p1.backgroundCube.vertexShader,fragmentShader:p1.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),n0.geometry.deleteAttribute("normal"),n0.geometry.deleteAttribute("uv"),n0.onBeforeRender=function(Q0,o2,E0){this.matrixWorld.copyPosition(E0.matrixWorld)},Object.defineProperty(n0.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),g.update(n0)),n0.material.uniforms.envMap.value=P0,n0.material.uniforms.flipEnvMap.value=P0.isCubeTexture&&P0.isRenderTargetTexture===!1?-1:1,n0.material.uniforms.backgroundBlurriness.value=k0.backgroundBlurriness,n0.material.uniforms.backgroundIntensity.value=k0.backgroundIntensity,n0.material.toneMapped=P0.encoding!==xt,(_0!==P0||c0!==P0.version||g0!==q.toneMapping)&&(n0.material.needsUpdate=!0,_0=P0,c0=P0.version,g0=q.toneMapping),n0.layers.enableAll(),h0.unshift(n0,n0.geometry,n0.material,0,0,null)):P0&&P0.isTexture&&(Q===void 0&&(Q=new ii(new x_(2,2),new Ir({name:"BackgroundMaterial",uniforms:Co(p1.background.uniforms),vertexShader:p1.background.vertexShader,fragmentShader:p1.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),Q.geometry.deleteAttribute("normal"),Object.defineProperty(Q.material,"map",{get:function(){return this.uniforms.t2D.value}}),g.update(Q)),Q.material.uniforms.t2D.value=P0,Q.material.uniforms.backgroundIntensity.value=k0.backgroundIntensity,Q.material.toneMapped=P0.encoding!==xt,P0.matrixAutoUpdate===!0&&P0.updateMatrix(),Q.material.uniforms.uvTransform.value.copy(P0.matrix),(_0!==P0||c0!==P0.version||g0!==q.toneMapping)&&(Q.material.needsUpdate=!0,_0=P0,c0=P0.version,g0=q.toneMapping),Q.layers.enableAll(),h0.unshift(Q,Q.geometry,Q.material,0,0,null))}function f0(h0,k0){h0.getRGB(o_,H6(q)),w.buffers.color.setClear(o_.r,o_.g,o_.b,k0,V)}return{getClearColor:function(){return z},setClearColor:function(h0,k0=1){z.set(h0),K=k0,f0(z,K)},getClearAlpha:function(){return K},setClearAlpha:function(h0){K=h0,f0(z,K)},render:R0}}function A20(q,u,y,w){const g=q.getParameter(34921),O=w.isWebGL2?null:u.get("OES_vertex_array_object"),V=w.isWebGL2||O!==null,z={},K=h0(null);let Q=K,n0=!1;function _0(_2,M2,F2,N2,L2){let j2=!1;if(V){const O2=f0(N2,F2,M2);Q!==O2&&(Q=O2,g0(Q.object)),j2=k0(_2,N2,F2,L2),j2&&G0(_2,N2,F2,L2)}else{const O2=M2.wireframe===!0;(Q.geometry!==N2.id||Q.program!==F2.id||Q.wireframe!==O2)&&(Q.geometry=N2.id,Q.program=F2.id,Q.wireframe=O2,j2=!0)}L2!==null&&y.update(L2,34963),(j2||n0)&&(n0=!1,E0(_2,M2,F2,N2),L2!==null&&q.bindBuffer(34963,y.get(L2).buffer))}function c0(){return w.isWebGL2?q.createVertexArray():O.createVertexArrayOES()}function g0(_2){return w.isWebGL2?q.bindVertexArray(_2):O.bindVertexArrayOES(_2)}function R0(_2){return w.isWebGL2?q.deleteVertexArray(_2):O.deleteVertexArrayOES(_2)}function f0(_2,M2,F2){const N2=F2.wireframe===!0;let L2=z[_2.id];L2===void 0&&(L2={},z[_2.id]=L2);let j2=L2[M2.id];j2===void 0&&(j2={},L2[M2.id]=j2);let O2=j2[N2];return O2===void 0&&(O2=h0(c0()),j2[N2]=O2),O2}function h0(_2){const M2=[],F2=[],N2=[];for(let L2=0;L2<g;L2++)M2[L2]=0,F2[L2]=0,N2[L2]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M2,enabledAttributes:F2,attributeDivisors:N2,object:_2,attributes:{},index:null}}function k0(_2,M2,F2,N2){const L2=Q.attributes,j2=M2.attributes;let O2=0;const R2=F2.getAttributes();for(const w2 in R2)if(R2[w2].location>=0){const H2=L2[w2];let Q2=j2[w2];if(Q2===void 0&&(w2==="instanceMatrix"&&_2.instanceMatrix&&(Q2=_2.instanceMatrix),w2==="instanceColor"&&_2.instanceColor&&(Q2=_2.instanceColor)),H2===void 0||H2.attribute!==Q2||Q2&&H2.data!==Q2.data)return!0;O2++}return Q.attributesNum!==O2||Q.index!==N2}function G0(_2,M2,F2,N2){const L2={},j2=M2.attributes;let O2=0;const R2=F2.getAttributes();for(const w2 in R2)if(R2[w2].location>=0){let H2=j2[w2];H2===void 0&&(w2==="instanceMatrix"&&_2.instanceMatrix&&(H2=_2.instanceMatrix),w2==="instanceColor"&&_2.instanceColor&&(H2=_2.instanceColor));const Q2={};Q2.attribute=H2,H2&&H2.data&&(Q2.data=H2.data),L2[w2]=Q2,O2++}Q.attributes=L2,Q.attributesNum=O2,Q.index=N2}function P0(){const _2=Q.newAttributes;for(let M2=0,F2=_2.length;M2<F2;M2++)_2[M2]=0}function F0(_2){W0(_2,0)}function W0(_2,M2){const F2=Q.newAttributes,N2=Q.enabledAttributes,L2=Q.attributeDivisors;F2[_2]=1,N2[_2]===0&&(q.enableVertexAttribArray(_2),N2[_2]=1),L2[_2]!==M2&&((w.isWebGL2?q:u.get("ANGLE_instanced_arrays"))[w.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](_2,M2),L2[_2]=M2)}function Q0(){const _2=Q.newAttributes,M2=Q.enabledAttributes;for(let F2=0,N2=M2.length;F2<N2;F2++)M2[F2]!==_2[F2]&&(q.disableVertexAttribArray(F2),M2[F2]=0)}function o2(_2,M2,F2,N2,L2,j2){w.isWebGL2===!0&&(F2===5124||F2===5125)?q.vertexAttribIPointer(_2,M2,F2,L2,j2):q.vertexAttribPointer(_2,M2,F2,N2,L2,j2)}function E0(_2,M2,F2,N2){if(w.isWebGL2===!1&&(_2.isInstancedMesh||N2.isInstancedBufferGeometry)&&u.get("ANGLE_instanced_arrays")===null)return;P0();const L2=N2.attributes,j2=F2.getAttributes(),O2=M2.defaultAttributeValues;for(const R2 in j2){const w2=j2[R2];if(w2.location>=0){let X2=L2[R2];if(X2===void 0&&(R2==="instanceMatrix"&&_2.instanceMatrix&&(X2=_2.instanceMatrix),R2==="instanceColor"&&_2.instanceColor&&(X2=_2.instanceColor)),X2!==void 0){const H2=X2.normalized,Q2=X2.itemSize,D2=y.get(X2);if(D2===void 0)continue;const Qe=D2.buffer,$2=D2.type,fe=D2.bytesPerElement;if(X2.isInterleavedBufferAttribute){const K2=X2.data,et=K2.stride,Oe=X2.offset;if(K2.isInstancedInterleavedBuffer){for(let _e=0;_e<w2.locationSize;_e++)W0(w2.location+_e,K2.meshPerAttribute);_2.isInstancedMesh!==!0&&N2._maxInstanceCount===void 0&&(N2._maxInstanceCount=K2.meshPerAttribute*K2.count)}else for(let _e=0;_e<w2.locationSize;_e++)F0(w2.location+_e);q.bindBuffer(34962,Qe);for(let _e=0;_e<w2.locationSize;_e++)o2(w2.location+_e,Q2/w2.locationSize,$2,H2,et*fe,(Oe+Q2/w2.locationSize*_e)*fe)}else{if(X2.isInstancedBufferAttribute){for(let K2=0;K2<w2.locationSize;K2++)W0(w2.location+K2,X2.meshPerAttribute);_2.isInstancedMesh!==!0&&N2._maxInstanceCount===void 0&&(N2._maxInstanceCount=X2.meshPerAttribute*X2.count)}else for(let K2=0;K2<w2.locationSize;K2++)F0(w2.location+K2);q.bindBuffer(34962,Qe);for(let K2=0;K2<w2.locationSize;K2++)o2(w2.location+K2,Q2/w2.locationSize,$2,H2,Q2*fe,Q2/w2.locationSize*K2*fe)}}else if(O2!==void 0){const H2=O2[R2];if(H2!==void 0)switch(H2.length){case 2:q.vertexAttrib2fv(w2.location,H2);break;case 3:q.vertexAttrib3fv(w2.location,H2);break;case 4:q.vertexAttrib4fv(w2.location,H2);break;default:q.vertexAttrib1fv(w2.location,H2)}}}}Q0()}function K0(){P2();for(const _2 in z){const M2=z[_2];for(const F2 in M2){const N2=M2[F2];for(const L2 in N2)R0(N2[L2].object),delete N2[L2];delete M2[F2]}delete z[_2]}}function l2(_2){if(z[_2.id]===void 0)return;const M2=z[_2.id];for(const F2 in M2){const N2=M2[F2];for(const L2 in N2)R0(N2[L2].object),delete N2[L2];delete M2[F2]}delete z[_2.id]}function E2(_2){for(const M2 in z){const F2=z[M2];if(F2[_2.id]===void 0)continue;const N2=F2[_2.id];for(const L2 in N2)R0(N2[L2].object),delete N2[L2];delete F2[_2.id]}}function P2(){p2(),n0=!0,Q!==K&&(Q=K,g0(Q.object))}function p2(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:_0,reset:P2,resetDefaultState:p2,dispose:K0,releaseStatesOfGeometry:l2,releaseStatesOfProgram:E2,initAttributes:P0,enableAttribute:F0,disableUnusedAttributes:Q0}}function E20(q,u,y,w){const g=w.isWebGL2;let O;function V(Q){O=Q}function z(Q,n0){q.drawArrays(O,Q,n0),y.update(n0,O,1)}function K(Q,n0,_0){if(_0===0)return;let c0,g0;if(g)c0=q,g0="drawArraysInstanced";else if(c0=u.get("ANGLE_instanced_arrays"),g0="drawArraysInstancedANGLE",c0===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c0[g0](O,Q,n0,_0),y.update(n0,O,_0)}this.setMode=V,this.render=z,this.renderInstances=K}function I20(q,u,y){let w;function g(){if(w!==void 0)return w;if(u.has("EXT_texture_filter_anisotropic")===!0){const o2=u.get("EXT_texture_filter_anisotropic");w=q.getParameter(o2.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else w=0;return w}function O(o2){if(o2==="highp"){if(q.getShaderPrecisionFormat(35633,36338).precision>0&&q.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";o2="mediump"}return o2==="mediump"&&q.getShaderPrecisionFormat(35633,36337).precision>0&&q.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const V=typeof WebGL2RenderingContext<"u"&&q instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&q instanceof WebGL2ComputeRenderingContext;let z=y.precision!==void 0?y.precision:"highp";const K=O(z);K!==z&&(console.warn("THREE.WebGLRenderer:",z,"not supported, using",K,"instead."),z=K);const Q=V||u.has("WEBGL_draw_buffers"),n0=y.logarithmicDepthBuffer===!0,_0=q.getParameter(34930),c0=q.getParameter(35660),g0=q.getParameter(3379),R0=q.getParameter(34076),f0=q.getParameter(34921),h0=q.getParameter(36347),k0=q.getParameter(36348),G0=q.getParameter(36349),P0=c0>0,F0=V||u.has("OES_texture_float"),W0=P0&&F0,Q0=V?q.getParameter(36183):0;return{isWebGL2:V,drawBuffers:Q,getMaxAnisotropy:g,getMaxPrecision:O,precision:z,logarithmicDepthBuffer:n0,maxTextures:_0,maxVertexTextures:c0,maxTextureSize:g0,maxCubemapSize:R0,maxAttributes:f0,maxVertexUniforms:h0,maxVaryings:k0,maxFragmentUniforms:G0,vertexTextures:P0,floatFragmentTextures:F0,floatVertexTextures:W0,maxSamples:Q0}}function L20(q){const u=this;let y=null,w=0,g=!1,O=!1;const V=new gr,z=new Ln,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(_0,c0,g0){const R0=_0.length!==0||c0||w!==0||g;return g=c0,y=n0(_0,g0,0),w=_0.length,R0},this.beginShadows=function(){O=!0,n0(null)},this.endShadows=function(){O=!1,Q()},this.setState=function(_0,c0,g0){const R0=_0.clippingPlanes,f0=_0.clipIntersection,h0=_0.clipShadows,k0=q.get(_0);if(!g||R0===null||R0.length===0||O&&!h0)O?n0(null):Q();else{const G0=O?0:w,P0=G0*4;let F0=k0.clippingState||null;K.value=F0,F0=n0(R0,c0,P0,g0);for(let W0=0;W0!==P0;++W0)F0[W0]=y[W0];k0.clippingState=F0,this.numIntersection=f0?this.numPlanes:0,this.numPlanes+=G0}};function Q(){K.value!==y&&(K.value=y,K.needsUpdate=w>0),u.numPlanes=w,u.numIntersection=0}function n0(_0,c0,g0,R0){const f0=_0!==null?_0.length:0;let h0=null;if(f0!==0){if(h0=K.value,R0!==!0||h0===null){const k0=g0+f0*4,G0=c0.matrixWorldInverse;z.getNormalMatrix(G0),(h0===null||h0.length<k0)&&(h0=new Float32Array(k0));for(let P0=0,F0=g0;P0!==f0;++P0,F0+=4)V.copy(_0[P0]).applyMatrix4(G0,z),V.normal.toArray(h0,F0),h0[F0+3]=V.constant}K.value=h0,K.needsUpdate=!0}return u.numPlanes=f0,u.numIntersection=0,h0}}function P20(q){let u=new WeakMap;function y(V,z){return z===rc?V.mapping=ho:z===oc&&(V.mapping=mo),V}function w(V){if(V&&V.isTexture&&V.isRenderTargetTexture===!1){const z=V.mapping;if(z===rc||z===oc)if(u.has(V)){const K=u.get(V).texture;return y(K,V.mapping)}else{const K=V.image;if(K&&K.height>0){const Q=new bJ(K.height/2);return Q.fromEquirectangularTexture(q,V),u.set(V,Q),V.addEventListener("dispose",g),y(Q.texture,V.mapping)}else return null}}return V}function g(V){const z=V.target;z.removeEventListener("dispose",g);const K=u.get(z);K!==void 0&&(u.delete(z),K.dispose())}function O(){u=new WeakMap}return{get:w,dispose:O}}class vc extends q6{constructor(u=-1,y=1,w=1,g=-1,O=.1,V=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=u,this.right=y,this.top=w,this.bottom=g,this.near=O,this.far=V,this.updateProjectionMatrix()}copy(u,y){return super.copy(u,y),this.left=u.left,this.right=u.right,this.top=u.top,this.bottom=u.bottom,this.near=u.near,this.far=u.far,this.zoom=u.zoom,this.view=u.view===null?null:Object.assign({},u.view),this}setViewOffset(u,y,w,g,O,V){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=u,this.view.fullHeight=y,this.view.offsetX=w,this.view.offsetY=g,this.view.width=O,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const u=(this.right-this.left)/(2*this.zoom),y=(this.top-this.bottom)/(2*this.zoom),w=(this.right+this.left)/2,g=(this.top+this.bottom)/2;let O=w-u,V=w+u,z=g+y,K=g-y;if(this.view!==null&&this.view.enabled){const Q=(this.right-this.left)/this.view.fullWidth/this.zoom,n0=(this.top-this.bottom)/this.view.fullHeight/this.zoom;O+=Q*this.view.offsetX,V=O+Q*this.view.width,z-=n0*this.view.offsetY,K=z-n0*this.view.height}this.projectionMatrix.makeOrthographic(O,V,z,K,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(u){const y=super.toJSON(u);return y.object.zoom=this.zoom,y.object.left=this.left,y.object.right=this.right,y.object.top=this.top,y.object.bottom=this.bottom,y.object.near=this.near,y.object.far=this.far,this.view!==null&&(y.object.view=Object.assign({},this.view)),y}}const ao=4,E8=[.125,.215,.35,.446,.526,.582],Sr=20,X4=new vc,I8=new Pe;let K4=null;const Cr=(1+Math.sqrt(5))/2,co=1/Cr,L8=[new t2(1,1,1),new t2(-1,1,1),new t2(1,1,-1),new t2(-1,1,-1),new t2(0,Cr,co),new t2(0,Cr,-co),new t2(co,0,Cr),new t2(-co,0,Cr),new t2(Cr,co,0),new t2(-Cr,co,0)];class P8{constructor(u){this._renderer=u,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(u,y=0,w=.1,g=100){K4=this._renderer.getRenderTarget(),this._setSize(256);const O=this._allocateTargets();return O.depthBuffer=!0,this._sceneToCubeUV(u,w,g,O),y>0&&this._blur(O,0,0,y),this._applyPMREM(O),this._cleanup(O),O}fromEquirectangular(u,y=null){return this._fromTexture(u,y)}fromCubemap(u,y=null){return this._fromTexture(u,y)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B8(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F8(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(u){this._lodMax=Math.floor(Math.log2(u)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let u=0;u<this._lodPlanes.length;u++)this._lodPlanes[u].dispose()}_cleanup(u){this._renderer.setRenderTarget(K4),u.scissorTest=!1,s_(u,0,0,u.width,u.height)}_fromTexture(u,y){u.mapping===ho||u.mapping===mo?this._setSize(u.image.length===0?16:u.image[0].width||u.image[0].image.width):this._setSize(u.image.width/4),K4=this._renderer.getRenderTarget();const w=y||this._allocateTargets();return this._textureToCubeUV(u,w),this._applyPMREM(w),this._cleanup(w),w}_allocateTargets(){const u=3*Math.max(this._cubeSize,112),y=4*this._cubeSize,w={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:is,format:zn,encoding:Ar,depthBuffer:!1},g=O8(u,y,w);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==u){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O8(u,y,w);const{_lodMax:O}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O20(O)),this._blurMaterial=F20(O,u,y)}return g}_compileMaterial(u){const y=new ii(this._lodPlanes[0],u);this._renderer.compile(y,X4)}_sceneToCubeUV(u,y,w,g){const z=new pn(90,1,y,w),K=[1,-1,1,1,1,1],Q=[1,1,1,-1,-1,-1],n0=this._renderer,_0=n0.autoClear,c0=n0.toneMapping;n0.getClearColor(I8),n0.toneMapping=B1,n0.autoClear=!1;const g0=new $1({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),R0=new ii(new ir,g0);let f0=!1;const h0=u.background;h0?h0.isColor&&(g0.color.copy(h0),u.background=null,f0=!0):(g0.color.copy(I8),f0=!0);for(let k0=0;k0<6;k0++){const G0=k0%3;G0===0?(z.up.set(0,K[k0],0),z.lookAt(Q[k0],0,0)):G0===1?(z.up.set(0,0,K[k0]),z.lookAt(0,Q[k0],0)):(z.up.set(0,K[k0],0),z.lookAt(0,0,Q[k0]));const P0=this._cubeSize;s_(g,G0*P0,k0>2?P0:0,P0,P0),n0.setRenderTarget(g),f0&&n0.render(R0,z),n0.render(u,z)}R0.geometry.dispose(),R0.material.dispose(),n0.toneMapping=c0,n0.autoClear=_0,u.background=h0}_textureToCubeUV(u,y){const w=this._renderer,g=u.mapping===ho||u.mapping===mo;g?(this._cubemapMaterial===null&&(this._cubemapMaterial=B8()),this._cubemapMaterial.uniforms.flipEnvMap.value=u.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F8());const O=g?this._cubemapMaterial:this._equirectMaterial,V=new ii(this._lodPlanes[0],O),z=O.uniforms;z.envMap.value=u;const K=this._cubeSize;s_(y,0,0,3*K,2*K),w.setRenderTarget(y),w.render(V,X4)}_applyPMREM(u){const y=this._renderer,w=y.autoClear;y.autoClear=!1;for(let g=1;g<this._lodPlanes.length;g++){const O=Math.sqrt(this._sigmas[g]*this._sigmas[g]-this._sigmas[g-1]*this._sigmas[g-1]),V=L8[(g-1)%L8.length];this._blur(u,g-1,g,O,V)}y.autoClear=w}_blur(u,y,w,g,O){const V=this._pingPongRenderTarget;this._halfBlur(u,V,y,w,g,"latitudinal",O),this._halfBlur(V,u,w,w,g,"longitudinal",O)}_halfBlur(u,y,w,g,O,V,z){const K=this._renderer,Q=this._blurMaterial;V!=="latitudinal"&&V!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const n0=3,_0=new ii(this._lodPlanes[g],Q),c0=Q.uniforms,g0=this._sizeLods[w]-1,R0=isFinite(O)?Math.PI/(2*g0):2*Math.PI/(2*Sr-1),f0=O/R0,h0=isFinite(O)?1+Math.floor(n0*f0):Sr;h0>Sr&&console.warn(`sigmaRadians, ${O}, is too large and will clip, as it requested ${h0} samples when the maximum is set to ${Sr}`);const k0=[];let G0=0;for(let o2=0;o2<Sr;++o2){const E0=o2/f0,K0=Math.exp(-E0*E0/2);k0.push(K0),o2===0?G0+=K0:o2<h0&&(G0+=2*K0)}for(let o2=0;o2<k0.length;o2++)k0[o2]=k0[o2]/G0;c0.envMap.value=u.texture,c0.samples.value=h0,c0.weights.value=k0,c0.latitudinal.value=V==="latitudinal",z&&(c0.poleAxis.value=z);const{_lodMax:P0}=this;c0.dTheta.value=R0,c0.mipInt.value=P0-w;const F0=this._sizeLods[g],W0=3*F0*(g>P0-ao?g-P0+ao:0),Q0=4*(this._cubeSize-F0);s_(y,W0,Q0,3*F0,2*F0),K.setRenderTarget(y),K.render(_0,X4)}}function O20(q){const u=[],y=[],w=[];let g=q;const O=q-ao+1+E8.length;for(let V=0;V<O;V++){const z=Math.pow(2,g);y.push(z);let K=1/z;V>q-ao?K=E8[V-q+ao-1]:V===0&&(K=0),w.push(K);const Q=1/(z-2),n0=-Q,_0=1+Q,c0=[n0,n0,_0,n0,_0,_0,n0,n0,_0,_0,n0,_0],g0=6,R0=6,f0=3,h0=2,k0=1,G0=new Float32Array(f0*R0*g0),P0=new Float32Array(h0*R0*g0),F0=new Float32Array(k0*R0*g0);for(let Q0=0;Q0<g0;Q0++){const o2=Q0%3*2/3-1,E0=Q0>2?0:-1,K0=[o2,E0,0,o2+2/3,E0,0,o2+2/3,E0+1,0,o2,E0,0,o2+2/3,E0+1,0,o2,E0+1,0];G0.set(K0,f0*R0*Q0),P0.set(c0,h0*R0*Q0);const l2=[Q0,Q0,Q0,Q0,Q0,Q0];F0.set(l2,k0*R0*Q0)}const W0=new Rn;W0.setAttribute("position",new Zi(G0,f0)),W0.setAttribute("uv",new Zi(P0,h0)),W0.setAttribute("faceIndex",new Zi(F0,k0)),u.push(W0),g>ao&&g--}return{lodPlanes:u,sizeLods:y,sigmas:w}}function O8(q,u,y){const w=new Er(q,u,y);return w.texture.mapping=C_,w.texture.name="PMREM.cubeUv",w.scissorTest=!0,w}function s_(q,u,y,w,g){q.viewport.set(u,y,w,g),q.scissor.set(u,y,w,g)}function F20(q,u,y){const w=new Float32Array(Sr),g=new t2(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/u,CUBEUV_TEXEL_HEIGHT:1/y,CUBEUV_MAX_MIP:`${q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:w},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:g}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function F8(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function B8(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function B20(q){let u=new WeakMap,y=null;function w(z){if(z&&z.isTexture){const K=z.mapping,Q=K===rc||K===oc,n0=K===ho||K===mo;if(Q||n0)if(z.isRenderTargetTexture&&z.needsPMREMUpdate===!0){z.needsPMREMUpdate=!1;let _0=u.get(z);return y===null&&(y=new P8(q)),_0=Q?y.fromEquirectangular(z,_0):y.fromCubemap(z,_0),u.set(z,_0),_0.texture}else{if(u.has(z))return u.get(z).texture;{const _0=z.image;if(Q&&_0&&_0.height>0||n0&&_0&&g(_0)){y===null&&(y=new P8(q));const c0=Q?y.fromEquirectangular(z):y.fromCubemap(z);return u.set(z,c0),z.addEventListener("dispose",O),c0.texture}else return null}}}return z}function g(z){let K=0;const Q=6;for(let n0=0;n0<Q;n0++)z[n0]!==void 0&&K++;return K===Q}function O(z){const K=z.target;K.removeEventListener("dispose",O);const Q=u.get(K);Q!==void 0&&(u.delete(K),Q.dispose())}function V(){u=new WeakMap,y!==null&&(y.dispose(),y=null)}return{get:w,dispose:V}}function N20(q){const u={};function y(w){if(u[w]!==void 0)return u[w];let g;switch(w){case"WEBGL_depth_texture":g=q.getExtension("WEBGL_depth_texture")||q.getExtension("MOZ_WEBGL_depth_texture")||q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":g=q.getExtension("EXT_texture_filter_anisotropic")||q.getExtension("MOZ_EXT_texture_filter_anisotropic")||q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":g=q.getExtension("WEBGL_compressed_texture_s3tc")||q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":g=q.getExtension("WEBGL_compressed_texture_pvrtc")||q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:g=q.getExtension(w)}return u[w]=g,g}return{has:function(w){return y(w)!==null},init:function(w){w.isWebGL2?y("EXT_color_buffer_float"):(y("WEBGL_depth_texture"),y("OES_texture_float"),y("OES_texture_half_float"),y("OES_texture_half_float_linear"),y("OES_standard_derivatives"),y("OES_element_index_uint"),y("OES_vertex_array_object"),y("ANGLE_instanced_arrays")),y("OES_texture_float_linear"),y("EXT_color_buffer_half_float"),y("WEBGL_multisampled_render_to_texture")},get:function(w){const g=y(w);return g===null&&console.warn("THREE.WebGLRenderer: "+w+" extension not supported."),g}}}function W20(q,u,y,w){const g={},O=new WeakMap;function V(_0){const c0=_0.target;c0.index!==null&&u.remove(c0.index);for(const R0 in c0.attributes)u.remove(c0.attributes[R0]);c0.removeEventListener("dispose",V),delete g[c0.id];const g0=O.get(c0);g0&&(u.remove(g0),O.delete(c0)),w.releaseStatesOfGeometry(c0),c0.isInstancedBufferGeometry===!0&&delete c0._maxInstanceCount,y.memory.geometries--}function z(_0,c0){return g[c0.id]===!0||(c0.addEventListener("dispose",V),g[c0.id]=!0,y.memory.geometries++),c0}function K(_0){const c0=_0.attributes;for(const R0 in c0)u.update(c0[R0],34962);const g0=_0.morphAttributes;for(const R0 in g0){const f0=g0[R0];for(let h0=0,k0=f0.length;h0<k0;h0++)u.update(f0[h0],34962)}}function Q(_0){const c0=[],g0=_0.index,R0=_0.attributes.position;let f0=0;if(g0!==null){const G0=g0.array;f0=g0.version;for(let P0=0,F0=G0.length;P0<F0;P0+=3){const W0=G0[P0+0],Q0=G0[P0+1],o2=G0[P0+2];c0.push(W0,Q0,Q0,o2,o2,W0)}}else{const G0=R0.array;f0=R0.version;for(let P0=0,F0=G0.length/3-1;P0<F0;P0+=3){const W0=P0+0,Q0=P0+1,o2=P0+2;c0.push(W0,Q0,Q0,o2,o2,W0)}}const h0=new(B6(c0)?j6:V6)(c0,1);h0.version=f0;const k0=O.get(_0);k0&&u.remove(k0),O.set(_0,h0)}function n0(_0){const c0=O.get(_0);if(c0){const g0=_0.index;g0!==null&&c0.version<g0.version&&Q(_0)}else Q(_0);return O.get(_0)}return{get:z,update:K,getWireframeAttribute:n0}}function G20(q,u,y,w){const g=w.isWebGL2;let O;function V(c0){O=c0}let z,K;function Q(c0){z=c0.type,K=c0.bytesPerElement}function n0(c0,g0){q.drawElements(O,g0,z,c0*K),y.update(g0,O,1)}function _0(c0,g0,R0){if(R0===0)return;let f0,h0;if(g)f0=q,h0="drawElementsInstanced";else if(f0=u.get("ANGLE_instanced_arrays"),h0="drawElementsInstancedANGLE",f0===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f0[h0](O,g0,z,c0*K,R0),y.update(g0,O,R0)}this.setMode=V,this.setIndex=Q,this.render=n0,this.renderInstances=_0}function U20(q){const u={geometries:0,textures:0},y={frame:0,calls:0,triangles:0,points:0,lines:0};function w(O,V,z){switch(y.calls++,V){case 4:y.triangles+=z*(O/3);break;case 1:y.lines+=z*(O/2);break;case 3:y.lines+=z*(O-1);break;case 2:y.lines+=z*O;break;case 0:y.points+=z*O;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",V);break}}function g(){y.frame++,y.calls=0,y.triangles=0,y.points=0,y.lines=0}return{memory:u,render:y,programs:null,autoReset:!0,reset:g,update:w}}function z20(q,u){return q[0]-u[0]}function V20(q,u){return Math.abs(u[1])-Math.abs(q[1])}function j20(q,u,y){const w={},g=new Float32Array(8),O=new WeakMap,V=new It,z=[];for(let Q=0;Q<8;Q++)z[Q]=[Q,0];function K(Q,n0,_0,c0){const g0=Q.morphTargetInfluences;if(u.isWebGL2===!0){const R0=n0.morphAttributes.position||n0.morphAttributes.normal||n0.morphAttributes.color,f0=R0!==void 0?R0.length:0;let h0=O.get(n0);if(h0===void 0||h0.count!==f0){let M2=function(){p2.dispose(),O.delete(n0),n0.removeEventListener("dispose",M2)};h0!==void 0&&h0.texture.dispose();const P0=n0.morphAttributes.position!==void 0,F0=n0.morphAttributes.normal!==void 0,W0=n0.morphAttributes.color!==void 0,Q0=n0.morphAttributes.position||[],o2=n0.morphAttributes.normal||[],E0=n0.morphAttributes.color||[];let K0=0;P0===!0&&(K0=1),F0===!0&&(K0=2),W0===!0&&(K0=3);let l2=n0.attributes.position.count*K0,E2=1;l2>u.maxTextureSize&&(E2=Math.ceil(l2/u.maxTextureSize),l2=u.maxTextureSize);const P2=new Float32Array(l2*E2*4*f0),p2=new U6(P2,l2,E2,f0);p2.type=J1,p2.needsUpdate=!0;const _2=K0*4;for(let F2=0;F2<f0;F2++){const N2=Q0[F2],L2=o2[F2],j2=E0[F2],O2=l2*E2*4*F2;for(let R2=0;R2<N2.count;R2++){const w2=R2*_2;P0===!0&&(V.fromBufferAttribute(N2,R2),P2[O2+w2+0]=V.x,P2[O2+w2+1]=V.y,P2[O2+w2+2]=V.z,P2[O2+w2+3]=0),F0===!0&&(V.fromBufferAttribute(L2,R2),P2[O2+w2+4]=V.x,P2[O2+w2+5]=V.y,P2[O2+w2+6]=V.z,P2[O2+w2+7]=0),W0===!0&&(V.fromBufferAttribute(j2,R2),P2[O2+w2+8]=V.x,P2[O2+w2+9]=V.y,P2[O2+w2+10]=V.z,P2[O2+w2+11]=j2.itemSize===4?V.w:1)}}h0={count:f0,texture:p2,size:new Le(l2,E2)},O.set(n0,h0),n0.addEventListener("dispose",M2)}let k0=0;for(let P0=0;P0<g0.length;P0++)k0+=g0[P0];const G0=n0.morphTargetsRelative?1:1-k0;c0.getUniforms().setValue(q,"morphTargetBaseInfluence",G0),c0.getUniforms().setValue(q,"morphTargetInfluences",g0),c0.getUniforms().setValue(q,"morphTargetsTexture",h0.texture,y),c0.getUniforms().setValue(q,"morphTargetsTextureSize",h0.size)}else{const R0=g0===void 0?0:g0.length;let f0=w[n0.id];if(f0===void 0||f0.length!==R0){f0=[];for(let F0=0;F0<R0;F0++)f0[F0]=[F0,0];w[n0.id]=f0}for(let F0=0;F0<R0;F0++){const W0=f0[F0];W0[0]=F0,W0[1]=g0[F0]}f0.sort(V20);for(let F0=0;F0<8;F0++)F0<R0&&f0[F0][1]?(z[F0][0]=f0[F0][0],z[F0][1]=f0[F0][1]):(z[F0][0]=Number.MAX_SAFE_INTEGER,z[F0][1]=0);z.sort(z20);const h0=n0.morphAttributes.position,k0=n0.morphAttributes.normal;let G0=0;for(let F0=0;F0<8;F0++){const W0=z[F0],Q0=W0[0],o2=W0[1];Q0!==Number.MAX_SAFE_INTEGER&&o2?(h0&&n0.getAttribute("morphTarget"+F0)!==h0[Q0]&&n0.setAttribute("morphTarget"+F0,h0[Q0]),k0&&n0.getAttribute("morphNormal"+F0)!==k0[Q0]&&n0.setAttribute("morphNormal"+F0,k0[Q0]),g[F0]=o2,G0+=o2):(h0&&n0.hasAttribute("morphTarget"+F0)===!0&&n0.deleteAttribute("morphTarget"+F0),k0&&n0.hasAttribute("morphNormal"+F0)===!0&&n0.deleteAttribute("morphNormal"+F0),g[F0]=0)}const P0=n0.morphTargetsRelative?1:1-G0;c0.getUniforms().setValue(q,"morphTargetBaseInfluence",P0),c0.getUniforms().setValue(q,"morphTargetInfluences",g)}}return{update:K}}function H20(q,u,y,w){let g=new WeakMap;function O(K){const Q=w.render.frame,n0=K.geometry,_0=u.get(K,n0);return g.get(_0)!==Q&&(u.update(_0),g.set(_0,Q)),K.isInstancedMesh&&(K.hasEventListener("dispose",z)===!1&&K.addEventListener("dispose",z),y.update(K.instanceMatrix,34962),K.instanceColor!==null&&y.update(K.instanceColor,34962)),_0}function V(){g=new WeakMap}function z(K){const Q=K.target;Q.removeEventListener("dispose",z),y.remove(Q.instanceMatrix),Q.instanceColor!==null&&y.remove(Q.instanceColor)}return{update:O,dispose:V}}const K6=new ji,Z6=new U6,Y6=new EJ,Q6=new b6,N8=[],W8=[],G8=new Float32Array(16),U8=new Float32Array(9),z8=new Float32Array(4);function Mo(q,u,y){const w=q[0];if(w<=0||w>0)return q;const g=u*y;let O=N8[g];if(O===void 0&&(O=new Float32Array(g),N8[g]=O),u!==0){w.toArray(O,0);for(let V=1,z=0;V!==u;++V)z+=y,q[V].toArray(O,z)}return O}function xi(q,u){if(q.length!==u.length)return!1;for(let y=0,w=q.length;y<w;y++)if(q[y]!==u[y])return!1;return!0}function wi(q,u){for(let y=0,w=u.length;y<w;y++)q[y]=u[y]}function w_(q,u){let y=W8[u];y===void 0&&(y=new Int32Array(u),W8[u]=y);for(let w=0;w!==u;++w)y[w]=q.allocateTextureUnit();return y}function q20(q,u){const y=this.cache;y[0]!==u&&(q.uniform1f(this.addr,u),y[0]=u)}function b20(q,u){const y=this.cache;if(u.x!==void 0)(y[0]!==u.x||y[1]!==u.y)&&(q.uniform2f(this.addr,u.x,u.y),y[0]=u.x,y[1]=u.y);else{if(xi(y,u))return;q.uniform2fv(this.addr,u),wi(y,u)}}function X20(q,u){const y=this.cache;if(u.x!==void 0)(y[0]!==u.x||y[1]!==u.y||y[2]!==u.z)&&(q.uniform3f(this.addr,u.x,u.y,u.z),y[0]=u.x,y[1]=u.y,y[2]=u.z);else if(u.r!==void 0)(y[0]!==u.r||y[1]!==u.g||y[2]!==u.b)&&(q.uniform3f(this.addr,u.r,u.g,u.b),y[0]=u.r,y[1]=u.g,y[2]=u.b);else{if(xi(y,u))return;q.uniform3fv(this.addr,u),wi(y,u)}}function K20(q,u){const y=this.cache;if(u.x!==void 0)(y[0]!==u.x||y[1]!==u.y||y[2]!==u.z||y[3]!==u.w)&&(q.uniform4f(this.addr,u.x,u.y,u.z,u.w),y[0]=u.x,y[1]=u.y,y[2]=u.z,y[3]=u.w);else{if(xi(y,u))return;q.uniform4fv(this.addr,u),wi(y,u)}}function Z20(q,u){const y=this.cache,w=u.elements;if(w===void 0){if(xi(y,u))return;q.uniformMatrix2fv(this.addr,!1,u),wi(y,u)}else{if(xi(y,w))return;z8.set(w),q.uniformMatrix2fv(this.addr,!1,z8),wi(y,w)}}function Y20(q,u){const y=this.cache,w=u.elements;if(w===void 0){if(xi(y,u))return;q.uniformMatrix3fv(this.addr,!1,u),wi(y,u)}else{if(xi(y,w))return;U8.set(w),q.uniformMatrix3fv(this.addr,!1,U8),wi(y,w)}}function Q20(q,u){const y=this.cache,w=u.elements;if(w===void 0){if(xi(y,u))return;q.uniformMatrix4fv(this.addr,!1,u),wi(y,u)}else{if(xi(y,w))return;G8.set(w),q.uniformMatrix4fv(this.addr,!1,G8),wi(y,w)}}function J20(q,u){const y=this.cache;y[0]!==u&&(q.uniform1i(this.addr,u),y[0]=u)}function $20(q,u){const y=this.cache;if(u.x!==void 0)(y[0]!==u.x||y[1]!==u.y)&&(q.uniform2i(this.addr,u.x,u.y),y[0]=u.x,y[1]=u.y);else{if(xi(y,u))return;q.uniform2iv(this.addr,u),wi(y,u)}}function ee0(q,u){const y=this.cache;if(u.x!==void 0)(y[0]!==u.x||y[1]!==u.y||y[2]!==u.z)&&(q.uniform3i(this.addr,u.x,u.y,u.z),y[0]=u.x,y[1]=u.y,y[2]=u.z);else{if(xi(y,u))return;q.uniform3iv(this.addr,u),wi(y,u)}}function te0(q,u){const y=this.cache;if(u.x!==void 0)(y[0]!==u.x||y[1]!==u.y||y[2]!==u.z||y[3]!==u.w)&&(q.uniform4i(this.addr,u.x,u.y,u.z,u.w),y[0]=u.x,y[1]=u.y,y[2]=u.z,y[3]=u.w);else{if(xi(y,u))return;q.uniform4iv(this.addr,u),wi(y,u)}}function ie0(q,u){const y=this.cache;y[0]!==u&&(q.uniform1ui(this.addr,u),y[0]=u)}function ne0(q,u){const y=this.cache;if(u.x!==void 0)(y[0]!==u.x||y[1]!==u.y)&&(q.uniform2ui(this.addr,u.x,u.y),y[0]=u.x,y[1]=u.y);else{if(xi(y,u))return;q.uniform2uiv(this.addr,u),wi(y,u)}}function re0(q,u){const y=this.cache;if(u.x!==void 0)(y[0]!==u.x||y[1]!==u.y||y[2]!==u.z)&&(q.uniform3ui(this.addr,u.x,u.y,u.z),y[0]=u.x,y[1]=u.y,y[2]=u.z);else{if(xi(y,u))return;q.uniform3uiv(this.addr,u),wi(y,u)}}function oe0(q,u){const y=this.cache;if(u.x!==void 0)(y[0]!==u.x||y[1]!==u.y||y[2]!==u.z||y[3]!==u.w)&&(q.uniform4ui(this.addr,u.x,u.y,u.z,u.w),y[0]=u.x,y[1]=u.y,y[2]=u.z,y[3]=u.w);else{if(xi(y,u))return;q.uniform4uiv(this.addr,u),wi(y,u)}}function se0(q,u,y){const w=this.cache,g=y.allocateTextureUnit();w[0]!==g&&(q.uniform1i(this.addr,g),w[0]=g),y.setTexture2D(u||K6,g)}function _e0(q,u,y){const w=this.cache,g=y.allocateTextureUnit();w[0]!==g&&(q.uniform1i(this.addr,g),w[0]=g),y.setTexture3D(u||Y6,g)}function ce0(q,u,y){const w=this.cache,g=y.allocateTextureUnit();w[0]!==g&&(q.uniform1i(this.addr,g),w[0]=g),y.setTextureCube(u||Q6,g)}function le0(q,u,y){const w=this.cache,g=y.allocateTextureUnit();w[0]!==g&&(q.uniform1i(this.addr,g),w[0]=g),y.setTexture2DArray(u||Z6,g)}function ae0(q){switch(q){case 5126:return q20;case 35664:return b20;case 35665:return X20;case 35666:return K20;case 35674:return Z20;case 35675:return Y20;case 35676:return Q20;case 5124:case 35670:return J20;case 35667:case 35671:return $20;case 35668:case 35672:return ee0;case 35669:case 35673:return te0;case 5125:return ie0;case 36294:return ne0;case 36295:return re0;case 36296:return oe0;case 35678:case 36198:case 36298:case 36306:case 35682:return se0;case 35679:case 36299:case 36307:return _e0;case 35680:case 36300:case 36308:case 36293:return ce0;case 36289:case 36303:case 36311:case 36292:return le0}}function pe0(q,u){q.uniform1fv(this.addr,u)}function ue0(q,u){const y=Mo(u,this.size,2);q.uniform2fv(this.addr,y)}function fe0(q,u){const y=Mo(u,this.size,3);q.uniform3fv(this.addr,y)}function he0(q,u){const y=Mo(u,this.size,4);q.uniform4fv(this.addr,y)}function me0(q,u){const y=Mo(u,this.size,4);q.uniformMatrix2fv(this.addr,!1,y)}function de0(q,u){const y=Mo(u,this.size,9);q.uniformMatrix3fv(this.addr,!1,y)}function ye0(q,u){const y=Mo(u,this.size,16);q.uniformMatrix4fv(this.addr,!1,y)}function ve0(q,u){q.uniform1iv(this.addr,u)}function ge0(q,u){q.uniform2iv(this.addr,u)}function Ce0(q,u){q.uniform3iv(this.addr,u)}function Se0(q,u){q.uniform4iv(this.addr,u)}function xe0(q,u){q.uniform1uiv(this.addr,u)}function we0(q,u){q.uniform2uiv(this.addr,u)}function Me0(q,u){q.uniform3uiv(this.addr,u)}function Te0(q,u){q.uniform4uiv(this.addr,u)}function Re0(q,u,y){const w=this.cache,g=u.length,O=w_(y,g);xi(w,O)||(q.uniform1iv(this.addr,O),wi(w,O));for(let V=0;V!==g;++V)y.setTexture2D(u[V]||K6,O[V])}function ke0(q,u,y){const w=this.cache,g=u.length,O=w_(y,g);xi(w,O)||(q.uniform1iv(this.addr,O),wi(w,O));for(let V=0;V!==g;++V)y.setTexture3D(u[V]||Y6,O[V])}function De0(q,u,y){const w=this.cache,g=u.length,O=w_(y,g);xi(w,O)||(q.uniform1iv(this.addr,O),wi(w,O));for(let V=0;V!==g;++V)y.setTextureCube(u[V]||Q6,O[V])}function Ae0(q,u,y){const w=this.cache,g=u.length,O=w_(y,g);xi(w,O)||(q.uniform1iv(this.addr,O),wi(w,O));for(let V=0;V!==g;++V)y.setTexture2DArray(u[V]||Z6,O[V])}function Ee0(q){switch(q){case 5126:return pe0;case 35664:return ue0;case 35665:return fe0;case 35666:return he0;case 35674:return me0;case 35675:return de0;case 35676:return ye0;case 5124:case 35670:return ve0;case 35667:case 35671:return ge0;case 35668:case 35672:return Ce0;case 35669:case 35673:return Se0;case 5125:return xe0;case 36294:return we0;case 36295:return Me0;case 36296:return Te0;case 35678:case 36198:case 36298:case 36306:case 35682:return Re0;case 35679:case 36299:case 36307:return ke0;case 35680:case 36300:case 36308:case 36293:return De0;case 36289:case 36303:case 36311:case 36292:return Ae0}}class Ie0{constructor(u,y,w){this.id=u,this.addr=w,this.cache=[],this.setValue=ae0(y.type)}}class Le0{constructor(u,y,w){this.id=u,this.addr=w,this.cache=[],this.size=y.size,this.setValue=Ee0(y.type)}}class Pe0{constructor(u){this.id=u,this.seq=[],this.map={}}setValue(u,y,w){const g=this.seq;for(let O=0,V=g.length;O!==V;++O){const z=g[O];z.setValue(u,y[z.id],w)}}}const Z4=/(\w+)(\])?(\[|\.)?/g;function V8(q,u){q.seq.push(u),q.map[u.id]=u}function Oe0(q,u,y){const w=q.name,g=w.length;for(Z4.lastIndex=0;;){const O=Z4.exec(w),V=Z4.lastIndex;let z=O[1];const K=O[2]==="]",Q=O[3];if(K&&(z=z|0),Q===void 0||Q==="["&&V+2===g){V8(y,Q===void 0?new Ie0(z,q,u):new Le0(z,q,u));break}else{let _0=y.map[z];_0===void 0&&(_0=new Pe0(z),V8(y,_0)),y=_0}}}class h_{constructor(u,y){this.seq=[],this.map={};const w=u.getProgramParameter(y,35718);for(let g=0;g<w;++g){const O=u.getActiveUniform(y,g),V=u.getUniformLocation(y,O.name);Oe0(O,V,this)}}setValue(u,y,w,g){const O=this.map[y];O!==void 0&&O.setValue(u,w,g)}setOptional(u,y,w){const g=y[w];g!==void 0&&this.setValue(u,w,g)}static upload(u,y,w,g){for(let O=0,V=y.length;O!==V;++O){const z=y[O],K=w[z.id];K.needsUpdate!==!1&&z.setValue(u,K.value,g)}}static seqWithValue(u,y){const w=[];for(let g=0,O=u.length;g!==O;++g){const V=u[g];V.id in y&&w.push(V)}return w}}function j8(q,u,y){const w=q.createShader(u);return q.shaderSource(w,y),q.compileShader(w),w}let Fe0=0;function Be0(q,u){const y=q.split(`
`),w=[],g=Math.max(u-6,0),O=Math.min(u+6,y.length);for(let V=g;V<O;V++){const z=V+1;w.push(`${z===u?">":" "} ${z}: ${y[V]}`)}return w.join(`
`)}function Ne0(q){switch(q){case Ar:return["Linear","( value )"];case xt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",q),["Linear","( value )"]}}function H8(q,u,y){const w=q.getShaderParameter(u,35713),g=q.getShaderInfoLog(u).trim();if(w&&g==="")return"";const O=/ERROR: 0:(\d+)/.exec(g);if(O){const V=parseInt(O[1]);return y.toUpperCase()+`

`+g+`

`+Be0(q.getShaderSource(u),V)}else return g}function We0(q,u){const y=Ne0(u);return"vec4 "+q+"( vec4 value ) { return LinearTo"+y[0]+y[1]+"; }"}function Ge0(q,u){let y;switch(u){case jQ:y="Linear";break;case HQ:y="Reinhard";break;case qQ:y="OptimizedCineon";break;case bQ:y="ACESFilmic";break;case XQ:y="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",u),y="Linear"}return"vec3 "+q+"( vec3 color ) { return "+y+"ToneMapping( color ); }"}function Ue0(q){return[q.extensionDerivatives||q.envMapCubeUVHeight||q.bumpMap||q.tangentSpaceNormalMap||q.clearcoatNormalMap||q.flatShading||q.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(q.extensionFragDepth||q.logarithmicDepthBuffer)&&q.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",q.extensionDrawBuffers&&q.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(q.extensionShaderTextureLOD||q.envMap||q.transmission)&&q.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($o).join(`
`)}function ze0(q){const u=[];for(const y in q){const w=q[y];w!==!1&&u.push("#define "+y+" "+w)}return u.join(`
`)}function Ve0(q,u){const y={},w=q.getProgramParameter(u,35721);for(let g=0;g<w;g++){const O=q.getActiveAttrib(u,g),V=O.name;let z=1;O.type===35674&&(z=2),O.type===35675&&(z=3),O.type===35676&&(z=4),y[V]={type:O.type,location:q.getAttribLocation(u,V),locationSize:z}}return y}function $o(q){return q!==""}function q8(q,u){const y=u.numSpotLightShadows+u.numSpotLightMaps-u.numSpotLightShadowsWithMaps;return q.replace(/NUM_DIR_LIGHTS/g,u.numDirLights).replace(/NUM_SPOT_LIGHTS/g,u.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,u.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,y).replace(/NUM_RECT_AREA_LIGHTS/g,u.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,u.numPointLights).replace(/NUM_HEMI_LIGHTS/g,u.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,u.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,u.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,u.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,u.numPointLightShadows)}function b8(q,u){return q.replace(/NUM_CLIPPING_PLANES/g,u.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,u.numClippingPlanes-u.numClipIntersection)}const je0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(q){return q.replace(je0,He0)}function He0(q,u){const y=Ke[u];if(y===void 0)throw new Error("Can not resolve #include <"+u+">");return ac(y)}const qe0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X8(q){return q.replace(qe0,be0)}function be0(q,u,y,w){let g="";for(let O=parseInt(u);O<parseInt(y);O++)g+=w.replace(/\[\s*i\s*\]/g,"[ "+O+" ]").replace(/UNROLLED_LOOP_INDEX/g,O);return g}function K8(q){let u="precision "+q.precision+` float;
precision `+q.precision+" int;";return q.precision==="highp"?u+=`
#define HIGH_PRECISION`:q.precision==="mediump"?u+=`
#define MEDIUM_PRECISION`:q.precision==="lowp"&&(u+=`
#define LOW_PRECISION`),u}function Xe0(q){let u="SHADOWMAP_TYPE_BASIC";return q.shadowMapType===D6?u="SHADOWMAP_TYPE_PCF":q.shadowMapType===SQ?u="SHADOWMAP_TYPE_PCF_SOFT":q.shadowMapType===Jo&&(u="SHADOWMAP_TYPE_VSM"),u}function Ke0(q){let u="ENVMAP_TYPE_CUBE";if(q.envMap)switch(q.envMapMode){case ho:case mo:u="ENVMAP_TYPE_CUBE";break;case C_:u="ENVMAP_TYPE_CUBE_UV";break}return u}function Ze0(q){let u="ENVMAP_MODE_REFLECTION";if(q.envMap)switch(q.envMapMode){case mo:u="ENVMAP_MODE_REFRACTION";break}return u}function Ye0(q){let u="ENVMAP_BLENDING_NONE";if(q.envMap)switch(q.combine){case g_:u="ENVMAP_BLENDING_MULTIPLY";break;case zQ:u="ENVMAP_BLENDING_MIX";break;case VQ:u="ENVMAP_BLENDING_ADD";break}return u}function Qe0(q){const u=q.envMapCubeUVHeight;if(u===null)return null;const y=Math.log2(u)-2,w=1/u;return{texelWidth:1/(3*Math.max(Math.pow(2,y),7*16)),texelHeight:w,maxMip:y}}function Je0(q,u,y,w){const g=q.getContext(),O=y.defines;let V=y.vertexShader,z=y.fragmentShader;const K=Xe0(y),Q=Ke0(y),n0=Ze0(y),_0=Ye0(y),c0=Qe0(y),g0=y.isWebGL2?"":Ue0(y),R0=ze0(O),f0=g.createProgram();let h0,k0,G0=y.glslVersion?"#version "+y.glslVersion+`
`:"";y.isRawShaderMaterial?(h0=[R0].filter($o).join(`
`),h0.length>0&&(h0+=`
`),k0=[g0,R0].filter($o).join(`
`),k0.length>0&&(k0+=`
`)):(h0=[K8(y),"#define SHADER_NAME "+y.shaderName,R0,y.instancing?"#define USE_INSTANCING":"",y.instancingColor?"#define USE_INSTANCING_COLOR":"",y.supportsVertexTextures?"#define VERTEX_TEXTURES":"",y.useFog&&y.fog?"#define USE_FOG":"",y.useFog&&y.fogExp2?"#define FOG_EXP2":"",y.map?"#define USE_MAP":"",y.envMap?"#define USE_ENVMAP":"",y.envMap?"#define "+n0:"",y.lightMap?"#define USE_LIGHTMAP":"",y.aoMap?"#define USE_AOMAP":"",y.emissiveMap?"#define USE_EMISSIVEMAP":"",y.bumpMap?"#define USE_BUMPMAP":"",y.normalMap?"#define USE_NORMALMAP":"",y.normalMap&&y.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",y.normalMap&&y.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",y.clearcoatMap?"#define USE_CLEARCOATMAP":"",y.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",y.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",y.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",y.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",y.displacementMap&&y.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",y.specularMap?"#define USE_SPECULARMAP":"",y.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",y.specularColorMap?"#define USE_SPECULARCOLORMAP":"",y.roughnessMap?"#define USE_ROUGHNESSMAP":"",y.metalnessMap?"#define USE_METALNESSMAP":"",y.alphaMap?"#define USE_ALPHAMAP":"",y.transmission?"#define USE_TRANSMISSION":"",y.transmissionMap?"#define USE_TRANSMISSIONMAP":"",y.thicknessMap?"#define USE_THICKNESSMAP":"",y.sheenColorMap?"#define USE_SHEENCOLORMAP":"",y.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",y.vertexTangents?"#define USE_TANGENT":"",y.vertexColors?"#define USE_COLOR":"",y.vertexAlphas?"#define USE_COLOR_ALPHA":"",y.vertexUvs?"#define USE_UV":"",y.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",y.flatShading?"#define FLAT_SHADED":"",y.skinning?"#define USE_SKINNING":"",y.morphTargets?"#define USE_MORPHTARGETS":"",y.morphNormals&&y.flatShading===!1?"#define USE_MORPHNORMALS":"",y.morphColors&&y.isWebGL2?"#define USE_MORPHCOLORS":"",y.morphTargetsCount>0&&y.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",y.morphTargetsCount>0&&y.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+y.morphTextureStride:"",y.morphTargetsCount>0&&y.isWebGL2?"#define MORPHTARGETS_COUNT "+y.morphTargetsCount:"",y.doubleSided?"#define DOUBLE_SIDED":"",y.flipSided?"#define FLIP_SIDED":"",y.shadowMapEnabled?"#define USE_SHADOWMAP":"",y.shadowMapEnabled?"#define "+K:"",y.sizeAttenuation?"#define USE_SIZEATTENUATION":"",y.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",y.logarithmicDepthBuffer&&y.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),k0=[g0,K8(y),"#define SHADER_NAME "+y.shaderName,R0,y.useFog&&y.fog?"#define USE_FOG":"",y.useFog&&y.fogExp2?"#define FOG_EXP2":"",y.map?"#define USE_MAP":"",y.matcap?"#define USE_MATCAP":"",y.envMap?"#define USE_ENVMAP":"",y.envMap?"#define "+Q:"",y.envMap?"#define "+n0:"",y.envMap?"#define "+_0:"",c0?"#define CUBEUV_TEXEL_WIDTH "+c0.texelWidth:"",c0?"#define CUBEUV_TEXEL_HEIGHT "+c0.texelHeight:"",c0?"#define CUBEUV_MAX_MIP "+c0.maxMip+".0":"",y.lightMap?"#define USE_LIGHTMAP":"",y.aoMap?"#define USE_AOMAP":"",y.emissiveMap?"#define USE_EMISSIVEMAP":"",y.bumpMap?"#define USE_BUMPMAP":"",y.normalMap?"#define USE_NORMALMAP":"",y.normalMap&&y.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",y.normalMap&&y.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",y.clearcoat?"#define USE_CLEARCOAT":"",y.clearcoatMap?"#define USE_CLEARCOATMAP":"",y.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",y.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",y.iridescence?"#define USE_IRIDESCENCE":"",y.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",y.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",y.specularMap?"#define USE_SPECULARMAP":"",y.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",y.specularColorMap?"#define USE_SPECULARCOLORMAP":"",y.roughnessMap?"#define USE_ROUGHNESSMAP":"",y.metalnessMap?"#define USE_METALNESSMAP":"",y.alphaMap?"#define USE_ALPHAMAP":"",y.alphaTest?"#define USE_ALPHATEST":"",y.sheen?"#define USE_SHEEN":"",y.sheenColorMap?"#define USE_SHEENCOLORMAP":"",y.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",y.transmission?"#define USE_TRANSMISSION":"",y.transmissionMap?"#define USE_TRANSMISSIONMAP":"",y.thicknessMap?"#define USE_THICKNESSMAP":"",y.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",y.vertexTangents?"#define USE_TANGENT":"",y.vertexColors||y.instancingColor?"#define USE_COLOR":"",y.vertexAlphas?"#define USE_COLOR_ALPHA":"",y.vertexUvs?"#define USE_UV":"",y.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",y.gradientMap?"#define USE_GRADIENTMAP":"",y.flatShading?"#define FLAT_SHADED":"",y.doubleSided?"#define DOUBLE_SIDED":"",y.flipSided?"#define FLIP_SIDED":"",y.shadowMapEnabled?"#define USE_SHADOWMAP":"",y.shadowMapEnabled?"#define "+K:"",y.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",y.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",y.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",y.logarithmicDepthBuffer&&y.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",y.toneMapping!==B1?"#define TONE_MAPPING":"",y.toneMapping!==B1?Ke.tonemapping_pars_fragment:"",y.toneMapping!==B1?Ge0("toneMapping",y.toneMapping):"",y.dithering?"#define DITHERING":"",y.opaque?"#define OPAQUE":"",Ke.encodings_pars_fragment,We0("linearToOutputTexel",y.outputEncoding),y.useDepthPacking?"#define DEPTH_PACKING "+y.depthPacking:"",`
`].filter($o).join(`
`)),V=ac(V),V=q8(V,y),V=b8(V,y),z=ac(z),z=q8(z,y),z=b8(z,y),V=X8(V),z=X8(z),y.isWebGL2&&y.isRawShaderMaterial!==!0&&(G0=`#version 300 es
`,h0=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h0,k0=["#define varying in",y.glslVersion===v8?"":"layout(location = 0) out highp vec4 pc_fragColor;",y.glslVersion===v8?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+k0);const P0=G0+h0+V,F0=G0+k0+z,W0=j8(g,35633,P0),Q0=j8(g,35632,F0);if(g.attachShader(f0,W0),g.attachShader(f0,Q0),y.index0AttributeName!==void 0?g.bindAttribLocation(f0,0,y.index0AttributeName):y.morphTargets===!0&&g.bindAttribLocation(f0,0,"position"),g.linkProgram(f0),q.debug.checkShaderErrors){const K0=g.getProgramInfoLog(f0).trim(),l2=g.getShaderInfoLog(W0).trim(),E2=g.getShaderInfoLog(Q0).trim();let P2=!0,p2=!0;if(g.getProgramParameter(f0,35714)===!1){P2=!1;const _2=H8(g,W0,"vertex"),M2=H8(g,Q0,"fragment");console.error("THREE.WebGLProgram: Shader Error "+g.getError()+" - VALIDATE_STATUS "+g.getProgramParameter(f0,35715)+`

Program Info Log: `+K0+`
`+_2+`
`+M2)}else K0!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K0):(l2===""||E2==="")&&(p2=!1);p2&&(this.diagnostics={runnable:P2,programLog:K0,vertexShader:{log:l2,prefix:h0},fragmentShader:{log:E2,prefix:k0}})}g.deleteShader(W0),g.deleteShader(Q0);let o2;this.getUniforms=function(){return o2===void 0&&(o2=new h_(g,f0)),o2};let E0;return this.getAttributes=function(){return E0===void 0&&(E0=Ve0(g,f0)),E0},this.destroy=function(){w.releaseStatesOfProgram(this),g.deleteProgram(f0),this.program=void 0},this.name=y.shaderName,this.id=Fe0++,this.cacheKey=u,this.usedTimes=1,this.program=f0,this.vertexShader=W0,this.fragmentShader=Q0,this}let $e0=0;class et0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(u){const y=u.vertexShader,w=u.fragmentShader,g=this._getShaderStage(y),O=this._getShaderStage(w),V=this._getShaderCacheForMaterial(u);return V.has(g)===!1&&(V.add(g),g.usedTimes++),V.has(O)===!1&&(V.add(O),O.usedTimes++),this}remove(u){const y=this.materialCache.get(u);for(const w of y)w.usedTimes--,w.usedTimes===0&&this.shaderCache.delete(w.code);return this.materialCache.delete(u),this}getVertexShaderID(u){return this._getShaderStage(u.vertexShader).id}getFragmentShaderID(u){return this._getShaderStage(u.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(u){const y=this.materialCache;let w=y.get(u);return w===void 0&&(w=new Set,y.set(u,w)),w}_getShaderStage(u){const y=this.shaderCache;let w=y.get(u);return w===void 0&&(w=new tt0(u),y.set(u,w)),w}}class tt0{constructor(u){this.id=$e0++,this.code=u,this.usedTimes=0}}function it0(q,u,y,w,g,O,V){const z=new z6,K=new et0,Q=[],n0=g.isWebGL2,_0=g.logarithmicDepthBuffer,c0=g.vertexTextures;let g0=g.precision;const R0={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f0(E0,K0,l2,E2,P2){const p2=E2.fog,_2=P2.geometry,M2=E0.isMeshStandardMaterial?E2.environment:null,F2=(E0.isMeshStandardMaterial?y:u).get(E0.envMap||M2),N2=F2&&F2.mapping===C_?F2.image.height:null,L2=R0[E0.type];E0.precision!==null&&(g0=g.getMaxPrecision(E0.precision),g0!==E0.precision&&console.warn("THREE.WebGLProgram.getParameters:",E0.precision,"not supported, using",g0,"instead."));const j2=_2.morphAttributes.position||_2.morphAttributes.normal||_2.morphAttributes.color,O2=j2!==void 0?j2.length:0;let R2=0;_2.morphAttributes.position!==void 0&&(R2=1),_2.morphAttributes.normal!==void 0&&(R2=2),_2.morphAttributes.color!==void 0&&(R2=3);let w2,X2,H2,Q2;if(L2){const et=p1[L2];w2=et.vertexShader,X2=et.fragmentShader}else w2=E0.vertexShader,X2=E0.fragmentShader,K.update(E0),H2=K.getVertexShaderID(E0),Q2=K.getFragmentShaderID(E0);const D2=q.getRenderTarget(),Qe=E0.alphaTest>0,$2=E0.clearcoat>0,fe=E0.iridescence>0;return{isWebGL2:n0,shaderID:L2,shaderName:E0.type,vertexShader:w2,fragmentShader:X2,defines:E0.defines,customVertexShaderID:H2,customFragmentShaderID:Q2,isRawShaderMaterial:E0.isRawShaderMaterial===!0,glslVersion:E0.glslVersion,precision:g0,instancing:P2.isInstancedMesh===!0,instancingColor:P2.isInstancedMesh===!0&&P2.instanceColor!==null,supportsVertexTextures:c0,outputEncoding:D2===null?q.outputEncoding:D2.isXRRenderTarget===!0?D2.texture.encoding:Ar,map:!!E0.map,matcap:!!E0.matcap,envMap:!!F2,envMapMode:F2&&F2.mapping,envMapCubeUVHeight:N2,lightMap:!!E0.lightMap,aoMap:!!E0.aoMap,emissiveMap:!!E0.emissiveMap,bumpMap:!!E0.bumpMap,normalMap:!!E0.normalMap,objectSpaceNormalMap:E0.normalMapType===fJ,tangentSpaceNormalMap:E0.normalMapType===S_,decodeVideoTexture:!!E0.map&&E0.map.isVideoTexture===!0&&E0.map.encoding===xt,clearcoat:$2,clearcoatMap:$2&&!!E0.clearcoatMap,clearcoatRoughnessMap:$2&&!!E0.clearcoatRoughnessMap,clearcoatNormalMap:$2&&!!E0.clearcoatNormalMap,iridescence:fe,iridescenceMap:fe&&!!E0.iridescenceMap,iridescenceThicknessMap:fe&&!!E0.iridescenceThicknessMap,displacementMap:!!E0.displacementMap,roughnessMap:!!E0.roughnessMap,metalnessMap:!!E0.metalnessMap,specularMap:!!E0.specularMap,specularIntensityMap:!!E0.specularIntensityMap,specularColorMap:!!E0.specularColorMap,opaque:E0.transparent===!1&&E0.blending===po,alphaMap:!!E0.alphaMap,alphaTest:Qe,gradientMap:!!E0.gradientMap,sheen:E0.sheen>0,sheenColorMap:!!E0.sheenColorMap,sheenRoughnessMap:!!E0.sheenRoughnessMap,transmission:E0.transmission>0,transmissionMap:!!E0.transmissionMap,thicknessMap:!!E0.thicknessMap,combine:E0.combine,vertexTangents:!!E0.normalMap&&!!_2.attributes.tangent,vertexColors:E0.vertexColors,vertexAlphas:E0.vertexColors===!0&&!!_2.attributes.color&&_2.attributes.color.itemSize===4,vertexUvs:!!E0.map||!!E0.bumpMap||!!E0.normalMap||!!E0.specularMap||!!E0.alphaMap||!!E0.emissiveMap||!!E0.roughnessMap||!!E0.metalnessMap||!!E0.clearcoatMap||!!E0.clearcoatRoughnessMap||!!E0.clearcoatNormalMap||!!E0.iridescenceMap||!!E0.iridescenceThicknessMap||!!E0.displacementMap||!!E0.transmissionMap||!!E0.thicknessMap||!!E0.specularIntensityMap||!!E0.specularColorMap||!!E0.sheenColorMap||!!E0.sheenRoughnessMap,uvsVertexOnly:!(E0.map||E0.bumpMap||E0.normalMap||E0.specularMap||E0.alphaMap||E0.emissiveMap||E0.roughnessMap||E0.metalnessMap||E0.clearcoatNormalMap||E0.iridescenceMap||E0.iridescenceThicknessMap||E0.transmission>0||E0.transmissionMap||E0.thicknessMap||E0.specularIntensityMap||E0.specularColorMap||E0.sheen>0||E0.sheenColorMap||E0.sheenRoughnessMap)&&!!E0.displacementMap,fog:!!p2,useFog:E0.fog===!0,fogExp2:p2&&p2.isFogExp2,flatShading:!!E0.flatShading,sizeAttenuation:E0.sizeAttenuation,logarithmicDepthBuffer:_0,skinning:P2.isSkinnedMesh===!0,morphTargets:_2.morphAttributes.position!==void 0,morphNormals:_2.morphAttributes.normal!==void 0,morphColors:_2.morphAttributes.color!==void 0,morphTargetsCount:O2,morphTextureStride:R2,numDirLights:K0.directional.length,numPointLights:K0.point.length,numSpotLights:K0.spot.length,numSpotLightMaps:K0.spotLightMap.length,numRectAreaLights:K0.rectArea.length,numHemiLights:K0.hemi.length,numDirLightShadows:K0.directionalShadowMap.length,numPointLightShadows:K0.pointShadowMap.length,numSpotLightShadows:K0.spotShadowMap.length,numSpotLightShadowsWithMaps:K0.numSpotLightShadowsWithMaps,numClippingPlanes:V.numPlanes,numClipIntersection:V.numIntersection,dithering:E0.dithering,shadowMapEnabled:q.shadowMap.enabled&&l2.length>0,shadowMapType:q.shadowMap.type,toneMapping:E0.toneMapped?q.toneMapping:B1,physicallyCorrectLights:q.physicallyCorrectLights,premultipliedAlpha:E0.premultipliedAlpha,doubleSided:E0.side===v_,flipSided:E0.side===Vn,useDepthPacking:!!E0.depthPacking,depthPacking:E0.depthPacking||0,index0AttributeName:E0.index0AttributeName,extensionDerivatives:E0.extensions&&E0.extensions.derivatives,extensionFragDepth:E0.extensions&&E0.extensions.fragDepth,extensionDrawBuffers:E0.extensions&&E0.extensions.drawBuffers,extensionShaderTextureLOD:E0.extensions&&E0.extensions.shaderTextureLOD,rendererExtensionFragDepth:n0||w.has("EXT_frag_depth"),rendererExtensionDrawBuffers:n0||w.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:n0||w.has("EXT_shader_texture_lod"),customProgramCacheKey:E0.customProgramCacheKey()}}function h0(E0){const K0=[];if(E0.shaderID?K0.push(E0.shaderID):(K0.push(E0.customVertexShaderID),K0.push(E0.customFragmentShaderID)),E0.defines!==void 0)for(const l2 in E0.defines)K0.push(l2),K0.push(E0.defines[l2]);return E0.isRawShaderMaterial===!1&&(k0(K0,E0),G0(K0,E0),K0.push(q.outputEncoding)),K0.push(E0.customProgramCacheKey),K0.join()}function k0(E0,K0){E0.push(K0.precision),E0.push(K0.outputEncoding),E0.push(K0.envMapMode),E0.push(K0.envMapCubeUVHeight),E0.push(K0.combine),E0.push(K0.vertexUvs),E0.push(K0.fogExp2),E0.push(K0.sizeAttenuation),E0.push(K0.morphTargetsCount),E0.push(K0.morphAttributeCount),E0.push(K0.numDirLights),E0.push(K0.numPointLights),E0.push(K0.numSpotLights),E0.push(K0.numSpotLightMaps),E0.push(K0.numHemiLights),E0.push(K0.numRectAreaLights),E0.push(K0.numDirLightShadows),E0.push(K0.numPointLightShadows),E0.push(K0.numSpotLightShadows),E0.push(K0.numSpotLightShadowsWithMaps),E0.push(K0.shadowMapType),E0.push(K0.toneMapping),E0.push(K0.numClippingPlanes),E0.push(K0.numClipIntersection),E0.push(K0.depthPacking)}function G0(E0,K0){z.disableAll(),K0.isWebGL2&&z.enable(0),K0.supportsVertexTextures&&z.enable(1),K0.instancing&&z.enable(2),K0.instancingColor&&z.enable(3),K0.map&&z.enable(4),K0.matcap&&z.enable(5),K0.envMap&&z.enable(6),K0.lightMap&&z.enable(7),K0.aoMap&&z.enable(8),K0.emissiveMap&&z.enable(9),K0.bumpMap&&z.enable(10),K0.normalMap&&z.enable(11),K0.objectSpaceNormalMap&&z.enable(12),K0.tangentSpaceNormalMap&&z.enable(13),K0.clearcoat&&z.enable(14),K0.clearcoatMap&&z.enable(15),K0.clearcoatRoughnessMap&&z.enable(16),K0.clearcoatNormalMap&&z.enable(17),K0.iridescence&&z.enable(18),K0.iridescenceMap&&z.enable(19),K0.iridescenceThicknessMap&&z.enable(20),K0.displacementMap&&z.enable(21),K0.specularMap&&z.enable(22),K0.roughnessMap&&z.enable(23),K0.metalnessMap&&z.enable(24),K0.gradientMap&&z.enable(25),K0.alphaMap&&z.enable(26),K0.alphaTest&&z.enable(27),K0.vertexColors&&z.enable(28),K0.vertexAlphas&&z.enable(29),K0.vertexUvs&&z.enable(30),K0.vertexTangents&&z.enable(31),K0.uvsVertexOnly&&z.enable(32),E0.push(z.mask),z.disableAll(),K0.fog&&z.enable(0),K0.useFog&&z.enable(1),K0.flatShading&&z.enable(2),K0.logarithmicDepthBuffer&&z.enable(3),K0.skinning&&z.enable(4),K0.morphTargets&&z.enable(5),K0.morphNormals&&z.enable(6),K0.morphColors&&z.enable(7),K0.premultipliedAlpha&&z.enable(8),K0.shadowMapEnabled&&z.enable(9),K0.physicallyCorrectLights&&z.enable(10),K0.doubleSided&&z.enable(11),K0.flipSided&&z.enable(12),K0.useDepthPacking&&z.enable(13),K0.dithering&&z.enable(14),K0.specularIntensityMap&&z.enable(15),K0.specularColorMap&&z.enable(16),K0.transmission&&z.enable(17),K0.transmissionMap&&z.enable(18),K0.thicknessMap&&z.enable(19),K0.sheen&&z.enable(20),K0.sheenColorMap&&z.enable(21),K0.sheenRoughnessMap&&z.enable(22),K0.decodeVideoTexture&&z.enable(23),K0.opaque&&z.enable(24),E0.push(z.mask)}function P0(E0){const K0=R0[E0.type];let l2;if(K0){const E2=p1[K0];l2=VJ.clone(E2.uniforms)}else l2=E0.uniforms;return l2}function F0(E0,K0){let l2;for(let E2=0,P2=Q.length;E2<P2;E2++){const p2=Q[E2];if(p2.cacheKey===K0){l2=p2,++l2.usedTimes;break}}return l2===void 0&&(l2=new Je0(q,K0,E0,O),Q.push(l2)),l2}function W0(E0){if(--E0.usedTimes===0){const K0=Q.indexOf(E0);Q[K0]=Q[Q.length-1],Q.pop(),E0.destroy()}}function Q0(E0){K.remove(E0)}function o2(){K.dispose()}return{getParameters:f0,getProgramCacheKey:h0,getUniforms:P0,acquireProgram:F0,releaseProgram:W0,releaseShaderCache:Q0,programs:Q,dispose:o2}}function nt0(){let q=new WeakMap;function u(O){let V=q.get(O);return V===void 0&&(V={},q.set(O,V)),V}function y(O){q.delete(O)}function w(O,V,z){q.get(O)[V]=z}function g(){q=new WeakMap}return{get:u,remove:y,update:w,dispose:g}}function rt0(q,u){return q.groupOrder!==u.groupOrder?q.groupOrder-u.groupOrder:q.renderOrder!==u.renderOrder?q.renderOrder-u.renderOrder:q.material.id!==u.material.id?q.material.id-u.material.id:q.z!==u.z?q.z-u.z:q.id-u.id}function Z8(q,u){return q.groupOrder!==u.groupOrder?q.groupOrder-u.groupOrder:q.renderOrder!==u.renderOrder?q.renderOrder-u.renderOrder:q.z!==u.z?u.z-q.z:q.id-u.id}function Y8(){const q=[];let u=0;const y=[],w=[],g=[];function O(){u=0,y.length=0,w.length=0,g.length=0}function V(_0,c0,g0,R0,f0,h0){let k0=q[u];return k0===void 0?(k0={id:_0.id,object:_0,geometry:c0,material:g0,groupOrder:R0,renderOrder:_0.renderOrder,z:f0,group:h0},q[u]=k0):(k0.id=_0.id,k0.object=_0,k0.geometry=c0,k0.material=g0,k0.groupOrder=R0,k0.renderOrder=_0.renderOrder,k0.z=f0,k0.group=h0),u++,k0}function z(_0,c0,g0,R0,f0,h0){const k0=V(_0,c0,g0,R0,f0,h0);g0.transmission>0?w.push(k0):g0.transparent===!0?g.push(k0):y.push(k0)}function K(_0,c0,g0,R0,f0,h0){const k0=V(_0,c0,g0,R0,f0,h0);g0.transmission>0?w.unshift(k0):g0.transparent===!0?g.unshift(k0):y.unshift(k0)}function Q(_0,c0){y.length>1&&y.sort(_0||rt0),w.length>1&&w.sort(c0||Z8),g.length>1&&g.sort(c0||Z8)}function n0(){for(let _0=u,c0=q.length;_0<c0;_0++){const g0=q[_0];if(g0.id===null)break;g0.id=null,g0.object=null,g0.geometry=null,g0.material=null,g0.group=null}}return{opaque:y,transmissive:w,transparent:g,init:O,push:z,unshift:K,finish:n0,sort:Q}}function ot0(){let q=new WeakMap;function u(w,g){const O=q.get(w);let V;return O===void 0?(V=new Y8,q.set(w,[V])):g>=O.length?(V=new Y8,O.push(V)):V=O[g],V}function y(){q=new WeakMap}return{get:u,dispose:y}}function st0(){const q={};return{get:function(u){if(q[u.id]!==void 0)return q[u.id];let y;switch(u.type){case"DirectionalLight":y={direction:new t2,color:new Pe};break;case"SpotLight":y={position:new t2,direction:new t2,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":y={position:new t2,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":y={direction:new t2,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":y={color:new Pe,position:new t2,halfWidth:new t2,halfHeight:new t2};break}return q[u.id]=y,y}}}function _t0(){const q={};return{get:function(u){if(q[u.id]!==void 0)return q[u.id];let y;switch(u.type){case"DirectionalLight":y={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":y={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":y={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return q[u.id]=y,y}}}let ct0=0;function lt0(q,u){return(u.castShadow?2:0)-(q.castShadow?2:0)+(u.map?1:0)-(q.map?1:0)}function at0(q,u){const y=new st0,w=_t0(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let n0=0;n0<9;n0++)g.probe.push(new t2);const O=new t2,V=new $e,z=new $e;function K(n0,_0){let c0=0,g0=0,R0=0;for(let E2=0;E2<9;E2++)g.probe[E2].set(0,0,0);let f0=0,h0=0,k0=0,G0=0,P0=0,F0=0,W0=0,Q0=0,o2=0,E0=0;n0.sort(lt0);const K0=_0!==!0?Math.PI:1;for(let E2=0,P2=n0.length;E2<P2;E2++){const p2=n0[E2],_2=p2.color,M2=p2.intensity,F2=p2.distance,N2=p2.shadow&&p2.shadow.map?p2.shadow.map.texture:null;if(p2.isAmbientLight)c0+=_2.r*M2*K0,g0+=_2.g*M2*K0,R0+=_2.b*M2*K0;else if(p2.isLightProbe)for(let L2=0;L2<9;L2++)g.probe[L2].addScaledVector(p2.sh.coefficients[L2],M2);else if(p2.isDirectionalLight){const L2=y.get(p2);if(L2.color.copy(p2.color).multiplyScalar(p2.intensity*K0),p2.castShadow){const j2=p2.shadow,O2=w.get(p2);O2.shadowBias=j2.bias,O2.shadowNormalBias=j2.normalBias,O2.shadowRadius=j2.radius,O2.shadowMapSize=j2.mapSize,g.directionalShadow[f0]=O2,g.directionalShadowMap[f0]=N2,g.directionalShadowMatrix[f0]=p2.shadow.matrix,F0++}g.directional[f0]=L2,f0++}else if(p2.isSpotLight){const L2=y.get(p2);L2.position.setFromMatrixPosition(p2.matrixWorld),L2.color.copy(_2).multiplyScalar(M2*K0),L2.distance=F2,L2.coneCos=Math.cos(p2.angle),L2.penumbraCos=Math.cos(p2.angle*(1-p2.penumbra)),L2.decay=p2.decay,g.spot[k0]=L2;const j2=p2.shadow;if(p2.map&&(g.spotLightMap[o2]=p2.map,o2++,j2.updateMatrices(p2),p2.castShadow&&E0++),g.spotLightMatrix[k0]=j2.matrix,p2.castShadow){const O2=w.get(p2);O2.shadowBias=j2.bias,O2.shadowNormalBias=j2.normalBias,O2.shadowRadius=j2.radius,O2.shadowMapSize=j2.mapSize,g.spotShadow[k0]=O2,g.spotShadowMap[k0]=N2,Q0++}k0++}else if(p2.isRectAreaLight){const L2=y.get(p2);L2.color.copy(_2).multiplyScalar(M2),L2.halfWidth.set(p2.width*.5,0,0),L2.halfHeight.set(0,p2.height*.5,0),g.rectArea[G0]=L2,G0++}else if(p2.isPointLight){const L2=y.get(p2);if(L2.color.copy(p2.color).multiplyScalar(p2.intensity*K0),L2.distance=p2.distance,L2.decay=p2.decay,p2.castShadow){const j2=p2.shadow,O2=w.get(p2);O2.shadowBias=j2.bias,O2.shadowNormalBias=j2.normalBias,O2.shadowRadius=j2.radius,O2.shadowMapSize=j2.mapSize,O2.shadowCameraNear=j2.camera.near,O2.shadowCameraFar=j2.camera.far,g.pointShadow[h0]=O2,g.pointShadowMap[h0]=N2,g.pointShadowMatrix[h0]=p2.shadow.matrix,W0++}g.point[h0]=L2,h0++}else if(p2.isHemisphereLight){const L2=y.get(p2);L2.skyColor.copy(p2.color).multiplyScalar(M2*K0),L2.groundColor.copy(p2.groundColor).multiplyScalar(M2*K0),g.hemi[P0]=L2,P0++}}G0>0&&(u.isWebGL2||q.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=Y2.LTC_FLOAT_1,g.rectAreaLTC2=Y2.LTC_FLOAT_2):q.has("OES_texture_half_float_linear")===!0?(g.rectAreaLTC1=Y2.LTC_HALF_1,g.rectAreaLTC2=Y2.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),g.ambient[0]=c0,g.ambient[1]=g0,g.ambient[2]=R0;const l2=g.hash;(l2.directionalLength!==f0||l2.pointLength!==h0||l2.spotLength!==k0||l2.rectAreaLength!==G0||l2.hemiLength!==P0||l2.numDirectionalShadows!==F0||l2.numPointShadows!==W0||l2.numSpotShadows!==Q0||l2.numSpotMaps!==o2)&&(g.directional.length=f0,g.spot.length=k0,g.rectArea.length=G0,g.point.length=h0,g.hemi.length=P0,g.directionalShadow.length=F0,g.directionalShadowMap.length=F0,g.pointShadow.length=W0,g.pointShadowMap.length=W0,g.spotShadow.length=Q0,g.spotShadowMap.length=Q0,g.directionalShadowMatrix.length=F0,g.pointShadowMatrix.length=W0,g.spotLightMatrix.length=Q0+o2-E0,g.spotLightMap.length=o2,g.numSpotLightShadowsWithMaps=E0,l2.directionalLength=f0,l2.pointLength=h0,l2.spotLength=k0,l2.rectAreaLength=G0,l2.hemiLength=P0,l2.numDirectionalShadows=F0,l2.numPointShadows=W0,l2.numSpotShadows=Q0,l2.numSpotMaps=o2,g.version=ct0++)}function Q(n0,_0){let c0=0,g0=0,R0=0,f0=0,h0=0;const k0=_0.matrixWorldInverse;for(let G0=0,P0=n0.length;G0<P0;G0++){const F0=n0[G0];if(F0.isDirectionalLight){const W0=g.directional[c0];W0.direction.setFromMatrixPosition(F0.matrixWorld),O.setFromMatrixPosition(F0.target.matrixWorld),W0.direction.sub(O),W0.direction.transformDirection(k0),c0++}else if(F0.isSpotLight){const W0=g.spot[R0];W0.position.setFromMatrixPosition(F0.matrixWorld),W0.position.applyMatrix4(k0),W0.direction.setFromMatrixPosition(F0.matrixWorld),O.setFromMatrixPosition(F0.target.matrixWorld),W0.direction.sub(O),W0.direction.transformDirection(k0),R0++}else if(F0.isRectAreaLight){const W0=g.rectArea[f0];W0.position.setFromMatrixPosition(F0.matrixWorld),W0.position.applyMatrix4(k0),z.identity(),V.copy(F0.matrixWorld),V.premultiply(k0),z.extractRotation(V),W0.halfWidth.set(F0.width*.5,0,0),W0.halfHeight.set(0,F0.height*.5,0),W0.halfWidth.applyMatrix4(z),W0.halfHeight.applyMatrix4(z),f0++}else if(F0.isPointLight){const W0=g.point[g0];W0.position.setFromMatrixPosition(F0.matrixWorld),W0.position.applyMatrix4(k0),g0++}else if(F0.isHemisphereLight){const W0=g.hemi[h0];W0.direction.setFromMatrixPosition(F0.matrixWorld),W0.direction.transformDirection(k0),h0++}}}return{setup:K,setupView:Q,state:g}}function Q8(q,u){const y=new at0(q,u),w=[],g=[];function O(){w.length=0,g.length=0}function V(_0){w.push(_0)}function z(_0){g.push(_0)}function K(_0){y.setup(w,_0)}function Q(_0){y.setupView(w,_0)}return{init:O,state:{lightsArray:w,shadowsArray:g,lights:y},setupLights:K,setupLightsView:Q,pushLight:V,pushShadow:z}}function pt0(q,u){let y=new WeakMap;function w(O,V=0){const z=y.get(O);let K;return z===void 0?(K=new Q8(q,u),y.set(O,[K])):V>=z.length?(K=new Q8(q,u),z.push(K)):K=z[V],K}function g(){y=new WeakMap}return{get:w,dispose:g}}class ut0 extends jn{constructor(u){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pJ,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(u)}copy(u){return super.copy(u),this.depthPacking=u.depthPacking,this.map=u.map,this.alphaMap=u.alphaMap,this.displacementMap=u.displacementMap,this.displacementScale=u.displacementScale,this.displacementBias=u.displacementBias,this.wireframe=u.wireframe,this.wireframeLinewidth=u.wireframeLinewidth,this}}class ft0 extends jn{constructor(u){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new t2,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(u)}copy(u){return super.copy(u),this.referencePosition.copy(u.referencePosition),this.nearDistance=u.nearDistance,this.farDistance=u.farDistance,this.map=u.map,this.alphaMap=u.alphaMap,this.displacementMap=u.displacementMap,this.displacementScale=u.displacementScale,this.displacementBias=u.displacementBias,this}}const ht0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mt0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
If this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.`,i0="abort("+m+") at "+Q2()+k;throw Oc&&Oc.forEach(function(x){i0=x(i0,m)}),i0}if(g.abort=g.abort=Dn,g.preInit)for(typeof g.preInit=="function"&&(g.preInit=[g.preInit]);g.preInit.length>0;)g.preInit.pop()();var Fc=!0;g.noInitialRun&&(Fc=!1),g.noExitRuntime=!0,P_();function Me(){}Me.prototype=Object.create(Me.prototype),Me.prototype.constructor=Me,Me.prototype.__class__=Me,Me.__cache__={},g.WrapperObject=Me;function B2(m){return(m||Me).__cache__}g.getCache=B2;function V2(m,k){var i0=B2(k),x=i0[m];return x||(x=Object.create((k||Me).prototype),x.ptr=m,i0[m]=x)}g.wrapPointer=V2;function mx(m,k){return V2(m.ptr,k)}g.castObject=mx,g.NULL=V2(0);function dx(m){if(!m.__destroy__)throw"Error: Cannot destroy object. (Did you create it yourself?)";m.__destroy__(),delete B2(m.__class__)[m.ptr]}g.destroy=dx;function yx(m,k){return m.ptr===k.ptr}g.compare=yx;function vx(m){return m.ptr}g.getPointer=vx;function gx(m){return m.__class__}g.getClass=gx;function Rt(){throw"cannot construct a btCollisionShape, no constructor in IDL"}Rt.prototype=Object.create(Me.prototype),Rt.prototype.constructor=Rt,Rt.prototype.__class__=Rt,Rt.__cache__={},g.btCollisionShape=Rt,Rt.prototype.setLocalScaling=Rt.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),km(k,m)},Rt.prototype.calculateLocalInertia=Rt.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),K3(i0,m,k)},Rt.prototype.__destroy__=Rt.prototype.__destroy__=function(){var m=this.ptr;w7(m)};function Se(){throw"cannot construct a btCollisionObject, no constructor in IDL"}Se.prototype=Object.create(Me.prototype),Se.prototype.constructor=Se,Se.prototype.__class__=Se,Se.__cache__={},g.btCollisionObject=Se,Se.prototype.setAnisotropicFriction=Se.prototype.setAnisotropicFriction=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),Gy(i0,m,k)},Se.prototype.getCollisionShape=Se.prototype.getCollisionShape=function(){var m=this.ptr;return V2(hy(m),Rt)},Se.prototype.setContactProcessingThreshold=Se.prototype.setContactProcessingThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),ym(k,m)},Se.prototype.setActivationState=Se.prototype.setActivationState=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),V3(k,m)},Se.prototype.forceActivationState=Se.prototype.forceActivationState=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Lg(k,m)},Se.prototype.activate=Se.prototype.activate=function(m){var k=this.ptr;if(m&&typeof m=="object"&&(m=m.ptr),m===void 0){ff(k);return}uf(k,m)},Se.prototype.isActive=Se.prototype.isActive=function(){var m=this.ptr;return!!xu(m)},Se.prototype.isKinematicObject=Se.prototype.isKinematicObject=function(){var m=this.ptr;return!!nf(m)},Se.prototype.setRestitution=Se.prototype.setRestitution=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),$d(k,m)},Se.prototype.setFriction=Se.prototype.setFriction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),xy(k,m)},Se.prototype.setRollingFriction=Se.prototype.setRollingFriction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Nm(k,m)},Se.prototype.getWorldTransform=Se.prototype.getWorldTransform=function(){var m=this.ptr;return V2(Ih(m),vt)},Se.prototype.getCollisionFlags=Se.prototype.getCollisionFlags=function(){var m=this.ptr;return _m(m)},Se.prototype.setCollisionFlags=Se.prototype.setCollisionFlags=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Kv(k,m)},Se.prototype.setWorldTransform=Se.prototype.setWorldTransform=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Ug(k,m)},Se.prototype.setCollisionShape=Se.prototype.setCollisionShape=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),x7(k,m)},Se.prototype.setCcdMotionThreshold=Se.prototype.setCcdMotionThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Rv(k,m)},Se.prototype.setCcdSweptSphereRadius=Se.prototype.setCcdSweptSphereRadius=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),eS(k,m)},Se.prototype.__destroy__=Se.prototype.__destroy__=function(){var m=this.ptr;N7(m)};function en(){throw"cannot construct a btConcaveShape, no constructor in IDL"}en.prototype=Object.create(Rt.prototype),en.prototype.constructor=en,en.prototype.__class__=en,en.__cache__={},g.btConcaveShape=en,en.prototype.setLocalScaling=en.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),O5(k,m)},en.prototype.calculateLocalInertia=en.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),_d(i0,m,k)},en.prototype.__destroy__=en.prototype.__destroy__=function(){var m=this.ptr;E5(m)};function Tt(){throw"cannot construct a btCollisionWorld, no constructor in IDL"}Tt.prototype=Object.create(Me.prototype),Tt.prototype.constructor=Tt,Tt.prototype.__class__=Tt,Tt.__cache__={},g.btCollisionWorld=Tt,Tt.prototype.getDispatcher=Tt.prototype.getDispatcher=function(){var m=this.ptr;return V2(Fm(m),Ui)},Tt.prototype.rayTest=Tt.prototype.rayTest=function(m,k,i0){var x=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),im(x,m,k,i0)},Tt.prototype.getPairCache=Tt.prototype.getPairCache=function(){var m=this.ptr;return V2(i7(m),Cn)},Tt.prototype.getDispatchInfo=Tt.prototype.getDispatchInfo=function(){var m=this.ptr;return V2(rm(m),ve)},Tt.prototype.addCollisionObject=Tt.prototype.addCollisionObject=function(m,k,i0){var x=this.ptr;if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),k===void 0){D9(x,m);return}if(i0===void 0){A9(x,m,k);return}E9(x,m,k,i0)},Tt.prototype.getBroadphase=Tt.prototype.getBroadphase=function(){var m=this.ptr;return V2(q5(m),Bn)},Tt.prototype.convexSweepTest=Tt.prototype.convexSweepTest=function(m,k,i0,x,Z){var e=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),Y3(e,m,k,i0,x,Z)},Tt.prototype.contactPairTest=Tt.prototype.contactPairTest=function(m,k,i0){var x=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),Qg(x,m,k,i0)},Tt.prototype.contactTest=Tt.prototype.contactTest=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),V9(i0,m,k)},Tt.prototype.__destroy__=Tt.prototype.__destroy__=function(){var m=this.ptr;zf(m)};function oi(){throw"cannot construct a btTypedConstraint, no constructor in IDL"}oi.prototype=Object.create(Me.prototype),oi.prototype.constructor=oi,oi.prototype.__class__=oi,oi.__cache__={},g.btTypedConstraint=oi,oi.prototype.enableFeedback=oi.prototype.enableFeedback=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),lv(k,m)},oi.prototype.getBreakingImpulseThreshold=oi.prototype.getBreakingImpulseThreshold=function(){var m=this.ptr;return Ny(m)},oi.prototype.setBreakingImpulseThreshold=oi.prototype.setBreakingImpulseThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Eu(k,m)},oi.prototype.__destroy__=oi.prototype.__destroy__=function(){var m=this.ptr;d9(m)};function ai(m,k){m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),this.ptr=cv(m,k),B2(ai)[this.ptr]=this}ai.prototype=Object.create(Rt.prototype),ai.prototype.constructor=ai,ai.prototype.__class__=ai,ai.__cache__={},g.btCapsuleShape=ai,ai.prototype.setMargin=ai.prototype.setMargin=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),B9(k,m)},ai.prototype.getMargin=ai.prototype.getMargin=function(){var m=this.ptr;return Ov(m)},ai.prototype.setLocalScaling=ai.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),pv(k,m)},ai.prototype.calculateLocalInertia=ai.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),gg(i0,m,k)},ai.prototype.__destroy__=ai.prototype.__destroy__=function(){var m=this.ptr;pf(m)};function kt(m,k,i0,x,Z){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),x===void 0){this.ptr=Yf(m,k,i0),B2(kt)[this.ptr]=this;return}if(Z===void 0){this.ptr=_emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_4(m,k,i0,x),B2(kt)[this.ptr]=this;return}this.ptr=Zf(m,k,i0,x,Z),B2(kt)[this.ptr]=this}kt.prototype=Object.create(oi.prototype),kt.prototype.constructor=kt,kt.prototype.__class__=kt,kt.__cache__={},g.btGeneric6DofConstraint=kt,kt.prototype.setLinearLowerLimit=kt.prototype.setLinearLowerLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),zC(k,m)},kt.prototype.setLinearUpperLimit=kt.prototype.setLinearUpperLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),dd(k,m)},kt.prototype.setAngularLowerLimit=kt.prototype.setAngularLowerLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),mC(k,m)},kt.prototype.setAngularUpperLimit=kt.prototype.setAngularUpperLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),I3(k,m)},kt.prototype.enableFeedback=kt.prototype.enableFeedback=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),gu(k,m)},kt.prototype.getBreakingImpulseThreshold=kt.prototype.getBreakingImpulseThreshold=function(){var m=this.ptr;return Og(m)},kt.prototype.setBreakingImpulseThreshold=kt.prototype.setBreakingImpulseThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),s7(k,m)},kt.prototype.__destroy__=kt.prototype.__destroy__=function(){var m=this.ptr;IC(m)};function $n(){throw"cannot construct a btStridingMeshInterface, no constructor in IDL"}$n.prototype=Object.create(Me.prototype),$n.prototype.constructor=$n,$n.prototype.__class__=$n,$n.__cache__={},g.btStridingMeshInterface=$n,$n.prototype.__destroy__=$n.prototype.__destroy__=function(){var m=this.ptr;Wg(m)};function jt(){throw"cannot construct a ConvexResultCallback, no constructor in IDL"}jt.prototype=Object.create(Me.prototype),jt.prototype.constructor=jt,jt.prototype.__class__=jt,jt.__cache__={},g.ConvexResultCallback=jt,jt.prototype.hasHit=jt.prototype.hasHit=function(){var m=this.ptr;return!!X3(m)},jt.prototype.get_m_collisionFilterGroup=jt.prototype.get_m_collisionFilterGroup=function(){var m=this.ptr;return r9(m)},jt.prototype.set_m_collisionFilterGroup=jt.prototype.set_m_collisionFilterGroup=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),jy(k,m)},jt.prototype.get_m_collisionFilterMask=jt.prototype.get_m_collisionFilterMask=function(){var m=this.ptr;return vv(m)},jt.prototype.set_m_collisionFilterMask=jt.prototype.set_m_collisionFilterMask=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),CC(k,m)},jt.prototype.get_m_closestHitFraction=jt.prototype.get_m_closestHitFraction=function(){var m=this.ptr;return M7(m)},jt.prototype.set_m_closestHitFraction=jt.prototype.set_m_closestHitFraction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),mv(k,m)},jt.prototype.__destroy__=jt.prototype.__destroy__=function(){var m=this.ptr;fm(m)};function tn(){throw"cannot construct a btMotionState, no constructor in IDL"}tn.prototype=Object.create(Me.prototype),tn.prototype.constructor=tn,tn.prototype.__class__=tn,tn.__cache__={},g.btMotionState=tn,tn.prototype.getWorldTransform=tn.prototype.getWorldTransform=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),_y(k,m)},tn.prototype.setWorldTransform=tn.prototype.setWorldTransform=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),em(k,m)},tn.prototype.__destroy__=tn.prototype.__destroy__=function(){var m=this.ptr;bv(m)};function Hi(m,k){m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),this.ptr=h7(m,k),B2(Hi)[this.ptr]=this}Hi.prototype=Object.create(Rt.prototype),Hi.prototype.constructor=Hi,Hi.prototype.__class__=Hi,Hi.__cache__={},g.btConeShape=Hi,Hi.prototype.setLocalScaling=Hi.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),S7(k,m)},Hi.prototype.calculateLocalInertia=Hi.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),vC(i0,m,k)},Hi.prototype.__destroy__=Hi.prototype.__destroy__=function(){var m=this.ptr;kS(m)};function fn(){throw"cannot construct a btConvexShape, no constructor in IDL"}fn.prototype=Object.create(Rt.prototype),fn.prototype.constructor=fn,fn.prototype.__class__=fn,fn.__cache__={},g.btConvexShape=fn,fn.prototype.setLocalScaling=fn.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),ud(k,m)},fn.prototype.calculateLocalInertia=fn.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),GC(i0,m,k)},fn.prototype.__destroy__=fn.prototype.__destroy__=function(){var m=this.ptr;Zd(m)};function On(){throw"cannot construct a ContactResultCallback, no constructor in IDL"}On.prototype=Object.create(Me.prototype),On.prototype.constructor=On,On.prototype.__class__=On,On.__cache__={},g.ContactResultCallback=On,On.prototype.addSingleResult=On.prototype.addSingleResult=function(m,k,i0,x,Z,e,d2){var T0=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),e&&typeof e=="object"&&(e=e.ptr),d2&&typeof d2=="object"&&(d2=d2.ptr),Of(T0,m,k,i0,x,Z,e,d2)},On.prototype.__destroy__=On.prototype.__destroy__=function(){var m=this.ptr;eC(m)};function hn(){throw"cannot construct a btTriangleMeshShape, no constructor in IDL"}hn.prototype=Object.create(en.prototype),hn.prototype.constructor=hn,hn.prototype.__class__=hn,hn.__cache__={},g.btTriangleMeshShape=hn,hn.prototype.setLocalScaling=hn.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),hv(k,m)},hn.prototype.calculateLocalInertia=hn.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),fd(i0,m,k)},hn.prototype.__destroy__=hn.prototype.__destroy__=function(){var m=this.ptr;_C(m)};function Ui(){throw"cannot construct a btDispatcher, no constructor in IDL"}Ui.prototype=Object.create(Me.prototype),Ui.prototype.constructor=Ui,Ui.prototype.__class__=Ui,Ui.__cache__={},g.btDispatcher=Ui,Ui.prototype.getNumManifolds=Ui.prototype.getNumManifolds=function(){var m=this.ptr;return qg(m)},Ui.prototype.getManifoldByIndexInternal=Ui.prototype.getManifoldByIndexInternal=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(tg(k,m),fi)},Ui.prototype.__destroy__=Ui.prototype.__destroy__=function(){var m=this.ptr;bd(m)};function _t(){throw"cannot construct a btDynamicsWorld, no constructor in IDL"}_t.prototype=Object.create(Tt.prototype),_t.prototype.constructor=_t,_t.prototype.__class__=_t,_t.__cache__={},g.btDynamicsWorld=_t,_t.prototype.addAction=_t.prototype.addAction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),cS(k,m)},_t.prototype.removeAction=_t.prototype.removeAction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),lC(k,m)},_t.prototype.getSolverInfo=_t.prototype.getSolverInfo=function(){var m=this.ptr;return V2(cy(m),vi)},_t.prototype.getDispatcher=_t.prototype.getDispatcher=function(){var m=this.ptr;return V2(Hm(m),Ui)},_t.prototype.rayTest=_t.prototype.rayTest=function(m,k,i0){var x=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),$u(x,m,k,i0)},_t.prototype.getPairCache=_t.prototype.getPairCache=function(){var m=this.ptr;return V2(KS(m),Cn)},_t.prototype.getDispatchInfo=_t.prototype.getDispatchInfo=function(){var m=this.ptr;return V2(n3(m),ve)},_t.prototype.addCollisionObject=_t.prototype.addCollisionObject=function(m,k,i0){var x=this.ptr;if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),k===void 0){Z9(x,m);return}if(i0===void 0){Q9(x,m,k);return}f3(x,m,k,i0)},_t.prototype.getBroadphase=_t.prototype.getBroadphase=function(){var m=this.ptr;return V2(Af(m),Bn)},_t.prototype.convexSweepTest=_t.prototype.convexSweepTest=function(m,k,i0,x,Z){var e=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),LS(e,m,k,i0,x,Z)},_t.prototype.contactPairTest=_t.prototype.contactPairTest=function(m,k,i0){var x=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),t7(x,m,k,i0)},_t.prototype.contactTest=_t.prototype.contactTest=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),Hh(i0,m,k)},_t.prototype.__destroy__=_t.prototype.__destroy__=function(){var m=this.ptr;a5(m)};function Ht(){throw"cannot construct a RayResultCallback, no constructor in IDL"}Ht.prototype=Object.create(Me.prototype),Ht.prototype.constructor=Ht,Ht.prototype.__class__=Ht,Ht.__cache__={},g.RayResultCallback=Ht,Ht.prototype.hasHit=Ht.prototype.hasHit=function(){var m=this.ptr;return!!vd(m)},Ht.prototype.get_m_collisionFilterGroup=Ht.prototype.get_m_collisionFilterGroup=function(){var m=this.ptr;return v7(m)},Ht.prototype.set_m_collisionFilterGroup=Ht.prototype.set_m_collisionFilterGroup=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Wm(k,m)},Ht.prototype.get_m_collisionFilterMask=Ht.prototype.get_m_collisionFilterMask=function(){var m=this.ptr;return Om(m)},Ht.prototype.set_m_collisionFilterMask=Ht.prototype.set_m_collisionFilterMask=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),a3(k,m)},Ht.prototype.get_m_collisionObject=Ht.prototype.get_m_collisionObject=function(){var m=this.ptr;return V2(j9(m),Se)},Ht.prototype.set_m_collisionObject=Ht.prototype.set_m_collisionObject=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),rS(k,m)},Ht.prototype.__destroy__=Ht.prototype.__destroy__=function(){var m=this.ptr;C5(m)};function Z2(m,k,i0){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),m===void 0){this.ptr=j7(),B2(Z2)[this.ptr]=this;return}if(k===void 0){this.ptr=_emscripten_bind_btVector3_btVector3_1(m),B2(Z2)[this.ptr]=this;return}if(i0===void 0){this.ptr=_emscripten_bind_btVector3_btVector3_2(m,k),B2(Z2)[this.ptr]=this;return}this.ptr=V7(m,k,i0),B2(Z2)[this.ptr]=this}Z2.prototype=Object.create(Me.prototype),Z2.prototype.constructor=Z2,Z2.prototype.__class__=Z2,Z2.__cache__={},g.btVector3=Z2,Z2.prototype.length=Z2.prototype.length=function(){var m=this.ptr;return s3(m)},Z2.prototype.x=Z2.prototype.x=function(){var m=this.ptr;return uy(m)},Z2.prototype.y=Z2.prototype.y=function(){var m=this.ptr;return Cg(m)},Z2.prototype.z=Z2.prototype.z=function(){var m=this.ptr;return b7(m)},Z2.prototype.setX=Z2.prototype.setX=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Cf(k,m)},Z2.prototype.setY=Z2.prototype.setY=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),p5(k,m)},Z2.prototype.setZ=Z2.prototype.setZ=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Rf(k,m)},Z2.prototype.setValue=Z2.prototype.setValue=function(m,k,i0){var x=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),Ty(x,m,k,i0)},Z2.prototype.normalize=Z2.prototype.normalize=function(){var m=this.ptr;v5(m)},Z2.prototype.dot=Z2.prototype.dot=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),e5(k,m)},Z2.prototype.op_mul=Z2.prototype.op_mul=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(Ju(k,m),Z2)},Z2.prototype.op_add=Z2.prototype.op_add=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(dv(k,m),Z2)},Z2.prototype.op_sub=Z2.prototype.op_sub=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(W3(k,m),Z2)},Z2.prototype.__destroy__=Z2.prototype.__destroy__=function(){var m=this.ptr;iy(m)};function e1(){throw"cannot construct a btVehicleRaycaster, no constructor in IDL"}e1.prototype=Object.create(Me.prototype),e1.prototype.constructor=e1,e1.prototype.__class__=e1,e1.__cache__={},g.btVehicleRaycaster=e1,e1.prototype.__destroy__=e1.prototype.__destroy__=function(){var m=this.ptr;Wh(m)};function Te(){this.ptr=Zh(),B2(Te)[this.ptr]=this}Te.prototype=Object.create(Se.prototype),Te.prototype.constructor=Te,Te.prototype.__class__=Te,Te.__cache__={},g.btGhostObject=Te,Te.prototype.getNumOverlappingObjects=Te.prototype.getNumOverlappingObjects=function(){var m=this.ptr;return By(m)},Te.prototype.getOverlappingObject=Te.prototype.getOverlappingObject=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(xS(k,m),Se)},Te.prototype.setAnisotropicFriction=Te.prototype.setAnisotropicFriction=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),ov(i0,m,k)},Te.prototype.getCollisionShape=Te.prototype.getCollisionShape=function(){var m=this.ptr;return V2(Wy(m),Rt)},Te.prototype.setContactProcessingThreshold=Te.prototype.setContactProcessingThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),H5(k,m)},Te.prototype.setActivationState=Te.prototype.setActivationState=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Yg(k,m)},Te.prototype.forceActivationState=Te.prototype.forceActivationState=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),c7(k,m)},Te.prototype.activate=Te.prototype.activate=function(m){var k=this.ptr;if(m&&typeof m=="object"&&(m=m.ptr),m===void 0){av(k);return}qy(k,m)},Te.prototype.isActive=Te.prototype.isActive=function(){var m=this.ptr;return!!d5(m)},Te.prototype.isKinematicObject=Te.prototype.isKinematicObject=function(){var m=this.ptr;return!!lf(m)},Te.prototype.setRestitution=Te.prototype.setRestitution=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Cy(k,m)},Te.prototype.setFriction=Te.prototype.setFriction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),uh(k,m)},Te.prototype.setRollingFriction=Te.prototype.setRollingFriction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Ed(k,m)},Te.prototype.getWorldTransform=Te.prototype.getWorldTransform=function(){var m=this.ptr;return V2(Gv(m),vt)},Te.prototype.getCollisionFlags=Te.prototype.getCollisionFlags=function(){var m=this.ptr;return Dy(m)},Te.prototype.setCollisionFlags=Te.prototype.setCollisionFlags=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),qm(k,m)},Te.prototype.setWorldTransform=Te.prototype.setWorldTransform=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),vh(k,m)},Te.prototype.setCollisionShape=Te.prototype.setCollisionShape=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Tg(k,m)},Te.prototype.setCcdMotionThreshold=Te.prototype.setCcdMotionThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),vm(k,m)},Te.prototype.setCcdSweptSphereRadius=Te.prototype.setCcdSweptSphereRadius=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),cg(k,m)},Te.prototype.__destroy__=Te.prototype.__destroy__=function(){var m=this.ptr;j5(m)};function Ft(){throw"cannot construct a btQuadWord, no constructor in IDL"}Ft.prototype=Object.create(Me.prototype),Ft.prototype.constructor=Ft,Ft.prototype.__class__=Ft,Ft.__cache__={},g.btQuadWord=Ft,Ft.prototype.x=Ft.prototype.x=function(){var m=this.ptr;return tf(m)},Ft.prototype.y=Ft.prototype.y=function(){var m=this.ptr;return Ph(m)},Ft.prototype.z=Ft.prototype.z=function(){var m=this.ptr;return Nu(m)},Ft.prototype.w=Ft.prototype.w=function(){var m=this.ptr;return Vh(m)},Ft.prototype.setX=Ft.prototype.setX=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),h5(k,m)},Ft.prototype.setY=Ft.prototype.setY=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Lf(k,m)},Ft.prototype.setZ=Ft.prototype.setZ=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Av(k,m)},Ft.prototype.setW=Ft.prototype.setW=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),S3(k,m)},Ft.prototype.__destroy__=Ft.prototype.__destroy__=function(){var m=this.ptr;$7(m)};function pi(m){m&&typeof m=="object"&&(m=m.ptr),this.ptr=ty(m),B2(pi)[this.ptr]=this}pi.prototype=Object.create(Rt.prototype),pi.prototype.constructor=pi,pi.prototype.__class__=pi,pi.__cache__={},g.btCylinderShape=pi,pi.prototype.setMargin=pi.prototype.setMargin=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Uf(k,m)},pi.prototype.getMargin=pi.prototype.getMargin=function(){var m=this.ptr;return Fv(m)},pi.prototype.setLocalScaling=pi.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),tm(k,m)},pi.prototype.calculateLocalInertia=pi.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),td(i0,m,k)},pi.prototype.__destroy__=pi.prototype.__destroy__=function(){var m=this.ptr;vu(m)};function qn(){throw"cannot construct a btActionInterface, no constructor in IDL"}qn.prototype=Object.create(Me.prototype),qn.prototype.constructor=qn,qn.prototype.__class__=qn,qn.__cache__={},g.btActionInterface=qn,qn.prototype.__destroy__=qn.prototype.__destroy__=function(){var m=this.ptr;U9(m)};function qi(){throw"cannot construct a btMatrix3x3, no constructor in IDL"}qi.prototype=Object.create(Me.prototype),qi.prototype.constructor=qi,qi.prototype.__class__=qi,qi.__cache__={},g.btMatrix3x3=qi,qi.prototype.setEulerZYX=qi.prototype.setEulerZYX=function(m,k,i0){var x=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),Em(x,m,k,i0)},qi.prototype.getRotation=qi.prototype.getRotation=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),bm(k,m)},qi.prototype.getRow=qi.prototype.getRow=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(m9(k,m),Z2)},qi.prototype.__destroy__=qi.prototype.__destroy__=function(){var m=this.ptr;b3(m)};function Fn(){this.ptr=l7(),B2(Fn)[this.ptr]=this}Fn.prototype=Object.create(On.prototype),Fn.prototype.constructor=Fn,Fn.prototype.__class__=Fn,Fn.__cache__={},g.ConcreteContactResultCallback=Fn,Fn.prototype.addSingleResult=Fn.prototype.addSingleResult=function(m,k,i0,x,Z,e,d2){var T0=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),e&&typeof e=="object"&&(e=e.ptr),d2&&typeof d2=="object"&&(d2=d2.ptr),Y7(T0,m,k,i0,x,Z,e,d2)},Fn.prototype.__destroy__=Fn.prototype.__destroy__=function(){var m=this.ptr;O7(m)};function nn(m,k,i0){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),i0===void 0){this.ptr=xg(m,k),B2(nn)[this.ptr]=this;return}this.ptr=wg(m,k,i0),B2(nn)[this.ptr]=this}nn.prototype=Object.create(hn.prototype),nn.prototype.constructor=nn,nn.prototype.__class__=nn,nn.__cache__={},g.btBvhTriangleMeshShape=nn,nn.prototype.setLocalScaling=nn.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),t3(k,m)},nn.prototype.calculateLocalInertia=nn.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),Xh(i0,m,k)},nn.prototype.__destroy__=nn.prototype.__destroy__=function(){var m=this.ptr;RC(m)};function t1(){this.ptr=Ym(),B2(t1)[this.ptr]=this}t1.prototype=Object.create(Me.prototype),t1.prototype.constructor=t1,t1.prototype.__class__=t1,t1.__cache__={},g.btDbvtBroadphase=t1,t1.prototype.__destroy__=t1.prototype.__destroy__=function(){var m=this.ptr;_v(m)};function y1(){throw"cannot construct a VoidPtr, no constructor in IDL"}y1.prototype=Object.create(Me.prototype),y1.prototype.constructor=y1,y1.prototype.__class__=y1,y1.__cache__={},g.VoidPtr=y1,y1.prototype.__destroy__=y1.prototype.__destroy__=function(){var m=this.ptr;a7(m)};function i1(){this.ptr=G9(),B2(i1)[this.ptr]=this}i1.prototype=Object.create(Me.prototype),i1.prototype.constructor=i1,i1.prototype.__class__=i1,i1.__cache__={},g.btSequentialImpulseConstraintSolver=i1,i1.prototype.__destroy__=i1.prototype.__destroy__=function(){var m=this.ptr;wm(m)};function ve(){throw"cannot construct a btDispatcherInfo, no constructor in IDL"}ve.prototype=Object.create(Me.prototype),ve.prototype.constructor=ve,ve.prototype.__class__=ve,ve.__cache__={},g.btDispatcherInfo=ve,ve.prototype.get_m_timeStep=ve.prototype.get_m_timeStep=function(){var m=this.ptr;return jv(m)},ve.prototype.set_m_timeStep=ve.prototype.set_m_timeStep=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),z7(k,m)},ve.prototype.get_m_stepCount=ve.prototype.get_m_stepCount=function(){var m=this.ptr;return g3(m)},ve.prototype.set_m_stepCount=ve.prototype.set_m_stepCount=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),tC(k,m)},ve.prototype.get_m_dispatchFunc=ve.prototype.get_m_dispatchFunc=function(){var m=this.ptr;return T7(m)},ve.prototype.set_m_dispatchFunc=ve.prototype.set_m_dispatchFunc=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),ly(k,m)},ve.prototype.get_m_timeOfImpact=ve.prototype.get_m_timeOfImpact=function(){var m=this.ptr;return Pu(m)},ve.prototype.set_m_timeOfImpact=ve.prototype.set_m_timeOfImpact=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),df(k,m)},ve.prototype.get_m_useContinuous=ve.prototype.get_m_useContinuous=function(){var m=this.ptr;return!!Gd(m)},ve.prototype.set_m_useContinuous=ve.prototype.set_m_useContinuous=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Su(k,m)},ve.prototype.get_m_enableSatConvex=ve.prototype.get_m_enableSatConvex=function(){var m=this.ptr;return!!$S(m)},ve.prototype.set_m_enableSatConvex=ve.prototype.set_m_enableSatConvex=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),cm(k,m)},ve.prototype.get_m_enableSPU=ve.prototype.get_m_enableSPU=function(){var m=this.ptr;return!!Cu(m)},ve.prototype.set_m_enableSPU=ve.prototype.set_m_enableSPU=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),U3(k,m)},ve.prototype.get_m_useEpa=ve.prototype.get_m_useEpa=function(){var m=this.ptr;return!!F3(m)},ve.prototype.set_m_useEpa=ve.prototype.set_m_useEpa=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Bh(k,m)},ve.prototype.get_m_allowedCcdPenetration=ve.prototype.get_m_allowedCcdPenetration=function(){var m=this.ptr;return gm(m)},ve.prototype.set_m_allowedCcdPenetration=ve.prototype.set_m_allowedCcdPenetration=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Rg(k,m)},ve.prototype.get_m_useConvexConservativeDistanceUtil=ve.prototype.get_m_useConvexConservativeDistanceUtil=function(){var m=this.ptr;return!!Hd(m)},ve.prototype.set_m_useConvexConservativeDistanceUtil=ve.prototype.set_m_useConvexConservativeDistanceUtil=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),R3(k,m)},ve.prototype.get_m_convexConservativeDistanceThreshold=ve.prototype.get_m_convexConservativeDistanceThreshold=function(){var m=this.ptr;return Im(m)},ve.prototype.set_m_convexConservativeDistanceThreshold=ve.prototype.set_m_convexConservativeDistanceThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Wd(k,m)},ve.prototype.__destroy__=ve.prototype.__destroy__=function(){var m=this.ptr;Pv(m)};function v1(){throw"cannot construct a btCollisionConfiguration, no constructor in IDL"}v1.prototype=Object.create(Me.prototype),v1.prototype.constructor=v1,v1.prototype.__class__=v1,v1.__cache__={},g.btCollisionConfiguration=v1,v1.prototype.__destroy__=v1.prototype.__destroy__=function(){var m=this.ptr;Sf(m)};function An(m,k,i0,x,Z){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),i0===void 0){this.ptr=c5(m,k),B2(An)[this.ptr]=this;return}if(x===void 0){this.ptr=l5(m,k,i0),B2(An)[this.ptr]=this;return}if(Z===void 0){this.ptr=u5(m,k,i0,x),B2(An)[this.ptr]=this;return}this.ptr=f5(m,k,i0,x,Z),B2(An)[this.ptr]=this}An.prototype=Object.create(Me.prototype),An.prototype.constructor=An,An.prototype.__class__=An,An.__cache__={},g.btAxisSweep3=An,An.prototype.__destroy__=An.prototype.__destroy__=function(){var m=this.ptr;Du(m)};function Re(){this.ptr=Wf(),B2(Re)[this.ptr]=this}Re.prototype=Object.create(Te.prototype),Re.prototype.constructor=Re,Re.prototype.__class__=Re,Re.__cache__={},g.btPairCachingGhostObject=Re,Re.prototype.setAnisotropicFriction=Re.prototype.setAnisotropicFriction=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),zd(i0,m,k)},Re.prototype.getCollisionShape=Re.prototype.getCollisionShape=function(){var m=this.ptr;return V2(Gm(m),Rt)},Re.prototype.setContactProcessingThreshold=Re.prototype.setContactProcessingThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),hd(k,m)},Re.prototype.setActivationState=Re.prototype.setActivationState=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Rd(k,m)},Re.prototype.forceActivationState=Re.prototype.forceActivationState=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),y3(k,m)},Re.prototype.activate=Re.prototype.activate=function(m){var k=this.ptr;if(m&&typeof m=="object"&&(m=m.ptr),m===void 0){h3(k);return}m3(k,m)},Re.prototype.isActive=Re.prototype.isActive=function(){var m=this.ptr;return!!ux(m)},Re.prototype.isKinematicObject=Re.prototype.isKinematicObject=function(){var m=this.ptr;return!!Sv(m)},Re.prototype.setRestitution=Re.prototype.setRestitution=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),um(k,m)},Re.prototype.setFriction=Re.prototype.setFriction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Fh(k,m)},Re.prototype.setRollingFriction=Re.prototype.setRollingFriction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Dg(k,m)},Re.prototype.getWorldTransform=Re.prototype.getWorldTransform=function(){var m=this.ptr;return V2(fh(m),vt)},Re.prototype.getCollisionFlags=Re.prototype.getCollisionFlags=function(){var m=this.ptr;return pS(m)},Re.prototype.setCollisionFlags=Re.prototype.setCollisionFlags=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Jd(k,m)},Re.prototype.setWorldTransform=Re.prototype.setWorldTransform=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),og(k,m)},Re.prototype.setCollisionShape=Re.prototype.setCollisionShape=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k7(k,m)},Re.prototype.setCcdMotionThreshold=Re.prototype.setCcdMotionThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Ry(k,m)},Re.prototype.setCcdSweptSphereRadius=Re.prototype.setCcdSweptSphereRadius=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),id(k,m)},Re.prototype.getNumOverlappingObjects=Re.prototype.getNumOverlappingObjects=function(){var m=this.ptr;return o5(m)},Re.prototype.getOverlappingObject=Re.prototype.getOverlappingObject=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(fg(k,m),Se)},Re.prototype.__destroy__=Re.prototype.__destroy__=function(){var m=this.ptr;u3(m)};function me(m,k,i0,x){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),x===void 0){this.ptr=fy(m,k,i0),B2(me)[this.ptr]=this;return}this.ptr=my(m,k,i0,x),B2(me)[this.ptr]=this}me.prototype=Object.create(Me.prototype),me.prototype.constructor=me,me.prototype.__class__=me,me.__cache__={},g.btRigidBodyConstructionInfo=me,me.prototype.get_m_linearDamping=me.prototype.get_m_linearDamping=function(){var m=this.ptr;return jg(m)},me.prototype.set_m_linearDamping=me.prototype.set_m_linearDamping=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),uS(k,m)},me.prototype.get_m_angularDamping=me.prototype.get_m_angularDamping=function(){var m=this.ptr;return Hu(m)},me.prototype.set_m_angularDamping=me.prototype.set_m_angularDamping=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),C3(k,m)},me.prototype.get_m_friction=me.prototype.get_m_friction=function(){var m=this.ptr;return x3(m)},me.prototype.set_m_friction=me.prototype.set_m_friction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),H7(k,m)},me.prototype.get_m_rollingFriction=me.prototype.get_m_rollingFriction=function(){var m=this.ptr;return R7(m)},me.prototype.set_m_rollingFriction=me.prototype.set_m_rollingFriction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),yy(k,m)},me.prototype.get_m_restitution=me.prototype.get_m_restitution=function(){var m=this.ptr;return aC(m)},me.prototype.set_m_restitution=me.prototype.set_m_restitution=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Ff(k,m)},me.prototype.get_m_linearSleepingThreshold=me.prototype.get_m_linearSleepingThreshold=function(){var m=this.ptr;return bg(m)},me.prototype.set_m_linearSleepingThreshold=me.prototype.set_m_linearSleepingThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),G7(k,m)},me.prototype.get_m_angularSleepingThreshold=me.prototype.get_m_angularSleepingThreshold=function(){var m=this.ptr;return Ev(m)},me.prototype.set_m_angularSleepingThreshold=me.prototype.set_m_angularSleepingThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),O3(k,m)},me.prototype.get_m_additionalDamping=me.prototype.get_m_additionalDamping=function(){var m=this.ptr;return!!Qm(m)},me.prototype.set_m_additionalDamping=me.prototype.set_m_additionalDamping=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),fS(k,m)},me.prototype.get_m_additionalDampingFactor=me.prototype.get_m_additionalDampingFactor=function(){var m=this.ptr;return uv(m)},me.prototype.set_m_additionalDampingFactor=me.prototype.set_m_additionalDampingFactor=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),mm(k,m)},me.prototype.get_m_additionalLinearDampingThresholdSqr=me.prototype.get_m_additionalLinearDampingThresholdSqr=function(){var m=this.ptr;return m5(m)},me.prototype.set_m_additionalLinearDampingThresholdSqr=me.prototype.set_m_additionalLinearDampingThresholdSqr=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Tm(k,m)},me.prototype.get_m_additionalAngularDampingThresholdSqr=me.prototype.get_m_additionalAngularDampingThresholdSqr=function(){var m=this.ptr;return Cd(m)},me.prototype.set_m_additionalAngularDampingThresholdSqr=me.prototype.set_m_additionalAngularDampingThresholdSqr=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),u9(k,m)},me.prototype.get_m_additionalAngularDampingFactor=me.prototype.get_m_additionalAngularDampingFactor=function(){var m=this.ptr;return Cm(m)},me.prototype.set_m_additionalAngularDampingFactor=me.prototype.set_m_additionalAngularDampingFactor=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Qh(k,m)},me.prototype.__destroy__=me.prototype.__destroy__=function(){var m=this.ptr;hg(m)};function Fe(){throw"cannot construct a RaycastInfo, no constructor in IDL"}Fe.prototype=Object.create(Me.prototype),Fe.prototype.constructor=Fe,Fe.prototype.__class__=Fe,Fe.__cache__={},g.RaycastInfo=Fe,Fe.prototype.get_m_contactNormalWS=Fe.prototype.get_m_contactNormalWS=function(){var m=this.ptr;return V2(S5(m),Z2)},Fe.prototype.set_m_contactNormalWS=Fe.prototype.set_m_contactNormalWS=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),p7(k,m)},Fe.prototype.get_m_contactPointWS=Fe.prototype.get_m_contactPointWS=function(){var m=this.ptr;return V2(_h(m),Z2)},Fe.prototype.set_m_contactPointWS=Fe.prototype.set_m_contactPointWS=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),f7(k,m)},Fe.prototype.get_m_suspensionLength=Fe.prototype.get_m_suspensionLength=function(){var m=this.ptr;return ky(m)},Fe.prototype.set_m_suspensionLength=Fe.prototype.set_m_suspensionLength=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),xh(k,m)},Fe.prototype.get_m_hardPointWS=Fe.prototype.get_m_hardPointWS=function(){var m=this.ptr;return V2(Q7(m),Z2)},Fe.prototype.set_m_hardPointWS=Fe.prototype.set_m_hardPointWS=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),aS(k,m)},Fe.prototype.get_m_wheelDirectionWS=Fe.prototype.get_m_wheelDirectionWS=function(){var m=this.ptr;return V2(iv(m),Z2)},Fe.prototype.set_m_wheelDirectionWS=Fe.prototype.set_m_wheelDirectionWS=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),ku(k,m)},Fe.prototype.get_m_wheelAxleWS=Fe.prototype.get_m_wheelAxleWS=function(){var m=this.ptr;return V2(ju(m),Z2)},Fe.prototype.set_m_wheelAxleWS=Fe.prototype.set_m_wheelAxleWS=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),F7(k,m)},Fe.prototype.get_m_isInContact=Fe.prototype.get_m_isInContact=function(){var m=this.ptr;return!!P9(m)},Fe.prototype.set_m_isInContact=Fe.prototype.set_m_isInContact=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),bf(k,m)},Fe.prototype.get_m_groundObject=Fe.prototype.get_m_groundObject=function(){var m=this.ptr;return cd(m)},Fe.prototype.set_m_groundObject=Fe.prototype.set_m_groundObject=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Hy(k,m)},Fe.prototype.__destroy__=Fe.prototype.__destroy__=function(){var m=this.ptr;ny(m)};function nt(){throw"cannot construct a btManifoldPoint, no constructor in IDL"}nt.prototype=Object.create(Me.prototype),nt.prototype.constructor=nt,nt.prototype.__class__=nt,nt.__cache__={},g.btManifoldPoint=nt,nt.prototype.getPositionWorldOnA=nt.prototype.getPositionWorldOnA=function(){var m=this.ptr;return V2($g(m),Z2)},nt.prototype.getPositionWorldOnB=nt.prototype.getPositionWorldOnB=function(){var m=this.ptr;return V2(Xy(m),Z2)},nt.prototype.getDistance=nt.prototype.getDistance=function(){var m=this.ptr;return NS(m)},nt.prototype.get_m_localPointA=nt.prototype.get_m_localPointA=function(){var m=this.ptr;return V2(Vg(m),Z2)},nt.prototype.set_m_localPointA=nt.prototype.set_m_localPointA=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Jh(k,m)},nt.prototype.get_m_localPointB=nt.prototype.get_m_localPointB=function(){var m=this.ptr;return V2(YC(m),Z2)},nt.prototype.set_m_localPointB=nt.prototype.set_m_localPointB=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Tf(k,m)},nt.prototype.get_m_positionWorldOnB=nt.prototype.get_m_positionWorldOnB=function(){var m=this.ptr;return V2(ed(m),Z2)},nt.prototype.set_m_positionWorldOnB=nt.prototype.set_m_positionWorldOnB=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Mf(k,m)},nt.prototype.get_m_positionWorldOnA=nt.prototype.get_m_positionWorldOnA=function(){var m=this.ptr;return V2(Ky(m),Z2)},nt.prototype.set_m_positionWorldOnA=nt.prototype.set_m_positionWorldOnA=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),KC(k,m)},nt.prototype.get_m_normalWorldOnB=nt.prototype.get_m_normalWorldOnB=function(){var m=this.ptr;return V2(TC(m),Z2)},nt.prototype.set_m_normalWorldOnB=nt.prototype.set_m_normalWorldOnB=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),uC(k,m)},nt.prototype.__destroy__=nt.prototype.__destroy__=function(){var m=this.ptr;dy(m)};function Bn(){throw"cannot construct a btBroadphaseInterface, no constructor in IDL"}Bn.prototype=Object.create(Me.prototype),Bn.prototype.constructor=Bn,Bn.prototype.__class__=Bn,Bn.__cache__={},g.btBroadphaseInterface=Bn,Bn.prototype.__destroy__=Bn.prototype.__destroy__=function(){var m=this.ptr;K7(m)};function De(m,k,i0,x){m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),this.ptr=Mu(m,k,i0,x),B2(De)[this.ptr]=this}De.prototype=Object.create(_t.prototype),De.prototype.constructor=De,De.prototype.__class__=De,De.__cache__={},g.btDiscreteDynamicsWorld=De,De.prototype.setGravity=De.prototype.setGravity=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Ag(k,m)},De.prototype.getGravity=De.prototype.getGravity=function(){var m=this.ptr;return V2(q7(m),Z2)},De.prototype.addRigidBody=De.prototype.addRigidBody=function(m,k,i0){var x=this.ptr;if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),k===void 0){S9(x,m);return}if(i0===void 0){_emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_2(x,m,k);return}C9(x,m,k,i0)},De.prototype.removeRigidBody=De.prototype.removeRigidBody=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),gh(k,m)},De.prototype.addConstraint=De.prototype.addConstraint=function(m,k){var i0=this.ptr;if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),k===void 0){P3(i0,m);return}L3(i0,m,k)},De.prototype.removeConstraint=De.prototype.removeConstraint=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),AC(k,m)},De.prototype.stepSimulation=De.prototype.stepSimulation=function(m,k,i0){var x=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),k===void 0?Zu(x,m):i0===void 0?Qu(x,m,k):Yu(x,m,k,i0)},De.prototype.getDispatcher=De.prototype.getDispatcher=function(){var m=this.ptr;return V2(J9(m),Ui)},De.prototype.rayTest=De.prototype.rayTest=function(m,k,i0){var x=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),_x(x,m,k,i0)},De.prototype.getPairCache=De.prototype.getPairCache=function(){var m=this.ptr;return V2(Uv(m),Cn)},De.prototype.getDispatchInfo=De.prototype.getDispatchInfo=function(){var m=this.ptr;return V2(F5(m),ve)},De.prototype.addCollisionObject=De.prototype.addCollisionObject=function(m,k,i0){var x=this.ptr;if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),k===void 0){Yv(x,m);return}if(i0===void 0){Qv(x,m,k);return}Jv(x,m,k,i0)},De.prototype.getBroadphase=De.prototype.getBroadphase=function(){var m=this.ptr;return V2(wh(m),Bn)},De.prototype.convexSweepTest=De.prototype.convexSweepTest=function(m,k,i0,x,Z){var e=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),ZS(e,m,k,i0,x,Z)},De.prototype.contactPairTest=De.prototype.contactPairTest=function(m,k,i0){var x=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),QC(x,m,k,i0)},De.prototype.contactTest=De.prototype.contactTest=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),qh(i0,m,k)},De.prototype.addAction=De.prototype.addAction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Mh(k,m)},De.prototype.removeAction=De.prototype.removeAction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),M9(k,m)},De.prototype.getSolverInfo=De.prototype.getSolverInfo=function(){var m=this.ptr;return V2(Gf(m),vi)},De.prototype.__destroy__=De.prototype.__destroy__=function(){var m=this.ptr;Kd(m)};function rn(m,k){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),k===void 0){this.ptr=c3(m),B2(rn)[this.ptr]=this;return}this.ptr=_3(m,k),B2(rn)[this.ptr]=this}rn.prototype=Object.create(fn.prototype),rn.prototype.constructor=rn,rn.prototype.__class__=rn,rn.__cache__={},g.btConvexTriangleMeshShape=rn,rn.prototype.setLocalScaling=rn.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Ah(k,m)},rn.prototype.calculateLocalInertia=rn.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),Nv(i0,m,k)},rn.prototype.__destroy__=rn.prototype.__destroy__=function(){var m=this.ptr;eg(m)};function gt(m,k,i0,x){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),i0===void 0){this.ptr=ag(m,k),B2(gt)[this.ptr]=this;return}if(x===void 0){this.ptr=_emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_3(m,k,i0),B2(gt)[this.ptr]=this;return}this.ptr=lg(m,k,i0,x),B2(gt)[this.ptr]=this}gt.prototype=Object.create(oi.prototype),gt.prototype.constructor=gt,gt.prototype.__class__=gt,gt.__cache__={},g.btPoint2PointConstraint=gt,gt.prototype.setPivotA=gt.prototype.setPivotA=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),dg(k,m)},gt.prototype.setPivotB=gt.prototype.setPivotB=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),BS(k,m)},gt.prototype.getPivotInA=gt.prototype.getPivotInA=function(){var m=this.ptr;return V2(H9(m),Z2)},gt.prototype.getPivotInB=gt.prototype.getPivotInB=function(){var m=this.ptr;return V2(Iv(m),Z2)},gt.prototype.enableFeedback=gt.prototype.enableFeedback=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),s5(k,m)},gt.prototype.getBreakingImpulseThreshold=gt.prototype.getBreakingImpulseThreshold=function(){var m=this.ptr;return FC(m)},gt.prototype.setBreakingImpulseThreshold=gt.prototype.setBreakingImpulseThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),i3(k,m)},gt.prototype.get_m_setting=gt.prototype.get_m_setting=function(){var m=this.ptr;return V2(W9(m),Yt)},gt.prototype.set_m_setting=gt.prototype.set_m_setting=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Ld(k,m)},gt.prototype.__destroy__=gt.prototype.__destroy__=function(){var m=this.ptr;E3(m)};function Bt(m,k,i0,x,Z){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),x===void 0){this.ptr=ES(m,k,i0),B2(Bt)[this.ptr]=this;return}if(Z===void 0){this.ptr=_emscripten_bind_btSliderConstraint_btSliderConstraint_4(m,k,i0,x),B2(Bt)[this.ptr]=this;return}this.ptr=AS(m,k,i0,x,Z),B2(Bt)[this.ptr]=this}Bt.prototype=Object.create(oi.prototype),Bt.prototype.constructor=Bt,Bt.prototype.__class__=Bt,Bt.__cache__={},g.btSliderConstraint=Bt,Bt.prototype.setLowerLinLimit=Bt.prototype.setLowerLinLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),JC(k,m)},Bt.prototype.setUpperLinLimit=Bt.prototype.setUpperLinLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),D5(k,m)},Bt.prototype.setLowerAngLimit=Bt.prototype.setLowerAngLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),u7(k,m)},Bt.prototype.setUpperAngLimit=Bt.prototype.setUpperAngLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),e7(k,m)},Bt.prototype.enableFeedback=Bt.prototype.enableFeedback=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),US(k,m)},Bt.prototype.getBreakingImpulseThreshold=Bt.prototype.getBreakingImpulseThreshold=function(){var m=this.ptr;return hm(m)},Bt.prototype.setBreakingImpulseThreshold=Bt.prototype.setBreakingImpulseThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),lh(k,m)},Bt.prototype.__destroy__=Bt.prototype.__destroy__=function(){var m=this.ptr;PS(m)};function ct(m,k,i0,x){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),i0===void 0){this.ptr=A5(m,k),B2(ct)[this.ptr]=this;return}if(x===void 0){this.ptr=_emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_3(m,k,i0),B2(ct)[this.ptr]=this;return}this.ptr=I5(m,k,i0,x),B2(ct)[this.ptr]=this}ct.prototype=Object.create(oi.prototype),ct.prototype.constructor=ct,ct.prototype.__class__=ct,ct.__cache__={},g.btConeTwistConstraint=ct,ct.prototype.setLimit=ct.prototype.setLimit=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),Fg(i0,m,k)},ct.prototype.setAngularOnly=ct.prototype.setAngularOnly=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Sy(k,m)},ct.prototype.setDamping=ct.prototype.setDamping=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Nf(k,m)},ct.prototype.enableMotor=ct.prototype.enableMotor=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),lm(k,m)},ct.prototype.setMaxMotorImpulse=ct.prototype.setMaxMotorImpulse=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Km(k,m)},ct.prototype.setMaxMotorImpulseNormalized=ct.prototype.setMaxMotorImpulseNormalized=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Dh(k,m)},ct.prototype.setMotorTarget=ct.prototype.setMotorTarget=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),n7(k,m)},ct.prototype.setMotorTargetInConstraintSpace=ct.prototype.setMotorTargetInConstraintSpace=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),U7(k,m)},ct.prototype.enableFeedback=ct.prototype.enableFeedback=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),T5(k,m)},ct.prototype.getBreakingImpulseThreshold=ct.prototype.getBreakingImpulseThreshold=function(){var m=this.ptr;return hC(m)},ct.prototype.setBreakingImpulseThreshold=ct.prototype.setBreakingImpulseThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),L9(k,m)},ct.prototype.__destroy__=ct.prototype.__destroy__=function(){var m=this.ptr;J7(m)};function bn(m){if(m&&typeof m=="object"&&(m=m.ptr),m===void 0){this.ptr=pm(),B2(bn)[this.ptr]=this;return}this.ptr=Dv(m),B2(bn)[this.ptr]=this}bn.prototype=Object.create(Me.prototype),bn.prototype.constructor=bn,bn.prototype.__class__=bn,bn.__cache__={},g.btDefaultCollisionConfiguration=bn,bn.prototype.__destroy__=bn.prototype.__destroy__=function(){var m=this.ptr;wy(m)};function mn(m,k){m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),this.ptr=Jy(m,k),B2(mn)[this.ptr]=this}mn.prototype=Object.create(Hi.prototype),mn.prototype.constructor=mn,mn.prototype.__class__=mn,mn.__cache__={},g.btConeShapeZ=mn,mn.prototype.setLocalScaling=mn.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Td(k,m)},mn.prototype.calculateLocalInertia=mn.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),rh(i0,m,k)},mn.prototype.__destroy__=mn.prototype.__destroy__=function(){var m=this.ptr;XS(m)};function dn(m,k){m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),this.ptr=M5(m,k),B2(dn)[this.ptr]=this}dn.prototype=Object.create(Hi.prototype),dn.prototype.constructor=dn,dn.prototype.__class__=dn,dn.__cache__={},g.btConeShapeX=dn,dn.prototype.setLocalScaling=dn.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),B5(k,m)},dn.prototype.calculateLocalInertia=dn.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),ug(i0,m,k)},dn.prototype.__destroy__=dn.prototype.__destroy__=function(){var m=this.ptr;sm(m)};function yn(m,k){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),m===void 0){this.ptr=jC(),B2(yn)[this.ptr]=this;return}if(k===void 0){this.ptr=HC(m),B2(yn)[this.ptr]=this;return}this.ptr=qC(m,k),B2(yn)[this.ptr]=this}yn.prototype=Object.create($n.prototype),yn.prototype.constructor=yn,yn.prototype.__class__=yn,yn.__cache__={},g.btTriangleMesh=yn,yn.prototype.addTriangle=yn.prototype.addTriangle=function(m,k,i0,x){var Z=this.ptr;if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),x===void 0){SS(Z,m,k,i0);return}wS(Z,m,k,i0,x)},yn.prototype.__destroy__=yn.prototype.__destroy__=function(){var m=this.ptr;E7(m)};function ui(){this.ptr=G5(),B2(ui)[this.ptr]=this}ui.prototype=Object.create(Rt.prototype),ui.prototype.constructor=ui,ui.prototype.__class__=ui,ui.__cache__={},g.btConvexHullShape=ui,ui.prototype.addPoint=ui.prototype.addPoint=function(m,k){var i0=this.ptr;if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),k===void 0){PC(i0,m);return}OC(i0,m,k)},ui.prototype.setMargin=ui.prototype.setMargin=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),ih(k,m)},ui.prototype.getMargin=ui.prototype.getMargin=function(){var m=this.ptr;return Xu(m)},ui.prototype.setLocalScaling=ui.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Lm(k,m)},ui.prototype.calculateLocalInertia=ui.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),sh(i0,m,k)},ui.prototype.__destroy__=ui.prototype.__destroy__=function(){var m=this.ptr;Sh(m)};function fi(){this.ptr=yv(),B2(fi)[this.ptr]=this}fi.prototype=Object.create(Me.prototype),fi.prototype.constructor=fi,fi.prototype.__class__=fi,fi.__cache__={},g.btPersistentManifold=fi,fi.prototype.getBody0=fi.prototype.getBody0=function(){var m=this.ptr;return V2(w5(m),Se)},fi.prototype.getBody1=fi.prototype.getBody1=function(){var m=this.ptr;return V2(Hf(m),Se)},fi.prototype.getNumContacts=fi.prototype.getNumContacts=function(){var m=this.ptr;return jh(m)},fi.prototype.getContactPoint=fi.prototype.getContactPoint=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(zy(k,m),nt)},fi.prototype.__destroy__=fi.prototype.__destroy__=function(){var m=this.ptr;j3(m)};function Mi(m){m&&typeof m=="object"&&(m=m.ptr),this.ptr=jf(m),B2(Mi)[this.ptr]=this}Mi.prototype=Object.create(Rt.prototype),Mi.prototype.constructor=Mi,Mi.prototype.__class__=Mi,Mi.__cache__={},g.btBoxShape=Mi,Mi.prototype.setMargin=Mi.prototype.setMargin=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),f9(k,m)},Mi.prototype.getMargin=Mi.prototype.getMargin=function(){var m=this.ptr;return p3(m)},Mi.prototype.setLocalScaling=Mi.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),bS(k,m)},Mi.prototype.calculateLocalInertia=Mi.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),qv(i0,m,k)},Mi.prototype.__destroy__=Mi.prototype.__destroy__=function(){var m=this.ptr;Uy(m)};function vn(m){m&&typeof m=="object"&&(m=m.ptr),this.ptr=gf(m),B2(vn)[this.ptr]=this}vn.prototype=Object.create(Ui.prototype),vn.prototype.constructor=vn,vn.prototype.__class__=vn,vn.__cache__={},g.btCollisionDispatcher=vn,vn.prototype.getNumManifolds=vn.prototype.getNumManifolds=function(){var m=this.ptr;return Nh(m)},vn.prototype.getManifoldByIndexInternal=vn.prototype.getManifoldByIndexInternal=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(ah(k,m),fi)},vn.prototype.__destroy__=vn.prototype.__destroy__=function(){var m=this.ptr;qu(m)};function ut(){this.ptr=nS(),B2(ut)[this.ptr]=this}ut.prototype=Object.create(Me.prototype),ut.prototype.constructor=ut,ut.prototype.__class__=ut,ut.__cache__={},g.btVehicleTuning=ut,ut.prototype.get_m_suspensionStiffness=ut.prototype.get_m_suspensionStiffness=function(){var m=this.ptr;return pC(m)},ut.prototype.set_m_suspensionStiffness=ut.prototype.set_m_suspensionStiffness=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Eg(k,m)},ut.prototype.get_m_suspensionCompression=ut.prototype.get_m_suspensionCompression=function(){var m=this.ptr;return Xd(m)},ut.prototype.set_m_suspensionCompression=ut.prototype.set_m_suspensionCompression=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Hv(k,m)},ut.prototype.get_m_suspensionDamping=ut.prototype.get_m_suspensionDamping=function(){var m=this.ptr;return Z7(m)},ut.prototype.set_m_suspensionDamping=ut.prototype.set_m_suspensionDamping=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),W7(k,m)},ut.prototype.get_m_maxSuspensionTravelCm=ut.prototype.get_m_maxSuspensionTravelCm=function(){var m=this.ptr;return LC(m)},ut.prototype.set_m_maxSuspensionTravelCm=ut.prototype.set_m_maxSuspensionTravelCm=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Ad(k,m)},ut.prototype.get_m_frictionSlip=ut.prototype.get_m_frictionSlip=function(){var m=this.ptr;return fx(m)},ut.prototype.set_m_frictionSlip=ut.prototype.set_m_frictionSlip=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),wu(k,m)},ut.prototype.get_m_maxSuspensionForce=ut.prototype.get_m_maxSuspensionForce=function(){var m=this.ptr;return Sg(m)},ut.prototype.set_m_maxSuspensionForce=ut.prototype.set_m_maxSuspensionForce=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Tv(k,m)};function Dt(m){if(m&&typeof m=="object"&&(m=m.ptr),m===void 0){this.ptr=Pd(),B2(Dt)[this.ptr]=this;return}this.ptr=Od(m),B2(Dt)[this.ptr]=this}Dt.prototype=Object.create(Rt.prototype),Dt.prototype.constructor=Dt,Dt.prototype.__class__=Dt,Dt.__cache__={},g.btCompoundShape=Dt,Dt.prototype.addChildShape=Dt.prototype.addChildShape=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),qd(i0,m,k)},Dt.prototype.removeChildShapeByIndex=Dt.prototype.removeChildShapeByIndex=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),r3(k,m)},Dt.prototype.getNumChildShapes=Dt.prototype.getNumChildShapes=function(){var m=this.ptr;return Kh(m)},Dt.prototype.getChildShape=Dt.prototype.getChildShape=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(Y5(k,m),Rt)},Dt.prototype.setMargin=Dt.prototype.setMargin=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),X9(k,m)},Dt.prototype.getMargin=Dt.prototype.getMargin=function(){var m=this.ptr;return Ru(m)},Dt.prototype.setLocalScaling=Dt.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Jm(k,m)},Dt.prototype.calculateLocalInertia=Dt.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),nm(i0,m,k)},Dt.prototype.__destroy__=Dt.prototype.__destroy__=function(){var m=this.ptr;md(m)};function _r(){throw"cannot construct a btCollisionObjectWrapper, no constructor in IDL"}_r.prototype=Object.create(Me.prototype),_r.prototype.constructor=_r,_r.prototype.__class__=_r,_r.__cache__={},g.btCollisionObjectWrapper=_r;function ze(m,k){m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),this.ptr=Yh(m,k),B2(ze)[this.ptr]=this}ze.prototype=Object.create(jt.prototype),ze.prototype.constructor=ze,ze.prototype.__class__=ze,ze.__cache__={},g.ClosestConvexResultCallback=ze,ze.prototype.hasHit=ze.prototype.hasHit=function(){var m=this.ptr;return!!yS(m)},ze.prototype.get_m_convexFromWorld=ze.prototype.get_m_convexFromWorld=function(){var m=this.ptr;return V2(Uh(m),Z2)},ze.prototype.set_m_convexFromWorld=ze.prototype.set_m_convexFromWorld=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),r7(k,m)},ze.prototype.get_m_convexToWorld=ze.prototype.get_m_convexToWorld=function(){var m=this.ptr;return V2(wd(m),Z2)},ze.prototype.set_m_convexToWorld=ze.prototype.set_m_convexToWorld=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),yg(k,m)},ze.prototype.get_m_hitNormalWorld=ze.prototype.get_m_hitNormalWorld=function(){var m=this.ptr;return V2(h9(m),Z2)},ze.prototype.set_m_hitNormalWorld=ze.prototype.set_m_hitNormalWorld=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),_f(k,m)},ze.prototype.get_m_hitPointWorld=ze.prototype.get_m_hitPointWorld=function(){var m=this.ptr;return V2(X7(m),Z2)},ze.prototype.set_m_hitPointWorld=ze.prototype.set_m_hitPointWorld=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),l3(k,m)},ze.prototype.get_m_collisionFilterGroup=ze.prototype.get_m_collisionFilterGroup=function(){var m=this.ptr;return F9(m)},ze.prototype.set_m_collisionFilterGroup=ze.prototype.set_m_collisionFilterGroup=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),I9(k,m)},ze.prototype.get_m_collisionFilterMask=ze.prototype.get_m_collisionFilterMask=function(){var m=this.ptr;return Y9(m)},ze.prototype.set_m_collisionFilterMask=ze.prototype.set_m_collisionFilterMask=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Bg(k,m)},ze.prototype.get_m_closestHitFraction=ze.prototype.get_m_closestHitFraction=function(){var m=this.ptr;return k5(m)},ze.prototype.set_m_closestHitFraction=ze.prototype.set_m_closestHitFraction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),DC(k,m)},ze.prototype.__destroy__=ze.prototype.__destroy__=function(){var m=this.ptr;K9(m)};function hi(m,k){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),m===void 0){this.ptr=K5(),B2(hi)[this.ptr]=this;return}if(k===void 0){this.ptr=Z5(m),B2(hi)[this.ptr]=this;return}this.ptr=X5(m,k),B2(hi)[this.ptr]=this}hi.prototype=Object.create(tn.prototype),hi.prototype.constructor=hi,hi.prototype.__class__=hi,hi.__cache__={},g.btDefaultMotionState=hi,hi.prototype.getWorldTransform=hi.prototype.getWorldTransform=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Ku(k,m)},hi.prototype.setWorldTransform=hi.prototype.setWorldTransform=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),z9(k,m)},hi.prototype.get_m_graphicsWorldTrans=hi.prototype.get_m_graphicsWorldTrans=function(){var m=this.ptr;return V2(Bf(m),vt)},hi.prototype.set_m_graphicsWorldTrans=hi.prototype.set_m_graphicsWorldTrans=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),gy(k,m)},hi.prototype.__destroy__=hi.prototype.__destroy__=function(){var m=this.ptr;v3(m)};function Ve(m,k){m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),this.ptr=gv(m,k),B2(Ve)[this.ptr]=this}Ve.prototype=Object.create(Ht.prototype),Ve.prototype.constructor=Ve,Ve.prototype.__class__=Ve,Ve.__cache__={},g.ClosestRayResultCallback=Ve,Ve.prototype.hasHit=Ve.prototype.hasHit=function(){var m=this.ptr;return!!jd(m)},Ve.prototype.get_m_rayFromWorld=Ve.prototype.get_m_rayFromWorld=function(){var m=this.ptr;return V2(m7(m),Z2)},Ve.prototype.set_m_rayFromWorld=Ve.prototype.set_m_rayFromWorld=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),ev(k,m)},Ve.prototype.get_m_rayToWorld=Ve.prototype.get_m_rayToWorld=function(){var m=this.ptr;return V2(kC(m),Z2)},Ve.prototype.set_m_rayToWorld=Ve.prototype.set_m_rayToWorld=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),oS(k,m)},Ve.prototype.get_m_hitNormalWorld=Ve.prototype.get_m_hitNormalWorld=function(){var m=this.ptr;return V2(VC(m),Z2)},Ve.prototype.set_m_hitNormalWorld=Ve.prototype.set_m_hitNormalWorld=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),VS(k,m)},Ve.prototype.get_m_hitPointWorld=Ve.prototype.get_m_hitPointWorld=function(){var m=this.ptr;return V2(Au(m),Z2)},Ve.prototype.set_m_hitPointWorld=Ve.prototype.set_m_hitPointWorld=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Q3(k,m)},Ve.prototype.get_m_collisionFilterGroup=Ve.prototype.get_m_collisionFilterGroup=function(){var m=this.ptr;return sS(m)},Ve.prototype.set_m_collisionFilterGroup=Ve.prototype.set_m_collisionFilterGroup=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),_5(k,m)},Ve.prototype.get_m_collisionFilterMask=Ve.prototype.get_m_collisionFilterMask=function(){var m=this.ptr;return yd(m)},Ve.prototype.set_m_collisionFilterMask=Ve.prototype.set_m_collisionFilterMask=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),xv(k,m)},Ve.prototype.get_m_collisionObject=Ve.prototype.get_m_collisionObject=function(){var m=this.ptr;return V2(CS(m),Se)},Ve.prototype.set_m_collisionObject=Ve.prototype.set_m_collisionObject=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),qf(k,m)},Ve.prototype.__destroy__=Ve.prototype.__destroy__=function(){var m=this.ptr;Gh(m)};function rt(m,k,i0,x,Z){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),x===void 0){this.ptr=bh(m,k,i0),B2(rt)[this.ptr]=this;return}if(Z===void 0){this.ptr=_emscripten_bind_btGeneric6DofSpring2Constraint_btGeneric6DofSpring2Constraint_4(m,k,i0,x),B2(rt)[this.ptr]=this;return}this.ptr=py(m,k,i0,x,Z),B2(rt)[this.ptr]=this}rt.prototype=Object.create(oi.prototype),rt.prototype.constructor=rt,rt.prototype.__class__=rt,rt.__cache__={},g.btGeneric6DofSpring2Constraint=rt,rt.prototype.setLinearLowerLimit=rt.prototype.setLinearLowerLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),hS(k,m)},rt.prototype.setLinearUpperLimit=rt.prototype.setLinearUpperLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),O9(k,m)},rt.prototype.setAngularLowerLimit=rt.prototype.setAngularLowerLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),B7(k,m)},rt.prototype.setAngularUpperLimit=rt.prototype.setAngularUpperLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),yf(k,m)},rt.prototype.enableSpring=rt.prototype.enableSpring=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),o3(i0,m,k)},rt.prototype.setStiffness=rt.prototype.setStiffness=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),xm(i0,m,k)},rt.prototype.setDamping=rt.prototype.setDamping=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),Qy(i0,m,k)},rt.prototype.getTranslationalLimitMotor=rt.prototype.getTranslationalLimitMotor=function(){var m=this.ptr;return V2(Zv(m),Sn)},rt.prototype.getRotationalLimitMotor=rt.prototype.getRotationalLimitMotor=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(hf(k,m),xn)},rt.prototype.enableFeedback=rt.prototype.enableFeedback=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Hg(k,m)},rt.prototype.getBreakingImpulseThreshold=rt.prototype.getBreakingImpulseThreshold=function(){var m=this.ptr;return zu(m)},rt.prototype.setBreakingImpulseThreshold=rt.prototype.setBreakingImpulseThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),N5(k,m)},rt.prototype.__destroy__=rt.prototype.__destroy__=function(){var m=this.ptr;Xv(m)};function Ti(m,k){m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),this.ptr=w3(m,k),B2(Ti)[this.ptr]=this}Ti.prototype=Object.create(ai.prototype),Ti.prototype.constructor=Ti,Ti.prototype.__class__=Ti,Ti.__cache__={},g.btCapsuleShapeX=Ti,Ti.prototype.setMargin=Ti.prototype.setMargin=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Sm(k,m)},Ti.prototype.getMargin=Ti.prototype.getMargin=function(){var m=this.ptr;return Tu(m)},Ti.prototype.setLocalScaling=Ti.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Qd(k,m)},Ti.prototype.calculateLocalInertia=Ti.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),J3(i0,m,k)},Ti.prototype.__destroy__=Ti.prototype.__destroy__=function(){var m=this.ptr;Ay(m)};function yt(m,k,i0,x){m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),this.ptr=w9(m,k,i0,x),B2(yt)[this.ptr]=this}yt.prototype=Object.create(Ft.prototype),yt.prototype.constructor=yt,yt.prototype.__class__=yt,yt.__cache__={},g.btQuaternion=yt,yt.prototype.setValue=yt.prototype.setValue=function(m,k,i0,x){var Z=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Df(Z,m,k,i0,x)},yt.prototype.normalize=yt.prototype.normalize=function(){var m=this.ptr;xd(m)},yt.prototype.x=yt.prototype.x=function(){var m=this.ptr;return L5(m)},yt.prototype.y=yt.prototype.y=function(){var m=this.ptr;return k9(m)},yt.prototype.z=yt.prototype.z=function(){var m=this.ptr;return W5(m)},yt.prototype.w=yt.prototype.w=function(){var m=this.ptr;return n9(m)},yt.prototype.setX=yt.prototype.setX=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Iu(k,m)},yt.prototype.setY=yt.prototype.setY=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),yC(k,m)},yt.prototype.setZ=yt.prototype.setZ=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Ou(k,m)},yt.prototype.setW=yt.prototype.setW=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Vu(k,m)},yt.prototype.__destroy__=yt.prototype.__destroy__=function(){var m=this.ptr;Wv(m)};function Ri(m,k){m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),this.ptr=DS(m,k),B2(Ri)[this.ptr]=this}Ri.prototype=Object.create(ai.prototype),Ri.prototype.constructor=Ri,Ri.prototype.__class__=Ri,Ri.__cache__={},g.btCapsuleShapeZ=Ri,Ri.prototype.setMargin=Ri.prototype.setMargin=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),xf(k,m)},Ri.prototype.getMargin=Ri.prototype.getMargin=function(){var m=this.ptr;return c9(m)},Ri.prototype.setLocalScaling=Ri.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),R5(k,m)},Ri.prototype.calculateLocalInertia=Ri.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),Vv(i0,m,k)},Ri.prototype.__destroy__=Ri.prototype.__destroy__=function(){var m=this.ptr;vS(m)};function n1(m){m&&typeof m=="object"&&(m=m.ptr),this.ptr=N9(m),B2(n1)[this.ptr]=this}n1.prototype=Object.create(e1.prototype),n1.prototype.constructor=n1,n1.prototype.__class__=n1,n1.__cache__={},g.btDefaultVehicleRaycaster=n1,n1.prototype.__destroy__=n1.prototype.__destroy__=function(){var m=this.ptr;Py(m)};function ne(){throw"cannot construct a btWheelInfo, no constructor in IDL"}ne.prototype=Object.create(Me.prototype),ne.prototype.constructor=ne,ne.prototype.__class__=ne,ne.__cache__={},g.btWheelInfo=ne,ne.prototype.get_m_suspensionStiffness=ne.prototype.get_m_suspensionStiffness=function(){var m=this.ptr;return Uu(m)},ne.prototype.set_m_suspensionStiffness=ne.prototype.set_m_suspensionStiffness=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),$v(k,m)},ne.prototype.get_m_frictionSlip=ne.prototype.get_m_frictionSlip=function(){var m=this.ptr;return Md(m)},ne.prototype.set_m_frictionSlip=ne.prototype.set_m_frictionSlip=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),bC(k,m)},ne.prototype.get_m_engineForce=ne.prototype.get_m_engineForce=function(){var m=this.ptr;return k3(m)},ne.prototype.set_m_engineForce=ne.prototype.set_m_engineForce=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Xm(k,m)},ne.prototype.get_m_rollInfluence=ne.prototype.get_m_rollInfluence=function(){var m=this.ptr;return $f(m)},ne.prototype.set_m_rollInfluence=ne.prototype.set_m_rollInfluence=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),o7(k,m)},ne.prototype.get_m_suspensionRestLength1=ne.prototype.get_m_suspensionRestLength1=function(){var m=this.ptr;return Gu(m)},ne.prototype.set_m_suspensionRestLength1=ne.prototype.set_m_suspensionRestLength1=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),RS(k,m)},ne.prototype.get_m_wheelsRadius=ne.prototype.get_m_wheelsRadius=function(){var m=this.ptr;return tS(m)},ne.prototype.set_m_wheelsRadius=ne.prototype.set_m_wheelsRadius=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),G3(k,m)},ne.prototype.get_m_wheelsDampingCompression=ne.prototype.get_m_wheelsDampingCompression=function(){var m=this.ptr;return dS(m)},ne.prototype.set_m_wheelsDampingCompression=ne.prototype.set_m_wheelsDampingCompression=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),z3(k,m)},ne.prototype.get_m_wheelsDampingRelaxation=ne.prototype.get_m_wheelsDampingRelaxation=function(){var m=this.ptr;return ZC(m)},ne.prototype.set_m_wheelsDampingRelaxation=ne.prototype.set_m_wheelsDampingRelaxation=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),_S(k,m)},ne.prototype.get_m_steering=ne.prototype.get_m_steering=function(){var m=this.ptr;return g7(m)},ne.prototype.set_m_steering=ne.prototype.set_m_steering=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),rg(k,m)},ne.prototype.get_m_maxSuspensionForce=ne.prototype.get_m_maxSuspensionForce=function(){var m=this.ptr;return gS(m)},ne.prototype.set_m_maxSuspensionForce=ne.prototype.set_m_maxSuspensionForce=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),U5(k,m)},ne.prototype.get_m_maxSuspensionTravelCm=ne.prototype.get_m_maxSuspensionTravelCm=function(){var m=this.ptr;return $9(m)},ne.prototype.set_m_maxSuspensionTravelCm=ne.prototype.set_m_maxSuspensionTravelCm=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Oy(k,m)},ne.prototype.get_m_wheelsSuspensionForce=ne.prototype.get_m_wheelsSuspensionForce=function(){var m=this.ptr;return R9(m)},ne.prototype.set_m_wheelsSuspensionForce=ne.prototype.set_m_wheelsSuspensionForce=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Fy(k,m)},ne.prototype.get_m_bIsFrontWheel=ne.prototype.get_m_bIsFrontWheel=function(){var m=this.ptr;return!!If(m)},ne.prototype.set_m_bIsFrontWheel=ne.prototype.set_m_bIsFrontWheel=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),eh(k,m)},ne.prototype.get_m_raycastInfo=ne.prototype.get_m_raycastInfo=function(){var m=this.ptr;return V2(cx(m),Fe)},ne.prototype.set_m_raycastInfo=ne.prototype.set_m_raycastInfo=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),kh(k,m)},ne.prototype.get_m_chassisConnectionPointCS=ne.prototype.get_m_chassisConnectionPointCS=function(){var m=this.ptr;return V2(rv(m),Z2)},ne.prototype.set_m_chassisConnectionPointCS=ne.prototype.set_m_chassisConnectionPointCS=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),rf(k,m)},ne.prototype.__destroy__=ne.prototype.__destroy__=function(){var m=this.ptr;i5(m)};function Be(m,k,i0,x){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),m===void 0){this.ptr=JS(),B2(Be)[this.ptr]=this;return}if(k===void 0){this.ptr=_emscripten_bind_btVector4_btVector4_1(m),B2(Be)[this.ptr]=this;return}if(i0===void 0){this.ptr=_emscripten_bind_btVector4_btVector4_2(m,k),B2(Be)[this.ptr]=this;return}if(x===void 0){this.ptr=_emscripten_bind_btVector4_btVector4_3(m,k,i0),B2(Be)[this.ptr]=this;return}this.ptr=ex(m,k,i0,x),B2(Be)[this.ptr]=this}Be.prototype=Object.create(Z2.prototype),Be.prototype.constructor=Be,Be.prototype.__class__=Be,Be.__cache__={},g.btVector4=Be,Be.prototype.w=Be.prototype.w=function(){var m=this.ptr;return MC(m)},Be.prototype.setValue=Be.prototype.setValue=function(m,k,i0,x){var Z=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),e3(Z,m,k,i0,x)},Be.prototype.length=Be.prototype.length=function(){var m=this.ptr;return vy(m)},Be.prototype.x=Be.prototype.x=function(){var m=this.ptr;return iC(m)},Be.prototype.y=Be.prototype.y=function(){var m=this.ptr;return EC(m)},Be.prototype.z=Be.prototype.z=function(){var m=this.ptr;return Ig(m)},Be.prototype.setX=Be.prototype.setX=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Th(k,m)},Be.prototype.setY=Be.prototype.setY=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),b9(k,m)},Be.prototype.setZ=Be.prototype.setZ=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Lh(k,m)},Be.prototype.normalize=Be.prototype.normalize=function(){var m=this.ptr;dC(m)},Be.prototype.dot=Be.prototype.dot=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),Bm(k,m)},Be.prototype.op_mul=Be.prototype.op_mul=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(ey(k,m),Z2)},Be.prototype.op_add=Be.prototype.op_add=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(t5(k,m),Z2)},Be.prototype.op_sub=Be.prototype.op_sub=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(lS(k,m),Z2)},Be.prototype.__destroy__=Be.prototype.__destroy__=function(){var m=this.ptr;Cv(m)};function Ae(m,k,i0,x){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),x===void 0){this.ptr=dm(m,k,i0),B2(Ae)[this.ptr]=this;return}this.ptr=kv(m,k,i0,x),B2(Ae)[this.ptr]=this}Ae.prototype=Object.create(qn.prototype),Ae.prototype.constructor=Ae,Ae.prototype.__class__=Ae,Ae.__cache__={},g.btKinematicCharacterController=Ae,Ae.prototype.setUpAxis=Ae.prototype.setUpAxis=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),mf(k,m)},Ae.prototype.setWalkDirection=Ae.prototype.setWalkDirection=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),cC(k,m)},Ae.prototype.setVelocityForTimeInterval=Ae.prototype.setVelocityForTimeInterval=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),YS(i0,m,k)},Ae.prototype.warp=Ae.prototype.warp=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),D7(k,m)},Ae.prototype.preStep=Ae.prototype.preStep=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),I7(k,m)},Ae.prototype.playerStep=Ae.prototype.playerStep=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),Lv(i0,m,k)},Ae.prototype.setFallSpeed=Ae.prototype.setFallSpeed=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Ey(k,m)},Ae.prototype.setJumpSpeed=Ae.prototype.setJumpSpeed=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),pg(k,m)},Ae.prototype.setMaxJumpHeight=Ae.prototype.setMaxJumpHeight=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),px(k,m)},Ae.prototype.canJump=Ae.prototype.canJump=function(){var m=this.ptr;return!!Q5(m)},Ae.prototype.jump=Ae.prototype.jump=function(){var m=this.ptr;Rh(m)},Ae.prototype.setGravity=Ae.prototype.setGravity=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Xf(k,m)},Ae.prototype.getGravity=Ae.prototype.getGravity=function(){var m=this.ptr;return fC(m)},Ae.prototype.setMaxSlope=Ae.prototype.setMaxSlope=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Bu(k,m)},Ae.prototype.getMaxSlope=Ae.prototype.getMaxSlope=function(){var m=this.ptr;return GS(m)},Ae.prototype.getGhostObject=Ae.prototype.getGhostObject=function(){var m=this.ptr;return V2(oC(m),Re)},Ae.prototype.setUseGhostSweepTest=Ae.prototype.setUseGhostSweepTest=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),kf(k,m)},Ae.prototype.onGround=Ae.prototype.onGround=function(){var m=this.ptr;return!!Pg(m)},Ae.prototype.__destroy__=Ae.prototype.__destroy__=function(){var m=this.ptr;tx(m)};function gn(m,k){m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),this.ptr=Bd(m,k),B2(gn)[this.ptr]=this}gn.prototype=Object.create(en.prototype),gn.prototype.constructor=gn,gn.prototype.__class__=gn,gn.__cache__={},g.btStaticPlaneShape=gn,gn.prototype.setLocalScaling=gn.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Bv(k,m)},gn.prototype.calculateLocalInertia=gn.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),Mv(i0,m,k)},gn.prototype.__destroy__=gn.prototype.__destroy__=function(){var m=this.ptr;HS(m)};function vi(){throw"cannot construct a btContactSolverInfo, no constructor in IDL"}vi.prototype=Object.create(Me.prototype),vi.prototype.constructor=vi,vi.prototype.__class__=vi,vi.__cache__={},g.btContactSolverInfo=vi,vi.prototype.get_m_splitImpulse=vi.prototype.get_m_splitImpulse=function(){var m=this.ptr;return!!lx(m)},vi.prototype.set_m_splitImpulse=vi.prototype.set_m_splitImpulse=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),b5(k,m)},vi.prototype.get_m_splitImpulsePenetrationThreshold=vi.prototype.get_m_splitImpulsePenetrationThreshold=function(){var m=this.ptr;return d3(m)},vi.prototype.set_m_splitImpulsePenetrationThreshold=vi.prototype.set_m_splitImpulsePenetrationThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),$y(k,m)},vi.prototype.__destroy__=vi.prototype.__destroy__=function(){var m=this.ptr;A7(m)};function Cn(){throw"cannot construct a btOverlappingPairCache, no constructor in IDL"}Cn.prototype=Object.create(Me.prototype),Cn.prototype.constructor=Cn,Cn.prototype.__class__=Cn,Cn.__cache__={},g.btOverlappingPairCache=Cn,Cn.prototype.setInternalGhostPairCallback=Cn.prototype.setInternalGhostPairCallback=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Fd(k,m)},Cn.prototype.__destroy__=Cn.prototype.__destroy__=function(){var m=this.ptr;y5(m)};function ki(m){m&&typeof m=="object"&&(m=m.ptr),this.ptr=T9(m),B2(ki)[this.ptr]=this}ki.prototype=Object.create(Rt.prototype),ki.prototype.constructor=ki,ki.prototype.__class__=ki,ki.__cache__={},g.btSphereShape=ki,ki.prototype.setMargin=ki.prototype.setMargin=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Yy(k,m)},ki.prototype.getMargin=ki.prototype.getMargin=function(){var m=this.ptr;return ay(m)},ki.prototype.setLocalScaling=ki.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),wC(k,m)},ki.prototype.calculateLocalInertia=ki.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),ch(i0,m,k)},ki.prototype.__destroy__=ki.prototype.__destroy__=function(){var m=this.ptr;of(m)};function r1(){this.ptr=_7(),B2(r1)[this.ptr]=this}r1.prototype=Object.create(Me.prototype),r1.prototype.constructor=r1,r1.prototype.__class__=r1,r1.__cache__={},g.btDefaultCollisionConstructionInfo=r1,r1.prototype.__destroy__=r1.prototype.__destroy__=function(){var m=this.ptr;_g(m)};function Gt(m,k,i0,x,Z,e,d2){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),e&&typeof e=="object"&&(e=e.ptr),d2&&typeof d2=="object"&&(d2=d2.ptr),i0===void 0){this.ptr=a9(m,k),B2(Gt)[this.ptr]=this;return}if(x===void 0){this.ptr=p9(m,k,i0),B2(Gt)[this.ptr]=this;return}if(Z===void 0){this.ptr=n5(m,k,i0,x),B2(Gt)[this.ptr]=this;return}if(e===void 0){this.ptr=l9(m,k,i0,x,Z),B2(Gt)[this.ptr]=this;return}if(d2===void 0){this.ptr=s9(m,k,i0,x,Z,e),B2(Gt)[this.ptr]=this;return}this.ptr=_9(m,k,i0,x,Z,e,d2),B2(Gt)[this.ptr]=this}Gt.prototype=Object.create(oi.prototype),Gt.prototype.constructor=Gt,Gt.prototype.__class__=Gt,Gt.__cache__={},g.btHingeConstraint=Gt,Gt.prototype.setLimit=Gt.prototype.setLimit=function(m,k,i0,x,Z){var e=this.ptr;if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),Z===void 0){Iy(e,m,k,i0,x);return}Ly(e,m,k,i0,x,Z)},Gt.prototype.enableAngularMotor=Gt.prototype.enableAngularMotor=function(m,k,i0){var x=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),nd(x,m,k,i0)},Gt.prototype.enableFeedback=Gt.prototype.enableFeedback=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),wf(k,m)},Gt.prototype.getBreakingImpulseThreshold=Gt.prototype.getBreakingImpulseThreshold=function(){var m=this.ptr;return sg(m)},Gt.prototype.setBreakingImpulseThreshold=Gt.prototype.setBreakingImpulseThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),i9(k,m)},Gt.prototype.__destroy__=Gt.prototype.__destroy__=function(){var m=this.ptr;WC(m)};function Yt(){this.ptr=nC(),B2(Yt)[this.ptr]=this}Yt.prototype=Object.create(Me.prototype),Yt.prototype.constructor=Yt,Yt.prototype.__class__=Yt,Yt.__cache__={},g.btConstraintSetting=Yt,Yt.prototype.get_m_tau=Yt.prototype.get_m_tau=function(){var m=this.ptr;return C7(m)},Yt.prototype.set_m_tau=Yt.prototype.set_m_tau=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),oh(k,m)},Yt.prototype.get_m_damping=Yt.prototype.get_m_damping=function(){var m=this.ptr;return z5(m)},Yt.prototype.set_m_damping=Yt.prototype.set_m_damping=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),$3(k,m)},Yt.prototype.get_m_impulseClamp=Yt.prototype.get_m_impulseClamp=function(){var m=this.ptr;return H3(m)},Yt.prototype.set_m_impulseClamp=Yt.prototype.set_m_impulseClamp=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Kf(k,m)},Yt.prototype.__destroy__=Yt.prototype.__destroy__=function(){var m=this.ptr;g5(m)};function Sn(){throw"cannot construct a btTranslationalLimitMotor2, no constructor in IDL"}Sn.prototype=Object.create(Me.prototype),Sn.prototype.constructor=Sn,Sn.prototype.__class__=Sn,Sn.__cache__={},g.btTranslationalLimitMotor2=Sn,Sn.prototype.get_m_currentLinearDiff=Sn.prototype.get_m_currentLinearDiff=function(){var m=this.ptr;return V2(x5(m),Z2)},Sn.prototype.set_m_currentLinearDiff=Sn.prototype.set_m_currentLinearDiff=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Ch(k,m)},Sn.prototype.__destroy__=Sn.prototype.__destroy__=function(){var m=this.ptr;vf(m)};function Di(){throw"cannot construct a LocalShapeInfo, no constructor in IDL"}Di.prototype=Object.create(Me.prototype),Di.prototype.constructor=Di,Di.prototype.__class__=Di,Di.__cache__={},g.LocalShapeInfo=Di,Di.prototype.get_m_shapePart=Di.prototype.get_m_shapePart=function(){var m=this.ptr;return Qf(m)},Di.prototype.set_m_shapePart=Di.prototype.set_m_shapePart=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),M3(k,m)},Di.prototype.get_m_triangleIndex=Di.prototype.get_m_triangleIndex=function(){var m=this.ptr;return Mg(m)},Di.prototype.set_m_triangleIndex=Di.prototype.set_m_triangleIndex=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),sy(k,m)},Di.prototype.__destroy__=Di.prototype.__destroy__=function(){var m=this.ptr;Ef(m)};function g1(){throw"cannot construct a btConstraintSolver, no constructor in IDL"}g1.prototype=Object.create(Me.prototype),g1.prototype.constructor=g1,g1.prototype.__class__=g1,g1.__cache__={},g.btConstraintSolver=g1,g1.prototype.__destroy__=g1.prototype.__destroy__=function(){var m=this.ptr;sv(m)};function ft(m,k,i0,x,Z){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),x===void 0){this.ptr=pd(m,k,i0),B2(ft)[this.ptr]=this;return}if(Z===void 0){this.ptr=_emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_4(m,k,i0,x),B2(ft)[this.ptr]=this;return}this.ptr=af(m,k,i0,x,Z),B2(ft)[this.ptr]=this}ft.prototype=Object.create(kt.prototype),ft.prototype.constructor=ft,ft.prototype.__class__=ft,ft.__cache__={},g.btGeneric6DofSpringConstraint=ft,ft.prototype.enableSpring=ft.prototype.enableSpring=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),by(i0,m,k)},ft.prototype.setStiffness=ft.prototype.setStiffness=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),q9(i0,m,k)},ft.prototype.setDamping=ft.prototype.setDamping=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),tv(i0,m,k)},ft.prototype.setLinearLowerLimit=ft.prototype.setLinearLowerLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),ix(k,m)},ft.prototype.setLinearUpperLimit=ft.prototype.setLinearUpperLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),sf(k,m)},ft.prototype.setAngularLowerLimit=ft.prototype.setAngularLowerLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),sx(k,m)},ft.prototype.setAngularUpperLimit=ft.prototype.setAngularUpperLimit=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),g9(k,m)},ft.prototype.enableFeedback=ft.prototype.enableFeedback=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Zy(k,m)},ft.prototype.getBreakingImpulseThreshold=ft.prototype.getBreakingImpulseThreshold=function(){var m=this.ptr;return Vy(m)},ft.prototype.setBreakingImpulseThreshold=ft.prototype.setBreakingImpulseThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Z3(k,m)},ft.prototype.__destroy__=ft.prototype.__destroy__=function(){var m=this.ptr;kd(m)};function Ct(m,k,i0,x,Z){m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),this.ptr=Mm(m,k,i0,x,Z),B2(Ct)[this.ptr]=this}Ct.prototype=Object.create(Me.prototype),Ct.prototype.constructor=Ct,Ct.prototype.__class__=Ct,Ct.__cache__={},g.LocalConvexResult=Ct,Ct.prototype.get_m_hitCollisionObject=Ct.prototype.get_m_hitCollisionObject=function(){var m=this.ptr;return V2(Am(m),Se)},Ct.prototype.set_m_hitCollisionObject=Ct.prototype.set_m_hitCollisionObject=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),rx(k,m)},Ct.prototype.get_m_localShapeInfo=Ct.prototype.get_m_localShapeInfo=function(){var m=this.ptr;return V2(zg(m),Di)},Ct.prototype.set_m_localShapeInfo=Ct.prototype.set_m_localShapeInfo=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),jS(k,m)},Ct.prototype.get_m_hitNormalLocal=Ct.prototype.get_m_hitNormalLocal=function(){var m=this.ptr;return V2(Fu(m),Z2)},Ct.prototype.set_m_hitNormalLocal=Ct.prototype.set_m_hitNormalLocal=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),P5(k,m)},Ct.prototype.get_m_hitPointLocal=Ct.prototype.get_m_hitPointLocal=function(){var m=this.ptr;return V2(Vf(m),Z2)},Ct.prototype.set_m_hitPointLocal=Ct.prototype.set_m_hitPointLocal=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),yh(k,m)},Ct.prototype.get_m_hitFraction=Ct.prototype.get_m_hitFraction=function(){var m=this.ptr;return t9(m)},Ct.prototype.set_m_hitFraction=Ct.prototype.set_m_hitFraction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),zv(k,m)},Ct.prototype.__destroy__=Ct.prototype.__destroy__=function(){var m=this.ptr;$h(m)};function C1(){throw"cannot construct a btOverlappingPairCallback, no constructor in IDL"}C1.prototype=Object.create(Me.prototype),C1.prototype.constructor=C1,C1.prototype.__class__=C1,C1.__cache__={},g.btOverlappingPairCallback=C1,C1.prototype.__destroy__=C1.prototype.__destroy__=function(){var m=this.ptr;$m(m)};function U2(m){m&&typeof m=="object"&&(m=m.ptr),this.ptr=sC(m),B2(U2)[this.ptr]=this}U2.prototype=Object.create(Se.prototype),U2.prototype.constructor=U2,U2.prototype.__class__=U2,U2.__cache__={},g.btRigidBody=U2,U2.prototype.getCenterOfMassTransform=U2.prototype.getCenterOfMassTransform=function(){var m=this.ptr;return V2(cf(m),vt)},U2.prototype.setCenterOfMassTransform=U2.prototype.setCenterOfMassTransform=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),nv(k,m)},U2.prototype.setSleepingThresholds=U2.prototype.setSleepingThresholds=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),Gg(i0,m,k)},U2.prototype.setDamping=U2.prototype.setDamping=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),jm(i0,m,k)},U2.prototype.setMassProps=U2.prototype.setMassProps=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),My(i0,m,k)},U2.prototype.setLinearFactor=U2.prototype.setLinearFactor=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),T3(k,m)},U2.prototype.applyTorque=U2.prototype.applyTorque=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Dm(k,m)},U2.prototype.applyForce=U2.prototype.applyForce=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),nh(i0,m,k)},U2.prototype.applyCentralForce=U2.prototype.applyCentralForce=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),e9(k,m)},U2.prototype.applyTorqueImpulse=U2.prototype.applyTorqueImpulse=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),MS(k,m)},U2.prototype.applyImpulse=U2.prototype.applyImpulse=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),sd(i0,m,k)},U2.prototype.applyCentralImpulse=U2.prototype.applyCentralImpulse=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),bu(k,m)},U2.prototype.updateInertiaTensor=U2.prototype.updateInertiaTensor=function(){var m=this.ptr;Ud(m)},U2.prototype.getLinearVelocity=U2.prototype.getLinearVelocity=function(){var m=this.ptr;return V2(od(m),Z2)},U2.prototype.getAngularVelocity=U2.prototype.getAngularVelocity=function(){var m=this.ptr;return V2($C(m),Z2)},U2.prototype.setLinearVelocity=U2.prototype.setLinearVelocity=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),iS(k,m)},U2.prototype.setAngularVelocity=U2.prototype.setAngularVelocity=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),ad(k,m)},U2.prototype.getMotionState=U2.prototype.getMotionState=function(){var m=this.ptr;return V2(rC(m),tn)},U2.prototype.setMotionState=U2.prototype.setMotionState=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Pm(k,m)},U2.prototype.setAngularFactor=U2.prototype.setAngularFactor=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),ry(k,m)},U2.prototype.upcast=U2.prototype.upcast=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(Eh(k,m),U2)},U2.prototype.setAnisotropicFriction=U2.prototype.setAnisotropicFriction=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),fv(i0,m,k)},U2.prototype.getCollisionShape=U2.prototype.getCollisionShape=function(){var m=this.ptr;return V2(XC(m),Rt)},U2.prototype.setContactProcessingThreshold=U2.prototype.setContactProcessingThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),rd(k,m)},U2.prototype.setActivationState=U2.prototype.setActivationState=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),mS(k,m)},U2.prototype.forceActivationState=U2.prototype.forceActivationState=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),OS(k,m)},U2.prototype.activate=U2.prototype.activate=function(m){var k=this.ptr;if(m&&typeof m=="object"&&(m=m.ptr),m===void 0){Kg(k);return}Xg(k,m)},U2.prototype.isActive=U2.prototype.isActive=function(){var m=this.ptr;return!!J5(m)},U2.prototype.isKinematicObject=U2.prototype.isKinematicObject=function(){var m=this.ptr;return!!Pf(m)},U2.prototype.setRestitution=U2.prototype.setRestitution=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),QS(k,m)},U2.prototype.setFriction=U2.prototype.setFriction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),dh(k,m)},U2.prototype.setRollingFriction=U2.prototype.setRollingFriction=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),kg(k,m)},U2.prototype.getWorldTransform=U2.prototype.getWorldTransform=function(){var m=this.ptr;return V2(mg(m),vt)},U2.prototype.getCollisionFlags=U2.prototype.getCollisionFlags=function(){var m=this.ptr;return Rm(m)},U2.prototype.setCollisionFlags=U2.prototype.setCollisionFlags=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),TS(k,m)},U2.prototype.setWorldTransform=U2.prototype.setWorldTransform=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),ld(k,m)},U2.prototype.setCollisionShape=U2.prototype.setCollisionShape=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),om(k,m)},U2.prototype.setCcdMotionThreshold=U2.prototype.setCcdMotionThreshold=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),th(k,m)},U2.prototype.setCcdSweptSphereRadius=U2.prototype.setCcdSweptSphereRadius=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),hh(k,m)},U2.prototype.__destroy__=U2.prototype.__destroy__=function(){var m=this.ptr;Ng(m)};function Ai(m){m&&typeof m=="object"&&(m=m.ptr),this.ptr=y9(m),B2(Ai)[this.ptr]=this}Ai.prototype=Object.create(pi.prototype),Ai.prototype.constructor=Ai,Ai.prototype.__class__=Ai,Ai.__cache__={},g.btCylinderShapeX=Ai,Ai.prototype.setMargin=Ai.prototype.setMargin=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),zh(k,m)},Ai.prototype.getMargin=Ai.prototype.getMargin=function(){var m=this.ptr;return Sd(m)},Ai.prototype.setLocalScaling=Ai.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Zm(k,m)},Ai.prototype.calculateLocalInertia=Ai.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),gC(i0,m,k)},Ai.prototype.__destroy__=Ai.prototype.__destroy__=function(){var m=this.ptr;Jg(m)};function Ei(m){m&&typeof m=="object"&&(m=m.ptr),this.ptr=Id(m),B2(Ei)[this.ptr]=this}Ei.prototype=Object.create(pi.prototype),Ei.prototype.constructor=Ei,Ei.prototype.__class__=Ei,Ei.__cache__={},g.btCylinderShapeZ=Ei,Ei.prototype.setMargin=Ei.prototype.setMargin=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),mh(k,m)},Ei.prototype.getMargin=Ei.prototype.getMargin=function(){var m=this.ptr;return Lu(m)},Ei.prototype.setLocalScaling=Ei.prototype.setLocalScaling=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),qS(k,m)},Ei.prototype.calculateLocalInertia=Ei.prototype.calculateLocalInertia=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),oy(i0,m,k)},Ei.prototype.__destroy__=Ei.prototype.__destroy__=function(){var m=this.ptr;q3(m)};function vt(m,k){if(m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),m===void 0){this.ptr=N3(),B2(vt)[this.ptr]=this;return}if(k===void 0){this.ptr=_emscripten_bind_btTransform_btTransform_1(m),B2(vt)[this.ptr]=this;return}this.ptr=B3(m,k),B2(vt)[this.ptr]=this}vt.prototype=Object.create(Me.prototype),vt.prototype.constructor=vt,vt.prototype.__class__=vt,vt.__cache__={},g.btTransform=vt,vt.prototype.setIdentity=vt.prototype.setIdentity=function(){var m=this.ptr;Wu(m)},vt.prototype.setOrigin=vt.prototype.setOrigin=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),Vd(k,m)},vt.prototype.setRotation=vt.prototype.setRotation=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),r5(k,m)},vt.prototype.getOrigin=vt.prototype.getOrigin=function(){var m=this.ptr;return V2(BC(m),Z2)},vt.prototype.getRotation=vt.prototype.getRotation=function(){var m=this.ptr;return V2(o9(m),yt)},vt.prototype.getBasis=vt.prototype.getBasis=function(){var m=this.ptr;return V2(Oh(m),qi)},vt.prototype.__destroy__=vt.prototype.__destroy__=function(){var m=this.ptr;IS(m)};function St(m,k,i0){m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),this.ptr=$5(m,k,i0),B2(St)[this.ptr]=this}St.prototype=Object.create(qn.prototype),St.prototype.constructor=St,St.prototype.__class__=St,St.__cache__={},g.btRaycastVehicle=St,St.prototype.applyEngineForce=St.prototype.applyEngineForce=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),L7(i0,m,k)},St.prototype.setSteeringValue=St.prototype.setSteeringValue=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),D3(i0,m,k)},St.prototype.getWheelTransformWS=St.prototype.getWheelTransformWS=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(Vm(k,m),vt)},St.prototype.updateWheelTransform=St.prototype.updateWheelTransform=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),ef(i0,m,k)},St.prototype.addWheel=St.prototype.addWheel=function(m,k,i0,x,Z,e,d2){var T0=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),x&&typeof x=="object"&&(x=x.ptr),Z&&typeof Z=="object"&&(Z=Z.ptr),e&&typeof e=="object"&&(e=e.ptr),d2&&typeof d2=="object"&&(d2=d2.ptr),V2(zS(T0,m,k,i0,x,Z,e,d2),ne)},St.prototype.getNumWheels=St.prototype.getNumWheels=function(){var m=this.ptr;return Dd(m)},St.prototype.getRigidBody=St.prototype.getRigidBody=function(){var m=this.ptr;return V2(d7(m),U2)},St.prototype.getWheelInfo=St.prototype.getWheelInfo=function(m){var k=this.ptr;return m&&typeof m=="object"&&(m=m.ptr),V2(ig(k,m),ne)},St.prototype.setBrake=St.prototype.setBrake=function(m,k){var i0=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),P7(i0,m,k)},St.prototype.setCoordinateSystem=St.prototype.setCoordinateSystem=function(m,k,i0){var x=this.ptr;m&&typeof m=="object"&&(m=m.ptr),k&&typeof k=="object"&&(k=k.ptr),i0&&typeof i0=="object"&&(i0=i0.ptr),am(x,m,k,i0)},St.prototype.__destroy__=St.prototype.__destroy__=function(){var m=this.ptr;Zg(m)};function o1(){this.ptr=ax(),B2(o1)[this.ptr]=this}o1.prototype=Object.create(Me.prototype),o1.prototype.constructor=o1,o1.prototype.__class__=o1,o1.__cache__={},g.btGhostPairCallback=o1,o1.prototype.__destroy__=o1.prototype.__destroy__=function(){var m=this.ptr;WS(m)};function xn(){throw"cannot construct a btRotationalLimitMotor2, no constructor in IDL"}return xn.prototype=Object.create(Me.prototype),xn.prototype.constructor=xn,xn.prototype.__class__=xn,xn.__cache__={},g.btRotationalLimitMotor2=xn,xn.prototype.get_m_currentPosition=xn.prototype.get_m_currentPosition=function(){var m=this.ptr;return Um(m)},xn.prototype.set_m_currentPosition=xn.prototype.set_m_currentPosition=function(m){var k=this.ptr;m&&typeof m=="object"&&(m=m.ptr),ox(k,m)},xn.prototype.__destroy__=xn.prototype.__destroy__=function(){var m=this.ptr;V5(m)},function(){function m(){g.RO_XYZ=v9(),g.RO_XZY=xC(),g.RO_YXZ=A3(),g.RO_YZX=y7(),g.RO_ZXY=nx(),g.RO_ZYX=NC()}g.calledRun?m():lt(m)}(),g};return y()})})(_p);var Jt=_p.exports;const C6={type:"change"},ec={type:"start"},S6={type:"end"};class yi0 extends Pr{constructor(u,y){super(),this.object=u,this.domElement=y,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new t2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xr.ROTATE,MIDDLE:Xr.DOLLY,RIGHT:Xr.PAN},this.touches={ONE:Kr.ROTATE,TWO:Kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return z.phi},this.getAzimuthalAngle=function(){return z.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(H0){H0.addEventListener("keydown",Wi),this._domElementKeyEvents=H0},this.saveState=function(){w.target0.copy(w.target),w.position0.copy(w.object.position),w.zoom0=w.object.zoom},this.reset=function(){w.target.copy(w.target0),w.object.position.copy(w.position0),w.object.zoom=w.zoom0,w.object.updateProjectionMatrix(),w.dispatchEvent(C6),w.update(),O=g.NONE},this.update=function(){const H0=new t2,r2=new u1().setFromUnitVectors(u.up,new t2(0,1,0)),ie=r2.clone().invert(),re=new t2,ee=new u1,le=2*Math.PI;return function(){const He=w.object.position;H0.copy(He).sub(w.target),H0.applyQuaternion(r2),z.setFromVector3(H0),w.autoRotate&&O===g.NONE&&K0(o2()),w.enableDamping?(z.theta+=K.theta*w.dampingFactor,z.phi+=K.phi*w.dampingFactor):(z.theta+=K.theta,z.phi+=K.phi);let tt=w.minAzimuthAngle,dt=w.maxAzimuthAngle;return isFinite(tt)&&isFinite(dt)&&(tt<-Math.PI?tt+=le:tt>Math.PI&&(tt-=le),dt<-Math.PI?dt+=le:dt>Math.PI&&(dt-=le),tt<=dt?z.theta=Math.max(tt,Math.min(dt,z.theta)):z.theta=z.theta>(tt+dt)/2?Math.max(tt,z.theta):Math.min(dt,z.theta)),z.phi=Math.max(w.minPolarAngle,Math.min(w.maxPolarAngle,z.phi)),z.makeSafe(),z.radius*=Q,z.radius=Math.max(w.minDistance,Math.min(w.maxDistance,z.radius)),w.enableDamping===!0?w.target.addScaledVector(n0,w.dampingFactor):w.target.add(n0),H0.setFromSpherical(z),H0.applyQuaternion(ie),He.copy(w.target).add(H0),w.object.lookAt(w.target),w.enableDamping===!0?(K.theta*=1-w.dampingFactor,K.phi*=1-w.dampingFactor,n0.multiplyScalar(1-w.dampingFactor)):(K.set(0,0,0),n0.set(0,0,0)),Q=1,_0||re.distanceToSquared(w.object.position)>V||8*(1-ee.dot(w.object.quaternion))>V?(w.dispatchEvent(C6),re.copy(w.object.position),ee.copy(w.object.quaternion),_0=!1,!0):!1}}(),this.dispose=function(){w.domElement.removeEventListener("contextmenu",g2),w.domElement.removeEventListener("pointerdown",ni),w.domElement.removeEventListener("pointercancel",Ni),w.domElement.removeEventListener("wheel",Yi),w.domElement.removeEventListener("pointermove",Ut),w.domElement.removeEventListener("pointerup",zt),w._domElementKeyEvents!==null&&w._domElementKeyEvents.removeEventListener("keydown",Wi)};const w=this,g={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let O=g.NONE;const V=1e-6,z=new y6,K=new y6;let Q=1;const n0=new t2;let _0=!1;const c0=new Le,g0=new Le,R0=new Le,f0=new Le,h0=new Le,k0=new Le,G0=new Le,P0=new Le,F0=new Le,W0=[],Q0={};function o2(){return 2*Math.PI/60/60*w.autoRotateSpeed}function E0(){return Math.pow(.95,w.zoomSpeed)}function K0(H0){K.theta-=H0}function l2(H0){K.phi-=H0}const E2=function(){const H0=new t2;return function(ie,re){H0.setFromMatrixColumn(re,0),H0.multiplyScalar(-ie),n0.add(H0)}}(),P2=function(){const H0=new t2;return function(ie,re){w.screenSpacePanning===!0?H0.setFromMatrixColumn(re,1):(H0.setFromMatrixColumn(re,0),H0.crossVectors(w.object.up,H0)),H0.multiplyScalar(ie),n0.add(H0)}}(),p2=function(){const H0=new t2;return function(ie,re){const ee=w.domElement;if(w.object.isPerspectiveCamera){const le=w.object.position;H0.copy(le).sub(w.target);let he=H0.length();he*=Math.tan(w.object.fov/2*Math.PI/180),E2(2*ie*he/ee.clientHeight,w.object.matrix),P2(2*re*he/ee.clientHeight,w.object.matrix)}else w.object.isOrthographicCamera?(E2(ie*(w.object.right-w.object.left)/w.object.zoom/ee.clientWidth,w.object.matrix),P2(re*(w.object.top-w.object.bottom)/w.object.zoom/ee.clientHeight,w.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),w.enablePan=!1)}}();function _2(H0){w.object.isPerspectiveCamera?Q/=H0:w.object.isOrthographicCamera?(w.object.zoom=Math.max(w.minZoom,Math.min(w.maxZoom,w.object.zoom*H0)),w.object.updateProjectionMatrix(),_0=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),w.enableZoom=!1)}function M2(H0){w.object.isPerspectiveCamera?Q*=H0:w.object.isOrthographicCamera?(w.object.zoom=Math.max(w.minZoom,Math.min(w.maxZoom,w.object.zoom/H0)),w.object.updateProjectionMatrix(),_0=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),w.enableZoom=!1)}function F2(H0){c0.set(H0.clientX,H0.clientY)}function N2(H0){G0.set(H0.clientX,H0.clientY)}function L2(H0){f0.set(H0.clientX,H0.clientY)}function j2(H0){g0.set(H0.clientX,H0.clientY),R0.subVectors(g0,c0).multiplyScalar(w.rotateSpeed);const r2=w.domElement;K0(2*Math.PI*R0.x/r2.clientHeight),l2(2*Math.PI*R0.y/r2.clientHeight),c0.copy(g0),w.update()}function O2(H0){P0.set(H0.clientX,H0.clientY),F0.subVectors(P0,G0),F0.y>0?_2(E0()):F0.y<0&&M2(E0()),G0.copy(P0),w.update()}function R2(H0){h0.set(H0.clientX,H0.clientY),k0.subVectors(h0,f0).multiplyScalar(w.panSpeed),p2(k0.x,k0.y),f0.copy(h0),w.update()}function w2(H0){H0.deltaY<0?M2(E0()):H0.deltaY>0&&_2(E0()),w.update()}function X2(H0){let r2=!1;switch(H0.code){case w.keys.UP:H0.ctrlKey||H0.metaKey||H0.shiftKey?l2(2*Math.PI*w.rotateSpeed/w.domElement.clientHeight):p2(0,w.keyPanSpeed),r2=!0;break;case w.keys.BOTTOM:H0.ctrlKey||H0.metaKey||H0.shiftKey?l2(-2*Math.PI*w.rotateSpeed/w.domElement.clientHeight):p2(0,-w.keyPanSpeed),r2=!0;break;case w.keys.LEFT:H0.ctrlKey||H0.metaKey||H0.shiftKey?K0(2*Math.PI*w.rotateSpeed/w.domElement.clientHeight):p2(w.keyPanSpeed,0),r2=!0;break;case w.keys.RIGHT:H0.ctrlKey||H0.metaKey||H0.shiftKey?K0(-2*Math.PI*w.rotateSpeed/w.domElement.clientHeight):p2(-w.keyPanSpeed,0),r2=!0;break}r2&&(H0.preventDefault(),w.update())}function H2(){if(W0.length===1)c0.set(W0[0].pageX,W0[0].pageY);else{const H0=.5*(W0[0].pageX+W0[1].pageX),r2=.5*(W0[0].pageY+W0[1].pageY);c0.set(H0,r2)}}function Q2(){if(W0.length===1)f0.set(W0[0].pageX,W0[0].pageY);else{const H0=.5*(W0[0].pageX+W0[1].pageX),r2=.5*(W0[0].pageY+W0[1].pageY);f0.set(H0,r2)}}function D2(){const H0=W0[0].pageX-W0[1].pageX,r2=W0[0].pageY-W0[1].pageY,ie=Math.sqrt(H0*H0+r2*r2);G0.set(0,ie)}function Qe(){w.enableZoom&&D2(),w.enablePan&&Q2()}function $2(){w.enableZoom&&D2(),w.enableRotate&&H2()}function fe(H0){if(W0.length==1)g0.set(H0.pageX,H0.pageY);else{const ie=Ce(H0),re=.5*(H0.pageX+ie.x),ee=.5*(H0.pageY+ie.y);g0.set(re,ee)}R0.subVectors(g0,c0).multiplyScalar(w.rotateSpeed);const r2=w.domElement;K0(2*Math.PI*R0.x/r2.clientHeight),l2(2*Math.PI*R0.y/r2.clientHeight),c0.copy(g0)}function K2(H0){if(W0.length===1)h0.set(H0.pageX,H0.pageY);else{const r2=Ce(H0),ie=.5*(H0.pageX+r2.x),re=.5*(H0.pageY+r2.y);h0.set(ie,re)}k0.subVectors(h0,f0).multiplyScalar(w.panSpeed),p2(k0.x,k0.y),f0.copy(h0)}function et(H0){const r2=Ce(H0),ie=H0.pageX-r2.x,re=H0.pageY-r2.y,ee=Math.sqrt(ie*ie+re*re);P0.set(0,ee),F0.set(0,Math.pow(P0.y/G0.y,w.zoomSpeed)),_2(F0.y),G0.copy(P0)}function Oe(H0){w.enableZoom&&et(H0),w.enablePan&&K2(H0)}function _e(H0){w.enableZoom&&et(H0),w.enableRotate&&fe(H0)}function ni(H0){w.enabled!==!1&&(W0.length===0&&(w.domElement.setPointerCapture(H0.pointerId),w.domElement.addEventListener("pointermove",Ut),w.domElement.addEventListener("pointerup",zt)),G2(H0),H0.pointerType==="touch"?z0(H0):Vt(H0))}function Ut(H0){w.enabled!==!1&&(H0.pointerType==="touch"?L0(H0):je(H0))}function zt(H0){q2(H0),W0.length===0&&(w.domElement.releasePointerCapture(H0.pointerId),w.domElement.removeEventListener("pointermove",Ut),w.domElement.removeEventListener("pointerup",zt)),w.dispatchEvent(S6),O=g.NONE}function Ni(H0){q2(H0)}function Vt(H0){let r2;switch(H0.button){case 0:r2=w.mouseButtons.LEFT;break;case 1:r2=w.mouseButtons.MIDDLE;break;case 2:r2=w.mouseButtons.RIGHT;break;default:r2=-1}switch(r2){case Xr.DOLLY:if(w.enableZoom===!1)return;N2(H0),O=g.DOLLY;break;case Xr.ROTATE:if(H0.ctrlKey||H0.metaKey||H0.shiftKey){if(w.enablePan===!1)return;L2(H0),O=g.PAN}else{if(w.enableRotate===!1)return;F2(H0),O=g.ROTATE}break;case Xr.PAN:if(H0.ctrlKey||H0.metaKey||H0.shiftKey){if(w.enableRotate===!1)return;F2(H0),O=g.ROTATE}else{if(w.enablePan===!1)return;L2(H0),O=g.PAN}break;default:O=g.NONE}O!==g.NONE&&w.dispatchEvent(ec)}function je(H0){switch(O){case g.ROTATE:if(w.enableRotate===!1)return;j2(H0);break;case g.DOLLY:if(w.enableZoom===!1)return;O2(H0);break;case g.PAN:if(w.enablePan===!1)return;R2(H0);break}}function Yi(H0){w.enabled===!1||w.enableZoom===!1||O!==g.NONE||(H0.preventDefault(),w.dispatchEvent(ec),w2(H0),w.dispatchEvent(S6))}function Wi(H0){w.enabled===!1||w.enablePan===!1||X2(H0)}function z0(H0){switch(J2(H0),W0.length){case 1:switch(w.touches.ONE){case Kr.ROTATE:if(w.enableRotate===!1)return;H2(),O=g.TOUCH_ROTATE;break;case Kr.PAN:if(w.enablePan===!1)return;Q2(),O=g.TOUCH_PAN;break;default:O=g.NONE}break;case 2:switch(w.touches.TWO){case Kr.DOLLY_PAN:if(w.enableZoom===!1&&w.enablePan===!1)return;Qe(),O=g.TOUCH_DOLLY_PAN;break;case Kr.DOLLY_ROTATE:if(w.enableZoom===!1&&w.enableRotate===!1)return;$2(),O=g.TOUCH_DOLLY_ROTATE;break;default:O=g.NONE}break;default:O=g.NONE}O!==g.NONE&&w.dispatchEvent(ec)}function L0(H0){switch(J2(H0),O){case g.TOUCH_ROTATE:if(w.enableRotate===!1)return;fe(H0),w.update();break;case g.TOUCH_PAN:if(w.enablePan===!1)return;K2(H0),w.update();break;case g.TOUCH_DOLLY_PAN:if(w.enableZoom===!1&&w.enablePan===!1)return;Oe(H0),w.update();break;case g.TOUCH_DOLLY_ROTATE:if(w.enableZoom===!1&&w.enableRotate===!1)return;_e(H0),w.update();break;default:O=g.NONE}}function g2(H0){w.enabled!==!1&&H0.preventDefault()}function G2(H0){W0.push(H0)}function q2(H0){delete Q0[H0.pointerId];for(let r2=0;r2<W0.length;r2++)if(W0[r2].pointerId==H0.pointerId){W0.splice(r2,1);return}}function J2(H0){let r2=Q0[H0.pointerId];r2===void 0&&(r2=new Le,Q0[H0.pointerId]=r2),r2.set(H0.pageX,H0.pageY)}function Ce(H0){const r2=H0.pointerId===W0[0].pointerId?W0[1]:W0[0];return Q0[r2.pointerId]}w.domElement.addEventListener("contextmenu",g2),w.domElement.addEventListener("pointerdown",ni),w.domElement.addEventListener("pointercancel",Ni),w.domElement.addEventListener("wheel",Yi,{passive:!1}),this.update()}}class vi0 extends ps{constructor(u){super(u),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(y){return new wi0(y)}),this.register(function(y){return new Ei0(y)}),this.register(function(y){return new Ii0(y)}),this.register(function(y){return new Ti0(y)}),this.register(function(y){return new Ri0(y)}),this.register(function(y){return new ki0(y)}),this.register(function(y){return new Di0(y)}),this.register(function(y){return new xi0(y)}),this.register(function(y){return new Ai0(y)}),this.register(function(y){return new Mi0(y)}),this.register(function(y){return new Ci0(y)}),this.register(function(y){return new Li0(y)}),this.register(function(y){return new Pi0(y)})}load(u,y,w,g){const O=this;let V;this.resourcePath!==""?V=this.resourcePath:this.path!==""?V=this.path:V=Rr.extractUrlBase(u),this.manager.itemStart(u);const z=function(Q){g?g(Q):console.error(Q),O.manager.itemError(u),O.manager.itemEnd(u)},K=new rp(this.manager);K.setPath(this.path),K.setResponseType("arraybuffer"),K.setRequestHeader(this.requestHeader),K.setWithCredentials(this.withCredentials),K.load(u,function(Q){try{O.parse(Q,V,function(n0){y(n0),O.manager.itemEnd(u)},z)}catch(n0){z(n0)}},w,z)}setDRACOLoader(u){return this.dracoLoader=u,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(u){return this.ktx2Loader=u,this}setMeshoptDecoder(u){return this.meshoptDecoder=u,this}register(u){return this.pluginCallbacks.indexOf(u)===-1&&this.pluginCallbacks.push(u),this}unregister(u){return this.pluginCallbacks.indexOf(u)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(u),1),this}parse(u,y,w,g){let O;const V={},z={};if(typeof u=="string")O=JSON.parse(u);else if(u instanceof ArrayBuffer)if(Rr.decodeText(new Uint8Array(u,0,4))===cp){try{V[pt.KHR_BINARY_GLTF]=new Oi0(u)}catch(n0){g&&g(n0);return}O=JSON.parse(V[pt.KHR_BINARY_GLTF].content)}else O=JSON.parse(Rr.decodeText(new Uint8Array(u)));else O=u;if(O.asset===void 0||O.asset.version[0]<2){g&&g(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const K=new Xi0(O,{path:y||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});K.fileLoader.setRequestHeader(this.requestHeader);for(let Q=0;Q<this.pluginCallbacks.length;Q++){const n0=this.pluginCallbacks[Q](K);z[n0.name]=n0,V[n0.name]=!0}if(O.extensionsUsed)for(let Q=0;Q<O.extensionsUsed.length;++Q){const n0=O.extensionsUsed[Q],_0=O.extensionsRequired||[];switch(n0){case pt.KHR_MATERIALS_UNLIT:V[n0]=new Si0;break;case pt.KHR_DRACO_MESH_COMPRESSION:V[n0]=new Fi0(O,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:V[n0]=new Bi0;break;case pt.KHR_MESH_QUANTIZATION:V[n0]=new Ni0;break;default:_0.indexOf(n0)>=0&&z[n0]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+n0+'".')}}K.setExtensions(V),K.setPlugins(z),K.parse(w,g)}parseAsync(u,y){const w=this;return new Promise(function(g,O){w.parse(u,y,g,O)})}}function gi0(){let q={};return{get:function(u){return q[u]},add:function(u,y){q[u]=y},remove:function(u){delete q[u]},removeAll:function(){q={}}}}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ci0{constructor(u){this.parser=u,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const u=this.parser,y=this.parser.json.nodes||[];for(let w=0,g=y.length;w<g;w++){const O=y[w];O.extensions&&O.extensions[this.name]&&O.extensions[this.name].light!==void 0&&u._addNodeRef(this.cache,O.extensions[this.name].light)}}_loadLight(u){const y=this.parser,w="light:"+u;let g=y.cache.get(w);if(g)return g;const O=y.json,K=((O.extensions&&O.extensions[this.name]||{}).lights||[])[u];let Q;const n0=new Pe(16777215);K.color!==void 0&&n0.fromArray(K.color);const _0=K.range!==void 0?K.range:0;switch(K.type){case"directional":Q=new ei0(n0),Q.target.position.set(0,0,-1),Q.add(Q.target);break;case"point":Q=new Jt0(n0),Q.distance=_0;break;case"spot":Q=new sp(n0),Q.distance=_0,K.spot=K.spot||{},K.spot.innerConeAngle=K.spot.innerConeAngle!==void 0?K.spot.innerConeAngle:0,K.spot.outerConeAngle=K.spot.outerConeAngle!==void 0?K.spot.outerConeAngle:Math.PI/4,Q.angle=K.spot.outerConeAngle,Q.penumbra=1-K.spot.innerConeAngle/K.spot.outerConeAngle,Q.target.position.set(0,0,-1),Q.add(Q.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+K.type)}return Q.position.set(0,0,0),Q.decay=2,Q1(Q,K),K.intensity!==void 0&&(Q.intensity=K.intensity),Q.name=y.createUniqueName(K.name||"light_"+u),g=Promise.resolve(Q),y.cache.add(w,g),g}getDependency(u,y){if(u==="light")return this._loadLight(y)}createNodeAttachment(u){const y=this,w=this.parser,O=w.json.nodes[u],z=(O.extensions&&O.extensions[this.name]||{}).light;return z===void 0?null:this._loadLight(z).then(function(K){return w._getNodeRef(y.cache,z,K)})}}class Si0{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return $1}extendParams(u,y,w){const g=[];u.color=new Pe(1,1,1),u.opacity=1;const O=y.pbrMetallicRoughness;if(O){if(Array.isArray(O.baseColorFactor)){const V=O.baseColorFactor;u.color.fromArray(V),u.opacity=V[3]}O.baseColorTexture!==void 0&&g.push(w.assignTexture(u,"map",O.baseColorTexture,xt))}return Promise.all(g)}}class xi0{constructor(u){this.parser=u,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(u,y){const g=this.parser.json.materials[u];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const O=g.extensions[this.name].emissiveStrength;return O!==void 0&&(y.emissiveIntensity=O),Promise.resolve()}}class wi0{constructor(u){this.parser=u,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(u){const w=this.parser.json.materials[u];return!w.extensions||!w.extensions[this.name]?null:Or}extendMaterialParams(u,y){const w=this.parser,g=w.json.materials[u];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const O=[],V=g.extensions[this.name];if(V.clearcoatFactor!==void 0&&(y.clearcoat=V.clearcoatFactor),V.clearcoatTexture!==void 0&&O.push(w.assignTexture(y,"clearcoatMap",V.clearcoatTexture)),V.clearcoatRoughnessFactor!==void 0&&(y.clearcoatRoughness=V.clearcoatRoughnessFactor),V.clearcoatRoughnessTexture!==void 0&&O.push(w.assignTexture(y,"clearcoatRoughnessMap",V.clearcoatRoughnessTexture)),V.clearcoatNormalTexture!==void 0&&(O.push(w.assignTexture(y,"clearcoatNormalMap",V.clearcoatNormalTexture)),V.clearcoatNormalTexture.scale!==void 0)){const z=V.clearcoatNormalTexture.scale;y.clearcoatNormalScale=new Le(z,z)}return Promise.all(O)}}class Mi0{constructor(u){this.parser=u,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(u){const w=this.parser.json.materials[u];return!w.extensions||!w.extensions[this.name]?null:Or}extendMaterialParams(u,y){const w=this.parser,g=w.json.materials[u];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const O=[],V=g.extensions[this.name];return V.iridescenceFactor!==void 0&&(y.iridescence=V.iridescenceFactor),V.iridescenceTexture!==void 0&&O.push(w.assignTexture(y,"iridescenceMap",V.iridescenceTexture)),V.iridescenceIor!==void 0&&(y.iridescenceIOR=V.iridescenceIor),y.iridescenceThicknessRange===void 0&&(y.iridescenceThicknessRange=[100,400]),V.iridescenceThicknessMinimum!==void 0&&(y.iridescenceThicknessRange[0]=V.iridescenceThicknessMinimum),V.iridescenceThicknessMaximum!==void 0&&(y.iridescenceThicknessRange[1]=V.iridescenceThicknessMaximum),V.iridescenceThicknessTexture!==void 0&&O.push(w.assignTexture(y,"iridescenceThicknessMap",V.iridescenceThicknessTexture)),Promise.all(O)}}class Ti0{constructor(u){this.parser=u,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(u){const w=this.parser.json.materials[u];return!w.extensions||!w.extensions[this.name]?null:Or}extendMaterialParams(u,y){const w=this.parser,g=w.json.materials[u];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const O=[];y.sheenColor=new Pe(0,0,0),y.sheenRoughness=0,y.sheen=1;const V=g.extensions[this.name];return V.sheenColorFactor!==void 0&&y.sheenColor.fromArray(V.sheenColorFactor),V.sheenRoughnessFactor!==void 0&&(y.sheenRoughness=V.sheenRoughnessFactor),V.sheenColorTexture!==void 0&&O.push(w.assignTexture(y,"sheenColorMap",V.sheenColorTexture,xt)),V.sheenRoughnessTexture!==void 0&&O.push(w.assignTexture(y,"sheenRoughnessMap",V.sheenRoughnessTexture)),Promise.all(O)}}class Ri0{constructor(u){this.parser=u,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(u){const w=this.parser.json.materials[u];return!w.extensions||!w.extensions[this.name]?null:Or}extendMaterialParams(u,y){const w=this.parser,g=w.json.materials[u];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const O=[],V=g.extensions[this.name];return V.transmissionFactor!==void 0&&(y.transmission=V.transmissionFactor),V.transmissionTexture!==void 0&&O.push(w.assignTexture(y,"transmissionMap",V.transmissionTexture)),Promise.all(O)}}class ki0{constructor(u){this.parser=u,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(u){const w=this.parser.json.materials[u];return!w.extensions||!w.extensions[this.name]?null:Or}extendMaterialParams(u,y){const w=this.parser,g=w.json.materials[u];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const O=[],V=g.extensions[this.name];y.thickness=V.thicknessFactor!==void 0?V.thicknessFactor:0,V.thicknessTexture!==void 0&&O.push(w.assignTexture(y,"thicknessMap",V.thicknessTexture)),y.attenuationDistance=V.attenuationDistance||1/0;const z=V.attenuationColor||[1,1,1];return y.attenuationColor=new Pe(z[0],z[1],z[2]),Promise.all(O)}}class Di0{constructor(u){this.parser=u,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(u){const w=this.parser.json.materials[u];return!w.extensions||!w.extensions[this.name]?null:Or}extendMaterialParams(u,y){const g=this.parser.json.materials[u];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const O=g.extensions[this.name];return y.ior=O.ior!==void 0?O.ior:1.5,Promise.resolve()}}class Ai0{constructor(u){this.parser=u,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(u){const w=this.parser.json.materials[u];return!w.extensions||!w.extensions[this.name]?null:Or}extendMaterialParams(u,y){const w=this.parser,g=w.json.materials[u];if(!g.extensions||!g.extensions[this.name])return Promise.resolve();const O=[],V=g.extensions[this.name];y.specularIntensity=V.specularFactor!==void 0?V.specularFactor:1,V.specularTexture!==void 0&&O.push(w.assignTexture(y,"specularIntensityMap",V.specularTexture));const z=V.specularColorFactor||[1,1,1];return y.specularColor=new Pe(z[0],z[1],z[2]),V.specularColorTexture!==void 0&&O.push(w.assignTexture(y,"specularColorMap",V.specularColorTexture,xt)),Promise.all(O)}}class Ei0{constructor(u){this.parser=u,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(u){const y=this.parser,w=y.json,g=w.textures[u];if(!g.extensions||!g.extensions[this.name])return null;const O=g.extensions[this.name],V=y.options.ktx2Loader;if(!V){if(w.extensionsRequired&&w.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return y.loadTextureImage(u,O.source,V)}}class Ii0{constructor(u){this.parser=u,this.name=pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(u){const y=this.name,w=this.parser,g=w.json,O=g.textures[u];if(!O.extensions||!O.extensions[y])return null;const V=O.extensions[y],z=g.images[V.source];let K=w.textureLoader;if(z.uri){const Q=w.options.manager.getHandler(z.uri);Q!==null&&(K=Q)}return this.detectSupport().then(function(Q){if(Q)return w.loadTextureImage(u,V.source,K);if(g.extensionsRequired&&g.extensionsRequired.indexOf(y)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return w.loadTexture(u)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(u){const y=new Image;y.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",y.onload=y.onerror=function(){u(y.height===1)}})),this.isSupported}}class Li0{constructor(u){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=u}loadBufferView(u){const y=this.parser.json,w=y.bufferViews[u];if(w.extensions&&w.extensions[this.name]){const g=w.extensions[this.name],O=this.parser.getDependency("buffer",g.buffer),V=this.parser.options.meshoptDecoder;if(!V||!V.supported){if(y.extensionsRequired&&y.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return O.then(function(z){const K=g.byteOffset||0,Q=g.byteLength||0,n0=g.count,_0=g.byteStride,c0=new Uint8Array(z,K,Q);return V.decodeGltfBufferAsync?V.decodeGltfBufferAsync(n0,_0,c0,g.mode,g.filter).then(function(g0){return g0.buffer}):V.ready.then(function(){const g0=new ArrayBuffer(n0*_0);return V.decodeGltfBuffer(new Uint8Array(g0),n0,_0,c0,g.mode,g.filter),g0})})}else return null}}class Pi0{constructor(u){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=u}createNodeMesh(u){const y=this.parser.json,w=y.nodes[u];if(!w.extensions||!w.extensions[this.name]||w.mesh===void 0)return null;const g=y.meshes[w.mesh];for(const Q of g.primitives)if(Q.mode!==Gn.TRIANGLES&&Q.mode!==Gn.TRIANGLE_STRIP&&Q.mode!==Gn.TRIANGLE_FAN&&Q.mode!==void 0)return null;const V=w.extensions[this.name].attributes,z=[],K={};for(const Q in V)z.push(this.parser.getDependency("accessor",V[Q]).then(n0=>(K[Q]=n0,K[Q])));return z.length<1?null:(z.push(this.parser.createNodeMesh(u)),Promise.all(z).then(Q=>{const n0=Q.pop(),_0=n0.isGroup?n0.children:[n0],c0=Q[0].count,g0=[];for(const R0 of _0){const f0=new $e,h0=new t2,k0=new u1,G0=new t2(1,1,1),P0=new Ft0(R0.geometry,R0.material,c0);for(let F0=0;F0<c0;F0++)K.TRANSLATION&&h0.fromBufferAttribute(K.TRANSLATION,F0),K.ROTATION&&k0.fromBufferAttribute(K.ROTATION,F0),K.SCALE&&G0.fromBufferAttribute(K.SCALE,F0),P0.setMatrixAt(F0,f0.compose(h0,k0,G0));for(const F0 in K)F0!=="TRANSLATION"&&F0!=="ROTATION"&&F0!=="SCALE"&&R0.geometry.setAttribute(F0,K[F0]);Zt.prototype.copy.call(P0,R0),P0.frustumCulled=!1,this.parser.assignFinalMaterial(P0),g0.push(P0)}return n0.isGroup?(n0.clear(),n0.add(...g0),n0):g0[0]}))}}const cp="glTF",Yo=12,x6={JSON:1313821514,BIN:5130562};class Oi0{constructor(u){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const y=new DataView(u,0,Yo);if(this.header={magic:Rr.decodeText(new Uint8Array(u.slice(0,4))),version:y.getUint32(4,!0),length:y.getUint32(8,!0)},this.header.magic!==cp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const w=this.header.length-Yo,g=new DataView(u,Yo);let O=0;for(;O<w;){const V=g.getUint32(O,!0);O+=4;const z=g.getUint32(O,!0);if(O+=4,z===x6.JSON){const K=new Uint8Array(u,Yo+O,V);this.content=Rr.decodeText(K)}else if(z===x6.BIN){const K=Yo+O;this.body=u.slice(K,K+V)}O+=V}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Fi0{constructor(u,y){if(!y)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=u,this.dracoLoader=y,this.dracoLoader.preload()}decodePrimitive(u,y){const w=this.json,g=this.dracoLoader,O=u.extensions[this.name].bufferView,V=u.extensions[this.name].attributes,z={},K={},Q={};for(const n0 in V){const _0=uc[n0]||n0.toLowerCase();z[_0]=V[n0]}for(const n0 in u.attributes){const _0=uc[n0]||n0.toLowerCase();if(V[n0]!==void 0){const c0=w.accessors[u.attributes[n0]],g0=fo[c0.componentType];Q[_0]=g0.name,K[_0]=c0.normalized===!0}}return y.getDependency("bufferView",O).then(function(n0){return new Promise(function(_0){g.decodeDracoFile(n0,function(c0){for(const g0 in c0.attributes){const R0=c0.attributes[g0],f0=K[g0];f0!==void 0&&(R0.normalized=f0)}_0(c0)},z,Q)})})}}class Bi0{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(u,y){return y.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),y.offset===void 0&&y.rotation===void 0&&y.scale===void 0||(u=u.clone(),y.offset!==void 0&&u.offset.fromArray(y.offset),y.rotation!==void 0&&(u.rotation=y.rotation),y.scale!==void 0&&u.repeat.fromArray(y.scale),u.needsUpdate=!0),u}}class Ni0{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class lp extends as{constructor(u,y,w,g){super(u,y,w,g)}copySampleValue_(u){const y=this.resultBuffer,w=this.sampleValues,g=this.valueSize,O=u*g*3+g;for(let V=0;V!==g;V++)y[V]=w[O+V];return y}interpolate_(u,y,w,g){const O=this.resultBuffer,V=this.sampleValues,z=this.valueSize,K=z*2,Q=z*3,n0=g-y,_0=(w-y)/n0,c0=_0*_0,g0=c0*_0,R0=u*Q,f0=R0-Q,h0=-2*g0+3*c0,k0=g0-c0,G0=1-h0,P0=k0-c0+_0;for(let F0=0;F0!==z;F0++){const W0=V[f0+F0+z],Q0=V[f0+F0+K]*n0,o2=V[R0+F0+z],E0=V[R0+F0]*n0;O[F0]=G0*W0+P0*Q0+h0*o2+k0*E0}return O}}const Wi0=new u1;class Gi0 extends lp{interpolate_(u,y,w,g){const O=super.interpolate_(u,y,w,g);return Wi0.fromArray(O).normalize().toArray(O),O}}const Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},w6={9728:Fi,9729:Tn,9984:sc,9985:L6,9986:u_,9987:kr},M6={33071:Un,33648:m_,10497:yo},tc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Y1={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ui0={CUBICSPLINE:void 0,LINEAR:go,STEP:ns},ic={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zi0(q){return q.DefaultMaterial===void 0&&(q.DefaultMaterial=new Tc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:tr})),q.DefaultMaterial}function Qo(q,u,y){for(const w in y.extensions)q[w]===void 0&&(u.userData.gltfExtensions=u.userData.gltfExtensions||{},u.userData.gltfExtensions[w]=y.extensions[w])}function Q1(q,u){u.extras!==void 0&&(typeof u.extras=="object"?Object.assign(q.userData,u.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+u.extras))}function Vi0(q,u,y){let w=!1,g=!1,O=!1;for(let Q=0,n0=u.length;Q<n0;Q++){const _0=u[Q];if(_0.POSITION!==void 0&&(w=!0),_0.NORMAL!==void 0&&(g=!0),_0.COLOR_0!==void 0&&(O=!0),w&&g&&O)break}if(!w&&!g&&!O)return Promise.resolve(q);const V=[],z=[],K=[];for(let Q=0,n0=u.length;Q<n0;Q++){const _0=u[Q];if(w){const c0=_0.POSITION!==void 0?y.getDependency("accessor",_0.POSITION):q.attributes.position;V.push(c0)}if(g){const c0=_0.NORMAL!==void 0?y.getDependency("accessor",_0.NORMAL):q.attributes.normal;z.push(c0)}if(O){const c0=_0.COLOR_0!==void 0?y.getDependency("accessor",_0.COLOR_0):q.attributes.color;K.push(c0)}}return Promise.all([Promise.all(V),Promise.all(z),Promise.all(K)]).then(function(Q){const n0=Q[0],_0=Q[1],c0=Q[2];return w&&(q.morphAttributes.position=n0),g&&(q.morphAttributes.normal=_0),O&&(q.morphAttributes.color=c0),q.morphTargetsRelative=!0,q})}function ji0(q,u){if(q.updateMorphTargets(),u.weights!==void 0)for(let y=0,w=u.weights.length;y<w;y++)q.morphTargetInfluences[y]=u.weights[y];if(u.extras&&Array.isArray(u.extras.targetNames)){const y=u.extras.targetNames;if(q.morphTargetInfluences.length===y.length){q.morphTargetDictionary={};for(let w=0,g=y.length;w<g;w++)q.morphTargetDictionary[y[w]]=w}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Hi0(q){const u=q.extensions&&q.extensions[pt.KHR_DRACO_MESH_COMPRESSION];let y;return u?y="draco:"+u.bufferView+":"+u.indices+":"+T6(u.attributes):y=q.indices+":"+T6(q.attributes)+":"+q.mode,y}function T6(q){let u="";const y=Object.keys(q).sort();for(let w=0,g=y.length;w<g;w++)u+=y[w]+":"+q[y[w]]+";";return u}function fc(q){switch(q){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qi0(q){return q.search(/\.jpe?g($|\?)/i)>0||q.search(/^data\:image\/jpeg/)===0?"image/jpeg":q.search(/\.webp($|\?)/i)>0||q.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const bi0=new $e;class Xi0{constructor(u={},y={}){this.json=u,this.extensions={},this.plugins={},this.options=y,this.cache=new gi0,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let w=!1,g=!1,O=-1;typeof navigator<"u"&&(w=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,g=navigator.userAgent.indexOf("Firefox")>-1,O=g?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||w||g&&O<98?this.textureLoader=new op(this.options.manager):this.textureLoader=new ii0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(u){this.extensions=u}setPlugins(u){this.plugins=u}parse(u,y){const w=this,g=this.json,O=this.extensions;this.cache.removeAll(),this._invokeAll(function(V){return V._markDefs&&V._markDefs()}),Promise.all(this._invokeAll(function(V){return V.beforeRoot&&V.beforeRoot()})).then(function(){return Promise.all([w.getDependencies("scene"),w.getDependencies("animation"),w.getDependencies("camera")])}).then(function(V){const z={scene:V[0][g.scene||0],scenes:V[0],animations:V[1],cameras:V[2],asset:g.asset,parser:w,userData:{}};Qo(O,z,g),Q1(z,g),Promise.all(w._invokeAll(function(K){return K.afterRoot&&K.afterRoot(z)})).then(function(){u(z)})}).catch(y)}_markDefs(){const u=this.json.nodes||[],y=this.json.skins||[],w=this.json.meshes||[];for(let g=0,O=y.length;g<O;g++){const V=y[g].joints;for(let z=0,K=V.length;z<K;z++)u[V[z]].isBone=!0}for(let g=0,O=u.length;g<O;g++){const V=u[g];V.mesh!==void 0&&(this._addNodeRef(this.meshCache,V.mesh),V.skin!==void 0&&(w[V.mesh].isSkinnedMesh=!0)),V.camera!==void 0&&this._addNodeRef(this.cameraCache,V.camera)}}_addNodeRef(u,y){y!==void 0&&(u.refs[y]===void 0&&(u.refs[y]=u.uses[y]=0),u.refs[y]++)}_getNodeRef(u,y,w){if(u.refs[y]<=1)return w;const g=w.clone(),O=(V,z)=>{const K=this.associations.get(V);K!=null&&this.associations.set(z,K);for(const[Q,n0]of V.children.entries())O(n0,z.children[Q])};return O(w,g),g.name+="_instance_"+u.uses[y]++,g}_invokeOne(u){const y=Object.values(this.plugins);y.push(this);for(let w=0;w<y.length;w++){const g=u(y[w]);if(g)return g}return null}_invokeAll(u){const y=Object.values(this.plugins);y.unshift(this);const w=[];for(let g=0;g<y.length;g++){const O=u(y[g]);O&&w.push(O)}return w}getDependency(u,y){const w=u+":"+y;let g=this.cache.get(w);if(!g){switch(u){case"scene":g=this.loadScene(y);break;case"node":g=this._invokeOne(function(O){return O.loadNode&&O.loadNode(y)});break;case"mesh":g=this._invokeOne(function(O){return O.loadMesh&&O.loadMesh(y)});break;case"accessor":g=this.loadAccessor(y);break;case"bufferView":g=this._invokeOne(function(O){return O.loadBufferView&&O.loadBufferView(y)});break;case"buffer":g=this.loadBuffer(y);break;case"material":g=this._invokeOne(function(O){return O.loadMaterial&&O.loadMaterial(y)});break;case"texture":g=this._invokeOne(function(O){return O.loadTexture&&O.loadTexture(y)});break;case"skin":g=this.loadSkin(y);break;case"animation":g=this._invokeOne(function(O){return O.loadAnimation&&O.loadAnimation(y)});break;case"camera":g=this.loadCamera(y);break;default:if(g=this._invokeOne(function(O){return O!=this&&O.getDependency&&O.getDependency(u,y)}),!g)throw new Error("Unknown type: "+u);break}this.cache.add(w,g)}return g}getDependencies(u){let y=this.cache.get(u);if(!y){const w=this,g=this.json[u+(u==="mesh"?"es":"s")]||[];y=Promise.all(g.map(function(O,V){return w.getDependency(u,V)})),this.cache.add(u,y)}return y}loadBuffer(u){const y=this.json.buffers[u],w=this.fileLoader;if(y.type&&y.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+y.type+" buffer type is not supported.");if(y.uri===void 0&&u===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const g=this.options;return new Promise(function(O,V){w.load(Rr.resolveURL(y.uri,g.path),O,void 0,function(){V(new Error('THREE.GLTFLoader: Failed to load buffer "'+y.uri+'".'))})})}loadBufferView(u){const y=this.json.bufferViews[u];return this.getDependency("buffer",y.buffer).then(function(w){const g=y.byteLength||0,O=y.byteOffset||0;return w.slice(O,O+g)})}loadAccessor(u){const y=this,w=this.json,g=this.json.accessors[u];if(g.bufferView===void 0&&g.sparse===void 0){const V=tc[g.type],z=fo[g.componentType],K=g.normalized===!0,Q=new z(g.count*V);return Promise.resolve(new Zi(Q,V,K))}const O=[];return g.bufferView!==void 0?O.push(this.getDependency("bufferView",g.bufferView)):O.push(null),g.sparse!==void 0&&(O.push(this.getDependency("bufferView",g.sparse.indices.bufferView)),O.push(this.getDependency("bufferView",g.sparse.values.bufferView))),Promise.all(O).then(function(V){const z=V[0],K=tc[g.type],Q=fo[g.componentType],n0=Q.BYTES_PER_ELEMENT,_0=n0*K,c0=g.byteOffset||0,g0=g.bufferView!==void 0?w.bufferViews[g.bufferView].byteStride:void 0,R0=g.normalized===!0;let f0,h0;if(g0&&g0!==_0){const k0=Math.floor(c0/g0),G0="InterleavedBuffer:"+g.bufferView+":"+g.componentType+":"+k0+":"+g.count;let P0=y.cache.get(G0);P0||(f0=new Q(z,k0*g0,g.count*g0/n0),P0=new At0(f0,g0/n0),y.cache.add(G0,P0)),h0=new Cc(P0,K,c0%g0/n0,R0)}else z===null?f0=new Q(g.count*K):f0=new Q(z,c0,g.count*K),h0=new Zi(f0,K,R0);if(g.sparse!==void 0){const k0=tc.SCALAR,G0=fo[g.sparse.indices.componentType],P0=g.sparse.indices.byteOffset||0,F0=g.sparse.values.byteOffset||0,W0=new G0(V[1],P0,g.sparse.count*k0),Q0=new Q(V[2],F0,g.sparse.count*K);z!==null&&(h0=new Zi(h0.array.slice(),h0.itemSize,h0.normalized));for(let o2=0,E0=W0.length;o2<E0;o2++){const K0=W0[o2];if(h0.setX(K0,Q0[o2*K]),K>=2&&h0.setY(K0,Q0[o2*K+1]),K>=3&&h0.setZ(K0,Q0[o2*K+2]),K>=4&&h0.setW(K0,Q0[o2*K+3]),K>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return h0})}loadTexture(u){const y=this.json,w=this.options,O=y.textures[u].source,V=y.images[O];let z=this.textureLoader;if(V.uri){const K=w.manager.getHandler(V.uri);K!==null&&(z=K)}return this.loadTextureImage(u,O,z)}loadTextureImage(u,y,w){const g=this,O=this.json,V=O.textures[u],z=O.images[y],K=(z.uri||z.bufferView)+":"+V.sampler;if(this.textureCache[K])return this.textureCache[K];const Q=this.loadImageSource(y,w).then(function(n0){n0.flipY=!1,n0.name=V.name||z.name||"";const c0=(O.samplers||{})[V.sampler]||{};return n0.magFilter=w6[c0.magFilter]||Tn,n0.minFilter=w6[c0.minFilter]||kr,n0.wrapS=M6[c0.wrapS]||yo,n0.wrapT=M6[c0.wrapT]||yo,g.associations.set(n0,{textures:u}),n0}).catch(function(){return null});return this.textureCache[K]=Q,Q}loadImageSource(u,y){const w=this,g=this.json,O=this.options;if(this.sourceCache[u]!==void 0)return this.sourceCache[u].then(_0=>_0.clone());const V=g.images[u],z=self.URL||self.webkitURL;let K=V.uri||"",Q=!1;if(V.bufferView!==void 0)K=w.getDependency("bufferView",V.bufferView).then(function(_0){Q=!0;const c0=new Blob([_0],{type:V.mimeType});return K=z.createObjectURL(c0),K});else if(V.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+u+" is missing URI and bufferView");const n0=Promise.resolve(K).then(function(_0){return new Promise(function(c0,g0){let R0=c0;y.isImageBitmapLoader===!0&&(R0=function(f0){const h0=new ji(f0);h0.needsUpdate=!0,c0(h0)}),y.load(Rr.resolveURL(_0,O.path),R0,void 0,g0)})}).then(function(_0){return Q===!0&&z.revokeObjectURL(K),_0.userData.mimeType=V.mimeType||qi0(V.uri),_0}).catch(function(_0){throw console.error("THREE.GLTFLoader: Couldn't load texture",K),_0});return this.sourceCache[u]=n0,n0}assignTexture(u,y,w,g){const O=this;return this.getDependency("texture",w.index).then(function(V){if(!V)return null;if(w.texCoord!==void 0&&w.texCoord!=0&&!(y==="aoMap"&&w.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+w.texCoord+" for texture "+y+" not yet supported."),O.extensions[pt.KHR_TEXTURE_TRANSFORM]){const z=w.extensions!==void 0?w.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(z){const K=O.associations.get(V);V=O.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(V,z),O.associations.set(V,K)}}return g!==void 0&&(V.encoding=g),u[y]=V,V})}assignFinalMaterial(u){const y=u.geometry;let w=u.material;const g=y.attributes.tangent===void 0,O=y.attributes.color!==void 0,V=y.attributes.normal===void 0;if(u.isPoints){const z="PointsMaterial:"+w.uuid;let K=this.cache.get(z);K||(K=new Mc,jn.prototype.copy.call(K,w),K.color.copy(w.color),K.map=w.map,K.sizeAttenuation=!1,this.cache.add(z,K)),w=K}else if(u.isLine){const z="LineBasicMaterial:"+w.uuid;let K=this.cache.get(z);K||(K=new M_,jn.prototype.copy.call(K,w),K.color.copy(w.color),this.cache.add(z,K)),w=K}if(g||O||V){let z="ClonedMaterial:"+w.uuid+":";g&&(z+="derivative-tangents:"),O&&(z+="vertex-colors:"),V&&(z+="flat-shading:");let K=this.cache.get(z);K||(K=w.clone(),O&&(K.vertexColors=!0),V&&(K.flatShading=!0),g&&(K.normalScale&&(K.normalScale.y*=-1),K.clearcoatNormalScale&&(K.clearcoatNormalScale.y*=-1)),this.cache.add(z,K),this.associations.set(K,this.associations.get(w))),w=K}w.aoMap&&y.attributes.uv2===void 0&&y.attributes.uv!==void 0&&y.setAttribute("uv2",y.attributes.uv),u.material=w}getMaterialType(){return Tc}loadMaterial(u){const y=this,w=this.json,g=this.extensions,O=w.materials[u];let V;const z={},K=O.extensions||{},Q=[];if(K[pt.KHR_MATERIALS_UNLIT]){const _0=g[pt.KHR_MATERIALS_UNLIT];V=_0.getMaterialType(),Q.push(_0.extendParams(z,O,y))}else{const _0=O.pbrMetallicRoughness||{};if(z.color=new Pe(1,1,1),z.opacity=1,Array.isArray(_0.baseColorFactor)){const c0=_0.baseColorFactor;z.color.fromArray(c0),z.opacity=c0[3]}_0.baseColorTexture!==void 0&&Q.push(y.assignTexture(z,"map",_0.baseColorTexture,xt)),z.metalness=_0.metallicFactor!==void 0?_0.metallicFactor:1,z.roughness=_0.roughnessFactor!==void 0?_0.roughnessFactor:1,_0.metallicRoughnessTexture!==void 0&&(Q.push(y.assignTexture(z,"metalnessMap",_0.metallicRoughnessTexture)),Q.push(y.assignTexture(z,"roughnessMap",_0.metallicRoughnessTexture))),V=this._invokeOne(function(c0){return c0.getMaterialType&&c0.getMaterialType(u)}),Q.push(Promise.all(this._invokeAll(function(c0){return c0.extendMaterialParams&&c0.extendMaterialParams(u,z)})))}O.doubleSided===!0&&(z.side=v_);const n0=O.alphaMode||ic.OPAQUE;if(n0===ic.BLEND?(z.transparent=!0,z.depthWrite=!1):(z.transparent=!1,n0===ic.MASK&&(z.alphaTest=O.alphaCutoff!==void 0?O.alphaCutoff:.5)),O.normalTexture!==void 0&&V!==$1&&(Q.push(y.assignTexture(z,"normalMap",O.normalTexture)),z.normalScale=new Le(1,1),O.normalTexture.scale!==void 0)){const _0=O.normalTexture.scale;z.normalScale.set(_0,_0)}return O.occlusionTexture!==void 0&&V!==$1&&(Q.push(y.assignTexture(z,"aoMap",O.occlusionTexture)),O.occlusionTexture.strength!==void 0&&(z.aoMapIntensity=O.occlusionTexture.strength)),O.emissiveFactor!==void 0&&V!==$1&&(z.emissive=new Pe().fromArray(O.emissiveFactor)),O.emissiveTexture!==void 0&&V!==$1&&Q.push(y.assignTexture(z,"emissiveMap",O.emissiveTexture,xt)),Promise.all(Q).then(function(){const _0=new V(z);return O.name&&(_0.name=O.name),Q1(_0,O),y.associations.set(_0,{materials:u}),O.extensions&&Qo(g,_0,O),_0})}createUniqueName(u){const y=Mt.sanitizeNodeName(u||"");let w=y;for(let g=1;this.nodeNamesUsed[w];++g)w=y+"_"+g;return this.nodeNamesUsed[w]=!0,w}loadGeometries(u){const y=this,w=this.extensions,g=this.primitiveCache;function O(z){return w[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(z,y).then(function(K){return R6(K,z,y)})}const V=[];for(let z=0,K=u.length;z<K;z++){const Q=u[z],n0=Hi0(Q),_0=g[n0];if(_0)V.push(_0.promise);else{let c0;Q.extensions&&Q.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?c0=O(Q):c0=R6(new Rn,Q,y),g[n0]={primitive:Q,promise:c0},V.push(c0)}}return Promise.all(V)}loadMesh(u){const y=this,w=this.json,g=this.extensions,O=w.meshes[u],V=O.primitives,z=[];for(let K=0,Q=V.length;K<Q;K++){const n0=V[K].material===void 0?zi0(this.cache):this.getDependency("material",V[K].material);z.push(n0)}return z.push(y.loadGeometries(V)),Promise.all(z).then(function(K){const Q=K.slice(0,K.length-1),n0=K[K.length-1],_0=[];for(let g0=0,R0=n0.length;g0<R0;g0++){const f0=n0[g0],h0=V[g0];let k0;const G0=Q[g0];if(h0.mode===Gn.TRIANGLES||h0.mode===Gn.TRIANGLE_STRIP||h0.mode===Gn.TRIANGLE_FAN||h0.mode===void 0)k0=O.isSkinnedMesh===!0?new It0(f0,G0):new ii(f0,G0),k0.isSkinnedMesh===!0&&!k0.geometry.attributes.skinWeight.normalized&&k0.normalizeSkinWeights(),h0.mode===Gn.TRIANGLE_STRIP?k0.geometry=k6(k0.geometry,aJ):h0.mode===Gn.TRIANGLE_FAN&&(k0.geometry=k6(k0.geometry,O6));else if(h0.mode===Gn.LINES)k0=new wc(f0,G0);else if(h0.mode===Gn.LINE_STRIP)k0=new xc(f0,G0);else if(h0.mode===Gn.LINE_LOOP)k0=new Bt0(f0,G0);else if(h0.mode===Gn.POINTS)k0=new ep(f0,G0);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+h0.mode);Object.keys(k0.geometry.morphAttributes).length>0&&ji0(k0,O),k0.name=y.createUniqueName(O.name||"mesh_"+u),Q1(k0,O),h0.extensions&&Qo(g,k0,h0),y.assignFinalMaterial(k0),_0.push(k0)}for(let g0=0,R0=_0.length;g0<R0;g0++)y.associations.set(_0[g0],{meshes:u,primitives:g0});if(_0.length===1)return _0[0];const c0=new wr;y.associations.set(c0,{meshes:u});for(let g0=0,R0=_0.length;g0<R0;g0++)c0.add(_0[g0]);return c0})}loadCamera(u){let y;const w=this.json.cameras[u],g=w[w.type];if(!g){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return w.type==="perspective"?y=new pn(DJ.radToDeg(g.yfov),g.aspectRatio||1,g.znear||1,g.zfar||2e6):w.type==="orthographic"&&(y=new vc(-g.xmag,g.xmag,g.ymag,-g.ymag,g.znear,g.zfar)),w.name&&(y.name=this.createUniqueName(w.name)),Q1(y,w),Promise.resolve(y)}loadSkin(u){const y=this.json.skins[u],w=[];for(let g=0,O=y.joints.length;g<O;g++)w.push(this.getDependency("node",y.joints[g]));return y.inverseBindMatrices!==void 0?w.push(this.getDependency("accessor",y.inverseBindMatrices)):w.push(null),Promise.all(w).then(function(g){const O=g.pop(),V=g,z=[],K=[];for(let Q=0,n0=V.length;Q<n0;Q++){const _0=V[Q];if(_0){z.push(_0);const c0=new $e;O!==null&&c0.fromArray(O.array,Q*16),K.push(c0)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',y.joints[Q])}return new Sc(z,K)})}loadAnimation(u){const w=this.json.animations[u],g=[],O=[],V=[],z=[],K=[];for(let Q=0,n0=w.channels.length;Q<n0;Q++){const _0=w.channels[Q],c0=w.samplers[_0.sampler],g0=_0.target,R0=g0.node,f0=w.parameters!==void 0?w.parameters[c0.input]:c0.input,h0=w.parameters!==void 0?w.parameters[c0.output]:c0.output;g.push(this.getDependency("node",R0)),O.push(this.getDependency("accessor",f0)),V.push(this.getDependency("accessor",h0)),z.push(c0),K.push(g0)}return Promise.all([Promise.all(g),Promise.all(O),Promise.all(V),Promise.all(z),Promise.all(K)]).then(function(Q){const n0=Q[0],_0=Q[1],c0=Q[2],g0=Q[3],R0=Q[4],f0=[];for(let k0=0,G0=n0.length;k0<G0;k0++){const P0=n0[k0],F0=_0[k0],W0=c0[k0],Q0=g0[k0],o2=R0[k0];if(P0===void 0)continue;P0.updateMatrix();let E0;switch(Y1[o2.path]){case Y1.weights:E0=_s;break;case Y1.rotation:E0=Lr;break;case Y1.position:case Y1.scale:default:E0=cs;break}const K0=P0.name?P0.name:P0.uuid,l2=Q0.interpolation!==void 0?Ui0[Q0.interpolation]:go,E2=[];Y1[o2.path]===Y1.weights?P0.traverse(function(p2){p2.morphTargetInfluences&&E2.push(p2.name?p2.name:p2.uuid)}):E2.push(K0);let P2=W0.array;if(W0.normalized){const p2=fc(P2.constructor),_2=new Float32Array(P2.length);for(let M2=0,F2=P2.length;M2<F2;M2++)_2[M2]=P2[M2]*p2;P2=_2}for(let p2=0,_2=E2.length;p2<_2;p2++){const M2=new E0(E2[p2]+"."+Y1[o2.path],F0.array,P2,l2);Q0.interpolation==="CUBICSPLINE"&&(M2.createInterpolant=function(N2){const L2=this instanceof Lr?Gi0:lp;return new L2(this.times,this.values,this.getValueSize()/3,N2)},M2.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),f0.push(M2)}}const h0=w.name?w.name:"animation_"+u;return new jt0(h0,void 0,f0)})}createNodeMesh(u){const y=this.json,w=this,g=y.nodes[u];return g.mesh===void 0?null:w.getDependency("mesh",g.mesh).then(function(O){const V=w._getNodeRef(w.meshCache,g.mesh,O);return g.weights!==void 0&&V.traverse(function(z){if(z.isMesh)for(let K=0,Q=g.weights.length;K<Q;K++)z.morphTargetInfluences[K]=g.weights[K]}),V})}loadNode(u){const y=this.json,w=this.extensions,g=this,O=y.nodes[u],V=O.name?g.createUniqueName(O.name):"";return function(){const z=[],K=g._invokeOne(function(c0){return c0.createNodeMesh&&c0.createNodeMesh(u)});K&&z.push(K),O.camera!==void 0&&z.push(g.getDependency("camera",O.camera).then(function(c0){return g._getNodeRef(g.cameraCache,O.camera,c0)})),g._invokeAll(function(c0){return c0.createNodeAttachment&&c0.createNodeAttachment(u)}).forEach(function(c0){z.push(c0)});const Q=[],n0=O.children||[];for(let c0=0,g0=n0.length;c0<g0;c0++)Q.push(g.getDependency("node",n0[c0]));const _0=O.skin===void 0?Promise.resolve(null):g.getDependency("skin",O.skin);return Promise.all([Promise.all(z),Promise.all(Q),_0])}().then(function(z){const K=z[0],Q=z[1],n0=z[2];let _0;if(O.isBone===!0?_0=new $6:K.length>1?_0=new wr:K.length===1?_0=K[0]:_0=new Zt,_0!==K[0])for(let c0=0,g0=K.length;c0<g0;c0++)_0.add(K[c0]);if(O.name&&(_0.userData.name=O.name,_0.name=V),Q1(_0,O),O.extensions&&Qo(w,_0,O),O.matrix!==void 0){const c0=new $e;c0.fromArray(O.matrix),_0.applyMatrix4(c0)}else O.translation!==void 0&&_0.position.fromArray(O.translation),O.rotation!==void 0&&_0.quaternion.fromArray(O.rotation),O.scale!==void 0&&_0.scale.fromArray(O.scale);g.associations.has(_0)||g.associations.set(_0,{}),g.associations.get(_0).nodes=u,n0!==null&&_0.traverse(function(c0){c0.isSkinnedMesh&&c0.bind(n0,bi0)});for(let c0=0,g0=Q.length;c0<g0;c0++)_0.add(Q[c0]);return _0})}loadScene(u){const y=this.extensions,w=this.json.scenes[u],g=this,O=new wr;w.name&&(O.name=g.createUniqueName(w.name)),Q1(O,w),w.extensions&&Qo(y,O,w);const V=w.nodes||[],z=[];for(let K=0,Q=V.length;K<Q;K++)z.push(g.getDependency("node",V[K]));return Promise.all(z).then(function(K){for(let n0=0,_0=K.length;n0<_0;n0++)O.add(K[n0]);const Q=n0=>{const _0=new Map;for(const[c0,g0]of g.associations)(c0 instanceof jn||c0 instanceof ji)&&_0.set(c0,g0);return n0.traverse(c0=>{const g0=g.associations.get(c0);g0!=null&&_0.set(c0,g0)}),_0};return g.associations=Q(O),O})}}function Ki0(q,u,y){const w=u.attributes,g=new xo;if(w.POSITION!==void 0){const z=y.json.accessors[w.POSITION],K=z.min,Q=z.max;if(K!==void 0&&Q!==void 0){if(g.set(new t2(K[0],K[1],K[2]),new t2(Q[0],Q[1],Q[2])),z.normalized){const n0=fc(fo[z.componentType]);g.min.multiplyScalar(n0),g.max.multiplyScalar(n0)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const O=u.targets;if(O!==void 0){const z=new t2,K=new t2;for(let Q=0,n0=O.length;Q<n0;Q++){const _0=O[Q];if(_0.POSITION!==void 0){const c0=y.json.accessors[_0.POSITION],g0=c0.min,R0=c0.max;if(g0!==void 0&&R0!==void 0){if(K.setX(Math.max(Math.abs(g0[0]),Math.abs(R0[0]))),K.setY(Math.max(Math.abs(g0[1]),Math.abs(R0[1]))),K.setZ(Math.max(Math.abs(g0[2]),Math.abs(R0[2]))),c0.normalized){const f0=fc(fo[c0.componentType]);K.multiplyScalar(f0)}z.max(K)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}g.expandByVector(z)}q.boundingBox=g;const V=new wo;g.getCenter(V.center),V.radius=g.min.distanceTo(g.max)/2,q.boundingSphere=V}function R6(q,u,y){const w=u.attributes,g=[];function O(V,z){return y.getDependency("accessor",V).then(function(K){q.setAttribute(z,K)})}for(const V in w){const z=uc[V]||V.toLowerCase();z in q.attributes||g.push(O(w[V],z))}if(u.indices!==void 0&&!q.index){const V=y.getDependency("accessor",u.indices).then(function(z){q.setIndex(z)});g.push(V)}return Q1(q,u),Ki0(q,u,y),Promise.all(g).then(function(){return u.targets!==void 0?Vi0(q,u.targets,y):q})}function k6(q,u){let y=q.getIndex();if(y===null){const V=[],z=q.getAttribute("position");if(z!==void 0){for(let K=0;K<z.count;K++)V.push(K);q.setIndex(V),y=q.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),q}const w=y.count-2,g=[];if(u===O6)for(let V=1;V<=w;V++)g.push(y.getX(0)),g.push(y.getX(V)),g.push(y.getX(V+1));else for(let V=0;V<w;V++)V%2===0?(g.push(y.getX(V)),g.push(y.getX(V+1)),g.push(y.getX(V+2))):(g.push(y.getX(V+2)),g.push(y.getX(V+1)),g.push(y.getX(V)));g.length/3!==w&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const O=q.clone();return O.setIndex(g),O}const Bi=new Dt0,us=new pn(75,window.innerWidth/window.innerHeight,.1,1e3);us.position.set(-10,20,-40);Bi.add(us);const ap=new Jt.btDefaultCollisionConfiguration,Zi0=new Jt.btCollisionDispatcher(ap),Yi0=new Jt.btDbvtBroadphase,Qi0=new Jt.btSequentialImpulseConstraintSolver,R_=new Jt.btDiscreteDynamicsWorld(Zi0,Yi0,Qi0,ap);R_.setGravity(new Jt.btVector3(0,-9.8,0));const pp=new Jt.btBoxShape(new Jt.btVector3(50,1,50)),Ac=new Jt.btTransform;Ac.setIdentity();Ac.setOrigin(new Jt.btVector3(0,-1,0));const up=0,fp=new Jt.btVector3(0,0,0);pp.calculateLocalInertia(up,fp);const Ji0=new Jt.btDefaultMotionState(Ac),$i0=new Jt.btRigidBodyConstructionInfo(up,Ji0,pp,fp),en0=new Jt.btRigidBody($i0);R_.addRigidBody(en0);const hp=new Jt.btBoxShape(new Jt.btVector3(1,1,1)),Ec=new Jt.btTransform;Ec.setIdentity();Ec.setOrigin(new Jt.btVector3(0,30,0));const mp=1,dp=new Jt.btVector3(0,0,0);hp.calculateLocalInertia(mp,dp);const tn0=new Jt.btDefaultMotionState(Ec),in0=new Jt.btRigidBodyConstructionInfo(mp,tn0,hp,dp),k_=new Jt.btRigidBody(in0);k_.setFriction(5);k_.setRestitution(3);R_.addRigidBody(k_);const nn0=new ir(3,3,3),rn0=new $1({color:"pink"}),Ic=new ii(nn0,rn0);Ic.castShadow=!0;Bi.add(Ic);function on0(){const q=.016666666666666666,u=10;R_.stepSimulation(q,u);const y=new Jt.btTransform;k_.getMotionState().getWorldTransform(y);const w=y.getOrigin();Ic.position.set(w.x(),w.y(),w.z())}const sn0=new vi0;let Vi;function _n0(){sn0.load("./isColorCar/scene.gltf",function(q){Vi=q.scene,Vi.position.set(3,0,3),Vi.castShadow=!0,Vi.receiveShadow=!0,Bi.add(Vi);let u=new t2(0,0,1);document.onkeydown=function(y){let w,g;switch(y.keyCode){case 65:Vi.rotation.y+=.1,u.x=Math.sin(Vi.rotation.y),u.z=Math.cos(Vi.rotation.y);break;case 68:Vi.rotation.y-=.1,u.x=Math.sin(Vi.rotation.y),u.z=Math.cos(Vi.rotation.y);break;case 87:w=u.x*.3,g=u.z*.3,Vi.position.x+=w,Vi.position.z+=g;break;case 83:w=-u.x*.3,g=-u.z*.3,Vi.position.x+=w,Vi.position.z+=g;break;case 32:Vi.position.y+=.3;break;case 17:Vi.position.y-=.3;break}}})}_n0();const cn0=new ir(1,3,3),ln0=new rr({color:"pink"}),fs=new ii(cn0,ln0);fs.position.set(-10,3,0);fs.position.y=1.5;fs.scale.set(3,2,1);fs.castShadow=!0;Bi.add(fs);const an0=new nr(1,30,30),pn0=new op,un0=pn0.load("./earth.jpg"),fn0=new rr({map:un0}),yp=new ii(an0,fn0);yp.position.set(26,26,26);Bi.add(yp);const hn0=new nr(3,30,30),mn0=new rr({color:"gold"}),vp=new ii(hn0,mn0);vp.position.set(36,36,36);Bi.add(vp);const dn0=new nr(1,30,30),yn0=new rr({color:"gray"}),gp=new ii(dn0,yn0);gp.position.set(26,35,26);Bi.add(gp);const vn0=new nr(1,30,30),gn0=new rr({color:"pink"}),Cp=new ii(vn0,gn0);Cp.position.set(33,27,20);Bi.add(Cp);const Cn0=new nr(1,30,30),Sn0=new rr({color:"purple"}),Sp=new ii(Cn0,Sn0);Sp.position.set(20,26,33.5);Bi.add(Sp);const xn0=new nr(2,30,30),wn0=new rr({color:"hotpink"}),xp=new ii(xn0,wn0);xp.position.set(30,20,30);Bi.add(xp);const y_=new Rn,wp=15e3,Mp=new Float32Array(wp*3);for(let q=0;q<wp*3;q++)Mp[q]=(Math.random()-.5)*100;y_.setAttribute("position",new Zi(Mp,3));const Mn0=new Mc({color:11184810,size:.1,transparent:!0}),Tn0=new ep(y_,Mn0);function Tp(){const q=y_.attributes.position.array;for(let u=0;u<q.length;u++)u%3===1&&(q[u]-=.1),q[u]<-50&&(q[u]=50);y_.attributes.position.needsUpdate=!0,Tn0.rotation.y+=.002}Tp();const Rn0=new ir(1,1,1),kn0=new rr({color:16711680}),F1=new ii(Rn0,kn0);F1.position.y=1.5;F1.scale.set(3,2,1);F1.rotation.set(Math.PI/4,0,0,"XYZ");F1.castShadow=!0;Bi.add(F1);const ko=new J6;ko.setSize(window.innerWidth,window.innerHeight);ko.shadowMap.enabled=!0;document.body.appendChild(ko.domElement);ko.render(Bi,us);const Dn0=new x_(50,50),An0=new Nt0({color:"#1e1e1e"}),hs=new ii(Dn0,An0);hs.rotation.x=-.5*Math.PI;hs.position.set(0,0,0);hs.receiveShadow=!0;Bi.add(hs);const En0=new ti0("#fff");Bi.add(En0);const or=new sp("purple",5);or.position.set(36,36,36);or.target=hs;or.angle=Math.PI/6;or.castShadow=!0;or.shadow.mapSize.width=2048;or.shadow.mapSize.height=2048;Bi.add(or);const In0=new ui0(or);Bi.add(In0);new yi0(us,ko.domElement);const Ln0=new fi0(50);Bi.add(Ln0);function Lc(){F1.position.x+=.01,F1.rotation.x+=.01,F1.position.x>20&&(F1.position.x=0),on0(),ko.render(Bi,us),requestAnimationFrame(Lc),requestAnimationFrame(Tp)}Lc();const pr0=hQ({__name:"index",setup(q){return(u,y)=>(mQ(),dQ("h1",null,yQ(vQ(Lc)()),1))}});export{pr0 as default};