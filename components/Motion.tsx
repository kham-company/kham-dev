// @ts-nocheck
"use client";
import { useEffect } from "react";

function initMotion() {
  var d = document, root = d.documentElement;
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var bar = d.createElement("div"); bar.className = "progress"; d.body.appendChild(bar);
  var hdr = d.querySelector("header");
  var tb = d.createElement("button"); tb.className = "totop"; tb.type = "button"; tb.setAttribute("aria-label", "Kembali ke atas"); tb.textContent = "\u2191";
  tb.onclick = function () { scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); }; d.body.appendChild(tb);
  function onScroll() {
    var h = root.scrollHeight - innerHeight;
    bar.style.transform = "scaleX(" + (h > 0 ? scrollY / h : 0) + ")";
    if (hdr) hdr.classList.toggle("sc", scrollY > 8);
    tb.classList.toggle("show", scrollY > 700);
    if (!reduce) root.style.setProperty("--sy", scrollY);
  }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  function onMove(e) {
    var t = e.target, st = t.closest && t.closest(".stage");
    if (st && e.pointerType === "mouse" && !reduce) { var q = st.getBoundingClientRect(); st.style.setProperty("--ry", ((e.clientX - q.left) / q.width - .5) * 10 + "deg"); st.style.setProperty("--rx", (.5 - (e.clientY - q.top) / q.height) * 8 + "deg"); }
    var hr = t.closest && t.closest(".hero");
    if (hr && !reduce) { var hq = hr.getBoundingClientRect(); hr.style.setProperty("--mx", (e.clientX - hq.left) + "px"); hr.style.setProperty("--my", (e.clientY - hq.top) + "px"); }
    var bt = t.closest && t.closest(".btn");
    if (bt && e.pointerType === "mouse" && !reduce) { var z = bt.getBoundingClientRect(); bt.style.setProperty("--tx", (e.clientX - z.left - z.width / 2) * .15 + "px"); bt.style.setProperty("--ty", (e.clientY - z.top - z.height / 2) * .25 + "px"); }
    var c = t.closest && t.closest(".card"); if (!c) return;
    var r = c.getBoundingClientRect();
    c.style.setProperty("--mx", (e.clientX - r.left) + "px");
    c.style.setProperty("--my", (e.clientY - r.top) + "px");
  }
  d.addEventListener("pointermove", onMove);
  function onOut(e) {
    var t = e.target, b = t.closest && t.closest(".btn");
    if (b) { b.style.removeProperty("--tx"); b.style.removeProperty("--ty"); }
    var s = t.closest && t.closest(".stage");
    if (s && !(e.relatedTarget && s.contains(e.relatedTarget))) { s.style.removeProperty("--rx"); s.style.removeProperty("--ry"); }
  }
  d.addEventListener("pointerout", onOut);
  var links = [].slice.call(d.querySelectorAll("nav a"));
  var bg = d.querySelector(".burger");
  if (bg && hdr) {
    bg.onclick = function () { bg.setAttribute("aria-expanded", hdr.classList.toggle("open")); };
    links.forEach(function (a) { a.addEventListener("click", function () { hdr.classList.remove("open"); bg.setAttribute("aria-expanded", "false"); }); });
  }
  var so = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (en.isIntersecting) links.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id); });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  d.querySelectorAll("main section[id]").forEach(function (s) { so.observe(s); });
  var ro = null;
  if (!reduce) {
    root.classList.add("js");
    var h1 = d.querySelector(".hero h1");
    if (h1 && !h1.dataset.s) {
      h1.dataset.s = "1"; var t = h1.textContent.trim(); h1.setAttribute("aria-label", t);
      h1.innerHTML = t.split(/\s+/).map(function (w, i) {
        return '<span class="w" aria-hidden="true"><span style="animation-delay:' + (120 + i * 55) + 'ms">' + w + "</span></span> ";
      }).join("");
    }
    var count = function (el) {
      var b = el.querySelector && el.querySelector("b"); if (!b || !el.matches(".stats>div")) return;
      var m = b.textContent.match(/^(\d+)(.*)$/); if (!m) return;
      var n = +m[1], suf = m[2], t0 = performance.now();
      (function step(t) {
        var p = Math.min((t - t0) / 900, 1), e = 1 - Math.pow(1 - p, 3);
        b.textContent = Math.round(n * e) + suf; if (p < 1) requestAnimationFrame(step);
      })(t0);
    };
    ro = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target; ro.unobserve(el); el.classList.add("in"); count(el);
        setTimeout(function () { el.classList.remove("rv", "in"); }, 1600);
      });
    }, { threshold: 0.12 });
    d.querySelectorAll("section h2,.sub,.card,.steps li,details,.stats>div,.opt,.links a,.contact form,.marq,.tile,.node,.dash").forEach(function (el) {
      var i = [].indexOf.call(el.parentElement.children, el);
      el.style.setProperty("--d", Math.min(i, 5) * 70 + "ms"); el.classList.add("rv"); ro.observe(el);
    });
  }
  return function () {
    removeEventListener("scroll", onScroll); d.removeEventListener("pointermove", onMove); d.removeEventListener("pointerout", onOut); tb.remove();
    so.disconnect(); if (ro) ro.disconnect(); bar.remove();
  };
}

export default function Motion() {
  useEffect(() => initMotion(), []);
  return null;
}
