function dl() {
    var e = !1, t = $(".x-list-plain").length - 1;
    return $($(".x-list-plain")[t]).children().each(function (t, n) {
        if (0 == t) {
            var i = $(n).html();
            if (i == prev)return e = !0, !1;
            prev = i
        }
        $(n).is(".x-boundlist-selected") || $(n).click()
    }), !e && (!((t = $(".x-tbar-page-next").length - 1) <= 3) && ($(".x-tbar-page-next")[t].click(), cs = (new Date).getTime() / 1e3, void check()))
}
function check(e) {
    if ((new Date).getTime() / 1e3 > cs + 10)return console.log("超过10秒"), !1;
    var e = $(".x-list-plain").length - 1, t = $($(".x-list-plain")[e]).children();
    setTimeout(function () {
        t[0].innerHTML == prev ? check() : (console.log("new:" + t[0].innerHTML), dl())
    }, 500)
}
if ("undefined" == typeof jQuery) {
    var s = document.createElement("script");
    s.type = "text/javascript", s.src = "https://cdn.bootcss.com/jquery/2.1.4/jquery.js", document.getElementsByTagName("HEAD").item(0).appendChild(s), setTimeout("dl()", 100)
} else dl();
var prev = "", cs = 0;