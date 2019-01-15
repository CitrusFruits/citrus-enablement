(function() {

    var __hs_cta_json = {"css":"a#cta_button_2643041_483b0e6e-e26d-40bf-a3fd-621531464166 {\n    -webkit-font-smoothing: antialiased;\ncursor: pointer;\n-moz-user-select: none;\n-webkit-user-select: none;\n-o-user-select: none;\nuser-select: none;\ndisplay: inline-block;\nfont-weight: normal;\ntext-align: center;\ntext-decoration: none;\n-moz-transition: all .4s ease;\n-webkit-transition: all .4s ease;\n-o-transition: all .4s ease;\nbackground: rgb(243,107,16);\nborder-radius: 5px;\nborder-width: 0px;\ncolor: rgb(255,255,255);\nfont-family: sans-serif;\nheight: auto;\ntransition: all .4s ease;\npadding: 6px 30px;\ntext-shadow: none;\nwidth: auto;\nfont-size: 20px;\nline-height: 1.5em;\n\n    \n  }\n\na#cta_button_2643041_483b0e6e-e26d-40bf-a3fd-621531464166:hover {\nbackground: rgb(255,117,17);\ncolor: rgb(255,255,255);\n}\n\na#cta_button_2643041_483b0e6e-e26d-40bf-a3fd-621531464166:active, #cta_button_2643041_483b0e6e-e26d-40bf-a3fd-621531464166:active:hover {\nbackground: rgb(194,85,12);\ncolor: rgb(244,244,244);\n}\n\na#cta_button_2643041_483b0e6e-e26d-40bf-a3fd-621531464166 {\n  border-radius:3px; \nfont-family: \"myriad-pro\",sans-serif;\nfont-weight: 600;\ntext-transform: uppercase;\nfont-size: 14px;\nvertical-align: baseline;\nletter-spacing: 0;\nbackground: transparent;\ncolor: #017FAE;\nborder: 1px solid #017FAE;\n}","image_html":"<a id=\"cta_button_2643041_483b0e6e-e26d-40bf-a3fd-621531464166\" class=\"cta_button\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=483b0e6e-e26d-40bf-a3fd-621531464166&placement_guid=a47a0530-5f04-4670-82c6-7c2480b4b992&portal_id=2643041&canon=https%3A%2F%2Fwww.skuid.com%2F&redirect_url=APefjpE_xCay6CLOSuDlVCNenhFzsu0RsF0GxcxZcIM1cnF86dLSrCrOBuHDYI63PBVqXcdxZ53-H_rGE-0dnOVPXq6O_YTu04TxAZItd-E-r4Yvi5Q9rtc&click=69efc22d-3206-40a2-bbcf-6a53a2628294&hsutk=c7a0000019711a32194a0168532c1e9a\"  target=\"_blank\"  cta_dest_link=\"https://www.skuid.com/services/\"><img id=\"hs-cta-img-a47a0530-5f04-4670-82c6-7c2480b4b992\" class=\"hs-cta-img transBlueCTA\" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Learn more\" src=\"https://cdn2.hubspot.net/hubshot/18/07/19/a7376961-0096-4759-909e-1aea10bd7b77.png\" srcset=\"https://cdn2.hubspot.net/hubshot/18/07/19/0d7b9f02-3ef5-4d63-8078-202a65e0dca5.png 4x, https://cdn2.hubspot.net/hubshot/18/07/19/016cd03b-69d5-42a2-ba15-8bc47fe63373.png 3x, https://cdn2.hubspot.net/hubshot/18/07/19/6343737e-52ed-43f4-94eb-7e5977262dfd.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-a47a0530-5f04-4670-82c6-7c2480b4b992","raw_html":"<a id=\"cta_button_2643041_483b0e6e-e26d-40bf-a3fd-621531464166\" class=\"cta_button transBlueCTA\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=483b0e6e-e26d-40bf-a3fd-621531464166&placement_guid=a47a0530-5f04-4670-82c6-7c2480b4b992&portal_id=2643041&canon=https%3A%2F%2Fwww.skuid.com%2F&redirect_url=APefjpE_xCay6CLOSuDlVCNenhFzsu0RsF0GxcxZcIM1cnF86dLSrCrOBuHDYI63PBVqXcdxZ53-H_rGE-0dnOVPXq6O_YTu04TxAZItd-E-r4Yvi5Q9rtc&click=69efc22d-3206-40a2-bbcf-6a53a2628294&hsutk=c7a0000019711a32194a0168532c1e9a\" target=\"_blank\" style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://www.skuid.com/services/\" title=\"Learn more\">Learn more</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('a47a0530-5f04-4670-82c6-7c2480b4b992');
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
    window._hsq.push(['trackCtaView', 'a47a0530-5f04-4670-82c6-7c2480b4b992', '483b0e6e-e26d-40bf-a3fd-621531464166']);
    

}());
