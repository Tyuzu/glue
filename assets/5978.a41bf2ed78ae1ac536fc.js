(self.webpackChunkFrontendReact = self.webpackChunkFrontendReact || []).push([
	[5978], {
		15978: (e, t, r) => {
			"use strict";
			r.r(t), r.d(t, {
				default: () => pe
			});
			var a = r(1068),
				n = r.n(a),
				c = r(14310),
				i = r.n(c),
				o = r(20116),
				l = r.n(o),
				s = r(34074),
				u = r.n(s),
				p = r(78914),
				m = r.n(p),
				d = r(39649),
				f = r.n(d),
				h = r(20368),
				E = r.n(h),
				g = r(63978),
				Z = r.n(g),
				v = r(20530),
				k = r(26849),
				y = r(30081),
				b = r(97647),
				S = r(81010),
				C = r(10891),
				I = r(71509),
				N = (r(68309), r(32366)),
				U = r.n(N),
				T = r(86902),
				L = r.n(T),
				M = r(67294),
				P = r(49140),
				x = r(44012),
				F = r(64593),
				O = r(61409),
				_ = r(43011),
				A = r(18240),
				w = r(43086),
				B = r(98346),
				j = r(50045),
				G = r(31581),
				R = r.n(G),
				K = r(33032),
				X = r.n(K),
				V = (r(45697), r(13317)),
				H = function() {
					function e() {
						if ((0, v.Z)(this, e), (0, I.Z)(this, "isLoaded", !1), e.singletonInstance) return e
							.singletonInstance;
						e.singletonInstance = this
					}
					return (0, k.Z)(e, [{
						key: "load",
						value: function() {
							this.isLoaded || "undefined" != typeof window && ((0, V.Z)({
								id: "recaptcha-script",
								innerHTML: ""
							}), this.isLoaded = !0)
						}
					}]), e
				}();
			(0, I.Z)(H, "singletonInstance", void 0);
			const W = new H;
			var D, q, z, J = "signup-recaptcha",
				Q = function(e) {
					(0, b.Z)(c, e);
					var t, r, a = (t = c, r = function() {
						if ("undefined" == typeof Reflect || !n()) return !1;
						if (n().sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(n()(Boolean, [], (
							function() {}))), !0
						} catch (e) {
							return !1
						}
					}(), function() {
						var e, a = (0, C.Z)(t);
						if (r) {
							var c = (0, C.Z)(this).constructor;
							e = n()(a, arguments, c)
						} else e = a.apply(this, arguments);
						return (0, S.Z)(this, e)
					});

					function c(e) {
						var t;
						return (0, v.Z)(this, c), t = a.call(this, e), (0, I.Z)((0, y.Z)(t),
							"captchaSubmitCallback", (function(e) {
								t.props.onSuccess && t.props.onSuccess(e)
							})), (0, I.Z)((0, y.Z)(t), "captchaExpiredCallback", (function() {
							console.log("captcha expired"), t.props.onExpired && t.props
								.onExpired()
						})), (0, I.Z)((0, y.Z)(t), "captchaErrorCallback", (function(e) {
							console.log("captch error", e)
						})), (0, I.Z)((0, y.Z)(t), "clearAll", (function() {
							clearInterval(t.scriptLoadInterval), clearTimeout(t.timeout)
						})), W.load(), t
					}
					return (0, k.Z)(c, [{
						key: "componentDidMount",
						value: function() {
							var e = this;
							this.scriptLoadInterval = R()((function() {
								grecaptcha && grecaptcha.render && (e
								.clearAll(), grecaptcha.render(J, {
										theme: "dark",
										sitekey: "6Ld3TMAUAAAAABfjmTdmuM4MWe-KU5vuKThoIMLp",
										callback: e
											.captchaSubmitCallback,
										"expired-callback": e
											.captchaExpiredCallback,
										"error-callback": e
											.captchaErrorCallback
									}))
							}), 100), this.timeout = X()((function() {
								clearInterval(e.scriptLoadInterval)
							}), 5e3)
						}
					}, {
						key: "componentWillUnmount",
						value: function() {
							this.clearAll()
						}
					}, {
						key: "render",
						value: function() {
							return M.createElement("div", null)
						}
					}]), c
				}(M.PureComponent),
				Y = r(33644),
				$ = r(15094),
				ee = r(3999),
				te = r(59296),
				re = r(56474),
				ae = r.n(re),
				ne = r(77766),
				ce = r.n(ne),
				ie = r(63963),
				oe = r(55260);

			function le(e, t) {
				var r = L()(e);
				if (i()) {
					var a = i()(e);
					t && (a = l()(a).call(a, (function(t) {
						return u()(e, t).enumerable
					}))), r.push.apply(r, a)
				}
				return r
			}

			function se(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r, a = null != arguments[t] ? arguments[t] : {};
					if (t % 2) m()(r = le(Object(a), !0)).call(r, (function(t) {
						(0, I.Z)(e, t, a[t])
					}));
					else if (f()) E()(e, f()(a));
					else {
						var n;
						m()(n = le(Object(a))).call(n, (function(t) {
							Z()(e, t, u()(a, t))
						}))
					}
				}
				return e
			}
			var ue = {
					email: "email",
					password: "password",
					username: "username",
					TERMS_CHECKBOX: "terms_checkbox"
				},
				pe = (D = (0, P.connect)((function(e) {
					return {
						auth: e.auth
					}
				}), {
					signup: w.IU,
					facebookOAuth: w.L3
				}), q = (0, _.Z)(), (0, A.Z)(z = D(z = q(z = (0, O.EN)(z = function(e) {
					(0, b.Z)(c, e);
					var t, r, a = (t = c, r = function() {
						if ("undefined" == typeof Reflect || !n()) return !1;
						if (n().sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(n()(Boolean,
							[], (function() {}))), !0
						} catch (e) {
							return !1
						}
					}(), function() {
						var e, a = (0, C.Z)(t);
						if (r) {
							var c = (0, C.Z)(this).constructor;
							e = n()(a, arguments, c)
						} else e = a.apply(this, arguments);
						return (0, S.Z)(this, e)
					});

					function c(e) {
						var t, r;
						return (0, v.Z)(this, c), r = a.call(this, e), (0, I.Z)((0, y.Z)
							(r), "handleSubmit", (function(e) {
								e.preventDefault();
								var t = r.state,
									a = t.email,
									n = t.password,
									c = t.username,
									i = t.terms_checkbox;
								r.props.signup({
									email: a,
									password: n,
									username: c,
									consent_terms_privacy: i
								}).catch((function(e) {
									"EmailTaken" === (e
										.errorMessage || {}).code &&
										r.handleEmailError({
											type: "taken"
										})
								}))
							})), (0, I.Z)((0, y.Z)(r), "isFormError", (function() {
							var e, t = document.forms.signup.elements;
							return U()(e = L()(r.state.error)).call(e, (
								function(e, a) {
									return e || !!r.state.error[a]
										.value || !t[a].validity
										.valid
								}), !1)
						})), (0, I.Z)((0, y.Z)(r), "updateFormErrorState", (
							function() {
								r.setState({
									formError: r.isFormError()
								})
							})), (0, I.Z)((0, y.Z)(r), "handleFormChange", (
							function(e) {
								var t, a = e.target,
									n = a.checked,
									c = a.validity,
									i = a.value,
									o = a.name;
								r.setState((t = {}, (0, I.Z)(t, o, o === ue
									.TERMS_CHECKBOX ? n : i), (0, I
									.Z)(t, "error", se(se({}, r
									.state.error), {}, (0, I
									.Z)({}, o, {
									value: !c.valid
								}))), t), r.updateFormErrorState)
							})), (0, I.Z)((0, y.Z)(r), "handleEmailError", (
							function(e) {
								var t = e.type;
								r.setState({
									error: se(se({}, r.state
									.error), {}, {
										email: {
											value: !0,
											type: t
										}
									}),
									formError: !0
								})
							})), (0, I.Z)((0, y.Z)(r), "handleUsernameError", (
							function(e) {
								r.setState({
									error: se(se({}, r.state
									.error), {}, {
										username: e
									}),
									formError: !0
								})
							})), r.state = {
							error: se({}, U()(t = L()(ue)).call(t, (function(e, t) {
								return e[ue[t]] = {}, e
							}), {})),
							formError: !0,
							captchaValid: !1
						}, r
					}
					return (0, k.Z)(c, [{
						key: "render",
						value: function() {
							var e, t, r = this.state,
								a = r.error,
								n = r.formError,
								i = this.props.auth,
								o = i.isFetching,
								u = M.createElement(x.Z, {
									id: "SIGNUP.CHECKBOX_LABEL",
									defaultMessage: "I have read, understand, and agree to the {termsOfService} and {privacyPolicy}",
									values: {
										termsOfService: M
											.createElement(O.rU, {
													className: "form-link",
													to: "/terms",
													target: "_blank"
												}, M.createElement(x
													.Z, ee.Z
													.termsOfService
													)),
										privacyPolicy: M
											.createElement(O.rU, {
												className: "form-link",
												to: "/privacy",
												target: "_black"
											}, M.createElement(x
												.Z, ee.Z
												.privacyPolicy))
									}
								});
							return M.createElement(Y.C, null, M
								.createElement("div", {
										className: "signup-container form-container"
									}, M.createElement(F.Z, (t = {
										title: this.props
											.intl
											.formatMessage(
												te.Z.title)
									}.title, ae()({
										title: t,
										titleTemplate: "%s",
										meta: ce()(
											e = [])
											.call(e, ie
												.FM, [{
													name: "twitter:title",
													content: t
												}, {
													property: "og:url",
													content: "https://gfycat.com/signup"
												}, {
													property: "og:title",
													content: t
												}])
									}))), M.createElement("h1",
										null, M.createElement(x.Z, {
											id: "SIGNUP.TITLE",
											defaultMessage: "Sign Up",
											description: "Sign Up page title"
										})), M.createElement(
									"form", {
										autoComplete: "off",
										onChange: this
											.handleFormChange,
										onSubmit: this
											.handleSubmit,
										name: "signup"
									}, M.createElement($.XV, {
										autoFocus: !0,
										className: "form-input",
										name: ue.username,
										onError: this
											.handleUsernameError
									}), M.createElement($.WU, {
										className: "form-input",
										name: ue.password
									}), M.createElement($.U5, {
										className: "form-input",
										error: a[ue.email],
										label: M
											.createElement(x
												.Z, {
													id: "SIGNUP.EMAIL_INPUT_LABEL",
													defaultMessage: "Enter an email address",
													description: "Email address input label"
												}),
										name: ue.email
									}), M.createElement(Q, null), M.createElement(oe.Z, {
										className: "terms-checkbox",
										id: "partnerTerms",
										label: u,
										name: ue
											.TERMS_CHECKBOX,
										required: !0,
										value: this.state[ue
											.TERMS_CHECKBOX
											]
									}), M.createElement(j.ZP, {
										disabled: n,
										fullWidth: !0,
										pending: o,
										type: j.V5.FILLED,
										submit: !0
									}, M.createElement(x
									.Z, {
										id: "SIGNUP.SIGNUP_BUTTON_TEXT",
										defaultMessage: "Sign Up",
										description: "Sign Up button text"
									})), s ? M.createElement(M
										.Fragment, null, M
										.createElement("div", {
											className: "gfycat-text-regular form-submit-options-text"
										}, M.createElement(x
											.Z, {
												id: "SIGNUP.OR",
												defaultMessage: "Or",
												description: "Sign up page - or"
											})), M
										.createElement(j.ZP, null, null)) : null), M
									.createElement(B.g, {
										link: "login",
										className: "form-link login-link"
									}, M.createElement(x.Z, {
										id: "SIGNUP.LOGIN_LINK_TEXT",
										defaultMessage: "Already have an account?",
										description: "Login link test"
									})), M.createElement(O.rU, null, null)))
						}
					}]), c
				}(M.Component)) || z) || z) || z) || z)
		}
	}
]);
