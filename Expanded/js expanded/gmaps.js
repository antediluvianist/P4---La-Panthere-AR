"use strict";
! function(e, t) {
	"object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(["jquery", "googlemaps!"], t) : e.GMaps = t()
}(this, function() {
	var t = function(e, t) {
			var n;
			if(e === t) return e;
			for(n in t) void 0 !== t[n] && (e[n] = t[n]);
			return e
		},
		n = function(e, t) {
			var n, o = Array.prototype.slice.call(arguments, 2),
				r = [],
				i = e.length;
			if(Array.prototype.map && e.map === Array.prototype.map) r = Array.prototype.map.call(e, function(e) {
				var n = o.slice(0);
				return n.splice(0, 0, e), t.apply(this, n)
			});
			else
				for(n = 0; i > n; n++) callback_params = o, callback_params.splice(0, 0, e[n]), r.push(t.apply(this, callback_params));
			return r
		},
		o = function(e) {
			var t, n = [];
			for(t = 0; t < e.length; t++) n = n.concat(e[t]);
			return n
		},
		r = function(e, t) {
			var n = e[0],
				o = e[1];
			return t && (n = e[1], o = e[0]), new google.maps.LatLng(n, o)
		},
		i = function(e, t) {
			var n;
			for(n = 0; n < e.length; n++) e[n] instanceof google.maps.LatLng || (e[n].length > 0 && "object" == typeof e[n][0] ? e[n] = i(e[n], t) : e[n] = r(e[n], t));
			return e
		},
		s = function(e, t) {
			var n, o = e.replace(".", "");
			return n = "jQuery" in this && t ? $("." + o, t)[0] : document.getElementsByClassName(o)[0]
		},
		a = function(e, t) {
			var n, e = e.replace("#", "");
			return n = "jQuery" in window && t ? $("#" + e, t)[0] : document.getElementById(e)
		},
		l = function(e) {
			var t = 0,
				n = 0;
			if(e.getBoundingClientRect) {
				var o = e.getBoundingClientRect(),
					r = -(window.scrollX ? window.scrollX : window.pageXOffset),
					i = -(window.scrollY ? window.scrollY : window.pageYOffset);
				return [o.left - r, o.top - i]
			}
			if(e.offsetParent)
				do t += e.offsetLeft, n += e.offsetTop; while (e = e.offsetParent);
			return [t, n]
		},
		u = function(e) {
			var n = document,
				o = function(e) {
					if("object" != typeof window.google || !window.google.maps) return "object" == typeof window.console && window.console.error && console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),
						function() {};
					if(!this) return new o(e);
					e.zoom = e.zoom || 15, e.mapType = e.mapType || "roadmap";
					var r, i = function(e, t) {
							return void 0 === e ? t : e
						},
						u = this,
						c = ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "idle", "maptypeid_changed", "projection_changed", "resize", "tilesloaded", "zoom_changed"],
						p = ["mousemove", "mouseout", "mouseover"],
						f = ["el", "lat", "lng", "mapType", "width", "height", "markerClusterer", "enableNewStyle"],
						d = e.el || e.div,
						h = e.markerClusterer,
						g = google.maps.MapTypeId[e.mapType.toUpperCase()],
						m = new google.maps.LatLng(e.lat, e.lng),
						y = i(e.zoomControl, !0),
						v = e.zoomControlOpt || {
							style: "DEFAULT",
							position: "TOP_LEFT"
						},
						x = v.style || "DEFAULT",
						w = v.position || "TOP_LEFT",
						b = i(e.panControl, !0),
						k = i(e.mapTypeControl, !0),
						T = i(e.scaleControl, !0),
						C = i(e.streetViewControl, !0),
						L = i(L, !0),
						S = {},
						N = {
							zoom: this.zoom,
							center: m,
							mapTypeId: g
						},
						E = {
							panControl: b,
							zoomControl: y,
							zoomControlOptions: {
								style: google.maps.ZoomControlStyle[x],
								position: google.maps.ControlPosition[w]
							},
							mapTypeControl: k,
							scaleControl: T,
							streetViewControl: C,
							overviewMapControl: L
						};
					if("string" == typeof e.el || "string" == typeof e.div ? d.indexOf("#") > -1 ? this.el = a(d, e.context) : this.el = s.apply(this, [d, e.context]) : this.el = d, "undefined" == typeof this.el || null === this.el) throw "No element defined.";
					for(window.context_menu = window.context_menu || {}, window.context_menu[u.el.id] = {}, this.controls = [], this.overlays = [], this.layers = [], this.singleLayers = {}, this.markers = [], this.polylines = [], this.routes = [], this.polygons = [], this.infoWindow = null, this.overlay_el = null, this.zoom = e.zoom, this.registered_events = {}, this.el.style.width = e.width || this.el.scrollWidth || this.el.offsetWidth, this.el.style.height = e.height || this.el.scrollHeight || this.el.offsetHeight, google.maps.visualRefresh = e.enableNewStyle, r = 0; r < f.length; r++) delete e[f[r]];
					for(1 != e.disableDefaultUI && (N = t(N, E)), S = t(N, e), r = 0; r < c.length; r++) delete S[c[r]];
					for(r = 0; r < p.length; r++) delete S[p[r]];
					this.map = new google.maps.Map(this.el, S), h && (this.markerClusterer = h.apply(this, [this.map]));
					var O = function(e, t) {
						var n = "",
							o = window.context_menu[u.el.id][e];
						for(var r in o)
							if(o.hasOwnProperty(r)) {
								var i = o[r];
								n += '<li><a id="' + e + "_" + r + '" href="#">' + i.title + "</a></li>"
							}
						if(a("gmaps_context_menu")) {
							var s = a("gmaps_context_menu");
							s.innerHTML = n;
							var r, c = s.getElementsByTagName("a"),
								p = c.length;
							for(r = 0; p > r; r++) {
								var f = c[r],
									d = function(n) {
										n.preventDefault(), o[this.id.replace(e + "_", "")].action.apply(u, [t]), u.hideContextMenu()
									};
								google.maps.event.clearListeners(f, "click"), google.maps.event.addDomListenerOnce(f, "click", d, !1)
							}
							var h = l.apply(this, [u.el]),
								g = h[0] + t.pixel.x - 15,
								m = h[1] + t.pixel.y - 15;
							s.style.left = g + "px", s.style.top = m + "px"
						}
					};
					this.buildContextMenu = function(e, t) {
						if("marker" === e) {
							t.pixel = {};
							var n = new google.maps.OverlayView;
							n.setMap(u.map), n.draw = function() {
								var o = n.getProjection(),
									r = t.marker.getPosition();
								t.pixel = o.fromLatLngToContainerPixel(r), O(e, t)
							}
						} else O(e, t);
						var o = a("gmaps_context_menu");
						setTimeout(function() {
							o.style.display = "block"
						}, 0)
					}, this.setContextMenu = function(e) {
						window.context_menu[u.el.id][e.control] = {};
						var t, o = n.createElement("ul");
						for(t in e.options)
							if(e.options.hasOwnProperty(t)) {
								var r = e.options[t];
								window.context_menu[u.el.id][e.control][r.name] = {
									title: r.title,
									action: r.action
								}
							}
						o.id = "gmaps_context_menu", o.style.display = "none", o.style.position = "absolute", o.style.minWidth = "100px", o.style.background = "white", o.style.listStyle = "none", o.style.padding = "8px", o.style.boxShadow = "2px 2px 6px #ccc", a("gmaps_context_menu") || n.body.appendChild(o);
						var i = a("gmaps_context_menu");
						google.maps.event.addDomListener(i, "mouseout", function(e) {
							e.relatedTarget && this.contains(e.relatedTarget) || window.setTimeout(function() {
								i.style.display = "none"
							}, 400)
						}, !1)
					}, this.hideContextMenu = function() {
						var e = a("gmaps_context_menu");
						e && (e.style.display = "none")
					};
					var M = function(t, n) {
						google.maps.event.addListener(t, n, function(t) {
							void 0 == t && (t = this), e[n].apply(this, [t]), u.hideContextMenu()
						})
					};
					google.maps.event.addListener(this.map, "zoom_changed", this.hideContextMenu);
					for(var j = 0; j < c.length; j++) {
						var D = c[j];
						D in e && M(this.map, D)
					}
					for(var j = 0; j < p.length; j++) {
						var D = p[j];
						D in e && M(this.map, D)
					}
					google.maps.event.addListener(this.map, "rightclick", function(t) {
						e.rightclick && e.rightclick.apply(this, [t]), void 0 != window.context_menu[u.el.id].map && u.buildContextMenu("map", t)
					}), this.refresh = function() {
						google.maps.event.trigger(this.map, "resize")
					}, this.fitZoom = function() {
						var e, t = [],
							n = this.markers.length;
						for(e = 0; n > e; e++) "boolean" == typeof this.markers[e].visible && this.markers[e].visible && t.push(this.markers[e].getPosition());
						this.fitLatLngBounds(t)
					}, this.fitLatLngBounds = function(e) {
						var t, n = e.length,
							o = new google.maps.LatLngBounds;
						for(t = 0; n > t; t++) o.extend(e[t]);
						this.map.fitBounds(o)
					}, this.setCenter = function(e, t, n) {
						this.map.panTo(new google.maps.LatLng(e, t)), n && n()
					}, this.getElement = function() {
						return this.el
					}, this.zoomIn = function(e) {
						e = e || 1, this.zoom = this.map.getZoom() + e, this.map.setZoom(this.zoom)
					}, this.zoomOut = function(e) {
						e = e || 1, this.zoom = this.map.getZoom() - e, this.map.setZoom(this.zoom)
					};
					var P, A = [];
					for(P in this.map) "function" != typeof this.map[P] || this[P] || A.push(P);
					for(r = 0; r < A.length; r++) ! function(e, t, n) {
						e[n] = function() {
							return t[n].apply(t, arguments)
						}
					}(this, this.map, A[r])
				};
			return o
		}(this);
	u.prototype.createControl = function(e) {
		var t = document.createElement("div");
		t.style.cursor = "pointer", e.disableDefaultStyles !== !0 && (t.style.fontFamily = "Roboto, Arial, sans-serif", t.style.fontSize = "11px", t.style.boxShadow = "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");
		for(var n in e.style) t.style[n] = e.style[n];
		e.id && (t.id = e.id), e.title && (t.title = e.title), e.classes && (t.className = e.classes), e.content && ("string" == typeof e.content ? t.innerHTML = e.content : e.content instanceof HTMLElement && t.appendChild(e.content)), e.position && (t.position = google.maps.ControlPosition[e.position.toUpperCase()]);
		for(var o in e.events) ! function(t, n) {
			google.maps.event.addDomListener(t, n, function() {
				e.events[n].apply(this, [this])
			})
		}(t, o);
		return t.index = 1, t
	}, u.prototype.addControl = function(e) {
		var t = this.createControl(e);
		return this.controls.push(t), this.map.controls[t.position].push(t), t
	}, u.prototype.removeControl = function(e) {
		var t, n = null;
		for(t = 0; t < this.controls.length; t++) this.controls[t] == e && (n = this.controls[t].position, this.controls.splice(t, 1));
		if(n)
			for(t = 0; t < this.map.controls.length; t++) {
				var o = this.map.controls[e.position];
				if(o.getAt(t) == e) {
					o.removeAt(t);
					break
				}
			}
		return e
	}, u.prototype.createMarker = function(e) {
		if(void 0 == e.lat && void 0 == e.lng && void 0 == e.position) throw "No latitude or longitude defined.";
		var n = this,
			o = e.details,
			r = e.fences,
			i = e.outside,
			s = {
				position: new google.maps.LatLng(e.lat, e.lng),
				map: null
			},
			a = t(s, e);
		delete a.lat, delete a.lng, delete a.fences, delete a.outside;
		var l = new google.maps.Marker(a);
		if(l.fences = r, e.infoWindow) {
			l.infoWindow = new google.maps.InfoWindow(e.infoWindow);
			for(var u = ["closeclick", "content_changed", "domready", "position_changed", "zindex_changed"], c = 0; c < u.length; c++) ! function(t, n) {
				e.infoWindow[n] && google.maps.event.addListener(t, n, function(t) {
					e.infoWindow[n].apply(this, [t])
				})
			}(l.infoWindow, u[c])
		}
		for(var p = ["animation_changed", "clickable_changed", "cursor_changed", "draggable_changed", "flat_changed", "icon_changed", "position_changed", "shadow_changed", "shape_changed", "title_changed", "visible_changed", "zindex_changed"], f = ["dblclick", "drag", "dragend", "dragstart", "mousedown", "mouseout", "mouseover", "mouseup"], c = 0; c < p.length; c++) ! function(t, n) {
			e[n] && google.maps.event.addListener(t, n, function() {
				e[n].apply(this, [this])
			})
		}(l, p[c]);
		for(var c = 0; c < f.length; c++) ! function(t, n, o) {
			e[o] && google.maps.event.addListener(n, o, function(n) {
				n.pixel || (n.pixel = t.getProjection().fromLatLngToPoint(n.latLng)), e[o].apply(this, [n])
			})
		}(this.map, l, f[c]);
		return google.maps.event.addListener(l, "click", function() {
			this.details = o, e.click && e.click.apply(this, [this]), l.infoWindow && (n.hideInfoWindows(), l.infoWindow.open(n.map, l))
		}), google.maps.event.addListener(l, "rightclick", function(t) {
			t.marker = this, e.rightclick && e.rightclick.apply(this, [t]), void 0 != window.context_menu[n.el.id].marker && n.buildContextMenu("marker", t)
		}), l.fences && google.maps.event.addListener(l, "dragend", function() {
			n.checkMarkerGeofence(l, function(e, t) {
				i(e, t)
			})
		}), l
	}, u.prototype.addMarker = function(e) {
		var t;
		if(e.hasOwnProperty("gm_accessors_")) t = e;
		else {
			if(!(e.hasOwnProperty("lat") && e.hasOwnProperty("lng") || e.position)) throw "No latitude or longitude defined.";
			t = this.createMarker(e)
		}
		return t.setMap(this.map), this.markerClusterer && this.markerClusterer.addMarker(t), this.markers.push(t), u.fire("marker_added", t, this), t
	}, u.prototype.addMarkers = function(e) {
		for(var t, n = 0; t = e[n]; n++) this.addMarker(t);
		return this.markers
	}, u.prototype.hideInfoWindows = function() {
		for(var e, t = 0; e = this.markers[t]; t++) e.infoWindow && e.infoWindow.close()
	}, u.prototype.removeMarker = function(e) {
		for(var t = 0; t < this.markers.length; t++)
			if(this.markers[t] === e) {
				this.markers[t].setMap(null), this.markers.splice(t, 1), this.markerClusterer && this.markerClusterer.removeMarker(e), u.fire("marker_removed", e, this);
				break
			}
		return e
	}, u.prototype.removeMarkers = function(e) {
		var t = [];
		if("undefined" == typeof e) {
			for(var n = 0; n < this.markers.length; n++) {
				var o = this.markers[n];
				o.setMap(null), u.fire("marker_removed", o, this)
			}
			this.markerClusterer && this.markerClusterer.clearMarkers && this.markerClusterer.clearMarkers(), this.markers = t
		} else {
			for(var n = 0; n < e.length; n++) {
				var r = this.markers.indexOf(e[n]);
				if(r > -1) {
					var o = this.markers[r];
					o.setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(o), u.fire("marker_removed", o, this)
				}
			}
			for(var n = 0; n < this.markers.length; n++) {
				var o = this.markers[n];
				null != o.getMap() && t.push(o)
			}
			this.markers = t
		}
	}, u.prototype.drawOverlay = function(e) {
		var t = new google.maps.OverlayView,
			n = !0;
		return t.setMap(this.map), null != e.auto_show && (n = e.auto_show), t.onAdd = function() {
			var n = document.createElement("div");
			n.style.borderStyle = "none", n.style.borderWidth = "0px", n.style.position = "absolute", n.style.zIndex = 100, n.innerHTML = e.content, t.el = n, e.layer || (e.layer = "overlayLayer");
			var o = this.getPanes(),
				r = o[e.layer],
				i = ["contextmenu", "DOMMouseScroll", "dblclick", "mousedown"];
			r.appendChild(n);
			for(var s = 0; s < i.length; s++) ! function(e, t) {
				google.maps.event.addDomListener(e, t, function(e) {
					-1 != navigator.userAgent.toLowerCase().indexOf("msie") && document.all ? (e.cancelBubble = !0, e.returnValue = !1) : e.stopPropagation()
				})
			}(n, i[s]);
			e.click && (o.overlayMouseTarget.appendChild(t.el), google.maps.event.addDomListener(t.el, "click", function() {
				e.click.apply(t, [t])
			})), google.maps.event.trigger(this, "ready")
		}, t.draw = function() {
			var o = this.getProjection(),
				r = o.fromLatLngToDivPixel(new google.maps.LatLng(e.lat, e.lng));
			e.horizontalOffset = e.horizontalOffset || 0, e.verticalOffset = e.verticalOffset || 0;
			var i = t.el,
				s = i.children[0],
				a = s.clientHeight,
				l = s.clientWidth;
			switch(e.verticalAlign) {
				case "top":
					i.style.top = r.y - a + e.verticalOffset + "px";
					break;
				default:
				case "middle":
					i.style.top = r.y - a / 2 + e.verticalOffset + "px";
					break;
				case "bottom":
					i.style.top = r.y + e.verticalOffset + "px"
			}
			switch(e.horizontalAlign) {
				case "left":
					i.style.left = r.x - l + e.horizontalOffset + "px";
					break;
				default:
				case "center":
					i.style.left = r.x - l / 2 + e.horizontalOffset + "px";
					break;
				case "right":
					i.style.left = r.x + e.horizontalOffset + "px"
			}
			i.style.display = n ? "block" : "none", n || e.show.apply(this, [i])
		}, t.onRemove = function() {
			var n = t.el;
			e.remove ? e.remove.apply(this, [n]) : (t.el.parentNode.removeChild(t.el), t.el = null)
		}, this.overlays.push(t), t
	}, u.prototype.removeOverlay = function(e) {
		for(var t = 0; t < this.overlays.length; t++)
			if(this.overlays[t] === e) {
				this.overlays[t].setMap(null), this.overlays.splice(t, 1);
				break
			}
	}, u.prototype.removeOverlays = function() {
		for(var e, t = 0; e = this.overlays[t]; t++) e.setMap(null);
		this.overlays = []
	}, u.prototype.drawPolyline = function(e) {
		var t = [],
			n = e.path;
		if(n.length)
			if(void 0 === n[0][0]) t = n;
			else
				for(var o, r = 0; o = n[r]; r++) t.push(new google.maps.LatLng(o[0], o[1]));
		var i = {
			map: this.map,
			path: t,
			strokeColor: e.strokeColor,
			strokeOpacity: e.strokeOpacity,
			strokeWeight: e.strokeWeight,
			geodesic: e.geodesic,
			clickable: !0,
			editable: !1,
			visible: !0
		};
		e.hasOwnProperty("clickable") && (i.clickable = e.clickable), e.hasOwnProperty("editable") && (i.editable = e.editable), e.hasOwnProperty("icons") && (i.icons = e.icons), e.hasOwnProperty("zIndex") && (i.zIndex = e.zIndex);
		for(var s = new google.maps.Polyline(i), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], l = 0; l < a.length; l++) ! function(t, n) {
			e[n] && google.maps.event.addListener(t, n, function(t) {
				e[n].apply(this, [t])
			})
		}(s, a[l]);
		return this.polylines.push(s), u.fire("polyline_added", s, this), s
	}, u.prototype.removePolyline = function(e) {
		for(var t = 0; t < this.polylines.length; t++)
			if(this.polylines[t] === e) {
				this.polylines[t].setMap(null), this.polylines.splice(t, 1), u.fire("polyline_removed", e, this);
				break
			}
	}, u.prototype.removePolylines = function() {
		for(var e, t = 0; e = this.polylines[t]; t++) e.setMap(null);
		this.polylines = []
	}, u.prototype.drawCircle = function(e) {
		e = t({
			map: this.map,
			center: new google.maps.LatLng(e.lat, e.lng)
		}, e), delete e.lat, delete e.lng;
		for(var n = new google.maps.Circle(e), o = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], r = 0; r < o.length; r++) ! function(t, n) {
			e[n] && google.maps.event.addListener(t, n, function(t) {
				e[n].apply(this, [t])
			})
		}(n, o[r]);
		return this.polygons.push(n), n
	}, u.prototype.drawRectangle = function(e) {
		e = t({
			map: this.map
		}, e);
		var n = new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0], e.bounds[0][1]), new google.maps.LatLng(e.bounds[1][0], e.bounds[1][1]));
		e.bounds = n;
		for(var o = new google.maps.Rectangle(e), r = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], i = 0; i < r.length; i++) ! function(t, n) {
			e[n] && google.maps.event.addListener(t, n, function(t) {
				e[n].apply(this, [t])
			})
		}(o, r[i]);
		return this.polygons.push(o), o
	}, u.prototype.drawPolygon = function(e) {
		var r = !1;
		e.hasOwnProperty("useGeoJSON") && (r = e.useGeoJSON), delete e.useGeoJSON, e = t({
			map: this.map
		}, e), 0 == r && (e.paths = [e.paths.slice(0)]), e.paths.length > 0 && e.paths[0].length > 0 && (e.paths = o(n(e.paths, i, r)));
		for(var s = new google.maps.Polygon(e), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], l = 0; l < a.length; l++) ! function(t, n) {
			e[n] && google.maps.event.addListener(t, n, function(t) {
				e[n].apply(this, [t])
			})
		}(s, a[l]);
		return this.polygons.push(s), u.fire("polygon_added", s, this), s
	}, u.prototype.removePolygon = function(e) {
		for(var t = 0; t < this.polygons.length; t++)
			if(this.polygons[t] === e) {
				this.polygons[t].setMap(null), this.polygons.splice(t, 1), u.fire("polygon_removed", e, this);
				break
			}
	}, u.prototype.removePolygons = function() {
		for(var e, t = 0; e = this.polygons[t]; t++) e.setMap(null);
		this.polygons = []
	}, u.prototype.getFromFusionTables = function(e) {
		var t = e.events;
		delete e.events;
		var n = e,
			o = new google.maps.FusionTablesLayer(n);
		for(var r in t) ! function(e, n) {
			google.maps.event.addListener(e, n, function(e) {
				t[n].apply(this, [e])
			})
		}(o, r);
		return this.layers.push(o), o
	}, u.prototype.loadFromFusionTables = function(e) {
		var t = this.getFromFusionTables(e);
		return t.setMap(this.map), t
	}, u.prototype.getFromKML = function(e) {
		var t = e.url,
			n = e.events;
		delete e.url, delete e.events;
		var o = e,
			r = new google.maps.KmlLayer(t, o);
		for(var i in n) ! function(e, t) {
			google.maps.event.addListener(e, t, function(e) {
				n[t].apply(this, [e])
			})
		}(r, i);
		return this.layers.push(r), r
	}, u.prototype.loadFromKML = function(e) {
		var t = this.getFromKML(e);
		return t.setMap(this.map), t
	}, u.prototype.addLayer = function(e, t) {
		t = t || {};
		var n;
		switch(e) {
			case "weather":
				this.singleLayers.weather = n = new google.maps.weather.WeatherLayer;
				break;
			case "clouds":
				this.singleLayers.clouds = n = new google.maps.weather.CloudLayer;
				break;
			case "traffic":
				this.singleLayers.traffic = n = new google.maps.TrafficLayer;
				break;
			case "transit":
				this.singleLayers.transit = n = new google.maps.TransitLayer;
				break;
			case "bicycling":
				this.singleLayers.bicycling = n = new google.maps.BicyclingLayer;
				break;
			case "panoramio":
				this.singleLayers.panoramio = n = new google.maps.panoramio.PanoramioLayer, n.setTag(t.filter), delete t.filter, t.click && google.maps.event.addListener(n, "click", function(e) {
					t.click(e), delete t.click
				});
				break;
			case "places":
				if(this.singleLayers.places = n = new google.maps.places.PlacesService(this.map), t.search || t.nearbySearch || t.radarSearch) {
					var o = {
						bounds: t.bounds || null,
						keyword: t.keyword || null,
						location: t.location || null,
						name: t.name || null,
						radius: t.radius || null,
						rankBy: t.rankBy || null,
						types: t.types || null
					};
					t.radarSearch && n.radarSearch(o, t.radarSearch), t.search && n.search(o, t.search), t.nearbySearch && n.nearbySearch(o, t.nearbySearch)
				}
				if(t.textSearch) {
					var r = {
						bounds: t.bounds || null,
						location: t.location || null,
						query: t.query || null,
						radius: t.radius || null
					};
					n.textSearch(r, t.textSearch)
				}
		}
		return void 0 !== n ? ("function" == typeof n.setOptions && n.setOptions(t), "function" == typeof n.setMap && n.setMap(this.map), n) : void 0
	}, u.prototype.removeLayer = function(e) {
		if("string" == typeof e && void 0 !== this.singleLayers[e]) this.singleLayers[e].setMap(null), delete this.singleLayers[e];
		else
			for(var t = 0; t < this.layers.length; t++)
				if(this.layers[t] === e) {
					this.layers[t].setMap(null), this.layers.splice(t, 1);
					break
				}
	};
	var c, p;
	return u.prototype.getRoutes = function(e) {
		switch(e.travelMode) {
			case "bicycling":
				c = google.maps.TravelMode.BICYCLING;
				break;
			case "transit":
				c = google.maps.TravelMode.TRANSIT;
				break;
			case "driving":
				c = google.maps.TravelMode.DRIVING;
				break;
			default:
				c = google.maps.TravelMode.WALKING
		}
		p = "imperial" === e.unitSystem ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC;
		var n = {
				avoidHighways: !1,
				avoidTolls: !1,
				optimizeWaypoints: !1,
				waypoints: []
			},
			o = t(n, e);
		o.origin = /string/.test(typeof e.origin) ? e.origin : new google.maps.LatLng(e.origin[0], e.origin[1]), o.destination = /string/.test(typeof e.destination) ? e.destination : new google.maps.LatLng(e.destination[0], e.destination[1]), o.travelMode = c, o.unitSystem = p, delete o.callback, delete o.error;
		var r = [],
			i = new google.maps.DirectionsService;
		i.route(o, function(t, n) {
			if(n === google.maps.DirectionsStatus.OK) {
				for(var o in t.routes) t.routes.hasOwnProperty(o) && r.push(t.routes[o]);
				e.callback && e.callback(r, t, n)
			} else e.error && e.error(t, n)
		})
	}, u.prototype.removeRoutes = function() {
		this.routes.length = 0
	}, u.prototype.getElevations = function(e) {
		e = t({
			locations: [],
			path: !1,
			samples: 256
		}, e), e.locations.length > 0 && e.locations[0].length > 0 && (e.locations = o(n([e.locations], i, !1)));
		var r = e.callback;
		delete e.callback;
		var s = new google.maps.ElevationService;
		if(e.path) {
			var a = {
				path: e.locations,
				samples: e.samples
			};
			s.getElevationAlongPath(a, function(e, t) {
				r && "function" == typeof r && r(e, t)
			})
		} else delete e.path, delete e.samples, s.getElevationForLocations(e, function(e, t) {
			r && "function" == typeof r && r(e, t)
		})
	}, u.prototype.cleanRoute = u.prototype.removePolylines, u.prototype.renderRoute = function(e, n) {
		var o, r = "string" == typeof n.panel ? document.getElementById(n.panel.replace("#", "")) : n.panel;
		n.panel = r, n = t({
			map: this.map
		}, n), o = new google.maps.DirectionsRenderer(n), this.getRoutes({
			origin: e.origin,
			destination: e.destination,
			travelMode: e.travelMode,
			waypoints: e.waypoints,
			unitSystem: e.unitSystem,
			error: e.error,
			avoidHighways: e.avoidHighways,
			avoidTolls: e.avoidTolls,
			optimizeWaypoints: e.optimizeWaypoints,
			callback: function(e, t, n) {
				n === google.maps.DirectionsStatus.OK && o.setDirections(t)
			}
		})
	}, u.prototype.drawRoute = function(e) {
		var t = this;
		this.getRoutes({
			origin: e.origin,
			destination: e.destination,
			travelMode: e.travelMode,
			waypoints: e.waypoints,
			unitSystem: e.unitSystem,
			error: e.error,
			avoidHighways: e.avoidHighways,
			avoidTolls: e.avoidTolls,
			optimizeWaypoints: e.optimizeWaypoints,
			callback: function(n) {
				if(n.length > 0) {
					var o = {
						path: n[n.length - 1].overview_path,
						strokeColor: e.strokeColor,
						strokeOpacity: e.strokeOpacity,
						strokeWeight: e.strokeWeight
					};
					e.hasOwnProperty("icons") && (o.icons = e.icons), t.drawPolyline(o), e.callback && e.callback(n[n.length - 1])
				}
			}
		})
	}, u.prototype.travelRoute = function(e) {
		if(e.origin && e.destination) this.getRoutes({
			origin: e.origin,
			destination: e.destination,
			travelMode: e.travelMode,
			waypoints: e.waypoints,
			unitSystem: e.unitSystem,
			error: e.error,
			callback: function(t) {
				if(t.length > 0 && e.start && e.start(t[t.length - 1]), t.length > 0 && e.step) {
					var n = t[t.length - 1];
					if(n.legs.length > 0)
						for(var o, r = n.legs[0].steps, i = 0; o = r[i]; i++) o.step_number = i, e.step(o, n.legs[0].steps.length - 1)
				}
				t.length > 0 && e.end && e.end(t[t.length - 1])
			}
		});
		else if(e.route && e.route.legs.length > 0)
			for(var t, n = e.route.legs[0].steps, o = 0; t = n[o]; o++) t.step_number = o, e.step(t)
	}, u.prototype.drawSteppedRoute = function(e) {
		var t = this;
		if(e.origin && e.destination) this.getRoutes({
			origin: e.origin,
			destination: e.destination,
			travelMode: e.travelMode,
			waypoints: e.waypoints,
			error: e.error,
			callback: function(n) {
				if(n.length > 0 && e.start && e.start(n[n.length - 1]), n.length > 0 && e.step) {
					var o = n[n.length - 1];
					if(o.legs.length > 0)
						for(var r, i = o.legs[0].steps, s = 0; r = i[s]; s++) {
							r.step_number = s;
							var a = {
								path: r.path,
								strokeColor: e.strokeColor,
								strokeOpacity: e.strokeOpacity,
								strokeWeight: e.strokeWeight
							};
							e.hasOwnProperty("icons") && (a.icons = e.icons), t.drawPolyline(a), e.step(r, o.legs[0].steps.length - 1)
						}
				}
				n.length > 0 && e.end && e.end(n[n.length - 1])
			}
		});
		else if(e.route && e.route.legs.length > 0)
			for(var n, o = e.route.legs[0].steps, r = 0; n = o[r]; r++) {
				n.step_number = r;
				var i = {
					path: n.path,
					strokeColor: e.strokeColor,
					strokeOpacity: e.strokeOpacity,
					strokeWeight: e.strokeWeight
				};
				e.hasOwnProperty("icons") && (i.icons = e.icons), t.drawPolyline(i), e.step(n)
			}
	}, u.Route = function(e) {
		this.origin = e.origin, this.destination = e.destination, this.waypoints = e.waypoints, this.map = e.map, this.route = e.route, this.step_count = 0, this.steps = this.route.legs[0].steps, this.steps_length = this.steps.length;
		var t = {
			path: new google.maps.MVCArray,
			strokeColor: e.strokeColor,
			strokeOpacity: e.strokeOpacity,
			strokeWeight: e.strokeWeight
		};
		e.hasOwnProperty("icons") && (t.icons = e.icons), this.polyline = this.map.drawPolyline(t).getPath()
	}, u.Route.prototype.getRoute = function(t) {
		var n = this;
		this.map.getRoutes({
			origin: this.origin,
			destination: this.destination,
			travelMode: t.travelMode,
			waypoints: this.waypoints || [],
			error: t.error,
			callback: function() {
				n.route = e[0], t.callback && t.callback.call(n)
			}
		})
	}, u.Route.prototype.back = function() {
		if(this.step_count > 0) {
			this.step_count--;
			var e = this.route.legs[0].steps[this.step_count].path;
			for(var t in e) e.hasOwnProperty(t) && this.polyline.pop()
		}
	}, u.Route.prototype.forward = function() {
		if(this.step_count < this.steps_length) {
			var e = this.route.legs[0].steps[this.step_count].path;
			for(var t in e) e.hasOwnProperty(t) && this.polyline.push(e[t]);
			this.step_count++
		}
	}, u.prototype.checkGeofence = function(e, t, n) {
		return n.containsLatLng(new google.maps.LatLng(e, t))
	}, u.prototype.checkMarkerGeofence = function(e, t) {
		if(e.fences)
			for(var n, o = 0; n = e.fences[o]; o++) {
				var r = e.getPosition();
				this.checkGeofence(r.lat(), r.lng(), n) || t(e, n)
			}
	}, u.prototype.toImage = function(e) {
		var e = e || {},
			t = {};
		if(t.size = e.size || [this.el.clientWidth, this.el.clientHeight], t.lat = this.getCenter().lat(), t.lng = this.getCenter().lng(), this.markers.length > 0) {
			t.markers = [];
			for(var n = 0; n < this.markers.length; n++) t.markers.push({
				lat: this.markers[n].getPosition().lat(),
				lng: this.markers[n].getPosition().lng()
			})
		}
		if(this.polylines.length > 0) {
			var o = this.polylines[0];
			t.polyline = {}, t.polyline.path = google.maps.geometry.encoding.encodePath(o.getPath()), t.polyline.strokeColor = o.strokeColor, t.polyline.strokeOpacity = o.strokeOpacity, t.polyline.strokeWeight = o.strokeWeight
		}
		return u.staticMapURL(t)
	}, u.staticMapURL = function(e) {
		function t(e, t) {
			if("#" === e[0] && (e = e.replace("#", "0x"), t)) {
				if(t = parseFloat(t), t = Math.min(1, Math.max(t, 0)), 0 === t) return "0x00000000";
				t = (255 * t).toString(16), 1 === t.length && (t += t), e = e.slice(0, 8) + t
			}
			return e
		}
		var n, o = [],
			r = ("file:" === location.protocol ? "http:" : location.protocol) + "//maps.googleapis.com/maps/api/staticmap";
		e.url && (r = e.url, delete e.url), r += "?";
		var i = e.markers;
		delete e.markers, !i && e.marker && (i = [e.marker], delete e.marker);
		var s = e.styles;
		delete e.styles;
		var a = e.polyline;
		if(delete e.polyline, e.center) o.push("center=" + e.center), delete e.center;
		else if(e.address) o.push("center=" + e.address), delete e.address;
		else if(e.lat) o.push(["center=", e.lat, ",", e.lng].join("")), delete e.lat, delete e.lng;
		else if(e.visible) {
			var l = encodeURI(e.visible.join("|"));
			o.push("visible=" + l)
		}
		var u = e.size;
		u ? (u.join && (u = u.join("x")), delete e.size) : u = "630x300", o.push("size=" + u), e.zoom || e.zoom === !1 || (e.zoom = 15);
		var c = e.hasOwnProperty("sensor") ? !!e.sensor : !0;
		delete e.sensor, o.push("sensor=" + c);
		for(var p in e) e.hasOwnProperty(p) && o.push(p + "=" + e[p]);
		if(i)
			for(var f, d, h = 0; n = i[h]; h++) {
				f = [], n.size && "normal" !== n.size ? (f.push("size:" + n.size), delete n.size) : n.icon && (f.push("icon:" + encodeURI(n.icon)), delete n.icon), n.color && (f.push("color:" + n.color.replace("#", "0x")), delete n.color), n.label && (f.push("label:" + n.label[0].toUpperCase()), delete n.label), d = n.address ? n.address : n.lat + "," + n.lng, delete n.address, delete n.lat, delete n.lng;
				for(var p in n) n.hasOwnProperty(p) && f.push(p + ":" + n[p]);
				f.length || 0 === h ? (f.push(d), f = f.join("|"), o.push("markers=" + encodeURI(f))) : (f = o.pop() + encodeURI("|" + d), o.push(f))
			}
		if(s)
			for(var h = 0; h < s.length; h++) {
				var g = [];
				s[h].featureType && g.push("feature:" + s[h].featureType.toLowerCase()), s[h].elementType && g.push("element:" + s[h].elementType.toLowerCase());
				for(var m = 0; m < s[h].stylers.length; m++)
					for(var y in s[h].stylers[m]) {
						var v = s[h].stylers[m][y];
						("hue" == y || "color" == y) && (v = "0x" + v.substring(1)), g.push(y + ":" + v)
					}
				var x = g.join("|");
				"" != x && o.push("style=" + x)
			}
		if(a) {
			if(n = a, a = [], n.strokeWeight && a.push("weight:" + parseInt(n.strokeWeight, 10)), n.strokeColor) {
				var w = t(n.strokeColor, n.strokeOpacity);
				a.push("color:" + w)
			}
			if(n.fillColor) {
				var b = t(n.fillColor, n.fillOpacity);
				a.push("fillcolor:" + b)
			}
			var k = n.path;
			if(k.join)
				for(var T, m = 0; T = k[m]; m++) a.push(T.join(","));
			else a.push("enc:" + k);
			a = a.join("|"), o.push("path=" + encodeURI(a))
		}
		var C = window.devicePixelRatio || 1;
		return o.push("scale=" + C), o = o.join("&"), r + o
	}, u.prototype.addMapType = function(e, t) {
		if(!t.hasOwnProperty("getTileUrl") || "function" != typeof t.getTileUrl) throw "'getTileUrl' function required.";
		t.tileSize = t.tileSize || new google.maps.Size(256, 256);
		var n = new google.maps.ImageMapType(t);
		this.map.mapTypes.set(e, n)
	}, u.prototype.addOverlayMapType = function(e) {
		if(!e.hasOwnProperty("getTile") || "function" != typeof e.getTile) throw "'getTile' function required.";
		var t = e.index;
		delete e.index, this.map.overlayMapTypes.insertAt(t, e)
	}, u.prototype.removeOverlayMapType = function(e) {
		this.map.overlayMapTypes.removeAt(e)
	}, u.prototype.addStyle = function(e) {
		var t = new google.maps.StyledMapType(e.styles, {
			name: e.styledMapName
		});
		this.map.mapTypes.set(e.mapTypeId, t)
	}, u.prototype.setStyle = function(e) {
		this.map.setMapTypeId(e)
	}, u.prototype.createPanorama = function(e) {
		return e.hasOwnProperty("lat") && e.hasOwnProperty("lng") || (e.lat = this.getCenter().lat(), e.lng = this.getCenter().lng()), this.panorama = u.createPanorama(e), this.map.setStreetView(this.panorama), this.panorama
	}, u.createPanorama = function(e) {
		var n = a(e.el, e.context);
		e.position = new google.maps.LatLng(e.lat, e.lng), delete e.el, delete e.context, delete e.lat, delete e.lng;
		for(var o = ["closeclick", "links_changed", "pano_changed", "position_changed", "pov_changed", "resize", "visible_changed"], r = t({
				visible: !0
			}, e), i = 0; i < o.length; i++) delete r[o[i]];
		for(var s = new google.maps.StreetViewPanorama(n, r), i = 0; i < o.length; i++) ! function(t, n) {
			e[n] && google.maps.event.addListener(t, n, function() {
				e[n].apply(this)
			})
		}(s, o[i]);
		return s
	}, u.prototype.on = function(e, t) {
		return u.on(e, this, t)
	}, u.prototype.off = function(e) {
		u.off(e, this)
	}, u.prototype.once = function(e, t) {
		return u.once(e, this, t)
	}, u.custom_events = ["marker_added", "marker_removed", "polyline_added", "polyline_removed", "polygon_added", "polygon_removed", "geolocated", "geolocation_failed"], u.on = function(e, t, n) {
		if(-1 == u.custom_events.indexOf(e)) return t instanceof u && (t = t.map), google.maps.event.addListener(t, e, n);
		var o = {
			handler: n,
			eventName: e
		};
		return t.registered_events[e] = t.registered_events[e] || [], t.registered_events[e].push(o), o
	}, u.off = function(e, t) {
		-1 == u.custom_events.indexOf(e) ? (t instanceof u && (t = t.map), google.maps.event.clearListeners(t, e)) : t.registered_events[e] = []
	}, u.once = function(e, t, n) {
		return -1 == u.custom_events.indexOf(e) ? (t instanceof u && (t = t.map), google.maps.event.addListenerOnce(t, e, n)) : void 0
	}, u.fire = function(e, t, n) {
		if(-1 == u.custom_events.indexOf(e)) google.maps.event.trigger(t, e, Array.prototype.slice.apply(arguments).slice(2));
		else if(e in n.registered_events)
			for(var o = n.registered_events[e], r = 0; r < o.length; r++) ! function(e, t, n) {
				e.apply(t, [n])
			}(o[r].handler, n, t)
	}, u.geolocate = function(e) {
		var t = e.always || e.complete;
		navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(n) {
			e.success(n), t && t()
		}, function(n) {
			e.error(n), t && t()
		}, e.options) : (e.not_supported(), t && t())
	}, u.geocode = function(e) {
		this.geocoder = new google.maps.Geocoder;
		var t = e.callback;
		e.hasOwnProperty("lat") && e.hasOwnProperty("lng") && (e.latLng = new google.maps.LatLng(e.lat, e.lng)), delete e.lat, delete e.lng, delete e.callback, this.geocoder.geocode(e, function(e, n) {
			t(e, n)
		})
	}, "object" == typeof window.google && window.google.maps && (google.maps.Polygon.prototype.getBounds || (google.maps.Polygon.prototype.getBounds = function(e) {
		for(var t, n = new google.maps.LatLngBounds, o = this.getPaths(), r = 0; r < o.getLength(); r++) {
			t = o.getAt(r);
			for(var i = 0; i < t.getLength(); i++) n.extend(t.getAt(i))
		}
		return n
	}), google.maps.Polygon.prototype.containsLatLng || (google.maps.Polygon.prototype.containsLatLng = function(e) {
		var t = this.getBounds();
		if(null !== t && !t.contains(e)) return !1;
		for(var n = !1, o = this.getPaths().getLength(), r = 0; o > r; r++)
			for(var i = this.getPaths().getAt(r), s = i.getLength(), a = s - 1, l = 0; s > l; l++) {
				var u = i.getAt(l),
					c = i.getAt(a);
				(u.lng() < e.lng() && c.lng() >= e.lng() || c.lng() < e.lng() && u.lng() >= e.lng()) && u.lat() + (e.lng() - u.lng()) / (c.lng() - u.lng()) * (c.lat() - u.lat()) < e.lat() && (n = !n), a = l
			}
		return n
	}), google.maps.Circle.prototype.containsLatLng || (google.maps.Circle.prototype.containsLatLng = function(e) {
		return google.maps.geometry ? google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), e) <= this.getRadius() : !0
	}), google.maps.Rectangle.prototype.containsLatLng = function(e) {
		return this.getBounds().contains(e)
	}, google.maps.LatLngBounds.prototype.containsLatLng = function(e) {
		return this.contains(e)
	}, google.maps.Marker.prototype.setFences = function(e) {
		this.fences = e
	}, google.maps.Marker.prototype.addFence = function(e) {
		this.fences.push(e)
	}, google.maps.Marker.prototype.getId = function() {
		return this.__gm_id
	}), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
		if(null == this) throw new TypeError;
		var t = Object(this),
			n = t.length >>> 0;
		if(0 === n) return -1;
		var o = 0;
		if(arguments.length > 1 && (o = Number(arguments[1]), o != o ? o = 0 : 0 != o && o != 1 / 0 && o != -(1 / 0) && (o = (o > 0 || -1) * Math.floor(Math.abs(o)))), o >= n) return -1;
		for(var r = o >= 0 ? o : Math.max(n - Math.abs(o), 0); n > r; r++)
			if(r in t && t[r] === e) return r;
		return -1
	}), u
});