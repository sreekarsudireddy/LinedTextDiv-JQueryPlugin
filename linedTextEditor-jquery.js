! function(e) { e.fn.linedTextEditor = function(t) { t = e.extend({}, e.fn.linedTextEditor.defaults, t); var n = function(e, n, i) { for (; e.height() - n < 0;) e.append(i == t.selectedLine ? "<div class='line-number lineselect'>" + i + "</div>" : "<div class='line-number'>" + i + "</div>"), i++; return i }; return this.each(function() { var i = 1,
                a = e(this);
            a.wrap("<div class='lined-textarea-container'></div>"); var r = a.parent();
            r.prepend("<div class='lines'></div>"); var l = r.find(".lines");
            l.append("<div class='linesContainer'></div>"); var s = l.find(".linesContainer");
            a.addClass("lined-textarea"), a.attr("contenteditable", "true"), a.attr("wrap", "off"), a.attr("autocomplete", "off"), a.attr("autocorrect", "off"), a.attr("autocapitalize", "off"), a.attr("spellcheck", "false"); var d = parseInt(e(".lined-textarea-container").parent().css("font-size").replace("px", ""));
            d -= 2; var o = d + 4; if (e(".lined-textarea-container").attr("style", "line-height:" + o + "px;font-size:" + d + "px"), lineNo = n(s, l.height(), i, o, d), -1 != t.selectedLine && !isNaN(t.selectedLine)) { var d = parseInt(a.height() / lineNo),
                    c = d * t.selectedLine;
                a[0].scrollTop = c }
            a.scroll(function() { var t = e(this)[0],
                    i = t.scrollTop,
                    a = t.clientHeight;
                s.css({ "margin-top": -1 * i + "px" }), lineNo = n(s, i + a, lineNo, o) }) }) }, e.fn.linedTextEditor.defaults = { selectedLine: -1 } }(jQuery);