function a(s) {
  return typeof s == "object" ? [s] : document.querySelectorAll(s);
}
function c(s) {
  const e = a(s);
  for (let t = 0; t < e.length; t++)
    e[t].style.display = "none";
}
function i(s) {
  const e = a(s);
  for (let t = 0; t < e.length; t++)
    e[t].style.display = "block";
}
function f(s, e = null) {
  a(s).forEach((o) => {
    e.forEach((n) => {
      for (const r in n) {
        const u = n[r];
        o.style[r] = typeof u == "number" ? `${u}px` : u;
      }
    });
  });
}
function g(s, e) {
  const t = a(s), o = e.split(" ");
  for (let n = 0; n < t.length; n++)
    o.forEach((r) => {
      t[n].classList ? t[n].classList.add(r) : t[n].className += " " + r;
    });
}
function d(s, e) {
  const t = a(s), o = e.split(" ");
  for (let n = 0; n < t.length; n++)
    o.forEach((r) => {
      t[n].classList ? t[n].classList.remove(r) : t[n].className += " " + r;
    });
}
function m(s, e) {
  const t = a(s), o = e.split(" ");
  for (let n = 0; n < t.length; n++)
    o.forEach((r) => {
      t[n].classList.toggle(r);
    });
}
function h(s, e, t = "class") {
  const o = a(s);
  let n = !1;
  return typeof e == "string" && t === "class" && e.includes(" ") && (e = e.split(" ")), o.forEach((r) => {
    if (!n)
      if (Array.isArray(e))
        if (t === "class") {
          const u = Array.from(r.classList);
          n = e.every((l) => u.includes(l));
        } else {
          const u = r.getAttribute(t);
          n = e.some((l) => l === u);
        }
      else
        t === "class" ? n = r.classList.contains(e) : n = r.getAttribute(t) === e;
  }), n;
}
function A(s, e) {
  const t = a(s)[0];
  return t ? t.getAttribute(e) : null;
}
function p(s, e, t) {
  a(s).forEach((n) => {
    n.setAttribute(e, t);
  });
}
function v(s) {
  const e = s.toLowerCase();
  if (e === "true" || e === "1")
    return !0;
  if (e === "false" || e === "0")
    return !1;
  throw new Error('Invalid input. Only "true", "false", "1", or "0" are allowed.');
}
function y(s) {
  const e = parseFloat(s);
  if (isNaN(e))
    throw new Error("Invalid input. Cannot convert to a number.");
  return e;
}
function w(s) {
  switch (s) {
    case "chrome":
      return navigator.userAgent.indexOf("Chrome") != -1 && !navigator.userAgent.match(/edg/i) || navigator.userAgent.indexOf("CriOS") >= 0;
    case "safari":
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !(navigator.userAgent.indexOf("CriOS") >= 0);
    case "firefox":
      return typeof InstallTrigger < "u";
    case "ie":
      return (
        /*@cc_on!@*/
        !!document.documentMode
      );
    case "edge":
      return !!(navigator.userAgent.match(/edg/i) || navigator.userAgent.indexOf("Edge/") != -1);
    default:
      return null;
  }
}
function _(s) {
  var e = navigator.userAgent || navigator.vendor || window.opera;
  switch (s) {
    case "touch":
      return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    case "android":
      return /android/i.test(e);
    case "ios":
      return typeof navigator.standalone == "boolean";
    default:
      return !0;
  }
}
async function b(s = 100) {
  return new Promise((e, t) => {
    isNaN(s) ? t(new Error("is not a number")) : setTimeout(e, s);
  });
}
export {
  g as u_addClass,
  w as u_browser,
  A as u_getAttr,
  c as u_hide,
  h as u_matches,
  d as u_removeClass,
  p as u_setAttr,
  i as u_show,
  v as u_stringToBoolean,
  y as u_stringToNumber,
  f as u_style,
  _ as u_system,
  b as u_take_your_time,
  m as u_toggleClass
};
