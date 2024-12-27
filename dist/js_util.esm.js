function i(t) {
  return typeof t == "object" ? [t] : document.querySelectorAll(t);
}
function l(t) {
  const e = i(t);
  for (let s = 0; s < e.length; s++)
    e[s].style.display = "none";
}
function c(t) {
  const e = i(t);
  for (let s = 0; s < e.length; s++)
    e[s].style.display = "block";
}
function f(t, e = null) {
  i(t).forEach((o) => {
    e.forEach((n) => {
      for (const r in n) {
        const a = n[r];
        o.style[r] = typeof a == "number" ? `${a}px` : a;
      }
    });
  });
}
function g(t, e) {
  const s = i(t), o = e.split(" ");
  for (let n = 0; n < s.length; n++)
    o.forEach((r) => {
      s[n].classList ? s[n].classList.add(r) : s[n].className += " " + r;
    });
}
function d(t, e) {
  const s = i(t), o = e.split(" ");
  for (let n = 0; n < s.length; n++)
    o.forEach((r) => {
      s[n].classList ? s[n].classList.remove(r) : s[n].className += " " + r;
    });
}
function h(t, e) {
  const s = i(t), o = e.split(" ");
  for (let n = 0; n < s.length; n++)
    o.forEach((r) => {
      s[n].classList.toggle(r);
    });
}
function m(t, e, s = "class") {
  const o = i(t);
  let n = !1;
  return typeof e == "string" && s === "class" && e.includes(" ") && (e = e.split(" ")), o.forEach((r) => {
    if (!n)
      if (Array.isArray(e))
        if (s === "class") {
          const a = Array.from(r.classList);
          n = e.every((u) => a.includes(u));
        } else {
          const a = r.getAttribute(s);
          n = e.some((u) => u === a);
        }
      else
        s === "class" ? n = r.classList.contains(e) : n = r.getAttribute(s) === e;
  }), n;
}
function p(t, e) {
  const s = i(t)[0];
  return s ? s.getAttribute(e) : null;
}
function A(t, e, s) {
  i(t).forEach((n) => {
    n.setAttribute(e, s);
  });
}
function w(t) {
  const e = t.toLowerCase();
  if (e === "true" || e === "1")
    return !0;
  if (e === "false" || e === "0")
    return !1;
  throw new Error('Invalid input. Only "true", "false", "1", or "0" are allowed.');
}
function y(t) {
  const e = parseFloat(t);
  if (isNaN(e))
    throw new Error("Invalid input. Cannot convert to a number.");
  return e;
}
function _(t) {
  switch (t) {
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
function v() {
  const t = navigator.userAgent;
  return t.indexOf("Chrome") !== -1 && !t.match(/edg/i) && t.indexOf("CriOS") < 0 ? "chrome" : /^((?!chrome|android).)*safari/i.test(t) && t.indexOf("CriOS") < 0 ? "safari" : typeof InstallTrigger < "u" ? "firefox" : document.documentMode ? "ie" : t.match(/edg/i) || t.indexOf("Edge/") !== -1 ? "edge" : null;
}
function x() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function b() {
  const t = navigator.userAgent || navigator.vendor || window.opera, e = [];
  return /android/i.test(t) && e.push("android"), /windows/i.test(t) && e.push("windows"), /mac/i.test(t) && (e.push("apple"), /iphone|ipod/i.test(t) ? e.push("iphone") : /ipad/i.test(t) ? e.push("ipad") : e.push("mac")), e.length > 0 ? e : ["unknown"];
}
async function C(t = 100) {
  return new Promise((e, s) => {
    isNaN(t) ? s(new Error("is not a number")) : setTimeout(e, t);
  });
}
export {
  g as u_addClass,
  _ as u_browser,
  p as u_getAttr,
  v as u_get_browser,
  b as u_get_system,
  l as u_hide,
  x as u_is_touch,
  m as u_matches,
  d as u_removeClass,
  A as u_setAttr,
  c as u_show,
  w as u_stringToBoolean,
  y as u_stringToNumber,
  f as u_style,
  C as u_take_your_time,
  h as u_toggleClass
};
