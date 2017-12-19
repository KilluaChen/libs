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
    //检查是否已到最后一页
    var curr_len = $('.x-form-trigger-input-cell input').length;
    var max_len = $('.x-toolbar-text').length;
    var curr = $('.x-form-trigger-input-cell input')[curr_len - 1].value;
    var max = $('.x-toolbar-text')[max_len - 1].innerHTML.replace('of ','');
    var cu = new Date().getTime() / 1000;
    var len = $('.x-list-plain').length - 1;
    var $c = $($('.x-list-plain')[len]).children();
    console.log('当前页:'+curr + ',总页数:' + max);
    setTimeout(function () {
        if ($c[0].innerHTML == prev) {
            if (curr == max) {
                var i_len = $('.x-btn-default-small-noicon').length;
                $('.x-btn-default-small-noicon')[i_len - 1].click();
                console.log('已到最后一页,自动提交');
                return false;
            }
            check()
        } else {
            console.log('new:' + $c[0].innerHTML);
            dl()
        }
    }, 500)
}
