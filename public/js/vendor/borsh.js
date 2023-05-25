(self.webpackChunk=self.webpackChunk||[]).push([[9964],{25532:function(e,t,r){"use strict";var i=r(48764).Buffer,n=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__decorate||function(e,t,r,i){var n,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var f=e.length-1;f>=0;f--)(n=e[f])&&(o=(s<3?n(o):s>3?n(t,r,o):n(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o},f=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&n(t,e,r);return s(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.deserializeUnchecked=t.deserialize=t.serialize=t.BinaryReader=t.BinaryWriter=t.BorshError=t.baseDecode=t.baseEncode=void 0;const u=a(r(13550)),h=a(r(97304)),l=f(r(21127)),c=new("function"!=typeof TextDecoder?l.TextDecoder:TextDecoder)("utf-8",{fatal:!0});t.baseEncode=function(e){return"string"==typeof e&&(e=i.from(e,"utf8")),h.default.encode(i.from(e))},t.baseDecode=function(e){return i.from(h.default.decode(e))};const d=1024;class y extends Error{constructor(e){super(e),this.fieldPath=[],this.originalMessage=e}addToFieldPath(e){this.fieldPath.splice(0,0,e),this.message=this.originalMessage+": "+this.fieldPath.join(".")}}t.BorshError=y;class w{constructor(){this.buf=i.alloc(d),this.length=0}maybeResize(){this.buf.length<16+this.length&&(this.buf=i.concat([this.buf,i.alloc(d)]))}writeU8(e){this.maybeResize(),this.buf.writeUInt8(e,this.length),this.length+=1}writeU16(e){this.maybeResize(),this.buf.writeUInt16LE(e,this.length),this.length+=2}writeU32(e){this.maybeResize(),this.buf.writeUInt32LE(e,this.length),this.length+=4}writeU64(e){this.maybeResize(),this.writeBuffer(i.from(new u.default(e).toArray("le",8)))}writeU128(e){this.maybeResize(),this.writeBuffer(i.from(new u.default(e).toArray("le",16)))}writeU256(e){this.maybeResize(),this.writeBuffer(i.from(new u.default(e).toArray("le",32)))}writeU512(e){this.maybeResize(),this.writeBuffer(i.from(new u.default(e).toArray("le",64)))}writeBuffer(e){this.buf=i.concat([i.from(this.buf.subarray(0,this.length)),e,i.alloc(d)]),this.length+=e.length}writeString(e){this.maybeResize();const t=i.from(e,"utf8");this.writeU32(t.length),this.writeBuffer(t)}writeFixedArray(e){this.writeBuffer(i.from(e))}writeArray(e,t){this.maybeResize(),this.writeU32(e.length);for(const r of e)this.maybeResize(),t(r)}toArray(){return this.buf.subarray(0,this.length)}}function p(e,t,r){const i=r.value;r.value=function(...e){try{return i.apply(this,e)}catch(e){if(e instanceof RangeError){const t=e.code;if(["ERR_BUFFER_OUT_OF_BOUNDS","ERR_OUT_OF_RANGE"].indexOf(t)>=0)throw new y("Reached the end of buffer when deserializing")}throw e}}}t.BinaryWriter=w;class b{constructor(e){this.buf=e,this.offset=0}readU8(){const e=this.buf.readUInt8(this.offset);return this.offset+=1,e}readU16(){const e=this.buf.readUInt16LE(this.offset);return this.offset+=2,e}readU32(){const e=this.buf.readUInt32LE(this.offset);return this.offset+=4,e}readU64(){const e=this.readBuffer(8);return new u.default(e,"le")}readU128(){const e=this.readBuffer(16);return new u.default(e,"le")}readU256(){const e=this.readBuffer(32);return new u.default(e,"le")}readU512(){const e=this.readBuffer(64);return new u.default(e,"le")}readBuffer(e){if(this.offset+e>this.buf.length)throw new y(`Expected buffer length ${e} isn't within bounds`);const t=this.buf.slice(this.offset,this.offset+e);return this.offset+=e,t}readString(){const e=this.readU32(),t=this.readBuffer(e);try{return c.decode(t)}catch(e){throw new y(`Error decoding UTF-8 string: ${e}`)}}readFixedArray(e){return new Uint8Array(this.readBuffer(e))}readArray(e){const t=this.readU32(),r=Array();for(let i=0;i<t;++i)r.push(e());return r}}function g(e){return e.charAt(0).toUpperCase()+e.slice(1)}function U(e,t,r,i,n){try{if("string"==typeof i)n[`write${g(i)}`](r);else if(i instanceof Array)if("number"==typeof i[0]){if(r.length!==i[0])throw new y(`Expecting byte array of length ${i[0]}, but got ${r.length} bytes`);n.writeFixedArray(r)}else if(2===i.length&&"number"==typeof i[1]){if(r.length!==i[1])throw new y(`Expecting byte array of length ${i[1]}, but got ${r.length} bytes`);for(let t=0;t<i[1];t++)U(e,null,r[t],i[0],n)}else n.writeArray(r,(r=>{U(e,t,r,i[0],n)}));else if(void 0!==i.kind)switch(i.kind){case"option":null==r?n.writeU8(0):(n.writeU8(1),U(e,t,r,i.type,n));break;case"map":n.writeU32(r.size),r.forEach(((r,s)=>{U(e,t,s,i.key,n),U(e,t,r,i.value,n)}));break;default:throw new y(`FieldType ${i} unrecognized`)}else m(e,r,n)}catch(e){throw e instanceof y&&e.addToFieldPath(t),e}}function m(e,t,r){if("function"==typeof t.borshSerialize)return void t.borshSerialize(r);const i=e.get(t.constructor);if(!i)throw new y(`Class ${t.constructor.name} is missing in schema`);if("struct"===i.kind)i.fields.map((([i,n])=>{U(e,i,t[i],n,r)}));else{if("enum"!==i.kind)throw new y(`Unexpected schema kind: ${i.kind} for ${t.constructor.name}`);{const n=t[i.field];for(let s=0;s<i.values.length;++s){const[o,f]=i.values[s];if(o===n){r.writeU8(s),U(e,o,t[o],f,r);break}}}}}function z(e,t,r,i){try{if("string"==typeof r)return i[`read${g(r)}`]();if(r instanceof Array){if("number"==typeof r[0])return i.readFixedArray(r[0]);if("number"==typeof r[1]){const t=[];for(let n=0;n<r[1];n++)t.push(z(e,null,r[0],i));return t}return i.readArray((()=>z(e,t,r[0],i)))}if("option"===r.kind){return i.readU8()?z(e,t,r.type,i):void 0}if("map"===r.kind){let n=new Map;const s=i.readU32();for(let o=0;o<s;o++){const s=z(e,t,r.key,i),o=z(e,t,r.value,i);n.set(s,o)}return n}return B(e,r,i)}catch(e){throw e instanceof y&&e.addToFieldPath(t),e}}function B(e,t,r){if("function"==typeof t.borshDeserialize)return t.borshDeserialize(r);const i=e.get(t);if(!i)throw new y(`Class ${t.name} is missing in schema`);if("struct"===i.kind){const i={};for(const[n,s]of e.get(t).fields)i[n]=z(e,n,s,r);return new t(i)}if("enum"===i.kind){const n=r.readU8();if(n>=i.values.length)throw new y(`Enum index: ${n} is out of range`);const[s,o]=i.values[n];return new t({[s]:z(e,s,o,r)})}throw new y(`Unexpected schema kind: ${i.kind} for ${t.constructor.name}`)}o([p],b.prototype,"readU8",null),o([p],b.prototype,"readU16",null),o([p],b.prototype,"readU32",null),o([p],b.prototype,"readU64",null),o([p],b.prototype,"readU128",null),o([p],b.prototype,"readU256",null),o([p],b.prototype,"readU512",null),o([p],b.prototype,"readString",null),o([p],b.prototype,"readFixedArray",null),o([p],b.prototype,"readArray",null),t.BinaryReader=b,t.serialize=function(e,t,r=w){const i=new r;return m(e,t,i),i.toArray()},t.deserialize=function(e,t,r,i=b){const n=new i(r),s=B(e,t,n);if(n.offset<r.length)throw new y(`Unexpected ${r.length-n.offset} bytes after deserialized data`);return s},t.deserializeUnchecked=function(e,t,r,i=b){return B(e,t,new i(r))}},97304:(e,t,r)=>{var i=r(58162);e.exports=i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")}}]);