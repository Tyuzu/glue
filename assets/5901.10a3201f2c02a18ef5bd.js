(self.webpackChunkFrontendReact = self.webpackChunkFrontendReact || []).push([
	[5901], {
		77595: (e, t, n) => {
			"use strict";
			n.d(t, {
				Z: () => A
			});
			var r = n(1068),
				a = n.n(r),
				i = n(20530),
				o = n(26849),
				c = n(30081),
				l = n(97647),
				s = n(81010),
				u = n(10891),
				f = n(71509),
				d = n(77766),
				m = n.n(d),
				h = n(2991),
				g = n.n(h),
				v = n(3649),
				p = n.n(v),
				E = n(94198),
				y = n.n(E),
				Z = n(67294),
				b = (n(45697), n(49140)),
				k = n(61156),
				C = n(52266),
				T = n(6285),
				w = n(20594),
				N = (n(68309), n(44012)),
				I = n(61409),
				O = n(71114),
				S = n(73611),
				_ = n(60817),
				M = n(78117),
				x = n(40152),
				R = n(42974),
				L = n(17146),
				F = n(7994);
			const P = (0, b.connect)((function(e, t) {
				var n = t.userid;
				return {
					user: (0, k.M_)(e, n).data
				}
			}), {
				sendEvent: O.qP
			})((function(e) {
				var t = e.user,
					n = t.name,
					r = t.username,
					a = t.userid,
					i = t.verified,
					o = t.profileImageUrl,
					c = t.recentViews,
					l = t.subscription,
					s = e.sendEvent,
					u = (0, Z.useState)(!1),
					f = (0, w.Z)(u, 2),
					d = f[0],
					m = f[1],
					h = Z.createElement("div", {
						className: "leaderboard-row"
					}, Z.createElement(I.rU, {
						className: "leaderboard-profile-image",
						to: "/@".concat(r),
						onClick: function() {
							return s({
								event: "leaderboard_profile_click",
								params: {
									username: r
								}
							})
						}
					}, d ? Z.createElement(_.Z, {
						url: o,
						small: !0
					}) : null), Z.createElement("div", {
						className: "leaderboard-user-details"
					}, Z.createElement("div", {
						className: "leaderboard-name-row"
					}, Z.createElement(I.rU, {
						className: "leaderboard-name",
						to: "/@".concat(r),
						onClick: function() {
							return s({
								event: "leaderboard_profile_click",
								params: {
									username: r
								}
							})
						}
					}, n || r), i ? Z.createElement(M.Z, {
						small: !0
					}) : null, (0, F.Z)(l) ? Z.createElement(R.Z, {
						small: !0
					}) : null), Z.createElement(x.Z, {
						className: "leaderboard-views-row",
						value: c,
						format: !1
					}, Z.createElement(N.Z, {
						id: "LEADERBOARD.VIEWS_LAST_WEEK",
						values: {
							views: c
						},
						defaultMessage: "{views, plural, one {view} other {views}} last week",
						description: "Views this user's gifs received last week."
					}))), Z.createElement(S.Z, {
						userid: a,
						size: "small"
					}));
				return d ? h : Z.createElement(L.Z, {
					onChange: function(e) {
						var t = e.visible;
						t && !d && m(t)
					}
				}, h)
			}));
			var G, H, U;
			const A = (0, b.connect)((function(e) {
				return {
					leaderboard: (0, k.Zp)(e)
				}
			}), {
				continueLeaderboard: C.p
			})((U = H = function(e) {
				(0, l.Z)(d, e);
				var t, n, r = (t = d, n = function() {
					if ("undefined" == typeof Reflect || !a()) return !1;
					if (a().sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(a()(Boolean, [], (
							function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, r = (0, u.Z)(t);
					if (n) {
						var i = (0, u.Z)(this).constructor;
						e = a()(r, arguments, i)
					} else e = r.apply(this, arguments);
					return (0, s.Z)(this, e)
				});

				function d() {
					var e, t;
					(0, i.Z)(this, d);
					for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] =
						arguments[o];
					return t = r.call.apply(r, m()(e = [this]).call(e, a)), (0, f.Z)((0, c.Z)(
						t), "loadMore", (function() {
							t.props.continueLeaderboard({
								count: t.props.count
							})
						})), t
				}
				return (0, o.Z)(d, [{
					key: "render",
					value: function() {
						var e, t, n = this.props,
							r = n.leaderboard,
							a = n.loadAll,
							i = n.numberOfShown;
						if (!r.isReady) return null;
						var o = i || r.items.lenght,
							c = g()(e = p()(t = r.items).call(t, 0, o)).call(e,
								(function(e, t) {
									var n = Z.createElement(P, {
										userid: e,
										key: "creator-list-item-"
											.concat(t)
									});
									return a ? {
										item: n,
										id: "creator-list-item-".concat(
											e)
									} : n
								})),
							l = y()(.7 * this.props.count, 10);
						return Z.createElement("div", {
							className: "leaderboard-list"
						}, a ? Z.createElement(T.Z, {
							items: c,
							loadMore: this.loadMore,
							loadMoreTriggerIndex: l
						}) : c)
					}
				}]), d
			}(Z.Component), (0, f.Z)(H, "fetchInitialData", (function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] :
					{},
					n = t.count,
					r = void 0 === n ? 10 : n;
				return e.dispatch((0, C.o)({
					count: r
				}))
			})), (0, f.Z)(H, "defaultProps", {
				count: 10,
				loadAll: !1
			}), G = U)) || G
		},
		83428: (e, t, n) => {
			"use strict";
			n.d(t, {
				Z: () => V
			});
			var r, a, i, o = n(1068),
				c = n.n(o),
				l = n(20530),
				s = n(26849),
				u = n(30081),
				f = n(97647),
				d = n(81010),
				m = n(10891),
				h = n(71509),
				g = (n(74916), n(15306), n(39392)),
				v = n.n(g),
				p = n(10062),
				E = n.n(p),
				y = n(81643),
				Z = n.n(y),
				b = n(2991),
				k = n.n(b),
				C = n(77766),
				T = n.n(C),
				w = n(32366),
				N = n.n(w),
				I = n(20116),
				O = n.n(I),
				S = n(25843),
				_ = n.n(S),
				M = n(86902),
				x = n.n(M),
				R = n(47302),
				L = n.n(R),
				F = n(3649),
				P = n.n(F),
				G = (n(45697), n(67294)),
				H = n(49140),
				U = n(61156),
				A = n(43903);
			n(79145);
			var B = function(e, t) {
					if (e.length < 2 || t.length < 2) return 0;
					for (var n = new(v()), r = 0; r < e.length - 1; r++) {
						var a = e.substr(r, 2),
							i = n.has(a) ? n.get(a) + 1 : 1;
						n.set(a, i)
					}
					for (var o = 0, c = 0; c < t.length - 1; c++) {
						var l = t.substr(c, 2),
							s = n.has(l) ? n.get(l) : 0;
						s > 0 && (n.set(l, s - 1), o++)
					}
					return 2 * o / (e.length + t.length - 2)
				},
				W = function(e, t) {
					var n, r, a, i = [],
						o = e.length,
						c = t.length;
					if (!o) return c;
					if (!c) return o;
					for (a = 0; a <= c; a++) i[a] = a;
					for (r = 1; r <= o; r++) {
						for (n = [r], a = 1; a <= c; a++) n[a] = e[r - 1] === t[a - 1] ? i[a - 1] : Math
							.min(i[a - 1], i[a], n[a - 1]) + 1;
						i = n
					}
					return n[c]
				},
				D = function(e) {
					return function(t) {
						var n;
						return e !== t && t.length > 3 && t.length < 20 && E()(n = ["gif", "tag",
							"gfycat", "youtube", "animated", "giphy", "#", "celebs", "celebrity"
						]).call(n, (function(e) {
							return -1 === Z()(t).call(t, e)
						})) && W(e, t) > 1
					}
				};
			const V = (0, H.connect)((function(e, t) {
				var n = t.items;
				return {
					gfyItems: n ? k()(n).call(n, (function(t) {
						return (0, U.rg)(e, t)
					})) : []
				}
			}))((i = a = function(e) {
				(0, f.Z)(a, e);
				var t, n, r = (t = a, n = function() {
					if ("undefined" == typeof Reflect || !c()) return !1;
					if (c().sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(c()(Boolean, [], (
							function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, r = (0, m.Z)(t);
					if (n) {
						var a = (0, m.Z)(this).constructor;
						e = c()(r, arguments, a)
					} else e = r.apply(this, arguments);
					return (0, d.Z)(this, e)
				});

				function a() {
					var e, t;
					(0, l.Z)(this, a);
					for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] =
						arguments[o];
					return t = r.call.apply(r, T()(e = [this]).call(e, i)), (0, h.Z)((0, u.Z)(
						t), "getTopTags", (function() {
							var e, n, r, a, i, o, c = t.props,
								l = c.gfyItems,
								s = c.keyword,
								u = N()(e = O()(n = k()(r = T()(a = []).apply(a, k()(l)
									.call(l, (function(e) {
										return e.tags || []
									})))).call(r, (function(e) {
									var t;
									return _()(t = e.toLowerCase())
										.call(t).replace(
											/[.,/#!$%^&*;:{}=\-_`~()]/g,
											"")
								}))).call(n, D(s))).call(e, (function(e, t) {
									return e[t] = e[t] ? e[t] + 1 : 1, e
								}), {}),
								f = O()(i = x()(u)).call(i, (function(e) {
									return u[e] > 1
								}));
							return N()(o = L()(f).call(f, (function(e, t) {
								if (u[e] === u[t]) {
									var n = Math.max(Z()(e).call(e, s),
											Z()(s).call(s, e)),
										r = Math.max(Z()(t).call(t, s),
											Z()(s).call(s, t));
									if (n !== r) return -1 === n ? 1 : -
										1 === r ? -1 : n - r;
									var a = B(s, e);
									return B(s, t) - a
								}
								return u[t] - u[e]
							}))).call(o, (function(e, t) {
								return e.length >= 5 ? e : E()(e).call(e, (
									function(e) {
										return W(t, e) > 2
									})) ? T()(e).call(e, t) : e
							}), [])
						})), t
				}
				return (0, s.Z)(a, [{
					key: "shouldComponentUpdate",
					value: function(e) {
						return e.items.length !== this.props.items.length || e
							.keyword !== this.props.keyword
					}
				}, {
					key: "render",
					value: function() {
						var e = this.props,
							t = e.context,
							n = e.keyword,
							r = e.maxNumberOfTags,
							a = e.tagUrl,
							i = e.title,
							o = this.getTopTags();
						r && (o = P()(o).call(o, 0, r));
						var c = {
							context: t,
							keyword: n
						};
						return G.createElement("div", {
							className: "related-search"
						}, i ? G.createElement("div", {
							className: "related-search__title"
						}, i) : null, G.createElement(A.Z, {
							analyticsParams: c,
							linkPrefix: a,
							tags: o
						}))
					}
				}]), a
			}(G.Component), (0, h.Z)(a, "defaultProps", {
				tagUrl: "/gifs/search",
				items: []
			}), r = i)) || r
		},
		11690: (e, t, n) => {
			"use strict";
			n.d(t, {
				Z: () => r
			});
			const r = (0, n(50049).vU)({
				metaTitle: {
					id: "HOME.META_TITLE",
					defaultMessage: "Watch and Create GIFs, Videos, Memes",
					description: "Home page meta title"
				},
				trendingSectionTitle: {
					id: "HOME.SECTION_TITLE_TRENDING",
					defaultMessage: "Featured Trending GIFs",
					description: "Trending section title"
				},
				trendingSectionLink: {
					id: "HOME.SECTION_LINK_TRENDING",
					defaultMessage: "See more trending GIFs",
					description: "Trending section link"
				},
				popularSectionTitle: {
					id: "HOME.SECTION_TITLE_POPULAR",
					defaultMessage: "Popular GIFs",
					description: "Popular section title"
				},
				popularSectionLink: {
					id: "HOME.SECTION_LINK_POPULAR",
					defaultMessage: "See more popular GIFs",
					description: "Popular section link"
				},
				followingSectionTitle: {
					id: "HOME.SECTION_TITLE_FOLLOWING",
					defaultMessage: "GIFs from People You Follow",
					description: "Following section title"
				},
				followingSectionLink: {
					id: "HOME.SECTION_LINK_FOLLOWING",
					defaultMessage: "See more following GIFs",
					description: "Popular section link"
				},
				gamingSectionTitle: {
					id: "HOME.SECTION_TITLE_GAMING",
					defaultMessage: "Gaming GIFs",
					description: "Gaming section title"
				},
				gamingSectionLink: {
					id: "HOME.SECTION_LINK_GAMING",
					defaultMessage: "See more gaming GIFs",
					description: "Gaming section link"
				},
				reactionSectionLink: {
					id: "HOME.SECTION_LINK_REACTION",
					defaultMessage: "See more reaction GIFs",
					description: "Reaction section link"
				},
				trendingTagsTitle: {
					id: "HOME.TRENDING_TAGS_TITLE",
					defaultMessage: "Current trending tags",
					description: "Trending tags title"
				}
			})
		},
		35901: (e, t, n) => {
			"use strict";
			n.r(t), n.d(t, {
				default: () => bt
			});
			var r, a = n(1068),
				i = n.n(a),
				o = n(20530),
				c = n(26849),
				l = n(97647),
				s = n(81010),
				u = n(10891),
				f = n(67294),
				d = n(49140),
				m = n(18446),
				h = n.n(m),
				g = n(86902),
				v = n.n(g),
				p = n(14310),
				E = n.n(p),
				y = n(20116),
				Z = n.n(y),
				b = n(34074),
				k = n.n(b),
				C = n(78914),
				T = n.n(C),
				w = n(39649),
				N = n.n(w),
				I = n(20368),
				O = n.n(I),
				S = n(63978),
				_ = n.n(S),
				M = n(30081),
				x = n(71509),
				R = n(77766),
				L = n.n(R),
				F = n(31581),
				P = n.n(F),
				G = n(33032),
				H = n.n(G),
				U = n(23353),
				A = n.n(U),
				B = n(53667),
				W = n(71114);

			function D(e, t) {
				var n = v()(e);
				if (E()) {
					var r = E()(e);
					t && (r = Z()(r).call(r, (function(t) {
						return k()(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function V(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n, r = null != arguments[t] ? arguments[t] : {};
					if (t % 2) T()(n = D(Object(r), !0)).call(n, (function(t) {
						(0, x.Z)(e, t, r[t])
					}));
					else if (N()) O()(e, N()(r));
					else {
						var a;
						T()(a = D(Object(r))).call(a, (function(t) {
							_()(e, t, k()(r, t))
						}))
					}
				}
				return e
			}
			const K = (0, d.connect)(null, {
				sendEvent: W.qP
			})(r = function(e) {
				(0, l.Z)(a, e);
				var t, n, r = (t = a, n = function() {
					if ("undefined" == typeof Reflect || !i()) return !1;
					if (i().sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(i()(Boolean, [], (
						function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, r = (0, u.Z)(t);
					if (n) {
						var a = (0, u.Z)(this).constructor;
						e = i()(r, arguments, a)
					} else e = r.apply(this, arguments);
					return (0, s.Z)(this, e)
				});

				function a() {
					var e, t;
					(0, o.Z)(this, a);
					for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] =
						arguments[c];
					return t = r.call.apply(r, L()(e = [this]).call(e, i)), (0, x.Z)((0, M.Z)(t),
						"state", {
							config: {}
						}), (0, x.Z)((0, M.Z)(t), "loadConfig", (function() {
						window.TAKEOVER ? t.setState({
							config: window.TAKEOVER
						}) : (t.loadCheckInterval = P()((function() {
							window.TAKEOVER && (t.clearMemory(), t
								.setState({
									config: window.TAKEOVER
								}))
						}), 100), t.loadConfigTimeout = H()((function() {
							clearInterval(t.loadCheckInterval)
						}), 5e3))
					})), (0, x.Z)((0, M.Z)(t), "clearMemory", (function() {
						clearTimeout(t.loadConfigTimeout), clearInterval(t
							.loadCheckInterval)
					})), (0, x.Z)((0, M.Z)(t), "handleClick", (function() {
						var e = t.state.config.context;
						t.props.sendEvent({
							event: "takeover_click",
							params: V({}, e && {
								context: e
							})
						})
					})), t
				}
				return (0, c.Z)(a, [{
					key: "componentDidMount",
					value: function() {
						this.loadConfig()
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.clearMemory()
					}
				}, {
					key: "render",
					value: function() {
						var e = this.state.config,
							t = e.backgroundColor,
							n = e.context,
							r = e.imageUrl,
							a = e.pageUrl,
							i = e.width;
						if (!r) return null;
						var o = f.createElement(f.Fragment, null, f.createElement(
							"div", {
								className: "background-takeover",
								style: {
									backgroundColor: t || "#000",
									backgroundImage: "url(".concat(r, ")"),
									maxWidth: i
								}
							}), f.createElement(B.Z, {
							event: "takeover_impression",
							params: V({}, n && {
								context: n
							})
						}));
						return f.createElement(A(), {
							className: "body--background-takeover"
						}, a ? f.createElement("a", {
							href: a,
							rel: "noopener noreferrer",
							target: "_blank",
							onClick: this.handleClick
						}, o) : o)
					}
				}]), a
			}(f.Component)) || r;
			var j = n(33644),
				q = n(28529),
				z = n(7136),
				X = n(6111),
				Q = n(2991),
				Y = n.n(Q),
				J = n(3649),
				$ = n.n(J),
				ee = n(44012),
				te = n(69983),
				ne = n.n(te),
				re = n(43903),
				ae = n(61156),
				ie = n(65589),
				oe = "homepage",
				ce = "follow",
				le = "gaming",
				se = "popular",
				ue = "reactions",
				fe = "stickers",
				de = "trending",
				me = n(11690);
			const he = (0, d.connect)((function(e) {
				return {
					gaming: (0, ae.hD)(e, le),
					reactions: (0, ae.mx)(e, ue)
				}
			}))((function(e) {
				var t, n, r, a, i, o, c, l = e.gaming,
					s = e.reactions,
					u = {},
					d = Y()(t = $()(n = Z()(r = l.items).call(r, (function(e) {
						return !(0, ie.Gy)(e.tag)
					}))).call(n, 0, 5)).call(t, (function(e) {
						var t = e.tag,
							n = e.tagText;
						return u[n] = "/gifs/tag/".concat((0, ie.wN)(t)), n
					})),
					m = Y()(a = $()(i = Z()(o = s.items).call(o, (function(e) {
						return !(0, ie.Gy)(e.tag)
					}))).call(i, 0, 5)).call(a, (function(e) {
						var t = e.tag,
							n = e.tagText;
						return u[n] = "/discover/".concat((0, ie.Xu)(t), "-gifs"), n
					})),
					h = ne()(L()(c = []).call(c, d, m));
				return f.createElement("div", {
					className: "trending-tags"
				}, f.createElement("h2", null, f.createElement(ee.Z, me.Z
					.trendingTagsTitle)), f.createElement(re.Z, {
					analyticsParams: {
						context: oe,
						keyword: "trending-tags"
					},
					tags: h,
					urlPattern: function(e) {
						return u[e]
					}
				}))
			}));
			var ge = n(61409),
				ve = (n(45697), n(94184)),
				pe = n.n(ve),
				Ee = n(10754),
				ye = n(9375),
				Ze = n(30559);
			var be, ke, Ce, Te = function(e) {
					(0, l.Z)(a, e);
					var t, n, r = (t = a, n = function() {
						if ("undefined" == typeof Reflect || !i()) return !1;
						if (i().sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(i()(Boolean, [], (
							function() {}))), !0
						} catch (e) {
							return !1
						}
					}(), function() {
						var e, r = (0, u.Z)(t);
						if (n) {
							var a = (0, u.Z)(this).constructor;
							e = i()(r, arguments, a)
						} else e = r.apply(this, arguments);
						return (0, s.Z)(this, e)
					});

					function a() {
						return (0, o.Z)(this, a), r.apply(this, arguments)
					}
					return (0, c.Z)(a, [{
						key: "render",
						value: function() {
							var e = this.props,
								t = e.gfyItem,
								n = e.isStatic;
							return f.createElement("div", {
								className: "horizontal-scroll__item",
								onMouseEnter: this.handleMouseEnter,
								onMouseLeave: this.handleMouseLeave
							}, f.createElement(ge.rU, {
								to: "/".concat((0, Ze.K)(t))
							}, f.createElement(ye.Ee, {
								gfyItem: t,
								forceHigherQuality: !0,
								isStatic: n
							})))
						}
					}]), a
				}(f.Component),
				we = n(17146),
				Ne = n(20010);

			function Ie(e, t) {
				var n = v()(e);
				if (E()) {
					var r = E()(e);
					t && (r = Z()(r).call(r, (function(t) {
						return k()(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}
			const Oe = (0, d.connect)((function(e, t) {
				var n, r = t.feed,
					a = t.numberOfItems,
					i = a ? $()(n = r.items).call(n, 0, a) : r.items;
				return {
					items: Y()(i).call(i, (function(t) {
						return (0, ae.rg)(e, t)
					})),
					mobile: e.renderConfig.mobile
				}
			}), {
				sendEvent: W.qP
			})((Ce = ke = function(e) {
				(0, l.Z)(a, e);
				var t, n, r = (t = a, n = function() {
					if ("undefined" == typeof Reflect || !i()) return !1;
					if (i().sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(i()(Boolean, [], (
							function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, r = (0, u.Z)(t);
					if (n) {
						var a = (0, u.Z)(this).constructor;
						e = i()(r, arguments, a)
					} else e = r.apply(this, arguments);
					return (0, s.Z)(this, e)
				});

				function a(e) {
					var t;
					return (0, o.Z)(this, a), t = r.call(this, e), (0, x.Z)((0, M.Z)(t),
						"state", {
							rightControl: !0,
							leftControl: !1,
							hover: !1
						}), (0, x.Z)((0, M.Z)(t), "handleIntersect", (function(e) {
						return function(t, n) {
							T()(t).call(t, (function(t) {
								e({
									intersectionRatio: t
										.intersectionRatio,
									visible: t
										.isIntersecting
								})
							}))
						}
					})), (0, x.Z)((0, M.Z)(t), "updateControlsVisibility", (function(e) {
						var n = e.target,
							r = {
								leftControl: 0 !== n.scrollLeft,
								rightControl: n.scrollWidth - n.offsetWidth !== n
									.scrollLeft
							};
						r.leftControl === t.state.leftControl && r.rightControl ===
							t.state.rightControl || t.setState(function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n, r = null != arguments[t] ? arguments[
										t] : {};
									if (t % 2) T()(n = Ie(Object(r), !0)).call(
										n, (function(t) {
											(0, x.Z)(e, t, r[t])
										}));
									else if (N()) O()(e, N()(r));
									else {
										var a;
										T()(a = Ie(Object(r))).call(a, (
											function(t) {
												_()(e, t, k()(r, t))
											}))
									}
								}
								return e
							}({}, r))
					})), (0, x.Z)((0, M.Z)(t), "handleContainerScroll", (function(e) {
						e.preventDefault(), t.updateControlsVisibility(e)
					})), (0, x.Z)((0, M.Z)(t), "handleWheel", (function(e) {
						0 !== Math.abs(e.deltaX) && e.preventDefault()
					})), (0, x.Z)((0, M.Z)(t), "handleRightClick", (function() {
						var e = t.containerRef.current;
						e.scrollBy({
							left: e.offsetWidth,
							behavior: "smooth"
						}), t.props.sendEvent({
							event: "horizontal_feed_control_click",
							params: {
								type: "rigth"
							}
						})
					})), (0, x.Z)((0, M.Z)(t), "handleLeftClick", (function() {
						var e = t.containerRef.current;
						e.scrollBy({
							left: -e.offsetWidth,
							behavior: "smooth"
						}), t.props.sendEvent({
							event: "horizontal_feed_control_click",
							params: {
								type: "left"
							}
						})
					})), (0, x.Z)((0, M.Z)(t), "handleMouseEnter", (function() {
						t.setState({
							hover: !0
						})
					})), (0, x.Z)((0, M.Z)(t), "handleMouseLeave", (function() {
						t.setState({
							hover: !1
						})
					})), (0, x.Z)((0, M.Z)(t), "handleVisibilityChange", (function(e) {
						var n = e.visible;
						t.setState({
							visible: n
						}, (function() {
							n && t.props.onVisibilityChange && (t.props
								.onVisibilityChange(), t.props
								.mobile || t.containerRef.current
								.addEventListener("wheel", t
									.handleWheel))
						}))
					})), t.containerRef = f.createRef(), t
				}
				return (0, c.Z)(a, [{
					key: "shouldComponentUpdate",
					value: function(e, t) {
						return !h()(e, this.props) || !h()(t, this.state)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.props.mobile || this.containerRef.current
							.removeEventListener("wheel", this.handleWheel)
					}
				}, {
					key: "render",
					value: function() {
						var e = this.props,
							t = e.contentHeight,
							n = e.items,
							r = e.mobile,
							a = this.state,
							i = a.leftControl,
							o = a.rightControl,
							c = a.hover,
							l = a.visible,
							s = f.createElement("div", {
								className: "horizontal-scroll__items",
								style: {
									height: t
								},
								ref: this.containerRef,
								onScroll: this.handleContainerScroll
							}, l ? Y()(n).call(n, (function(e, t) {
								return f.createElement(Te, {
									key: "item-".concat(e
										.gfyId),
									gfyItem: e,
									isStatic: !c
								})
							})) : null);
						return f.createElement("div", {
							className: "horizontal-scroll-feed",
							onMouseEnter: this.handleMouseEnter,
							onMouseLeave: this.handleMouseLeave
						}, l ? s : f.createElement(we.Z, {
							onChange: this.handleVisibilityChange
						}, s), r ? null : f.createElement(f.Fragment,
							null, f.createElement("div", {
								className: pe()(
									"control control__left", {
										visible: i
									}),
								onClick: this.handleLeftClick
							}, f.createElement(Ee.Z, {
								className: "ic",
								svg: Ne.Z
							})), f.createElement("div", {
								className: pe()(
									"control control__right", {
										visible: o
									}),
								onClick: this.handleRightClick
							}, f.createElement(Ee.Z, {
								className: "ic",
								svg: Ne.Z
							}))))
					}
				}]), a
			}(f.Component), (0, x.Z)(ke, "defaultProps", {
				contentHeight: 200
			}), be = Ce)) || be;
			var Se, _e = n(2803);
			var Me = (0, d.connect)(null, {
					sendEvent: W.qP
				})(Se = function(e) {
					(0, l.Z)(a, e);
					var t, n, r = (t = a, n = function() {
						if ("undefined" == typeof Reflect || !i()) return !1;
						if (i().sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(i()(Boolean, [], (
							function() {}))), !0
						} catch (e) {
							return !1
						}
					}(), function() {
						var e, r = (0, u.Z)(t);
						if (n) {
							var a = (0, u.Z)(this).constructor;
							e = i()(r, arguments, a)
						} else e = r.apply(this, arguments);
						return (0, s.Z)(this, e)
					});

					function a() {
						var e, t;
						(0, o.Z)(this, a);
						for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] =
							arguments[c];
						return t = r.call.apply(r, L()(e = [this]).call(e, i)), (0, x.Z)((0, M.Z)(t),
							"handleClick", (function(e) {
								var n = t.props,
									r = n.analyticsContext;
								(0, n.sendEvent)({
									event: "homepage_click",
									params: {
										context: r
									}
								})
							})), t
					}
					return (0, c.Z)(a, [{
						key: "render",
						value: function() {
							var e = this.props,
								t = e.url,
								n = e.text;
							return f.createElement("div", {
								className: "section-bottom"
							}, f.createElement(ge.rU, {
								className: "section-link",
								to: t,
								onClick: this.handleClick
							}, f.createElement(ee.Z, n), f.createElement(Ee
								.Z, {
									className: "ic",
									svg: _e.Z
								})))
						}
					}]), a
				}(f.Component)) || Se,
				xe = n(83428),
				Re = n(20518);
			const Le = (0, d.connect)((function(e) {
				return {
					gamingFeed: (0, ae.nJ)(e, le)
				}
			}), {
				beginTagSearch: Re.p,
				sendEvent: W.qP
			})((function(e) {
				var t = e.beginTagSearch,
					n = e.gamingFeed,
					r = e.sendEvent;
				return f.createElement("section", null, f.createElement("div", {
					className: "section-header"
				}, f.createElement(ge.rU, {
					to: "/gaming",
					onClick: function(e) {
						r({
							event: "homepage_click",
							params: {
								context: le
							}
						})
					}
				}, f.createElement("h1", null, null)), f.createElement(xe.Z, {
					items: n.items,
					context: oe,
					keyword: le,
					maxNumberOfTags: 4,
					tagUrl: "/gifs/tag"
				})))
			}));
			n(68309);
			var Fe = n(66419),
				Pe = n.n(Fe),
				Ge = n(36384),
				He = n.n(Ge),
				Ue = function(e) {
					var t, n, r = e.items,
						a = {},
						i = L()(t = []).call(t, Pe()(new(He())(Y()(n = $()(r).call(r, 0, 4)).call(n, (
							function(e) {
								var t = e.userData ? e.userData.name || e.userData
									.username : e.userName;
								return a[t] = e.userName, t
							})))));
					return f.createElement(re.Z, {
						analyticsParams: {
							context: oe,
							keyword: ce
						},
						tags: i,
						urlPattern: function(e) {
							return "@".concat(a[e])
						}
					})
				};
			const Ae = (0, d.connect)((function(e) {
				var t = (0, ae.QY)(e);
				return {
					followFeed: t,
					followFeedItems: (0, ae.ib)(e, t)
				}
			}), {
				sendEvent: W.qP
			})((function(e) {
				var t = e.followFeed,
					n = e.followFeedItems,
					r = e.sendEvent;
				return t.items && t.items.length ? f.createElement("section", {
					className: "section--follow"
				}, f.createElement("div", {
					className: "section-header"
				}, f.createElement(ge.rU, {
					to: "/feed",
					onClick: function(e) {
						r({
							event: "homepage_click",
							params: {
								context: ce
							}
						})
					}
				}, f.createElement("h1", null, f.createElement(ee.Z, me.Z
					.followingSectionTitle))), f.createElement(Ue, {
					items: n
				})), f.createElement("div", {
					className: "section-content"
				}, f.createElement(Oe, {
					feed: t,
					numberOfItems: 10
				})), f.createElement(Me, {
					analyticsContext: ce,
					url: "/feed",
					text: me.Z.followingSectionLink
				})) : null
			}));
			var Be, We, De, Ve = n(77595);
			const Ke = (0, d.connect)((function(e) {
					return {
						leaderboard: (0, ae.Zp)(e)
					}
				}))((De = We = function(e) {
					(0, l.Z)(a, e);
					var t, n, r = (t = a, n = function() {
						if ("undefined" == typeof Reflect || !i()) return !1;
						if (i().sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(i()(Boolean, [], (
								function() {}))), !0
						} catch (e) {
							return !1
						}
					}(), function() {
						var e, r = (0, u.Z)(t);
						if (n) {
							var a = (0, u.Z)(this).constructor;
							e = i()(r, arguments, a)
						} else e = r.apply(this, arguments);
						return (0, s.Z)(this, e)
					});

					function a() {
						return (0, o.Z)(this, a), r.apply(this, arguments)
					}
					return (0, c.Z)(a, [{
						key: "render",
						value: function() {
							var e = this.props,
								t = e.leaderboard,
								n = e.numberOfShown;
							return t.isReady ? f.createElement("div", {
								className: "leaderboard-container"
							}, f.createElement("h2", {
								className: "title"
							}, f.createElement(ee.Z, {
								id: "LEADERBOARD.TITLE",
								defaultMessage: "The Week's Top Creators",
								description: "Title of the weekly leaderboard"
							})), f.createElement(Ve.Z, {
								numberOfShown: n
							})) : null
						}
					}]), a
				}(f.Component), (0, x.Z)(We, "fetchInitialData", (function(e, t) {
					return Ve.Z.fetchInitialData(e, t)
				})), Be = De)) || Be,
				je = (0, d.connect)((function(e) {
					return {
						popularFeed: (0, ae.nJ)(e, "_gfycat_all_trending")
					}
				}), {
					beginTagSearch: Re.p,
					sendEvent: W.qP
				})((function(e) {
					var t = e.popularFeed,
						n = e.beginTagSearch,
						r = e.sendEvent;
					return f.createElement("section", null, f.createElement("div", {
						className: "section-content"
					}, f.createElement(Oe, {
						onVisibilityChange: function() {
							n({
								tagName: "_gfycat_all_trending",
								count: 30
							})
						},
						feed: t,
						numberOfItems: 10
					})))
				}));
			var qe = n(36015);
			const ze = (0, d.connect)((function(e) {
				var t = (0, ae.wb)(e, ue);
				return {
					reactionsFeed: t,
					reactionsFeedItems: (0, ae.ib)(e, t)
				}
			}), {
				beginFeaturedGifsFeed: qe.r,
				sendEvent: W.qP
			})((function(e) {
				var t, n = e.beginFeaturedGifsFeed,
					r = e.reactionsFeed,
					a = e.reactionsFeedItems,
					i = e.sendEvent,
					o = $()(t = (0, ie.Bm)(a, ue)).call(t, 0, 4);
				return f.createElement("section", null, null)
			}));
			var Xe = n(91255);
			const Qe = (0, d.connect)((function(e) {
				return {
					stickersFeed: (0, ae._e)(e)
				}
			}), {
				beginStickersFeed: Xe.P,
				sendEvent: W.qP
			})((function(e) {
				var t = e.beginStickersFeed,
					n = e.stickersFeed,
					r = e.sendEvent;
				return f.createElement("section", null, null)
			}));
			var Ye, Je, $e, et = n(89171),
				tt = n(39066),
				nt = n.n(tt),
				rt = n(29309);

			function at(e, t) {
				var n = v()(e);
				if (E()) {
					var r = E()(e);
					t && (r = Z()(r).call(r, (function(t) {
						return k()(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}
			const it = (0, d.connect)((function(e) {
					return {
						hydrated: (0, ae.p5)(e)
					}
				}))(($e = Je = function(e) {
					(0, l.Z)(a, e);
					var t, n, r = (t = a, n = function() {
						if ("undefined" == typeof Reflect || !i()) return !1;
						if (i().sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(i()(Boolean, [], (
								function() {}))), !0
						} catch (e) {
							return !1
						}
					}(), function() {
						var e, r = (0, u.Z)(t);
						if (n) {
							var a = (0, u.Z)(this).constructor;
							e = i()(r, arguments, a)
						} else e = r.apply(this, arguments);
						return (0, s.Z)(this, e)
					});

					function a(e) {
						var t;
						return (0, o.Z)(this, a), t = r.call(this, e), (0, x.Z)((0, M.Z)(t),
							"state", {}), (0, x.Z)((0, M.Z)(t), "recalc", (function() {
							var e = t.props,
								n = e.items,
								r = e.maxNumberRows,
								a = e.targetRowHeight,
								i = {
									containerWidth: t.containerWidth,
									containerPadding: 0,
									boxSpacing: 10,
									targetRowHeight: a,
									targetRowHeightTolerance: .25,
									maxNumRows: r
								},
								o = nt()(Y()(n).call(n, (function(e) {
									return e.width / e.height
								})), i);
							return t.setState(function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n, r = null != arguments[t] ? arguments[
										t] : {};
									if (t % 2) T()(n = at(Object(r), !0)).call(
										n, (function(t) {
											(0, x.Z)(e, t, r[t])
										}));
									else if (N()) O()(e, N()(r));
									else {
										var a;
										T()(a = at(Object(r))).call(a, (
											function(t) {
												_()(e, t, k()(r, t))
											}))
									}
								}
								return e
							}({}, o)), o
						})), (0, x.Z)((0, M.Z)(t), "handleResize", (function() {
							t.containerWidth = t.container.offsetWidth, t.recalc()
						})), t.containerRef = f.createRef(), t.props.hydrated || (t
							.containerWidth = 964), t
					}
					return (0, c.Z)(a, [{
						key: "componentDidMount",
						value: function() {
							this.container = this.containerRef.current, this
								.containerWidth = this.container.offsetWidth, this
								.recalc(), window.addEventListener("resize", this
									.handleResize)
						}
					}, {
						key: "componentDidUpdate",
						value: function(e) {
							this.props.items.length !== e.items.length && this
								.recalc()
						}
					}, {
						key: "render",
						value: function() {
							var e = this.props,
								t = e.items,
								n = e.context,
								r = this.state,
								a = (r.gridHeight, r.containerHeight),
								i = r.boxes;
							return f.createElement("div", {
								className: "horizontal-grid",
								style: {
									height: a
								},
								ref: this.containerRef
							}, t && i && i.length ? Y()(i).call(i, (
								function(e, r) {
									var a = e.top,
										i = e.left,
										o = e.width,
										c = e.height;
									return f.createElement("div", {
										className: "horizontal-grid__item",
										style: {
											top: "".concat(a,
												"px"),
											left: "".concat(i,
												"px"),
											width: o,
											height: c
										},
										key: "horizontal-grid__item-"
											.concat(r)
									}, f.createElement(rt.Z, {
										context: n,
										gfyItem: t[r],
										forceHigherQuality:
											!0
									}))
								})) : null)
						}
					}]), a
				}(f.Component), (0, x.Z)(Je, "defaultProps", {
					targetRowHeight: 200
				}), Ye = $e)) || Ye,
				ot = (0, d.connect)((function(e) {
					var t = (0, ae.wb)(e, de);
					return {
						trendingFeed: t,
						trendingFeedItems: (0, ae.ib)(e, t),
						mobile: e.renderConfig.mobile
					}
				}), {
					sendEvent: W.qP
				})((function(e) {
					var t, n, r = e.trendingFeed,
						a = e.trendingFeedItems,
						i = e.mobile,
						o = e.sendEvent,
						c = $()(t = (0, ie.Bm)(a, de)).call(t, 0, 4);
					return f.createElement("section", {
						className: "section--top"
					}, f.createElement("div", {
						className: "section-header"
					}, f.createElement(ge.rU, {
						to: "/discover/trending-gifs",
						onClick: function(e) {
							o({
								event: "homepage_click",
								params: {
									context: de
								}
							})
						}
					}, f.createElement("h1", null, f.createElement(ee.Z, me.Z
						.trendingSectionTitle))), f.createElement(re.Z, {
						analyticsParams: {
							context: oe,
							keyword: de
						},
						tags: c,
						urlPattern: function(e) {
							return "/discover/".concat((0, ie.Xu)(e), "-gifs")
						}
					})), f.createElement("div", {
						className: "section-content"
					}, i ? f.createElement(et.Z, {
						context: oe,
						items: $()(n = r.items).call(n, 0, 20)
					}) : f.createElement(it, {
						context: "grid_homepage",
						maxNumberRows: 2,
						items: $()(a).call(a, 0, 20)
					})), f.createElement(Me, {
						analyticsContext: de,
						url: "/discover/trending-gifs",
						text: me.Z.trendingSectionLink
					}))
				}));
			var ct = n(36419),
				lt = n(14194),
				st = n(52266),
				ut = n(91478),
				ft = n(56474),
				dt = n.n(ft),
				mt = n(59340),
				ht = n.n(mt),
				gt = n(63963),
				vt = n(12269);

			function pt(e, t) {
				var n = v()(e);
				if (E()) {
					var r = E()(e);
					t && (r = Z()(r).call(r, (function(t) {
						return k()(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Et(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n, r = null != arguments[t] ? arguments[t] : {};
					if (t % 2) T()(n = pt(Object(r), !0)).call(n, (function(t) {
						(0, x.Z)(e, t, r[t])
					}));
					else if (N()) O()(e, N()(r));
					else {
						var a;
						T()(a = pt(Object(r))).call(a, (function(t) {
							_()(e, t, k()(r, t))
						}))
					}
				}
				return e
			}
			const yt = function(e) {
				var t = e.intl,
					n = e.items,
					r = Y()(n).call(n, (function(e) {
						return "".concat((0, Ze.K)(e))
					})),
					a = "https://gfycat.com",
					i = (0, vt.Yp)(r, a, ""),
					o = (0, gt.dK)({
						title: "Gfycat",
						titleEndingObject: me.Z.metaTitle,
						intl: t
					});
				return dt()(Et(Et({}, o), {}, {
					meta: [{
						name: "twitter:title",
						content: o.title
					}, {
						property: "og:url",
						content: a
					}, {
						property: "og:title",
						content: o.title
					}],
					script: [{
						type: "application/ld+json",
						innerHTML: ht()((0, vt.PN)())
					}, {
						type: "application/ld+json",
						innerHTML: ht()(i)
					}]
				}))
			};
			var Zt;
			var bt = (0, d.connect)((function(e) {
				return {
					isLoggedIn: (0, ae.M7)(e),
					isPro: (0, ae.Os)(e),
					trendingFeedItems: (0, ae.ib)(e, (0, ae.wb)(e, de))
				}
			}), {
				beginFollowFeed: ct.qO,
				beginLeaderboard: st.o,
				beginTrendingTags: lt.Ht,
				beginFeaturedTerm: ut.ZK,
				sendEvent: W.qP
			})(Zt = (0, X.Z)("homepage_view")(Zt = function(e) {
				(0, l.Z)(a, e);
				var t, n, r = (t = a, n = function() {
					if ("undefined" == typeof Reflect || !i()) return !1;
					if (i().sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(i()(Boolean, [], (
							function() {}))), !0
					} catch (e) {
						return !1
					}
				}(), function() {
					var e, r = (0, u.Z)(t);
					if (n) {
						var a = (0, u.Z)(this).constructor;
						e = i()(r, arguments, a)
					} else e = r.apply(this, arguments);
					return (0, s.Z)(this, e)
				});

				function a() {
					return (0, o.Z)(this, a), r.apply(this, arguments)
				}
				return (0, c.Z)(a, [{
					key: "componentDidMount",
					value: function() {
						this.props.isLoggedIn && this.props.beginFollowFeed(),
							this.props.beginLeaderboard(), this.props
							.beginTrendingTags({
								term: le,
								count: 50
							}), this.props.beginFeaturedTerm({
								term: ue,
								count: 50
							})
					}
				}, {
					key: "shouldComponentUpdate",
					value: function(e, t) {
						return !h()(e, this.props) || !h()(t, this.state)
					}
				}, {
					key: "render",
					value: function() {
						var e = this.props,
							t = e.isPro,
							n = e.trendingFeedItems;
						return f.createElement(j.C, null, f.createElement(
							"div", {
								className: "home-container"
							}, f.createElement(q.Z, {
								meta: yt,
								items: n
							}), f.createElement(K, null), f
							.createElement("section", {
								className: "section--top"
							}, f.createElement("div", {
								className: "section-header"
							}, f.createElement("h1", null,
								"Service Notice")), f.createElement(
								"div", {
									className: "section-content"
								}, f.createElement("h1", {
										style: {
											color: "yellow"
										}
									},
									"Lorem Ipsum Dolor Sit Amet"
									))), f.createElement(ot, null), f
							.createElement("div", {
									className: "left-block"
								}, f.createElement(je, null), f
								.createElement(Ae, null), f
								.createElement(Le, null), f
								.createElement(ze, null), f
								.createElement(Qe, null)), f
							.createElement("div", {
								className: "right-block"
							}, f.createElement(Ke, {
								numberOfShown: 10
							}), f.createElement("div", null, f
								.createElement(he, null), t ? null :
								f.createElement(z.Z, {
									type: 6
								})))))
					}
				}]), a
			}(f.Component)) || Zt) || Zt
		},
		36419: (e, t, n) => {
			"use strict";
			n.d(t, {
				qO: () => M,
				MT: () => x
			});
			var r = n(71509),
				a = n(93476),
				i = n.n(a),
				o = n(2991),
				c = n.n(o),
				l = n(86902),
				s = n.n(l),
				u = n(14310),
				f = n.n(u),
				d = n(20116),
				m = n.n(d),
				h = n(34074),
				g = n.n(h),
				v = n(78914),
				p = n.n(v),
				E = n(39649),
				y = n.n(E),
				Z = n(20368),
				b = n.n(Z),
				k = n(63978),
				C = n.n(k),
				T = n(8391),
				w = n(2142),
				N = n(68626),
				I = n(61156);

			function O(e, t) {
				var n = s()(e);
				if (f()) {
					var r = f()(e);
					t && (r = m()(r).call(r, (function(t) {
						return g()(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function S(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n, a = null != arguments[t] ? arguments[t] : {};
					if (t % 2) p()(n = O(Object(a), !0)).call(n, (function(t) {
						(0, r.Z)(e, t, a[t])
					}));
					else if (y()) b()(e, y()(a));
					else {
						var i;
						p()(i = O(Object(a))).call(i, (function(t) {
							C()(e, t, g()(a, t))
						}))
					}
				}
				return e
			}
			var _ = function(e) {
					var t = e.count,
						n = e.begin;
					return function(e, r) {
						var a = (0, I.QY)(r()),
							o = a.cursor,
							l = a.items,
							s = void 0 === l ? [] : l,
							u = a.hasMore,
							f = a.promise;
						if (f) return f;
						if (!u || n && s.length) return i().resolve();
						var d = T.Z.getMyFollowFeed({
							count: t,
							cursor: o
						}).then((function(t) {
							var n = t.cursor,
								r = t.gfycats;
							e((0, N.VX)(r)), e({
								type: w.dz,
								cursor: n,
								items: c()(r).call(r, (function(e) {
									return e.gfyId
								}))
							})
						}), (function(t) {
							var n = t.errorMessage;
							e({
								type: w.VR,
								errorMessage: n
							})
						}));
						return e({
							type: w.ah
						}), d
					}
				},
				M = function(e) {
					return _(S(S({}, e), {}, {
						begin: !0
					}))
				},
				x = function(e) {
					return _(S({}, e))
				}
		},
		52266: (e, t, n) => {
			"use strict";
			n.d(t, {
				o: () => M,
				p: () => x
			});
			var r = n(71509),
				a = n(93476),
				i = n.n(a),
				o = n(78914),
				c = n.n(o),
				l = n(2991),
				s = n.n(l),
				u = n(86902),
				f = n.n(u),
				d = n(14310),
				m = n.n(d),
				h = n(20116),
				g = n.n(h),
				v = n(34074),
				p = n.n(v),
				E = n(39649),
				y = n.n(E),
				Z = n(20368),
				b = n.n(Z),
				k = n(63978),
				C = n.n(k),
				T = n(8391),
				w = n(61156),
				N = n(2684),
				I = n(19330);

			function O(e, t) {
				var n = f()(e);
				if (m()) {
					var r = m()(e);
					t && (r = g()(r).call(r, (function(t) {
						return p()(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function S(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n, a = null != arguments[t] ? arguments[t] : {};
					if (t % 2) c()(n = O(Object(a), !0)).call(n, (function(t) {
						(0, r.Z)(e, t, a[t])
					}));
					else if (y()) b()(e, y()(a));
					else {
						var i;
						c()(i = O(Object(a))).call(i, (function(t) {
							C()(e, t, p()(a, t))
						}))
					}
				}
				return e
			}
			var _ = function(e) {
					var t = e.count,
						n = void 0 === t ? 10 : t,
						r = e.begin;
					return function(e, t) {
						var a = (0, w.Zp)(t()),
							o = a.cursor,
							l = a.isReady,
							u = a.promise,
							f = a.hasMore;
						if (u) return u;
						if (r && l || !f) return i().resolve();
						var d = (0, N.J)(T.Z.getLeaderboard({
							cursor: o,
							count: n
						})).then((function(t) {
							var n = t.users,
								r = t.cursor;
							c()(n).call(n, (function(e) {
								e.userid = e.username.toLowerCase()
							})), e({
								type: I.yp,
								cursor: r,
								items: s()(n).call(n, (function(e) {
									return e.userid
								})),
								users: n
							})
						}), (function(t) {
							var n = t.errorMessage;
							return e({
								type: I.wy,
								errorMessage: n
							}), i().reject(n)
						}));
						return e({
							type: I.XR,
							promise: d
						}), d
					}
				},
				M = function(e) {
					return _(S(S({}, e), {}, {
						begin: !0
					}))
				},
				x = function(e) {
					return _(S(S({}, e), {}, {
						begin: !1
					}))
				}
		},
		79145: () => {}
	}
]);
