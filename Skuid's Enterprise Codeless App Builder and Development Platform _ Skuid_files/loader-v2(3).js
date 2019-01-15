(function() {

    var __hs_cta_json = {"css":"a#cta_button_2643041_08015051-7fdf-4d48-bf20-98b42c300e3b {\n    -webkit-font-smoothing: antialiased;\ncursor: pointer;\n-moz-user-select: none;\n-webkit-user-select: none;\n-o-user-select: none;\nuser-select: none;\ndisplay: inline-block;\nfont-weight: normal;\ntext-align: center;\ntext-decoration: none;\n-moz-transition: all .4s ease;\n-webkit-transition: all .4s ease;\n-o-transition: all .4s ease;\nbackground: rgb(255,255,255);\nborder-radius: 5px;\nborder-width: 0px;\ncolor: rgb(255,255,255);\nfont-family: sans-serif;\nheight: auto;\ntransition: all .4s ease;\npadding: 6px 30px;\ntext-shadow: none;\nwidth: auto;\nfont-size: 20px;\nline-height: 1.5em;\n\n    \n  }\n\na#cta_button_2643041_08015051-7fdf-4d48-bf20-98b42c300e3b:hover {\nbackground: rgb(255,255,255);\ncolor: rgb(255,255,255);\n}\n\na#cta_button_2643041_08015051-7fdf-4d48-bf20-98b42c300e3b:active, #cta_button_2643041_08015051-7fdf-4d48-bf20-98b42c300e3b:active:hover {\nbackground: rgb(204,204,204);\ncolor: rgb(244,244,244);\n}\n\na#cta_button_2643041_08015051-7fdf-4d48-bf20-98b42c300e3b {\n  border-radius:3px; \nfont-family: \"myriad-pro\",sans-serif;\nfont-weight: 600;\ntext-transform: uppercase;\nfont-size: 14px;\nvertical-align: baseline;\nletter-spacing: 0;\nbackground: none;\nborder: 1px solid #ffffff;\nborder-radius: 3px;\n}","image_html":"<a id=\"cta_button_2643041_08015051-7fdf-4d48-bf20-98b42c300e3b\" class=\"cta_button\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=08015051-7fdf-4d48-bf20-98b42c300e3b&placement_guid=f8717290-a830-4884-bfc0-2b7cc4ddd58f&portal_id=2643041&canon=https%3A%2F%2Fwww.skuid.com%2F&redirect_url=APefjpFDxJ5jVdIx3CpMoYfLdDDlLTeuDc33_xr55FZoFlClDNxlB_0T3bfsH1eYi3DjuR6__toC7180Q7hq7GrogRZB-_OeYHMlvCNruPTFJlYR9-gxauI&click=d2ef79a6-5a79-43c0-9f92-df8fa780a823&hsutk=c7a000001cdc164c1f9c0168532c1d96\"  target=\"_blank\"  cta_dest_link=\"https://go.skuid.com/spark\"><img id=\"hs-cta-img-f8717290-a830-4884-bfc0-2b7cc4ddd58f\" class=\"hs-cta-img transCTA\" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Learn more\" src=\"https://cdn2.hubspot.net/hubshot/18/08/17/37b92f61-69be-4667-a92c-c6b2f934731c.png\" srcset=\"https://cdn2.hubspot.net/hubshot/18/08/17/a6c5ef5f-9262-42b5-938a-ef9545626e53.png 4x, https://cdn2.hubspot.net/hubshot/18/08/17/c954b0c3-29df-4e28-aba6-3a3c30ee5cfd.png 3x, https://cdn2.hubspot.net/hubshot/18/08/17/ca2a222e-ce67-4402-8a7e-872e9e4c632e.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-f8717290-a830-4884-bfc0-2b7cc4ddd58f","raw_html":"<a id=\"cta_button_2643041_08015051-7fdf-4d48-bf20-98b42c300e3b\" class=\"cta_button transCTA\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=08015051-7fdf-4d48-bf20-98b42c300e3b&placement_guid=f8717290-a830-4884-bfc0-2b7cc4ddd58f&portal_id=2643041&canon=https%3A%2F%2Fwww.skuid.com%2F&redirect_url=APefjpFDxJ5jVdIx3CpMoYfLdDDlLTeuDc33_xr55FZoFlClDNxlB_0T3bfsH1eYi3DjuR6__toC7180Q7hq7GrogRZB-_OeYHMlvCNruPTFJlYR9-gxauI&click=d2ef79a6-5a79-43c0-9f92-df8fa780a823&hsutk=c7a000001cdc164c1f9c0168532c1d96\" target=\"_blank\" style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://go.skuid.com/spark\" title=\"Learn more\">Learn more</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('f8717290-a830-4884-bfc0-2b7cc4ddd58f');
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
    window._hsq.push(['trackCtaView', 'f8717290-a830-4884-bfc0-2b7cc4ddd58f', '08015051-7fdf-4d48-bf20-98b42c300e3b']);
    

}());
