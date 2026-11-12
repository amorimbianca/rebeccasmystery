(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

  var _windowExists = function () { return typeof window !== 'undefined'; };
  var gsap = _windowExists() ? window.gsap : null;

  var _getLength = function (target) {
    if (target.getTotalLength) {
      try {
        return target.getTotalLength();
      } catch (e) {
        // Fallback below
      }
    }
    if (target.getBBox) {
      try {
        var box = target.getBBox();
        return (box.width + box.height) * 2;
      } catch (e) {
        // Fallback
      }
    }
    return 1000;
  };

  var _parseDraw = function (val, length) {
    if (val === true || val === "true") {
      return { start: 0, end: length };
    }
    if (val === false || val === "false" || val === 0) {
      return { start: 0, end: 0 };
    }
    var str = String(val).trim();
    var parts = str.split(/\s+/);
    var parseVal = function (v) {
      if (v.indexOf("%") !== -1) {
        return (parseFloat(v) / 100) * length;
      }
      return parseFloat(v);
    };

    if (parts.length === 1) {
      return { start: 0, end: parseVal(parts[0]) };
    }
    return { start: parseVal(parts[0]), end: parseVal(parts[1]) };
  };

  var DrawSVGPlugin = {
    version: "3.12.5",
    name: "drawSVG",
    rawVars: 1,
    register: function (core) {
      gsap = core;
    },
    init: function (target, val) {
      if (!target.tagName || !target.style) {
        return false;
      }

      var length = _getLength(target);
      var parsed = _parseDraw(val, length);

      var curDash = target.getAttribute("data-draw-dash");
      var curOffset = target.getAttribute("data-draw-offset");

      var startDash = curDash !== null ? parseFloat(curDash) : 0;
      var startOffset = curOffset !== null ? parseFloat(curOffset) : 0;

      var targetDash = Math.max(0, parsed.end - parsed.start);
      var targetOffset = -parsed.start;

      target.style.strokeDasharray = length + " " + length;
      
      this._props = ["drawSVG"];
      this.target = target;
      this.length = length;
      this.data = {
        target: target,
        length: length,
        curDash: startDash,
        targetDash: targetDash,
        curOffset: startOffset,
        targetOffset: targetOffset
      };

      this.add(this.data, "curDash", startDash, targetDash);
      this.add(this.data, "curOffset", startOffset, targetOffset);
      return true;
    },
    render: function (ratio, data) {
      var pt = data._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      var t = data.data.target;
      var dash = data.data.curDash;
      var offset = data.data.curOffset;
      var len = data.data.length;

      t.style.strokeDasharray = dash + " " + (len * 2);
      t.style.strokeDashoffset = offset;
      t.setAttribute("data-draw-dash", dash);
      t.setAttribute("data-draw-offset", offset);
    }
  };

  if (gsap && gsap.registerPlugin) {
    gsap.registerPlugin(DrawSVGPlugin);
  }

  exports.DrawSVGPlugin = DrawSVGPlugin;
  exports.default = DrawSVGPlugin;

})));
