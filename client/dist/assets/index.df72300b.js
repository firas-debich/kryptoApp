import { j as c, R as l, a as d } from "./vendor.099402a0.js";
const u = function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const o of t.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = s(e);
    fetch(e.href, t);
  }
};
u();
const n = c.exports.jsx,
  f = () => n("div", { children: "Hello world" });
l.render(
  n(d.StrictMode, { children: n(f, {}) }),
  document.getElementById("root")
);
