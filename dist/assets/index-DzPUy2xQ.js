(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
/**
 * @vue/shared v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function ja(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const xt = {},
  wr = [],
  Je = () => {},
  qp = () => !1,
  ji = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  za = (e) => e.startsWith("onUpdate:"),
  Gt = Object.assign,
  Ha = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  jp = Object.prototype.hasOwnProperty,
  Rt = (e, t) => jp.call(e, t),
  ot = Array.isArray,
  Ir = (e) => zi(e) === "[object Map]",
  Ch = (e) => zi(e) === "[object Set]",
  ht = (e) => typeof e == "function",
  jt = (e) => typeof e == "string",
  Fn = (e) => typeof e == "symbol",
  kt = (e) => e !== null && typeof e == "object",
  Sh = (e) => (kt(e) || ht(e)) && ht(e.then) && ht(e.catch),
  Ph = Object.prototype.toString,
  zi = (e) => Ph.call(e),
  zp = (e) => zi(e).slice(8, -1),
  Vh = (e) => zi(e) === "[object Object]",
  Ka = (e) =>
    jt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  fs = ja(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Hi = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Hp = /-(\w)/g,
  Be = Hi((e) => e.replace(Hp, (t, n) => (n ? n.toUpperCase() : ""))),
  Kp = /\B([A-Z])/g,
  or = Hi((e) => e.replace(Kp, "-$1").toLowerCase()),
  Ki = Hi((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Do = Hi((e) => (e ? `on${Ki(e)}` : "")),
  Pn = (e, t) => !Object.is(e, t),
  xo = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Dh = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  Gp = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Wp = (e) => {
    const t = jt(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let xc;
const Gi = () =>
  xc ||
  (xc =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Wi(e) {
  if (ot(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = jt(r) ? Jp(r) : Wi(r);
      if (s) for (const i in s) t[i] = s[i];
    }
    return t;
  } else if (jt(e) || kt(e)) return e;
}
const Qp = /;(?![^(]*\))/g,
  Yp = /:([^]+)/,
  Xp = /\/\*[^]*?\*\//g;
function Jp(e) {
  const t = {};
  return (
    e
      .replace(Xp, "")
      .split(Qp)
      .forEach((n) => {
        if (n) {
          const r = n.split(Yp);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function ke(e) {
  let t = "";
  if (jt(e)) t = e;
  else if (ot(e))
    for (let n = 0; n < e.length; n++) {
      const r = ke(e[n]);
      r && (t += r + " ");
    }
  else if (kt(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Zp =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  tg = ja(Zp);
function xh(e) {
  return !!e || e === "";
}
const Nh = (e) => !!(e && e.__v_isRef === !0),
  Xt = (e) =>
    jt(e)
      ? e
      : e == null
      ? ""
      : ot(e) || (kt(e) && (e.toString === Ph || !ht(e.toString)))
      ? Nh(e)
        ? Xt(e.value)
        : JSON.stringify(e, Oh, 2)
      : String(e),
  Oh = (e, t) =>
    Nh(t)
      ? Oh(e, t.value)
      : Ir(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s], i) => ((n[No(r, i) + " =>"] = s), n),
            {}
          ),
        }
      : Ch(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => No(n)) }
      : Fn(t)
      ? No(t)
      : kt(t) && !ot(t) && !Vh(t)
      ? String(t)
      : t,
  No = (e, t = "") => {
    var n;
    return Fn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Pe;
class eg {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Pe),
      !t && Pe && (this.index = (Pe.scopes || (Pe.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Pe;
      try {
        return (Pe = this), t();
      } finally {
        Pe = n;
      }
    }
  }
  on() {
    Pe = this;
  }
  off() {
    Pe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function ng() {
  return Pe;
}
let Dt;
const Oo = new WeakSet();
class kh {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Pe && Pe.active && Pe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Oo.has(this) && (Oo.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Lh(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Nc(this), Fh(this);
    const t = Dt,
      n = je;
    (Dt = this), (je = !0);
    try {
      return this.fn();
    } finally {
      Bh(this), (Dt = t), (je = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Qa(t);
      (this.deps = this.depsTail = void 0),
        Nc(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Oo.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    na(this) && this.run();
  }
  get dirty() {
    return na(this);
  }
}
let Mh = 0,
  ds,
  ps;
function Lh(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = ps), (ps = e);
    return;
  }
  (e.next = ds), (ds = e);
}
function Ga() {
  Mh++;
}
function Wa() {
  if (--Mh > 0) return;
  if (ps) {
    let t = ps;
    for (ps = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; ds; ) {
    let t = ds;
    for (ds = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Fh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Bh(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Qa(r), rg(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function na(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && ($h(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function $h(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === bs)
  )
    return;
  e.globalVersion = bs;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !na(e))) {
    e.flags &= -3;
    return;
  }
  const n = Dt,
    r = je;
  (Dt = e), (je = !0);
  try {
    Fh(e);
    const s = e.fn(e._value);
    (t.version === 0 || Pn(s, e._value)) && ((e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (Dt = n), (je = r), Bh(e), (e.flags &= -3);
  }
}
function Qa(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) Qa(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function rg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let je = !0;
const Uh = [];
function Bn() {
  Uh.push(je), (je = !1);
}
function $n() {
  const e = Uh.pop();
  je = e === void 0 ? !0 : e;
}
function Nc(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = Dt;
    Dt = void 0;
    try {
      t();
    } finally {
      Dt = n;
    }
  }
}
let bs = 0;
class sg {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Ya {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!Dt || !je || Dt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Dt)
      (n = this.activeLink = new sg(Dt, this)),
        Dt.deps
          ? ((n.prevDep = Dt.depsTail),
            (Dt.depsTail.nextDep = n),
            (Dt.depsTail = n))
          : (Dt.deps = Dt.depsTail = n),
        qh(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = Dt.depsTail),
        (n.nextDep = void 0),
        (Dt.depsTail.nextDep = n),
        (Dt.depsTail = n),
        Dt.deps === n && (Dt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, bs++, this.notify(t);
  }
  notify(t) {
    Ga();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Wa();
    }
  }
}
function qh(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) qh(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const ra = new WeakMap(),
  Zn = Symbol(""),
  sa = Symbol(""),
  Rs = Symbol("");
function fe(e, t, n) {
  if (je && Dt) {
    let r = ra.get(e);
    r || ra.set(e, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new Ya())), (s.map = r), (s.key = n)), s.track();
  }
}
function ln(e, t, n, r, s, i) {
  const a = ra.get(e);
  if (!a) {
    bs++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if ((Ga(), t === "clear")) a.forEach(l);
  else {
    const c = ot(e),
      f = c && Ka(n);
    if (c && n === "length") {
      const d = Number(r);
      a.forEach((p, m) => {
        (m === "length" || m === Rs || (!Fn(m) && m >= d)) && l(p);
      });
    } else
      switch (
        ((n !== void 0 || a.has(void 0)) && l(a.get(n)), f && l(a.get(Rs)), t)
      ) {
        case "add":
          c ? f && l(a.get("length")) : (l(a.get(Zn)), Ir(e) && l(a.get(sa)));
          break;
        case "delete":
          c || (l(a.get(Zn)), Ir(e) && l(a.get(sa)));
          break;
        case "set":
          Ir(e) && l(a.get(Zn));
          break;
      }
  }
  Wa();
}
function pr(e) {
  const t = bt(e);
  return t === e ? t : (fe(t, "iterate", Rs), Fe(e) ? t : t.map(de));
}
function Qi(e) {
  return fe((e = bt(e)), "iterate", Rs), e;
}
const ig = {
  __proto__: null,
  [Symbol.iterator]() {
    return ko(this, Symbol.iterator, de);
  },
  concat(...e) {
    return pr(this).concat(...e.map((t) => (ot(t) ? pr(t) : t)));
  },
  entries() {
    return ko(this, "entries", (e) => ((e[1] = de(e[1])), e));
  },
  every(e, t) {
    return rn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return rn(this, "filter", e, t, (n) => n.map(de), arguments);
  },
  find(e, t) {
    return rn(this, "find", e, t, de, arguments);
  },
  findIndex(e, t) {
    return rn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return rn(this, "findLast", e, t, de, arguments);
  },
  findLastIndex(e, t) {
    return rn(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return rn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Mo(this, "includes", e);
  },
  indexOf(...e) {
    return Mo(this, "indexOf", e);
  },
  join(e) {
    return pr(this).join(e);
  },
  lastIndexOf(...e) {
    return Mo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return rn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return is(this, "pop");
  },
  push(...e) {
    return is(this, "push", e);
  },
  reduce(e, ...t) {
    return Oc(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Oc(this, "reduceRight", e, t);
  },
  shift() {
    return is(this, "shift");
  },
  some(e, t) {
    return rn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return is(this, "splice", e);
  },
  toReversed() {
    return pr(this).toReversed();
  },
  toSorted(e) {
    return pr(this).toSorted(e);
  },
  toSpliced(...e) {
    return pr(this).toSpliced(...e);
  },
  unshift(...e) {
    return is(this, "unshift", e);
  },
  values() {
    return ko(this, "values", de);
  },
};
function ko(e, t, n) {
  const r = Qi(e),
    s = r[t]();
  return (
    r !== e &&
      !Fe(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const i = s._next();
        return i.value && (i.value = n(i.value)), i;
      })),
    s
  );
}
const og = Array.prototype;
function rn(e, t, n, r, s, i) {
  const a = Qi(e),
    l = a !== e && !Fe(e),
    c = a[t];
  if (c !== og[t]) {
    const p = c.apply(e, i);
    return l ? de(p) : p;
  }
  let f = n;
  a !== e &&
    (l
      ? (f = function (p, m) {
          return n.call(this, de(p), m, e);
        })
      : n.length > 2 &&
        (f = function (p, m) {
          return n.call(this, p, m, e);
        }));
  const d = c.call(a, f, r);
  return l && s ? s(d) : d;
}
function Oc(e, t, n, r) {
  const s = Qi(e);
  let i = n;
  return (
    s !== e &&
      (Fe(e)
        ? n.length > 3 &&
          (i = function (a, l, c) {
            return n.call(this, a, l, c, e);
          })
        : (i = function (a, l, c) {
            return n.call(this, a, de(l), c, e);
          })),
    s[t](i, ...r)
  );
}
function Mo(e, t, n) {
  const r = bt(e);
  fe(r, "iterate", Rs);
  const s = r[t](...n);
  return (s === -1 || s === !1) && Za(n[0])
    ? ((n[0] = bt(n[0])), r[t](...n))
    : s;
}
function is(e, t, n = []) {
  Bn(), Ga();
  const r = bt(e)[t].apply(e, n);
  return Wa(), $n(), r;
}
const ag = ja("__proto__,__v_isRef,__isVue"),
  jh = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Fn)
  );
function lg(e) {
  Fn(e) || (e = String(e));
  const t = bt(this);
  return fe(t, "has", e), t.hasOwnProperty(e);
}
class zh {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    const s = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return r === (s ? (i ? yg : Wh) : i ? Gh : Kh).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const a = ot(t);
    if (!s) {
      let c;
      if (a && (c = ig[n])) return c;
      if (n === "hasOwnProperty") return lg;
    }
    const l = Reflect.get(t, n, me(t) ? t : r);
    return (Fn(n) ? jh.has(n) : ag(n)) || (s || fe(t, "get", n), i)
      ? l
      : me(l)
      ? a && Ka(n)
        ? l
        : l.value
      : kt(l)
      ? s
        ? Yh(l)
        : Yi(l)
      : l;
  }
}
class Hh extends zh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    if (!this._isShallow) {
      const c = rr(i);
      if (
        (!Fe(r) && !rr(r) && ((i = bt(i)), (r = bt(r))),
        !ot(t) && me(i) && !me(r))
      )
        return c ? !1 : ((i.value = r), !0);
    }
    const a = ot(t) && Ka(n) ? Number(n) < t.length : Rt(t, n),
      l = Reflect.set(t, n, r, me(t) ? t : s);
    return (
      t === bt(s) && (a ? Pn(r, i) && ln(t, "set", n, r) : ln(t, "add", n, r)),
      l
    );
  }
  deleteProperty(t, n) {
    const r = Rt(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && ln(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Fn(n) || !jh.has(n)) && fe(t, "has", n), r;
  }
  ownKeys(t) {
    return fe(t, "iterate", ot(t) ? "length" : Zn), Reflect.ownKeys(t);
  }
}
class cg extends zh {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const ug = new Hh(),
  hg = new cg(),
  fg = new Hh(!0);
const ia = (e) => e,
  ai = (e) => Reflect.getPrototypeOf(e);
function dg(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      i = bt(s),
      a = Ir(i),
      l = e === "entries" || (e === Symbol.iterator && a),
      c = e === "keys" && a,
      f = s[e](...r),
      d = n ? ia : t ? oa : de;
    return (
      !t && fe(i, "iterate", c ? sa : Zn),
      {
        next() {
          const { value: p, done: m } = f.next();
          return m
            ? { value: p, done: m }
            : { value: l ? [d(p[0]), d(p[1])] : d(p), done: m };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function li(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function pg(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw,
        a = bt(i),
        l = bt(s);
      e || (Pn(s, l) && fe(a, "get", s), fe(a, "get", l));
      const { has: c } = ai(a),
        f = t ? ia : e ? oa : de;
      if (c.call(a, s)) return f(i.get(s));
      if (c.call(a, l)) return f(i.get(l));
      i !== a && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && fe(bt(s), "iterate", Zn), Reflect.get(s, "size", s);
    },
    has(s) {
      const i = this.__v_raw,
        a = bt(i),
        l = bt(s);
      return (
        e || (Pn(s, l) && fe(a, "has", s), fe(a, "has", l)),
        s === l ? i.has(s) : i.has(s) || i.has(l)
      );
    },
    forEach(s, i) {
      const a = this,
        l = a.__v_raw,
        c = bt(l),
        f = t ? ia : e ? oa : de;
      return (
        !e && fe(c, "iterate", Zn),
        l.forEach((d, p) => s.call(i, f(d), f(p), a))
      );
    },
  };
  return (
    Gt(
      n,
      e
        ? {
            add: li("add"),
            set: li("set"),
            delete: li("delete"),
            clear: li("clear"),
          }
        : {
            add(s) {
              !t && !Fe(s) && !rr(s) && (s = bt(s));
              const i = bt(this);
              return (
                ai(i).has.call(i, s) || (i.add(s), ln(i, "add", s, s)), this
              );
            },
            set(s, i) {
              !t && !Fe(i) && !rr(i) && (i = bt(i));
              const a = bt(this),
                { has: l, get: c } = ai(a);
              let f = l.call(a, s);
              f || ((s = bt(s)), (f = l.call(a, s)));
              const d = c.call(a, s);
              return (
                a.set(s, i),
                f ? Pn(i, d) && ln(a, "set", s, i) : ln(a, "add", s, i),
                this
              );
            },
            delete(s) {
              const i = bt(this),
                { has: a, get: l } = ai(i);
              let c = a.call(i, s);
              c || ((s = bt(s)), (c = a.call(i, s))), l && l.call(i, s);
              const f = i.delete(s);
              return c && ln(i, "delete", s, void 0), f;
            },
            clear() {
              const s = bt(this),
                i = s.size !== 0,
                a = s.clear();
              return i && ln(s, "clear", void 0, void 0), a;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      n[s] = dg(s, e, t);
    }),
    n
  );
}
function Xa(e, t) {
  const n = pg(e, t);
  return (r, s, i) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(Rt(n, s) && s in r ? n : r, s, i);
}
const gg = { get: Xa(!1, !1) },
  mg = { get: Xa(!1, !0) },
  _g = { get: Xa(!0, !1) };
const Kh = new WeakMap(),
  Gh = new WeakMap(),
  Wh = new WeakMap(),
  yg = new WeakMap();
function vg(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Eg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vg(zp(e));
}
function Yi(e) {
  return rr(e) ? e : Ja(e, !1, ug, gg, Kh);
}
function Qh(e) {
  return Ja(e, !1, fg, mg, Gh);
}
function Yh(e) {
  return Ja(e, !0, hg, _g, Wh);
}
function Ja(e, t, n, r, s) {
  if (!kt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = s.get(e);
  if (i) return i;
  const a = Eg(e);
  if (a === 0) return e;
  const l = new Proxy(e, a === 2 ? r : n);
  return s.set(e, l), l;
}
function Ar(e) {
  return rr(e) ? Ar(e.__v_raw) : !!(e && e.__v_isReactive);
}
function rr(e) {
  return !!(e && e.__v_isReadonly);
}
function Fe(e) {
  return !!(e && e.__v_isShallow);
}
function Za(e) {
  return e ? !!e.__v_raw : !1;
}
function bt(e) {
  const t = e && e.__v_raw;
  return t ? bt(t) : e;
}
function Tg(e) {
  return (
    !Rt(e, "__v_skip") && Object.isExtensible(e) && Dh(e, "__v_skip", !0), e
  );
}
const de = (e) => (kt(e) ? Yi(e) : e),
  oa = (e) => (kt(e) ? Yh(e) : e);
function me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function sr(e) {
  return Xh(e, !1);
}
function wg(e) {
  return Xh(e, !0);
}
function Xh(e, t) {
  return me(e) ? e : new Ig(e, t);
}
class Ig {
  constructor(t, n) {
    (this.dep = new Ya()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : bt(t)),
      (this._value = n ? t : de(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || Fe(t) || rr(t);
    (t = r ? t : bt(t)),
      Pn(t, n) &&
        ((this._rawValue = t),
        (this._value = r ? t : de(t)),
        this.dep.trigger());
  }
}
function De(e) {
  return me(e) ? e.value : e;
}
const Ag = {
  get: (e, t, n) => (t === "__v_raw" ? e : De(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return me(s) && !me(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Jh(e) {
  return Ar(e) ? e : new Proxy(e, Ag);
}
class bg {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Ya(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = bs - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Dt !== this))
      return Lh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return $h(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Rg(e, t, n = !1) {
  let r, s;
  return ht(e) ? (r = e) : ((r = e.get), (s = e.set)), new bg(r, s, n);
}
const ci = {},
  Ri = new WeakMap();
let Qn;
function Cg(e, t = !1, n = Qn) {
  if (n) {
    let r = Ri.get(n);
    r || Ri.set(n, (r = [])), r.push(e);
  }
}
function Sg(e, t, n = xt) {
  const {
      immediate: r,
      deep: s,
      once: i,
      scheduler: a,
      augmentJob: l,
      call: c,
    } = n,
    f = (j) => (s ? j : Fe(j) || s === !1 || s === 0 ? Rn(j, 1) : Rn(j));
  let d,
    p,
    m,
    T,
    V = !1,
    N = !1;
  if (
    (me(e)
      ? ((p = () => e.value), (V = Fe(e)))
      : Ar(e)
      ? ((p = () => f(e)), (V = !0))
      : ot(e)
      ? ((N = !0),
        (V = e.some((j) => Ar(j) || Fe(j))),
        (p = () =>
          e.map((j) => {
            if (me(j)) return j.value;
            if (Ar(j)) return f(j);
            if (ht(j)) return c ? c(j, 2) : j();
          })))
      : ht(e)
      ? t
        ? (p = c ? () => c(e, 2) : e)
        : (p = () => {
            if (m) {
              Bn();
              try {
                m();
              } finally {
                $n();
              }
            }
            const j = Qn;
            Qn = d;
            try {
              return c ? c(e, 3, [T]) : e(T);
            } finally {
              Qn = j;
            }
          })
      : (p = Je),
    t && s)
  ) {
    const j = p,
      lt = s === !0 ? 1 / 0 : s;
    p = () => Rn(j(), lt);
  }
  const k = ng(),
    K = () => {
      d.stop(), k && Ha(k.effects, d);
    };
  if (i && t) {
    const j = t;
    t = (...lt) => {
      j(...lt), K();
    };
  }
  let U = N ? new Array(e.length).fill(ci) : ci;
  const H = (j) => {
    if (!(!(d.flags & 1) || (!d.dirty && !j)))
      if (t) {
        const lt = d.run();
        if (s || V || (N ? lt.some((at, R) => Pn(at, U[R])) : Pn(lt, U))) {
          m && m();
          const at = Qn;
          Qn = d;
          try {
            const R = [lt, U === ci ? void 0 : N && U[0] === ci ? [] : U, T];
            c ? c(t, 3, R) : t(...R), (U = lt);
          } finally {
            Qn = at;
          }
        }
      } else d.run();
  };
  return (
    l && l(H),
    (d = new kh(p)),
    (d.scheduler = a ? () => a(H, !1) : H),
    (T = (j) => Cg(j, !1, d)),
    (m = d.onStop =
      () => {
        const j = Ri.get(d);
        if (j) {
          if (c) c(j, 4);
          else for (const lt of j) lt();
          Ri.delete(d);
        }
      }),
    t ? (r ? H(!0) : (U = d.run())) : a ? a(H.bind(null, !0), !0) : d.run(),
    (K.pause = d.pause.bind(d)),
    (K.resume = d.resume.bind(d)),
    (K.stop = K),
    K
  );
}
function Rn(e, t = 1 / 0, n) {
  if (t <= 0 || !kt(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, me(e))) Rn(e.value, t, n);
  else if (ot(e)) for (let r = 0; r < e.length; r++) Rn(e[r], t, n);
  else if (Ch(e) || Ir(e))
    e.forEach((r) => {
      Rn(r, t, n);
    });
  else if (Vh(e)) {
    for (const r in e) Rn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Rn(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function $s(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Xi(s, t, n);
  }
}
function ze(e, t, n, r) {
  if (ht(e)) {
    const s = $s(e, t, n, r);
    return (
      s &&
        Sh(s) &&
        s.catch((i) => {
          Xi(i, t, n);
        }),
      s
    );
  }
  if (ot(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++) s.push(ze(e[i], t, n, r));
    return s;
  }
}
function Xi(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: a } =
      (t && t.appContext.config) || xt;
  if (t) {
    let l = t.parent;
    const c = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let p = 0; p < d.length; p++) if (d[p](e, c, f) === !1) return;
      }
      l = l.parent;
    }
    if (i) {
      Bn(), $s(i, null, 10, [e, c, f]), $n();
      return;
    }
  }
  Pg(e, n, s, r, a);
}
function Pg(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const Ee = [];
let Qe = -1;
const br = [];
let wn = null,
  mr = 0;
const Zh = Promise.resolve();
let Ci = null;
function tf(e) {
  const t = Ci || Zh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vg(e) {
  let t = Qe + 1,
    n = Ee.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = Ee[r],
      i = Cs(s);
    i < e || (i === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function tl(e) {
  if (!(e.flags & 1)) {
    const t = Cs(e),
      n = Ee[Ee.length - 1];
    !n || (!(e.flags & 2) && t >= Cs(n)) ? Ee.push(e) : Ee.splice(Vg(t), 0, e),
      (e.flags |= 1),
      ef();
  }
}
function ef() {
  Ci || (Ci = Zh.then(rf));
}
function Dg(e) {
  ot(e)
    ? br.push(...e)
    : wn && e.id === -1
    ? wn.splice(mr + 1, 0, e)
    : e.flags & 1 || (br.push(e), (e.flags |= 1)),
    ef();
}
function kc(e, t, n = Qe + 1) {
  for (; n < Ee.length; n++) {
    const r = Ee[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      Ee.splice(n, 1),
        n--,
        r.flags & 4 && (r.flags &= -2),
        r(),
        r.flags & 4 || (r.flags &= -2);
    }
  }
}
function nf(e) {
  if (br.length) {
    const t = [...new Set(br)].sort((n, r) => Cs(n) - Cs(r));
    if (((br.length = 0), wn)) {
      wn.push(...t);
      return;
    }
    for (wn = t, mr = 0; mr < wn.length; mr++) {
      const n = wn[mr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (wn = null), (mr = 0);
  }
}
const Cs = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function rf(e) {
  try {
    for (Qe = 0; Qe < Ee.length; Qe++) {
      const t = Ee[Qe];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        $s(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Qe < Ee.length; Qe++) {
      const t = Ee[Qe];
      t && (t.flags &= -2);
    }
    (Qe = -1),
      (Ee.length = 0),
      nf(),
      (Ci = null),
      (Ee.length || br.length) && rf();
  }
}
let Le = null,
  sf = null;
function Si(e) {
  const t = Le;
  return (Le = e), (sf = (e && e.type.__scopeId) || null), t;
}
function qe(e, t = Le, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Hc(-1);
    const i = Si(t);
    let a;
    try {
      a = e(...s);
    } finally {
      Si(i), r._d && Hc(1);
    }
    return a;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Hn(e, t, n, r) {
  const s = e.dirs,
    i = t && t.dirs;
  for (let a = 0; a < s.length; a++) {
    const l = s[a];
    i && (l.oldValue = i[a].value);
    let c = l.dir[r];
    c && (Bn(), ze(c, n, 8, [e.el, l, e, t]), $n());
  }
}
const xg = Symbol("_vte"),
  of = (e) => e.__isTeleport,
  In = Symbol("_leaveCb"),
  ui = Symbol("_enterCb");
function Ng() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    $r(() => {
      e.isMounted = !0;
    }),
    gf(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Oe = [Function, Array],
  af = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Oe,
    onEnter: Oe,
    onAfterEnter: Oe,
    onEnterCancelled: Oe,
    onBeforeLeave: Oe,
    onLeave: Oe,
    onAfterLeave: Oe,
    onLeaveCancelled: Oe,
    onBeforeAppear: Oe,
    onAppear: Oe,
    onAfterAppear: Oe,
    onAppearCancelled: Oe,
  },
  lf = (e) => {
    const t = e.subTree;
    return t.component ? lf(t.component) : t;
  },
  Og = {
    name: "BaseTransition",
    props: af,
    setup(e, { slots: t }) {
      const n = xm(),
        r = Ng();
      return () => {
        const s = t.default && hf(t.default(), !0);
        if (!s || !s.length) return;
        const i = cf(s),
          a = bt(e),
          { mode: l } = a;
        if (r.isLeaving) return Lo(i);
        const c = Mc(i);
        if (!c) return Lo(i);
        let f = aa(c, a, r, n, (m) => (f = m));
        c.type !== be && Ss(c, f);
        const d = n.subTree,
          p = d && Mc(d);
        if (p && p.type !== be && !Xn(c, p) && lf(n).type !== be) {
          const m = aa(p, a, r, n);
          if ((Ss(p, m), l === "out-in" && c.type !== be))
            return (
              (r.isLeaving = !0),
              (m.afterLeave = () => {
                (r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete m.afterLeave;
              }),
              Lo(i)
            );
          l === "in-out" &&
            c.type !== be &&
            (m.delayLeave = (T, V, N) => {
              const k = uf(r, p);
              (k[String(p.key)] = p),
                (T[In] = () => {
                  V(), (T[In] = void 0), delete f.delayedLeave;
                }),
                (f.delayedLeave = N);
            });
        }
        return i;
      };
    },
  };
function cf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== be) {
        t = n;
        break;
      }
  }
  return t;
}
const kg = Og;
function uf(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function aa(e, t, n, r, s) {
  const {
      appear: i,
      mode: a,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: f,
      onAfterEnter: d,
      onEnterCancelled: p,
      onBeforeLeave: m,
      onLeave: T,
      onAfterLeave: V,
      onLeaveCancelled: N,
      onBeforeAppear: k,
      onAppear: K,
      onAfterAppear: U,
      onAppearCancelled: H,
    } = t,
    j = String(e.key),
    lt = uf(n, e),
    at = (y, A) => {
      y && ze(y, r, 9, A);
    },
    R = (y, A) => {
      const b = A[1];
      at(y, A),
        ot(y) ? y.every((I) => I.length <= 1) && b() : y.length <= 1 && b();
    },
    v = {
      mode: a,
      persisted: l,
      beforeEnter(y) {
        let A = c;
        if (!n.isMounted)
          if (i) A = k || c;
          else return;
        y[In] && y[In](!0);
        const b = lt[j];
        b && Xn(e, b) && b.el[In] && b.el[In](), at(A, [y]);
      },
      enter(y) {
        let A = f,
          b = d,
          I = p;
        if (!n.isMounted)
          if (i) (A = K || f), (b = U || d), (I = H || p);
          else return;
        let E = !1;
        const St = (y[ui] = (te) => {
          E ||
            ((E = !0),
            te ? at(I, [y]) : at(b, [y]),
            v.delayedLeave && v.delayedLeave(),
            (y[ui] = void 0));
        });
        A ? R(A, [y, St]) : St();
      },
      leave(y, A) {
        const b = String(e.key);
        if ((y[ui] && y[ui](!0), n.isUnmounting)) return A();
        at(m, [y]);
        let I = !1;
        const E = (y[In] = (St) => {
          I ||
            ((I = !0),
            A(),
            St ? at(N, [y]) : at(V, [y]),
            (y[In] = void 0),
            lt[b] === e && delete lt[b]);
        });
        (lt[b] = e), T ? R(T, [y, E]) : E();
      },
      clone(y) {
        const A = aa(y, t, n, r, s);
        return s && s(A), A;
      },
    };
  return v;
}
function Lo(e) {
  if (Ji(e)) return (e = xn(e)), (e.children = null), e;
}
function Mc(e) {
  if (!Ji(e)) return of(e.type) && e.children ? cf(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && ht(n.default)) return n.default();
  }
}
function Ss(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Ss(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function hf(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    const l = n == null ? a.key : String(n) + String(a.key != null ? a.key : i);
    a.type === Te
      ? (a.patchFlag & 128 && s++, (r = r.concat(hf(a.children, t, l))))
      : (t || a.type !== be) && r.push(l != null ? xn(a, { key: l }) : a);
  }
  if (s > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function ff(e, t) {
  return ht(e) ? Gt({ name: e.name }, t, { setup: e }) : e;
}
function df(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function la(e, t, n, r, s = !1) {
  if (ot(e)) {
    e.forEach((V, N) => la(V, t && (ot(t) ? t[N] : t), n, r, s));
    return;
  }
  if (gs(r) && !s) return;
  const i = r.shapeFlag & 4 ? sl(r.component) : r.el,
    a = s ? null : i,
    { i: l, r: c } = e,
    f = t && t.r,
    d = l.refs === xt ? (l.refs = {}) : l.refs,
    p = l.setupState,
    m = bt(p),
    T = p === xt ? () => !1 : (V) => Rt(m, V);
  if (
    (f != null &&
      f !== c &&
      (jt(f)
        ? ((d[f] = null), T(f) && (p[f] = null))
        : me(f) && (f.value = null)),
    ht(c))
  )
    $s(c, l, 12, [a, d]);
  else {
    const V = jt(c),
      N = me(c);
    if (V || N) {
      const k = () => {
        if (e.f) {
          const K = V ? (T(c) ? p[c] : d[c]) : c.value;
          s
            ? ot(K) && Ha(K, i)
            : ot(K)
            ? K.includes(i) || K.push(i)
            : V
            ? ((d[c] = [i]), T(c) && (p[c] = d[c]))
            : ((c.value = [i]), e.k && (d[e.k] = c.value));
        } else
          V
            ? ((d[c] = a), T(c) && (p[c] = a))
            : N && ((c.value = a), e.k && (d[e.k] = a));
      };
      a ? ((k.id = -1), Se(k, n)) : k();
    }
  }
}
Gi().requestIdleCallback;
Gi().cancelIdleCallback;
const gs = (e) => !!e.type.__asyncLoader,
  Ji = (e) => e.type.__isKeepAlive;
function Mg(e, t) {
  pf(e, "a", t);
}
function Lg(e, t) {
  pf(e, "da", t);
}
function pf(e, t, n = se) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((Zi(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Ji(s.parent.vnode) && Fg(r, t, n, s), (s = s.parent);
  }
}
function Fg(e, t, n, r) {
  const s = Zi(t, e, r, !0);
  mf(() => {
    Ha(r[t], s);
  }, n);
}
function Zi(e, t, n = se, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...a) => {
          Bn();
          const l = Us(n),
            c = ze(t, n, e, a);
          return l(), $n(), c;
        });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const hn =
    (e) =>
    (t, n = se) => {
      (!Vs || e === "sp") && Zi(e, (...r) => t(...r), n);
    },
  Bg = hn("bm"),
  $r = hn("m"),
  $g = hn("bu"),
  Ug = hn("u"),
  gf = hn("bum"),
  mf = hn("um"),
  qg = hn("sp"),
  jg = hn("rtg"),
  zg = hn("rtc");
function Hg(e, t = se) {
  Zi("ec", e, t);
}
const Kg = "components";
function _f(e, t) {
  return Wg(Kg, e, !0, t) || e;
}
const Gg = Symbol.for("v-ndc");
function Wg(e, t, n = !0, r = !1) {
  const s = Le || se;
  if (s) {
    const i = s.type;
    {
      const l = Lm(i, !1);
      if (l && (l === t || l === Be(t) || l === Ki(Be(t)))) return i;
    }
    const a = Lc(s[e] || i[e], t) || Lc(s.appContext[e], t);
    return !a && r ? i : a;
  }
}
function Lc(e, t) {
  return e && (e[t] || e[Be(t)] || e[Ki(Be(t))]);
}
function to(e, t, n, r) {
  let s;
  const i = n,
    a = ot(e);
  if (a || jt(e)) {
    const l = a && Ar(e);
    let c = !1;
    l && ((c = !Fe(e)), (e = Qi(e))), (s = new Array(e.length));
    for (let f = 0, d = e.length; f < d; f++)
      s[f] = t(c ? de(e[f]) : e[f], f, void 0, i);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, i);
  } else if (kt(e))
    if (e[Symbol.iterator]) s = Array.from(e, (l, c) => t(l, c, void 0, i));
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let c = 0, f = l.length; c < f; c++) {
        const d = l[c];
        s[c] = t(e[d], d, c, i);
      }
    }
  else s = [];
  return s;
}
const ca = (e) => (e ? (Lf(e) ? sl(e) : ca(e.parent)) : null),
  ms = Gt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ca(e.parent),
    $root: (e) => ca(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => el(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        tl(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = tf.bind(e.proxy)),
    $watch: (e) => gm.bind(e),
  }),
  Fo = (e, t) => e !== xt && !e.__isScriptSetup && Rt(e, t),
  Qg = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: i,
        accessCache: a,
        type: l,
        appContext: c,
      } = e;
      let f;
      if (t[0] !== "$") {
        const T = a[t];
        if (T !== void 0)
          switch (T) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (Fo(r, t)) return (a[t] = 1), r[t];
          if (s !== xt && Rt(s, t)) return (a[t] = 2), s[t];
          if ((f = e.propsOptions[0]) && Rt(f, t)) return (a[t] = 3), i[t];
          if (n !== xt && Rt(n, t)) return (a[t] = 4), n[t];
          ua && (a[t] = 0);
        }
      }
      const d = ms[t];
      let p, m;
      if (d) return t === "$attrs" && fe(e.attrs, "get", ""), d(e);
      if ((p = l.__cssModules) && (p = p[t])) return p;
      if (n !== xt && Rt(n, t)) return (a[t] = 4), n[t];
      if (((m = c.config.globalProperties), Rt(m, t))) return m[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: i } = e;
      return Fo(s, t)
        ? ((s[t] = n), !0)
        : r !== xt && Rt(r, t)
        ? ((r[t] = n), !0)
        : Rt(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: i,
        },
      },
      a
    ) {
      let l;
      return (
        !!n[a] ||
        (e !== xt && Rt(e, a)) ||
        Fo(t, a) ||
        ((l = i[0]) && Rt(l, a)) ||
        Rt(r, a) ||
        Rt(ms, a) ||
        Rt(s.config.globalProperties, a)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Rt(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Fc(e) {
  return ot(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let ua = !0;
function Yg(e) {
  const t = el(e),
    n = e.proxy,
    r = e.ctx;
  (ua = !1), t.beforeCreate && Bc(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: i,
    methods: a,
    watch: l,
    provide: c,
    inject: f,
    created: d,
    beforeMount: p,
    mounted: m,
    beforeUpdate: T,
    updated: V,
    activated: N,
    deactivated: k,
    beforeDestroy: K,
    beforeUnmount: U,
    destroyed: H,
    unmounted: j,
    render: lt,
    renderTracked: at,
    renderTriggered: R,
    errorCaptured: v,
    serverPrefetch: y,
    expose: A,
    inheritAttrs: b,
    components: I,
    directives: E,
    filters: St,
  } = t;
  if ((f && Xg(f, r, null), a))
    for (const gt in a) {
      const dt = a[gt];
      ht(dt) && (r[gt] = dt.bind(n));
    }
  if (s) {
    const gt = s.call(n, n);
    kt(gt) && (e.data = Yi(gt));
  }
  if (((ua = !0), i))
    for (const gt in i) {
      const dt = i[gt],
        Re = ht(dt) ? dt.bind(n, n) : ht(dt.get) ? dt.get.bind(n, n) : Je,
        $e = !ht(dt) && ht(dt.set) ? dt.set.bind(n) : Je,
        xe = Me({ get: Re, set: $e });
      Object.defineProperty(r, gt, {
        enumerable: !0,
        configurable: !0,
        get: () => xe.value,
        set: (Lt) => (xe.value = Lt),
      });
    }
  if (l) for (const gt in l) yf(l[gt], r, n, gt);
  if (c) {
    const gt = ht(c) ? c.call(n) : c;
    Reflect.ownKeys(gt).forEach((dt) => {
      _s(dt, gt[dt]);
    });
  }
  d && Bc(d, e, "c");
  function Mt(gt, dt) {
    ot(dt) ? dt.forEach((Re) => gt(Re.bind(n))) : dt && gt(dt.bind(n));
  }
  if (
    (Mt(Bg, p),
    Mt($r, m),
    Mt($g, T),
    Mt(Ug, V),
    Mt(Mg, N),
    Mt(Lg, k),
    Mt(Hg, v),
    Mt(zg, at),
    Mt(jg, R),
    Mt(gf, U),
    Mt(mf, j),
    Mt(qg, y),
    ot(A))
  )
    if (A.length) {
      const gt = e.exposed || (e.exposed = {});
      A.forEach((dt) => {
        Object.defineProperty(gt, dt, {
          get: () => n[dt],
          set: (Re) => (n[dt] = Re),
        });
      });
    } else e.exposed || (e.exposed = {});
  lt && e.render === Je && (e.render = lt),
    b != null && (e.inheritAttrs = b),
    I && (e.components = I),
    E && (e.directives = E),
    y && df(e);
}
function Xg(e, t, n = Je) {
  ot(e) && (e = ha(e));
  for (const r in e) {
    const s = e[r];
    let i;
    kt(s)
      ? "default" in s
        ? (i = we(s.from || r, s.default, !0))
        : (i = we(s.from || r))
      : (i = we(s)),
      me(i)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (a) => (i.value = a),
          })
        : (t[r] = i);
  }
}
function Bc(e, t, n) {
  ze(ot(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function yf(e, t, n, r) {
  let s = r.includes(".") ? xf(n, r) : () => n[r];
  if (jt(e)) {
    const i = t[e];
    ht(i) && _i(s, i);
  } else if (ht(e)) _i(s, e.bind(n));
  else if (kt(e))
    if (ot(e)) e.forEach((i) => yf(i, t, n, r));
    else {
      const i = ht(e.handler) ? e.handler.bind(n) : t[e.handler];
      ht(i) && _i(s, i, e);
    }
}
function el(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: i,
      config: { optionMergeStrategies: a },
    } = e.appContext,
    l = i.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !s.length && !n && !r
      ? (c = t)
      : ((c = {}), s.length && s.forEach((f) => Pi(c, f, a, !0)), Pi(c, t, a)),
    kt(t) && i.set(t, c),
    c
  );
}
function Pi(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && Pi(e, i, n, !0), s && s.forEach((a) => Pi(e, a, n, !0));
  for (const a in t)
    if (!(r && a === "expose")) {
      const l = Jg[a] || (n && n[a]);
      e[a] = l ? l(e[a], t[a]) : t[a];
    }
  return e;
}
const Jg = {
  data: $c,
  props: Uc,
  emits: Uc,
  methods: ls,
  computed: ls,
  beforeCreate: ve,
  created: ve,
  beforeMount: ve,
  mounted: ve,
  beforeUpdate: ve,
  updated: ve,
  beforeDestroy: ve,
  beforeUnmount: ve,
  destroyed: ve,
  unmounted: ve,
  activated: ve,
  deactivated: ve,
  errorCaptured: ve,
  serverPrefetch: ve,
  components: ls,
  directives: ls,
  watch: tm,
  provide: $c,
  inject: Zg,
};
function $c(e, t) {
  return t
    ? e
      ? function () {
          return Gt(
            ht(e) ? e.call(this, this) : e,
            ht(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Zg(e, t) {
  return ls(ha(e), ha(t));
}
function ha(e) {
  if (ot(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ls(e, t) {
  return e ? Gt(Object.create(null), e, t) : t;
}
function Uc(e, t) {
  return e
    ? ot(e) && ot(t)
      ? [...new Set([...e, ...t])]
      : Gt(Object.create(null), Fc(e), Fc(t ?? {}))
    : t;
}
function tm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Gt(Object.create(null), e);
  for (const r in t) n[r] = ve(e[r], t[r]);
  return n;
}
function vf() {
  return {
    app: null,
    config: {
      isNativeTag: qp,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let em = 0;
function nm(e, t) {
  return function (r, s = null) {
    ht(r) || (r = Gt({}, r)), s != null && !kt(s) && (s = null);
    const i = vf(),
      a = new WeakSet(),
      l = [];
    let c = !1;
    const f = (i.app = {
      _uid: em++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Bm,
      get config() {
        return i.config;
      },
      set config(d) {},
      use(d, ...p) {
        return (
          a.has(d) ||
            (d && ht(d.install)
              ? (a.add(d), d.install(f, ...p))
              : ht(d) && (a.add(d), d(f, ...p))),
          f
        );
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), f;
      },
      component(d, p) {
        return p ? ((i.components[d] = p), f) : i.components[d];
      },
      directive(d, p) {
        return p ? ((i.directives[d] = p), f) : i.directives[d];
      },
      mount(d, p, m) {
        if (!c) {
          const T = f._ceVNode || ut(r, s);
          return (
            (T.appContext = i),
            m === !0 ? (m = "svg") : m === !1 && (m = void 0),
            p && t ? t(T, d) : e(T, d, m),
            (c = !0),
            (f._container = d),
            (d.__vue_app__ = f),
            sl(T.component)
          );
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c &&
          (ze(l, f._instance, 16),
          e(null, f._container),
          delete f._container.__vue_app__);
      },
      provide(d, p) {
        return (i.provides[d] = p), f;
      },
      runWithContext(d) {
        const p = Rr;
        Rr = f;
        try {
          return d();
        } finally {
          Rr = p;
        }
      },
    });
    return f;
  };
}
let Rr = null;
function _s(e, t) {
  if (se) {
    let n = se.provides;
    const r = se.parent && se.parent.provides;
    r === n && (n = se.provides = Object.create(r)), (n[e] = t);
  }
}
function we(e, t, n = !1) {
  const r = se || Le;
  if (r || Rr) {
    const s = Rr
      ? Rr._context.provides
      : r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && ht(t) ? t.call(r && r.proxy) : t;
  }
}
const Ef = {},
  Tf = () => Object.create(Ef),
  wf = (e) => Object.getPrototypeOf(e) === Ef;
function rm(e, t, n, r = !1) {
  const s = {},
    i = Tf();
  (e.propsDefaults = Object.create(null)), If(e, t, s, i);
  for (const a in e.propsOptions[0]) a in s || (s[a] = void 0);
  n ? (e.props = r ? s : Qh(s)) : e.type.props ? (e.props = s) : (e.props = i),
    (e.attrs = i);
}
function sm(e, t, n, r) {
  const {
      props: s,
      attrs: i,
      vnode: { patchFlag: a },
    } = e,
    l = bt(s),
    [c] = e.propsOptions;
  let f = !1;
  if ((r || a > 0) && !(a & 16)) {
    if (a & 8) {
      const d = e.vnode.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        let m = d[p];
        if (eo(e.emitsOptions, m)) continue;
        const T = t[m];
        if (c)
          if (Rt(i, m)) T !== i[m] && ((i[m] = T), (f = !0));
          else {
            const V = Be(m);
            s[V] = fa(c, l, V, T, e, !1);
          }
        else T !== i[m] && ((i[m] = T), (f = !0));
      }
    }
  } else {
    If(e, t, s, i) && (f = !0);
    let d;
    for (const p in l)
      (!t || (!Rt(t, p) && ((d = or(p)) === p || !Rt(t, d)))) &&
        (c
          ? n &&
            (n[p] !== void 0 || n[d] !== void 0) &&
            (s[p] = fa(c, l, p, void 0, e, !0))
          : delete s[p]);
    if (i !== l)
      for (const p in i) (!t || !Rt(t, p)) && (delete i[p], (f = !0));
  }
  f && ln(e.attrs, "set", "");
}
function If(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let a = !1,
    l;
  if (t)
    for (let c in t) {
      if (fs(c)) continue;
      const f = t[c];
      let d;
      s && Rt(s, (d = Be(c)))
        ? !i || !i.includes(d)
          ? (n[d] = f)
          : ((l || (l = {}))[d] = f)
        : eo(e.emitsOptions, c) ||
          ((!(c in r) || f !== r[c]) && ((r[c] = f), (a = !0)));
    }
  if (i) {
    const c = bt(n),
      f = l || xt;
    for (let d = 0; d < i.length; d++) {
      const p = i[d];
      n[p] = fa(s, c, p, f[p], e, !Rt(f, p));
    }
  }
  return a;
}
function fa(e, t, n, r, s, i) {
  const a = e[n];
  if (a != null) {
    const l = Rt(a, "default");
    if (l && r === void 0) {
      const c = a.default;
      if (a.type !== Function && !a.skipFactory && ht(c)) {
        const { propsDefaults: f } = s;
        if (n in f) r = f[n];
        else {
          const d = Us(s);
          (r = f[n] = c.call(null, t)), d();
        }
      } else r = c;
      s.ce && s.ce._setProp(n, r);
    }
    a[0] &&
      (i && !l ? (r = !1) : a[1] && (r === "" || r === or(n)) && (r = !0));
  }
  return r;
}
const im = new WeakMap();
function Af(e, t, n = !1) {
  const r = n ? im : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const i = e.props,
    a = {},
    l = [];
  let c = !1;
  if (!ht(e)) {
    const d = (p) => {
      c = !0;
      const [m, T] = Af(p, t, !0);
      Gt(a, m), T && l.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c) return kt(e) && r.set(e, wr), wr;
  if (ot(i))
    for (let d = 0; d < i.length; d++) {
      const p = Be(i[d]);
      qc(p) && (a[p] = xt);
    }
  else if (i)
    for (const d in i) {
      const p = Be(d);
      if (qc(p)) {
        const m = i[d],
          T = (a[p] = ot(m) || ht(m) ? { type: m } : Gt({}, m)),
          V = T.type;
        let N = !1,
          k = !0;
        if (ot(V))
          for (let K = 0; K < V.length; ++K) {
            const U = V[K],
              H = ht(U) && U.name;
            if (H === "Boolean") {
              N = !0;
              break;
            } else H === "String" && (k = !1);
          }
        else N = ht(V) && V.name === "Boolean";
        (T[0] = N), (T[1] = k), (N || Rt(T, "default")) && l.push(p);
      }
    }
  const f = [a, l];
  return kt(e) && r.set(e, f), f;
}
function qc(e) {
  return e[0] !== "$" && !fs(e);
}
const bf = (e) => e[0] === "_" || e === "$stable",
  nl = (e) => (ot(e) ? e.map(Ye) : [Ye(e)]),
  om = (e, t, n) => {
    if (t._n) return t;
    const r = qe((...s) => nl(t(...s)), n);
    return (r._c = !1), r;
  },
  Rf = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (bf(s)) continue;
      const i = e[s];
      if (ht(i)) t[s] = om(s, i, r);
      else if (i != null) {
        const a = nl(i);
        t[s] = () => a;
      }
    }
  },
  Cf = (e, t) => {
    const n = nl(t);
    e.slots.default = () => n;
  },
  Sf = (e, t, n) => {
    for (const r in t) (n || r !== "_") && (e[r] = t[r]);
  },
  am = (e, t, n) => {
    const r = (e.slots = Tf());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (Sf(r, t, n), n && Dh(r, "_", s, !0)) : Rf(t, r);
    } else t && Cf(e, t);
  },
  lm = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let i = !0,
      a = xt;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : Sf(s, t, n)
        : ((i = !t.$stable), Rf(t, s)),
        (a = t);
    } else t && (Cf(e, t), (a = { default: 1 }));
    if (i) for (const l in s) !bf(l) && a[l] == null && delete s[l];
  },
  Se = wm;
function cm(e) {
  return um(e);
}
function um(e, t) {
  const n = Gi();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: i,
      createElement: a,
      createText: l,
      createComment: c,
      setText: f,
      setElementText: d,
      parentNode: p,
      nextSibling: m,
      setScopeId: T = Je,
      insertStaticContent: V,
    } = e,
    N = (
      _,
      w,
      S,
      M = null,
      D = null,
      L = null,
      G = void 0,
      q = null,
      $ = !!w.dynamicChildren
    ) => {
      if (_ === w) return;
      _ && !Xn(_, w) && ((M = x(_)), Lt(_, D, L, !0), (_ = null)),
        w.patchFlag === -2 && (($ = !1), (w.dynamicChildren = null));
      const { type: F, ref: rt, shapeFlag: Q } = w;
      switch (F) {
        case no:
          k(_, w, S, M);
          break;
        case be:
          K(_, w, S, M);
          break;
        case yi:
          _ == null && U(w, S, M, G);
          break;
        case Te:
          I(_, w, S, M, D, L, G, q, $);
          break;
        default:
          Q & 1
            ? lt(_, w, S, M, D, L, G, q, $)
            : Q & 6
            ? E(_, w, S, M, D, L, G, q, $)
            : (Q & 64 || Q & 128) && F.process(_, w, S, M, D, L, G, q, $, Z);
      }
      rt != null && D && la(rt, _ && _.ref, L, w || _, !w);
    },
    k = (_, w, S, M) => {
      if (_ == null) r((w.el = l(w.children)), S, M);
      else {
        const D = (w.el = _.el);
        w.children !== _.children && f(D, w.children);
      }
    },
    K = (_, w, S, M) => {
      _ == null ? r((w.el = c(w.children || "")), S, M) : (w.el = _.el);
    },
    U = (_, w, S, M) => {
      [_.el, _.anchor] = V(_.children, w, S, M, _.el, _.anchor);
    },
    H = ({ el: _, anchor: w }, S, M) => {
      let D;
      for (; _ && _ !== w; ) (D = m(_)), r(_, S, M), (_ = D);
      r(w, S, M);
    },
    j = ({ el: _, anchor: w }) => {
      let S;
      for (; _ && _ !== w; ) (S = m(_)), s(_), (_ = S);
      s(w);
    },
    lt = (_, w, S, M, D, L, G, q, $) => {
      w.type === "svg" ? (G = "svg") : w.type === "math" && (G = "mathml"),
        _ == null ? at(w, S, M, D, L, G, q, $) : y(_, w, D, L, G, q, $);
    },
    at = (_, w, S, M, D, L, G, q) => {
      let $, F;
      const { props: rt, shapeFlag: Q, transition: nt, dirs: tt } = _;
      if (
        (($ = _.el = a(_.type, L, rt && rt.is, rt)),
        Q & 8
          ? d($, _.children)
          : Q & 16 && v(_.children, $, null, M, D, Bo(_, L), G, q),
        tt && Hn(_, null, M, "created"),
        R($, _, _.scopeId, G, M),
        rt)
      ) {
        for (const At in rt)
          At !== "value" && !fs(At) && i($, At, null, rt[At], L, M);
        "value" in rt && i($, "value", null, rt.value, L),
          (F = rt.onVnodeBeforeMount) && We(F, M, _);
      }
      tt && Hn(_, null, M, "beforeMount");
      const st = hm(D, nt);
      st && nt.beforeEnter($),
        r($, w, S),
        ((F = rt && rt.onVnodeMounted) || st || tt) &&
          Se(() => {
            F && We(F, M, _),
              st && nt.enter($),
              tt && Hn(_, null, M, "mounted");
          }, D);
    },
    R = (_, w, S, M, D) => {
      if ((S && T(_, S), M)) for (let L = 0; L < M.length; L++) T(_, M[L]);
      if (D) {
        let L = D.subTree;
        if (
          w === L ||
          (Of(L.type) && (L.ssContent === w || L.ssFallback === w))
        ) {
          const G = D.vnode;
          R(_, G, G.scopeId, G.slotScopeIds, D.parent);
        }
      }
    },
    v = (_, w, S, M, D, L, G, q, $ = 0) => {
      for (let F = $; F < _.length; F++) {
        const rt = (_[F] = q ? An(_[F]) : Ye(_[F]));
        N(null, rt, w, S, M, D, L, G, q);
      }
    },
    y = (_, w, S, M, D, L, G) => {
      const q = (w.el = _.el);
      let { patchFlag: $, dynamicChildren: F, dirs: rt } = w;
      $ |= _.patchFlag & 16;
      const Q = _.props || xt,
        nt = w.props || xt;
      let tt;
      if (
        (S && Kn(S, !1),
        (tt = nt.onVnodeBeforeUpdate) && We(tt, S, w, _),
        rt && Hn(w, _, S, "beforeUpdate"),
        S && Kn(S, !0),
        ((Q.innerHTML && nt.innerHTML == null) ||
          (Q.textContent && nt.textContent == null)) &&
          d(q, ""),
        F
          ? A(_.dynamicChildren, F, q, S, M, Bo(w, D), L)
          : G || dt(_, w, q, null, S, M, Bo(w, D), L, !1),
        $ > 0)
      ) {
        if ($ & 16) b(q, Q, nt, S, D);
        else if (
          ($ & 2 && Q.class !== nt.class && i(q, "class", null, nt.class, D),
          $ & 4 && i(q, "style", Q.style, nt.style, D),
          $ & 8)
        ) {
          const st = w.dynamicProps;
          for (let At = 0; At < st.length; At++) {
            const wt = st[At],
              oe = Q[wt],
              Qt = nt[wt];
            (Qt !== oe || wt === "value") && i(q, wt, oe, Qt, D, S);
          }
        }
        $ & 1 && _.children !== w.children && d(q, w.children);
      } else !G && F == null && b(q, Q, nt, S, D);
      ((tt = nt.onVnodeUpdated) || rt) &&
        Se(() => {
          tt && We(tt, S, w, _), rt && Hn(w, _, S, "updated");
        }, M);
    },
    A = (_, w, S, M, D, L, G) => {
      for (let q = 0; q < w.length; q++) {
        const $ = _[q],
          F = w[q],
          rt =
            $.el && ($.type === Te || !Xn($, F) || $.shapeFlag & 70)
              ? p($.el)
              : S;
        N($, F, rt, null, M, D, L, G, !0);
      }
    },
    b = (_, w, S, M, D) => {
      if (w !== S) {
        if (w !== xt)
          for (const L in w) !fs(L) && !(L in S) && i(_, L, w[L], null, D, M);
        for (const L in S) {
          if (fs(L)) continue;
          const G = S[L],
            q = w[L];
          G !== q && L !== "value" && i(_, L, q, G, D, M);
        }
        "value" in S && i(_, "value", w.value, S.value, D);
      }
    },
    I = (_, w, S, M, D, L, G, q, $) => {
      const F = (w.el = _ ? _.el : l("")),
        rt = (w.anchor = _ ? _.anchor : l(""));
      let { patchFlag: Q, dynamicChildren: nt, slotScopeIds: tt } = w;
      tt && (q = q ? q.concat(tt) : tt),
        _ == null
          ? (r(F, S, M), r(rt, S, M), v(w.children || [], S, rt, D, L, G, q, $))
          : Q > 0 && Q & 64 && nt && _.dynamicChildren
          ? (A(_.dynamicChildren, nt, S, D, L, G, q),
            (w.key != null || (D && w === D.subTree)) && Pf(_, w, !0))
          : dt(_, w, S, rt, D, L, G, q, $);
    },
    E = (_, w, S, M, D, L, G, q, $) => {
      (w.slotScopeIds = q),
        _ == null
          ? w.shapeFlag & 512
            ? D.ctx.activate(w, S, M, G, $)
            : St(w, S, M, D, L, G, $)
          : te(_, w, $);
    },
    St = (_, w, S, M, D, L, G) => {
      const q = (_.component = Dm(_, M, D));
      if ((Ji(_) && (q.ctx.renderer = Z), Nm(q, !1, G), q.asyncDep)) {
        if ((D && D.registerDep(q, Mt, G), !_.el)) {
          const $ = (q.subTree = ut(be));
          K(null, $, w, S);
        }
      } else Mt(q, _, w, S, D, L, G);
    },
    te = (_, w, S) => {
      const M = (w.component = _.component);
      if (Em(_, w, S))
        if (M.asyncDep && !M.asyncResolved) {
          gt(M, w, S);
          return;
        } else (M.next = w), M.update();
      else (w.el = _.el), (M.vnode = w);
    },
    Mt = (_, w, S, M, D, L, G) => {
      const q = () => {
        if (_.isMounted) {
          let { next: Q, bu: nt, u: tt, parent: st, vnode: At } = _;
          {
            const ae = Vf(_);
            if (ae) {
              Q && ((Q.el = At.el), gt(_, Q, G)),
                ae.asyncDep.then(() => {
                  _.isUnmounted || q();
                });
              return;
            }
          }
          let wt = Q,
            oe;
          Kn(_, !1),
            Q ? ((Q.el = At.el), gt(_, Q, G)) : (Q = At),
            nt && xo(nt),
            (oe = Q.props && Q.props.onVnodeBeforeUpdate) && We(oe, st, Q, At),
            Kn(_, !0);
          const Qt = $o(_),
            ee = _.subTree;
          (_.subTree = Qt),
            N(ee, Qt, p(ee.el), x(ee), _, D, L),
            (Q.el = Qt.el),
            wt === null && Tm(_, Qt.el),
            tt && Se(tt, D),
            (oe = Q.props && Q.props.onVnodeUpdated) &&
              Se(() => We(oe, st, Q, At), D);
        } else {
          let Q;
          const { el: nt, props: tt } = w,
            { bm: st, m: At, parent: wt, root: oe, type: Qt } = _,
            ee = gs(w);
          if (
            (Kn(_, !1),
            st && xo(st),
            !ee && (Q = tt && tt.onVnodeBeforeMount) && We(Q, wt, w),
            Kn(_, !0),
            nt && Pt)
          ) {
            const ae = () => {
              (_.subTree = $o(_)), Pt(nt, _.subTree, _, D, null);
            };
            ee && Qt.__asyncHydrate ? Qt.__asyncHydrate(nt, _, ae) : ae();
          } else {
            oe.ce && oe.ce._injectChildStyle(Qt);
            const ae = (_.subTree = $o(_));
            N(null, ae, S, M, _, D, L), (w.el = ae.el);
          }
          if ((At && Se(At, D), !ee && (Q = tt && tt.onVnodeMounted))) {
            const ae = w;
            Se(() => We(Q, wt, ae), D);
          }
          (w.shapeFlag & 256 ||
            (wt && gs(wt.vnode) && wt.vnode.shapeFlag & 256)) &&
            _.a &&
            Se(_.a, D),
            (_.isMounted = !0),
            (w = S = M = null);
        }
      };
      _.scope.on();
      const $ = (_.effect = new kh(q));
      _.scope.off();
      const F = (_.update = $.run.bind($)),
        rt = (_.job = $.runIfDirty.bind($));
      (rt.i = _), (rt.id = _.uid), ($.scheduler = () => tl(rt)), Kn(_, !0), F();
    },
    gt = (_, w, S) => {
      w.component = _;
      const M = _.vnode.props;
      (_.vnode = w),
        (_.next = null),
        sm(_, w.props, M, S),
        lm(_, w.children, S),
        Bn(),
        kc(_),
        $n();
    },
    dt = (_, w, S, M, D, L, G, q, $ = !1) => {
      const F = _ && _.children,
        rt = _ ? _.shapeFlag : 0,
        Q = w.children,
        { patchFlag: nt, shapeFlag: tt } = w;
      if (nt > 0) {
        if (nt & 128) {
          $e(F, Q, S, M, D, L, G, q, $);
          return;
        } else if (nt & 256) {
          Re(F, Q, S, M, D, L, G, q, $);
          return;
        }
      }
      tt & 8
        ? (rt & 16 && Ie(F, D, L), Q !== F && d(S, Q))
        : rt & 16
        ? tt & 16
          ? $e(F, Q, S, M, D, L, G, q, $)
          : Ie(F, D, L, !0)
        : (rt & 8 && d(S, ""), tt & 16 && v(Q, S, M, D, L, G, q, $));
    },
    Re = (_, w, S, M, D, L, G, q, $) => {
      (_ = _ || wr), (w = w || wr);
      const F = _.length,
        rt = w.length,
        Q = Math.min(F, rt);
      let nt;
      for (nt = 0; nt < Q; nt++) {
        const tt = (w[nt] = $ ? An(w[nt]) : Ye(w[nt]));
        N(_[nt], tt, S, null, D, L, G, q, $);
      }
      F > rt ? Ie(_, D, L, !0, !1, Q) : v(w, S, M, D, L, G, q, $, Q);
    },
    $e = (_, w, S, M, D, L, G, q, $) => {
      let F = 0;
      const rt = w.length;
      let Q = _.length - 1,
        nt = rt - 1;
      for (; F <= Q && F <= nt; ) {
        const tt = _[F],
          st = (w[F] = $ ? An(w[F]) : Ye(w[F]));
        if (Xn(tt, st)) N(tt, st, S, null, D, L, G, q, $);
        else break;
        F++;
      }
      for (; F <= Q && F <= nt; ) {
        const tt = _[Q],
          st = (w[nt] = $ ? An(w[nt]) : Ye(w[nt]));
        if (Xn(tt, st)) N(tt, st, S, null, D, L, G, q, $);
        else break;
        Q--, nt--;
      }
      if (F > Q) {
        if (F <= nt) {
          const tt = nt + 1,
            st = tt < rt ? w[tt].el : M;
          for (; F <= nt; )
            N(null, (w[F] = $ ? An(w[F]) : Ye(w[F])), S, st, D, L, G, q, $),
              F++;
        }
      } else if (F > nt) for (; F <= Q; ) Lt(_[F], D, L, !0), F++;
      else {
        const tt = F,
          st = F,
          At = new Map();
        for (F = st; F <= nt; F++) {
          const _e = (w[F] = $ ? An(w[F]) : Ye(w[F]));
          _e.key != null && At.set(_e.key, F);
        }
        let wt,
          oe = 0;
        const Qt = nt - st + 1;
        let ee = !1,
          ae = 0;
        const gn = new Array(Qt);
        for (F = 0; F < Qt; F++) gn[F] = 0;
        for (F = tt; F <= Q; F++) {
          const _e = _[F];
          if (oe >= Qt) {
            Lt(_e, D, L, !0);
            continue;
          }
          let Ne;
          if (_e.key != null) Ne = At.get(_e.key);
          else
            for (wt = st; wt <= nt; wt++)
              if (gn[wt - st] === 0 && Xn(_e, w[wt])) {
                Ne = wt;
                break;
              }
          Ne === void 0
            ? Lt(_e, D, L, !0)
            : ((gn[Ne - st] = F + 1),
              Ne >= ae ? (ae = Ne) : (ee = !0),
              N(_e, w[Ne], S, null, D, L, G, q, $),
              oe++);
        }
        const lr = ee ? fm(gn) : wr;
        for (wt = lr.length - 1, F = Qt - 1; F >= 0; F--) {
          const _e = st + F,
            Ne = w[_e],
            cr = _e + 1 < rt ? w[_e + 1].el : M;
          gn[F] === 0
            ? N(null, Ne, S, cr, D, L, G, q, $)
            : ee && (wt < 0 || F !== lr[wt] ? xe(Ne, S, cr, 2) : wt--);
        }
      }
    },
    xe = (_, w, S, M, D = null) => {
      const { el: L, type: G, transition: q, children: $, shapeFlag: F } = _;
      if (F & 6) {
        xe(_.component.subTree, w, S, M);
        return;
      }
      if (F & 128) {
        _.suspense.move(w, S, M);
        return;
      }
      if (F & 64) {
        G.move(_, w, S, Z);
        return;
      }
      if (G === Te) {
        r(L, w, S);
        for (let Q = 0; Q < $.length; Q++) xe($[Q], w, S, M);
        r(_.anchor, w, S);
        return;
      }
      if (G === yi) {
        H(_, w, S);
        return;
      }
      if (M !== 2 && F & 1 && q)
        if (M === 0) q.beforeEnter(L), r(L, w, S), Se(() => q.enter(L), D);
        else {
          const { leave: Q, delayLeave: nt, afterLeave: tt } = q,
            st = () => r(L, w, S),
            At = () => {
              Q(L, () => {
                st(), tt && tt();
              });
            };
          nt ? nt(L, st, At) : At();
        }
      else r(L, w, S);
    },
    Lt = (_, w, S, M = !1, D = !1) => {
      const {
        type: L,
        props: G,
        ref: q,
        children: $,
        dynamicChildren: F,
        shapeFlag: rt,
        patchFlag: Q,
        dirs: nt,
        cacheIndex: tt,
      } = _;
      if (
        (Q === -2 && (D = !1),
        q != null && la(q, null, S, _, !0),
        tt != null && (w.renderCache[tt] = void 0),
        rt & 256)
      ) {
        w.ctx.deactivate(_);
        return;
      }
      const st = rt & 1 && nt,
        At = !gs(_);
      let wt;
      if ((At && (wt = G && G.onVnodeBeforeUnmount) && We(wt, w, _), rt & 6))
        Ge(_.component, S, M);
      else {
        if (rt & 128) {
          _.suspense.unmount(S, M);
          return;
        }
        st && Hn(_, null, w, "beforeUnmount"),
          rt & 64
            ? _.type.remove(_, w, S, Z, M)
            : F && !F.hasOnce && (L !== Te || (Q > 0 && Q & 64))
            ? Ie(F, w, S, !1, !0)
            : ((L === Te && Q & 384) || (!D && rt & 16)) && Ie($, w, S),
          M && Ft(_);
      }
      ((At && (wt = G && G.onVnodeUnmounted)) || st) &&
        Se(() => {
          wt && We(wt, w, _), st && Hn(_, null, w, "unmounted");
        }, S);
    },
    Ft = (_) => {
      const { type: w, el: S, anchor: M, transition: D } = _;
      if (w === Te) {
        pn(S, M);
        return;
      }
      if (w === yi) {
        j(_);
        return;
      }
      const L = () => {
        s(S), D && !D.persisted && D.afterLeave && D.afterLeave();
      };
      if (_.shapeFlag & 1 && D && !D.persisted) {
        const { leave: G, delayLeave: q } = D,
          $ = () => G(S, L);
        q ? q(_.el, L, $) : $();
      } else L();
    },
    pn = (_, w) => {
      let S;
      for (; _ !== w; ) (S = m(_)), s(_), (_ = S);
      s(w);
    },
    Ge = (_, w, S) => {
      const { bum: M, scope: D, job: L, subTree: G, um: q, m: $, a: F } = _;
      jc($),
        jc(F),
        M && xo(M),
        D.stop(),
        L && ((L.flags |= 8), Lt(G, _, w, S)),
        q && Se(q, w),
        Se(() => {
          _.isUnmounted = !0;
        }, w),
        w &&
          w.pendingBranch &&
          !w.isUnmounted &&
          _.asyncDep &&
          !_.asyncResolved &&
          _.suspenseId === w.pendingId &&
          (w.deps--, w.deps === 0 && w.resolve());
    },
    Ie = (_, w, S, M = !1, D = !1, L = 0) => {
      for (let G = L; G < _.length; G++) Lt(_[G], w, S, M, D);
    },
    x = (_) => {
      if (_.shapeFlag & 6) return x(_.component.subTree);
      if (_.shapeFlag & 128) return _.suspense.next();
      const w = m(_.anchor || _.el),
        S = w && w[xg];
      return S ? m(S) : w;
    };
  let Y = !1;
  const W = (_, w, S) => {
      _ == null
        ? w._vnode && Lt(w._vnode, null, null, !0)
        : N(w._vnode || null, _, w, null, null, null, S),
        (w._vnode = _),
        Y || ((Y = !0), kc(), nf(), (Y = !1));
    },
    Z = {
      p: N,
      um: Lt,
      m: xe,
      r: Ft,
      mt: St,
      mc: v,
      pc: dt,
      pbc: A,
      n: x,
      o: e,
    };
  let mt, Pt;
  return { render: W, hydrate: mt, createApp: nm(W, mt) };
}
function Bo({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Kn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function hm(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Pf(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (ot(r) && ot(s))
    for (let i = 0; i < r.length; i++) {
      const a = r[i];
      let l = s[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[i] = An(s[i])), (l.el = a.el)),
        !n && l.patchFlag !== -2 && Pf(a, l)),
        l.type === no && (l.el = a.el);
    }
}
function fm(e) {
  const t = e.slice(),
    n = [0];
  let r, s, i, a, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const f = e[r];
    if (f !== 0) {
      if (((s = n[n.length - 1]), e[s] < f)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (i = 0, a = n.length - 1; i < a; )
        (l = (i + a) >> 1), e[n[l]] < f ? (i = l + 1) : (a = l);
      f < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
    }
  }
  for (i = n.length, a = n[i - 1]; i-- > 0; ) (n[i] = a), (a = t[a]);
  return n;
}
function Vf(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Vf(t);
}
function jc(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const dm = Symbol.for("v-scx"),
  pm = () => we(dm);
function _i(e, t, n) {
  return Df(e, t, n);
}
function Df(e, t, n = xt) {
  const { immediate: r, deep: s, flush: i, once: a } = n,
    l = Gt({}, n),
    c = (t && r) || (!t && i !== "post");
  let f;
  if (Vs) {
    if (i === "sync") {
      const T = pm();
      f = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!c) {
      const T = () => {};
      return (T.stop = Je), (T.resume = Je), (T.pause = Je), T;
    }
  }
  const d = se;
  l.call = (T, V, N) => ze(T, d, V, N);
  let p = !1;
  i === "post"
    ? (l.scheduler = (T) => {
        Se(T, d && d.suspense);
      })
    : i !== "sync" &&
      ((p = !0),
      (l.scheduler = (T, V) => {
        V ? T() : tl(T);
      })),
    (l.augmentJob = (T) => {
      t && (T.flags |= 4),
        p && ((T.flags |= 2), d && ((T.id = d.uid), (T.i = d)));
    });
  const m = Sg(e, t, l);
  return Vs && (f ? f.push(m) : c && m()), m;
}
function gm(e, t, n) {
  const r = this.proxy,
    s = jt(e) ? (e.includes(".") ? xf(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  ht(t) ? (i = t) : ((i = t.handler), (n = t));
  const a = Us(this),
    l = Df(s, i.bind(r), n);
  return a(), l;
}
function xf(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
const mm = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Be(t)}Modifiers`] || e[`${or(t)}Modifiers`];
function _m(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || xt;
  let s = n;
  const i = t.startsWith("update:"),
    a = i && mm(r, t.slice(7));
  a &&
    (a.trim && (s = n.map((d) => (jt(d) ? d.trim() : d))),
    a.number && (s = n.map(Gp)));
  let l,
    c = r[(l = Do(t))] || r[(l = Do(Be(t)))];
  !c && i && (c = r[(l = Do(or(t)))]), c && ze(c, e, 6, s);
  const f = r[l + "Once"];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), ze(f, e, 6, s);
  }
}
function Nf(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const i = e.emits;
  let a = {},
    l = !1;
  if (!ht(e)) {
    const c = (f) => {
      const d = Nf(f, t, !0);
      d && ((l = !0), Gt(a, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !i && !l
    ? (kt(e) && r.set(e, null), null)
    : (ot(i) ? i.forEach((c) => (a[c] = null)) : Gt(a, i),
      kt(e) && r.set(e, a),
      a);
}
function eo(e, t) {
  return !e || !ji(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Rt(e, t[0].toLowerCase() + t.slice(1)) || Rt(e, or(t)) || Rt(e, t));
}
function $o(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [i],
      slots: a,
      attrs: l,
      emit: c,
      render: f,
      renderCache: d,
      props: p,
      data: m,
      setupState: T,
      ctx: V,
      inheritAttrs: N,
    } = e,
    k = Si(e);
  let K, U;
  try {
    if (n.shapeFlag & 4) {
      const j = s || r,
        lt = j;
      (K = Ye(f.call(lt, j, d, p, T, m, V))), (U = l);
    } else {
      const j = t;
      (K = Ye(
        j.length > 1 ? j(p, { attrs: l, slots: a, emit: c }) : j(p, null)
      )),
        (U = t.props ? l : ym(l));
    }
  } catch (j) {
    (ys.length = 0), Xi(j, e, 1), (K = ut(be));
  }
  let H = K;
  if (U && N !== !1) {
    const j = Object.keys(U),
      { shapeFlag: lt } = H;
    j.length &&
      lt & 7 &&
      (i && j.some(za) && (U = vm(U, i)), (H = xn(H, U, !1, !0)));
  }
  return (
    n.dirs &&
      ((H = xn(H, null, !1, !0)),
      (H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Ss(H, n.transition),
    (K = H),
    Si(k),
    K
  );
}
const ym = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || ji(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  vm = (e, t) => {
    const n = {};
    for (const r in e) (!za(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Em(e, t, n) {
  const { props: r, children: s, component: i } = e,
    { props: a, children: l, patchFlag: c } = t,
    f = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return r ? zc(r, a, f) : !!a;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        const m = d[p];
        if (a[m] !== r[m] && !eo(f, m)) return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === a
      ? !1
      : r
      ? a
        ? zc(r, a, f)
        : !0
      : !!a;
  return !1;
}
function zc(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !eo(n, i)) return !0;
  }
  return !1;
}
function Tm({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Of = (e) => e.__isSuspense;
function wm(e, t) {
  t && t.pendingBranch
    ? ot(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Dg(e);
}
const Te = Symbol.for("v-fgt"),
  no = Symbol.for("v-txt"),
  be = Symbol.for("v-cmt"),
  yi = Symbol.for("v-stc"),
  ys = [];
let Ve = null;
function pt(e = !1) {
  ys.push((Ve = e ? null : []));
}
function Im() {
  ys.pop(), (Ve = ys[ys.length - 1] || null);
}
let Ps = 1;
function Hc(e) {
  (Ps += e), e < 0 && Ve && (Ve.hasOnce = !0);
}
function kf(e) {
  return (
    (e.dynamicChildren = Ps > 0 ? Ve || wr : null),
    Im(),
    Ps > 0 && Ve && Ve.push(e),
    e
  );
}
function Nt(e, t, n, r, s, i) {
  return kf(J(e, t, n, r, s, i, !0));
}
function fn(e, t, n, r, s) {
  return kf(ut(e, t, n, r, s, !0));
}
function Vi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Mf = ({ key: e }) => e ?? null,
  vi = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? jt(e) || me(e) || ht(e)
        ? { i: Le, r: e, k: t, f: !!n }
        : e
      : null
  );
function J(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  i = e === Te ? 0 : 1,
  a = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mf(t),
    ref: t && vi(t),
    scopeId: sf,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Le,
  };
  return (
    l
      ? (rl(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= jt(n) ? 8 : 16),
    Ps > 0 &&
      !a &&
      Ve &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Ve.push(c),
    c
  );
}
const ut = Am;
function Am(e, t = null, n = null, r = 0, s = null, i = !1) {
  if (((!e || e === Gg) && (e = be), Vi(e))) {
    const l = xn(e, t, !0);
    return (
      n && rl(l, n),
      Ps > 0 &&
        !i &&
        Ve &&
        (l.shapeFlag & 6 ? (Ve[Ve.indexOf(e)] = l) : Ve.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((Fm(e) && (e = e.__vccOpts), t)) {
    t = bm(t);
    let { class: l, style: c } = t;
    l && !jt(l) && (t.class = ke(l)),
      kt(c) && (Za(c) && !ot(c) && (c = Gt({}, c)), (t.style = Wi(c)));
  }
  const a = jt(e) ? 1 : Of(e) ? 128 : of(e) ? 64 : kt(e) ? 4 : ht(e) ? 2 : 0;
  return J(e, t, n, r, s, a, i, !0);
}
function bm(e) {
  return e ? (Za(e) || wf(e) ? Gt({}, e) : e) : null;
}
function xn(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: a, children: l, transition: c } = e,
    f = t ? Sm(s || {}, t) : s,
    d = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: f,
      key: f && Mf(f),
      ref:
        t && t.ref
          ? n && i
            ? ot(i)
              ? i.concat(vi(t))
              : [i, vi(t)]
            : vi(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Te ? (a === -1 ? 16 : a | 16) : a,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && xn(e.ssContent),
      ssFallback: e.ssFallback && xn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return c && r && Ss(d, c.clone(d)), d;
}
function da(e = " ", t = 0) {
  return ut(no, null, e, t);
}
function Rm(e, t) {
  const n = ut(yi, null, e);
  return (n.staticCount = t), n;
}
function Cm(e = "", t = !1) {
  return t ? (pt(), fn(be, null, e)) : ut(be, null, e);
}
function Ye(e) {
  return e == null || typeof e == "boolean"
    ? ut(be)
    : ot(e)
    ? ut(Te, null, e.slice())
    : Vi(e)
    ? An(e)
    : ut(no, null, String(e));
}
function An(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : xn(e);
}
function rl(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (ot(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), rl(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !wf(t)
        ? (t._ctx = Le)
        : s === 3 &&
          Le &&
          (Le.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ht(t)
      ? ((t = { default: t, _ctx: Le }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [da(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Sm(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = ke([t.class, r.class]));
      else if (s === "style") t.style = Wi([t.style, r.style]);
      else if (ji(s)) {
        const i = t[s],
          a = r[s];
        a &&
          i !== a &&
          !(ot(i) && i.includes(a)) &&
          (t[s] = i ? [].concat(i, a) : a);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function We(e, t, n, r = null) {
  ze(e, t, 7, [n, r]);
}
const Pm = vf();
let Vm = 0;
function Dm(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Pm,
    i = {
      uid: Vm++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new eg(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Af(r, s),
      emitsOptions: Nf(r, s),
      emit: null,
      emitted: null,
      propsDefaults: xt,
      inheritAttrs: r.inheritAttrs,
      ctx: xt,
      data: xt,
      props: xt,
      attrs: xt,
      slots: xt,
      refs: xt,
      setupState: xt,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = _m.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let se = null;
const xm = () => se || Le;
let Di, pa;
{
  const e = Gi(),
    t = (n, r) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (i) => {
          s.length > 1 ? s.forEach((a) => a(i)) : s[0](i);
        }
      );
    };
  (Di = t("__VUE_INSTANCE_SETTERS__", (n) => (se = n))),
    (pa = t("__VUE_SSR_SETTERS__", (n) => (Vs = n)));
}
const Us = (e) => {
    const t = se;
    return (
      Di(e),
      e.scope.on(),
      () => {
        e.scope.off(), Di(t);
      }
    );
  },
  Kc = () => {
    se && se.scope.off(), Di(null);
  };
function Lf(e) {
  return e.vnode.shapeFlag & 4;
}
let Vs = !1;
function Nm(e, t = !1, n = !1) {
  t && pa(t);
  const { props: r, children: s } = e.vnode,
    i = Lf(e);
  rm(e, r, i, t), am(e, s, n);
  const a = i ? Om(e, t) : void 0;
  return t && pa(!1), a;
}
function Om(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Qg));
  const { setup: r } = n;
  if (r) {
    Bn();
    const s = (e.setupContext = r.length > 1 ? Mm(e) : null),
      i = Us(e),
      a = $s(r, e, 0, [e.props, s]),
      l = Sh(a);
    if (($n(), i(), (l || e.sp) && !gs(e) && df(e), l)) {
      if ((a.then(Kc, Kc), t))
        return a
          .then((c) => {
            Gc(e, c, t);
          })
          .catch((c) => {
            Xi(c, e, 0);
          });
      e.asyncDep = a;
    } else Gc(e, a, t);
  } else Ff(e, t);
}
function Gc(e, t, n) {
  ht(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : kt(t) && (e.setupState = Jh(t)),
    Ff(e, n);
}
let Wc;
function Ff(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Wc && !r.render) {
      const s = r.template || el(e).template;
      if (s) {
        const { isCustomElement: i, compilerOptions: a } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = r,
          f = Gt(Gt({ isCustomElement: i, delimiters: l }, a), c);
        r.render = Wc(s, f);
      }
    }
    e.render = r.render || Je;
  }
  {
    const s = Us(e);
    Bn();
    try {
      Yg(e);
    } finally {
      $n(), s();
    }
  }
}
const km = {
  get(e, t) {
    return fe(e, "get", ""), e[t];
  },
};
function Mm(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, km),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function sl(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Jh(Tg(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in ms) return ms[n](e);
          },
          has(t, n) {
            return n in t || n in ms;
          },
        }))
    : e.proxy;
}
function Lm(e, t = !0) {
  return ht(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Fm(e) {
  return ht(e) && "__vccOpts" in e;
}
const Me = (e, t) => Rg(e, t, Vs);
function il(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? kt(t) && !ot(t)
      ? Vi(t)
        ? ut(e, null, [t])
        : ut(e, t)
      : ut(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Vi(n) && (n = [n]),
      ut(e, t, n));
}
const Bm = "3.5.12";
/**
 * @vue/runtime-dom v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ga;
const Qc = typeof window < "u" && window.trustedTypes;
if (Qc)
  try {
    ga = Qc.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const Bf = ga ? (e) => ga.createHTML(e) : (e) => e,
  $m = "http://www.w3.org/2000/svg",
  Um = "http://www.w3.org/1998/Math/MathML",
  an = typeof document < "u" ? document : null,
  Yc = an && an.createElement("template"),
  qm = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s =
        t === "svg"
          ? an.createElementNS($m, e)
          : t === "mathml"
          ? an.createElementNS(Um, e)
          : n
          ? an.createElement(e, { is: n })
          : an.createElement(e);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => an.createTextNode(e),
    createComment: (e) => an.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => an.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, i) {
      const a = n ? n.previousSibling : t.lastChild;
      if (s && (s === i || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === i || !(s = s.nextSibling));

        );
      else {
        Yc.innerHTML = Bf(
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const l = Yc.content;
        if (r === "svg" || r === "mathml") {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        a ? a.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  vn = "transition",
  os = "animation",
  Ds = Symbol("_vtc"),
  $f = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  jm = Gt({}, af, $f),
  zm = (e) => ((e.displayName = "Transition"), (e.props = jm), e),
  Hm = zm((e, { slots: t }) => il(kg, Km(e), t)),
  Gn = (e, t = []) => {
    ot(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Xc = (e) => (e ? (ot(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Km(e) {
  const t = {};
  for (const I in e) I in $f || (t[I] = e[I]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: s,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: a = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: f = a,
      appearToClass: d = l,
      leaveFromClass: p = `${n}-leave-from`,
      leaveActiveClass: m = `${n}-leave-active`,
      leaveToClass: T = `${n}-leave-to`,
    } = e,
    V = Gm(s),
    N = V && V[0],
    k = V && V[1],
    {
      onBeforeEnter: K,
      onEnter: U,
      onEnterCancelled: H,
      onLeave: j,
      onLeaveCancelled: lt,
      onBeforeAppear: at = K,
      onAppear: R = U,
      onAppearCancelled: v = H,
    } = t,
    y = (I, E, St) => {
      Wn(I, E ? d : l), Wn(I, E ? f : a), St && St();
    },
    A = (I, E) => {
      (I._isLeaving = !1), Wn(I, p), Wn(I, T), Wn(I, m), E && E();
    },
    b = (I) => (E, St) => {
      const te = I ? R : U,
        Mt = () => y(E, I, St);
      Gn(te, [E, Mt]),
        Jc(() => {
          Wn(E, I ? c : i), En(E, I ? d : l), Xc(te) || Zc(E, r, N, Mt);
        });
    };
  return Gt(t, {
    onBeforeEnter(I) {
      Gn(K, [I]), En(I, i), En(I, a);
    },
    onBeforeAppear(I) {
      Gn(at, [I]), En(I, c), En(I, f);
    },
    onEnter: b(!1),
    onAppear: b(!0),
    onLeave(I, E) {
      I._isLeaving = !0;
      const St = () => A(I, E);
      En(I, p),
        En(I, m),
        Ym(),
        Jc(() => {
          I._isLeaving && (Wn(I, p), En(I, T), Xc(j) || Zc(I, r, k, St));
        }),
        Gn(j, [I, St]);
    },
    onEnterCancelled(I) {
      y(I, !1), Gn(H, [I]);
    },
    onAppearCancelled(I) {
      y(I, !0), Gn(v, [I]);
    },
    onLeaveCancelled(I) {
      A(I), Gn(lt, [I]);
    },
  });
}
function Gm(e) {
  if (e == null) return null;
  if (kt(e)) return [Uo(e.enter), Uo(e.leave)];
  {
    const t = Uo(e);
    return [t, t];
  }
}
function Uo(e) {
  return Wp(e);
}
function En(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Ds] || (e[Ds] = new Set())).add(t);
}
function Wn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Ds];
  n && (n.delete(t), n.size || (e[Ds] = void 0));
}
function Jc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Wm = 0;
function Zc(e, t, n, r) {
  const s = (e._endId = ++Wm),
    i = () => {
      s === e._endId && r();
    };
  if (n != null) return setTimeout(i, n);
  const { type: a, timeout: l, propCount: c } = Qm(e, t);
  if (!a) return r();
  const f = a + "end";
  let d = 0;
  const p = () => {
      e.removeEventListener(f, m), i();
    },
    m = (T) => {
      T.target === e && ++d >= c && p();
    };
  setTimeout(() => {
    d < c && p();
  }, l + 1),
    e.addEventListener(f, m);
}
function Qm(e, t) {
  const n = window.getComputedStyle(e),
    r = (V) => (n[V] || "").split(", "),
    s = r(`${vn}Delay`),
    i = r(`${vn}Duration`),
    a = tu(s, i),
    l = r(`${os}Delay`),
    c = r(`${os}Duration`),
    f = tu(l, c);
  let d = null,
    p = 0,
    m = 0;
  t === vn
    ? a > 0 && ((d = vn), (p = a), (m = i.length))
    : t === os
    ? f > 0 && ((d = os), (p = f), (m = c.length))
    : ((p = Math.max(a, f)),
      (d = p > 0 ? (a > f ? vn : os) : null),
      (m = d ? (d === vn ? i.length : c.length) : 0));
  const T =
    d === vn && /\b(transform|all)(,|$)/.test(r(`${vn}Property`).toString());
  return { type: d, timeout: p, propCount: m, hasTransform: T };
}
function tu(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => eu(n) + eu(e[r])));
}
function eu(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ym() {
  return document.body.offsetHeight;
}
function Xm(e, t, n) {
  const r = e[Ds];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const nu = Symbol("_vod"),
  Jm = Symbol("_vsh"),
  Zm = Symbol(""),
  t_ = /(^|;)\s*display\s*:/;
function e_(e, t, n) {
  const r = e.style,
    s = jt(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (jt(t))
        for (const a of t.split(";")) {
          const l = a.slice(0, a.indexOf(":")).trim();
          n[l] == null && Ei(r, l, "");
        }
      else for (const a in t) n[a] == null && Ei(r, a, "");
    for (const a in n) a === "display" && (i = !0), Ei(r, a, n[a]);
  } else if (s) {
    if (t !== n) {
      const a = r[Zm];
      a && (n += ";" + a), (r.cssText = n), (i = t_.test(n));
    }
  } else t && e.removeAttribute("style");
  nu in e && ((e[nu] = i ? r.display : ""), e[Jm] && (r.display = "none"));
}
const ru = /\s*!important$/;
function Ei(e, t, n) {
  if (ot(n)) n.forEach((r) => Ei(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = n_(e, t);
    ru.test(n)
      ? e.setProperty(or(r), n.replace(ru, ""), "important")
      : (e[r] = n);
  }
}
const su = ["Webkit", "Moz", "ms"],
  qo = {};
function n_(e, t) {
  const n = qo[t];
  if (n) return n;
  let r = Be(t);
  if (r !== "filter" && r in e) return (qo[t] = r);
  r = Ki(r);
  for (let s = 0; s < su.length; s++) {
    const i = su[s] + r;
    if (i in e) return (qo[t] = i);
  }
  return t;
}
const iu = "http://www.w3.org/1999/xlink";
function ou(e, t, n, r, s, i = tg(t)) {
  r && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(iu, t.slice(6, t.length))
      : e.setAttributeNS(iu, t, n)
    : n == null || (i && !xh(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, i ? "" : Fn(n) ? String(n) : n);
}
function au(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Bf(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      c = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (l !== c || !("_value" in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = xh(n))
      : n == null && l === "string"
      ? ((n = ""), (a = !0))
      : l === "number" && ((n = 0), (a = !0));
  }
  try {
    e[t] = n;
  } catch {}
  a && e.removeAttribute(s || t);
}
function r_(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function s_(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const lu = Symbol("_vei");
function i_(e, t, n, r, s = null) {
  const i = e[lu] || (e[lu] = {}),
    a = i[t];
  if (r && a) a.value = r;
  else {
    const [l, c] = o_(t);
    if (r) {
      const f = (i[t] = c_(r, s));
      r_(e, l, f, c);
    } else a && (s_(e, l, a, c), (i[t] = void 0));
  }
}
const cu = /(?:Once|Passive|Capture)$/;
function o_(e) {
  let t;
  if (cu.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(cu)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : or(e.slice(2)), t];
}
let jo = 0;
const a_ = Promise.resolve(),
  l_ = () => jo || (a_.then(() => (jo = 0)), (jo = Date.now()));
function c_(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    ze(u_(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = l_()), n;
}
function u_(e, t) {
  if (ot(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const uu = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  h_ = (e, t, n, r, s, i) => {
    const a = s === "svg";
    t === "class"
      ? Xm(e, r, a)
      : t === "style"
      ? e_(e, n, r)
      : ji(t)
      ? za(t) || i_(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : f_(e, t, r, a)
        )
      ? (au(e, t, r),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          ou(e, t, r, a, i, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !jt(r))
      ? au(e, Be(t), r, i, t)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        ou(e, t, r, a));
  };
function f_(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && uu(t) && ht(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return uu(t) && jt(n) ? !1 : t in e;
}
const d_ = Gt({ patchProp: h_ }, qm);
let hu;
function p_() {
  return hu || (hu = cm(d_));
}
const g_ = (...e) => {
  const t = p_().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = __(r);
      if (!s) return;
      const i = t._component;
      !ht(i) && !i.render && !i.template && (i.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = "");
      const a = n(s, !1, m_(s));
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        a
      );
    }),
    t
  );
};
function m_(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function __(e) {
  return jt(e) ? document.querySelector(e) : e;
}
/*!
 * vue-router v4.4.5
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const _r = typeof document < "u";
function Uf(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function y_(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && Uf(e.default))
  );
}
const Ct = Object.assign;
function zo(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = He(s) ? s.map(e) : e(s);
  }
  return n;
}
const vs = () => {},
  He = Array.isArray,
  qf = /#/g,
  v_ = /&/g,
  E_ = /\//g,
  T_ = /=/g,
  w_ = /\?/g,
  jf = /\+/g,
  I_ = /%5B/g,
  A_ = /%5D/g,
  zf = /%5E/g,
  b_ = /%60/g,
  Hf = /%7B/g,
  R_ = /%7C/g,
  Kf = /%7D/g,
  C_ = /%20/g;
function ol(e) {
  return encodeURI("" + e)
    .replace(R_, "|")
    .replace(I_, "[")
    .replace(A_, "]");
}
function S_(e) {
  return ol(e).replace(Hf, "{").replace(Kf, "}").replace(zf, "^");
}
function ma(e) {
  return ol(e)
    .replace(jf, "%2B")
    .replace(C_, "+")
    .replace(qf, "%23")
    .replace(v_, "%26")
    .replace(b_, "`")
    .replace(Hf, "{")
    .replace(Kf, "}")
    .replace(zf, "^");
}
function P_(e) {
  return ma(e).replace(T_, "%3D");
}
function V_(e) {
  return ol(e).replace(qf, "%23").replace(w_, "%3F");
}
function D_(e) {
  return e == null ? "" : V_(e).replace(E_, "%2F");
}
function xs(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const x_ = /\/$/,
  N_ = (e) => e.replace(x_, "");
function Ho(e, t, n = "/") {
  let r,
    s = {},
    i = "",
    a = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return (
    l < c && l >= 0 && (c = -1),
    c > -1 &&
      ((r = t.slice(0, c)),
      (i = t.slice(c + 1, l > -1 ? l : t.length)),
      (s = e(i))),
    l > -1 && ((r = r || t.slice(0, l)), (a = t.slice(l, t.length))),
    (r = L_(r ?? t, n)),
    { fullPath: r + (i && "?") + i + a, path: r, query: s, hash: xs(a) }
  );
}
function O_(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function fu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function k_(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Dr(t.matched[r], n.matched[s]) &&
    Gf(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Dr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Gf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!M_(e[n], t[n])) return !1;
  return !0;
}
function M_(e, t) {
  return He(e) ? du(e, t) : He(t) ? du(t, e) : e === t;
}
function du(e, t) {
  return He(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function L_(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    s = r[r.length - 1];
  (s === ".." || s === ".") && r.push("");
  let i = n.length - 1,
    a,
    l;
  for (a = 0; a < r.length; a++)
    if (((l = r[a]), l !== "."))
      if (l === "..") i > 1 && i--;
      else break;
  return n.slice(0, i).join("/") + "/" + r.slice(a).join("/");
}
const Tn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var Ns;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Ns || (Ns = {}));
var Es;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Es || (Es = {}));
function F_(e) {
  if (!e)
    if (_r) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), N_(e);
}
const B_ = /^[^#]+#/;
function $_(e, t) {
  return e.replace(B_, "#") + t;
}
function U_(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const ro = () => ({ left: window.scrollX, top: window.scrollY });
function q_(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = U_(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function pu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const _a = new Map();
function j_(e, t) {
  _a.set(e, t);
}
function z_(e) {
  const t = _a.get(e);
  return _a.delete(e), t;
}
let H_ = () => location.protocol + "//" + location.host;
function Wf(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let l = s.includes(e.slice(i)) ? e.slice(i).length : 1,
      c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), fu(c, "");
  }
  return fu(n, e) + r + s;
}
function K_(e, t, n, r) {
  let s = [],
    i = [],
    a = null;
  const l = ({ state: m }) => {
    const T = Wf(e, location),
      V = n.value,
      N = t.value;
    let k = 0;
    if (m) {
      if (((n.value = T), (t.value = m), a && a === V)) {
        a = null;
        return;
      }
      k = N ? m.position - N.position : 0;
    } else r(T);
    s.forEach((K) => {
      K(n.value, V, {
        delta: k,
        type: Ns.pop,
        direction: k ? (k > 0 ? Es.forward : Es.back) : Es.unknown,
      });
    });
  };
  function c() {
    a = n.value;
  }
  function f(m) {
    s.push(m);
    const T = () => {
      const V = s.indexOf(m);
      V > -1 && s.splice(V, 1);
    };
    return i.push(T), T;
  }
  function d() {
    const { history: m } = window;
    m.state && m.replaceState(Ct({}, m.state, { scroll: ro() }), "");
  }
  function p() {
    for (const m of i) m();
    (i = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", d);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", d, { passive: !0 }),
    { pauseListeners: c, listen: f, destroy: p }
  );
}
function gu(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? ro() : null,
  };
}
function G_(e) {
  const { history: t, location: n } = window,
    r = { value: Wf(e, n) },
    s = { value: t.state };
  s.value ||
    i(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function i(c, f, d) {
    const p = e.indexOf("#"),
      m =
        p > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(p)) + c
          : H_() + e + c;
    try {
      t[d ? "replaceState" : "pushState"](f, "", m), (s.value = f);
    } catch (T) {
      console.error(T), n[d ? "replace" : "assign"](m);
    }
  }
  function a(c, f) {
    const d = Ct({}, t.state, gu(s.value.back, c, s.value.forward, !0), f, {
      position: s.value.position,
    });
    i(c, d, !0), (r.value = c);
  }
  function l(c, f) {
    const d = Ct({}, s.value, t.state, { forward: c, scroll: ro() });
    i(d.current, d, !0);
    const p = Ct({}, gu(r.value, c, null), { position: d.position + 1 }, f);
    i(c, p, !1), (r.value = c);
  }
  return { location: r, state: s, push: l, replace: a };
}
function W_(e) {
  e = F_(e);
  const t = G_(e),
    n = K_(e, t.state, t.location, t.replace);
  function r(i, a = !0) {
    a || n.pauseListeners(), history.go(i);
  }
  const s = Ct(
    { location: "", base: e, go: r, createHref: $_.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function Q_(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Qf(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Yf = Symbol("");
var mu;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(mu || (mu = {}));
function xr(e, t) {
  return Ct(new Error(), { type: e, [Yf]: !0 }, t);
}
function sn(e, t) {
  return e instanceof Error && Yf in e && (t == null || !!(e.type & t));
}
const _u = "[^/]+?",
  Y_ = { sensitive: !1, strict: !1, start: !0, end: !0 },
  X_ = /[.+*?^${}()[\]/\\]/g;
function J_(e, t) {
  const n = Ct({}, Y_, t),
    r = [];
  let s = n.start ? "^" : "";
  const i = [];
  for (const f of e) {
    const d = f.length ? [] : [90];
    n.strict && !f.length && (s += "/");
    for (let p = 0; p < f.length; p++) {
      const m = f[p];
      let T = 40 + (n.sensitive ? 0.25 : 0);
      if (m.type === 0)
        p || (s += "/"), (s += m.value.replace(X_, "\\$&")), (T += 40);
      else if (m.type === 1) {
        const { value: V, repeatable: N, optional: k, regexp: K } = m;
        i.push({ name: V, repeatable: N, optional: k });
        const U = K || _u;
        if (U !== _u) {
          T += 10;
          try {
            new RegExp(`(${U})`);
          } catch (j) {
            throw new Error(
              `Invalid custom RegExp for param "${V}" (${U}): ` + j.message
            );
          }
        }
        let H = N ? `((?:${U})(?:/(?:${U}))*)` : `(${U})`;
        p || (H = k && f.length < 2 ? `(?:/${H})` : "/" + H),
          k && (H += "?"),
          (s += H),
          (T += 20),
          k && (T += -8),
          N && (T += -20),
          U === ".*" && (T += -50);
      }
      d.push(T);
    }
    r.push(d);
  }
  if (n.strict && n.end) {
    const f = r.length - 1;
    r[f][r[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)");
  const a = new RegExp(s, n.sensitive ? "" : "i");
  function l(f) {
    const d = f.match(a),
      p = {};
    if (!d) return null;
    for (let m = 1; m < d.length; m++) {
      const T = d[m] || "",
        V = i[m - 1];
      p[V.name] = T && V.repeatable ? T.split("/") : T;
    }
    return p;
  }
  function c(f) {
    let d = "",
      p = !1;
    for (const m of e) {
      (!p || !d.endsWith("/")) && (d += "/"), (p = !1);
      for (const T of m)
        if (T.type === 0) d += T.value;
        else if (T.type === 1) {
          const { value: V, repeatable: N, optional: k } = T,
            K = V in f ? f[V] : "";
          if (He(K) && !N)
            throw new Error(
              `Provided param "${V}" is an array but it is not repeatable (* or + modifiers)`
            );
          const U = He(K) ? K.join("/") : K;
          if (!U)
            if (k)
              m.length < 2 &&
                (d.endsWith("/") ? (d = d.slice(0, -1)) : (p = !0));
            else throw new Error(`Missing required param "${V}"`);
          d += U;
        }
    }
    return d || "/";
  }
  return { re: a, score: r, keys: i, parse: l, stringify: c };
}
function Z_(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 80
      ? 1
      : -1
    : 0;
}
function Xf(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const i = Z_(r[n], s[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (yu(r)) return 1;
    if (yu(s)) return -1;
  }
  return s.length - r.length;
}
function yu(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const ty = { type: 0, value: "" },
  ey = /[a-zA-Z0-9_]/;
function ny(e) {
  if (!e) return [[]];
  if (e === "/") return [[ty]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(T) {
    throw new Error(`ERR (${n})/"${f}": ${T}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let i;
  function a() {
    i && s.push(i), (i = []);
  }
  let l = 0,
    c,
    f = "",
    d = "";
  function p() {
    f &&
      (n === 0
        ? i.push({ type: 0, value: f })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (c === "*" || c === "+") &&
            t(
              `A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: f,
            regexp: d,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : t("Invalid state to consume buffer"),
      (f = ""));
  }
  function m() {
    f += c;
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (f && p(), a()) : c === ":" ? (p(), (n = 1)) : m();
        break;
      case 4:
        m(), (n = r);
        break;
      case 1:
        c === "("
          ? (n = 2)
          : ey.test(c)
          ? m()
          : (p(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")"
          ? d[d.length - 1] == "\\"
            ? (d = d.slice(0, -1) + c)
            : (n = 3)
          : (d += c);
        break;
      case 3:
        p(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--, (d = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), p(), a(), s;
}
function ry(e, t, n) {
  const r = J_(ny(e.path), n),
    s = Ct(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function sy(e, t) {
  const n = [],
    r = new Map();
  t = wu({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(p) {
    return r.get(p);
  }
  function i(p, m, T) {
    const V = !T,
      N = Eu(p);
    N.aliasOf = T && T.record;
    const k = wu(t, p),
      K = [N];
    if ("alias" in p) {
      const j = typeof p.alias == "string" ? [p.alias] : p.alias;
      for (const lt of j)
        K.push(
          Eu(
            Ct({}, N, {
              components: T ? T.record.components : N.components,
              path: lt,
              aliasOf: T ? T.record : N,
            })
          )
        );
    }
    let U, H;
    for (const j of K) {
      const { path: lt } = j;
      if (m && lt[0] !== "/") {
        const at = m.record.path,
          R = at[at.length - 1] === "/" ? "" : "/";
        j.path = m.record.path + (lt && R + lt);
      }
      if (
        ((U = ry(j, m, k)),
        T
          ? T.alias.push(U)
          : ((H = H || U),
            H !== U && H.alias.push(U),
            V && p.name && !Tu(U) && a(p.name)),
        Jf(U) && c(U),
        N.children)
      ) {
        const at = N.children;
        for (let R = 0; R < at.length; R++) i(at[R], U, T && T.children[R]);
      }
      T = T || U;
    }
    return H
      ? () => {
          a(H);
        }
      : vs;
  }
  function a(p) {
    if (Qf(p)) {
      const m = r.get(p);
      m &&
        (r.delete(p),
        n.splice(n.indexOf(m), 1),
        m.children.forEach(a),
        m.alias.forEach(a));
    } else {
      const m = n.indexOf(p);
      m > -1 &&
        (n.splice(m, 1),
        p.record.name && r.delete(p.record.name),
        p.children.forEach(a),
        p.alias.forEach(a));
    }
  }
  function l() {
    return n;
  }
  function c(p) {
    const m = ay(p, n);
    n.splice(m, 0, p), p.record.name && !Tu(p) && r.set(p.record.name, p);
  }
  function f(p, m) {
    let T,
      V = {},
      N,
      k;
    if ("name" in p && p.name) {
      if (((T = r.get(p.name)), !T)) throw xr(1, { location: p });
      (k = T.record.name),
        (V = Ct(
          vu(
            m.params,
            T.keys
              .filter((H) => !H.optional)
              .concat(T.parent ? T.parent.keys.filter((H) => H.optional) : [])
              .map((H) => H.name)
          ),
          p.params &&
            vu(
              p.params,
              T.keys.map((H) => H.name)
            )
        )),
        (N = T.stringify(V));
    } else if (p.path != null)
      (N = p.path),
        (T = n.find((H) => H.re.test(N))),
        T && ((V = T.parse(N)), (k = T.record.name));
    else {
      if (((T = m.name ? r.get(m.name) : n.find((H) => H.re.test(m.path))), !T))
        throw xr(1, { location: p, currentLocation: m });
      (k = T.record.name),
        (V = Ct({}, m.params, p.params)),
        (N = T.stringify(V));
    }
    const K = [];
    let U = T;
    for (; U; ) K.unshift(U.record), (U = U.parent);
    return { name: k, path: N, params: V, matched: K, meta: oy(K) };
  }
  e.forEach((p) => i(p));
  function d() {
    (n.length = 0), r.clear();
  }
  return {
    addRoute: i,
    resolve: f,
    removeRoute: a,
    clearRoutes: d,
    getRoutes: l,
    getRecordMatcher: s,
  };
}
function vu(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Eu(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: iy(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function iy(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Tu(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function oy(e) {
  return e.reduce((t, n) => Ct(t, n.meta), {});
}
function wu(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function ay(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const i = (n + r) >> 1;
    Xf(e, t[i]) < 0 ? (r = i) : (n = i + 1);
  }
  const s = ly(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r;
}
function ly(e) {
  let t = e;
  for (; (t = t.parent); ) if (Jf(t) && Xf(e, t) === 0) return t;
}
function Jf({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function cy(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const i = r[s].replace(jf, " "),
      a = i.indexOf("="),
      l = xs(a < 0 ? i : i.slice(0, a)),
      c = a < 0 ? null : xs(i.slice(a + 1));
    if (l in t) {
      let f = t[l];
      He(f) || (f = t[l] = [f]), f.push(c);
    } else t[l] = c;
  }
  return t;
}
function Iu(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = P_(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (He(r) ? r.map((i) => i && ma(i)) : [r && ma(r)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? "&" : "") + n), i != null && (t += "=" + i));
    });
  }
  return t;
}
function uy(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = He(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const hy = Symbol(""),
  Au = Symbol(""),
  al = Symbol(""),
  Zf = Symbol(""),
  ya = Symbol("");
function as() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function bn(e, t, n, r, s, i = (a) => a()) {
  const a = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((l, c) => {
      const f = (m) => {
          m === !1
            ? c(xr(4, { from: n, to: t }))
            : m instanceof Error
            ? c(m)
            : Q_(m)
            ? c(xr(2, { from: t, to: m }))
            : (a &&
                r.enterCallbacks[s] === a &&
                typeof m == "function" &&
                a.push(m),
              l());
        },
        d = i(() => e.call(r && r.instances[s], t, n, f));
      let p = Promise.resolve(d);
      e.length < 3 && (p = p.then(f)), p.catch((m) => c(m));
    });
}
function Ko(e, t, n, r, s = (i) => i()) {
  const i = [];
  for (const a of e)
    for (const l in a.components) {
      let c = a.components[l];
      if (!(t !== "beforeRouteEnter" && !a.instances[l]))
        if (Uf(c)) {
          const d = (c.__vccOpts || c)[t];
          d && i.push(bn(d, n, r, a, l, s));
        } else {
          let f = c();
          i.push(() =>
            f.then((d) => {
              if (!d)
                throw new Error(
                  `Couldn't resolve component "${l}" at "${a.path}"`
                );
              const p = y_(d) ? d.default : d;
              (a.mods[l] = d), (a.components[l] = p);
              const T = (p.__vccOpts || p)[t];
              return T && bn(T, n, r, a, l, s)();
            })
          );
        }
    }
  return i;
}
function bu(e) {
  const t = we(al),
    n = we(Zf),
    r = Me(() => {
      const c = De(e.to);
      return t.resolve(c);
    }),
    s = Me(() => {
      const { matched: c } = r.value,
        { length: f } = c,
        d = c[f - 1],
        p = n.matched;
      if (!d || !p.length) return -1;
      const m = p.findIndex(Dr.bind(null, d));
      if (m > -1) return m;
      const T = Ru(c[f - 2]);
      return f > 1 && Ru(d) === T && p[p.length - 1].path !== T
        ? p.findIndex(Dr.bind(null, c[f - 2]))
        : m;
    }),
    i = Me(() => s.value > -1 && gy(n.params, r.value.params)),
    a = Me(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Gf(n.params, r.value.params)
    );
  function l(c = {}) {
    return py(c)
      ? t[De(e.replace) ? "replace" : "push"](De(e.to)).catch(vs)
      : Promise.resolve();
  }
  return {
    route: r,
    href: Me(() => r.value.href),
    isActive: i,
    isExactActive: a,
    navigate: l,
  };
}
const fy = ff({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: bu,
    setup(e, { slots: t }) {
      const n = Yi(bu(e)),
        { options: r } = we(al),
        s = Me(() => ({
          [Cu(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Cu(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && t.default(n);
        return e.custom
          ? i
          : il(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              i
            );
      };
    },
  }),
  dy = fy;
function py(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function gy(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!He(s) || s.length !== r.length || r.some((i, a) => i !== s[a]))
      return !1;
  }
  return !0;
}
function Ru(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Cu = (e, t, n) => e ?? t ?? n,
  my = ff({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = we(ya),
        s = Me(() => e.route || r.value),
        i = we(Au, 0),
        a = Me(() => {
          let f = De(i);
          const { matched: d } = s.value;
          let p;
          for (; (p = d[f]) && !p.components; ) f++;
          return f;
        }),
        l = Me(() => s.value.matched[a.value]);
      _s(
        Au,
        Me(() => a.value + 1)
      ),
        _s(hy, l),
        _s(ya, s);
      const c = sr();
      return (
        _i(
          () => [c.value, l.value, e.name],
          ([f, d, p], [m, T, V]) => {
            d &&
              ((d.instances[p] = f),
              T &&
                T !== d &&
                f &&
                f === m &&
                (d.leaveGuards.size || (d.leaveGuards = T.leaveGuards),
                d.updateGuards.size || (d.updateGuards = T.updateGuards))),
              f &&
                d &&
                (!T || !Dr(d, T) || !m) &&
                (d.enterCallbacks[p] || []).forEach((N) => N(f));
          },
          { flush: "post" }
        ),
        () => {
          const f = s.value,
            d = e.name,
            p = l.value,
            m = p && p.components[d];
          if (!m) return Su(n.default, { Component: m, route: f });
          const T = p.props[d],
            V = T
              ? T === !0
                ? f.params
                : typeof T == "function"
                ? T(f)
                : T
              : null,
            k = il(
              m,
              Ct({}, V, t, {
                onVnodeUnmounted: (K) => {
                  K.component.isUnmounted && (p.instances[d] = null);
                },
                ref: c,
              })
            );
          return Su(n.default, { Component: k, route: f }) || k;
        }
      );
    },
  });
function Su(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const _y = my;
function yy(e) {
  const t = sy(e.routes, e),
    n = e.parseQuery || cy,
    r = e.stringifyQuery || Iu,
    s = e.history,
    i = as(),
    a = as(),
    l = as(),
    c = wg(Tn);
  let f = Tn;
  _r &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const d = zo.bind(null, (x) => "" + x),
    p = zo.bind(null, D_),
    m = zo.bind(null, xs);
  function T(x, Y) {
    let W, Z;
    return (
      Qf(x) ? ((W = t.getRecordMatcher(x)), (Z = Y)) : (Z = x), t.addRoute(Z, W)
    );
  }
  function V(x) {
    const Y = t.getRecordMatcher(x);
    Y && t.removeRoute(Y);
  }
  function N() {
    return t.getRoutes().map((x) => x.record);
  }
  function k(x) {
    return !!t.getRecordMatcher(x);
  }
  function K(x, Y) {
    if (((Y = Ct({}, Y || c.value)), typeof x == "string")) {
      const w = Ho(n, x, Y.path),
        S = t.resolve({ path: w.path }, Y),
        M = s.createHref(w.fullPath);
      return Ct(w, S, {
        params: m(S.params),
        hash: xs(w.hash),
        redirectedFrom: void 0,
        href: M,
      });
    }
    let W;
    if (x.path != null) W = Ct({}, x, { path: Ho(n, x.path, Y.path).path });
    else {
      const w = Ct({}, x.params);
      for (const S in w) w[S] == null && delete w[S];
      (W = Ct({}, x, { params: p(w) })), (Y.params = p(Y.params));
    }
    const Z = t.resolve(W, Y),
      mt = x.hash || "";
    Z.params = d(m(Z.params));
    const Pt = O_(r, Ct({}, x, { hash: S_(mt), path: Z.path })),
      _ = s.createHref(Pt);
    return Ct(
      { fullPath: Pt, hash: mt, query: r === Iu ? uy(x.query) : x.query || {} },
      Z,
      { redirectedFrom: void 0, href: _ }
    );
  }
  function U(x) {
    return typeof x == "string" ? Ho(n, x, c.value.path) : Ct({}, x);
  }
  function H(x, Y) {
    if (f !== x) return xr(8, { from: Y, to: x });
  }
  function j(x) {
    return R(x);
  }
  function lt(x) {
    return j(Ct(U(x), { replace: !0 }));
  }
  function at(x) {
    const Y = x.matched[x.matched.length - 1];
    if (Y && Y.redirect) {
      const { redirect: W } = Y;
      let Z = typeof W == "function" ? W(x) : W;
      return (
        typeof Z == "string" &&
          ((Z = Z.includes("?") || Z.includes("#") ? (Z = U(Z)) : { path: Z }),
          (Z.params = {})),
        Ct(
          {
            query: x.query,
            hash: x.hash,
            params: Z.path != null ? {} : x.params,
          },
          Z
        )
      );
    }
  }
  function R(x, Y) {
    const W = (f = K(x)),
      Z = c.value,
      mt = x.state,
      Pt = x.force,
      _ = x.replace === !0,
      w = at(W);
    if (w)
      return R(
        Ct(U(w), {
          state: typeof w == "object" ? Ct({}, mt, w.state) : mt,
          force: Pt,
          replace: _,
        }),
        Y || W
      );
    const S = W;
    S.redirectedFrom = Y;
    let M;
    return (
      !Pt &&
        k_(r, Z, W) &&
        ((M = xr(16, { to: S, from: Z })), xe(Z, Z, !0, !1)),
      (M ? Promise.resolve(M) : A(S, Z))
        .catch((D) => (sn(D) ? (sn(D, 2) ? D : $e(D)) : dt(D, S, Z)))
        .then((D) => {
          if (D) {
            if (sn(D, 2))
              return R(
                Ct({ replace: _ }, U(D.to), {
                  state: typeof D.to == "object" ? Ct({}, mt, D.to.state) : mt,
                  force: Pt,
                }),
                Y || S
              );
          } else D = I(S, Z, !0, _, mt);
          return b(S, Z, D), D;
        })
    );
  }
  function v(x, Y) {
    const W = H(x, Y);
    return W ? Promise.reject(W) : Promise.resolve();
  }
  function y(x) {
    const Y = pn.values().next().value;
    return Y && typeof Y.runWithContext == "function"
      ? Y.runWithContext(x)
      : x();
  }
  function A(x, Y) {
    let W;
    const [Z, mt, Pt] = vy(x, Y);
    W = Ko(Z.reverse(), "beforeRouteLeave", x, Y);
    for (const w of Z)
      w.leaveGuards.forEach((S) => {
        W.push(bn(S, x, Y));
      });
    const _ = v.bind(null, x, Y);
    return (
      W.push(_),
      Ie(W)
        .then(() => {
          W = [];
          for (const w of i.list()) W.push(bn(w, x, Y));
          return W.push(_), Ie(W);
        })
        .then(() => {
          W = Ko(mt, "beforeRouteUpdate", x, Y);
          for (const w of mt)
            w.updateGuards.forEach((S) => {
              W.push(bn(S, x, Y));
            });
          return W.push(_), Ie(W);
        })
        .then(() => {
          W = [];
          for (const w of Pt)
            if (w.beforeEnter)
              if (He(w.beforeEnter))
                for (const S of w.beforeEnter) W.push(bn(S, x, Y));
              else W.push(bn(w.beforeEnter, x, Y));
          return W.push(_), Ie(W);
        })
        .then(
          () => (
            x.matched.forEach((w) => (w.enterCallbacks = {})),
            (W = Ko(Pt, "beforeRouteEnter", x, Y, y)),
            W.push(_),
            Ie(W)
          )
        )
        .then(() => {
          W = [];
          for (const w of a.list()) W.push(bn(w, x, Y));
          return W.push(_), Ie(W);
        })
        .catch((w) => (sn(w, 8) ? w : Promise.reject(w)))
    );
  }
  function b(x, Y, W) {
    l.list().forEach((Z) => y(() => Z(x, Y, W)));
  }
  function I(x, Y, W, Z, mt) {
    const Pt = H(x, Y);
    if (Pt) return Pt;
    const _ = Y === Tn,
      w = _r ? history.state : {};
    W &&
      (Z || _
        ? s.replace(x.fullPath, Ct({ scroll: _ && w && w.scroll }, mt))
        : s.push(x.fullPath, mt)),
      (c.value = x),
      xe(x, Y, W, _),
      $e();
  }
  let E;
  function St() {
    E ||
      (E = s.listen((x, Y, W) => {
        if (!Ge.listening) return;
        const Z = K(x),
          mt = at(Z);
        if (mt) {
          R(Ct(mt, { replace: !0 }), Z).catch(vs);
          return;
        }
        f = Z;
        const Pt = c.value;
        _r && j_(pu(Pt.fullPath, W.delta), ro()),
          A(Z, Pt)
            .catch((_) =>
              sn(_, 12)
                ? _
                : sn(_, 2)
                ? (R(_.to, Z)
                    .then((w) => {
                      sn(w, 20) &&
                        !W.delta &&
                        W.type === Ns.pop &&
                        s.go(-1, !1);
                    })
                    .catch(vs),
                  Promise.reject())
                : (W.delta && s.go(-W.delta, !1), dt(_, Z, Pt))
            )
            .then((_) => {
              (_ = _ || I(Z, Pt, !1)),
                _ &&
                  (W.delta && !sn(_, 8)
                    ? s.go(-W.delta, !1)
                    : W.type === Ns.pop && sn(_, 20) && s.go(-1, !1)),
                b(Z, Pt, _);
            })
            .catch(vs);
      }));
  }
  let te = as(),
    Mt = as(),
    gt;
  function dt(x, Y, W) {
    $e(x);
    const Z = Mt.list();
    return (
      Z.length ? Z.forEach((mt) => mt(x, Y, W)) : console.error(x),
      Promise.reject(x)
    );
  }
  function Re() {
    return gt && c.value !== Tn
      ? Promise.resolve()
      : new Promise((x, Y) => {
          te.add([x, Y]);
        });
  }
  function $e(x) {
    return (
      gt ||
        ((gt = !x),
        St(),
        te.list().forEach(([Y, W]) => (x ? W(x) : Y())),
        te.reset()),
      x
    );
  }
  function xe(x, Y, W, Z) {
    const { scrollBehavior: mt } = e;
    if (!_r || !mt) return Promise.resolve();
    const Pt =
      (!W && z_(pu(x.fullPath, 0))) ||
      ((Z || !W) && history.state && history.state.scroll) ||
      null;
    return tf()
      .then(() => mt(x, Y, Pt))
      .then((_) => _ && q_(_))
      .catch((_) => dt(_, x, Y));
  }
  const Lt = (x) => s.go(x);
  let Ft;
  const pn = new Set(),
    Ge = {
      currentRoute: c,
      listening: !0,
      addRoute: T,
      removeRoute: V,
      clearRoutes: t.clearRoutes,
      hasRoute: k,
      getRoutes: N,
      resolve: K,
      options: e,
      push: j,
      replace: lt,
      go: Lt,
      back: () => Lt(-1),
      forward: () => Lt(1),
      beforeEach: i.add,
      beforeResolve: a.add,
      afterEach: l.add,
      onError: Mt.add,
      isReady: Re,
      install(x) {
        const Y = this;
        x.component("RouterLink", dy),
          x.component("RouterView", _y),
          (x.config.globalProperties.$router = Y),
          Object.defineProperty(x.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => De(c),
          }),
          _r &&
            !Ft &&
            c.value === Tn &&
            ((Ft = !0), j(s.location).catch((mt) => {}));
        const W = {};
        for (const mt in Tn)
          Object.defineProperty(W, mt, {
            get: () => c.value[mt],
            enumerable: !0,
          });
        x.provide(al, Y), x.provide(Zf, Qh(W)), x.provide(ya, c);
        const Z = x.unmount;
        pn.add(x),
          (x.unmount = function () {
            pn.delete(x),
              pn.size < 1 &&
                ((f = Tn),
                E && E(),
                (E = null),
                (c.value = Tn),
                (Ft = !1),
                (gt = !1)),
              Z();
          });
      },
    };
  function Ie(x) {
    return x.reduce((Y, W) => Y.then(() => y(W)), Promise.resolve());
  }
  return Ge;
}
function vy(e, t) {
  const n = [],
    r = [],
    s = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < i; a++) {
    const l = t.matched[a];
    l && (e.matched.find((f) => Dr(f, l)) ? r.push(l) : n.push(l));
    const c = e.matched[a];
    c && (t.matched.find((f) => Dr(f, c)) || s.push(c));
  }
  return [n, r, s];
}
const Zt = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  Ey = { key: 0, class: "preloader" },
  Ty = { class: "loading-line" },
  wy = { class: "loading-text" },
  Iy = {
    __name: "Preloader",
    setup(e) {
      const t = sr(!0),
        n = sr(0);
      return (
        $r(() => {
          const r = setInterval(() => {
            n.value < 100
              ? (n.value += 1)
              : (clearInterval(r),
                setTimeout(() => {
                  t.value = !1;
                }, 500));
          }, 30);
        }),
        (r, s) => (
          pt(),
          fn(
            Hm,
            { name: "fade" },
            {
              default: qe(() => [
                t.value
                  ? (pt(),
                    Nt("div", Ey, [
                      J("div", Ty, [
                        J(
                          "div",
                          {
                            class: "loading-line-inner",
                            style: Wi({ width: `${n.value}%` }),
                          },
                          null,
                          4
                        ),
                      ]),
                      J("p", wy, "Loading... " + Xt(n.value) + "%", 1),
                    ]))
                  : Cm("", !0),
              ]),
              _: 1,
            }
          )
        )
      );
    },
  },
  Ay = Zt(Iy, [["__scopeId", "data-v-f416753b"]]),
  by = {},
  Ry = { class: "fon" };
function Cy(e, t) {
  return pt(), Nt("div", Ry);
}
const Sy = Zt(by, [
    ["render", Cy],
    ["__scopeId", "data-v-7f7d165a"],
  ]),
  Py = "/YouMeal/Group%207.svg",
  Vy = "/YouMeal/assets/hamburger-oGNDhsA3.svg",
  Dy = {},
  xy = { class: "content" };
function Ny(e, t) {
  return (
    pt(),
    Nt(
      "div",
      xy,
      t[0] ||
        (t[0] = [
          J(
            "div",
            { class: "hamburger" },
            [J("img", { src: Vy, alt: "hamburger" })],
            -1
          ),
          J(
            "div",
            { class: "info" },
            [
              J("h1", null, [
                da(" Only the "),
                J("br"),
                J("span", null, "juiciest burgers!"),
              ]),
              J("h2", null, [da("Free shipping from "), J("span", null, "6$")]),
            ],
            -1
          ),
        ])
    )
  );
}
const Oy = Zt(Dy, [
    ["render", Ny],
    ["__scopeId", "data-v-267b84d2"],
  ]),
  ky = { class: "content" },
  My = {
    __name: "Container",
    setup(e) {
      return (t, n) => (
        pt(),
        Nt("header", ky, [
          n[0] ||
            (n[0] = J(
              "div",
              { class: "logo" },
              [J("img", { src: Py, alt: "logo" })],
              -1
            )),
          ut(Oy),
        ])
      );
    },
  },
  Ly = Zt(My, [["__scopeId", "data-v-17654b39"]]),
  Fy = { class: "header" },
  By = {
    __name: "Header",
    setup(e) {
      return (t, n) => (pt(), Nt("div", Fy, [ut(Sy), ut(Ly)]));
    },
  },
  $y = { class: "categorie" },
  Uy = ["src"],
  qy = {
    __name: "Categorie",
    props: { img: String, title: String },
    setup(e) {
      return (t, n) => (
        pt(),
        Nt("button", $y, [
          J("img", { src: e.img, alt: "" }, null, 8, Uy),
          J("h1", null, Xt(e.title), 1),
        ])
      );
    },
  },
  on = Zt(qy, [["__scopeId", "data-v-9a69103a"]]),
  jy = { class: "categories" },
  zy = {
    __name: "Categories",
    setup(e) {
      return (t, n) => {
        const r = _f("router-link");
        return (
          pt(),
          Nt("div", jy, [
            ut(
              r,
              { to: "/" },
              {
                default: qe(() => [
                  ut(
                    on,
                    {
                      img: "/public/Burgers.svg",
                      title: "Burgers",
                      class: ke({ active: t.$route.path === "/" }),
                    },
                    null,
                    8,
                    ["class"]
                  ),
                ]),
                _: 1,
              }
            ),
            ut(
              r,
              { to: "/appetizers" },
              {
                default: qe(() => [
                  ut(
                    on,
                    {
                      img: "/public/Appetizers.svg",
                      title: "Appetizers",
                      class: ke({ active: t.$route.path === "/appetizers" }),
                    },
                    null,
                    8,
                    ["class"]
                  ),
                ]),
                _: 1,
              }
            ),
            ut(
              r,
              { to: "/hotdogs" },
              {
                default: qe(() => [
                  ut(
                    on,
                    {
                      img: "/public/Hot dogs.svg",
                      title: "Hot dogs",
                      class: ke({ active: t.$route.path === "/hotdogs" }),
                    },
                    null,
                    8,
                    ["class"]
                  ),
                ]),
                _: 1,
              }
            ),
            ut(
              r,
              { to: "/combo" },
              {
                default: qe(() => [
                  ut(
                    on,
                    {
                      img: "/public/Combo.svg",
                      title: "Combo",
                      class: ke({ active: t.$route.path === "/combo" }),
                    },
                    null,
                    8,
                    ["class"]
                  ),
                ]),
                _: 1,
              }
            ),
            ut(
              r,
              { to: "/shawarma" },
              {
                default: qe(() => [
                  ut(
                    on,
                    {
                      img: "/public/Shawarma.svg",
                      title: "Shawarma",
                      class: ke({ active: t.$route.path === "/shawarma" }),
                    },
                    null,
                    8,
                    ["class"]
                  ),
                ]),
                _: 1,
              }
            ),
            ut(
              r,
              { to: "/pizza" },
              {
                default: qe(() => [
                  ut(
                    on,
                    {
                      img: "/public/Pizza.svg",
                      title: "Pizza",
                      class: ke({ active: t.$route.path === "/pizza" }),
                    },
                    null,
                    8,
                    ["class"]
                  ),
                ]),
                _: 1,
              }
            ),
            ut(
              r,
              { to: "/wok" },
              {
                default: qe(() => [
                  ut(
                    on,
                    {
                      img: "/public/Wok.svg",
                      title: "Wok",
                      class: ke({ active: t.$route.path === "/wok" }),
                    },
                    null,
                    8,
                    ["class"]
                  ),
                ]),
                _: 1,
              }
            ),
            ut(
              r,
              { to: "/desserts" },
              {
                default: qe(() => [
                  ut(
                    on,
                    {
                      img: "/public/Desserts.svg",
                      title: "Desserts",
                      class: ke({ active: t.$route.path === "/desserts" }),
                    },
                    null,
                    8,
                    ["class"]
                  ),
                ]),
                _: 1,
              }
            ),
            ut(
              r,
              { to: "/sauces" },
              {
                default: qe(() => [
                  ut(
                    on,
                    {
                      img: "/public/Sauces.svg",
                      title: "Sauces",
                      class: ke({ active: t.$route.path === "/sauces" }),
                    },
                    null,
                    8,
                    ["class"]
                  ),
                ]),
                _: 1,
              }
            ),
          ])
        );
      };
    },
  },
  Hy = Zt(zy, [["__scopeId", "data-v-e298479b"]]),
  Ky = { class: "cart" },
  Gy = ["src"],
  Wy = { class: "container" },
  Qy = { class: "info" },
  Yy = { class: "gram" },
  Xy = { class: "price" },
  Jy = { class: "counter" },
  Zy = { class: "quantity" },
  tv = {
    __name: "Cart",
    props: {
      img: String,
      title: String,
      price: Number,
      gram: Number,
      quantity: Number,
      minus: Function,
      plus: Function,
    },
    setup(e) {
      return (t, n) => (
        pt(),
        Nt("div", Ky, [
          J("img", { src: e.img, class: "img" }, null, 8, Gy),
          J("div", Wy, [
            J("div", Qy, [
              J("h1", null, Xt(e.title), 1),
              J("p", Yy, Xt(e.gram) + "g", 1),
              J("p", Xy, Xt(e.price) + "$", 1),
            ]),
            J("div", Jy, [
              J(
                "button",
                { class: "minus", onClick: n[0] || (n[0] = (r) => e.minus()) },
                "-"
              ),
              J("h2", Zy, Xt(e.quantity), 1),
              J(
                "button",
                { class: "plus", onClick: n[1] || (n[1] = (r) => e.plus()) },
                "+"
              ),
            ]),
          ]),
        ])
      );
    },
  },
  ev = Zt(tv, [["__scopeId", "data-v-4bcc5596"]]),
  nv = { class: "content" },
  rv = {
    __name: "Content",
    setup(e) {
      const { basket: t, removeFromCart: n } = we("add-to-cart"),
        r = (i) => {
          i.quantity > 0 && i.quantity--, i.quantity === 0 && n(i);
        },
        s = (i) => {
          i.quantity < 10 && i.quantity++;
        };
      return (i, a) => (
        pt(),
        Nt("div", nv, [
          (pt(!0),
          Nt(
            Te,
            null,
            to(
              De(t),
              (l) => (
                pt(),
                fn(
                  ev,
                  {
                    img: l.image,
                    title: l.Name,
                    price: l.price,
                    gram: l.gram,
                    key: l.key,
                    quantity: l.quantity,
                    minus: r.bind(null, l),
                    plus: s.bind(null, l),
                  },
                  null,
                  8,
                  ["img", "title", "price", "gram", "quantity", "minus", "plus"]
                )
              )
            ),
            128
          )),
        ])
      );
    },
  },
  sv = Zt(rv, [["__scopeId", "data-v-e6c0ca59"]]),
  iv = "/YouMeal/assets/Delivery-DRHh7Ftn.svg",
  ov = { class: "end" },
  av = { class: "total" },
  lv = {
    __name: "End",
    setup(e) {
      const { total: t } = we("add-to-cart");
      return (n, r) => (
        pt(),
        Nt("div", ov, [
          J("div", av, [
            r[0] || (r[0] = J("h1", null, "Total", -1)),
            J("h1", null, Xt(De(t)) + "$", 1),
          ]),
          r[1] || (r[1] = J("button", { class: "button" }, "Checkout", -1)),
          r[2] ||
            (r[2] = J(
              "div",
              { class: "delivery" },
              [J("img", { src: iv }), J("h1", null, "Free shipping")],
              -1
            )),
        ])
      );
    },
  },
  cv = Zt(lv, [["__scopeId", "data-v-64bfad1d"]]),
  uv = { class: "basket" },
  hv = { class: "number" },
  fv = { class: "cont" },
  dv = { key: 0, class: "content" },
  pv = { key: 1, class: "empty" },
  gv = {
    __name: "Basket",
    setup(e) {
      const { basket: t } = we("add-to-cart"),
        n = () => {
          document.querySelector(".basket").classList.add("basket-open");
        },
        r = () => {
          document.querySelector(".basket").classList.remove("basket-open");
        };
      return (s, i) => (
        pt(),
        Nt("div", uv, [
          J("div", { class: "head", onClick: i[0] || (i[0] = (a) => n()) }, [
            i[2] || (i[2] = J("h1", null, "Basket", -1)),
            J("p", hv, Xt(De(t).length), 1),
          ]),
          J("div", fv, [
            De(t).length > 0
              ? (pt(), Nt("div", dv, [ut(sv), ut(cv)]))
              : (pt(),
                Nt(
                  "div",
                  pv,
                  i[3] || (i[3] = [J("h1", null, "Shopping cart is empty", -1)])
                )),
          ]),
          J(
            "p",
            { class: "fold", onClick: i[1] || (i[1] = (a) => r()) },
            "Fold"
          ),
        ])
      );
    },
  },
  mv = Zt(gv, [["__scopeId", "data-v-3deb9ad6"]]),
  _v = "/YouMeal/assets/logo%202-BBC8OHWt.svg",
  yv =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_16_411)'%3e%3cpath%20d='M20.01%2015.38C18.78%2015.38%2017.59%2015.18%2016.48%2014.82C16.13%2014.7%2015.74%2014.79%2015.47%2015.06L13.9%2017.03C11.07%2015.68%208.42%2013.13%207.01%2010.2L8.96%208.54C9.23%208.26%209.31%207.87%209.2%207.52C8.83%206.41%208.64%205.22%208.64%203.99C8.64%203.45%208.19%203%207.65%203H4.19C3.65%203%203%203.24%203%203.99C3%2013.28%2010.73%2021%2020.01%2021C20.72%2021%2021%2020.37%2021%2019.82V16.37C21%2015.83%2020.55%2015.38%2020.01%2015.38Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_16_411'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  vv = {};
function Ev(e, t) {
  return (
    pt(),
    Nt(
      "footer",
      null,
      t[0] ||
        (t[0] = [
          Rm(
            '<div class="content" data-v-caa29d80><div class="logo" data-v-caa29d80><img src="' +
              _v +
              '" alt="logo" data-v-caa29d80><div class="name" data-v-caa29d80><h5 data-v-caa29d80>© YouMeal, 2022</h5></div></div><div class="tell-number" data-v-caa29d80><h1 data-v-caa29d80>Order number</h1><div class="tell" data-v-caa29d80><img src="' +
              yv +
              '" alt="call" data-v-caa29d80><h2 data-v-caa29d80>+0(000)000-00-00</h2></div></div></div>',
            1
          ),
        ])
    )
  );
}
const Tv = Zt(vv, [
    ["render", Ev],
    ["__scopeId", "data-v-caa29d80"],
  ]),
  wv = { class: "combo" },
  Iv = {
    __name: "App",
    setup(e) {
      const t = sr([]),
        n = (i) => {
          const a = t.value.indexOf(i);
          t.value.splice(a, 1);
        },
        r = (i) => {
          if (!t.value.includes(i)) t.value.push(i), (i.quantity = 1);
          else {
            const a = t.value.indexOf(i);
            (t.value[a].quantity += 1),
              t.value[a].quantity > 10 && (t.value[a].quantity = 10);
          }
        },
        s = Me(() => t.value.reduce((i, a) => i + a.price * a.quantity, 0));
      return (
        _s("add-to-cart", {
          addToCart: r,
          removeFromCart: n,
          basket: t,
          total: s,
        }),
        (i, a) => {
          const l = _f("router-view");
          return (
            pt(),
            Nt(
              Te,
              null,
              [
                ut(Ay),
                ut(By),
                ut(Hy),
                J("div", wv, [ut(mv), ut(l, { class: "content" })]),
                ut(Tv),
              ],
              64
            )
          );
        }
      );
    },
  },
  Av = { class: "cart" },
  bv = ["src"],
  Rv = { class: "price" },
  Cv = { class: "name" },
  Sv = { class: "weight" },
  Pv = {
    __name: "Cart",
    props: {
      img: String,
      price: Number,
      title: String,
      gram: Number,
      onClick: Function,
    },
    setup(e) {
      return (t, n) => (
        pt(),
        Nt("div", Av, [
          J("img", { src: e.img, alt: "image" }, null, 8, bv),
          J("h1", Rv, Xt(e.price) + "$", 1),
          J("h2", Cv, Xt(e.title), 1),
          J("h3", Sv, Xt(e.gram) + "g", 1),
          n[1] || (n[1] = J("p", null, null, -1)),
          J(
            "button",
            {
              class: "button",
              onClick: n[0] || (n[0] = (...r) => e.onClick && e.onClick(...r)),
            },
            "Add to cart"
          ),
        ])
      );
    },
  },
  Vv = Zt(Pv, [["__scopeId", "data-v-d2798f9b"]]),
  Dv = { class: "burger" },
  xv = { class: "menu" },
  Nv = {
    __name: "Collecshin",
    props: { burgers: Array },
    setup(e) {
      const { addToCart: t } = we("add-to-cart");
      return (n, r) => (
        pt(),
        Nt("div", Dv, [
          r[0] || (r[0] = J("h1", null, "Burgers", -1)),
          J("div", xv, [
            (pt(!0),
            Nt(
              Te,
              null,
              to(
                e.burgers,
                (s) => (
                  pt(),
                  fn(
                    Vv,
                    {
                      key: s.key,
                      quantity: s.quantity,
                      img: s.image,
                      price: s.price,
                      title: s.Name,
                      gram: s.gram,
                      onclick: () => De(t)(s),
                    },
                    null,
                    8,
                    ["quantity", "img", "price", "title", "gram", "onclick"]
                  )
                )
              ),
              128
            )),
          ]),
        ])
      );
    },
  },
  Ov = Zt(Nv, [["__scopeId", "data-v-bc8f3793"]]);
var Pu = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const td = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let s = e.charCodeAt(r);
      s < 128
        ? (t[n++] = s)
        : s < 2048
        ? ((t[n++] = (s >> 6) | 192), (t[n++] = (s & 63) | 128))
        : (s & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((s = 65536 + ((s & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (s >> 18) | 240),
          (t[n++] = ((s >> 12) & 63) | 128),
          (t[n++] = ((s >> 6) & 63) | 128),
          (t[n++] = (s & 63) | 128))
        : ((t[n++] = (s >> 12) | 224),
          (t[n++] = ((s >> 6) & 63) | 128),
          (t[n++] = (s & 63) | 128));
    }
    return t;
  },
  kv = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const s = e[n++];
      if (s < 128) t[r++] = String.fromCharCode(s);
      else if (s > 191 && s < 224) {
        const i = e[n++];
        t[r++] = String.fromCharCode(((s & 31) << 6) | (i & 63));
      } else if (s > 239 && s < 365) {
        const i = e[n++],
          a = e[n++],
          l = e[n++],
          c =
            (((s & 7) << 18) | ((i & 63) << 12) | ((a & 63) << 6) | (l & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (c >> 10))),
          (t[r++] = String.fromCharCode(56320 + (c & 1023)));
      } else {
        const i = e[n++],
          a = e[n++];
        t[r++] = String.fromCharCode(
          ((s & 15) << 12) | ((i & 63) << 6) | (a & 63)
        );
      }
    }
    return t.join("");
  },
  ed = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let s = 0; s < e.length; s += 3) {
        const i = e[s],
          a = s + 1 < e.length,
          l = a ? e[s + 1] : 0,
          c = s + 2 < e.length,
          f = c ? e[s + 2] : 0,
          d = i >> 2,
          p = ((i & 3) << 4) | (l >> 4);
        let m = ((l & 15) << 2) | (f >> 6),
          T = f & 63;
        c || ((T = 64), a || (m = 64)), r.push(n[d], n[p], n[m], n[T]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(td(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : kv(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let s = 0; s < e.length; ) {
        const i = n[e.charAt(s++)],
          l = s < e.length ? n[e.charAt(s)] : 0;
        ++s;
        const f = s < e.length ? n[e.charAt(s)] : 64;
        ++s;
        const p = s < e.length ? n[e.charAt(s)] : 64;
        if ((++s, i == null || l == null || f == null || p == null))
          throw new Mv();
        const m = (i << 2) | (l >> 4);
        if ((r.push(m), f !== 64)) {
          const T = ((l << 4) & 240) | (f >> 2);
          if ((r.push(T), p !== 64)) {
            const V = ((f << 6) & 192) | p;
            r.push(V);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class Mv extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const Lv = function (e) {
    const t = td(e);
    return ed.encodeByteArray(t, !0);
  },
  xi = function (e) {
    return Lv(e).replace(/\./g, "");
  },
  Fv = function (e) {
    try {
      return ed.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bv() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $v = () => Bv().__FIREBASE_DEFAULTS__,
  Uv = () => {
    if (typeof process > "u" || typeof Pu > "u") return;
    const e = Pu.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  qv = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && Fv(e[1]);
    return t && JSON.parse(t);
  },
  ll = () => {
    try {
      return $v() || Uv() || qv();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  jv = (e) => {
    var t, n;
    return (n =
      (t = ll()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  zv = (e) => {
    const t = jv(e);
    if (!t) return;
    const n = t.lastIndexOf(":");
    if (n <= 0 || n + 1 === t.length)
      throw new Error(`Invalid host ${t} with no separate hostname and port!`);
    const r = parseInt(t.substring(n + 1), 10);
    return t[0] === "[" ? [t.substring(1, n - 1), r] : [t.substring(0, n), r];
  },
  nd = () => {
    var e;
    return (e = ll()) === null || e === void 0 ? void 0 : e.config;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hv {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Kv(e, t) {
  if (e.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const n = { alg: "none", type: "JWT" },
    r = t || "demo-project",
    s = e.iat || 0,
    i = e.sub || e.user_id;
  if (!i)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const a = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: s,
      exp: s + 3600,
      auth_time: s,
      sub: i,
      user_id: i,
      firebase: { sign_in_provider: "custom", identities: {} },
    },
    e
  );
  return [xi(JSON.stringify(n)), xi(JSON.stringify(a)), ""].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gv() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function Wv() {
  var e;
  const t = (e = ll()) === null || e === void 0 ? void 0 : e.forceEnvironment;
  if (t === "node") return !0;
  if (t === "browser") return !1;
  try {
    return (
      Object.prototype.toString.call(global.process) === "[object process]"
    );
  } catch {
    return !1;
  }
}
function Qv() {
  return (
    !Wv() &&
    !!navigator.userAgent &&
    navigator.userAgent.includes("Safari") &&
    !navigator.userAgent.includes("Chrome")
  );
}
function Yv() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Xv() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        s = self.indexedDB.open(r);
      (s.onsuccess = () => {
        s.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (s.onupgradeneeded = () => {
          n = !1;
        }),
        (s.onerror = () => {
          var i;
          t(
            ((i = s.error) === null || i === void 0 ? void 0 : i.message) || ""
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Jv = "FirebaseError";
class Ur extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = Jv),
      Object.setPrototypeOf(this, Ur.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, rd.prototype.create);
  }
}
class rd {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      s = `${this.service}/${t}`,
      i = this.errors[t],
      a = i ? Zv(i, r) : "Error",
      l = `${this.serviceName}: ${a} (${s}).`;
    return new Ur(s, l, r);
  }
}
function Zv(e, t) {
  return e.replace(tE, (n, r) => {
    const s = t[r];
    return s != null ? String(s) : `<${r}?>`;
  });
}
const tE = /\{\$([^}]+)}/g;
function va(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const s of n) {
    if (!r.includes(s)) return !1;
    const i = e[s],
      a = t[s];
    if (Vu(i) && Vu(a)) {
      if (!va(i, a)) return !1;
    } else if (i !== a) return !1;
  }
  for (const s of r) if (!n.includes(s)) return !1;
  return !0;
}
function Vu(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ni(e) {
  return e && e._delegate ? e._delegate : e;
}
class Os {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yn = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eE {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new Hv();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: n });
          s && r.resolve(s);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      s =
        (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (i) {
        if (s) return null;
        throw i;
      }
    else {
      if (s) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (rE(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Yn });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(n);
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: s });
          r.resolve(i);
        } catch {}
      }
    }
  }
  clearInstance(t = Yn) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Yn) {
    return this.instances.has(t);
  }
  getOptions(t = Yn) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const s = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [i, a] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(i);
      r === l && a.resolve(s);
    }
    return s;
  }
  onInit(t, n) {
    var r;
    const s = this.normalizeInstanceIdentifier(n),
      i =
        (r = this.onInitCallbacks.get(s)) !== null && r !== void 0
          ? r
          : new Set();
    i.add(t), this.onInitCallbacks.set(s, i);
    const a = this.instances.get(s);
    return (
      a && t(a, s),
      () => {
        i.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const s of r)
        try {
          s(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: nE(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = Yn) {
    return this.component ? (this.component.multipleInstances ? t : Yn) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function nE(e) {
  return e === Yn ? void 0 : e;
}
function rE(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sE {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new eE(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var yt;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(yt || (yt = {}));
const iE = {
    debug: yt.DEBUG,
    verbose: yt.VERBOSE,
    info: yt.INFO,
    warn: yt.WARN,
    error: yt.ERROR,
    silent: yt.SILENT,
  },
  oE = yt.INFO,
  aE = {
    [yt.DEBUG]: "log",
    [yt.VERBOSE]: "log",
    [yt.INFO]: "info",
    [yt.WARN]: "warn",
    [yt.ERROR]: "error",
  },
  lE = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      s = aE[t];
    if (s) console[s](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class sd {
  constructor(t) {
    (this.name = t),
      (this._logLevel = oE),
      (this._logHandler = lE),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in yt))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? iE[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, yt.DEBUG, ...t),
      this._logHandler(this, yt.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, yt.VERBOSE, ...t),
      this._logHandler(this, yt.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, yt.INFO, ...t),
      this._logHandler(this, yt.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, yt.WARN, ...t),
      this._logHandler(this, yt.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, yt.ERROR, ...t),
      this._logHandler(this, yt.ERROR, ...t);
  }
}
const cE = (e, t) => t.some((n) => e instanceof n);
let Du, xu;
function uE() {
  return (
    Du ||
    (Du = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function hE() {
  return (
    xu ||
    (xu = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const id = new WeakMap(),
  Ea = new WeakMap(),
  od = new WeakMap(),
  Go = new WeakMap(),
  cl = new WeakMap();
function fE(e) {
  const t = new Promise((n, r) => {
    const s = () => {
        e.removeEventListener("success", i), e.removeEventListener("error", a);
      },
      i = () => {
        n(Vn(e.result)), s();
      },
      a = () => {
        r(e.error), s();
      };
    e.addEventListener("success", i), e.addEventListener("error", a);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && id.set(n, e);
      })
      .catch(() => {}),
    cl.set(t, e),
    t
  );
}
function dE(e) {
  if (Ea.has(e)) return;
  const t = new Promise((n, r) => {
    const s = () => {
        e.removeEventListener("complete", i),
          e.removeEventListener("error", a),
          e.removeEventListener("abort", a);
      },
      i = () => {
        n(), s();
      },
      a = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), s();
      };
    e.addEventListener("complete", i),
      e.addEventListener("error", a),
      e.addEventListener("abort", a);
  });
  Ea.set(e, t);
}
let Ta = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return Ea.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || od.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return Vn(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function pE(e) {
  Ta = e(Ta);
}
function gE(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(Wo(this), t, ...n);
        return od.set(r, t.sort ? t.sort() : [t]), Vn(r);
      }
    : hE().includes(e)
    ? function (...t) {
        return e.apply(Wo(this), t), Vn(id.get(this));
      }
    : function (...t) {
        return Vn(e.apply(Wo(this), t));
      };
}
function mE(e) {
  return typeof e == "function"
    ? gE(e)
    : (e instanceof IDBTransaction && dE(e),
      cE(e, uE()) ? new Proxy(e, Ta) : e);
}
function Vn(e) {
  if (e instanceof IDBRequest) return fE(e);
  if (Go.has(e)) return Go.get(e);
  const t = mE(e);
  return t !== e && (Go.set(e, t), cl.set(t, e)), t;
}
const Wo = (e) => cl.get(e);
function _E(e, t, { blocked: n, upgrade: r, blocking: s, terminated: i } = {}) {
  const a = indexedDB.open(e, t),
    l = Vn(a);
  return (
    r &&
      a.addEventListener("upgradeneeded", (c) => {
        r(Vn(a.result), c.oldVersion, c.newVersion, Vn(a.transaction), c);
      }),
    n && a.addEventListener("blocked", (c) => n(c.oldVersion, c.newVersion, c)),
    l
      .then((c) => {
        i && c.addEventListener("close", () => i()),
          s &&
            c.addEventListener("versionchange", (f) =>
              s(f.oldVersion, f.newVersion, f)
            );
      })
      .catch(() => {}),
    l
  );
}
const yE = ["get", "getKey", "getAll", "getAllKeys", "count"],
  vE = ["put", "add", "delete", "clear"],
  Qo = new Map();
function Nu(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (Qo.get(t)) return Qo.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    s = vE.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(s || yE.includes(n))
  )
    return;
  const i = async function (a, ...l) {
    const c = this.transaction(a, s ? "readwrite" : "readonly");
    let f = c.store;
    return (
      r && (f = f.index(l.shift())),
      (await Promise.all([f[n](...l), s && c.done]))[0]
    );
  };
  return Qo.set(t, i), i;
}
pE((e) => ({
  ...e,
  get: (t, n, r) => Nu(t, n) || e.get(t, n, r),
  has: (t, n) => !!Nu(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class EE {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (TE(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function TE(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const wa = "@firebase/app",
  Ou = "0.10.16";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const cn = new sd("@firebase/app"),
  wE = "@firebase/app-compat",
  IE = "@firebase/analytics-compat",
  AE = "@firebase/analytics",
  bE = "@firebase/app-check-compat",
  RE = "@firebase/app-check",
  CE = "@firebase/auth",
  SE = "@firebase/auth-compat",
  PE = "@firebase/database",
  VE = "@firebase/data-connect",
  DE = "@firebase/database-compat",
  xE = "@firebase/functions",
  NE = "@firebase/functions-compat",
  OE = "@firebase/installations",
  kE = "@firebase/installations-compat",
  ME = "@firebase/messaging",
  LE = "@firebase/messaging-compat",
  FE = "@firebase/performance",
  BE = "@firebase/performance-compat",
  $E = "@firebase/remote-config",
  UE = "@firebase/remote-config-compat",
  qE = "@firebase/storage",
  jE = "@firebase/storage-compat",
  zE = "@firebase/firestore",
  HE = "@firebase/vertexai",
  KE = "@firebase/firestore-compat",
  GE = "firebase",
  WE = "11.0.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ia = "[DEFAULT]",
  QE = {
    [wa]: "fire-core",
    [wE]: "fire-core-compat",
    [AE]: "fire-analytics",
    [IE]: "fire-analytics-compat",
    [RE]: "fire-app-check",
    [bE]: "fire-app-check-compat",
    [CE]: "fire-auth",
    [SE]: "fire-auth-compat",
    [PE]: "fire-rtdb",
    [VE]: "fire-data-connect",
    [DE]: "fire-rtdb-compat",
    [xE]: "fire-fn",
    [NE]: "fire-fn-compat",
    [OE]: "fire-iid",
    [kE]: "fire-iid-compat",
    [ME]: "fire-fcm",
    [LE]: "fire-fcm-compat",
    [FE]: "fire-perf",
    [BE]: "fire-perf-compat",
    [$E]: "fire-rc",
    [UE]: "fire-rc-compat",
    [qE]: "fire-gcs",
    [jE]: "fire-gcs-compat",
    [zE]: "fire-fst",
    [KE]: "fire-fst-compat",
    [HE]: "fire-vertex",
    "fire-js": "fire-js",
    [GE]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Oi = new Map(),
  YE = new Map(),
  Aa = new Map();
function ku(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    cn.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function ki(e) {
  const t = e.name;
  if (Aa.has(t))
    return (
      cn.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Aa.set(t, e);
  for (const n of Oi.values()) ku(n, e);
  for (const n of YE.values()) ku(n, e);
  return !0;
}
function XE(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const JE = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  Dn = new rd("app", "Firebase", JE);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ZE {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Os("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Dn.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const t0 = WE;
function ad(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: Ia, automaticDataCollectionEnabled: !1 }, t),
    s = r.name;
  if (typeof s != "string" || !s)
    throw Dn.create("bad-app-name", { appName: String(s) });
  if ((n || (n = nd()), !n)) throw Dn.create("no-options");
  const i = Oi.get(s);
  if (i) {
    if (va(n, i.options) && va(r, i.config)) return i;
    throw Dn.create("duplicate-app", { appName: s });
  }
  const a = new sE(s);
  for (const c of Aa.values()) a.addComponent(c);
  const l = new ZE(n, r, a);
  return Oi.set(s, l), l;
}
function e0(e = Ia) {
  const t = Oi.get(e);
  if (!t && e === Ia && nd()) return ad();
  if (!t) throw Dn.create("no-app", { appName: e });
  return t;
}
function Cr(e, t, n) {
  var r;
  let s = (r = QE[e]) !== null && r !== void 0 ? r : e;
  n && (s += `-${n}`);
  const i = s.match(/\s|\//),
    a = t.match(/\s|\//);
  if (i || a) {
    const l = [`Unable to register library "${s}" with version "${t}":`];
    i &&
      l.push(
        `library name "${s}" contains illegal characters (whitespace or "/")`
      ),
      i && a && l.push("and"),
      a &&
        l.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      cn.warn(l.join(" "));
    return;
  }
  ki(new Os(`${s}-version`, () => ({ library: s, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const n0 = "firebase-heartbeat-database",
  r0 = 1,
  ks = "firebase-heartbeat-store";
let Yo = null;
function ld() {
  return (
    Yo ||
      (Yo = _E(n0, r0, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(ks);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw Dn.create("idb-open", { originalErrorMessage: e.message });
      })),
    Yo
  );
}
async function s0(e) {
  try {
    const n = (await ld()).transaction(ks),
      r = await n.objectStore(ks).get(cd(e));
    return await n.done, r;
  } catch (t) {
    if (t instanceof Ur) cn.warn(t.message);
    else {
      const n = Dn.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      cn.warn(n.message);
    }
  }
}
async function Mu(e, t) {
  try {
    const r = (await ld()).transaction(ks, "readwrite");
    await r.objectStore(ks).put(t, cd(e)), await r.done;
  } catch (n) {
    if (n instanceof Ur) cn.warn(n.message);
    else {
      const r = Dn.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      cn.warn(r.message);
    }
  }
}
function cd(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const i0 = 1024,
  o0 = 30 * 24 * 60 * 60 * 1e3;
class a0 {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new c0(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, n;
    try {
      const s = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        i = Lu();
      return (((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === i ||
        this._heartbeatsCache.heartbeats.some((a) => a.date === i)
        ? void 0
        : (this._heartbeatsCache.heartbeats.push({ date: i, agent: s }),
          (this._heartbeatsCache.heartbeats =
            this._heartbeatsCache.heartbeats.filter((a) => {
              const l = new Date(a.date).valueOf();
              return Date.now() - l <= o0;
            })),
          this._storage.overwrite(this._heartbeatsCache));
    } catch (r) {
      cn.warn(r);
    }
  }
  async getHeartbeatsHeader() {
    var t;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const n = Lu(),
        { heartbeatsToSend: r, unsentEntries: s } = l0(
          this._heartbeatsCache.heartbeats
        ),
        i = xi(JSON.stringify({ version: 2, heartbeats: r }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        s.length > 0
          ? ((this._heartbeatsCache.heartbeats = s),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        i
      );
    } catch (n) {
      return cn.warn(n), "";
    }
  }
}
function Lu() {
  return new Date().toISOString().substring(0, 10);
}
function l0(e, t = i0) {
  const n = [];
  let r = e.slice();
  for (const s of e) {
    const i = n.find((a) => a.agent === s.agent);
    if (i) {
      if ((i.dates.push(s.date), Fu(n) > t)) {
        i.dates.pop();
        break;
      }
    } else if ((n.push({ agent: s.agent, dates: [s.date] }), Fu(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class c0 {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Yv()
      ? Xv()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await s0(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return Mu(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : s.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return Mu(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : s.lastSentHeartbeatDate,
        heartbeats: [...s.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function Fu(e) {
  return xi(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function u0(e) {
  ki(new Os("platform-logger", (t) => new EE(t), "PRIVATE")),
    ki(new Os("heartbeat", (t) => new a0(t), "PRIVATE")),
    Cr(wa, Ou, e),
    Cr(wa, Ou, "esm2017"),
    Cr("fire-js", "");
}
u0("");
var Bu =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var tr, ud;
(function () {
  var e;
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function t(R, v) {
    function y() {}
    (y.prototype = v.prototype),
      (R.D = v.prototype),
      (R.prototype = new y()),
      (R.prototype.constructor = R),
      (R.C = function (A, b, I) {
        for (
          var E = Array(arguments.length - 2), St = 2;
          St < arguments.length;
          St++
        )
          E[St - 2] = arguments[St];
        return v.prototype[b].apply(A, E);
      });
  }
  function n() {
    this.blockSize = -1;
  }
  function r() {
    (this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.B = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.s();
  }
  t(r, n),
    (r.prototype.s = function () {
      (this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0);
    });
  function s(R, v, y) {
    y || (y = 0);
    var A = Array(16);
    if (typeof v == "string")
      for (var b = 0; 16 > b; ++b)
        A[b] =
          v.charCodeAt(y++) |
          (v.charCodeAt(y++) << 8) |
          (v.charCodeAt(y++) << 16) |
          (v.charCodeAt(y++) << 24);
    else
      for (b = 0; 16 > b; ++b)
        A[b] = v[y++] | (v[y++] << 8) | (v[y++] << 16) | (v[y++] << 24);
    (v = R.g[0]), (y = R.g[1]), (b = R.g[2]);
    var I = R.g[3],
      E = (v + (I ^ (y & (b ^ I))) + A[0] + 3614090360) & 4294967295;
    (v = y + (((E << 7) & 4294967295) | (E >>> 25))),
      (E = (I + (b ^ (v & (y ^ b))) + A[1] + 3905402710) & 4294967295),
      (I = v + (((E << 12) & 4294967295) | (E >>> 20))),
      (E = (b + (y ^ (I & (v ^ y))) + A[2] + 606105819) & 4294967295),
      (b = I + (((E << 17) & 4294967295) | (E >>> 15))),
      (E = (y + (v ^ (b & (I ^ v))) + A[3] + 3250441966) & 4294967295),
      (y = b + (((E << 22) & 4294967295) | (E >>> 10))),
      (E = (v + (I ^ (y & (b ^ I))) + A[4] + 4118548399) & 4294967295),
      (v = y + (((E << 7) & 4294967295) | (E >>> 25))),
      (E = (I + (b ^ (v & (y ^ b))) + A[5] + 1200080426) & 4294967295),
      (I = v + (((E << 12) & 4294967295) | (E >>> 20))),
      (E = (b + (y ^ (I & (v ^ y))) + A[6] + 2821735955) & 4294967295),
      (b = I + (((E << 17) & 4294967295) | (E >>> 15))),
      (E = (y + (v ^ (b & (I ^ v))) + A[7] + 4249261313) & 4294967295),
      (y = b + (((E << 22) & 4294967295) | (E >>> 10))),
      (E = (v + (I ^ (y & (b ^ I))) + A[8] + 1770035416) & 4294967295),
      (v = y + (((E << 7) & 4294967295) | (E >>> 25))),
      (E = (I + (b ^ (v & (y ^ b))) + A[9] + 2336552879) & 4294967295),
      (I = v + (((E << 12) & 4294967295) | (E >>> 20))),
      (E = (b + (y ^ (I & (v ^ y))) + A[10] + 4294925233) & 4294967295),
      (b = I + (((E << 17) & 4294967295) | (E >>> 15))),
      (E = (y + (v ^ (b & (I ^ v))) + A[11] + 2304563134) & 4294967295),
      (y = b + (((E << 22) & 4294967295) | (E >>> 10))),
      (E = (v + (I ^ (y & (b ^ I))) + A[12] + 1804603682) & 4294967295),
      (v = y + (((E << 7) & 4294967295) | (E >>> 25))),
      (E = (I + (b ^ (v & (y ^ b))) + A[13] + 4254626195) & 4294967295),
      (I = v + (((E << 12) & 4294967295) | (E >>> 20))),
      (E = (b + (y ^ (I & (v ^ y))) + A[14] + 2792965006) & 4294967295),
      (b = I + (((E << 17) & 4294967295) | (E >>> 15))),
      (E = (y + (v ^ (b & (I ^ v))) + A[15] + 1236535329) & 4294967295),
      (y = b + (((E << 22) & 4294967295) | (E >>> 10))),
      (E = (v + (b ^ (I & (y ^ b))) + A[1] + 4129170786) & 4294967295),
      (v = y + (((E << 5) & 4294967295) | (E >>> 27))),
      (E = (I + (y ^ (b & (v ^ y))) + A[6] + 3225465664) & 4294967295),
      (I = v + (((E << 9) & 4294967295) | (E >>> 23))),
      (E = (b + (v ^ (y & (I ^ v))) + A[11] + 643717713) & 4294967295),
      (b = I + (((E << 14) & 4294967295) | (E >>> 18))),
      (E = (y + (I ^ (v & (b ^ I))) + A[0] + 3921069994) & 4294967295),
      (y = b + (((E << 20) & 4294967295) | (E >>> 12))),
      (E = (v + (b ^ (I & (y ^ b))) + A[5] + 3593408605) & 4294967295),
      (v = y + (((E << 5) & 4294967295) | (E >>> 27))),
      (E = (I + (y ^ (b & (v ^ y))) + A[10] + 38016083) & 4294967295),
      (I = v + (((E << 9) & 4294967295) | (E >>> 23))),
      (E = (b + (v ^ (y & (I ^ v))) + A[15] + 3634488961) & 4294967295),
      (b = I + (((E << 14) & 4294967295) | (E >>> 18))),
      (E = (y + (I ^ (v & (b ^ I))) + A[4] + 3889429448) & 4294967295),
      (y = b + (((E << 20) & 4294967295) | (E >>> 12))),
      (E = (v + (b ^ (I & (y ^ b))) + A[9] + 568446438) & 4294967295),
      (v = y + (((E << 5) & 4294967295) | (E >>> 27))),
      (E = (I + (y ^ (b & (v ^ y))) + A[14] + 3275163606) & 4294967295),
      (I = v + (((E << 9) & 4294967295) | (E >>> 23))),
      (E = (b + (v ^ (y & (I ^ v))) + A[3] + 4107603335) & 4294967295),
      (b = I + (((E << 14) & 4294967295) | (E >>> 18))),
      (E = (y + (I ^ (v & (b ^ I))) + A[8] + 1163531501) & 4294967295),
      (y = b + (((E << 20) & 4294967295) | (E >>> 12))),
      (E = (v + (b ^ (I & (y ^ b))) + A[13] + 2850285829) & 4294967295),
      (v = y + (((E << 5) & 4294967295) | (E >>> 27))),
      (E = (I + (y ^ (b & (v ^ y))) + A[2] + 4243563512) & 4294967295),
      (I = v + (((E << 9) & 4294967295) | (E >>> 23))),
      (E = (b + (v ^ (y & (I ^ v))) + A[7] + 1735328473) & 4294967295),
      (b = I + (((E << 14) & 4294967295) | (E >>> 18))),
      (E = (y + (I ^ (v & (b ^ I))) + A[12] + 2368359562) & 4294967295),
      (y = b + (((E << 20) & 4294967295) | (E >>> 12))),
      (E = (v + (y ^ b ^ I) + A[5] + 4294588738) & 4294967295),
      (v = y + (((E << 4) & 4294967295) | (E >>> 28))),
      (E = (I + (v ^ y ^ b) + A[8] + 2272392833) & 4294967295),
      (I = v + (((E << 11) & 4294967295) | (E >>> 21))),
      (E = (b + (I ^ v ^ y) + A[11] + 1839030562) & 4294967295),
      (b = I + (((E << 16) & 4294967295) | (E >>> 16))),
      (E = (y + (b ^ I ^ v) + A[14] + 4259657740) & 4294967295),
      (y = b + (((E << 23) & 4294967295) | (E >>> 9))),
      (E = (v + (y ^ b ^ I) + A[1] + 2763975236) & 4294967295),
      (v = y + (((E << 4) & 4294967295) | (E >>> 28))),
      (E = (I + (v ^ y ^ b) + A[4] + 1272893353) & 4294967295),
      (I = v + (((E << 11) & 4294967295) | (E >>> 21))),
      (E = (b + (I ^ v ^ y) + A[7] + 4139469664) & 4294967295),
      (b = I + (((E << 16) & 4294967295) | (E >>> 16))),
      (E = (y + (b ^ I ^ v) + A[10] + 3200236656) & 4294967295),
      (y = b + (((E << 23) & 4294967295) | (E >>> 9))),
      (E = (v + (y ^ b ^ I) + A[13] + 681279174) & 4294967295),
      (v = y + (((E << 4) & 4294967295) | (E >>> 28))),
      (E = (I + (v ^ y ^ b) + A[0] + 3936430074) & 4294967295),
      (I = v + (((E << 11) & 4294967295) | (E >>> 21))),
      (E = (b + (I ^ v ^ y) + A[3] + 3572445317) & 4294967295),
      (b = I + (((E << 16) & 4294967295) | (E >>> 16))),
      (E = (y + (b ^ I ^ v) + A[6] + 76029189) & 4294967295),
      (y = b + (((E << 23) & 4294967295) | (E >>> 9))),
      (E = (v + (y ^ b ^ I) + A[9] + 3654602809) & 4294967295),
      (v = y + (((E << 4) & 4294967295) | (E >>> 28))),
      (E = (I + (v ^ y ^ b) + A[12] + 3873151461) & 4294967295),
      (I = v + (((E << 11) & 4294967295) | (E >>> 21))),
      (E = (b + (I ^ v ^ y) + A[15] + 530742520) & 4294967295),
      (b = I + (((E << 16) & 4294967295) | (E >>> 16))),
      (E = (y + (b ^ I ^ v) + A[2] + 3299628645) & 4294967295),
      (y = b + (((E << 23) & 4294967295) | (E >>> 9))),
      (E = (v + (b ^ (y | ~I)) + A[0] + 4096336452) & 4294967295),
      (v = y + (((E << 6) & 4294967295) | (E >>> 26))),
      (E = (I + (y ^ (v | ~b)) + A[7] + 1126891415) & 4294967295),
      (I = v + (((E << 10) & 4294967295) | (E >>> 22))),
      (E = (b + (v ^ (I | ~y)) + A[14] + 2878612391) & 4294967295),
      (b = I + (((E << 15) & 4294967295) | (E >>> 17))),
      (E = (y + (I ^ (b | ~v)) + A[5] + 4237533241) & 4294967295),
      (y = b + (((E << 21) & 4294967295) | (E >>> 11))),
      (E = (v + (b ^ (y | ~I)) + A[12] + 1700485571) & 4294967295),
      (v = y + (((E << 6) & 4294967295) | (E >>> 26))),
      (E = (I + (y ^ (v | ~b)) + A[3] + 2399980690) & 4294967295),
      (I = v + (((E << 10) & 4294967295) | (E >>> 22))),
      (E = (b + (v ^ (I | ~y)) + A[10] + 4293915773) & 4294967295),
      (b = I + (((E << 15) & 4294967295) | (E >>> 17))),
      (E = (y + (I ^ (b | ~v)) + A[1] + 2240044497) & 4294967295),
      (y = b + (((E << 21) & 4294967295) | (E >>> 11))),
      (E = (v + (b ^ (y | ~I)) + A[8] + 1873313359) & 4294967295),
      (v = y + (((E << 6) & 4294967295) | (E >>> 26))),
      (E = (I + (y ^ (v | ~b)) + A[15] + 4264355552) & 4294967295),
      (I = v + (((E << 10) & 4294967295) | (E >>> 22))),
      (E = (b + (v ^ (I | ~y)) + A[6] + 2734768916) & 4294967295),
      (b = I + (((E << 15) & 4294967295) | (E >>> 17))),
      (E = (y + (I ^ (b | ~v)) + A[13] + 1309151649) & 4294967295),
      (y = b + (((E << 21) & 4294967295) | (E >>> 11))),
      (E = (v + (b ^ (y | ~I)) + A[4] + 4149444226) & 4294967295),
      (v = y + (((E << 6) & 4294967295) | (E >>> 26))),
      (E = (I + (y ^ (v | ~b)) + A[11] + 3174756917) & 4294967295),
      (I = v + (((E << 10) & 4294967295) | (E >>> 22))),
      (E = (b + (v ^ (I | ~y)) + A[2] + 718787259) & 4294967295),
      (b = I + (((E << 15) & 4294967295) | (E >>> 17))),
      (E = (y + (I ^ (b | ~v)) + A[9] + 3951481745) & 4294967295),
      (R.g[0] = (R.g[0] + v) & 4294967295),
      (R.g[1] =
        (R.g[1] + (b + (((E << 21) & 4294967295) | (E >>> 11)))) & 4294967295),
      (R.g[2] = (R.g[2] + b) & 4294967295),
      (R.g[3] = (R.g[3] + I) & 4294967295);
  }
  (r.prototype.u = function (R, v) {
    v === void 0 && (v = R.length);
    for (var y = v - this.blockSize, A = this.B, b = this.h, I = 0; I < v; ) {
      if (b == 0) for (; I <= y; ) s(this, R, I), (I += this.blockSize);
      if (typeof R == "string") {
        for (; I < v; )
          if (((A[b++] = R.charCodeAt(I++)), b == this.blockSize)) {
            s(this, A), (b = 0);
            break;
          }
      } else
        for (; I < v; )
          if (((A[b++] = R[I++]), b == this.blockSize)) {
            s(this, A), (b = 0);
            break;
          }
    }
    (this.h = b), (this.o += v);
  }),
    (r.prototype.v = function () {
      var R = Array(
        (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
      );
      R[0] = 128;
      for (var v = 1; v < R.length - 8; ++v) R[v] = 0;
      var y = 8 * this.o;
      for (v = R.length - 8; v < R.length; ++v) (R[v] = y & 255), (y /= 256);
      for (this.u(R), R = Array(16), v = y = 0; 4 > v; ++v)
        for (var A = 0; 32 > A; A += 8) R[y++] = (this.g[v] >>> A) & 255;
      return R;
    });
  function i(R, v) {
    var y = l;
    return Object.prototype.hasOwnProperty.call(y, R) ? y[R] : (y[R] = v(R));
  }
  function a(R, v) {
    this.h = v;
    for (var y = [], A = !0, b = R.length - 1; 0 <= b; b--) {
      var I = R[b] | 0;
      (A && I == v) || ((y[b] = I), (A = !1));
    }
    this.g = y;
  }
  var l = {};
  function c(R) {
    return -128 <= R && 128 > R
      ? i(R, function (v) {
          return new a([v | 0], 0 > v ? -1 : 0);
        })
      : new a([R | 0], 0 > R ? -1 : 0);
  }
  function f(R) {
    if (isNaN(R) || !isFinite(R)) return p;
    if (0 > R) return k(f(-R));
    for (var v = [], y = 1, A = 0; R >= y; A++)
      (v[A] = (R / y) | 0), (y *= 4294967296);
    return new a(v, 0);
  }
  function d(R, v) {
    if (R.length == 0) throw Error("number format error: empty string");
    if (((v = v || 10), 2 > v || 36 < v))
      throw Error("radix out of range: " + v);
    if (R.charAt(0) == "-") return k(d(R.substring(1), v));
    if (0 <= R.indexOf("-"))
      throw Error('number format error: interior "-" character');
    for (var y = f(Math.pow(v, 8)), A = p, b = 0; b < R.length; b += 8) {
      var I = Math.min(8, R.length - b),
        E = parseInt(R.substring(b, b + I), v);
      8 > I
        ? ((I = f(Math.pow(v, I))), (A = A.j(I).add(f(E))))
        : ((A = A.j(y)), (A = A.add(f(E))));
    }
    return A;
  }
  var p = c(0),
    m = c(1),
    T = c(16777216);
  (e = a.prototype),
    (e.m = function () {
      if (N(this)) return -k(this).m();
      for (var R = 0, v = 1, y = 0; y < this.g.length; y++) {
        var A = this.i(y);
        (R += (0 <= A ? A : 4294967296 + A) * v), (v *= 4294967296);
      }
      return R;
    }),
    (e.toString = function (R) {
      if (((R = R || 10), 2 > R || 36 < R))
        throw Error("radix out of range: " + R);
      if (V(this)) return "0";
      if (N(this)) return "-" + k(this).toString(R);
      for (var v = f(Math.pow(R, 6)), y = this, A = ""; ; ) {
        var b = j(y, v).g;
        y = K(y, b.j(v));
        var I = ((0 < y.g.length ? y.g[0] : y.h) >>> 0).toString(R);
        if (((y = b), V(y))) return I + A;
        for (; 6 > I.length; ) I = "0" + I;
        A = I + A;
      }
    }),
    (e.i = function (R) {
      return 0 > R ? 0 : R < this.g.length ? this.g[R] : this.h;
    });
  function V(R) {
    if (R.h != 0) return !1;
    for (var v = 0; v < R.g.length; v++) if (R.g[v] != 0) return !1;
    return !0;
  }
  function N(R) {
    return R.h == -1;
  }
  e.l = function (R) {
    return (R = K(this, R)), N(R) ? -1 : V(R) ? 0 : 1;
  };
  function k(R) {
    for (var v = R.g.length, y = [], A = 0; A < v; A++) y[A] = ~R.g[A];
    return new a(y, ~R.h).add(m);
  }
  (e.abs = function () {
    return N(this) ? k(this) : this;
  }),
    (e.add = function (R) {
      for (
        var v = Math.max(this.g.length, R.g.length), y = [], A = 0, b = 0;
        b <= v;
        b++
      ) {
        var I = A + (this.i(b) & 65535) + (R.i(b) & 65535),
          E = (I >>> 16) + (this.i(b) >>> 16) + (R.i(b) >>> 16);
        (A = E >>> 16), (I &= 65535), (E &= 65535), (y[b] = (E << 16) | I);
      }
      return new a(y, y[y.length - 1] & -2147483648 ? -1 : 0);
    });
  function K(R, v) {
    return R.add(k(v));
  }
  e.j = function (R) {
    if (V(this) || V(R)) return p;
    if (N(this)) return N(R) ? k(this).j(k(R)) : k(k(this).j(R));
    if (N(R)) return k(this.j(k(R)));
    if (0 > this.l(T) && 0 > R.l(T)) return f(this.m() * R.m());
    for (var v = this.g.length + R.g.length, y = [], A = 0; A < 2 * v; A++)
      y[A] = 0;
    for (A = 0; A < this.g.length; A++)
      for (var b = 0; b < R.g.length; b++) {
        var I = this.i(A) >>> 16,
          E = this.i(A) & 65535,
          St = R.i(b) >>> 16,
          te = R.i(b) & 65535;
        (y[2 * A + 2 * b] += E * te),
          U(y, 2 * A + 2 * b),
          (y[2 * A + 2 * b + 1] += I * te),
          U(y, 2 * A + 2 * b + 1),
          (y[2 * A + 2 * b + 1] += E * St),
          U(y, 2 * A + 2 * b + 1),
          (y[2 * A + 2 * b + 2] += I * St),
          U(y, 2 * A + 2 * b + 2);
      }
    for (A = 0; A < v; A++) y[A] = (y[2 * A + 1] << 16) | y[2 * A];
    for (A = v; A < 2 * v; A++) y[A] = 0;
    return new a(y, 0);
  };
  function U(R, v) {
    for (; (R[v] & 65535) != R[v]; )
      (R[v + 1] += R[v] >>> 16), (R[v] &= 65535), v++;
  }
  function H(R, v) {
    (this.g = R), (this.h = v);
  }
  function j(R, v) {
    if (V(v)) throw Error("division by zero");
    if (V(R)) return new H(p, p);
    if (N(R)) return (v = j(k(R), v)), new H(k(v.g), k(v.h));
    if (N(v)) return (v = j(R, k(v))), new H(k(v.g), v.h);
    if (30 < R.g.length) {
      if (N(R) || N(v))
        throw Error("slowDivide_ only works with positive integers.");
      for (var y = m, A = v; 0 >= A.l(R); ) (y = lt(y)), (A = lt(A));
      var b = at(y, 1),
        I = at(A, 1);
      for (A = at(A, 2), y = at(y, 2); !V(A); ) {
        var E = I.add(A);
        0 >= E.l(R) && ((b = b.add(y)), (I = E)),
          (A = at(A, 1)),
          (y = at(y, 1));
      }
      return (v = K(R, b.j(v))), new H(b, v);
    }
    for (b = p; 0 <= R.l(v); ) {
      for (
        y = Math.max(1, Math.floor(R.m() / v.m())),
          A = Math.ceil(Math.log(y) / Math.LN2),
          A = 48 >= A ? 1 : Math.pow(2, A - 48),
          I = f(y),
          E = I.j(v);
        N(E) || 0 < E.l(R);

      )
        (y -= A), (I = f(y)), (E = I.j(v));
      V(I) && (I = m), (b = b.add(I)), (R = K(R, E));
    }
    return new H(b, R);
  }
  (e.A = function (R) {
    return j(this, R).h;
  }),
    (e.and = function (R) {
      for (
        var v = Math.max(this.g.length, R.g.length), y = [], A = 0;
        A < v;
        A++
      )
        y[A] = this.i(A) & R.i(A);
      return new a(y, this.h & R.h);
    }),
    (e.or = function (R) {
      for (
        var v = Math.max(this.g.length, R.g.length), y = [], A = 0;
        A < v;
        A++
      )
        y[A] = this.i(A) | R.i(A);
      return new a(y, this.h | R.h);
    }),
    (e.xor = function (R) {
      for (
        var v = Math.max(this.g.length, R.g.length), y = [], A = 0;
        A < v;
        A++
      )
        y[A] = this.i(A) ^ R.i(A);
      return new a(y, this.h ^ R.h);
    });
  function lt(R) {
    for (var v = R.g.length + 1, y = [], A = 0; A < v; A++)
      y[A] = (R.i(A) << 1) | (R.i(A - 1) >>> 31);
    return new a(y, R.h);
  }
  function at(R, v) {
    var y = v >> 5;
    v %= 32;
    for (var A = R.g.length - y, b = [], I = 0; I < A; I++)
      b[I] =
        0 < v ? (R.i(I + y) >>> v) | (R.i(I + y + 1) << (32 - v)) : R.i(I + y);
    return new a(b, R.h);
  }
  (r.prototype.digest = r.prototype.v),
    (r.prototype.reset = r.prototype.s),
    (r.prototype.update = r.prototype.u),
    (ud = r),
    (a.prototype.add = a.prototype.add),
    (a.prototype.multiply = a.prototype.j),
    (a.prototype.modulo = a.prototype.A),
    (a.prototype.compare = a.prototype.l),
    (a.prototype.toNumber = a.prototype.m),
    (a.prototype.toString = a.prototype.toString),
    (a.prototype.getBits = a.prototype.i),
    (a.fromNumber = f),
    (a.fromString = d),
    (tr = a);
}).apply(
  typeof Bu < "u"
    ? Bu
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : {}
);
var hi =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var hd, cs, fd, Ti, ba, dd, pd, gd;
(function () {
  var e,
    t =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (o, u, h) {
            return (
              o == Array.prototype || o == Object.prototype || (o[u] = h.value),
              o
            );
          };
  function n(o) {
    o = [
      typeof globalThis == "object" && globalThis,
      o,
      typeof window == "object" && window,
      typeof self == "object" && self,
      typeof hi == "object" && hi,
    ];
    for (var u = 0; u < o.length; ++u) {
      var h = o[u];
      if (h && h.Math == Math) return h;
    }
    throw Error("Cannot find global object");
  }
  var r = n(this);
  function s(o, u) {
    if (u)
      t: {
        var h = r;
        o = o.split(".");
        for (var g = 0; g < o.length - 1; g++) {
          var C = o[g];
          if (!(C in h)) break t;
          h = h[C];
        }
        (o = o[o.length - 1]),
          (g = h[o]),
          (u = u(g)),
          u != g &&
            u != null &&
            t(h, o, { configurable: !0, writable: !0, value: u });
      }
  }
  function i(o, u) {
    o instanceof String && (o += "");
    var h = 0,
      g = !1,
      C = {
        next: function () {
          if (!g && h < o.length) {
            var P = h++;
            return { value: u(P, o[P]), done: !1 };
          }
          return (g = !0), { done: !0, value: void 0 };
        },
      };
    return (
      (C[Symbol.iterator] = function () {
        return C;
      }),
      C
    );
  }
  s("Array.prototype.values", function (o) {
    return (
      o ||
      function () {
        return i(this, function (u, h) {
          return h;
        });
      }
    );
  });
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var a = a || {},
    l = this || self;
  function c(o) {
    var u = typeof o;
    return (
      (u = u != "object" ? u : o ? (Array.isArray(o) ? "array" : u) : "null"),
      u == "array" || (u == "object" && typeof o.length == "number")
    );
  }
  function f(o) {
    var u = typeof o;
    return (u == "object" && o != null) || u == "function";
  }
  function d(o, u, h) {
    return o.call.apply(o.bind, arguments);
  }
  function p(o, u, h) {
    if (!o) throw Error();
    if (2 < arguments.length) {
      var g = Array.prototype.slice.call(arguments, 2);
      return function () {
        var C = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(C, g), o.apply(u, C);
      };
    }
    return function () {
      return o.apply(u, arguments);
    };
  }
  function m(o, u, h) {
    return (
      (m =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf("native code") != -1
          ? d
          : p),
      m.apply(null, arguments)
    );
  }
  function T(o, u) {
    var h = Array.prototype.slice.call(arguments, 1);
    return function () {
      var g = h.slice();
      return g.push.apply(g, arguments), o.apply(this, g);
    };
  }
  function V(o, u) {
    function h() {}
    (h.prototype = u.prototype),
      (o.aa = u.prototype),
      (o.prototype = new h()),
      (o.prototype.constructor = o),
      (o.Qb = function (g, C, P) {
        for (
          var z = Array(arguments.length - 2), Vt = 2;
          Vt < arguments.length;
          Vt++
        )
          z[Vt - 2] = arguments[Vt];
        return u.prototype[C].apply(g, z);
      });
  }
  function N(o) {
    const u = o.length;
    if (0 < u) {
      const h = Array(u);
      for (let g = 0; g < u; g++) h[g] = o[g];
      return h;
    }
    return [];
  }
  function k(o, u) {
    for (let h = 1; h < arguments.length; h++) {
      const g = arguments[h];
      if (c(g)) {
        const C = o.length || 0,
          P = g.length || 0;
        o.length = C + P;
        for (let z = 0; z < P; z++) o[C + z] = g[z];
      } else o.push(g);
    }
  }
  class K {
    constructor(u, h) {
      (this.i = u), (this.j = h), (this.h = 0), (this.g = null);
    }
    get() {
      let u;
      return (
        0 < this.h
          ? (this.h--, (u = this.g), (this.g = u.next), (u.next = null))
          : (u = this.i()),
        u
      );
    }
  }
  function U(o) {
    return /^[\s\xa0]*$/.test(o);
  }
  function H() {
    var o = l.navigator;
    return o && (o = o.userAgent) ? o : "";
  }
  function j(o) {
    return j[" "](o), o;
  }
  j[" "] = function () {};
  var lt =
    H().indexOf("Gecko") != -1 &&
    !(H().toLowerCase().indexOf("webkit") != -1 && H().indexOf("Edge") == -1) &&
    !(H().indexOf("Trident") != -1 || H().indexOf("MSIE") != -1) &&
    H().indexOf("Edge") == -1;
  function at(o, u, h) {
    for (const g in o) u.call(h, o[g], g, o);
  }
  function R(o, u) {
    for (const h in o) u.call(void 0, o[h], h, o);
  }
  function v(o) {
    const u = {};
    for (const h in o) u[h] = o[h];
    return u;
  }
  const y =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function A(o, u) {
    let h, g;
    for (let C = 1; C < arguments.length; C++) {
      g = arguments[C];
      for (h in g) o[h] = g[h];
      for (let P = 0; P < y.length; P++)
        (h = y[P]), Object.prototype.hasOwnProperty.call(g, h) && (o[h] = g[h]);
    }
  }
  function b(o) {
    var u = 1;
    o = o.split(":");
    const h = [];
    for (; 0 < u && o.length; ) h.push(o.shift()), u--;
    return o.length && h.push(o.join(":")), h;
  }
  function I(o) {
    l.setTimeout(() => {
      throw o;
    }, 0);
  }
  function E() {
    var o = Re;
    let u = null;
    return (
      o.g &&
        ((u = o.g), (o.g = o.g.next), o.g || (o.h = null), (u.next = null)),
      u
    );
  }
  class St {
    constructor() {
      this.h = this.g = null;
    }
    add(u, h) {
      const g = te.get();
      g.set(u, h), this.h ? (this.h.next = g) : (this.g = g), (this.h = g);
    }
  }
  var te = new K(
    () => new Mt(),
    (o) => o.reset()
  );
  class Mt {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(u, h) {
      (this.h = u), (this.g = h), (this.next = null);
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let gt,
    dt = !1,
    Re = new St(),
    $e = () => {
      const o = l.Promise.resolve(void 0);
      gt = () => {
        o.then(xe);
      };
    };
  var xe = () => {
    for (var o; (o = E()); ) {
      try {
        o.h.call(o.g);
      } catch (h) {
        I(h);
      }
      var u = te;
      u.j(o), 100 > u.h && (u.h++, (o.next = u.g), (u.g = o));
    }
    dt = !1;
  };
  function Lt() {
    (this.s = this.s), (this.C = this.C);
  }
  (Lt.prototype.s = !1),
    (Lt.prototype.ma = function () {
      this.s || ((this.s = !0), this.N());
    }),
    (Lt.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()();
    });
  function Ft(o, u) {
    (this.type = o), (this.g = this.target = u), (this.defaultPrevented = !1);
  }
  Ft.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var pn = (function () {
    if (!l.addEventListener || !Object.defineProperty) return !1;
    var o = !1,
      u = Object.defineProperty({}, "passive", {
        get: function () {
          o = !0;
        },
      });
    try {
      const h = () => {};
      l.addEventListener("test", h, u), l.removeEventListener("test", h, u);
    } catch {}
    return o;
  })();
  function Ge(o, u) {
    if (
      (Ft.call(this, o ? o.type : ""),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ""),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ""),
      (this.i = null),
      o)
    ) {
      var h = (this.type = o.type),
        g =
          o.changedTouches && o.changedTouches.length
            ? o.changedTouches[0]
            : null;
      if (
        ((this.target = o.target || o.srcElement),
        (this.g = u),
        (u = o.relatedTarget))
      ) {
        if (lt) {
          t: {
            try {
              j(u.nodeName);
              var C = !0;
              break t;
            } catch {}
            C = !1;
          }
          C || (u = null);
        }
      } else
        h == "mouseover"
          ? (u = o.fromElement)
          : h == "mouseout" && (u = o.toElement);
      (this.relatedTarget = u),
        g
          ? ((this.clientX = g.clientX !== void 0 ? g.clientX : g.pageX),
            (this.clientY = g.clientY !== void 0 ? g.clientY : g.pageY),
            (this.screenX = g.screenX || 0),
            (this.screenY = g.screenY || 0))
          : ((this.clientX = o.clientX !== void 0 ? o.clientX : o.pageX),
            (this.clientY = o.clientY !== void 0 ? o.clientY : o.pageY),
            (this.screenX = o.screenX || 0),
            (this.screenY = o.screenY || 0)),
        (this.button = o.button),
        (this.key = o.key || ""),
        (this.ctrlKey = o.ctrlKey),
        (this.altKey = o.altKey),
        (this.shiftKey = o.shiftKey),
        (this.metaKey = o.metaKey),
        (this.pointerId = o.pointerId || 0),
        (this.pointerType =
          typeof o.pointerType == "string"
            ? o.pointerType
            : Ie[o.pointerType] || ""),
        (this.state = o.state),
        (this.i = o),
        o.defaultPrevented && Ge.aa.h.call(this);
    }
  }
  V(Ge, Ft);
  var Ie = { 2: "touch", 3: "pen", 4: "mouse" };
  Ge.prototype.h = function () {
    Ge.aa.h.call(this);
    var o = this.i;
    o.preventDefault ? o.preventDefault() : (o.returnValue = !1);
  };
  var x = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    Y = 0;
  function W(o, u, h, g, C) {
    (this.listener = o),
      (this.proxy = null),
      (this.src = u),
      (this.type = h),
      (this.capture = !!g),
      (this.ha = C),
      (this.key = ++Y),
      (this.da = this.fa = !1);
  }
  function Z(o) {
    (o.da = !0),
      (o.listener = null),
      (o.proxy = null),
      (o.src = null),
      (o.ha = null);
  }
  function mt(o) {
    (this.src = o), (this.g = {}), (this.h = 0);
  }
  mt.prototype.add = function (o, u, h, g, C) {
    var P = o.toString();
    (o = this.g[P]), o || ((o = this.g[P] = []), this.h++);
    var z = _(o, u, g, C);
    return (
      -1 < z
        ? ((u = o[z]), h || (u.fa = !1))
        : ((u = new W(u, this.src, P, !!g, C)), (u.fa = h), o.push(u)),
      u
    );
  };
  function Pt(o, u) {
    var h = u.type;
    if (h in o.g) {
      var g = o.g[h],
        C = Array.prototype.indexOf.call(g, u, void 0),
        P;
      (P = 0 <= C) && Array.prototype.splice.call(g, C, 1),
        P && (Z(u), o.g[h].length == 0 && (delete o.g[h], o.h--));
    }
  }
  function _(o, u, h, g) {
    for (var C = 0; C < o.length; ++C) {
      var P = o[C];
      if (!P.da && P.listener == u && P.capture == !!h && P.ha == g) return C;
    }
    return -1;
  }
  var w = "closure_lm_" + ((1e6 * Math.random()) | 0),
    S = {};
  function M(o, u, h, g, C) {
    if (Array.isArray(u)) {
      for (var P = 0; P < u.length; P++) M(o, u[P], h, g, C);
      return null;
    }
    return (
      (h = nt(h)),
      o && o[x] ? o.K(u, h, f(g) ? !!g.capture : !!g, C) : D(o, u, h, !1, g, C)
    );
  }
  function D(o, u, h, g, C, P) {
    if (!u) throw Error("Invalid event type");
    var z = f(C) ? !!C.capture : !!C,
      Vt = rt(o);
    if ((Vt || (o[w] = Vt = new mt(o)), (h = Vt.add(u, h, g, z, P)), h.proxy))
      return h;
    if (
      ((g = L()),
      (h.proxy = g),
      (g.src = o),
      (g.listener = h),
      o.addEventListener)
    )
      pn || (C = z),
        C === void 0 && (C = !1),
        o.addEventListener(u.toString(), g, C);
    else if (o.attachEvent) o.attachEvent($(u.toString()), g);
    else if (o.addListener && o.removeListener) o.addListener(g);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return h;
  }
  function L() {
    function o(h) {
      return u.call(o.src, o.listener, h);
    }
    const u = F;
    return o;
  }
  function G(o, u, h, g, C) {
    if (Array.isArray(u))
      for (var P = 0; P < u.length; P++) G(o, u[P], h, g, C);
    else
      (g = f(g) ? !!g.capture : !!g),
        (h = nt(h)),
        o && o[x]
          ? ((o = o.i),
            (u = String(u).toString()),
            u in o.g &&
              ((P = o.g[u]),
              (h = _(P, h, g, C)),
              -1 < h &&
                (Z(P[h]),
                Array.prototype.splice.call(P, h, 1),
                P.length == 0 && (delete o.g[u], o.h--))))
          : o &&
            (o = rt(o)) &&
            ((u = o.g[u.toString()]),
            (o = -1),
            u && (o = _(u, h, g, C)),
            (h = -1 < o ? u[o] : null) && q(h));
  }
  function q(o) {
    if (typeof o != "number" && o && !o.da) {
      var u = o.src;
      if (u && u[x]) Pt(u.i, o);
      else {
        var h = o.type,
          g = o.proxy;
        u.removeEventListener
          ? u.removeEventListener(h, g, o.capture)
          : u.detachEvent
          ? u.detachEvent($(h), g)
          : u.addListener && u.removeListener && u.removeListener(g),
          (h = rt(u))
            ? (Pt(h, o), h.h == 0 && ((h.src = null), (u[w] = null)))
            : Z(o);
      }
    }
  }
  function $(o) {
    return o in S ? S[o] : (S[o] = "on" + o);
  }
  function F(o, u) {
    if (o.da) o = !0;
    else {
      u = new Ge(u, this);
      var h = o.listener,
        g = o.ha || o.src;
      o.fa && q(o), (o = h.call(g, u));
    }
    return o;
  }
  function rt(o) {
    return (o = o[w]), o instanceof mt ? o : null;
  }
  var Q = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function nt(o) {
    return typeof o == "function"
      ? o
      : (o[Q] ||
          (o[Q] = function (u) {
            return o.handleEvent(u);
          }),
        o[Q]);
  }
  function tt() {
    Lt.call(this), (this.i = new mt(this)), (this.M = this), (this.F = null);
  }
  V(tt, Lt),
    (tt.prototype[x] = !0),
    (tt.prototype.removeEventListener = function (o, u, h, g) {
      G(this, o, u, h, g);
    });
  function st(o, u) {
    var h,
      g = o.F;
    if (g) for (h = []; g; g = g.F) h.push(g);
    if (((o = o.M), (g = u.type || u), typeof u == "string")) u = new Ft(u, o);
    else if (u instanceof Ft) u.target = u.target || o;
    else {
      var C = u;
      (u = new Ft(g, o)), A(u, C);
    }
    if (((C = !0), h))
      for (var P = h.length - 1; 0 <= P; P--) {
        var z = (u.g = h[P]);
        C = At(z, g, !0, u) && C;
      }
    if (
      ((z = u.g = o), (C = At(z, g, !0, u) && C), (C = At(z, g, !1, u) && C), h)
    )
      for (P = 0; P < h.length; P++)
        (z = u.g = h[P]), (C = At(z, g, !1, u) && C);
  }
  (tt.prototype.N = function () {
    if ((tt.aa.N.call(this), this.i)) {
      var o = this.i,
        u;
      for (u in o.g) {
        for (var h = o.g[u], g = 0; g < h.length; g++) Z(h[g]);
        delete o.g[u], o.h--;
      }
    }
    this.F = null;
  }),
    (tt.prototype.K = function (o, u, h, g) {
      return this.i.add(String(o), u, !1, h, g);
    }),
    (tt.prototype.L = function (o, u, h, g) {
      return this.i.add(String(o), u, !0, h, g);
    });
  function At(o, u, h, g) {
    if (((u = o.i.g[String(u)]), !u)) return !0;
    u = u.concat();
    for (var C = !0, P = 0; P < u.length; ++P) {
      var z = u[P];
      if (z && !z.da && z.capture == h) {
        var Vt = z.listener,
          ne = z.ha || z.src;
        z.fa && Pt(o.i, z), (C = Vt.call(ne, g) !== !1 && C);
      }
    }
    return C && !g.defaultPrevented;
  }
  function wt(o, u, h) {
    if (typeof o == "function") h && (o = m(o, h));
    else if (o && typeof o.handleEvent == "function") o = m(o.handleEvent, o);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(u) ? -1 : l.setTimeout(o, u || 0);
  }
  function oe(o) {
    o.g = wt(() => {
      (o.g = null), o.i && ((o.i = !1), oe(o));
    }, o.l);
    const u = o.h;
    (o.h = null), o.m.apply(null, u);
  }
  class Qt extends Lt {
    constructor(u, h) {
      super(),
        (this.m = u),
        (this.l = h),
        (this.h = null),
        (this.i = !1),
        (this.g = null);
    }
    j(u) {
      (this.h = arguments), this.g ? (this.i = !0) : oe(this);
    }
    N() {
      super.N(),
        this.g &&
          (l.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null));
    }
  }
  function ee(o) {
    Lt.call(this), (this.h = o), (this.g = {});
  }
  V(ee, Lt);
  var ae = [];
  function gn(o) {
    at(
      o.g,
      function (u, h) {
        this.g.hasOwnProperty(h) && q(u);
      },
      o
    ),
      (o.g = {});
  }
  (ee.prototype.N = function () {
    ee.aa.N.call(this), gn(this);
  }),
    (ee.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    });
  var lr = l.JSON.stringify,
    _e = l.JSON.parse,
    Ne = class {
      stringify(o) {
        return l.JSON.stringify(o, void 0);
      }
      parse(o) {
        return l.JSON.parse(o, void 0);
      }
    };
  function cr() {}
  cr.prototype.h = null;
  function Ul(o) {
    return o.h || (o.h = o.i());
  }
  function ql() {}
  var Gr = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
  function _o() {
    Ft.call(this, "d");
  }
  V(_o, Ft);
  function yo() {
    Ft.call(this, "c");
  }
  V(yo, Ft);
  var Un = {},
    jl = null;
  function Ks() {
    return (jl = jl || new tt());
  }
  Un.La = "serverreachability";
  function zl(o) {
    Ft.call(this, Un.La, o);
  }
  V(zl, Ft);
  function Wr(o) {
    const u = Ks();
    st(u, new zl(u));
  }
  Un.STAT_EVENT = "statevent";
  function Hl(o, u) {
    Ft.call(this, Un.STAT_EVENT, o), (this.stat = u);
  }
  V(Hl, Ft);
  function ye(o) {
    const u = Ks();
    st(u, new Hl(u, o));
  }
  Un.Ma = "timingevent";
  function Kl(o, u) {
    Ft.call(this, Un.Ma, o), (this.size = u);
  }
  V(Kl, Ft);
  function Qr(o, u) {
    if (typeof o != "function")
      throw Error("Fn must not be null and must be a function");
    return l.setTimeout(function () {
      o();
    }, u);
  }
  function Yr() {
    this.g = !0;
  }
  Yr.prototype.xa = function () {
    this.g = !1;
  };
  function vp(o, u, h, g, C, P) {
    o.info(function () {
      if (o.g)
        if (P)
          for (var z = "", Vt = P.split("&"), ne = 0; ne < Vt.length; ne++) {
            var It = Vt[ne].split("=");
            if (1 < It.length) {
              var le = It[0];
              It = It[1];
              var ce = le.split("_");
              z =
                2 <= ce.length && ce[1] == "type"
                  ? z + (le + "=" + It + "&")
                  : z + (le + "=redacted&");
            }
          }
        else z = null;
      else z = P;
      return (
        "XMLHTTP REQ (" +
        g +
        ") [attempt " +
        C +
        "]: " +
        u +
        `
` +
        h +
        `
` +
        z
      );
    });
  }
  function Ep(o, u, h, g, C, P, z) {
    o.info(function () {
      return (
        "XMLHTTP RESP (" +
        g +
        ") [ attempt " +
        C +
        "]: " +
        u +
        `
` +
        h +
        `
` +
        P +
        " " +
        z
      );
    });
  }
  function ur(o, u, h, g) {
    o.info(function () {
      return "XMLHTTP TEXT (" + u + "): " + wp(o, h) + (g ? " " + g : "");
    });
  }
  function Tp(o, u) {
    o.info(function () {
      return "TIMEOUT: " + u;
    });
  }
  Yr.prototype.info = function () {};
  function wp(o, u) {
    if (!o.g) return u;
    if (!u) return null;
    try {
      var h = JSON.parse(u);
      if (h) {
        for (o = 0; o < h.length; o++)
          if (Array.isArray(h[o])) {
            var g = h[o];
            if (!(2 > g.length)) {
              var C = g[1];
              if (Array.isArray(C) && !(1 > C.length)) {
                var P = C[0];
                if (P != "noop" && P != "stop" && P != "close")
                  for (var z = 1; z < C.length; z++) C[z] = "";
              }
            }
          }
      }
      return lr(h);
    } catch {
      return u;
    }
  }
  var Gs = {
      NO_ERROR: 0,
      gb: 1,
      tb: 2,
      sb: 3,
      nb: 4,
      rb: 5,
      ub: 6,
      Ia: 7,
      TIMEOUT: 8,
      xb: 9,
    },
    Gl = {
      lb: "complete",
      Hb: "success",
      Ja: "error",
      Ia: "abort",
      zb: "ready",
      Ab: "readystatechange",
      TIMEOUT: "timeout",
      vb: "incrementaldata",
      yb: "progress",
      ob: "downloadprogress",
      Pb: "uploadprogress",
    },
    vo;
  function Ws() {}
  V(Ws, cr),
    (Ws.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (Ws.prototype.i = function () {
      return {};
    }),
    (vo = new Ws());
  function mn(o, u, h, g) {
    (this.j = o),
      (this.i = u),
      (this.l = h),
      (this.R = g || 1),
      (this.U = new ee(this)),
      (this.I = 45e3),
      (this.H = null),
      (this.o = !1),
      (this.m = this.A = this.v = this.L = this.F = this.S = this.B = null),
      (this.D = []),
      (this.g = null),
      (this.C = 0),
      (this.s = this.u = null),
      (this.X = -1),
      (this.J = !1),
      (this.O = 0),
      (this.M = null),
      (this.W = this.K = this.T = this.P = !1),
      (this.h = new Wl());
  }
  function Wl() {
    (this.i = null), (this.g = ""), (this.h = !1);
  }
  var Ql = {},
    Eo = {};
  function To(o, u, h) {
    (o.L = 1), (o.v = Js(en(u))), (o.m = h), (o.P = !0), Yl(o, null);
  }
  function Yl(o, u) {
    (o.F = Date.now()), Qs(o), (o.A = en(o.v));
    var h = o.A,
      g = o.R;
    Array.isArray(g) || (g = [String(g)]),
      uc(h.i, "t", g),
      (o.C = 0),
      (h = o.j.J),
      (o.h = new Wl()),
      (o.g = Sc(o.j, h ? u : null, !o.m)),
      0 < o.O && (o.M = new Qt(m(o.Y, o, o.g), o.O)),
      (u = o.U),
      (h = o.g),
      (g = o.ca);
    var C = "readystatechange";
    Array.isArray(C) || (C && (ae[0] = C.toString()), (C = ae));
    for (var P = 0; P < C.length; P++) {
      var z = M(h, C[P], g || u.handleEvent, !1, u.h || u);
      if (!z) break;
      u.g[z.key] = z;
    }
    (u = o.H ? v(o.H) : {}),
      o.m
        ? (o.u || (o.u = "POST"),
          (u["Content-Type"] = "application/x-www-form-urlencoded"),
          o.g.ea(o.A, o.u, o.m, u))
        : ((o.u = "GET"), o.g.ea(o.A, o.u, null, u)),
      Wr(),
      vp(o.i, o.u, o.A, o.l, o.R, o.m);
  }
  (mn.prototype.ca = function (o) {
    o = o.target;
    const u = this.M;
    u && nn(o) == 3 ? u.j() : this.Y(o);
  }),
    (mn.prototype.Y = function (o) {
      try {
        if (o == this.g)
          t: {
            const ce = nn(this.g);
            var u = this.g.Ba();
            const dr = this.g.Z();
            if (
              !(3 > ce) &&
              (ce != 3 || (this.g && (this.h.h || this.g.oa() || _c(this.g))))
            ) {
              this.J ||
                ce != 4 ||
                u == 7 ||
                (u == 8 || 0 >= dr ? Wr(3) : Wr(2)),
                wo(this);
              var h = this.g.Z();
              this.X = h;
              e: if (Xl(this)) {
                var g = _c(this.g);
                o = "";
                var C = g.length,
                  P = nn(this.g) == 4;
                if (!this.h.i) {
                  if (typeof TextDecoder > "u") {
                    qn(this), Xr(this);
                    var z = "";
                    break e;
                  }
                  this.h.i = new l.TextDecoder();
                }
                for (u = 0; u < C; u++)
                  (this.h.h = !0),
                    (o += this.h.i.decode(g[u], {
                      stream: !(P && u == C - 1),
                    }));
                (g.length = 0), (this.h.g += o), (this.C = 0), (z = this.h.g);
              } else z = this.g.oa();
              if (
                ((this.o = h == 200),
                Ep(this.i, this.u, this.A, this.l, this.R, ce, h),
                this.o)
              ) {
                if (this.T && !this.K) {
                  e: {
                    if (this.g) {
                      var Vt,
                        ne = this.g;
                      if (
                        (Vt = ne.g
                          ? ne.g.getResponseHeader("X-HTTP-Initial-Response")
                          : null) &&
                        !U(Vt)
                      ) {
                        var It = Vt;
                        break e;
                      }
                    }
                    It = null;
                  }
                  if ((h = It))
                    ur(
                      this.i,
                      this.l,
                      h,
                      "Initial handshake response via X-HTTP-Initial-Response"
                    ),
                      (this.K = !0),
                      Io(this, h);
                  else {
                    (this.o = !1), (this.s = 3), ye(12), qn(this), Xr(this);
                    break t;
                  }
                }
                if (this.P) {
                  h = !0;
                  let Ue;
                  for (; !this.J && this.C < z.length; )
                    if (((Ue = Ip(this, z)), Ue == Eo)) {
                      ce == 4 && ((this.s = 4), ye(14), (h = !1)),
                        ur(this.i, this.l, null, "[Incomplete Response]");
                      break;
                    } else if (Ue == Ql) {
                      (this.s = 4),
                        ye(15),
                        ur(this.i, this.l, z, "[Invalid Chunk]"),
                        (h = !1);
                      break;
                    } else ur(this.i, this.l, Ue, null), Io(this, Ue);
                  if (
                    (Xl(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    ce != 4 ||
                      z.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), ye(16), (h = !1)),
                    (this.o = this.o && h),
                    !h)
                  )
                    ur(this.i, this.l, z, "[Invalid Chunked Response]"),
                      qn(this),
                      Xr(this);
                  else if (0 < z.length && !this.W) {
                    this.W = !0;
                    var le = this.j;
                    le.g == this &&
                      le.ba &&
                      !le.M &&
                      (le.j.info(
                        "Great, no buffering proxy detected. Bytes received: " +
                          z.length
                      ),
                      Po(le),
                      (le.M = !0),
                      ye(11));
                  }
                } else ur(this.i, this.l, z, null), Io(this, z);
                ce == 4 && qn(this),
                  this.o &&
                    !this.J &&
                    (ce == 4 ? Ac(this.j, this) : ((this.o = !1), Qs(this)));
              } else
                $p(this.g),
                  h == 400 && 0 < z.indexOf("Unknown SID")
                    ? ((this.s = 3), ye(12))
                    : ((this.s = 0), ye(13)),
                  qn(this),
                  Xr(this);
            }
          }
      } catch {
      } finally {
      }
    });
  function Xl(o) {
    return o.g ? o.u == "GET" && o.L != 2 && o.j.Ca : !1;
  }
  function Ip(o, u) {
    var h = o.C,
      g = u.indexOf(
        `
`,
        h
      );
    return g == -1
      ? Eo
      : ((h = Number(u.substring(h, g))),
        isNaN(h)
          ? Ql
          : ((g += 1),
            g + h > u.length
              ? Eo
              : ((u = u.slice(g, g + h)), (o.C = g + h), u)));
  }
  mn.prototype.cancel = function () {
    (this.J = !0), qn(this);
  };
  function Qs(o) {
    (o.S = Date.now() + o.I), Jl(o, o.I);
  }
  function Jl(o, u) {
    if (o.B != null) throw Error("WatchDog timer not null");
    o.B = Qr(m(o.ba, o), u);
  }
  function wo(o) {
    o.B && (l.clearTimeout(o.B), (o.B = null));
  }
  mn.prototype.ba = function () {
    this.B = null;
    const o = Date.now();
    0 <= o - this.S
      ? (Tp(this.i, this.A),
        this.L != 2 && (Wr(), ye(17)),
        qn(this),
        (this.s = 2),
        Xr(this))
      : Jl(this, this.S - o);
  };
  function Xr(o) {
    o.j.G == 0 || o.J || Ac(o.j, o);
  }
  function qn(o) {
    wo(o);
    var u = o.M;
    u && typeof u.ma == "function" && u.ma(),
      (o.M = null),
      gn(o.U),
      o.g && ((u = o.g), (o.g = null), u.abort(), u.ma());
  }
  function Io(o, u) {
    try {
      var h = o.j;
      if (h.G != 0 && (h.g == o || Ao(h.h, o))) {
        if (!o.K && Ao(h.h, o) && h.G == 3) {
          try {
            var g = h.Da.g.parse(u);
          } catch {
            g = null;
          }
          if (Array.isArray(g) && g.length == 3) {
            var C = g;
            if (C[0] == 0) {
              t: if (!h.u) {
                if (h.g)
                  if (h.g.F + 3e3 < o.F) si(h), ni(h);
                  else break t;
                So(h), ye(18);
              }
            } else
              (h.za = C[1]),
                0 < h.za - h.T &&
                  37500 > C[2] &&
                  h.F &&
                  h.v == 0 &&
                  !h.C &&
                  (h.C = Qr(m(h.Za, h), 6e3));
            if (1 >= ec(h.h) && h.ca) {
              try {
                h.ca();
              } catch {}
              h.ca = void 0;
            }
          } else zn(h, 11);
        } else if (((o.K || h.g == o) && si(h), !U(u)))
          for (C = h.Da.g.parse(u), u = 0; u < C.length; u++) {
            let It = C[u];
            if (((h.T = It[0]), (It = It[1]), h.G == 2))
              if (It[0] == "c") {
                (h.K = It[1]), (h.ia = It[2]);
                const le = It[3];
                le != null && ((h.la = le), h.j.info("VER=" + h.la));
                const ce = It[4];
                ce != null && ((h.Aa = ce), h.j.info("SVER=" + h.Aa));
                const dr = It[5];
                dr != null &&
                  typeof dr == "number" &&
                  0 < dr &&
                  ((g = 1.5 * dr),
                  (h.L = g),
                  h.j.info("backChannelRequestTimeoutMs_=" + g)),
                  (g = h);
                const Ue = o.g;
                if (Ue) {
                  const oi = Ue.g
                    ? Ue.g.getResponseHeader("X-Client-Wire-Protocol")
                    : null;
                  if (oi) {
                    var P = g.h;
                    P.g ||
                      (oi.indexOf("spdy") == -1 &&
                        oi.indexOf("quic") == -1 &&
                        oi.indexOf("h2") == -1) ||
                      ((P.j = P.l),
                      (P.g = new Set()),
                      P.h && (bo(P, P.h), (P.h = null)));
                  }
                  if (g.D) {
                    const Vo = Ue.g
                      ? Ue.g.getResponseHeader("X-HTTP-Session-Id")
                      : null;
                    Vo && ((g.ya = Vo), Ot(g.I, g.D, Vo));
                  }
                }
                (h.G = 3),
                  h.l && h.l.ua(),
                  h.ba &&
                    ((h.R = Date.now() - o.F),
                    h.j.info("Handshake RTT: " + h.R + "ms")),
                  (g = h);
                var z = o;
                if (((g.qa = Cc(g, g.J ? g.ia : null, g.W)), z.K)) {
                  nc(g.h, z);
                  var Vt = z,
                    ne = g.L;
                  ne && (Vt.I = ne), Vt.B && (wo(Vt), Qs(Vt)), (g.g = z);
                } else wc(g);
                0 < h.i.length && ri(h);
              } else (It[0] != "stop" && It[0] != "close") || zn(h, 7);
            else
              h.G == 3 &&
                (It[0] == "stop" || It[0] == "close"
                  ? It[0] == "stop"
                    ? zn(h, 7)
                    : Co(h)
                  : It[0] != "noop" && h.l && h.l.ta(It),
                (h.v = 0));
          }
      }
      Wr(4);
    } catch {}
  }
  var Ap = class {
    constructor(o, u) {
      (this.g = o), (this.map = u);
    }
  };
  function Zl(o) {
    (this.l = o || 10),
      l.PerformanceNavigationTiming
        ? ((o = l.performance.getEntriesByType("navigation")),
          (o =
            0 < o.length &&
            (o[0].nextHopProtocol == "hq" || o[0].nextHopProtocol == "h2")))
        : (o = !!(
            l.chrome &&
            l.chrome.loadTimes &&
            l.chrome.loadTimes() &&
            l.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = o ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = []);
  }
  function tc(o) {
    return o.h ? !0 : o.g ? o.g.size >= o.j : !1;
  }
  function ec(o) {
    return o.h ? 1 : o.g ? o.g.size : 0;
  }
  function Ao(o, u) {
    return o.h ? o.h == u : o.g ? o.g.has(u) : !1;
  }
  function bo(o, u) {
    o.g ? o.g.add(u) : (o.h = u);
  }
  function nc(o, u) {
    o.h && o.h == u ? (o.h = null) : o.g && o.g.has(u) && o.g.delete(u);
  }
  Zl.prototype.cancel = function () {
    if (((this.i = rc(this)), this.h)) this.h.cancel(), (this.h = null);
    else if (this.g && this.g.size !== 0) {
      for (const o of this.g.values()) o.cancel();
      this.g.clear();
    }
  };
  function rc(o) {
    if (o.h != null) return o.i.concat(o.h.D);
    if (o.g != null && o.g.size !== 0) {
      let u = o.i;
      for (const h of o.g.values()) u = u.concat(h.D);
      return u;
    }
    return N(o.i);
  }
  function bp(o) {
    if (o.V && typeof o.V == "function") return o.V();
    if (
      (typeof Map < "u" && o instanceof Map) ||
      (typeof Set < "u" && o instanceof Set)
    )
      return Array.from(o.values());
    if (typeof o == "string") return o.split("");
    if (c(o)) {
      for (var u = [], h = o.length, g = 0; g < h; g++) u.push(o[g]);
      return u;
    }
    (u = []), (h = 0);
    for (g in o) u[h++] = o[g];
    return u;
  }
  function Rp(o) {
    if (o.na && typeof o.na == "function") return o.na();
    if (!o.V || typeof o.V != "function") {
      if (typeof Map < "u" && o instanceof Map) return Array.from(o.keys());
      if (!(typeof Set < "u" && o instanceof Set)) {
        if (c(o) || typeof o == "string") {
          var u = [];
          o = o.length;
          for (var h = 0; h < o; h++) u.push(h);
          return u;
        }
        (u = []), (h = 0);
        for (const g in o) u[h++] = g;
        return u;
      }
    }
  }
  function sc(o, u) {
    if (o.forEach && typeof o.forEach == "function") o.forEach(u, void 0);
    else if (c(o) || typeof o == "string")
      Array.prototype.forEach.call(o, u, void 0);
    else
      for (var h = Rp(o), g = bp(o), C = g.length, P = 0; P < C; P++)
        u.call(void 0, g[P], h && h[P], o);
  }
  var ic = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  function Cp(o, u) {
    if (o) {
      o = o.split("&");
      for (var h = 0; h < o.length; h++) {
        var g = o[h].indexOf("="),
          C = null;
        if (0 <= g) {
          var P = o[h].substring(0, g);
          C = o[h].substring(g + 1);
        } else P = o[h];
        u(P, C ? decodeURIComponent(C.replace(/\+/g, " ")) : "");
      }
    }
  }
  function jn(o) {
    if (
      ((this.g = this.o = this.j = ""),
      (this.s = null),
      (this.m = this.l = ""),
      (this.h = !1),
      o instanceof jn)
    ) {
      (this.h = o.h),
        Ys(this, o.j),
        (this.o = o.o),
        (this.g = o.g),
        Xs(this, o.s),
        (this.l = o.l);
      var u = o.i,
        h = new ts();
      (h.i = u.i),
        u.g && ((h.g = new Map(u.g)), (h.h = u.h)),
        oc(this, h),
        (this.m = o.m);
    } else
      o && (u = String(o).match(ic))
        ? ((this.h = !1),
          Ys(this, u[1] || "", !0),
          (this.o = Jr(u[2] || "")),
          (this.g = Jr(u[3] || "", !0)),
          Xs(this, u[4]),
          (this.l = Jr(u[5] || "", !0)),
          oc(this, u[6] || "", !0),
          (this.m = Jr(u[7] || "")))
        : ((this.h = !1), (this.i = new ts(null, this.h)));
  }
  jn.prototype.toString = function () {
    var o = [],
      u = this.j;
    u && o.push(Zr(u, ac, !0), ":");
    var h = this.g;
    return (
      (h || u == "file") &&
        (o.push("//"),
        (u = this.o) && o.push(Zr(u, ac, !0), "@"),
        o.push(
          encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        (h = this.s),
        h != null && o.push(":", String(h))),
      (h = this.l) &&
        (this.g && h.charAt(0) != "/" && o.push("/"),
        o.push(Zr(h, h.charAt(0) == "/" ? Vp : Pp, !0))),
      (h = this.i.toString()) && o.push("?", h),
      (h = this.m) && o.push("#", Zr(h, xp)),
      o.join("")
    );
  };
  function en(o) {
    return new jn(o);
  }
  function Ys(o, u, h) {
    (o.j = h ? Jr(u, !0) : u), o.j && (o.j = o.j.replace(/:$/, ""));
  }
  function Xs(o, u) {
    if (u) {
      if (((u = Number(u)), isNaN(u) || 0 > u))
        throw Error("Bad port number " + u);
      o.s = u;
    } else o.s = null;
  }
  function oc(o, u, h) {
    u instanceof ts
      ? ((o.i = u), Np(o.i, o.h))
      : (h || (u = Zr(u, Dp)), (o.i = new ts(u, o.h)));
  }
  function Ot(o, u, h) {
    o.i.set(u, h);
  }
  function Js(o) {
    return (
      Ot(
        o,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now()
          ).toString(36)
      ),
      o
    );
  }
  function Jr(o, u) {
    return o
      ? u
        ? decodeURI(o.replace(/%25/g, "%2525"))
        : decodeURIComponent(o)
      : "";
  }
  function Zr(o, u, h) {
    return typeof o == "string"
      ? ((o = encodeURI(o).replace(u, Sp)),
        h && (o = o.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        o)
      : null;
  }
  function Sp(o) {
    return (
      (o = o.charCodeAt(0)),
      "%" + ((o >> 4) & 15).toString(16) + (o & 15).toString(16)
    );
  }
  var ac = /[#\/\?@]/g,
    Pp = /[#\?:]/g,
    Vp = /[#\?]/g,
    Dp = /[#\?@]/g,
    xp = /#/g;
  function ts(o, u) {
    (this.h = this.g = null), (this.i = o || null), (this.j = !!u);
  }
  function _n(o) {
    o.g ||
      ((o.g = new Map()),
      (o.h = 0),
      o.i &&
        Cp(o.i, function (u, h) {
          o.add(decodeURIComponent(u.replace(/\+/g, " ")), h);
        }));
  }
  (e = ts.prototype),
    (e.add = function (o, u) {
      _n(this), (this.i = null), (o = hr(this, o));
      var h = this.g.get(o);
      return h || this.g.set(o, (h = [])), h.push(u), (this.h += 1), this;
    });
  function lc(o, u) {
    _n(o),
      (u = hr(o, u)),
      o.g.has(u) && ((o.i = null), (o.h -= o.g.get(u).length), o.g.delete(u));
  }
  function cc(o, u) {
    return _n(o), (u = hr(o, u)), o.g.has(u);
  }
  (e.forEach = function (o, u) {
    _n(this),
      this.g.forEach(function (h, g) {
        h.forEach(function (C) {
          o.call(u, C, g, this);
        }, this);
      }, this);
  }),
    (e.na = function () {
      _n(this);
      const o = Array.from(this.g.values()),
        u = Array.from(this.g.keys()),
        h = [];
      for (let g = 0; g < u.length; g++) {
        const C = o[g];
        for (let P = 0; P < C.length; P++) h.push(u[g]);
      }
      return h;
    }),
    (e.V = function (o) {
      _n(this);
      let u = [];
      if (typeof o == "string")
        cc(this, o) && (u = u.concat(this.g.get(hr(this, o))));
      else {
        o = Array.from(this.g.values());
        for (let h = 0; h < o.length; h++) u = u.concat(o[h]);
      }
      return u;
    }),
    (e.set = function (o, u) {
      return (
        _n(this),
        (this.i = null),
        (o = hr(this, o)),
        cc(this, o) && (this.h -= this.g.get(o).length),
        this.g.set(o, [u]),
        (this.h += 1),
        this
      );
    }),
    (e.get = function (o, u) {
      return o ? ((o = this.V(o)), 0 < o.length ? String(o[0]) : u) : u;
    });
  function uc(o, u, h) {
    lc(o, u),
      0 < h.length &&
        ((o.i = null), o.g.set(hr(o, u), N(h)), (o.h += h.length));
  }
  e.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return "";
    const o = [],
      u = Array.from(this.g.keys());
    for (var h = 0; h < u.length; h++) {
      var g = u[h];
      const P = encodeURIComponent(String(g)),
        z = this.V(g);
      for (g = 0; g < z.length; g++) {
        var C = P;
        z[g] !== "" && (C += "=" + encodeURIComponent(String(z[g]))), o.push(C);
      }
    }
    return (this.i = o.join("&"));
  };
  function hr(o, u) {
    return (u = String(u)), o.j && (u = u.toLowerCase()), u;
  }
  function Np(o, u) {
    u &&
      !o.j &&
      (_n(o),
      (o.i = null),
      o.g.forEach(function (h, g) {
        var C = g.toLowerCase();
        g != C && (lc(this, g), uc(this, C, h));
      }, o)),
      (o.j = u);
  }
  function Op(o, u) {
    const h = new Yr();
    if (l.Image) {
      const g = new Image();
      (g.onload = T(yn, h, "TestLoadImage: loaded", !0, u, g)),
        (g.onerror = T(yn, h, "TestLoadImage: error", !1, u, g)),
        (g.onabort = T(yn, h, "TestLoadImage: abort", !1, u, g)),
        (g.ontimeout = T(yn, h, "TestLoadImage: timeout", !1, u, g)),
        l.setTimeout(function () {
          g.ontimeout && g.ontimeout();
        }, 1e4),
        (g.src = o);
    } else u(!1);
  }
  function kp(o, u) {
    const h = new Yr(),
      g = new AbortController(),
      C = setTimeout(() => {
        g.abort(), yn(h, "TestPingServer: timeout", !1, u);
      }, 1e4);
    fetch(o, { signal: g.signal })
      .then((P) => {
        clearTimeout(C),
          P.ok
            ? yn(h, "TestPingServer: ok", !0, u)
            : yn(h, "TestPingServer: server error", !1, u);
      })
      .catch(() => {
        clearTimeout(C), yn(h, "TestPingServer: error", !1, u);
      });
  }
  function yn(o, u, h, g, C) {
    try {
      C &&
        ((C.onload = null),
        (C.onerror = null),
        (C.onabort = null),
        (C.ontimeout = null)),
        g(h);
    } catch {}
  }
  function Mp() {
    this.g = new Ne();
  }
  function Lp(o, u, h) {
    const g = h || "";
    try {
      sc(o, function (C, P) {
        let z = C;
        f(C) && (z = lr(C)), u.push(g + P + "=" + encodeURIComponent(z));
      });
    } catch (C) {
      throw (u.push(g + "type=" + encodeURIComponent("_badmap")), C);
    }
  }
  function Zs(o) {
    (this.l = o.Ub || null), (this.j = o.eb || !1);
  }
  V(Zs, cr),
    (Zs.prototype.g = function () {
      return new ti(this.l, this.j);
    }),
    (Zs.prototype.i = (function (o) {
      return function () {
        return o;
      };
    })({}));
  function ti(o, u) {
    tt.call(this),
      (this.D = o),
      (this.o = u),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ""),
      (this.onreadystatechange = null),
      (this.u = new Headers()),
      (this.h = null),
      (this.B = "GET"),
      (this.A = ""),
      (this.g = !1),
      (this.v = this.j = this.l = null);
  }
  V(ti, tt),
    (e = ti.prototype),
    (e.open = function (o, u) {
      if (this.readyState != 0)
        throw (this.abort(), Error("Error reopening a connection"));
      (this.B = o), (this.A = u), (this.readyState = 1), ns(this);
    }),
    (e.send = function (o) {
      if (this.readyState != 1)
        throw (this.abort(), Error("need to call open() first. "));
      this.g = !0;
      const u = {
        headers: this.u,
        method: this.B,
        credentials: this.m,
        cache: void 0,
      };
      o && (u.body = o),
        (this.D || l)
          .fetch(new Request(this.A, u))
          .then(this.Sa.bind(this), this.ga.bind(this));
    }),
    (e.abort = function () {
      (this.response = this.responseText = ""),
        (this.u = new Headers()),
        (this.status = 0),
        this.j && this.j.cancel("Request was aborted.").catch(() => {}),
        1 <= this.readyState &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), es(this)),
        (this.readyState = 0);
    }),
    (e.Sa = function (o) {
      if (
        this.g &&
        ((this.l = o),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = o.headers),
          (this.readyState = 2),
          ns(this)),
        this.g && ((this.readyState = 3), ns(this), this.g))
      )
        if (this.responseType === "arraybuffer")
          o.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
        else if (typeof l.ReadableStream < "u" && "body" in o) {
          if (((this.j = o.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.'
              );
            this.response = [];
          } else
            (this.response = this.responseText = ""),
              (this.v = new TextDecoder());
          hc(this);
        } else o.text().then(this.Ra.bind(this), this.ga.bind(this));
    });
  function hc(o) {
    o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o));
  }
  (e.Pa = function (o) {
    if (this.g) {
      if (this.o && o.value) this.response.push(o.value);
      else if (!this.o) {
        var u = o.value ? o.value : new Uint8Array(0);
        (u = this.v.decode(u, { stream: !o.done })) &&
          (this.response = this.responseText += u);
      }
      o.done ? es(this) : ns(this), this.readyState == 3 && hc(this);
    }
  }),
    (e.Ra = function (o) {
      this.g && ((this.response = this.responseText = o), es(this));
    }),
    (e.Qa = function (o) {
      this.g && ((this.response = o), es(this));
    }),
    (e.ga = function () {
      this.g && es(this);
    });
  function es(o) {
    (o.readyState = 4), (o.l = null), (o.j = null), (o.v = null), ns(o);
  }
  (e.setRequestHeader = function (o, u) {
    this.u.append(o, u);
  }),
    (e.getResponseHeader = function (o) {
      return (this.h && this.h.get(o.toLowerCase())) || "";
    }),
    (e.getAllResponseHeaders = function () {
      if (!this.h) return "";
      const o = [],
        u = this.h.entries();
      for (var h = u.next(); !h.done; )
        (h = h.value), o.push(h[0] + ": " + h[1]), (h = u.next());
      return o.join(`\r
`);
    });
  function ns(o) {
    o.onreadystatechange && o.onreadystatechange.call(o);
  }
  Object.defineProperty(ti.prototype, "withCredentials", {
    get: function () {
      return this.m === "include";
    },
    set: function (o) {
      this.m = o ? "include" : "same-origin";
    },
  });
  function fc(o) {
    let u = "";
    return (
      at(o, function (h, g) {
        (u += g),
          (u += ":"),
          (u += h),
          (u += `\r
`);
      }),
      u
    );
  }
  function Ro(o, u, h) {
    t: {
      for (g in h) {
        var g = !1;
        break t;
      }
      g = !0;
    }
    g ||
      ((h = fc(h)),
      typeof o == "string"
        ? h != null && encodeURIComponent(String(h))
        : Ot(o, u, h));
  }
  function Ut(o) {
    tt.call(this),
      (this.headers = new Map()),
      (this.o = o || null),
      (this.h = !1),
      (this.v = this.g = null),
      (this.D = ""),
      (this.m = 0),
      (this.l = ""),
      (this.j = this.B = this.u = this.A = !1),
      (this.I = null),
      (this.H = ""),
      (this.J = !1);
  }
  V(Ut, tt);
  var Fp = /^https?$/i,
    Bp = ["POST", "PUT"];
  (e = Ut.prototype),
    (e.Ha = function (o) {
      this.J = o;
    }),
    (e.ea = function (o, u, h, g) {
      if (this.g)
        throw Error(
          "[goog.net.XhrIo] Object is active with another request=" +
            this.D +
            "; newUri=" +
            o
        );
      (u = u ? u.toUpperCase() : "GET"),
        (this.D = o),
        (this.l = ""),
        (this.m = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.o ? this.o.g() : vo.g()),
        (this.v = this.o ? Ul(this.o) : Ul(vo)),
        (this.g.onreadystatechange = m(this.Ea, this));
      try {
        (this.B = !0), this.g.open(u, String(o), !0), (this.B = !1);
      } catch (P) {
        dc(this, P);
        return;
      }
      if (((o = h || ""), (h = new Map(this.headers)), g))
        if (Object.getPrototypeOf(g) === Object.prototype)
          for (var C in g) h.set(C, g[C]);
        else if (typeof g.keys == "function" && typeof g.get == "function")
          for (const P of g.keys()) h.set(P, g.get(P));
        else throw Error("Unknown input type for opt_headers: " + String(g));
      (g = Array.from(h.keys()).find((P) => P.toLowerCase() == "content-type")),
        (C = l.FormData && o instanceof l.FormData),
        !(0 <= Array.prototype.indexOf.call(Bp, u, void 0)) ||
          g ||
          C ||
          h.set(
            "Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8"
          );
      for (const [P, z] of h) this.g.setRequestHeader(P, z);
      this.H && (this.g.responseType = this.H),
        "withCredentials" in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J);
      try {
        mc(this), (this.u = !0), this.g.send(o), (this.u = !1);
      } catch (P) {
        dc(this, P);
      }
    });
  function dc(o, u) {
    (o.h = !1),
      o.g && ((o.j = !0), o.g.abort(), (o.j = !1)),
      (o.l = u),
      (o.m = 5),
      pc(o),
      ei(o);
  }
  function pc(o) {
    o.A || ((o.A = !0), st(o, "complete"), st(o, "error"));
  }
  (e.abort = function (o) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = o || 7),
      st(this, "complete"),
      st(this, "abort"),
      ei(this));
  }),
    (e.N = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        ei(this, !0)),
        Ut.aa.N.call(this);
    }),
    (e.Ea = function () {
      this.s || (this.B || this.u || this.j ? gc(this) : this.bb());
    }),
    (e.bb = function () {
      gc(this);
    });
  function gc(o) {
    if (o.h && typeof a < "u" && (!o.v[1] || nn(o) != 4 || o.Z() != 2)) {
      if (o.u && nn(o) == 4) wt(o.Ea, 0, o);
      else if ((st(o, "readystatechange"), nn(o) == 4)) {
        o.h = !1;
        try {
          const z = o.Z();
          t: switch (z) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var u = !0;
              break t;
            default:
              u = !1;
          }
          var h;
          if (!(h = u)) {
            var g;
            if ((g = z === 0)) {
              var C = String(o.D).match(ic)[1] || null;
              !C &&
                l.self &&
                l.self.location &&
                (C = l.self.location.protocol.slice(0, -1)),
                (g = !Fp.test(C ? C.toLowerCase() : ""));
            }
            h = g;
          }
          if (h) st(o, "complete"), st(o, "success");
          else {
            o.m = 6;
            try {
              var P = 2 < nn(o) ? o.g.statusText : "";
            } catch {
              P = "";
            }
            (o.l = P + " [" + o.Z() + "]"), pc(o);
          }
        } finally {
          ei(o);
        }
      }
    }
  }
  function ei(o, u) {
    if (o.g) {
      mc(o);
      const h = o.g,
        g = o.v[0] ? () => {} : null;
      (o.g = null), (o.v = null), u || st(o, "ready");
      try {
        h.onreadystatechange = g;
      } catch {}
    }
  }
  function mc(o) {
    o.I && (l.clearTimeout(o.I), (o.I = null));
  }
  e.isActive = function () {
    return !!this.g;
  };
  function nn(o) {
    return o.g ? o.g.readyState : 0;
  }
  (e.Z = function () {
    try {
      return 2 < nn(this) ? this.g.status : -1;
    } catch {
      return -1;
    }
  }),
    (e.oa = function () {
      try {
        return this.g ? this.g.responseText : "";
      } catch {
        return "";
      }
    }),
    (e.Oa = function (o) {
      if (this.g) {
        var u = this.g.responseText;
        return o && u.indexOf(o) == 0 && (u = u.substring(o.length)), _e(u);
      }
    });
  function _c(o) {
    try {
      if (!o.g) return null;
      if ("response" in o.g) return o.g.response;
      switch (o.H) {
        case "":
        case "text":
          return o.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in o.g)
            return o.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function $p(o) {
    const u = {};
    o = ((o.g && 2 <= nn(o) && o.g.getAllResponseHeaders()) || "").split(`\r
`);
    for (let g = 0; g < o.length; g++) {
      if (U(o[g])) continue;
      var h = b(o[g]);
      const C = h[0];
      if (((h = h[1]), typeof h != "string")) continue;
      h = h.trim();
      const P = u[C] || [];
      (u[C] = P), P.push(h);
    }
    R(u, function (g) {
      return g.join(", ");
    });
  }
  (e.Ba = function () {
    return this.m;
  }),
    (e.Ka = function () {
      return typeof this.l == "string" ? this.l : String(this.l);
    });
  function rs(o, u, h) {
    return (h && h.internalChannelParams && h.internalChannelParams[o]) || u;
  }
  function yc(o) {
    (this.Aa = 0),
      (this.i = []),
      (this.j = new Yr()),
      (this.ia =
        this.qa =
        this.I =
        this.W =
        this.g =
        this.ya =
        this.D =
        this.H =
        this.m =
        this.S =
        this.o =
          null),
      (this.Ya = this.U = 0),
      (this.Va = rs("failFast", !1, o)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = rs("baseRetryDelayMs", 5e3, o)),
      (this.cb = rs("retryDelaySeedMs", 1e4, o)),
      (this.Wa = rs("forwardChannelMaxRetries", 2, o)),
      (this.wa = rs("forwardChannelRequestTimeoutMs", 2e4, o)),
      (this.pa = (o && o.xmlHttpFactory) || void 0),
      (this.Xa = (o && o.Tb) || void 0),
      (this.Ca = (o && o.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (o && o.supportsCrossDomainXhr) || !1),
      (this.K = ""),
      (this.h = new Zl(o && o.concurrentRequestLimit)),
      (this.Da = new Mp()),
      (this.P = (o && o.fastHandshake) || !1),
      (this.O = (o && o.encodeInitMessageHeaders) || !1),
      this.P && this.O && (this.O = !1),
      (this.Ua = (o && o.Rb) || !1),
      o && o.xa && this.j.xa(),
      o && o.forceLongPolling && (this.X = !1),
      (this.ba = (!this.P && this.X && o && o.detectBufferingProxy) || !1),
      (this.ja = void 0),
      o &&
        o.longPollingTimeout &&
        0 < o.longPollingTimeout &&
        (this.ja = o.longPollingTimeout),
      (this.ca = void 0),
      (this.R = 0),
      (this.M = !1),
      (this.ka = this.A = null);
  }
  (e = yc.prototype),
    (e.la = 8),
    (e.G = 1),
    (e.connect = function (o, u, h, g) {
      ye(0),
        (this.W = o),
        (this.H = u || {}),
        h && g !== void 0 && ((this.H.OSID = h), (this.H.OAID = g)),
        (this.F = this.X),
        (this.I = Cc(this, null, this.W)),
        ri(this);
    });
  function Co(o) {
    if ((vc(o), o.G == 3)) {
      var u = o.U++,
        h = en(o.I);
      if (
        (Ot(h, "SID", o.K),
        Ot(h, "RID", u),
        Ot(h, "TYPE", "terminate"),
        ss(o, h),
        (u = new mn(o, o.j, u)),
        (u.L = 2),
        (u.v = Js(en(h))),
        (h = !1),
        l.navigator && l.navigator.sendBeacon)
      )
        try {
          h = l.navigator.sendBeacon(u.v.toString(), "");
        } catch {}
      !h && l.Image && ((new Image().src = u.v), (h = !0)),
        h || ((u.g = Sc(u.j, null)), u.g.ea(u.v)),
        (u.F = Date.now()),
        Qs(u);
    }
    Rc(o);
  }
  function ni(o) {
    o.g && (Po(o), o.g.cancel(), (o.g = null));
  }
  function vc(o) {
    ni(o),
      o.u && (l.clearTimeout(o.u), (o.u = null)),
      si(o),
      o.h.cancel(),
      o.s && (typeof o.s == "number" && l.clearTimeout(o.s), (o.s = null));
  }
  function ri(o) {
    if (!tc(o.h) && !o.s) {
      o.s = !0;
      var u = o.Ga;
      gt || $e(), dt || (gt(), (dt = !0)), Re.add(u, o), (o.B = 0);
    }
  }
  function Up(o, u) {
    return ec(o.h) >= o.h.j - (o.s ? 1 : 0)
      ? !1
      : o.s
      ? ((o.i = u.D.concat(o.i)), !0)
      : o.G == 1 || o.G == 2 || o.B >= (o.Va ? 0 : o.Wa)
      ? !1
      : ((o.s = Qr(m(o.Ga, o, u), bc(o, o.B))), o.B++, !0);
  }
  e.Ga = function (o) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!o) {
          (this.U = Math.floor(1e5 * Math.random())), (o = this.U++);
          const C = new mn(this, this.j, o);
          let P = this.o;
          if (
            (this.S && (P ? ((P = v(P)), A(P, this.S)) : (P = this.S)),
            this.m !== null || this.O || ((C.H = P), (P = null)),
            this.P)
          )
            t: {
              for (var u = 0, h = 0; h < this.i.length; h++) {
                e: {
                  var g = this.i[h];
                  if (
                    "__data__" in g.map &&
                    ((g = g.map.__data__), typeof g == "string")
                  ) {
                    g = g.length;
                    break e;
                  }
                  g = void 0;
                }
                if (g === void 0) break;
                if (((u += g), 4096 < u)) {
                  u = h;
                  break t;
                }
                if (u === 4096 || h === this.i.length - 1) {
                  u = h + 1;
                  break t;
                }
              }
              u = 1e3;
            }
          else u = 1e3;
          (u = Tc(this, C, u)),
            (h = en(this.I)),
            Ot(h, "RID", o),
            Ot(h, "CVER", 22),
            this.D && Ot(h, "X-HTTP-Session-Id", this.D),
            ss(this, h),
            P &&
              (this.O
                ? (u = "headers=" + encodeURIComponent(String(fc(P))) + "&" + u)
                : this.m && Ro(h, this.m, P)),
            bo(this.h, C),
            this.Ua && Ot(h, "TYPE", "init"),
            this.P
              ? (Ot(h, "$req", u),
                Ot(h, "SID", "null"),
                (C.T = !0),
                To(C, h, null))
              : To(C, h, u),
            (this.G = 2);
        }
      } else
        this.G == 3 &&
          (o ? Ec(this, o) : this.i.length == 0 || tc(this.h) || Ec(this));
  };
  function Ec(o, u) {
    var h;
    u ? (h = u.l) : (h = o.U++);
    const g = en(o.I);
    Ot(g, "SID", o.K),
      Ot(g, "RID", h),
      Ot(g, "AID", o.T),
      ss(o, g),
      o.m && o.o && Ro(g, o.m, o.o),
      (h = new mn(o, o.j, h, o.B + 1)),
      o.m === null && (h.H = o.o),
      u && (o.i = u.D.concat(o.i)),
      (u = Tc(o, h, 1e3)),
      (h.I = Math.round(0.5 * o.wa) + Math.round(0.5 * o.wa * Math.random())),
      bo(o.h, h),
      To(h, g, u);
  }
  function ss(o, u) {
    o.H &&
      at(o.H, function (h, g) {
        Ot(u, g, h);
      }),
      o.l &&
        sc({}, function (h, g) {
          Ot(u, g, h);
        });
  }
  function Tc(o, u, h) {
    h = Math.min(o.i.length, h);
    var g = o.l ? m(o.l.Na, o.l, o) : null;
    t: {
      var C = o.i;
      let P = -1;
      for (;;) {
        const z = ["count=" + h];
        P == -1
          ? 0 < h
            ? ((P = C[0].g), z.push("ofs=" + P))
            : (P = 0)
          : z.push("ofs=" + P);
        let Vt = !0;
        for (let ne = 0; ne < h; ne++) {
          let It = C[ne].g;
          const le = C[ne].map;
          if (((It -= P), 0 > It)) (P = Math.max(0, C[ne].g - 100)), (Vt = !1);
          else
            try {
              Lp(le, z, "req" + It + "_");
            } catch {
              g && g(le);
            }
        }
        if (Vt) {
          g = z.join("&");
          break t;
        }
      }
    }
    return (o = o.i.splice(0, h)), (u.D = o), g;
  }
  function wc(o) {
    if (!o.g && !o.u) {
      o.Y = 1;
      var u = o.Fa;
      gt || $e(), dt || (gt(), (dt = !0)), Re.add(u, o), (o.v = 0);
    }
  }
  function So(o) {
    return o.g || o.u || 3 <= o.v
      ? !1
      : (o.Y++, (o.u = Qr(m(o.Fa, o), bc(o, o.v))), o.v++, !0);
  }
  (e.Fa = function () {
    if (
      ((this.u = null),
      Ic(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var o = 2 * this.R;
      this.j.info("BP detection timer enabled: " + o),
        (this.A = Qr(m(this.ab, this), o));
    }
  }),
    (e.ab = function () {
      this.A &&
        ((this.A = null),
        this.j.info("BP detection timeout reached."),
        this.j.info("Buffering proxy detected and switch to long-polling!"),
        (this.F = !1),
        (this.M = !0),
        ye(10),
        ni(this),
        Ic(this));
    });
  function Po(o) {
    o.A != null && (l.clearTimeout(o.A), (o.A = null));
  }
  function Ic(o) {
    (o.g = new mn(o, o.j, "rpc", o.Y)),
      o.m === null && (o.g.H = o.o),
      (o.g.O = 0);
    var u = en(o.qa);
    Ot(u, "RID", "rpc"),
      Ot(u, "SID", o.K),
      Ot(u, "AID", o.T),
      Ot(u, "CI", o.F ? "0" : "1"),
      !o.F && o.ja && Ot(u, "TO", o.ja),
      Ot(u, "TYPE", "xmlhttp"),
      ss(o, u),
      o.m && o.o && Ro(u, o.m, o.o),
      o.L && (o.g.I = o.L);
    var h = o.g;
    (o = o.ia),
      (h.L = 1),
      (h.v = Js(en(u))),
      (h.m = null),
      (h.P = !0),
      Yl(h, o);
  }
  e.Za = function () {
    this.C != null && ((this.C = null), ni(this), So(this), ye(19));
  };
  function si(o) {
    o.C != null && (l.clearTimeout(o.C), (o.C = null));
  }
  function Ac(o, u) {
    var h = null;
    if (o.g == u) {
      si(o), Po(o), (o.g = null);
      var g = 2;
    } else if (Ao(o.h, u)) (h = u.D), nc(o.h, u), (g = 1);
    else return;
    if (o.G != 0) {
      if (u.o)
        if (g == 1) {
          (h = u.m ? u.m.length : 0), (u = Date.now() - u.F);
          var C = o.B;
          (g = Ks()), st(g, new Kl(g, h)), ri(o);
        } else wc(o);
      else if (
        ((C = u.s),
        C == 3 ||
          (C == 0 && 0 < u.X) ||
          !((g == 1 && Up(o, u)) || (g == 2 && So(o))))
      )
        switch ((h && 0 < h.length && ((u = o.h), (u.i = u.i.concat(h))), C)) {
          case 1:
            zn(o, 5);
            break;
          case 4:
            zn(o, 10);
            break;
          case 3:
            zn(o, 6);
            break;
          default:
            zn(o, 2);
        }
    }
  }
  function bc(o, u) {
    let h = o.Ta + Math.floor(Math.random() * o.cb);
    return o.isActive() || (h *= 2), h * u;
  }
  function zn(o, u) {
    if ((o.j.info("Error code " + u), u == 2)) {
      var h = m(o.fb, o),
        g = o.Xa;
      const C = !g;
      (g = new jn(g || "//www.google.com/images/cleardot.gif")),
        (l.location && l.location.protocol == "http") || Ys(g, "https"),
        Js(g),
        C ? Op(g.toString(), h) : kp(g.toString(), h);
    } else ye(2);
    (o.G = 0), o.l && o.l.sa(u), Rc(o), vc(o);
  }
  e.fb = function (o) {
    o
      ? (this.j.info("Successfully pinged google.com"), ye(2))
      : (this.j.info("Failed to ping google.com"), ye(1));
  };
  function Rc(o) {
    if (((o.G = 0), (o.ka = []), o.l)) {
      const u = rc(o.h);
      (u.length != 0 || o.i.length != 0) &&
        (k(o.ka, u),
        k(o.ka, o.i),
        (o.h.i.length = 0),
        N(o.i),
        (o.i.length = 0)),
        o.l.ra();
    }
  }
  function Cc(o, u, h) {
    var g = h instanceof jn ? en(h) : new jn(h);
    if (g.g != "") u && (g.g = u + "." + g.g), Xs(g, g.s);
    else {
      var C = l.location;
      (g = C.protocol),
        (u = u ? u + "." + C.hostname : C.hostname),
        (C = +C.port);
      var P = new jn(null);
      g && Ys(P, g), u && (P.g = u), C && Xs(P, C), h && (P.l = h), (g = P);
    }
    return (
      (h = o.D),
      (u = o.ya),
      h && u && Ot(g, h, u),
      Ot(g, "VER", o.la),
      ss(o, g),
      g
    );
  }
  function Sc(o, u, h) {
    if (u && !o.J)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return (
      (u = o.Ca && !o.pa ? new Ut(new Zs({ eb: h })) : new Ut(o.pa)),
      u.Ha(o.J),
      u
    );
  }
  e.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  function Pc() {}
  (e = Pc.prototype),
    (e.ua = function () {}),
    (e.ta = function () {}),
    (e.sa = function () {}),
    (e.ra = function () {}),
    (e.isActive = function () {
      return !0;
    }),
    (e.Na = function () {});
  function ii() {}
  ii.prototype.g = function (o, u) {
    return new Ce(o, u);
  };
  function Ce(o, u) {
    tt.call(this),
      (this.g = new yc(u)),
      (this.l = o),
      (this.h = (u && u.messageUrlParams) || null),
      (o = (u && u.messageHeaders) || null),
      u &&
        u.clientProtocolHeaderRequired &&
        (o
          ? (o["X-Client-Protocol"] = "webchannel")
          : (o = { "X-Client-Protocol": "webchannel" })),
      (this.g.o = o),
      (o = (u && u.initMessageHeaders) || null),
      u &&
        u.messageContentType &&
        (o
          ? (o["X-WebChannel-Content-Type"] = u.messageContentType)
          : (o = { "X-WebChannel-Content-Type": u.messageContentType })),
      u &&
        u.va &&
        (o
          ? (o["X-WebChannel-Client-Profile"] = u.va)
          : (o = { "X-WebChannel-Client-Profile": u.va })),
      (this.g.S = o),
      (o = u && u.Sb) && !U(o) && (this.g.m = o),
      (this.v = (u && u.supportsCrossDomainXhr) || !1),
      (this.u = (u && u.sendRawJson) || !1),
      (u = u && u.httpSessionIdParam) &&
        !U(u) &&
        ((this.g.D = u),
        (o = this.h),
        o !== null && u in o && ((o = this.h), u in o && delete o[u])),
      (this.j = new fr(this));
  }
  V(Ce, tt),
    (Ce.prototype.m = function () {
      (this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0);
    }),
    (Ce.prototype.close = function () {
      Co(this.g);
    }),
    (Ce.prototype.o = function (o) {
      var u = this.g;
      if (typeof o == "string") {
        var h = {};
        (h.__data__ = o), (o = h);
      } else this.u && ((h = {}), (h.__data__ = lr(o)), (o = h));
      u.i.push(new Ap(u.Ya++, o)), u.G == 3 && ri(u);
    }),
    (Ce.prototype.N = function () {
      (this.g.l = null),
        delete this.j,
        Co(this.g),
        delete this.g,
        Ce.aa.N.call(this);
    });
  function Vc(o) {
    _o.call(this),
      o.__headers__ &&
        ((this.headers = o.__headers__),
        (this.statusCode = o.__status__),
        delete o.__headers__,
        delete o.__status__);
    var u = o.__sm__;
    if (u) {
      t: {
        for (const h in u) {
          o = h;
          break t;
        }
        o = void 0;
      }
      (this.i = o) &&
        ((o = this.i), (u = u !== null && o in u ? u[o] : void 0)),
        (this.data = u);
    } else this.data = o;
  }
  V(Vc, _o);
  function Dc() {
    yo.call(this), (this.status = 1);
  }
  V(Dc, yo);
  function fr(o) {
    this.g = o;
  }
  V(fr, Pc),
    (fr.prototype.ua = function () {
      st(this.g, "a");
    }),
    (fr.prototype.ta = function (o) {
      st(this.g, new Vc(o));
    }),
    (fr.prototype.sa = function (o) {
      st(this.g, new Dc());
    }),
    (fr.prototype.ra = function () {
      st(this.g, "b");
    }),
    (ii.prototype.createWebChannel = ii.prototype.g),
    (Ce.prototype.send = Ce.prototype.o),
    (Ce.prototype.open = Ce.prototype.m),
    (Ce.prototype.close = Ce.prototype.close),
    (gd = function () {
      return new ii();
    }),
    (pd = function () {
      return Ks();
    }),
    (dd = Un),
    (ba = {
      mb: 0,
      pb: 1,
      qb: 2,
      Jb: 3,
      Ob: 4,
      Lb: 5,
      Mb: 6,
      Kb: 7,
      Ib: 8,
      Nb: 9,
      PROXY: 10,
      NOPROXY: 11,
      Gb: 12,
      Cb: 13,
      Db: 14,
      Bb: 15,
      Eb: 16,
      Fb: 17,
      ib: 18,
      hb: 19,
      jb: 20,
    }),
    (Gs.NO_ERROR = 0),
    (Gs.TIMEOUT = 8),
    (Gs.HTTP_ERROR = 6),
    (Ti = Gs),
    (Gl.COMPLETE = "complete"),
    (fd = Gl),
    (ql.EventType = Gr),
    (Gr.OPEN = "a"),
    (Gr.CLOSE = "b"),
    (Gr.ERROR = "c"),
    (Gr.MESSAGE = "d"),
    (tt.prototype.listen = tt.prototype.K),
    (cs = ql),
    (Ut.prototype.listenOnce = Ut.prototype.L),
    (Ut.prototype.getLastError = Ut.prototype.Ka),
    (Ut.prototype.getLastErrorCode = Ut.prototype.Ba),
    (Ut.prototype.getStatus = Ut.prototype.Z),
    (Ut.prototype.getResponseJson = Ut.prototype.Oa),
    (Ut.prototype.getResponseText = Ut.prototype.oa),
    (Ut.prototype.send = Ut.prototype.ea),
    (Ut.prototype.setWithCredentials = Ut.prototype.Ha),
    (hd = Ut);
}).apply(
  typeof hi < "u"
    ? hi
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : {}
);
const $u = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class he {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
}
(he.UNAUTHENTICATED = new he(null)),
  (he.GOOGLE_CREDENTIALS = new he("google-credentials-uid")),
  (he.FIRST_PARTY = new he("first-party-uid")),
  (he.MOCK_USER = new he("mock-user"));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let qr = "11.0.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ir = new sd("@firebase/firestore");
function yr() {
  return ir.logLevel;
}
function X(e, ...t) {
  if (ir.logLevel <= yt.DEBUG) {
    const n = t.map(ul);
    ir.debug(`Firestore (${qr}): ${e}`, ...n);
  }
}
function un(e, ...t) {
  if (ir.logLevel <= yt.ERROR) {
    const n = t.map(ul);
    ir.error(`Firestore (${qr}): ${e}`, ...n);
  }
}
function Nr(e, ...t) {
  if (ir.logLevel <= yt.WARN) {
    const n = t.map(ul);
    ir.warn(`Firestore (${qr}): ${e}`, ...n);
  }
}
function ul(e) {
  if (typeof e == "string") return e;
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (n) {
      return JSON.stringify(n);
    })(e);
  } catch {
    return e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ft(e = "Unexpected state") {
  const t = `FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: ` + e;
  throw (un(t), new Error(t));
}
function $t(e, t) {
  e || ft();
}
function Et(e, t) {
  return e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const B = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class et extends Ur {
  constructor(t, n) {
    super(t, n),
      (this.code = t),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class er {
  constructor() {
    this.promise = new Promise((t, n) => {
      (this.resolve = t), (this.reject = n);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class md {
  constructor(t, n) {
    (this.user = n),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${t}`);
  }
}
class h0 {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(t, n) {
    t.enqueueRetryable(() => n(he.UNAUTHENTICATED));
  }
  shutdown() {}
}
class f0 {
  constructor(t) {
    (this.token = t), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(t, n) {
    (this.changeListener = n), t.enqueueRetryable(() => n(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class d0 {
  constructor(t) {
    (this.t = t),
      (this.currentUser = he.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(t, n) {
    $t(this.o === void 0);
    let r = this.i;
    const s = (c) => (this.i !== r ? ((r = this.i), n(c)) : Promise.resolve());
    let i = new er();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        i.resolve(),
        (i = new er()),
        t.enqueueRetryable(() => s(this.currentUser));
    };
    const a = () => {
        const c = i;
        t.enqueueRetryable(async () => {
          await c.promise, await s(this.currentUser);
        });
      },
      l = (c) => {
        X("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = c),
          this.o && (this.auth.addAuthTokenListener(this.o), a());
      };
    this.t.onInit((c) => l(c)),
      setTimeout(() => {
        if (!this.auth) {
          const c = this.t.getImmediate({ optional: !0 });
          c
            ? l(c)
            : (X("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
              i.resolve(),
              (i = new er()));
        }
      }, 0),
      a();
  }
  getToken() {
    const t = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== t
                ? (X(
                    "FirebaseAuthCredentialsProvider",
                    "getToken aborted due to token change."
                  ),
                  this.getToken())
                : r
                ? ($t(typeof r.accessToken == "string"),
                  new md(r.accessToken, this.currentUser))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
      (this.o = void 0);
  }
  u() {
    const t = this.auth && this.auth.getUid();
    return $t(t === null || typeof t == "string"), new he(t);
  }
}
class p0 {
  constructor(t, n, r) {
    (this.l = t),
      (this.h = n),
      (this.P = r),
      (this.type = "FirstParty"),
      (this.user = he.FIRST_PARTY),
      (this.T = new Map());
  }
  I() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.T.set("X-Goog-AuthUser", this.l);
    const t = this.I();
    return (
      t && this.T.set("Authorization", t),
      this.h && this.T.set("X-Goog-Iam-Authorization-Token", this.h),
      this.T
    );
  }
}
class g0 {
  constructor(t, n, r) {
    (this.l = t), (this.h = n), (this.P = r);
  }
  getToken() {
    return Promise.resolve(new p0(this.l, this.h, this.P));
  }
  start(t, n) {
    t.enqueueRetryable(() => n(he.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class m0 {
  constructor(t) {
    (this.value = t),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class _0 {
  constructor(t) {
    (this.A = t),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null);
  }
  start(t, n) {
    $t(this.o === void 0);
    const r = (i) => {
      i.error != null &&
        X(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`
        );
      const a = i.token !== this.R;
      return (
        (this.R = i.token),
        X(
          "FirebaseAppCheckTokenProvider",
          `Received ${a ? "new" : "existing"} token.`
        ),
        a ? n(i.token) : Promise.resolve()
      );
    };
    this.o = (i) => {
      t.enqueueRetryable(() => r(i));
    };
    const s = (i) => {
      X("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = i),
        this.o && this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((i) => s(i)),
      setTimeout(() => {
        if (!this.appCheck) {
          const i = this.A.getImmediate({ optional: !0 });
          i
            ? s(i)
            : X("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0);
  }
  getToken() {
    const t = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(t)
            .then((n) =>
              n
                ? ($t(typeof n.token == "string"),
                  (this.R = n.token),
                  new m0(n.token))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
      (this.o = void 0);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function y0(e) {
  const t = typeof self < "u" && (self.crypto || self.msCrypto),
    n = new Uint8Array(e);
  if (t && typeof t.getRandomValues == "function") t.getRandomValues(n);
  else for (let r = 0; r < e; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v0 {
  static newId() {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = Math.floor(256 / t.length) * t.length;
    let r = "";
    for (; r.length < 20; ) {
      const s = y0(40);
      for (let i = 0; i < s.length; ++i)
        r.length < 20 && s[i] < n && (r += t.charAt(s[i] % t.length));
    }
    return r;
  }
}
function vt(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Or(e, t, n) {
  return e.length === t.length && e.every((r, s) => n(r, t[s]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jt {
  static now() {
    return Jt.fromMillis(Date.now());
  }
  static fromDate(t) {
    return Jt.fromMillis(t.getTime());
  }
  static fromMillis(t) {
    const n = Math.floor(t / 1e3),
      r = Math.floor(1e6 * (t - 1e3 * n));
    return new Jt(n, r);
  }
  constructor(t, n) {
    if (((this.seconds = t), (this.nanoseconds = n), n < 0))
      throw new et(
        B.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (n >= 1e9)
      throw new et(
        B.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (t < -62135596800)
      throw new et(B.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    if (t >= 253402300800)
      throw new et(B.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t) {
    return this.seconds === t.seconds
      ? vt(this.nanoseconds, t.nanoseconds)
      : vt(this.seconds, t.seconds);
  }
  isEqual(t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    const t = this.seconds - -62135596800;
    return (
      String(t).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ct {
  static fromTimestamp(t) {
    return new ct(t);
  }
  static min() {
    return new ct(new Jt(0, 0));
  }
  static max() {
    return new ct(new Jt(253402300799, 999999999));
  }
  constructor(t) {
    this.timestamp = t;
  }
  compareTo(t) {
    return this.timestamp._compareTo(t.timestamp);
  }
  isEqual(t) {
    return this.timestamp.isEqual(t.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ms {
  constructor(t, n, r) {
    n === void 0 ? (n = 0) : n > t.length && ft(),
      r === void 0 ? (r = t.length - n) : r > t.length - n && ft(),
      (this.segments = t),
      (this.offset = n),
      (this.len = r);
  }
  get length() {
    return this.len;
  }
  isEqual(t) {
    return Ms.comparator(this, t) === 0;
  }
  child(t) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      t instanceof Ms
        ? t.forEach((r) => {
            n.push(r);
          })
        : n.push(t),
      this.construct(n)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(t) {
    return (
      (t = t === void 0 ? 1 : t),
      this.construct(this.segments, this.offset + t, this.length - t)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.segments[this.offset + t];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(t) {
    if (t.length < this.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== t.get(n)) return !1;
    return !0;
  }
  isImmediateParentOf(t) {
    if (this.length + 1 !== t.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== t.get(n)) return !1;
    return !0;
  }
  forEach(t) {
    for (let n = this.offset, r = this.limit(); n < r; n++) t(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t, n) {
    const r = Math.min(t.length, n.length);
    for (let s = 0; s < r; s++) {
      const i = t.get(s),
        a = n.get(s);
      if (i < a) return -1;
      if (i > a) return 1;
    }
    return t.length < n.length ? -1 : t.length > n.length ? 1 : 0;
  }
}
class Bt extends Ms {
  construct(t, n, r) {
    return new Bt(t, n, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  static fromString(...t) {
    const n = [];
    for (const r of t) {
      if (r.indexOf("//") >= 0)
        throw new et(
          B.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        );
      n.push(...r.split("/").filter((s) => s.length > 0));
    }
    return new Bt(n);
  }
  static emptyPath() {
    return new Bt([]);
  }
}
const E0 = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class ge extends Ms {
  construct(t, n, r) {
    return new ge(t, n, r);
  }
  static isValidIdentifier(t) {
    return E0.test(t);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (t) => (
          (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          ge.isValidIdentifier(t) || (t = "`" + t + "`"),
          t
        )
      )
      .join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  static keyField() {
    return new ge(["__name__"]);
  }
  static fromServerFormat(t) {
    const n = [];
    let r = "",
      s = 0;
    const i = () => {
      if (r.length === 0)
        throw new et(
          B.INVALID_ARGUMENT,
          `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      n.push(r), (r = "");
    };
    let a = !1;
    for (; s < t.length; ) {
      const l = t[s];
      if (l === "\\") {
        if (s + 1 === t.length)
          throw new et(
            B.INVALID_ARGUMENT,
            "Path has trailing escape character: " + t
          );
        const c = t[s + 1];
        if (c !== "\\" && c !== "." && c !== "`")
          throw new et(
            B.INVALID_ARGUMENT,
            "Path has invalid escape sequence: " + t
          );
        (r += c), (s += 2);
      } else
        l === "`"
          ? ((a = !a), s++)
          : l !== "." || a
          ? ((r += l), s++)
          : (i(), s++);
    }
    if ((i(), a))
      throw new et(B.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
    return new ge(n);
  }
  static emptyPath() {
    return new ge([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class it {
  constructor(t) {
    this.path = t;
  }
  static fromPath(t) {
    return new it(Bt.fromString(t));
  }
  static fromName(t) {
    return new it(Bt.fromString(t).popFirst(5));
  }
  static empty() {
    return new it(Bt.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t) {
    return t !== null && Bt.comparator(this.path, t.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t, n) {
    return Bt.comparator(t.path, n.path);
  }
  static isDocumentKey(t) {
    return t.length % 2 == 0;
  }
  static fromSegments(t) {
    return new it(new Bt(t.slice()));
  }
}
function T0(e, t) {
  const n = e.toTimestamp().seconds,
    r = e.toTimestamp().nanoseconds + 1,
    s = ct.fromTimestamp(r === 1e9 ? new Jt(n + 1, 0) : new Jt(n, r));
  return new Nn(s, it.empty(), t);
}
function w0(e) {
  return new Nn(e.readTime, e.key, -1);
}
class Nn {
  constructor(t, n, r) {
    (this.readTime = t), (this.documentKey = n), (this.largestBatchId = r);
  }
  static min() {
    return new Nn(ct.min(), it.empty(), -1);
  }
  static max() {
    return new Nn(ct.max(), it.empty(), -1);
  }
}
function I0(e, t) {
  let n = e.readTime.compareTo(t.readTime);
  return n !== 0
    ? n
    : ((n = it.comparator(e.documentKey, t.documentKey)),
      n !== 0 ? n : vt(e.largestBatchId, t.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const A0 =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class b0 {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(t) {
    this.onCommittedListeners.push(t);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((t) => t());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function so(e) {
  if (e.code !== B.FAILED_PRECONDITION || e.message !== A0) throw e;
  X("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O {
  constructor(t) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      t(
        (n) => {
          (this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n);
        },
        (n) => {
          (this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n);
        }
      );
  }
  catch(t) {
    return this.next(void 0, t);
  }
  next(t, n) {
    return (
      this.callbackAttached && ft(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(t, this.result)
        : new O((r, s) => {
            (this.nextCallback = (i) => {
              this.wrapSuccess(t, i).next(r, s);
            }),
              (this.catchCallback = (i) => {
                this.wrapFailure(n, i).next(r, s);
              });
          })
    );
  }
  toPromise() {
    return new Promise((t, n) => {
      this.next(t, n);
    });
  }
  wrapUserFunction(t) {
    try {
      const n = t();
      return n instanceof O ? n : O.resolve(n);
    } catch (n) {
      return O.reject(n);
    }
  }
  wrapSuccess(t, n) {
    return t ? this.wrapUserFunction(() => t(n)) : O.resolve(n);
  }
  wrapFailure(t, n) {
    return t ? this.wrapUserFunction(() => t(n)) : O.reject(n);
  }
  static resolve(t) {
    return new O((n, r) => {
      n(t);
    });
  }
  static reject(t) {
    return new O((n, r) => {
      r(t);
    });
  }
  static waitFor(t) {
    return new O((n, r) => {
      let s = 0,
        i = 0,
        a = !1;
      t.forEach((l) => {
        ++s,
          l.next(
            () => {
              ++i, a && i === s && n();
            },
            (c) => r(c)
          );
      }),
        (a = !0),
        i === s && n();
    });
  }
  static or(t) {
    let n = O.resolve(!1);
    for (const r of t) n = n.next((s) => (s ? O.resolve(s) : r()));
    return n;
  }
  static forEach(t, n) {
    const r = [];
    return (
      t.forEach((s, i) => {
        r.push(n.call(this, s, i));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(t, n) {
    return new O((r, s) => {
      const i = t.length,
        a = new Array(i);
      let l = 0;
      for (let c = 0; c < i; c++) {
        const f = c;
        n(t[f]).next(
          (d) => {
            (a[f] = d), ++l, l === i && r(a);
          },
          (d) => s(d)
        );
      }
    });
  }
  static doWhile(t, n) {
    return new O((r, s) => {
      const i = () => {
        t() === !0
          ? n().next(() => {
              i();
            }, s)
          : r();
      };
      i();
    });
  }
}
function R0(e) {
  const t = e.match(/Android ([\d.]+)/i),
    n = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(n);
}
function jr(e) {
  return e.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class io {
  constructor(t, n) {
    (this.previousValue = t),
      n &&
        ((n.sequenceNumberHandler = (r) => this.ie(r)),
        (this.se = (r) => n.writeSequenceNumber(r)));
  }
  ie(t) {
    return (
      (this.previousValue = Math.max(t, this.previousValue)), this.previousValue
    );
  }
  next() {
    const t = ++this.previousValue;
    return this.se && this.se(t), t;
  }
}
io.oe = -1;
function oo(e) {
  return e == null;
}
function Mi(e) {
  return e === 0 && 1 / e == -1 / 0;
}
function C0(e) {
  return (
    typeof e == "number" &&
    Number.isInteger(e) &&
    !Mi(e) &&
    e <= Number.MAX_SAFE_INTEGER &&
    e >= Number.MIN_SAFE_INTEGER
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function S0(e) {
  let t = "";
  for (let n = 0; n < e.length; n++)
    t.length > 0 && (t = Uu(t)), (t = P0(e.get(n), t));
  return Uu(t);
}
function P0(e, t) {
  let n = t;
  const r = e.length;
  for (let s = 0; s < r; s++) {
    const i = e.charAt(s);
    switch (i) {
      case "\0":
        n += "";
        break;
      case "":
        n += "";
        break;
      default:
        n += i;
    }
  }
  return n;
}
function Uu(e) {
  return e + "";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qu(e) {
  let t = 0;
  for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
  return t;
}
function zr(e, t) {
  for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]);
}
function _d(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zt {
  constructor(t, n) {
    (this.comparator = t), (this.root = n || re.EMPTY);
  }
  insert(t, n) {
    return new zt(
      this.comparator,
      this.root
        .insert(t, n, this.comparator)
        .copy(null, null, re.BLACK, null, null)
    );
  }
  remove(t) {
    return new zt(
      this.comparator,
      this.root
        .remove(t, this.comparator)
        .copy(null, null, re.BLACK, null, null)
    );
  }
  get(t) {
    let n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(t, n.key);
      if (r === 0) return n.value;
      r < 0 ? (n = n.left) : r > 0 && (n = n.right);
    }
    return null;
  }
  indexOf(t) {
    let n = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const s = this.comparator(t, r.key);
      if (s === 0) return n + r.left.size;
      s < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(t) {
    return this.root.inorderTraversal(t);
  }
  forEach(t) {
    this.inorderTraversal((n, r) => (t(n, r), !1));
  }
  toString() {
    const t = [];
    return (
      this.inorderTraversal((n, r) => (t.push(`${n}:${r}`), !1)),
      `{${t.join(", ")}}`
    );
  }
  reverseTraversal(t) {
    return this.root.reverseTraversal(t);
  }
  getIterator() {
    return new fi(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(t) {
    return new fi(this.root, t, this.comparator, !1);
  }
  getReverseIterator() {
    return new fi(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(t) {
    return new fi(this.root, t, this.comparator, !0);
  }
}
class fi {
  constructor(t, n, r, s) {
    (this.isReverse = s), (this.nodeStack = []);
    let i = 1;
    for (; !t.isEmpty(); )
      if (((i = n ? r(t.key, n) : 1), n && s && (i *= -1), i < 0))
        t = this.isReverse ? t.left : t.right;
      else {
        if (i === 0) {
          this.nodeStack.push(t);
          break;
        }
        this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left);
      }
  }
  getNext() {
    let t = this.nodeStack.pop();
    const n = { key: t.key, value: t.value };
    if (this.isReverse)
      for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.right);
    else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.left);
    return n;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const t = this.nodeStack[this.nodeStack.length - 1];
    return { key: t.key, value: t.value };
  }
}
class re {
  constructor(t, n, r, s, i) {
    (this.key = t),
      (this.value = n),
      (this.color = r ?? re.RED),
      (this.left = s ?? re.EMPTY),
      (this.right = i ?? re.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(t, n, r, s, i) {
    return new re(
      t ?? this.key,
      n ?? this.value,
      r ?? this.color,
      s ?? this.left,
      i ?? this.right
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(t) {
    return (
      this.left.inorderTraversal(t) ||
      t(this.key, this.value) ||
      this.right.inorderTraversal(t)
    );
  }
  reverseTraversal(t) {
    return (
      this.right.reverseTraversal(t) ||
      t(this.key, this.value) ||
      this.left.reverseTraversal(t)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(t, n, r) {
    let s = this;
    const i = r(t, s.key);
    return (
      (s =
        i < 0
          ? s.copy(null, null, null, s.left.insert(t, n, r), null)
          : i === 0
          ? s.copy(null, n, null, null, null)
          : s.copy(null, null, null, null, s.right.insert(t, n, r))),
      s.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return re.EMPTY;
    let t = this;
    return (
      t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
      (t = t.copy(null, null, null, t.left.removeMin(), null)),
      t.fixUp()
    );
  }
  remove(t, n) {
    let r,
      s = this;
    if (n(t, s.key) < 0)
      s.left.isEmpty() ||
        s.left.isRed() ||
        s.left.left.isRed() ||
        (s = s.moveRedLeft()),
        (s = s.copy(null, null, null, s.left.remove(t, n), null));
    else {
      if (
        (s.left.isRed() && (s = s.rotateRight()),
        s.right.isEmpty() ||
          s.right.isRed() ||
          s.right.left.isRed() ||
          (s = s.moveRedRight()),
        n(t, s.key) === 0)
      ) {
        if (s.right.isEmpty()) return re.EMPTY;
        (r = s.right.min()),
          (s = s.copy(r.key, r.value, null, null, s.right.removeMin()));
      }
      s = s.copy(null, null, null, null, s.right.remove(t, n));
    }
    return s.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let t = this;
    return (
      t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
      t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
      t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
      t
    );
  }
  moveRedLeft() {
    let t = this.colorFlip();
    return (
      t.right.left.isRed() &&
        ((t = t.copy(null, null, null, null, t.right.rotateRight())),
        (t = t.rotateLeft()),
        (t = t.colorFlip())),
      t
    );
  }
  moveRedRight() {
    let t = this.colorFlip();
    return (
      t.left.left.isRed() && ((t = t.rotateRight()), (t = t.colorFlip())), t
    );
  }
  rotateLeft() {
    const t = this.copy(null, null, re.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t, null);
  }
  rotateRight() {
    const t = this.copy(null, null, re.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t);
  }
  colorFlip() {
    const t = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t, n);
  }
  checkMaxDepth() {
    const t = this.check();
    return Math.pow(2, t) <= this.size + 1;
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw ft();
    const t = this.left.check();
    if (t !== this.right.check()) throw ft();
    return t + (this.isRed() ? 0 : 1);
  }
}
(re.EMPTY = null), (re.RED = !0), (re.BLACK = !1);
re.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw ft();
  }
  get value() {
    throw ft();
  }
  get color() {
    throw ft();
  }
  get left() {
    throw ft();
  }
  get right() {
    throw ft();
  }
  copy(t, n, r, s, i) {
    return this;
  }
  insert(t, n, r) {
    return new re(t, n);
  }
  remove(t, n) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wt {
  constructor(t) {
    (this.comparator = t), (this.data = new zt(this.comparator));
  }
  has(t) {
    return this.data.get(t) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t) {
    return this.data.indexOf(t);
  }
  forEach(t) {
    this.data.inorderTraversal((n, r) => (t(n), !1));
  }
  forEachInRange(t, n) {
    const r = this.data.getIteratorFrom(t[0]);
    for (; r.hasNext(); ) {
      const s = r.getNext();
      if (this.comparator(s.key, t[1]) >= 0) return;
      n(s.key);
    }
  }
  forEachWhile(t, n) {
    let r;
    for (
      r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
      r.hasNext();

    )
      if (!t(r.getNext().key)) return;
  }
  firstAfterOrEqual(t) {
    const n = this.data.getIteratorFrom(t);
    return n.hasNext() ? n.getNext().key : null;
  }
  getIterator() {
    return new ju(this.data.getIterator());
  }
  getIteratorFrom(t) {
    return new ju(this.data.getIteratorFrom(t));
  }
  add(t) {
    return this.copy(this.data.remove(t).insert(t, !0));
  }
  delete(t) {
    return this.has(t) ? this.copy(this.data.remove(t)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t) {
    let n = this;
    return (
      n.size < t.size && ((n = t), (t = this)),
      t.forEach((r) => {
        n = n.add(r);
      }),
      n
    );
  }
  isEqual(t) {
    if (!(t instanceof Wt) || this.size !== t.size) return !1;
    const n = this.data.getIterator(),
      r = t.data.getIterator();
    for (; n.hasNext(); ) {
      const s = n.getNext().key,
        i = r.getNext().key;
      if (this.comparator(s, i) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const t = [];
    return (
      this.forEach((n) => {
        t.push(n);
      }),
      t
    );
  }
  toString() {
    const t = [];
    return this.forEach((n) => t.push(n)), "SortedSet(" + t.toString() + ")";
  }
  copy(t) {
    const n = new Wt(this.comparator);
    return (n.data = t), n;
  }
}
class ju {
  constructor(t) {
    this.iter = t;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cn {
  constructor(t) {
    (this.fields = t), t.sort(ge.comparator);
  }
  static empty() {
    return new Cn([]);
  }
  unionWith(t) {
    let n = new Wt(ge.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of t) n = n.add(r);
    return new Cn(n.toArray());
  }
  covers(t) {
    for (const n of this.fields) if (n.isPrefixOf(t)) return !0;
    return !1;
  }
  isEqual(t) {
    return Or(this.fields, t.fields, (n, r) => n.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yd extends Error {
  constructor() {
    super(...arguments), (this.name = "Base64DecodeError");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ie {
  constructor(t) {
    this.binaryString = t;
  }
  static fromBase64String(t) {
    const n = (function (s) {
      try {
        return atob(s);
      } catch (i) {
        throw typeof DOMException < "u" && i instanceof DOMException
          ? new yd("Invalid base64 string: " + i)
          : i;
      }
    })(t);
    return new ie(n);
  }
  static fromUint8Array(t) {
    const n = (function (s) {
      let i = "";
      for (let a = 0; a < s.length; ++a) i += String.fromCharCode(s[a]);
      return i;
    })(t);
    return new ie(n);
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () =>
        t < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(t++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (function (n) {
      return btoa(n);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function (n) {
      const r = new Uint8Array(n.length);
      for (let s = 0; s < n.length; s++) r[s] = n.charCodeAt(s);
      return r;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t) {
    return vt(this.binaryString, t.binaryString);
  }
  isEqual(t) {
    return this.binaryString === t.binaryString;
  }
}
ie.EMPTY_BYTE_STRING = new ie("");
const V0 = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function On(e) {
  if (($t(!!e), typeof e == "string")) {
    let t = 0;
    const n = V0.exec(e);
    if (($t(!!n), n[1])) {
      let s = n[1];
      (s = (s + "000000000").substr(0, 9)), (t = Number(s));
    }
    const r = new Date(e);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: t };
  }
  return { seconds: qt(e.seconds), nanos: qt(e.nanos) };
}
function qt(e) {
  return typeof e == "number" ? e : typeof e == "string" ? Number(e) : 0;
}
function kn(e) {
  return typeof e == "string" ? ie.fromBase64String(e) : ie.fromUint8Array(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hl(e) {
  var t, n;
  return (
    ((n = (
      ((t = e == null ? void 0 : e.mapValue) === null || t === void 0
        ? void 0
        : t.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === "server_timestamp"
  );
}
function ao(e) {
  const t = e.mapValue.fields.__previous_value__;
  return hl(t) ? ao(t) : t;
}
function Ls(e) {
  const t = On(e.mapValue.fields.__local_write_time__.timestampValue);
  return new Jt(t.seconds, t.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class D0 {
  constructor(t, n, r, s, i, a, l, c, f) {
    (this.databaseId = t),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = s),
      (this.ssl = i),
      (this.forceLongPolling = a),
      (this.autoDetectLongPolling = l),
      (this.longPollingOptions = c),
      (this.useFetchStreams = f);
  }
}
class Fs {
  constructor(t, n) {
    (this.projectId = t), (this.database = n || "(default)");
  }
  static empty() {
    return new Fs("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(t) {
    return (
      t instanceof Fs &&
      t.projectId === this.projectId &&
      t.database === this.database
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const di = {
  mapValue: { fields: { __type__: { stringValue: "__max__" } } },
};
function Mn(e) {
  return "nullValue" in e
    ? 0
    : "booleanValue" in e
    ? 1
    : "integerValue" in e || "doubleValue" in e
    ? 2
    : "timestampValue" in e
    ? 3
    : "stringValue" in e
    ? 5
    : "bytesValue" in e
    ? 6
    : "referenceValue" in e
    ? 7
    : "geoPointValue" in e
    ? 8
    : "arrayValue" in e
    ? 9
    : "mapValue" in e
    ? hl(e)
      ? 4
      : N0(e)
      ? 9007199254740991
      : x0(e)
      ? 10
      : 11
    : ft();
}
function tn(e, t) {
  if (e === t) return !0;
  const n = Mn(e);
  if (n !== Mn(t)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return e.booleanValue === t.booleanValue;
    case 4:
      return Ls(e).isEqual(Ls(t));
    case 3:
      return (function (s, i) {
        if (
          typeof s.timestampValue == "string" &&
          typeof i.timestampValue == "string" &&
          s.timestampValue.length === i.timestampValue.length
        )
          return s.timestampValue === i.timestampValue;
        const a = On(s.timestampValue),
          l = On(i.timestampValue);
        return a.seconds === l.seconds && a.nanos === l.nanos;
      })(e, t);
    case 5:
      return e.stringValue === t.stringValue;
    case 6:
      return (function (s, i) {
        return kn(s.bytesValue).isEqual(kn(i.bytesValue));
      })(e, t);
    case 7:
      return e.referenceValue === t.referenceValue;
    case 8:
      return (function (s, i) {
        return (
          qt(s.geoPointValue.latitude) === qt(i.geoPointValue.latitude) &&
          qt(s.geoPointValue.longitude) === qt(i.geoPointValue.longitude)
        );
      })(e, t);
    case 2:
      return (function (s, i) {
        if ("integerValue" in s && "integerValue" in i)
          return qt(s.integerValue) === qt(i.integerValue);
        if ("doubleValue" in s && "doubleValue" in i) {
          const a = qt(s.doubleValue),
            l = qt(i.doubleValue);
          return a === l ? Mi(a) === Mi(l) : isNaN(a) && isNaN(l);
        }
        return !1;
      })(e, t);
    case 9:
      return Or(e.arrayValue.values || [], t.arrayValue.values || [], tn);
    case 10:
    case 11:
      return (function (s, i) {
        const a = s.mapValue.fields || {},
          l = i.mapValue.fields || {};
        if (qu(a) !== qu(l)) return !1;
        for (const c in a)
          if (a.hasOwnProperty(c) && (l[c] === void 0 || !tn(a[c], l[c])))
            return !1;
        return !0;
      })(e, t);
    default:
      return ft();
  }
}
function Bs(e, t) {
  return (e.values || []).find((n) => tn(n, t)) !== void 0;
}
function kr(e, t) {
  if (e === t) return 0;
  const n = Mn(e),
    r = Mn(t);
  if (n !== r) return vt(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return vt(e.booleanValue, t.booleanValue);
    case 2:
      return (function (i, a) {
        const l = qt(i.integerValue || i.doubleValue),
          c = qt(a.integerValue || a.doubleValue);
        return l < c
          ? -1
          : l > c
          ? 1
          : l === c
          ? 0
          : isNaN(l)
          ? isNaN(c)
            ? 0
            : -1
          : 1;
      })(e, t);
    case 3:
      return zu(e.timestampValue, t.timestampValue);
    case 4:
      return zu(Ls(e), Ls(t));
    case 5:
      return vt(e.stringValue, t.stringValue);
    case 6:
      return (function (i, a) {
        const l = kn(i),
          c = kn(a);
        return l.compareTo(c);
      })(e.bytesValue, t.bytesValue);
    case 7:
      return (function (i, a) {
        const l = i.split("/"),
          c = a.split("/");
        for (let f = 0; f < l.length && f < c.length; f++) {
          const d = vt(l[f], c[f]);
          if (d !== 0) return d;
        }
        return vt(l.length, c.length);
      })(e.referenceValue, t.referenceValue);
    case 8:
      return (function (i, a) {
        const l = vt(qt(i.latitude), qt(a.latitude));
        return l !== 0 ? l : vt(qt(i.longitude), qt(a.longitude));
      })(e.geoPointValue, t.geoPointValue);
    case 9:
      return Hu(e.arrayValue, t.arrayValue);
    case 10:
      return (function (i, a) {
        var l, c, f, d;
        const p = i.fields || {},
          m = a.fields || {},
          T = (l = p.value) === null || l === void 0 ? void 0 : l.arrayValue,
          V = (c = m.value) === null || c === void 0 ? void 0 : c.arrayValue,
          N = vt(
            ((f = T == null ? void 0 : T.values) === null || f === void 0
              ? void 0
              : f.length) || 0,
            ((d = V == null ? void 0 : V.values) === null || d === void 0
              ? void 0
              : d.length) || 0
          );
        return N !== 0 ? N : Hu(T, V);
      })(e.mapValue, t.mapValue);
    case 11:
      return (function (i, a) {
        if (i === di.mapValue && a === di.mapValue) return 0;
        if (i === di.mapValue) return 1;
        if (a === di.mapValue) return -1;
        const l = i.fields || {},
          c = Object.keys(l),
          f = a.fields || {},
          d = Object.keys(f);
        c.sort(), d.sort();
        for (let p = 0; p < c.length && p < d.length; ++p) {
          const m = vt(c[p], d[p]);
          if (m !== 0) return m;
          const T = kr(l[c[p]], f[d[p]]);
          if (T !== 0) return T;
        }
        return vt(c.length, d.length);
      })(e.mapValue, t.mapValue);
    default:
      throw ft();
  }
}
function zu(e, t) {
  if (typeof e == "string" && typeof t == "string" && e.length === t.length)
    return vt(e, t);
  const n = On(e),
    r = On(t),
    s = vt(n.seconds, r.seconds);
  return s !== 0 ? s : vt(n.nanos, r.nanos);
}
function Hu(e, t) {
  const n = e.values || [],
    r = t.values || [];
  for (let s = 0; s < n.length && s < r.length; ++s) {
    const i = kr(n[s], r[s]);
    if (i) return i;
  }
  return vt(n.length, r.length);
}
function Mr(e) {
  return Ra(e);
}
function Ra(e) {
  return "nullValue" in e
    ? "null"
    : "booleanValue" in e
    ? "" + e.booleanValue
    : "integerValue" in e
    ? "" + e.integerValue
    : "doubleValue" in e
    ? "" + e.doubleValue
    : "timestampValue" in e
    ? (function (n) {
        const r = On(n);
        return `time(${r.seconds},${r.nanos})`;
      })(e.timestampValue)
    : "stringValue" in e
    ? e.stringValue
    : "bytesValue" in e
    ? (function (n) {
        return kn(n).toBase64();
      })(e.bytesValue)
    : "referenceValue" in e
    ? (function (n) {
        return it.fromName(n).toString();
      })(e.referenceValue)
    : "geoPointValue" in e
    ? (function (n) {
        return `geo(${n.latitude},${n.longitude})`;
      })(e.geoPointValue)
    : "arrayValue" in e
    ? (function (n) {
        let r = "[",
          s = !0;
        for (const i of n.values || []) s ? (s = !1) : (r += ","), (r += Ra(i));
        return r + "]";
      })(e.arrayValue)
    : "mapValue" in e
    ? (function (n) {
        const r = Object.keys(n.fields || {}).sort();
        let s = "{",
          i = !0;
        for (const a of r)
          i ? (i = !1) : (s += ","), (s += `${a}:${Ra(n.fields[a])}`);
        return s + "}";
      })(e.mapValue)
    : ft();
}
function wi(e) {
  switch (Mn(e)) {
    case 0:
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
    case 8:
      return 16;
    case 4:
      const t = ao(e);
      return t ? 16 + wi(t) : 16;
    case 5:
      return 2 * e.stringValue.length;
    case 6:
      return kn(e.bytesValue).approximateByteSize();
    case 7:
      return e.referenceValue.length;
    case 9:
      return (function (r) {
        return (r.values || []).reduce((s, i) => s + wi(i), 0);
      })(e.arrayValue);
    case 10:
    case 11:
      return (function (r) {
        let s = 0;
        return (
          zr(r.fields, (i, a) => {
            s += i.length + wi(a);
          }),
          s
        );
      })(e.mapValue);
    default:
      throw ft();
  }
}
function Ku(e, t) {
  return {
    referenceValue: `projects/${e.projectId}/databases/${
      e.database
    }/documents/${t.path.canonicalString()}`,
  };
}
function Ca(e) {
  return !!e && "integerValue" in e;
}
function fl(e) {
  return !!e && "arrayValue" in e;
}
function Gu(e) {
  return !!e && "nullValue" in e;
}
function Wu(e) {
  return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue));
}
function Xo(e) {
  return !!e && "mapValue" in e;
}
function x0(e) {
  var t, n;
  return (
    ((n = (
      ((t = e == null ? void 0 : e.mapValue) === null || t === void 0
        ? void 0
        : t.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === "__vector__"
  );
}
function Ts(e) {
  if (e.geoPointValue)
    return { geoPointValue: Object.assign({}, e.geoPointValue) };
  if (e.timestampValue && typeof e.timestampValue == "object")
    return { timestampValue: Object.assign({}, e.timestampValue) };
  if (e.mapValue) {
    const t = { mapValue: { fields: {} } };
    return zr(e.mapValue.fields, (n, r) => (t.mapValue.fields[n] = Ts(r))), t;
  }
  if (e.arrayValue) {
    const t = { arrayValue: { values: [] } };
    for (let n = 0; n < (e.arrayValue.values || []).length; ++n)
      t.arrayValue.values[n] = Ts(e.arrayValue.values[n]);
    return t;
  }
  return Object.assign({}, e);
}
function N0(e) {
  return (
    (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xe {
  constructor(t) {
    this.value = t;
  }
  static empty() {
    return new Xe({ mapValue: {} });
  }
  field(t) {
    if (t.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < t.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[t.get(r)]), !Xo(n))) return null;
      return (n = (n.mapValue.fields || {})[t.lastSegment()]), n || null;
    }
  }
  set(t, n) {
    this.getFieldsMap(t.popLast())[t.lastSegment()] = Ts(n);
  }
  setAll(t) {
    let n = ge.emptyPath(),
      r = {},
      s = [];
    t.forEach((a, l) => {
      if (!n.isImmediateParentOf(l)) {
        const c = this.getFieldsMap(n);
        this.applyChanges(c, r, s), (r = {}), (s = []), (n = l.popLast());
      }
      a ? (r[l.lastSegment()] = Ts(a)) : s.push(l.lastSegment());
    });
    const i = this.getFieldsMap(n);
    this.applyChanges(i, r, s);
  }
  delete(t) {
    const n = this.field(t.popLast());
    Xo(n) && n.mapValue.fields && delete n.mapValue.fields[t.lastSegment()];
  }
  isEqual(t) {
    return tn(this.value, t.value);
  }
  getFieldsMap(t) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < t.length; ++r) {
      let s = n.mapValue.fields[t.get(r)];
      (Xo(s) && s.mapValue.fields) ||
        ((s = { mapValue: { fields: {} } }), (n.mapValue.fields[t.get(r)] = s)),
        (n = s);
    }
    return n.mapValue.fields;
  }
  applyChanges(t, n, r) {
    zr(n, (s, i) => (t[s] = i));
    for (const s of r) delete t[s];
  }
  clone() {
    return new Xe(Ts(this.value));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pe {
  constructor(t, n, r, s, i, a, l) {
    (this.key = t),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = s),
      (this.createTime = i),
      (this.data = a),
      (this.documentState = l);
  }
  static newInvalidDocument(t) {
    return new pe(t, 0, ct.min(), ct.min(), ct.min(), Xe.empty(), 0);
  }
  static newFoundDocument(t, n, r, s) {
    return new pe(t, 1, n, ct.min(), r, s, 0);
  }
  static newNoDocument(t, n) {
    return new pe(t, 2, n, ct.min(), ct.min(), Xe.empty(), 0);
  }
  static newUnknownDocument(t, n) {
    return new pe(t, 3, n, ct.min(), ct.min(), Xe.empty(), 2);
  }
  convertToFoundDocument(t, n) {
    return (
      !this.createTime.isEqual(ct.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = t),
      (this.version = t),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 2),
      (this.data = Xe.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 3),
      (this.data = Xe.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = ct.min()), this;
  }
  setReadTime(t) {
    return (this.readTime = t), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(t) {
    return (
      t instanceof pe &&
      this.key.isEqual(t.key) &&
      this.version.isEqual(t.version) &&
      this.documentType === t.documentType &&
      this.documentState === t.documentState &&
      this.data.isEqual(t.data)
    );
  }
  mutableCopy() {
    return new pe(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {createTime: ${this.createTime}}), {documentType: ${
      this.documentType
    }}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Li {
  constructor(t, n) {
    (this.position = t), (this.inclusive = n);
  }
}
function Qu(e, t, n) {
  let r = 0;
  for (let s = 0; s < e.position.length; s++) {
    const i = t[s],
      a = e.position[s];
    if (
      (i.field.isKeyField()
        ? (r = it.comparator(it.fromName(a.referenceValue), n.key))
        : (r = kr(a, n.data.field(i.field))),
      i.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function Yu(e, t) {
  if (e === null) return t === null;
  if (
    t === null ||
    e.inclusive !== t.inclusive ||
    e.position.length !== t.position.length
  )
    return !1;
  for (let n = 0; n < e.position.length; n++)
    if (!tn(e.position[n], t.position[n])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fi {
  constructor(t, n = "asc") {
    (this.field = t), (this.dir = n);
  }
}
function O0(e, t) {
  return e.dir === t.dir && e.field.isEqual(t.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vd {}
class Kt extends vd {
  constructor(t, n, r) {
    super(), (this.field = t), (this.op = n), (this.value = r);
  }
  static create(t, n, r) {
    return t.isKeyField()
      ? n === "in" || n === "not-in"
        ? this.createKeyFieldInFilter(t, n, r)
        : new M0(t, n, r)
      : n === "array-contains"
      ? new B0(t, r)
      : n === "in"
      ? new $0(t, r)
      : n === "not-in"
      ? new U0(t, r)
      : n === "array-contains-any"
      ? new q0(t, r)
      : new Kt(t, n, r);
  }
  static createKeyFieldInFilter(t, n, r) {
    return n === "in" ? new L0(t, r) : new F0(t, r);
  }
  matches(t) {
    const n = t.data.field(this.field);
    return this.op === "!="
      ? n !== null && this.matchesComparison(kr(n, this.value))
      : n !== null &&
          Mn(this.value) === Mn(n) &&
          this.matchesComparison(kr(n, this.value));
  }
  matchesComparison(t) {
    switch (this.op) {
      case "<":
        return t < 0;
      case "<=":
        return t <= 0;
      case "==":
        return t === 0;
      case "!=":
        return t !== 0;
      case ">":
        return t > 0;
      case ">=":
        return t >= 0;
      default:
        return ft();
    }
  }
  isInequality() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class Ke extends vd {
  constructor(t, n) {
    super(), (this.filters = t), (this.op = n), (this.ae = null);
  }
  static create(t, n) {
    return new Ke(t, n);
  }
  matches(t) {
    return Ed(this)
      ? this.filters.find((n) => !n.matches(t)) === void 0
      : this.filters.find((n) => n.matches(t)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.ae !== null ||
        (this.ae = this.filters.reduce(
          (t, n) => t.concat(n.getFlattenedFilters()),
          []
        )),
      this.ae
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function Ed(e) {
  return e.op === "and";
}
function Td(e) {
  return k0(e) && Ed(e);
}
function k0(e) {
  for (const t of e.filters) if (t instanceof Ke) return !1;
  return !0;
}
function Sa(e) {
  if (e instanceof Kt)
    return e.field.canonicalString() + e.op.toString() + Mr(e.value);
  if (Td(e)) return e.filters.map((t) => Sa(t)).join(",");
  {
    const t = e.filters.map((n) => Sa(n)).join(",");
    return `${e.op}(${t})`;
  }
}
function wd(e, t) {
  return e instanceof Kt
    ? (function (r, s) {
        return (
          s instanceof Kt &&
          r.op === s.op &&
          r.field.isEqual(s.field) &&
          tn(r.value, s.value)
        );
      })(e, t)
    : e instanceof Ke
    ? (function (r, s) {
        return s instanceof Ke &&
          r.op === s.op &&
          r.filters.length === s.filters.length
          ? r.filters.reduce((i, a, l) => i && wd(a, s.filters[l]), !0)
          : !1;
      })(e, t)
    : void ft();
}
function Id(e) {
  return e instanceof Kt
    ? (function (n) {
        return `${n.field.canonicalString()} ${n.op} ${Mr(n.value)}`;
      })(e)
    : e instanceof Ke
    ? (function (n) {
        return n.op.toString() + " {" + n.getFilters().map(Id).join(" ,") + "}";
      })(e)
    : "Filter";
}
class M0 extends Kt {
  constructor(t, n, r) {
    super(t, n, r), (this.key = it.fromName(r.referenceValue));
  }
  matches(t) {
    const n = it.comparator(t.key, this.key);
    return this.matchesComparison(n);
  }
}
class L0 extends Kt {
  constructor(t, n) {
    super(t, "in", n), (this.keys = Ad("in", n));
  }
  matches(t) {
    return this.keys.some((n) => n.isEqual(t.key));
  }
}
class F0 extends Kt {
  constructor(t, n) {
    super(t, "not-in", n), (this.keys = Ad("not-in", n));
  }
  matches(t) {
    return !this.keys.some((n) => n.isEqual(t.key));
  }
}
function Ad(e, t) {
  var n;
  return (
    ((n = t.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((r) => it.fromName(r.referenceValue));
}
class B0 extends Kt {
  constructor(t, n) {
    super(t, "array-contains", n);
  }
  matches(t) {
    const n = t.data.field(this.field);
    return fl(n) && Bs(n.arrayValue, this.value);
  }
}
class $0 extends Kt {
  constructor(t, n) {
    super(t, "in", n);
  }
  matches(t) {
    const n = t.data.field(this.field);
    return n !== null && Bs(this.value.arrayValue, n);
  }
}
class U0 extends Kt {
  constructor(t, n) {
    super(t, "not-in", n);
  }
  matches(t) {
    if (Bs(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const n = t.data.field(this.field);
    return n !== null && !Bs(this.value.arrayValue, n);
  }
}
class q0 extends Kt {
  constructor(t, n) {
    super(t, "array-contains-any", n);
  }
  matches(t) {
    const n = t.data.field(this.field);
    return (
      !(!fl(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => Bs(this.value.arrayValue, r))
    );
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class j0 {
  constructor(t, n = null, r = [], s = [], i = null, a = null, l = null) {
    (this.path = t),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = s),
      (this.limit = i),
      (this.startAt = a),
      (this.endAt = l),
      (this.ue = null);
  }
}
function Xu(e, t = null, n = [], r = [], s = null, i = null, a = null) {
  return new j0(e, t, n, r, s, i, a);
}
function dl(e) {
  const t = Et(e);
  if (t.ue === null) {
    let n = t.path.canonicalString();
    t.collectionGroup !== null && (n += "|cg:" + t.collectionGroup),
      (n += "|f:"),
      (n += t.filters.map((r) => Sa(r)).join(",")),
      (n += "|ob:"),
      (n += t.orderBy
        .map((r) =>
          (function (i) {
            return i.field.canonicalString() + i.dir;
          })(r)
        )
        .join(",")),
      oo(t.limit) || ((n += "|l:"), (n += t.limit)),
      t.startAt &&
        ((n += "|lb:"),
        (n += t.startAt.inclusive ? "b:" : "a:"),
        (n += t.startAt.position.map((r) => Mr(r)).join(","))),
      t.endAt &&
        ((n += "|ub:"),
        (n += t.endAt.inclusive ? "a:" : "b:"),
        (n += t.endAt.position.map((r) => Mr(r)).join(","))),
      (t.ue = n);
  }
  return t.ue;
}
function pl(e, t) {
  if (e.limit !== t.limit || e.orderBy.length !== t.orderBy.length) return !1;
  for (let n = 0; n < e.orderBy.length; n++)
    if (!O0(e.orderBy[n], t.orderBy[n])) return !1;
  if (e.filters.length !== t.filters.length) return !1;
  for (let n = 0; n < e.filters.length; n++)
    if (!wd(e.filters[n], t.filters[n])) return !1;
  return (
    e.collectionGroup === t.collectionGroup &&
    !!e.path.isEqual(t.path) &&
    !!Yu(e.startAt, t.startAt) &&
    Yu(e.endAt, t.endAt)
  );
}
function Pa(e) {
  return (
    it.isDocumentKey(e.path) &&
    e.collectionGroup === null &&
    e.filters.length === 0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qs {
  constructor(
    t,
    n = null,
    r = [],
    s = [],
    i = null,
    a = "F",
    l = null,
    c = null
  ) {
    (this.path = t),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = s),
      (this.limit = i),
      (this.limitType = a),
      (this.startAt = l),
      (this.endAt = c),
      (this.ce = null),
      (this.le = null),
      (this.he = null),
      this.startAt,
      this.endAt;
  }
}
function z0(e, t, n, r, s, i, a, l) {
  return new qs(e, t, n, r, s, i, a, l);
}
function bd(e) {
  return new qs(e);
}
function Ju(e) {
  return (
    e.filters.length === 0 &&
    e.limit === null &&
    e.startAt == null &&
    e.endAt == null &&
    (e.explicitOrderBy.length === 0 ||
      (e.explicitOrderBy.length === 1 &&
        e.explicitOrderBy[0].field.isKeyField()))
  );
}
function Rd(e) {
  return e.collectionGroup !== null;
}
function ws(e) {
  const t = Et(e);
  if (t.ce === null) {
    t.ce = [];
    const n = new Set();
    for (const i of t.explicitOrderBy)
      t.ce.push(i), n.add(i.field.canonicalString());
    const r =
      t.explicitOrderBy.length > 0
        ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir
        : "asc";
    (function (a) {
      let l = new Wt(ge.comparator);
      return (
        a.filters.forEach((c) => {
          c.getFlattenedFilters().forEach((f) => {
            f.isInequality() && (l = l.add(f.field));
          });
        }),
        l
      );
    })(t).forEach((i) => {
      n.has(i.canonicalString()) || i.isKeyField() || t.ce.push(new Fi(i, r));
    }),
      n.has(ge.keyField().canonicalString()) ||
        t.ce.push(new Fi(ge.keyField(), r));
  }
  return t.ce;
}
function Ze(e) {
  const t = Et(e);
  return t.le || (t.le = H0(t, ws(e))), t.le;
}
function H0(e, t) {
  if (e.limitType === "F")
    return Xu(
      e.path,
      e.collectionGroup,
      t,
      e.filters,
      e.limit,
      e.startAt,
      e.endAt
    );
  {
    t = t.map((s) => {
      const i = s.dir === "desc" ? "asc" : "desc";
      return new Fi(s.field, i);
    });
    const n = e.endAt ? new Li(e.endAt.position, e.endAt.inclusive) : null,
      r = e.startAt ? new Li(e.startAt.position, e.startAt.inclusive) : null;
    return Xu(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
  }
}
function Va(e, t) {
  const n = e.filters.concat([t]);
  return new qs(
    e.path,
    e.collectionGroup,
    e.explicitOrderBy.slice(),
    n,
    e.limit,
    e.limitType,
    e.startAt,
    e.endAt
  );
}
function Da(e, t, n) {
  return new qs(
    e.path,
    e.collectionGroup,
    e.explicitOrderBy.slice(),
    e.filters.slice(),
    t,
    n,
    e.startAt,
    e.endAt
  );
}
function lo(e, t) {
  return pl(Ze(e), Ze(t)) && e.limitType === t.limitType;
}
function Cd(e) {
  return `${dl(Ze(e))}|lt:${e.limitType}`;
}
function vr(e) {
  return `Query(target=${(function (n) {
    let r = n.path.canonicalString();
    return (
      n.collectionGroup !== null &&
        (r += " collectionGroup=" + n.collectionGroup),
      n.filters.length > 0 &&
        (r += `, filters: [${n.filters.map((s) => Id(s)).join(", ")}]`),
      oo(n.limit) || (r += ", limit: " + n.limit),
      n.orderBy.length > 0 &&
        (r += `, orderBy: [${n.orderBy
          .map((s) =>
            (function (a) {
              return `${a.field.canonicalString()} (${a.dir})`;
            })(s)
          )
          .join(", ")}]`),
      n.startAt &&
        ((r += ", startAt: "),
        (r += n.startAt.inclusive ? "b:" : "a:"),
        (r += n.startAt.position.map((s) => Mr(s)).join(","))),
      n.endAt &&
        ((r += ", endAt: "),
        (r += n.endAt.inclusive ? "a:" : "b:"),
        (r += n.endAt.position.map((s) => Mr(s)).join(","))),
      `Target(${r})`
    );
  })(Ze(e))}; limitType=${e.limitType})`;
}
function co(e, t) {
  return (
    t.isFoundDocument() &&
    (function (r, s) {
      const i = s.key.path;
      return r.collectionGroup !== null
        ? s.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(i)
        : it.isDocumentKey(r.path)
        ? r.path.isEqual(i)
        : r.path.isImmediateParentOf(i);
    })(e, t) &&
    (function (r, s) {
      for (const i of ws(r))
        if (!i.field.isKeyField() && s.data.field(i.field) === null) return !1;
      return !0;
    })(e, t) &&
    (function (r, s) {
      for (const i of r.filters) if (!i.matches(s)) return !1;
      return !0;
    })(e, t) &&
    (function (r, s) {
      return !(
        (r.startAt &&
          !(function (a, l, c) {
            const f = Qu(a, l, c);
            return a.inclusive ? f <= 0 : f < 0;
          })(r.startAt, ws(r), s)) ||
        (r.endAt &&
          !(function (a, l, c) {
            const f = Qu(a, l, c);
            return a.inclusive ? f >= 0 : f > 0;
          })(r.endAt, ws(r), s))
      );
    })(e, t)
  );
}
function K0(e) {
  return (
    e.collectionGroup ||
    (e.path.length % 2 == 1
      ? e.path.lastSegment()
      : e.path.get(e.path.length - 2))
  );
}
function Sd(e) {
  return (t, n) => {
    let r = !1;
    for (const s of ws(e)) {
      const i = G0(s, t, n);
      if (i !== 0) return i;
      r = r || s.field.isKeyField();
    }
    return 0;
  };
}
function G0(e, t, n) {
  const r = e.field.isKeyField()
    ? it.comparator(t.key, n.key)
    : (function (i, a, l) {
        const c = a.data.field(i),
          f = l.data.field(i);
        return c !== null && f !== null ? kr(c, f) : ft();
      })(e.field, t, n);
  switch (e.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return ft();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ar {
  constructor(t, n) {
    (this.mapKeyFn = t),
      (this.equalsFn = n),
      (this.inner = {}),
      (this.innerSize = 0);
  }
  get(t) {
    const n = this.mapKeyFn(t),
      r = this.inner[n];
    if (r !== void 0) {
      for (const [s, i] of r) if (this.equalsFn(s, t)) return i;
    }
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, n) {
    const r = this.mapKeyFn(t),
      s = this.inner[r];
    if (s === void 0) return (this.inner[r] = [[t, n]]), void this.innerSize++;
    for (let i = 0; i < s.length; i++)
      if (this.equalsFn(s[i][0], t)) return void (s[i] = [t, n]);
    s.push([t, n]), this.innerSize++;
  }
  delete(t) {
    const n = this.mapKeyFn(t),
      r = this.inner[n];
    if (r === void 0) return !1;
    for (let s = 0; s < r.length; s++)
      if (this.equalsFn(r[s][0], t))
        return (
          r.length === 1 ? delete this.inner[n] : r.splice(s, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(t) {
    zr(this.inner, (n, r) => {
      for (const [s, i] of r) t(s, i);
    });
  }
  isEmpty() {
    return _d(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const W0 = new zt(it.comparator);
function Ln() {
  return W0;
}
const Pd = new zt(it.comparator);
function us(...e) {
  let t = Pd;
  for (const n of e) t = t.insert(n.key, n);
  return t;
}
function Q0(e) {
  let t = Pd;
  return e.forEach((n, r) => (t = t.insert(n, r.overlayedDocument))), t;
}
function Jn() {
  return Is();
}
function Vd() {
  return Is();
}
function Is() {
  return new ar(
    (e) => e.toString(),
    (e, t) => e.isEqual(t)
  );
}
const Y0 = new Wt(it.comparator);
function Tt(...e) {
  let t = Y0;
  for (const n of e) t = t.add(n);
  return t;
}
const X0 = new Wt(vt);
function J0() {
  return X0;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gl(e, t) {
  if (e.useProto3Json) {
    if (isNaN(t)) return { doubleValue: "NaN" };
    if (t === 1 / 0) return { doubleValue: "Infinity" };
    if (t === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: Mi(t) ? "-0" : t };
}
function Dd(e) {
  return { integerValue: "" + e };
}
function Z0(e, t) {
  return C0(t) ? Dd(t) : gl(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uo {
  constructor() {
    this._ = void 0;
  }
}
function tT(e, t, n) {
  return e instanceof xa
    ? (function (s, i) {
        const a = {
          fields: {
            __type__: { stringValue: "server_timestamp" },
            __local_write_time__: {
              timestampValue: { seconds: s.seconds, nanos: s.nanoseconds },
            },
          },
        };
        return (
          i && hl(i) && (i = ao(i)),
          i && (a.fields.__previous_value__ = i),
          { mapValue: a }
        );
      })(n, t)
    : e instanceof Bi
    ? xd(e, t)
    : e instanceof $i
    ? Nd(e, t)
    : (function (s, i) {
        const a = nT(s, i),
          l = Zu(a) + Zu(s.Pe);
        return Ca(a) && Ca(s.Pe) ? Dd(l) : gl(s.serializer, l);
      })(e, t);
}
function eT(e, t, n) {
  return e instanceof Bi ? xd(e, t) : e instanceof $i ? Nd(e, t) : n;
}
function nT(e, t) {
  return e instanceof Na
    ? (function (r) {
        return (
          Ca(r) ||
          (function (i) {
            return !!i && "doubleValue" in i;
          })(r)
        );
      })(t)
      ? t
      : { integerValue: 0 }
    : null;
}
class xa extends uo {}
class Bi extends uo {
  constructor(t) {
    super(), (this.elements = t);
  }
}
function xd(e, t) {
  const n = Od(t);
  for (const r of e.elements) n.some((s) => tn(s, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class $i extends uo {
  constructor(t) {
    super(), (this.elements = t);
  }
}
function Nd(e, t) {
  let n = Od(t);
  for (const r of e.elements) n = n.filter((s) => !tn(s, r));
  return { arrayValue: { values: n } };
}
class Na extends uo {
  constructor(t, n) {
    super(), (this.serializer = t), (this.Pe = n);
  }
}
function Zu(e) {
  return qt(e.integerValue || e.doubleValue);
}
function Od(e) {
  return fl(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
}
function rT(e, t) {
  return (
    e.field.isEqual(t.field) &&
    (function (r, s) {
      return (r instanceof Bi && s instanceof Bi) ||
        (r instanceof $i && s instanceof $i)
        ? Or(r.elements, s.elements, tn)
        : r instanceof Na && s instanceof Na
        ? tn(r.Pe, s.Pe)
        : r instanceof xa && s instanceof xa;
    })(e.transform, t.transform)
  );
}
class nr {
  constructor(t, n) {
    (this.updateTime = t), (this.exists = n);
  }
  static none() {
    return new nr();
  }
  static exists(t) {
    return new nr(void 0, t);
  }
  static updateTime(t) {
    return new nr(t);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(t) {
    return (
      this.exists === t.exists &&
      (this.updateTime
        ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
        : !t.updateTime)
    );
  }
}
function Ii(e, t) {
  return e.updateTime !== void 0
    ? t.isFoundDocument() && t.version.isEqual(e.updateTime)
    : e.exists === void 0 || e.exists === t.isFoundDocument();
}
class ml {}
function kd(e, t) {
  if (!e.hasLocalMutations || (t && t.fields.length === 0)) return null;
  if (t === null)
    return e.isNoDocument()
      ? new iT(e.key, nr.none())
      : new _l(e.key, e.data, nr.none());
  {
    const n = e.data,
      r = Xe.empty();
    let s = new Wt(ge.comparator);
    for (let i of t.fields)
      if (!s.has(i)) {
        let a = n.field(i);
        a === null && i.length > 1 && ((i = i.popLast()), (a = n.field(i))),
          a === null ? r.delete(i) : r.set(i, a),
          (s = s.add(i));
      }
    return new ho(e.key, r, new Cn(s.toArray()), nr.none());
  }
}
function sT(e, t, n) {
  e instanceof _l
    ? (function (s, i, a) {
        const l = s.value.clone(),
          c = eh(s.fieldTransforms, i, a.transformResults);
        l.setAll(c),
          i.convertToFoundDocument(a.version, l).setHasCommittedMutations();
      })(e, t, n)
    : e instanceof ho
    ? (function (s, i, a) {
        if (!Ii(s.precondition, i))
          return void i.convertToUnknownDocument(a.version);
        const l = eh(s.fieldTransforms, i, a.transformResults),
          c = i.data;
        c.setAll(Md(s)),
          c.setAll(l),
          i.convertToFoundDocument(a.version, c).setHasCommittedMutations();
      })(e, t, n)
    : (function (s, i, a) {
        i.convertToNoDocument(a.version).setHasCommittedMutations();
      })(0, t, n);
}
function As(e, t, n, r) {
  return e instanceof _l
    ? (function (i, a, l, c) {
        if (!Ii(i.precondition, a)) return l;
        const f = i.value.clone(),
          d = nh(i.fieldTransforms, c, a);
        return (
          f.setAll(d),
          a.convertToFoundDocument(a.version, f).setHasLocalMutations(),
          null
        );
      })(e, t, n, r)
    : e instanceof ho
    ? (function (i, a, l, c) {
        if (!Ii(i.precondition, a)) return l;
        const f = nh(i.fieldTransforms, c, a),
          d = a.data;
        return (
          d.setAll(Md(i)),
          d.setAll(f),
          a.convertToFoundDocument(a.version, d).setHasLocalMutations(),
          l === null
            ? null
            : l
                .unionWith(i.fieldMask.fields)
                .unionWith(i.fieldTransforms.map((p) => p.field))
        );
      })(e, t, n, r)
    : (function (i, a, l) {
        return Ii(i.precondition, a)
          ? (a.convertToNoDocument(a.version).setHasLocalMutations(), null)
          : l;
      })(e, t, n);
}
function th(e, t) {
  return (
    e.type === t.type &&
    !!e.key.isEqual(t.key) &&
    !!e.precondition.isEqual(t.precondition) &&
    !!(function (r, s) {
      return (
        (r === void 0 && s === void 0) ||
        (!(!r || !s) && Or(r, s, (i, a) => rT(i, a)))
      );
    })(e.fieldTransforms, t.fieldTransforms) &&
    (e.type === 0
      ? e.value.isEqual(t.value)
      : e.type !== 1 ||
        (e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask)))
  );
}
class _l extends ml {
  constructor(t, n, r, s = []) {
    super(),
      (this.key = t),
      (this.value = n),
      (this.precondition = r),
      (this.fieldTransforms = s),
      (this.type = 0);
  }
  getFieldMask() {
    return null;
  }
}
class ho extends ml {
  constructor(t, n, r, s, i = []) {
    super(),
      (this.key = t),
      (this.data = n),
      (this.fieldMask = r),
      (this.precondition = s),
      (this.fieldTransforms = i),
      (this.type = 1);
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function Md(e) {
  const t = new Map();
  return (
    e.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r = e.data.field(n);
        t.set(n, r);
      }
    }),
    t
  );
}
function eh(e, t, n) {
  const r = new Map();
  $t(e.length === n.length);
  for (let s = 0; s < n.length; s++) {
    const i = e[s],
      a = i.transform,
      l = t.data.field(i.field);
    r.set(i.field, eT(a, l, n[s]));
  }
  return r;
}
function nh(e, t, n) {
  const r = new Map();
  for (const s of e) {
    const i = s.transform,
      a = n.data.field(s.field);
    r.set(s.field, tT(i, a, t));
  }
  return r;
}
class iT extends ml {
  constructor(t, n) {
    super(),
      (this.key = t),
      (this.precondition = n),
      (this.type = 2),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oT {
  constructor(t, n, r, s) {
    (this.batchId = t),
      (this.localWriteTime = n),
      (this.baseMutations = r),
      (this.mutations = s);
  }
  applyToRemoteDocument(t, n) {
    const r = n.mutationResults;
    for (let s = 0; s < this.mutations.length; s++) {
      const i = this.mutations[s];
      i.key.isEqual(t.key) && sT(i, t, r[s]);
    }
  }
  applyToLocalView(t, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(t.key) && (n = As(r, t, n, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(t.key) && (n = As(r, t, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(t, n) {
    const r = Vd();
    return (
      this.mutations.forEach((s) => {
        const i = t.get(s.key),
          a = i.overlayedDocument;
        let l = this.applyToLocalView(a, i.mutatedFields);
        l = n.has(s.key) ? null : l;
        const c = kd(a, l);
        c !== null && r.set(s.key, c),
          a.isValidDocument() || a.convertToNoDocument(ct.min());
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((t, n) => t.add(n.key), Tt());
  }
  isEqual(t) {
    return (
      this.batchId === t.batchId &&
      Or(this.mutations, t.mutations, (n, r) => th(n, r)) &&
      Or(this.baseMutations, t.baseMutations, (n, r) => th(n, r))
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aT {
  constructor(t, n) {
    (this.largestBatchId = t), (this.mutation = n);
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t) {
    return t !== null && this.mutation === t.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lT {
  constructor(t, n) {
    (this.count = t), (this.unchangedNames = n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ht, _t;
function Ld(e) {
  if (e === void 0) return un("GRPC error has no .code"), B.UNKNOWN;
  switch (e) {
    case Ht.OK:
      return B.OK;
    case Ht.CANCELLED:
      return B.CANCELLED;
    case Ht.UNKNOWN:
      return B.UNKNOWN;
    case Ht.DEADLINE_EXCEEDED:
      return B.DEADLINE_EXCEEDED;
    case Ht.RESOURCE_EXHAUSTED:
      return B.RESOURCE_EXHAUSTED;
    case Ht.INTERNAL:
      return B.INTERNAL;
    case Ht.UNAVAILABLE:
      return B.UNAVAILABLE;
    case Ht.UNAUTHENTICATED:
      return B.UNAUTHENTICATED;
    case Ht.INVALID_ARGUMENT:
      return B.INVALID_ARGUMENT;
    case Ht.NOT_FOUND:
      return B.NOT_FOUND;
    case Ht.ALREADY_EXISTS:
      return B.ALREADY_EXISTS;
    case Ht.PERMISSION_DENIED:
      return B.PERMISSION_DENIED;
    case Ht.FAILED_PRECONDITION:
      return B.FAILED_PRECONDITION;
    case Ht.ABORTED:
      return B.ABORTED;
    case Ht.OUT_OF_RANGE:
      return B.OUT_OF_RANGE;
    case Ht.UNIMPLEMENTED:
      return B.UNIMPLEMENTED;
    case Ht.DATA_LOSS:
      return B.DATA_LOSS;
    default:
      return ft();
  }
}
((_t = Ht || (Ht = {}))[(_t.OK = 0)] = "OK"),
  (_t[(_t.CANCELLED = 1)] = "CANCELLED"),
  (_t[(_t.UNKNOWN = 2)] = "UNKNOWN"),
  (_t[(_t.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (_t[(_t.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (_t[(_t.NOT_FOUND = 5)] = "NOT_FOUND"),
  (_t[(_t.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (_t[(_t.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (_t[(_t.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (_t[(_t.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (_t[(_t.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (_t[(_t.ABORTED = 10)] = "ABORTED"),
  (_t[(_t.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (_t[(_t.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (_t[(_t.INTERNAL = 13)] = "INTERNAL"),
  (_t[(_t.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (_t[(_t.DATA_LOSS = 15)] = "DATA_LOSS");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cT() {
  return new TextEncoder();
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const uT = new tr([4294967295, 4294967295], 0);
function rh(e) {
  const t = cT().encode(e),
    n = new ud();
  return n.update(t), new Uint8Array(n.digest());
}
function sh(e) {
  const t = new DataView(e.buffer),
    n = t.getUint32(0, !0),
    r = t.getUint32(4, !0),
    s = t.getUint32(8, !0),
    i = t.getUint32(12, !0);
  return [new tr([n, r], 0), new tr([s, i], 0)];
}
class yl {
  constructor(t, n, r) {
    if (
      ((this.bitmap = t),
      (this.padding = n),
      (this.hashCount = r),
      n < 0 || n >= 8)
    )
      throw new hs(`Invalid padding: ${n}`);
    if (r < 0) throw new hs(`Invalid hash count: ${r}`);
    if (t.length > 0 && this.hashCount === 0)
      throw new hs(`Invalid hash count: ${r}`);
    if (t.length === 0 && n !== 0)
      throw new hs(`Invalid padding when bitmap length is 0: ${n}`);
    (this.Te = 8 * t.length - n), (this.Ie = tr.fromNumber(this.Te));
  }
  Ee(t, n, r) {
    let s = t.add(n.multiply(tr.fromNumber(r)));
    return (
      s.compare(uT) === 1 && (s = new tr([s.getBits(0), s.getBits(1)], 0)),
      s.modulo(this.Ie).toNumber()
    );
  }
  de(t) {
    return (this.bitmap[Math.floor(t / 8)] & (1 << t % 8)) != 0;
  }
  mightContain(t) {
    if (this.Te === 0) return !1;
    const n = rh(t),
      [r, s] = sh(n);
    for (let i = 0; i < this.hashCount; i++) {
      const a = this.Ee(r, s, i);
      if (!this.de(a)) return !1;
    }
    return !0;
  }
  static create(t, n, r) {
    const s = t % 8 == 0 ? 0 : 8 - (t % 8),
      i = new Uint8Array(Math.ceil(t / 8)),
      a = new yl(i, s, n);
    return r.forEach((l) => a.insert(l)), a;
  }
  insert(t) {
    if (this.Te === 0) return;
    const n = rh(t),
      [r, s] = sh(n);
    for (let i = 0; i < this.hashCount; i++) {
      const a = this.Ee(r, s, i);
      this.Ae(a);
    }
  }
  Ae(t) {
    const n = Math.floor(t / 8),
      r = t % 8;
    this.bitmap[n] |= 1 << r;
  }
}
class hs extends Error {
  constructor() {
    super(...arguments), (this.name = "BloomFilterError");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fo {
  constructor(t, n, r, s, i) {
    (this.snapshotVersion = t),
      (this.targetChanges = n),
      (this.targetMismatches = r),
      (this.documentUpdates = s),
      (this.resolvedLimboDocuments = i);
  }
  static createSynthesizedRemoteEventForCurrentChange(t, n, r) {
    const s = new Map();
    return (
      s.set(t, js.createSynthesizedTargetChangeForCurrentChange(t, n, r)),
      new fo(ct.min(), s, new zt(vt), Ln(), Tt())
    );
  }
}
class js {
  constructor(t, n, r, s, i) {
    (this.resumeToken = t),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = s),
      (this.removedDocuments = i);
  }
  static createSynthesizedTargetChangeForCurrentChange(t, n, r) {
    return new js(r, n, Tt(), Tt(), Tt());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ai {
  constructor(t, n, r, s) {
    (this.Re = t), (this.removedTargetIds = n), (this.key = r), (this.Ve = s);
  }
}
class Fd {
  constructor(t, n) {
    (this.targetId = t), (this.me = n);
  }
}
class Bd {
  constructor(t, n, r = ie.EMPTY_BYTE_STRING, s = null) {
    (this.state = t),
      (this.targetIds = n),
      (this.resumeToken = r),
      (this.cause = s);
  }
}
class ih {
  constructor() {
    (this.fe = 0),
      (this.ge = oh()),
      (this.pe = ie.EMPTY_BYTE_STRING),
      (this.ye = !1),
      (this.we = !0);
  }
  get current() {
    return this.ye;
  }
  get resumeToken() {
    return this.pe;
  }
  get Se() {
    return this.fe !== 0;
  }
  get be() {
    return this.we;
  }
  De(t) {
    t.approximateByteSize() > 0 && ((this.we = !0), (this.pe = t));
  }
  ve() {
    let t = Tt(),
      n = Tt(),
      r = Tt();
    return (
      this.ge.forEach((s, i) => {
        switch (i) {
          case 0:
            t = t.add(s);
            break;
          case 2:
            n = n.add(s);
            break;
          case 1:
            r = r.add(s);
            break;
          default:
            ft();
        }
      }),
      new js(this.pe, this.ye, t, n, r)
    );
  }
  Ce() {
    (this.we = !1), (this.ge = oh());
  }
  Fe(t, n) {
    (this.we = !0), (this.ge = this.ge.insert(t, n));
  }
  Me(t) {
    (this.we = !0), (this.ge = this.ge.remove(t));
  }
  xe() {
    this.fe += 1;
  }
  Oe() {
    (this.fe -= 1), $t(this.fe >= 0);
  }
  Ne() {
    (this.we = !0), (this.ye = !0);
  }
}
class hT {
  constructor(t) {
    (this.Le = t),
      (this.Be = new Map()),
      (this.ke = Ln()),
      (this.qe = pi()),
      (this.Qe = pi()),
      (this.Ke = new zt(vt));
  }
  $e(t) {
    for (const n of t.Re)
      t.Ve && t.Ve.isFoundDocument()
        ? this.Ue(n, t.Ve)
        : this.We(n, t.key, t.Ve);
    for (const n of t.removedTargetIds) this.We(n, t.key, t.Ve);
  }
  Ge(t) {
    this.forEachTarget(t, (n) => {
      const r = this.ze(n);
      switch (t.state) {
        case 0:
          this.je(n) && r.De(t.resumeToken);
          break;
        case 1:
          r.Oe(), r.Se || r.Ce(), r.De(t.resumeToken);
          break;
        case 2:
          r.Oe(), r.Se || this.removeTarget(n);
          break;
        case 3:
          this.je(n) && (r.Ne(), r.De(t.resumeToken));
          break;
        case 4:
          this.je(n) && (this.He(n), r.De(t.resumeToken));
          break;
        default:
          ft();
      }
    });
  }
  forEachTarget(t, n) {
    t.targetIds.length > 0
      ? t.targetIds.forEach(n)
      : this.Be.forEach((r, s) => {
          this.je(s) && n(s);
        });
  }
  Je(t) {
    const n = t.targetId,
      r = t.me.count,
      s = this.Ye(n);
    if (s) {
      const i = s.target;
      if (Pa(i))
        if (r === 0) {
          const a = new it(i.path);
          this.We(n, a, pe.newNoDocument(a, ct.min()));
        } else $t(r === 1);
      else {
        const a = this.Ze(n);
        if (a !== r) {
          const l = this.Xe(t),
            c = l ? this.et(l, t, a) : 1;
          if (c !== 0) {
            this.He(n);
            const f =
              c === 2
                ? "TargetPurposeExistenceFilterMismatchBloom"
                : "TargetPurposeExistenceFilterMismatch";
            this.Ke = this.Ke.insert(n, f);
          }
        }
      }
    }
  }
  Xe(t) {
    const n = t.me.unchangedNames;
    if (!n || !n.bits) return null;
    const {
      bits: { bitmap: r = "", padding: s = 0 },
      hashCount: i = 0,
    } = n;
    let a, l;
    try {
      a = kn(r).toUint8Array();
    } catch (c) {
      if (c instanceof yd)
        return (
          Nr(
            "Decoding the base64 bloom filter in existence filter failed (" +
              c.message +
              "); ignoring the bloom filter and falling back to full re-query."
          ),
          null
        );
      throw c;
    }
    try {
      l = new yl(a, s, i);
    } catch (c) {
      return (
        Nr(
          c instanceof hs
            ? "BloomFilter error: "
            : "Applying bloom filter failed: ",
          c
        ),
        null
      );
    }
    return l.Te === 0 ? null : l;
  }
  et(t, n, r) {
    return n.me.count === r - this.rt(t, n.targetId) ? 0 : 2;
  }
  rt(t, n) {
    const r = this.Le.getRemoteKeysForTarget(n);
    let s = 0;
    return (
      r.forEach((i) => {
        const a = this.Le.nt(),
          l = `projects/${a.projectId}/databases/${
            a.database
          }/documents/${i.path.canonicalString()}`;
        t.mightContain(l) || (this.We(n, i, null), s++);
      }),
      s
    );
  }
  it(t) {
    const n = new Map();
    this.Be.forEach((i, a) => {
      const l = this.Ye(a);
      if (l) {
        if (i.current && Pa(l.target)) {
          const c = new it(l.target.path);
          this.st(c).has(a) ||
            this.ot(a, c) ||
            this.We(a, c, pe.newNoDocument(c, t));
        }
        i.be && (n.set(a, i.ve()), i.Ce());
      }
    });
    let r = Tt();
    this.Qe.forEach((i, a) => {
      let l = !0;
      a.forEachWhile((c) => {
        const f = this.Ye(c);
        return (
          !f || f.purpose === "TargetPurposeLimboResolution" || ((l = !1), !1)
        );
      }),
        l && (r = r.add(i));
    }),
      this.ke.forEach((i, a) => a.setReadTime(t));
    const s = new fo(t, n, this.Ke, this.ke, r);
    return (
      (this.ke = Ln()),
      (this.qe = pi()),
      (this.Qe = pi()),
      (this.Ke = new zt(vt)),
      s
    );
  }
  Ue(t, n) {
    if (!this.je(t)) return;
    const r = this.ot(t, n.key) ? 2 : 0;
    this.ze(t).Fe(n.key, r),
      (this.ke = this.ke.insert(n.key, n)),
      (this.qe = this.qe.insert(n.key, this.st(n.key).add(t))),
      (this.Qe = this.Qe.insert(n.key, this._t(n.key).add(t)));
  }
  We(t, n, r) {
    if (!this.je(t)) return;
    const s = this.ze(t);
    this.ot(t, n) ? s.Fe(n, 1) : s.Me(n),
      (this.Qe = this.Qe.insert(n, this._t(n).delete(t))),
      (this.Qe = this.Qe.insert(n, this._t(n).add(t))),
      r && (this.ke = this.ke.insert(n, r));
  }
  removeTarget(t) {
    this.Be.delete(t);
  }
  Ze(t) {
    const n = this.ze(t).ve();
    return (
      this.Le.getRemoteKeysForTarget(t).size +
      n.addedDocuments.size -
      n.removedDocuments.size
    );
  }
  xe(t) {
    this.ze(t).xe();
  }
  ze(t) {
    let n = this.Be.get(t);
    return n || ((n = new ih()), this.Be.set(t, n)), n;
  }
  _t(t) {
    let n = this.Qe.get(t);
    return n || ((n = new Wt(vt)), (this.Qe = this.Qe.insert(t, n))), n;
  }
  st(t) {
    let n = this.qe.get(t);
    return n || ((n = new Wt(vt)), (this.qe = this.qe.insert(t, n))), n;
  }
  je(t) {
    const n = this.Ye(t) !== null;
    return n || X("WatchChangeAggregator", "Detected inactive target", t), n;
  }
  Ye(t) {
    const n = this.Be.get(t);
    return n && n.Se ? null : this.Le.ut(t);
  }
  He(t) {
    this.Be.set(t, new ih()),
      this.Le.getRemoteKeysForTarget(t).forEach((n) => {
        this.We(t, n, null);
      });
  }
  ot(t, n) {
    return this.Le.getRemoteKeysForTarget(t).has(n);
  }
}
function pi() {
  return new zt(it.comparator);
}
function oh() {
  return new zt(it.comparator);
}
const fT = { asc: "ASCENDING", desc: "DESCENDING" },
  dT = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  },
  pT = { and: "AND", or: "OR" };
class gT {
  constructor(t, n) {
    (this.databaseId = t), (this.useProto3Json = n);
  }
}
function Oa(e, t) {
  return e.useProto3Json || oo(t) ? t : { value: t };
}
function ka(e, t) {
  return e.useProto3Json
    ? `${new Date(1e3 * t.seconds)
        .toISOString()
        .replace(/\.\d*/, "")
        .replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`
    : { seconds: "" + t.seconds, nanos: t.nanoseconds };
}
function $d(e, t) {
  return e.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function Sr(e) {
  return (
    $t(!!e),
    ct.fromTimestamp(
      (function (n) {
        const r = On(n);
        return new Jt(r.seconds, r.nanos);
      })(e)
    )
  );
}
function Ud(e, t) {
  return Ma(e, t).canonicalString();
}
function Ma(e, t) {
  const n = (function (s) {
    return new Bt(["projects", s.projectId, "databases", s.database]);
  })(e).child("documents");
  return t === void 0 ? n : n.child(t);
}
function qd(e) {
  const t = Bt.fromString(e);
  return $t(Gd(t)), t;
}
function Jo(e, t) {
  const n = qd(t);
  if (n.get(1) !== e.databaseId.projectId)
    throw new et(
      B.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n.get(1) +
        " vs " +
        e.databaseId.projectId
    );
  if (n.get(3) !== e.databaseId.database)
    throw new et(
      B.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n.get(3) +
        " vs " +
        e.databaseId.database
    );
  return new it(zd(n));
}
function jd(e, t) {
  return Ud(e.databaseId, t);
}
function mT(e) {
  const t = qd(e);
  return t.length === 4 ? Bt.emptyPath() : zd(t);
}
function ah(e) {
  return new Bt([
    "projects",
    e.databaseId.projectId,
    "databases",
    e.databaseId.database,
  ]).canonicalString();
}
function zd(e) {
  return $t(e.length > 4 && e.get(4) === "documents"), e.popFirst(5);
}
function _T(e, t) {
  let n;
  if ("targetChange" in t) {
    t.targetChange;
    const r = (function (f) {
        return f === "NO_CHANGE"
          ? 0
          : f === "ADD"
          ? 1
          : f === "REMOVE"
          ? 2
          : f === "CURRENT"
          ? 3
          : f === "RESET"
          ? 4
          : ft();
      })(t.targetChange.targetChangeType || "NO_CHANGE"),
      s = t.targetChange.targetIds || [],
      i = (function (f, d) {
        return f.useProto3Json
          ? ($t(d === void 0 || typeof d == "string"),
            ie.fromBase64String(d || ""))
          : ($t(d === void 0 || d instanceof Buffer || d instanceof Uint8Array),
            ie.fromUint8Array(d || new Uint8Array()));
      })(e, t.targetChange.resumeToken),
      a = t.targetChange.cause,
      l =
        a &&
        (function (f) {
          const d = f.code === void 0 ? B.UNKNOWN : Ld(f.code);
          return new et(d, f.message || "");
        })(a);
    n = new Bd(r, s, i, l || null);
  } else if ("documentChange" in t) {
    t.documentChange;
    const r = t.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const s = Jo(e, r.document.name),
      i = Sr(r.document.updateTime),
      a = r.document.createTime ? Sr(r.document.createTime) : ct.min(),
      l = new Xe({ mapValue: { fields: r.document.fields } }),
      c = pe.newFoundDocument(s, i, a, l),
      f = r.targetIds || [],
      d = r.removedTargetIds || [];
    n = new Ai(f, d, c.key, c);
  } else if ("documentDelete" in t) {
    t.documentDelete;
    const r = t.documentDelete;
    r.document;
    const s = Jo(e, r.document),
      i = r.readTime ? Sr(r.readTime) : ct.min(),
      a = pe.newNoDocument(s, i),
      l = r.removedTargetIds || [];
    n = new Ai([], l, a.key, a);
  } else if ("documentRemove" in t) {
    t.documentRemove;
    const r = t.documentRemove;
    r.document;
    const s = Jo(e, r.document),
      i = r.removedTargetIds || [];
    n = new Ai([], i, s, null);
  } else {
    if (!("filter" in t)) return ft();
    {
      t.filter;
      const r = t.filter;
      r.targetId;
      const { count: s = 0, unchangedNames: i } = r,
        a = new lT(s, i),
        l = r.targetId;
      n = new Fd(l, a);
    }
  }
  return n;
}
function yT(e, t) {
  return { documents: [jd(e, t.path)] };
}
function vT(e, t) {
  const n = { structuredQuery: {} },
    r = t.path;
  let s;
  t.collectionGroup !== null
    ? ((s = r),
      (n.structuredQuery.from = [
        { collectionId: t.collectionGroup, allDescendants: !0 },
      ]))
    : ((s = r.popLast()),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }])),
    (n.parent = jd(e, s));
  const i = (function (f) {
    if (f.length !== 0) return Kd(Ke.create(f, "and"));
  })(t.filters);
  i && (n.structuredQuery.where = i);
  const a = (function (f) {
    if (f.length !== 0)
      return f.map((d) =>
        (function (m) {
          return { field: Er(m.field), direction: wT(m.dir) };
        })(d)
      );
  })(t.orderBy);
  a && (n.structuredQuery.orderBy = a);
  const l = Oa(e, t.limit);
  return (
    l !== null && (n.structuredQuery.limit = l),
    t.startAt &&
      (n.structuredQuery.startAt = (function (f) {
        return { before: f.inclusive, values: f.position };
      })(t.startAt)),
    t.endAt &&
      (n.structuredQuery.endAt = (function (f) {
        return { before: !f.inclusive, values: f.position };
      })(t.endAt)),
    { ct: n, parent: s }
  );
}
function ET(e) {
  let t = mT(e.parent);
  const n = e.structuredQuery,
    r = n.from ? n.from.length : 0;
  let s = null;
  if (r > 0) {
    $t(r === 1);
    const d = n.from[0];
    d.allDescendants ? (s = d.collectionId) : (t = t.child(d.collectionId));
  }
  let i = [];
  n.where &&
    (i = (function (p) {
      const m = Hd(p);
      return m instanceof Ke && Td(m) ? m.getFilters() : [m];
    })(n.where));
  let a = [];
  n.orderBy &&
    (a = (function (p) {
      return p.map((m) =>
        (function (V) {
          return new Fi(
            Tr(V.field),
            (function (k) {
              switch (k) {
                case "ASCENDING":
                  return "asc";
                case "DESCENDING":
                  return "desc";
                default:
                  return;
              }
            })(V.direction)
          );
        })(m)
      );
    })(n.orderBy));
  let l = null;
  n.limit &&
    (l = (function (p) {
      let m;
      return (m = typeof p == "object" ? p.value : p), oo(m) ? null : m;
    })(n.limit));
  let c = null;
  n.startAt &&
    (c = (function (p) {
      const m = !!p.before,
        T = p.values || [];
      return new Li(T, m);
    })(n.startAt));
  let f = null;
  return (
    n.endAt &&
      (f = (function (p) {
        const m = !p.before,
          T = p.values || [];
        return new Li(T, m);
      })(n.endAt)),
    z0(t, s, a, i, l, "F", c, f)
  );
}
function TT(e, t) {
  const n = (function (s) {
    switch (s) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return ft();
    }
  })(t.purpose);
  return n == null ? null : { "goog-listen-tags": n };
}
function Hd(e) {
  return e.unaryFilter !== void 0
    ? (function (n) {
        switch (n.unaryFilter.op) {
          case "IS_NAN":
            const r = Tr(n.unaryFilter.field);
            return Kt.create(r, "==", { doubleValue: NaN });
          case "IS_NULL":
            const s = Tr(n.unaryFilter.field);
            return Kt.create(s, "==", { nullValue: "NULL_VALUE" });
          case "IS_NOT_NAN":
            const i = Tr(n.unaryFilter.field);
            return Kt.create(i, "!=", { doubleValue: NaN });
          case "IS_NOT_NULL":
            const a = Tr(n.unaryFilter.field);
            return Kt.create(a, "!=", { nullValue: "NULL_VALUE" });
          default:
            return ft();
        }
      })(e)
    : e.fieldFilter !== void 0
    ? (function (n) {
        return Kt.create(
          Tr(n.fieldFilter.field),
          (function (s) {
            switch (s) {
              case "EQUAL":
                return "==";
              case "NOT_EQUAL":
                return "!=";
              case "GREATER_THAN":
                return ">";
              case "GREATER_THAN_OR_EQUAL":
                return ">=";
              case "LESS_THAN":
                return "<";
              case "LESS_THAN_OR_EQUAL":
                return "<=";
              case "ARRAY_CONTAINS":
                return "array-contains";
              case "IN":
                return "in";
              case "NOT_IN":
                return "not-in";
              case "ARRAY_CONTAINS_ANY":
                return "array-contains-any";
              default:
                return ft();
            }
          })(n.fieldFilter.op),
          n.fieldFilter.value
        );
      })(e)
    : e.compositeFilter !== void 0
    ? (function (n) {
        return Ke.create(
          n.compositeFilter.filters.map((r) => Hd(r)),
          (function (s) {
            switch (s) {
              case "AND":
                return "and";
              case "OR":
                return "or";
              default:
                return ft();
            }
          })(n.compositeFilter.op)
        );
      })(e)
    : ft();
}
function wT(e) {
  return fT[e];
}
function IT(e) {
  return dT[e];
}
function AT(e) {
  return pT[e];
}
function Er(e) {
  return { fieldPath: e.canonicalString() };
}
function Tr(e) {
  return ge.fromServerFormat(e.fieldPath);
}
function Kd(e) {
  return e instanceof Kt
    ? (function (n) {
        if (n.op === "==") {
          if (Wu(n.value))
            return { unaryFilter: { field: Er(n.field), op: "IS_NAN" } };
          if (Gu(n.value))
            return { unaryFilter: { field: Er(n.field), op: "IS_NULL" } };
        } else if (n.op === "!=") {
          if (Wu(n.value))
            return { unaryFilter: { field: Er(n.field), op: "IS_NOT_NAN" } };
          if (Gu(n.value))
            return { unaryFilter: { field: Er(n.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: Er(n.field), op: IT(n.op), value: n.value },
        };
      })(e)
    : e instanceof Ke
    ? (function (n) {
        const r = n.getFilters().map((s) => Kd(s));
        return r.length === 1
          ? r[0]
          : { compositeFilter: { op: AT(n.op), filters: r } };
      })(e)
    : ft();
}
function Gd(e) {
  return e.length >= 4 && e.get(0) === "projects" && e.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Sn {
  constructor(
    t,
    n,
    r,
    s,
    i = ct.min(),
    a = ct.min(),
    l = ie.EMPTY_BYTE_STRING,
    c = null
  ) {
    (this.target = t),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = s),
      (this.snapshotVersion = i),
      (this.lastLimboFreeSnapshotVersion = a),
      (this.resumeToken = l),
      (this.expectedCount = c);
  }
  withSequenceNumber(t) {
    return new Sn(
      this.target,
      this.targetId,
      this.purpose,
      t,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount
    );
  }
  withResumeToken(t, n) {
    return new Sn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      t,
      null
    );
  }
  withExpectedCount(t) {
    return new Sn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      t
    );
  }
  withLastLimboFreeSnapshotVersion(t) {
    return new Sn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      t,
      this.resumeToken,
      this.expectedCount
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bT {
  constructor(t) {
    this.ht = t;
  }
}
function RT(e) {
  const t = ET({ parent: e.parent, structuredQuery: e.structuredQuery });
  return e.limitType === "LAST" ? Da(t, t.limit, "L") : t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class CT {
  constructor() {
    this.ln = new ST();
  }
  addToCollectionParentIndex(t, n) {
    return this.ln.add(n), O.resolve();
  }
  getCollectionParents(t, n) {
    return O.resolve(this.ln.getEntries(n));
  }
  addFieldIndex(t, n) {
    return O.resolve();
  }
  deleteFieldIndex(t, n) {
    return O.resolve();
  }
  deleteAllFieldIndexes(t) {
    return O.resolve();
  }
  createTargetIndexes(t, n) {
    return O.resolve();
  }
  getDocumentsMatchingTarget(t, n) {
    return O.resolve(null);
  }
  getIndexType(t, n) {
    return O.resolve(0);
  }
  getFieldIndexes(t, n) {
    return O.resolve([]);
  }
  getNextCollectionGroupToUpdate(t) {
    return O.resolve(null);
  }
  getMinOffset(t, n) {
    return O.resolve(Nn.min());
  }
  getMinOffsetFromCollectionGroup(t, n) {
    return O.resolve(Nn.min());
  }
  updateCollectionGroup(t, n, r) {
    return O.resolve();
  }
  updateIndexEntries(t, n) {
    return O.resolve();
  }
}
class ST {
  constructor() {
    this.index = {};
  }
  add(t) {
    const n = t.lastSegment(),
      r = t.popLast(),
      s = this.index[n] || new Wt(Bt.comparator),
      i = !s.has(r);
    return (this.index[n] = s.add(r)), i;
  }
  has(t) {
    const n = t.lastSegment(),
      r = t.popLast(),
      s = this.index[n];
    return s && s.has(r);
  }
  getEntries(t) {
    return (this.index[t] || new Wt(Bt.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lh = {
  didRun: !1,
  sequenceNumbersCollected: 0,
  targetsRemoved: 0,
  documentsRemoved: 0,
};
class Ae {
  static withCacheSize(t) {
    return new Ae(
      t,
      Ae.DEFAULT_COLLECTION_PERCENTILE,
      Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
    );
  }
  constructor(t, n, r) {
    (this.cacheSizeCollectionThreshold = t),
      (this.percentileToCollect = n),
      (this.maximumSequenceNumbersToCollect = r);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (Ae.DEFAULT_COLLECTION_PERCENTILE = 10),
  (Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
  (Ae.DEFAULT = new Ae(
    41943040,
    Ae.DEFAULT_COLLECTION_PERCENTILE,
    Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
  )),
  (Ae.DISABLED = new Ae(-1, 0, 0));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lr {
  constructor(t) {
    this.kn = t;
  }
  next() {
    return (this.kn += 2), this.kn;
  }
  static qn() {
    return new Lr(0);
  }
  static Qn() {
    return new Lr(-1);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ch([e, t], [n, r]) {
  const s = vt(e, n);
  return s === 0 ? vt(t, r) : s;
}
class PT {
  constructor(t) {
    (this.Gn = t), (this.buffer = new Wt(ch)), (this.zn = 0);
  }
  jn() {
    return ++this.zn;
  }
  Hn(t) {
    const n = [t, this.jn()];
    if (this.buffer.size < this.Gn) this.buffer = this.buffer.add(n);
    else {
      const r = this.buffer.last();
      ch(n, r) < 0 && (this.buffer = this.buffer.delete(r).add(n));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
}
class VT {
  constructor(t, n, r) {
    (this.garbageCollector = t),
      (this.asyncQueue = n),
      (this.localStore = r),
      (this.Jn = null);
  }
  start() {
    this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 &&
      this.Yn(6e4);
  }
  stop() {
    this.Jn && (this.Jn.cancel(), (this.Jn = null));
  }
  get started() {
    return this.Jn !== null;
  }
  Yn(t) {
    X("LruGarbageCollector", `Garbage collection scheduled in ${t}ms`),
      (this.Jn = this.asyncQueue.enqueueAfterDelay(
        "lru_garbage_collection",
        t,
        async () => {
          this.Jn = null;
          try {
            await this.localStore.collectGarbage(this.garbageCollector);
          } catch (n) {
            jr(n)
              ? X(
                  "LruGarbageCollector",
                  "Ignoring IndexedDB error during garbage collection: ",
                  n
                )
              : await so(n);
          }
          await this.Yn(3e5);
        }
      ));
  }
}
class DT {
  constructor(t, n) {
    (this.Zn = t), (this.params = n);
  }
  calculateTargetCount(t, n) {
    return this.Zn.Xn(t).next((r) => Math.floor((n / 100) * r));
  }
  nthSequenceNumber(t, n) {
    if (n === 0) return O.resolve(io.oe);
    const r = new PT(n);
    return this.Zn.forEachTarget(t, (s) => r.Hn(s.sequenceNumber))
      .next(() => this.Zn.er(t, (s) => r.Hn(s)))
      .next(() => r.maxValue);
  }
  removeTargets(t, n, r) {
    return this.Zn.removeTargets(t, n, r);
  }
  removeOrphanedDocuments(t, n) {
    return this.Zn.removeOrphanedDocuments(t, n);
  }
  collect(t, n) {
    return this.params.cacheSizeCollectionThreshold === -1
      ? (X("LruGarbageCollector", "Garbage collection skipped; disabled"),
        O.resolve(lh))
      : this.getCacheSize(t).next((r) =>
          r < this.params.cacheSizeCollectionThreshold
            ? (X(
                "LruGarbageCollector",
                `Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`
              ),
              lh)
            : this.tr(t, n)
        );
  }
  getCacheSize(t) {
    return this.Zn.getCacheSize(t);
  }
  tr(t, n) {
    let r, s, i, a, l, c, f;
    const d = Date.now();
    return this.calculateTargetCount(t, this.params.percentileToCollect)
      .next(
        (p) => (
          p > this.params.maximumSequenceNumbersToCollect
            ? (X(
                "LruGarbageCollector",
                `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`
              ),
              (s = this.params.maximumSequenceNumbersToCollect))
            : (s = p),
          (a = Date.now()),
          this.nthSequenceNumber(t, s)
        )
      )
      .next((p) => ((r = p), (l = Date.now()), this.removeTargets(t, r, n)))
      .next(
        (p) => ((i = p), (c = Date.now()), this.removeOrphanedDocuments(t, r))
      )
      .next(
        (p) => (
          (f = Date.now()),
          yr() <= yt.DEBUG &&
            X(
              "LruGarbageCollector",
              `LRU Garbage Collection
	Counted targets in ${a - d}ms
	Determined least recently used ${s} in ` +
                (l - a) +
                `ms
	Removed ${i} targets in ` +
                (c - l) +
                `ms
	Removed ${p} documents in ` +
                (f - c) +
                `ms
Total Duration: ${f - d}ms`
            ),
          O.resolve({
            didRun: !0,
            sequenceNumbersCollected: s,
            targetsRemoved: i,
            documentsRemoved: p,
          })
        )
      );
  }
}
function xT(e, t) {
  return new DT(e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NT {
  constructor() {
    (this.changes = new ar(
      (t) => t.toString(),
      (t, n) => t.isEqual(n)
    )),
      (this.changesApplied = !1);
  }
  addEntry(t) {
    this.assertNotApplied(), this.changes.set(t.key, t);
  }
  removeEntry(t, n) {
    this.assertNotApplied(),
      this.changes.set(t, pe.newInvalidDocument(t).setReadTime(n));
  }
  getEntry(t, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? O.resolve(r) : this.getFromCache(t, n);
  }
  getEntries(t, n) {
    return this.getAllFromCache(t, n);
  }
  apply(t) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(t)
    );
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class OT {
  constructor(t, n) {
    (this.overlayedDocument = t), (this.mutatedFields = n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kT {
  constructor(t, n, r, s) {
    (this.remoteDocumentCache = t),
      (this.mutationQueue = n),
      (this.documentOverlayCache = r),
      (this.indexManager = s);
  }
  getDocument(t, n) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(t, n)
      .next((s) => ((r = s), this.remoteDocumentCache.getEntry(t, n)))
      .next((s) => (r !== null && As(r.mutation, s, Cn.empty(), Jt.now()), s));
  }
  getDocuments(t, n) {
    return this.remoteDocumentCache
      .getEntries(t, n)
      .next((r) => this.getLocalViewOfDocuments(t, r, Tt()).next(() => r));
  }
  getLocalViewOfDocuments(t, n, r = Tt()) {
    const s = Jn();
    return this.populateOverlays(t, s, n).next(() =>
      this.computeViews(t, n, s, r).next((i) => {
        let a = us();
        return (
          i.forEach((l, c) => {
            a = a.insert(l, c.overlayedDocument);
          }),
          a
        );
      })
    );
  }
  getOverlayedDocuments(t, n) {
    const r = Jn();
    return this.populateOverlays(t, r, n).next(() =>
      this.computeViews(t, n, r, Tt())
    );
  }
  populateOverlays(t, n, r) {
    const s = [];
    return (
      r.forEach((i) => {
        n.has(i) || s.push(i);
      }),
      this.documentOverlayCache.getOverlays(t, s).next((i) => {
        i.forEach((a, l) => {
          n.set(a, l);
        });
      })
    );
  }
  computeViews(t, n, r, s) {
    let i = Ln();
    const a = Is(),
      l = (function () {
        return Is();
      })();
    return (
      n.forEach((c, f) => {
        const d = r.get(f.key);
        s.has(f.key) && (d === void 0 || d.mutation instanceof ho)
          ? (i = i.insert(f.key, f))
          : d !== void 0
          ? (a.set(f.key, d.mutation.getFieldMask()),
            As(d.mutation, f, d.mutation.getFieldMask(), Jt.now()))
          : a.set(f.key, Cn.empty());
      }),
      this.recalculateAndSaveOverlays(t, i).next(
        (c) => (
          c.forEach((f, d) => a.set(f, d)),
          n.forEach((f, d) => {
            var p;
            return l.set(
              f,
              new OT(d, (p = a.get(f)) !== null && p !== void 0 ? p : null)
            );
          }),
          l
        )
      )
    );
  }
  recalculateAndSaveOverlays(t, n) {
    const r = Is();
    let s = new zt((a, l) => a - l),
      i = Tt();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(t, n)
      .next((a) => {
        for (const l of a)
          l.keys().forEach((c) => {
            const f = n.get(c);
            if (f === null) return;
            let d = r.get(c) || Cn.empty();
            (d = l.applyToLocalView(f, d)), r.set(c, d);
            const p = (s.get(l.batchId) || Tt()).add(c);
            s = s.insert(l.batchId, p);
          });
      })
      .next(() => {
        const a = [],
          l = s.getReverseIterator();
        for (; l.hasNext(); ) {
          const c = l.getNext(),
            f = c.key,
            d = c.value,
            p = Vd();
          d.forEach((m) => {
            if (!i.has(m)) {
              const T = kd(n.get(m), r.get(m));
              T !== null && p.set(m, T), (i = i.add(m));
            }
          }),
            a.push(this.documentOverlayCache.saveOverlays(t, f, p));
        }
        return O.waitFor(a);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(t, n) {
    return this.remoteDocumentCache
      .getEntries(t, n)
      .next((r) => this.recalculateAndSaveOverlays(t, r));
  }
  getDocumentsMatchingQuery(t, n, r, s) {
    return (function (a) {
      return (
        it.isDocumentKey(a.path) &&
        a.collectionGroup === null &&
        a.filters.length === 0
      );
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(t, n.path)
      : Rd(n)
      ? this.getDocumentsMatchingCollectionGroupQuery(t, n, r, s)
      : this.getDocumentsMatchingCollectionQuery(t, n, r, s);
  }
  getNextDocuments(t, n, r, s) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(t, n, r, s)
      .next((i) => {
        const a =
          s - i.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                t,
                n,
                r.largestBatchId,
                s - i.size
              )
            : O.resolve(Jn());
        let l = -1,
          c = i;
        return a.next((f) =>
          O.forEach(
            f,
            (d, p) => (
              l < p.largestBatchId && (l = p.largestBatchId),
              i.get(d)
                ? O.resolve()
                : this.remoteDocumentCache.getEntry(t, d).next((m) => {
                    c = c.insert(d, m);
                  })
            )
          )
            .next(() => this.populateOverlays(t, f, i))
            .next(() => this.computeViews(t, c, f, Tt()))
            .next((d) => ({ batchId: l, changes: Q0(d) }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(t, n) {
    return this.getDocument(t, new it(n)).next((r) => {
      let s = us();
      return r.isFoundDocument() && (s = s.insert(r.key, r)), s;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t, n, r, s) {
    const i = n.collectionGroup;
    let a = us();
    return this.indexManager.getCollectionParents(t, i).next((l) =>
      O.forEach(l, (c) => {
        const f = (function (p, m) {
          return new qs(
            m,
            null,
            p.explicitOrderBy.slice(),
            p.filters.slice(),
            p.limit,
            p.limitType,
            p.startAt,
            p.endAt
          );
        })(n, c.child(i));
        return this.getDocumentsMatchingCollectionQuery(t, f, r, s).next(
          (d) => {
            d.forEach((p, m) => {
              a = a.insert(p, m);
            });
          }
        );
      }).next(() => a)
    );
  }
  getDocumentsMatchingCollectionQuery(t, n, r, s) {
    let i;
    return this.documentOverlayCache
      .getOverlaysForCollection(t, n.path, r.largestBatchId)
      .next(
        (a) => (
          (i = a),
          this.remoteDocumentCache.getDocumentsMatchingQuery(t, n, r, i, s)
        )
      )
      .next((a) => {
        i.forEach((c, f) => {
          const d = f.getKey();
          a.get(d) === null && (a = a.insert(d, pe.newInvalidDocument(d)));
        });
        let l = us();
        return (
          a.forEach((c, f) => {
            const d = i.get(c);
            d !== void 0 && As(d.mutation, f, Cn.empty(), Jt.now()),
              co(n, f) && (l = l.insert(c, f));
          }),
          l
        );
      });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MT {
  constructor(t) {
    (this.serializer = t), (this.Tr = new Map()), (this.Ir = new Map());
  }
  getBundleMetadata(t, n) {
    return O.resolve(this.Tr.get(n));
  }
  saveBundleMetadata(t, n) {
    return (
      this.Tr.set(
        n.id,
        (function (s) {
          return { id: s.id, version: s.version, createTime: Sr(s.createTime) };
        })(n)
      ),
      O.resolve()
    );
  }
  getNamedQuery(t, n) {
    return O.resolve(this.Ir.get(n));
  }
  saveNamedQuery(t, n) {
    return (
      this.Ir.set(
        n.name,
        (function (s) {
          return {
            name: s.name,
            query: RT(s.bundledQuery),
            readTime: Sr(s.readTime),
          };
        })(n)
      ),
      O.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LT {
  constructor() {
    (this.overlays = new zt(it.comparator)), (this.Er = new Map());
  }
  getOverlay(t, n) {
    return O.resolve(this.overlays.get(n));
  }
  getOverlays(t, n) {
    const r = Jn();
    return O.forEach(n, (s) =>
      this.getOverlay(t, s).next((i) => {
        i !== null && r.set(s, i);
      })
    ).next(() => r);
  }
  saveOverlays(t, n, r) {
    return (
      r.forEach((s, i) => {
        this.Tt(t, n, i);
      }),
      O.resolve()
    );
  }
  removeOverlaysForBatchId(t, n, r) {
    const s = this.Er.get(r);
    return (
      s !== void 0 &&
        (s.forEach((i) => (this.overlays = this.overlays.remove(i))),
        this.Er.delete(r)),
      O.resolve()
    );
  }
  getOverlaysForCollection(t, n, r) {
    const s = Jn(),
      i = n.length + 1,
      a = new it(n.child("")),
      l = this.overlays.getIteratorFrom(a);
    for (; l.hasNext(); ) {
      const c = l.getNext().value,
        f = c.getKey();
      if (!n.isPrefixOf(f.path)) break;
      f.path.length === i && c.largestBatchId > r && s.set(c.getKey(), c);
    }
    return O.resolve(s);
  }
  getOverlaysForCollectionGroup(t, n, r, s) {
    let i = new zt((f, d) => f - d);
    const a = this.overlays.getIterator();
    for (; a.hasNext(); ) {
      const f = a.getNext().value;
      if (f.getKey().getCollectionGroup() === n && f.largestBatchId > r) {
        let d = i.get(f.largestBatchId);
        d === null && ((d = Jn()), (i = i.insert(f.largestBatchId, d))),
          d.set(f.getKey(), f);
      }
    }
    const l = Jn(),
      c = i.getIterator();
    for (
      ;
      c.hasNext() &&
      (c.getNext().value.forEach((f, d) => l.set(f, d)), !(l.size() >= s));

    );
    return O.resolve(l);
  }
  Tt(t, n, r) {
    const s = this.overlays.get(r.key);
    if (s !== null) {
      const a = this.Er.get(s.largestBatchId).delete(r.key);
      this.Er.set(s.largestBatchId, a);
    }
    this.overlays = this.overlays.insert(r.key, new aT(n, r));
    let i = this.Er.get(n);
    i === void 0 && ((i = Tt()), this.Er.set(n, i)),
      this.Er.set(n, i.add(r.key));
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FT {
  constructor() {
    this.sessionToken = ie.EMPTY_BYTE_STRING;
  }
  getSessionToken(t) {
    return O.resolve(this.sessionToken);
  }
  setSessionToken(t, n) {
    return (this.sessionToken = n), O.resolve();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vl {
  constructor() {
    (this.dr = new Wt(Yt.Ar)), (this.Rr = new Wt(Yt.Vr));
  }
  isEmpty() {
    return this.dr.isEmpty();
  }
  addReference(t, n) {
    const r = new Yt(t, n);
    (this.dr = this.dr.add(r)), (this.Rr = this.Rr.add(r));
  }
  mr(t, n) {
    t.forEach((r) => this.addReference(r, n));
  }
  removeReference(t, n) {
    this.gr(new Yt(t, n));
  }
  pr(t, n) {
    t.forEach((r) => this.removeReference(r, n));
  }
  yr(t) {
    const n = new it(new Bt([])),
      r = new Yt(n, t),
      s = new Yt(n, t + 1),
      i = [];
    return (
      this.Rr.forEachInRange([r, s], (a) => {
        this.gr(a), i.push(a.key);
      }),
      i
    );
  }
  wr() {
    this.dr.forEach((t) => this.gr(t));
  }
  gr(t) {
    (this.dr = this.dr.delete(t)), (this.Rr = this.Rr.delete(t));
  }
  Sr(t) {
    const n = new it(new Bt([])),
      r = new Yt(n, t),
      s = new Yt(n, t + 1);
    let i = Tt();
    return (
      this.Rr.forEachInRange([r, s], (a) => {
        i = i.add(a.key);
      }),
      i
    );
  }
  containsKey(t) {
    const n = new Yt(t, 0),
      r = this.dr.firstAfterOrEqual(n);
    return r !== null && t.isEqual(r.key);
  }
}
class Yt {
  constructor(t, n) {
    (this.key = t), (this.br = n);
  }
  static Ar(t, n) {
    return it.comparator(t.key, n.key) || vt(t.br, n.br);
  }
  static Vr(t, n) {
    return vt(t.br, n.br) || it.comparator(t.key, n.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class BT {
  constructor(t, n) {
    (this.indexManager = t),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.Dr = 1),
      (this.vr = new Wt(Yt.Ar));
  }
  checkEmpty(t) {
    return O.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(t, n, r, s) {
    const i = this.Dr;
    this.Dr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    const a = new oT(i, n, r, s);
    this.mutationQueue.push(a);
    for (const l of s)
      (this.vr = this.vr.add(new Yt(l.key, i))),
        this.indexManager.addToCollectionParentIndex(t, l.key.path.popLast());
    return O.resolve(a);
  }
  lookupMutationBatch(t, n) {
    return O.resolve(this.Cr(n));
  }
  getNextMutationBatchAfterBatchId(t, n) {
    const r = n + 1,
      s = this.Fr(r),
      i = s < 0 ? 0 : s;
    return O.resolve(
      this.mutationQueue.length > i ? this.mutationQueue[i] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return O.resolve(this.mutationQueue.length === 0 ? -1 : this.Dr - 1);
  }
  getAllMutationBatches(t) {
    return O.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t, n) {
    const r = new Yt(n, 0),
      s = new Yt(n, Number.POSITIVE_INFINITY),
      i = [];
    return (
      this.vr.forEachInRange([r, s], (a) => {
        const l = this.Cr(a.br);
        i.push(l);
      }),
      O.resolve(i)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(t, n) {
    let r = new Wt(vt);
    return (
      n.forEach((s) => {
        const i = new Yt(s, 0),
          a = new Yt(s, Number.POSITIVE_INFINITY);
        this.vr.forEachInRange([i, a], (l) => {
          r = r.add(l.br);
        });
      }),
      O.resolve(this.Mr(r))
    );
  }
  getAllMutationBatchesAffectingQuery(t, n) {
    const r = n.path,
      s = r.length + 1;
    let i = r;
    it.isDocumentKey(i) || (i = i.child(""));
    const a = new Yt(new it(i), 0);
    let l = new Wt(vt);
    return (
      this.vr.forEachWhile((c) => {
        const f = c.key.path;
        return !!r.isPrefixOf(f) && (f.length === s && (l = l.add(c.br)), !0);
      }, a),
      O.resolve(this.Mr(l))
    );
  }
  Mr(t) {
    const n = [];
    return (
      t.forEach((r) => {
        const s = this.Cr(r);
        s !== null && n.push(s);
      }),
      n
    );
  }
  removeMutationBatch(t, n) {
    $t(this.Or(n.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.vr;
    return O.forEach(n.mutations, (s) => {
      const i = new Yt(s.key, n.batchId);
      return (
        (r = r.delete(i)),
        this.referenceDelegate.markPotentiallyOrphaned(t, s.key)
      );
    }).next(() => {
      this.vr = r;
    });
  }
  Ln(t) {}
  containsKey(t, n) {
    const r = new Yt(n, 0),
      s = this.vr.firstAfterOrEqual(r);
    return O.resolve(n.isEqual(s && s.key));
  }
  performConsistencyCheck(t) {
    return this.mutationQueue.length, O.resolve();
  }
  Or(t, n) {
    return this.Fr(t);
  }
  Fr(t) {
    return this.mutationQueue.length === 0
      ? 0
      : t - this.mutationQueue[0].batchId;
  }
  Cr(t) {
    const n = this.Fr(t);
    return n < 0 || n >= this.mutationQueue.length
      ? null
      : this.mutationQueue[n];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $T {
  constructor(t) {
    (this.Nr = t),
      (this.docs = (function () {
        return new zt(it.comparator);
      })()),
      (this.size = 0);
  }
  setIndexManager(t) {
    this.indexManager = t;
  }
  addEntry(t, n) {
    const r = n.key,
      s = this.docs.get(r),
      i = s ? s.size : 0,
      a = this.Nr(n);
    return (
      (this.docs = this.docs.insert(r, { document: n.mutableCopy(), size: a })),
      (this.size += a - i),
      this.indexManager.addToCollectionParentIndex(t, r.path.popLast())
    );
  }
  removeEntry(t) {
    const n = this.docs.get(t);
    n && ((this.docs = this.docs.remove(t)), (this.size -= n.size));
  }
  getEntry(t, n) {
    const r = this.docs.get(n);
    return O.resolve(r ? r.document.mutableCopy() : pe.newInvalidDocument(n));
  }
  getEntries(t, n) {
    let r = Ln();
    return (
      n.forEach((s) => {
        const i = this.docs.get(s);
        r = r.insert(
          s,
          i ? i.document.mutableCopy() : pe.newInvalidDocument(s)
        );
      }),
      O.resolve(r)
    );
  }
  getDocumentsMatchingQuery(t, n, r, s) {
    let i = Ln();
    const a = n.path,
      l = new it(a.child("")),
      c = this.docs.getIteratorFrom(l);
    for (; c.hasNext(); ) {
      const {
        key: f,
        value: { document: d },
      } = c.getNext();
      if (!a.isPrefixOf(f.path)) break;
      f.path.length > a.length + 1 ||
        I0(w0(d), r) <= 0 ||
        ((s.has(d.key) || co(n, d)) && (i = i.insert(d.key, d.mutableCopy())));
    }
    return O.resolve(i);
  }
  getAllFromCollectionGroup(t, n, r, s) {
    ft();
  }
  Lr(t, n) {
    return O.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(t) {
    return new UT(this);
  }
  getSize(t) {
    return O.resolve(this.size);
  }
}
class UT extends NT {
  constructor(t) {
    super(), (this.hr = t);
  }
  applyChanges(t) {
    const n = [];
    return (
      this.changes.forEach((r, s) => {
        s.isValidDocument()
          ? n.push(this.hr.addEntry(t, s))
          : this.hr.removeEntry(r);
      }),
      O.waitFor(n)
    );
  }
  getFromCache(t, n) {
    return this.hr.getEntry(t, n);
  }
  getAllFromCache(t, n) {
    return this.hr.getEntries(t, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qT {
  constructor(t) {
    (this.persistence = t),
      (this.Br = new ar((n) => dl(n), pl)),
      (this.lastRemoteSnapshotVersion = ct.min()),
      (this.highestTargetId = 0),
      (this.kr = 0),
      (this.qr = new vl()),
      (this.targetCount = 0),
      (this.Qr = Lr.qn());
  }
  forEachTarget(t, n) {
    return this.Br.forEach((r, s) => n(s)), O.resolve();
  }
  getLastRemoteSnapshotVersion(t) {
    return O.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t) {
    return O.resolve(this.kr);
  }
  allocateTargetId(t) {
    return (
      (this.highestTargetId = this.Qr.next()), O.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(t, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.kr && (this.kr = n),
      O.resolve()
    );
  }
  Un(t) {
    this.Br.set(t.target, t);
    const n = t.targetId;
    n > this.highestTargetId &&
      ((this.Qr = new Lr(n)), (this.highestTargetId = n)),
      t.sequenceNumber > this.kr && (this.kr = t.sequenceNumber);
  }
  addTargetData(t, n) {
    return this.Un(n), (this.targetCount += 1), O.resolve();
  }
  updateTargetData(t, n) {
    return this.Un(n), O.resolve();
  }
  removeTargetData(t, n) {
    return (
      this.Br.delete(n.target),
      this.qr.yr(n.targetId),
      (this.targetCount -= 1),
      O.resolve()
    );
  }
  removeTargets(t, n, r) {
    let s = 0;
    const i = [];
    return (
      this.Br.forEach((a, l) => {
        l.sequenceNumber <= n &&
          r.get(l.targetId) === null &&
          (this.Br.delete(a),
          i.push(this.removeMatchingKeysForTargetId(t, l.targetId)),
          s++);
      }),
      O.waitFor(i).next(() => s)
    );
  }
  getTargetCount(t) {
    return O.resolve(this.targetCount);
  }
  getTargetData(t, n) {
    const r = this.Br.get(n) || null;
    return O.resolve(r);
  }
  addMatchingKeys(t, n, r) {
    return this.qr.mr(n, r), O.resolve();
  }
  removeMatchingKeys(t, n, r) {
    this.qr.pr(n, r);
    const s = this.persistence.referenceDelegate,
      i = [];
    return (
      s &&
        n.forEach((a) => {
          i.push(s.markPotentiallyOrphaned(t, a));
        }),
      O.waitFor(i)
    );
  }
  removeMatchingKeysForTargetId(t, n) {
    return this.qr.yr(n), O.resolve();
  }
  getMatchingKeysForTargetId(t, n) {
    const r = this.qr.Sr(n);
    return O.resolve(r);
  }
  containsKey(t, n) {
    return O.resolve(this.qr.containsKey(n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wd {
  constructor(t, n) {
    (this.Kr = {}),
      (this.overlays = {}),
      (this.$r = new io(0)),
      (this.Ur = !1),
      (this.Ur = !0),
      (this.Wr = new FT()),
      (this.referenceDelegate = t(this)),
      (this.Gr = new qT(this)),
      (this.indexManager = new CT()),
      (this.remoteDocumentCache = (function (s) {
        return new $T(s);
      })((r) => this.referenceDelegate.zr(r))),
      (this.serializer = new bT(n)),
      (this.jr = new MT(this.serializer));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return (this.Ur = !1), Promise.resolve();
  }
  get started() {
    return this.Ur;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(t) {
    return this.indexManager;
  }
  getDocumentOverlayCache(t) {
    let n = this.overlays[t.toKey()];
    return n || ((n = new LT()), (this.overlays[t.toKey()] = n)), n;
  }
  getMutationQueue(t, n) {
    let r = this.Kr[t.toKey()];
    return (
      r || ((r = new BT(n, this.referenceDelegate)), (this.Kr[t.toKey()] = r)),
      r
    );
  }
  getGlobalsCache() {
    return this.Wr;
  }
  getTargetCache() {
    return this.Gr;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.jr;
  }
  runTransaction(t, n, r) {
    X("MemoryPersistence", "Starting transaction:", t);
    const s = new jT(this.$r.next());
    return (
      this.referenceDelegate.Hr(),
      r(s)
        .next((i) => this.referenceDelegate.Jr(s).next(() => i))
        .toPromise()
        .then((i) => (s.raiseOnCommittedEvent(), i))
    );
  }
  Yr(t, n) {
    return O.or(Object.values(this.Kr).map((r) => () => r.containsKey(t, n)));
  }
}
class jT extends b0 {
  constructor(t) {
    super(), (this.currentSequenceNumber = t);
  }
}
class El {
  constructor(t) {
    (this.persistence = t), (this.Zr = new vl()), (this.Xr = null);
  }
  static ei(t) {
    return new El(t);
  }
  get ti() {
    if (this.Xr) return this.Xr;
    throw ft();
  }
  addReference(t, n, r) {
    return (
      this.Zr.addReference(r, n), this.ti.delete(r.toString()), O.resolve()
    );
  }
  removeReference(t, n, r) {
    return (
      this.Zr.removeReference(r, n), this.ti.add(r.toString()), O.resolve()
    );
  }
  markPotentiallyOrphaned(t, n) {
    return this.ti.add(n.toString()), O.resolve();
  }
  removeTarget(t, n) {
    this.Zr.yr(n.targetId).forEach((s) => this.ti.add(s.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(t, n.targetId)
      .next((s) => {
        s.forEach((i) => this.ti.add(i.toString()));
      })
      .next(() => r.removeTargetData(t, n));
  }
  Hr() {
    this.Xr = new Set();
  }
  Jr(t) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return O.forEach(this.ti, (r) => {
      const s = it.fromPath(r);
      return this.ni(t, s).next((i) => {
        i || n.removeEntry(s, ct.min());
      });
    }).next(() => ((this.Xr = null), n.apply(t)));
  }
  updateLimboDocument(t, n) {
    return this.ni(t, n).next((r) => {
      r ? this.ti.delete(n.toString()) : this.ti.add(n.toString());
    });
  }
  zr(t) {
    return 0;
  }
  ni(t, n) {
    return O.or([
      () => O.resolve(this.Zr.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(t, n),
      () => this.persistence.Yr(t, n),
    ]);
  }
}
class Ui {
  constructor(t, n) {
    (this.persistence = t),
      (this.ri = new ar(
        (r) => S0(r.path),
        (r, s) => r.isEqual(s)
      )),
      (this.garbageCollector = xT(this, n));
  }
  static ei(t, n) {
    return new Ui(t, n);
  }
  Hr() {}
  Jr(t) {
    return O.resolve();
  }
  forEachTarget(t, n) {
    return this.persistence.getTargetCache().forEachTarget(t, n);
  }
  Xn(t) {
    const n = this.nr(t);
    return this.persistence
      .getTargetCache()
      .getTargetCount(t)
      .next((r) => n.next((s) => r + s));
  }
  nr(t) {
    let n = 0;
    return this.er(t, (r) => {
      n++;
    }).next(() => n);
  }
  er(t, n) {
    return O.forEach(this.ri, (r, s) =>
      this.ir(t, r, s).next((i) => (i ? O.resolve() : n(s)))
    );
  }
  removeTargets(t, n, r) {
    return this.persistence.getTargetCache().removeTargets(t, n, r);
  }
  removeOrphanedDocuments(t, n) {
    let r = 0;
    const s = this.persistence.getRemoteDocumentCache(),
      i = s.newChangeBuffer();
    return s
      .Lr(t, (a) =>
        this.ir(t, a, n).next((l) => {
          l || (r++, i.removeEntry(a, ct.min()));
        })
      )
      .next(() => i.apply(t))
      .next(() => r);
  }
  markPotentiallyOrphaned(t, n) {
    return this.ri.set(n, t.currentSequenceNumber), O.resolve();
  }
  removeTarget(t, n) {
    const r = n.withSequenceNumber(t.currentSequenceNumber);
    return this.persistence.getTargetCache().updateTargetData(t, r);
  }
  addReference(t, n, r) {
    return this.ri.set(r, t.currentSequenceNumber), O.resolve();
  }
  removeReference(t, n, r) {
    return this.ri.set(r, t.currentSequenceNumber), O.resolve();
  }
  updateLimboDocument(t, n) {
    return this.ri.set(n, t.currentSequenceNumber), O.resolve();
  }
  zr(t) {
    let n = t.key.toString().length;
    return t.isFoundDocument() && (n += wi(t.data.value)), n;
  }
  ir(t, n, r) {
    return O.or([
      () => this.persistence.Yr(t, n),
      () => this.persistence.getTargetCache().containsKey(t, n),
      () => {
        const s = this.ri.get(n);
        return O.resolve(s !== void 0 && s > r);
      },
    ]);
  }
  getCacheSize(t) {
    return this.persistence.getRemoteDocumentCache().getSize(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tl {
  constructor(t, n, r, s) {
    (this.targetId = t), (this.fromCache = n), (this.Wi = r), (this.Gi = s);
  }
  static zi(t, n) {
    let r = Tt(),
      s = Tt();
    for (const i of n.docChanges)
      switch (i.type) {
        case 0:
          r = r.add(i.doc.key);
          break;
        case 1:
          s = s.add(i.doc.key);
      }
    return new Tl(t, n.fromCache, r, s);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zT {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(t) {
    this._documentReadCount += t;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class HT {
  constructor() {
    (this.ji = !1),
      (this.Hi = !1),
      (this.Ji = 100),
      (this.Yi = (function () {
        return Qv() ? 8 : R0(Gv()) > 0 ? 6 : 4;
      })());
  }
  initialize(t, n) {
    (this.Zi = t), (this.indexManager = n), (this.ji = !0);
  }
  getDocumentsMatchingQuery(t, n, r, s) {
    const i = { result: null };
    return this.Xi(t, n)
      .next((a) => {
        i.result = a;
      })
      .next(() => {
        if (!i.result)
          return this.es(t, n, s, r).next((a) => {
            i.result = a;
          });
      })
      .next(() => {
        if (i.result) return;
        const a = new zT();
        return this.ts(t, n, a).next((l) => {
          if (((i.result = l), this.Hi)) return this.ns(t, n, a, l.size);
        });
      })
      .next(() => i.result);
  }
  ns(t, n, r, s) {
    return r.documentReadCount < this.Ji
      ? (yr() <= yt.DEBUG &&
          X(
            "QueryEngine",
            "SDK will not create cache indexes for query:",
            vr(n),
            "since it only creates cache indexes for collection contains",
            "more than or equal to",
            this.Ji,
            "documents"
          ),
        O.resolve())
      : (yr() <= yt.DEBUG &&
          X(
            "QueryEngine",
            "Query:",
            vr(n),
            "scans",
            r.documentReadCount,
            "local documents and returns",
            s,
            "documents as results."
          ),
        r.documentReadCount > this.Yi * s
          ? (yr() <= yt.DEBUG &&
              X(
                "QueryEngine",
                "The SDK decides to create cache indexes for query:",
                vr(n),
                "as using cache indexes may help improve performance."
              ),
            this.indexManager.createTargetIndexes(t, Ze(n)))
          : O.resolve());
  }
  Xi(t, n) {
    if (Ju(n)) return O.resolve(null);
    let r = Ze(n);
    return this.indexManager.getIndexType(t, r).next((s) =>
      s === 0
        ? null
        : (n.limit !== null && s === 1 && ((n = Da(n, null, "F")), (r = Ze(n))),
          this.indexManager.getDocumentsMatchingTarget(t, r).next((i) => {
            const a = Tt(...i);
            return this.Zi.getDocuments(t, a).next((l) =>
              this.indexManager.getMinOffset(t, r).next((c) => {
                const f = this.rs(n, l);
                return this.ss(n, f, a, c.readTime)
                  ? this.Xi(t, Da(n, null, "F"))
                  : this.os(t, f, n, c);
              })
            );
          }))
    );
  }
  es(t, n, r, s) {
    return Ju(n) || s.isEqual(ct.min())
      ? O.resolve(null)
      : this.Zi.getDocuments(t, r).next((i) => {
          const a = this.rs(n, i);
          return this.ss(n, a, r, s)
            ? O.resolve(null)
            : (yr() <= yt.DEBUG &&
                X(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  s.toString(),
                  vr(n)
                ),
              this.os(t, a, n, T0(s, -1)).next((l) => l));
        });
  }
  rs(t, n) {
    let r = new Wt(Sd(t));
    return (
      n.forEach((s, i) => {
        co(t, i) && (r = r.add(i));
      }),
      r
    );
  }
  ss(t, n, r, s) {
    if (t.limit === null) return !1;
    if (r.size !== n.size) return !0;
    const i = t.limitType === "F" ? n.last() : n.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(s) > 0);
  }
  ts(t, n, r) {
    return (
      yr() <= yt.DEBUG &&
        X("QueryEngine", "Using full collection scan to execute query:", vr(n)),
      this.Zi.getDocumentsMatchingQuery(t, n, Nn.min(), r)
    );
  }
  os(t, n, r, s) {
    return this.Zi.getDocumentsMatchingQuery(t, r, s).next(
      (i) => (
        n.forEach((a) => {
          i = i.insert(a.key, a);
        }),
        i
      )
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class KT {
  constructor(t, n, r, s) {
    (this.persistence = t),
      (this._s = n),
      (this.serializer = s),
      (this.us = new zt(vt)),
      (this.cs = new ar((i) => dl(i), pl)),
      (this.ls = new Map()),
      (this.hs = t.getRemoteDocumentCache()),
      (this.Gr = t.getTargetCache()),
      (this.jr = t.getBundleCache()),
      this.Ps(r);
  }
  Ps(t) {
    (this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t)),
      (this.indexManager = this.persistence.getIndexManager(t)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        t,
        this.indexManager
      )),
      (this.localDocuments = new kT(
        this.hs,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.hs.setIndexManager(this.indexManager),
      this._s.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(t) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (n) => t.collect(n, this.us)
    );
  }
}
function GT(e, t, n, r) {
  return new KT(e, t, n, r);
}
async function Qd(e, t) {
  const n = Et(e);
  return await n.persistence.runTransaction(
    "Handle user change",
    "readonly",
    (r) => {
      let s;
      return n.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (i) => ((s = i), n.Ps(t), n.mutationQueue.getAllMutationBatches(r))
        )
        .next((i) => {
          const a = [],
            l = [];
          let c = Tt();
          for (const f of s) {
            a.push(f.batchId);
            for (const d of f.mutations) c = c.add(d.key);
          }
          for (const f of i) {
            l.push(f.batchId);
            for (const d of f.mutations) c = c.add(d.key);
          }
          return n.localDocuments
            .getDocuments(r, c)
            .next((f) => ({ Ts: f, removedBatchIds: a, addedBatchIds: l }));
        });
    }
  );
}
function Yd(e) {
  const t = Et(e);
  return t.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (n) => t.Gr.getLastRemoteSnapshotVersion(n)
  );
}
function WT(e, t) {
  const n = Et(e),
    r = t.snapshotVersion;
  let s = n.us;
  return n.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (i) => {
      const a = n.hs.newChangeBuffer({ trackRemovals: !0 });
      s = n.us;
      const l = [];
      t.targetChanges.forEach((d, p) => {
        const m = s.get(p);
        if (!m) return;
        l.push(
          n.Gr.removeMatchingKeys(i, d.removedDocuments, p).next(() =>
            n.Gr.addMatchingKeys(i, d.addedDocuments, p)
          )
        );
        let T = m.withSequenceNumber(i.currentSequenceNumber);
        t.targetMismatches.get(p) !== null
          ? (T = T.withResumeToken(
              ie.EMPTY_BYTE_STRING,
              ct.min()
            ).withLastLimboFreeSnapshotVersion(ct.min()))
          : d.resumeToken.approximateByteSize() > 0 &&
            (T = T.withResumeToken(d.resumeToken, r)),
          (s = s.insert(p, T)),
          (function (N, k, K) {
            return N.resumeToken.approximateByteSize() === 0 ||
              k.snapshotVersion.toMicroseconds() -
                N.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : K.addedDocuments.size +
                  K.modifiedDocuments.size +
                  K.removedDocuments.size >
                  0;
          })(m, T, d) && l.push(n.Gr.updateTargetData(i, T));
      });
      let c = Ln(),
        f = Tt();
      if (
        (t.documentUpdates.forEach((d) => {
          t.resolvedLimboDocuments.has(d) &&
            l.push(n.persistence.referenceDelegate.updateLimboDocument(i, d));
        }),
        l.push(
          QT(i, a, t.documentUpdates).next((d) => {
            (c = d.Is), (f = d.Es);
          })
        ),
        !r.isEqual(ct.min()))
      ) {
        const d = n.Gr.getLastRemoteSnapshotVersion(i).next((p) =>
          n.Gr.setTargetsMetadata(i, i.currentSequenceNumber, r)
        );
        l.push(d);
      }
      return O.waitFor(l)
        .next(() => a.apply(i))
        .next(() => n.localDocuments.getLocalViewOfDocuments(i, c, f))
        .next(() => c);
    })
    .then((i) => ((n.us = s), i));
}
function QT(e, t, n) {
  let r = Tt(),
    s = Tt();
  return (
    n.forEach((i) => (r = r.add(i))),
    t.getEntries(e, r).next((i) => {
      let a = Ln();
      return (
        n.forEach((l, c) => {
          const f = i.get(l);
          c.isFoundDocument() !== f.isFoundDocument() && (s = s.add(l)),
            c.isNoDocument() && c.version.isEqual(ct.min())
              ? (t.removeEntry(l, c.readTime), (a = a.insert(l, c)))
              : !f.isValidDocument() ||
                c.version.compareTo(f.version) > 0 ||
                (c.version.compareTo(f.version) === 0 && f.hasPendingWrites)
              ? (t.addEntry(c), (a = a.insert(l, c)))
              : X(
                  "LocalStore",
                  "Ignoring outdated watch update for ",
                  l,
                  ". Current version:",
                  f.version,
                  " Watch version:",
                  c.version
                );
        }),
        { Is: a, Es: s }
      );
    })
  );
}
function YT(e, t) {
  const n = Et(e);
  return n.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let s;
      return n.Gr.getTargetData(r, t).next((i) =>
        i
          ? ((s = i), O.resolve(s))
          : n.Gr.allocateTargetId(r).next(
              (a) => (
                (s = new Sn(
                  t,
                  a,
                  "TargetPurposeListen",
                  r.currentSequenceNumber
                )),
                n.Gr.addTargetData(r, s).next(() => s)
              )
            )
      );
    })
    .then((r) => {
      const s = n.us.get(r.targetId);
      return (
        (s === null || r.snapshotVersion.compareTo(s.snapshotVersion) > 0) &&
          ((n.us = n.us.insert(r.targetId, r)), n.cs.set(t, r.targetId)),
        r
      );
    });
}
async function La(e, t, n) {
  const r = Et(e),
    s = r.us.get(t),
    i = n ? "readwrite" : "readwrite-primary";
  try {
    n ||
      (await r.persistence.runTransaction("Release target", i, (a) =>
        r.persistence.referenceDelegate.removeTarget(a, s)
      ));
  } catch (a) {
    if (!jr(a)) throw a;
    X("LocalStore", `Failed to update sequence numbers for target ${t}: ${a}`);
  }
  (r.us = r.us.remove(t)), r.cs.delete(s.target);
}
function uh(e, t, n) {
  const r = Et(e);
  let s = ct.min(),
    i = Tt();
  return r.persistence.runTransaction("Execute query", "readwrite", (a) =>
    (function (c, f, d) {
      const p = Et(c),
        m = p.cs.get(d);
      return m !== void 0 ? O.resolve(p.us.get(m)) : p.Gr.getTargetData(f, d);
    })(r, a, Ze(t))
      .next((l) => {
        if (l)
          return (
            (s = l.lastLimboFreeSnapshotVersion),
            r.Gr.getMatchingKeysForTargetId(a, l.targetId).next((c) => {
              i = c;
            })
          );
      })
      .next(() =>
        r._s.getDocumentsMatchingQuery(a, t, n ? s : ct.min(), n ? i : Tt())
      )
      .next((l) => (XT(r, K0(t), l), { documents: l, ds: i }))
  );
}
function XT(e, t, n) {
  let r = e.ls.get(t) || ct.min();
  n.forEach((s, i) => {
    i.readTime.compareTo(r) > 0 && (r = i.readTime);
  }),
    e.ls.set(t, r);
}
class hh {
  constructor() {
    this.activeTargetIds = J0();
  }
  ps(t) {
    this.activeTargetIds = this.activeTargetIds.add(t);
  }
  ys(t) {
    this.activeTargetIds = this.activeTargetIds.delete(t);
  }
  gs() {
    const t = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(t);
  }
}
class JT {
  constructor() {
    (this._o = new hh()),
      (this.ao = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null);
  }
  addPendingMutation(t) {}
  updateMutationState(t, n, r) {}
  addLocalQueryTarget(t, n = !0) {
    return n && this._o.ps(t), this.ao[t] || "not-current";
  }
  updateQueryState(t, n, r) {
    this.ao[t] = n;
  }
  removeLocalQueryTarget(t) {
    this._o.ys(t);
  }
  isLocalQueryTarget(t) {
    return this._o.activeTargetIds.has(t);
  }
  clearQueryState(t) {
    delete this.ao[t];
  }
  getAllActiveQueryTargets() {
    return this._o.activeTargetIds;
  }
  isActiveQueryTarget(t) {
    return this._o.activeTargetIds.has(t);
  }
  start() {
    return (this._o = new hh()), Promise.resolve();
  }
  handleUserChange(t, n, r) {}
  setOnlineState(t) {}
  shutdown() {}
  writeSequenceNumber(t) {}
  notifyBundleLoaded(t) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ZT {
  uo(t) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fh {
  constructor() {
    (this.co = () => this.lo()),
      (this.ho = () => this.Po()),
      (this.To = []),
      this.Io();
  }
  uo(t) {
    this.To.push(t);
  }
  shutdown() {
    window.removeEventListener("online", this.co),
      window.removeEventListener("offline", this.ho);
  }
  Io() {
    window.addEventListener("online", this.co),
      window.addEventListener("offline", this.ho);
  }
  lo() {
    X("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const t of this.To) t(0);
  }
  Po() {
    X("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const t of this.To) t(1);
  }
  static p() {
    return (
      typeof window < "u" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let gi = null;
function Zo() {
  return (
    gi === null
      ? (gi = (function () {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : gi++,
    "0x" + gi.toString(16)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tw = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery",
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ew {
  constructor(t) {
    (this.Eo = t.Eo), (this.Ao = t.Ao);
  }
  Ro(t) {
    this.Vo = t;
  }
  mo(t) {
    this.fo = t;
  }
  po(t) {
    this.yo = t;
  }
  onMessage(t) {
    this.wo = t;
  }
  close() {
    this.Ao();
  }
  send(t) {
    this.Eo(t);
  }
  So() {
    this.Vo();
  }
  bo() {
    this.fo();
  }
  Do(t) {
    this.yo(t);
  }
  vo(t) {
    this.wo(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ue = "WebChannelConnection";
class nw extends class {
  get Co() {
    return !1;
  }
  constructor(n) {
    (this.databaseInfo = n), (this.databaseId = n.databaseId);
    const r = n.ssl ? "https" : "http",
      s = encodeURIComponent(this.databaseId.projectId),
      i = encodeURIComponent(this.databaseId.database);
    (this.Fo = r + "://" + n.host),
      (this.Mo = `projects/${s}/databases/${i}`),
      (this.xo =
        this.databaseId.database === "(default)"
          ? `project_id=${s}`
          : `project_id=${s}&database_id=${i}`);
  }
  Oo(n, r, s, i, a) {
    const l = Zo(),
      c = this.No(n, r.toUriEncodedString());
    X("RestConnection", `Sending RPC '${n}' ${l}:`, c, s);
    const f = {
      "google-cloud-resource-prefix": this.Mo,
      "x-goog-request-params": this.xo,
    };
    return (
      this.Lo(f, i, a),
      this.Bo(n, c, f, s).then(
        (d) => (X("RestConnection", `Received RPC '${n}' ${l}: `, d), d),
        (d) => {
          throw (
            (Nr(
              "RestConnection",
              `RPC '${n}' ${l} failed with error: `,
              d,
              "url: ",
              c,
              "request:",
              s
            ),
            d)
          );
        }
      )
    );
  }
  ko(n, r, s, i, a, l) {
    return this.Oo(n, r, s, i, a);
  }
  Lo(n, r, s) {
    (n["X-Goog-Api-Client"] = (function () {
      return "gl-js/ fire/" + qr;
    })()),
      (n["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (n["X-Firebase-GMPID"] = this.databaseInfo.appId),
      r && r.headers.forEach((i, a) => (n[a] = i)),
      s && s.headers.forEach((i, a) => (n[a] = i));
  }
  No(n, r) {
    const s = tw[n];
    return `${this.Fo}/v1/${r}:${s}`;
  }
  terminate() {}
} {
  constructor(t) {
    super(t),
      (this.forceLongPolling = t.forceLongPolling),
      (this.autoDetectLongPolling = t.autoDetectLongPolling),
      (this.useFetchStreams = t.useFetchStreams),
      (this.longPollingOptions = t.longPollingOptions);
  }
  Bo(t, n, r, s) {
    const i = Zo();
    return new Promise((a, l) => {
      const c = new hd();
      c.setWithCredentials(!0),
        c.listenOnce(fd.COMPLETE, () => {
          try {
            switch (c.getLastErrorCode()) {
              case Ti.NO_ERROR:
                const d = c.getResponseJson();
                X(ue, `XHR for RPC '${t}' ${i} received:`, JSON.stringify(d)),
                  a(d);
                break;
              case Ti.TIMEOUT:
                X(ue, `RPC '${t}' ${i} timed out`),
                  l(new et(B.DEADLINE_EXCEEDED, "Request time out"));
                break;
              case Ti.HTTP_ERROR:
                const p = c.getStatus();
                if (
                  (X(
                    ue,
                    `RPC '${t}' ${i} failed with status:`,
                    p,
                    "response text:",
                    c.getResponseText()
                  ),
                  p > 0)
                ) {
                  let m = c.getResponseJson();
                  Array.isArray(m) && (m = m[0]);
                  const T = m == null ? void 0 : m.error;
                  if (T && T.status && T.message) {
                    const V = (function (k) {
                      const K = k.toLowerCase().replace(/_/g, "-");
                      return Object.values(B).indexOf(K) >= 0 ? K : B.UNKNOWN;
                    })(T.status);
                    l(new et(V, T.message));
                  } else
                    l(
                      new et(
                        B.UNKNOWN,
                        "Server responded with status " + c.getStatus()
                      )
                    );
                } else l(new et(B.UNAVAILABLE, "Connection failed."));
                break;
              default:
                ft();
            }
          } finally {
            X(ue, `RPC '${t}' ${i} completed.`);
          }
        });
      const f = JSON.stringify(s);
      X(ue, `RPC '${t}' ${i} sending request:`, s), c.send(n, "POST", f, r, 15);
    });
  }
  qo(t, n, r) {
    const s = Zo(),
      i = [this.Fo, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
      a = gd(),
      l = pd(),
      c = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      f = this.longPollingOptions.timeoutSeconds;
    f !== void 0 && (c.longPollingTimeout = Math.round(1e3 * f)),
      this.useFetchStreams && (c.useFetchStreams = !0),
      this.Lo(c.initMessageHeaders, n, r),
      (c.encodeInitMessageHeaders = !0);
    const d = i.join("");
    X(ue, `Creating RPC '${t}' stream ${s}: ${d}`, c);
    const p = a.createWebChannel(d, c);
    let m = !1,
      T = !1;
    const V = new ew({
        Eo: (k) => {
          T
            ? X(ue, `Not sending because RPC '${t}' stream ${s} is closed:`, k)
            : (m ||
                (X(ue, `Opening RPC '${t}' stream ${s} transport.`),
                p.open(),
                (m = !0)),
              X(ue, `RPC '${t}' stream ${s} sending:`, k),
              p.send(k));
        },
        Ao: () => p.close(),
      }),
      N = (k, K, U) => {
        k.listen(K, (H) => {
          try {
            U(H);
          } catch (j) {
            setTimeout(() => {
              throw j;
            }, 0);
          }
        });
      };
    return (
      N(p, cs.EventType.OPEN, () => {
        T || (X(ue, `RPC '${t}' stream ${s} transport opened.`), V.So());
      }),
      N(p, cs.EventType.CLOSE, () => {
        T ||
          ((T = !0), X(ue, `RPC '${t}' stream ${s} transport closed`), V.Do());
      }),
      N(p, cs.EventType.ERROR, (k) => {
        T ||
          ((T = !0),
          Nr(ue, `RPC '${t}' stream ${s} transport errored:`, k),
          V.Do(new et(B.UNAVAILABLE, "The operation could not be completed")));
      }),
      N(p, cs.EventType.MESSAGE, (k) => {
        var K;
        if (!T) {
          const U = k.data[0];
          $t(!!U);
          const H = U,
            j =
              (H == null ? void 0 : H.error) ||
              ((K = H[0]) === null || K === void 0 ? void 0 : K.error);
          if (j) {
            X(ue, `RPC '${t}' stream ${s} received error:`, j);
            const lt = j.status;
            let at = (function (y) {
                const A = Ht[y];
                if (A !== void 0) return Ld(A);
              })(lt),
              R = j.message;
            at === void 0 &&
              ((at = B.INTERNAL),
              (R =
                "Unknown error status: " + lt + " with message " + j.message)),
              (T = !0),
              V.Do(new et(at, R)),
              p.close();
          } else X(ue, `RPC '${t}' stream ${s} received:`, U), V.vo(U);
        }
      }),
      N(l, dd.STAT_EVENT, (k) => {
        k.stat === ba.PROXY
          ? X(ue, `RPC '${t}' stream ${s} detected buffering proxy`)
          : k.stat === ba.NOPROXY &&
            X(ue, `RPC '${t}' stream ${s} detected no buffering proxy`);
      }),
      setTimeout(() => {
        V.bo();
      }, 0),
      V
    );
  }
}
function ta() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function po(e) {
  return new gT(e, !0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xd {
  constructor(t, n, r = 1e3, s = 1.5, i = 6e4) {
    (this.li = t),
      (this.timerId = n),
      (this.Qo = r),
      (this.Ko = s),
      (this.$o = i),
      (this.Uo = 0),
      (this.Wo = null),
      (this.Go = Date.now()),
      this.reset();
  }
  reset() {
    this.Uo = 0;
  }
  zo() {
    this.Uo = this.$o;
  }
  jo(t) {
    this.cancel();
    const n = Math.floor(this.Uo + this.Ho()),
      r = Math.max(0, Date.now() - this.Go),
      s = Math.max(0, n - r);
    s > 0 &&
      X(
        "ExponentialBackoff",
        `Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`
      ),
      (this.Wo = this.li.enqueueAfterDelay(
        this.timerId,
        s,
        () => ((this.Go = Date.now()), t())
      )),
      (this.Uo *= this.Ko),
      this.Uo < this.Qo && (this.Uo = this.Qo),
      this.Uo > this.$o && (this.Uo = this.$o);
  }
  Jo() {
    this.Wo !== null && (this.Wo.skipDelay(), (this.Wo = null));
  }
  cancel() {
    this.Wo !== null && (this.Wo.cancel(), (this.Wo = null));
  }
  Ho() {
    return (Math.random() - 0.5) * this.Uo;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rw {
  constructor(t, n, r, s, i, a, l, c) {
    (this.li = t),
      (this.Yo = r),
      (this.Zo = s),
      (this.connection = i),
      (this.authCredentialsProvider = a),
      (this.appCheckCredentialsProvider = l),
      (this.listener = c),
      (this.state = 0),
      (this.Xo = 0),
      (this.e_ = null),
      (this.t_ = null),
      (this.stream = null),
      (this.n_ = 0),
      (this.r_ = new Xd(t, n));
  }
  i_() {
    return this.state === 1 || this.state === 5 || this.s_();
  }
  s_() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    (this.n_ = 0), this.state !== 4 ? this.auth() : this.o_();
  }
  async stop() {
    this.i_() && (await this.close(0));
  }
  __() {
    (this.state = 0), this.r_.reset();
  }
  a_() {
    this.s_() &&
      this.e_ === null &&
      (this.e_ = this.li.enqueueAfterDelay(this.Yo, 6e4, () => this.u_()));
  }
  c_(t) {
    this.l_(), this.stream.send(t);
  }
  async u_() {
    if (this.s_()) return this.close(0);
  }
  l_() {
    this.e_ && (this.e_.cancel(), (this.e_ = null));
  }
  h_() {
    this.t_ && (this.t_.cancel(), (this.t_ = null));
  }
  async close(t, n) {
    this.l_(),
      this.h_(),
      this.r_.cancel(),
      this.Xo++,
      t !== 4
        ? this.r_.reset()
        : n && n.code === B.RESOURCE_EXHAUSTED
        ? (un(n.toString()),
          un("Using maximum backoff delay to prevent overloading the backend."),
          this.r_.zo())
        : n &&
          n.code === B.UNAUTHENTICATED &&
          this.state !== 3 &&
          (this.authCredentialsProvider.invalidateToken(),
          this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.P_(), this.stream.close(), (this.stream = null)),
      (this.state = t),
      await this.listener.po(n);
  }
  P_() {}
  auth() {
    this.state = 1;
    const t = this.T_(this.Xo),
      n = this.Xo;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, s]) => {
        this.Xo === n && this.I_(r, s);
      },
      (r) => {
        t(() => {
          const s = new et(
            B.UNKNOWN,
            "Fetching auth token failed: " + r.message
          );
          return this.E_(s);
        });
      }
    );
  }
  I_(t, n) {
    const r = this.T_(this.Xo);
    (this.stream = this.d_(t, n)),
      this.stream.Ro(() => {
        r(() => this.listener.Ro());
      }),
      this.stream.mo(() => {
        r(
          () => (
            (this.state = 2),
            (this.t_ = this.li.enqueueAfterDelay(
              this.Zo,
              1e4,
              () => (this.s_() && (this.state = 3), Promise.resolve())
            )),
            this.listener.mo()
          )
        );
      }),
      this.stream.po((s) => {
        r(() => this.E_(s));
      }),
      this.stream.onMessage((s) => {
        r(() => (++this.n_ == 1 ? this.A_(s) : this.onNext(s)));
      });
  }
  o_() {
    (this.state = 5),
      this.r_.jo(async () => {
        (this.state = 0), this.start();
      });
  }
  E_(t) {
    return (
      X("PersistentStream", `close with error: ${t}`),
      (this.stream = null),
      this.close(4, t)
    );
  }
  T_(t) {
    return (n) => {
      this.li.enqueueAndForget(() =>
        this.Xo === t
          ? n()
          : (X(
              "PersistentStream",
              "stream callback skipped by getCloseGuardedDispatcher."
            ),
            Promise.resolve())
      );
    };
  }
}
class sw extends rw {
  constructor(t, n, r, s, i, a) {
    super(
      t,
      "listen_stream_connection_backoff",
      "listen_stream_idle",
      "health_check_timeout",
      n,
      r,
      s,
      a
    ),
      (this.serializer = i);
  }
  d_(t, n) {
    return this.connection.qo("Listen", t, n);
  }
  A_(t) {
    return this.onNext(t);
  }
  onNext(t) {
    this.r_.reset();
    const n = _T(this.serializer, t),
      r = (function (i) {
        if (!("targetChange" in i)) return ct.min();
        const a = i.targetChange;
        return a.targetIds && a.targetIds.length
          ? ct.min()
          : a.readTime
          ? Sr(a.readTime)
          : ct.min();
      })(t);
    return this.listener.R_(n, r);
  }
  V_(t) {
    const n = {};
    (n.database = ah(this.serializer)),
      (n.addTarget = (function (i, a) {
        let l;
        const c = a.target;
        if (
          ((l = Pa(c) ? { documents: yT(i, c) } : { query: vT(i, c).ct }),
          (l.targetId = a.targetId),
          a.resumeToken.approximateByteSize() > 0)
        ) {
          l.resumeToken = $d(i, a.resumeToken);
          const f = Oa(i, a.expectedCount);
          f !== null && (l.expectedCount = f);
        } else if (a.snapshotVersion.compareTo(ct.min()) > 0) {
          l.readTime = ka(i, a.snapshotVersion.toTimestamp());
          const f = Oa(i, a.expectedCount);
          f !== null && (l.expectedCount = f);
        }
        return l;
      })(this.serializer, t));
    const r = TT(this.serializer, t);
    r && (n.labels = r), this.c_(n);
  }
  m_(t) {
    const n = {};
    (n.database = ah(this.serializer)), (n.removeTarget = t), this.c_(n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iw extends class {} {
  constructor(t, n, r, s) {
    super(),
      (this.authCredentials = t),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.serializer = s),
      (this.S_ = !1);
  }
  b_() {
    if (this.S_)
      throw new et(
        B.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  Oo(t, n, r, s) {
    return (
      this.b_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([i, a]) => this.connection.Oo(t, Ma(n, r), s, i, a))
        .catch((i) => {
          throw i.name === "FirebaseError"
            ? (i.code === B.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              i)
            : new et(B.UNKNOWN, i.toString());
        })
    );
  }
  ko(t, n, r, s, i) {
    return (
      this.b_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([a, l]) => this.connection.ko(t, Ma(n, r), s, a, l, i))
        .catch((a) => {
          throw a.name === "FirebaseError"
            ? (a.code === B.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              a)
            : new et(B.UNKNOWN, a.toString());
        })
    );
  }
  terminate() {
    (this.S_ = !0), this.connection.terminate();
  }
}
class ow {
  constructor(t, n) {
    (this.asyncQueue = t),
      (this.onlineStateHandler = n),
      (this.state = "Unknown"),
      (this.D_ = 0),
      (this.v_ = null),
      (this.C_ = !0);
  }
  F_() {
    this.D_ === 0 &&
      (this.M_("Unknown"),
      (this.v_ = this.asyncQueue.enqueueAfterDelay(
        "online_state_timeout",
        1e4,
        () => (
          (this.v_ = null),
          this.x_("Backend didn't respond within 10 seconds."),
          this.M_("Offline"),
          Promise.resolve()
        )
      )));
  }
  O_(t) {
    this.state === "Online"
      ? this.M_("Unknown")
      : (this.D_++,
        this.D_ >= 1 &&
          (this.N_(),
          this.x_(
            `Connection failed 1 times. Most recent error: ${t.toString()}`
          ),
          this.M_("Offline")));
  }
  set(t) {
    this.N_(), (this.D_ = 0), t === "Online" && (this.C_ = !1), this.M_(t);
  }
  M_(t) {
    t !== this.state && ((this.state = t), this.onlineStateHandler(t));
  }
  x_(t) {
    const n = `Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.C_ ? (un(n), (this.C_ = !1)) : X("OnlineStateTracker", n);
  }
  N_() {
    this.v_ !== null && (this.v_.cancel(), (this.v_ = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aw {
  constructor(t, n, r, s, i) {
    (this.localStore = t),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.L_ = []),
      (this.B_ = new Map()),
      (this.k_ = new Set()),
      (this.q_ = []),
      (this.Q_ = i),
      this.Q_.uo((a) => {
        r.enqueueAndForget(async () => {
          Hs(this) &&
            (X(
              "RemoteStore",
              "Restarting streams for network reachability change."
            ),
            await (async function (c) {
              const f = Et(c);
              f.k_.add(4),
                await zs(f),
                f.K_.set("Unknown"),
                f.k_.delete(4),
                await go(f);
            })(this));
        });
      }),
      (this.K_ = new ow(r, s));
  }
}
async function go(e) {
  if (Hs(e)) for (const t of e.q_) await t(!0);
}
async function zs(e) {
  for (const t of e.q_) await t(!1);
}
function Jd(e, t) {
  const n = Et(e);
  n.B_.has(t.targetId) ||
    (n.B_.set(t.targetId, t), bl(n) ? Al(n) : Hr(n).s_() && Il(n, t));
}
function wl(e, t) {
  const n = Et(e),
    r = Hr(n);
  n.B_.delete(t),
    r.s_() && Zd(n, t),
    n.B_.size === 0 && (r.s_() ? r.a_() : Hs(n) && n.K_.set("Unknown"));
}
function Il(e, t) {
  if (
    (e.U_.xe(t.targetId),
    t.resumeToken.approximateByteSize() > 0 ||
      t.snapshotVersion.compareTo(ct.min()) > 0)
  ) {
    const n = e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
    t = t.withExpectedCount(n);
  }
  Hr(e).V_(t);
}
function Zd(e, t) {
  e.U_.xe(t), Hr(e).m_(t);
}
function Al(e) {
  (e.U_ = new hT({
    getRemoteKeysForTarget: (t) => e.remoteSyncer.getRemoteKeysForTarget(t),
    ut: (t) => e.B_.get(t) || null,
    nt: () => e.datastore.serializer.databaseId,
  })),
    Hr(e).start(),
    e.K_.F_();
}
function bl(e) {
  return Hs(e) && !Hr(e).i_() && e.B_.size > 0;
}
function Hs(e) {
  return Et(e).k_.size === 0;
}
function tp(e) {
  e.U_ = void 0;
}
async function lw(e) {
  e.K_.set("Online");
}
async function cw(e) {
  e.B_.forEach((t, n) => {
    Il(e, t);
  });
}
async function uw(e, t) {
  tp(e), bl(e) ? (e.K_.O_(t), Al(e)) : e.K_.set("Unknown");
}
async function hw(e, t, n) {
  if ((e.K_.set("Online"), t instanceof Bd && t.state === 2 && t.cause))
    try {
      await (async function (s, i) {
        const a = i.cause;
        for (const l of i.targetIds)
          s.B_.has(l) &&
            (await s.remoteSyncer.rejectListen(l, a),
            s.B_.delete(l),
            s.U_.removeTarget(l));
      })(e, t);
    } catch (r) {
      X(
        "RemoteStore",
        "Failed to remove targets %s: %s ",
        t.targetIds.join(","),
        r
      ),
        await dh(e, r);
    }
  else if (
    (t instanceof Ai ? e.U_.$e(t) : t instanceof Fd ? e.U_.Je(t) : e.U_.Ge(t),
    !n.isEqual(ct.min()))
  )
    try {
      const r = await Yd(e.localStore);
      n.compareTo(r) >= 0 &&
        (await (function (i, a) {
          const l = i.U_.it(a);
          return (
            l.targetChanges.forEach((c, f) => {
              if (c.resumeToken.approximateByteSize() > 0) {
                const d = i.B_.get(f);
                d && i.B_.set(f, d.withResumeToken(c.resumeToken, a));
              }
            }),
            l.targetMismatches.forEach((c, f) => {
              const d = i.B_.get(c);
              if (!d) return;
              i.B_.set(
                c,
                d.withResumeToken(ie.EMPTY_BYTE_STRING, d.snapshotVersion)
              ),
                Zd(i, c);
              const p = new Sn(d.target, c, f, d.sequenceNumber);
              Il(i, p);
            }),
            i.remoteSyncer.applyRemoteEvent(l)
          );
        })(e, n));
    } catch (r) {
      X("RemoteStore", "Failed to raise snapshot:", r), await dh(e, r);
    }
}
async function dh(e, t, n) {
  if (!jr(t)) throw t;
  e.k_.add(1),
    await zs(e),
    e.K_.set("Offline"),
    n || (n = () => Yd(e.localStore)),
    e.asyncQueue.enqueueRetryable(async () => {
      X("RemoteStore", "Retrying IndexedDB access"),
        await n(),
        e.k_.delete(1),
        await go(e);
    });
}
async function ph(e, t) {
  const n = Et(e);
  n.asyncQueue.verifyOperationInProgress(),
    X("RemoteStore", "RemoteStore received new credentials");
  const r = Hs(n);
  n.k_.add(3),
    await zs(n),
    r && n.K_.set("Unknown"),
    await n.remoteSyncer.handleCredentialChange(t),
    n.k_.delete(3),
    await go(n);
}
async function fw(e, t) {
  const n = Et(e);
  t
    ? (n.k_.delete(2), await go(n))
    : t || (n.k_.add(2), await zs(n), n.K_.set("Unknown"));
}
function Hr(e) {
  return (
    e.W_ ||
      ((e.W_ = (function (n, r, s) {
        const i = Et(n);
        return (
          i.b_(),
          new sw(
            r,
            i.connection,
            i.authCredentials,
            i.appCheckCredentials,
            i.serializer,
            s
          )
        );
      })(e.datastore, e.asyncQueue, {
        Ro: lw.bind(null, e),
        mo: cw.bind(null, e),
        po: uw.bind(null, e),
        R_: hw.bind(null, e),
      })),
      e.q_.push(async (t) => {
        t
          ? (e.W_.__(), bl(e) ? Al(e) : e.K_.set("Unknown"))
          : (await e.W_.stop(), tp(e));
      })),
    e.W_
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rl {
  constructor(t, n, r, s, i) {
    (this.asyncQueue = t),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = s),
      (this.removalCallback = i),
      (this.deferred = new er()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((a) => {});
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(t, n, r, s, i) {
    const a = Date.now() + r,
      l = new Rl(t, n, a, s, i);
    return l.start(r), l;
  }
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new et(B.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function ep(e, t) {
  if ((un("AsyncQueue", `${t}: ${e}`), jr(e)))
    return new et(B.UNAVAILABLE, `${t}: ${e}`);
  throw e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pr {
  static emptySet(t) {
    return new Pr(t.comparator);
  }
  constructor(t) {
    (this.comparator = t
      ? (n, r) => t(n, r) || it.comparator(n.key, r.key)
      : (n, r) => it.comparator(n.key, r.key)),
      (this.keyedMap = us()),
      (this.sortedSet = new zt(this.comparator));
  }
  has(t) {
    return this.keyedMap.get(t) != null;
  }
  get(t) {
    return this.keyedMap.get(t);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(t) {
    const n = this.keyedMap.get(t);
    return n ? this.sortedSet.indexOf(n) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(t) {
    this.sortedSet.inorderTraversal((n, r) => (t(n), !1));
  }
  add(t) {
    const n = this.delete(t.key);
    return n.copy(n.keyedMap.insert(t.key, t), n.sortedSet.insert(t, null));
  }
  delete(t) {
    const n = this.get(t);
    return n
      ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(n))
      : this;
  }
  isEqual(t) {
    if (!(t instanceof Pr) || this.size !== t.size) return !1;
    const n = this.sortedSet.getIterator(),
      r = t.sortedSet.getIterator();
    for (; n.hasNext(); ) {
      const s = n.getNext().key,
        i = r.getNext().key;
      if (!s.isEqual(i)) return !1;
    }
    return !0;
  }
  toString() {
    const t = [];
    return (
      this.forEach((n) => {
        t.push(n.toString());
      }),
      t.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          t.join(`  
`) +
          `
)`
    );
  }
  copy(t, n) {
    const r = new Pr();
    return (
      (r.comparator = this.comparator), (r.keyedMap = t), (r.sortedSet = n), r
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gh {
  constructor() {
    this.z_ = new zt(it.comparator);
  }
  track(t) {
    const n = t.doc.key,
      r = this.z_.get(n);
    r
      ? t.type !== 0 && r.type === 3
        ? (this.z_ = this.z_.insert(n, t))
        : t.type === 3 && r.type !== 1
        ? (this.z_ = this.z_.insert(n, { type: r.type, doc: t.doc }))
        : t.type === 2 && r.type === 2
        ? (this.z_ = this.z_.insert(n, { type: 2, doc: t.doc }))
        : t.type === 2 && r.type === 0
        ? (this.z_ = this.z_.insert(n, { type: 0, doc: t.doc }))
        : t.type === 1 && r.type === 0
        ? (this.z_ = this.z_.remove(n))
        : t.type === 1 && r.type === 2
        ? (this.z_ = this.z_.insert(n, { type: 1, doc: r.doc }))
        : t.type === 0 && r.type === 1
        ? (this.z_ = this.z_.insert(n, { type: 2, doc: t.doc }))
        : ft()
      : (this.z_ = this.z_.insert(n, t));
  }
  j_() {
    const t = [];
    return (
      this.z_.inorderTraversal((n, r) => {
        t.push(r);
      }),
      t
    );
  }
}
class Fr {
  constructor(t, n, r, s, i, a, l, c, f) {
    (this.query = t),
      (this.docs = n),
      (this.oldDocs = r),
      (this.docChanges = s),
      (this.mutatedKeys = i),
      (this.fromCache = a),
      (this.syncStateChanged = l),
      (this.excludesMetadataChanges = c),
      (this.hasCachedResults = f);
  }
  static fromInitialDocuments(t, n, r, s, i) {
    const a = [];
    return (
      n.forEach((l) => {
        a.push({ type: 0, doc: l });
      }),
      new Fr(t, n, Pr.emptySet(n), a, r, s, !0, !1, i)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(t) {
    if (
      !(
        this.fromCache === t.fromCache &&
        this.hasCachedResults === t.hasCachedResults &&
        this.syncStateChanged === t.syncStateChanged &&
        this.mutatedKeys.isEqual(t.mutatedKeys) &&
        lo(this.query, t.query) &&
        this.docs.isEqual(t.docs) &&
        this.oldDocs.isEqual(t.oldDocs)
      )
    )
      return !1;
    const n = this.docChanges,
      r = t.docChanges;
    if (n.length !== r.length) return !1;
    for (let s = 0; s < n.length; s++)
      if (n[s].type !== r[s].type || !n[s].doc.isEqual(r[s].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dw {
  constructor() {
    (this.H_ = void 0), (this.J_ = []);
  }
  Y_() {
    return this.J_.some((t) => t.Z_());
  }
}
class pw {
  constructor() {
    (this.queries = mh()),
      (this.onlineState = "Unknown"),
      (this.X_ = new Set());
  }
  terminate() {
    (function (n, r) {
      const s = Et(n),
        i = s.queries;
      (s.queries = mh()),
        i.forEach((a, l) => {
          for (const c of l.J_) c.onError(r);
        });
    })(this, new et(B.ABORTED, "Firestore shutting down"));
  }
}
function mh() {
  return new ar((e) => Cd(e), lo);
}
async function gw(e, t) {
  const n = Et(e);
  let r = 3;
  const s = t.query;
  let i = n.queries.get(s);
  i ? !i.Y_() && t.Z_() && (r = 2) : ((i = new dw()), (r = t.Z_() ? 0 : 1));
  try {
    switch (r) {
      case 0:
        i.H_ = await n.onListen(s, !0);
        break;
      case 1:
        i.H_ = await n.onListen(s, !1);
        break;
      case 2:
        await n.onFirstRemoteStoreListen(s);
    }
  } catch (a) {
    const l = ep(a, `Initialization of query '${vr(t.query)}' failed`);
    return void t.onError(l);
  }
  n.queries.set(s, i),
    i.J_.push(t),
    t.ea(n.onlineState),
    i.H_ && t.ta(i.H_) && Cl(n);
}
async function mw(e, t) {
  const n = Et(e),
    r = t.query;
  let s = 3;
  const i = n.queries.get(r);
  if (i) {
    const a = i.J_.indexOf(t);
    a >= 0 &&
      (i.J_.splice(a, 1),
      i.J_.length === 0 ? (s = t.Z_() ? 0 : 1) : !i.Y_() && t.Z_() && (s = 2));
  }
  switch (s) {
    case 0:
      return n.queries.delete(r), n.onUnlisten(r, !0);
    case 1:
      return n.queries.delete(r), n.onUnlisten(r, !1);
    case 2:
      return n.onLastRemoteStoreUnlisten(r);
    default:
      return;
  }
}
function _w(e, t) {
  const n = Et(e);
  let r = !1;
  for (const s of t) {
    const i = s.query,
      a = n.queries.get(i);
    if (a) {
      for (const l of a.J_) l.ta(s) && (r = !0);
      a.H_ = s;
    }
  }
  r && Cl(n);
}
function yw(e, t, n) {
  const r = Et(e),
    s = r.queries.get(t);
  if (s) for (const i of s.J_) i.onError(n);
  r.queries.delete(t);
}
function Cl(e) {
  e.X_.forEach((t) => {
    t.next();
  });
}
var Fa, _h;
((_h = Fa || (Fa = {})).na = "default"), (_h.Cache = "cache");
class vw {
  constructor(t, n, r) {
    (this.query = t),
      (this.ra = n),
      (this.ia = !1),
      (this.sa = null),
      (this.onlineState = "Unknown"),
      (this.options = r || {});
  }
  ta(t) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const s of t.docChanges) s.type !== 3 && r.push(s);
      t = new Fr(
        t.query,
        t.docs,
        t.oldDocs,
        r,
        t.mutatedKeys,
        t.fromCache,
        t.syncStateChanged,
        !0,
        t.hasCachedResults
      );
    }
    let n = !1;
    return (
      this.ia
        ? this.oa(t) && (this.ra.next(t), (n = !0))
        : this._a(t, this.onlineState) && (this.aa(t), (n = !0)),
      (this.sa = t),
      n
    );
  }
  onError(t) {
    this.ra.error(t);
  }
  ea(t) {
    this.onlineState = t;
    let n = !1;
    return (
      this.sa &&
        !this.ia &&
        this._a(this.sa, t) &&
        (this.aa(this.sa), (n = !0)),
      n
    );
  }
  _a(t, n) {
    if (!t.fromCache || !this.Z_()) return !0;
    const r = n !== "Offline";
    return (
      (!this.options.ua || !r) &&
      (!t.docs.isEmpty() || t.hasCachedResults || n === "Offline")
    );
  }
  oa(t) {
    if (t.docChanges.length > 0) return !0;
    const n = this.sa && this.sa.hasPendingWrites !== t.hasPendingWrites;
    return (
      !(!t.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    );
  }
  aa(t) {
    (t = Fr.fromInitialDocuments(
      t.query,
      t.docs,
      t.mutatedKeys,
      t.fromCache,
      t.hasCachedResults
    )),
      (this.ia = !0),
      this.ra.next(t);
  }
  Z_() {
    return this.options.source !== Fa.Cache;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class np {
  constructor(t) {
    this.key = t;
  }
}
class rp {
  constructor(t) {
    this.key = t;
  }
}
class Ew {
  constructor(t, n) {
    (this.query = t),
      (this.da = n),
      (this.Aa = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.Ra = Tt()),
      (this.mutatedKeys = Tt()),
      (this.Va = Sd(t)),
      (this.ma = new Pr(this.Va));
  }
  get fa() {
    return this.da;
  }
  ga(t, n) {
    const r = n ? n.pa : new gh(),
      s = n ? n.ma : this.ma;
    let i = n ? n.mutatedKeys : this.mutatedKeys,
      a = s,
      l = !1;
    const c =
        this.query.limitType === "F" && s.size === this.query.limit
          ? s.last()
          : null,
      f =
        this.query.limitType === "L" && s.size === this.query.limit
          ? s.first()
          : null;
    if (
      (t.inorderTraversal((d, p) => {
        const m = s.get(d),
          T = co(this.query, p) ? p : null,
          V = !!m && this.mutatedKeys.has(m.key),
          N =
            !!T &&
            (T.hasLocalMutations ||
              (this.mutatedKeys.has(T.key) && T.hasCommittedMutations));
        let k = !1;
        m && T
          ? m.data.isEqual(T.data)
            ? V !== N && (r.track({ type: 3, doc: T }), (k = !0))
            : this.ya(m, T) ||
              (r.track({ type: 2, doc: T }),
              (k = !0),
              ((c && this.Va(T, c) > 0) || (f && this.Va(T, f) < 0)) &&
                (l = !0))
          : !m && T
          ? (r.track({ type: 0, doc: T }), (k = !0))
          : m &&
            !T &&
            (r.track({ type: 1, doc: m }), (k = !0), (c || f) && (l = !0)),
          k &&
            (T
              ? ((a = a.add(T)), (i = N ? i.add(d) : i.delete(d)))
              : ((a = a.delete(d)), (i = i.delete(d))));
      }),
      this.query.limit !== null)
    )
      for (; a.size > this.query.limit; ) {
        const d = this.query.limitType === "F" ? a.last() : a.first();
        (a = a.delete(d.key)),
          (i = i.delete(d.key)),
          r.track({ type: 1, doc: d });
      }
    return { ma: a, pa: r, ss: l, mutatedKeys: i };
  }
  ya(t, n) {
    return (
      t.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
    );
  }
  applyChanges(t, n, r, s) {
    const i = this.ma;
    (this.ma = t.ma), (this.mutatedKeys = t.mutatedKeys);
    const a = t.pa.j_();
    a.sort(
      (d, p) =>
        (function (T, V) {
          const N = (k) => {
            switch (k) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return ft();
            }
          };
          return N(T) - N(V);
        })(d.type, p.type) || this.Va(d.doc, p.doc)
    ),
      this.wa(r),
      (s = s != null && s);
    const l = n && !s ? this.Sa() : [],
      c = this.Ra.size === 0 && this.current && !s ? 1 : 0,
      f = c !== this.Aa;
    return (
      (this.Aa = c),
      a.length !== 0 || f
        ? {
            snapshot: new Fr(
              this.query,
              t.ma,
              i,
              a,
              t.mutatedKeys,
              c === 0,
              f,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0
            ),
            ba: l,
          }
        : { ba: l }
    );
  }
  ea(t) {
    return this.current && t === "Offline"
      ? ((this.current = !1),
        this.applyChanges(
          { ma: this.ma, pa: new gh(), mutatedKeys: this.mutatedKeys, ss: !1 },
          !1
        ))
      : { ba: [] };
  }
  Da(t) {
    return (
      !this.da.has(t) && !!this.ma.has(t) && !this.ma.get(t).hasLocalMutations
    );
  }
  wa(t) {
    t &&
      (t.addedDocuments.forEach((n) => (this.da = this.da.add(n))),
      t.modifiedDocuments.forEach((n) => {}),
      t.removedDocuments.forEach((n) => (this.da = this.da.delete(n))),
      (this.current = t.current));
  }
  Sa() {
    if (!this.current) return [];
    const t = this.Ra;
    (this.Ra = Tt()),
      this.ma.forEach((r) => {
        this.Da(r.key) && (this.Ra = this.Ra.add(r.key));
      });
    const n = [];
    return (
      t.forEach((r) => {
        this.Ra.has(r) || n.push(new rp(r));
      }),
      this.Ra.forEach((r) => {
        t.has(r) || n.push(new np(r));
      }),
      n
    );
  }
  va(t) {
    (this.da = t.ds), (this.Ra = Tt());
    const n = this.ga(t.documents);
    return this.applyChanges(n, !0);
  }
  Ca() {
    return Fr.fromInitialDocuments(
      this.query,
      this.ma,
      this.mutatedKeys,
      this.Aa === 0,
      this.hasCachedResults
    );
  }
}
class Tw {
  constructor(t, n, r) {
    (this.query = t), (this.targetId = n), (this.view = r);
  }
}
class ww {
  constructor(t) {
    (this.key = t), (this.Fa = !1);
  }
}
class Iw {
  constructor(t, n, r, s, i, a) {
    (this.localStore = t),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = s),
      (this.currentUser = i),
      (this.maxConcurrentLimboResolutions = a),
      (this.Ma = {}),
      (this.xa = new ar((l) => Cd(l), lo)),
      (this.Oa = new Map()),
      (this.Na = new Set()),
      (this.La = new zt(it.comparator)),
      (this.Ba = new Map()),
      (this.ka = new vl()),
      (this.qa = {}),
      (this.Qa = new Map()),
      (this.Ka = Lr.Qn()),
      (this.onlineState = "Unknown"),
      (this.$a = void 0);
  }
  get isPrimaryClient() {
    return this.$a === !0;
  }
}
async function Aw(e, t, n = !0) {
  const r = lp(e);
  let s;
  const i = r.xa.get(t);
  return (
    i
      ? (r.sharedClientState.addLocalQueryTarget(i.targetId), (s = i.view.Ca()))
      : (s = await sp(r, t, n, !0)),
    s
  );
}
async function bw(e, t) {
  const n = lp(e);
  await sp(n, t, !0, !1);
}
async function sp(e, t, n, r) {
  const s = await YT(e.localStore, Ze(t)),
    i = s.targetId,
    a = e.sharedClientState.addLocalQueryTarget(i, n);
  let l;
  return (
    r && (l = await Rw(e, t, i, a === "current", s.resumeToken)),
    e.isPrimaryClient && n && Jd(e.remoteStore, s),
    l
  );
}
async function Rw(e, t, n, r, s) {
  e.Ua = (p, m, T) =>
    (async function (N, k, K, U) {
      let H = k.view.ga(K);
      H.ss &&
        (H = await uh(N.localStore, k.query, !1).then(({ documents: R }) =>
          k.view.ga(R, H)
        ));
      const j = U && U.targetChanges.get(k.targetId),
        lt = U && U.targetMismatches.get(k.targetId) != null,
        at = k.view.applyChanges(H, N.isPrimaryClient, j, lt);
      return vh(N, k.targetId, at.ba), at.snapshot;
    })(e, p, m, T);
  const i = await uh(e.localStore, t, !0),
    a = new Ew(t, i.ds),
    l = a.ga(i.documents),
    c = js.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && e.onlineState !== "Offline",
      s
    ),
    f = a.applyChanges(l, e.isPrimaryClient, c);
  vh(e, n, f.ba);
  const d = new Tw(t, n, a);
  return (
    e.xa.set(t, d),
    e.Oa.has(n) ? e.Oa.get(n).push(t) : e.Oa.set(n, [t]),
    f.snapshot
  );
}
async function Cw(e, t, n) {
  const r = Et(e),
    s = r.xa.get(t),
    i = r.Oa.get(s.targetId);
  if (i.length > 1)
    return (
      r.Oa.set(
        s.targetId,
        i.filter((a) => !lo(a, t))
      ),
      void r.xa.delete(t)
    );
  r.isPrimaryClient
    ? (r.sharedClientState.removeLocalQueryTarget(s.targetId),
      r.sharedClientState.isActiveQueryTarget(s.targetId) ||
        (await La(r.localStore, s.targetId, !1)
          .then(() => {
            r.sharedClientState.clearQueryState(s.targetId),
              n && wl(r.remoteStore, s.targetId),
              Ba(r, s.targetId);
          })
          .catch(so)))
    : (Ba(r, s.targetId), await La(r.localStore, s.targetId, !0));
}
async function Sw(e, t) {
  const n = Et(e),
    r = n.xa.get(t),
    s = n.Oa.get(r.targetId);
  n.isPrimaryClient &&
    s.length === 1 &&
    (n.sharedClientState.removeLocalQueryTarget(r.targetId),
    wl(n.remoteStore, r.targetId));
}
async function ip(e, t) {
  const n = Et(e);
  try {
    const r = await WT(n.localStore, t);
    t.targetChanges.forEach((s, i) => {
      const a = n.Ba.get(i);
      a &&
        ($t(
          s.addedDocuments.size +
            s.modifiedDocuments.size +
            s.removedDocuments.size <=
            1
        ),
        s.addedDocuments.size > 0
          ? (a.Fa = !0)
          : s.modifiedDocuments.size > 0
          ? $t(a.Fa)
          : s.removedDocuments.size > 0 && ($t(a.Fa), (a.Fa = !1)));
    }),
      await ap(n, r, t);
  } catch (r) {
    await so(r);
  }
}
function yh(e, t, n) {
  const r = Et(e);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const s = [];
    r.xa.forEach((i, a) => {
      const l = a.view.ea(t);
      l.snapshot && s.push(l.snapshot);
    }),
      (function (a, l) {
        const c = Et(a);
        c.onlineState = l;
        let f = !1;
        c.queries.forEach((d, p) => {
          for (const m of p.J_) m.ea(l) && (f = !0);
        }),
          f && Cl(c);
      })(r.eventManager, t),
      s.length && r.Ma.R_(s),
      (r.onlineState = t),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
  }
}
async function Pw(e, t, n) {
  const r = Et(e);
  r.sharedClientState.updateQueryState(t, "rejected", n);
  const s = r.Ba.get(t),
    i = s && s.key;
  if (i) {
    let a = new zt(it.comparator);
    a = a.insert(i, pe.newNoDocument(i, ct.min()));
    const l = Tt().add(i),
      c = new fo(ct.min(), new Map(), new zt(vt), a, l);
    await ip(r, c), (r.La = r.La.remove(i)), r.Ba.delete(t), Sl(r);
  } else
    await La(r.localStore, t, !1)
      .then(() => Ba(r, t, n))
      .catch(so);
}
function Ba(e, t, n = null) {
  e.sharedClientState.removeLocalQueryTarget(t);
  for (const r of e.Oa.get(t)) e.xa.delete(r), n && e.Ma.Wa(r, n);
  e.Oa.delete(t),
    e.isPrimaryClient &&
      e.ka.yr(t).forEach((r) => {
        e.ka.containsKey(r) || op(e, r);
      });
}
function op(e, t) {
  e.Na.delete(t.path.canonicalString());
  const n = e.La.get(t);
  n !== null &&
    (wl(e.remoteStore, n), (e.La = e.La.remove(t)), e.Ba.delete(n), Sl(e));
}
function vh(e, t, n) {
  for (const r of n)
    r instanceof np
      ? (e.ka.addReference(r.key, t), Vw(e, r))
      : r instanceof rp
      ? (X("SyncEngine", "Document no longer in limbo: " + r.key),
        e.ka.removeReference(r.key, t),
        e.ka.containsKey(r.key) || op(e, r.key))
      : ft();
}
function Vw(e, t) {
  const n = t.key,
    r = n.path.canonicalString();
  e.La.get(n) ||
    e.Na.has(r) ||
    (X("SyncEngine", "New document in limbo: " + n), e.Na.add(r), Sl(e));
}
function Sl(e) {
  for (; e.Na.size > 0 && e.La.size < e.maxConcurrentLimboResolutions; ) {
    const t = e.Na.values().next().value;
    e.Na.delete(t);
    const n = new it(Bt.fromString(t)),
      r = e.Ka.next();
    e.Ba.set(r, new ww(n)),
      (e.La = e.La.insert(n, r)),
      Jd(
        e.remoteStore,
        new Sn(Ze(bd(n.path)), r, "TargetPurposeLimboResolution", io.oe)
      );
  }
}
async function ap(e, t, n) {
  const r = Et(e),
    s = [],
    i = [],
    a = [];
  r.xa.isEmpty() ||
    (r.xa.forEach((l, c) => {
      a.push(
        r.Ua(c, t, n).then((f) => {
          var d;
          if ((f || n) && r.isPrimaryClient) {
            const p = f
              ? !f.fromCache
              : (d = n == null ? void 0 : n.targetChanges.get(c.targetId)) ===
                  null || d === void 0
              ? void 0
              : d.current;
            r.sharedClientState.updateQueryState(
              c.targetId,
              p ? "current" : "not-current"
            );
          }
          if (f) {
            s.push(f);
            const p = Tl.zi(c.targetId, f);
            i.push(p);
          }
        })
      );
    }),
    await Promise.all(a),
    r.Ma.R_(s),
    await (async function (c, f) {
      const d = Et(c);
      try {
        await d.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (p) =>
            O.forEach(f, (m) =>
              O.forEach(m.Wi, (T) =>
                d.persistence.referenceDelegate.addReference(p, m.targetId, T)
              ).next(() =>
                O.forEach(m.Gi, (T) =>
                  d.persistence.referenceDelegate.removeReference(
                    p,
                    m.targetId,
                    T
                  )
                )
              )
            )
        );
      } catch (p) {
        if (!jr(p)) throw p;
        X("LocalStore", "Failed to update sequence numbers: " + p);
      }
      for (const p of f) {
        const m = p.targetId;
        if (!p.fromCache) {
          const T = d.us.get(m),
            V = T.snapshotVersion,
            N = T.withLastLimboFreeSnapshotVersion(V);
          d.us = d.us.insert(m, N);
        }
      }
    })(r.localStore, i));
}
async function Dw(e, t) {
  const n = Et(e);
  if (!n.currentUser.isEqual(t)) {
    X("SyncEngine", "User change. New user:", t.toKey());
    const r = await Qd(n.localStore, t);
    (n.currentUser = t),
      (function (i, a) {
        i.Qa.forEach((l) => {
          l.forEach((c) => {
            c.reject(new et(B.CANCELLED, a));
          });
        }),
          i.Qa.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        t,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await ap(n, r.Ts);
  }
}
function xw(e, t) {
  const n = Et(e),
    r = n.Ba.get(t);
  if (r && r.Fa) return Tt().add(r.key);
  {
    let s = Tt();
    const i = n.Oa.get(t);
    if (!i) return s;
    for (const a of i) {
      const l = n.xa.get(a);
      s = s.unionWith(l.view.fa);
    }
    return s;
  }
}
function lp(e) {
  const t = Et(e);
  return (
    (t.remoteStore.remoteSyncer.applyRemoteEvent = ip.bind(null, t)),
    (t.remoteStore.remoteSyncer.getRemoteKeysForTarget = xw.bind(null, t)),
    (t.remoteStore.remoteSyncer.rejectListen = Pw.bind(null, t)),
    (t.Ma.R_ = _w.bind(null, t.eventManager)),
    (t.Ma.Wa = yw.bind(null, t.eventManager)),
    t
  );
}
class qi {
  constructor() {
    (this.kind = "memory"), (this.synchronizeTabs = !1);
  }
  async initialize(t) {
    (this.serializer = po(t.databaseInfo.databaseId)),
      (this.sharedClientState = this.za(t)),
      (this.persistence = this.ja(t)),
      await this.persistence.start(),
      (this.localStore = this.Ha(t)),
      (this.gcScheduler = this.Ja(t, this.localStore)),
      (this.indexBackfillerScheduler = this.Ya(t, this.localStore));
  }
  Ja(t, n) {
    return null;
  }
  Ya(t, n) {
    return null;
  }
  Ha(t) {
    return GT(this.persistence, new HT(), t.initialUser, this.serializer);
  }
  ja(t) {
    return new Wd(El.ei, this.serializer);
  }
  za(t) {
    return new JT();
  }
  async terminate() {
    var t, n;
    (t = this.gcScheduler) === null || t === void 0 || t.stop(),
      (n = this.indexBackfillerScheduler) === null || n === void 0 || n.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
qi.provider = { build: () => new qi() };
class Nw extends qi {
  constructor(t) {
    super(), (this.cacheSizeBytes = t);
  }
  Ja(t, n) {
    $t(this.persistence.referenceDelegate instanceof Ui);
    const r = this.persistence.referenceDelegate.garbageCollector;
    return new VT(r, t.asyncQueue, n);
  }
  ja(t) {
    const n =
      this.cacheSizeBytes !== void 0
        ? Ae.withCacheSize(this.cacheSizeBytes)
        : Ae.DEFAULT;
    return new Wd((r) => Ui.ei(r, n), this.serializer);
  }
}
class $a {
  async initialize(t, n) {
    this.localStore ||
      ((this.localStore = t.localStore),
      (this.sharedClientState = t.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !t.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        yh(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = Dw.bind(
        null,
        this.syncEngine
      )),
      await fw(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(t) {
    return (function () {
      return new pw();
    })();
  }
  createDatastore(t) {
    const n = po(t.databaseInfo.databaseId),
      r = (function (i) {
        return new nw(i);
      })(t.databaseInfo);
    return (function (i, a, l, c) {
      return new iw(i, a, l, c);
    })(t.authCredentials, t.appCheckCredentials, r, n);
  }
  createRemoteStore(t) {
    return (function (r, s, i, a, l) {
      return new aw(r, s, i, a, l);
    })(
      this.localStore,
      this.datastore,
      t.asyncQueue,
      (n) => yh(this.syncEngine, n, 0),
      (function () {
        return fh.p() ? new fh() : new ZT();
      })()
    );
  }
  createSyncEngine(t, n) {
    return (function (s, i, a, l, c, f, d) {
      const p = new Iw(s, i, a, l, c, f);
      return d && (p.$a = !0), p;
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      t.initialUser,
      t.maxConcurrentLimboResolutions,
      n
    );
  }
  async terminate() {
    var t, n;
    await (async function (s) {
      const i = Et(s);
      X("RemoteStore", "RemoteStore shutting down."),
        i.k_.add(5),
        await zs(i),
        i.Q_.shutdown(),
        i.K_.set("Unknown");
    })(this.remoteStore),
      (t = this.datastore) === null || t === void 0 || t.terminate(),
      (n = this.eventManager) === null || n === void 0 || n.terminate();
  }
}
$a.provider = { build: () => new $a() };
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ow {
  constructor(t) {
    (this.observer = t), (this.muted = !1);
  }
  next(t) {
    this.muted || (this.observer.next && this.Xa(this.observer.next, t));
  }
  error(t) {
    this.muted ||
      (this.observer.error
        ? this.Xa(this.observer.error, t)
        : un("Uncaught Error in snapshot listener:", t.toString()));
  }
  eu() {
    this.muted = !0;
  }
  Xa(t, n) {
    setTimeout(() => {
      this.muted || t(n);
    }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kw {
  constructor(t, n, r, s, i) {
    (this.authCredentials = t),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = s),
      (this.user = he.UNAUTHENTICATED),
      (this.clientId = v0.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      (this._uninitializedComponentsProvider = i),
      this.authCredentials.start(r, async (a) => {
        X("FirestoreClient", "Received user=", a.uid),
          await this.authCredentialListener(a),
          (this.user = a);
      }),
      this.appCheckCredentials.start(
        r,
        (a) => (
          X("FirestoreClient", "Received new app check token=", a),
          this.appCheckCredentialListener(a, this.user)
        )
      );
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(t) {
    this.authCredentialListener = t;
  }
  setAppCheckTokenChangeListener(t) {
    this.appCheckCredentialListener = t;
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t = new er();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            t.resolve();
        } catch (n) {
          const r = ep(n, "Failed to shutdown persistence");
          t.reject(r);
        }
      }),
      t.promise
    );
  }
}
async function ea(e, t) {
  e.asyncQueue.verifyOperationInProgress(),
    X("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = e.configuration;
  await t.initialize(n);
  let r = n.initialUser;
  e.setCredentialChangeListener(async (s) => {
    r.isEqual(s) || (await Qd(t.localStore, s), (r = s));
  }),
    t.persistence.setDatabaseDeletedListener(() => e.terminate()),
    (e._offlineComponents = t);
}
async function Eh(e, t) {
  e.asyncQueue.verifyOperationInProgress();
  const n = await Mw(e);
  X("FirestoreClient", "Initializing OnlineComponentProvider"),
    await t.initialize(n, e.configuration),
    e.setCredentialChangeListener((r) => ph(t.remoteStore, r)),
    e.setAppCheckTokenChangeListener((r, s) => ph(t.remoteStore, s)),
    (e._onlineComponents = t);
}
async function Mw(e) {
  if (!e._offlineComponents)
    if (e._uninitializedComponentsProvider) {
      X("FirestoreClient", "Using user provided OfflineComponentProvider");
      try {
        await ea(e, e._uninitializedComponentsProvider._offline);
      } catch (t) {
        const n = t;
        if (
          !(function (s) {
            return s.name === "FirebaseError"
              ? s.code === B.FAILED_PRECONDITION || s.code === B.UNIMPLEMENTED
              : !(typeof DOMException < "u" && s instanceof DOMException) ||
                  s.code === 22 ||
                  s.code === 20 ||
                  s.code === 11;
          })(n)
        )
          throw n;
        Nr(
          "Error using user provided cache. Falling back to memory cache: " + n
        ),
          await ea(e, new qi());
      }
    } else
      X("FirestoreClient", "Using default OfflineComponentProvider"),
        await ea(e, new Nw(void 0));
  return e._offlineComponents;
}
async function Lw(e) {
  return (
    e._onlineComponents ||
      (e._uninitializedComponentsProvider
        ? (X("FirestoreClient", "Using user provided OnlineComponentProvider"),
          await Eh(e, e._uninitializedComponentsProvider._online))
        : (X("FirestoreClient", "Using default OnlineComponentProvider"),
          await Eh(e, new $a()))),
    e._onlineComponents
  );
}
async function Fw(e) {
  const t = await Lw(e),
    n = t.eventManager;
  return (
    (n.onListen = Aw.bind(null, t.syncEngine)),
    (n.onUnlisten = Cw.bind(null, t.syncEngine)),
    (n.onFirstRemoteStoreListen = bw.bind(null, t.syncEngine)),
    (n.onLastRemoteStoreUnlisten = Sw.bind(null, t.syncEngine)),
    n
  );
}
function Bw(e, t, n = {}) {
  const r = new er();
  return (
    e.asyncQueue.enqueueAndForget(async () =>
      (function (i, a, l, c, f) {
        const d = new Ow({
            next: (m) => {
              d.eu(),
                a.enqueueAndForget(() => mw(i, p)),
                m.fromCache && c.source === "server"
                  ? f.reject(
                      new et(
                        B.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : f.resolve(m);
            },
            error: (m) => f.reject(m),
          }),
          p = new vw(l, d, { includeMetadataChanges: !0, ua: !0 });
        return gw(i, p);
      })(await Fw(e), e.asyncQueue, t, n, r)
    ),
    r.promise
  );
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cp(e) {
  const t = {};
  return (
    e.timeoutSeconds !== void 0 && (t.timeoutSeconds = e.timeoutSeconds), t
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Th = new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $w(e, t, n) {
  if (!n)
    throw new et(
      B.INVALID_ARGUMENT,
      `Function ${e}() cannot be called with an empty ${t}.`
    );
}
function Uw(e, t, n, r) {
  if (t === !0 && r === !0)
    throw new et(B.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
}
function wh(e) {
  if (it.isDocumentKey(e))
    throw new et(
      B.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`
    );
}
function mo(e) {
  if (e === void 0) return "undefined";
  if (e === null) return "null";
  if (typeof e == "string")
    return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
  if (typeof e == "number" || typeof e == "boolean") return "" + e;
  if (typeof e == "object") {
    if (e instanceof Array) return "an array";
    {
      const t = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(e);
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return typeof e == "function" ? "a function" : ft();
}
function Ua(e, t) {
  if (("_delegate" in e && (e = e._delegate), !(e instanceof t))) {
    if (t.name === e.constructor.name)
      throw new et(
        B.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      const n = mo(e);
      throw new et(
        B.INVALID_ARGUMENT,
        `Expected type '${t.name}', but it was: ${n}`
      );
    }
  }
  return e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ih {
  constructor(t) {
    var n, r;
    if (t.host === void 0) {
      if (t.ssl !== void 0)
        throw new et(
          B.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        );
      (this.host = "firestore.googleapis.com"), (this.ssl = !0);
    } else
      (this.host = t.host),
        (this.ssl = (n = t.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = t.credentials),
      (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
      (this.localCache = t.localCache),
      t.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < 1048576)
        throw new et(
          B.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576"
        );
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    Uw(
      "experimentalForceLongPolling",
      t.experimentalForceLongPolling,
      "experimentalAutoDetectLongPolling",
      t.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : t.experimentalAutoDetectLongPolling === void 0
        ? (this.experimentalAutoDetectLongPolling = !0)
        : (this.experimentalAutoDetectLongPolling =
            !!t.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = cp(
        (r = t.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}
      )),
      (function (i) {
        if (i.timeoutSeconds !== void 0) {
          if (isNaN(i.timeoutSeconds))
            throw new et(
              B.INVALID_ARGUMENT,
              `invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`
            );
          if (i.timeoutSeconds < 5)
            throw new et(
              B.INVALID_ARGUMENT,
              `invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`
            );
          if (i.timeoutSeconds > 30)
            throw new et(
              B.INVALID_ARGUMENT,
              `invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!t.useFetchStreams);
  }
  isEqual(t) {
    return (
      this.host === t.host &&
      this.ssl === t.ssl &&
      this.credentials === t.credentials &&
      this.cacheSizeBytes === t.cacheSizeBytes &&
      this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        t.experimentalAutoDetectLongPolling &&
      (function (r, s) {
        return r.timeoutSeconds === s.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        t.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
      this.useFetchStreams === t.useFetchStreams
    );
  }
}
class Pl {
  constructor(t, n, r, s) {
    (this._authCredentials = t),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = s),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new Ih({})),
      (this._settingsFrozen = !1),
      (this._terminateTask = "notTerminated");
  }
  get app() {
    if (!this._app)
      throw new et(
        B.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== "notTerminated";
  }
  _setSettings(t) {
    if (this._settingsFrozen)
      throw new et(
        B.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
      );
    (this._settings = new Ih(t)),
      t.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new h0();
          switch (r.type) {
            case "firstParty":
              return new g0(
                r.sessionIndex || "0",
                r.iamToken || null,
                r.authTokenFactory || null
              );
            case "provider":
              return r.client;
            default:
              throw new et(
                B.INVALID_ARGUMENT,
                "makeAuthCredentialsProvider failed due to invalid credential type"
              );
          }
        })(t.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask === "notTerminated" &&
        (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  async _restart() {
    this._terminateTask === "notTerminated"
      ? await this._terminate()
      : (this._terminateTask = "notTerminated");
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (n) {
        const r = Th.get(n);
        r &&
          (X("ComponentProvider", "Removing Datastore"),
          Th.delete(n),
          r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function qw(e, t, n, r = {}) {
  var s;
  const i = (e = Ua(e, Pl))._getSettings(),
    a = `${t}:${n}`;
  if (
    (i.host !== "firestore.googleapis.com" &&
      i.host !== a &&
      Nr(
        "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."
      ),
    e._setSettings(Object.assign(Object.assign({}, i), { host: a, ssl: !1 })),
    r.mockUserToken)
  ) {
    let l, c;
    if (typeof r.mockUserToken == "string")
      (l = r.mockUserToken), (c = he.MOCK_USER);
    else {
      l = Kv(
        r.mockUserToken,
        (s = e._app) === null || s === void 0 ? void 0 : s.options.projectId
      );
      const f = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!f)
        throw new et(
          B.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        );
      c = new he(f);
    }
    e._authCredentials = new f0(new md(l, c));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kr {
  constructor(t, n, r) {
    (this.converter = n),
      (this._query = r),
      (this.type = "query"),
      (this.firestore = t);
  }
  withConverter(t) {
    return new Kr(this.firestore, t, this._query);
  }
}
class dn {
  constructor(t, n, r) {
    (this.converter = n),
      (this._key = r),
      (this.type = "document"),
      (this.firestore = t);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new Vr(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t) {
    return new dn(this.firestore, t, this._key);
  }
}
class Vr extends Kr {
  constructor(t, n, r) {
    super(t, n, bd(r)), (this._path = r), (this.type = "collection");
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const t = this._path.popLast();
    return t.isEmpty() ? null : new dn(this.firestore, null, new it(t));
  }
  withConverter(t) {
    return new Vr(this.firestore, t, this._path);
  }
}
function Vl(e, t, ...n) {
  if (((e = Ni(e)), $w("collection", "path", t), e instanceof Pl)) {
    const r = Bt.fromString(t, ...n);
    return wh(r), new Vr(e, null, r);
  }
  {
    if (!(e instanceof dn || e instanceof Vr))
      throw new et(
        B.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = e._path.child(Bt.fromString(t, ...n));
    return wh(r), new Vr(e.firestore, null, r);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ah {
  constructor(t = Promise.resolve()) {
    (this.Iu = []),
      (this.Eu = !1),
      (this.du = []),
      (this.Au = null),
      (this.Ru = !1),
      (this.Vu = !1),
      (this.mu = []),
      (this.r_ = new Xd(this, "async_queue_retry")),
      (this.fu = () => {
        const r = ta();
        r &&
          X("AsyncQueue", "Visibility state changed to " + r.visibilityState),
          this.r_.Jo();
      }),
      (this.gu = t);
    const n = ta();
    n &&
      typeof n.addEventListener == "function" &&
      n.addEventListener("visibilitychange", this.fu);
  }
  get isShuttingDown() {
    return this.Eu;
  }
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.pu(), this.yu(t);
  }
  enterRestrictedMode(t) {
    if (!this.Eu) {
      (this.Eu = !0), (this.Vu = t || !1);
      const n = ta();
      n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener("visibilitychange", this.fu);
    }
  }
  enqueue(t) {
    if ((this.pu(), this.Eu)) return new Promise(() => {});
    const n = new er();
    return this.yu(() =>
      this.Eu && this.Vu
        ? Promise.resolve()
        : (t().then(n.resolve, n.reject), n.promise)
    ).then(() => n.promise);
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.Iu.push(t), this.wu()));
  }
  async wu() {
    if (this.Iu.length !== 0) {
      try {
        await this.Iu[0](), this.Iu.shift(), this.r_.reset();
      } catch (t) {
        if (!jr(t)) throw t;
        X("AsyncQueue", "Operation failed with retryable error: " + t);
      }
      this.Iu.length > 0 && this.r_.jo(() => this.wu());
    }
  }
  yu(t) {
    const n = this.gu.then(
      () => (
        (this.Ru = !0),
        t()
          .catch((r) => {
            (this.Au = r), (this.Ru = !1);
            const s = (function (a) {
              let l = a.message || "";
              return (
                a.stack &&
                  (l = a.stack.includes(a.message)
                    ? a.stack
                    : a.message +
                      `
` +
                      a.stack),
                l
              );
            })(r);
            throw (un("INTERNAL UNHANDLED ERROR: ", s), r);
          })
          .then((r) => ((this.Ru = !1), r))
      )
    );
    return (this.gu = n), n;
  }
  enqueueAfterDelay(t, n, r) {
    this.pu(), this.mu.indexOf(t) > -1 && (n = 0);
    const s = Rl.createAndSchedule(this, t, n, r, (i) => this.Su(i));
    return this.du.push(s), s;
  }
  pu() {
    this.Au && ft();
  }
  verifyOperationInProgress() {}
  async bu() {
    let t;
    do (t = this.gu), await t;
    while (t !== this.gu);
  }
  Du(t) {
    for (const n of this.du) if (n.timerId === t) return !0;
    return !1;
  }
  vu(t) {
    return this.bu().then(() => {
      this.du.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.du)
        if ((n.skipDelay(), t !== "all" && n.timerId === t)) break;
      return this.bu();
    });
  }
  Cu(t) {
    this.mu.push(t);
  }
  Su(t) {
    const n = this.du.indexOf(t);
    this.du.splice(n, 1);
  }
}
class up extends Pl {
  constructor(t, n, r, s) {
    super(t, n, r, s),
      (this.type = "firestore"),
      (this._queue = new Ah()),
      (this._persistenceKey = (s == null ? void 0 : s.name) || "[DEFAULT]");
  }
  async _terminate() {
    if (this._firestoreClient) {
      const t = this._firestoreClient.terminate();
      (this._queue = new Ah(t)), (this._firestoreClient = void 0), await t;
    }
  }
}
function jw(e, t) {
  const n = typeof e == "object" ? e : e0(),
    r = typeof e == "string" ? e : "(default)",
    s = XE(n, "firestore").getImmediate({ identifier: r });
  if (!s._initialized) {
    const i = zv("firestore");
    i && qw(s, ...i);
  }
  return s;
}
function zw(e) {
  if (e._terminated)
    throw new et(
      B.FAILED_PRECONDITION,
      "The client has already been terminated."
    );
  return e._firestoreClient || Hw(e), e._firestoreClient;
}
function Hw(e) {
  var t, n, r;
  const s = e._freezeSettings(),
    i = (function (l, c, f, d) {
      return new D0(
        l,
        c,
        f,
        d.host,
        d.ssl,
        d.experimentalForceLongPolling,
        d.experimentalAutoDetectLongPolling,
        cp(d.experimentalLongPollingOptions),
        d.useFetchStreams
      );
    })(
      e._databaseId,
      ((t = e._app) === null || t === void 0 ? void 0 : t.options.appId) || "",
      e._persistenceKey,
      s
    );
  e._componentsProvider ||
    (!((n = s.localCache) === null || n === void 0) &&
      n._offlineComponentProvider &&
      !((r = s.localCache) === null || r === void 0) &&
      r._onlineComponentProvider &&
      (e._componentsProvider = {
        _offline: s.localCache._offlineComponentProvider,
        _online: s.localCache._onlineComponentProvider,
      })),
    (e._firestoreClient = new kw(
      e._authCredentials,
      e._appCheckCredentials,
      e._queue,
      i,
      e._componentsProvider &&
        (function (l) {
          const c = l == null ? void 0 : l._online.build();
          return {
            _offline: l == null ? void 0 : l._offline.build(c),
            _online: c,
          };
        })(e._componentsProvider)
    ));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Br {
  constructor(t) {
    this._byteString = t;
  }
  static fromBase64String(t) {
    try {
      return new Br(ie.fromBase64String(t));
    } catch (n) {
      throw new et(
        B.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + n
      );
    }
  }
  static fromUint8Array(t) {
    return new Br(ie.fromUint8Array(t));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(t) {
    return this._byteString.isEqual(t._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hp {
  constructor(...t) {
    for (let n = 0; n < t.length; ++n)
      if (t[n].length === 0)
        throw new et(
          B.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty."
        );
    this._internalPath = new ge(t);
  }
  isEqual(t) {
    return this._internalPath.isEqual(t._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fp {
  constructor(t) {
    this._methodName = t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dl {
  constructor(t, n) {
    if (!isFinite(t) || t < -90 || t > 90)
      throw new et(
        B.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + t
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new et(
        B.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + n
      );
    (this._lat = t), (this._long = n);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(t) {
    return this._lat === t._lat && this._long === t._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(t) {
    return vt(this._lat, t._lat) || vt(this._long, t._long);
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xl {
  constructor(t) {
    this._values = (t || []).map((n) => n);
  }
  toArray() {
    return this._values.map((t) => t);
  }
  isEqual(t) {
    return (function (r, s) {
      if (r.length !== s.length) return !1;
      for (let i = 0; i < r.length; ++i) if (r[i] !== s[i]) return !1;
      return !0;
    })(this._values, t._values);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Kw = /^__.*__$/;
function dp(e) {
  switch (e) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw ft();
  }
}
class Nl {
  constructor(t, n, r, s, i, a) {
    (this.settings = t),
      (this.databaseId = n),
      (this.serializer = r),
      (this.ignoreUndefinedProperties = s),
      i === void 0 && this.Fu(),
      (this.fieldTransforms = i || []),
      (this.fieldMask = a || []);
  }
  get path() {
    return this.settings.path;
  }
  get Mu() {
    return this.settings.Mu;
  }
  xu(t) {
    return new Nl(
      Object.assign(Object.assign({}, this.settings), t),
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask
    );
  }
  Ou(t) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(t),
      s = this.xu({ path: r, Nu: !1 });
    return s.Lu(t), s;
  }
  Bu(t) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(t),
      s = this.xu({ path: r, Nu: !1 });
    return s.Fu(), s;
  }
  ku(t) {
    return this.xu({ path: void 0, Nu: !0 });
  }
  qu(t) {
    return qa(
      t,
      this.settings.methodName,
      this.settings.Qu || !1,
      this.path,
      this.settings.Ku
    );
  }
  contains(t) {
    return (
      this.fieldMask.find((n) => t.isPrefixOf(n)) !== void 0 ||
      this.fieldTransforms.find((n) => t.isPrefixOf(n.field)) !== void 0
    );
  }
  Fu() {
    if (this.path)
      for (let t = 0; t < this.path.length; t++) this.Lu(this.path.get(t));
  }
  Lu(t) {
    if (t.length === 0) throw this.qu("Document fields must not be empty");
    if (dp(this.Mu) && Kw.test(t))
      throw this.qu('Document fields cannot begin and end with "__"');
  }
}
class Gw {
  constructor(t, n, r) {
    (this.databaseId = t),
      (this.ignoreUndefinedProperties = n),
      (this.serializer = r || po(t));
  }
  $u(t, n, r, s = !1) {
    return new Nl(
      { Mu: t, methodName: n, Ku: r, path: ge.emptyPath(), Nu: !1, Qu: s },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties
    );
  }
}
function Ww(e) {
  const t = e._freezeSettings(),
    n = po(e._databaseId);
  return new Gw(e._databaseId, !!t.ignoreUndefinedProperties, n);
}
function Qw(e, t, n, r = !1) {
  return Ol(n, e.$u(r ? 4 : 3, t));
}
function Ol(e, t) {
  if (pp((e = Ni(e)))) return Xw("Unsupported field value:", t, e), Yw(e, t);
  if (e instanceof fp)
    return (
      (function (r, s) {
        if (!dp(s.Mu))
          throw s.qu(
            `${r._methodName}() can only be used with update() and set()`
          );
        if (!s.path)
          throw s.qu(
            `${r._methodName}() is not currently supported inside arrays`
          );
        const i = r._toFieldTransform(s);
        i && s.fieldTransforms.push(i);
      })(e, t),
      null
    );
  if (e === void 0 && t.ignoreUndefinedProperties) return null;
  if ((t.path && t.fieldMask.push(t.path), e instanceof Array)) {
    if (t.settings.Nu && t.Mu !== 4)
      throw t.qu("Nested arrays are not supported");
    return (function (r, s) {
      const i = [];
      let a = 0;
      for (const l of r) {
        let c = Ol(l, s.ku(a));
        c == null && (c = { nullValue: "NULL_VALUE" }), i.push(c), a++;
      }
      return { arrayValue: { values: i } };
    })(e, t);
  }
  return (function (r, s) {
    if ((r = Ni(r)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof r == "number") return Z0(s.serializer, r);
    if (typeof r == "boolean") return { booleanValue: r };
    if (typeof r == "string") return { stringValue: r };
    if (r instanceof Date) {
      const i = Jt.fromDate(r);
      return { timestampValue: ka(s.serializer, i) };
    }
    if (r instanceof Jt) {
      const i = new Jt(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return { timestampValue: ka(s.serializer, i) };
    }
    if (r instanceof Dl)
      return {
        geoPointValue: { latitude: r.latitude, longitude: r.longitude },
      };
    if (r instanceof Br) return { bytesValue: $d(s.serializer, r._byteString) };
    if (r instanceof dn) {
      const i = s.databaseId,
        a = r.firestore._databaseId;
      if (!a.isEqual(i))
        throw s.qu(
          `Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`
        );
      return {
        referenceValue: Ud(
          r.firestore._databaseId || s.databaseId,
          r._key.path
        ),
      };
    }
    if (r instanceof xl)
      return (function (a, l) {
        return {
          mapValue: {
            fields: {
              __type__: { stringValue: "__vector__" },
              value: {
                arrayValue: {
                  values: a.toArray().map((c) => {
                    if (typeof c != "number")
                      throw l.qu(
                        "VectorValues must only contain numeric values."
                      );
                    return gl(l.serializer, c);
                  }),
                },
              },
            },
          },
        };
      })(r, s);
    throw s.qu(`Unsupported field value: ${mo(r)}`);
  })(e, t);
}
function Yw(e, t) {
  const n = {};
  return (
    _d(e)
      ? t.path && t.path.length > 0 && t.fieldMask.push(t.path)
      : zr(e, (r, s) => {
          const i = Ol(s, t.Ou(r));
          i != null && (n[r] = i);
        }),
    { mapValue: { fields: n } }
  );
}
function pp(e) {
  return !(
    typeof e != "object" ||
    e === null ||
    e instanceof Array ||
    e instanceof Date ||
    e instanceof Jt ||
    e instanceof Dl ||
    e instanceof Br ||
    e instanceof dn ||
    e instanceof fp ||
    e instanceof xl
  );
}
function Xw(e, t, n) {
  if (
    !pp(n) ||
    !(function (s) {
      return (
        typeof s == "object" &&
        s !== null &&
        (Object.getPrototypeOf(s) === Object.prototype ||
          Object.getPrototypeOf(s) === null)
      );
    })(n)
  ) {
    const r = mo(n);
    throw r === "an object" ? t.qu(e + " a custom object") : t.qu(e + " " + r);
  }
}
const Jw = new RegExp("[~\\*/\\[\\]]");
function Zw(e, t, n) {
  if (t.search(Jw) >= 0)
    throw qa(
      `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
      e,
      !1,
      void 0,
      n
    );
  try {
    return new hp(...t.split("."))._internalPath;
  } catch {
    throw qa(
      `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      e,
      !1,
      void 0,
      n
    );
  }
}
function qa(e, t, n, r, s) {
  const i = r && !r.isEmpty(),
    a = s !== void 0;
  let l = `Function ${t}() called with invalid data`;
  n && (l += " (via `toFirestore()`)"), (l += ". ");
  let c = "";
  return (
    (i || a) &&
      ((c += " (found"),
      i && (c += ` in field ${r}`),
      a && (c += ` in document ${s}`),
      (c += ")")),
    new et(B.INVALID_ARGUMENT, l + e + c)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gp {
  constructor(t, n, r, s, i) {
    (this._firestore = t),
      (this._userDataWriter = n),
      (this._key = r),
      (this._document = s),
      (this._converter = i);
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new dn(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const t = new tI(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(t);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(t) {
    if (this._document) {
      const n = this._document.data.field(mp("DocumentSnapshot.get", t));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class tI extends gp {
  data() {
    return super.data();
  }
}
function mp(e, t) {
  return typeof t == "string"
    ? Zw(e, t)
    : t instanceof hp
    ? t._internalPath
    : t._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eI(e) {
  if (e.limitType === "L" && e.explicitOrderBy.length === 0)
    throw new et(
      B.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause"
    );
}
class kl {}
class nI extends kl {}
function Ml(e, t, ...n) {
  let r = [];
  t instanceof kl && r.push(t),
    (r = r.concat(n)),
    (function (i) {
      const a = i.filter((c) => c instanceof Fl).length,
        l = i.filter((c) => c instanceof Ll).length;
      if (a > 1 || (a > 0 && l > 0))
        throw new et(
          B.INVALID_ARGUMENT,
          "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`."
        );
    })(r);
  for (const s of r) e = s._apply(e);
  return e;
}
class Ll extends nI {
  constructor(t, n, r) {
    super(),
      (this._field = t),
      (this._op = n),
      (this._value = r),
      (this.type = "where");
  }
  static _create(t, n, r) {
    return new Ll(t, n, r);
  }
  _apply(t) {
    const n = this._parse(t);
    return _p(t._query, n), new Kr(t.firestore, t.converter, Va(t._query, n));
  }
  _parse(t) {
    const n = Ww(t.firestore);
    return (function (i, a, l, c, f, d, p) {
      let m;
      if (f.isKeyField()) {
        if (d === "array-contains" || d === "array-contains-any")
          throw new et(
            B.INVALID_ARGUMENT,
            `Invalid Query. You can't perform '${d}' queries on documentId().`
          );
        if (d === "in" || d === "not-in") {
          Rh(p, d);
          const T = [];
          for (const V of p) T.push(bh(c, i, V));
          m = { arrayValue: { values: T } };
        } else m = bh(c, i, p);
      } else
        (d !== "in" && d !== "not-in" && d !== "array-contains-any") ||
          Rh(p, d),
          (m = Qw(l, a, p, d === "in" || d === "not-in"));
      return Kt.create(f, d, m);
    })(
      t._query,
      "where",
      n,
      t.firestore._databaseId,
      this._field,
      this._op,
      this._value
    );
  }
}
class Fl extends kl {
  constructor(t, n) {
    super(), (this.type = t), (this._queryConstraints = n);
  }
  static _create(t, n) {
    return new Fl(t, n);
  }
  _parse(t) {
    const n = this._queryConstraints
      .map((r) => r._parse(t))
      .filter((r) => r.getFilters().length > 0);
    return n.length === 1 ? n[0] : Ke.create(n, this._getOperator());
  }
  _apply(t) {
    const n = this._parse(t);
    return n.getFilters().length === 0
      ? t
      : ((function (s, i) {
          let a = s;
          const l = i.getFlattenedFilters();
          for (const c of l) _p(a, c), (a = Va(a, c));
        })(t._query, n),
        new Kr(t.firestore, t.converter, Va(t._query, n)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return this.type === "and" ? "and" : "or";
  }
}
function bh(e, t, n) {
  if (typeof (n = Ni(n)) == "string") {
    if (n === "")
      throw new et(
        B.INVALID_ARGUMENT,
        "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string."
      );
    if (!Rd(t) && n.indexOf("/") !== -1)
      throw new et(
        B.INVALID_ARGUMENT,
        `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`
      );
    const r = t.path.child(Bt.fromString(n));
    if (!it.isDocumentKey(r))
      throw new et(
        B.INVALID_ARGUMENT,
        `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`
      );
    return Ku(e, new it(r));
  }
  if (n instanceof dn) return Ku(e, n._key);
  throw new et(
    B.INVALID_ARGUMENT,
    `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mo(
      n
    )}.`
  );
}
function Rh(e, t) {
  if (!Array.isArray(e) || e.length === 0)
    throw new et(
      B.INVALID_ARGUMENT,
      `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`
    );
}
function _p(e, t) {
  const n = (function (s, i) {
    for (const a of s)
      for (const l of a.getFlattenedFilters())
        if (i.indexOf(l.op) >= 0) return l.op;
    return null;
  })(
    e.filters,
    (function (s) {
      switch (s) {
        case "!=":
          return ["!=", "not-in"];
        case "array-contains-any":
        case "in":
          return ["not-in"];
        case "not-in":
          return ["array-contains-any", "in", "not-in", "!="];
        default:
          return [];
      }
    })(t.op)
  );
  if (n !== null)
    throw n === t.op
      ? new et(
          B.INVALID_ARGUMENT,
          `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`
        )
      : new et(
          B.INVALID_ARGUMENT,
          `Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`
        );
}
class rI {
  convertValue(t, n = "none") {
    switch (Mn(t)) {
      case 0:
        return null;
      case 1:
        return t.booleanValue;
      case 2:
        return qt(t.integerValue || t.doubleValue);
      case 3:
        return this.convertTimestamp(t.timestampValue);
      case 4:
        return this.convertServerTimestamp(t, n);
      case 5:
        return t.stringValue;
      case 6:
        return this.convertBytes(kn(t.bytesValue));
      case 7:
        return this.convertReference(t.referenceValue);
      case 8:
        return this.convertGeoPoint(t.geoPointValue);
      case 9:
        return this.convertArray(t.arrayValue, n);
      case 11:
        return this.convertObject(t.mapValue, n);
      case 10:
        return this.convertVectorValue(t.mapValue);
      default:
        throw ft();
    }
  }
  convertObject(t, n) {
    return this.convertObjectMap(t.fields, n);
  }
  convertObjectMap(t, n = "none") {
    const r = {};
    return (
      zr(t, (s, i) => {
        r[s] = this.convertValue(i, n);
      }),
      r
    );
  }
  convertVectorValue(t) {
    var n, r, s;
    const i =
      (s =
        (r =
          (n = t.fields) === null || n === void 0
            ? void 0
            : n.value.arrayValue) === null || r === void 0
          ? void 0
          : r.values) === null || s === void 0
        ? void 0
        : s.map((a) => qt(a.doubleValue));
    return new xl(i);
  }
  convertGeoPoint(t) {
    return new Dl(qt(t.latitude), qt(t.longitude));
  }
  convertArray(t, n) {
    return (t.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(t, n) {
    switch (n) {
      case "previous":
        const r = ao(t);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(Ls(t));
      default:
        return null;
    }
  }
  convertTimestamp(t) {
    const n = On(t);
    return new Jt(n.seconds, n.nanos);
  }
  convertDocumentKey(t, n) {
    const r = Bt.fromString(t);
    $t(Gd(r));
    const s = new Fs(r.get(1), r.get(3)),
      i = new it(r.popFirst(5));
    return (
      s.isEqual(n) ||
        un(
          `Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`
        ),
      i
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mi {
  constructor(t, n) {
    (this.hasPendingWrites = t), (this.fromCache = n);
  }
  isEqual(t) {
    return (
      this.hasPendingWrites === t.hasPendingWrites &&
      this.fromCache === t.fromCache
    );
  }
}
class sI extends gp {
  constructor(t, n, r, s, i, a) {
    super(t, n, r, s, a),
      (this._firestore = t),
      (this._firestoreImpl = t),
      (this.metadata = i);
  }
  exists() {
    return super.exists();
  }
  data(t = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new bi(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(n, t);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        t.serverTimestamps
      );
    }
  }
  get(t, n = {}) {
    if (this._document) {
      const r = this._document.data.field(mp("DocumentSnapshot.get", t));
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
}
class bi extends sI {
  data(t = {}) {
    return super.data(t);
  }
}
class iI {
  constructor(t, n, r, s) {
    (this._firestore = t),
      (this._userDataWriter = n),
      (this._snapshot = s),
      (this.metadata = new mi(s.hasPendingWrites, s.fromCache)),
      (this.query = r);
  }
  get docs() {
    const t = [];
    return this.forEach((n) => t.push(n)), t;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(t, n) {
    this._snapshot.docs.forEach((r) => {
      t.call(
        n,
        new bi(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new mi(
            this._snapshot.mutatedKeys.has(r.key),
            this._snapshot.fromCache
          ),
          this.query.converter
        )
      );
    });
  }
  docChanges(t = {}) {
    const n = !!t.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges)
      throw new et(
        B.INVALID_ARGUMENT,
        "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (s, i) {
          if (s._snapshot.oldDocs.isEmpty()) {
            let a = 0;
            return s._snapshot.docChanges.map((l) => {
              const c = new bi(
                s._firestore,
                s._userDataWriter,
                l.doc.key,
                l.doc,
                new mi(
                  s._snapshot.mutatedKeys.has(l.doc.key),
                  s._snapshot.fromCache
                ),
                s.query.converter
              );
              return (
                l.doc, { type: "added", doc: c, oldIndex: -1, newIndex: a++ }
              );
            });
          }
          {
            let a = s._snapshot.oldDocs;
            return s._snapshot.docChanges
              .filter((l) => i || l.type !== 3)
              .map((l) => {
                const c = new bi(
                  s._firestore,
                  s._userDataWriter,
                  l.doc.key,
                  l.doc,
                  new mi(
                    s._snapshot.mutatedKeys.has(l.doc.key),
                    s._snapshot.fromCache
                  ),
                  s.query.converter
                );
                let f = -1,
                  d = -1;
                return (
                  l.type !== 0 &&
                    ((f = a.indexOf(l.doc.key)), (a = a.delete(l.doc.key))),
                  l.type !== 1 &&
                    ((a = a.add(l.doc)), (d = a.indexOf(l.doc.key))),
                  { type: oI(l.type), doc: c, oldIndex: f, newIndex: d }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
}
function oI(e) {
  switch (e) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return ft();
  }
}
class aI extends rI {
  constructor(t) {
    super(), (this.firestore = t);
  }
  convertBytes(t) {
    return new Br(t);
  }
  convertReference(t) {
    const n = this.convertDocumentKey(t, this.firestore._databaseId);
    return new dn(this.firestore, null, n);
  }
}
function Bl(e) {
  e = Ua(e, Kr);
  const t = Ua(e.firestore, up),
    n = zw(t),
    r = new aI(t);
  return eI(e._query), Bw(n, e._query).then((s) => new iI(t, r, e, s));
}
(function (t, n = !0) {
  (function (s) {
    qr = s;
  })(t0),
    ki(
      new Os(
        "firestore",
        (r, { instanceIdentifier: s, options: i }) => {
          const a = r.getProvider("app").getImmediate(),
            l = new up(
              new d0(r.getProvider("auth-internal")),
              new _0(r.getProvider("app-check-internal")),
              (function (f, d) {
                if (
                  !Object.prototype.hasOwnProperty.apply(f.options, [
                    "projectId",
                  ])
                )
                  throw new et(
                    B.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new Fs(f.options.projectId, d);
              })(a, s),
              a
            );
          return (
            (i = Object.assign({ useFetchStreams: n }, i)), l._setSettings(i), l
          );
        },
        "PUBLIC"
      ).setMultipleInstances(!0)
    ),
    Cr($u, "4.7.5", t),
    Cr($u, "4.7.5", "esm2017");
})();
var lI = "firebase",
  cI = "11.0.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Cr(lI, cI, "app");
const uI = {
    apiKey: "AIzaSyC5VGmYehUqxv8lK6iv98z7b99kg2Ql22E",
    authDomain: "youmeal-61c3d.firebaseapp.com",
    projectId: "youmeal-61c3d",
    storageBucket: "youmeal-61c3d.firebasestorage.app",
    messagingSenderId: "383157731",
    appId: "1:383157731:web:13a5fbcab1c90339ae8cd6",
  },
  hI = ad(uI),
  $l = jw(hI),
  fI = {
    __name: "Burgers",
    setup(e) {
      const t = sr([]);
      return (
        $r(async () => {
          const n = Ml(Vl($l, "Burgers"));
          (await Bl(n)).forEach((s) => {
            t.value.push(s.data());
          });
        }),
        (n, r) => (pt(), fn(Ov, { burgers: t.value }, null, 8, ["burgers"]))
      );
    },
  },
  dI = { class: "cart" },
  pI = ["src"],
  gI = { class: "price" },
  mI = { class: "name" },
  _I = { class: "weight" },
  yI = {
    __name: "Cart",
    props: {
      img: String,
      price: Number,
      title: String,
      gram: Number,
      onClick: Function,
    },
    setup(e) {
      return (t, n) => (
        pt(),
        Nt("div", dI, [
          J("img", { src: e.img, alt: "image" }, null, 8, pI),
          J("h1", gI, Xt(e.price) + "$", 1),
          J("h2", mI, Xt(e.title), 1),
          J("h3", _I, Xt(e.gram) + "g", 1),
          J(
            "button",
            {
              class: "button",
              onClick: n[0] || (n[0] = (...r) => e.onClick && e.onClick(...r)),
            },
            "Add to cart"
          ),
        ])
      );
    },
  },
  vI = Zt(yI, [["__scopeId", "data-v-0c72311b"]]),
  EI = { class: "appetizer" },
  TI = { class: "menu" },
  wI = {
    __name: "Collecshin",
    props: { appetizers: Array },
    setup(e) {
      const { addToCart: t } = we("add-to-cart");
      return (n, r) => (
        pt(),
        Nt("div", EI, [
          r[0] || (r[0] = J("h1", null, "Appetizers", -1)),
          J("div", TI, [
            (pt(!0),
            Nt(
              Te,
              null,
              to(
                e.appetizers,
                (s) => (
                  pt(),
                  fn(
                    vI,
                    {
                      key: s.id,
                      img: s.image,
                      price: s.price,
                      title: s.Name,
                      gram: s.gram,
                      onclick: () => De(t)(s),
                    },
                    null,
                    8,
                    ["img", "price", "title", "gram", "onclick"]
                  )
                )
              ),
              128
            )),
          ]),
        ])
      );
    },
  },
  II = Zt(wI, [["__scopeId", "data-v-e1de87b2"]]),
  AI = {
    __name: "Appetizers",
    setup(e) {
      const t = sr([]);
      return (
        $r(async () => {
          const n = Ml(Vl($l, "Appetizers"));
          (await Bl(n)).forEach((s) => {
            t.value.push(s.data());
          });
        }),
        (n, r) => (
          pt(), fn(II, { appetizers: t.value }, null, 8, ["appetizers"])
        )
      );
    },
  },
  bI = { class: "cart" },
  RI = ["src"],
  CI = { class: "price" },
  SI = { class: "name" },
  PI = { class: "weight" },
  VI = {
    __name: "Cart",
    props: {
      img: String,
      price: Number,
      title: String,
      gram: Number,
      onClick: Function,
    },
    setup(e) {
      return (t, n) => (
        pt(),
        Nt("div", bI, [
          J("img", { src: e.img, alt: "image" }, null, 8, RI),
          J("h1", CI, Xt(e.price) + "$", 1),
          J("h2", SI, Xt(e.title), 1),
          J("h3", PI, Xt(e.gram) + "g", 1),
          J(
            "button",
            {
              class: "button",
              onClick: n[0] || (n[0] = (...r) => e.onClick && e.onClick(...r)),
            },
            "Add to cart"
          ),
        ])
      );
    },
  },
  DI = Zt(VI, [["__scopeId", "data-v-716a9605"]]),
  xI = { class: "hotdog" },
  NI = { class: "menu" },
  OI = {
    __name: "Collecshin",
    props: { hotdogs: Array },
    setup(e) {
      const { addToCart: t } = we("add-to-cart");
      return (n, r) => (
        pt(),
        Nt("div", xI, [
          r[0] || (r[0] = J("h1", null, "Hot dogs", -1)),
          J("div", NI, [
            (pt(!0),
            Nt(
              Te,
              null,
              to(
                e.hotdogs,
                (s) => (
                  pt(),
                  fn(
                    DI,
                    {
                      key: s.key,
                      img: s.image,
                      price: s.price,
                      title: s.Name,
                      gram: s.gram,
                      onclick: () => De(t)(s),
                    },
                    null,
                    8,
                    ["img", "price", "title", "gram", "onclick"]
                  )
                )
              ),
              128
            )),
          ]),
        ])
      );
    },
  },
  kI = Zt(OI, [["__scopeId", "data-v-58464371"]]),
  MI = {
    __name: "Hot dogs",
    setup(e) {
      const t = sr([]);
      return (
        $r(async () => {
          const n = Ml(Vl($l, "Hot dogs"));
          (await Bl(n)).forEach((s) => {
            t.value.push(s.data());
          });
        }),
        (n, r) => (pt(), fn(kI, { hotdogs: t.value }, null, 8, ["hotdogs"]))
      );
    },
  },
  LI = {},
  FI = { class: "out-of-stock" };
function BI(e, t) {
  return (
    pt(), Nt("div", FI, t[0] || (t[0] = [J("h1", null, "Out of stock", -1)]))
  );
}
const gr = Zt(LI, [
    ["render", BI],
    ["__scopeId", "data-v-b7582f7c"],
  ]),
  $I = yy({
    routes: [
      { path: "/", component: fI },
      { path: "/appetizers", component: AI },
      { path: "/hotdogs", component: MI },
      { path: "/combo", component: gr },
      { path: "/shawarma", component: gr },
      { path: "/pizza", component: gr },
      { path: "/wok", component: gr },
      { path: "/desserts", component: gr },
      { path: "/sauces", component: gr },
    ],
    history: W_(),
  }),
  yp = g_(Iv);
yp.use($I);
yp.mount("#app");
