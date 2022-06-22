! function(e) {
	"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
}(function(e) {
	"use strict";

	function t(t) {
		return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = u), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = e.extend({}, e.fn.swipe.defaults, t), this.each(function() {
			var n = e(this),
				i = n.data(L);
			i || (i = new a(this, t), n.data(L, i))
		})
	}

	function a(t, a) {
		function n(t) {
			if(!(de() || e(t.target).closest(a.excludedElements, ze).length > 0)) {
				var n = t.originalEvent ? t.originalEvent : t;
				if(!n.pointerType || "mouse" != n.pointerType || 0 != a.fallbackToMouseEvents) {
					var i, r = n.touches,
						o = r ? r[0] : n;
					return Ze = M, r ? Xe = r.length : a.preventDefaultEvents !== !1 && t.preventDefault(), Ne = 0, Ae = null, De = null, Qe = null, Re = 0, Ie = 0, He = 0, Ue = 1, Be = 0, _e = pe(), le(), ce(0, o), !r || Xe === a.fingers || a.fingers === x || Q() ? (We = Ee(), 2 == Xe && (ce(1, r[1]), Ie = He = xe(Ye[0].start, Ye[1].start)), (a.swipeStatus || a.pinchStatus) && (i = N(n, Ze))) : i = !1, i === !1 ? (Ze = k, N(n, Ze), i) : (a.hold && (tt = setTimeout(e.proxy(function() {
						ze.trigger("hold", [n.target]), a.hold && (i = a.hold.call(ze, n, n.target))
					}, this), a.longTapThreshold)), ue(!0), null)
				}
			}
		}

		function C(e) {
			var t = e.originalEvent ? e.originalEvent : e;
			if(Ze !== T && Ze !== k && !se()) {
				var n, i = t.touches,
					r = i ? i[0] : t,
					o = ge(r);
				if($e = Ee(), i && (Xe = i.length), a.hold && clearTimeout(tt), Ze = y, 2 == Xe && (0 == Ie ? (ce(1, i[1]), Ie = He = xe(Ye[0].start, Ye[1].start)) : (ge(i[1]), He = xe(Ye[0].end, Ye[1].end), Qe = Me(Ye[0].end, Ye[1].end)), Ue = we(Ie, He), Be = Math.abs(Ie - He)), Xe === a.fingers || a.fingers === x || !i || Q()) {
					if(Ae = ke(o.start, o.end), De = ke(o.last, o.end), U(e, De), Ne = ye(o.start, o.end), Re = be(), he(Ae, Ne), n = N(t, Ze), !a.triggerOnTouchEnd || a.triggerOnTouchLeave) {
						var l = !0;
						if(a.triggerOnTouchLeave) {
							var s = Se(this);
							l = Ve(o.end, s)
						}!a.triggerOnTouchEnd && l ? Ze = j(y) : a.triggerOnTouchLeave && !l && (Ze = j(T)), Ze != k && Ze != T || N(t, Ze)
					}
				} else Ze = k, N(t, Ze);
				n === !1 && (Ze = k, N(t, Ze))
			}
		}

		function O(e) {
			var t = e.originalEvent ? e.originalEvent : e,
				n = t.touches;
			if(n) {
				if(n.length && !se()) return oe(t), !0;
				if(n.length && se()) return !0
			}
			return se() && (Xe = Je), $e = Ee(), Re = be(), R() || !D() ? (Ze = k, N(t, Ze)) : a.triggerOnTouchEnd || a.triggerOnTouchEnd === !1 && Ze === y ? (a.preventDefaultEvents !== !1 && e.cancelable !== !1 && e.preventDefault(), Ze = T, N(t, Ze)) : !a.triggerOnTouchEnd && $() ? (Ze = T, A(t, Ze, h)) : Ze === y && (Ze = k, N(t, Ze)), ue(!1), null
		}

		function F() {
			Xe = 0, $e = 0, We = 0, Ie = 0, He = 0, Ue = 1, le(), ue(!1)
		}

		function q(e) {
			var t = e.originalEvent ? e.originalEvent : e;
			a.triggerOnTouchLeave && (Ze = j(T), N(t, Ze))
		}

		function P() {
			ze.unbind(Oe, n), ze.unbind(je, F), ze.unbind(Fe, C), ze.unbind(qe, O), Pe && ze.unbind(Pe, q), ue(!1)
		}

		function j(e) {
			var t = e,
				n = H(),
				i = D(),
				r = R();
			return !n || r ? t = k : !i || e != y || a.triggerOnTouchEnd && !a.triggerOnTouchLeave ? !i && e == T && a.triggerOnTouchLeave && (t = k) : t = T, t
		}

		function N(e, t) {
			var a, n = e.touches;
			return(X() || Z()) && (a = A(e, t, g)), (_() || Q()) && a !== !1 && (a = A(e, t, v)), ie() && a !== !1 ? a = A(e, t, m) : re() && a !== !1 ? a = A(e, t, p) : ne() && a !== !1 && (a = A(e, t, h)), t === k && F(e), t === T && (n ? n.length || F(e) : F(e)), a
		}

		function A(t, n, u) {
			var c;
			if(u == g) {
				if(ze.trigger("swipeStatus", [n, Ae || null, Ne || 0, Re || 0, Xe, Ye, De]), a.swipeStatus && (c = a.swipeStatus.call(ze, t, n, Ae || null, Ne || 0, Re || 0, Xe, Ye, De), c === !1)) return !1;
				if(n == T && z()) {
					if(clearTimeout(et), clearTimeout(tt), ze.trigger("swipe", [Ae, Ne, Re, Xe, Ye, De]), a.swipe && (c = a.swipe.call(ze, t, Ae, Ne, Re, Xe, Ye, De), c === !1)) return !1;
					switch(Ae) {
						case i:
							ze.trigger("swipeLeft", [Ae, Ne, Re, Xe, Ye, De]), a.swipeLeft && (c = a.swipeLeft.call(ze, t, Ae, Ne, Re, Xe, Ye, De));
							break;
						case r:
							ze.trigger("swipeRight", [Ae, Ne, Re, Xe, Ye, De]), a.swipeRight && (c = a.swipeRight.call(ze, t, Ae, Ne, Re, Xe, Ye, De));
							break;
						case o:
							ze.trigger("swipeUp", [Ae, Ne, Re, Xe, Ye, De]), a.swipeUp && (c = a.swipeUp.call(ze, t, Ae, Ne, Re, Xe, Ye, De));
							break;
						case l:
							ze.trigger("swipeDown", [Ae, Ne, Re, Xe, Ye, De]), a.swipeDown && (c = a.swipeDown.call(ze, t, Ae, Ne, Re, Xe, Ye, De))
					}
				}
			}
			if(u == v) {
				if(ze.trigger("pinchStatus", [n, Qe || null, Be || 0, Re || 0, Xe, Ue, Ye]), a.pinchStatus && (c = a.pinchStatus.call(ze, t, n, Qe || null, Be || 0, Re || 0, Xe, Ue, Ye), c === !1)) return !1;
				if(n == T && B()) switch(Qe) {
					case s:
						ze.trigger("pinchIn", [Qe || null, Be || 0, Re || 0, Xe, Ue, Ye]), a.pinchIn && (c = a.pinchIn.call(ze, t, Qe || null, Be || 0, Re || 0, Xe, Ue, Ye));
						break;
					case d:
						ze.trigger("pinchOut", [Qe || null, Be || 0, Re || 0, Xe, Ue, Ye]), a.pinchOut && (c = a.pinchOut.call(ze, t, Qe || null, Be || 0, Re || 0, Xe, Ue, Ye))
				}
			}
			return u == h ? n !== k && n !== T || (clearTimeout(et), clearTimeout(tt), G() && !ee() ? (Ke = Ee(), et = setTimeout(e.proxy(function() {
				Ke = null, ze.trigger("tap", [t.target]), a.tap && (c = a.tap.call(ze, t, t.target))
			}, this), a.doubleTapThreshold)) : (Ke = null, ze.trigger("tap", [t.target]), a.tap && (c = a.tap.call(ze, t, t.target)))) : u == m ? n !== k && n !== T || (clearTimeout(et), clearTimeout(tt), Ke = null, ze.trigger("doubletap", [t.target]), a.doubleTap && (c = a.doubleTap.call(ze, t, t.target))) : u == p && (n !== k && n !== T || (clearTimeout(et), Ke = null, ze.trigger("longtap", [t.target]), a.longTap && (c = a.longTap.call(ze, t, t.target)))), c
		}

		function D() {
			var e = !0;
			return null !== a.threshold && (e = Ne >= a.threshold), e
		}

		function R() {
			var e = !1;
			return null !== a.cancelThreshold && null !== Ae && (e = me(Ae) - Ne >= a.cancelThreshold), e
		}

		function I() {
			return null === a.pinchThreshold || Be >= a.pinchThreshold
		}

		function H() {
			var e;
			return e = !(a.maxTimeThreshold && Re >= a.maxTimeThreshold)
		}

		function U(e, t) {
			if(a.preventDefaultEvents !== !1)
				if(a.allowPageScroll === u) e.preventDefault();
				else {
					var n = a.allowPageScroll === c;
					switch(t) {
						case i:
							(a.swipeLeft && n || !n && a.allowPageScroll != f) && e.preventDefault();
							break;
						case r:
							(a.swipeRight && n || !n && a.allowPageScroll != f) && e.preventDefault();
							break;
						case o:
							(a.swipeUp && n || !n && a.allowPageScroll != b) && e.preventDefault();
							break;
						case l:
							(a.swipeDown && n || !n && a.allowPageScroll != b) && e.preventDefault();
							break;
						case u:
					}
				}
		}

		function B() {
			var e = Y(),
				t = W(),
				a = I();
			return e && t && a
		}

		function Q() {
			return !!(a.pinchStatus || a.pinchIn || a.pinchOut)
		}

		function _() {
			return !(!B() || !Q())
		}

		function z() {
			var e = H(),
				t = D(),
				a = Y(),
				n = W(),
				i = R(),
				r = !i && n && a && t && e;
			return r
		}

		function Z() {
			return !!(a.swipe || a.swipeStatus || a.swipeLeft || a.swipeRight || a.swipeUp || a.swipeDown)
		}

		function X() {
			return !(!z() || !Z())
		}

		function Y() {
			return Xe === a.fingers || a.fingers === x || !E
		}

		function W() {
			return 0 !== Ye[0].end.x
		}

		function $() {
			return !!a.tap
		}

		function G() {
			return !!a.doubleTap
		}

		function J() {
			return !!a.longTap
		}

		function K() {
			if(null == Ke) return !1;
			var e = Ee();
			return G() && e - Ke <= a.doubleTapThreshold
		}

		function ee() {
			return K()
		}

		function te() {
			return(1 === Xe || !E) && (isNaN(Ne) || Ne < a.threshold)
		}

		function ae() {
			return Re > a.longTapThreshold && w > Ne
		}

		function ne() {
			return !(!te() || !$())
		}

		function ie() {
			return !(!K() || !G())
		}

		function re() {
			return !(!ae() || !J())
		}

		function oe(e) {
			Ge = Ee(), Je = e.touches.length + 1
		}

		function le() {
			Ge = 0, Je = 0
		}

		function se() {
			var e = !1;
			if(Ge) {
				var t = Ee() - Ge;
				t <= a.fingerReleaseThreshold && (e = !0)
			}
			return e
		}

		function de() {
			return !(ze.data(L + "_intouch") !== !0)
		}

		function ue(e) {
			ze && (e === !0 ? (ze.bind(Fe, C), ze.bind(qe, O), Pe && ze.bind(Pe, q)) : (ze.unbind(Fe, C, !1), ze.unbind(qe, O, !1), Pe && ze.unbind(Pe, q, !1)), ze.data(L + "_intouch", e === !0))
		}

		function ce(e, t) {
			var a = {
				start: {
					x: 0,
					y: 0
				},
				last: {
					x: 0,
					y: 0
				},
				end: {
					x: 0,
					y: 0
				}
			};
			return a.start.x = a.last.x = a.end.x = t.pageX || t.clientX, a.start.y = a.last.y = a.end.y = t.pageY || t.clientY, Ye[e] = a, a
		}

		function ge(e) {
			var t = void 0 !== e.identifier ? e.identifier : 0,
				a = ve(t);
			return null === a && (a = ce(t, e)), a.last.x = a.end.x, a.last.y = a.end.y, a.end.x = e.pageX || e.clientX, a.end.y = e.pageY || e.clientY, a
		}

		function ve(e) {
			return Ye[e] || null
		}

		function he(e, t) {
			e != u && (t = Math.max(t, me(e)), _e[e].distance = t)
		}

		function me(e) {
			return _e[e] ? _e[e].distance : void 0
		}

		function pe() {
			var e = {};
			return e[i] = fe(i), e[r] = fe(r), e[o] = fe(o), e[l] = fe(l), e
		}

		function fe(e) {
			return {
				direction: e,
				distance: 0
			}
		}

		function be() {
			return $e - We
		}

		function xe(e, t) {
			var a = Math.abs(e.x - t.x),
				n = Math.abs(e.y - t.y);
			return Math.round(Math.sqrt(a * a + n * n))
		}

		function we(e, t) {
			var a = t / e * 1;
			return a.toFixed(2)
		}

		function Me() {
			return 1 > Ue ? d : s
		}

		function ye(e, t) {
			return Math.round(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)))
		}

		function Te(e, t) {
			var a = e.x - t.x,
				n = t.y - e.y,
				i = Math.atan2(n, a),
				r = Math.round(180 * i / Math.PI);
			return 0 > r && (r = 360 - Math.abs(r)), r
		}

		function ke(e, t) {
			if(Le(e, t)) return u;
			var a = Te(e, t);
			return 45 >= a && a >= 0 ? i : 360 >= a && a >= 315 ? i : a >= 135 && 225 >= a ? r : a > 45 && 135 > a ? l : o
		}

		function Ee() {
			var e = new Date;
			return e.getTime()
		}

		function Se(t) {
			t = e(t);
			var a = t.offset(),
				n = {
					left: a.left,
					right: a.left + t.outerWidth(),
					top: a.top,
					bottom: a.top + t.outerHeight()
				};
			return n
		}

		function Ve(e, t) {
			return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
		}

		function Le(e, t) {
			return e.x == t.x && e.y == t.y
		}
		var a = e.extend({}, a),
			Ce = E || V || !a.fallbackToMouseEvents,
			Oe = Ce ? V ? S ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
			Fe = Ce ? V ? S ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
			qe = Ce ? V ? S ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
			Pe = Ce ? V ? "mouseleave" : null : "mouseleave",
			je = V ? S ? "MSPointerCancel" : "pointercancel" : "touchcancel",
			Ne = 0,
			Ae = null,
			De = null,
			Re = 0,
			Ie = 0,
			He = 0,
			Ue = 1,
			Be = 0,
			Qe = 0,
			_e = null,
			ze = e(t),
			Ze = "start",
			Xe = 0,
			Ye = {},
			We = 0,
			$e = 0,
			Ge = 0,
			Je = 0,
			Ke = 0,
			et = null,
			tt = null;
		try {
			ze.bind(Oe, n), ze.bind(je, F)
		} catch(at) {
			e.error("events not supported " + Oe + "," + je + " on jQuery.swipe")
		}
		this.enable = function() {
			return this.disable(), ze.bind(Oe, n), ze.bind(je, F), ze
		}, this.disable = function() {
			return P(), ze
		}, this.destroy = function() {
			P(), ze.data(L, null), ze = null
		}, this.option = function(t, n) {
			if("object" == typeof t) a = e.extend(a, t);
			else if(void 0 !== a[t]) {
				if(void 0 === n) return a[t];
				a[t] = n
			} else {
				if(!t) return a;
				e.error("Option " + t + " does not exist on jQuery.swipe.options")
			}
			return null
		}
	}
	var n = "1.6.18",
		i = "left",
		r = "right",
		o = "up",
		l = "down",
		s = "in",
		d = "out",
		u = "none",
		c = "auto",
		g = "swipe",
		v = "pinch",
		h = "tap",
		m = "doubletap",
		p = "longtap",
		f = "horizontal",
		b = "vertical",
		x = "all",
		w = 10,
		M = "start",
		y = "move",
		T = "end",
		k = "cancel",
		E = "ontouchstart" in window,
		S = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !E,
		V = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !E,
		L = "TouchSwipe",
		C = {
			fingers: 1,
			threshold: 75,
			cancelThreshold: null,
			pinchThreshold: 20,
			maxTimeThreshold: null,
			fingerReleaseThreshold: 250,
			longTapThreshold: 500,
			doubleTapThreshold: 200,
			swipe: null,
			swipeLeft: null,
			swipeRight: null,
			swipeUp: null,
			swipeDown: null,
			swipeStatus: null,
			pinchIn: null,
			pinchOut: null,
			pinchStatus: null,
			click: null,
			tap: null,
			doubleTap: null,
			longTap: null,
			hold: null,
			triggerOnTouchEnd: !0,
			triggerOnTouchLeave: !1,
			allowPageScroll: "auto",
			fallbackToMouseEvents: !0,
			excludedElements: ".noSwipe",
			preventDefaultEvents: !0
		};
	e.fn.swipe = function(a) {
		var n = e(this),
			i = n.data(L);
		if(i && "string" == typeof a) {
			if(i[a]) return i[a].apply(i, Array.prototype.slice.call(arguments, 1));
			e.error("Method " + a + " does not exist on jQuery.swipe")
		} else if(i && "object" == typeof a) i.option.apply(i, arguments);
		else if(!(i || "object" != typeof a && a)) return t.apply(this, arguments);
		return n
	}, e.fn.swipe.version = n, e.fn.swipe.defaults = C, e.fn.swipe.phases = {
		PHASE_START: M,
		PHASE_MOVE: y,
		PHASE_END: T,
		PHASE_CANCEL: k
	}, e.fn.swipe.directions = {
		LEFT: i,
		RIGHT: r,
		UP: o,
		DOWN: l,
		IN: s,
		OUT: d
	}, e.fn.swipe.pageScroll = {
		NONE: u,
		HORIZONTAL: f,
		VERTICAL: b,
		AUTO: c
	}, e.fn.swipe.fingers = {
		ONE: 1,
		TWO: 2,
		THREE: 3,
		FOUR: 4,
		FIVE: 5,
		ALL: x
	}
});