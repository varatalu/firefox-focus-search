function i(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function b(e){return e!=null&&typeof e.CompareTo=="function"}function v(e){return e!=null&&typeof e.Equals=="function"}function O(e){return e!=null&&typeof e.GetHashCode=="function"}function g(e){const t=e;return typeof t.offset=="number"?t.offset:e.kind===1?0:e.getTimezoneOffset()*-6e4}class l{static id(t){return l.idMap.has(t)||l.idMap.set(t,++l.count),l.idMap.get(t)}}l.idMap=new WeakMap;l.count=0;function j(e){let t=0,n=5381;const r=e.length;for(;t<r;)n=n*33^e.charCodeAt(t++);return n}function p(e){return e*2654435761|0}function m(e){return e.length===0?0:e.reduce((t,n)=>(t<<5)+t^n)}function A(e){return e.getTime()}function H(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=a(e[r]);return m(n)}function a(e){var t;if(e==null)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return p(e);case"string":return j(e);default:{if(O(e))return e.GetHashCode();if(i(e))return H(e);if(e instanceof Date)return A(e);if(((t=Object.getPrototypeOf(e))===null||t===void 0?void 0:t.constructor)===Object){const n=Object.values(e).map(r=>a(r));return m(n)}else return p(l.id(e))}}}function C(e,t,n){if(e==null)return t==null;if(t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function T(e,t){return C(e,t,c)}function k(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;n.sort(),r.sort();for(let u=0;u<n.length;u++)if(n[u]!==r[u]||!c(e[n[u]],t[r[u]]))return!1;return!0}function c(e,t){var n;return e===t?!0:e==null?t==null:t==null?!1:v(e)?e.Equals(t):i(e)?i(t)&&T(e,t):typeof e!="object"?!1:e instanceof Date?t instanceof Date&&d(e,t)===0:((n=Object.getPrototypeOf(e))===null||n===void 0?void 0:n.constructor)===Object&&k(e,t)}function d(e,t){let n,r;return"offset"in e&&"offset"in t?(n=e.getTime(),r=t.getTime()):(n=e.getTime()+g(e),r=t.getTime()+g(t)),n===r?0:n<r?-1:1}function q(e,t,n){if(e==null)return t==null?0:1;if(t==null)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let r=0,u=0;r<e.length;r++)if(u=n(e[r],t[r]),u!==0)return u;return 0}function w(e,t){return q(e,t,h)}function D(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return n.length<r.length?-1:1;n.sort(),r.sort();for(let u=0,o=0;u<n.length;u++){const f=n[u];if(f!==r[u])return f<r[u]?-1:1;if(o=h(e[f],t[f]),o!==0)return o}return 0}function h(e,t){var n;return e===t?0:e==null?t==null?0:-1:t==null?1:b(e)?e.CompareTo(t):i(e)?i(t)?w(e,t):-1:typeof e!="object"?e<t?-1:1:e instanceof Date?t instanceof Date?d(e,t):-1:((n=Object.getPrototypeOf(e))===null||n===void 0?void 0:n.constructor)===Object?D(e,t):-1}class s{constructor(t){this.value=t}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return a(this.value)}Equals(t){return t==null?!1:c(this.value,t instanceof s?t.value:t)}CompareTo(t){return t==null?1:h(this.value,t instanceof s?t.value:t)}}function M(e){return e==null||e instanceof s?new s(e):e}console.log(M("hi"));
