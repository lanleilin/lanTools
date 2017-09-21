$(function() {
    function e(e, t) { if (document.queryCommandSupported && document.queryCommandSupported("copy")) { var o = document.createElement("textarea");
            o.style.position = "fixed", document.body.appendChild(o), o.textContent = e, o.focus(), o.setSelectionRange(0, o.value.length); try { document.execCommand("copy"), $(t).prev(".copy-notice").text(GLOBAL.copy.success).velocity({ translateX: -30, opacity: 1 }, { loop: 1, duration: 750, easing: "easeOutQuint" }) } catch (e) { return $(t).prev(".copy-notice").text(GLOBAL.copy.error).velocity({ translateX: -30, opacity: 1 }, { loop: 1, duration: 750, easing: "easeOutQuint" }), !1 } finally { document.body.removeChild(o) } } else $(t).prev(".copy-notice").text(GLOBAL.copy.noSupport) } var t = $('<i class="fa fa-clipboard" aria-hidden="true"></i>'),
        o = $('<div class="copy-notice"></div>');
    $("figure.highlight").prepend(t), $("figure.highlight").prepend(o), $(".highlight .fa-clipboard").on("click", function() { var t = window.getSelection(),
            o = document.createRange();
        o.selectNodeContents($(this).next("table").find(".code pre")[0]), t.removeAllRanges(), t.addRange(o); var n = t.toString();
        e(n, this), n = "" }) });


$(function() {
    for (var a = $("#content-inner img"), n = 0; n < a.length; n++) {
        var o = $('<a href="' + a[n].src + '" data-fancybox="group" data-caption="' + a[n].alt + '" class="fancybox"></a>');
        $(a[n]).wrap(o)
    }
    $().fancybox({ selector: "[data-fancybox]", loop: !0, transitionEffect: "slide" })
});