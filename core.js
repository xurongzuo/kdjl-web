const core = (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(39),
        o = r(48);
    o.default.defaults.adapter = r(25);
    var i = r(75),
        s = r(4),
        a = r(99),
        c = r(102),
        u = r(7),
        f = r(37),
        h = r(36);
    r(35).OOO000();
    var l, d, p, O, v, g, m = ["p2j 风车镇(新开)", "p2i 迷失谷", "p2h 忆童年", "p2g 麒麟殿", "p2f 雪心禅", "p2e 冰晶崖", "p2d 闪光镇", "p2c 下玄月", "p2b 上玄月", "p28 女神湖", "p29 天之翼", "p2a 海豚湾", "p25 七夜岛", "p27 英雄团", "p26 恋爱季", "p24 海之韵", "p22 奇缘星", "p21 皇骑殿", "p23 圣光殿", "ps1 精灵物语", "ps2 梦幻精灵", "ps3 宠物家园", "ps4 梦境传说", "ps5 创世大陆", "ps6 梦之长空", "ps7 幻月迷情", "ps8 精灵之歌", "ps9 冰玲珑", "psa 青色河", "psb 繁星醉", "psc 朔月情", "psd 精灵梦", "pse 彩云谷", "psf 北极雪", "psg 风之翼", "pso 水晶湖", "psn 金沙堡", "psm 木桶镇", "psl 忘忧岛", "psk 月影梦", "psh 咕噜村", "psi 梦见镇", "psj 云之国", "tkm 企鹅村", "tkl 静逸林", "tkj 童心意", "tki 雨梦林", "tkh 寒冰镇", "tkg 妙树源", "tkf 梦奇缘", "tke 七星岩", "tk9 花语梦", "tkb 奇遇镇", "tk8 爱琴海", "tkd 紫雾林", "tkc 冰灵泉", "tka 彩虹翼", "tk7 风雪谷", "tk6 红枫林", "tk5 回音泉", "tk4 光霞滩", "tk3 流星崖", "tk2 世界树", "tk1 魔法屋"],
        y = "7572418776307921";
    t.Status = {
        none: 0,
        ing: 1,
        ed: 2
    }, t.status = t.Status.none;
    var S, _ = new s.MessageEvent;
    console.log("正常")

    const {connect} = require('./login.js');
    console.log(connect)
    function k(e) {
        if(localStorage?.globalSettings) {
            info.itemPassword = JSON.parse(localStorage.globalSettings.substring(4)).itemPassword;
        }
        if(e===t.Status.ed) {
            connect(window.info, C);
        }
        t.status !== e && t.status === t.Status.ing, t.status = e, e !== t.Status.ed && e !== t.Status.none || clearTimeout(S), _.emit(e)
    }

    function B() {
        var e, r, n = 0,
            o = 0;
        a.OO0OO(0),
            function i() {
                t.status !== t.Status.none && (! function() {
                    if (null === a.OOO000()) {
                        if (e = Buffer.alloc(6), a.O000O0().read(e) !== e.length) return;
                        0 === e[0] && 0 === e[1] && 0 === e[2] && 0 === e[3] && 0 === e[4] && 0 === e[5] ? a.OO0OO(0) : (o = 42405 ^ (o = (255 & e[4]) + ((255 & e[5]) << 8)), a.O0OOO0O(Buffer.alloc(o)), a.OO0OO(0))
                    } else {
                        if (a.O000OOO() < a.OOO000().length) return void(-1 !== (n = a.O000O0().read(a.OOO000(), a.O000OOO(), a.OOO000().length - a.O000OOO())) && a.O000O00(n));
                        a.O000OOO() >= a.OOO000().length && (u.O0OOOOO(a.OOO000(), e[4]), a.OOO(a.OOO000()), r = Buffer.alloc(4), s.System.arraycopy(e, 0, r, 0, r.length), u.O00O.addElement(r), a.O0O0000(0), a.O00OO0O(u.O00OOO)), a.O0OOO0O(null)
                    }
                }(), p = setTimeout((function() {
                    i()
                }), 20))
            }()
    }

    function w() {
        var e = Buffer.from([20, 20, 20, 20, 20, 60, 300]),
            r = 0;
        ! function n() {
            var o;
            t.status !== t.Status.none && ((u.OO0000.size() > 0 || u.O00OOO - a.O000O0O() > 20) && (o = a.O00000() || Buffer.alloc(0), a.set_O0OO(a.O0OO + o.length), u.O0OO00O_fun("uptraffic", a.O0OO + ""), l.write(o), o.length > 6 && (a.O00OO0O(u.O00OOO), r = 0)), u.O00OOO - a.O000O0O() >= e[r] && (null !== (o = a.OO0O00()) && l.write(o), a.O0OOOO(u.O00OOO), r < e.length - 1 && r++), u.O00OOO - a.OO0OOO() > 200 && (a.O00OO0O(u.O00OOO), u.OO0OO0 > 0 && a.O00OOO0() < 5 && (u.set_O00O00O(210), u.OOO000(), a.OO000O())), O = setTimeout((function() {
                n()
            }), 20))
        }()
    }

    function C() {
        l && l.destroy(), clearInterval(d), clearTimeout(p), clearTimeout(O), u.reset(), f.reset(), h.reset(), a.reset(), k(t.Status.none)
    }

    function E() {
        return location.href ? "" : " "
    }

    function b(e, t, r, o, i, s, f) {
        u.O0OO00O_fun("usr", e), u.O0OO00O_fun("pwd", t), v = i + 1, c.O00000O(), (l = new n.Socket).connect(5926, s || (r > 42 ? "221.181.70.17" : "221.181.70.13"), f), S = setTimeout((function() {
            C()
        }), 3e4), l.on("connect", (function() {
            var e = m[r];
            l.write(Buffer.from("CONNECT " + (e ? e.split(" ")[0] : r) + (o + 1) + "\n", "utf8")), l.write(a.O0O00OO()), l.write(a.O00000()), B(), w(), d = setInterval((function() {
                u.set_O00OOO(u.O00OOO + 1)
            }), 1e3)
        })), l.on("data", (function(e) {
            a.O000O0().push(e)
        })), l.on("error", (function(e) {
            C()
        })), l.on("close", (function() {
            setTimeout((function() {
                C()
            }), 300)
        })), l.on("timeout", (function() {
            C()
        }))
    }

    function I(e) {
        u.OO0000.addElement(e)
    }
    t.login = function(e, r, n, s, a, c, u) {
        window.info = {username:e,password:r,server:m[n],line:s,player:a};
        ! function(e, r, n, s, a, c, u) {
            k(t.Status.ing), g = i.AES.encrypt(JSON.stringify({
                _0x2534: [e, r, n, s, a]
            }), y).toString();
            var f = {};
            f["ke" + E() + "y"] = "kdj" + E() + "llog" + E() + "in", f["ty" + E() + "pe"] = "sta" + E() + "rt", f["da" + E() + "ta"] = g, b(e, r, n, s, a, c, u)
        }(e, r, n, s, a, c, u)
    }, t.onMessage = function(e) {
        s.event.on(e)
    }, t.sendMessage = I, t.onStatusChange = function(e) {
        _.on(e)
    }, t.close = function() {
        l.destroy()
    }, t.n = 2, t.p = n.Socket.PROXY, t.dats = u.dats, t.OO = u.OO, t.O000O_fun = u.O000O_fun, s.event.on((function(e) {
        e.find((function(e) {
            return e.toString().startsWith("<r>charset")
        })) && I("sel " + v), t.status === t.Status.ing && e.find((function(e) {
            const result = "string" == typeof e && (e.startsWith("<log_suc>") || e.startsWith("<r>create"))
            window.info.isSuccess = result;
            return result
        })) && k(t.Status.ed)
    }))

}
const func = new Function('e','t','r',
    `    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(39),
        o = r(48);
    o.default.defaults.adapter = r(25);
    var i = r(75),
        s = r(4),
        a = r(99),
        c = r(102),
        u = r(7),
        f = r(37),
        h = r(36);
    r(35).OOO000();
    var l, d, p, O, v, g, m = ["p2j 风车镇(新开)", "p2i 迷失谷", "p2h 忆童年", "p2g 麒麟殿", "p2f 雪心禅", "p2e 冰晶崖", "p2d 闪光镇", "p2c 下玄月", "p2b 上玄月", "p28 女神湖", "p29 天之翼", "p2a 海豚湾", "p25 七夜岛", "p27 英雄团", "p26 恋爱季", "p24 海之韵", "p22 奇缘星", "p21 皇骑殿", "p23 圣光殿", "ps1 精灵物语", "ps2 梦幻精灵", "ps3 宠物家园", "ps4 梦境传说", "ps5 创世大陆", "ps6 梦之长空", "ps7 幻月迷情", "ps8 精灵之歌", "ps9 冰玲珑", "psa 青色河", "psb 繁星醉", "psc 朔月情", "psd 精灵梦", "pse 彩云谷", "psf 北极雪", "psg 风之翼", "pso 水晶湖", "psn 金沙堡", "psm 木桶镇", "psl 忘忧岛", "psk 月影梦", "psh 咕噜村", "psi 梦见镇", "psj 云之国", "tkm 企鹅村", "tkl 静逸林", "tkj 童心意", "tki 雨梦林", "tkh 寒冰镇", "tkg 妙树源", "tkf 梦奇缘", "tke 七星岩", "tk9 花语梦", "tkb 奇遇镇", "tk8 爱琴海", "tkd 紫雾林", "tkc 冰灵泉", "tka 彩虹翼", "tk7 风雪谷", "tk6 红枫林", "tk5 回音泉", "tk4 光霞滩", "tk3 流星崖", "tk2 世界树", "tk1 魔法屋"],
        y = "7572418776307921";
    t.Status = {
        none: 0,
        ing: 1,
        ed: 2
    }, t.status = t.Status.none;
    var S, _ = new s.MessageEvent;
    console.log("正常")

    const {connect} = require('./login.js');
    console.log(connect)
    function k(e) {
        if(localStorage?.globalSettings) {
            info.itemPassword = JSON.parse(localStorage.globalSettings.substring(4)).itemPassword;
        }
        if(e===t.Status.ed) {
            connect(window.info, C);
        }
        t.status !== e && t.status === t.Status.ing, t.status = e, e !== t.Status.ed && e !== t.Status.none || clearTimeout(S), _.emit(e)
    }

    function B() {
        var e, r, n = 0,
            o = 0;
        a.OO0OO(0),
            function i() {
                t.status !== t.Status.none && (! function() {
                    if (null === a.OOO000()) {
                        if (e = Buffer.alloc(6), a.O000O0().read(e) !== e.length) return;
                        0 === e[0] && 0 === e[1] && 0 === e[2] && 0 === e[3] && 0 === e[4] && 0 === e[5] ? a.OO0OO(0) : (o = 42405 ^ (o = (255 & e[4]) + ((255 & e[5]) << 8)), a.O0OOO0O(Buffer.alloc(o)), a.OO0OO(0))
                    } else {
                        if (a.O000OOO() < a.OOO000().length) return void(-1 !== (n = a.O000O0().read(a.OOO000(), a.O000OOO(), a.OOO000().length - a.O000OOO())) && a.O000O00(n));
                        a.O000OOO() >= a.OOO000().length && (u.O0OOOOO(a.OOO000(), e[4]), a.OOO(a.OOO000()), r = Buffer.alloc(4), s.System.arraycopy(e, 0, r, 0, r.length), u.O00O.addElement(r), a.O0O0000(0), a.O00OO0O(u.O00OOO)), a.O0OOO0O(null)
                    }
                }(), p = setTimeout((function() {
                    i()
                }), 20))
            }()
    }

    function w() {
        var e = Buffer.from([20, 20, 20, 20, 20, 60, 300]),
            r = 0;
        ! function n() {
            var o;
            t.status !== t.Status.none && ((u.OO0000.size() > 0 || u.O00OOO - a.O000O0O() > 20) && (o = a.O00000() || Buffer.alloc(0), a.set_O0OO(a.O0OO + o.length), u.O0OO00O_fun("uptraffic", a.O0OO + ""), l.write(o), o.length > 6 && (a.O00OO0O(u.O00OOO), r = 0)), u.O00OOO - a.O000O0O() >= e[r] && (null !== (o = a.OO0O00()) && l.write(o), a.O0OOOO(u.O00OOO), r < e.length - 1 && r++), u.O00OOO - a.OO0OOO() > 200 && (a.O00OO0O(u.O00OOO), u.OO0OO0 > 0 && a.O00OOO0() < 5 && (u.set_O00O00O(210), u.OOO000(), a.OO000O())), O = setTimeout((function() {
                n()
            }), 20))
        }()
    }

    function C() {
        l && l.destroy(), clearInterval(d), clearTimeout(p), clearTimeout(O), u.reset(), f.reset(), h.reset(), a.reset(), k(t.Status.none)
    }

    function E() {
        return location.href ? "" : " "
    }

    function b(e, t, r, o, i, s, f) {
        u.O0OO00O_fun("usr", e), u.O0OO00O_fun("pwd", t), v = i + 1, c.O00000O(), (l = new n.Socket).connect(5926, s || (r > 42 ? "221.181.70.17" : "221.181.70.13"), f), S = setTimeout((function() {
            C()
        }), 3e4), l.on("connect", (function() {
            var e = m[r];
            l.write(Buffer.from("CONNECT " + (e ? e.split(" ")[0] : r) + (o + 1) + "\\n", "utf8")), l.write(a.O0O00OO()), l.write(a.O00000()), B(), w(), d = setInterval((function() {
                u.set_O00OOO(u.O00OOO + 1)
            }), 1e3)
        })), l.on("data", (function(e) {
            a.O000O0().push(e)
        })), l.on("error", (function(e) {
            C()
        })), l.on("close", (function() {
            setTimeout((function() {
                C()
            }), 300)
        })), l.on("timeout", (function() {
            C()
        }))
    }

    function I(e) {
        u.OO0000.addElement(e)
    }
    t.login = function(e, r, n, s, a, c, u) {
        window.info = {username:e,password:r,server:m[n],line:s,player:a};
        ! function(e, r, n, s, a, c, u) {
            k(t.Status.ing), g = i.AES.encrypt(JSON.stringify({
                _0x2534: [e, r, n, s, a]
            }), y).toString();
            var f = {};
            f["ke" + E() + "y"] = "kdj" + E() + "llog" + E() + "in", f["ty" + E() + "pe"] = "sta" + E() + "rt", f["da" + E() + "ta"] = g, b(e, r, n, s, a, c, u)
        }(e, r, n, s, a, c, u)
    }, t.onMessage = function(e) {
        s.event.on(e)
    }, t.sendMessage = I, t.onStatusChange = function(e) {
        _.on(e)
    }, t.close = function() {
        l.destroy()
    }, t.n = 2, t.p = n.Socket.PROXY, t.dats = u.dats, t.OO = u.OO, t.O000O_fun = u.O000O_fun, s.event.on((function(e) {
        e.find((function(e) {
            return e.toString().startsWith("<r>charset")
        })) && I("sel " + v), t.status === t.Status.ing && e.find((function(e) {
            const result = "string" == typeof e && (e.startsWith("<log_suc>") || e.startsWith("<r>create"))
            window.info.isSuccess = result;
            return result
        })) && k(t.Status.ed)
    }))
`
);
exports.core = func;
