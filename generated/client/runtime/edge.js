var hc = Object.create;
var ir = Object.defineProperty;
var yc = Object.getOwnPropertyDescriptor;
var bc = Object.getOwnPropertyNames;
var wc = Object.getPrototypeOf, vc = Object.prototype.hasOwnProperty;
var u = (e, t) => ir(e, "name", { value: t, configurable: !0 });
var sr = (e, t) => () => (e && (t = e(e = 0)), t);
var W = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Jn = (e, t) => {
    for (var r in t) ir(e, r, { get: t[r], enumerable: !0 });
  },
  Ei = (e, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function") {
      for (let o of bc(t)) {
        !vc.call(e, o) && o !== r &&
          ir(e, o, {
            get: () => t[o],
            enumerable: !(n = yc(t, o)) || n.enumerable,
          });
      }
    }
    return e;
  };
var Z = (
    e,
    t,
    r,
  ) => (r = e != null ? hc(wc(e)) : {},
    Ei(
      t || !e || !e.__esModule
        ? ir(r, "default", { value: e, enumerable: !0 })
        : r,
      e,
    )),
  xi = (e) => Ei(ir({}, "__esModule", { value: !0 }), e);
function L(e) {
  return () => e;
}
function Ie() {
  return b;
}
var Ec,
  b,
  g = sr(() => {
    u(L, "noop");
    Ec = Promise.resolve();
    u(Ie, "getProcess");
    b = {
      abort: L(void 0),
      addListener: L(Ie()),
      allowedNodeEnvironmentFlags: new Set(),
      arch: "x64",
      argv: ["/bin/node"],
      argv0: "node",
      chdir: L(void 0),
      config: {
        target_defaults: {
          cflags: [],
          default_configuration: "",
          defines: [],
          include_dirs: [],
          libraries: [],
        },
        variables: {
          clang: 0,
          host_arch: "x64",
          node_install_npm: !1,
          node_install_waf: !1,
          node_prefix: "",
          node_shared_openssl: !1,
          node_shared_v8: !1,
          node_shared_zlib: !1,
          node_use_dtrace: !1,
          node_use_etw: !1,
          node_use_openssl: !1,
          target_arch: "x64",
          v8_no_strict_aliasing: 0,
          v8_use_snapshot: !1,
          visibility: "",
        },
      },
      connected: !1,
      cpuUsage: () => ({ user: 0, system: 0 }),
      cwd: () => "/",
      debugPort: 0,
      disconnect: L(void 0),
      domain: {
        run: L(void 0),
        add: L(void 0),
        remove: L(void 0),
        bind: L(void 0),
        intercept: L(void 0),
        ...Ie(),
      },
      emit: L(Ie()),
      emitWarning: L(void 0),
      env: {},
      eventNames: () => [],
      execArgv: [],
      execPath: "/",
      exit: L(void 0),
      features: {
        inspector: !1,
        debug: !1,
        uv: !1,
        ipv6: !1,
        tls_alpn: !1,
        tls_sni: !1,
        tls_ocsp: !1,
        tls: !1,
      },
      getMaxListeners: L(0),
      getegid: L(0),
      geteuid: L(0),
      getgid: L(0),
      getgroups: L([]),
      getuid: L(0),
      hasUncaughtExceptionCaptureCallback: L(!1),
      hrtime: L([0, 0]),
      platform: "linux",
      kill: L(!0),
      listenerCount: L(0),
      listeners: L([]),
      memoryUsage: L({
        arrayBuffers: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0,
        rss: 0,
      }),
      nextTick: (e, ...t) => {
        Ec.then(() => e(...t)).catch((r) => {
          setTimeout(() => {
            throw r;
          }, 0);
        });
      },
      off: L(Ie()),
      on: L(Ie()),
      once: L(Ie()),
      openStdin: L({}),
      pid: 0,
      ppid: 0,
      prependListener: L(Ie()),
      prependOnceListener: L(Ie()),
      rawListeners: L([]),
      release: { name: "node" },
      removeAllListeners: L(Ie()),
      removeListener: L(Ie()),
      resourceUsage: L({
        fsRead: 0,
        fsWrite: 0,
        involuntaryContextSwitches: 0,
        ipcReceived: 0,
        ipcSent: 0,
        majorPageFault: 0,
        maxRSS: 0,
        minorPageFault: 0,
        sharedMemorySize: 0,
        signalsCount: 0,
        swappedOut: 0,
        systemCPUTime: 0,
        unsharedDataSize: 0,
        unsharedStackSize: 0,
        userCPUTime: 0,
        voluntaryContextSwitches: 0,
      }),
      setMaxListeners: L(Ie()),
      setUncaughtExceptionCaptureCallback: L(void 0),
      setegid: L(void 0),
      seteuid: L(void 0),
      setgid: L(void 0),
      setgroups: L(void 0),
      setuid: L(void 0),
      stderr: { fd: 2 },
      stdin: { fd: 0 },
      stdout: { fd: 1 },
      title: "node",
      traceDeprecation: !1,
      umask: L(0),
      uptime: L(0),
      version: "",
      versions: {
        http_parser: "",
        node: "",
        v8: "",
        ares: "",
        uv: "",
        zlib: "",
        modules: "",
        openssl: "",
      },
    };
  });
var x,
  d = sr(() => {
    x = u(() => {}, "fn");
    x.prototype = x;
  });
var qi = W((Ft) => {
  "use strict";
  m();
  g();
  d();
  var _i = u(
      (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      "q",
    ),
    xc = _i((e) => {
      "use strict";
      e.byteLength = c, e.toByteArray = f, e.fromByteArray = w;
      var t = [],
        r = [],
        n = typeof Uint8Array < "u" ? Uint8Array : Array,
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, s = o.length; i < s; ++i) t[i] = o[i], r[o.charCodeAt(i)] = i;
      var i, s;
      r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63;
      function a(v) {
        var y = v.length;
        if (y % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var A = v.indexOf("=");
        A === -1 && (A = y);
        var S = A === y ? 0 : 4 - A % 4;
        return [A, S];
      }
      u(a, "j");
      function c(v) {
        var y = a(v), A = y[0], S = y[1];
        return (A + S) * 3 / 4 - S;
      }
      u(c, "sr");
      function l(v, y, A) {
        return (y + A) * 3 / 4 - A;
      }
      u(l, "lr");
      function f(v) {
        var y,
          A = a(v),
          S = A[0],
          T = A[1],
          _ = new n(l(v, S, T)),
          P = 0,
          O = T > 0 ? S - 4 : S,
          F;
        for (F = 0; F < O; F += 4) {
          y = r[v.charCodeAt(F)] << 18 | r[v.charCodeAt(F + 1)] << 12 |
            r[v.charCodeAt(F + 2)] << 6 | r[v.charCodeAt(F + 3)],
            _[P++] = y >> 16 & 255,
            _[P++] = y >> 8 & 255,
            _[P++] = y & 255;
        }
        return T === 2 &&
          (y = r[v.charCodeAt(F)] << 2 | r[v.charCodeAt(F + 1)] >> 4,
            _[P++] = y & 255),
          T === 1 &&
          (y = r[v.charCodeAt(F)] << 10 | r[v.charCodeAt(F + 1)] << 4 |
            r[v.charCodeAt(F + 2)] >> 2,
            _[P++] = y >> 8 & 255,
            _[P++] = y & 255),
          _;
      }
      u(f, "ar");
      function p(v) {
        return t[v >> 18 & 63] + t[v >> 12 & 63] + t[v >> 6 & 63] + t[v & 63];
      }
      u(p, "yr");
      function h(v, y, A) {
        for (var S, T = [], _ = y; _ < A; _ += 3) {
          S = (v[_] << 16 & 16711680) + (v[_ + 1] << 8 & 65280) +
            (v[_ + 2] & 255), T.push(p(S));
        }
        return T.join("");
      }
      u(h, "wr");
      function w(v) {
        for (
          var y, A = v.length, S = A % 3, T = [], _ = 16383, P = 0, O = A - S;
          P < O;
          P += _
        ) {
          T.push(h(v, P, P + _ > O ? O : P + _));
        }
        return S === 1
          ? (y = v[A - 1], T.push(t[y >> 2] + t[y << 4 & 63] + "=="))
          : S === 2 &&
            (y = (v[A - 2] << 8) + v[A - 1],
              T.push(t[y >> 10] + t[y >> 4 & 63] + t[y << 2 & 63] + "=")),
          T.join("");
      }
      u(w, "xr");
    }),
    Ac = _i((e) => {
      e.read = function (t, r, n, o, i) {
        var s,
          a,
          c = i * 8 - o - 1,
          l = (1 << c) - 1,
          f = l >> 1,
          p = -7,
          h = n ? i - 1 : 0,
          w = n ? -1 : 1,
          v = t[r + h];
        for (
          h += w, s = v & (1 << -p) - 1, v >>= -p, p += c;
          p > 0;
          s = s * 256 + t[r + h], h += w, p -= 8
        );
        for (
          a = s & (1 << -p) - 1, s >>= -p, p += o;
          p > 0;
          a = a * 256 + t[r + h], h += w, p -= 8
        );
        if (s === 0) s = 1 - f;
        else {
          if (s === l) return a ? NaN : (v ? -1 : 1) * (1 / 0);
          a = a + Math.pow(2, o), s = s - f;
        }
        return (v ? -1 : 1) * a * Math.pow(2, s - o);
      },
        e.write = function (t, r, n, o, i, s) {
          var a,
            c,
            l,
            f = s * 8 - i - 1,
            p = (1 << f) - 1,
            h = p >> 1,
            w = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            v = o ? 0 : s - 1,
            y = o ? 1 : -1,
            A = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? (c = isNaN(r) ? 1 : 0, a = p)
                : (a = Math.floor(Math.log(r) / Math.LN2),
                  r * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2),
                  a + h >= 1 ? r += w / l : r += w * Math.pow(2, 1 - h),
                  r * l >= 2 && (a++, l /= 2),
                  a + h >= p
                    ? (c = 0, a = p)
                    : a + h >= 1
                    ? (c = (r * l - 1) * Math.pow(2, i), a = a + h)
                    : (c = r * Math.pow(2, h - 1) * Math.pow(2, i), a = 0));
            i >= 8;
            t[n + v] = c & 255, v += y, c /= 256, i -= 8
          );
          for (
            a = a << i | c, f += i;
            f > 0;
            t[n + v] = a & 255, v += y, a /= 256, f -= 8
          );
          t[n + v - y] |= A * 128;
        };
    }),
    zn = xc(),
    It = Ac(),
    Ai = typeof Symbol == "function" && typeof Symbol.for == "function"
      ? Symbol.for("nodejs.util.inspect.custom")
      : null;
  Ft.Buffer = M;
  Ft.SlowBuffer = Oc;
  Ft.INSPECT_MAX_BYTES = 50;
  var Gr = 2147483647;
  Ft.kMaxLength = Gr;
  M.TYPED_ARRAY_SUPPORT = Tc();
  !M.TYPED_ARRAY_SUPPORT && typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
    );
  function Tc() {
    try {
      let e = new Uint8Array(1),
        t = {
          foo: function () {
            return 42;
          },
        };
      return Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(e, t),
        e.foo() === 42;
    } catch (e) {
      return !1;
    }
  }
  u(Tc, "Br");
  Object.defineProperty(M.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (M.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(M.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (M.isBuffer(this)) return this.byteOffset;
    },
  });
  function We(e) {
    if (e > Gr) {
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
    }
    let t = new Uint8Array(e);
    return Object.setPrototypeOf(t, M.prototype), t;
  }
  u(We, "d");
  function M(e, t, r) {
    if (typeof e == "number") {
      if (typeof t == "string") {
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        );
      }
      return Qn(e);
    }
    return Mi(e, t, r);
  }
  u(M, "h");
  M.poolSize = 8192;
  function Mi(e, t, r) {
    if (typeof e == "string") return Sc(e, t);
    if (ArrayBuffer.isView(e)) return _c(e);
    if (e == null) {
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof e,
      );
    }
    if (
      Le(e, ArrayBuffer) || e && Le(e.buffer, ArrayBuffer) ||
      typeof SharedArrayBuffer < "u" &&
        (Le(e, SharedArrayBuffer) || e && Le(e.buffer, SharedArrayBuffer))
    ) {
      return Ii(e, t, r);
    }
    if (typeof e == "number") {
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      );
    }
    let n = e.valueOf && e.valueOf();
    if (n != null && n !== e) return M.from(n, t, r);
    let o = Mc(e);
    if (o) return o;
    if (
      typeof Symbol < "u" && Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == "function"
    ) {
      return M.from(e[Symbol.toPrimitive]("string"), t, r);
    }
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof e,
    );
  }
  u(Mi, "Z");
  M.from = function (e, t, r) {
    return Mi(e, t, r);
  };
  Object.setPrototypeOf(M.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(M, Uint8Array);
  function Oi(e) {
    if (typeof e != "number") {
      throw new TypeError('"size" argument must be of type number');
    }
    if (e < 0) {
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
    }
  }
  u(Oi, "Q");
  function Pc(e, t, r) {
    return Oi(e),
      e <= 0
        ? We(e)
        : t !== void 0
        ? typeof r == "string" ? We(e).fill(t, r) : We(e).fill(t)
        : We(e);
  }
  u(Pc, "Er");
  M.alloc = function (e, t, r) {
    return Pc(e, t, r);
  };
  function Qn(e) {
    return Oi(e), We(e < 0 ? 0 : Kn(e) | 0);
  }
  u(Qn, "P");
  M.allocUnsafe = function (e) {
    return Qn(e);
  };
  M.allocUnsafeSlow = function (e) {
    return Qn(e);
  };
  function Sc(e, t) {
    if ((typeof t != "string" || t === "") && (t = "utf8"), !M.isEncoding(t)) {
      throw new TypeError("Unknown encoding: " + t);
    }
    let r = Ci(e, t) | 0, n = We(r), o = n.write(e, t);
    return o !== r && (n = n.slice(0, o)), n;
  }
  u(Sc, "dr");
  function Wn(e) {
    let t = e.length < 0 ? 0 : Kn(e.length) | 0, r = We(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
    return r;
  }
  u(Wn, "D");
  function _c(e) {
    if (Le(e, Uint8Array)) {
      let t = new Uint8Array(e);
      return Ii(t.buffer, t.byteOffset, t.byteLength);
    }
    return Wn(e);
  }
  u(_c, "gr");
  function Ii(e, t, r) {
    if (t < 0 || e.byteLength < t) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (e.byteLength < t + (r || 0)) {
      throw new RangeError('"length" is outside of buffer bounds');
    }
    let n;
    return t === void 0 && r === void 0
      ? n = new Uint8Array(e)
      : r === void 0
      ? n = new Uint8Array(e, t)
      : n = new Uint8Array(e, t, r),
      Object.setPrototypeOf(n, M.prototype),
      n;
  }
  u(Ii, "$");
  function Mc(e) {
    if (M.isBuffer(e)) {
      let t = Kn(e.length) | 0, r = We(t);
      return r.length === 0 || e.copy(r, 0, 0, t), r;
    }
    if (e.length !== void 0) {
      return typeof e.length != "number" || Zn(e.length) ? We(0) : Wn(e);
    }
    if (e.type === "Buffer" && Array.isArray(e.data)) return Wn(e.data);
  }
  u(Mc, "mr");
  function Kn(e) {
    if (e >= Gr) {
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          Gr.toString(16) + " bytes",
      );
    }
    return e | 0;
  }
  u(Kn, "O");
  function Oc(e) {
    return +e != e && (e = 0), M.alloc(+e);
  }
  u(Oc, "Ir");
  M.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== M.prototype;
  };
  M.compare = function (e, t) {
    if (
      Le(e, Uint8Array) && (e = M.from(e, e.offset, e.byteLength)),
        Le(t, Uint8Array) && (t = M.from(t, t.offset, t.byteLength)),
        !M.isBuffer(e) || !M.isBuffer(t)
    ) {
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
      );
    }
    if (e === t) return 0;
    let r = e.length, n = t.length;
    for (let o = 0, i = Math.min(r, n); o < i; ++o) {
      if (e[o] !== t[o]) {
        r = e[o], n = t[o];
        break;
      }
    }
    return r < n ? -1 : n < r ? 1 : 0;
  };
  M.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  M.concat = function (e, t) {
    if (!Array.isArray(e)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (e.length === 0) return M.alloc(0);
    let r;
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
    let n = M.allocUnsafe(t), o = 0;
    for (r = 0; r < e.length; ++r) {
      let i = e[r];
      if (Le(i, Uint8Array)) {
        o + i.length > n.length
          ? (M.isBuffer(i) || (i = M.from(i)), i.copy(n, o))
          : Uint8Array.prototype.set.call(n, i, o);
      } else if (M.isBuffer(i)) i.copy(n, o);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      o += i.length;
    }
    return n;
  };
  function Ci(e, t) {
    if (M.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || Le(e, ArrayBuffer)) return e.byteLength;
    if (typeof e != "string") {
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof e,
      );
    }
    let r = e.length, n = arguments.length > 2 && arguments[2] === !0;
    if (!n && r === 0) return 0;
    let o = !1;
    for (;;) {
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return Hn(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return Li(e).length;
        default:
          if (o) return n ? -1 : Hn(e).length;
          t = ("" + t).toLowerCase(), o = !0;
      }
    }
  }
  u(Ci, "v");
  M.byteLength = Ci;
  function Ic(e, t, r) {
    let n = !1;
    if (
      (t === void 0 || t < 0) && (t = 0),
        t > this.length ||
        ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
        (r >>>= 0, t >>>= 0, r <= t)
    ) {
      return "";
    }
    for (e || (e = "utf8");;) {
      switch (e) {
        case "hex":
          return Lc(this, t, r);
        case "utf8":
        case "utf-8":
          return Ri(this, t, r);
        case "ascii":
          return $c(this, t, r);
        case "latin1":
        case "binary":
          return Bc(this, t, r);
        case "base64":
          return Dc(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return qc(this, t, r);
        default:
          if (n) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), n = !0;
      }
    }
  }
  u(Ic, "Fr");
  M.prototype._isBuffer = !0;
  function wt(e, t, r) {
    let n = e[t];
    e[t] = e[r], e[r] = n;
  }
  u(wt, "I");
  M.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (let t = 0; t < e; t += 2) wt(this, t, t + 1);
    return this;
  };
  M.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let t = 0; t < e; t += 4) wt(this, t, t + 3), wt(this, t + 1, t + 2);
    return this;
  };
  M.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (let t = 0; t < e; t += 8) {
      wt(this, t, t + 7),
        wt(this, t + 1, t + 6),
        wt(this, t + 2, t + 5),
        wt(this, t + 3, t + 4);
    }
    return this;
  };
  M.prototype.toString = function () {
    let e = this.length;
    return e === 0
      ? ""
      : arguments.length === 0
      ? Ri(this, 0, e)
      : Ic.apply(this, arguments);
  };
  M.prototype.toLocaleString = M.prototype.toString;
  M.prototype.equals = function (e) {
    if (!M.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : M.compare(this, e) === 0;
  };
  M.prototype.inspect = function () {
    let e = "", t = Ft.INSPECT_MAX_BYTES;
    return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(),
      this.length > t && (e += " ... "),
      "<Buffer " + e + ">";
  };
  Ai && (M.prototype[Ai] = M.prototype.inspect);
  M.prototype.compare = function (e, t, r, n, o) {
    if (
      Le(e, Uint8Array) && (e = M.from(e, e.offset, e.byteLength)),
        !M.isBuffer(e)
    ) {
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e,
      );
    }
    if (
      t === void 0 && (t = 0),
        r === void 0 && (r = e ? e.length : 0),
        n === void 0 && (n = 0),
        o === void 0 && (o = this.length),
        t < 0 || r > e.length || n < 0 || o > this.length
    ) {
      throw new RangeError("out of range index");
    }
    if (n >= o && t >= r) return 0;
    if (n >= o) return -1;
    if (t >= r) return 1;
    if (t >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === e) return 0;
    let i = o - n,
      s = r - t,
      a = Math.min(i, s),
      c = this.slice(n, o),
      l = e.slice(t, r);
    for (let f = 0; f < a; ++f) {
      if (c[f] !== l[f]) {
        i = c[f], s = l[f];
        break;
      }
    }
    return i < s ? -1 : s < i ? 1 : 0;
  };
  function Fi(e, t, r, n, o) {
    if (e.length === 0) return -1;
    if (
      typeof r == "string"
        ? (n = r, r = 0)
        : r > 2147483647
        ? r = 2147483647
        : r < -2147483648 && (r = -2147483648),
        r = +r,
        Zn(r) && (r = o ? 0 : e.length - 1),
        r < 0 && (r = e.length + r),
        r >= e.length
    ) {
      if (o) return -1;
      r = e.length - 1;
    } else if (r < 0) {
      if (o) r = 0;
      else return -1;
    }
    if (typeof t == "string" && (t = M.from(t, n)), M.isBuffer(t)) {
      return t.length === 0 ? -1 : Ti(e, t, r, n, o);
    }
    if (typeof t == "number") {
      return t = t & 255,
        typeof Uint8Array.prototype.indexOf == "function"
          ? o
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : Ti(e, [t], r, n, o);
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  u(Fi, "rr");
  function Ti(e, t, r, n, o) {
    let i = 1, s = e.length, a = t.length;
    if (
      n !== void 0 &&
      (n = String(n).toLowerCase(),
        n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      i = 2, s /= 2, a /= 2, r /= 2;
    }
    function c(f, p) {
      return i === 1 ? f[p] : f.readUInt16BE(p * i);
    }
    u(c, "c");
    let l;
    if (o) {
      let f = -1;
      for (l = r; l < s; l++) {
        if (c(e, l) === c(t, f === -1 ? 0 : l - f)) {
          if (f === -1 && (f = l), l - f + 1 === a) {
            return f * i;
          }
        } else f !== -1 && (l -= l - f), f = -1;
      }
    } else {
      for (r + a > s && (r = s - a), l = r; l >= 0; l--) {
        let f = !0;
        for (let p = 0; p < a; p++) {
          if (c(e, l + p) !== c(t, p)) {
            f = !1;
            break;
          }
        }
        if (f) return l;
      }
    }
    return -1;
  }
  u(Ti, "z");
  M.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1;
  };
  M.prototype.indexOf = function (e, t, r) {
    return Fi(this, e, t, r, !0);
  };
  M.prototype.lastIndexOf = function (e, t, r) {
    return Fi(this, e, t, r, !1);
  };
  function Cc(e, t, r, n) {
    r = Number(r) || 0;
    let o = e.length - r;
    n ? (n = Number(n), n > o && (n = o)) : n = o;
    let i = t.length;
    n > i / 2 && (n = i / 2);
    let s;
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16);
      if (Zn(a)) return s;
      e[r + s] = a;
    }
    return s;
  }
  u(Cc, "Ar");
  function Fc(e, t, r, n) {
    return Jr(Hn(t, e.length - r), e, r, n);
  }
  u(Fc, "Ur");
  function Rc(e, t, r, n) {
    return Jr(Jc(t), e, r, n);
  }
  u(Rc, "Rr");
  function kc(e, t, r, n) {
    return Jr(Li(t), e, r, n);
  }
  u(kc, "Tr");
  function Nc(e, t, r, n) {
    return Jr(zc(t, e.length - r), e, r, n);
  }
  u(Nc, "Cr");
  M.prototype.write = function (e, t, r, n) {
    if (t === void 0) n = "utf8", r = this.length, t = 0;
    else if (r === void 0 && typeof t == "string") {
      n = t, r = this.length, t = 0;
    } else if (isFinite(t)) {
      t = t >>> 0,
        isFinite(r)
          ? (r = r >>> 0, n === void 0 && (n = "utf8"))
          : (n = r, r = void 0);
    } else {
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported",
      );
    }
    let o = this.length - t;
    if (
      (r === void 0 || r > o) && (r = o),
        e.length > 0 && (r < 0 || t < 0) || t > this.length
    ) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    n || (n = "utf8");
    let i = !1;
    for (;;) {
      switch (n) {
        case "hex":
          return Cc(this, e, t, r);
        case "utf8":
        case "utf-8":
          return Fc(this, e, t, r);
        case "ascii":
        case "latin1":
        case "binary":
          return Rc(this, e, t, r);
        case "base64":
          return kc(this, e, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Nc(this, e, t, r);
        default:
          if (i) throw new TypeError("Unknown encoding: " + n);
          n = ("" + n).toLowerCase(), i = !0;
      }
    }
  };
  M.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function Dc(e, t, r) {
    return t === 0 && r === e.length
      ? zn.fromByteArray(e)
      : zn.fromByteArray(e.slice(t, r));
  }
  u(Dc, "Sr");
  function Ri(e, t, r) {
    r = Math.min(e.length, r);
    let n = [], o = t;
    for (; o < r;) {
      let i = e[o], s = null, a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
      if (o + a <= r) {
        let c, l, f, p;
        switch (a) {
          case 1:
            i < 128 && (s = i);
            break;
          case 2:
            c = e[o + 1],
              (c & 192) === 128 &&
              (p = (i & 31) << 6 | c & 63, p > 127 && (s = p));
            break;
          case 3:
            c = e[o + 1],
              l = e[o + 2],
              (c & 192) === 128 && (l & 192) === 128 &&
              (p = (i & 15) << 12 | (c & 63) << 6 | l & 63,
                p > 2047 && (p < 55296 || p > 57343) && (s = p));
            break;
          case 4:
            c = e[o + 1],
              l = e[o + 2],
              f = e[o + 3],
              (c & 192) === 128 && (l & 192) === 128 && (f & 192) === 128 &&
              (p = (i & 15) << 18 | (c & 63) << 12 | (l & 63) << 6 | f & 63,
                p > 65535 && p < 1114112 && (s = p));
        }
      }
      s === null ? (s = 65533, a = 1) : s > 65535 &&
        (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023),
        n.push(s),
        o += a;
    }
    return jc(n);
  }
  u(Ri, "tr");
  var Pi = 4096;
  function jc(e) {
    let t = e.length;
    if (t <= Pi) return String.fromCharCode.apply(String, e);
    let r = "", n = 0;
    for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += Pi));
    return r;
  }
  u(jc, "_r");
  function $c(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let o = t; o < r; ++o) n += String.fromCharCode(e[o] & 127);
    return n;
  }
  u($c, "Lr");
  function Bc(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let o = t; o < r; ++o) n += String.fromCharCode(e[o]);
    return n;
  }
  u(Bc, "Nr");
  function Lc(e, t, r) {
    let n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    let o = "";
    for (let i = t; i < r; ++i) o += Wc[e[i]];
    return o;
  }
  u(Lc, "Mr");
  function qc(e, t, r) {
    let n = e.slice(t, r), o = "";
    for (let i = 0; i < n.length - 1; i += 2) {
      o += String.fromCharCode(n[i] + n[i + 1] * 256);
    }
    return o;
  }
  u(qc, "kr");
  M.prototype.slice = function (e, t) {
    let r = this.length;
    e = ~~e,
      t = t === void 0 ? r : ~~t,
      e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e);
    let n = this.subarray(e, t);
    return Object.setPrototypeOf(n, M.prototype), n;
  };
  function oe(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r) {
      throw new RangeError("Trying to access beyond buffer length");
    }
  }
  u(oe, "a");
  M.prototype.readUintLE = M.prototype.readUIntLE = function (e, t, r) {
    e = e >>> 0, t = t >>> 0, r || oe(e, t, this.length);
    let n = this[e], o = 1, i = 0;
    for (; ++i < t && (o *= 256);) n += this[e + i] * o;
    return n;
  };
  M.prototype.readUintBE = M.prototype.readUIntBE = function (e, t, r) {
    e = e >>> 0, t = t >>> 0, r || oe(e, t, this.length);
    let n = this[e + --t], o = 1;
    for (; t > 0 && (o *= 256);) n += this[e + --t] * o;
    return n;
  };
  M.prototype.readUint8 = M.prototype.readUInt8 = function (e, t) {
    return e = e >>> 0, t || oe(e, 1, this.length), this[e];
  };
  M.prototype.readUint16LE = M.prototype.readUInt16LE = function (e, t) {
    return e = e >>> 0, t || oe(e, 2, this.length), this[e] | this[e + 1] << 8;
  };
  M.prototype.readUint16BE = M.prototype.readUInt16BE = function (e, t) {
    return e = e >>> 0, t || oe(e, 2, this.length), this[e] << 8 | this[e + 1];
  };
  M.prototype.readUint32LE = M.prototype.readUInt32LE = function (e, t) {
    return e = e >>> 0,
      t || oe(e, 4, this.length),
      (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
  };
  M.prototype.readUint32BE = M.prototype.readUInt32BE = function (e, t) {
    return e = e >>> 0,
      t || oe(e, 4, this.length),
      this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  };
  M.prototype.readBigUInt64LE = tt(function (e) {
    e = e >>> 0, Ct(e, "offset");
    let t = this[e], r = this[e + 7];
    (t === void 0 || r === void 0) && ar(e, this.length - 8);
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      o = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
    return BigInt(n) + (BigInt(o) << BigInt(32));
  });
  M.prototype.readBigUInt64BE = tt(function (e) {
    e = e >>> 0, Ct(e, "offset");
    let t = this[e], r = this[e + 7];
    (t === void 0 || r === void 0) && ar(e, this.length - 8);
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      o = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
    return (BigInt(n) << BigInt(32)) + BigInt(o);
  });
  M.prototype.readIntLE = function (e, t, r) {
    e = e >>> 0, t = t >>> 0, r || oe(e, t, this.length);
    let n = this[e], o = 1, i = 0;
    for (; ++i < t && (o *= 256);) n += this[e + i] * o;
    return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n;
  };
  M.prototype.readIntBE = function (e, t, r) {
    e = e >>> 0, t = t >>> 0, r || oe(e, t, this.length);
    let n = t, o = 1, i = this[e + --n];
    for (; n > 0 && (o *= 256);) i += this[e + --n] * o;
    return o *= 128, i >= o && (i -= Math.pow(2, 8 * t)), i;
  };
  M.prototype.readInt8 = function (e, t) {
    return e = e >>> 0,
      t || oe(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
  };
  M.prototype.readInt16LE = function (e, t) {
    e = e >>> 0, t || oe(e, 2, this.length);
    let r = this[e] | this[e + 1] << 8;
    return r & 32768 ? r | 4294901760 : r;
  };
  M.prototype.readInt16BE = function (e, t) {
    e = e >>> 0, t || oe(e, 2, this.length);
    let r = this[e + 1] | this[e] << 8;
    return r & 32768 ? r | 4294901760 : r;
  };
  M.prototype.readInt32LE = function (e, t) {
    return e = e >>> 0,
      t || oe(e, 4, this.length),
      this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  };
  M.prototype.readInt32BE = function (e, t) {
    return e = e >>> 0,
      t || oe(e, 4, this.length),
      this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  };
  M.prototype.readBigInt64LE = tt(function (e) {
    e = e >>> 0, Ct(e, "offset");
    let t = this[e], r = this[e + 7];
    (t === void 0 || r === void 0) && ar(e, this.length - 8);
    let n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 +
      (r << 24);
    return (BigInt(n) << BigInt(32)) +
      BigInt(
        t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      );
  });
  M.prototype.readBigInt64BE = tt(function (e) {
    e = e >>> 0, Ct(e, "offset");
    let t = this[e], r = this[e + 7];
    (t === void 0 || r === void 0) && ar(e, this.length - 8);
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (BigInt(n) << BigInt(32)) +
      BigInt(
        this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r,
      );
  });
  M.prototype.readFloatLE = function (e, t) {
    return e = e >>> 0, t || oe(e, 4, this.length), It.read(this, e, !0, 23, 4);
  };
  M.prototype.readFloatBE = function (e, t) {
    return e = e >>> 0, t || oe(e, 4, this.length), It.read(this, e, !1, 23, 4);
  };
  M.prototype.readDoubleLE = function (e, t) {
    return e = e >>> 0, t || oe(e, 8, this.length), It.read(this, e, !0, 52, 8);
  };
  M.prototype.readDoubleBE = function (e, t) {
    return e = e >>> 0, t || oe(e, 8, this.length), It.read(this, e, !1, 52, 8);
  };
  function we(e, t, r, n, o, i) {
    if (!M.isBuffer(e)) {
      throw new TypeError('"buffer" argument must be a Buffer instance');
    }
    if (t > o || t < i) {
      throw new RangeError('"value" argument is out of bounds');
    }
    if (r + n > e.length) throw new RangeError("Index out of range");
  }
  u(we, "y");
  M.prototype.writeUintLE = M.prototype.writeUIntLE = function (e, t, r, n) {
    if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
      let s = Math.pow(2, 8 * r) - 1;
      we(this, e, t, r, s, 0);
    }
    let o = 1, i = 0;
    for (this[t] = e & 255; ++i < r && (o *= 256);) this[t + i] = e / o & 255;
    return t + r;
  };
  M.prototype.writeUintBE = M.prototype.writeUIntBE = function (e, t, r, n) {
    if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
      let s = Math.pow(2, 8 * r) - 1;
      we(this, e, t, r, s, 0);
    }
    let o = r - 1, i = 1;
    for (this[t + o] = e & 255; --o >= 0 && (i *= 256);) {
      this[t + o] = e / i & 255;
    }
    return t + r;
  };
  M.prototype.writeUint8 = M.prototype.writeUInt8 = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 1, 255, 0),
      this[t] = e & 255,
      t + 1;
  };
  M.prototype.writeUint16LE = M.prototype.writeUInt16LE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 2, 65535, 0),
      this[t] = e & 255,
      this[t + 1] = e >>> 8,
      t + 2;
  };
  M.prototype.writeUint16BE = M.prototype.writeUInt16BE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 2, 65535, 0),
      this[t] = e >>> 8,
      this[t + 1] = e & 255,
      t + 2;
  };
  M.prototype.writeUint32LE = M.prototype.writeUInt32LE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 4, 4294967295, 0),
      this[t + 3] = e >>> 24,
      this[t + 2] = e >>> 16,
      this[t + 1] = e >>> 8,
      this[t] = e & 255,
      t + 4;
  };
  M.prototype.writeUint32BE = M.prototype.writeUInt32BE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 4, 4294967295, 0),
      this[t] = e >>> 24,
      this[t + 1] = e >>> 16,
      this[t + 2] = e >>> 8,
      this[t + 3] = e & 255,
      t + 4;
  };
  function ki(e, t, r, n, o) {
    Bi(t, n, o, e, r, 7);
    let i = Number(t & BigInt(4294967295));
    e[r++] = i,
      i = i >> 8,
      e[r++] = i,
      i = i >> 8,
      e[r++] = i,
      i = i >> 8,
      e[r++] = i;
    let s = Number(t >> BigInt(32) & BigInt(4294967295));
    return e[r++] = s,
      s = s >> 8,
      e[r++] = s,
      s = s >> 8,
      e[r++] = s,
      s = s >> 8,
      e[r++] = s,
      r;
  }
  u(ki, "ir");
  function Ni(e, t, r, n, o) {
    Bi(t, n, o, e, r, 7);
    let i = Number(t & BigInt(4294967295));
    e[r + 7] = i,
      i = i >> 8,
      e[r + 6] = i,
      i = i >> 8,
      e[r + 5] = i,
      i = i >> 8,
      e[r + 4] = i;
    let s = Number(t >> BigInt(32) & BigInt(4294967295));
    return e[r + 3] = s,
      s = s >> 8,
      e[r + 2] = s,
      s = s >> 8,
      e[r + 1] = s,
      s = s >> 8,
      e[r] = s,
      r + 8;
  }
  u(Ni, "nr");
  M.prototype.writeBigUInt64LE = tt(function (e, t = 0) {
    return ki(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  M.prototype.writeBigUInt64BE = tt(function (e, t = 0) {
    return Ni(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  M.prototype.writeIntLE = function (e, t, r, n) {
    if (e = +e, t = t >>> 0, !n) {
      let a = Math.pow(2, 8 * r - 1);
      we(this, e, t, r, a - 1, -a);
    }
    let o = 0, i = 1, s = 0;
    for (this[t] = e & 255; ++o < r && (i *= 256);) {
      e < 0 && s === 0 && this[t + o - 1] !== 0 && (s = 1),
        this[t + o] = (e / i >> 0) - s & 255;
    }
    return t + r;
  };
  M.prototype.writeIntBE = function (e, t, r, n) {
    if (e = +e, t = t >>> 0, !n) {
      let a = Math.pow(2, 8 * r - 1);
      we(this, e, t, r, a - 1, -a);
    }
    let o = r - 1, i = 1, s = 0;
    for (this[t + o] = e & 255; --o >= 0 && (i *= 256);) {
      e < 0 && s === 0 && this[t + o + 1] !== 0 && (s = 1),
        this[t + o] = (e / i >> 0) - s & 255;
    }
    return t + r;
  };
  M.prototype.writeInt8 = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      this[t] = e & 255,
      t + 1;
  };
  M.prototype.writeInt16LE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 2, 32767, -32768),
      this[t] = e & 255,
      this[t + 1] = e >>> 8,
      t + 2;
  };
  M.prototype.writeInt16BE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 2, 32767, -32768),
      this[t] = e >>> 8,
      this[t + 1] = e & 255,
      t + 2;
  };
  M.prototype.writeInt32LE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 4, 2147483647, -2147483648),
      this[t] = e & 255,
      this[t + 1] = e >>> 8,
      this[t + 2] = e >>> 16,
      this[t + 3] = e >>> 24,
      t + 4;
  };
  M.prototype.writeInt32BE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      this[t] = e >>> 24,
      this[t + 1] = e >>> 16,
      this[t + 2] = e >>> 8,
      this[t + 3] = e & 255,
      t + 4;
  };
  M.prototype.writeBigInt64LE = tt(function (e, t = 0) {
    return ki(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  M.prototype.writeBigInt64BE = tt(function (e, t = 0) {
    return Ni(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  function Di(e, t, r, n, o, i) {
    if (r + n > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  u(Di, "er");
  function ji(e, t, r, n, o) {
    return t = +t,
      r = r >>> 0,
      o || Di(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      It.write(e, t, r, n, 23, 4),
      r + 4;
  }
  u(ji, "or");
  M.prototype.writeFloatLE = function (e, t, r) {
    return ji(this, e, t, !0, r);
  };
  M.prototype.writeFloatBE = function (e, t, r) {
    return ji(this, e, t, !1, r);
  };
  function $i(e, t, r, n, o) {
    return t = +t,
      r = r >>> 0,
      o || Di(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      It.write(e, t, r, n, 52, 8),
      r + 8;
  }
  u($i, "ur");
  M.prototype.writeDoubleLE = function (e, t, r) {
    return $i(this, e, t, !0, r);
  };
  M.prototype.writeDoubleBE = function (e, t, r) {
    return $i(this, e, t, !1, r);
  };
  M.prototype.copy = function (e, t, r, n) {
    if (!M.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (
      r || (r = 0),
        !n && n !== 0 && (n = this.length),
        t >= e.length && (t = e.length),
        t || (t = 0),
        n > 0 && n < r && (n = r),
        n === r || e.length === 0 || this.length === 0
    ) {
      return 0;
    }
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      e.length - t < n - r && (n = e.length - t + r);
    let o = n - r;
    return this === e && typeof Uint8Array.prototype.copyWithin == "function"
      ? this.copyWithin(t, r, n)
      : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
      o;
  };
  M.prototype.fill = function (e, t, r, n) {
    if (typeof e == "string") {
      if (
        typeof t == "string"
          ? (n = t, t = 0, r = this.length)
          : typeof r == "string" && (n = r, r = this.length),
          n !== void 0 && typeof n != "string"
      ) {
        throw new TypeError("encoding must be a string");
      }
      if (typeof n == "string" && !M.isEncoding(n)) {
        throw new TypeError("Unknown encoding: " + n);
      }
      if (e.length === 1) {
        let i = e.charCodeAt(0);
        (n === "utf8" && i < 128 || n === "latin1") && (e = i);
      }
    } else {
      typeof e == "number"
        ? e = e & 255
        : typeof e == "boolean" && (e = Number(e));
    }
    if (t < 0 || this.length < t || this.length < r) {
      throw new RangeError("Out of range index");
    }
    if (r <= t) return this;
    t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
    let o;
    if (typeof e == "number") for (o = t; o < r; ++o) this[o] = e;
    else {
      let i = M.isBuffer(e) ? e : M.from(e, n), s = i.length;
      if (s === 0) {
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"',
        );
      }
      for (o = 0; o < r - t; ++o) this[o + t] = i[o % s];
    }
    return this;
  };
  var Ot = {};
  function Yn(e, t, r) {
    Ot[e] = class extends r {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          this.name = `${this.name} [${e}]`,
          this.stack,
          delete this.name;
      }
      get code() {
        return e;
      }
      set code(n) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  u(Yn, "G");
  Yn("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
    return e
      ? `${e} is outside of buffer bounds`
      : "Attempt to access memory outside buffer bounds";
  }, RangeError);
  Yn("ERR_INVALID_ARG_TYPE", function (e, t) {
    return `The "${e}" argument must be of type number. Received type ${typeof t}`;
  }, TypeError);
  Yn("ERR_OUT_OF_RANGE", function (e, t, r) {
    let n = `The value of "${e}" is out of range.`, o = r;
    return Number.isInteger(r) && Math.abs(r) > 2 ** 32
      ? o = Si(String(r))
      : typeof r == "bigint" &&
        (o = String(r),
          (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
          (o = Si(o)),
          o += "n"),
      n += ` It must be ${t}. Received ${o}`,
      n;
  }, RangeError);
  function Si(e) {
    let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
    return `${e.slice(0, r)}${t}`;
  }
  u(Si, "K");
  function Uc(e, t, r) {
    Ct(t, "offset"),
      (e[t] === void 0 || e[t + r] === void 0) && ar(t, e.length - (r + 1));
  }
  u(Uc, "Dr");
  function Bi(e, t, r, n, o, i) {
    if (e > r || e < t) {
      let s = typeof t == "bigint" ? "n" : "", a;
      throw i > 3
        ? t === 0 || t === BigInt(0)
          ? a = `>= 0${s} and < 2${s} ** ${(i + 1) * 8}${s}`
          : a = `>= -(2${s} ** ${(i + 1) * 8 - 1}${s}) and < 2 ** ${
            (i + 1) * 8 - 1
          }${s}`
        : a = `>= ${t}${s} and <= ${r}${s}`,
        new Ot.ERR_OUT_OF_RANGE("value", a, e);
    }
    Uc(n, o, i);
  }
  u(Bi, "hr");
  function Ct(e, t) {
    if (typeof e != "number") throw new Ot.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
  u(Ct, "R");
  function ar(e, t, r) {
    throw Math.floor(e) !== e
      ? (Ct(e, r), new Ot.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
      : t < 0
      ? new Ot.ERR_BUFFER_OUT_OF_BOUNDS()
      : new Ot.ERR_OUT_OF_RANGE(
        r || "offset",
        `>= ${r ? 1 : 0} and <= ${t}`,
        e,
      );
  }
  u(ar, "T");
  var Vc = /[^+/0-9A-Za-z-_]/g;
  function Gc(e) {
    if (e = e.split("=")[0], e = e.trim().replace(Vc, ""), e.length < 2) {
      return "";
    }
    for (; e.length % 4 !== 0;) e = e + "=";
    return e;
  }
  u(Gc, "br");
  function Hn(e, t) {
    t = t || 1 / 0;
    let r, n = e.length, o = null, i = [];
    for (let s = 0; s < n; ++s) {
      if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
        if (!o) {
          if (r > 56319) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue;
          } else if (s + 1 === n) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue;
          }
          o = r;
          continue;
        }
        if (r < 56320) {
          (t -= 3) > -1 && i.push(239, 191, 189), o = r;
          continue;
        }
        r = (o - 55296 << 10 | r - 56320) + 65536;
      } else o && (t -= 3) > -1 && i.push(239, 191, 189);
      if (o = null, r < 128) {
        if ((t -= 1) < 0) break;
        i.push(r);
      } else if (r < 2048) {
        if ((t -= 2) < 0) break;
        i.push(r >> 6 | 192, r & 63 | 128);
      } else if (r < 65536) {
        if ((t -= 3) < 0) break;
        i.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
      } else if (r < 1114112) {
        if ((t -= 4) < 0) break;
        i.push(
          r >> 18 | 240,
          r >> 12 & 63 | 128,
          r >> 6 & 63 | 128,
          r & 63 | 128,
        );
      } else throw new Error("Invalid code point");
    }
    return i;
  }
  u(Hn, "b");
  function Jc(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
    return t;
  }
  u(Jc, "Pr");
  function zc(e, t) {
    let r, n, o, i = [];
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) {
      r = e.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
    }
    return i;
  }
  u(zc, "Or");
  function Li(e) {
    return zn.toByteArray(Gc(e));
  }
  u(Li, "fr");
  function Jr(e, t, r, n) {
    let o;
    for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) {
      t[o + r] = e[o];
    }
    return o;
  }
  u(Jr, "_");
  function Le(e, t) {
    return e instanceof t ||
      e != null && e.constructor != null && e.constructor.name != null &&
        e.constructor.name === t.name;
  }
  u(Le, "E");
  function Zn(e) {
    return e !== e;
  }
  u(Zn, "Y");
  var Wc = function () {
    let e = "0123456789abcdef", t = new Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
    }
    return t;
  }();
  function tt(e) {
    return typeof BigInt > "u" ? Hc : e;
  }
  u(tt, "g");
  function Hc() {
    throw new Error("BigInt not supported");
  }
  u(Hc, "Yr");
});
var E,
  m = sr(() => {
    E = Z(qi());
  });
var Ui = W((Cd, zr) => {
  m();
  g();
  d();
  var Qc = function () {
    var e = String.fromCharCode,
      t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
      n = {};
    function o(s, a) {
      if (!n[s]) {
        n[s] = {};
        for (var c = 0; c < s.length; c++) n[s][s.charAt(c)] = c;
      }
      return n[s][a];
    }
    u(o, "getBaseValue");
    var i = {
      compressToBase64: function (s) {
        if (s == null) return "";
        var a = i._compress(s, 6, function (c) {
          return t.charAt(c);
        });
        switch (a.length % 4) {
          default:
          case 0:
            return a;
          case 1:
            return a + "===";
          case 2:
            return a + "==";
          case 3:
            return a + "=";
        }
      },
      decompressFromBase64: function (s) {
        return s == null
          ? ""
          : s == ""
          ? null
          : i._decompress(s.length, 32, function (a) {
            return o(t, s.charAt(a));
          });
      },
      compressToUTF16: function (s) {
        return s == null ? "" : i._compress(s, 15, function (a) {
          return e(a + 32);
        }) + " ";
      },
      decompressFromUTF16: function (s) {
        return s == null
          ? ""
          : s == ""
          ? null
          : i._decompress(s.length, 16384, function (a) {
            return s.charCodeAt(a) - 32;
          });
      },
      compressToUint8Array: function (s) {
        for (
          var a = i.compress(s),
            c = new Uint8Array(a.length * 2),
            l = 0,
            f = a.length;
          l < f;
          l++
        ) {
          var p = a.charCodeAt(l);
          c[l * 2] = p >>> 8, c[l * 2 + 1] = p % 256;
        }
        return c;
      },
      decompressFromUint8Array: function (s) {
        if (s == null) return i.decompress(s);
        for (
          var a = new Array(s.length / 2), c = 0, l = a.length;
          c < l;
          c++
        ) {
          a[c] = s[c * 2] * 256 + s[c * 2 + 1];
        }
        var f = [];
        return a.forEach(function (p) {
          f.push(e(p));
        }),
          i.decompress(f.join(""));
      },
      compressToEncodedURIComponent: function (s) {
        return s == null ? "" : i._compress(s, 6, function (a) {
          return r.charAt(a);
        });
      },
      decompressFromEncodedURIComponent: function (s) {
        return s == null
          ? ""
          : s == ""
          ? null
          : (s = s.replace(/ /g, "+"),
            i._decompress(s.length, 32, function (a) {
              return o(r, s.charAt(a));
            }));
      },
      compress: function (s) {
        return i._compress(s, 16, function (a) {
          return e(a);
        });
      },
      _compress: function (s, a, c) {
        if (s == null) return "";
        var l,
          f,
          p = {},
          h = {},
          w = "",
          v = "",
          y = "",
          A = 2,
          S = 3,
          T = 2,
          _ = [],
          P = 0,
          O = 0,
          F;
        for (F = 0; F < s.length; F += 1) {
          if (
            w = s.charAt(F),
              Object.prototype.hasOwnProperty.call(p, w) ||
              (p[w] = S++, h[w] = !0),
              v = y + w,
              Object.prototype.hasOwnProperty.call(p, v)
          ) {
            y = v;
          } else {
            if (Object.prototype.hasOwnProperty.call(h, y)) {
              if (y.charCodeAt(0) < 256) {
                for (l = 0; l < T; l++) {
                  P = P << 1, O == a - 1 ? (O = 0, _.push(c(P)), P = 0) : O++;
                }
                for (
                  f = y.charCodeAt(0), l = 0;
                  l < 8;
                  l++
                ) {
                  P = P << 1 | f & 1,
                    O == a - 1 ? (O = 0, _.push(c(P)), P = 0) : O++,
                    f = f >> 1;
                }
              } else {
                for (f = 1, l = 0; l < T; l++) {
                  P = P << 1 | f,
                    O == a - 1 ? (O = 0, _.push(c(P)), P = 0) : O++,
                    f = 0;
                }
                for (
                  f = y.charCodeAt(0), l = 0;
                  l < 16;
                  l++
                ) {
                  P = P << 1 | f & 1,
                    O == a - 1 ? (O = 0, _.push(c(P)), P = 0) : O++,
                    f = f >> 1;
                }
              }
              A--, A == 0 && (A = Math.pow(2, T), T++), delete h[y];
            } else {
              for (f = p[y], l = 0; l < T; l++) {
                P = P << 1 | f & 1,
                  O == a - 1 ? (O = 0, _.push(c(P)), P = 0) : O++,
                  f = f >> 1;
              }
            }
            A--, A == 0 && (A = Math.pow(2, T), T++), p[v] = S++, y = String(w);
          }
        }
        if (y !== "") {
          if (Object.prototype.hasOwnProperty.call(h, y)) {
            if (y.charCodeAt(0) < 256) {
              for (l = 0; l < T; l++) {
                P = P << 1, O == a - 1 ? (O = 0, _.push(c(P)), P = 0) : O++;
              }
              for (f = y.charCodeAt(0), l = 0; l < 8; l++) {
                P = P << 1 | f & 1,
                  O == a - 1 ? (O = 0, _.push(c(P)), P = 0) : O++,
                  f = f >> 1;
              }
            } else {
              for (f = 1, l = 0; l < T; l++) {
                P = P << 1 | f,
                  O == a - 1 ? (O = 0, _.push(c(P)), P = 0) : O++,
                  f = 0;
              }
              for (f = y.charCodeAt(0), l = 0; l < 16; l++) {
                P = P << 1 | f & 1,
                  O == a - 1 ? (O = 0, _.push(c(P)), P = 0) : O++,
                  f = f >> 1;
              }
            }
            A--, A == 0 && (A = Math.pow(2, T), T++), delete h[y];
          } else {
            for (f = p[y], l = 0; l < T; l++) {
              P = P << 1 | f & 1,
                O == a - 1 ? (O = 0, _.push(c(P)), P = 0) : O++,
                f = f >> 1;
            }
          }
          A--, A == 0 && (A = Math.pow(2, T), T++);
        }
        for (f = 2, l = 0; l < T; l++) {
          P = P << 1 | f & 1,
            O == a - 1 ? (O = 0, _.push(c(P)), P = 0) : O++,
            f = f >> 1;
        }
        for (;;) {
          if (P = P << 1, O == a - 1) {
            _.push(c(P));
            break;
          } else O++;
        }
        return _.join("");
      },
      decompress: function (s) {
        return s == null
          ? ""
          : s == ""
          ? null
          : i._decompress(s.length, 32768, function (a) {
            return s.charCodeAt(a);
          });
      },
      _decompress: function (s, a, c) {
        var l = [],
          f,
          p = 4,
          h = 4,
          w = 3,
          v = "",
          y = [],
          A,
          S,
          T,
          _,
          P,
          O,
          F,
          R = { val: c(0), position: a, index: 1 };
        for (A = 0; A < 3; A += 1) l[A] = A;
        for (T = 0, P = Math.pow(2, 2), O = 1; O != P;) {
          _ = R.val & R.position,
            R.position >>= 1,
            R.position == 0 && (R.position = a, R.val = c(R.index++)),
            T |= (_ > 0 ? 1 : 0) * O,
            O <<= 1;
        }
        switch (f = T) {
          case 0:
            for (T = 0, P = Math.pow(2, 8), O = 1; O != P;) {
              _ = R.val & R.position,
                R.position >>= 1,
                R.position == 0 && (R.position = a, R.val = c(R.index++)),
                T |= (_ > 0 ? 1 : 0) * O,
                O <<= 1;
            }
            F = e(T);
            break;
          case 1:
            for (T = 0, P = Math.pow(2, 16), O = 1; O != P;) {
              _ = R.val & R.position,
                R.position >>= 1,
                R.position == 0 && (R.position = a, R.val = c(R.index++)),
                T |= (_ > 0 ? 1 : 0) * O,
                O <<= 1;
            }
            F = e(T);
            break;
          case 2:
            return "";
        }
        for (l[3] = F, S = F, y.push(F);;) {
          if (R.index > s) return "";
          for (T = 0, P = Math.pow(2, w), O = 1; O != P;) {
            _ = R.val & R.position,
              R.position >>= 1,
              R.position == 0 && (R.position = a, R.val = c(R.index++)),
              T |= (_ > 0 ? 1 : 0) * O,
              O <<= 1;
          }
          switch (F = T) {
            case 0:
              for (T = 0, P = Math.pow(2, 8), O = 1; O != P;) {
                _ = R.val & R.position,
                  R.position >>= 1,
                  R.position == 0 && (R.position = a, R.val = c(R.index++)),
                  T |= (_ > 0 ? 1 : 0) * O,
                  O <<= 1;
              }
              l[h++] = e(T), F = h - 1, p--;
              break;
            case 1:
              for (T = 0, P = Math.pow(2, 16), O = 1; O != P;) {
                _ = R.val & R.position,
                  R.position >>= 1,
                  R.position == 0 && (R.position = a, R.val = c(R.index++)),
                  T |= (_ > 0 ? 1 : 0) * O,
                  O <<= 1;
              }
              l[h++] = e(T), F = h - 1, p--;
              break;
            case 2:
              return y.join("");
          }
          if (p == 0 && (p = Math.pow(2, w), w++), l[F]) v = l[F];
          else if (F === h) v = S + S.charAt(0);
          else return null;
          y.push(v),
            l[h++] = S + v.charAt(0),
            p--,
            S = v,
            p == 0 && (p = Math.pow(2, w), w++);
        }
      },
    };
    return i;
  }();
  typeof zr != "undefined" && zr != null && (zr.exports = Qc);
});
var Gi = W((Rd, Vi) => {
  "use strict";
  m();
  g();
  d();
  Vi.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  };
});
var Xn = W((kd, zi) => {
  m();
  g();
  d();
  var ur = Gi(), Ji = {};
  for (let e of Object.keys(ur)) Ji[ur[e]] = e;
  var N = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] },
  };
  zi.exports = N;
  for (let e of Object.keys(N)) {
    if (!("channels" in N[e])) {
      throw new Error("missing channels property: " + e);
    }
    if (!("labels" in N[e])) {
      throw new Error("missing channel labels property: " + e);
    }
    if (N[e].labels.length !== N[e].channels) {
      throw new Error("channel and label counts mismatch: " + e);
    }
    let { channels: t, labels: r } = N[e];
    delete N[e].channels,
      delete N[e].labels,
      Object.defineProperty(N[e], "channels", { value: t }),
      Object.defineProperty(N[e], "labels", { value: r });
  }
  N.rgb.hsl = function (e) {
    let t = e[0] / 255,
      r = e[1] / 255,
      n = e[2] / 255,
      o = Math.min(t, r, n),
      i = Math.max(t, r, n),
      s = i - o,
      a,
      c;
    i === o
      ? a = 0
      : t === i
      ? a = (r - n) / s
      : r === i
      ? a = 2 + (n - t) / s
      : n === i && (a = 4 + (t - r) / s),
      a = Math.min(a * 60, 360),
      a < 0 && (a += 360);
    let l = (o + i) / 2;
    return i === o ? c = 0 : l <= .5 ? c = s / (i + o) : c = s / (2 - i - o),
      [a, c * 100, l * 100];
  };
  N.rgb.hsv = function (e) {
    let t,
      r,
      n,
      o,
      i,
      s = e[0] / 255,
      a = e[1] / 255,
      c = e[2] / 255,
      l = Math.max(s, a, c),
      f = l - Math.min(s, a, c),
      p = u(function (h) {
        return (l - h) / 6 / f + 1 / 2;
      }, "diffc");
    return f === 0
      ? (o = 0, i = 0)
      : (i = f / l,
        t = p(s),
        r = p(a),
        n = p(c),
        s === l
          ? o = n - r
          : a === l
          ? o = 1 / 3 + t - n
          : c === l && (o = 2 / 3 + r - t),
        o < 0 ? o += 1 : o > 1 && (o -= 1)),
      [o * 360, i * 100, l * 100];
  };
  N.rgb.hwb = function (e) {
    let t = e[0],
      r = e[1],
      n = e[2],
      o = N.rgb.hsl(e)[0],
      i = 1 / 255 * Math.min(t, Math.min(r, n));
    return n = 1 - 1 / 255 * Math.max(t, Math.max(r, n)), [o, i * 100, n * 100];
  };
  N.rgb.cmyk = function (e) {
    let t = e[0] / 255,
      r = e[1] / 255,
      n = e[2] / 255,
      o = Math.min(1 - t, 1 - r, 1 - n),
      i = (1 - t - o) / (1 - o) || 0,
      s = (1 - r - o) / (1 - o) || 0,
      a = (1 - n - o) / (1 - o) || 0;
    return [i * 100, s * 100, a * 100, o * 100];
  };
  function Kc(e, t) {
    return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
  }
  u(Kc, "comparativeDistance");
  N.rgb.keyword = function (e) {
    let t = Ji[e];
    if (t) return t;
    let r = 1 / 0, n;
    for (let o of Object.keys(ur)) {
      let i = ur[o], s = Kc(e, i);
      s < r && (r = s, n = o);
    }
    return n;
  };
  N.keyword.rgb = function (e) {
    return ur[e];
  };
  N.rgb.xyz = function (e) {
    let t = e[0] / 255, r = e[1] / 255, n = e[2] / 255;
    t = t > .04045 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92,
      r = r > .04045 ? ((r + .055) / 1.055) ** 2.4 : r / 12.92,
      n = n > .04045 ? ((n + .055) / 1.055) ** 2.4 : n / 12.92;
    let o = t * .4124 + r * .3576 + n * .1805,
      i = t * .2126 + r * .7152 + n * .0722,
      s = t * .0193 + r * .1192 + n * .9505;
    return [o * 100, i * 100, s * 100];
  };
  N.rgb.lab = function (e) {
    let t = N.rgb.xyz(e), r = t[0], n = t[1], o = t[2];
    r /= 95.047,
      n /= 100,
      o /= 108.883,
      r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116,
      n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116,
      o = o > .008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116;
    let i = 116 * n - 16, s = 500 * (r - n), a = 200 * (n - o);
    return [i, s, a];
  };
  N.hsl.rgb = function (e) {
    let t = e[0] / 360, r = e[1] / 100, n = e[2] / 100, o, i, s;
    if (r === 0) return s = n * 255, [s, s, s];
    n < .5 ? o = n * (1 + r) : o = n + r - n * r;
    let a = 2 * n - o, c = [0, 0, 0];
    for (let l = 0; l < 3; l++) {
      i = t + 1 / 3 * -(l - 1),
        i < 0 && i++,
        i > 1 && i--,
        6 * i < 1
          ? s = a + (o - a) * 6 * i
          : 2 * i < 1
          ? s = o
          : 3 * i < 2
          ? s = a + (o - a) * (2 / 3 - i) * 6
          : s = a,
        c[l] = s * 255;
    }
    return c;
  };
  N.hsl.hsv = function (e) {
    let t = e[0], r = e[1] / 100, n = e[2] / 100, o = r, i = Math.max(n, .01);
    n *= 2, r *= n <= 1 ? n : 2 - n, o *= i <= 1 ? i : 2 - i;
    let s = (n + r) / 2, a = n === 0 ? 2 * o / (i + o) : 2 * r / (n + r);
    return [t, a * 100, s * 100];
  };
  N.hsv.rgb = function (e) {
    let t = e[0] / 60,
      r = e[1] / 100,
      n = e[2] / 100,
      o = Math.floor(t) % 6,
      i = t - Math.floor(t),
      s = 255 * n * (1 - r),
      a = 255 * n * (1 - r * i),
      c = 255 * n * (1 - r * (1 - i));
    switch (n *= 255, o) {
      case 0:
        return [n, c, s];
      case 1:
        return [a, n, s];
      case 2:
        return [s, n, c];
      case 3:
        return [s, a, n];
      case 4:
        return [c, s, n];
      case 5:
        return [n, s, a];
    }
  };
  N.hsv.hsl = function (e) {
    let t = e[0], r = e[1] / 100, n = e[2] / 100, o = Math.max(n, .01), i, s;
    s = (2 - r) * n;
    let a = (2 - r) * o;
    return i = r * o,
      i /= a <= 1 ? a : 2 - a,
      i = i || 0,
      s /= 2,
      [t, i * 100, s * 100];
  };
  N.hwb.rgb = function (e) {
    let t = e[0] / 360, r = e[1] / 100, n = e[2] / 100, o = r + n, i;
    o > 1 && (r /= o, n /= o);
    let s = Math.floor(6 * t), a = 1 - n;
    i = 6 * t - s, (s & 1) !== 0 && (i = 1 - i);
    let c = r + i * (a - r), l, f, p;
    switch (s) {
      default:
      case 6:
      case 0:
        l = a, f = c, p = r;
        break;
      case 1:
        l = c, f = a, p = r;
        break;
      case 2:
        l = r, f = a, p = c;
        break;
      case 3:
        l = r, f = c, p = a;
        break;
      case 4:
        l = c, f = r, p = a;
        break;
      case 5:
        l = a, f = r, p = c;
        break;
    }
    return [l * 255, f * 255, p * 255];
  };
  N.cmyk.rgb = function (e) {
    let t = e[0] / 100,
      r = e[1] / 100,
      n = e[2] / 100,
      o = e[3] / 100,
      i = 1 - Math.min(1, t * (1 - o) + o),
      s = 1 - Math.min(1, r * (1 - o) + o),
      a = 1 - Math.min(1, n * (1 - o) + o);
    return [i * 255, s * 255, a * 255];
  };
  N.xyz.rgb = function (e) {
    let t = e[0] / 100, r = e[1] / 100, n = e[2] / 100, o, i, s;
    return o = t * 3.2406 + r * -1.5372 + n * -.4986,
      i = t * -.9689 + r * 1.8758 + n * .0415,
      s = t * .0557 + r * -.204 + n * 1.057,
      o = o > .0031308 ? 1.055 * o ** (1 / 2.4) - .055 : o * 12.92,
      i = i > .0031308 ? 1.055 * i ** (1 / 2.4) - .055 : i * 12.92,
      s = s > .0031308 ? 1.055 * s ** (1 / 2.4) - .055 : s * 12.92,
      o = Math.min(Math.max(0, o), 1),
      i = Math.min(Math.max(0, i), 1),
      s = Math.min(Math.max(0, s), 1),
      [o * 255, i * 255, s * 255];
  };
  N.xyz.lab = function (e) {
    let t = e[0], r = e[1], n = e[2];
    t /= 95.047,
      r /= 100,
      n /= 108.883,
      t = t > .008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116,
      r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116,
      n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116;
    let o = 116 * r - 16, i = 500 * (t - r), s = 200 * (r - n);
    return [o, i, s];
  };
  N.lab.xyz = function (e) {
    let t = e[0], r = e[1], n = e[2], o, i, s;
    i = (t + 16) / 116, o = r / 500 + i, s = i - n / 200;
    let a = i ** 3, c = o ** 3, l = s ** 3;
    return i = a > .008856 ? a : (i - 16 / 116) / 7.787,
      o = c > .008856 ? c : (o - 16 / 116) / 7.787,
      s = l > .008856 ? l : (s - 16 / 116) / 7.787,
      o *= 95.047,
      i *= 100,
      s *= 108.883,
      [o, i, s];
  };
  N.lab.lch = function (e) {
    let t = e[0], r = e[1], n = e[2], o;
    o = Math.atan2(n, r) * 360 / 2 / Math.PI, o < 0 && (o += 360);
    let s = Math.sqrt(r * r + n * n);
    return [t, s, o];
  };
  N.lch.lab = function (e) {
    let t = e[0],
      r = e[1],
      o = e[2] / 360 * 2 * Math.PI,
      i = r * Math.cos(o),
      s = r * Math.sin(o);
    return [t, i, s];
  };
  N.rgb.ansi16 = function (e, t = null) {
    let [r, n, o] = e, i = t === null ? N.rgb.hsv(e)[2] : t;
    if (i = Math.round(i / 50), i === 0) return 30;
    let s = 30 +
      (Math.round(o / 255) << 2 | Math.round(n / 255) << 1 |
        Math.round(r / 255));
    return i === 2 && (s += 60), s;
  };
  N.hsv.ansi16 = function (e) {
    return N.rgb.ansi16(N.hsv.rgb(e), e[2]);
  };
  N.rgb.ansi256 = function (e) {
    let t = e[0], r = e[1], n = e[2];
    return t === r && r === n
      ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232
      : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(r / 255 * 5) +
        Math.round(n / 255 * 5);
  };
  N.ansi16.rgb = function (e) {
    let t = e % 10;
    if (t === 0 || t === 7) {
      return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
    }
    let r = (~~(e > 50) + 1) * .5,
      n = (t & 1) * r * 255,
      o = (t >> 1 & 1) * r * 255,
      i = (t >> 2 & 1) * r * 255;
    return [n, o, i];
  };
  N.ansi256.rgb = function (e) {
    if (e >= 232) {
      let i = (e - 232) * 10 + 8;
      return [i, i, i];
    }
    e -= 16;
    let t,
      r = Math.floor(e / 36) / 5 * 255,
      n = Math.floor((t = e % 36) / 6) / 5 * 255,
      o = t % 6 / 5 * 255;
    return [r, n, o];
  };
  N.rgb.hex = function (e) {
    let r =
      (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) +
        (Math.round(e[2]) & 255)).toString(16).toUpperCase();
    return "000000".substring(r.length) + r;
  };
  N.hex.rgb = function (e) {
    let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!t) return [0, 0, 0];
    let r = t[0];
    t[0].length === 3 && (r = r.split("").map((a) => a + a).join(""));
    let n = parseInt(r, 16), o = n >> 16 & 255, i = n >> 8 & 255, s = n & 255;
    return [o, i, s];
  };
  N.rgb.hcg = function (e) {
    let t = e[0] / 255,
      r = e[1] / 255,
      n = e[2] / 255,
      o = Math.max(Math.max(t, r), n),
      i = Math.min(Math.min(t, r), n),
      s = o - i,
      a,
      c;
    return s < 1 ? a = i / (1 - s) : a = 0,
      s <= 0
        ? c = 0
        : o === t
        ? c = (r - n) / s % 6
        : o === r
        ? c = 2 + (n - t) / s
        : c = 4 + (t - r) / s,
      c /= 6,
      c %= 1,
      [c * 360, s * 100, a * 100];
  };
  N.hsl.hcg = function (e) {
    let t = e[1] / 100,
      r = e[2] / 100,
      n = r < .5 ? 2 * t * r : 2 * t * (1 - r),
      o = 0;
    return n < 1 && (o = (r - .5 * n) / (1 - n)), [e[0], n * 100, o * 100];
  };
  N.hsv.hcg = function (e) {
    let t = e[1] / 100, r = e[2] / 100, n = t * r, o = 0;
    return n < 1 && (o = (r - n) / (1 - n)), [e[0], n * 100, o * 100];
  };
  N.hcg.rgb = function (e) {
    let t = e[0] / 360, r = e[1] / 100, n = e[2] / 100;
    if (r === 0) return [n * 255, n * 255, n * 255];
    let o = [0, 0, 0], i = t % 1 * 6, s = i % 1, a = 1 - s, c = 0;
    switch (Math.floor(i)) {
      case 0:
        o[0] = 1, o[1] = s, o[2] = 0;
        break;
      case 1:
        o[0] = a, o[1] = 1, o[2] = 0;
        break;
      case 2:
        o[0] = 0, o[1] = 1, o[2] = s;
        break;
      case 3:
        o[0] = 0, o[1] = a, o[2] = 1;
        break;
      case 4:
        o[0] = s, o[1] = 0, o[2] = 1;
        break;
      default:
        o[0] = 1, o[1] = 0, o[2] = a;
    }
    return c = (1 - r) * n,
      [(r * o[0] + c) * 255, (r * o[1] + c) * 255, (r * o[2] + c) * 255];
  };
  N.hcg.hsv = function (e) {
    let t = e[1] / 100, r = e[2] / 100, n = t + r * (1 - t), o = 0;
    return n > 0 && (o = t / n), [e[0], o * 100, n * 100];
  };
  N.hcg.hsl = function (e) {
    let t = e[1] / 100, n = e[2] / 100 * (1 - t) + .5 * t, o = 0;
    return n > 0 && n < .5
      ? o = t / (2 * n)
      : n >= .5 && n < 1 && (o = t / (2 * (1 - n))),
      [e[0], o * 100, n * 100];
  };
  N.hcg.hwb = function (e) {
    let t = e[1] / 100, r = e[2] / 100, n = t + r * (1 - t);
    return [e[0], (n - t) * 100, (1 - n) * 100];
  };
  N.hwb.hcg = function (e) {
    let t = e[1] / 100, r = e[2] / 100, n = 1 - r, o = n - t, i = 0;
    return o < 1 && (i = (n - o) / (1 - o)), [e[0], o * 100, i * 100];
  };
  N.apple.rgb = function (e) {
    return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
  };
  N.rgb.apple = function (e) {
    return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
  };
  N.gray.rgb = function (e) {
    return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
  };
  N.gray.hsl = function (e) {
    return [0, 0, e[0]];
  };
  N.gray.hsv = N.gray.hsl;
  N.gray.hwb = function (e) {
    return [0, 100, e[0]];
  };
  N.gray.cmyk = function (e) {
    return [0, 0, 0, e[0]];
  };
  N.gray.lab = function (e) {
    return [e[0], 0, 0];
  };
  N.gray.hex = function (e) {
    let t = Math.round(e[0] / 100 * 255) & 255,
      n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
    return "000000".substring(n.length) + n;
  };
  N.rgb.gray = function (e) {
    return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
  };
});
var Hi = W((Nd, Wi) => {
  m();
  g();
  d();
  var Wr = Xn();
  function Yc() {
    let e = {}, t = Object.keys(Wr);
    for (let r = t.length, n = 0; n < r; n++) {
      e[t[n]] = { distance: -1, parent: null };
    }
    return e;
  }
  u(Yc, "buildGraph");
  function Zc(e) {
    let t = Yc(), r = [e];
    for (t[e].distance = 0; r.length;) {
      let n = r.pop(), o = Object.keys(Wr[n]);
      for (let i = o.length, s = 0; s < i; s++) {
        let a = o[s], c = t[a];
        c.distance === -1 &&
          (c.distance = t[n].distance + 1, c.parent = n, r.unshift(a));
      }
    }
    return t;
  }
  u(Zc, "deriveBFS");
  function Xc(e, t) {
    return function (r) {
      return t(e(r));
    };
  }
  u(Xc, "link");
  function el(e, t) {
    let r = [t[e].parent, e], n = Wr[t[e].parent][e], o = t[e].parent;
    for (; t[o].parent;) {
      r.unshift(t[o].parent), n = Xc(Wr[t[o].parent][o], n), o = t[o].parent;
    }
    return n.conversion = r, n;
  }
  u(el, "wrapConversion");
  Wi.exports = function (e) {
    let t = Zc(e), r = {}, n = Object.keys(t);
    for (let o = n.length, i = 0; i < o; i++) {
      let s = n[i];
      t[s].parent !== null && (r[s] = el(s, t));
    }
    return r;
  };
});
var Ki = W((Dd, Qi) => {
  m();
  g();
  d();
  var eo = Xn(), tl = Hi(), Rt = {}, rl = Object.keys(eo);
  function nl(e) {
    let t = u(function (...r) {
      let n = r[0];
      return n == null ? n : (n.length > 1 && (r = n), e(r));
    }, "wrappedFn");
    return "conversion" in e && (t.conversion = e.conversion), t;
  }
  u(nl, "wrapRaw");
  function ol(e) {
    let t = u(function (...r) {
      let n = r[0];
      if (n == null) return n;
      n.length > 1 && (r = n);
      let o = e(r);
      if (typeof o == "object") {
        for (let i = o.length, s = 0; s < i; s++) o[s] = Math.round(o[s]);
      }
      return o;
    }, "wrappedFn");
    return "conversion" in e && (t.conversion = e.conversion), t;
  }
  u(ol, "wrapRounded");
  rl.forEach((e) => {
    Rt[e] = {},
      Object.defineProperty(Rt[e], "channels", { value: eo[e].channels }),
      Object.defineProperty(Rt[e], "labels", { value: eo[e].labels });
    let t = tl(e);
    Object.keys(t).forEach((n) => {
      let o = t[n];
      Rt[e][n] = ol(o), Rt[e][n].raw = nl(o);
    });
  });
  Qi.exports = Rt;
});
var rs = W((jd, ts) => {
  "use strict";
  m();
  g();
  d();
  var Yi = u((e, t) => (...r) => `\x1B[${e(...r) + t}m`, "wrapAnsi16"),
    Zi = u((e, t) =>
      (...r) => {
        let n = e(...r);
        return `\x1B[${38 + t};5;${n}m`;
      }, "wrapAnsi256"),
    Xi = u((e, t) =>
      (...r) => {
        let n = e(...r);
        return `\x1B[${38 + t};2;${n[0]};${n[1]};${n[2]}m`;
      }, "wrapAnsi16m"),
    Hr = u((e) => e, "ansi2ansi"),
    es = u((e, t, r) => [e, t, r], "rgb2rgb"),
    kt = u((e, t, r) => {
      Object.defineProperty(e, t, {
        get: () => {
          let n = r();
          return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
          }),
            n;
        },
        enumerable: !0,
        configurable: !0,
      });
    }, "setLazyProperty"),
    to,
    Nt = u((e, t, r, n) => {
      to === void 0 && (to = Ki());
      let o = n ? 10 : 0, i = {};
      for (let [s, a] of Object.entries(to)) {
        let c = s === "ansi16" ? "ansi" : s;
        s === t ? i[c] = e(r, o) : typeof a == "object" && (i[c] = e(a[t], o));
      }
      return i;
    }, "makeDynamicStyles");
  function il() {
    let e = new Map(),
      t = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29],
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39],
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49],
        },
      };
    t.color.gray = t.color.blackBright,
      t.bgColor.bgGray = t.bgColor.bgBlackBright,
      t.color.grey = t.color.blackBright,
      t.bgColor.bgGrey = t.bgColor.bgBlackBright;
    for (let [r, n] of Object.entries(t)) {
      for (let [o, i] of Object.entries(n)) {
        t[o] = { open: `\x1B[${i[0]}m`, close: `\x1B[${i[1]}m` },
          n[o] = t[o],
          e.set(i[0], i[1]);
      }
      Object.defineProperty(t, r, { value: n, enumerable: !1 });
    }
    return Object.defineProperty(t, "codes", { value: e, enumerable: !1 }),
      t.color.close = "\x1B[39m",
      t.bgColor.close = "\x1B[49m",
      kt(t.color, "ansi", () => Nt(Yi, "ansi16", Hr, !1)),
      kt(t.color, "ansi256", () => Nt(Zi, "ansi256", Hr, !1)),
      kt(t.color, "ansi16m", () => Nt(Xi, "rgb", es, !1)),
      kt(t.bgColor, "ansi", () => Nt(Yi, "ansi16", Hr, !0)),
      kt(t.bgColor, "ansi256", () => Nt(Zi, "ansi256", Hr, !0)),
      kt(t.bgColor, "ansi16m", () => Nt(Xi, "rgb", es, !0)),
      t;
  }
  u(il, "assembleStyles");
  Object.defineProperty(ts, "exports", { enumerable: !0, get: il });
});
var ro = W(() => {
  m();
  g();
  d();
});
var os = W((Ld, ns) => {
  "use strict";
  m();
  g();
  d();
  var sl = u((e, t, r) => {
      let n = e.indexOf(t);
      if (n === -1) return e;
      let o = t.length, i = 0, s = "";
      do s += e.substr(i, n - i) + t + r,
        i = n + o,
        n = e.indexOf(t, i); while (n !== -1);
      return s += e.substr(i), s;
    }, "stringReplaceAll"),
    al = u((e, t, r, n) => {
      let o = 0, i = "";
      do {
        let s = e[n - 1] === "\r";
        i += e.substr(o, (s ? n - 1 : n) - o) + t + (s
          ? `\r
`
          : `
`) +
          r,
          o = n + 1,
          n = e.indexOf(
            `
`,
            o,
          );
      } while (n !== -1);
      return i += e.substr(o), i;
    }, "stringEncaseCRLFWithFirstIndex");
  ns.exports = { stringReplaceAll: sl, stringEncaseCRLFWithFirstIndex: al };
});
var cs = W((qd, us) => {
  "use strict";
  m();
  g();
  d();
  var ul =
      /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
    is = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
    cl = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
    ll = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
    fl = new Map([
      [
        "n",
        `
`,
      ],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"],
    ]);
  function as(e) {
    let t = e[0] === "u", r = e[1] === "{";
    return t && !r && e.length === 5 || e[0] === "x" && e.length === 3
      ? String.fromCharCode(parseInt(e.slice(1), 16))
      : t && r
      ? String.fromCodePoint(parseInt(e.slice(2, -1), 16))
      : fl.get(e) || e;
  }
  u(as, "unescape");
  function pl(e, t) {
    let r = [], n = t.trim().split(/\s*,\s*/g), o;
    for (let i of n) {
      let s = Number(i);
      if (!Number.isNaN(s)) r.push(s);
      else if (o = i.match(cl)) {
        r.push(o[2].replace(ll, (a, c, l) => c ? as(c) : l));
      } else {
        throw new Error(
          `Invalid Chalk template style argument: ${i} (in style '${e}')`,
        );
      }
    }
    return r;
  }
  u(pl, "parseArguments");
  function gl(e) {
    is.lastIndex = 0;
    let t = [], r;
    for (; (r = is.exec(e)) !== null;) {
      let n = r[1];
      if (r[2]) {
        let o = pl(n, r[2]);
        t.push([n].concat(o));
      } else t.push([n]);
    }
    return t;
  }
  u(gl, "parseStyle");
  function ss(e, t) {
    let r = {};
    for (let o of t) {
      for (let i of o.styles) {
        r[i[0]] = o.inverse ? null : i.slice(1);
      }
    }
    let n = e;
    for (let [o, i] of Object.entries(r)) {
      if (!!Array.isArray(i)) {
        if (!(o in n)) throw new Error(`Unknown Chalk style: ${o}`);
        n = i.length > 0 ? n[o](...i) : n[o];
      }
    }
    return n;
  }
  u(ss, "buildStyle");
  us.exports = (e, t) => {
    let r = [], n = [], o = [];
    if (
      t.replace(ul, (i, s, a, c, l, f) => {
        if (s) o.push(as(s));
        else if (c) {
          let p = o.join("");
          o = [],
            n.push(r.length === 0 ? p : ss(e, r)(p)),
            r.push({ inverse: a, styles: gl(c) });
        } else if (l) {
          if (r.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          n.push(ss(e, r)(o.join(""))), o = [], r.pop();
        } else o.push(f);
      }),
        n.push(o.join("")),
        r.length > 0
    ) {
      let i = `Chalk template literal is missing ${r.length} closing bracket${
        r.length === 1 ? "" : "s"
      } (\`}\`)`;
      throw new Error(i);
    }
    return n.join("");
  };
});
var Et = W((Ud, ms) => {
  "use strict";
  m();
  g();
  d();
  var cr = rs(),
    { stdout: oo, stderr: io } = ro(),
    { stringReplaceAll: dl, stringEncaseCRLFWithFirstIndex: ml } = os(),
    { isArray: Kr } = Array,
    fs = ["ansi", "ansi", "ansi256", "ansi16m"],
    Dt = Object.create(null),
    hl = u((e, t = {}) => {
      if (
        t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3)
      ) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      let r = oo ? oo.level : 0;
      e.level = t.level === void 0 ? r : t.level;
    }, "applyOptions"),
    Qr = class {
      constructor(t) {
        return ps(t);
      }
    };
  u(Qr, "ChalkClass");
  var ps = u((e) => {
    let t = {};
    return hl(t, e),
      t.template = (...r) => ds(t.template, ...r),
      Object.setPrototypeOf(t, Yr.prototype),
      Object.setPrototypeOf(t.template, t),
      t.template.constructor = () => {
        throw new Error(
          "`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.",
        );
      },
      t.template.Instance = Qr,
      t.template;
  }, "chalkFactory");
  function Yr(e) {
    return ps(e);
  }
  u(Yr, "Chalk");
  for (let [e, t] of Object.entries(cr)) {
    Dt[e] = {
      get() {
        let r = Zr(this, so(t.open, t.close, this._styler), this._isEmpty);
        return Object.defineProperty(this, e, { value: r }), r;
      },
    };
  }
  Dt.visible = {
    get() {
      let e = Zr(this, this._styler, !0);
      return Object.defineProperty(this, "visible", { value: e }), e;
    },
  };
  var gs = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
  for (let e of gs) {
    Dt[e] = {
      get() {
        let { level: t } = this;
        return function (...r) {
          let n = so(cr.color[fs[t]][e](...r), cr.color.close, this._styler);
          return Zr(this, n, this._isEmpty);
        };
      },
    };
  }
  for (let e of gs) {
    let t = "bg" + e[0].toUpperCase() + e.slice(1);
    Dt[t] = {
      get() {
        let { level: r } = this;
        return function (...n) {
          let o = so(
            cr.bgColor[fs[r]][e](...n),
            cr.bgColor.close,
            this._styler,
          );
          return Zr(this, o, this._isEmpty);
        };
      },
    };
  }
  var yl = Object.defineProperties(() => {}, {
      ...Dt,
      level: {
        enumerable: !0,
        get() {
          return this._generator.level;
        },
        set(e) {
          this._generator.level = e;
        },
      },
    }),
    so = u((e, t, r) => {
      let n, o;
      return r === void 0
        ? (n = e, o = t)
        : (n = r.openAll + e, o = t + r.closeAll),
        { open: e, close: t, openAll: n, closeAll: o, parent: r };
    }, "createStyler"),
    Zr = u((e, t, r) => {
      let n = u(
        (...o) =>
          Kr(o[0]) && Kr(o[0].raw)
            ? ls(n, ds(n, ...o))
            : ls(n, o.length === 1 ? "" + o[0] : o.join(" ")),
        "builder",
      );
      return Object.setPrototypeOf(n, yl),
        n._generator = e,
        n._styler = t,
        n._isEmpty = r,
        n;
    }, "createBuilder"),
    ls = u((e, t) => {
      if (e.level <= 0 || !t) return e._isEmpty ? "" : t;
      let r = e._styler;
      if (r === void 0) return t;
      let { openAll: n, closeAll: o } = r;
      if (t.indexOf("\x1B") !== -1) {
        for (; r !== void 0;) t = dl(t, r.close, r.open), r = r.parent;
      }
      let i = t.indexOf(`
`);
      return i !== -1 && (t = ml(t, o, n, i)), n + t + o;
    }, "applyStyle"),
    no,
    ds = u((e, ...t) => {
      let [r] = t;
      if (!Kr(r) || !Kr(r.raw)) return t.join(" ");
      let n = t.slice(1), o = [r.raw[0]];
      for (let i = 1; i < r.length; i++) {
        o.push(String(n[i - 1]).replace(/[{}\\]/g, "\\$&"), String(r.raw[i]));
      }
      return no === void 0 && (no = cs()), no(e, o.join(""));
    }, "chalkTag");
  Object.defineProperties(Yr.prototype, Dt);
  var Xr = Yr();
  Xr.supportsColor = oo;
  Xr.stderr = Yr({ level: io ? io.level : 0 });
  Xr.stderr.supportsColor = io;
  ms.exports = Xr;
});
var go = W((Gd, Is) => {
  "use strict";
  m();
  g();
  d();
  Is.exports = (e, t = 1, r) => {
    if (
      r = { indent: " ", includeEmptyLines: !1, ...r }, typeof e != "string"
    ) {
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
      );
    }
    if (typeof t != "number") {
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
      );
    }
    if (typeof r.indent != "string") {
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r
          .indent}\``,
      );
    }
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var mo = W((Jd, Cs) => {
  "use strict";
  m();
  g();
  d();
  Cs.exports = function () {
    function e(t, r, n, o, i) {
      return t < r || n < r ? t > n ? n + 1 : t + 1 : o === i ? r : r + 1;
    }
    return u(e, "_min"), function (t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        t = r, r = n;
      }
      for (
        var o = t.length, i = r.length;
        o > 0 && t.charCodeAt(o - 1) === r.charCodeAt(i - 1);
      ) {
        o--, i--;
      }
      for (var s = 0; s < o && t.charCodeAt(s) === r.charCodeAt(s);) s++;
      if (o -= s, i -= s, o === 0 || i < 3) return i;
      var a = 0, c, l, f, p, h, w, v, y, A, S, T, _, P = [];
      for (c = 0; c < o; c++) P.push(c + 1), P.push(t.charCodeAt(s + c));
      for (var O = P.length - 1; a < i - 3;) {
        for (
          A = r.charCodeAt(s + (l = a)),
            S = r.charCodeAt(s + (f = a + 1)),
            T = r.charCodeAt(s + (p = a + 2)),
            _ = r.charCodeAt(s + (h = a + 3)),
            w = a += 4,
            c = 0;
          c < O;
          c += 2
        ) {
          v = P[c],
            y = P[c + 1],
            l = e(v, l, f, A, y),
            f = e(l, f, p, S, y),
            p = e(f, p, h, T, y),
            w = e(p, h, w, _, y),
            P[c] = w,
            h = p,
            p = f,
            f = l,
            l = v;
        }
      }
      for (; a < i;) {
        for (A = r.charCodeAt(s + (l = a)), w = ++a, c = 0; c < O; c += 2) {
          v = P[c], P[c] = w = e(v, l, w, A, P[c + 1]), l = v;
        }
      }
      return w;
    };
  }();
});
var So = W((J) => {
  m();
  g();
  d();
  var ee = u(
      (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      "c",
    ),
    Ds = ee((e, t) => {
      "use strict";
      t.exports = function () {
        if (
          typeof Symbol != "function" ||
          typeof Object.getOwnPropertySymbols != "function"
        ) {
          return !1;
        }
        if (typeof Symbol.iterator == "symbol") return !0;
        var r = {}, n = Symbol("test"), o = Object(n);
        if (
          typeof n == "string" ||
          Object.prototype.toString.call(n) !== "[object Symbol]" ||
          Object.prototype.toString.call(o) !== "[object Symbol]"
        ) {
          return !1;
        }
        var i = 42;
        r[n] = i;
        for (n in r) return !1;
        if (
          typeof Object.keys == "function" && Object.keys(r).length !== 0 ||
          typeof Object.getOwnPropertyNames == "function" &&
            Object.getOwnPropertyNames(r).length !== 0
        ) {
          return !1;
        }
        var s = Object.getOwnPropertySymbols(r);
        if (
          s.length !== 1 || s[0] !== n ||
          !Object.prototype.propertyIsEnumerable.call(r, n)
        ) {
          return !1;
        }
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var a = Object.getOwnPropertyDescriptor(r, n);
          if (a.value !== i || a.enumerable !== !0) return !1;
        }
        return !0;
      };
    }),
    mn = ee((e, t) => {
      "use strict";
      var r = Ds();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    }),
    hf = ee((e, t) => {
      "use strict";
      var r = typeof Symbol < "u" && Symbol, n = Ds();
      t.exports = function () {
        return typeof r != "function" || typeof Symbol != "function" ||
            typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol"
          ? !1
          : n();
      };
    }),
    yf = ee((e, t) => {
      "use strict";
      var r = "Function.prototype.bind called on incompatible ",
        n = Array.prototype.slice,
        o = Object.prototype.toString,
        i = "[object Function]";
      t.exports = function (s) {
        var a = this;
        if (typeof a != "function" || o.call(a) !== i) {
          throw new TypeError(r + a);
        }
        for (
          var c = n.call(arguments, 1),
            l,
            f = function () {
              if (this instanceof l) {
                var y = a.apply(this, c.concat(n.call(arguments)));
                return Object(y) === y ? y : this;
              } else return a.apply(s, c.concat(n.call(arguments)));
            },
            p = Math.max(0, a.length - c.length),
            h = [],
            w = 0;
          w < p;
          w++
        ) {
          h.push("$" + w);
        }
        if (
          l = x(
            "binder",
            "return function (" + h.join(",") +
              "){ return binder.apply(this,arguments); }",
          )(f), a.prototype
        ) {
          var v = u(function () {}, "p");
          v.prototype = a.prototype, l.prototype = new v(), v.prototype = null;
        }
        return l;
      };
    }),
    Eo = ee((e, t) => {
      "use strict";
      var r = yf();
      t.exports = x.prototype.bind || r;
    }),
    bf = ee((e, t) => {
      "use strict";
      var r = Eo();
      t.exports = r.call(x.call, Object.prototype.hasOwnProperty);
    }),
    xo = ee((e, t) => {
      "use strict";
      var r,
        n = SyntaxError,
        o = x,
        i = TypeError,
        s = u(function (U) {
          try {
            return o('"use strict"; return (' + U + ").constructor;")();
          } catch (H) {}
        }, "cr"),
        a = Object.getOwnPropertyDescriptor;
      if (a) {
        try {
          a({}, "");
        } catch (U) {
          a = null;
        }
      }
      var c = u(function () {
          throw new i();
        }, "lr"),
        l = a
          ? function () {
            try {
              return arguments.callee, c;
            } catch (U) {
              try {
                return a(arguments, "callee").get;
              } catch (H) {
                return c;
              }
            }
          }()
          : c,
        f = hf()(),
        p = Object.getPrototypeOf || function (U) {
          return U.__proto__;
        },
        h = {},
        w = typeof Uint8Array > "u" ? r : p(Uint8Array),
        v = {
          "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
          "%ArrayIteratorPrototype%": f ? p([][Symbol.iterator]()) : r,
          "%AsyncFromSyncIteratorPrototype%": r,
          "%AsyncFunction%": h,
          "%AsyncGenerator%": h,
          "%AsyncGeneratorFunction%": h,
          "%AsyncIteratorPrototype%": h,
          "%Atomics%": typeof Atomics > "u" ? r : Atomics,
          "%BigInt%": typeof BigInt > "u" ? r : BigInt,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView > "u" ? r : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": void 0,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
          "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
          "%FinalizationRegistry%": typeof FinalizationRegistry > "u"
            ? r
            : FinalizationRegistry,
          "%Function%": o,
          "%GeneratorFunction%": h,
          "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
          "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
          "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": f ? p(p([][Symbol.iterator]())) : r,
          "%JSON%": typeof JSON == "object" ? JSON : r,
          "%Map%": typeof Map > "u" ? r : Map,
          "%MapIteratorPrototype%": typeof Map > "u" || !f
            ? r
            : p(new Map()[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise > "u" ? r : Promise,
          "%Proxy%": typeof Proxy > "u" ? r : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect > "u" ? r : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set > "u" ? r : Set,
          "%SetIteratorPrototype%": typeof Set > "u" || !f
            ? r
            : p(new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u"
            ? r
            : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": f ? p(""[Symbol.iterator]()) : r,
          "%Symbol%": f ? Symbol : r,
          "%SyntaxError%": n,
          "%ThrowTypeError%": l,
          "%TypedArray%": w,
          "%TypeError%": i,
          "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
          "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u"
            ? r
            : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
          "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
          "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
          "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
        },
        y = u(function U(H) {
          var z;
          if (H === "%AsyncFunction%") z = s("async function () {}");
          else if (H === "%GeneratorFunction%") z = s("function* () {}");
          else if (H === "%AsyncGeneratorFunction%") {
            z = s("async function* () {}");
          } else if (H === "%AsyncGenerator%") {
            var G = U("%AsyncGeneratorFunction%");
            G && (z = G.prototype);
          } else if (H === "%AsyncIteratorPrototype%") {
            var K = U("%AsyncGenerator%");
            K && (z = p(K.prototype));
          }
          return v[H] = z, z;
        }, "r"),
        A = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        S = Eo(),
        T = bf(),
        _ = S.call(x.call, Array.prototype.concat),
        P = S.call(x.apply, Array.prototype.splice),
        O = S.call(x.call, String.prototype.replace),
        F = S.call(x.call, String.prototype.slice),
        R =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        $ = /\\(\\)?/g,
        Q = u(function (U) {
          var H = F(U, 0, 1), z = F(U, -1);
          if (H === "%" && z !== "%") {
            throw new n("invalid intrinsic syntax, expected closing `%`");
          }
          if (z === "%" && H !== "%") {
            throw new n("invalid intrinsic syntax, expected opening `%`");
          }
          var G = [];
          return O(U, R, function (K, V, ue, Ze) {
            G[G.length] = ue ? O(Ze, $, "$1") : V || K;
          }),
            G;
        }, "gt"),
        te = u(function (U, H) {
          var z = U, G;
          if (T(A, z) && (G = A[z], z = "%" + G[0] + "%"), T(v, z)) {
            var K = v[z];
            if (K === h && (K = y(z)), typeof K > "u" && !H) {
              throw new i(
                "intrinsic " + U +
                  " exists, but is not available. Please file an issue!",
              );
            }
            return { alias: G, name: z, value: K };
          }
          throw new n("intrinsic " + U + " does not exist!");
        }, "dt");
      t.exports = function (U, H) {
        if (typeof U != "string" || U.length === 0) {
          throw new i("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof H != "boolean") {
          throw new i('"allowMissing" argument must be a boolean');
        }
        var z = Q(U),
          G = z.length > 0 ? z[0] : "",
          K = te("%" + G + "%", H),
          V = K.name,
          ue = K.value,
          Ze = !1,
          or = K.alias;
        or && (G = or[0], P(z, _([0, 1], or)));
        for (var ze = 1, Xe = !0; ze < z.length; ze += 1) {
          var be = z[ze], bt = F(be, 0, 1), et = F(be, -1);
          if (
            (bt === '"' || bt === "'" || bt === "`" || et === '"' ||
              et === "'" || et === "`") && bt !== et
          ) {
            throw new n("property names with quotes must have matching quotes");
          }
          if (
            (be === "constructor" || !Xe) && (Ze = !0),
              G += "." + be,
              V = "%" + G + "%",
              T(v, V)
          ) {
            ue = v[V];
          } else if (ue != null) {
            if (!(be in ue)) {
              if (!H) {
                throw new i(
                  "base intrinsic for " + U +
                    " exists, but the property is not available.",
                );
              }
              return;
            }
            if (a && ze + 1 >= z.length) {
              var Be = a(ue, be);
              Xe = !!Be,
                Xe && "get" in Be && !("originalValue" in Be.get)
                  ? ue = Be.get
                  : ue = ue[be];
            } else Xe = T(ue, be), ue = ue[be];
            Xe && !Ze && (v[V] = ue);
          }
        }
        return ue;
      };
    }),
    wf = ee((e, t) => {
      "use strict";
      var r = Eo(),
        n = xo(),
        o = n("%Function.prototype.apply%"),
        i = n("%Function.prototype.call%"),
        s = n("%Reflect.apply%", !0) || r.call(i, o),
        a = n("%Object.getOwnPropertyDescriptor%", !0),
        c = n("%Object.defineProperty%", !0),
        l = n("%Math.max%");
      if (c) {
        try {
          c({}, "a", { value: 1 });
        } catch (p) {
          c = null;
        }
      }
      t.exports = function (p) {
        var h = s(r, i, arguments);
        if (a && c) {
          var w = a(h, "length");
          w.configurable &&
            c(h, "length", {
              value: 1 + l(0, p.length - (arguments.length - 1)),
            });
        }
        return h;
      };
      var f = u(function () {
        return s(r, o, arguments);
      }, "Qr");
      c ? c(t.exports, "apply", { value: f }) : t.exports.apply = f;
    }),
    Ao = ee((e, t) => {
      "use strict";
      var r = xo(), n = wf(), o = n(r("String.prototype.indexOf"));
      t.exports = function (i, s) {
        var a = r(i, !!s);
        return typeof a == "function" && o(i, ".prototype.") > -1 ? n(a) : a;
      };
    }),
    vf = ee((e, t) => {
      "use strict";
      var r = mn()(),
        n = Ao(),
        o = n("Object.prototype.toString"),
        i = u(function (c) {
          return r && c && typeof c == "object" && Symbol.toStringTag in c
            ? !1
            : o(c) === "[object Arguments]";
        }, "H"),
        s = u(function (c) {
          return i(c) ? !0 : c !== null && typeof c == "object" &&
            typeof c.length == "number" && c.length >= 0 &&
            o(c) !== "[object Array]" && o(c.callee) === "[object Function]";
        }, "ae"),
        a = function () {
          return i(arguments);
        }();
      i.isLegacyArguments = s, t.exports = a ? i : s;
    }),
    Ef = ee((e, t) => {
      "use strict";
      var r = Object.prototype.toString,
        n = x.prototype.toString,
        o = /^\s*(?:function)?\*/,
        i = mn()(),
        s = Object.getPrototypeOf,
        a = u(function () {
          if (!i) return !1;
          try {
            return x("return function*() {}")();
          } catch (l) {}
        }, "jt"),
        c;
      t.exports = function (l) {
        if (typeof l != "function") return !1;
        if (o.test(n.call(l))) return !0;
        if (!i) {
          var f = r.call(l);
          return f === "[object GeneratorFunction]";
        }
        if (!s) return !1;
        if (typeof c > "u") {
          var p = a();
          c = p ? s(p) : !1;
        }
        return s(l) === c;
      };
    }),
    xf = ee((e, t) => {
      "use strict";
      var r = x.prototype.toString,
        n = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
        o,
        i;
      if (
        typeof n == "function" && typeof Object.defineProperty == "function"
      ) {
        try {
          o = Object.defineProperty({}, "length", {
            get: function () {
              throw i;
            },
          }),
            i = {},
            n(
              function () {
                throw 42;
              },
              null,
              o,
            );
        } catch (v) {
          v !== i && (n = null);
        }
      } else n = null;
      var s = /^\s*class\b/,
        a = u(function (v) {
          try {
            var y = r.call(v);
            return s.test(y);
          } catch (A) {
            return !1;
          }
        }, "Sr"),
        c = u(function (v) {
          try {
            return a(v) ? !1 : (r.call(v), !0);
          } catch (y) {
            return !1;
          }
        }, "Et"),
        l = Object.prototype.toString,
        f = "[object Function]",
        p = "[object GeneratorFunction]",
        h = typeof Symbol == "function" && !!Symbol.toStringTag,
        w = typeof document == "object" && typeof document.all > "u" &&
            document.all !== void 0
          ? document.all
          : {};
      t.exports = n
        ? function (v) {
          if (v === w) return !0;
          if (!v || typeof v != "function" && typeof v != "object") return !1;
          if (typeof v == "function" && !v.prototype) return !0;
          try {
            n(v, null, o);
          } catch (y) {
            if (y !== i) return !1;
          }
          return !a(v);
        }
        : function (v) {
          if (v === w) return !0;
          if (!v || typeof v != "function" && typeof v != "object") return !1;
          if (typeof v == "function" && !v.prototype) return !0;
          if (h) return c(v);
          if (a(v)) return !1;
          var y = l.call(v);
          return y === f || y === p;
        };
    }),
    js = ee((e, t) => {
      "use strict";
      var r = xf(),
        n = Object.prototype.toString,
        o = Object.prototype.hasOwnProperty,
        i = u(function (l, f, p) {
          for (var h = 0, w = l.length; h < w; h++) {
            o.call(l, h) && (p == null ? f(l[h], h, l) : f.call(p, l[h], h, l));
          }
        }, "kt"),
        s = u(function (l, f, p) {
          for (var h = 0, w = l.length; h < w; h++) {
            p == null ? f(l.charAt(h), h, l) : f.call(p, l.charAt(h), h, l);
          }
        }, "Dt"),
        a = u(function (l, f, p) {
          for (var h in l) {
            o.call(l, h) && (p == null ? f(l[h], h, l) : f.call(p, l[h], h, l));
          }
        }, "xt"),
        c = u(function (l, f, p) {
          if (!r(f)) throw new TypeError("iterator must be a function");
          var h;
          arguments.length >= 3 && (h = p),
            n.call(l) === "[object Array]"
              ? i(l, f, h)
              : typeof l == "string"
              ? s(l, f, h)
              : a(l, f, h);
        }, "Nt");
      t.exports = c;
    }),
    $s = ee((e, t) => {
      "use strict";
      var r = [
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray",
        ],
        n = typeof globalThis > "u" ? global : globalThis;
      t.exports = function () {
        for (
          var o = [], i = 0;
          i < r.length;
          i++
        ) {
          typeof n[r[i]] == "function" && (o[o.length] = r[i]);
        }
        return o;
      };
    }),
    Bs = ee((e, t) => {
      "use strict";
      var r = xo(), n = r("%Object.getOwnPropertyDescriptor%", !0);
      if (n) {
        try {
          n([], "length");
        } catch (o) {
          n = null;
        }
      }
      t.exports = n;
    }),
    Ls = ee((e, t) => {
      "use strict";
      var r = js(),
        n = $s(),
        o = Ao(),
        i = o("Object.prototype.toString"),
        s = mn()(),
        a = typeof globalThis > "u" ? global : globalThis,
        c = n(),
        l = o("Array.prototype.indexOf", !0) || function (y, A) {
          for (var S = 0; S < y.length; S += 1) if (y[S] === A) return S;
          return -1;
        },
        f = o("String.prototype.slice"),
        p = {},
        h = Bs(),
        w = Object.getPrototypeOf;
      s && h && w && r(c, function (y) {
        var A = new a[y]();
        if (Symbol.toStringTag in A) {
          var S = w(A), T = h(S, Symbol.toStringTag);
          if (!T) {
            var _ = w(S);
            T = h(_, Symbol.toStringTag);
          }
          p[y] = T.get;
        }
      });
      var v = u(function (y) {
        var A = !1;
        return r(p, function (S, T) {
          if (!A) {
            try {
              A = S.call(y) === T;
            } catch (_) {}
          }
        }),
          A;
      }, "zt");
      t.exports = function (y) {
        if (!y || typeof y != "object") return !1;
        if (!s || !(Symbol.toStringTag in y)) {
          var A = f(i(y), 8, -1);
          return l(c, A) > -1;
        }
        return h ? v(y) : !1;
      };
    }),
    Af = ee((e, t) => {
      "use strict";
      var r = js(),
        n = $s(),
        o = Ao(),
        i = o("Object.prototype.toString"),
        s = mn()(),
        a = typeof globalThis > "u" ? global : globalThis,
        c = n(),
        l = o("String.prototype.slice"),
        f = {},
        p = Bs(),
        h = Object.getPrototypeOf;
      s && p && h && r(c, function (y) {
        if (typeof a[y] == "function") {
          var A = new a[y]();
          if (Symbol.toStringTag in A) {
            var S = h(A), T = p(S, Symbol.toStringTag);
            if (!T) {
              var _ = h(S);
              T = p(_, Symbol.toStringTag);
            }
            f[y] = T.get;
          }
        }
      });
      var w = u(function (y) {
          var A = !1;
          return r(f, function (S, T) {
            if (!A) {
              try {
                var _ = S.call(y);
                _ === T && (A = _);
              } catch (P) {}
            }
          }),
            A;
        }, "Zt"),
        v = Ls();
      t.exports = function (y) {
        return v(y)
          ? !s || !(Symbol.toStringTag in y) ? l(i(y), 8, -1) : w(y)
          : !1;
      };
    }),
    Tf = ee((e) => {
      "use strict";
      var t = vf(), r = Ef(), n = Af(), o = Ls();
      function i(C) {
        return C.call.bind(C);
      }
      u(i, "U");
      var s = typeof BigInt < "u",
        a = typeof Symbol < "u",
        c = i(Object.prototype.toString),
        l = i(Number.prototype.valueOf),
        f = i(String.prototype.valueOf),
        p = i(Boolean.prototype.valueOf);
      s && (h = i(BigInt.prototype.valueOf));
      var h;
      a && (w = i(Symbol.prototype.valueOf));
      var w;
      function v(C, mc) {
        if (typeof C != "object") return !1;
        try {
          return mc(C), !0;
        } catch (Td) {
          return !1;
        }
      }
      u(v, "N"),
        e.isArgumentsObject = t,
        e.isGeneratorFunction = r,
        e.isTypedArray = o;
      function y(C) {
        return typeof Promise < "u" && C instanceof Promise ||
          C !== null && typeof C == "object" && typeof C.then == "function" &&
            typeof C.catch == "function";
      }
      u(y, "tn"), e.isPromise = y;
      function A(C) {
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView
          ? ArrayBuffer.isView(C)
          : o(C) || bt(C);
      }
      u(A, "nn"), e.isArrayBufferView = A;
      function S(C) {
        return n(C) === "Uint8Array";
      }
      u(S, "on"), e.isUint8Array = S;
      function T(C) {
        return n(C) === "Uint8ClampedArray";
      }
      u(T, "an"), e.isUint8ClampedArray = T;
      function _(C) {
        return n(C) === "Uint16Array";
      }
      u(_, "fn"), e.isUint16Array = _;
      function P(C) {
        return n(C) === "Uint32Array";
      }
      u(P, "un"), e.isUint32Array = P;
      function O(C) {
        return n(C) === "Int8Array";
      }
      u(O, "yn"), e.isInt8Array = O;
      function F(C) {
        return n(C) === "Int16Array";
      }
      u(F, "sn"), e.isInt16Array = F;
      function R(C) {
        return n(C) === "Int32Array";
      }
      u(R, "pn"), e.isInt32Array = R;
      function $(C) {
        return n(C) === "Float32Array";
      }
      u($, "cn"), e.isFloat32Array = $;
      function Q(C) {
        return n(C) === "Float64Array";
      }
      u(Q, "ln"), e.isFloat64Array = Q;
      function te(C) {
        return n(C) === "BigInt64Array";
      }
      u(te, "gn"), e.isBigInt64Array = te;
      function U(C) {
        return n(C) === "BigUint64Array";
      }
      u(U, "dn"), e.isBigUint64Array = U;
      function H(C) {
        return c(C) === "[object Map]";
      }
      u(H, "Q"), H.working = typeof Map < "u" && H(new Map());
      function z(C) {
        return typeof Map > "u" ? !1 : H.working ? H(C) : C instanceof Map;
      }
      u(z, "bn"), e.isMap = z;
      function G(C) {
        return c(C) === "[object Set]";
      }
      u(G, "X"), G.working = typeof Set < "u" && G(new Set());
      function K(C) {
        return typeof Set > "u" ? !1 : G.working ? G(C) : C instanceof Set;
      }
      u(K, "mn"), e.isSet = K;
      function V(C) {
        return c(C) === "[object WeakMap]";
      }
      u(V, "rr"), V.working = typeof WeakMap < "u" && V(new WeakMap());
      function ue(C) {
        return typeof WeakMap > "u"
          ? !1
          : V.working
          ? V(C)
          : C instanceof WeakMap;
      }
      u(ue, "An"), e.isWeakMap = ue;
      function Ze(C) {
        return c(C) === "[object WeakSet]";
      }
      u(Ze, "Br"), Ze.working = typeof WeakSet < "u" && Ze(new WeakSet());
      function or(C) {
        return Ze(C);
      }
      u(or, "Sn"), e.isWeakSet = or;
      function ze(C) {
        return c(C) === "[object ArrayBuffer]";
      }
      u(ze, "er"),
        ze.working = typeof ArrayBuffer < "u" && ze(new ArrayBuffer());
      function Xe(C) {
        return typeof ArrayBuffer > "u"
          ? !1
          : ze.working
          ? ze(C)
          : C instanceof ArrayBuffer;
      }
      u(Xe, "Me"), e.isArrayBuffer = Xe;
      function be(C) {
        return c(C) === "[object DataView]";
      }
      u(be, "tr"),
        be.working = typeof ArrayBuffer < "u" && typeof DataView < "u" &&
          be(new DataView(new ArrayBuffer(1), 0, 1));
      function bt(C) {
        return typeof DataView > "u"
          ? !1
          : be.working
          ? be(C)
          : C instanceof DataView;
      }
      u(bt, "qe"), e.isDataView = bt;
      var et = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
      function Be(C) {
        return c(C) === "[object SharedArrayBuffer]";
      }
      u(Be, "x");
      function mi(C) {
        return typeof et > "u"
          ? !1
          : (typeof Be.working > "u" && (Be.working = Be(new et())),
            Be.working ? Be(C) : C instanceof et);
      }
      u(mi, "Ge"), e.isSharedArrayBuffer = mi;
      function uc(C) {
        return c(C) === "[object AsyncFunction]";
      }
      u(uc, "hn"), e.isAsyncFunction = uc;
      function cc(C) {
        return c(C) === "[object Map Iterator]";
      }
      u(cc, "vn"), e.isMapIterator = cc;
      function lc(C) {
        return c(C) === "[object Set Iterator]";
      }
      u(lc, "On"), e.isSetIterator = lc;
      function fc(C) {
        return c(C) === "[object Generator]";
      }
      u(fc, "Pn"), e.isGeneratorObject = fc;
      function pc(C) {
        return c(C) === "[object WebAssembly.Module]";
      }
      u(pc, "jn"), e.isWebAssemblyCompiledModule = pc;
      function hi(C) {
        return v(C, l);
      }
      u(hi, "$e"), e.isNumberObject = hi;
      function yi(C) {
        return v(C, f);
      }
      u(yi, "Ce"), e.isStringObject = yi;
      function bi(C) {
        return v(C, p);
      }
      u(bi, "We"), e.isBooleanObject = bi;
      function wi(C) {
        return s && v(C, h);
      }
      u(wi, "_e"), e.isBigIntObject = wi;
      function vi(C) {
        return a && v(C, w);
      }
      u(vi, "ze"), e.isSymbolObject = vi;
      function gc(C) {
        return hi(C) || yi(C) || bi(C) || wi(C) || vi(C);
      }
      u(gc, "wn"), e.isBoxedPrimitive = gc;
      function dc(C) {
        return typeof Uint8Array < "u" && (Xe(C) || mi(C));
      }
      u(dc, "En"),
        e.isAnyArrayBuffer = dc,
        ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(
          function (C) {
            Object.defineProperty(e, C, {
              enumerable: !1,
              value: function () {
                throw new Error(C + " is not supported in userland");
              },
            });
          },
        );
    }),
    Pf = ee((e, t) => {
      t.exports = function (r) {
        return r instanceof E.Buffer;
      };
    }),
    Sf = ee((e, t) => {
      typeof Object.create == "function"
        ? t.exports = function (r, n) {
          n &&
            (r.super_ = n,
              r.prototype = Object.create(n.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
        }
        : t.exports = function (r, n) {
          if (n) {
            r.super_ = n;
            var o = u(function () {}, "n");
            o.prototype = n.prototype,
              r.prototype = new o(),
              r.prototype.constructor = r;
          }
        };
    }),
    qs = Object.getOwnPropertyDescriptors || function (e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
      }
      return r;
    },
    _f = /%[sdj%]/g;
  J.format = function (e) {
    if (!yn(e)) {
      for (var t = [], r = 0; r < arguments.length; r++) {
        t.push(at(arguments[r]));
      }
      return t.join(" ");
    }
    for (
      var r = 1,
        n = arguments,
        o = n.length,
        i = String(e).replace(_f, function (c) {
          if (c === "%%") return "%";
          if (r >= o) return c;
          switch (c) {
            case "%s":
              return String(n[r++]);
            case "%d":
              return Number(n[r++]);
            case "%j":
              try {
                return JSON.stringify(n[r++]);
              } catch (l) {
                return "[Circular]";
              }
            default:
              return c;
          }
        }),
        s = n[r];
      r < o;
      s = n[++r]
    ) {
      hn(s) || !Vt(s) ? i += " " + s : i += " " + at(s);
    }
    return i;
  };
  J.deprecate = function (e, t) {
    if (typeof b < "u" && b.noDeprecation === !0) return e;
    if (typeof b > "u") {
      return function () {
        return J.deprecate(e, t).apply(this, arguments);
      };
    }
    var r = !1;
    function n() {
      if (!r) {
        if (b.throwDeprecation) throw new Error(t);
        b.traceDeprecation ? console.trace(t) : console.error(t), r = !0;
      }
      return e.apply(this, arguments);
    }
    return u(n, "n"), n;
  };
  var ln = {}, Us = /^$/;
  b.env.NODE_DEBUG &&
    (fn = b.env.NODE_DEBUG,
      fn = fn.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*")
        .replace(/,/g, "$|^").toUpperCase(),
      Us = new RegExp("^" + fn + "$", "i"));
  var fn;
  J.debuglog = function (e) {
    if (e = e.toUpperCase(), !ln[e]) {
      if (Us.test(e)) {
        var t = b.pid;
        ln[e] = function () {
          var r = J.format.apply(J, arguments);
          console.error("%s %d: %s", e, t, r);
        };
      } else ln[e] = function () {};
    }
    return ln[e];
  };
  function at(e, t) {
    var r = { seen: [], stylize: Of };
    return arguments.length >= 3 && (r.depth = arguments[2]),
      arguments.length >= 4 && (r.colors = arguments[3]),
      To(t) ? r.showHidden = t : t && J._extend(r, t),
      Pt(r.showHidden) && (r.showHidden = !1),
      Pt(r.depth) && (r.depth = 2),
      Pt(r.colors) && (r.colors = !1),
      Pt(r.customInspect) && (r.customInspect = !0),
      r.colors && (r.stylize = Mf),
      gn(r, e, r.depth);
  }
  u(at, "A");
  J.inspect = at;
  at.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39],
  };
  at.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red",
  };
  function Mf(e, t) {
    var r = at.styles[t];
    return r
      ? "\x1B[" + at.colors[r][0] + "m" + e + "\x1B[" + at.colors[r][1] + "m"
      : e;
  }
  u(Mf, "Fn");
  function Of(e, t) {
    return e;
  }
  u(Of, "In");
  function If(e) {
    var t = {};
    return e.forEach(function (r, n) {
      t[r] = !0;
    }),
      t;
  }
  u(If, "Bn");
  function gn(e, t, r) {
    if (
      e.customInspect && t && pn(t.inspect) && t.inspect !== J.inspect &&
      !(t.constructor && t.constructor.prototype === t)
    ) {
      var n = t.inspect(r, e);
      return yn(n) || (n = gn(e, n, r)), n;
    }
    var o = Cf(e, t);
    if (o) return o;
    var i = Object.keys(t), s = If(i);
    if (
      e.showHidden && (i = Object.getOwnPropertyNames(t)),
        mr(t) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0)
    ) {
      return bo(t);
    }
    if (i.length === 0) {
      if (pn(t)) {
        var a = t.name ? ": " + t.name : "";
        return e.stylize("[Function" + a + "]", "special");
      }
      if (dr(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
      if (dn(t)) return e.stylize(Date.prototype.toString.call(t), "date");
      if (mr(t)) return bo(t);
    }
    var c = "", l = !1, f = ["{", "}"];
    if (Vs(t) && (l = !0, f = ["[", "]"]), pn(t)) {
      var p = t.name ? ": " + t.name : "";
      c = " [Function" + p + "]";
    }
    if (
      dr(t) && (c = " " + RegExp.prototype.toString.call(t)),
        dn(t) && (c = " " + Date.prototype.toUTCString.call(t)),
        mr(t) && (c = " " + bo(t)),
        i.length === 0 && (!l || t.length == 0)
    ) {
      return f[0] + c + f[1];
    }
    if (r < 0) {
      return dr(t)
        ? e.stylize(RegExp.prototype.toString.call(t), "regexp")
        : e.stylize("[Object]", "special");
    }
    e.seen.push(t);
    var h;
    return l ? h = Ff(e, t, r, s, i) : h = i.map(function (w) {
      return vo(e, t, r, s, w, l);
    }),
      e.seen.pop(),
      Rf(h, c, f);
  }
  u(gn, "ar");
  function Cf(e, t) {
    if (Pt(t)) return e.stylize("undefined", "undefined");
    if (yn(t)) {
      var r = "'" +
        JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(
          /\\"/g,
          '"',
        ) + "'";
      return e.stylize(r, "string");
    }
    if (Gs(t)) return e.stylize("" + t, "number");
    if (To(t)) return e.stylize("" + t, "boolean");
    if (hn(t)) return e.stylize("null", "null");
  }
  u(Cf, "Un");
  function bo(e) {
    return "[" + Error.prototype.toString.call(e) + "]";
  }
  u(bo, "Rr");
  function Ff(e, t, r, n, o) {
    for (var i = [], s = 0, a = t.length; s < a; ++s) {
      Js(t, String(s)) ? i.push(vo(e, t, r, n, String(s), !0)) : i.push("");
    }
    return o.forEach(function (c) {
      c.match(/^\d+$/) || i.push(vo(e, t, r, n, c, !0));
    }),
      i;
  }
  u(Ff, "Rn");
  function vo(e, t, r, n, o, i) {
    var s, a, c;
    if (
      c = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] },
        c.get
          ? c.set
            ? a = e.stylize("[Getter/Setter]", "special")
            : a = e.stylize("[Getter]", "special")
          : c.set && (a = e.stylize("[Setter]", "special")),
        Js(n, o) || (s = "[" + o + "]"),
        a ||
        (e.seen.indexOf(c.value) < 0
          ? (hn(r) ? a = gn(e, c.value, null) : a = gn(e, c.value, r - 1),
            a.indexOf(`
`) > -1 && (i
                ? a = a.split(`
`).map(function (l) {
                  return "  " + l;
                }).join(`
`).substr(2)
                : a = `
` + a.split(`
`).map(function (l) {
                  return "   " + l;
                }).join(`
`)))
          : a = e.stylize("[Circular]", "special")),
        Pt(s)
    ) {
      if (i && o.match(/^\d+$/)) return a;
      s = JSON.stringify("" + o),
        s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name"))
          : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(
            /(^"|"$)/g,
            "'",
          ),
            s = e.stylize(s, "string"));
    }
    return s + ": " + a;
  }
  u(vo, "Dr");
  function Rf(e, t, r) {
    var n = 0,
      o = e.reduce(function (i, s) {
        return n++,
          s.indexOf(`
`) >= 0 && n++,
          i + s.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
    return o > 60
      ? r[0] + (t === "" ? "" : t + `
 `) + " " + e.join(`,
  `) + " " + r[1]
      : r[0] + t + " " + e.join(", ") + " " + r[1];
  }
  u(Rf, "kn");
  J.types = Tf();
  function Vs(e) {
    return Array.isArray(e);
  }
  u(Vs, "Ke");
  J.isArray = Vs;
  function To(e) {
    return typeof e == "boolean";
  }
  u(To, "xr");
  J.isBoolean = To;
  function hn(e) {
    return e === null;
  }
  u(hn, "ur");
  J.isNull = hn;
  function kf(e) {
    return e == null;
  }
  u(kf, "Dn");
  J.isNullOrUndefined = kf;
  function Gs(e) {
    return typeof e == "number";
  }
  u(Gs, "Qe");
  J.isNumber = Gs;
  function yn(e) {
    return typeof e == "string";
  }
  u(yn, "yr");
  J.isString = yn;
  function Nf(e) {
    return typeof e == "symbol";
  }
  u(Nf, "xn");
  J.isSymbol = Nf;
  function Pt(e) {
    return e === void 0;
  }
  u(Pt, "P");
  J.isUndefined = Pt;
  function dr(e) {
    return Vt(e) && Po(e) === "[object RegExp]";
  }
  u(dr, "M");
  J.isRegExp = dr;
  J.types.isRegExp = dr;
  function Vt(e) {
    return typeof e == "object" && e !== null;
  }
  u(Vt, "R");
  J.isObject = Vt;
  function dn(e) {
    return Vt(e) && Po(e) === "[object Date]";
  }
  u(dn, "fr");
  J.isDate = dn;
  J.types.isDate = dn;
  function mr(e) {
    return Vt(e) && (Po(e) === "[object Error]" || e instanceof Error);
  }
  u(mr, "q");
  J.isError = mr;
  J.types.isNativeError = mr;
  function pn(e) {
    return typeof e == "function";
  }
  u(pn, "ir");
  J.isFunction = pn;
  function Df(e) {
    return e === null || typeof e == "boolean" || typeof e == "number" ||
      typeof e == "string" || typeof e == "symbol" || typeof e > "u";
  }
  u(Df, "Nn");
  J.isPrimitive = Df;
  J.isBuffer = Pf();
  function Po(e) {
    return Object.prototype.toString.call(e);
  }
  u(Po, "Nr");
  function wo(e) {
    return e < 10 ? "0" + e.toString(10) : e.toString(10);
  }
  u(wo, "kr");
  var jf = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function $f() {
    var e = new Date(),
      t = [wo(e.getHours()), wo(e.getMinutes()), wo(e.getSeconds())].join(":");
    return [e.getDate(), jf[e.getMonth()], t].join(" ");
  }
  u($f, "qn");
  J.log = function () {
    console.log("%s - %s", $f(), J.format.apply(J, arguments));
  };
  J.inherits = Sf();
  J._extend = function (e, t) {
    if (!t || !Vt(t)) return e;
    for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
    return e;
  };
  function Js(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  u(Js, "Xe");
  var Tt = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  J.promisify = function (e) {
    if (typeof e != "function") {
      throw new TypeError('The "original" argument must be of type Function');
    }
    if (Tt && e[Tt]) {
      var t = e[Tt];
      if (typeof t != "function") {
        throw new TypeError(
          'The "util.promisify.custom" argument must be of type Function',
        );
      }
      return Object.defineProperty(t, Tt, {
        value: t,
        enumerable: !1,
        writable: !1,
        configurable: !0,
      }),
        t;
    }
    function t() {
      for (
        var r,
          n,
          o = new Promise(function (a, c) {
            r = a, n = c;
          }),
          i = [],
          s = 0;
        s < arguments.length;
        s++
      ) {
        i.push(arguments[s]);
      }
      i.push(function (a, c) {
        a ? n(a) : r(c);
      });
      try {
        e.apply(this, i);
      } catch (a) {
        n(a);
      }
      return o;
    }
    return u(t, "t"),
      Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
      Tt &&
      Object.defineProperty(t, Tt, {
        value: t,
        enumerable: !1,
        writable: !1,
        configurable: !0,
      }),
      Object.defineProperties(t, qs(e));
  };
  J.promisify.custom = Tt;
  function Bf(e, t) {
    if (!e) {
      var r = new Error("Promise was rejected with a falsy value");
      r.reason = e, e = r;
    }
    return t(e);
  }
  u(Bf, "Gn");
  function Lf(e) {
    if (typeof e != "function") {
      throw new TypeError('The "original" argument must be of type Function');
    }
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r.push(arguments[n]);
      var o = r.pop();
      if (typeof o != "function") {
        throw new TypeError("The last argument must be of type Function");
      }
      var i = this,
        s = u(function () {
          return o.apply(i, arguments);
        }, "i");
      e.apply(this, r).then(function (a) {
        b.nextTick(s.bind(null, null, a));
      }, function (a) {
        b.nextTick(Bf.bind(null, a, s));
      });
    }
    return u(t, "e"),
      Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
      Object.defineProperties(t, qs(e)),
      t;
  }
  u(Lf, "$n");
  J.callbackify = Lf;
});
var Ws = W((tm, zs) => {
  m();
  g();
  d();
  var Gt = 1e3,
    Jt = Gt * 60,
    zt = Jt * 60,
    St = zt * 24,
    qf = St * 7,
    Uf = St * 365.25;
  zs.exports = function (e, t) {
    t = t || {};
    var r = typeof e;
    if (r === "string" && e.length > 0) return Vf(e);
    if (r === "number" && isFinite(e)) return t.long ? Jf(e) : Gf(e);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(e),
    );
  };
  function Vf(e) {
    if (e = String(e), !(e.length > 100)) {
      var t =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i
          .exec(e);
      if (!!t) {
        var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
        switch (n) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return r * Uf;
          case "weeks":
          case "week":
          case "w":
            return r * qf;
          case "days":
          case "day":
          case "d":
            return r * St;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return r * zt;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return r * Jt;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return r * Gt;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return r;
          default:
            return;
        }
      }
    }
  }
  u(Vf, "parse");
  function Gf(e) {
    var t = Math.abs(e);
    return t >= St
      ? Math.round(e / St) + "d"
      : t >= zt
      ? Math.round(e / zt) + "h"
      : t >= Jt
      ? Math.round(e / Jt) + "m"
      : t >= Gt
      ? Math.round(e / Gt) + "s"
      : e + "ms";
  }
  u(Gf, "fmtShort");
  function Jf(e) {
    var t = Math.abs(e);
    return t >= St
      ? bn(e, t, St, "day")
      : t >= zt
      ? bn(e, t, zt, "hour")
      : t >= Jt
      ? bn(e, t, Jt, "minute")
      : t >= Gt
      ? bn(e, t, Gt, "second")
      : e + " ms";
  }
  u(Jf, "fmtLong");
  function bn(e, t, r, n) {
    var o = t >= r * 1.5;
    return Math.round(e / r) + " " + n + (o ? "s" : "");
  }
  u(bn, "plural");
});
var _o = W((rm, Hs) => {
  m();
  g();
  d();
  function zf(e) {
    r.debug = r,
      r.default = r,
      r.coerce = c,
      r.disable = i,
      r.enable = o,
      r.enabled = s,
      r.humanize = Ws(),
      r.destroy = l,
      Object.keys(e).forEach((f) => {
        r[f] = e[f];
      }),
      r.names = [],
      r.skips = [],
      r.formatters = {};
    function t(f) {
      let p = 0;
      for (let h = 0; h < f.length; h++) {
        p = (p << 5) - p + f.charCodeAt(h), p |= 0;
      }
      return r.colors[Math.abs(p) % r.colors.length];
    }
    u(t, "selectColor"), r.selectColor = t;
    function r(f) {
      let p, h = null, w, v;
      function y(...A) {
        if (!y.enabled) return;
        let S = y, T = Number(new Date()), _ = T - (p || T);
        S.diff = _,
          S.prev = p,
          S.curr = T,
          p = T,
          A[0] = r.coerce(A[0]),
          typeof A[0] != "string" && A.unshift("%O");
        let P = 0;
        A[0] = A[0].replace(/%([a-zA-Z%])/g, (F, R) => {
          if (F === "%%") return "%";
          P++;
          let $ = r.formatters[R];
          if (typeof $ == "function") {
            let Q = A[P];
            F = $.call(S, Q), A.splice(P, 1), P--;
          }
          return F;
        }),
          r.formatArgs.call(S, A),
          (S.log || r.log).apply(S, A);
      }
      return u(y, "debug"),
        y.namespace = f,
        y.useColors = r.useColors(),
        y.color = r.selectColor(f),
        y.extend = n,
        y.destroy = r.destroy,
        Object.defineProperty(y, "enabled", {
          enumerable: !0,
          configurable: !1,
          get: () =>
            h !== null
              ? h
              : (w !== r.namespaces && (w = r.namespaces, v = r.enabled(f)), v),
          set: (A) => {
            h = A;
          },
        }),
        typeof r.init == "function" && r.init(y),
        y;
    }
    u(r, "createDebug");
    function n(f, p) {
      let h = r(this.namespace + (typeof p == "undefined" ? ":" : p) + f);
      return h.log = this.log, h;
    }
    u(n, "extend");
    function o(f) {
      r.save(f), r.namespaces = f, r.names = [], r.skips = [];
      let p, h = (typeof f == "string" ? f : "").split(/[\s,]+/), w = h.length;
      for (p = 0; p < w; p++) {
        !h[p] ||
          (f = h[p].replace(/\*/g, ".*?"),
            f[0] === "-"
              ? r.skips.push(new RegExp("^" + f.slice(1) + "$"))
              : r.names.push(new RegExp("^" + f + "$")));
      }
    }
    u(o, "enable");
    function i() {
      let f = [...r.names.map(a), ...r.skips.map(a).map((p) => "-" + p)].join(
        ",",
      );
      return r.enable(""), f;
    }
    u(i, "disable");
    function s(f) {
      if (f[f.length - 1] === "*") return !0;
      let p, h;
      for (p = 0, h = r.skips.length; p < h; p++) {
        if (r.skips[p].test(f)) return !1;
      }
      for (p = 0, h = r.names.length; p < h; p++) {
        if (r.names[p].test(f)) return !0;
      }
      return !1;
    }
    u(s, "enabled");
    function a(f) {
      return f.toString().substring(2, f.toString().length - 2).replace(
        /\.\*\?$/,
        "*",
      );
    }
    u(a, "toNamespace");
    function c(f) {
      return f instanceof Error ? f.stack || f.message : f;
    }
    u(c, "coerce");
    function l() {
      console.warn(
        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
      );
    }
    return u(l, "destroy"), r.enable(r.load()), r;
  }
  u(zf, "setup");
  Hs.exports = zf;
});
var Qs = W((xe, wn) => {
  m();
  g();
  d();
  xe.formatArgs = Hf;
  xe.save = Qf;
  xe.load = Kf;
  xe.useColors = Wf;
  xe.storage = Yf();
  xe.destroy = (() => {
    let e = !1;
    return () => {
      e ||
        (e = !0,
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
          ));
    };
  })();
  xe.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33",
  ];
  function Wf() {
    return typeof window != "undefined" && window.process &&
        (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator != "undefined" && navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : typeof document != "undefined" && document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance ||
        typeof window != "undefined" && window.console &&
          (window.console.firebug ||
            window.console.exception && window.console.table) ||
        typeof navigator != "undefined" && navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31 ||
        typeof navigator != "undefined" && navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  u(Wf, "useColors");
  function Hf(e) {
    if (
      e[0] = (this.useColors ? "%c" : "") + this.namespace +
        (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") +
        "+" + wn.exports.humanize(this.diff), !this.useColors
    ) {
      return;
    }
    let t = "color: " + this.color;
    e.splice(1, 0, t, "color: inherit");
    let r = 0, n = 0;
    e[0].replace(/%[a-zA-Z%]/g, (o) => {
      o !== "%%" && (r++, o === "%c" && (n = r));
    }), e.splice(n, 0, t);
  }
  u(Hf, "formatArgs");
  xe.log = console.debug || console.log || (() => {});
  function Qf(e) {
    try {
      e ? xe.storage.setItem("debug", e) : xe.storage.removeItem("debug");
    } catch (t) {}
  }
  u(Qf, "save");
  function Kf() {
    let e;
    try {
      e = xe.storage.getItem("debug");
    } catch (t) {}
    return !e && typeof b != "undefined" && "env" in b && (e = b.env.DEBUG), e;
  }
  u(Kf, "load");
  function Yf() {
    try {
      return localStorage;
    } catch (e) {}
  }
  u(Yf, "localstorage");
  wn.exports = _o()(xe);
  var { formatters: Zf } = wn.exports;
  Zf.j = function (e) {
    try {
      return JSON.stringify(e);
    } catch (t) {
      return "[UnexpectedJSONParseError]: " + t.message;
    }
  };
});
var Ks = W((vn) => {
  m();
  g();
  d();
  vn.isatty = function () {
    return !1;
  };
  function Xf() {
    throw new Error("tty.ReadStream is not implemented");
  }
  u(Xf, "t");
  vn.ReadStream = Xf;
  function ep() {
    throw new Error("tty.WriteStream is not implemented");
  }
  u(ep, "e");
  vn.WriteStream = ep;
});
var Zs = W((se, xn) => {
  m();
  g();
  d();
  var tp = Ks(), En = So();
  se.init = up;
  se.log = ip;
  se.formatArgs = np;
  se.save = sp;
  se.load = ap;
  se.useColors = rp;
  se.destroy = En.deprecate(
    () => {},
    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
  );
  se.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e = ro();
    e && (e.stderr || e).level >= 2 &&
      (se.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221,
      ]);
  } catch (e) {}
  se.inspectOpts = Object.keys(b.env).filter((e) => /^debug_/i.test(e)).reduce(
    (e, t) => {
      let r = t.substring(6).toLowerCase().replace(
          /_([a-z])/g,
          (o, i) => i.toUpperCase(),
        ),
        n = b.env[t];
      return /^(yes|on|true|enabled)$/i.test(n)
        ? n = !0
        : /^(no|off|false|disabled)$/i.test(n)
        ? n = !1
        : n === "null"
        ? n = null
        : n = Number(n),
        e[r] = n,
        e;
    },
    {},
  );
  function rp() {
    return "colors" in se.inspectOpts
      ? Boolean(se.inspectOpts.colors)
      : tp.isatty(b.stderr.fd);
  }
  u(rp, "useColors");
  function np(e) {
    let { namespace: t, useColors: r } = this;
    if (r) {
      let n = this.color,
        o = "\x1B[3" + (n < 8 ? n : "8;5;" + n),
        i = `  ${o};1m${t} \x1B[0m`;
      e[0] = i + e[0].split(`
`).join(
        `
` + i,
      ), e.push(o + "m+" + xn.exports.humanize(this.diff) + "\x1B[0m");
    } else e[0] = op() + t + " " + e[0];
  }
  u(np, "formatArgs");
  function op() {
    return se.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
  }
  u(op, "getDate");
  function ip(...e) {
    return b.stderr.write(
      En.format(...e) + `
`,
    );
  }
  u(ip, "log");
  function sp(e) {
    e ? b.env.DEBUG = e : delete b.env.DEBUG;
  }
  u(sp, "save");
  function ap() {
    return b.env.DEBUG;
  }
  u(ap, "load");
  function up(e) {
    e.inspectOpts = {};
    let t = Object.keys(se.inspectOpts);
    for (let r = 0; r < t.length; r++) {
      e.inspectOpts[t[r]] = se.inspectOpts[t[r]];
    }
  }
  u(up, "init");
  xn.exports = _o()(se);
  var { formatters: Ys } = xn.exports;
  Ys.o = function (e) {
    return this.inspectOpts.colors = this.useColors,
      En.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(" ");
  };
  Ys.O = function (e) {
    return this.inspectOpts.colors = this.useColors,
      En.inspect(e, this.inspectOpts);
  };
});
var Xs = W((om, Mo) => {
  m();
  g();
  d();
  typeof b == "undefined" || b.type === "renderer" || b.browser === !0 ||
    b.__nwjs
    ? Mo.exports = Qs()
    : Mo.exports = Zs();
});
function lp(e) {
  let t = (0, Io.default)(e),
    r = Object.assign(
      (
        ...n
      ) => (t.log = r.log,
        n.length !== 0 && Oo.push([e, ...n]),
        Oo.length > cp && Oo.shift(),
        t("", ...n)),
      t,
    );
  return r;
}
var Io,
  cp,
  Oo,
  fp,
  ut,
  An = sr(() => {
    m();
    g();
    d();
    Io = Z(Xs()), cp = 100, Oo = [];
    u(lp, "debugCall");
    fp = Object.assign(lp, Io.default), ut = fp;
  });
var ea = W(() => {
  m();
  g();
  d();
});
var ra = W((lm, Co) => {
  "use strict";
  m();
  g();
  d();
  var pp = Object.prototype.hasOwnProperty, de = "~";
  function hr() {}
  u(hr, "_");
  Object.create &&
    (hr.prototype = Object.create(null), new hr().__proto__ || (de = !1));
  function gp(e, t, r) {
    this.fn = e, this.context = t, this.once = r || !1;
  }
  u(gp, "g");
  function ta(e, t, r, n, o) {
    if (typeof r != "function") {
      throw new TypeError("The listener must be a function");
    }
    var i = new gp(r, n || e, o), s = de ? de + t : t;
    return e._events[s]
      ? e._events[s].fn
        ? e._events[s] = [e._events[s], i]
        : e._events[s].push(i)
      : (e._events[s] = i, e._eventsCount++),
      e;
  }
  u(ta, "w");
  function Tn(e, t) {
    --e._eventsCount === 0 ? e._events = new hr() : delete e._events[t];
  }
  u(Tn, "y");
  function fe() {
    this._events = new hr(), this._eventsCount = 0;
  }
  u(fe, "u");
  fe.prototype.eventNames = function () {
    var e = [], t, r;
    if (this._eventsCount === 0) return e;
    for (r in t = this._events) pp.call(t, r) && e.push(de ? r.slice(1) : r);
    return Object.getOwnPropertySymbols
      ? e.concat(Object.getOwnPropertySymbols(t))
      : e;
  };
  fe.prototype.listeners = function (e) {
    var t = de ? de + e : e, r = this._events[t];
    if (!r) return [];
    if (r.fn) return [r.fn];
    for (var n = 0, o = r.length, i = new Array(o); n < o; n++) i[n] = r[n].fn;
    return i;
  };
  fe.prototype.listenerCount = function (e) {
    var t = de ? de + e : e, r = this._events[t];
    return r ? r.fn ? 1 : r.length : 0;
  };
  fe.prototype.emit = function (e, t, r, n, o, i) {
    var s = de ? de + e : e;
    if (!this._events[s]) return !1;
    var a = this._events[s], c = arguments.length, l, f;
    if (a.fn) {
      switch (a.once && this.removeListener(e, a.fn, void 0, !0), c) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, t), !0;
        case 3:
          return a.fn.call(a.context, t, r), !0;
        case 4:
          return a.fn.call(a.context, t, r, n), !0;
        case 5:
          return a.fn.call(a.context, t, r, n, o), !0;
        case 6:
          return a.fn.call(a.context, t, r, n, o, i), !0;
      }
      for (f = 1, l = new Array(c - 1); f < c; f++) l[f - 1] = arguments[f];
      a.fn.apply(a.context, l);
    } else {
      var p = a.length, h;
      for (f = 0; f < p; f++) {
        switch (a[f].once && this.removeListener(e, a[f].fn, void 0, !0), c) {
          case 1:
            a[f].fn.call(a[f].context);
            break;
          case 2:
            a[f].fn.call(a[f].context, t);
            break;
          case 3:
            a[f].fn.call(a[f].context, t, r);
            break;
          case 4:
            a[f].fn.call(a[f].context, t, r, n);
            break;
          default:
            if (!l) {
              for (h = 1, l = new Array(c - 1); h < c; h++) {
                l[h - 1] = arguments[h];
              }
            }
            a[f].fn.apply(a[f].context, l);
        }
      }
    }
    return !0;
  };
  fe.prototype.on = function (e, t, r) {
    return ta(this, e, t, r, !1);
  };
  fe.prototype.once = function (e, t, r) {
    return ta(this, e, t, r, !0);
  };
  fe.prototype.removeListener = function (e, t, r, n) {
    var o = de ? de + e : e;
    if (!this._events[o]) return this;
    if (!t) return Tn(this, o), this;
    var i = this._events[o];
    if (i.fn) {
      i.fn === t && (!n || i.once) && (!r || i.context === r) && Tn(this, o);
    } else {
      for (var s = 0, a = [], c = i.length; s < c; s++) {
        (i[s].fn !== t || n && !i[s].once || r && i[s].context !== r) &&
          a.push(i[s]);
      }
      a.length ? this._events[o] = a.length === 1 ? a[0] : a : Tn(this, o);
    }
    return this;
  };
  fe.prototype.removeAllListeners = function (e) {
    var t;
    return e
      ? (t = de ? de + e : e, this._events[t] && Tn(this, t))
      : (this._events = new hr(), this._eventsCount = 0),
      this;
  };
  fe.prototype.off = fe.prototype.removeListener;
  fe.prototype.addListener = fe.prototype.on;
  fe.prefixed = de;
  fe.EventEmitter = fe;
  typeof Co < "u" && (Co.exports = fe);
});
var na = {};
Jn(na, { default: () => Fo, existsSync: () => dp });
function dp() {
  return !1;
}
var mp,
  Fo,
  Ro = sr(() => {
    m();
    g();
    d();
    u(dp, "existsSync");
    mp = {
      existsSync() {
        return !1;
      },
    }, Fo = mp;
  });
var ko = W((fm, ia) => {
  "use strict";
  m();
  g();
  d();
  function Ue(e) {
    if (typeof e != "string") {
      throw new TypeError(
        "Path must be a string. Received " + JSON.stringify(e),
      );
    }
  }
  u(Ue, "c");
  function oa(e, t) {
    for (var r = "", n = 0, o = -1, i = 0, s, a = 0; a <= e.length; ++a) {
      if (a < e.length) s = e.charCodeAt(a);
      else {
        if (s === 47) break;
        s = 47;
      }
      if (s === 47) {
        if (!(o === a - 1 || i === 1)) {
          if (o !== a - 1 && i === 2) {
            if (
              r.length < 2 || n !== 2 || r.charCodeAt(r.length - 1) !== 46 ||
              r.charCodeAt(r.length - 2) !== 46
            ) {
              if (r.length > 2) {
                var c = r.lastIndexOf("/");
                if (c !== r.length - 1) {
                  c === -1
                    ? (r = "", n = 0)
                    : (r = r.slice(0, c),
                      n = r.length - 1 - r.lastIndexOf("/")),
                    o = a,
                    i = 0;
                  continue;
                }
              } else if (r.length === 2 || r.length === 1) {
                r = "", n = 0, o = a, i = 0;
                continue;
              }
            }
            t && (r.length > 0 ? r += "/.." : r = "..", n = 2);
          } else {
            r.length > 0 ? r += "/" + e.slice(o + 1, a) : r = e.slice(o + 1, a),
              n = a - o - 1;
          }
        }
        o = a, i = 0;
      } else s === 46 && i !== -1 ? ++i : i = -1;
    }
    return r;
  }
  u(oa, "A");
  function hp(e, t) {
    var r = t.dir || t.root, n = t.base || (t.name || "") + (t.ext || "");
    return r ? r === t.root ? r + n : r + e + n : n;
  }
  u(hp, "b");
  var Wt = {
    resolve: function () {
      for (
        var e = "", t = !1, r, n = arguments.length - 1;
        n >= -1 && !t;
        n--
      ) {
        var o;
        n >= 0 ? o = arguments[n] : (r === void 0 && (r = b.cwd()), o = r),
          Ue(o),
          o.length !== 0 && (e = o + "/" + e, t = o.charCodeAt(0) === 47);
      }
      return e = oa(e, !t),
        t ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
    },
    normalize: function (e) {
      if (Ue(e), e.length === 0) return ".";
      var t = e.charCodeAt(0) === 47, r = e.charCodeAt(e.length - 1) === 47;
      return e = oa(e, !t),
        e.length === 0 && !t && (e = "."),
        e.length > 0 && r && (e += "/"),
        t ? "/" + e : e;
    },
    isAbsolute: function (e) {
      return Ue(e), e.length > 0 && e.charCodeAt(0) === 47;
    },
    join: function () {
      if (arguments.length === 0) return ".";
      for (var e, t = 0; t < arguments.length; ++t) {
        var r = arguments[t];
        Ue(r), r.length > 0 && (e === void 0 ? e = r : e += "/" + r);
      }
      return e === void 0 ? "." : Wt.normalize(e);
    },
    relative: function (e, t) {
      if (
        Ue(e), Ue(t), e === t || (e = Wt.resolve(e), t = Wt.resolve(t), e === t)
      ) {
        return "";
      }
      for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r);
      for (
        var n = e.length, o = n - r, i = 1;
        i < t.length && t.charCodeAt(i) === 47;
        ++i
      );
      for (
        var s = t.length, a = s - i, c = o < a ? o : a, l = -1, f = 0;
        f <= c;
        ++f
      ) {
        if (f === c) {
          if (a > c) {
            if (t.charCodeAt(i + f) === 47) return t.slice(i + f + 1);
            if (f === 0) return t.slice(i + f);
          } else {
            o > c && (e.charCodeAt(r + f) === 47 ? l = f : f === 0 && (l = 0));
          }
          break;
        }
        var p = e.charCodeAt(r + f), h = t.charCodeAt(i + f);
        if (p !== h) break;
        p === 47 && (l = f);
      }
      var w = "";
      for (f = r + l + 1; f <= n; ++f) {
        (f === n || e.charCodeAt(f) === 47) &&
          (w.length === 0 ? w += ".." : w += "/..");
      }
      return w.length > 0
        ? w + t.slice(i + l)
        : (i += l, t.charCodeAt(i) === 47 && ++i, t.slice(i));
    },
    _makeLong: function (e) {
      return e;
    },
    dirname: function (e) {
      if (Ue(e), e.length === 0) return ".";
      for (
        var t = e.charCodeAt(0), r = t === 47, n = -1, o = !0, i = e.length - 1;
        i >= 1;
        --i
      ) {
        if (t = e.charCodeAt(i), t === 47) {
          if (!o) {
            n = i;
            break;
          }
        } else o = !1;
      }
      return n === -1 ? r ? "/" : "." : r && n === 1 ? "//" : e.slice(0, n);
    },
    basename: function (e, t) {
      if (t !== void 0 && typeof t != "string") {
        throw new TypeError(
          '"ext" argument must be a string',
        );
      }
      Ue(e);
      var r = 0, n = -1, o = !0, i;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t.length === e.length && t === e) return "";
        var s = t.length - 1, a = -1;
        for (i = e.length - 1; i >= 0; --i) {
          var c = e.charCodeAt(i);
          if (c === 47) {
            if (!o) {
              r = i + 1;
              break;
            }
          } else {
            a === -1 && (o = !1, a = i + 1),
              s >= 0 &&
              (c === t.charCodeAt(s) ? --s === -1 && (n = i) : (s = -1, n = a));
          }
        }
        return r === n ? n = a : n === -1 && (n = e.length), e.slice(r, n);
      } else {
        for (
          i = e.length - 1;
          i >= 0;
          --i
        ) {
          if (e.charCodeAt(i) === 47) {
            if (!o) {
              r = i + 1;
              break;
            }
          } else n === -1 && (o = !1, n = i + 1);
        }
        return n === -1 ? "" : e.slice(r, n);
      }
    },
    extname: function (e) {
      Ue(e);
      for (
        var t = -1, r = 0, n = -1, o = !0, i = 0, s = e.length - 1;
        s >= 0;
        --s
      ) {
        var a = e.charCodeAt(s);
        if (a === 47) {
          if (!o) {
            r = s + 1;
            break;
          }
          continue;
        }
        n === -1 && (o = !1, n = s + 1),
          a === 46
            ? t === -1 ? t = s : i !== 1 && (i = 1)
            : t !== -1 && (i = -1);
      }
      return t === -1 || n === -1 || i === 0 ||
          i === 1 && t === n - 1 && t === r + 1
        ? ""
        : e.slice(t, n);
    },
    format: function (e) {
      if (e === null || typeof e != "object") {
        throw new TypeError(
          'The "pathObject" argument must be of type Object. Received type ' +
            typeof e,
        );
      }
      return hp("/", e);
    },
    parse: function (e) {
      Ue(e);
      var t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      var r = e.charCodeAt(0), n = r === 47, o;
      n ? (t.root = "/", o = 1) : o = 0;
      for (
        var i = -1, s = 0, a = -1, c = !0, l = e.length - 1, f = 0;
        l >= o;
        --l
      ) {
        if (r = e.charCodeAt(l), r === 47) {
          if (!c) {
            s = l + 1;
            break;
          }
          continue;
        }
        a === -1 && (c = !1, a = l + 1),
          r === 46
            ? i === -1 ? i = l : f !== 1 && (f = 1)
            : i !== -1 && (f = -1);
      }
      return i === -1 || a === -1 || f === 0 ||
          f === 1 && i === a - 1 && i === s + 1
        ? a !== -1 &&
          (s === 0 && n
            ? t.base = t.name = e.slice(1, a)
            : t.base = t.name = e.slice(s, a))
        : (s === 0 && n
          ? (t.name = e.slice(1, i), t.base = e.slice(1, a))
          : (t.name = e.slice(s, i), t.base = e.slice(s, a)),
          t.ext = e.slice(i, a)),
        s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = "/"),
        t;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null,
  };
  Wt.posix = Wt;
  ia.exports = Wt;
});
var aa = W((ym, sa) => {
  "use strict";
  m();
  g();
  d();
  sa.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
});
var Pn = W((bm, ua) => {
  "use strict";
  m();
  g();
  d();
  var yp = aa();
  ua.exports = (e) => typeof e == "string" ? e.replace(yp(), "") : e;
});
var ya = W((zh, ha) => {
  m();
  g();
  d();
  var jo = Symbol("arg flag"),
    he = class extends Error {
      constructor(t, r) {
        super(t),
          this.name = "ArgError",
          this.code = r,
          Object.setPrototypeOf(this, he.prototype);
      }
    };
  u(he, "ArgError");
  function Ar(
    e,
    {
      argv: t = b.argv.slice(2),
      permissive: r = !1,
      stopAtPositional: n = !1,
    } = {},
  ) {
    if (!e) {
      throw new he(
        "argument specification object is required",
        "ARG_CONFIG_NO_SPEC",
      );
    }
    let o = { _: [] }, i = {}, s = {};
    for (let a of Object.keys(e)) {
      if (!a) {
        throw new he(
          "argument key cannot be an empty string",
          "ARG_CONFIG_EMPTY_KEY",
        );
      }
      if (a[0] !== "-") {
        throw new he(
          `argument key must start with '-' but found: '${a}'`,
          "ARG_CONFIG_NONOPT_KEY",
        );
      }
      if (a.length === 1) {
        throw new he(
          `argument key must have a name; singular '-' keys are not allowed: ${a}`,
          "ARG_CONFIG_NONAME_KEY",
        );
      }
      if (typeof e[a] == "string") {
        i[a] = e[a];
        continue;
      }
      let c = e[a], l = !1;
      if (Array.isArray(c) && c.length === 1 && typeof c[0] == "function") {
        let [f] = c;
        c = u((p, h, w = []) => (w.push(f(p, h, w[w.length - 1])), w), "type"),
          l = f === Boolean || f[jo] === !0;
      } else if (typeof c == "function") l = c === Boolean || c[jo] === !0;
      else {
        throw new he(
          `type missing or not a function or valid array type: ${a}`,
          "ARG_CONFIG_VAD_TYPE",
        );
      }
      if (a[1] !== "-" && a.length > 2) {
        throw new he(
          `short argument keys (with a single hyphen) must have only one character: ${a}`,
          "ARG_CONFIG_SHORTOPT_TOOLONG",
        );
      }
      s[a] = [c, l];
    }
    for (let a = 0, c = t.length; a < c; a++) {
      let l = t[a];
      if (n && o._.length > 0) {
        o._ = o._.concat(t.slice(a));
        break;
      }
      if (l === "--") {
        o._ = o._.concat(t.slice(a + 1));
        break;
      }
      if (l.length > 1 && l[0] === "-") {
        let f = l[1] === "-" || l.length === 2
          ? [l]
          : l.slice(1).split("").map((p) => `-${p}`);
        for (let p = 0; p < f.length; p++) {
          let h = f[p],
            [w, v] = h[1] === "-" ? h.split(/=(.*)/, 2) : [h, void 0],
            y = w;
          for (; y in i;) y = i[y];
          if (!(y in s)) {
            if (r) {
              o._.push(h);
              continue;
            } else {
              throw new he(
                `unknown or unexpected option: ${w}`,
                "ARG_UNKNOWN_OPTION",
              );
            }
          }
          let [A, S] = s[y];
          if (!S && p + 1 < f.length) {
            throw new he(
              `option requires argument (but was followed by another short argument): ${w}`,
              "ARG_MISSING_REQUIRED_SHORTARG",
            );
          }
          if (S) o[y] = A(!0, y, o[y]);
          else if (v === void 0) {
            if (
              t.length < a + 2 ||
              t[a + 1].length > 1 && t[a + 1][0] === "-" &&
                !(t[a + 1].match(/^-?\d*(\.(?=\d))?\d*$/) &&
                  (A === Number ||
                    typeof BigInt != "undefined" && A === BigInt))
            ) {
              let T = w === y ? "" : ` (alias for ${y})`;
              throw new he(
                `option requires argument: ${w}${T}`,
                "ARG_MISSING_REQUIRED_LONGARG",
              );
            }
            o[y] = A(t[a + 1], y, o[y]), ++a;
          } else o[y] = A(v, y, o[y]);
        }
      } else o._.push(l);
    }
    return o;
  }
  u(Ar, "arg");
  Ar.flag = (e) => (e[jo] = !0, e);
  Ar.COUNT = Ar.flag((e, t, r) => (r || 0) + 1);
  Ar.ArgError = he;
  ha.exports = Ar;
});
var wa = W((Wh, ba) => {
  "use strict";
  m();
  g();
  d();
  ba.exports = (e) => {
    let t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  };
});
var $o = W((Hh, va) => {
  "use strict";
  m();
  g();
  d();
  var Rp = wa();
  va.exports = (e) => {
    let t = Rp(e);
    if (t === 0) return e;
    let r = new RegExp(`^[ \\t]{${t}}`, "gm");
    return e.replace(r, "");
  };
});
var Aa = W(() => {
  m();
  g();
  d();
});
var Lo = W((Ae) => {
  "use strict";
  m();
  g();
  d();
  Object.defineProperty(Ae, "__esModule", { value: !0 });
  Ae.sqltag =
    Ae.empty =
    Ae.raw =
    Ae.join =
    Ae.Sql =
      void 0;
  var Vp = So(),
    _e = class {
      constructor(t, r) {
        let n = r.length, o = t.length;
        if (o === 0) throw new TypeError("Expected at least 1 string");
        if (o - 1 !== n) {
          throw new TypeError(`Expected ${o} strings to have ${o - 1} values`);
        }
        for (let a of r) {
          a instanceof _e &&
            (n += a.values.length - 1, o += a.strings.length - 2);
        }
        this.values = new Array(n),
          this.strings = new Array(o),
          this.strings[0] = t[0];
        let i = 1, s = 0;
        for (; i < t.length;) {
          let a = r[i - 1], c = t[i++];
          if (a instanceof _e) {
            this.strings[s] += a.strings[0];
            let l = 0;
            for (; l < a.values.length;) {
              this.values[s++] = a.values[l++], this.strings[s] = a.strings[l];
            }
            this.strings[s] += c;
          } else this.values[s++] = a, this.strings[s] = c;
        }
      }
      get text() {
        return this.strings.reduce((t, r, n) => `${t}$${n}${r}`);
      }
      get sql() {
        return this.strings.join("?");
      }
      [Vp.inspect.custom]() {
        return { text: this.text, sql: this.sql, values: this.values };
      }
    };
  u(_e, "Sql");
  Ae.Sql = _e;
  Object.defineProperty(_e.prototype, "sql", { enumerable: !0 });
  Object.defineProperty(_e.prototype, "text", { enumerable: !0 });
  function Gp(e, t = ",") {
    if (e.length === 0) {
      throw new TypeError(
        "Expected `join([])` to be called with an array of multiple elements, but got an empty array",
      );
    }
    return new _e(["", ...Array(e.length - 1).fill(t), ""], e);
  }
  u(Gp, "join");
  Ae.join = Gp;
  function Ta(e) {
    return new _e([e], []);
  }
  u(Ta, "raw");
  Ae.raw = Ta;
  Ae.empty = Ta("");
  function Pa(e, ...t) {
    return new _e(e, t);
  }
  u(Pa, "sqltag");
  Ae.sqltag = Pa;
  Ae.default = Pa;
});
var Pu = W((db, Tu) => {
  "use strict";
  m();
  g();
  d();
  Tu.exports = (e) => Object.prototype.toString.call(e) === "[object RegExp]";
});
var _u = W((mb, Su) => {
  "use strict";
  m();
  g();
  d();
  Su.exports = (e) => {
    let t = typeof e;
    return e !== null && (t === "object" || t === "function");
  };
});
var Mu = W((ri) => {
  "use strict";
  m();
  g();
  d();
  Object.defineProperty(ri, "__esModule", { value: !0 });
  ri.default = (e) =>
    Object.getOwnPropertySymbols(e).filter((t) =>
      Object.prototype.propertyIsEnumerable.call(e, t)
    );
});
var Vu = W((Xb, pd) => {
  pd.exports = {
    name: "@prisma/client",
    version: "3.15.2",
    description:
      "Prisma Client is an auto-generated, type-safe and modern JavaScript/TypeScript ORM for Node.js that's tailored to your data. Supports MySQL, PostgreSQL, MariaDB, SQLite databases.",
    keywords: [
      "orm",
      "prisma2",
      "prisma",
      "client",
      "query",
      "database",
      "sql",
      "postgres",
      "postgresql",
      "mysql",
      "sqlite",
      "mariadb",
      "mssql",
      "typescript",
      "query-builder",
    ],
    main: "index.js",
    browser: "index-browser.js",
    types: "index.d.ts",
    license: "Apache-2.0",
    engines: { node: ">=12.6" },
    homepage: "https://www.prisma.io",
    repository: {
      type: "git",
      url: "https://github.com/prisma/prisma.git",
      directory: "packages/client",
    },
    author: "Tim Suchanek <suchanek@prisma.io>",
    maintainers: [
      "Jo\xEBl Galeran <galeran@prisma.io>",
      "Pierre-Antoine Mills <mills@prisma.io>",
      "Alexey Orlenko <orlenko@prisma.io>",
    ],
    bugs: "https://github.com/prisma/prisma/issues",
    scripts: {
      dev: "DEV=true node -r esbuild-register helpers/build.ts",
      build: "node -r esbuild-register helpers/build.ts",
      test: "jest --verbose",
      "test:functional":
        "pnpm run test:functional:code && pnpm run test:functional:types",
      "test:functional:code":
        "jest --verbose --config=tests/functional/jest.config.js --testPathIgnorePatterns typescript --",
      "test:functional:types":
        "jest --verbose --config=tests/functional/jest.config.js -- typescript",
      "test-notypes":
        "jest --verbose --testPathIgnorePatterns src/__tests__/types/types.test.ts",
      generate: "node scripts/postinstall.js",
      postinstall: "node scripts/postinstall.js",
      prepublishOnly: "pnpm run build",
      "new-test":
        "NODE_OPTIONS='-r ts-node/register' yo ./helpers/generator-test/index.ts",
    },
    files: [
      "README.md",
      "runtime",
      "scripts",
      "generator-build",
      "edge.js",
      "edge.d.ts",
      "index.js",
      "index.d.ts",
      "index-browser.js",
    ],
    devDependencies: {
      "@jest/test-sequencer": "28.1.0",
      "@microsoft/api-extractor": "7.24.1",
      "@opentelemetry/api": "1.1.0",
      "@prisma/debug": "workspace:*",
      "@prisma/engine-core": "workspace:*",
      "@prisma/engines": "3.15.1-1.461d6a05159055555eb7dfb337c9fb271cbd4d7e",
      "@prisma/fetch-engine":
        "3.15.1-1.461d6a05159055555eb7dfb337c9fb271cbd4d7e",
      "@prisma/generator-helper": "workspace:*",
      "@prisma/get-platform":
        "3.15.1-1.461d6a05159055555eb7dfb337c9fb271cbd4d7e",
      "@prisma/migrate": "workspace:*",
      "@prisma/sdk": "workspace:*",
      "@swc/core": "1.2.189",
      "@swc/jest": "0.2.21",
      "@timsuchanek/copy": "1.4.5",
      "@types/debug": "4.1.7",
      "@types/jest": "28.1.0",
      "@types/js-levenshtein": "1.1.1",
      "@types/mssql": "7.1.5",
      "@types/node": "12.20.51",
      "@types/pg": "8.6.5",
      "@types/yeoman-generator": "^5.2.10",
      arg: "5.0.1",
      benchmark: "2.1.4",
      chalk: "4.1.2",
      "decimal.js": "10.3.1",
      esbuild: "0.14.39",
      execa: "5.1.1",
      "expect-type": "0.13.0",
      "flat-map-polyfill": "0.3.8",
      "fs-extra": "10.1.0",
      "fs-monkey": "1.0.3",
      "get-own-enumerable-property-symbols": "3.0.2",
      globby: "11.1.0",
      "indent-string": "4.0.0",
      "is-obj": "2.0.0",
      "is-regexp": "2.1.0",
      jest: "28.1.0",
      "jest-junit": "13.2.0",
      "js-levenshtein": "1.1.6",
      klona: "2.0.5",
      "lz-string": "1.4.4",
      "make-dir": "3.1.0",
      mariadb: "3.0.0",
      mssql: "8.1.1",
      pg: "8.7.3",
      "pkg-up": "3.1.0",
      pluralize: "8.0.0",
      "replace-string": "3.1.0",
      resolve: "1.22.0",
      rimraf: "3.0.2",
      "sort-keys": "4.2.0",
      "source-map-support": "0.5.21",
      "sql-template-tag": "4.0.0",
      "stacktrace-parser": "0.1.10",
      "strip-ansi": "6.0.1",
      "strip-indent": "3.0.0",
      "ts-jest": "28.0.3",
      "ts-node": "10.8.0",
      tsd: "0.20.0",
      typescript: "4.7.2",
      "yeoman-generator": "^5.6.1",
      yo: "^4.3.0",
    },
    peerDependencies: { prisma: "*" },
    peerDependenciesMeta: { prisma: { optional: !0 } },
    dependencies: {
      "@prisma/engines-version":
        "3.15.1-1.461d6a05159055555eb7dfb337c9fb271cbd4d7e",
    },
    sideEffects: !1,
  };
});
var Ad = {};
Jn(Ad, {
  DMMF: () => gr,
  DMMFClass: () => At,
  Decimal: () => Re,
  Engine: () => ct,
  MetricsClient: () => vt,
  PrismaClientInitializationError: () => ke,
  PrismaClientKnownRequestError: () => Ve,
  PrismaClientRustPanicError: () => Ge,
  PrismaClientUnknownRequestError: () => Ne,
  PrismaClientValidationError: () => Oe,
  Sql: () => Je.Sql,
  decompressFromBase64: () => xd,
  empty: () => Je.empty,
  findSync: () => void 0,
  getPrismaClient: () => oc,
  join: () => Je.join,
  makeDocument: () => Vn,
  raw: () => Je.raw,
  sqltag: () => Je.sqltag,
  transformDocument: () => fi,
  unpack: () => Gn,
  warnEnvConflicts: () => void 0,
});
module.exports = xi(Ad);
m();
g();
d();
var ic = Z(Ui());
m();
g();
d();
var vt = class {
  constructor(t) {
    this._engine = t;
  }
  prometheus(t) {
    return this._engine.metrics({ format: "prometheus", ...t });
  }
  json(t) {
    return this._engine.metrics({ format: "json", ...t });
  }
};
u(vt, "MetricsClient");
m();
g();
d();
m();
g();
d();
var st = Z(Et());
m();
g();
d();
var jt = 9e15,
  it = 1e9,
  ao = "0123456789abcdef",
  tn =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  rn =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  uo = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -jt,
    maxE: jt,
    crypto: !1,
  },
  ws,
  He,
  B = !0,
  on = "[DecimalError] ",
  ot = on + "Invalid argument: ",
  vs = on + "Precision limit exceeded",
  Es = on + "crypto unavailable",
  xs = "[object Decimal]",
  ce = Math.floor,
  re = Math.pow,
  bl = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  wl = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  vl = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  As = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Fe = 1e7,
  j = 7,
  El = 9007199254740991,
  xl = tn.length - 1,
  co = rn.length - 1,
  I = { toStringTag: xs };
I.absoluteValue = I.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), D(e);
};
I.ceil = function () {
  return D(new this.constructor(this), this.e + 1, 2);
};
I.clampedTo = I.clamp = function (e, t) {
  var r, n = this, o = n.constructor;
  if (e = new o(e), t = new o(t), !e.s || !t.s) return new o(NaN);
  if (e.gt(t)) throw Error(ot + t);
  return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new o(n);
};
I.comparedTo = I.cmp = function (e) {
  var t,
    r,
    n,
    o,
    i = this,
    s = i.d,
    a = (e = new i.constructor(e)).d,
    c = i.s,
    l = e.s;
  if (!s || !a) {
    return !c || !l ? NaN : c !== l ? c : s === a ? 0 : !s ^ c < 0 ? 1 : -1;
  }
  if (!s[0] || !a[0]) return s[0] ? c : a[0] ? -l : 0;
  if (c !== l) return c;
  if (i.e !== e.e) return i.e > e.e ^ c < 0 ? 1 : -1;
  for (n = s.length, o = a.length, t = 0, r = n < o ? n : o; t < r; ++t) {
    if (s[t] !== a[t]) return s[t] > a[t] ^ c < 0 ? 1 : -1;
  }
  return n === o ? 0 : n > o ^ c < 0 ? 1 : -1;
};
I.cosine = I.cos = function () {
  var e, t, r = this, n = r.constructor;
  return r.d
    ? r.d[0]
      ? (e = n.precision,
        t = n.rounding,
        n.precision = e + Math.max(r.e, r.sd()) + j,
        n.rounding = 1,
        r = Al(n, Ms(n, r)),
        n.precision = e,
        n.rounding = t,
        D(He == 2 || He == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
I.cubeRoot = I.cbrt = function () {
  var e, t, r, n, o, i, s, a, c, l, f = this, p = f.constructor;
  if (!f.isFinite() || f.isZero()) return new p(f);
  for (
    B = !1,
      i = f.s * re(f.s * f, 1 / 3),
      !i || Math.abs(i) == 1 / 0
        ? (r = ie(f.d),
          e = f.e,
          (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"),
          i = re(r, 1 / 3),
          e = ce((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)),
          i == 1 / 0
            ? r = "5e" + e
            : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e),
          n = new p(r),
          n.s = f.s)
        : n = new p(i.toString()),
      s = (e = p.precision) + 3;;
  ) {
    if (
      a = n,
        c = a.times(a).times(a),
        l = c.plus(f),
        n = Y(l.plus(f).times(a), l.plus(c), s + 2, 1),
        ie(a.d).slice(0, s) === (r = ie(n.d)).slice(0, s)
    ) {
      if (r = r.slice(s - 3, s + 1), r == "9999" || !o && r == "4999") {
        if (!o && (D(a, e + 1, 0), a.times(a).times(a).eq(f))) {
          n = a;
          break;
        }
        s += 4, o = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") &&
          (D(n, e + 1, 1), t = !n.times(n).times(n).eq(f));
        break;
      }
    }
  }
  return B = !0, D(n, e, p.rounding, t);
};
I.decimalPlaces = I.dp = function () {
  var e, t = this.d, r = NaN;
  if (t) {
    if (e = t.length - 1, r = (e - ce(this.e / j)) * j, e = t[e], e) {
      for (; e % 10 == 0; e /= 10) {
        r--;
      }
    }
    r < 0 && (r = 0);
  }
  return r;
};
I.dividedBy = I.div = function (e) {
  return Y(this, new this.constructor(e));
};
I.dividedToIntegerBy = I.divToInt = function (e) {
  var t = this, r = t.constructor;
  return D(Y(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
I.equals = I.eq = function (e) {
  return this.cmp(e) === 0;
};
I.floor = function () {
  return D(new this.constructor(this), this.e + 1, 3);
};
I.greaterThan = I.gt = function (e) {
  return this.cmp(e) > 0;
};
I.greaterThanOrEqualTo = I.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
I.hyperbolicCosine = I.cosh = function () {
  var e, t, r, n, o, i = this, s = i.constructor, a = new s(1);
  if (!i.isFinite()) return new s(i.s ? 1 / 0 : NaN);
  if (i.isZero()) return a;
  r = s.precision,
    n = s.rounding,
    s.precision = r + Math.max(i.e, i.sd()) + 4,
    s.rounding = 1,
    o = i.d.length,
    o < 32
      ? (e = Math.ceil(o / 3), t = (1 / an(4, e)).toString())
      : (e = 16, t = "2.3283064365386962890625e-10"),
    i = $t(s, 1, i.times(t), new s(1), !0);
  for (var c, l = e, f = new s(8); l--;) {
    c = i.times(i), i = a.minus(c.times(f.minus(c.times(f))));
  }
  return D(i, s.precision = r, s.rounding = n, !0);
};
I.hyperbolicSine = I.sinh = function () {
  var e, t, r, n, o = this, i = o.constructor;
  if (!o.isFinite() || o.isZero()) return new i(o);
  if (
    t = i.precision,
      r = i.rounding,
      i.precision = t + Math.max(o.e, o.sd()) + 4,
      i.rounding = 1,
      n = o.d.length,
      n < 3
  ) {
    o = $t(i, 2, o, o, !0);
  } else {
    e = 1.4 * Math.sqrt(n),
      e = e > 16 ? 16 : e | 0,
      o = o.times(1 / an(5, e)),
      o = $t(i, 2, o, o, !0);
    for (var s, a = new i(5), c = new i(16), l = new i(20); e--;) {
      s = o.times(o), o = o.times(a.plus(s.times(c.times(s).plus(l))));
    }
  }
  return i.precision = t, i.rounding = r, D(o, t, r, !0);
};
I.hyperbolicTangent = I.tanh = function () {
  var e, t, r = this, n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : (e = n.precision,
        t = n.rounding,
        n.precision = e + 7,
        n.rounding = 1,
        Y(r.sinh(), r.cosh(), n.precision = e, n.rounding = t))
    : new n(r.s);
};
I.inverseCosine = I.acos = function () {
  var e,
    t = this,
    r = t.constructor,
    n = t.abs().cmp(1),
    o = r.precision,
    i = r.rounding;
  return n !== -1
    ? n === 0 ? t.isNeg() ? Ce(r, o, i) : new r(0) : new r(NaN)
    : t.isZero()
    ? Ce(r, o + 4, i).times(.5)
    : (r.precision = o + 6,
      r.rounding = 1,
      t = t.asin(),
      e = Ce(r, o + 4, i).times(.5),
      r.precision = o,
      r.rounding = i,
      e.minus(t));
};
I.inverseHyperbolicCosine = I.acosh = function () {
  var e, t, r = this, n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
    ? (e = n.precision,
      t = n.rounding,
      n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4,
      n.rounding = 1,
      B = !1,
      r = r.times(r).minus(1).sqrt().plus(r),
      B = !0,
      n.precision = e,
      n.rounding = t,
      r.ln())
    : new n(r);
};
I.inverseHyperbolicSine = I.asinh = function () {
  var e, t, r = this, n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : (e = n.precision,
      t = n.rounding,
      n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6,
      n.rounding = 1,
      B = !1,
      r = r.times(r).plus(1).sqrt().plus(r),
      B = !0,
      n.precision = e,
      n.rounding = t,
      r.ln());
};
I.inverseHyperbolicTangent = I.atanh = function () {
  var e, t, r, n, o = this, i = o.constructor;
  return o.isFinite()
    ? o.e >= 0
      ? new i(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN)
      : (e = i.precision,
        t = i.rounding,
        n = o.sd(),
        Math.max(n, e) < 2 * -o.e - 1
          ? D(new i(o), e, t, !0)
          : (i.precision = r = n - o.e,
            o = Y(o.plus(1), new i(1).minus(o), r + e, 1),
            i.precision = e + 4,
            i.rounding = 1,
            o = o.ln(),
            i.precision = e,
            i.rounding = t,
            o.times(.5)))
    : new i(NaN);
};
I.inverseSine = I.asin = function () {
  var e, t, r, n, o = this, i = o.constructor;
  return o.isZero()
    ? new i(o)
    : (t = o.abs().cmp(1),
      r = i.precision,
      n = i.rounding,
      t !== -1
        ? t === 0 ? (e = Ce(i, r + 4, n).times(.5), e.s = o.s, e) : new i(NaN)
        : (i.precision = r + 6,
          i.rounding = 1,
          o = o.div(new i(1).minus(o.times(o)).sqrt().plus(1)).atan(),
          i.precision = r,
          i.rounding = n,
          o.times(2)));
};
I.inverseTangent = I.atan = function () {
  var e,
    t,
    r,
    n,
    o,
    i,
    s,
    a,
    c,
    l = this,
    f = l.constructor,
    p = f.precision,
    h = f.rounding;
  if (l.isFinite()) {
    if (l.isZero()) return new f(l);
    if (l.abs().eq(1) && p + 4 <= co) {
      return s = Ce(f, p + 4, h).times(.25), s.s = l.s, s;
    }
  } else {
    if (!l.s) return new f(NaN);
    if (p + 4 <= co) return s = Ce(f, p + 4, h).times(.5), s.s = l.s, s;
  }
  for (
    f.precision = a = p + 10,
      f.rounding = 1,
      r = Math.min(28, a / j + 2 | 0),
      e = r;
    e;
    --e
  ) {
    l = l.div(l.times(l).plus(1).sqrt().plus(1));
  }
  for (
    B = !1, t = Math.ceil(a / j), n = 1, c = l.times(l), s = new f(l), o = l;
    e !== -1;
  ) {
    if (
      o = o.times(c),
        i = s.minus(o.div(n += 2)),
        o = o.times(c),
        s = i.plus(o.div(n += 2)),
        s.d[t] !== void 0
    ) {
      for (e = t; s.d[e] === i.d[e] && e--;);
    }
  }
  return r && (s = s.times(2 << r - 1)),
    B = !0,
    D(s, f.precision = p, f.rounding = h, !0);
};
I.isFinite = function () {
  return !!this.d;
};
I.isInteger = I.isInt = function () {
  return !!this.d && ce(this.e / j) > this.d.length - 2;
};
I.isNaN = function () {
  return !this.s;
};
I.isNegative = I.isNeg = function () {
  return this.s < 0;
};
I.isPositive = I.isPos = function () {
  return this.s > 0;
};
I.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
I.lessThan = I.lt = function (e) {
  return this.cmp(e) < 0;
};
I.lessThanOrEqualTo = I.lte = function (e) {
  return this.cmp(e) < 1;
};
I.logarithm = I.log = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    c,
    l = this,
    f = l.constructor,
    p = f.precision,
    h = f.rounding,
    w = 5;
  if (e == null) e = new f(10), t = !0;
  else {
    if (e = new f(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1)) {
      return new f(NaN);
    }
    t = e.eq(10);
  }
  if (r = l.d, l.s < 0 || !r || !r[0] || l.eq(1)) {
    return new f(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
  }
  if (t) {
    if (r.length > 1) i = !0;
    else {
      for (o = r[0]; o % 10 === 0;) o /= 10;
      i = o !== 1;
    }
  }
  if (
    B = !1,
      a = p + w,
      s = nt(l, a),
      n = t ? nn(f, a + 10) : nt(e, a),
      c = Y(s, n, a, 1),
      lr(c.d, o = p, h)
  ) {
    do if (
      a += 10,
        s = nt(l, a),
        n = t ? nn(f, a + 10) : nt(e, a),
        c = Y(s, n, a, 1),
        !i
    ) {
      +ie(c.d).slice(o + 1, o + 15) + 1 == 1e14 && (c = D(c, p + 1, 0));
      break;
    } while (lr(c.d, o += 10, h));
  }
  return B = !0, D(c, p, h);
};
I.minus = I.sub = function (e) {
  var t, r, n, o, i, s, a, c, l, f, p, h, w = this, v = w.constructor;
  if (e = new v(e), !w.d || !e.d) {
    return !w.s || !e.s
      ? e = new v(NaN)
      : w.d
      ? e.s = -e.s
      : e = new v(e.d || w.s !== e.s ? w : NaN),
      e;
  }
  if (w.s != e.s) return e.s = -e.s, w.plus(e);
  if (l = w.d, h = e.d, a = v.precision, c = v.rounding, !l[0] || !h[0]) {
    if (h[0]) e.s = -e.s;
    else if (l[0]) e = new v(w);
    else return new v(c === 3 ? -0 : 0);
    return B ? D(e, a, c) : e;
  }
  if (r = ce(e.e / j), f = ce(w.e / j), l = l.slice(), i = f - r, i) {
    for (
      p = i < 0,
        p ? (t = l, i = -i, s = h.length) : (t = h, r = f, s = l.length),
        n = Math.max(Math.ceil(a / j), s) + 2,
        i > n && (i = n, t.length = 1),
        t.reverse(),
        n = i;
      n--;
    ) {
      t.push(0);
    }
    t.reverse();
  } else {
    for (
      n = l.length, s = h.length, p = n < s, p && (s = n), n = 0;
      n < s;
      n++
    ) {
      if (l[n] != h[n]) {
        p = l[n] < h[n];
        break;
      }
    }
    i = 0;
  }
  for (
    p && (t = l, l = h, h = t, e.s = -e.s), s = l.length, n = h.length - s;
    n > 0;
    --n
  ) {
    l[s++] = 0;
  }
  for (n = h.length; n > i;) {
    if (l[--n] < h[n]) {
      for (o = n; o && l[--o] === 0;) l[o] = Fe - 1;
      --l[o], l[n] += Fe;
    }
    l[n] -= h[n];
  }
  for (; l[--s] === 0;) l.pop();
  for (; l[0] === 0; l.shift()) --r;
  return l[0]
    ? (e.d = l, e.e = sn(l, r), B ? D(e, a, c) : e)
    : new v(c === 3 ? -0 : 0);
};
I.modulo = I.mod = function (e) {
  var t, r = this, n = r.constructor;
  return e = new n(e),
    !r.d || !e.s || e.d && !e.d[0]
      ? new n(NaN)
      : !e.d || r.d && !r.d[0]
      ? D(new n(r), n.precision, n.rounding)
      : (B = !1,
        n.modulo == 9
          ? (t = Y(r, e.abs(), 0, 3, 1), t.s *= e.s)
          : t = Y(r, e, 0, n.modulo, 1),
        t = t.times(e),
        B = !0,
        r.minus(t));
};
I.naturalExponential = I.exp = function () {
  return lo(this);
};
I.naturalLogarithm = I.ln = function () {
  return nt(this);
};
I.negated = I.neg = function () {
  var e = new this.constructor(this);
  return e.s = -e.s, D(e);
};
I.plus = I.add = function (e) {
  var t, r, n, o, i, s, a, c, l, f, p = this, h = p.constructor;
  if (e = new h(e), !p.d || !e.d) {
    return !p.s || !e.s
      ? e = new h(NaN)
      : p.d || (e = new h(e.d || p.s === e.s ? p : NaN)),
      e;
  }
  if (p.s != e.s) return e.s = -e.s, p.minus(e);
  if (l = p.d, f = e.d, a = h.precision, c = h.rounding, !l[0] || !f[0]) {
    return f[0] || (e = new h(p)), B ? D(e, a, c) : e;
  }
  if (i = ce(p.e / j), n = ce(e.e / j), l = l.slice(), o = i - n, o) {
    for (
      o < 0 ? (r = l, o = -o, s = f.length) : (r = f, n = i, s = l.length),
        i = Math.ceil(a / j),
        s = i > s ? i + 1 : s + 1,
        o > s && (o = s, r.length = 1),
        r.reverse();
      o--;
    ) {
      r.push(0);
    }
    r.reverse();
  }
  for (
    s = l.length,
      o = f.length,
      s - o < 0 && (o = s, r = f, f = l, l = r),
      t = 0;
    o;
  ) {
    t = (l[--o] = l[o] + f[o] + t) / Fe | 0, l[o] %= Fe;
  }
  for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0;) l.pop();
  return e.d = l, e.e = sn(l, n), B ? D(e, a, c) : e;
};
I.precision = I.sd = function (e) {
  var t, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(ot + e);
  return r.d ? (t = Ts(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
I.round = function () {
  var e = this, t = e.constructor;
  return D(new t(e), e.e + 1, t.rounding);
};
I.sine = I.sin = function () {
  var e, t, r = this, n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : (e = n.precision,
        t = n.rounding,
        n.precision = e + Math.max(r.e, r.sd()) + j,
        n.rounding = 1,
        r = Pl(n, Ms(n, r)),
        n.precision = e,
        n.rounding = t,
        D(He > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
I.squareRoot = I.sqrt = function () {
  var e, t, r, n, o, i, s = this, a = s.d, c = s.e, l = s.s, f = s.constructor;
  if (l !== 1 || !a || !a[0]) {
    return new f(!l || l < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
  }
  for (
    B = !1,
      l = Math.sqrt(+s),
      l == 0 || l == 1 / 0
        ? (t = ie(a),
          (t.length + c) % 2 == 0 && (t += "0"),
          l = Math.sqrt(t),
          c = ce((c + 1) / 2) - (c < 0 || c % 2),
          l == 1 / 0
            ? t = "5e" + c
            : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + c),
          n = new f(t))
        : n = new f(l.toString()),
      r = (c = f.precision) + 3;;
  ) {
    if (
      i = n,
        n = i.plus(Y(s, i, r + 2, 1)).times(.5),
        ie(i.d).slice(0, r) === (t = ie(n.d)).slice(0, r)
    ) {
      if (t = t.slice(r - 3, r + 1), t == "9999" || !o && t == "4999") {
        if (!o && (D(i, c + 1, 0), i.times(i).eq(s))) {
          n = i;
          break;
        }
        r += 4, o = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") &&
          (D(n, c + 1, 1), e = !n.times(n).eq(s));
        break;
      }
    }
  }
  return B = !0, D(n, c, f.rounding, e);
};
I.tangent = I.tan = function () {
  var e, t, r = this, n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : (e = n.precision,
        t = n.rounding,
        n.precision = e + 10,
        n.rounding = 1,
        r = r.sin(),
        r.s = 1,
        r = Y(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0),
        n.precision = e,
        n.rounding = t,
        D(He == 2 || He == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
I.times = I.mul = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    c,
    l,
    f = this,
    p = f.constructor,
    h = f.d,
    w = (e = new p(e)).d;
  if (e.s *= f.s, !h || !h[0] || !w || !w[0]) {
    return new p(
      !e.s || h && !h[0] && !w || w && !w[0] && !h
        ? NaN
        : !h || !w
        ? e.s / 0
        : e.s * 0,
    );
  }
  for (
    r = ce(f.e / j) + ce(e.e / j),
      c = h.length,
      l = w.length,
      c < l && (i = h, h = w, w = i, s = c, c = l, l = s),
      i = [],
      s = c + l,
      n = s;
    n--;
  ) {
    i.push(0);
  }
  for (n = l; --n >= 0;) {
    for (t = 0, o = c + n; o > n;) {
      a = i[o] + w[n] * h[o - n - 1] + t, i[o--] = a % Fe | 0, t = a / Fe | 0;
    }
    i[o] = (i[o] + t) % Fe | 0;
  }
  for (; !i[--s];) i.pop();
  return t ? ++r : i.shift(),
    e.d = i,
    e.e = sn(i, r),
    B ? D(e, p.precision, p.rounding) : e;
};
I.toBinary = function (e, t) {
  return po(this, 2, e, t);
};
I.toDecimalPlaces = I.toDP = function (e, t) {
  var r = this, n = r.constructor;
  return r = new n(r),
    e === void 0
      ? r
      : (ve(e, 0, it),
        t === void 0 ? t = n.rounding : ve(t, 0, 8),
        D(r, e + r.e + 1, t));
};
I.toExponential = function (e, t) {
  var r, n = this, o = n.constructor;
  return e === void 0
    ? r = qe(n, !0)
    : (ve(e, 0, it),
      t === void 0 ? t = o.rounding : ve(t, 0, 8),
      n = D(new o(n), e + 1, t),
      r = qe(n, !0, e + 1)),
    n.isNeg() && !n.isZero() ? "-" + r : r;
};
I.toFixed = function (e, t) {
  var r, n, o = this, i = o.constructor;
  return e === void 0
    ? r = qe(o)
    : (ve(e, 0, it),
      t === void 0 ? t = i.rounding : ve(t, 0, 8),
      n = D(new i(o), e + o.e + 1, t),
      r = qe(n, !1, e + n.e + 1)),
    o.isNeg() && !o.isZero() ? "-" + r : r;
};
I.toFraction = function (e) {
  var t, r, n, o, i, s, a, c, l, f, p, h, w = this, v = w.d, y = w.constructor;
  if (!v) return new y(w);
  if (
    l = r = new y(1),
      n = c = new y(0),
      t = new y(n),
      i = t.e = Ts(v) - w.e - 1,
      s = i % j,
      t.d[0] = re(10, s < 0 ? j + s : s),
      e == null
  ) {
    e = i > 0 ? t : l;
  } else {
    if (a = new y(e), !a.isInt() || a.lt(l)) throw Error(ot + a);
    e = a.gt(t) ? i > 0 ? t : l : a;
  }
  for (
    B = !1,
      a = new y(ie(v)),
      f = y.precision,
      y.precision = i = v.length * j * 2;
    p = Y(a, t, 0, 1, 1), o = r.plus(p.times(n)), o.cmp(e) != 1;
  ) {
    r = n,
      n = o,
      o = l,
      l = c.plus(p.times(o)),
      c = o,
      o = t,
      t = a.minus(p.times(o)),
      a = o;
  }
  return o = Y(e.minus(r), n, 0, 1, 1),
    c = c.plus(o.times(l)),
    r = r.plus(o.times(n)),
    c.s = l.s = w.s,
    h = Y(l, n, i, 1).minus(w).abs().cmp(Y(c, r, i, 1).minus(w).abs()) < 1
      ? [l, n]
      : [c, r],
    y.precision = f,
    B = !0,
    h;
};
I.toHexadecimal = I.toHex = function (e, t) {
  return po(this, 16, e, t);
};
I.toNearest = function (e, t) {
  var r = this, n = r.constructor;
  if (r = new n(r), e == null) {
    if (!r.d) return r;
    e = new n(1), t = n.rounding;
  } else {
    if (e = new n(e), t === void 0 ? t = n.rounding : ve(t, 0, 8), !r.d) {
      return e.s ? r : e;
    }
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return e.d[0]
    ? (B = !1, r = Y(r, e, 0, t, 1).times(e), B = !0, D(r))
    : (e.s = r.s, r = e),
    r;
};
I.toNumber = function () {
  return +this;
};
I.toOctal = function (e, t) {
  return po(this, 8, e, t);
};
I.toPower = I.pow = function (e) {
  var t, r, n, o, i, s, a = this, c = a.constructor, l = +(e = new c(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new c(re(+a, l));
  if (a = new c(a), a.eq(1)) return a;
  if (n = c.precision, i = c.rounding, e.eq(1)) return D(a, n, i);
  if (t = ce(e.e / j), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= El) {
    return o = Ps(c, a, r, n), e.s < 0 ? new c(1).div(o) : D(o, n, i);
  }
  if (s = a.s, s < 0) {
    if (t < e.d.length - 1) return new c(NaN);
    if (
      (e.d[t] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1
    ) {
      return a.s = s, a;
    }
  }
  return r = re(+a, l),
    t = r == 0 || !isFinite(r)
      ? ce(l * (Math.log("0." + ie(a.d)) / Math.LN10 + a.e + 1))
      : new c(r + "").e,
    t > c.maxE + 1 || t < c.minE - 1
      ? new c(t > 0 ? s / 0 : 0)
      : (B = !1,
        c.rounding = a.s = 1,
        r = Math.min(12, (t + "").length),
        o = lo(e.times(nt(a, n + r)), n),
        o.d &&
        (o = D(o, n + 5, 1),
          lr(o.d, n, i) &&
          (t = n + 10,
            o = D(lo(e.times(nt(a, t + r)), t), t + 5, 1),
            +ie(o.d).slice(n + 1, n + 15) + 1 == 1e14 && (o = D(o, n + 1, 0)))),
        o.s = s,
        B = !0,
        c.rounding = i,
        D(o, n, i));
};
I.toPrecision = function (e, t) {
  var r, n = this, o = n.constructor;
  return e === void 0
    ? r = qe(n, n.e <= o.toExpNeg || n.e >= o.toExpPos)
    : (ve(e, 1, it),
      t === void 0 ? t = o.rounding : ve(t, 0, 8),
      n = D(new o(n), e, t),
      r = qe(n, e <= n.e || n.e <= o.toExpNeg, e)),
    n.isNeg() && !n.isZero() ? "-" + r : r;
};
I.toSignificantDigits = I.toSD = function (e, t) {
  var r = this, n = r.constructor;
  return e === void 0
    ? (e = n.precision, t = n.rounding)
    : (ve(e, 1, it), t === void 0 ? t = n.rounding : ve(t, 0, 8)),
    D(new n(r), e, t);
};
I.toString = function () {
  var e = this,
    t = e.constructor,
    r = qe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
I.truncated = I.trunc = function () {
  return D(new this.constructor(this), this.e + 1, 1);
};
I.valueOf = I.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = qe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function ie(e) {
  var t, r, n, o = e.length - 1, i = "", s = e[0];
  if (o > 0) {
    for (i += s, t = 1; t < o; t++) {
      n = e[t] + "", r = j - n.length, r && (i += rt(r)), i += n;
    }
    s = e[t], n = s + "", r = j - n.length, r && (i += rt(r));
  } else if (s === 0) return "0";
  for (; s % 10 === 0;) s /= 10;
  return i + s;
}
u(ie, "digitsToString");
function ve(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(ot + e);
}
u(ve, "checkInt32");
function lr(e, t, r, n) {
  var o, i, s, a;
  for (i = e[0]; i >= 10; i /= 10) --t;
  return --t < 0 ? (t += j, o = 0) : (o = Math.ceil((t + 1) / j), t %= j),
    i = re(10, j - t),
    a = e[o] % i | 0,
    n == null
      ? t < 3
        ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0),
          s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0)
        : s = (r < 4 && a + 1 == i || r > 3 && a + 1 == i / 2) &&
            (e[o + 1] / i / 100 | 0) == re(10, t - 2) - 1 ||
          (a == i / 2 || a == 0) && (e[o + 1] / i / 100 | 0) == 0
      : t < 4
      ? (t == 0
        ? a = a / 1e3 | 0
        : t == 1
        ? a = a / 100 | 0
        : t == 2 && (a = a / 10 | 0),
        s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999)
      : s = ((n || r < 4) && a + 1 == i || !n && r > 3 && a + 1 == i / 2) &&
        (e[o + 1] / i / 1e3 | 0) == re(10, t - 3) - 1,
    s;
}
u(lr, "checkRoundingDigits");
function en(e, t, r) {
  for (var n, o = [0], i, s = 0, a = e.length; s < a;) {
    for (i = o.length; i--;) o[i] *= t;
    for (o[0] += ao.indexOf(e.charAt(s++)), n = 0; n < o.length; n++) {
      o[n] > r - 1 &&
        (o[n + 1] === void 0 && (o[n + 1] = 0),
          o[n + 1] += o[n] / r | 0,
          o[n] %= r);
    }
  }
  return o.reverse();
}
u(en, "convertBase");
function Al(e, t) {
  var r, n, o;
  if (t.isZero()) return t;
  n = t.d.length,
    n < 32
      ? (r = Math.ceil(n / 3), o = (1 / an(4, r)).toString())
      : (r = 16, o = "2.3283064365386962890625e-10"),
    e.precision += r,
    t = $t(e, 1, t.times(o), new e(1));
  for (var i = r; i--;) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return e.precision -= r, t;
}
u(Al, "cosine");
var Y = function () {
  function e(n, o, i) {
    var s, a = 0, c = n.length;
    for (n = n.slice(); c--;) s = n[c] * o + a, n[c] = s % i | 0, a = s / i | 0;
    return a && n.unshift(a), n;
  }
  u(e, "multiplyInteger");
  function t(n, o, i, s) {
    var a, c;
    if (i != s) c = i > s ? 1 : -1;
    else {
      for (a = c = 0; a < i; a++) {
        if (n[a] != o[a]) {
          c = n[a] > o[a] ? 1 : -1;
          break;
        }
      }
    }
    return c;
  }
  u(t, "compare");
  function r(n, o, i, s) {
    for (var a = 0; i--;) {
      n[i] -= a, a = n[i] < o[i] ? 1 : 0, n[i] = a * s + n[i] - o[i];
    }
    for (; !n[0] && n.length > 1;) n.shift();
  }
  return u(r, "subtract"), function (n, o, i, s, a, c) {
    var l,
      f,
      p,
      h,
      w,
      v,
      y,
      A,
      S,
      T,
      _,
      P,
      O,
      F,
      R,
      $,
      Q,
      te,
      U,
      H,
      z = n.constructor,
      G = n.s == o.s ? 1 : -1,
      K = n.d,
      V = o.d;
    if (!K || !K[0] || !V || !V[0]) {
      return new z(
        !n.s || !o.s || (K ? V && K[0] == V[0] : !V)
          ? NaN
          : K && K[0] == 0 || !V
          ? G * 0
          : G / 0,
      );
    }
    for (
      c
        ? (w = 1, f = n.e - o.e)
        : (c = Fe, w = j, f = ce(n.e / w) - ce(o.e / w)),
        U = V.length,
        Q = K.length,
        S = new z(G),
        T = S.d = [],
        p = 0;
      V[p] == (K[p] || 0);
      p++
    );
    if (
      V[p] > (K[p] || 0) && f--,
        i == null
          ? (F = i = z.precision, s = z.rounding)
          : a
          ? F = i + (n.e - o.e) + 1
          : F = i,
        F < 0
    ) {
      T.push(1), v = !0;
    } else {
      if (F = F / w + 2 | 0, p = 0, U == 1) {
        for (h = 0, V = V[0], F++; (p < Q || h) && F--; p++) {
          R = h * c + (K[p] || 0), T[p] = R / V | 0, h = R % V | 0;
        }
        v = h || p < Q;
      } else {
        for (
          h = c / (V[0] + 1) | 0,
            h > 1 &&
            (V = e(V, h, c), K = e(K, h, c), U = V.length, Q = K.length),
            $ = U,
            _ = K.slice(0, U),
            P = _.length;
          P < U;
        ) {
          _[P++] = 0;
        }
        H = V.slice(), H.unshift(0), te = V[0], V[1] >= c / 2 && ++te;
        do h = 0,
          l = t(V, _, U, P),
          l < 0
            ? (O = _[0],
              U != P && (O = O * c + (_[1] || 0)),
              h = O / te | 0,
              h > 1
                ? (h >= c && (h = c - 1),
                  y = e(V, h, c),
                  A = y.length,
                  P = _.length,
                  l = t(y, _, A, P),
                  l == 1 && (h--, r(y, U < A ? H : V, A, c)))
                : (h == 0 && (l = h = 1), y = V.slice()),
              A = y.length,
              A < P && y.unshift(0),
              r(_, y, P, c),
              l == -1 &&
              (P = _.length,
                l = t(V, _, U, P),
                l < 1 && (h++, r(_, U < P ? H : V, P, c))),
              P = _.length)
            : l === 0 && (h++, _ = [0]),
          T[p++] = h,
          l && _[0] ? _[P++] = K[$] || 0 : (_ = [K[$]], P = 1); while (
          ($++ < Q || _[0] !== void 0) && F--
        );
        v = _[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (w == 1) S.e = f, ws = v;
    else {
      for (p = 1, h = T[0]; h >= 10; h /= 10) p++;
      S.e = p + f * w - 1, D(S, a ? i + S.e + 1 : i, s, v);
    }
    return S;
  };
}();
function D(e, t, r, n) {
  var o, i, s, a, c, l, f, p, h, w = e.constructor;
  e:
  if (t != null) {
    if (p = e.d, !p) return e;
    for (o = 1, a = p[0]; a >= 10; a /= 10) o++;
    if (i = t - o, i < 0) {
      i += j, s = t, f = p[h = 0], c = f / re(10, o - s - 1) % 10 | 0;
    } else if (h = Math.ceil((i + 1) / j), a = p.length, h >= a) {
      if (n) {
        for (; a++ <= h;) p.push(0);
        f = c = 0, o = 1, i %= j, s = i - j + 1;
      } else break e;
    } else {
      for (f = a = p[h], o = 1; a >= 10; a /= 10) o++;
      i %= j, s = i - j + o, c = s < 0 ? 0 : f / re(10, o - s - 1) % 10 | 0;
    }
    if (
      n = n || t < 0 || p[h + 1] !== void 0 ||
        (s < 0 ? f : f % re(10, o - s - 1)),
        l = r < 4 ? (c || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : c > 5 ||
          c == 5 &&
            (r == 4 || n ||
              r == 6 &&
                (i > 0 ? s > 0 ? f / re(10, o - s) : 0 : p[h - 1]) % 10 & 1 ||
              r == (e.s < 0 ? 8 : 7)),
        t < 1 || !p[0]
    ) {
      return p.length = 0,
        l
          ? (t -= e.e + 1, p[0] = re(10, (j - t % j) % j), e.e = -t || 0)
          : p[0] = e.e = 0,
        e;
    }
    if (
      i == 0
        ? (p.length = h, a = 1, h--)
        : (p.length = h + 1,
          a = re(10, j - i),
          p[h] = s > 0 ? (f / re(10, o - s) % re(10, s) | 0) * a : 0), l
    ) {
      for (;;) {
        if (h == 0) {
          for (i = 1, s = p[0]; s >= 10; s /= 10) i++;
          for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
          i != a && (e.e++, p[0] == Fe && (p[0] = 1));
          break;
        } else {
          if (p[h] += a, p[h] != Fe) break;
          p[h--] = 0, a = 1;
        }
      }
    }
    for (i = p.length; p[--i] === 0;) p.pop();
  }
  return B &&
    (e.e > w.maxE
      ? (e.d = null, e.e = NaN)
      : e.e < w.minE && (e.e = 0, e.d = [0])),
    e;
}
u(D, "finalise");
function qe(e, t, r) {
  if (!e.isFinite()) return _s(e);
  var n, o = e.e, i = ie(e.d), s = i.length;
  return t
    ? (r && (n = r - s) > 0
      ? i = i.charAt(0) + "." + i.slice(1) + rt(n)
      : s > 1 && (i = i.charAt(0) + "." + i.slice(1)),
      i = i + (e.e < 0 ? "e" : "e+") + e.e)
    : o < 0
    ? (i = "0." + rt(-o - 1) + i, r && (n = r - s) > 0 && (i += rt(n)))
    : o >= s
    ? (i += rt(o + 1 - s), r && (n = r - o - 1) > 0 && (i = i + "." + rt(n)))
    : ((n = o + 1) < s && (i = i.slice(0, n) + "." + i.slice(n)),
      r && (n = r - s) > 0 && (o + 1 === s && (i += "."), i += rt(n))),
    i;
}
u(qe, "finiteToString");
function sn(e, t) {
  var r = e[0];
  for (t *= j; r >= 10; r /= 10) t++;
  return t;
}
u(sn, "getBase10Exponent");
function nn(e, t, r) {
  if (t > xl) throw B = !0, r && (e.precision = r), Error(vs);
  return D(new e(tn), t, 1, !0);
}
u(nn, "getLn10");
function Ce(e, t, r) {
  if (t > co) throw Error(vs);
  return D(new e(rn), t, r, !0);
}
u(Ce, "getPi");
function Ts(e) {
  var t = e.length - 1, r = t * j + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
u(Ts, "getPrecision");
function rt(e) {
  for (var t = ""; e--;) t += "0";
  return t;
}
u(rt, "getZeroString");
function Ps(e, t, r, n) {
  var o, i = new e(1), s = Math.ceil(n / j + 4);
  for (B = !1;;) {
    if (
      r % 2 && (i = i.times(t), ys(i.d, s) && (o = !0)), r = ce(r / 2), r === 0
    ) {
      r = i.d.length - 1, o && i.d[r] === 0 && ++i.d[r];
      break;
    }
    t = t.times(t), ys(t.d, s);
  }
  return B = !0, i;
}
u(Ps, "intPow");
function hs(e) {
  return e.d[e.d.length - 1] & 1;
}
u(hs, "isOdd");
function Ss(e, t, r) {
  for (var n, o = new e(t[0]), i = 0; ++i < t.length;) {
    if (n = new e(t[i]), n.s) o[r](n) && (o = n);
    else {
      o = n;
      break;
    }
  }
  return o;
}
u(Ss, "maxOrMin");
function lo(e, t) {
  var r,
    n,
    o,
    i,
    s,
    a,
    c,
    l = 0,
    f = 0,
    p = 0,
    h = e.constructor,
    w = h.rounding,
    v = h.precision;
  if (!e.d || !e.d[0] || e.e > 17) {
    return new h(
      e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0,
    );
  }
  for (t == null ? (B = !1, c = v) : c = t, a = new h(.03125); e.e > -2;) {
    e = e.times(a), p += 5;
  }
  for (
    n = Math.log(re(2, p)) / Math.LN10 * 2 + 5 | 0,
      c += n,
      r = i = s = new h(1),
      h.precision = c;;
  ) {
    if (
      i = D(i.times(e), c, 1),
        r = r.times(++f),
        a = s.plus(Y(i, r, c, 1)),
        ie(a.d).slice(0, c) === ie(s.d).slice(0, c)
    ) {
      for (o = p; o--;) s = D(s.times(s), c, 1);
      if (t == null) {
        if (l < 3 && lr(s.d, c - n, w, l)) {
          h.precision = c += 10, r = i = a = new h(1), f = 0, l++;
        } else {
          return D(s, h.precision = v, w, B = !0);
        }
      } else return h.precision = v, s;
    }
    s = a;
  }
}
u(lo, "naturalExponential");
function nt(e, t) {
  var r,
    n,
    o,
    i,
    s,
    a,
    c,
    l,
    f,
    p,
    h,
    w = 1,
    v = 10,
    y = e,
    A = y.d,
    S = y.constructor,
    T = S.rounding,
    _ = S.precision;
  if (y.s < 0 || !A || !A[0] || !y.e && A[0] == 1 && A.length == 1) {
    return new S(A && !A[0] ? -1 / 0 : y.s != 1 ? NaN : A ? 0 : y);
  }
  if (
    t == null ? (B = !1, f = _) : f = t,
      S.precision = f += v,
      r = ie(A),
      n = r.charAt(0),
      Math.abs(i = y.e) < 15e14
  ) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;) {
      y = y.times(e), r = ie(y.d), n = r.charAt(0), w++;
    }
    i = y.e,
      n > 1 ? (y = new S("0." + r), i++) : y = new S(n + "." + r.slice(1));
  } else {
    return l = nn(S, f + 2, _).times(i + ""),
      y = nt(new S(n + "." + r.slice(1)), f - v).plus(l),
      S.precision = _,
      t == null ? D(y, _, T, B = !0) : y;
  }
  for (
    p = y,
      c = s = y = Y(y.minus(1), y.plus(1), f, 1),
      h = D(y.times(y), f, 1),
      o = 3;;
  ) {
    if (
      s = D(s.times(h), f, 1),
        l = c.plus(Y(s, new S(o), f, 1)),
        ie(l.d).slice(0, f) === ie(c.d).slice(0, f)
    ) {
      if (
        c = c.times(2),
          i !== 0 && (c = c.plus(nn(S, f + 2, _).times(i + ""))),
          c = Y(c, new S(w), f, 1),
          t == null
      ) {
        if (lr(c.d, f - v, T, a)) {
          S.precision = f += v,
            l = s = y = Y(p.minus(1), p.plus(1), f, 1),
            h = D(y.times(y), f, 1),
            o = a = 1;
        } else return D(c, S.precision = _, T, B = !0);
      } else return S.precision = _, c;
    }
    c = l, o += 2;
  }
}
u(nt, "naturalLogarithm");
function _s(e) {
  return String(e.s * e.s / 0);
}
u(_s, "nonFiniteToString");
function fo(e, t) {
  var r, n, o;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (o = t.length; t.charCodeAt(o - 1) === 48; --o);
  if (t = t.slice(n, o), t) {
    if (
      o -= n,
        e.e = r = r - n - 1,
        e.d = [],
        n = (r + 1) % j,
        r < 0 && (n += j),
        n < o
    ) {
      for (n && e.d.push(+t.slice(0, n)), o -= j; n < o;) {
        e.d.push(+t.slice(n, n += j));
      }
      t = t.slice(n), n = j - t.length;
    } else n -= o;
    for (; n--;) t += "0";
    e.d.push(+t),
      B &&
      (e.e > e.constructor.maxE
        ? (e.d = null, e.e = NaN)
        : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else e.e = 0, e.d = [0];
  return e;
}
u(fo, "parseDecimal");
function Tl(e, t) {
  var r, n, o, i, s, a, c, l, f;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), As.test(t)) return fo(e, t);
  } else if (t === "Infinity" || t === "NaN") {
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  }
  if (wl.test(t)) r = 16, t = t.toLowerCase();
  else if (bl.test(t)) r = 2;
  else if (vl.test(t)) r = 8;
  else throw Error(ot + t);
  for (
    i = t.search(/p/i),
      i > 0 ? (c = +t.slice(i + 1), t = t.substring(2, i)) : t = t.slice(2),
      i = t.indexOf("."),
      s = i >= 0,
      n = e.constructor,
      s &&
      (t = t.replace(".", ""),
        a = t.length,
        i = a - i,
        o = Ps(n, new n(r), i, i * 2)),
      l = en(t, r, Fe),
      f = l.length - 1,
      i = f;
    l[i] === 0;
    --i
  ) {
    l.pop();
  }
  return i < 0
    ? new n(e.s * 0)
    : (e.e = sn(l, f),
      e.d = l,
      B = !1,
      s && (e = Y(e, o, a * 4)),
      c && (e = e.times(Math.abs(c) < 54 ? re(2, c) : Qe.pow(2, c))),
      B = !0,
      e);
}
u(Tl, "parseOther");
function Pl(e, t) {
  var r, n = t.d.length;
  if (n < 3) return t.isZero() ? t : $t(e, 2, t, t);
  r = 1.4 * Math.sqrt(n),
    r = r > 16 ? 16 : r | 0,
    t = t.times(1 / an(5, r)),
    t = $t(e, 2, t, t);
  for (var o, i = new e(5), s = new e(16), a = new e(20); r--;) {
    o = t.times(t), t = t.times(i.plus(o.times(s.times(o).minus(a))));
  }
  return t;
}
u(Pl, "sine");
function $t(e, t, r, n, o) {
  var i, s, a, c, l = 1, f = e.precision, p = Math.ceil(f / j);
  for (B = !1, c = r.times(r), a = new e(n);;) {
    if (
      s = Y(a.times(c), new e(t++ * t++), f, 1),
        a = o ? n.plus(s) : n.minus(s),
        n = Y(s.times(c), new e(t++ * t++), f, 1),
        s = a.plus(n),
        s.d[p] !== void 0
    ) {
      for (i = p; s.d[i] === a.d[i] && i--;);
      if (i == -1) break;
    }
    i = a, a = n, n = s, s = i, l++;
  }
  return B = !0, s.d.length = p + 1, s;
}
u($t, "taylorSeries");
function an(e, t) {
  for (var r = e; --t;) r *= e;
  return r;
}
u(an, "tinyPow");
function Ms(e, t) {
  var r, n = t.s < 0, o = Ce(e, e.precision, 1), i = o.times(.5);
  if (t = t.abs(), t.lte(i)) return He = n ? 4 : 1, t;
  if (r = t.divToInt(o), r.isZero()) He = n ? 3 : 2;
  else {
    if (t = t.minus(r.times(o)), t.lte(i)) {
      return He = hs(r) ? n ? 2 : 3 : n ? 4 : 1, t;
    }
    He = hs(r) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return t.minus(o).abs();
}
u(Ms, "toLessThanHalfPi");
function po(e, t, r, n) {
  var o, i, s, a, c, l, f, p, h, w = e.constructor, v = r !== void 0;
  if (
    v
      ? (ve(r, 1, it), n === void 0 ? n = w.rounding : ve(n, 0, 8))
      : (r = w.precision, n = w.rounding), !e.isFinite()
  ) {
    f = _s(e);
  } else {
    for (
      f = qe(e),
        s = f.indexOf("."),
        v
          ? (o = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2))
          : o = t,
        s >= 0 &&
        (f = f.replace(".", ""),
          h = new w(1),
          h.e = f.length - s,
          h.d = en(qe(h), 10, o),
          h.e = h.d.length),
        p = en(f, 10, o),
        i = c = p.length;
      p[--c] == 0;
    ) {
      p.pop();
    }
    if (!p[0]) f = v ? "0p+0" : "0";
    else {
      if (
        s < 0
          ? i--
          : (e = new w(e),
            e.d = p,
            e.e = i,
            e = Y(e, h, r, n, 0, o),
            p = e.d,
            i = e.e,
            l = ws),
          s = p[r],
          a = o / 2,
          l = l || p[r + 1] !== void 0,
          l = n < 4
            ? (s !== void 0 || l) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              s === a &&
                (n === 4 || l || n === 6 && p[r - 1] & 1 ||
                  n === (e.s < 0 ? 8 : 7)),
          p.length = r,
          l
      ) {
        for (; ++p[--r] > o - 1;) p[r] = 0, r || (++i, p.unshift(1));
      }
      for (c = p.length; !p[c - 1]; --c);
      for (s = 0, f = ""; s < c; s++) f += ao.charAt(p[s]);
      if (v) {
        if (c > 1) {
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --c; c % s; c++) f += "0";
            for (p = en(f, o, t), c = p.length; !p[c - 1]; --c);
            for (s = 1, f = "1."; s < c; s++) f += ao.charAt(p[s]);
          } else f = f.charAt(0) + "." + f.slice(1);
        }
        f = f + (i < 0 ? "p" : "p+") + i;
      } else if (i < 0) {
        for (; ++i;) f = "0" + f;
        f = "0." + f;
      } else if (++i > c) for (i -= c; i--;) f += "0";
      else i < c && (f = f.slice(0, i) + "." + f.slice(i));
    }
    f = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + f;
  }
  return e.s < 0 ? "-" + f : f;
}
u(po, "toStringBinary");
function ys(e, t) {
  if (e.length > t) return e.length = t, !0;
}
u(ys, "truncate");
function Sl(e) {
  return new this(e).abs();
}
u(Sl, "abs");
function _l(e) {
  return new this(e).acos();
}
u(_l, "acos");
function Ml(e) {
  return new this(e).acosh();
}
u(Ml, "acosh");
function Ol(e, t) {
  return new this(e).plus(t);
}
u(Ol, "add");
function Il(e) {
  return new this(e).asin();
}
u(Il, "asin");
function Cl(e) {
  return new this(e).asinh();
}
u(Cl, "asinh");
function Fl(e) {
  return new this(e).atan();
}
u(Fl, "atan");
function Rl(e) {
  return new this(e).atanh();
}
u(Rl, "atanh");
function kl(e, t) {
  e = new this(e), t = new this(t);
  var r, n = this.precision, o = this.rounding, i = n + 4;
  return !e.s || !t.s
    ? r = new this(NaN)
    : !e.d && !t.d
    ? (r = Ce(this, i, 1).times(t.s > 0 ? .25 : .75), r.s = e.s)
    : !t.d || e.isZero()
    ? (r = t.s < 0 ? Ce(this, n, o) : new this(0), r.s = e.s)
    : !e.d || t.isZero()
    ? (r = Ce(this, i, 1).times(.5), r.s = e.s)
    : t.s < 0
    ? (this.precision = i,
      this.rounding = 1,
      r = this.atan(Y(e, t, i, 1)),
      t = Ce(this, i, 1),
      this.precision = n,
      this.rounding = o,
      r = e.s < 0 ? r.minus(t) : r.plus(t))
    : r = this.atan(Y(e, t, i, 1)),
    r;
}
u(kl, "atan2");
function Nl(e) {
  return new this(e).cbrt();
}
u(Nl, "cbrt");
function Dl(e) {
  return D(e = new this(e), e.e + 1, 2);
}
u(Dl, "ceil");
function jl(e, t, r) {
  return new this(e).clamp(t, r);
}
u(jl, "clamp");
function $l(e) {
  if (!e || typeof e != "object") throw Error(on + "Object expected");
  var t,
    r,
    n,
    o = e.defaults === !0,
    i = [
      "precision",
      1,
      it,
      "rounding",
      0,
      8,
      "toExpNeg",
      -jt,
      0,
      "toExpPos",
      0,
      jt,
      "maxE",
      0,
      jt,
      "minE",
      -jt,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < i.length; t += 3) {
    if (r = i[t], o && (this[r] = uo[r]), (n = e[r]) !== void 0) {
      if (ce(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(ot + r + ": " + n);
    }
  }
  if (r = "crypto", o && (this[r] = uo[r]), (n = e[r]) !== void 0) {
    if (n === !0 || n === !1 || n === 0 || n === 1) {
      if (n) {
        if (
          typeof crypto != "undefined" && crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        ) {
          this[r] = !0;
        } else throw Error(Es);
      } else this[r] = !1;
    } else throw Error(ot + r + ": " + n);
  }
  return this;
}
u($l, "config");
function Bl(e) {
  return new this(e).cos();
}
u(Bl, "cos");
function Ll(e) {
  return new this(e).cosh();
}
u(Ll, "cosh");
function Os(e) {
  var t, r, n;
  function o(i) {
    var s, a, c, l = this;
    if (!(l instanceof o)) return new o(i);
    if (l.constructor = o, bs(i)) {
      l.s = i.s,
        B
          ? !i.d || i.e > o.maxE
            ? (l.e = NaN, l.d = null)
            : i.e < o.minE
            ? (l.e = 0, l.d = [0])
            : (l.e = i.e, l.d = i.d.slice())
          : (l.e = i.e, l.d = i.d ? i.d.slice() : i.d);
      return;
    }
    if (c = typeof i, c === "number") {
      if (i === 0) {
        l.s = 1 / i < 0 ? -1 : 1, l.e = 0, l.d = [0];
        return;
      }
      if (i < 0 ? (i = -i, l.s = -1) : l.s = 1, i === ~~i && i < 1e7) {
        for (s = 0, a = i; a >= 10; a /= 10) s++;
        B
          ? s > o.maxE
            ? (l.e = NaN, l.d = null)
            : s < o.minE
            ? (l.e = 0, l.d = [0])
            : (l.e = s, l.d = [i])
          : (l.e = s, l.d = [i]);
        return;
      } else if (i * 0 !== 0) {
        i || (l.s = NaN), l.e = NaN, l.d = null;
        return;
      }
      return fo(l, i.toString());
    } else if (c !== "string") throw Error(ot + i);
    return (a = i.charCodeAt(0)) === 45
      ? (i = i.slice(1), l.s = -1)
      : (a === 43 && (i = i.slice(1)), l.s = 1),
      As.test(i) ? fo(l, i) : Tl(l, i);
  }
  if (
    u(o, "Decimal"),
      o.prototype = I,
      o.ROUND_UP = 0,
      o.ROUND_DOWN = 1,
      o.ROUND_CEIL = 2,
      o.ROUND_FLOOR = 3,
      o.ROUND_HALF_UP = 4,
      o.ROUND_HALF_DOWN = 5,
      o.ROUND_HALF_EVEN = 6,
      o.ROUND_HALF_CEIL = 7,
      o.ROUND_HALF_FLOOR = 8,
      o.EUCLID = 9,
      o.config = o.set = $l,
      o.clone = Os,
      o.isDecimal = bs,
      o.abs = Sl,
      o.acos = _l,
      o.acosh = Ml,
      o.add = Ol,
      o.asin = Il,
      o.asinh = Cl,
      o.atan = Fl,
      o.atanh = Rl,
      o.atan2 = kl,
      o.cbrt = Nl,
      o.ceil = Dl,
      o.clamp = jl,
      o.cos = Bl,
      o.cosh = Ll,
      o.div = ql,
      o.exp = Ul,
      o.floor = Vl,
      o.hypot = Gl,
      o.ln = Jl,
      o.log = zl,
      o.log10 = Hl,
      o.log2 = Wl,
      o.max = Ql,
      o.min = Kl,
      o.mod = Yl,
      o.mul = Zl,
      o.pow = Xl,
      o.random = ef,
      o.round = tf,
      o.sign = rf,
      o.sin = nf,
      o.sinh = of,
      o.sqrt = sf,
      o.sub = af,
      o.sum = uf,
      o.tan = cf,
      o.tanh = lf,
      o.trunc = ff,
      e === void 0 && (e = {}),
      e && e.defaults !== !0
  ) {
    for (
      n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ], t = 0;
      t < n.length;
    ) {
      e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
    }
  }
  return o.config(e), o;
}
u(Os, "clone");
function ql(e, t) {
  return new this(e).div(t);
}
u(ql, "div");
function Ul(e) {
  return new this(e).exp();
}
u(Ul, "exp");
function Vl(e) {
  return D(e = new this(e), e.e + 1, 3);
}
u(Vl, "floor");
function Gl() {
  var e, t, r = new this(0);
  for (B = !1, e = 0; e < arguments.length;) {
    if (t = new this(arguments[e++]), t.d) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return B = !0, new this(1 / 0);
      r = t;
    }
  }
  return B = !0, r.sqrt();
}
u(Gl, "hypot");
function bs(e) {
  return e instanceof Qe || e && e.toStringTag === xs || !1;
}
u(bs, "isDecimalInstance");
function Jl(e) {
  return new this(e).ln();
}
u(Jl, "ln");
function zl(e, t) {
  return new this(e).log(t);
}
u(zl, "log");
function Wl(e) {
  return new this(e).log(2);
}
u(Wl, "log2");
function Hl(e) {
  return new this(e).log(10);
}
u(Hl, "log10");
function Ql() {
  return Ss(this, arguments, "lt");
}
u(Ql, "max");
function Kl() {
  return Ss(this, arguments, "gt");
}
u(Kl, "min");
function Yl(e, t) {
  return new this(e).mod(t);
}
u(Yl, "mod");
function Zl(e, t) {
  return new this(e).mul(t);
}
u(Zl, "mul");
function Xl(e, t) {
  return new this(e).pow(t);
}
u(Xl, "pow");
function ef(e) {
  var t, r, n, o, i = 0, s = new this(1), a = [];
  if (
    e === void 0 ? e = this.precision : ve(e, 1, it),
      n = Math.ceil(e / j),
      this.crypto
  ) {
    if (crypto.getRandomValues) {
      for (t = crypto.getRandomValues(new Uint32Array(n)); i < n;) {
        o = t[i],
          o >= 429e7
            ? t[i] = crypto.getRandomValues(new Uint32Array(1))[0]
            : a[i++] = o % 1e7;
      }
    } else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(n *= 4); i < n;) {
        o = t[i] + (t[i + 1] << 8) + (t[i + 2] << 16) +
          ((t[i + 3] & 127) << 24),
          o >= 214e7
            ? crypto.randomBytes(4).copy(t, i)
            : (a.push(o % 1e7), i += 4);
      }
      i = n / 4;
    } else throw Error(Es);
  } else for (; i < n;) a[i++] = Math.random() * 1e7 | 0;
  for (
    n = a[--i], e %= j, n && e && (o = re(10, j - e), a[i] = (n / o | 0) * o);
    a[i] === 0;
    i--
  ) {
    a.pop();
  }
  if (i < 0) r = 0, a = [0];
  else {
    for (r = -1; a[0] === 0; r -= j) a.shift();
    for (n = 1, o = a[0]; o >= 10; o /= 10) n++;
    n < j && (r -= j - n);
  }
  return s.e = r, s.d = a, s;
}
u(ef, "random");
function tf(e) {
  return D(e = new this(e), e.e + 1, this.rounding);
}
u(tf, "round");
function rf(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
u(rf, "sign");
function nf(e) {
  return new this(e).sin();
}
u(nf, "sin");
function of(e) {
  return new this(e).sinh();
}
u(of, "sinh");
function sf(e) {
  return new this(e).sqrt();
}
u(sf, "sqrt");
function af(e, t) {
  return new this(e).sub(t);
}
u(af, "sub");
function uf() {
  var e = 0, t = arguments, r = new this(t[e]);
  for (B = !1; r.s && ++e < t.length;) r = r.plus(t[e]);
  return B = !0, D(r, this.precision, this.rounding);
}
u(uf, "sum");
function cf(e) {
  return new this(e).tan();
}
u(cf, "tan");
function lf(e) {
  return new this(e).tanh();
}
u(lf, "tanh");
function ff(e) {
  return D(e = new this(e), e.e + 1, 1);
}
u(ff, "trunc");
I[Symbol.for("nodejs.util.inspect.custom")] = I.toString;
I[Symbol.toStringTag] = "Decimal";
var Qe = I.constructor = Os(uo);
tn = new Qe(tn);
rn = new Qe(rn);
var Re = Qe;
var ho = Z(go()), Rs = Z(mo());
m();
g();
d();
function un(e) {
  return Qe.isDecimal(e)
    ? !0
    : e !== null && typeof e == "object" && typeof e.s == "number" &&
      typeof e.e == "number" && Array.isArray(e.d);
}
u(un, "isDecimalJsLike");
function Fs(e) {
  if (Qe.isDecimal(e)) return String(e);
  let t = new Qe(0);
  return t.d = e.d, t.e = e.e, t.s = e.s, String(t);
}
u(Fs, "stringifyDecimalJsLike");
var le = u((e, t) => {
    let r = {};
    for (let n of e) {
      let o = n[t];
      r[o] = n;
    }
    return r;
  }, "keyBy"),
  Bt = {
    String: !0,
    Int: !0,
    Float: !0,
    Boolean: !0,
    Long: !0,
    DateTime: !0,
    ID: !0,
    UUID: !0,
    Json: !0,
    Bytes: !0,
    Decimal: !0,
    BigInt: !0,
  };
var pf = { string: "String", boolean: "Boolean", object: "Json" };
function Lt(e) {
  return typeof e == "string" ? e : e.name;
}
u(Lt, "stringifyGraphQLType");
function pr(e, t) {
  return t ? `List<${e}>` : e;
}
u(pr, "wrapWithList");
var gf =
    /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/,
  df =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function qt(e, t) {
  if (e === null) return "null";
  if (Object.prototype.toString.call(e) === "[object BigInt]") return "BigInt";
  if (Re.isDecimal(e) || t === "Decimal" && un(e)) return "Decimal";
  if (E.Buffer.isBuffer(e)) return "Bytes";
  if (Array.isArray(e)) {
    let n = e.reduce((o, i) => {
      let s = qt(i, t);
      return o.includes(s) || o.push(s), o;
    }, []);
    return n.includes("Float") && n.includes("Int") && (n = ["Float"]),
      `List<${n.join(" | ")}>`;
  }
  let r = typeof e;
  if (r === "number") return Math.trunc(e) === e ? "Int" : "Float";
  if (Object.prototype.toString.call(e) === "[object Date]") return "DateTime";
  if (r === "string") {
    if (df.test(e)) return "UUID";
    let n = new Date(e);
    if (t && typeof t == "object" && t.values && t.values.includes(e)) {
      return t.name;
    }
    if (n.toString() === "Invalid Date") return "String";
    if (gf.test(e)) return "DateTime";
  }
  return pf[r];
}
u(qt, "getGraphQLType");
function cn(e, t) {
  return t.reduce((n, o) => {
    let i = (0, Rs.default)(e, o);
    return i < n.distance ? { distance: i, str: o } : n;
  }, {
    distance: Math.min(
      Math.floor(e.length) * 1.1,
      ...t.map((n) => n.length * 3),
    ),
    str: null,
  }).str;
}
u(cn, "getSuggestion");
function Ut(e, t = !1) {
  if (typeof e == "string") return e;
  if (e.values) {
    return `enum ${e.name} {
${(0, ho.default)(e.values.join(", "), 2)}
}`;
  }
  {
    let r = (0, ho.default)(
      e.fields.map((n) => {
        let o = `${n.name}`,
          i = `${t ? st.default.green(o) : o}${n.isRequired ? "" : "?"}: ${
            st.default.white(
              n.inputTypes.map((s) =>
                pr(mf(s.type) ? s.type.name : Lt(s.type), s.isList)
              ).join(" | "),
            )
          }`;
        return n.isRequired ? i : st.default.dim(i);
      }).join(`
`),
      2,
    );
    return `${st.default.dim("type")} ${st.default.bold.dim(e.name)} ${
      st.default.dim("{")
    }
${r}
${st.default.dim("}")}`;
  }
}
u(Ut, "stringifyInputType");
function mf(e) {
  return typeof e != "string";
}
u(mf, "argIsInputType");
function fr(e) {
  return typeof e == "string" ? e === "Null" ? "null" : e : e.name;
}
u(fr, "getInputTypeName");
function xt(e) {
  return typeof e == "string" ? e : e.name;
}
u(xt, "getOutputTypeName");
function yo(e, t, r = !1) {
  if (typeof e == "string") return e === "Null" ? "null" : e;
  if (e.values) return e.values.join(" | ");
  let n = e,
    o = t && n.fields.every((i) => {
      var s;
      return i.inputTypes[0].location === "inputObjectTypes" ||
        ((s = i.inputTypes[1]) == null ? void 0 : s.location) ===
          "inputObjectTypes";
    });
  return r ? fr(e) : n.fields.reduce((i, s) => {
    let a = "";
    return !o && !s.isRequired
      ? a = s.inputTypes.map((c) => fr(c.type)).join(" | ")
      : a = s.inputTypes.map((c) => yo(c.type, s.isRequired, !0)).join(" | "),
      i[s.name + (s.isRequired ? "" : "?")] = a,
      i;
  }, {});
}
u(yo, "inputTypeToJson");
function ks(e, t, r) {
  let n = {};
  for (let o of e) n[r(o)] = o;
  for (let o of t) {
    let i = r(o);
    n[i] || (n[i] = o);
  }
  return Object.values(n);
}
u(ks, "unionBy");
function Ns(e) {
  return e.endsWith("GroupByOutputType");
}
u(Ns, "isGroupByOutputName");
var At = class {
  constructor({ datamodel: t, schema: r, mappings: n }) {
    this.outputTypeToMergedOutputType = u(
      (t) => ({ ...t, fields: t.fields }),
      "outputTypeToMergedOutputType",
    );
    this.datamodel = t,
      this.schema = r,
      this.mappings = n,
      this.enumMap = this.getEnumMap(),
      this.datamodelEnumMap = this.getDatamodelEnumMap(),
      this.queryType = this.getQueryType(),
      this.mutationType = this.getMutationType(),
      this.modelMap = this.getModelMap(),
      this.typeMap = this.getTypeMap(),
      this.typeAndModelMap = this.getTypeModelMap(),
      this.outputTypes = this.getOutputTypes(),
      this.outputTypeMap = this.getMergedOutputTypeMap(),
      this.resolveOutputTypes(),
      this.inputObjectTypes = this.schema.inputObjectTypes,
      this.inputTypeMap = this.getInputTypeMap(),
      this.resolveInputTypes(),
      this.resolveFieldArgumentTypes(),
      this.mappingsMap = this.getMappingsMap(),
      this.queryType = this.outputTypeMap.Query,
      this.mutationType = this.outputTypeMap.Mutation,
      this.rootFieldMap = this.getRootFieldMap();
  }
  get [Symbol.toStringTag]() {
    return "DMMFClass";
  }
  resolveOutputTypes() {
    for (let t of this.outputTypes.model) {
      for (let r of t.fields) {
        typeof r.outputType.type == "string" && !Bt[r.outputType.type] &&
          (r.outputType.type = this.outputTypeMap[r.outputType.type] ||
            this.outputTypeMap[r.outputType.type] ||
            this.enumMap[r.outputType.type] || r.outputType.type);
      }
      t.fieldMap = le(t.fields, "name");
    }
    for (let t of this.outputTypes.prisma) {
      for (let r of t.fields) {
        typeof r.outputType.type == "string" && !Bt[r.outputType.type] &&
          (r.outputType.type = this.outputTypeMap[r.outputType.type] ||
            this.outputTypeMap[r.outputType.type] ||
            this.enumMap[r.outputType.type] || r.outputType.type);
      }
      t.fieldMap = le(t.fields, "name");
    }
  }
  resolveInputTypes() {
    let t = this.inputObjectTypes.prisma;
    this.inputObjectTypes.model && t.push(...this.inputObjectTypes.model);
    for (let r of t) {
      for (let n of r.fields) {
        for (let o of n.inputTypes) {
          let i = o.type;
          typeof i == "string" && !Bt[i] &&
            (this.inputTypeMap[i] || this.enumMap[i]) &&
            (o.type = this.inputTypeMap[i] || this.enumMap[i] || i);
        }
      }
      r.fieldMap = le(r.fields, "name");
    }
  }
  resolveFieldArgumentTypes() {
    for (let t of this.outputTypes.prisma) {
      for (let r of t.fields) {
        for (let n of r.args) {
          for (let o of n.inputTypes) {
            let i = o.type;
            typeof i == "string" && !Bt[i] &&
              (o.type = this.inputTypeMap[i] || this.enumMap[i] || i);
          }
        }
      }
    }
    for (let t of this.outputTypes.model) {
      for (let r of t.fields) {
        for (let n of r.args) {
          for (let o of n.inputTypes) {
            let i = o.type;
            typeof i == "string" && !Bt[i] &&
              (o.type = this.inputTypeMap[i] || this.enumMap[i] || o.type);
          }
        }
      }
    }
  }
  getQueryType() {
    return this.schema.outputObjectTypes.prisma.find((t) => t.name === "Query");
  }
  getMutationType() {
    return this.schema.outputObjectTypes.prisma.find((t) =>
      t.name === "Mutation"
    );
  }
  getOutputTypes() {
    return {
      model: this.schema.outputObjectTypes.model.map(
        this.outputTypeToMergedOutputType,
      ),
      prisma: this.schema.outputObjectTypes.prisma.map(
        this.outputTypeToMergedOutputType,
      ),
    };
  }
  getDatamodelEnumMap() {
    return le(this.datamodel.enums, "name");
  }
  getEnumMap() {
    return {
      ...le(this.schema.enumTypes.prisma, "name"),
      ...this.schema.enumTypes.model
        ? le(this.schema.enumTypes.model, "name")
        : void 0,
    };
  }
  getModelMap() {
    return { ...le(this.datamodel.models, "name") };
  }
  getTypeMap() {
    return { ...le(this.datamodel.types, "name") };
  }
  getTypeModelMap() {
    return { ...this.getTypeMap(), ...this.getModelMap() };
  }
  getMergedOutputTypeMap() {
    return {
      ...le(this.outputTypes.model, "name"),
      ...le(this.outputTypes.prisma, "name"),
    };
  }
  getInputTypeMap() {
    return {
      ...this.schema.inputObjectTypes.model
        ? le(this.schema.inputObjectTypes.model, "name")
        : void 0,
      ...le(this.schema.inputObjectTypes.prisma, "name"),
    };
  }
  getMappingsMap() {
    return le(this.mappings.modelOperations, "model");
  }
  getRootFieldMap() {
    return {
      ...le(this.queryType.fields, "name"),
      ...le(this.mutationType.fields, "name"),
    };
  }
};
u(At, "DMMFHelper");
m();
g();
d();
m();
g();
d();
var gr;
((t) => {
  let e;
  ((
    S,
  ) => (S.findUnique = "findUnique",
    S.findFirst = "findFirst",
    S.findMany = "findMany",
    S.create = "create",
    S.createMany = "createMany",
    S.update = "update",
    S.updateMany = "updateMany",
    S.upsert = "upsert",
    S.delete = "delete",
    S.deleteMany = "deleteMany",
    S.groupBy = "groupBy",
    S.count = "count",
    S.aggregate = "aggregate",
    S.findRaw = "findRaw",
    S.aggregateRaw = "aggregateRaw"))(
      e = t.ModelAction || (t.ModelAction = {}),
    );
})(gr || (gr = {}));
m();
g();
d();
An();
m();
g();
d();
m();
g();
d();
var ct = class {};
u(ct, "Engine");
m();
g();
d();
var ke = class extends Error {
  constructor(r, n, o) {
    super(r);
    this.clientVersion = n, this.errorCode = o, Error.captureStackTrace(ke);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
u(ke, "PrismaClientInitializationError");
m();
g();
d();
var Ve = class extends Error {
  constructor(r, n, o, i) {
    super(r);
    this.code = n, this.clientVersion = o, this.meta = i;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
u(Ve, "PrismaClientKnownRequestError");
m();
g();
d();
var Ge = class extends Error {
  constructor(r, n) {
    super(r);
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
u(Ge, "PrismaClientRustPanicError");
m();
g();
d();
var Ne = class extends Error {
  constructor(r, n) {
    super(r);
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
u(Ne, "PrismaClientUnknownRequestError");
m();
g();
d();
function ca(e, t) {
  return e.user_facing_error.error_code
    ? new Ve(
      e.user_facing_error.message,
      e.user_facing_error.error_code,
      t,
      e.user_facing_error.meta,
    )
    : new Ne(e.error, t);
}
u(ca, "prismaGraphQLToJSError");
m();
g();
d();
var da = Z(ra());
m();
g();
d();
m();
g();
d();
var yr = class extends Error {
  constructor(r, n) {
    super(r);
    this.clientVersion = n.clientVersion, this.cause = n.cause;
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
u(yr, "PrismaClientError");
var me = class extends yr {
  constructor(r, n) {
    var o;
    super(r, n);
    this.isRetryable = (o = n.isRetryable) != null ? o : !0;
  }
};
u(me, "DataProxyError");
m();
g();
d();
m();
g();
d();
function X(e, t) {
  return { ...e, isRetryable: t };
}
u(X, "setRetryable");
var Ht = class extends me {
  constructor(r) {
    super("This request must be retried", X(r, !0));
    this.name = "ForcedRetryError";
    this.code = "P5001";
  }
};
u(Ht, "ForcedRetryError");
m();
g();
d();
var _t = class extends me {
  constructor(r, n) {
    super(r, X(n, !1));
    this.name = "InvalidDatasourceError";
    this.code = "P5002";
  }
};
u(_t, "InvalidDatasourceError");
m();
g();
d();
var Ke = class extends me {
  constructor(r, n) {
    super(r, X(n, !1));
    this.name = "NotImplementedYetError";
    this.code = "P5004";
  }
};
u(Ke, "NotImplementedYetError");
m();
g();
d();
m();
g();
d();
var ae = class extends me {
  constructor(r, n) {
    super(r, n);
    this.response = n.response;
  }
};
u(ae, "DataProxyAPIError");
var Mt = class extends ae {
  constructor(r) {
    super("Schema needs to be uploaded", X(r, !0));
    this.name = "SchemaMissingError";
    this.code = "P5005";
  }
};
u(Mt, "SchemaMissingError");
m();
g();
d();
m();
g();
d();
var bp = "This request could not be understood by the server",
  Qt = class extends ae {
    constructor(r, n, o) {
      super(n || bp, X(r, !1));
      this.name = "BadRequestError";
      this.code = "P5000";
      o && (this.code = o);
    }
  };
u(Qt, "BadRequestError");
m();
g();
d();
var br = class extends ae {
  constructor(r) {
    super("Request timed out", X(r, !1));
    this.name = "GatewayTimeoutError";
    this.code = "P5009";
  }
};
u(br, "GatewayTimeoutError");
m();
g();
d();
var Kt = class extends ae {
  constructor(r) {
    super("Requested resource does not exist", X(r, !1));
    this.name = "NotFoundError";
    this.code = "P5003";
  }
};
u(Kt, "NotFoundError");
m();
g();
d();
var wp = "Unknown server error",
  lt = class extends ae {
    constructor(r, n, o) {
      super(n || wp, X(r, !0));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = o;
    }
  };
u(lt, "ServerError");
m();
g();
d();
var wr = class extends ae {
  constructor(r) {
    super("Unauthorized, check your connection string", X(r, !1));
    this.name = "UnauthorizedError";
    this.code = "P5007";
  }
};
u(wr, "UnauthorizedError");
m();
g();
d();
var vr = class extends ae {
  constructor(r) {
    super("Usage exceeded, retry again later", X(r, !0));
    this.name = "UsageExceededError";
    this.code = "P5008";
  }
};
u(vr, "UsageExceededError");
async function No(e, t) {
  var n, o, i, s, a;
  if (e.ok) return;
  let r = { clientVersion: t, response: e };
  if (e.status === 400) {
    let c;
    try {
      let l = await e.json();
      c = (o = (n = l == null ? void 0 : l.EngineNotStarted) == null
          ? void 0
          : n.reason) == null
        ? void 0
        : o.KnownEngineStartupError;
    } catch (l) {}
    if (c) throw new Qt(r, c.msg, c.error_code);
  }
  if (e.status === 401) throw new wr(r);
  if (e.status === 404) {
    try {
      let c = await e.json();
      return ((i = c == null ? void 0 : c.EngineNotStarted) == null
          ? void 0
          : i.reason) === "SchemaMissing"
        ? new Mt(r)
        : new Kt(r);
    } catch (c) {
      return new Kt(r);
    }
  }
  if (e.status === 429) throw new vr(r);
  if (e.status === 504) throw new br(r);
  if (e.status >= 500) {
    let c;
    try {
      c = await e.json();
    } catch (l) {
      throw new lt(r);
    }
    if (
      typeof ((s = c == null ? void 0 : c.EngineNotStarted) == null
        ? void 0
        : s.reason) == "string"
    ) {
      throw new lt(r, c.EngineNotStarted.reason);
    }
    if (
      typeof ((a = c == null ? void 0 : c.EngineNotStarted) == null
        ? void 0
        : a.reason) == "object"
    ) {
      let l = Object.keys(c.EngineNotStarted.reason);
      if (l.length > 0) {
        let p = c.EngineNotStarted.reason[l[0]];
        throw new lt(r, l[0], p.logs);
      }
    }
    throw new lt(r);
  }
  if (e.status >= 400) throw new Qt(r);
}
u(No, "responseToError");
m();
g();
d();
function la(e) {
  let t = Math.pow(2, e) * 50,
    r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
    n = t + r;
  return new Promise((o) => setTimeout(() => o(n), n));
}
u(la, "backOff");
m();
g();
d();
An();
var fa = "3.15.1-1.461d6a05159055555eb7dfb337c9fb271cbd4d7e";
m();
g();
d();
m();
g();
d();
var Er = class extends me {
  constructor(r, n) {
    super(
      `Cannot fetch data from service:
${r}`,
      X(n, !0),
    );
    this.name = "RequestError";
    this.code = "P5010";
  }
};
u(Er, "RequestError");
m();
g();
d();
function pa() {
  return typeof self == "undefined" ? "node" : "browser";
}
u(pa, "getJSRuntimeName");
async function xr(e, t) {
  var o;
  let r = t.clientVersion, n = pa();
  try {
    return n === "browser" ? await fetch(e, t) : await Tp(e, t);
  } catch (i) {
    let s = (o = i.message) != null ? o : "Unknown error";
    throw new Er(s, { clientVersion: r });
  }
}
u(xr, "request");
function Ep(e) {
  return { ...e.headers, "Content-Type": "application/json" };
}
u(Ep, "buildHeaders");
function xp(e) {
  return { method: e.method, headers: Ep(e) };
}
u(xp, "buildOptions");
function Ap(e, t) {
  return {
    json: () => JSON.parse(E.Buffer.concat(e).toString()),
    ok: t.statusCode >= 200 && t.statusCode < 300,
    status: t.statusCode,
    url: t.url,
  };
}
u(Ap, "buildResponse");
async function Tp(e, t = {}) {
  let r = Pp("https"), n = xp(t), o = [];
  return new Promise((i, s) => {
    var c;
    let a = r.request(e, n, (l) => {
      l.on("data", (f) => o.push(f)),
        l.on("end", () => i(Ap(o, l))),
        l.on("error", s);
    });
    a.on("error", s), a.write((c = t.body) != null ? c : ""), a.end();
  });
}
u(Tp, "nodeFetch");
var Pp = typeof require != "undefined" ? require : () => {};
var Sp = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
  _p = "https://registry.npmjs.org/prisma",
  Mp = ut("prisma:client:dataproxyEngine");
async function Op(e) {
  var o, i, s, a;
  let t = (o = e.clientVersion) != null ? o : "unknown";
  if (b.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) {
    return b.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  }
  let [r, n] = (i = t == null ? void 0 : t.split("-")) != null ? i : [];
  if (n === void 0 && Sp.test(r)) return r;
  if (
    n === "integration" || (n == null ? void 0 : n.startsWith("dev")) ||
    t === "0.0.0"
  ) {
    let [c] = (s = fa.split("-")) != null ? s : [], [l, f, p] = c.split(".");
    if (p !== "0") return `${l}.${f}.${p}`;
    let h = `${l}.${parseInt(f) - 1}.x`;
    return (a = (await (await xr(`${_p}/${h}`, { clientVersion: t })).json())
        .version) != null
      ? a
      : "undefined";
  }
  throw new Ke(
    "Only `major.minor.patch` versions are supported by Prisma Data Proxy.",
    { clientVersion: t },
  );
}
u(Op, "_getClientVersion");
async function ga(e) {
  let t = await Op(e);
  return Mp("version", t), t;
}
u(ga, "getClientVersion");
var Ip = 10,
  Cp = Promise.resolve(),
  Yt = class extends ct {
    constructor(r) {
      var i, s, a, c;
      super();
      this.config = r,
        this.env = { ...this.config.env, ...b.env },
        this.inlineSchema = (i = r.inlineSchema) != null ? i : "",
        this.inlineDatasources = (s = r.inlineDatasources) != null ? s : {},
        this.inlineSchemaHash = (a = r.inlineSchemaHash) != null ? a : "",
        this.clientVersion = (c = r.clientVersion) != null ? c : "unknown",
        this.logEmitter = new da.default(),
        this.logEmitter.on("error", () => {});
      let [n, o] = this.extractHostAndApiKey();
      this.remoteClientVersion = Cp.then(() => ga(this.config)),
        this.headers = { Authorization: `Bearer ${o}` },
        this.host = n;
    }
    version() {
      return "unknown";
    }
    async start() {}
    async stop() {}
    on(r, n) {
      if (r === "beforeExit") {
        throw new Ke("beforeExit event is not yet supported", {
          clientVersion: this.clientVersion,
        });
      }
      this.logEmitter.on(r, n);
    }
    async url(r) {
      return `https://${this.host}/${await this
        .remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
    }
    async getConfig() {
      return Promise.resolve({
        datasources: [{ activeProvider: this.config.activeProvider }],
      });
    }
    async uploadSchema() {
      let r = await xr(await this.url("schema"), {
          method: "PUT",
          headers: this.headers,
          body: this.inlineSchema,
          clientVersion: this.clientVersion,
        }),
        n = await No(r, this.clientVersion);
      if (n) {
        throw this.logEmitter.emit("warn", {
          message: `Error while uploading schema: ${n.message}`,
        }),
          n;
      }
      this.logEmitter.emit("info", {
        message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
      });
    }
    request(r, n, o = 0) {
      return this.logEmitter.emit("query", { query: r }),
        this.requestInternal({ query: r, variables: {} }, n, o);
    }
    async requestBatch(r, n, o = !1, i = 0) {
      this.logEmitter.emit("query", {
        query: `Batch${o ? " in transaction" : ""} (${r.length}):
${
          r.join(`
`)
        }`,
      });
      let s = {
          batch: r.map((c) => ({ query: c, variables: {} })),
          transaction: o,
        },
        { batchResult: a } = await this.requestInternal(s, n, i);
      return a;
    }
    async requestInternal(r, n, o) {
      var i;
      try {
        this.logEmitter.emit("info", {
          message: `Calling ${await this.url("graphql")} (n=${o})`,
        });
        let s = await xr(await this.url("graphql"), {
            method: "POST",
            headers: { ...n, ...this.headers },
            body: JSON.stringify(r),
            clientVersion: this.clientVersion,
          }),
          a = await No(s, this.clientVersion);
        if (a instanceof Mt) {
          throw await this.uploadSchema(),
            new Ht({ clientVersion: this.clientVersion, cause: a });
        }
        if (a) throw a;
        let c = await s.json();
        if (c.errors && c.errors.length === 1) {
          throw ca(c.errors[0], this.config.clientVersion);
        }
        return c;
      } catch (s) {
        if (
          this.logEmitter.emit("error", {
            message: `Error while querying: ${
              (i = s.message) != null ? i : "(unknown)"
            }`,
          }), !(s instanceof me) || !s.isRetryable
        ) {
          throw s;
        }
        if (o >= Ip) throw s instanceof Ht ? s.cause : s;
        this.logEmitter.emit("warn", {
          message: "This request can be retried",
        });
        let a = await la(o);
        return this.logEmitter.emit("warn", {
          message: `Retrying after ${a}ms`,
        }),
          this.requestInternal(r, n, o + 1);
      }
    }
    transaction() {
      throw new Ke("Interactive transactions are not yet supported", {
        clientVersion: this.clientVersion,
      });
    }
    extractHostAndApiKey() {
      let r = Object.keys(this.inlineDatasources)[0],
        n = this.inlineDatasources[r],
        o = n == null ? void 0 : n.url.value,
        i = n == null ? void 0 : n.url.fromEnvVar,
        s = this.env[i],
        a = o != null ? o : s,
        c;
      try {
        c = new URL(a != null ? a : "");
      } catch (w) {
        throw new _t("Could not parse URL of the datasource", {
          clientVersion: this.clientVersion,
        });
      }
      let { protocol: l, host: f, searchParams: p } = c;
      if (l !== "prisma:") {
        throw new _t(
          "Datasource URL must use prisma:// protocol when --data-proxy is used",
          { clientVersion: this.clientVersion },
        );
      }
      let h = p.get("api_key");
      if (h === null || h.length < 1) {
        throw new _t("No valid API key found in the datasource URL", {
          clientVersion: this.clientVersion,
        });
      }
      return [f, h];
    }
    metrics(r) {
      throw new Ke("Metric are not yet supported for Data Proxy", {
        clientVersion: this.clientVersion,
      });
    }
  };
u(Yt, "DataProxyEngine");
m();
g();
d();
m();
g();
d();
var ma = "library";
function Do(e) {
  let t = Fp();
  return t ||
    ((e == null ? void 0 : e.config.engineType) === "library"
      ? "library"
      : (e == null ? void 0 : e.config.engineType) === "binary"
      ? "binary"
      : ma);
}
u(Do, "getClientEngineType");
function Fp() {
  let e = b.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
}
u(Fp, "getEngineTypeFromEnvVar");
m();
g();
d();
var kp = Z(ya()), Np = Z($o());
function Tr(e) {
  return e instanceof Error;
}
u(Tr, "isError");
m();
g();
d();
var Dp = { transactionApi: "transaction", aggregateApi: "aggregations" };
function Bo(e) {
  return Array.isArray(e) && e.length > 0
    ? e.map((t) => {
      var r;
      return (r = Dp[t]) != null ? r : t;
    })
    : [];
}
u(Bo, "mapPreviewFeatures");
var Zt = {};
Jn(Zt, {
  error: () => Lp,
  info: () => Bp,
  log: () => jp,
  query: () => qp,
  should: () => Ea,
  tags: () => Sr,
  warn: () => $p,
});
m();
g();
d();
var Pr = Z(Et()),
  Sr = {
    error: Pr.default.red("prisma:error"),
    warn: Pr.default.yellow("prisma:warn"),
    info: Pr.default.cyan("prisma:info"),
    query: Pr.default.blue("prisma:query"),
  },
  Ea = { warn: !b.env.PRISMA_DISABLE_WARNINGS };
function jp(...e) {
  console.log(...e);
}
u(jp, "log");
function $p(e, ...t) {
  Ea.warn && console.warn(`${Sr.warn} ${e}`, ...t);
}
u($p, "warn");
function Bp(e, ...t) {
  console.info(`${Sr.info} ${e}`, ...t);
}
u(Bp, "info");
function Lp(e, ...t) {
  console.error(`${Sr.error} ${e}`, ...t);
}
u(Lp, "error");
function qp(e, ...t) {
  console.log(`${Sr.query} ${e}`, ...t);
}
u(qp, "query");
var xa = Z(ea());
var ww = Z(Aa());
Ro();
var Vr = Z(ko()), nr = Z(Lo());
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
var Sa = typeof globalThis == "object" ? globalThis : global;
m();
g();
d();
var ft = "1.1.0";
m();
g();
d();
var _a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function Jp(e) {
  var t = new Set([e]), r = new Set(), n = e.match(_a);
  if (!n) {
    return function () {
      return !1;
    };
  }
  var o = { major: +n[1], minor: +n[2], patch: +n[3], prerelease: n[4] };
  if (o.prerelease != null) {
    return u(function (c) {
      return c === e;
    }, "isExactmatch");
  }
  function i(a) {
    return r.add(a), !1;
  }
  u(i, "_reject");
  function s(a) {
    return t.add(a), !0;
  }
  return u(s, "_accept"),
    u(function (c) {
      if (t.has(c)) return !0;
      if (r.has(c)) return !1;
      var l = c.match(_a);
      if (!l) return i(c);
      var f = { major: +l[1], minor: +l[2], patch: +l[3], prerelease: l[4] };
      return f.prerelease != null || o.major !== f.major
        ? i(c)
        : o.major === 0
        ? o.minor === f.minor && o.patch <= f.patch ? s(c) : i(c)
        : o.minor <= f.minor
        ? s(c)
        : i(c);
    }, "isCompatible");
}
u(Jp, "_makeCompatibilityCheck");
var Ma = Jp(ft);
var zp = ft.split(".")[0],
  _r = Symbol.for("opentelemetry.js.api." + zp),
  Mr = Sa;
function pt(e, t, r, n) {
  var o;
  n === void 0 && (n = !1);
  var i = Mr[_r] = (o = Mr[_r]) !== null && o !== void 0 ? o : { version: ft };
  if (!n && i[e]) {
    var s = new Error(
      "@opentelemetry/api: Attempted duplicate registration of API: " + e,
    );
    return r.error(s.stack || s.message), !1;
  }
  if (i.version !== ft) {
    var s = new Error(
      "@opentelemetry/api: All API registration versions must match",
    );
    return r.error(s.stack || s.message), !1;
  }
  return i[e] = t,
    r.debug(
      "@opentelemetry/api: Registered a global for " + e + " v" + ft + ".",
    ),
    !0;
}
u(pt, "registerGlobal");
function De(e) {
  var t, r, n = (t = Mr[_r]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !Ma(n))) {
    return (r = Mr[_r]) === null || r === void 0 ? void 0 : r[e];
  }
}
u(De, "getGlobal");
function gt(e, t) {
  t.debug(
    "@opentelemetry/api: Unregistering a global for " + e + " v" + ft + ".",
  );
  var r = Mr[_r];
  r && delete r[e];
}
u(gt, "unregisterGlobal");
var Oa = function () {
  function e(t) {
    this._namespace = t.namespace || "DiagComponentLogger";
  }
  return u(e, "DiagComponentLogger"),
    e.prototype.debug = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Or("debug", this._namespace, t);
    },
    e.prototype.error = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Or("error", this._namespace, t);
    },
    e.prototype.info = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Or("info", this._namespace, t);
    },
    e.prototype.warn = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Or("warn", this._namespace, t);
    },
    e.prototype.verbose = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Or("verbose", this._namespace, t);
    },
    e;
}();
function Or(e, t, r) {
  var n = De("diag");
  if (!!n) return r.unshift(t), n[e].apply(n, r);
}
u(Or, "logProxy");
m();
g();
d();
m();
g();
d();
var Ee;
(function (e) {
  e[e.NONE = 0] = "NONE",
    e[e.ERROR = 30] = "ERROR",
    e[e.WARN = 50] = "WARN",
    e[e.INFO = 60] = "INFO",
    e[e.DEBUG = 70] = "DEBUG",
    e[e.VERBOSE = 80] = "VERBOSE",
    e[e.ALL = 9999] = "ALL";
})(Ee || (Ee = {}));
function Ia(e, t) {
  e < Ee.NONE ? e = Ee.NONE : e > Ee.ALL && (e = Ee.ALL), t = t || {};
  function r(n, o) {
    var i = t[n];
    return typeof i == "function" && e >= o ? i.bind(t) : function () {};
  }
  return u(r, "_filterFunc"), {
    error: r("error", Ee.ERROR),
    warn: r("warn", Ee.WARN),
    info: r("info", Ee.INFO),
    debug: r("debug", Ee.DEBUG),
    verbose: r("verbose", Ee.VERBOSE),
  };
}
u(Ia, "createLogLevelDiagLogger");
var Wp = "diag",
  Te = function () {
    function e() {
      function t(n) {
        return function () {
          for (var o = [], i = 0; i < arguments.length; i++) {
            o[i] = arguments[i];
          }
          var s = De("diag");
          if (!!s) return s[n].apply(s, o);
        };
      }
      u(t, "_logProxy");
      var r = this;
      r.setLogger = function (n, o) {
        var i, s;
        if (o === void 0 && (o = Ee.INFO), n === r) {
          var a = new Error(
            "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation",
          );
          return r.error(
            (i = a.stack) !== null && i !== void 0 ? i : a.message,
          ),
            !1;
        }
        var c = De("diag"), l = Ia(o, n);
        if (c) {
          var f = (s = new Error().stack) !== null && s !== void 0
            ? s
            : "<failed to generate stacktrace>";
          c.warn("Current logger will be overwritten from " + f),
            l.warn(
              "Current logger will overwrite one already registered from " + f,
            );
        }
        return pt("diag", l, r, !0);
      },
        r.disable = function () {
          gt(Wp, r);
        },
        r.createComponentLogger = function (n) {
          return new Oa(n);
        },
        r.verbose = t("verbose"),
        r.debug = t("debug"),
        r.info = t("info"),
        r.warn = t("warn"),
        r.error = t("error");
    }
    return u(e, "DiagAPI"),
      e.instance = function () {
        return this._instance || (this._instance = new e()), this._instance;
      },
      e;
  }();
m();
g();
d();
var Ca = function () {
  function e(t) {
    this._entries = t ? new Map(t) : new Map();
  }
  return u(e, "BaggageImpl"),
    e.prototype.getEntry = function (t) {
      var r = this._entries.get(t);
      if (!!r) return Object.assign({}, r);
    },
    e.prototype.getAllEntries = function () {
      return Array.from(this._entries.entries()).map(function (t) {
        var r = t[0], n = t[1];
        return [r, n];
      });
    },
    e.prototype.setEntry = function (t, r) {
      var n = new e(this._entries);
      return n._entries.set(t, r), n;
    },
    e.prototype.removeEntry = function (t) {
      var r = new e(this._entries);
      return r._entries.delete(t), r;
    },
    e.prototype.removeEntries = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      for (var n = new e(this._entries), o = 0, i = t; o < i.length; o++) {
        var s = i[o];
        n._entries.delete(s);
      }
      return n;
    },
    e.prototype.clear = function () {
      return new e();
    },
    e;
}();
m();
g();
d();
var Hp = Symbol("BaggageEntryMetadata");
var ky = Te.instance();
function Fa(e) {
  return e === void 0 && (e = {}), new Ca(new Map(Object.entries(e)));
}
u(Fa, "createBaggage");
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
var qo = [
    { n: "error", c: "error" },
    { n: "warn", c: "warn" },
    { n: "info", c: "info" },
    { n: "debug", c: "debug" },
    { n: "verbose", c: "trace" },
  ],
  Dy = function () {
    function e() {
      function t(n) {
        return function () {
          for (var o = [], i = 0; i < arguments.length; i++) {
            o[i] = arguments[i];
          }
          if (console) {
            var s = console[n];
            if (
              typeof s != "function" && (s = console.log),
                typeof s == "function"
            ) {
              return s.apply(console, o);
            }
          }
        };
      }
      u(t, "_consoleFunc");
      for (var r = 0; r < qo.length; r++) this[qo[r].n] = t(qo[r].c);
    }
    return u(e, "DiagConsoleLogger"), e;
  }();
m();
g();
d();
var Ra = {
    get: function (e, t) {
      if (e != null) return e[t];
    },
    keys: function (e) {
      return e == null ? [] : Object.keys(e);
    },
  },
  ka = {
    set: function (e, t, r) {
      e != null && (e[t] = r);
    },
  };
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
function Sn(e) {
  return Symbol.for(e);
}
u(Sn, "createContextKey");
var Qp = function () {
    function e(t) {
      var r = this;
      r._currentContext = t ? new Map(t) : new Map(),
        r.getValue = function (n) {
          return r._currentContext.get(n);
        },
        r.setValue = function (n, o) {
          var i = new e(r._currentContext);
          return i._currentContext.set(n, o), i;
        },
        r.deleteValue = function (n) {
          var o = new e(r._currentContext);
          return o._currentContext.delete(n), o;
        };
    }
    return u(e, "BaseContext"), e;
  }(),
  Na = new Qp();
var Kp = function (e, t) {
    for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r];
    return e;
  },
  Da = function () {
    function e() {}
    return u(e, "NoopContextManager"),
      e.prototype.active = function () {
        return Na;
      },
      e.prototype.with = function (t, r, n) {
        for (var o = [], i = 3; i < arguments.length; i++) {o[i - 3] =
            arguments[i];}
        return r.call.apply(r, Kp([n], o));
      },
      e.prototype.bind = function (t, r) {
        return r;
      },
      e.prototype.enable = function () {
        return this;
      },
      e.prototype.disable = function () {
        return this;
      },
      e;
  }();
var Yp = function (e, t) {
    for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r];
    return e;
  },
  Uo = "context",
  Zp = new Da(),
  _n = function () {
    function e() {}
    return u(e, "ContextAPI"),
      e.getInstance = function () {
        return this._instance || (this._instance = new e()), this._instance;
      },
      e.prototype.setGlobalContextManager = function (t) {
        return pt(Uo, t, Te.instance());
      },
      e.prototype.active = function () {
        return this._getContextManager().active();
      },
      e.prototype.with = function (t, r, n) {
        for (var o, i = [], s = 3; s < arguments.length; s++) {i[s - 3] =
            arguments[s];}
        return (o = this._getContextManager()).with.apply(o, Yp([t, r, n], i));
      },
      e.prototype.bind = function (t, r) {
        return this._getContextManager().bind(t, r);
      },
      e.prototype._getContextManager = function () {
        return De(Uo) || Zp;
      },
      e.prototype.disable = function () {
        this._getContextManager().disable(), gt(Uo, Te.instance());
      },
      e;
  }();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
var Mn;
(function (e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(Mn || (Mn = {}));
var On = "0000000000000000",
  In = "00000000000000000000000000000000",
  Vo = { traceId: In, spanId: On, traceFlags: Mn.NONE };
var dt = function () {
  function e(t) {
    t === void 0 && (t = Vo), this._spanContext = t;
  }
  return u(e, "NonRecordingSpan"),
    e.prototype.spanContext = function () {
      return this._spanContext;
    },
    e.prototype.setAttribute = function (t, r) {
      return this;
    },
    e.prototype.setAttributes = function (t) {
      return this;
    },
    e.prototype.addEvent = function (t, r) {
      return this;
    },
    e.prototype.setStatus = function (t) {
      return this;
    },
    e.prototype.updateName = function (t) {
      return this;
    },
    e.prototype.end = function (t) {},
    e.prototype.isRecording = function () {
      return !1;
    },
    e.prototype.recordException = function (t, r) {},
    e;
}();
var Go = Sn("OpenTelemetry Context Key SPAN");
function Jo(e) {
  return e.getValue(Go) || void 0;
}
u(Jo, "getSpan");
function Ir(e, t) {
  return e.setValue(Go, t);
}
u(Ir, "setSpan");
function ja(e) {
  return e.deleteValue(Go);
}
u(ja, "deleteSpan");
function $a(e, t) {
  return Ir(e, new dt(t));
}
u($a, "setSpanContext");
function Cn(e) {
  var t;
  return (t = Jo(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
u(Cn, "getSpanContext");
m();
g();
d();
var Xp = /^([0-9a-f]{32})$/i, eg = /^[0-9a-f]{16}$/i;
function Ba(e) {
  return Xp.test(e) && e !== In;
}
u(Ba, "isValidTraceId");
function La(e) {
  return eg.test(e) && e !== On;
}
u(La, "isValidSpanId");
function Cr(e) {
  return Ba(e.traceId) && La(e.spanId);
}
u(Cr, "isSpanContextValid");
function qa(e) {
  return new dt(e);
}
u(qa, "wrapSpanContext");
var Ua = _n.getInstance(),
  Fn = function () {
    function e() {}
    return u(e, "NoopTracer"),
      e.prototype.startSpan = function (t, r, n) {
        var o = Boolean(r == null ? void 0 : r.root);
        if (o) return new dt();
        var i = n && Cn(n);
        return tg(i) && Cr(i) ? new dt(i) : new dt();
      },
      e.prototype.startActiveSpan = function (t, r, n, o) {
        var i, s, a;
        if (!(arguments.length < 2)) {
          arguments.length === 2
            ? a = r
            : arguments.length === 3
            ? (i = r, a = n)
            : (i = r, s = n, a = o);
          var c = s != null ? s : Ua.active(),
            l = this.startSpan(t, i, c),
            f = Ir(c, l);
          return Ua.with(f, a, void 0, l);
        }
      },
      e;
  }();
function tg(e) {
  return typeof e == "object" && typeof e.spanId == "string" &&
    typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
u(tg, "isSpanContext");
var rg = new Fn(),
  Va = function () {
    function e(t, r, n, o) {
      this._provider = t, this.name = r, this.version = n, this.options = o;
    }
    return u(e, "ProxyTracer"),
      e.prototype.startSpan = function (t, r, n) {
        return this._getTracer().startSpan(t, r, n);
      },
      e.prototype.startActiveSpan = function (t, r, n, o) {
        var i = this._getTracer();
        return Reflect.apply(i.startActiveSpan, i, arguments);
      },
      e.prototype._getTracer = function () {
        if (this._delegate) return this._delegate;
        var t = this._provider.getDelegateTracer(
          this.name,
          this.version,
          this.options,
        );
        return t ? (this._delegate = t, this._delegate) : rg;
      },
      e;
  }();
m();
g();
d();
m();
g();
d();
var Ga = function () {
  function e() {}
  return u(e, "NoopTracerProvider"),
    e.prototype.getTracer = function (t, r, n) {
      return new Fn();
    },
    e;
}();
var ng = new Ga(),
  zo = function () {
    function e() {}
    return u(e, "ProxyTracerProvider"),
      e.prototype.getTracer = function (t, r, n) {
        var o;
        return (o = this.getDelegateTracer(t, r, n)) !== null && o !== void 0
          ? o
          : new Va(this, t, r, n);
      },
      e.prototype.getDelegate = function () {
        var t;
        return (t = this._delegate) !== null && t !== void 0 ? t : ng;
      },
      e.prototype.setDelegate = function (t) {
        this._delegate = t;
      },
      e.prototype.getDelegateTracer = function (t, r, n) {
        var o;
        return (o = this._delegate) === null || o === void 0
          ? void 0
          : o.getTracer(t, r, n);
      },
      e;
  }();
m();
g();
d();
m();
g();
d();
var Ja;
(function (e) {
  e[e.NOT_RECORD = 0] = "NOT_RECORD",
    e[e.RECORD = 1] = "RECORD",
    e[e.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
})(Ja || (Ja = {}));
m();
g();
d();
m();
g();
d();
var za;
(function (e) {
  e[e.INTERNAL = 0] = "INTERNAL",
    e[e.SERVER = 1] = "SERVER",
    e[e.CLIENT = 2] = "CLIENT",
    e[e.PRODUCER = 3] = "PRODUCER",
    e[e.CONSUMER = 4] = "CONSUMER";
})(za || (za = {}));
m();
g();
d();
m();
g();
d();
m();
g();
d();
var Wa;
(function (e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(Wa || (Wa = {}));
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
var Wo = "[_0-9a-z-*/]",
  og = "[a-z]" + Wo + "{0,255}",
  ig = "[a-z0-9]" + Wo + "{0,240}@[a-z]" + Wo + "{0,13}",
  sg = new RegExp("^(?:" + og + "|" + ig + ")$"),
  ag = /^[ -~]{0,255}[!-~]$/,
  ug = /,|=/;
function Ha(e) {
  return sg.test(e);
}
u(Ha, "validateKey");
function Qa(e) {
  return ag.test(e) && !ug.test(e);
}
u(Qa, "validateValue");
var Ka = 32,
  cg = 512,
  Ya = ",",
  Za = "=",
  lg = function () {
    function e(t) {
      this._internalState = new Map(), t && this._parse(t);
    }
    return u(e, "TraceStateImpl"),
      e.prototype.set = function (t, r) {
        var n = this._clone();
        return n._internalState.has(t) && n._internalState.delete(t),
          n._internalState.set(t, r),
          n;
      },
      e.prototype.unset = function (t) {
        var r = this._clone();
        return r._internalState.delete(t), r;
      },
      e.prototype.get = function (t) {
        return this._internalState.get(t);
      },
      e.prototype.serialize = function () {
        var t = this;
        return this._keys().reduce(function (r, n) {
          return r.push(n + Za + t.get(n)), r;
        }, []).join(Ya);
      },
      e.prototype._parse = function (t) {
        t.length > cg ||
          (this._internalState = t.split(Ya).reverse().reduce(function (r, n) {
            var o = n.trim(), i = o.indexOf(Za);
            if (i !== -1) {
              var s = o.slice(0, i), a = o.slice(i + 1, n.length);
              Ha(s) && Qa(a) && r.set(s, a);
            }
            return r;
          }, new Map()),
            this._internalState.size > Ka &&
            (this._internalState = new Map(
              Array.from(this._internalState.entries()).reverse().slice(0, Ka),
            )));
      },
      e.prototype._keys = function () {
        return Array.from(this._internalState.keys()).reverse();
      },
      e.prototype._clone = function () {
        var t = new e();
        return t._internalState = new Map(this._internalState), t;
      },
      e;
  }();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
var Ho = "trace",
  Xa = function () {
    function e() {
      this._proxyTracerProvider = new zo(),
        this.wrapSpanContext = qa,
        this.isSpanContextValid = Cr,
        this.deleteSpan = ja,
        this.getSpan = Jo,
        this.getSpanContext = Cn,
        this.setSpan = Ir,
        this.setSpanContext = $a;
    }
    return u(e, "TraceAPI"),
      e.getInstance = function () {
        return this._instance || (this._instance = new e()), this._instance;
      },
      e.prototype.setGlobalTracerProvider = function (t) {
        var r = pt(Ho, this._proxyTracerProvider, Te.instance());
        return r && this._proxyTracerProvider.setDelegate(t), r;
      },
      e.prototype.getTracerProvider = function () {
        return De(Ho) || this._proxyTracerProvider;
      },
      e.prototype.getTracer = function (t, r) {
        return this.getTracerProvider().getTracer(t, r);
      },
      e.prototype.disable = function () {
        gt(Ho, Te.instance()), this._proxyTracerProvider = new zo();
      },
      e;
  }();
m();
g();
d();
m();
g();
d();
var eu = function () {
  function e() {}
  return u(e, "NoopTextMapPropagator"),
    e.prototype.inject = function (t, r) {},
    e.prototype.extract = function (t, r) {
      return t;
    },
    e.prototype.fields = function () {
      return [];
    },
    e;
}();
m();
g();
d();
var Qo = Sn("OpenTelemetry Baggage Key");
function tu(e) {
  return e.getValue(Qo) || void 0;
}
u(tu, "getBaggage");
function ru(e, t) {
  return e.setValue(Qo, t);
}
u(ru, "setBaggage");
function nu(e) {
  return e.deleteValue(Qo);
}
u(nu, "deleteBaggage");
var Ko = "propagation",
  fg = new eu(),
  ou = function () {
    function e() {
      this.createBaggage = Fa,
        this.getBaggage = tu,
        this.setBaggage = ru,
        this.deleteBaggage = nu;
    }
    return u(e, "PropagationAPI"),
      e.getInstance = function () {
        return this._instance || (this._instance = new e()), this._instance;
      },
      e.prototype.setGlobalPropagator = function (t) {
        return pt(Ko, t, Te.instance());
      },
      e.prototype.inject = function (t, r, n) {
        return n === void 0 && (n = ka),
          this._getGlobalPropagator().inject(t, r, n);
      },
      e.prototype.extract = function (t, r, n) {
        return n === void 0 && (n = Ra),
          this._getGlobalPropagator().extract(t, r, n);
      },
      e.prototype.fields = function () {
        return this._getGlobalPropagator().fields();
      },
      e.prototype.disable = function () {
        gt(Ko, Te.instance());
      },
      e.prototype._getGlobalPropagator = function () {
        return De(Ko) || fg;
      },
      e;
  }();
var Rn = _n.getInstance(),
  Fr = Xa.getInstance(),
  W0 = ou.getInstance(),
  Q0 = Te.instance();
function mt(e) {
  let t = Rn.active(),
    r,
    n = u((o, i) => {
      try {
        return r != null ? r : r = e(o, i, t);
      } catch (s) {
        return Promise.reject(s);
      }
    }, "_callback");
  return {
    then(o, i, s) {
      return n(s).then(o, i, s);
    },
    catch(o, i) {
      return n(i).catch(o, i);
    },
    finally(o, i) {
      return n(i).finally(o, i);
    },
    requestTransaction(o, i) {
      let s = n(o, i);
      return s.requestTransaction ? s.requestTransaction(o, i) : s;
    },
    [Symbol.toStringTag]: "PrismaPromise",
  };
}
u(mt, "createPrismaPromise");
m();
g();
d();
function Ye(e) {
  if (e !== "minimal") return new Error().stack;
}
u(Ye, "getCallSite");
m();
g();
d();
m();
g();
d();
m();
g();
d();
var iu = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function Yo(e) {
  let t = pg(e);
  return Object.entries(t).reduce(
    (
      n,
      [o, i],
    ) => (iu[o] !== void 0 ? n.select[o] = { select: i } : n[o] = i, n),
    { select: {} },
  );
}
u(Yo, "desugarUserArgs");
function pg(e) {
  return typeof e._count == "boolean"
    ? { ...e, _count: { _all: e._count } }
    : e;
}
u(pg, "desugarCountInUserArgs");
function gg(e) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
u(gg, "createUnpacker");
function Rr(e, t, r) {
  let n = Yo(t != null ? t : {}), o = gg(t != null ? t : {});
  return r({ action: "aggregate", unpacker: o })(n);
}
u(Rr, "aggregate");
m();
g();
d();
function su(e, t, r) {
  let { select: n, ...o } = t != null ? t : {};
  return typeof n == "object"
    ? Rr(
      e,
      { ...o, _count: n },
      (i) =>
        r({
          ...i,
          action: "count",
          unpacker: (s) => {
            var a;
            return (a = i.unpacker) == null ? void 0 : a.call(i, s)._count;
          },
        }),
    )
    : Rr(
      e,
      { ...o, _count: { _all: !0 } },
      (i) =>
        r({
          ...i,
          action: "count",
          unpacker: (s) => {
            var a;
            return (a = i.unpacker) == null ? void 0 : a.call(i, s)._count._all;
          },
        }),
    );
}
u(su, "count");
m();
g();
d();
function dg(e) {
  let t = Yo(e);
  if (Array.isArray(e.by)) {
    for (let r of e.by) typeof r == "string" && (t.select[r] = !0);
  }
  return t;
}
u(dg, "desugarUserArgs");
function mg(e) {
  return (t) => (typeof e._count == "boolean" && t.forEach((r) => {
    r._count = r._count._all;
  }),
    t);
}
u(mg, "createUnpacker");
function au(e, t, r) {
  let n = dg(t != null ? t : {}), o = mg(t != null ? t : {});
  return r({ action: "groupBy", unpacker: o })(n);
}
u(au, "groupBy");
function uu(e, t, r) {
  if (t === "aggregate") return (n) => Rr(e, n, r);
  if (t === "count") return (n) => su(e, n, r);
  if (t === "groupBy") return (n) => au(e, n, r);
}
u(uu, "applyAggregates");
m();
g();
d();
m();
g();
d();
var cu = u((e) => Array.isArray(e) ? e : e.split("."), "keys"),
  Zo = u((e, t) => cu(t).reduce((r, n) => r && r[n], e), "deepGet"),
  kn = u(
    (e, t, r) =>
      cu(t).reduceRight(
        (n, o, i, s) => Object.assign({}, Zo(e, s.slice(0, i)), { [o]: n }),
        r,
      ),
    "deepSet",
  );
m();
g();
d();
var hg = { enumerable: !0, configurable: !0, writable: !0 };
function Xt(e) {
  let t = new Set(e);
  return {
    getOwnPropertyDescriptor: () => hg,
    has: (r, n) => t.has(n),
    set: (r, n, o) => t.add(n) && Reflect.set(r, n, o),
    ownKeys: () => [...t],
  };
}
u(Xt, "defaultProxyHandlers");
function yg(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
u(yg, "getNextDataPath");
function bg(e, t, r) {
  return t === void 0 ? e != null ? e : {} : kn(t, r, e || !0);
}
u(bg, "getNextUserArgs");
function Xo(e, t, r, n, o, i) {
  let a = e._dmmf.modelMap[t].fields.reduce(
    (c, l) => ({ ...c, [l.name]: l }),
    {},
  );
  return (c) => {
    let l = Ye(e._errorFormat),
      f = yg(n, o),
      p = bg(c, i, f),
      h = r({ dataPath: f, callsite: l })(p),
      w = wg(e, t);
    return new Proxy(h, {
      get(v, y) {
        if (!w.includes(y)) return v[y];
        let S = [a[y].type, r, y], T = [f, p];
        return Xo(e, ...S, ...T);
      },
      ...Xt([...w, ...Object.getOwnPropertyNames(h)]),
    });
  };
}
u(Xo, "applyFluent");
function wg(e, t) {
  return e._dmmf.modelMap[t].fields.filter((r) => r.kind === "object").map(
    (r) => r.name,
  );
}
u(wg, "getOwnKeys");
m();
g();
d();
function Nn(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
u(Nn, "dmmfToJSModelName");
var vg = ["findUnique", "findFirst", "create", "update", "upsert", "delete"],
  Eg = ["aggregate", "count", "groupBy"];
function ei(e, t) {
  let r = Nn(t), n = lu(e, t), o = {};
  return new Proxy(o, {
    get(i, s) {
      if (s in i || typeof s == "symbol") return i[s];
      if (!xg(e, t, s)) return;
      let a = u((c) =>
        (l) => {
          let f = Ye(e._errorFormat);
          return mt((p, h, w) => {
            let v = { args: l, dataPath: [] },
              y = { action: s, model: t },
              A = { clientMethod: `${r}.${s}` },
              _ = {
                ...v,
                ...y,
                ...A,
                ...{ runInTransaction: !!p, transactionId: p, lock: h },
                ...{ callsite: f, otelCtx: w },
              };
            return e._request({ ..._, ...c });
          });
        }, "action");
      return vg.includes(s)
        ? Xo(e, t, a)
        : Eg.includes(s)
        ? uu(e, s, a)
        : a({});
    },
    ...Xt(n),
  });
}
u(ei, "applyModel");
function lu(e, t) {
  return [...Object.keys(e._dmmf.mappingsMap[t]), "count"].filter((r) =>
    !["model", "plural"].includes(r)
  );
}
u(lu, "getOwnKeys");
function xg(e, t, r) {
  return lu(e, t).includes(r);
}
u(xg, "isValidActionName");
m();
g();
d();
function fu(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
u(fu, "jsToDMMFModelName");
function pu(e) {
  let t = {}, r = Ag(e);
  return new Proxy(e, {
    get(n, o) {
      if (o in n || typeof o == "symbol") return n[o];
      let i = fu(o);
      if (t[i] !== void 0) return t[i];
      if (e._dmmf.modelMap[i] !== void 0) return t[i] = ei(e, i);
      if (e._dmmf.modelMap[o] !== void 0) return t[i] = ei(e, o);
    },
    ...Xt(r),
  });
}
u(pu, "applyModels");
function Ag(e) {
  return [...Object.keys(e._dmmf.modelMap).map(Nn), ...Object.keys(e)];
}
u(Ag, "getOwnKeys");
m();
g();
d();
function gu(e, t = () => {}) {
  let r, n = new Promise((o) => r = o);
  return {
    then(o) {
      return --e === 0 && r(t()), o == null ? void 0 : o(n);
    },
  };
}
u(gu, "getLockCountPromise");
m();
g();
d();
function du(e) {
  return typeof e == "string" ? e : e.reduce((t, r) => {
    let n = typeof r == "string" ? r : r.level;
    return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
  }, void 0);
}
u(du, "getLogLevel");
m();
g();
d();
function hu(e, t, r) {
  let n = mu(e, r),
    o = mu(t, r),
    i = Object.values(o).map((a) => a[a.length - 1]),
    s = Object.keys(o);
  return Object.entries(n).forEach(([a, c]) => {
    s.includes(a) || i.push(c[c.length - 1]);
  }),
    i;
}
u(hu, "mergeBy");
var mu = u((e, t) =>
  e.reduce((r, n) => {
    let o = t(n);
    return r[o] || (r[o] = []), r[o].push(n), r;
  }, {}), "groupBy");
m();
g();
d();
var kr = class {
  constructor() {
    this._middlewares = [];
  }
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
u(kr, "MiddlewareHandler");
var Nr = class {
  constructor() {
    this.query = new kr();
    this.engine = new kr();
  }
};
u(Nr, "Middlewares");
m();
g();
d();
var k = Z(Et());
var yt = Z(go()), ai = Z(Pn());
m();
g();
d();
function bu(e) {
  return e instanceof E.Buffer || e instanceof Date || e instanceof RegExp;
}
u(bu, "isSpecificValue");
function wu(e) {
  if (e instanceof E.Buffer) {
    let t = E.Buffer.alloc ? E.Buffer.alloc(e.length) : new E.Buffer(e.length);
    return e.copy(t), t;
  } else {
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof RegExp) return new RegExp(e);
    throw new Error("Unexpected situation");
  }
}
u(wu, "cloneSpecificValue");
function vu(e) {
  let t = [];
  return e.forEach(function (r, n) {
    typeof r == "object" && r !== null
      ? Array.isArray(r)
        ? t[n] = vu(r)
        : bu(r)
        ? t[n] = wu(r)
        : t[n] = Dr({}, r)
      : t[n] = r;
  }),
    t;
}
u(vu, "deepCloneArray");
function yu(e, t) {
  return t === "__proto__" ? void 0 : e[t];
}
u(yu, "safeGetProperty");
var Dr = u(function (e, ...t) {
  if (!e || typeof e != "object") return !1;
  if (t.length === 0) return e;
  let r, n;
  for (let o of t) {
    if (!(typeof o != "object" || o === null || Array.isArray(o))) {
      for (let i of Object.keys(o)) {
        if (n = yu(e, i), r = yu(o, i), r !== e) {
          if (typeof r != "object" || r === null) {
            e[i] = r;
            continue;
          } else if (Array.isArray(r)) {
            e[i] = vu(r);
            continue;
          } else if (bu(r)) {
            e[i] = wu(r);
            continue;
          } else if (typeof n != "object" || n === null || Array.isArray(n)) {
            e[i] = Dr({}, r);
            continue;
          } else {
            e[i] = Dr(n, r);
            continue;
          }
        }
      }
    }
  }
  return e;
}, "deepExtend");
m();
g();
d();
function Eu(e, t) {
  if (!e || typeof e != "object" || typeof e.hasOwnProperty != "function") {
    return e;
  }
  let r = {};
  for (let n in e) {
    let o = e[n];
    Object.hasOwnProperty.call(e, n) && t(n, o) && (r[n] = o);
  }
  return r;
}
u(Eu, "filterObject");
m();
g();
d();
function Tg(e) {
  return Array.prototype.concat.apply([], e);
}
u(Tg, "flatten");
function ti(e, t, r) {
  return Tg(e.map(t, r));
}
u(ti, "flatMap");
m();
g();
d();
var Pg = {
  "[object Date]": !0,
  "[object Uint8Array]": !0,
  "[object Decimal]": !0,
};
function xu(e) {
  return e
    ? typeof e == "object" && !Pg[Object.prototype.toString.call(e)]
    : !1;
}
u(xu, "isObject");
m();
g();
d();
function Au(e, t) {
  let r = {}, n = Array.isArray(t) ? t : [t];
  for (let o in e) {
    Object.hasOwnProperty.call(e, o) && !n.includes(o) && (r[o] = e[o]);
  }
  return r;
}
u(Au, "omit");
m();
g();
d();
var Pe = Z(Et()), oi = Z(Pn());
m();
g();
d();
var Sg = Pu(),
  _g = _u(),
  Mg = Mu().default,
  Og = u((e, t, r) => {
    let n = [];
    return u(function o(i, s = {}, a = "", c = []) {
      s.indent = s.indent || "	";
      let l;
      s.inlineCharacterLimit === void 0
        ? l = {
          newLine: `
`,
          newLineOrSpace: `
`,
          pad: a,
          indent: a + s.indent,
        }
        : l = {
          newLine: "@@__STRINGIFY_OBJECT_NEW_LINE__@@",
          newLineOrSpace: "@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",
          pad: "@@__STRINGIFY_OBJECT_PAD__@@",
          indent: "@@__STRINGIFY_OBJECT_INDENT__@@",
        };
      let f = u((p) => {
        if (s.inlineCharacterLimit === void 0) return p;
        let h = p.replace(new RegExp(l.newLine, "g"), "").replace(
          new RegExp(l.newLineOrSpace, "g"),
          " ",
        ).replace(new RegExp(l.pad + "|" + l.indent, "g"), "");
        return h.length <= s.inlineCharacterLimit ? h : p.replace(
          new RegExp(l.newLine + "|" + l.newLineOrSpace, "g"),
          `
`,
        ).replace(new RegExp(l.pad, "g"), a).replace(
          new RegExp(l.indent, "g"),
          a + s.indent,
        );
      }, "expandWhiteSpace");
      if (n.indexOf(i) !== -1) return '"[Circular]"';
      if (E.Buffer.isBuffer(i)) return `Buffer(${E.Buffer.length})`;
      if (
        i == null || typeof i == "number" || typeof i == "boolean" ||
        typeof i == "function" || typeof i == "symbol" || Sg(i)
      ) {
        return String(i);
      }
      if (i instanceof Date) return `new Date('${i.toISOString()}')`;
      if (Array.isArray(i)) {
        if (i.length === 0) return "[]";
        n.push(i);
        let p = "[" + l.newLine + i.map((h, w) => {
          let v = i.length - 1 === w ? l.newLine : "," + l.newLineOrSpace,
            y = o(h, s, a + s.indent, [...c, w]);
          return s.transformValue && (y = s.transformValue(i, w, y)),
            l.indent + y + v;
        }).join("") + l.pad + "]";
        return n.pop(), f(p);
      }
      if (_g(i)) {
        let p = Object.keys(i).concat(Mg(i));
        if (
          s.filter && (p = p.filter((w) => s.filter(i, w))), p.length === 0
        ) {
          return "{}";
        }
        n.push(i);
        let h = "{" + l.newLine + p.map((w, v) => {
          let y = p.length - 1 === v ? l.newLine : "," + l.newLineOrSpace,
            A = typeof w == "symbol",
            S = !A && /^[a-z$_][a-z$_0-9]*$/i.test(w),
            T = A || S ? w : o(w, s, void 0, [...c, w]),
            _ = o(i[w], s, a + s.indent, [...c, w]);
          s.transformValue && (_ = s.transformValue(i, w, _));
          let P = l.indent + String(T) + ": " + _ + y;
          return s.transformLine &&
            (P = s.transformLine({
              obj: i,
              indent: l.indent,
              key: T,
              stringifiedValue: _,
              value: i[w],
              eol: y,
              originalLine: P,
              path: c.concat(T),
            })),
            P;
        }).join("") + l.pad + "}";
        return n.pop(), f(h);
      }
      return i = String(i).replace(/[\r\n]/g, (p) =>
        p === `
`
          ? "\\n"
          : "\\r"),
        s.singleQuotes === !1
          ? (i = i.replace(/"/g, '\\"'), `"${i}"`)
          : (i = i.replace(/\\?'/g, "\\'"), `'${i}'`);
    }, "stringifyObject")(e, t, r);
  }, "stringifyObject"),
  jr = Og;
var ni = "@@__DIM_POINTER__@@";
function Dn({ ast: e, keyPaths: t, valuePaths: r, missingItems: n }) {
  let o = e;
  for (let { path: i, type: s } of n) o = kn(o, i, s);
  return jr(o, {
    indent: "  ",
    transformLine: (
      { indent: i, key: s, value: a, stringifiedValue: c, eol: l, path: f },
    ) => {
      let p = f.join("."),
        h = t.includes(p),
        w = r.includes(p),
        v = n.find((A) => A.path === p),
        y = c;
      if (v) {
        typeof a == "string" && (y = y.slice(1, y.length - 1));
        let A = v.isRequired ? "" : "?",
          S = v.isRequired ? "+" : "?",
          _ = (v.isRequired ? Pe.default.greenBright : Pe.default.green)(
            Fg(s + A + ": " + y + l, i, S),
          );
        return v.isRequired || (_ = Pe.default.dim(_)), _;
      } else {
        let A = n.some((P) => p.startsWith(P.path)),
          S = s[s.length - 2] === "?";
        S && (s = s.slice(1, s.length - 1)),
          S && typeof a == "object" && a !== null && (y = y.split(`
`).map((P, O, F) => O === F.length - 1 ? P + ni : P).join(`
`)),
          A && typeof a == "string" &&
          (y = y.slice(1, y.length - 1), S || (y = Pe.default.bold(y))),
          (typeof a != "object" || a === null) && !w && !A &&
          (y = Pe.default.dim(y));
        let T = h ? Pe.default.redBright(s) : s;
        y = w ? Pe.default.redBright(y) : y;
        let _ = i + T + ": " + y + (A ? l : Pe.default.dim(l));
        if (h || w) {
          let P = _.split(`
`),
            O = String(s).length,
            F = h ? Pe.default.redBright("~".repeat(O)) : " ".repeat(O),
            R = w ? Ig(i, s, a, c) : 0,
            $ = Boolean(w && typeof a == "object" && a !== null),
            Q = w ? "  " + Pe.default.redBright("~".repeat(R)) : "";
          F && F.length > 0 && !$ && P.splice(1, 0, i + F + Q),
            F && F.length > 0 && $ &&
            P.splice(P.length - 1, 0, i.slice(0, i.length - 2) + Q),
            _ = P.join(`
`);
        }
        return _;
      }
    },
  });
}
u(Dn, "printJsonWithErrors");
function Ig(e, t, r, n) {
  return r === null
    ? 4
    : typeof r == "string"
    ? r.length + 2
    : typeof r == "object"
    ? Math.abs(Cg(`${t}: ${(0, oi.default)(n)}`) - e.length)
    : String(r).length;
}
u(Ig, "getValueLength");
function Cg(e) {
  return e.split(`
`).reduce((t, r) => r.length > t ? r.length : t, 0);
}
u(Cg, "getLongestLine");
function Fg(e, t, r) {
  return e.split(`
`).map((n, o, i) =>
      o === 0 ? r + t.slice(1) + n : o < i.length - 1 ? r + n.slice(1) : n
    ).map((n) =>
      (0, oi.default)(n).includes(ni)
        ? Pe.default.dim(n.replace(ni, ""))
        : n.includes("?")
        ? Pe.default.dim(n)
        : n
    ).join(`
`);
}
u(Fg, "prefixLines");
m();
g();
d();
var Se = Z(Et());
m();
g();
d();
var $r = "<unknown>";
function Ou(e) {
  var t = e.split(`
`);
  return t.reduce(function (r, n) {
    var o = Ng(n) || jg(n) || Lg(n) || Gg(n) || Ug(n);
    return o && r.push(o), r;
  }, []);
}
u(Ou, "parse");
var Rg =
    /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  kg = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function Ng(e) {
  var t = Rg.exec(e);
  if (!t) return null;
  var r = t[2] && t[2].indexOf("native") === 0,
    n = t[2] && t[2].indexOf("eval") === 0,
    o = kg.exec(t[2]);
  return n && o != null && (t[2] = o[1], t[3] = o[2], t[4] = o[3]), {
    file: r ? null : t[2],
    methodName: t[1] || $r,
    arguments: r ? [t[2]] : [],
    lineNumber: t[3] ? +t[3] : null,
    column: t[4] ? +t[4] : null,
  };
}
u(Ng, "parseChrome");
var Dg =
  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function jg(e) {
  var t = Dg.exec(e);
  return t
    ? {
      file: t[2],
      methodName: t[1] || $r,
      arguments: [],
      lineNumber: +t[3],
      column: t[4] ? +t[4] : null,
    }
    : null;
}
u(jg, "parseWinjs");
var $g =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
  Bg = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function Lg(e) {
  var t = $g.exec(e);
  if (!t) return null;
  var r = t[3] && t[3].indexOf(" > eval") > -1, n = Bg.exec(t[3]);
  return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), {
    file: t[3],
    methodName: t[1] || $r,
    arguments: t[2] ? t[2].split(",") : [],
    lineNumber: t[4] ? +t[4] : null,
    column: t[5] ? +t[5] : null,
  };
}
u(Lg, "parseGecko");
var qg = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function Ug(e) {
  var t = qg.exec(e);
  return t
    ? {
      file: t[3],
      methodName: t[1] || $r,
      arguments: [],
      lineNumber: +t[4],
      column: t[5] ? +t[5] : null,
    }
    : null;
}
u(Ug, "parseJSC");
var Vg =
  /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Gg(e) {
  var t = Vg.exec(e);
  return t
    ? {
      file: t[2],
      methodName: t[1] || $r,
      arguments: [],
      lineNumber: +t[3],
      column: t[4] ? +t[4] : null,
    }
    : null;
}
u(Gg, "parseNode");
m();
g();
d();
m();
g();
d();
m();
g();
d();
var ht = Z(Et()),
  zg = ht.default.rgb(246, 145, 95),
  Wg = ht.default.rgb(107, 139, 140),
  jn = ht.default.cyan,
  Iu = ht.default.rgb(127, 155, 155),
  Cu = u((e) => e, "identity"),
  Fu = {
    keyword: jn,
    entity: jn,
    value: Iu,
    punctuation: Wg,
    directive: jn,
    function: jn,
    variable: Iu,
    string: ht.default.greenBright,
    boolean: zg,
    number: ht.default.cyan,
    comment: ht.default.grey,
  };
var $n = {},
  Hg = 0,
  q = {
    manual: $n.Prism && $n.Prism.manual,
    disableWorkerMessageHandler: $n.Prism &&
      $n.Prism.disableWorkerMessageHandler,
    util: {
      encode: function (e) {
        if (e instanceof je) {
          let t = e;
          return new je(t.type, q.util.encode(t.content), t.alias);
        } else {
          return Array.isArray(e)
            ? e.map(q.util.encode)
            : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(
              /\u00a0/g,
              " ",
            );
        }
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        return e.__id || Object.defineProperty(e, "__id", { value: ++Hg }),
          e.__id;
      },
      clone: u(function e(t, r) {
        let n, o, i = q.util.type(t);
        switch (r = r || {}, i) {
          case "Object":
            if (o = q.util.objId(t), r[o]) return r[o];
            n = {}, r[o] = n;
            for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
            return n;
          case "Array":
            return o = q.util.objId(t),
              r[o] ? r[o] : (n = [],
                r[o] = n,
                t.forEach(function (s, a) {
                  n[a] = e(s, r);
                }),
                n);
          default:
            return t;
        }
      }, "deepClone"),
    },
    languages: {
      extend: function (e, t) {
        let r = q.util.clone(q.languages[e]);
        for (let n in t) r[n] = t[n];
        return r;
      },
      insertBefore: function (e, t, r, n) {
        n = n || q.languages;
        let o = n[e], i = {};
        for (let a in o) {
          if (o.hasOwnProperty(a)) {
            if (a == t) for (let c in r) r.hasOwnProperty(c) && (i[c] = r[c]);
            r.hasOwnProperty(a) || (i[a] = o[a]);
          }
        }
        let s = n[e];
        return n[e] = i,
          q.languages.DFS(q.languages, function (a, c) {
            c === s && a != e && (this[a] = i);
          }),
          i;
      },
      DFS: u(function e(t, r, n, o) {
        o = o || {};
        let i = q.util.objId;
        for (let s in t) {
          if (t.hasOwnProperty(s)) {
            r.call(t, s, t[s], n || s);
            let a = t[s], c = q.util.type(a);
            c === "Object" && !o[i(a)]
              ? (o[i(a)] = !0, e(a, r, null, o))
              : c === "Array" && !o[i(a)] && (o[i(a)] = !0, e(a, r, s, o));
          }
        }
      }, "DFS"),
    },
    plugins: {},
    highlight: function (e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return q.hooks.run("before-tokenize", n),
        n.tokens = q.tokenize(n.code, n.grammar),
        q.hooks.run("after-tokenize", n),
        je.stringify(q.util.encode(n.tokens), n.language);
    },
    matchGrammar: function (e, t, r, n, o, i, s) {
      for (let y in r) {
        if (!r.hasOwnProperty(y) || !r[y]) continue;
        if (y == s) return;
        let A = r[y];
        A = q.util.type(A) === "Array" ? A : [A];
        for (let S = 0; S < A.length; ++S) {
          let T = A[S],
            _ = T.inside,
            P = !!T.lookbehind,
            O = !!T.greedy,
            F = 0,
            R = T.alias;
          if (O && !T.pattern.global) {
            let $ = T.pattern.toString().match(/[imuy]*$/)[0];
            T.pattern = RegExp(T.pattern.source, $ + "g");
          }
          T = T.pattern || T;
          for (let $ = n, Q = o; $ < t.length; Q += t[$].length, ++$) {
            let te = t[$];
            if (t.length > e.length) return;
            if (te instanceof je) continue;
            if (O && $ != t.length - 1) {
              T.lastIndex = Q;
              var p = T.exec(e);
              if (!p) break;
              var f = p.index + (P ? p[1].length : 0),
                h = p.index + p[0].length,
                a = $,
                c = Q;
              for (
                let V = t.length;
                a < V && (c < h || !t[a].type && !t[a - 1].greedy);
                ++a
              ) {
                c += t[a].length, f >= c && (++$, Q = c);
              }
              if (t[$] instanceof je) continue;
              l = a - $, te = e.slice(Q, c), p.index -= Q;
            } else {
              T.lastIndex = 0;
              var p = T.exec(te), l = 1;
            }
            if (!p) {
              if (i) break;
              continue;
            }
            P && (F = p[1] ? p[1].length : 0);
            var f = p.index + F,
              p = p[0].slice(F),
              h = f + p.length,
              w = te.slice(0, f),
              v = te.slice(h);
            let U = [$, l];
            w && (++$, Q += w.length, U.push(w));
            let H = new je(y, _ ? q.tokenize(p, _) : p, R, p, O);
            if (
              U.push(H),
                v && U.push(v),
                Array.prototype.splice.apply(t, U),
                l != 1 && q.matchGrammar(e, t, r, $, Q, !0, y),
                i
            ) {
              break;
            }
          }
        }
      }
    },
    tokenize: function (e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let o in n) t[o] = n[o];
        delete t.rest;
      }
      return q.matchGrammar(e, r, t, 0, 0, !1), r;
    },
    hooks: {
      all: {},
      add: function (e, t) {
        let r = q.hooks.all;
        r[e] = r[e] || [], r[e].push(t);
      },
      run: function (e, t) {
        let r = q.hooks.all[e];
        if (!(!r || !r.length)) for (var n = 0, o; o = r[n++];) o(t);
      },
    },
    Token: je,
  };
q.languages.clike = {
  comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0,
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
};
q.languages.javascript = q.languages.extend("clike", {
  "class-name": [q.languages.clike["class-name"], {
    pattern:
      /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: !0,
  }],
  keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, {
    pattern:
      /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0,
  }],
  number:
    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function:
    /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator:
    /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});
q.languages.javascript["class-name"][0].pattern =
  /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
q.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern:
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0,
  },
  "function-variable": {
    pattern:
      /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function",
  },
  parameter: [{
    pattern:
      /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: !0,
    inside: q.languages.javascript,
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: q.languages.javascript,
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: q.languages.javascript,
  }, {
    pattern:
      /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: q.languages.javascript,
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
q.languages.markup && q.languages.markup.tag.addInlined("script", "javascript");
q.languages.js = q.languages.javascript;
q.languages.typescript = q.languages.extend("javascript", {
  keyword:
    /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  builtin:
    /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
q.languages.ts = q.languages.typescript;
function je(e, t, r, n, o) {
  this.type = e,
    this.content = t,
    this.alias = r,
    this.length = (n || "").length | 0,
    this.greedy = !!o;
}
u(je, "Token");
je.stringify = function (e, t) {
  return typeof e == "string" ? e : Array.isArray(e)
    ? e.map(function (r) {
      return je.stringify(r, t);
    }).join("")
    : Qg(e.type)(e.content);
};
function Qg(e) {
  return Fu[e] || Cu;
}
u(Qg, "getColorForSyntaxKind");
function Ru(e) {
  return Kg(e, q.languages.javascript);
}
u(Ru, "highlightTS");
function Kg(e, t) {
  return q.tokenize(e, t).map((n) => je.stringify(n)).join("");
}
u(Kg, "highlight");
m();
g();
d();
var ku = Z($o());
function Nu(e) {
  return (0, ku.default)(e);
}
u(Nu, "dedent");
function Yg(e, t) {
  let r = String(t).length, n = String(e).length;
  return n >= r ? String(e) : " ".repeat(r - n) + e;
}
u(Yg, "renderN");
function Zg(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== " ") return t;
    t++;
  }
  return t;
}
u(Zg, "getIndent");
function Xg(
  {
    callsite: e,
    renderPathRelative: t,
    originalMethod: r,
    onUs: n,
    showColors: o,
    isValidationError: i,
  },
) {
  let s = {
    callsiteStr: ":",
    prevLines: `
`,
    functionName: `prisma.${r}()`,
    afterLines: "",
    indentValue: 0,
    lastErrorHeight: 20,
  };
  if (!e || typeof window != "undefined") return s;
  let c = Ou(e).find((l) =>
    l.file && l.file !== "<anonymous>" && !l.file.includes("@prisma") &&
    !l.file.includes("getPrismaClient") && !l.file.startsWith("internal/") &&
    !l.methodName.includes("new ") && !l.methodName.includes("getCallSite") &&
    !l.methodName.includes("Proxy.") && l.methodName.split(".").length < 4
  );
  if (
    b.env.NODE_ENV !== "production" && c && c.file && c.lineNumber && c.column
  ) {
    let l = c.lineNumber,
      f = t ? ko().relative(b.cwd(), c.file) : c.file,
      p = Math.max(0, l - 4),
      h = (Ro(), xi(na));
    if (h.existsSync(c.file)) {
      let y = h.readFileSync(c.file, "utf-8").split(`
`).slice(p, l).map((T) => T.endsWith("\r") ? T.slice(0, -1) : T).join(`
`),
        A = Nu(y).split(`
`),
        S = A[A.length - 1];
      if (!S || S.trim() === "") s.callsiteStr = ":";
      else {
        let _ =
          /(\S+(create|createMany|updateMany|deleteMany|update|delete|findMany|findUnique)\()/
            .exec(S);
        if (!_) return s;
        s.functionName = `${_[1]})`,
          s.callsiteStr = ` in
${Se.default.underline(`${f}:${c.lineNumber}:${c.column}`)}`;
        let P = S.indexOf("{"),
          O = A.map((R, $, Q) =>
            !n && $ === Q.length - 1 ? R.slice(0, P > -1 ? P : R.length - 1) : R
          ).join(`
`),
          F = o
            ? Ru(O).split(`
`)
            : O.split(`
`);
        s.prevLines = `
` + F.map((R, $) =>
          Se.default.grey(Yg($ + p + 1, l + p + 1) + " ") + Se.default.reset() +
          R
        ).map((R, $, Q) =>
          $ === Q.length - 1
            ? `${Se.default.red.bold("\u2192")} ${Se.default.dim(R)}`
            : Se.default.dim("  " + R)
        ).join(`
`),
          !_ && !i && (s.prevLines += `

`),
          s.afterLines = ")",
          s.indentValue = String(l + p + 1).length + Zg(S) + 1 + (_ ? 2 : 0);
      }
    }
  }
  return s;
}
u(Xg, "parseStack");
var Bn = u((e) => {
  let {
      callsiteStr: t,
      prevLines: r,
      functionName: n,
      afterLines: o,
      indentValue: i,
      lastErrorHeight: s,
    } = Xg(e),
    c = `
${
      e.onUs
        ? Se.default.red(
          `Oops, an unknown error occured! This is ${
            Se.default.bold("on us")
          }, you did nothing wrong.
It occured in the ${Se.default.bold(`\`${n}\``)} invocation${t}`,
        )
        : Se.default.red(
          `Invalid ${Se.default.bold(`\`${n}\``)} invocation${t}`,
        )
    }
${r}${Se.default.reset()}`;
  return { indent: i, stack: c, afterLines: o, lastErrorHeight: s };
}, "printStack");
var Br = 2,
  Ln = class {
    constructor(t, r) {
      this.type = t;
      this.children = r;
      this.printFieldError = u(({ error: t }, r, n) => {
        if (t.type === "emptySelect") {
          let o = n
            ? ""
            : ` Available options are listed in ${
              k.default.greenBright.dim("green")
            }.`;
          return `The ${k.default.redBright("`select`")} statement for type ${
            k.default.bold(xt(t.field.outputType.type))
          } must not be empty.${o}`;
        }
        if (t.type === "emptyInclude") {
          if (r.length === 0) {
            return `${
              k.default.bold(xt(t.field.outputType.type))
            } does not have any relation and therefore can't have an ${
              k.default.redBright("`include`")
            } statement.`;
          }
          let o = n
            ? ""
            : ` Available options are listed in ${
              k.default.greenBright.dim("green")
            }.`;
          return `The ${k.default.redBright("`include`")} statement for type ${
            k.default.bold(xt(t.field.outputType.type))
          } must not be empty.${o}`;
        }
        if (t.type === "noTrueSelect") {
          return `The ${k.default.redBright("`select`")} statement for type ${
            k.default.bold(xt(t.field.outputType.type))
          } needs ${k.default.bold("at least one truthy value")}.`;
        }
        if (t.type === "includeAndSelect") {
          return `Please ${k.default.bold("either")} use ${
            k.default.greenBright("`include`")
          } or ${k.default.greenBright("`select`")}, but ${
            k.default.redBright("not both")
          } at the same time.`;
        }
        if (t.type === "invalidFieldName") {
          let o = t.isInclude ? "include" : "select",
            i = t.isIncludeScalar ? "Invalid scalar" : "Unknown",
            s = n ? "" : t.isInclude && r.length === 0
              ? `
This model has no relations, so you can't use ${
                k.default.redBright("include")
              } with it.`
              : ` Available options are listed in ${
                k.default.greenBright.dim("green")
              }.`,
            a = `${i} field ${
              k.default.redBright(`\`${t.providedName}\``)
            } for ${k.default.bold(o)} statement on model ${
              k.default.bold.white(t.modelName)
            }.${s}`;
          return t.didYouMean &&
            (a += ` Did you mean ${
              k.default.greenBright(`\`${t.didYouMean}\``)
            }?`),
            t.isIncludeScalar && (a += `
Note, that ${
              k.default.bold("include")
            } statements only accept relation fields.`),
            a;
        }
        if (t.type === "invalidFieldType") {
          return `Invalid value ${
            k.default.redBright(`${jr(t.providedValue)}`)
          } of type ${
            k.default.redBright(qt(t.providedValue, void 0))
          } for field ${k.default.bold(`${t.fieldName}`)} on model ${
            k.default.bold.white(t.modelName)
          }. Expected either ${k.default.greenBright("true")} or ${
            k.default.greenBright("false")
          }.`;
        }
      }, "printFieldError");
      this.printArgError = u(({ error: t, path: r, id: n }, o, i) => {
        if (t.type === "invalidName") {
          let s = `Unknown arg ${
            k.default.redBright(`\`${t.providedName}\``)
          } in ${k.default.bold(r.join("."))} for type ${
            k.default.bold(
              t.outputType ? t.outputType.name : fr(t.originalType),
            )
          }.`;
          return t.didYouMeanField
            ? s += `
\u2192 Did you forget to wrap it with \`${k.default.greenBright("select")}\`? ${
              k.default.dim(
                "e.g. " +
                  k.default.greenBright(
                    `{ select: { ${t.providedName}: ${t.providedValue} } }`,
                  ),
              )
            }`
            : t.didYouMeanArg
            ? (s += ` Did you mean \`${
              k.default.greenBright(t.didYouMeanArg)
            }\`?`,
              !o && !i && (s += ` ${k.default.dim("Available args:")}
` + Ut(t.originalType, !0)))
            : t.originalType.fields.length === 0
            ? s += ` The field ${
              k.default.bold(t.originalType.name)
            } has no arguments.`
            : !o && !i && (s += ` Available args:

` + Ut(t.originalType, !0)),
            s;
        }
        if (t.type === "invalidType") {
          let s = jr(t.providedValue, { indent: "  " }),
            a = s.split(`
`).length > 1;
          if (
            a && (s = `
${s}
`), t.requiredType.bestFittingType.location === "enumTypes"
          ) {
            return `Argument ${k.default.bold(t.argName)}: Provided value ${
              k.default.redBright(s)
            }${a ? "" : " "}of type ${
              k.default.redBright(qt(t.providedValue))
            } on ${
              k.default.bold(`prisma.${this.children[0].name}`)
            } is not a ${
              k.default.greenBright(
                pr(
                  Lt(t.requiredType.bestFittingType.location),
                  t.requiredType.bestFittingType.isList,
                ),
              )
            }.
\u2192 Possible values: ${
              t.requiredType.bestFittingType.type.values.map((p) =>
                k.default.greenBright(
                  `${Lt(t.requiredType.bestFittingType.type)}.${p}`,
                )
              ).join(", ")
            }`;
          }
          let c = ".";
          er(t.requiredType.bestFittingType.type) && (c = `:
` + Ut(t.requiredType.bestFittingType.type));
          let l = `${
              t.requiredType.inputType.map((p) =>
                k.default.greenBright(
                  pr(Lt(p.type), t.requiredType.bestFittingType.isList),
                )
              ).join(" or ")
            }${c}`,
            f = t.requiredType.inputType.length === 2 &&
                t.requiredType.inputType.find((p) => er(p.type)) || null;
          return f && (l += `
` + Ut(f.type, !0)),
            `Argument ${k.default.bold(t.argName)}: Got invalid value ${
              k.default.redBright(s)
            }${a ? "" : " "}on ${
              k.default.bold(`prisma.${this.children[0].name}`)
            }. Provided ${
              k.default.redBright(qt(t.providedValue))
            }, expected ${l}`;
        }
        if (t.type === "invalidNullArg") {
          let s = r.length === 1 && r[0] === t.name
              ? ""
              : ` for ${k.default.bold(`${r.join(".")}`)}`,
            a = ` Please use ${
              k.default.bold.greenBright("undefined")
            } instead.`;
          return `Argument ${k.default.greenBright(t.name)}${s} must not be ${
            k.default.bold("null")
          }.${a}`;
        }
        if (t.type === "missingArg") {
          let s = r.length === 1 && r[0] === t.missingName
            ? ""
            : ` for ${k.default.bold(`${r.join(".")}`)}`;
          return `Argument ${
            k.default.greenBright(t.missingName)
          }${s} is missing.`;
        }
        if (t.type === "atLeastOne") {
          let s = i
            ? ""
            : ` Available args are listed in ${k.default.dim.green("green")}.`;
          return `Argument ${k.default.bold(r.join("."))} of type ${
            k.default.bold(t.inputType.name)
          } needs ${k.default.greenBright("at least one")} argument.${s}`;
        }
        if (t.type === "atMostOne") {
          let s = i
            ? ""
            : ` Please choose one. ${k.default.dim("Available args:")} 
${Ut(t.inputType, !0)}`;
          return `Argument ${k.default.bold(r.join("."))} of type ${
            k.default.bold(t.inputType.name)
          } needs ${
            k.default.greenBright("exactly one")
          } argument, but you provided ${
            t.providedKeys.map((a) => k.default.redBright(a)).join(" and ")
          }.${s}`;
        }
      }, "printArgError");
      this.type = t, this.children = r;
    }
    get [Symbol.toStringTag]() {
      return "Document";
    }
    toString() {
      return `${this.type} {
${
        (0, yt.default)(
          this.children.map(String).join(`
`),
          Br,
        )
      }
}`;
    }
    validate(t, r = !1, n, o, i) {
      var S;
      t || (t = {});
      let s = this.children.filter((T) => T.hasInvalidChild || T.hasInvalidArg);
      if (s.length === 0) return;
      let a = [],
        c = [],
        l = t && t.select ? "select" : t.include ? "include" : void 0;
      for (let T of s) {
        let _ = T.collectErrors(l);
        a.push(
          ..._.fieldErrors.map((P) => ({
            ...P,
            path: r ? P.path : P.path.slice(1),
          })),
        ),
          c.push(
            ..._.argErrors.map((P) => ({
              ...P,
              path: r ? P.path : P.path.slice(1),
            })),
          );
      }
      let f = this.children[0].name,
        p = r ? this.type : f,
        h = [],
        w = [],
        v = [];
      for (let T of a) {
        let _ = this.normalizePath(T.path, t).join(".");
        if (T.error.type === "invalidFieldName") {
          h.push(_);
          let P = T.error.outputType, { isInclude: O } = T.error;
          P.fields.filter((F) =>
            O ? F.outputType.location === "outputObjectTypes" : !0
          ).forEach((F) => {
            let R = _.split(".");
            v.push({
              path: `${R.slice(0, R.length - 1).join(".")}.${F.name}`,
              type: "true",
              isRequired: !1,
            });
          });
        } else {
          T.error.type === "includeAndSelect"
            ? (h.push("select"), h.push("include"))
            : w.push(_);
        }
        if (
          T.error.type === "emptySelect" || T.error.type === "noTrueSelect" ||
          T.error.type === "emptyInclude"
        ) {
          let P = this.normalizePath(T.path, t),
            O = P.slice(0, P.length - 1).join(".");
          (S = T.error.field.outputType.type.fields) == null ||
            S.filter((R) =>
              T.error.type === "emptyInclude"
                ? R.outputType.location === "outputObjectTypes"
                : !0
            ).forEach((R) => {
              v.push({ path: `${O}.${R.name}`, type: "true", isRequired: !1 });
            });
        }
      }
      for (let T of c) {
        let _ = this.normalizePath(T.path, t).join(".");
        if (T.error.type === "invalidName") h.push(_);
        else if (
          T.error.type !== "missingArg" && T.error.type !== "atLeastOne"
        ) {
          w.push(_);
        } else if (T.error.type === "missingArg") {
          let P = T.error.missingArg.inputTypes.length === 1
            ? T.error.missingArg.inputTypes[0].type
            : T.error.missingArg.inputTypes.map((O) => {
              let F = fr(O.type);
              return F === "Null" ? "null" : O.isList ? F + "[]" : F;
            }).join(" | ");
          v.push({
            path: _,
            type: yo(P, !0, _.split("where.").length === 2),
            isRequired: T.error.missingArg.isRequired,
          });
        }
      }
      let y = u((T) => {
          let _ = c.some((G) =>
              G.error.type === "missingArg" && G.error.missingArg.isRequired
            ),
            P = Boolean(
              c.find((G) =>
                G.error.type === "missingArg" && !G.error.missingArg.isRequired
              ),
            ),
            O = P || _,
            F = "";
          _ && (F += `
${k.default.dim("Note: Lines with ")}${k.default.reset.greenBright("+")} ${
            k.default.dim("are required")
          }`),
            P && (F.length === 0 && (F = `
`),
              _
                ? F += k.default.dim(
                  `, lines with ${k.default.green("?")} are optional`,
                )
                : F += k.default.dim(
                  `Note: Lines with ${k.default.green("?")} are optional`,
                ),
              F += k.default.dim("."));
          let $ = c.filter((G) =>
            G.error.type !== "missingArg" || G.error.missingArg.isRequired
          ).map((G) => this.printArgError(G, O, o === "minimal")).join(`
`);
          if (
            $ += `
${
              a.map((G) => this.printFieldError(G, v, o === "minimal")).join(`
`)
            }`, o === "minimal"
          ) {
            return (0, ai.default)($);
          }
          let { stack: Q, indent: te, afterLines: U } = Bn({
              callsite: T,
              originalMethod: n || p,
              showColors: o && o === "pretty",
              isValidationError: !0,
            }),
            H = {
              ast: r ? { [f]: t } : t,
              keyPaths: h,
              valuePaths: w,
              missingItems: v,
            };
          n != null && n.endsWith("aggregate") && (H = ud(H));
          let z = `${Q}${(0, yt.default)(Dn(H), te).slice(te)}${
            k.default.dim(U)
          }

${$}${F}
`;
          return b.env.NO_COLOR || o === "colorless" ? (0, ai.default)(z) : z;
        }, "renderErrorStr"),
        A = new Oe(y(i));
      throw b.env.NODE_ENV !== "production" &&
        Object.defineProperty(A, "render", { get: () => y, enumerable: !1 }),
        A;
    }
    normalizePath(t, r) {
      let n = t.slice(), o = [], i, s = r;
      for (; (i = n.shift()) !== void 0;) {
        !Array.isArray(s) && i === 0 ||
          (i === "select"
            ? s[i] ? s = s[i] : s = s.include
            : s && s[i] && (s = s[i]),
            o.push(i));
      }
      return o;
    }
  };
u(Ln, "Document");
var Oe = class extends Error {
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
u(Oe, "PrismaClientValidationError");
var ne = class extends Error {
  constructor(t) {
    super(
      t + `
Read more at https://pris.ly/d/client-constructor`,
    );
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
u(ne, "PrismaClientConstructorValidationError");
var pe = class {
  constructor({ name: t, args: r, children: n, error: o, schemaField: i }) {
    this.name = t,
      this.args = r,
      this.children = n,
      this.error = o,
      this.schemaField = i,
      this.hasInvalidChild = n
        ? n.some((s) =>
          Boolean(s.error || s.hasInvalidArg || s.hasInvalidChild)
        )
        : !1,
      this.hasInvalidArg = r ? r.hasInvalidArg : !1;
  }
  get [Symbol.toStringTag]() {
    return "Field";
  }
  toString() {
    let t = this.name;
    return this.error
      ? t + " # INVALID_FIELD"
      : (this.args && this.args.args && this.args.args.length > 0 &&
        (this.args.args.length === 1
          ? t += `(${this.args.toString()})`
          : t += `(
${
            (0, yt.default)(this.args.toString(), Br)
          }
)`),
        this.children && (t += ` {
${
          (0, yt.default)(
            this.children.map(String).join(`
`),
            Br,
          )
        }
}`),
        t);
  }
  collectErrors(t = "select") {
    let r = [], n = [];
    if (
      this.error && r.push({ path: [this.name], error: this.error }),
        this.children
    ) {
      for (let o of this.children) {
        let i = o.collectErrors(t);
        r.push(
          ...i.fieldErrors.map((s) => ({
            ...s,
            path: [this.name, t, ...s.path],
          })),
        ),
          n.push(
            ...i.argErrors.map((s) => ({
              ...s,
              path: [this.name, t, ...s.path],
            })),
          );
      }
    }
    return this.args &&
      n.push(
        ...this.args.collectErrors().map((o) => ({
          ...o,
          path: [this.name, ...o.path],
        })),
      ),
      { fieldErrors: r, argErrors: n };
  }
};
u(pe, "Field");
var ge = class {
  constructor(t = []) {
    this.args = t,
      this.hasInvalidArg = t ? t.some((r) => Boolean(r.hasError)) : !1;
  }
  get [Symbol.toStringTag]() {
    return "Args";
  }
  toString() {
    return this.args.length === 0
      ? ""
      : `${
        this.args.map((t) => t.toString()).filter((t) => t).join(`
`)
      }`;
  }
  collectErrors() {
    return this.hasInvalidArg ? ti(this.args, (t) => t.collectErrors()) : [];
  }
};
u(ge, "Args");
function ii(e, t) {
  return E.Buffer.isBuffer(e)
    ? JSON.stringify(e.toString("base64"))
    : Object.prototype.toString.call(e) === "[object BigInt]"
    ? e.toString()
    : typeof (t == null ? void 0 : t.type) == "string" && t.type === "Json"
    ? e === null
      ? "null"
      : e && e.values && e.__prismaRawParamaters__
      ? JSON.stringify(e.values)
      : (t == null ? void 0 : t.isList) && Array.isArray(e)
      ? JSON.stringify(e.map((r) => JSON.stringify(r)))
      : JSON.stringify(JSON.stringify(e))
    : e === void 0
    ? null
    : e === null
    ? "null"
    : Re.isDecimal(e) || (t == null ? void 0 : t.type) === "Decimal" && un(e)
    ? Fs(e)
    : (t == null ? void 0 : t.location) === "enumTypes" && typeof e == "string"
    ? Array.isArray(e) ? `[${e.join(", ")}]` : e
    : JSON.stringify(e, null, 2);
}
u(ii, "stringify");
var Me = class {
  constructor(
    { key: t, value: r, isEnum: n = !1, error: o, schemaArg: i, inputType: s },
  ) {
    this.inputType = s,
      this.key = t,
      this.value = r,
      this.isEnum = n,
      this.error = o,
      this.schemaArg = i,
      this.isNullable = (i == null
        ? void 0
        : i.inputTypes.reduce((a) => a && i.isNullable, !0)) || !1,
      this.hasError = Boolean(o) || (r instanceof ge ? r.hasInvalidArg : !1) ||
        Array.isArray(r) &&
          r.some((a) => a instanceof ge ? a.hasInvalidArg : !1);
  }
  get [Symbol.toStringTag]() {
    return "Arg";
  }
  _toString(t, r) {
    var n;
    if (typeof t != "undefined") {
      if (t instanceof ge) {
        return `${r}: {
${(0, yt.default)(t.toString(), 2)}
}`;
      }
      if (Array.isArray(t)) {
        if (((n = this.inputType) == null ? void 0 : n.type) === "Json") {
          return `${r}: ${ii(t, this.inputType)}`;
        }
        let o = !t.some((i) => typeof i == "object");
        return `${r}: [${
          o ? "" : `
`
        }${
          (0, yt.default)(
            t.map((i) =>
              i instanceof ge
                ? `{
${(0, yt.default)(i.toString(), Br)}
}`
                : ii(i, this.inputType)
            ).join(`,${
              o ? " " : `
`
            }`),
            o ? 0 : Br,
          )
        }${
          o ? "" : `
`
        }]`;
      }
      return `${r}: ${ii(t, this.inputType)}`;
    }
  }
  toString() {
    return this._toString(this.value, this.key);
  }
  collectErrors() {
    var r;
    if (!this.hasError) return [];
    let t = [];
    if (this.error) {
      let n =
        typeof ((r = this.inputType) == null ? void 0 : r.type) == "object"
          ? `${this.inputType.type.name}${this.inputType.isList ? "[]" : ""}`
          : void 0;
      t.push({ error: this.error, path: [this.key], id: n });
    }
    return Array.isArray(this.value) &&
      t.push(
        ...ti(
          this.value,
          (n, o) =>
            n != null && n.collectErrors
              ? n.collectErrors().map((i) => ({
                ...i,
                path: [this.key, o, ...i.path],
              }))
              : [],
        ),
      ),
      this.value instanceof ge &&
      t.push(
        ...this.value.collectErrors().map((n) => ({
          ...n,
          path: [this.key, ...n.path],
        })),
      ),
      t;
  }
};
u(Me, "Arg");
function Vn({ dmmf: e, rootTypeName: t, rootField: r, select: n }) {
  n || (n = {});
  let o = t === "query" ? e.queryType : e.mutationType,
    i = {
      args: [],
      outputType: { isList: !1, type: o, location: "outputObjectTypes" },
      name: t,
    },
    s = ju(e, { [r]: n }, i, [t]);
  return new Ln(t, s);
}
u(Vn, "makeDocument");
function fi(e) {
  return e;
}
u(fi, "transformDocument");
function ju(e, t, r, n) {
  let o = r.outputType.type;
  return Object.entries(t).reduce((i, [s, a]) => {
    let c = o.fieldMap ? o.fieldMap[s] : o.fields.find((A) => A.name === s);
    if (!c) {
      return i.push(
        new pe({
          name: s,
          children: [],
          error: {
            type: "invalidFieldName",
            modelName: o.name,
            providedName: s,
            didYouMean: cn(s, o.fields.map((A) => A.name)),
            outputType: o,
          },
        }),
      ),
        i;
    }
    if (
      typeof a != "boolean" && c.outputType.location === "scalar" &&
      c.name !== "executeRaw" && c.name !== "queryRaw" &&
      c.name !== "runCommandRaw" && o.name !== "Query" &&
      !s.startsWith("aggregate") && c.name !== "count"
    ) {
      return i.push(
        new pe({
          name: s,
          children: [],
          error: {
            type: "invalidFieldType",
            modelName: o.name,
            fieldName: s,
            providedValue: a,
          },
        }),
      ),
        i;
    }
    if (a === !1) return i;
    let l = {
        name: c.name,
        fields: c.args,
        constraints: { minNumFields: null, maxNumFields: null },
      },
      f = typeof a == "object" ? Au(a, ["include", "select"]) : void 0,
      p = f
        ? Un(f, l, [], typeof c == "string" ? void 0 : c.outputType.type)
        : void 0,
      h = c.outputType.location === "outputObjectTypes";
    if (a) {
      if (a.select && a.include) {
        i.push(
          new pe({
            name: s,
            children: [
              new pe({
                name: "include",
                args: new ge(),
                error: { type: "includeAndSelect", field: c },
              }),
            ],
          }),
        );
      } else if (a.include) {
        let A = Object.keys(a.include);
        if (A.length === 0) {
          return i.push(
            new pe({
              name: s,
              children: [
                new pe({
                  name: "include",
                  args: new ge(),
                  error: { type: "emptyInclude", field: c },
                }),
              ],
            }),
          ),
            i;
        }
        if (c.outputType.location === "outputObjectTypes") {
          let S = c.outputType.type,
            T = S.fields.filter((P) =>
              P.outputType.location === "outputObjectTypes"
            ).map((P) => P.name),
            _ = A.filter((P) => !T.includes(P));
          if (_.length > 0) {
            return i.push(..._.map((P) =>
              new pe({
                name: P,
                children: [
                  new pe({
                    name: P,
                    args: new ge(),
                    error: {
                      type: "invalidFieldName",
                      modelName: S.name,
                      outputType: S,
                      providedName: P,
                      didYouMean: cn(P, T) || void 0,
                      isInclude: !0,
                      isIncludeScalar: S.fields.some((O) => O.name === P),
                    },
                  }),
                ],
              })
            )),
              i;
          }
        }
      } else if (a.select) {
        let A = Object.values(a.select);
        if (A.length === 0) {
          return i.push(
            new pe({
              name: s,
              children: [
                new pe({
                  name: "select",
                  args: new ge(),
                  error: { type: "emptySelect", field: c },
                }),
              ],
            }),
          ),
            i;
        }
        if (
          A.filter((T) => T).length === 0
        ) {
          return i.push(
            new pe({
              name: s,
              children: [
                new pe({
                  name: "select",
                  args: new ge(),
                  error: { type: "noTrueSelect", field: c },
                }),
              ],
            }),
          ),
            i;
        }
      }
    }
    let w = h ? td(e, c.outputType.type) : null, v = w;
    a &&
      (a.select
        ? v = a.select
        : a.include
        ? v = Dr(w, a.include)
        : a.by && Array.isArray(a.by) && c.outputType.namespace === "prisma" &&
          c.outputType.location === "outputObjectTypes" &&
          Ns(c.outputType.type.name) && (v = ed(a.by)));
    let y = v !== !1 && h ? ju(e, v, c, [...n, s]) : void 0;
    return i.push(new pe({ name: s, args: p, children: y, schemaField: c })), i;
  }, []);
}
u(ju, "selectionToFields");
function ed(e) {
  let t = Object.create(null);
  for (let r of e) t[r] = !0;
  return t;
}
u(ed, "byToSelect");
function td(e, t) {
  let r = Object.create(null);
  for (let n of t.fields) {
    e.typeMap[n.outputType.type.name] !== void 0 && (r[n.name] = !0),
      (n.outputType.location === "scalar" ||
        n.outputType.location === "enumTypes") && (r[n.name] = !0);
  }
  return r;
}
u(td, "getDefaultSelection");
function ui(e, t, r, n) {
  return new Me({
    key: e,
    value: t,
    isEnum: n.location === "enumTypes",
    inputType: n,
    error: {
      type: "invalidType",
      providedValue: t,
      argName: e,
      requiredType: { inputType: r.inputTypes, bestFittingType: n },
    },
  });
}
u(ui, "getInvalidTypeArg");
function rd(e, t, r) {
  let { type: n, isList: o } = r, i = pr(Lt(n), o), s = qt(e, n);
  return !!(s === i || o && s === "List<>" || i === "Json" ||
    s === "Int" && i === "BigInt" ||
    s === "List<Int>" && i === "List<BigInt>" ||
    s === "List<BigInt | Int>" && i === "List<BigInt>" ||
    s === "List<Int | BigInt>" && i === "List<BigInt>" ||
    (s === "Int" || s === "Float") && i === "Decimal" ||
    nd(s, e) && i === "List<Decimal>" || s === "DateTime" && i === "String" ||
    s === "List<DateTime>" && i === "List<String>" ||
    s === "UUID" && i === "String" ||
    s === "List<UUID>" && i === "List<String>" ||
    s === "String" && i === "ID" || s === "List<String>" && i === "List<ID>" ||
    s === "List<String>" && i === "List<Json>" ||
    i === "List<String>" &&
      (s === "List<String | UUID>" || s === "List<UUID | String>") ||
    s === "Int" && i === "Float" || s === "List<Int>" && i === "List<Float>" ||
    s === "Int" && i === "Long" || s === "List<Int>" && i === "List<Long>" ||
    s === "String" && i === "Decimal" && $u(e) || e === null);
}
u(rd, "hasCorrectScalarType");
var qn = u((e) => Eu(e, (t, r) => r !== void 0), "cleanObject");
function nd(e, t) {
  return e === "List<Int>" || e === "List<Float>" ||
    e === "List<String>" && t.every($u);
}
u(nd, "isValidDecimalListInput");
function $u(e) {
  return /^\-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i.test(e);
}
u($u, "isDecimalString");
function od(e, t, r) {
  let n = null, o = [];
  for (let i of r.inputTypes) {
    if (
      n = sd(e, t, r, i), (n == null ? void 0 : n.collectErrors().length) === 0
    ) {
      return n;
    }
    if (n && (n == null ? void 0 : n.collectErrors())) {
      let s = n == null ? void 0 : n.collectErrors();
      s && s.length > 0 && o.push({ arg: n, errors: s });
    }
  }
  if ((n == null ? void 0 : n.hasError) && o.length > 0) {
    let i = o.map(({ arg: s, errors: a }) => {
      let c = a.map((l) => {
        let f = 1;
        return l.error.type === "invalidType" &&
          (f = 2 * Math.exp(Bu(l.error.providedValue)) + 1),
          f += Math.log(l.path.length),
          l.error.type === "missingArg" && s.inputType &&
          er(s.inputType.type) && s.inputType.type.name.includes("Unchecked") &&
          (f *= 2),
          l.error.type === "invalidName" && er(l.error.originalType) &&
          l.error.originalType.name.includes("Unchecked") && (f *= 2),
          f;
      });
      return { score: a.length + id(c), arg: s, errors: a };
    });
    return i.sort((s, a) => s.score < a.score ? -1 : 1), i[0].arg;
  }
  return n;
}
u(od, "valueToArg");
function Bu(e) {
  let t = 1;
  if (!e || typeof e != "object") return t;
  for (let r in e) {
    if (
      !!Object.prototype.hasOwnProperty.call(e, r) && typeof e[r] == "object"
    ) {
      let n = Bu(e[r]) + 1;
      t = Math.max(n, t);
    }
  }
  return t;
}
u(Bu, "getDepth");
function id(e) {
  return e.reduce((t, r) => t + r, 0);
}
u(id, "sum");
function sd(e, t, r, n) {
  var l, f, p, h;
  if (typeof t == "undefined") {
    return r.isRequired
      ? new Me({
        key: e,
        value: t,
        isEnum: n.location === "enumTypes",
        inputType: n,
        error: {
          type: "missingArg",
          missingName: e,
          missingArg: r,
          atLeastOne: !1,
          atMostOne: !1,
        },
      })
      : null;
  }
  let { isNullable: o, isRequired: i } = r;
  if (
    t === null && !o && !i &&
    !(er(n.type)
      ? n.type.constraints.minNumFields !== null &&
        n.type.constraints.minNumFields > 0
      : !1)
  ) {
    return new Me({
      key: e,
      value: t,
      isEnum: n.location === "enumTypes",
      inputType: n,
      error: {
        type: "invalidNullArg",
        name: e,
        invalidType: r.inputTypes,
        atLeastOne: !1,
        atMostOne: !1,
      },
    });
  }
  if (!n.isList) {
    if (er(n.type)) {
      if (
        typeof t != "object" || Array.isArray(t) ||
        n.location === "inputObjectTypes" && !xu(t)
      ) {
        return ui(e, t, r, n);
      }
      {
        let w = qn(t), v, y = Object.keys(w || {}), A = y.length;
        return A === 0 && typeof n.type.constraints.minNumFields == "number" &&
            n.type.constraints.minNumFields > 0
          ? v = { type: "atLeastOne", key: e, inputType: n.type }
          : A > 1 && typeof n.type.constraints.maxNumFields == "number" &&
            n.type.constraints.maxNumFields < 2 &&
            (v = {
              type: "atMostOne",
              key: e,
              inputType: n.type,
              providedKeys: y,
            }),
          new Me({
            key: e,
            value: w === null ? null : Un(w, n.type, r.inputTypes),
            isEnum: n.location === "enumTypes",
            error: v,
            inputType: n,
            schemaArg: r,
          });
      }
    } else return Du(e, t, r, n);
  }
  if (
    !Array.isArray(t) && n.isList && e !== "updateMany" && (t = [t]),
      n.location === "enumTypes" || n.location === "scalar"
  ) {
    return Du(e, t, r, n);
  }
  let s = n.type,
    c = (typeof ((l = s.constraints) == null ? void 0 : l.minNumFields) ==
            "number" &&
          ((f = s.constraints) == null ? void 0 : f.minNumFields) > 0
        ? Array.isArray(t) &&
          t.some((w) => !w || Object.keys(qn(w)).length === 0)
        : !1)
      ? { inputType: s, key: e, type: "atLeastOne" }
      : void 0;
  if (!c) {
    let w = typeof ((p = s.constraints) == null ? void 0 : p.maxNumFields) ==
          "number" &&
        ((h = s.constraints) == null ? void 0 : h.maxNumFields) < 2
      ? Array.isArray(t) &&
        t.find((v) => !v || Object.keys(qn(v)).length !== 1)
      : !1;
    w &&
      (c = {
        inputType: s,
        key: e,
        type: "atMostOne",
        providedKeys: Object.keys(w),
      });
  }
  if (!Array.isArray(t)) {
    for (let w of r.inputTypes) {
      let v = Un(t, w.type);
      if (v.collectErrors().length === 0) {
        return new Me({
          key: e,
          value: v,
          isEnum: !1,
          schemaArg: r,
          inputType: w,
        });
      }
    }
  }
  return new Me({
    key: e,
    value: t.map((w) =>
      n.isList && typeof w != "object"
        ? w
        : typeof w != "object" || !t
        ? ui(e, w, r, n)
        : Un(w, s)
    ),
    isEnum: !1,
    inputType: n,
    schemaArg: r,
    error: c,
  });
}
u(sd, "tryInferArgs");
function er(e) {
  return !(typeof e == "string" || Object.hasOwnProperty.call(e, "values"));
}
u(er, "isInputArgType");
function Du(e, t, r, n) {
  return rd(t, r, n)
    ? new Me({
      key: e,
      value: t,
      isEnum: n.location === "enumTypes",
      schemaArg: r,
      inputType: n,
    })
    : ui(e, t, r, n);
}
u(Du, "scalarToArg");
function Un(e, t, r, n) {
  let o = qn(e),
    { fields: i, fieldMap: s } = t,
    a = i.map((p) => [p.name, void 0]),
    c = Object.entries(o || {}),
    f = ks(c, a, (p) => p[0]).reduce((p, [h, w]) => {
      let v = s ? s[h] : i.find((A) => A.name === h);
      if (!v) {
        let A = typeof w == "boolean" && n && n.fields.some((S) => S.name === h)
          ? h
          : null;
        return p.push(
          new Me({
            key: h,
            value: w,
            error: {
              type: "invalidName",
              providedName: h,
              providedValue: w,
              didYouMeanField: A,
              didYouMeanArg: !A && cn(h, [...i.map((S) => S.name), "select"]) ||
                void 0,
              originalType: t,
              possibilities: r,
              outputType: n,
            },
          }),
        ),
          p;
      }
      let y = od(h, w, v);
      return y && p.push(y), p;
    }, []);
  if (
    typeof t.constraints.minNumFields == "number" &&
      c.length < t.constraints.minNumFields || f.find((p) => {
        var h, w;
        return ((h = p.error) == null ? void 0 : h.type) === "missingArg" ||
          ((w = p.error) == null ? void 0 : w.type) === "atLeastOne";
      })
  ) {
    let p = t.fields.filter((h) =>
      !h.isRequired && o &&
      (typeof o[h.name] == "undefined" || o[h.name] === null)
    );
    f.push(...p.map((h) => {
      let w = h.inputTypes[0];
      return new Me({
        key: h.name,
        value: void 0,
        isEnum: w.location === "enumTypes",
        error: {
          type: "missingArg",
          missingName: h.name,
          missingArg: h,
          atLeastOne: Boolean(t.constraints.minNumFields) || !1,
          atMostOne: t.constraints.maxNumFields === 1 || !1,
        },
        inputType: w,
      });
    }));
  }
  return new ge(f);
}
u(Un, "objectToArgs");
function Gn({ document: e, path: t, data: r }) {
  let n = Zo(r, t);
  if (n === "undefined") return null;
  if (typeof n != "object") return n;
  let o = ad(e, t);
  return ci({ field: o, data: n });
}
u(Gn, "unpack");
function ci({ field: e, data: t }) {
  var n;
  if (!t || typeof t != "object" || !e.children || !e.schemaField) return t;
  let r = {
    DateTime: (o) => new Date(o),
    Json: (o) => JSON.parse(o),
    Bytes: (o) => E.Buffer.from(o, "base64"),
    Decimal: (o) => new Re(o),
    BigInt: (o) => BigInt(o),
  };
  for (let o of e.children) {
    let i = (n = o.schemaField) == null ? void 0 : n.outputType.type;
    if (i && typeof i == "string") {
      let s = r[i];
      if (s) {
        if (Array.isArray(t)) {
          for (let a of t) {
            typeof a[o.name] != "undefined" && a[o.name] !== null &&
              (Array.isArray(a[o.name])
                ? a[o.name] = a[o.name].map(s)
                : a[o.name] = s(a[o.name]));
          }
        } else {
          typeof t[o.name] != "undefined" && t[o.name] !== null &&
            (Array.isArray(t[o.name])
              ? t[o.name] = t[o.name].map(s)
              : t[o.name] = s(t[o.name]));
        }
      }
    }
    if (
      o.schemaField && o.schemaField.outputType.location === "outputObjectTypes"
    ) {
      if (Array.isArray(t)) for (let s of t) ci({ field: o, data: s[o.name] });
      else ci({ field: o, data: t[o.name] });
    }
  }
  return t;
}
u(ci, "mapScalars");
function ad(e, t) {
  let r = t.slice(), n = r.shift(), o = e.children.find((i) => i.name === n);
  if (!o) throw new Error(`Could not find field ${n} in document ${e}`);
  for (; r.length > 0;) {
    let i = r.shift();
    if (!o.children) {
      throw new Error(`Can't get children for field ${o} with child ${i}`);
    }
    let s = o.children.find((a) => a.name === i);
    if (!s) throw new Error(`Can't find child ${i} of field ${o}`);
    o = s;
  }
  return o;
}
u(ad, "getField");
function si(e) {
  return e.split(".").filter((t) => t !== "select").join(".");
}
u(si, "removeSelectFromPath");
function li(e) {
  if (Object.prototype.toString.call(e) === "[object Object]") {
    let r = {};
    for (let n in e) {
      if (n === "select") for (let o in e.select) r[o] = li(e.select[o]);
      else r[n] = li(e[n]);
    }
    return r;
  }
  return e;
}
u(li, "removeSelectFromObject");
function ud({ ast: e, keyPaths: t, missingItems: r, valuePaths: n }) {
  let o = t.map(si),
    i = n.map(si),
    s = r.map((c) => ({
      path: si(c.path),
      isRequired: c.isRequired,
      type: c.type,
    }));
  return { ast: li(e), keyPaths: o, missingItems: s, valuePaths: i };
}
u(ud, "transformAggregatePrintJsonArgs");
m();
g();
d();
An();
var Uu = Z(Pn());
m();
g();
d();
var Lr = class {
  constructor(t) {
    this.options = t;
    this.tickActive = !1;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
        (this.batches[r] = [],
          this.tickActive || (this.tickActive = !0,
            b.nextTick(() => {
              this.dispatchBatches(), this.tickActive = !1;
            }))),
        new Promise((n, o) => {
          this.batches[r].push({ request: t, resolve: n, reject: o });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
        r.length === 1
          ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          })
          : this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error) {
              for (let o = 0; o < r.length; o++) r[o].reject(n);
            } else {
              for (let o = 0; o < r.length; o++) {
                let i = n[o];
                i instanceof Error ? r[o].reject(i) : r[o].resolve(i);
              }
            }
          }).catch((n) => {
            for (let o = 0; o < r.length; o++) r[o].reject(n);
          });
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
u(Lr, "DataLoader");
m();
g();
d();
var tr = class extends Error {
  constructor(t) {
    super(t), this.name = "NotFoundError";
  }
};
u(tr, "NotFoundError");
function pi(e, t, r, n) {
  let o;
  if (
    r && typeof r == "object" && "rejectOnNotFound" in r &&
    r.rejectOnNotFound !== void 0
  ) {
    o = r.rejectOnNotFound, delete r.rejectOnNotFound;
  } else if (typeof n == "boolean") o = n;
  else if (n && typeof n == "object" && e in n) {
    let i = n[e];
    if (i && typeof i == "object") return t in i ? i[t] : void 0;
    o = pi(e, t, r, i);
  } else typeof n == "function" ? o = n : o = !1;
  return o;
}
u(pi, "getRejectOnNotFound");
var cd = /(findUnique|findFirst)/;
function Lu(e, t, r, n) {
  if (n && !e && cd.exec(t)) {
    throw typeof n == "boolean" && n
      ? new tr(`No ${r} found`)
      : typeof n == "function"
      ? n(new tr(`No ${r} found`))
      : Tr(n)
      ? n
      : new tr(`No ${r} found`);
  }
}
u(Lu, "throwIfNotFound");
var ld = ut("prisma:client:request_handler");
function qu(e) {
  var s;
  let t = e[0].transactionId,
    r = e[0].runInTransaction,
    n = (s = e[0].headers) != null ? s : {},
    o = typeof t == "number" && r ? !0 : void 0,
    i = typeof t == "string" && r ? t : void 0;
  return i !== void 0 && (n.transactionId = i), { inTx: o, headers: n };
}
u(qu, "getRequestInfo");
var qr = class {
  constructor(t, r) {
    this.client = t,
      this.hooks = r,
      this.dataloader = new Lr({
        batchLoader: (n) => {
          let o = qu(n), i = n.map((s) => String(s.document));
          return this.client._engine.requestBatch(i, o.headers, o.inTx);
        },
        singleLoader: (n) => {
          let o = qu([n]), i = String(n.document);
          return this.client._engine.request(i, o.headers);
        },
        batchBy: (n) =>
          n.transactionId ? `transaction-${n.transactionId}` : fd(n),
      });
  }
  async request(
    {
      document: t,
      dataPath: r = [],
      rootField: n,
      typeName: o,
      isList: i,
      callsite: s,
      rejectOnNotFound: a,
      clientMethod: c,
      runInTransaction: l,
      showColors: f,
      engineHook: p,
      args: h,
      headers: w,
      transactionId: v,
      unpacker: y,
    },
  ) {
    if (this.hooks && this.hooks.beforeRequest) {
      let A = String(t);
      this.hooks.beforeRequest({
        query: A,
        path: r,
        rootField: n,
        typeName: o,
        document: t,
        isList: i,
        clientMethod: c,
        args: h,
      });
    }
    try {
      let A, S;
      if (p) {
        let _ = await p(
          { document: t, runInTransaction: l },
          (P) => this.dataloader.request(P),
        );
        A = _.data, S = _.elapsed;
      } else {
        let _ = await this.dataloader.request({
          document: t,
          runInTransaction: l,
          headers: w,
          transactionId: v,
        });
        A = _ == null ? void 0 : _.data, S = _ == null ? void 0 : _.elapsed;
      }
      let T = this.unpack(t, A, r, n, y);
      return Lu(T, c, o, a),
        b.env.PRISMA_CLIENT_GET_TIME ? { data: T, elapsed: S } : T;
    } catch (A) {
      ld(A);
      let S = A.message;
      if (s) {
        let { stack: T } = Bn({
          callsite: s,
          originalMethod: c,
          onUs: A.isPanic,
          showColors: f,
        });
        S = `${T}
  ${A.message}`;
      }
      throw S = this.sanitizeMessage(S),
        A.code
          ? new Ve(S, A.code, this.client._clientVersion, A.meta)
          : A.isPanic
          ? new Ge(S, this.client._clientVersion)
          : A instanceof Ne
          ? new Ne(S, this.client._clientVersion)
          : A instanceof ke
          ? new ke(S, this.client._clientVersion)
          : A instanceof Ge
          ? new Ge(S, this.client._clientVersion)
          : (A.clientVersion = this.client._clientVersion, A);
    }
  }
  sanitizeMessage(t) {
    return this.client._errorFormat && this.client._errorFormat !== "pretty"
      ? (0, Uu.default)(t)
      : t;
  }
  unpack(t, r, n, o, i) {
    r != null && r.data && (r = r.data), i && (r[o] = i(r[o]));
    let s = [];
    return o && s.push(o),
      s.push(...n.filter((a) => a !== "select" && a !== "include")),
      Gn({ document: t, data: r, path: s });
  }
  get [Symbol.toStringTag]() {
    return "RequestHandler";
  }
};
u(qr, "RequestHandler");
function fd(e) {
  var n;
  if (!e.document.children[0].name.startsWith("findUnique")) return;
  let t = (n = e.document.children[0].args) == null
      ? void 0
      : n.args.map((o) =>
        o.value instanceof ge
          ? `${o.key}-${o.value.args.map((i) => i.key).join(",")}`
          : o.key
      ).join(","),
    r = e.document.children[0].children.join(",");
  return `${e.document.children[0].name}|${t}|${r}`;
}
u(fd, "batchFindUniqueBy");
m();
g();
d();
var Gu = Vu().version;
m();
g();
d();
function Ju(e) {
  return e.map((t) => {
    let r = {};
    for (let n of Object.keys(t)) r[n] = zu(t[n]);
    return r;
  });
}
u(Ju, "deserializeRawResults");
function zu({ prisma__type: e, prisma__value: t }) {
  switch (e) {
    case "bigint":
      return BigInt(t);
    case "bytes":
      return E.Buffer.from(t, "base64");
    case "decimal":
      return new Re(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return new Date(`1970-01-01T${t}Z`);
    case "array":
      return t.map(zu);
    default:
      return t;
  }
}
u(zu, "deserializeValue");
m();
g();
d();
var Ur = u(
  (e) => e.reduce((t, r, n) => `${t}@P${n}${r}`),
  "mssqlPreparedStatement",
);
m();
g();
d();
function Wu(e, t) {
  let r = t && Fr.getSpanContext(t);
  return (r == null ? void 0 : r.traceFlags) === 1
    ? { traceparent: `00-${r.traceId}-${r.spanId}-01`, ...e }
    : e != null
    ? e
    : {};
}
u(Wu, "applyTracingHeaders");
m();
g();
d();
async function Hu(e, t, r) {
  if (t === void 0) return r(void 0);
  let o = Fr.getTracer("prisma").startSpan(e, void 0, t),
    i = Fr.setSpan(t, o),
    s = await Rn.with(i, () => r(o));
  return o == null || o.end(), s;
}
u(Hu, "runInChildSpan");
m();
g();
d();
function $e(e) {
  try {
    return Qu(e, "fast");
  } catch (t) {
    return Qu(e, "slow");
  }
}
u($e, "serializeRawParameters");
function Qu(e, t) {
  return JSON.stringify(e.map((r) => gd(r, t)));
}
u(Qu, "serializeRawParametersInternal");
function gd(e, t) {
  return typeof e == "bigint"
    ? { prisma__type: "bigint", prisma__value: e.toString() }
    : dd(e)
    ? { prisma__type: "date", prisma__value: e.toJSON() }
    : Re.isDecimal(e)
    ? { prisma__type: "decimal", prisma__value: e.toJSON() }
    : E.Buffer.isBuffer(e)
    ? { prisma__type: "bytes", prisma__value: e.toString("base64") }
    : md(e) || ArrayBuffer.isView(e)
    ? {
      prisma__type: "bytes",
      prisma__value: E.Buffer.from(e).toString("base64"),
    }
    : typeof e == "object" && t === "slow"
    ? Yu(e)
    : e;
}
u(gd, "encodeParameter");
function dd(e) {
  return e instanceof Date
    ? !0
    : Object.prototype.toString.call(e) === "[object Date]" &&
      typeof e.toJSON == "function";
}
u(dd, "isDate");
function md(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == "object" && e !== null
    ? e[Symbol.toStringTag] === "ArrayBuffer" ||
      e[Symbol.toStringTag] === "SharedArrayBuffer"
    : !1;
}
u(md, "isArrayBufferLike");
function Yu(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(Ku);
  let t = {};
  for (let r of Object.keys(e)) t[r] = Ku(e[r]);
  return t;
}
u(Yu, "preprocessObject");
function Ku(e) {
  return typeof e == "bigint" ? e.toString() : Yu(e);
}
u(Ku, "preprocessValueInObject");
m();
g();
d();
var tc = Z(mo());
var Zu = [
    "datasources",
    "errorFormat",
    "log",
    "__internal",
    "rejectOnNotFound",
  ],
  Xu = ["pretty", "colorless", "minimal"],
  ec = ["info", "query", "warn", "error"],
  hd = {
    datasources: (e, t) => {
      if (!!e) {
        if (typeof e != "object" || Array.isArray(e)) {
          throw new ne(
            `Invalid value ${
              JSON.stringify(e)
            } for "datasources" provided to PrismaClient constructor`,
          );
        }
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let o = rr(r, t) || `Available datasources: ${t.join(", ")}`;
            throw new ne(
              `Unknown datasource ${r} provided to PrismaClient constructor.${o}`,
            );
          }
          if (typeof n != "object" || Array.isArray(n)) {
            throw new ne(
              `Invalid value ${
                JSON.stringify(e)
              } for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
            );
          }
          if (n && typeof n == "object") {
            for (let [o, i] of Object.entries(n)) {
              if (o !== "url") {
                throw new ne(
                  `Invalid value ${
                    JSON.stringify(e)
                  } for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
                );
              }
              if (typeof i != "string") {
                throw new ne(
                  `Invalid value ${
                    JSON.stringify(i)
                  } for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
                );
              }
            }
          }
        }
      }
    },
    errorFormat: (e) => {
      if (!!e) {
        if (typeof e != "string") {
          throw new ne(
            `Invalid value ${
              JSON.stringify(e)
            } for "errorFormat" provided to PrismaClient constructor.`,
          );
        }
        if (!Xu.includes(e)) {
          let t = rr(e, Xu);
          throw new ne(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e)) {
        throw new ne(
          `Invalid value ${
            JSON.stringify(e)
          } for "log" provided to PrismaClient constructor.`,
        );
      }
      function t(r) {
        if (typeof r == "string" && !ec.includes(r)) {
          let n = rr(r, ec);
          throw new ne(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          );
        }
      }
      u(t, "validateLogLevel");
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (o) => {
            let i = ["stdout", "event"];
            if (!i.includes(o)) {
              let s = rr(o, i);
              throw new ne(
                `Invalid value ${
                  JSON.stringify(o)
                } for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == "object") {
          for (let [o, i] of Object.entries(r)) {
            if (n[o]) n[o](i);
            else {
              throw new ne(
                `Invalid property ${o} for "log" provided to PrismaClient constructor`,
              );
            }
          }
        }
      }
    },
    __internal: (e) => {
      if (!e) return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object") {
        throw new ne(
          `Invalid value ${
            JSON.stringify(e)
          } for "__internal" to PrismaClient constructor`,
        );
      }
      for (let [r] of Object.entries(e)) {
        if (!t.includes(r)) {
          let n = rr(r, t);
          throw new ne(
            `Invalid property ${
              JSON.stringify(r)
            } for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
      }
    },
    rejectOnNotFound: (e) => {
      if (!!e) {
        if (
          Tr(e) || typeof e == "boolean" || typeof e == "object" ||
          typeof e == "function"
        ) {
          return e;
        }
        throw new ne(
          `Invalid rejectOnNotFound expected a boolean/Error/{[modelName: Error | boolean]} but received ${
            JSON.stringify(e)
          }`,
        );
      }
    },
  };
function rc(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!Zu.includes(r)) {
      let o = rr(r, Zu);
      throw new ne(
        `Unknown property ${r} provided to PrismaClient constructor.${o}`,
      );
    }
    hd[r](n, t);
  }
}
u(rc, "validatePrismaClientOptions");
function rr(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let r = yd(e, t);
  return r ? ` Did you mean "${r}"?` : "";
}
u(rr, "getDidYouMean");
function yd(e, t) {
  if (t.length === 0) return null;
  let r = t.map((o) => ({ value: o, distance: (0, tc.default)(e, o) }));
  r.sort((o, i) => o.distance < i.distance ? -1 : 1);
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
u(yd, "getAlternative");
var ye = ut("prisma:client"), bd = /^(\s*alter\s)/i;
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
function nc(e) {
  return Array.isArray(e);
}
u(nc, "isReadonlyArray");
function gi(e, t, r) {
  if (t.length > 0 && bd.exec(e)) {
    throw new Error(`Running ALTER using ${r} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
  }
}
u(gi, "checkAlter");
var wd = {
    findUnique: "query",
    findFirst: "query",
    findMany: "query",
    count: "query",
    create: "mutation",
    createMany: "mutation",
    update: "mutation",
    updateMany: "mutation",
    upsert: "mutation",
    delete: "mutation",
    deleteMany: "mutation",
    executeRaw: "mutation",
    queryRaw: "mutation",
    aggregate: "query",
    groupBy: "query",
    runCommandRaw: "mutation",
    findRaw: "query",
    aggregateRaw: "query",
  },
  vd = Symbol.for("prisma.client.transaction.id");
function oc(e) {
  class t {
    constructor(n) {
      this._middlewares = new Nr();
      this._transactionId = 1;
      var s, a, c, l, f, p, h, w, v;
      n && rc(n, e.datasourceNames),
        this._rejectOnNotFound = n == null ? void 0 : n.rejectOnNotFound,
        this._clientVersion = (s = e.clientVersion) != null ? s : Gu,
        this._activeProvider = e.activeProvider,
        this._dataProxy = e.dataProxy,
        this._clientEngineType = Do(e.generator);
      let o = {
          rootEnvPath: e.relativeEnvPaths.rootEnvPath &&
            Vr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath: e.relativeEnvPaths.schemaEnvPath &&
            Vr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        i = !1;
      try {
        let y = n != null ? n : {},
          A = (a = y.__internal) != null ? a : {},
          S = A.debug === !0;
        S && ut.enable("prisma:client"), A.hooks && (this._hooks = A.hooks);
        let T = Vr.default.resolve(e.dirname, e.relativePath);
        Fo.existsSync(T) || (T = e.dirname),
          ye("dirname", e.dirname),
          ye("relativePath", e.relativePath),
          ye("cwd", T);
        let _ = y.datasources || {},
          P = Object.entries(_).filter(([R, $]) => $ && $.url).map((
            [R, { url: $ }],
          ) => ({ name: R, url: $ })),
          O = hu([], P, (R) => R.name),
          F = A.engine || {};
        if (
          y.errorFormat
            ? this._errorFormat = y.errorFormat
            : b.env.NODE_ENV === "production"
            ? this._errorFormat = "minimal"
            : b.env.NO_COLOR
            ? this._errorFormat = "colorless"
            : this._errorFormat = "colorless",
            this._dmmf = new At(e.document),
            this._previewFeatures =
              (l = (c = e.generator) == null ? void 0 : c.previewFeatures) !=
                  null
                ? l
                : [],
            this._engineConfig = {
              cwd: T,
              dirname: e.dirname,
              enableDebugLogs: S,
              allowTriggerPanic: F.allowTriggerPanic,
              datamodelPath: Vr.default.join(
                e.dirname,
                (f = e.filename) != null ? f : "schema.prisma",
              ),
              prismaPath: (p = F.binaryPath) != null ? p : void 0,
              engineEndpoint: F.endpoint,
              datasources: O,
              generator: e.generator,
              showColors: this._errorFormat === "pretty",
              logLevel: y.log && du(y.log),
              logQueries: y.log && Boolean(
                typeof y.log == "string"
                  ? y.log === "query"
                  : y.log.find((R) =>
                    typeof R == "string" ? R === "query" : R.level === "query"
                  ),
              ),
              env: (v = (w = i == null ? void 0 : i.parsed) != null
                  ? w
                  : (h = e.injectableEdgeEnv) == null
                  ? void 0
                  : h.parsed) != null
                ? v
                : {},
              flags: [],
              clientVersion: e.clientVersion,
              previewFeatures: Bo(this._previewFeatures),
              activeProvider: e.activeProvider,
              inlineSchema: e.inlineSchema,
              inlineDatasources: e.inlineDatasources,
              inlineSchemaHash: e.inlineSchemaHash,
            },
            ye(`clientVersion: ${e.clientVersion}`),
            ye(`clientEngineType: ${this._clientEngineType}`),
            this._engine = this.getEngine(),
            this._getActiveProvider(),
            this._fetcher = new qr(this, this._hooks),
            y.log
        ) {
          for (let R of y.log) {
            let $ = typeof R == "string"
              ? R
              : R.emit === "stdout"
              ? R.level
              : null;
            $ && this.$on($, (Q) => {
              var te;
              Zt.log(
                `${(te = Zt.tags[$]) != null ? te : ""}`,
                Q.message || Q.query,
              );
            });
          }
        }
        this._metrics = new vt(this._engine);
      } catch (y) {
        throw y.clientVersion = this._clientVersion, y;
      }
      return pu(this);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    getEngine() {
      if (this._dataProxy === !0) return new Yt(this._engineConfig);
      if (this._clientEngineType === "library") return !1;
      if (this._clientEngineType === "binary") return !1;
      throw new Oe(
        "Invalid client engine type, please use `library` or `binary`",
      );
    }
    $use(n, o) {
      if (typeof n == "function") this._middlewares.query.use(n);
      else if (n === "all") this._middlewares.query.use(o);
      else if (n === "engine") this._middlewares.engine.use(o);
      else throw new Error(`Invalid middleware ${n}`);
    }
    $on(n, o) {
      n === "beforeExit"
        ? this._engine.on("beforeExit", o)
        : this._engine.on(n, (i) => {
          var a, c, l, f;
          let s = i.fields;
          return o(
            n === "query"
              ? {
                timestamp: i.timestamp,
                query: (a = s == null ? void 0 : s.query) != null ? a : i.query,
                params: (c = s == null ? void 0 : s.params) != null
                  ? c
                  : i.params,
                duration: (l = s == null ? void 0 : s.duration_ms) != null
                  ? l
                  : i.duration,
                target: i.target,
              }
              : {
                timestamp: i.timestamp,
                message: (f = s == null ? void 0 : s.message) != null
                  ? f
                  : i.message,
                target: i.target,
              },
          );
        });
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw n.clientVersion = this._clientVersion, n;
      }
    }
    async _runDisconnect() {
      await this._engine.stop(),
        delete this._connectionPromise,
        this._engine = this.getEngine(),
        delete this._disconnectionPromise,
        delete this._getConfigPromise;
    }
    $disconnect() {
      try {
        return this._engine.stop();
      } catch (n) {
        throw n.clientVersion = this._clientVersion, n;
      }
    }
    async _getActiveProvider() {
      try {
        let n = await this._engine.getConfig();
        this._activeProvider = n.datasources[0].activeProvider;
      } catch (n) {}
    }
    $executeRawInternal(n, o, i, s, ...a) {
      let c = "", l;
      if (typeof s == "string") {
        c = s,
          l = { values: $e(a || []), __prismaRawParamaters__: !0 },
          gi(c, a, "prisma.$executeRawUnsafe(<SQL>, [...values])");
      } else if (nc(s)) {
        switch (this._activeProvider) {
          case "sqlite":
          case "mysql": {
            let p = nr.sqltag(s, ...a);
            c = p.sql,
              l = { values: $e(p.values), __prismaRawParamaters__: !0 };
            break;
          }
          case "cockroachdb":
          case "postgresql": {
            let p = nr.sqltag(s, ...a);
            c = p.text,
              gi(c, p.values, "prisma.$executeRaw`<SQL>`"),
              l = { values: $e(p.values), __prismaRawParamaters__: !0 };
            break;
          }
          case "sqlserver": {
            c = Ur(s), l = { values: $e(a), __prismaRawParamaters__: !0 };
            break;
          }
          default:
            throw new Error(
              `The ${this._activeProvider} provider does not support $executeRaw`,
            );
        }
      } else {
        switch (this._activeProvider) {
          case "sqlite":
          case "mysql":
            c = s.sql;
            break;
          case "cockroachdb":
          case "postgresql":
            c = s.text, gi(c, s.values, "prisma.$executeRaw(sql`<SQL>`)");
            break;
          case "sqlserver":
            c = Ur(s.strings);
            break;
          default:
            throw new Error(
              `The ${this._activeProvider} provider does not support $executeRaw`,
            );
        }
        l = { values: $e(s.values), __prismaRawParamaters__: !0 };
      }
      l != null && l.values
        ? ye(`prisma.$executeRaw(${c}, ${l.values})`)
        : ye(`prisma.$executeRaw(${c})`);
      let f = { query: c, parameters: l };
      return ye("Prisma Client call:"),
        this._request({
          args: f,
          clientMethod: "$executeRaw",
          dataPath: [],
          action: "executeRaw",
          callsite: Ye(this._errorFormat),
          runInTransaction: !!n,
          transactionId: n,
          otelCtx: i,
          lock: o,
        });
    }
    $executeRaw(n, ...o) {
      return mt((i, s, a) => {
        if (n.raw || n.sql) return this.$executeRawInternal(i, s, a, n, ...o);
        throw new Oe(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
        );
      });
    }
    $executeRawUnsafe(n, ...o) {
      return mt((i, s, a) => this.$executeRawInternal(i, s, a, n, ...o));
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== "mongodb") {
        throw new Oe(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
        );
      }
      return mt((o, i, s) =>
        this._request({
          args: { command: n },
          clientMethod: "$runCommandRaw",
          dataPath: [],
          action: "runCommandRaw",
          callsite: Ye(this._errorFormat),
          runInTransaction: !!o,
          transactionId: o,
          otelCtx: s,
          lock: i,
        })
      );
    }
    $queryRawInternal(n, o, i, s, ...a) {
      let c = "", l;
      if (typeof s == "string") {
        c = s, l = { values: $e(a || []), __prismaRawParamaters__: !0 };
      } else if (nc(s)) {
        switch (this._activeProvider) {
          case "sqlite":
          case "mysql": {
            let p = nr.sqltag(s, ...a);
            c = p.sql,
              l = { values: $e(p.values), __prismaRawParamaters__: !0 };
            break;
          }
          case "cockroachdb":
          case "postgresql": {
            let p = nr.sqltag(s, ...a);
            c = p.text,
              l = { values: $e(p.values), __prismaRawParamaters__: !0 };
            break;
          }
          case "sqlserver": {
            let p = nr.sqltag(s, ...a);
            c = Ur(p.strings),
              l = { values: $e(p.values), __prismaRawParamaters__: !0 };
            break;
          }
          default:
            throw new Error(
              `The ${this._activeProvider} provider does not support $queryRaw`,
            );
        }
      } else {
        switch (this._activeProvider) {
          case "sqlite":
          case "mysql":
            c = s.sql;
            break;
          case "cockroachdb":
          case "postgresql":
            c = s.text;
            break;
          case "sqlserver":
            c = Ur(s.strings);
            break;
          default:
            throw new Error(
              `The ${this._activeProvider} provider does not support $queryRaw`,
            );
        }
        l = { values: $e(s.values), __prismaRawParamaters__: !0 };
      }
      l != null && l.values
        ? ye(`prisma.queryRaw(${c}, ${l.values})`)
        : ye(`prisma.queryRaw(${c})`);
      let f = { query: c, parameters: l };
      return ye("Prisma Client call:"),
        this._request({
          args: f,
          clientMethod: "$queryRaw",
          dataPath: [],
          action: "queryRaw",
          callsite: Ye(this._errorFormat),
          runInTransaction: !!n,
          transactionId: n,
          otelCtx: i,
          lock: o,
        }).then(Ju);
    }
    $queryRaw(n, ...o) {
      return mt((i, s, a) => {
        if (n.raw || n.sql) return this.$queryRawInternal(i, s, a, n, ...o);
        throw new Oe(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
        );
      });
    }
    $queryRawUnsafe(n, ...o) {
      return mt((i, s, a) => this.$queryRawInternal(i, s, a, n, ...o));
    }
    __internal_triggerPanic(n) {
      if (!this._engineConfig.allowTriggerPanic) {
        throw new Error(
          `In order to use .__internal_triggerPanic(), please enable it like so:
new PrismaClient({
  __internal: {
    engine: {
      allowTriggerPanic: true
    }
  }
})`,
        );
      }
      let o = n ? { "X-DEBUG-FATAL": "1" } : { "X-DEBUG-NON-FATAL": "1" };
      return this._request({
        action: "queryRaw",
        args: { query: "SELECT 1", parameters: void 0 },
        clientMethod: "queryRaw",
        dataPath: [],
        runInTransaction: !1,
        headers: o,
        callsite: Ye(this._errorFormat),
      });
    }
    _transactionWithArray(n) {
      let o = this._transactionId++,
        i = gu(n.length),
        s = n.map((a) => {
          var c;
          if (
            (a == null ? void 0 : a[Symbol.toStringTag]) !== "PrismaPromise"
          ) {
            throw new Error(
              "All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.",
            );
          }
          return (c = a.requestTransaction) == null ? void 0 : c.call(a, o, i);
        });
      return Promise.all(s);
    }
    async _transactionWithCallback(n, o) {
      let i = await this._engine.transaction("start", o), s;
      try {
        s = await n(di(this, i.id)),
          await this._engine.transaction("commit", i);
      } catch (a) {
        throw await this._engine.transaction("rollback", i).catch(() => {}),
          a.clientVersion = this._clientVersion,
          a;
      }
      return s;
    }
    async $transaction(n, o) {
      return this._hasPreviewFlag("interactiveTransactions")
        ? typeof n == "function"
          ? this._transactionWithCallback(n, o)
          : this._transactionWithArray(n)
        : this._transactionWithArray(n);
    }
    async _request(n) {
      this._hasPreviewFlag("tracing") || delete n.otelCtx;
      try {
        let o = {
            args: n.args,
            dataPath: n.dataPath,
            runInTransaction: n.runInTransaction,
            action: n.action,
            model: n.model,
          },
          i = -1,
          s = u((a) => {
            let c = this._middlewares.query.get(++i);
            if (c) return c(a, s);
            let l = { ...n, ...a };
            return this._executeRequest(l);
          }, "consumer");
        return await Hu("request", n.otelCtx, () => s(o));
      } catch (o) {
        throw o.clientVersion = this._clientVersion, o;
      }
    }
    async _executeRequest(
      {
        args: n,
        clientMethod: o,
        dataPath: i,
        callsite: s,
        runInTransaction: a,
        action: c,
        model: l,
        headers: f,
        transactionId: p,
        otelCtx: h,
        lock: w,
        unpacker: v,
      },
    ) {
      let y, A = wd[c];
      (c === "executeRaw" || c === "queryRaw" || c === "runCommandRaw") &&
        (y = c);
      let S;
      if (l !== void 0) {
        if (S = this._dmmf.mappingsMap[l], S === void 0) {
          throw new Error(`Could not find mapping for model ${l}`);
        }
        y = S[c === "count" ? "aggregate" : c];
      }
      if (A !== "query" && A !== "mutation") {
        throw new Error(`Invalid operation ${A} for action ${c}`);
      }
      let T = this._dmmf.rootFieldMap[y];
      if (T === void 0) {
        throw new Error(
          `Could not find rootField ${y} for action ${c} for model ${l} on rootType ${A}`,
        );
      }
      let { isList: _ } = T.outputType,
        P = xt(T.outputType.type),
        O = pi(c, P, n, this._rejectOnNotFound),
        F = Vn({ dmmf: this._dmmf, rootField: y, rootTypeName: A, select: n });
      if (
        F.validate(n, !1, o, this._errorFormat, s),
          F = F,
          ut.enabled("prisma:client")
      ) {
        let R = String(F);
        ye("Prisma Client call:"),
          ye(
            `prisma.${o}(${
              Dn({ ast: n, keyPaths: [], valuePaths: [], missingItems: [] })
            })`,
          ),
          ye("Generated request:"),
          ye(
            R + `
`,
          );
      }
      return f = Wu(f, h),
        await w,
        this._fetcher.request({
          document: F,
          clientMethod: o,
          typeName: P,
          dataPath: i,
          rejectOnNotFound: O,
          isList: _,
          rootField: y,
          callsite: s,
          showColors: this._errorFormat === "pretty",
          args: n,
          engineHook: this._middlewares.engine.get(0),
          runInTransaction: a,
          headers: f,
          transactionId: p,
          unpacker: v,
        });
    }
    get $metrics() {
      if (!this._hasPreviewFlag("metrics")) {
        throw new Oe(
          "`metrics` preview feature must be enabled in order to access metrics API",
        );
      }
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      var o;
      return !!((o = this._engineConfig.previewFeatures) != null &&
        o.includes(n));
    }
  }
  return u(t, "PrismaClient"), t;
}
u(oc, "getPrismaClient");
var Ed = ["$connect", "$disconnect", "$on", "$transaction", "$use"];
function di(e, t) {
  return typeof e != "object" ? e : new Proxy(e, {
    get: (r, n) => {
      if (!Ed.includes(n)) {
        return n === vd
          ? t
          : typeof r[n] == "function"
          ? (...o) =>
            n === "then"
              ? r[n](o[0], o[1], t)
              : n === "catch" || n === "finally"
              ? r[n](o[0], t)
              : di(r[n](...o), t)
          : di(r[n], t);
      }
    },
  });
}
u(di, "transactionProxy");
m();
g();
d();
m();
g();
d();
var Je = Z(Lo()), xd = ic.decompressFromBase64;
0 &&
  (module.exports = {
    DMMF,
    DMMFClass,
    Decimal,
    Engine,
    MetricsClient,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    Sql,
    decompressFromBase64,
    empty,
    findSync,
    getPrismaClient,
    join,
    makeDocument,
    raw,
    sqltag,
    transformDocument,
    unpack,
    warnEnvConflicts,
  });
