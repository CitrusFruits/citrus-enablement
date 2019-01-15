(function() {

    var __hs_cta_json = {"css":"a#cta_button_2643041_9e051482-a8e3-4984-8b0a-0acfba75cea6 {\n    -webkit-font-smoothing: antialiased;\ncursor: pointer;\n-moz-user-select: none;\n-webkit-user-select: none;\n-o-user-select: none;\nuser-select: none;\ndisplay: inline-block;\nfont-weight: normal;\ntext-align: center;\ntext-decoration: none;\n-moz-transition: all .4s ease;\n-webkit-transition: all .4s ease;\n-o-transition: all .4s ease;\nbackground: rgb(243,107,16);\nborder-radius: 5px;\nborder-width: 0px;\ncolor: rgb(255,255,255);\nfont-family: sans-serif;\nheight: auto;\ntransition: all .4s ease;\npadding: 6px 30px;\ntext-shadow: none;\nwidth: auto;\nfont-size: 20px;\nline-height: 1.5em;\n\n    \n  }\n\na#cta_button_2643041_9e051482-a8e3-4984-8b0a-0acfba75cea6:hover {\nbackground: rgb(255,117,17);\ncolor: rgb(255,255,255);\n}\n\na#cta_button_2643041_9e051482-a8e3-4984-8b0a-0acfba75cea6:active, #cta_button_2643041_9e051482-a8e3-4984-8b0a-0acfba75cea6:active:hover {\nbackground: rgb(194,85,12);\ncolor: rgb(244,244,244);\n}\n\na#cta_button_2643041_9e051482-a8e3-4984-8b0a-0acfba75cea6 {\n  border-radius:3px; \nfont-family: \"myriad-pro\",sans-serif;\nfont-weight: 600;\ntext-transform: uppercase;\nfont-size: 14px;\nvertical-align: baseline;\nletter-spacing: 0;\n\ncolor: #ffffff;\n}","image_html":"<a id=\"cta_button_2643041_9e051482-a8e3-4984-8b0a-0acfba75cea6\" class=\"cta_button\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=9e051482-a8e3-4984-8b0a-0acfba75cea6&placement_guid=bbfc6df3-c4a5-4cbb-b55e-86648864d40d&portal_id=2643041&canon=https%3A%2F%2Fwww.skuid.com%2F&redirect_url=APefjpE7MKs3P9VeeRqchkpCi7T2giIMU8QVeDO6h6Iu3cCZ0suDNOui_1E4jRjDd4249HBG5BgIXXIboeVbKw26-jwteRooY2VI_E-juDigH2zwDemE6P5BH2iEc2VttDyPXCjYz_lS&click=e8a24a19-a883-492d-b5fc-696d2661be6d&hsutk=c7a00000135f1f55177b0168532c1d63\"  cta_dest_link=\"http://go.skuid.com/now-tech-forrester-report\"><img id=\"hs-cta-img-bbfc6df3-c4a5-4cbb-b55e-86648864d40d\" class=\"hs-cta-img \" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Get report\" src=\"https://cdn2.hubspot.net/hubshot/19/01/07/091d3097-5e03-40af-aa25-9cd03d617f55.png\" srcset=\"https://cdn2.hubspot.net/hubshot/19/01/07/64165b1b-282b-4e24-942a-73dacdab339b.png 4x, https://cdn2.hubspot.net/hubshot/19/01/07/e8ec5cdd-5f79-4dd8-aae3-8a5bc974bf99.png 3x, https://cdn2.hubspot.net/hubshot/19/01/07/da7906f0-06ed-4779-95fd-89b76eb58787.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-bbfc6df3-c4a5-4cbb-b55e-86648864d40d","raw_html":"<a id=\"cta_button_2643041_9e051482-a8e3-4984-8b0a-0acfba75cea6\" class=\"cta_button \" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=9e051482-a8e3-4984-8b0a-0acfba75cea6&placement_guid=bbfc6df3-c4a5-4cbb-b55e-86648864d40d&portal_id=2643041&canon=https%3A%2F%2Fwww.skuid.com%2F&redirect_url=APefjpE7MKs3P9VeeRqchkpCi7T2giIMU8QVeDO6h6Iu3cCZ0suDNOui_1E4jRjDd4249HBG5BgIXXIboeVbKw26-jwteRooY2VI_E-juDigH2zwDemE6P5BH2iEc2VttDyPXCjYz_lS&click=e8a24a19-a883-492d-b5fc-696d2661be6d&hsutk=c7a00000135f1f55177b0168532c1d63\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"http://go.skuid.com/now-tech-forrester-report\" title=\"Get report\">Get&nbsp;report</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('bbfc6df3-c4a5-4cbb-b55e-86648864d40d');
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
    window._hsq.push(['trackCtaView', 'bbfc6df3-c4a5-4cbb-b55e-86648864d40d', '9e051482-a8e3-4984-8b0a-0acfba75cea6']);
    

}());
