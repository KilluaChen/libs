/**
 * Created by killua on 17/8/28.
 */

if (typeof jQuery == 'undefined') {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://cdn.bootcss.com/jquery/2.1.4/jquery.js";
    document.getElementsByTagName('HEAD').item(0).appendChild(s);
    setTimeout('dl()', 100);
} else {
    dl();
}

var prev = '';
var cs = 0;
function dl() {
    var is_return = false;
    var len = $('.x-list-plain').length - 1;
    var $children = $($('.x-list-plain')[len]).children();
    $children.each(function (key, val) {
        if (key == 0) {
            var cu_val = $(val).html();
            if (cu_val == prev) {
                is_return = true;
                return false
            }
            prev = cu_val
        }
        if (!$(val).is('.x-boundlist-selected')) {
            $(val).click()
        }
    });
    if (is_return) {
        return false
    }
    var len = $('.x-tbar-page-next').length - 1;
    if (len <= 3) {
        return false
    }
    $('.x-tbar-page-next')[len].click();
    cs = new Date().getTime() / 1000;
    check()
}
function check(len) {
    var cu = new Date().getTime() / 1000;
    if (cu > cs + 10) {
        console.log('超过10秒');
        return false
    }
    var len = $('.x-list-plain').length - 1;
    var $c = $($('.x-list-plain')[len]).children();
    setTimeout(function () {
        if ($c[0].innerHTML == prev) {
            check()
        } else {
            console.log('new:' + $c[0].innerHTML);
            dl()
        }
    }, 500)
}
