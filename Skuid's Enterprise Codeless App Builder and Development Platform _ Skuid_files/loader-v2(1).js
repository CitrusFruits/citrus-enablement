(function() {

    var __hs_cta_json = {"css":"a#cta_button_2643041_ea63adba-a86e-4de4-96b0-f7ce5cf9152e {\n    -webkit-font-smoothing: antialiased;\ncursor: pointer;\n-moz-user-select: none;\n-webkit-user-select: none;\n-o-user-select: none;\nuser-select: none;\ndisplay: inline-block;\nfont-weight: normal;\ntext-align: center;\ntext-decoration: none;\n-moz-transition: all .4s ease;\n-webkit-transition: all .4s ease;\n-o-transition: all .4s ease;\nbackground: rgb(243,107,16);\nborder-radius: 5px;\nborder-width: 0px;\ncolor: rgb(255,255,255);\nfont-family: sans-serif;\nheight: auto;\ntransition: all .4s ease;\npadding: 6px 30px;\ntext-shadow: none;\nwidth: auto;\nfont-size: 20px;\nline-height: 1.5em;\n\n    \n  }\n\na#cta_button_2643041_ea63adba-a86e-4de4-96b0-f7ce5cf9152e:hover {\nbackground: rgb(255,117,17);\ncolor: rgb(255,255,255);\n}\n\na#cta_button_2643041_ea63adba-a86e-4de4-96b0-f7ce5cf9152e:active, #cta_button_2643041_ea63adba-a86e-4de4-96b0-f7ce5cf9152e:active:hover {\nbackground: rgb(194,85,12);\ncolor: rgb(244,244,244);\n}\n\na#cta_button_2643041_ea63adba-a86e-4de4-96b0-f7ce5cf9152e {\n  border-radius:3px; \nfont-family: \"myriad-pro\",sans-serif;\nfont-weight: 600;\ntext-transform: uppercase;\nfont-size: 14px;\nvertical-align: baseline;\nletter-spacing: 0;\nbackground-color: #017FAE;\ncolor: #ffffff;\n}","image_html":"<a id=\"cta_button_2643041_ea63adba-a86e-4de4-96b0-f7ce5cf9152e\" class=\"cta_button\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=ea63adba-a86e-4de4-96b0-f7ce5cf9152e&placement_guid=c987b2da-bea4-467b-8528-2e204d3cb9bc&portal_id=2643041&canon=https%3A%2F%2Fwww.skuid.com%2F&redirect_url=APefjpE6EjW-Mt-JilI7sF2u8YS8_AxffJ36s_Y0xCT3wkQyY4jf5Rl9HEy1mZEny0ipx8r8jbt9OQp0PtEULCcERtWGYbW677V7Esd6juNwlevccj4rV5I&click=d411dc5d-8ea7-4c99-8a8f-3579475b0b88&hsutk=c7a000001dcf1c03156b0168532c1d65\"  cta_dest_link=\"https://www.skuid.com/demo/\"><img id=\"hs-cta-img-c987b2da-bea4-467b-8528-2e204d3cb9bc\" class=\"hs-cta-img blueCTA\" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Get live demo\" src=\"https://cdn2.hubspot.net/hubshot/18/11/08/82b18985-df01-42d8-9e2d-fa235ebcca58.png\" srcset=\"https://cdn2.hubspot.net/hubshot/18/11/08/b45f53dd-dd54-4d31-a0ad-2f986d4e1fa3.png 4x, https://cdn2.hubspot.net/hubshot/18/11/08/ba85bbd7-54b7-43d6-9b4c-d555923e8387.png 3x, https://cdn2.hubspot.net/hubshot/18/11/08/e7e6b293-93c0-4820-a0ab-58502cb46c20.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-c987b2da-bea4-467b-8528-2e204d3cb9bc","raw_html":"<a id=\"cta_button_2643041_ea63adba-a86e-4de4-96b0-f7ce5cf9152e\" class=\"cta_button blueCTA\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=ea63adba-a86e-4de4-96b0-f7ce5cf9152e&placement_guid=c987b2da-bea4-467b-8528-2e204d3cb9bc&portal_id=2643041&canon=https%3A%2F%2Fwww.skuid.com%2F&redirect_url=APefjpE6EjW-Mt-JilI7sF2u8YS8_AxffJ36s_Y0xCT3wkQyY4jf5Rl9HEy1mZEny0ipx8r8jbt9OQp0PtEULCcERtWGYbW677V7Esd6juNwlevccj4rV5I&click=d411dc5d-8ea7-4c99-8a8f-3579475b0b88&hsutk=c7a000001dcf1c03156b0168532c1d65\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://www.skuid.com/demo/\" title=\"Get live demo\">Get live demo</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('c987b2da-bea4-467b-8528-2e204d3cb9bc');
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
    window._hsq.push(['trackCtaView', 'c987b2da-bea4-467b-8528-2e204d3cb9bc', 'ea63adba-a86e-4de4-96b0-f7ce5cf9152e']);
    

}());
