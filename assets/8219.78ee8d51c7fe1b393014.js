(self.webpackChunkFrontendReact = self.webpackChunkFrontendReact || []).push([[8219], {
    9053: (e,t,n)=>{
        n(21917)
    }
    ,
    20455: (e,t,n)=>{
        e.exports = n(47795)
    }
    ,
    5693: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>h
        });
        var a = n(1068)
          , r = n.n(a)
          , o = n(20530)
          , i = n(26849)
          , l = n(30081)
          , s = n(97647)
          , c = n(81010)
          , d = n(10891)
          , u = n(71509)
          , p = n(67294);
        n(45697);
        var f = function(e) {
            (0,
            s.Z)(f, e);
            var t, n, a = (t = f,
            n = function() {
                if ("undefined" == typeof Reflect || !r())
                    return !1;
                if (r().sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(r()(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, a = (0,
                d.Z)(t);
                if (n) {
                    var o = (0,
                    d.Z)(this).constructor;
                    e = r()(a, arguments, o)
                } else
                    e = a.apply(this, arguments);
                return (0,
                c.Z)(this, e)
            }
            );
            function f(e) {
                var t;
                return (0,
                o.Z)(this, f),
                t = a.call(this, e),
                (0,
                u.Z)((0,
                l.Z)(t), "handleClick", (function() {
                    t.setState({
                        on: !t.state.on
                    }),
                    t.props.onClick && t.props.onClick({
                        value: !t.state.on
                    })
                }
                )),
                (0,
                u.Z)((0,
                l.Z)(t), "handleChange", (function() {
                    t.props.onChange && t.props.onChange({
                        value: t.state.on
                    })
                }
                )),
                t.state = {
                    on: !0 === t.props.on
                },
                t
            }
            return (0,
            i.Z)(f, [{
                key: "componentDidUpdate",
                value: function(e) {
                    e.on !== this.props.on && this.props.on !== this.state.on && this.setState({
                        on: this.props.on
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.on
                      , t = this.props.disabled;
                    return p.createElement("div", {}, null, null)
                }
            }]),
            f
        }(p.Component);
        (0,
        u.Z)(f, "defaultProps", {
            on: !1,
            disabled: !1
        });
        const h = f
    }
    ,
    68219: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            default: ()=>$t
        });
        var a, r, o = n(1068), i = n.n(o), l = n(20530), s = n(26849), c = n(97647), d = n(81010), u = n(10891), p = (n(74916),
        n(23123),
        n(67294)), f = n(49140), h = n(28529), m = n(6111), g = n(30081), y = n(71509), v = n(77766), Z = n.n(v), E = n(20116), C = n.n(E), I = n(33032), k = n.n(I), S = n(81643), b = n.n(S), O = n(23353), T = n.n(O), A = n(94184), N = n.n(A), w = n(44012), R = n(33311), _ = (n(45697),
        n(86902)), B = n.n(_), M = n(14310), P = n.n(M), L = n(34074), x = n.n(L), G = n(78914), F = n.n(G), D = n(39649), U = n.n(D), V = n(20368), W = n.n(V), z = n(63978), H = n.n(z), Y = (n(68309),
        n(29254),
        n(71114)), j = n(61156), q = n(58857);
        function K(e, t) {
            var n = B()(e);
            if (P()) {
                var a = P()(e);
                t && (a = C()(a).call(a, (function(t) {
                    return x()(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function X(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, a = null != arguments[t] ? arguments[t] : {};
                if (t % 2)
                    F()(n = K(Object(a), !0)).call(n, (function(t) {
                        (0,
                        y.Z)(e, t, a[t])
                    }
                    ));
                else if (U())
                    W()(e, U()(a));
                else {
                    var r;
                    F()(r = K(Object(a))).call(r, (function(t) {
                        H()(e, t, x()(a, t))
                    }
                    ))
                }
            }
            return e
        }
        var Q, $, J, ee, te, ne = (a = {},
        (0,
        y.Z)(a, q.h_.SIZE_728_90, 728),
        (0,
        y.Z)(a, q.h_.SIZE_300_250, 300),
        (0,
        y.Z)(a, q.h_.SIZE_320_50, 320),
        a), ae = (0,
        f.connect)((function(e) {
            return {
                shouldRenderAds: (0,
                j.g3)(e),
                mobile: e.renderConfig.mobile
            }
        }
        ), {
            sendEvent: Y.qP
        })(r = function(e) {
            (0,
            c.Z)(r, e);
            var t, n, a = (t = r,
            n = function() {
                if ("undefined" == typeof Reflect || !i())
                    return !1;
                if (i().sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(i()(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, a = (0,
                u.Z)(t);
                if (n) {
                    var r = (0,
                    u.Z)(this).constructor;
                    e = i()(a, arguments, r)
                } else
                    e = a.apply(this, arguments);
                return (0,
                d.Z)(this, e)
            }
            );
            function r(e) {
                var t;
                return (0,
                l.Z)(this, r),
                t = a.call(this, e),
                (0,
                y.Z)((0,
                g.Z)(t), "init", (function() {
                    t.setState({
                        renderAd: !0
                    }, (function() {
                        t.sendImpressions()
                    }
                    ))
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "getRandomURL", (function() {
                    var e = t.props.urls;
                    return e && 1 !== e.length ? Math.floor(Math.random() * e.length) : 0
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "sendImpressions", (function() {
                    t.props.sendEvent({
                        event: "".concat(t.props.name, "_view"),
                        params: {
                            size: t.props.size
                        }
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleClick", (function() {
                    t.props.sendEvent({
                        event: "".concat(t.props.name, "_click"),
                        params: {
                            size: t.props.size
                        }
                    })
                }
                )),
                t.state = {
                    urlId: t.getRandomURL(),
                    renderAd: !1
                },
                t
            }
            return (0,
            s.Z)(r, [{
                key: "componentDidMount",
                value: function() {
                    this.props.shouldRenderAds && this.init()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props.shouldRenderAds;
                    t !== e.shouldRenderAds && t && this.init()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.children
                      , n = e.mobile
                      , a = e.urls
                      , r = e.size
                      , o = e.style
                      , i = this.state
                      , l = i.renderAd
                      , s = i.urlId
                      , c = n ? {
                        textAlign: "center",
                        margin: "10px auto"
                    } : {
                        marginLeft: "auto",
                        marginRight: "auto"
                    };
                    return l ? p.createElement("div", {
                        style: X(X({
                            width: ne[r]
                        }, c), o),
                        onClick: this.handleClick
                    }, t || p.createElement("a", {
                        href: a[s].link,
                        rel: "noopener",
                        target: "_blank"
                    }, p.createElement("img", {
                        style: {
                            width: ne[r]
                        },
                        src: a[s].adUrl
                    }))) : null
                }
            }]),
            r
        }(p.Component)) || r, re = n(36384), oe = n.n(re), ie = n(20455), le = n.n(ie), se = n(46830), ce = {
            COLLECTIONS: "collections",
            CREATE: "create",
            GAMING: "gaming",
            MANAGE: "manage",
            POPULAR: "popular",
            PROFILES: "profiles",
            SAVEANDLIKE: "saveandlike",
            SAVEYOURGIFS: "saveyourgifs",
            SAVEYOURGIFSSOOPER: "saveyourgifssooper",
            SYNC: "sync"
        }, de = (Q = {},
        (0,
        y.Z)(Q, q.h_.SIZE_728_90, "dktp2"),
        (0,
        y.Z)(Q, q.h_.SIZE_300_250, "dktp1"),
        (0,
        y.Z)(Q, q.h_.SIZE_320_50, "mbl1"),
        Q), ue = (te = {},
        (0,
        y.Z)(te, q.h_.SIZE_728_90, new (oe())(C()($ = Z()(J = []).call(J, le()(ce))).call($, (function(e) {
            return e !== ce.SAVEYOURGIFS
        }
        )))),
        (0,
        y.Z)(te, q.h_.SIZE_300_250, new (oe())(Z()(ee = []).call(ee, le()(ce)))),
        (0,
        y.Z)(te, q.h_.SIZE_320_50, new (oe())([ce.COLLECTIONS, ce.CREATE, ce.GAMING, ce.POPULAR, ce.PROFILES, ce.SAVEYOURGIFS, ce.SYNC])),
        te), pe = function(e, t, n) {
            var a, r, o = n;
            if (!ue[e].has(t))
                return null;
            if (!o)
                switch (t) {
                case ce.GAMING:
                    n = "https://gfycat.com/gaming";
                    break;
                case ce.POPULAR:
                    n = "https://gfycat.com/popular-gifs";
                    break;
                case ce.CREATE:
                    n = "https://gfycat.com/create";
                    break;
                default:
                    n = "https://gfycat.com/signup"
                }
            var i = de[e];
            return {
                adUrl: Z()(a = Z()(r = "https://assets.gfycat.com/self/".concat(i, "/")).call(r, t, "_")).call(a, i, ".png"),
                link: n
            }
        };
        const fe = function(e, t) {
            return function(e, t) {
                var n, a;
                return C()(n = Z()(a = [pe(e, ce.GAMING), pe(e, ce.POPULAR)]).call(a, !t && [pe(e, ce.COLLECTIONS), pe(e, ce.PROFILES), pe(e, ce.MANAGE), pe(e, ce.SAVEANDLIKE), pe(e, ce.SAVEYOURGIFS), pe(e, ce.SAVEYOURGIFSSOOPER), pe(e, ce.SYNC, e === q.h_.SIZE_320_50 ? (0,
                se.Dt)() ? "https://play.google.com/store/apps/details?id=com.gfycat&hl=en" : "https://apps.apple.com/us/app/gfycat-send-gifs-memes/id1034129733" : null)], t && [pe(e, ce.CREATE)])).call(n, (function(e) {
                    return Boolean(e)
                }
                ))
            }(e, t)
        };
        var he;
        var me, ge, ye, ve, Ze = (0,
        f.connect)((function(e) {
            return {
                isLoggedIn: (0,
                j.M7)(e)
            }
        }
        ))(he = function(e) {
            (0,
            c.Z)(r, e);
            var t, n, a = (t = r,
            n = function() {
                if ("undefined" == typeof Reflect || !i())
                    return !1;
                if (i().sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(i()(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, a = (0,
                u.Z)(t);
                if (n) {
                    var r = (0,
                    u.Z)(this).constructor;
                    e = i()(a, arguments, r)
                } else
                    e = a.apply(this, arguments);
                return (0,
                d.Z)(this, e)
            }
            );
            function r() {
                var e, t;
                (0,
                l.Z)(this, r);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return t = a.call.apply(a, Z()(e = [this]).call(e, o)),
                (0,
                y.Z)((0,
                g.Z)(t), "state", {
                    renderAd: !1
                }),
                t
            }
            return (0,
            s.Z)(r, [{
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        renderAd: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.size
                      , n = e.style
                      , a = e.id
                      , r = e.isLoggedIn;
                    return this.state.renderAd ? p.createElement(ae, {
                        urls: fe(t, r),
                        name: "house_ad",
                        size: t,
                        id: a,
                        key: a,
                        style: n
                    }) : null
                }
            }]),
            r
        }(p.Component)) || he, Ee = n(25784), Ce = n(87875), Ie = n(50045), ke = n(33644), Se = n(69109), be = (n(66992),
        n(41539),
        n(88674),
        n(78783),
        n(33948),
        n(93476)), Oe = n.n(be), Te = n(18446), Ae = n.n(Te), Ne = n(74806), we = n(10754), Re = (n(21),
        n(15094)), _e = n(85950), Be = n(3999), Me = n(51014), Pe = n(99811), Le = n(25155), xe = n(55087), Ge = n(94870), Fe = n(32024), De = n(3896);
        var Ue = "title"
          , Ve = "tags"
          , We = (me = (0,
        f.connect)((function(e) {
            return {
                userid: (0,
                j.RY)(e)
            }
        }
        ), {
            deleteGif: Le.Zl,
            updateGifTitle: Le.aY,
            updateGifTags: Le.Cp,
            updateGifPublished: Le.g7,
            openModal: xe.openModal,
            showToastNotification: Ge.I
        }),
        (0,
        Ne.ZP)(ge = me((ve = ye = function(e) {
            (0,
            c.Z)(r, e);
            var t, n, a = (t = r,
            n = function() {
                if ("undefined" == typeof Reflect || !i())
                    return !1;
                if (i().sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(i()(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, a = (0,
                u.Z)(t);
                if (n) {
                    var r = (0,
                    u.Z)(this).constructor;
                    e = i()(a, arguments, r)
                } else
                    e = a.apply(this, arguments);
                return (0,
                d.Z)(this, e)
            }
            );
            function r(e) {
                var t;
                (0,
                l.Z)(this, r),
                t = a.call(this, e),
                (0,
                y.Z)((0,
                g.Z)(t), "isUpdated", (function() {
                    return t.state.title !== t.props.gfyItem.title || !Ae()(t.state.tags, t.props.gfyItem.tags) || t.state.published !== (0,
                    _e.Z)(t.props.gfyItem.published)
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleTitleChange", (function(e) {
                    t.setState({
                        title: e
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleTagsChange", (function(e) {
                    t.setState({
                        tags: e
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleVisibilityChange", (function(e) {
                    var n = e.published;
                    t.setState({
                        published: n
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleSaveButtonClick", (function() {
                    var e = t.state
                      , n = e.title
                      , a = e.tags
                      , r = e.published
                      , o = t.props.gfyItem
                      , i = o.gfyId
                      , l = n !== o.title ? t.props.updateGifTitle({
                        gfyId: i,
                        title: n
                    }) : Oe().resolve()
                      , s = Ae()(a, o.tags) ? Oe().resolve() : t.props.updateGifTags({
                        gfyId: i,
                        tags: a
                    })
                      , c = r !== (0,
                    _e.Z)(o.published) ? t.props.updateGifPublished({
                        gfyId: i,
                        published: r
                    }) : Oe().resolve();
                    Oe().all([l, s, c]).catch((function(e) {
                        t.props.showToastNotification({
                            toastType: Pe.N.ERROR
                        })
                    }
                    )),
                    t.props.onBackButtonClick()
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleDelete", (function() {
                    var e = t.props
                      , n = e.deleteGif
                      , a = e.userid;
                    return n({
                        gfyId: e.gfyItem.gfyId,
                        cb: function() {
                            Fe.Z.getHistoryInstance().push("/@".concat(a, "/manage/gifs"))
                        }
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleDeleteButtonClick", (function() {
                    var e = t.props
                      , n = e.intl.formatMessage;
                    (0,
                    e.openModal)({
                        modalType: Me.K.CONFIRM_ACTION,
                        modalProps: {
                            title: n(Be.Z.delete),
                            text: n(Be.Z.deleteGIFConfirmation),
                            actionButtonText: n(Be.Z.delete),
                            actionHandler: t.handleDelete,
                            onError: function() {
                                t.props.showToastNotification({
                                    toastType: Pe.N.ERROR
                                })
                            }
                        }
                    })
                }
                ));
                var n = t.props.gfyItem
                  , o = n.title
                  , i = n.tags
                  , s = n.published;
                return t.state = {
                    updated: !1,
                    title: o,
                    tags: i,
                    published: (0,
                    _e.Z)(s)
                },
                t
            }
            return (0,
            s.Z)(r, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.onBackButtonClick
                      , n = e.focus
                      , a = this.state
                      , r = a.title
                      , o = a.tags;
                    return a.published,
                    p.createElement("div", {
                        className: "gif-editing"
                    }, p.createElement("div", {
                        className: "back-button",
                        onClick: t
                    }, p.createElement(we.Z, {
                        className: "ic",
                        svg: De.Z
                    }), p.createElement(w.Z, Be.Z.back)), p.createElement(Re.Gl, {
                        changeOnType: !0,
                        withLabel: !0,
                        autoFocus: n === Ue,
                        title: r,
                        onChange: this.handleTitleChange
                    }), p.createElement(Re.B7, {
                        addOnBlur: !0,
                        withLabel: !0,
                        autoFocus: n === Ve,
                        tags: o,
                        onChange: this.handleTagsChange
                    }), p.createElement("div", null), p.createElement("div", {
                        className: "buttons-wrapper"
                    }, p.createElement(Ie.m1, {
                        onClick: this.handleDeleteButtonClick
                    }), p.createElement(Ie.ZP, {
                        disabled: !this.isUpdated(),
                        type: Ie.V5.FILLED,
                        className: "save-button",
                        onClick: this.handleSaveButtonClick
                    }, p.createElement(w.Z, Be.Z.saveChanges))))
                }
            }]),
            r
        }(p.Component),
        (0,
        y.Z)(ye, "defaultProps", {
            focus: Ue
        }),
        ge = ve)) || ge) || ge)
          , ze = n(26776)
          , He = n(39064)
          , Ye = n(33330)
          , je = n(61409)
          , qe = n(65589);
        const Ke = function(e) {
            var t = e.source
              , n = void 0 === t ? null : t
              , a = e.divider;
            if (!n || 0 !== b()(n).call(n, "http://") && 0 !== b()(n).call(n, "https://") || -1 !== b()(n).call(n, "giphy") || -1 !== b()(n).call(n, "tenor"))
                return null;
            if ("https://gfycat.com/gifbrewery" === n)
                return p.createElement(p.Fragment, null, p.createElement("span", {
                    className: "source-link"
                }, p.createElement("span", {
                    className: "link-label"
                }, "Created with:"), " ", p.createElement(je.rU, {
                    to: "/gifbrewery",
                    className: "value"
                }, "GIF Brewery")), a || null);
            var r = (0,
            qe.X3)(n);
            return p.createElement(p.Fragment, null, p.createElement("span", {
                className: "source-link"
            }, p.createElement("span", {
                className: "link-label"
            }, "Source:"), " ", p.createElement("a", {
                className: "value",
                href: n,
                target: "_blank",
                rel: "noopener noreferrer nofollow"
            }, r)), a || null)
        };
        var Xe = n(43903);
        const Qe = (0,
        n(50049).vU)({
            trendingGifsButtonText: {
                id: "SHARE.TRENDING_GIFS_BUTTON_TEXT",
                defaultMessage: "Discover Trending GIFs",
                description: "Trending gifs button text"
            },
            addTitle: {
                id: "SHARE.ADD_TITLE",
                defaultMessage: "Add a title",
                description: "Add a title text"
            },
            addTags: {
                id: "SHARE.ADD_TAGS",
                defaultMessage: "Add a tag",
                description: "Add a tag text"
            }
        });
        var $e = function(e) {
            (0,
            c.Z)(r, e);
            var t, n, a = (t = r,
            n = function() {
                if ("undefined" == typeof Reflect || !i())
                    return !1;
                if (i().sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(i()(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, a = (0,
                u.Z)(t);
                if (n) {
                    var r = (0,
                    u.Z)(this).constructor;
                    e = i()(a, arguments, r)
                } else
                    e = a.apply(this, arguments);
                return (0,
                d.Z)(this, e)
            }
            );
            function r(e) {
                var t;
                return (0,
                l.Z)(this, r),
                t = a.call(this, e),
                (0,
                y.Z)((0,
                g.Z)(t), "componentDidUpdate", (function() {
                    t.updateButtonVisibiliy()
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "updateButtonVisibiliy", (function() {
                    var e = t.isButtonVisible();
                    t.state.moreTagsButton !== e && t.setState({
                        moreTagsButton: e
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "isButtonVisible", (function() {
                    return t.tagsList.current && t.tagsList.current.offsetHeight < t.tagsList.current.scrollHeight
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleShowTags", (function() {
                    t.setState({
                        moreTagsButton: !1,
                        allTagsVisible: !0
                    })
                }
                )),
                t.state = {
                    moreTagsButton: !1,
                    allTagsVisible: !1
                },
                t.tagsList = p.createRef(),
                t
            }
            return (0,
            s.Z)(r, [{
                key: "componentDidMount",
                value: function() {
                    this.updateButtonVisibiliy()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.gfyItem
                      , n = e.isMe
                      , a = e.onAddTitleClick
                      , r = e.onAddTagsClick
                      , o = t.createDate
                      , i = t.gfyId
                      , l = t.title
                      , s = t.hasTransparency
                      , c = t.languageCategories
                      , d = t.tags
                      , u = t.url
                      , f = t.views
                      , h = this.state
                      , m = h.moreTagsButton
                      , g = h.allTagsVisible
                      , y = (0,
                    qe.U6)({
                        languageCategories: c,
                        tags: d
                    });
                    return p.createElement("div", {
                        className: "gif-info"
                    }, p.createElement("h1", {
                        className: "title"
                    }, n && !l ? p.createElement("span", {
                        className: "add-title-button",
                        onClick: a
                    }, p.createElement(w.Z, Qe.addTitle)) : p.createElement(He.Z, {
                        title: l,
                        hasTransparency: s
                    })), p.createElement(Ye.Z, {
                        views: f
                    }), p.createElement("span", {
                        className: "divider"
                    }, "|"), p.createElement(Ke, {
                        source: u,
                        divider: p.createElement("span", {
                            className: "divider"
                        }, "|")
                    }), p.createElement(ze.Z, {
                        createDate: o
                    }), d && d.length ? p.createElement(p.Fragment, null, p.createElement("div", {
                        className: N()("tags-list-wrapper", {
                            "all-tags": g
                        }),
                        ref: this.tagsList
                    }, p.createElement(Xe.Z, {
                        analyticsParams: {
                            context: "sharepage",
                            gfyId: i
                        },
                        urlPattern: (0,
                        qe.iM)(t),
                        tags: y
                    })), m ? p.createElement(Ie.ZP, {
                        className: "see-more-tags-button",
                        type: Ie.V5.OUTLINED,
                        onClick: this.handleShowTags,
                        size: "small"
                    }, p.createElement(w.Z, Be.Z.seeMore)) : null) : n ? p.createElement(Ie.ZP, {
                        className: "add-tags-button",
                        type: Ie.V5.OUTLINED,
                        onClick: r,
                        size: "small"
                    }, p.createElement("span", null, "+"), " ", p.createElement(w.Z, Qe.addTags)) : null)
                }
            }]),
            r
        }(p.Component)
          , Je = n(84570);
        var et = function(e) {
            (0,
            c.Z)(r, e);
            var t, n, a = (t = r,
            n = function() {
                if ("undefined" == typeof Reflect || !i())
                    return !1;
                if (i().sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(i()(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, a = (0,
                u.Z)(t);
                if (n) {
                    var r = (0,
                    u.Z)(this).constructor;
                    e = i()(a, arguments, r)
                } else
                    e = a.apply(this, arguments);
                return (0,
                d.Z)(this, e)
            }
            );
            function r() {
                return (0,
                l.Z)(this, r),
                a.apply(this, arguments)
            }
            return (0,
            s.Z)(r, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.gfyItem
                      , n = e.onOpenShareButtonClick
                      , a = e.onOpenEmbedButtonClick
                      , r = "desktop_sharepage";
                    return p.createElement("div", {
                        className: "gif-share"
                    }, p.createElement(Je.ZP, {
                        context: r,
                        type: Je._P.FACEBOOK,
                        gfyItem: t,
                        styleType: Je.vk.OUTLINED,
                        withTooltip: !0
                    }), p.createElement(Je.ZP, {
                        context: r,
                        type: Je._P.TWITTER,
                        gfyItem: t,
                        styleType: Je.vk.OUTLINED,
                        withTooltip: !0
                    }), p.createElement(Je.ZP, {
                        context: r,
                        type: Je._P.REDDIT,
                        gfyItem: t,
                        styleType: Je.vk.OUTLINED,
                        withTooltip: !0
                    }), p.createElement(Je.ZP, {
                        context: r,
                        type: Je._P.COPY_LINK,
                        gfyItem: t,
                        styleType: Je.vk.OUTLINED,
                        withTooltip: !0
                    }), p.createElement(Je.yv, {
                        onClick: a,
                        withTooltip: !0
                    }), p.createElement(Je.h1, {
                        onClick: n,
                        withTooltip: !0
                    }))
                }
            }]),
            r
        }(p.Component)
          , tt = n(58709)
          , nt = n(7136)
          , at = n(5693)
          , rt = n(2991)
          , ot = n.n(rt)
          , it = n(23493)
          , lt = n.n(it)
          , st = n(69417);
        const ct = function(e) {
            var t, n = e.active, a = e.gfyItem, r = a.gfyId, o = a.gfySlug, i = a.mobilePosterUrl, l = (0,
            st.Z)(a, ["gfyId", "gfySlug", "mobilePosterUrl"]), s = e.onClick, c = o ? Z()(t = "/".concat(r, "-")).call(t, o) : "/".concat(r);
            return p.createElement("div", {}, null)
        };
        var dt, ut = n(20010), pt = n(44217), ft = n(63063);
        function ht(e, t) {
            var n = B()(e);
            if (P()) {
                var a = P()(e);
                t && (a = C()(a).call(a, (function(t) {
                    return x()(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        const mt = (0,
        f.connect)((function(e, t) {
            t.currentGfyId;
            var n, a, r = e.related, o = (0,
            j.wb)(e, ft.S).items;
            return {
                items: r ? ot()(n = Z()(a = [r.gfyId]).call(a, C()(o).call(o, (function(e) {
                    return e != r.gfyId
                }
                )), r.items)).call(n, (function(t) {
                    return (0,
                    j.rg)(e, t)
                }
                )) : []
            }
        }
        ), {
            beginRelatedFeed: pt.h_,
            clearRelatedFeed: pt.jY,
            continueRelatedFeed: pt.vG,
            sendEvent: Y.qP
        })(dt = function(e) {
            (0,
            c.Z)(r, e);
            var t, n, a = (t = r,
            n = function() {
                if ("undefined" == typeof Reflect || !i())
                    return !1;
                if (i().sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(i()(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, a = (0,
                u.Z)(t);
                if (n) {
                    var r = (0,
                    u.Z)(this).constructor;
                    e = i()(a, arguments, r)
                } else
                    e = a.apply(this, arguments);
                return (0,
                d.Z)(this, e)
            }
            );
            function r(e) {
                var t;
                return (0,
                l.Z)(this, r),
                t = a.call(this, e),
                (0,
                y.Z)((0,
                g.Z)(t), "state", {
                    rightControl: !0,
                    leftControl: !1
                }),
                (0,
                y.Z)((0,
                g.Z)(t), "handleScroll", (function() {
                    t.loadMore(),
                    t.updateControlsVisibility()
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleScrollThrottled", lt()(t.handleScroll, 200)),
                (0,
                y.Z)((0,
                g.Z)(t), "handleResize", (function() {
                    t.containerOffsetWidth = t.container.offsetWidth,
                    t.loadMore()
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleResizethrottled", lt()(t.handleResize, 200)),
                (0,
                y.Z)((0,
                g.Z)(t), "loadMore", (function() {
                    t.containerWidth - t.container.scrollLeft < 3 * t.containerOffsetWidth && t.props.continueRelatedFeed({
                        gfyId: t.props.currentGfyId
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleGifClick", (function(e) {
                    var n = e.gfyItem
                      , a = e.index;
                    return function(e) {
                        var r = t.props
                          , o = r.currentGfyId
                          , i = r.sendEvent
                          , l = e.target.getBoundingClientRect().left;
                        t.container.scrollBy({
                            left: l,
                            behavior: "smooth"
                        }),
                        i({
                            event: "related_content_click",
                            params: {
                                gfyId: n.gfyId,
                                context: o,
                                channel: a
                            }
                        })
                    }
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "updateControlsVisibility", (function(e) {
                    var n = {
                        leftControl: 0 !== t.container.scrollLeft,
                        rightControl: t.container.scrollWidth - t.container.offsetWidth !== t.container.scrollLeft
                    };
                    n.leftControl === t.state.leftControl && n.rightControl === t.state.rightControl || t.setState(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n, a = null != arguments[t] ? arguments[t] : {};
                            if (t % 2)
                                F()(n = ht(Object(a), !0)).call(n, (function(t) {
                                    (0,
                                    y.Z)(e, t, a[t])
                                }
                                ));
                            else if (U())
                                W()(e, U()(a));
                            else {
                                var r;
                                F()(r = ht(Object(a))).call(r, (function(t) {
                                    H()(e, t, x()(a, t))
                                }
                                ))
                            }
                        }
                        return e
                    }({}, n))
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "calcContainerWidth", (function() {
                    for (var e = t.props.items, n = 0, a = 0; a < e.length; a++) {
                        var r = e[a]
                          , o = r.width
                          , i = r.height;
                        n += Math.floor(o / i * 125) + 5
                    }
                    t.containerWidth = n,
                    t.containerOffsetWidth = t.container.offsetWidth
                }
                )),
                t.containerRef = p.createRef(),
                t
            }
            return (0,
            s.Z)(r, [{
                key: "componentDidMount",
                value: function() {
                    this.container = this.containerRef.current,
                    this.calcContainerWidth(),
                    this.container.addEventListener("scroll", this.handleScroll),
                    window.addEventListener("resize", this.handleResize)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    e.items.length !== this.props.items.length && this.calcContainerWidth();
                    var t = this.props
                      , n = t.currentGfyId
                      , a = t.items;
                    if (e.currentGfyId !== n) {
                        var r, o = b()(r = ot()(a).call(a, (function(e) {
                            return e.gfyId
                        }
                        ))).call(r, n);
                        a.length - o < 12 && this.props.continueRelatedFeed({
                            gfyId: n
                        })
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.container.removeEventListener("scroll", this.handleScroll),
                    window.removeEventListener("resize", this.handleResize),
                    this.props.clearRelatedFeed()
                }
            }, {
                key: "render",
                value: function() {
                    return p.createElement("div", {ref: this.containerRef})
                }
            }]),
            r
        }(p.Component)) || dt;
        var gt = n(64535)
          , yt = n(72533)
          , vt = n(91566)
          , Zt = n(73611);
        const Et = function(e) {
            var t = e.isMe
              , n = e.isHydrated
              , a = e.user;
            return a ? p.createElement("div", {
                className: "user-info"
            }, p.createElement("div", {
                className: "user-row"
            }, p.createElement(gt.Z, {
                user: a
            }), !t && n ? p.createElement(Zt.Z, {
                userid: a.username,
                size: "small"
            }) : null), p.createElement(yt.Z, a), p.createElement(vt.Z, {
                url: a.profileUrl
            })) : null
        };
        var Ct = n(47149);
        const It = function(e) {
            var t = e.gfyItem;
            return (0,
            Ct.Id)(t) ? null : p.createElement("div", {
                key: t.gfyId,
                className: "nsfw-content"
            })
        };
        var kt = n(48139)
          , St = n(59376)
          , bt = n(31308);
        n(9053);
        var Ot, Tt = n(75708), At = n(75878), Nt = n(63867);
        var wt, Rt = "sharepage", _t = "shouldAutoPlay", Bt = (0,
        f.connect)((function(e, t) {
            var n, a = t.gfyId, r = (0,
            j.rg)(e, a), o = r.userName, i = e.related, l = (0,
            j.wb)(e, ft.S).items;
            return {
                gfyId: a,
                gfyItem: r,
                isLoggedIn: (0,
                j.M7)(e),
                isHydrated: (0,
                j.p5)(e),
                isMe: (0,
                j.YA)(e, o),
                isPro: (0,
                j.Os)(e),
                relatedItemIds: Z()(n = [i.gfyId]).call(n, C()(l).call(l, (function(e) {
                    return e != i.gfyId
                }
                )), i.items),
                user: (0,
                bt.Z)(o) ? {} : (0,
                j.M_)(e, o).data,
                cleanContent: (0,
                Ct.Id)(r),
                renderAds: (0,
                j.g3)(e),
                cookies: (0,
                Nt.$1)(e)
            }
        }
        ), {
            likeStatus: kt.hl,
            push: R.VF,
            sendEvent: Y.qP
        })(Ot = function(e) {
            (0,
            c.Z)(r, e);
            var t, n, a = (t = r,
            n = function() {
                if ("undefined" == typeof Reflect || !i())
                    return !1;
                if (i().sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(i()(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, a = (0,
                u.Z)(t);
                if (n) {
                    var r = (0,
                    u.Z)(this).constructor;
                    e = i()(a, arguments, r)
                } else
                    e = a.apply(this, arguments);
                return (0,
                d.Z)(this, e)
            }
            );
            function r(e) {
                var t, n;
                return (0,
                l.Z)(this, r),
                t = a.call(this, e),
                (0,
                y.Z)((0,
                g.Z)(t), "getAdConfig", (function() {
                    var e = t.props
                      , n = e.gfyItem
                      , a = e.isLoggedIn;
                    return {
                        allaudiences: (0,
                        St.Z)(n),
                        account: a
                    }
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "initNewGif", (function() {
                    var e = t.props
                      , n = e.gfyItem.gfyId
                      , a = e.isLoggedIn
                      , r = e.likeStatus;
                    a && r(n),
                    t.handleStickerLoop()
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleVideoGetRef", (function(e) {
                    e && (t.video = e,
                    t.focusVideo())
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleDropdownToggleClick", (function(e) {
                    e.stopPropagation(),
                    t.setState({
                        dropdownOpened: !t.state.dropdownOpened
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleOpenOverlayButton", (function(e) {
                    return function() {
                        t.props.sendEvent,
                        t.setState({
                            shareOpened: t.state.shareOverlayState !== e || !t.state.shareOpened,
                            shareOverlayState: e
                        })
                    }
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleShareClose", (function() {
                    t.setState({
                        shareOpened: !1
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleLoadMetaData", (function(e) {
                    t.setState({
                        maxWidth: t.video.videoWidth
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handlePlayerStateChange", (function(e) {
                    var n = t.state.theaterMode;
                    e.theaterMode !== n && t.setState({
                        theaterMode: e.theaterMode
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "focusVideo", (function() {
                    t.video && t.video.focus()
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "shouldAutoPlayChangeHandler", (function(e) {
                    var n = e.value
                      , a = t.props.cookies;
                    t.setState({
                        shouldAutoPlay: n
                    }, (function() {
                        a.preferences && (0,
                        Tt.po)(_t, n),
                        t.handleStickerLoop()
                    }
                    ))
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleStickerLoop", (function() {
                    clearTimeout(t.stickerTimeout);
                    var e = t.state.shouldAutoPlay;
                    (t.props.gfyItem || {
                        hasTransparency: !1
                    }).hasTransparency && e && (t.stickerTimeout = k()((function() {
                        t.goToNextItem()
                    }
                    ), 15e3))
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleLoop", (function() {
                    var e = t.state
                      , n = e.shouldAutoPlay
                      , a = e.editingOpened;
                    if (!n || a)
                        return !0;
                    var r = t.state.loopsShown + 1;
                    t.setState({
                        loopsShown: r
                    });
                    var o = t.video.duration;
                    return !(o > 0 && r >= Math.max(15 / o, 2)) || (t.goToNextItem(),
                    !1)
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "goToNextItem", (function() {
                    var e = t.props
                      , n = e.gfyId
                      , a = e.push
                      , r = e.relatedItemIds
                      , o = b()(r).call(r, n);
                    -1 !== o && o < r.length - 1 && a({
                        pathname: "/".concat(r[o + 1]),
                        state: {
                            upnext: !0
                        }
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleModalOpen", (function() {
                    t.video && (t.video.paused && (t.videoWasPaused = !0),
                    t.video.pause())
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleModalClose", (function() {
                    t.video && (t.videoWasPaused || t.video.play())
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleEditButtonClick", (function() {
                    t.setState({
                        editingOpened: !0
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleBackButtonClick", (function() {
                    t.setState({
                        editingOpened: !1
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleAddTitleClick", (function() {
                    t.setState({
                        editingOpened: !0,
                        editingFocus: Ue
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleAddTagsClick", (function() {
                    t.setState({
                        editingOpened: !0,
                        editingFocus: Ve
                    })
                }
                )),
                e.cookies.preferences ? (n = "true" === ((0,
                Tt.vk)(_t) || "true"),
                (0,
                Tt.po)(_t, n)) : n = !0,
                t.state = {
                    dropdownOpened: !1,
                    editingOpened: !1,
                    loopsShown: 0,
                    shareOpened: !1,
                    shouldAutoPlay: n,
                    theaterMode: !1
                },
                t
            }
            return (0,
            s.Z)(r, [{
                key: "componentDidMount",
                value: function() {
                    this.initNewGif();
                    var e = this.props
                      , t = e.cleanContent;
                    e.renderAds && t && Ce.Z.initAds(this.getAdConfig())
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props
                      , n = t.cleanContent
                      , a = t.renderAds;
                    e.gfyId !== this.props.gfyId ? (this.setState({
                        loopsShown: 0,
                        editingOpened: !1
                    }),
                    this.initNewGif(),
                    a && (!e.cleanContent && n ? Ce.Z.initAds(this.getAdConfig()) : n ? Ce.Z.refreshAds(this.getAdConfig()) : Ce.Z.clearAds())) : a !== e.renderAds && a && n && Ce.Z.initAds(this.getAdConfig())
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    clearTimeout(this.stickerTimeout),
                    this.props.renderAds && this.props.cleanContent && Ce.Z.clearAds()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state
                      , t = e.maxWidth
                      , n = e.shareOpened
                      , a = e.shouldAutoPlay
                      , r = e.theaterMode
                      , o = e.editingOpened
                      , i = e.editingFocus
                      , l = e.shareOverlayState
                      , s = "share-page desktop-share-page"
                      , c = "share-desktop-container"
                      , d = this.props
                      , u = d.gfyItem
                      , f = d.isMe
                      , h = d.isHydrated
                      , m = d.isPro;
                    if (!u || !u.gfyId)
                        return p.createElement(T(), {
                            className: s
                        }, p.createElement(ke.C, null, p.createElement("div", {
                            className: c
                        })));
                    var g = u.gfyId
                      , y = u.hasTransparency
                      , v = u.max1mbGif
                      , Z = u.max5mbGif
                      , E = u.width
                      , C = t && !y ? t : Math.min(640, E);
                    C = Math.max(C, 300);
                    var I = p.createElement(p.Fragment, {
                        key: "".concat(g, "-editing")
                    }, o ? p.createElement(We, {
                        onBackButtonClick: this.handleBackButtonClick,
                        focus: i,
                        gfyItem: u
                    }) : p.createElement(p.Fragment, null, f ? p.createElement(Ie.ZP, {
                        className: "edit-button",
                        type: Ie.V5.FILLED,
                        onClick: this.handleEditButtonClick
                    }, p.createElement(w.Z, Be.Z.edit)) : null, p.createElement($e, {
                        gfyItem: u,
                        isMe: f,
                        onAddTitleClick: this.handleAddTitleClick,
                        onAddTagsClick: this.handleAddTagsClick
                    }), p.createElement(et, {
                        gfyItem: u,
                        onOpenShareButtonClick: this.handleOpenOverlayButton(At.K.SHARE),
                        onOpenEmbedButtonClick: this.handleOpenOverlayButton(At.K.EMBED)
                    })), p.createElement(Et, {
                        isMe: f,
                        isHydrated: h,
                        user: u.userData
                    }))
                      , k = y ? p.createElement(tt.A, {
                        context: Rt,
                        gfyItem: u,
                        maxWidth: C,
                        onShareClose: this.handleShareClose,
                        onStateChange: this.handlePlayerStateChange,
                        shareControlOutside: !0,
                        shareOpened: n,
                        shareOverlayState: l,
                        theaterModeButton: !0
                    }) : p.createElement(p.Fragment, null, p.createElement("noscript", null, p.createElement("img", {
                        className: "gif",
                        src: Z,
                        alt: (0,
                        qe.PY)(u)
                    })), p.createElement("div", {
                        className: "video-player-wrapper"
                    }, p.createElement("picture", null, p.createElement("source", {
                        media: "(max-width: 480px)",
                        srcSet: v
                    }), p.createElement("img", {
                        className: "actual-gif-image",
                        src: Z,
                        alt: (0,
                        qe.PY)(u),
                        key: u.gfyId
                    })), p.createElement(tt.Y, {
                        backgroundColor: "transparent",
                        context: Rt,
                        getRef: this.handleVideoGetRef,
                        gfyItem: u,
                        maxWidth: C,
                        onLoadMetaData: this.handleLoadMetaData,
                        onLoop: this.handleLoop,
                        onShareClose: this.handleShareClose,
                        onStateChange: this.handlePlayerStateChange,
                        pauseOnClick: !0,
                        shareControlOutside: !0,
                        shareOpened: n,
                        shareOverlayState: l,
                        show360: !0,
                        theaterModeButton: !0
                    })))
                      , S = p.createElement("div", {
                        className: "upnext-control"
                    }, p.createElement(at.Z, {
                        on: a,
                        onClick: this.shouldAutoPlayChangeHandler
                    }));
                    return p.createElement(T(), {
                        className: s
                    }, p.createElement(ke.C, null, p.createElement("div", {
                        className: N()(c, {
                            "theater-mode": r
                        })
                    }, p.createElement("div", {
                        className: "block-1"
                    }, k), p.createElement("div", {
                        className: "block-2"
                    }, p.createElement("div", {
                        className: "first-row"
                    }, S, p.createElement(Se.Z, {
                        gfyItem: u,
                        video: this.video,
                        onShareButtonClick: this.handleShareButtonClick,
                        shareOpened: n,
                        onModalOpen: this.handleModalOpen,
                        onModalClose: this.handleModalClose
                    })), p.createElement(mt, {
                        currentGfyId: g
                    })), p.createElement("div", {
                        className: "block-3"
                    }, p.createElement("div", {
                        className: "side-slot"
                    }, null), m ? null : p.createElement(nt.Z, {
                        type: 3
                    }), I)), p.createElement(It, {
                        gfyItem: u
                    })))
                }
            }]),
            r
        }(p.Component)) || Ot, Mt = n(3649), Pt = n.n(Mt), Lt = n(91109), xt = n(9375), Gt = n(30559), Ft = n(63100), Dt = n(12907);
        var Ut = (0,
        f.connect)((function(e, t) {
            var n, a, r = t.gfyId, o = (0,
            j.rg)(e, r), i = e.related, l = (0,
            j.wb)(e, ft.S).items, s = i ? ot()(n = Z()(a = [r]).call(a, C()(l).call(l, (function(e) {
                return e != r
            }
            )), i.items)).call(n, (function(t) {
                return (0,
                j.rg)(e, t)
            }
            )) : [];
            return {
                gfyId: r,
                gfyItem: o,
                items: s,
                isPro: (0,
                j.Os)(e),
                isLoggedIn: (0,
                j.M7)(e),
                cleanContent: (0,
                Ct.Id)(o),
                renderAds: (0,
                j.g3)(e)
            }
        }
        ), {
            continueRelatedFeed: pt.vG,
            clearRelatedFeed: pt.jY,
            sendEvent: Y.qP
        })(wt = (0,
        je.EN)(wt = function(e) {
            (0,
            c.Z)(r, e);
            var t, n, a = (t = r,
            n = function() {
                if ("undefined" == typeof Reflect || !i())
                    return !1;
                if (i().sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(i()(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, a = (0,
                u.Z)(t);
                if (n) {
                    var r = (0,
                    u.Z)(this).constructor;
                    e = i()(a, arguments, r)
                } else
                    e = a.apply(this, arguments);
                return (0,
                d.Z)(this, e)
            }
            );
            function r(e) {
                var t;
                return (0,
                l.Z)(this, r),
                t = a.call(this, e),
                (0,
                y.Z)((0,
                g.Z)(t), "state", {
                    scrolled: !1,
                    shareOverlayOpened: !1
                }),
                (0,
                y.Z)((0,
                g.Z)(t), "getAdConfig", (function() {
                    var e = t.props
                      , n = e.gfyItem
                      , a = e.isLoggedIn;
                    return {
                        allaudiences: (0,
                        St.Z)(n),
                        account: a
                    }
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleScroll", (function() {
                    window.removeEventListener("scroll", t.handleScroll),
                    t.setState({
                        scrolled: !0
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "loadMore", (function() {
                    t.props.continueRelatedFeed({
                        gfyId: t.props.gfyId
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleItemVisibilityChange", (function(e) {
                    var n = e.gif
                      , a = e.index;
                    return function(e) {
                        var r = e.visible
                          , o = (0,
                        Gt.K)(n);
                        if (t.state.scrolled && r) {
                            var i, l = t.props.location.basename, s = Z()(i = "".concat(l || "", "/")).call(i, o);
                            window.history.replaceState(null, null, s),
                            t.sendPageViews(o, n)
                        }
                        a && a % 10 == 0 && r && t.loadMore()
                    }
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "sendPageViews", (function(e, n) {
                    t.props.sendEvent({
                        event: "view_share_page",
                        params: {
                            gfyId: e,
                            context: (0,
                            Dt.q)(n.gatekeeper)
                        }
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleCloseShareOverlay", (function() {
                    t.setState({
                        shareOverlayOpened: !1
                    }),
                    t.video.play()
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handle360VideoClick", (function() {
                    t.setState({
                        shareOverlayOpened: !0
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleGetRef", (function(e) {
                    t.video = e
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleSeeMoreButtonClick", (function() {
                    var e = t.seeMoreButton.getBoundingClientRect()
                      , n = e.height
                      , a = e.top;
                    window.scrollBy({
                        top: n + a - 110,
                        behavior: "smooth"
                    }),
                    t.props.sendEvent({
                        event: "see_more_button_click",
                        params: {
                            gfyId: t.props.gfyId,
                            context: "mobile_sharepage"
                        }
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "handleTrendingButtonClick", (function() {
                    t.props.sendEvent({
                        event: "trending_button_click",
                        params: {
                            gfyId: t.props.gfyId,
                            context: "mobile_sharepage"
                        }
                    })
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "gif360", (function(e) {
                    return p.createElement(p.Fragment, null, p.createElement(xt.zb, {
                        getRef: t.handleGetRef,
                        gfyItem: e,
                        highQuality: !0,
                        includeMeta: !1,
                        onClick: t.handle360VideoClick
                    }), t.state.shareOverlayOpened ? p.createElement(At.Z, {
                        gfyItem: e,
                        onCloseButtonClick: t.handleCloseShareOverlay
                    }) : null)
                }
                )),
                (0,
                y.Z)((0,
                g.Z)(t), "gifs", (function() {
                    var e, n = t.props, a = n.gfyId, r = n.gfyItem, o = n.items, i = n.isPro, l = (0,
                    Ct.AF)(r) || (0,
                    Ct.hg)(r) || (0,
                    Ct.VF)(r) || (0,
                    Ct.Nq)(r) ? p.createElement(Ze, {
                        size: q.h_.SIZE_320_50,
                        name: "house_ad",
                        key: "ad-unit-".concat(a),
                        id: r.gfyId
                    }) : p.createElement(Ee.Z, {
                        className: "sharepage-mobile-adunit",
                        id: q.nk.MOBILE_SHARE
                    }), s = ot()(o).call(o, (function(e, n) {
                        var a;
                        return p.createElement(Lt.Z, {
                            adjustedTitle: !0,
                            gfyItem: e,
                            index: n,
                            key: Z()(a = "".concat(e.gfyId, "-")).call(a, n),
                            onVisibilityChange: t.handleItemVisibilityChange({
                                gif: e,
                                index: n
                            }),
                            showFollowButton: !0
                        })
                    }
                    ));
                    return Z()(e = [l, s[0], i ? null : p.createElement(nt.Z, {
                        key: "pro-cta",
                        type: 3
                    }), p.createElement("div", {
                        className: "button-block",
                        key: "button-block-1",
                        ref: t.seeMoreButtonRef
                    }, p.createElement(Ie.ZP, {
                        type: Ie.V5.OUTLINED,
                        onClick: t.handleSeeMoreButtonClick
                    }, p.createElement(w.Z, Be.Z.seeMore)))]).call(e, Pt()(s).call(s, 1), [p.createElement("div", {
                        className: "button-block",
                        key: "button-block-2"
                    }, p.createElement(Ie.ZP, {
                        contentType: Ie.Tr.LINK,
                        type: Ie.V5.OUTLINED,
                        url: "/discover/trending-gifs",
                        onClick: t.handleTrendingButtonClick
                    }, p.createElement(w.Z, Qe.trendingGifsButtonText)))])
                }
                )),
                t.seeMoreButtonRef = p.createRef(),
                t
            }
            return (0,
            s.Z)(r, [{
                key: "componentDidMount",
                value: function() {
                    window.addEventListener("scroll", this.handleScroll),
                    this.seeMoreButton = this.seeMoreButtonRef.current,
                    this.props.cleanContent && this.props.renderAds && Ce.Z.initAds(this.getAdConfig())
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props
                      , n = t.renderAds
                      , a = t.cleanContent;
                    n !== e.renderAds && n && a && Ce.Z.initAds(this.getAdConfig())
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.props.clearRelatedFeed(),
                    window.removeEventListener("scroll", this.handleScroll),
                    this.props.cleanContent && this.props.renderAds && Ce.Z.clearAds()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.gfyItem
                      , t = (0,
                    Ft.Z)(e) ? this.gif360(e) : this.gifs();
                    return p.createElement(T(), {
                        className: "share-page mobile-share-page"
                    }, p.createElement(ke.C, null, p.createElement("div", {
                        className: "share-container share-mobile-container"
                    }, t), p.createElement(It, {
                        gfyItem: e
                    })))
                }
            }]),
            r
        }(p.Component)) || wt) || wt
          , Vt = n(94198)
          , Wt = n.n(Vt)
          , zt = n(56474)
          , Ht = n.n(zt)
          , Yt = n(59340)
          , jt = n.n(Yt)
          , qt = n(63963)
          , Kt = n(12269);
        const Xt = function(e) {
            e.intl;
            var t, n, a, r, o = e.gfyItem, i = o.frameRate, l = o.gatekeeper, s = o.gfyId, c = o.gfyName, d = o.gfySlug, u = o.hasTransparency, p = o.height, f = o.languageCategories, h = void 0 === f ? [] : f, m = o.languageText, g = o.max5mbGif, y = o.mobilePosterUrl, v = o.mobileUrl, E = o.numFrames, C = o.nsfw, I = o.subreddit, k = o.tags, S = void 0 === k ? [] : k, b = o.title, O = (o.userName,
            o.userData), T = o.width, A = "0" === C && 0 === Wt()(l, 10) ? "index" : "noindex,noarchive,nosnippet,noodp,noydir,nocache", N = ((0,
            qe.jO)({
                tags: S,
                languageText: m
            }),
            (0,
            qe.g9)({
                frameRate: i,
                numFrames: E
            })), w = (0,
            qe.Hw)({
                subreddit: I,
                languageCategories: h,
                tags: S
            }), R = b && "untitled" != b.toLowerCase() ? b : null, _ = (0,
            qe.FT)({
                title: R,
                tags: S,
                languageCategories: h,
                hasTransparency: u,
                userData: O
            }), B = (Z()(t = "".concat(R || "Gfycat", " - Create, Discover and Share Awesome GIFs")).call(t, R ? " on Gfycat" : ""),
            (0,
            qe.Lq)({
                title: R,
                tags: S,
                userData: O,
                languageCategories: h,
                hasTransparency: u
            })), M = "https://gfycat.com/ifr/".concat(c), P = (0,
            qe.U)({
                languageCategories: h,
                tags: S,
                title: R
            }), L = d ? Z()(n = "https://gfycat.com/amp/".concat(s, "-")).call(n, d) : Z()(a = "https://gfycat.com/amp/".concat(s, "-")).call(a, P), x = d ? Z()(r = "https://gfycat.com/".concat(s, "-")).call(r, d) : "https://gfycat.com/".concat(s), G = T <= 640 ? T : 640, F = T <= 640 ? p : Wt()(G / T * p, 10), D = "https://api.gfycat.com/v1/oembed?url=https://gfycat.com/".concat(encodeURIComponent(c)), U = (0,
            Kt.vy)("https://gfycat.com/".concat(c), o);
            return Ht()({
                title: _,
                meta: [{
                    name: "robots",
                    content: A
                }, {
                    name: "description",
                    content: B
                }, {
                    name: "keywords",
                    content: w
                }, {
                    name: "twitter:card",
                    content: "player"
                }, {
                    name: "twitter:title",
                    content: (0,
                    qt._r)(_)
                }, {
                    name: "twitter:url",
                    content: M
                }, {
                    name: "twitter:image",
                    content: g
                }, {
                    name: "twitter:image:src",
                    content: g
                }, {
                    name: "twitter:player",
                    content: M
                }, {
                    name: "twitter:player:width",
                    content: T
                }, {
                    name: "twitter:player:height",
                    content: p
                }, {
                    name: "twitter:description",
                    content: B
                }, {
                    property: "og:type",
                    content: "video"
                }, {
                    property: "og:url",
                    content: g
                }, {
                    property: "og:title",
                    content: (0,
                    qt._r)(_)
                }, {
                    property: "og:description",
                    content: B
                }, {
                    property: "og:image",
                    content: g
                }, {
                    property: "og:image:width",
                    content: G
                }, {
                    property: "og:image:height",
                    content: F
                }, {
                    property: "og:image:secure_url",
                    content: g
                }, {
                    property: "og:image",
                    content: y
                }, {
                    property: "og:image:width",
                    content: G
                }, {
                    property: "og:image:height",
                    content: F
                }, {
                    property: "og:video",
                    content: v
                }, {
                    property: "og:video:secure_url",
                    content: v
                }, {
                    property: "og:video:type",
                    content: "video/mp4"
                }, {
                    property: "og:video:width",
                    content: G
                }, {
                    property: "og:video:height",
                    content: F
                }, {
                    property: "og:video:duration",
                    content: N
                }, {
                    property: "og:video:iframe",
                    content: M
                }],
                link: [{
                    rel: "amphtml",
                    href: L
                }, {
                    rel: "canonical",
                    href: x
                }, {
                    rel: "alternate",
                    type: "application/json+oembed",
                    href: D,
                    title: R || "gfycat"
                }],
                script: [{
                    type: "application/ld+json",
                    innerHTML: jt()(U)
                }]
            })
        };
        var Qt;
        var $t = (0,
        f.connect)((function(e, t) {
            var n = t.params.gfyIdWithDecoration.toLowerCase().split("-")[0];
            return {
                isMobile: e.renderConfig.mobile,
                gfyItem: (0,
                j.rg)(e, n),
                gfyId: n
            }
        }
        ))(Qt = (0,
        m.Z)("view_share_page", void 0, (function(e, t) {
            return {
                context: (0,
                Dt.q)(e.gfyItem.gatekeeper)
            }
        }
        ))(Qt = function(e) {
            (0,
            c.Z)(r, e);
            var t, n, a = (t = r,
            n = function() {
                if ("undefined" == typeof Reflect || !i())
                    return !1;
                if (i().sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(i()(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, a = (0,
                u.Z)(t);
                if (n) {
                    var r = (0,
                    u.Z)(this).constructor;
                    e = i()(a, arguments, r)
                } else
                    e = a.apply(this, arguments);
                return (0,
                d.Z)(this, e)
            }
            );
            function r() {
                return (0,
                l.Z)(this, r),
                a.apply(this, arguments)
            }
            return (0,
            s.Z)(r, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.isMobile
                      , n = e.gfyItem
                      , a = e.gfyId
                      , r = t ? p.createElement(Ut, {
                        gfyId: a
                    }) : p.createElement(Bt, {
                        gfyId: a
                    });
                    return p.createElement(p.Fragment, null, n && n.gfyId ? p.createElement(h.Z, {
                        meta: Xt,
                        gfyItem: n
                    }) : null, r)
                }
            }]),
            r
        }(p.PureComponent)) || Qt) || Qt
    }
    ,
    95213: (e,t,n)=>{
        n(53874);
        var a = n(54058);
        e.exports = a.Math.imul
    }
    ,
    98430: (e,t,n)=>{
        n(26614);
        var a = n(54058);
        e.exports = a.Object.values
    }
    ,
    88810: (e,t,n)=>{
        var a = n(55746)
          , r = n(14771)
          , o = n(74529)
          , i = n(36760).f
          , l = function(e) {
            return function(t) {
                for (var n, l = o(t), s = r(l), c = s.length, d = 0, u = []; c > d; )
                    n = s[d++],
                    a && !i.call(l, n) || u.push(e ? [n, l[n]] : l[n]);
                return u
            }
        };
        e.exports = {
            entries: l(!0),
            values: l(!1)
        }
    }
    ,
    53874: (e,t,n)=>{
        var a = n(76887)
          , r = n(95981)
          , o = Math.imul;
        a({
            target: "Math",
            stat: !0,
            forced: r((function() {
                return -5 != o(4294967295, 5) || 2 != o.length
            }
            ))
        }, {
            imul: function(e, t) {
                var n = 65535
                  , a = +e
                  , r = +t
                  , o = n & a
                  , i = n & r;
                return 0 | o * i + ((n & a >>> 16) * i + o * (n & r >>> 16) << 16 >>> 0)
            }
        })
    }
    ,
    26614: (e,t,n)=>{
        var a = n(76887)
          , r = n(88810).values;
        a({
            target: "Object",
            stat: !0
        }, {
            values: function(e) {
                return r(e)
            }
        })
    }
    ,
    21917: (e,t,n)=>{
        var a = n(95213);
        e.exports = a
    }
    ,
    47795: (e,t,n)=>{
        var a = n(98430);
        e.exports = a
    }
}]);
