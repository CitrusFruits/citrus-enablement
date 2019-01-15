(function() {

    var __hs_cta_json = {"css":"a#cta_button_2643041_69b3b66a-2d23-447e-99d2-0d26fe0eb5a7 {\n    -webkit-font-smoothing: antialiased;\ncursor: pointer;\n-moz-user-select: none;\n-webkit-user-select: none;\n-o-user-select: none;\nuser-select: none;\ndisplay: inline-block;\nfont-weight: normal;\ntext-align: center;\ntext-decoration: none;\n-moz-transition: all .4s ease;\n-webkit-transition: all .4s ease;\n-o-transition: all .4s ease;\nbackground: rgb(243,107,16);\nborder-radius: 5px;\nborder-width: 0px;\ncolor: rgb(255,255,255);\nfont-family: sans-serif;\nheight: auto;\ntransition: all .4s ease;\npadding: 6px 30px;\ntext-shadow: none;\nwidth: auto;\nfont-size: 20px;\nline-height: 1.5em;\n\n    \n  }\n\na#cta_button_2643041_69b3b66a-2d23-447e-99d2-0d26fe0eb5a7:hover {\nbackground: rgb(255,117,17);\ncolor: rgb(255,255,255);\n}\n\na#cta_button_2643041_69b3b66a-2d23-447e-99d2-0d26fe0eb5a7:active, #cta_button_2643041_69b3b66a-2d23-447e-99d2-0d26fe0eb5a7:active:hover {\nbackground: rgb(194,85,12);\ncolor: rgb(244,244,244);\n}\n\na#cta_button_2643041_69b3b66a-2d23-447e-99d2-0d26fe0eb5a7 {\n  border-radius:3px; \nfont-family: \"myriad-pro\",sans-serif;\nfont-weight: 600;\ntext-transform: uppercase;\nfont-size: 14px;\nvertical-align: baseline;\nletter-spacing: 0;\nbackground: transparent;\nborder: 1px solid #017FAE;\ncolor: #017FAE;\n}","image_html":"<a id=\"cta_button_2643041_69b3b66a-2d23-447e-99d2-0d26fe0eb5a7\" class=\"cta_button\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=69b3b66a-2d23-447e-99d2-0d26fe0eb5a7&placement_guid=29cb88d3-9359-4aba-a047-c45e748a35e4&portal_id=2643041&canon=https%3A%2F%2Fwww.skuid.com%2F&redirect_url=APefjpH-nbrM2s-Cqf_j5prIYnA0PGqq65RDJfJXG3awUG4I0IS-gU8EyGYogwnwBQm0HwGPsRAPAIhJrppZOaOpGms2CA9PRK_D8Ja9a-XdqEHlNC-HRoo&click=7300dc56-239b-451d-b333-170199ffaa18&hsutk=c7a00000107d17d11a5b0168532c1e2a\"  target=\"_blank\"  cta_dest_link=\"https://www.skuid.com/demo/\"><img id=\"hs-cta-img-29cb88d3-9359-4aba-a047-c45e748a35e4\" class=\"hs-cta-img transBlueCTA\" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Get a demo\" src=\"https://cdn2.hubspot.net/hubshot/18/07/19/60f8a9ab-01f1-4260-bb73-d8696bc7ffd7.png\" srcset=\"https://cdn2.hubspot.net/hubshot/18/07/19/5a9bf25e-abc7-4095-803c-fddc2287e66b.png 4x, https://cdn2.hubspot.net/hubshot/18/07/19/7467628b-e181-4c02-8bcc-7c4510ad3e21.png 3x, https://cdn2.hubspot.net/hubshot/18/07/19/024f8824-e7ef-4855-a58e-db2f176ff4fc.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-29cb88d3-9359-4aba-a047-c45e748a35e4","raw_html":"<a id=\"cta_button_2643041_69b3b66a-2d23-447e-99d2-0d26fe0eb5a7\" class=\"cta_button transBlueCTA\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=69b3b66a-2d23-447e-99d2-0d26fe0eb5a7&placement_guid=29cb88d3-9359-4aba-a047-c45e748a35e4&portal_id=2643041&canon=https%3A%2F%2Fwww.skuid.com%2F&redirect_url=APefjpH-nbrM2s-Cqf_j5prIYnA0PGqq65RDJfJXG3awUG4I0IS-gU8EyGYogwnwBQm0HwGPsRAPAIhJrppZOaOpGms2CA9PRK_D8Ja9a-XdqEHlNC-HRoo&click=7300dc56-239b-451d-b333-170199ffaa18&hsutk=c7a00000107d17d11a5b0168532c1e2a\" target=\"_blank\" style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://www.skuid.com/demo/\" title=\"Get a demo\">Get a demo</a>"};
    var __hs_cta = {};

    __hs_cta.drop = function() {
        var is_legacy = document.getElementById('hs-cta-ie-element') && true || false,
            html = __hs_cta_json.image_html,
            tags = __hs_cta.getTags(),
            is_image = __hs_cta_json.is_image,
            parent, _style;

        if (!is_legacy && !is_image) {
            parent = (document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]);

            _style = document.createElement('style');
            parent.insertBefore(_style, parent.childNodes[0]);
            try {
                default_css = ".hs-cta-wrapper p, .hs-cta-wrapper div { margin: 0; padding: 0; }";
                cta_css = default_css + " " + __hs_cta_json.css;
                // http://blog.coderlab.us/2005/09/22/using-the-innertext-property-with-firefox/
                _style[document.all ? 'innerText' : 'textContent'] = cta_css;
            } catch (e) {
                // addressing an ie9 issue
                _style.styleSheet.cssText = cta_css;
            }

            html = __hs_cta_json.raw_html;

            

        }

        for (var i = 0; i < tags.length; ++i) {

            var tag = tags[i];
            var images = tag.getElementsByTagName('img');
            var cssText = "";
            var align = "";
            for (var j = 0; j < images.length; j++) {
                align = images[j].align;
                images[j].style.border = '';
                images[j].style.display = '';
                cssText = images[j].style.cssText;
            }

            if (align == "right") {
                tag.style.display = "block";
                tag.style.textAlign = "right";
            } else if (align == "middle") {
                tag.style.display = "block";
                tag.style.textAlign = "center";
            }

            tag.innerHTML = html.replace('/*hs-extra-styles*/', cssText);
            tag.style.visibility = 'visible';
            tag.setAttribute('data-hs-drop', 'true');
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('29cb88d3-9359-4aba-a047-c45e748a35e4');
        }

        return tags;
    };

    __hs_cta.getTags = function() {
        var allTags, check, i, divTags, spanTags,
            tags = [];
            if (document.getElementsByClassName) {
                allTags = document.getElementsByClassName(__hs_cta_json.placement_element_class);
                check = function(ele) {
                    return (ele.nodeName == 'DIV' || ele.nodeName == 'SPAN') && (!ele.getAttribute('data-hs-drop'));
                };
            } else {
                allTags = [];
                divTags = document.getElementsByTagName("div");
                spanTags = document.getElementsByTagName("span");
                for (i = 0; i < spanTags.length; i++) {
                    allTags.push(spanTags[i]);
                }
                for (i = 0; i < divTags.length; i++) {
                    allTags.push(divTags[i]);
                }

                check = function(ele) {
                    return (ele.className.indexOf(__hs_cta_json.placement_element_class) > -1) && (!ele.getAttribute('data-hs-drop'));
                };
            }
            for (i = 0; i < allTags.length; ++i) {
                if (check(allTags[i])) {
                    tags.push(allTags[i]);
                }
            }
        return tags;
    };

    // need to do a slight timeout so IE has time to react
    setTimeout(__hs_cta.drop, 10);
    
    window._hsq = window._hsq || [];
    window._hsq.push(['trackCtaView', '29cb88d3-9359-4aba-a047-c45e748a35e4', '69b3b66a-2d23-447e-99d2-0d26fe0eb5a7']);
    

}());
