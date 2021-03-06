/**
 * angular-recaptcha build:2016-07-19 
 * https://github.com/vividcortex/angular-recaptcha 
 * Copyright (c) 2016 VividCortex 
 **/
! function (a) {
    "use strict";
    a.module("vcRecaptcha", [])
}(angular)
, function (a) {
    "use strict";

    function b() {
        throw new Error('You need to set the "key" attribute to your public reCaptcha key. If you don\'t have a key, please get one from https://www.google.com/recaptcha/admin/create')
    }
    var c = a.module("vcRecaptcha");
    c.provider("vcRecaptchaService", function () {
        var c = this
            , d = {};
        c.onLoadFunctionName = "vcRecaptchaApiLoaded", c.setDefaults = function (b) {
            a.copy(b, d)
        }, c.setSiteKey = function (a) {
            d.key = a
        }, c.setTheme = function (a) {
            d.theme = a
        }, c.setStoken = function (a) {
            d.stoken = a
        }, c.setSize = function (a) {
            d.size = a
        }, c.setType = function (a) {
            d.type = a
        }, c.setOnLoadFunctionName = function (a) {
            c.onLoadFunctionName = a
        }, c.$get = ["$rootScope", "$window", "$q", function (e, f, g) {
            function h() {
                return j ? g.when(j) : l
            }

            function i() {
                if (!j) throw new Error("reCaptcha has not been loaded yet.")
            }
            var j, k = g.defer()
                , l = k.promise;
            f.vcRecaptchaApiLoadedCallback = f.vcRecaptchaApiLoadedCallback || [];
            var m = function () {
                j = f.grecaptcha, k.resolve(j)
            };
            return f.vcRecaptchaApiLoadedCallback.push(m), f[c.onLoadFunctionName] = function () {
                f.vcRecaptchaApiLoadedCallback.forEach(function (a) {
                    a()
                })
            }, a.isDefined(f.grecaptcha) && m(), {
                create: function (a, c) {
                    return c.sitekey = c.key || d.key, c.theme = c.theme || d.theme, c.stoken = c.stoken || d.stoken, c.size = c.size || d.size, c.type = c.type || d.type, c.sitekey && 40 === c.sitekey.length || b(), h().then(function (b) {
                        return b.render(a, c)
                    })
                }
                , reload: function (a) {
                    i(), j.reset(a), e.$broadcast("reCaptchaReset", a)
                }
                , getResponse: function (a) {
                    return i(), j.getResponse(a)
                }
            }
        }]
    })
}(angular)
, function (a) {
    "use strict";
    var b = a.module("vcRecaptcha");
    b.directive("vcRecaptcha", ["$document", "$timeout", "vcRecaptchaService", function (b, c, d) {
        return {
            restrict: "A"
            , require: "?^^form"
            , scope: {
                response: "=?ngModel"
                , key: "=?"
                , stoken: "=?"
                , theme: "=?"
                , size: "=?"
                , type: "=?"
                , tabindex: "=?"
                , required: "=?"
                , onCreate: "&"
                , onSuccess: "&"
                , onExpire: "&"
            }
            , link: function (e, f, g, h) {
                function i() {
                    h && h.$setValidity("recaptcha", null), l()
                }

                function j() {
                    c(function () {
                        e.response = "", k(), e.onExpire({
                            widgetId: e.widgetId
                        })
                    })
                }

                function k() {
                    h && h.$setValidity("recaptcha", e.required === !1 ? null : Boolean(e.response))
                }

                function l() {
                    a.element(b[0].querySelectorAll(".pls-container")).parent().remove()
                }
                e.widgetId = null, h && a.isDefined(g.required) && e.$watch("required", k);
                var m = e.$watch("key", function (b) {
                    var h = function (a) {
                        c(function () {
                            e.response = a, k(), e.onSuccess({
                                response: a
                                , widgetId: e.widgetId
                            })
                        })
                    };
                    d.create(f[0], {
                        callback: h
                        , key: b
                        , stoken: e.stoken || g.stoken || null
                        , theme: e.theme || g.theme || null
                        , type: e.type || g.type || null
                        , tabindex: e.tabindex || g.tabindex || null
                        , size: e.size || g.size || null
                        , "expired-callback": j
                    }).then(function (b) {
                        k(), e.widgetId = b, e.onCreate({
                            widgetId: b
                        }), e.$on("$destroy", i), e.$on("reCaptchaReset", function (c, d) {
                            (a.isUndefined(d) || b === d) && (e.response = "", k())
                        })
                    }), m()
                })
            }
        }
    }])
}(angular);