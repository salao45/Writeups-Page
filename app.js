document.addEventListener("DOMContentLoaded", function () {
    const topics = {
        
        "Cross Site Scripting (XSS)": [
            { name: "From P5 to P2 to 100 BXSS", url: "https://medium.com/@mohameddaher/from-p5-to-p5-to-p2-from-nothing-to-1000-bxss-4dd26bc30a82" },
            { name: "Google Acquisition XSS (Apigee)", url: "https://medium.com/@TnMch/google-acquisition-xss-apigee-5479d7b5dc4" },
            { name: "XSS on Microsoft.com via Angular Js template injection", url: "https://medium.com/@impratikdabhi/reflected-xss-on-microsoft-com-via-angular-template-injection-2e26d80a7fd8" },
            { name: "Researching Polymorphic Images for XSS on Google Scholar", url: "https://blog.doyensec.com/2020/04/30/polymorphic-images-for-xss.html" },
            { name: "Netflix Party Simple XSS", url: "https://medium.com/@kristian.balog/netflix-party-simple-xss-ec92ed1d7e18" },
            { name: "Stored XSS in google nest", url: "https://medium.com/bugbountywriteup/stored-xss-in-google-nest-a82373bbda68" },
            { name: "Self XSS to persistent XSS on login portal", url: "https://medium.com/@nnez/always-escalate-from-self-xss-to-persistent-xss-on-login-portal-54265b0adfd0" },
            { name: "Universal XSS affecting Firefox", url: "https://0x65.dev/blog/2020-03-30/cve-2019-17004-semi-universal-xss-affecting-firefox-for-ios.html" },
            { name: "XSS WAF Character limitation bypass like a boss", url: "https://medium.com/bugbountywriteup/xss-waf-character-limitation-bypass-like-a-boss-2c788647c229" },
            { name: "Self XSS to Account Takeover", url: "https://medium.com/@ch3ckm4te/self-xss-to-account-takeover-72c89775cf8f" },
            { name: "Reflected XSS on Microsoft subdomains", url: "https://medium.com/bugbountywriteup/reflected-xss-on-microsoft-com-subdomains-4bdfc2c716df" },
            { name: "The tricky XSS", url: "https://smaranchand.com.np/2020/02/the-tricky-xss/" },
            { name: "Reflected XSS  in AT&T", url: "https://medium.com/@godofdarkness.msf/reflected-xss-in-at-t-7f1bdd10d8f7" },
            { name: "XSS on Google using Acunetix", url: "https://www.acunetix.com/blog/web-security-zone/xss-google-acunetix/" },
            { name: "Exploiting websocket application wide XSS", url: "https://medium.com/@osamaavvan/exploiting-websocket-application-wide-xss-csrf-66e9e2ac8dfa" },
            { name: "Reflected XSS with  HTTP Smuggling", url: "https://hazana.xyz/posts/escalating-reflected-xss-with-http-smuggling/" },
            { name: "XSS on Facebook instagram CDN server bypassing signature protection", url: "https://www.amolbaikar.com/xss-on-facebook-instagram-cdn-server-bypassing-signature-protection/" },
            { name: "XSS on Facebook's Acquisition Oculus", url: "https://www.amolbaikar.com/xss-on-facebooks-acquisition-oculus-cdn-server/" },
            { name: "XSS on sony Subdomain", url: "https://medium.com/@gguzelkokar.mdbf15/xss-on-sony-subdomain-feddaea8f5ac" },
            { name: "Exploiting Self XSS", url: "https://footstep.ninja/posts/exploiting-self-xss/" },
            { name: "Effortlessly Finding Cross Site Scripting inclusion XSSI", url: "https://medium.com/bugbountywriteup/effortlessly-finding-cross-site-script-inclusion-xssi-jsonp-for-bug-bounty-38ae0b9e5c8a" },
            { name: "Bugbounty a DOM XSS", url: "https://jinone.github.io/bugbounty-a-dom-xss/" },
            { name: "Blind XSS : a mind Game", url: "https://medium.com/@dirtycoder0124/blind-xss-a-mind-game-to-win-the-battle-4fc67c524678?" },
            { name: "FireFox IOS QR code reader XSS(CVE-2019-17003)", url: "https://payatu.com/blog/nikhil-mittal/firefox-ios-qr-code-reader-xss-(cve-2019-17003" },
            { name: "HTML injection to XSS", url: "https://evanricafort.blogspot.com/2019/12/html-injection-to-xss-bypass-in.html" },
            { name: "CVE-2020-13487 | Authenticated Stored Cross-site Scripting in bbPress", url: "https://hackerone.com/reports/881918" },
            { name: "XSS at error page of repository code", url: "https://medium.com/@navne3t/150-xss-at-error-page-of-respository-code-4fc628892742" },
            { name: "XSS like a Pro", url: "https://www.hackerinside.me/2019/12/xss-like-pro.html" },
            { name: "How I turned self XSS to stored XSS via CSRF", url: "https://medium.com/@abhishake100/how-i-turned-self-xss-to-stored-via-csrf-d12eaaf59f2e" },
            { name: "XSS Stored on Outlook web", url: "https://medium.com/@elmrhassel/xss-stored-on-outlook-web-outlook-android-app-ad4bd46b8823" },
            { name: "XSS Bug 20 Chars Blind XSS Payload", url: "https://medium.com/@mohameddaher/how-i-paid-2-for-1054-xss-bug-20-chars-blind-xss-payloads-12d32760897b" },
            { name: "XSS in AMP4EMAIL(DOM clobbering)", url: "https://research.securitum.com/xss-in-amp4email-dom-clobbering/" },
            { name: "DOM Based XSS bug bounty writeup", url: "https://hacknpentest.com/dom-based-xss-bug-bounty-writeup/" },
            { name: "XSS will never die", url: "https://medium.com/@04sabsas/xss-will-never-die-eb3584081a5f" },
            { name: "5000 USD XSS issue at avast desktop antivirus", url: "https://medium.com/bugbountywriteup/5-000-usd-xss-issue-at-avast-desktop-antivirus-for-windows-yes-desktop-1e99375f0968" },
            { name: "XSS to account takeover", url: "https://noobe.io/articles/2019-10/xss-to-account-takeover" },
            { name: "How Paypal helped me to generate XSS", url: "https://medium.com/@pflash0x0punk/how-paypal-helped-me-to-generate-xss-9408c0931add" },
            { name: "Bypass Uppercase filters like a PRO(XSS advanced methods)", url: "https://medium.com/@Master_SEC/bypass-uppercase-filters-like-a-pro-xss-advanced-methods-daf7a82673ce" },
            { name: "Stealing login credentials with reflected XSS", url: "https://medium.com/@mehulcodes/stealing-login-credentials-with-reflected-xss-7cb450bf5710" },
            { name: "bughunting xss on cookie popup warning", url: "https://victoni.github.io/bug-hunting-xss-on-cookie-popup-warning/" },
            { name: "XSS is love", url: "https://nirmaldahal.com.np/xss-is-love/" },
            { name: "Oneplus XSS vulnerability in customer support portal", url: "https://medium.com/@tech96bot/oneplus-xss-vulnerability-in-customer-support-portal-d5887a7367f4" },
            { name: "Exploiting cookie based XSS by finding RCE", url: "https://noobe.io/articles/2019-09/exploiting-cookie-based-xss-by-finding-rce" },
            { name: "Stored XSS on zendesk via macros", url: "https://medium.com/@hariharan21/stored-xss-on-zendesk-via-macros-part-2-676cefee4616" },
            { name: "XSS in ZOHO main", url: "https://www.hackerinside.me/2019/09/xss-in-zoho-mail.html" },
            { name: "DOM based XSS in private program", url: "https://www.mohamedharon.com/2019/09/dom-based-xss-in-private-program.html" },
            { name: "Bugbounty writeup : Take Attention and get stored XSSS", url: "https://medium.com/@04sabsas/bugbounty-writeup-take-attention-and-get-stored-xss-495dd6eab07e" },
            { name: "How I xssed admin account", url: "https://gauravnarwani.com/how-i-xssed-admin-account/" },
            { name: "Clickjacking XSS on google", url: "https://websecblog.com/vulns/clickjacking-xss-on-google-org/" },
            { name: "Stored XSS on laporbugid", url: "https://learn.hackersid.com/2019/08/stored-xss-on-laporbugid.html" },
            { name: "Leveraging angularjs based XSS to privilege escalation", url: "https://www.shawarkhan.com/2019/08/leveraging-angularjs-based-xss-to-privilege-escalation.html" },
            { name: "How I found XSS by searching in shodan", url: "https://blog.usejournal.com/how-i-found-xss-by-searching-in-shodan-6943b799e648" },
            { name: "Chaining caache poisining to stored XSS", url: "https://medium.com/@nahoragg/chaining-cache-poisoning-to-stored-xss-b910076bda4f" },
            { name: "XSS  to RCE", url: "https://medium.com/@hungrybytes/xss-to-rce-in-e20b2bc55f94" },
            { name: "XSS on twitter worth 1120", url: "https://medium.com/@bywalks/xss-on-twitter-worth-1120-914dcd28ee18" },
            { name: "Reflected XSS in ebay.com", url: "https://medium.com/@madguyyy/reflected-xss-in-ebay-com-60a9d61e26cd" },
            { name: "Cookie based XSS exolpoitation 2300 bug bounty", url: "https://medium.com/@iSecMax/сookie-based-xss-exploitation-2300-bug-bounty-story-9bc532ffa564" },
            { name: "What do netcat -SMTP-self XSS have in common", url: "https://medium.com/bugbountywriteup/what-do-netcat-smtp-and-self-xss-have-in-common-stored-xss-a05648b72002" },
            { name: "XSS on google custom search engine", url: "https://thesecurityexperts.wordpress.com/2019/07/11/xss-on-google-custom-search-engine/" },
            { name: "Story of a Full Account Takeover vulnerability N/A to Accepted", url: "https://medium.com/@nandwanajatin25/story-of-a-stored-xss-to-full-account-takeover-vulnerability-n-a-to-accepted-8478aa5e0d8e" },
            { name: "Yeah I got p2 in 1 minute stored XSS via markdown editor", url: "https://medium.com/@schopath/yeah-i-got-p2-in-1-minute-stored-xss-via-markdown-editor-7872dba3f158" },
            { name: "Stored XSS on indeed", url: "https://cyberzombie.in/stored-xss-on-indeed/" },
            { name: "Self XSS to evil XSS", url: "https://medium.com/@saadahmedx/self-xss-to-evil-xss-bcf2494a82a4" },
            { name: "How a classical XSS can lead to persistent  ATO vulnerability", url: "https://hackademic.co.in/how-a-classical-xss-can-lead-to-persistent-ato-vulnerability/" },
            { name: "Reflected XSS in tokopedia train ticket", url: "https://visat.me/security/reflected-xss-in-tokopedia-train-ticket/" },
            { name: "Bypassing XSS filter and stealing user credit card data", url: "https://medium.com/@osamaavvan/bypassing-xss-filter-and-stealing-user-credit-card-data-100f247ed5eb" },
            { name: "Googleplex.com blind XSS", url: "https://websecblog.com/vulns/googleplex-com-blind-xss/" },
            { name: "Reflected XSS on error page", url: "https://noobe.io/articles/2019-06/reflected-xss-on-error-page" },
            { name: "How I was able to get private ticket response panel and fortigate web panel via blind XSS", url: "https://pwnsec.ninja/2019/06/06/how-i-was-able-to-get-private-ticket-response-panel-and-fortigate-web-panel-via-blind-xss/" },
            { name: "Unicode vs WAF", url: "https://medium.com/bugbountywriteup/unicode-vs-waf-xss-waf-bypass-128cd9972a30" },
            { name: "Story of URI based XSS with some simple google dorking", url: "https://medium.com/@nandwanajatin25/story-of-a-uri-based-xss-with-some-simple-google-dorking-e1999254aa55" },
            { name: "Stored XSS on edmodo", url: "https://medium.com/@matarpan33r/stored-xss-on-edmodo-67b244824fa5" },
            { name: "XSSed my way to 1000", url: "https://gauravnarwani.com/xssed-my-way-to-1000/" },
            { name: "Try harder for XSS", url: "https://medium.com/@fbotes2/try-harder-for-xss-7aa3657255a1" },
            { name: "From parameter pollution to XSS", url: "https://medium.com/@momenbasel/from-parameter-pollution-to-xss-d095e13be060" },
            { name: "MIME  sniffing XSS", url: "https://www.komodosec.com/post/mime-sniffing-xss" },
            { name: "Stored XSS on techprofile Microsoft", url: "https://medium.com/@kang_ali/stored-xss-on-techprofile-microsoft-d21757588cc1" },
            { name: "Tale of a wormable Twitter XSS", url: "https://www.virtuesecurity.com/tale-of-a-wormable-twitter-xss/" },
            { name: "XSS attacks google bot index manipulation", url: "http://www.tomanthony.co.uk/blog/xss-attacks-googlebot-index-manipulation/" },
            { name: "From Reflected XSS to Account takeover", url: "https://medium.com/a-bugz-life/from-reflected-xss-to-account-takeover-showing-xss-impact-9bc6dd35d4e6" },
            { name: "Stealing local storage data through XSS", url: "http://blog.h4rsh4d.com/2019/04/stealing-local-storage-data-through-xss.html" },
            { name: "CSRF attack can lead to stored XSS", url: "https://medium.com/bugbountywriteup/csrf-attack-can-lead-to-stored-xss-f40ba91f1e4f" },
            { name: "XSS Reflected (filter bypass)", url: "https://medium.com/bugbountywriteup/xss-reflected-xss-bypass-filter-de41d35239a3" },
            { name: "XSS protection bypass on hackerone private program", url: "https://medium.com/@bughunter.sec7/how-i-was-able-to-bypass-xss-protection-on-hackerones-private-program-8914a31339a9" },
            { name: "Just 5 minutes to get my 2nd Stored XSS on edmodo.com", url: "https://medium.com/@ZishanAdThandar/just-5-minute-to-get-my-2nd-stored-xss-on-edmodo-com-fe2ee559e00d" },
            { name: "Multiple XSS in  skype.com", url: "https://medium.com/@jayateerthag/multiple-xss-in-skype-com-2-18cfed39edbd" },
            { name: "Obtaining XSS using moodle featured and minor bugs", url: "https://medium.com/@daniel.thatcher/obtaining-xss-using-moodle-features-and-minor-bugs-2035665989cc" },
            { name: "XSS on 403 forbidden bypass akamai WAF", url: "https://medium.com/@bughunter.sec7/xss-403-forbidden-bypass-akamai-security-write-up-b341f588efb5" },
            { name: "How I was turn self XSS into reflected XSS", url: "https://medium.com/@heinthantzin/how-i-was-able-to-turn-self-xss-into-reflected-xss-850e3d5a2beb" },
            { name: "A Tale of 3 XSS", url: "https://gauravnarwani.com/a-tale-of-3-xss/" },
            { name: "Stored XSS on Google.com", url: "https://medium.com/@bughunter.sec7/stored-xss-on-google-com-e7ac12f03b8e" },
            { name: "Stored XSS in the Guides gameplaersion (www.dota2.com)", url: "https://medium.com/@bughunter.sec7/stored-xss-in-the-guides-gameplayversion-www-dota2-com-775fa9a1889b" },
            { name: "Admin google.com reflected XSS", url: "https://buer.haus/2015/01/21/admin-google-com-reflected-cross-site-scripting-xss/" },
            { name: "Paypal Stored security bypass", url: "https://blog.it-securityguard.com/bugbounty-paypal-stored-xss-security-bypass/" },
            { name: "Paypal DOM XSS main domain", url: "https://blog.it-securityguard.com/bugbounty-paypal-dom-xss-main-domain/" },
            { name: "Bugbounty  : The 5k$ Google XSS", url: "https://blog.it-securityguard.com/bugbounty-the-5000-google-xss" },
            { name: "Facebook stored XSS", url: "https://buer.haus/2014/06/16/facebook-stored-cross-site-scripting-xss-badges/" },
            { name: "Ebay mobile reflected XSS", url: "https://thehackerblog.com/ebay-mobile-reflected-xss-disclosure-writeup/index.html" },
            { name: "Magix bugbounty XSS writeup", url: "https://www.rcesecurity.com/2014/04/magix-bug-bounty-magix-com-rce-sqli-and-xara-com-lfi-xss/" },
            { name: "Abusing CORS for an XSS on flickr", url: "https://whitton.io/articles/abusing-cors-for-an-xss-on-flickr/" },
            { name: "XSS on google groups", url: "https://manuel-sousa.blogspot.com/2013/11/xss-google-groups-groupsgooglecom.html" },
            { name: "Oracle XSS", url: "http://blog.shashank.co/2013/11/oracle-xss.html" },
            { name: "Content types and XSS Facebook Studio", url: "https://whitton.io/articles/content-types-and-xss-facebook-studio/" },
            { name: "Admob Creative image XSS", url: "https://bitquark.co.uk/blog/2013/07/19/admob_creative_image_xss" },
            { name: "Amazon Packaging feedback XSS", url: "https://bitquark.co.uk/blog/2013/07/03/amazon_packaging_feedback_xss" },
            { name: "PaypalTech XSS", url: "https://www.rcesecurity.com/2013/04/paypal-bug-bounty-paypaltech-com-xss/" },
            { name: "Persistent XSS on my world", url: "https://whitton.io/archive/persistent-xss-on-myworld-ebay-com/" },
            { name: "Google VRP XSS in device management", url: "https://sites.google.com/securifyinc.com/vrp-writeups/gsuite/bookmark-xss-device-management" },
            { name: "Google VRP XSS", url: "https://sites.google.com/securifyinc.com/vrp-writeups/hire-with-google/xsses" },
            { name: "Google VRP Blind XSS", url: "https://sites.google.com/securifyinc.com/vrp-writeups/hire-with-google/blind-xss" },
            { name: "WAZE XSS", url: "https://sites.google.com/securifyinc.com/vrp-writeups/waze/waze-xss" },
            { name: "Referer Based XSS", url: "https://medium.com/@arbazhussain/referer-based-xss-52aeff7b09e7" },
            { name: "How we invented the Tesla DOM XSS", url: "https://labs.detectify.com/2017/07/27/how-we-invented-the-tesla-dom-doom-xss/" },
            { name: "Stored XSS on rockstar game", url: "https://medium.com/@arbazhussain/stored-xss-on-rockstar-game-c008ec18d071" },
            { name: "How I was able to bypass strong XSS protection in well known website imgur.com", url: "https://medium.com/bugbountywriteup/how-i-was-able-to-bypass-strong-xss-protection-in-well-known-website-imgur-com-8a247c527975" },
            { name: "Self XSS to Good XSS", url: "https://medium.com/@arbazhussain/self-xss-to-good-xss-clickjacking-6db43b44777e" },
            { name: "That escalated quickly : from partial CSRF to reflected XSS to complete CSRF to Stored XSS", url: "https://medium.com/@ciph3r7r0ll/that-escalated-quickly-from-partial-csrf-to-reflected-xss-to-complete-csrf-to-stored-xss-6ba8103069c2" },
            { name: "XSS using dynamically generated js file", url: "https://medium.com/@arbazhussain/xss-using-dynamically-generated-js-file-a7a10d05ff08" },
            { name: "Bypassing XSS filtering at anchor Tags", url: "https://medium.com/@arbazhussain/bypassing-xss-filtering-at-anchor-tags-706dde7b8090" },
            { name: "XSS by tossing cookies", url: "https://wesecureapp.com/blog/xss-by-tossing-cookies/" },
            { name: "Coinbase angularjs dom XSS via kiteworks", url: "http://www.paulosyibelo.com/2017/07/coinbase-angularjs-dom-xss-via-kiteworks.html" },
            { name: "Medium Content spoofing and XSS", url: "https://ahussam.me/Medium-content-spoofing-xss/" },
            { name: "Managed Apps and music a tale of two XSSes in Google play", url: "https://ysx.me.uk/managed-apps-and-music-a-tale-of-two-xsses-in-google-play/" },
            { name: "Making an XSS triggered by CSP bypass on twitter", url: "https://medium.com/@tbmnull/making-an-xss-triggered-by-csp-bypass-on-twitter-561f107be3e5" },
            { name: "Escalating XSS in phantomjs image rendering to SSRF", url: "https://buer.haus/2017/06/29/escalating-xss-in-phantomjs-image-rendering-to-ssrflocal-file-read/" },
            { name: "Reflected XSS in Simplerisk", url: "https://www.seekurity.com/blog/general/reflected-xss-vulnerability-in-simplerisk/" },
            { name: "Stored XSS in the heart of the russian email provider", url: "https://www.seekurity.com/blog/general/stored-xss-in-the-heart-of-the-russian-email-provider-giant-mail-ru/" },
            { name: "How I built an XSS worm on atmail", url: "https://www.bishopfox.com/blog/2017/06/how-i-built-an-xss-worm-on-atmail/" },
            { name: "XSS on bugcrowd and so many other websites main domain", url: "https://blog.witcoat.com/2018/05/30/xss-on-bugcrowd-and-so-many-other-websites-main-domain/" },
            { name: "Godaddy XSS affects parked domains redirector Processor", url: "https://www.seekurity.com/blog/write-ups/godaddy-xss-affects-parked-domains-redirector-processor/" },
            { name: "Stored XSS in Google image search", url: "https://sites.google.com/site/bugbountybughunter/home/stored-xss-in-google-image-search" },
            { name: "A pair of plotly bugs stored XSS abd AWS metadata", url: "https://ysx.me.uk/a-pair-of-plotly-bugs-stored-xss-and-aws-metadata-ssrf/" },
            { name: "Near universal XSS in mcafee web gateway", url: "https://blog.ettic.ca/near-universal-xss-in-mcafee-web-gateway-cf8dfcbc8fc3" },
            { name: "Penetrating Pornhub XSS vulns", url: "https://www.jonbottarini.com/2017/03/16/penetrating-pornhub-xss-vulns-galore-plus-a-cool-shirt/" },
            { name: "How I found a 5000 Google maps XSS by fiddling with protobuf", url: "https://medium.com/@marin_m/how-i-found-a-5-000-google-maps-xss-by-fiddling-with-protobuf-963ee0d9caff" },
            { name: "Airbnb when bypassing json encoding XSS filter WAF CSP and auditior turns into eight vulnerabilities", url: "https://buer.haus/2017/03/08/airbnb-when-bypassing-json-encoding-xss-filter-waf-csp-and-auditor-turns-into-eight-vulnerabilities/" },
            { name: "Lightwight markup a trio of persistent XSS in gitlab", url: "https://ysx.me.uk/lightweight-markup-a-trio-of-persistent-xss-in-gitlab/" },
            { name: "XSS ONE BAY", url: "https://whitehatnepal.tumblr.com/post/153333332112/xssonebay" },
            { name: "SVG XSS in unifi", url: "https://guptashubham.com/svg-xss-in-unifi-v5-0-2/" },
            { name: "Stored XSS in unifi V4.8.12 controller", url: "https://guptashubham.com/stored-xss-in-unifi-v4-8-12-controller/" },
            { name: "Turning self XSS into good XSS v2", url: "https://httpsonly.blogspot.com/2016/08/turning-self-xss-into-good-xss-v2.html" },
            { name: "SWF XSS DOM Based XSS", url: "https://guptashubham.com/swf-xss-dom-based-xss/" },
            { name: "XSS filter bypass in Yahoo Dev flurry", url: "https://guptashubham.com/xss-filter-bypass-in-yahoo-dev-flurry-com/" },
            { name: "XSS on Flickr", url: "https://guptashubham.com/xss-on-flickr/" },
            { name: "Two vulnerabilities makes an exploit XSS and csrf in bing", url: "https://medium.com/bugbountywriteup/two-vulnerabilities-makes-an-exploit-xss-and-csrf-in-bing-cd4269da7b69" },
            { name: "Runkeeper stored XSS", url: "https://www.seekurity.com/blog/general/runkeeper-stores-xss-vulnerability/" },
            { name: "Google sleeping XSS awakens 5k bounty", url: "https://blog.it-securityguard.com/bugbounty-sleeping-stored-google-xss-awakens-a-5000-bounty/" },
            { name: "Poisoning the well compromising godaddy customer support with blind XSS", url: "https://thehackerblog.com/poisoning-the-well-compromising-godaddy-customer-support-with-blind-xss/index.html" },
            { name: "UBER turning self XSS to good XSS", url: "https://whitton.io/articles/uber-turning-self-xss-into-good-xss/" },
            { name: "XSS on facebook via png content types", url: "https://whitton.io/articles/xss-on-facebook-via-png-content-types/" },
            { name: "Cloudflare XSS", url: "https://ahussam.me/Cloudflare-xss/" },
            { name: "How I found XSS Vulnerability in Google", url: "https://zombiehelp54.blogspot.com/2015/09/how-i-found-xss-vulnerability-in-google.html" },
            { name: "XSS to RCE", url: "https://matatall.com/xss/rce/bugbounty/2015/09/08/xss-to-rce.html" },
            { name: "One payload to XSS them all", url: "https://ahussam.me/One-payload-to-xss-them/" },
            { name: "Self XSS on komunitas", url: "https://medium.com/@bughunter.sec7/self-xss-on-komunitas-bukalapak-com-b8a28dce4fbd" },
            { name: "Reclected XSS on alibabacloud", url: "https://medium.com/@bughunter.sec7/reflected-xss-on-alibabacloud-com-4e652fcca22f" },
            { name: "Self XSS on komunitas bukalapak", url: "https://medium.com/@bughunter.sec7/self-xss-on-komunitas-bukalapak-com-b8a28dce4fbd" },
            { name: "A real XSS in OLX", url: "https://medium.com/@paulorcchoupina/a-real-xss-in-olx-7727ae89c640" },
            { name: "Self XSS using IE adobes", url: "https://medium.com/@80vul/from-http-domain-to-res-domain-xss-by-using-ie-adobes-pdf-activex-plugin-9f2a72a87aff" },
            { name: "Stealing local storage through XSS", url: "http://blog.h4rsh4d.com/2019/04/stealing-local-storage-data-through-xss.html" },
            { name: "1000 USD in 5mins Stored XSS in Outlook", url: "https://omespino.com/write-up-1000-usd-in-5-minutes-xss-stored-in-outlook-com-ios-browsers/" },
            { name: "OLX reflected XSS", url: "https://medium.com/@abaykandotcom/olx-bug-bounty-reflected-xss-adb3095cd525" },
            { name: "My first stored XSS on edmodo.com", url: "https://medium.com/@ZishanAdThandar/my-first-stored-xss-on-edmodo-com-540a33349662" },
            { name: "Hack your form new vector for BXSS", url: "https://medium.com/@GeneralEG/hack-your-form-new-vector-for-blind-xss-b7a50b808016" },
            { name: "How I found Blind XSS vulnerability in redacted.com", url: "https://medium.com/@newp_th/how-i-find-blind-xss-vulnerability-in-redacted-com-33af18b56869" },
            { name: "3 XSS in protonmail for iOS", url: "https://medium.com/@vladimirmetnew/3-xss-in-protonmail-for-ios-95f8e4b17054" },
            { name: "XSS in edmodo wihinin 5 mins", url: "https://medium.com/@valakeyur/xss-in-edmodo-within-5-minute-my-first-bug-bounty-889e3da6167d" },
            { name: "Stil work redirect Yahoo subdomain XSS", url: "https://www.mohamedharon.com/2019/02/still-work-redirect-yahoo-subdomain-xss.html" },
            { name: "XSS in azure devOps", url: "https://5alt.me/2019/02/xss-in-azure-devops/" },
            { name: "Shopify reflected XSS", url: "https://medium.com/@modam3r5/reflected-xss-at-https-photos-shopify-com-ea696db3915c" },
            { name: "Muliple Stored XSS on tokopedia", url: "https://apapedulimu.click/multiple-stored-xss-on-tokopedia/" },
            { name: "Stored XSS on edmodo", url: "https://medium.com/@futaacmcyber/stored-xss-on-edmodo-11a3fbc6b6d0" },
            { name: "A unique XSS scenario 1000 Bounty", url: "https://medium.com/@rohanchavan/a-unique-xss-scenario-1000-bounty-347f8f92fcc6" },
            { name: "Protonmail XSS Stored", url: "https://medium.com/@ChandSingh/protonmail-xss-stored-b733031ac3b5" },
            { name: "Chaining tricky ouath exploitation to stored XSS", url: "https://medium.com/@nahoragg/chaining-tricky-oauth-exploitation-to-stored-xss-b67eaea4aabd" },
            { name: "Antihack XSS to php uplaod", url: "https://blog.saycure.io/2019/01/24/antihack-xss-2-php-upload/" },
            { name: "Reflected XSS in zomato", url: "https://medium.com/@sudhanshur705/reflected-xss-in-zomato-f892d6887147" },
            { name: "XSS through SWF file", url: "https://medium.com/@friendly_/xss-through-swf-file-4f04af7b0f59" },
            { name: "Hackyourform BXSS", url: "https://generaleg0x01.com/2019/01/13/hackyourform-bxss/" },
            { name: "Reflected XSS on ASUS", url: "https://medium.com/@thejuskrishnan911/reflected-xss-on-asus-568ce0541171" },
            { name: "Stored XSS via Alternate text at zendesk support", url: "https://medium.com/@hariharan21/stored-xss-via-alternate-text-at-zendesk-support-8bfee68413e4" },
            { name: "How I stumbled upon a stored XSS : my first bug bounty story", url: "https://medium.com/@parthshah14031998/how-i-stumbled-upon-a-stored-xss-my-first-bug-bounty-story-2793300d82bb" },
            { name: "Cookie based Self XSS to Good XSS", url: "https://medium.com/bugbountywriteup/cookie-based-self-xss-to-good-xss-d0d1ca16dd0e" },
            { name: "Reflected XSS on amazon", url: "https://medium.com/@newp_th/reflected-xss-on-ws-na-amazon-adsystem-com-amazon-f1e55f1d24cf" },
            { name: "XSS worm  : a creative use of web application vulnerability", url: "https://blog.compass-security.com/2018/12/xss-worm-a-creative-use-of-web-application-vulnerability/" },
            { name: "Google code in XSS", url: "https://websecblog.com/vulns/google-code-in-xss/" },
            { name: "Self XSS on indeed.com", url: "https://medium.com/@sampanna/self-xss-in-indeed-com-e0c99c104cba" },
            { name: "How I accidentally found XSS in Protonmail for iOS app", url: "https://www.secu.ninja/2018/12/04/how-to-accidentally-find-a-xss-in-protonmail-ios-app/" },
            { name: "XML XSS in yandex.ru by accident", url: "https://medium.com/@0ktavandi/xml-xss-in-yandex-ru-by-accident-7e63c692b4c0" },
            { name: "Critical Stored XSS vulnerability", url: "https://www.hackerinside.me/2018/11/critical-stored-xss-vulnerability.html" },
            { name: "XSS bypass using META tag in realestate.postnl.nl", url: "https://medium.com/bugbountywriteup/xss-bypass-using-meta-tag-in-realestate-postnl-nl-32db25db7308" },
            { name: "Edmodo XSS bug", url: "https://medium.com/@sameerphad72/edmodo-xss-bug-9c0fc9bdd0bf" },
            { name: "XSS in hiden input fields", url: "https://portswigger.net/blog/xss-in-hidden-input-fields" },
            { name: "How I discovered XSS that affected over 20 uber subdomains", url: "https://blog.fadyothman.com/how-i-discovered-xss-that-affects-over-20-uber-subdomains/" },
            { name: "DOM based XSS or why you should not rely on cloudflare too much", url: "https://medium.com/bugbountywriteup/dom-based-xss-or-why-you-should-not-rely-on-cloudflare-too-much-a1aa9f0ead7d" },
            { name: "XSS in dynamics 365", url: "https://medium.com/@tim.kent/xss-in-dynamics-365-25c800aac473" },
            { name: "XSS deface with html and how to convert the html into charcode", url: "https://medium.com/@ariffadhlullah2310/xss-deface-with-html-and-how-to-convert-the-html-into-charcode-f0c62dd5ef3f" },
            { name: "Cookie based injection XSS making explitable with exploiting other vulns", url: "https://medium.com/@agrawalsmart7/cookie-based-injection-xss-making-exploitable-with-out-exploiting-other-vulns-81132ca01d67" },
            { name: "XSS with put in ghost blog", url: "https://www.itsecguy.com/xss-with-put-in-ghost-blog/" },
            { name: "XSS using a Bug in safari and why blacklists are stupid", url: "https://labs.detectify.com/2018/10/19/xss-using-a-bug-in-safari-and-why-blacklists-are-stupid/" },
            { name: "Magic XSS with two parameters", url: "https://medium.com/@m4shahab1/magic-xss-with-two-parameters-463559b03949" },
            { name: "DOM XSS bug affecting tinder shopify Yelp", url: "https://www.vpnmentor.com/blog/dom-xss-bug-affecting-tinder-shopify-yelp/" },
            { name: "Persistent XSS unvalidated open graph embed at linkedin.com", url: "https://medium.com/@jonathanbouman/persistent-xss-unvalidated-open-graph-embed-at-linkedin-com-db6188acedd9" },
            { name: "My first 0day exploit CSP Bypass Reflected XSS", url: "https://medium.com/@alicanact60/my-first-0day-exploit-csp-bypass-reflected-xss-bugbounty-c7efa4bed3d7" },
            { name: "Google Stored XSS in payments", url: "https://medium.com/@brs.sgdc/google-stored-xss-in-payments-350cd7ba0d1b" },
            { name: "XSS on dropbox", url: "https://www.kumar.ninja/2018/09/xss-surveydropboxcom.html" },
            { name: "Weaponizing XSS attacking internal domains", url: "https://medium.com/@rahulraveendran06/weaponizing-xss-attacking-internal-domains-d8ba1cbd106d" },
            { name: "How I XSSed UBER and bypassed CSP", url: "https://medium.com/@efkan162/how-i-xssed-uber-and-bypassed-csp-9ae52404f4c5" },
            { name: "RXSS and CSRF bypass to Account takeover", url: "https://nirmaldahal.com.np/r-xss-csrf-bypass-to-account-takeover/" },
            { name: "Another XSS in google collaboratory", url: "https://blog.bentkowski.info/2018/09/another-xss-in-google-colaboratory.html" },
            { name: "How I bypassed AKAMAI waf in overstock.com", url: "https://medium.com/@0ktavandi/how-i-bypassed-akamai-kona-waf-xss-in-overstock-com-f205b0e71a0d" },
            { name: "Reflected XSS at philips.com", url: "https://medium.com/@jonathanbouman/reflected-xss-at-philips-com-e48bf8f9cd3c" },
            { name: "XSS vulnerabilities in multiple iframe busters affecting top tier sites", url: "https://randywestergren.com/xss-vulnerabilities-in-multiple-iframe-busters-affecting-top-tier-sites/" },
            { name: "Reflected DOM XSS and clickjacking silvergoldbull", url: "https://medium.com/@maxon3/reflected-dom-xss-and-clickjacking-on-https-silvergoldbull-de-bt-html-daa36bdf7bf0" },
            { name: "Stored XSS vulnerability in h1 private", url: "https://www.hackerinside.me/2018/09/stored-xss-vulnerability-in-h1c-private.html" },
            { name: "Authbypass SQLi and XSS", url: "https://blog.securitybreached.org/2018/09/09/zol-zimbabwe-authbypass-sqli-xss/" },
            { name: "Stored XSS vulnerability in tumblr", url: "https://www.hackerinside.me/2018/09/stored-xss-vulnerability-in-tumblr.html" },
            { name: "XSS in google code jam", url: "https://websecblog.com/vulns/reflected-xss-in-google-code-jam/" },
            { name: "Mapbox XSS", url: "https://www.mohamedharon.com/2018/08/mapboxxss.html" },
            { name: "My first valid XSS", url: "https://medium.com/@nandwanajatin25/my-first-valid-xss-hackerone-f8ba0a7c647" },
            { name: "Stored XSS in webcomponents.org", url: "https://websecblog.com/vulns/stored-xss-in-webcomponents-org/" },
            { name: "3 minutes XSS", url: "https://medium.com/bugbountywriteup/3-minutes-xss-71e3340ad66b" },
            { name: "icloud.com DOM based XSS", url: "https://medium.com/@musabalhussein/icloud-com-dom-based-xss-bugbounty-6f88cb865b18" },
            { name: "XSS at hubspot and in email areas", url: "https://medium.com/@friendly_/xss-at-hubspot-and-xss-in-email-areas-674fa39d5248" },
            { name: "Self XSS leads to blind XSS and Reflected XSS", url: "https://medium.com/@friendly_/self-xss-leads-to-blind-xss-and-reflected-xss-950b1dc24647" },
            { name: "Refltected XSS primagames.com", url: "https://medium.com/@friendly_/reflected-xss-primagames-com-c7a641912626" },
            { name: "Stored XSS in gameskinny", url: "https://medium.com/@friendly_/stored-xss-in-gameskinny-aa26c6a6ae40" },
            { name: "Blind XSS in Chrome experments Google", url: "https://evanricafort.blogspot.com/2018/08/blind-xss-in-chrome-experiments-google.html" },
            { name: "Yahoo two XSSI vulnerabilities chained to steal user information (750$)", url: "https://medium.com/@0xHyde/yahoo-two-xssi-vulnerabilities-chained-to-steal-user-information-750-bounty-e9bc6a41a40a" },
            { name: "How I found XSS on amazon", url: "https://medium.com/@codingkarma/how-i-found-xss-on-amazon-f62b50f1c336" },
            { name: "A blind XSS in messengers twins", url: "http://omespino.com/write-up-telegram-bug-bounty-whatsapp-n-a-blind-xss-stored-ios-in-messengers-twins-who-really-care-about-your-security/" },
            { name: "XSS in microsoft Subdomain", url: "https://medium.com/@sudhanshur705/xss-in-microsoft-subdomain-81c4e46d6631" },
            { name: "Persistent XSS at ah.nl", url: "https://medium.com/@jonathanbouman/persistent-xss-at-ah-nl-198fe7b4c781" },
            { name: "The 12000 intersection betwenn clickjaking , XSS and DOS", url: "https://samcurry.net/the-12000-intersection-between-clickjacking-xss-and-denial-of-service/" },
            { name: "XSS in google collaboratory CSP bypass", url: "https://blog.bentkowski.info/2018/06/xss-in-google-colaboratory-csp-bypass.html" },
            { name: "How I found blind XSS in apple", url: "https://medium.com/@tahasmily2013m/how-i-found-blind-xss-in-apple-c890775e745a" },
            { name: "Reflected XSS on amazon.com", url: "https://medium.com/@jonathanbouman/reflected-client-xss-amazon-com-7b0d3cec787" },
            { name: "How I found XSS in 360totalsecurity", url: "https://medium.com/@tahasmily2013m/i-have-found-vulnerability-in-360totalsecurity-is-reflected-xss-in-3a6bd602bb5a" },
            { name: "The 2.5 BTC Stored XSS", url: "https://medium.com/@khaled.hassan/the-2-5-btc-stored-xss-f2f9393417f2" },
            { name: "XSS Vulnerability in Netflix", url: "https://medium.com/@black_b/vulnerability-netflix-cross-site-scripting-xss-d44010142e2c" },
            { name: "A story of a UXSS via DOM XSS clickjacking in steam inventory helper", url: "https://thehackerblog.com/steam-fire-and-paste-a-story-of-uxss-via-dom-xss-clickjacking-in-steam-inventory-helper/index.html" },
            { name: "How I found XSS via SSRF vulnerability", url: "https://medium.com/@adeshkolte/how-i-found-xss-via-ssrf-vulnerability-adesh-kolte-873b30a6b89f" },
            { name: "Searching for XSS found ldap injection", url: "https://www.nc-lp.com/blog/searching-for-xss-found-ldap-injection" },
            { name: "how I converted SSRF to XSS in a SSRF vulnerable JIRA", url: "https://medium.com/@D0rkerDevil/how-i-convert-ssrf-to-xss-in-a-ssrf-vulnerable-jira-e9f37ad5b158" },
            { name: "Reflected XSS in Yahoo subdomain", url: "https://www.mohamedharon.com/2018/05/reflected-xss-in-hk-yahoo.html" },
            { name: "Account takeover and blind XSS", url: "https://blog.witcoat.com/2018/05/30/account-takeover-and-blind-xss-go-pro-get-bugs/" },
            { name: "How I found 5 stored XSS on a private program", url: "https://cybristerboy.blogspot.com/2018/05/how-i-found-5-store-xss-on-private.html" },
            { name: "Persistent XSS to steal passwords(Paypal)", url: "https://wesecureapp.com/blog/persistent-xss-to-steal-passwords-paypal/" },
            { name: "Self XSS + CSRF to stored XSS", url: "https://medium.com/@renwa/self-xss-csrf-to-stored-xss-54f9f423a7f1" },
            { name: "Stored XSS in yahoo and subdomains", url: "https://medium.com/@ozil.hakim/stored-xss-in-yahoo-and-all-subdomains-bbcaa7c3b8d" },
            { name: "XSS in microsoft", url: "https://medium.com/@hacker_eth/xss-in-microsoft-7a70416aee75" },
            { name: "Blind XSS at customer support panel", url: "https://blog.hx01.me/2018/05/blind-xss-to-customer-support-panel.html" },
            { name: "Reflected XSS on stackoverflow", url: "https://medium.com/@newp_th/reflected-xss-on-stack-overflow-b8366a855472" },
            { name: "Stored XSS in Yahoo", url: "https://medium.com/@TheShahzada/stored-xss-in-yahoo-b0878ecc97e2" },
            { name: "XSS 403 forbidden Bypass", url: "https://medium.com/@nuraalamdipu/xss-403-forbidden-bypass-write-up-e070de52bc06" },
            { name: "Turning self XSS into non self XSS via authorization issue at paypal", url: "https://medium.com/@YoKoKho/turning-self-xss-into-non-self-stored-xss-via-authorization-issue-at-paypal-tech-support-and-brand-3046f52ac16b" },
            { name: "A story of stored XSS bypass", url: "https://medium.com/@prial261/story-of-a-stored-xss-bypass-26e6659f807b" },
            { name: "Mangobaaz hacked XSS to credentials", url: "https://blog.hx01.me/2018/04/mangobaaz-hacked-xss-to-credentials.html" },
            { name: "How I got stored XSS using file upload", url: "https://medium.com/@vis_hacker/how-i-got-stored-xss-using-file-upload-5c33e19df51e" },
            { name: "Bypassing CSP to abusing XSS filter in edge", url: "https://medium.com/bugbountywriteup/bypass-csp-by-abusing-xss-filter-in-edge-43e9106a9754" },
            { name: "XSS to session Hijacking", url: "https://medium.com/@yassergersy/xss-to-session-hijack-6039e11e6a81" },
            { name: "Reflected XSS on www.zomato.com", url: "https://www.mohamedharon.com/2018/04/reflected-xss-on-wwwzomatocom-by.html" },
            { name: "XSS in subdomain of yahoo", url: "https://www.mohamedharon.com/2018/03/xss-in-subdomain-httpsyefgrantsyahoocom.html" },
            { name: "XSS in yahoo.net subdomain", url: "https://www.mohamedharon.com/2018/03/xss-in-sportstwcampaignyahoonet.html" },
            { name: "Reflected XSS moongaloop swf version 62x", url: "https://www.mohamedharon.com/2018/03/reflected-xss-moogaloop-swf-version-62x.html" },
            { name: "Google adwords 3133.7 Stored XSS", url: "https://medium.com/@Alra3ees/google-adwords-3133-7-stored-xss-27bb083b8d27" },
            { name: "How I found a surprising XSS vulnerability on oracle netsuite", url: "https://medium.com/bug-bounty-hunting/how-i-found-a-surprising-xss-vulnerability-on-oracle-netsuite-2d48b7fcf0c8" },
            { name: "Stored XSS on snapchat", url: "https://medium.com/@mrityunjoy/stored-xss-on-snapchat-5d704131d8fd" },
            { name: "How I was able to bypass XSS protection on h1 private program", url: "https://blog.securitybreached.org/2018/02/02/how-i-was-able-to-bypass-xss-protection-on-hackerones-private-program/" },
            { name: "Reflected XSS possible", url: "https://www.mohamedharon.com/2018/01/reflected-xss-possible-server-side.html" },
            { name: "XSS via angularjs template injection hostinger", url: "https://blog.ibrahimdraidia.com/xss-via-angularjs-template-injection_hostinger/" },
            { name: "Microsoft follow feature XSS (CVE-2017-8514)", url: "https://medium.com/@adeshkolte/microsoft-sharepoints-follow-feature-xss-cve-2017-8514-adesh-kolte-d78d701cd064" },
            { name: "XSS protection bypass made my quickest bounty ever", url: "https://medium.com/@Skylinearafat/xss-protection-bypass-made-my-quickest-bounty-ever-f4fd970c9116" },
            { name: "Taking note XSS to RCE in the simplenote electron client", url: "https://ysx.me.uk/taking-note-xss-to-rce-in-the-simplenote-electron-client/" },
            { name: "VMWARE official vcdx reflected XSS", url: "https://medium.com/@honcbb/vmware-official-vcdx-reflected-xss-90e69a3c35e1" },
            { name: "How I pwned a company using IDOR and Blind XSS", url: "https://www.ansariosama.com/2017/11/how-i-pwned-company-using-idor-blind-xss.html" },
            { name: "From Recon to DOM based XSS", url: "https://medium.com/@abdelfattahibrahim/from-recon-to-dom-based-xss-f279602a14cf" },
            { name: "Local file read via XSS", url: "http://www.noob.ninja/2017/11/local-file-read-via-xss-in-dynamically.html" },
            { name: "Non persistent XSS at microsoft", url: "https://medium.com/@adeshkolte/non-persistent-xss-at-microsoft-adesh-kolte-ad36b1b4a325" },
            { name: "A Stored XSS in google (double kill)", url: "https://ysx.me.uk/app-maker-and-colaboratory-a-stored-google-xss-double-bill/" },
            { name: "Filter bypass to Reflected XSS on finance.yahoo.com (mobile version)", url: "https://medium.com/@saamux/filter-bypass-to-reflected-xss-on-https-finance-yahoo-com-mobile-version-22b854327b27" },
            { name: "900$ XSS in yahoo : recon wins", url: "https://medium.com/bugbountywriteup/900-xss-in-yahoo-recon-wins-65ee6d4bfcbd" },
            { name: "How I bypassed practos firewall and triggered an XSS vulnerability", url: "https://medium.com/bugbountywriteup/how-i-bypassed-practos-firewall-and-triggered-a-xss-b30164a8f1dc" },
            { name: "Stored XSS to full information disclosure", url: "https://guptashubham.com/stored-xss-to-full-information-disclosure/" },
            { name: "Story of parameter specific XSS", url: "http://www.noob.ninja/2017/09/story-of-parameter-specific-xss.html" },
            { name: "Chaining self XSS with UI redressing leading to session hijacking", url: "https://medium.com/bugbountywriteup/chaining-self-xss-with-ui-redressing-is-leading-to-session-hijacking-pwn-users-like-a-boss-efb46249cd14" },
            { name: "Stored XSS with arbitrary cookie installation", url: "https://medium.com/@arbazhussain/stored-xss-with-arbitrary-cookie-installation-567931433c7f" },
            { name: "Reflective XSS and Open redirect on indeed.com subdomain", url: "https://medium.com/@SyntaxError4/reflective-xss-and-open-redirect-on-indeed-com-subdomain-b4ab40e40c83" },
            { name: "How I found reflected XSS on Yahoo subdomain", url: "https://medium.com/@SyntaxError4/how-i-found-reflective-xss-in-yahoo-subdomain-3ad4831b386e" },
            { name: "Dont just alert(1) because XSS is more fun", url: "https://medium.com/@armaanpathan/dont-just-alert-1-because-xss-is-for-fun-f88cfb88d5b9" },
            { name: "UBER XSS by helpe of KNOXSS", url: "https://medium.com/@Alra3ees/my-write-up-about-uber-cross-site-scripting-by-help-of-knoxss-b1b56f8d090" },
            { name: "Reflected XSS in Yahoo", url: "https://medium.com/@TheShahzada/reflected-xss-in-yahoo-6e2b6b177448" },
            { name: "Reflected XSS on ww.yahoo.com", url: "https://medium.com/@saamux/reflected-xss-on-www-yahoo-com-9b1857cecb8c" },
            { name: "XSS because of wrong content type header", url: "https://bugbaba.blogspot.com/2017/08/xss-because-of-wrong-content-type-header.html" },
        ],
        "Cross Site Request Forgery (CSRF)": [
            { name: "How a simple CSRF attack turned into a P1", url: "https://ladysecspeare.wordpress.com/2020/04/05/how-a-simple-csrf-attack-turned-into-a-p1-level-bug/" },
            { name: "How I exploited the json csrf with method override technique", url: "https://medium.com/@secureITmania/how-i-exploit-the-json-csrf-with-method-override-technique-71c0a9a7f3b0" },
            { name: "How I found CSRF(my first bounty)", url: "https://medium.com/@rajeshranjan457/how-i-csrfd-my-first-bounty-a62b593d3f4d" },
            { name: "Exploiting websocket application wide XSS and CSRF", url: "https://medium.com/@osamaavvan/exploiting-websocket-application-wide-xss-csrf-66e9e2ac8dfa" },
            { name: "Site wide CSRF on popular program", url: "https://fellchase.blogspot.com/2020/02/site-wide-csrf-on-popular-program.html" },
            { name: "Using CSRF I got weird account takeover", url: "https://flex0geek.blogspot.com/2020/02/using-csrf-i-got-weird-account-takeover.html" },
            { name: "CSRF CSRF CSRF", url: "https://medium.com/@navne3t/csrf-csrf-csrf-f203e6452a9c" },
            { name: "Google Bugbounty CSRF in learndigital.withgoogle.com", url: "https://santuysec.com/2020/01/21/google-bug-bounty-csrf-in-learndigital-withgoogle-com/" },
            { name: "2FA bypass via CSRF attack", url: "https://medium.com/@vbharad/2-fa-bypass-via-csrf-attack-8f2f6a6e3871" },
            { name: "Stored iframe injection CSRF account takeover", url: "https://medium.com/@irounakdhadiwal999/stored-iframe-injection-csrf-account-takeover-42c93ad13f5d" },
            { name: "Instagram delete media CSRF", url: "https://blog.darabi.me/2019/12/instagram-delete-media-csrf.html" },
            { name: "An inconsistent CSRF", url: "https://smaranchand.com.np/2019/10/an-inconsistent-csrf/" },
            { name: "Bypass CSRF with clickjacking worth 1250", url: "https://medium.com/@saadahmedx/bypass-csrf-with-clickjacking-worth-1250-6c70cc263f40" },
            { name: "Sitewide CSRF graphql", url: "https://rafiem.github.io/bugbounty/tokopedia/site-wide-csrf-graphql/" },
            { name: "Account takeover using CSRF json based", url: "https://medium.com/@shub66452/account-takeover-using-csrf-json-based-a0e6efd1bffc" },
            { name: "CORS to CSRF attack", url: "https://medium.com/@osamaavvan/cors-to-csrf-attack-c33a595d441" },
            { name: "My first CSRF to account takeover", url: "https://medium.com/@nishantrustlingup/my-first-csrf-to-account-takeover-worth-750-1332641d4304" },
            { name: "4x chained CSRFs chained for account takeover", url: "https://medium.com/a-bugz-life/4x-csrfs-chained-for-company-account-takeover-f9fada416986" },
            { name: "CSRF can lead to stored XSS", url: "https://medium.com/bugbountywriteup/csrf-attack-can-lead-to-stored-xss-f40ba91f1e4f" },
            { name: "Yet other examples of abusing CSRF in logout", url: "https://soroush.secproject.com/blog/2019/04/yet-other-examples-of-abusing-csrf-in-logout/" },
            { name: "Wordpress CSRF to RCE", url: "https://blog.ripstech.com/2019/wordpress-csrf-to-rce/" },
            { name: "Bruteforce user IDs via CSRF to delete all the users with CSRF attack", url: "https://medium.com/@armaanpathan/brute-forcing-user-ids-via-csrf-to-delete-all-users-with-csrf-attack-216ccd4d832c" },
            { name: "CSRF Bypass using cross frame scripting", url: "https://medium.com/@mr_hacker/csrf-bypass-using-cross-frame-scripting-c349d6f33eb6" },
            { name: "Account takeover via CSRF", url: "https://medium.com/@adeshkolte/lintern-ute-account-takeover-via-csrf-adesh-kolte-307f7065ee74" },
            { name: "A very useful technique to bypass the CSRF protection", url: "https://medium.com/@Skylinearafat/a-very-useful-technique-to-bypass-the-csrf-protection-for-fun-and-profit-471af64da276" },
            { name: "CSRF account takeover exlpained automated manual bugbounty", url: "https://medium.com/bugbountywriteup/csrf-account-takeover-explained-automated-manual-bug-bounty-447e4b96485b" },
            { name: "CSRF to account takeover", url: "https://medium.com/bugbountywriteup/csrf-account-takeover-in-a-company-worth-1b-6e966813c262" },
            { name: "How I got 500USD from microsoft for CSRF vulnerability", url: "https://medium.com/@adeshkolte/how-i-got-500-from-microsoft-for-csrf-vulnerability-700accaf48b9" },
            { name: "Critical Bypass CSRF protection", url: "https://medium.com/bugbountywriteup/critical-bypass-csrf-protection-on-ibm-313ffb68dd0c" },
            { name: "RXSS CSRF bypass to full account takeover", url: "https://nirmaldahal.com.np/r-xss-csrf-bypass-to-account-takeover/" },
            { name: "Youtube CSRF", url: "https://www.sagarvd.me/2018/09/youtube-csrf.html" },
            { name: "Self XSS + CSRF = Stored XSS", url: "https://medium.com/@renwa/self-xss-csrf-to-stored-xss-54f9f423a7f1" },
            { name: "Ribose IDOR with simple CSRF bypass unrestrcited changes and deletion to other photo profile", url: "https://medium.com/@YoKoKho/ribose-idor-with-simple-csrf-bypass-unrestricted-changes-and-deletion-to-other-photo-profile-e4393305274e" },
            { name: "JSON CSRF attack on a social networking site", url: "https://medium.com/@pig.wig45/json-csrf-attack-on-a-social-networking-site-hackerone-platform-3d7aed3239b0" },
            { name: "Hacking facebook oculus integration CSRF", url: "https://www.josipfranjkovic.com/blog/hacking-facebook-oculus-integration-csrf" },
            { name: "Amazon leaking CSRF token using service worker", url: "https://ahussam.me/Amazon-leaking-csrf-token-using-service-worker/" },
            { name: "Facebook graphql CSRF", url: "https://philippeharewood.com/facebook-graphql-csrf/" },
            { name: "Chain the vulnerabilities and take your report impact on the moon csrf to html injection", url: "https://medium.com/@armaanpathan/chain-the-vulnerabilities-and-take-your-report-impact-on-the-moon-csrf-to-html-injection-which-608fa6e74236" },
            { name: "Partial CSRF to Full CSRF", url: "https://medium.com/@ciph3r7r0ll/that-escalated-quickly-from-partial-csrf-to-reflected-xss-to-complete-csrf-to-stored-xss-6ba8103069c2" },
            { name: "Stealing access token of one drive integration by chain csrf vulnerability", url: "https://medium.com/@arbazhussain/stealing-access-token-of-one-drive-integration-by-chaining-csrf-vulnerability-779f999624a7" },
            { name: "Metasploit web project kill all running taks CSRF CVE-2017-5244", url: "https://www.seekurity.com/blog/general/metasploit-web-project-kill-all-running-tasks-csrf-cve-2017-5244/" },
            { name: "Messenger site wide CSRF", url: "https://whitton.io/articles/messenger-site-wide-csrf/" },
            { name: "Hacking Facebook CSRF device login flow", url: "https://www.josipfranjkovic.com/blog/hacking-facebook-csrf-device-login-flow" },
            { name: "Two vulnerabilities makes an exploit XSS and CSRF in bing", url: "https://medium.com/bugbountywriteup/two-vulnerabilities-makes-an-exploit-xss-and-csrf-in-bing-cd4269da7b69" },
            { name: "How I bypassed Facebook in 2016", url: "https://medium.com/blog.darabi.me/2016/05/how-i-bypassed-facebook-csrf-in-2016.html" },
            { name: "Ubiquiti bugbounty unifi generic CSRF protection Bypass", url: "https://www.rcesecurity.com/2016/02/ubiquiti-bug-bounty-unifi-v3-2-10-generic-csrf-protection-bypass/" },
            { name: "Bypass Facebook CSRF", url: "https://blog.darabi.me/2015/04/bypass-facebook-csrf.html" },
            { name: "Facebook CSRF full account takeover", url: "https://www.josipfranjkovic.com/blog/facebook-csrf-full-account-takeover" },
        ],
        "Clickjacking (UI redressing attack)": [
            { name: "Google Bug bounty Clickjacking on Google payment", url: "https://santuysec.com/2020/03/06/google-bug-bounty-clickjacking-on-google-payment-1337/" },
            { name: "Google APIs Clickjacking worth 1337$", url: "https://medium.com/@godofdarkness.msf/google-apis-clickjacking-1337-7a3a9f3eb8df" },
            { name: "Clickjacking + XSS on Google org", url: "https://websecblog.com/vulns/clickjacking-xss-on-google-org/" },
            { name: "Bypass CSRF with clickjacking on Google org", url: "https://medium.com/@saadahmedx/bypass-csrf-with-clickjacking-worth-1250-6c70cc263f40" },
            { name: "1800 worth Clickjacking", url: "https://medium.com/@osamaavvan/1800-worth-clickjacking-1f92e79d0414" },
            { name: "Account takeover with clickjacking", url: "https://medium.com/@osamaavvan/account-taker-with-clickjacking-ace744842ec3" },
            { name: "Clickjacking on google CSE", url: "https://medium.com/@abaykandotcom/clickjacking-on-google-cse-6636bba72d20" },
            { name: "How I accidentally found clickjacking in Facebook", url: "https://malfind.com/index.php/2018/12/21/how-i-accidentaly-found-clickjacking-in-facebook/" },
            { name: "Clickjacking on google myaccount worth 7500", url: "https://apapedulimu.click/clickjacking-on-google-myaccount-worth-7500/" },
            { name: "Clickjacking in google docs and void typing feature", url: "https://medium.com/@raushanraj_65039/clickjacking-in-google-docs-and-voice-typing-feature-c481d00b020a" },
            { name: "Reflected DOM XSS and Clickjacking", url: "https://medium.com/@maxon3/reflected-dom-xss-and-clickjacking-on-https-silvergoldbull-de-bt-html-daa36bdf7bf0" },
            { name: "binary.com clickjacking vulnerability exploiting HTML5 security features", url: "https://medium.com/@ameerassadi/binary-com-clickjacking-vulnerability-exploiting-html5-security-features-368c1ff2219d" },
            { name: "12000 intersection betwen clickjacking XSS and denial of service", url: "https://samcurry.net/the-12000-intersection-between-clickjacking-xss-and-denial-of-service/" },
            { name: "Steam fire and paste : a story of uxss via DOM XSS and Clickjacking in steam inventory helper", url: "https://thehackerblog.com/steam-fire-and-paste-a-story-of-uxss-via-dom-xss-clickjacking-in-steam-inventory-helper/index.html" },
            { name: "Yet another Google Clickjacking", url: "https://medium.com/@raushanraj_65039/google-clickjacking-6a04132b918a" },
            { name: "Redressing instagram leaking application tokens  via instagram clickjacking vulnerability", url: "https://www.seekurity.com/blog/general/redressing-instagram-leaking-application-tokens-via-instagram-clickjacking-vulnerability/" },
            { name: "Self XSS to Good XSS and Clickjacking", url: "https://medium.com/@arbazhussain/self-xss-to-good-xss-clickjacking-6db43b44777e" },
            { name: "Microsoft Yammer clickjacking exploiting HTML5 security features", url: "https://www.seekurity.com/blog/general/microsoft-yammer-clickjacking-exploiting-html5-security-features/" },
            { name: "Firefox find my device clickjacking", url: "https://www.seekurity.com/blog/general/firefox-find-my-device-service-clickjacking/" },
            { name: "Whatsapp Clickjacking vulnerability", url: "https://www.seekurity.com/blog/general/whatsapp-clickjacking-vulnerability-yet-another-web-client-failure/" },
            { name: "Telegram WEB client clickjacking vulnerability", url: "https://www.seekurity.com/blog/general/telegram-web-client-clickjacking-vulnerability/" },
            { name: "Facebook Clickjacking : how we put a new dress on facebook UI", url: "https://www.seekurity.com/blog/write-ups/facebook-clickjacking-how-we-put-a-new-dress-on-facebook-ui/" },
        ],
        "Local File Inclusion (LFI)": [
            { name: "RFI LFI Writeup", url: "http://hassankhanyusufzai.com/RFI_LFI_writeup/" },
            { name: "My first LFI", url: "https://cyberzombie.in/my-first-lfi/" },
            { name: "Bug bounty LFI at Google.com", url: "https://medium.com/@vulnerabilitylabs/bug-bounty-lfi-at-google-com-3c2e17d8c912" },
            { name: "Google LFI on production servers in redacted.google.com", url: "https://omespino.com/write-up-google-bug-bounty-lfi-on-production-servers-in-redacted-google-com-13337-usd/" },
            { name: "LFI to 10 server pwn", url: "https://nirmaldahal.com.np/lfi-to-10-server-pwn/" },
            { name: "LFI in apigee portals", url: "https://offensi.com/2019/01/31/lfi-in-apigee-portals/" },
            { name: "Chain the bugs to pwn an organisation LFI unrestricted file upload to RCE", url: "https://medium.com/@armaanpathan/chain-the-bugs-to-pwn-an-organisation-lfi-unrestricted-file-upload-remote-code-execution-93dfa78ecce" },
            { name: "How we got LFI in apache drill recom like a boss", url: "https://medium.com/bugbountywriteup/how-we-got-lfi-in-apache-drill-recon-like-a-boss-6f739a79d87d" },
            { name: "Bugbounty journey from LFI to RCE", url: "https://medium.com/@logicbomb_1/bugbounty-journey-from-lfi-to-rce-how-a69afe5a0899" },
            { name: "LFI to RCE on deutche telekom bugbounty", url: "https://medium.com/@maxon3/lfi-to-command-execution-deutche-telekom-bug-bounty-6fe0de7df7a6" },
            { name: "From LFI to RCE via PHP sessions", url: "https://www.rcesecurity.com/2017/08/from-lfi-to-rce-via-php-sessions/" },
            { name: "magix bugbounty magix.com XSS RCE SQLI and LFI", url: "https://www.rcesecurity.com/2014/04/magix-bug-bounty-magix-com-rce-sqli-and-xara-com-lfi-xss/" },
            { name: "LFI in nokia maps", url: "http://blog.shashank.co/2013/10/lfi-in-nokia-maps.html" },
        ],
        "Subdomain Takeover": [
            { name: "How I bought my way to subdomain takeover on tokopedia", url: "https://medium.com/bugbountywriteup/how-i-bought-my-way-to-subdomain-takeover-on-tokopedia-8c6697c85b4d" },
            { name: "Subdomain Takeover via pantheon", url: "https://smaranchand.com.np/2019/12/subdomain-takeover-via-pantheon/" },
            { name: "Subdomain takeover : a unique way", url: "https://www.mohamedharon.com/2019/11/subdomain-takeover-via.html" },
            { name: "Escalating subdomain takeover to steal sensitive stuff", url: "https://blog.takemyhand.xyz/2019/05/escalating-subdomain-takeovers-to-steal.html" },
            { name: "Subdomain takeover awarded 200", url: "https://medium.com/@friendly_/subdomain-takeover-awarded-200-8296f4abe1b0" },
            { name: "Subdomain takeover via wufoo service", url: "https://www.mohamedharon.com/2019/02/subdomain-takeover-via-wufoo-service-in.html" },
            { name: "Subdomain takeover via Hubspot", url: "https://www.mohamedharon.com/2019/02/subdomain-takeover-via-hubspot.html" },
            { name: "Souq.com subdomain takeover", url: "https://www.mohamedharon.com/2019/02/souqcom-subdomain-takeover-via.html" },
            { name: "Subdomain takeover : new level", url: "https://medium.com/bugbountywriteup/subdomain-takeover-new-level-43f88b55e0b2" },
            { name: "Subdomain takeover due to misconfigured project settings for custom domain", url: "https://medium.com/@prial261/subdomain-takeover-dew-to-missconfigured-project-settings-for-custom-domain-46e90e702969" },
            { name: "Subdomain takeover via shopify vendor", url: "https://www.mohamedharon.com/2018/10/subdomain-takeover-via-shopify-vendor.html" },
            { name: "Subdomain takeover via unsecured s3 bucket", url: "https://blog.securitybreached.org/2018/09/24/subdomain-takeover-via-unsecured-s3-bucket/" },
            { name: "Subdomain takeover worth 200", url: "https://medium.com/@alirazzaq/subdomain-takeover-worth-200-ed73f0a58ffe" },
            { name: "Subdomain takeover via campaignmonitor", url: "https://www.mohamedharon.com/2018/09/subdomain-takeover-via-campaignmonitor.html" },
            { name: "How to do 55000 subdomain takeover in a blink of an eye", url: "https://medium.com/@thebuckhacker/how-to-do-55-000-subdomain-takeover-in-a-blink-of-an-eye-a94954c3fc75" },
            { name: "Subdomain takeover Starbucks (Part 2)", url: "https://0xpatrik.com/subdomain-takeover-starbucks-ii/" },
            { name: "Subdomain takeover Starbucks", url: "https://0xpatrik.com/subdomain-takeover-starbucks/" },
            { name: "Uber wildcard subdomain takeover", url: "https://blog.securitybreached.org/2017/11/20/uber-wildcard-subdomain-takeover" },
            { name: "Bugcrowd domain subdomain takeover vulnerability", url: "https://blog.securitybreached.org/2017/10/10/bugcrowds-domain-subdomain-takeover-vulnerability" },
            { name: "Subdomain takeover vulnerability (Lamborghini Hacked)", url: "https://blog.securitybreached.org/2017/10/10/subdomain-takeover-lamborghini-hacked/" },
            { name: "Authentication bypass on uber's SSO via subdomain takeover", url: "https://www.arneswinnen.net/2017/06/authentication-bypass-on-ubers-sso-via-subdomain-takeover/" },
            { name: "Authentication bypass on SSO ubnt.com via Subdomain takeover of ping.ubnt.com", url: "https://www.arneswinnen.net/2016/11/authentication-bypass-on-sso-ubnt-com-via-subdomain-takeover-of-ping-ubnt-com/" },
        ],
        "Denial of Service (DOS)": [
            { name: "Long String DOS", url: "https://medium.com/@shahjerry33/long-string-dos-6ba8ceab3aa0" },
            { name: "AIRDOS", url: "https://kishanbagaria.com/airdos/" },
            { name: "Denial of Service DOS vulnerability in script loader (CVE-2018-6389)", url: "https://www.pankajinfosec.com/post/700-denial-of-service-dos-vulnerability-in-script-loader-php-cve-2018-6389" },
            { name: "Github actions DOS", url: "https://blog.teddykatz.com/2019/11/12/github-actions-dos.html" },
            { name: "Application level denial of service", url: "https://evanricafort.blogspot.com/2019/08/application-level-denial-of-service-dos.html" },
            { name: "Banner grabbing to DOS and memory corruption", url: "https://medium.com/bugbountywriteup/banner-grabbing-to-dos-and-memory-corruption-2442b1c25bbb" },
            { name: "DOS across Facebook endpoints", url: "https://medium.com/@maxpasqua/dos-across-facebook-endpoints-1d7d0bc27c7f" },
            { name: "DOS on WAF protected sites", url: "https://www.hackerinside.me/2019/02/dos-on-waf-protected-sites-by-abusing.html" },
            { name: "DOS on Facebook android app using zero width no break characters", url: "https://medium.com/@kankrale.rahul/dos-on-facebook-android-app-using-65530-characters-of-zero-width-no-break-space-db41ca8ded89" },
            { name: "Whatsapp DOS vulnerability on android and iOS", url: "https://medium.com/@pratheesh.p.narayanan/whatsapp-dos-vulnerability-on-android-ios-web-7628077d21d4" },
            { name: "Whatsapp DOS vulnerability in iOS android", url: "https://medium.com/bugbountywriteup/whatsapp-dos-vulnerability-in-ios-android-d896f76d3253" },
        ],
        "Authentication Bypass": [
            { name: "Touch ID authentication Bypass on evernote and dropbox iOS apps", url: "https://medium.com/@pig.wig45/touch-id-authentication-bypass-on-evernote-and-dropbox-ios-apps-7985219767b2" },
            { name: "Oauth authentication bypass on airbnb acquistion using wierd 1 char open redirect", url: "https://xpoc.pro/oauth-authentication-bypass-on-airbnb-acquisition-using-weird-1-char-open-redirect/" },
            { name: "Two factor authentication bypass", url: "https://gauravnarwani.com/two-factor-authentication-bypass/" },
            { name: "Instagram multi factor authentication bypass", url: "https://medium.com/@vishnu0002/instagram-multi-factor-authentication-bypass-924d963325a1" },
            { name: "Authentication bypass in nodejs application", url: "https://medium.com/@_bl4de/authentication-bypass-in-nodejs-application-a-bug-bounty-story-d34960256402" },
            { name: "Symantec authentication Bypass", url: "https://artkond.com/2018/10/10/symantec-authentication-bypass/" },
            { name: "Authentication bypass in CISCO meraki", url: "https://blog.takemyhand.xyz/2018/06/authentication-bypass-in-cisco-meraki.html" },
            { name: "Slack SAML authentocation bypass", url: "https://blog.intothesymmetry.com/2017/10/slack-saml-authentication-bypass.html" },
            { name: "Authentication bypass on UBER's SSO", url: "https://www.arneswinnen.net/2017/06/authentication-bypass-on-ubers-sso-via-subdomain-takeover/" },
            { name: "Authentication Bypass on airbnb via oauth tokens theft", url: "https://www.arneswinnen.net/2017/06/authentication-bypass-on-airbnb-via-oauth-tokens-theft/" },
            { name: "Inspect element leads to stripe account lockout authentication Bypass", url: "https://www.jonbottarini.com/2017/04/03/inspect-element-leads-to-stripe-account-lockout-authentication-bypass/" },
            { name: "Authentication bypass on SSO ubnt.com", url: "https://www.arneswinnen.net/2016/11/authentication-bypass-on-sso-ubnt-com-via-subdomain-takeover-of-ping-ubnt-com/" },
        ],
        "SQL Injection(SQLI)": [
            { name: "Tricky oracle SQLI situation", url: "https://blog.yappare.com/2020/04/tricky-oracle-sql-injection-situation.html" },
            { name: "Exploiting “Google BigQuery” SQLI", url: "https://hackemall.live/index.php/2020/03/31/akamai-web-application-firewall-bypass-journey-exploiting-google-bigquery-sql-injection-vulnerability/" },
            { name: "SQLI via stopping the redirection to a login page", url: "https://medium.com/@St00rm/sql-injection-via-stopping-the-redirection-to-a-login-page-52b0792d5592" },
            { name: "Finding SQLI with white box analysis a recent bug example", url: "https://medium.com/@frycos/finding-sql-injections-fast-with-white-box-analysis-a-recent-bug-example-ca449bce6c76" },
            { name: "Bypassing a crappy WAF to exploit a blind SQLI", url: "https://robinverton.de/blog/2019/08/25/bug-bounty-bypassing-a-crappy-waf-to-exploit-a-blind-sql-injection/" },
            { name: "SQL Injection in private-site.com/login.php", url: "https://www.mohamedharon.com/2019/07/sql-injection-in-private-sitecomloginphp.html" },
            { name: "Exploiting tricky blind SQLI", url: "https://www.noob.ninja/2019/07/exploiting-tricky-blind-sql-injection.html" },
            { name: "SQLI in forget password fucntion", url: "https://medium.com/@kgaber99/sql-injection-in-forget-password-function-3c945512e3cb" },
            { name: "SQLI Bug Bounty", url: "https://medium.com/@ariffadhlullah2310/sql-injection-bug-bounty-110e92e71ec3" },
            { name: "File Upload blind SQLI", url: "https://jspin.re/fileupload-blind-sqli/" },
            { name: "SQL Injection", url: "https://medium.com/@saadahmedx/sql-injection-c87a390afdd3" },
            { name: "SQLI through User Agent", url: "https://medium.com/@frostnull1337/sql-injection-through-user-agent-44a1150f6888" },
            { name: "SQLI in insert update query without comma", url: "https://blog.redforce.io/sql-injection-in-insert-update-query-without-comma/" },
            { name: "SQLI for 50 bounty", url: "https://medium.com/@orthonviper/sql-injection-for-50-bounty-but-still-worth-reading-468442c1cc1a" },
            { name: "Abusing MYSQL CLients", url: "https://www.vesiluoma.com/abusing-mysql-clients/" },
            { name: "SQLI Authentication Bypass AutoTrader Webmail", url: "https://blog.securitybreached.org/2018/09/10/sqli-login-bypass-autotraders/" },
            { name: "ZOL Zimbabwe Authentication Bypass to XSS & SQLi", url: "https://blog.securitybreached.org/2018/09/09/zol-zimbabwe-authbypass-sqli-xss/" },
            { name: "SQLI bootcamp.nutanix.com", url: "https://blog.securitybreached.org/2018/09/08/sqli-bootcampnutanix-com-bug-bounty-poc/" },
            { name: "SQLI in University of Cambridge", url: "https://medium.com/@adeshkolte/sql-injection-vulnerability-in-university-of-cambridge-b4c8d0381e1" },
            { name: "Making a blind SQLI a little less Blind SQLI", url: "https://medium.com/@tomnomnom/making-a-blind-sql-injection-a-little-less-blind-428dcb614ba8" },
            { name: "SQLI amd silly WAF", url: "https://mahmoudsec.blogspot.com/2018/07/sql-injection-and-silly-waf.html" },
            { name: "Attacking Postgresql Database", url: "https://medium.com/@vishnu0002/attacking-postgresql-database-834a9a3471bc" },
            { name: "Bypassing Host Header to SQL injection to dumping Database — An unusual case of SQL injection", url: "https://medium.com/@logicbomb_1/bugbounty-database-hacked-of-indias-popular-sports-company-bypassing-host-header-to-sql-7b9af997c610" },
            { name: "A 5 minute SQLI", url: "https://medium.com/bugbountywriteup/a-five-minute-sql-i-16ab75b20fe4" },
            { name: "Union based SQLI writeup", url: "https://medium.com/@nuraalamdipu/union-based-sql-injection-write-up-a-private-company-site-273f89a49ed9" },
            { name: "SQLI with load file and into outfile", url: "https://medium.com/bugbountywriteup/sql-injection-with-load-file-and-into-outfile-c62f7d92c4e2" },
            { name: "SQLI is Everywhere", url: "https://medium.com/@agrawalsmart7/sql-is-every-where-5cba6ae9480a" },
            { name: "SQLI in Update Query Bug", url: "https://zombiehelp54.blogspot.com/2017/02/sql-injection-in-update-query-bug.html" },
            { name: "Blind SQLI Hootsuite", url: "https://ahussam.me/Blind-sqli-Hootsuite/" },
            { name: "Yahoo – Root Access SQLI – tw.yahoo.com", url: "https://buer.haus/2015/01/15/yahoo-root-access-sql-injection-tw-yahoo-com/" },
            { name: "Step by Step Exploiting SQLI in Oculus", url: "https://josipfranjkovic.blogspot.com/2014/09/step-by-step-exploiting-sql-injection.html" },
            { name: "Magix Bug Bounty: magix.com (RCE, SQLi) and xara.com (LFI, XSS)", url: "https://www.rcesecurity.com/2014/04/magix-bug-bounty-magix-com-rce-sqli-and-xara-com-lfi-xss/" },
            { name: "Tesla Motors blind SQLI", url: "https://bitquark.co.uk/blog/2014/02/23/tesla_motors_blind_sql_injection" },
            { name: "SQLI in Nokia Sites", url: "https://josipfranjkovic.blogspot.com/2013/07/sql-injections-in-nokia-sites.html" },
        ],
        "Insecure Direct Object Reference (IDOR)": [
            { name: "Disclose Private Dashboard Chart's name and data in Facebook Analytics", url: "https://bugreader.com/jubabaghdad@disclose-private-dashboard-charts-name-and-data-in-facebook-analytics-184" },
            { name: "Disclosing privately shared gaming clips of any user", url: "https://bugreader.com/rony@disclosing-privately-shared-gaming-clips-of-any-user-128" },
            { name: "Adding anyone including non-friend and blocked people as co-host in personal event!", url: "https://bugreader.com/binit@adding-anyone-including-non-friend-and-blocked-people-as-co-host-in-personal-event-181" },
            { name: "Page analyst could view job application details", url: "https://bugreader.com/rony@page-analyst-could-view-job-application-details-213" },
            { name: "Deleting Anyone's Video Poll", url: "https://bugreader.com/testgrounds@deleting-anyones-video-poll-175" },
        ],
        "2FA related issues": [
            { name: "2FA Bypass via logical rate limiting Bypass", url: "https://medium.com/@jeppe.b.weikop/2fa-bypass-via-logical-rate-limiting-bypass-25ae2a4e1835" },
            { name: "Bypass 2FA in a website", url: "https://medium.com/sourav-sahana/bypass-2fa-in-a-website-d616eaead1e3" },
            { name: "Weird and simple 2FA bypass", url: "https://medium.com/@ultranoob/weird-and-simple-2fa-bypass-without-any-test-b869e09ac261" },
            { name: "How I cracked 2FA with simple factor bruteforce", url: "https://medium.com/clouddevops/bugbounty-how-i-cracked-2fa-two-factor-authentication-with-simple-factor-brute-force-a1c0f3a2f1b4" },
            { name: "Instagram account is reactivated without entering 2FA", url: "https://bugbountypoc.com/instagram-account-is-reactivated-without-entering-2fa/" },
            { name: "How to bypass 2FA with a HTTP header", url: "https://medium.com/@YumiSec/how-to-bypass-a-2fa-with-a-http-header-ce82f7927893" },
            { name: "How I hacked 40k user accounts of microsoft using 2FA bypass outlook", url: "https://medium.com/@goyalvartul/how-i-hacked-40-000-user-accounts-of-microsoft-using-2fa-bypass-outlook-live-com-13258785ec2f" },
            { name: "How I abused 2FA to maintain persistence after password recovery change google microsoft instragram", url: "https://medium.com/@lukeberner/how-i-abused-2fa-to-maintain-persistence-after-a-password-change-google-microsoft-instagram-7e3f455b71a1" },
            { name: "Bypass hackerone 2FA", url: "https://medium.com/japzdivino/bypass-hackerone-2fa-requirement-and-reporter-blacklist-46d7959f1ee5" },
            { name: "Facebook Bug bounty  : How I was able to enumerate instagram accounts who had enabled 2FA", url: "https://medium.com/@zk34911/facebook-bug-bounty-how-i-was-able-to-enumerate-instagram-accounts-who-had-enabled-2fa-two-step-fddba9e9741c" },
        ],
        "CORS related issues": [
            { name: "CORS bug on google's 404 page (rewarded)", url: "https://medium.com/@jayateerthag/cors-bug-on-googles-404-page-rewarded-2163d58d3c8b" },
            { name: "CORS misconfiguration leading to private information disclosure", url: "https://medium.com/@sasaxxx777/cors-misconfiguration-leading-to-private-information-disclosure-3034cfcb4b93" },
            { name: "CORS misconfiguration account takeover out of scope to grab items in scope", url: "https://medium.com/@mashoud1122/cors-misconfiguration-account-takeover-out-of-scope-to-grab-items-in-scope-66d9d18c7a46" },
            { name: "Chrome CORS", url: "https://blog.bi.tk/chrome-cors/" },
            { name: "Bypassing CORS", url: "https://medium.com/@saadahmedx/bypassing-cors-13e46987a45b" },
            { name: "CORS to CSRF attack", url: "https://medium.com/@osamaavvan/cors-to-csrf-attack-c33a595d441" },
            { name: "An unexploited CORS misconfiguration reflecting further issues", url: "https://smaranchand.com.np/2019/05/an-unexploited-cors-misconfiguration-reflecting-further-issues/" },
            { name: "Think outside the scope advanced cors exploitation techniques", url: "https://medium.com/@sandh0t/think-outside-the-scope-advanced-cors-exploitation-techniques-dad019c68397" },
            { name: "A simple CORS misconfiguration leaked private post of twitter facebook instagram", url: "https://medium.com/@nahoragg/a-simple-cors-misconfig-leaked-private-post-of-twitter-facebook-instagram-5f1a634feb9d" },
            { name: "Explpoiting CORS misconfiguration", url: "https://bugbaba.blogspot.com/2018/02/exploiting-cors-miss-configuration.html" },
            { name: "Full account takeover through CORS with connection sockets", url: "https://medium.com/@saamux/full-account-takeover-through-cors-with-connection-sockets-179133384815" },
            { name: "Exploiting insecure CORS API api.artsy.net", url: "https://blog.securitybreached.org/2017/10/10/exploiting-insecure-cross-origin-resource-sharing-cors-api-artsy-net" },
            { name: "Pre domain wildcard CORS exploitation", url: "https://medium.com/bugbountywriteup/pre-domain-wildcard-cors-exploitation-2d6ac1d4bd30" },
            { name: "Exploiting misconfigured CORS on popular BTC site", url: "https://medium.com/@arbazhussain/exploiting-misconfigured-cors-on-popular-btc-site-2aedfff906f6" },
            { name: "Abusing CORS for an XSS on flickr", url: "https://whitton.io/articles/abusing-cors-for-an-xss-on-flickr/" },
        ],
        "Server Side Request Forgery (SSRF)": [
            { name: "Exploiting an SSRF trials and tribulations", url: "https://medium.com/a-bugz-life/exploiting-an-ssrf-trials-and-tribulations-14c5d8dbd69a" },
            { name: "SSRF on PDF generator", url: "https://medium.com/@michan001/ssrf-on-pdf-generator-36b81e16d67b" },
            { name: "Google VRP SSRF in Google cloud platform stackdriver", url: "https://ngailong.wordpress.com/2019/12/19/google-vrp-ssrf-in-google-cloud-platform-stackdriver/" },
            { name: "Vimeo upload function SSRF", url: "https://medium.com/@dPhoeniixx/vimeo-upload-function-ssrf-7466d8630437" },
            { name: "SSRF via ffmeg processing", url: "https://medium.com/@pflash0x0punk/ssrf-via-ffmpeg-hls-processing-a04e0288a8c5" },
            { name: "My first SSRF using DNS rebinding", url: "https://geleta.eu/2019/my-first-ssrf-using-dns-rebinfing/" },
            { name: "Bugbounty simple SSRF", url: "https://jin0ne.blogspot.com/2019/11/bugbounty-simple-ssrf.html" },
            { name: "SSRF reading local files from downnotifier server", url: "https://www.openbugbounty.org/blog/leonmugen/ssrf-reading-local-files-from-downnotifier-server/" },
            { name: "SSRF vulnerability", url: "https://evanricafort.blogspot.com/2019/08/ssrf-vulnerability-in.html" },
            { name: "Gain adfly SMTP access with SSRF via gopher protocol", url: "https://medium.com/@androgaming1912/gain-adfly-smtp-access-with-ssrf-via-gopher-protocol-26a26d0ec2cb" },
            { name: "Blind SSRF in stripe.com due to senntry misconfiguration", url: "https://medium.com/@0ktavandi/blind-ssrf-in-stripe-com-due-to-sentry-misconfiguration-60ebb6a40b5" },
            { name: "SSRF port issue hidden approch", url: "https://medium.com/@w_hat_boy/server-side-request-forgery-ssrf-port-issue-hidden-approch-f4e67bd8cc86" },
            { name: "The jorney of web cache firewall bypass to SSRF to AWS credentials compromise", url: "https://medium.com/@logicbomb_1/the-journey-of-web-cache-firewall-bypass-to-ssrf-to-aws-credentials-compromise-b250fb40af82" },
            { name: "SSRF to local file read and abusing aws metadata", url: "https://medium.com/@pratiky054/ssrf-to-read-local-files-and-abusing-the-aws-metadata-8621a4bf382" },
            { name: "pdfreactor SSRF to root level local files read which lead to RCE", url: "https://medium.com/@armaanpathan/pdfreacter-ssrf-to-root-level-local-file-read-which-led-to-rce-eb460ffb3129" },
            { name: "SSRF trick : SSRF XSPA in micosoft's bing webwaster", url: "https://medium.com/@elberandre/ssrf-trick-ssrf-xspa-in-microsofts-bing-webmaster-central-8015b5d487fb" },
            { name: "Downnotifeer SSRF", url: "https://m-q-t.github.io/notes/downnotifer-ssrf/" },
            { name: "Escalating SSRF to RCE", url: "https://medium.com/cesppa/escalating-ssrf-to-rce-f28c482eb8b9" },
            { name: "Vimeo SSRF with code execution potential", url: "https://medium.com/@rootxharsh_90844/vimeo-ssrf-with-code-execution-potential-68c774ba7c1e" },
            { name: "SSRF in slack", url: "https://medium.com/@elberandre/1-000-ssrf-in-slack-7737935d3884" },
            { name: "Exploiting SSRF like a boss", url: "https://medium.com/@zain.sabahat/exploiting-ssrf-like-a-boss-c090dc63d326" },
            { name: "AWS takeover SSRF javascript", url: "http://10degres.net/aws-takeover-ssrf-javascript/" },
            { name: "Into the borg of SSRF inside google production network", url: "https://opnsec.com/2018/07/into-the-borg-ssrf-inside-google-production-network/" },
            { name: "SSRF to local file disclosure", url: "https://medium.com/@tungpun/from-ssrf-to-local-file-disclosure-58962cdc589f" },
            { name: "How I found an SSRF in yahoo guesthouse (recon wins)", url: "https://medium.com/@th3g3nt3l/how-i-found-an-ssrf-in-yahoo-guesthouse-recon-wins-8722672e41d4" },
            { name: "Reading internal files using SSRF vulnerability", url: "https://medium.com/@neerajedwards/reading-internal-files-using-ssrf-vulnerability-703c5706eefb" },
            { name: "Airbnb chaining third party open redirect into SSRF via liveperson chat", url: "https://buer.haus/2017/03/09/airbnb-chaining-third-party-open-redirect-into-server-side-request-forgery-ssrf-via-liveperson-chat/" },
        ],
        "Race Condition": [
            { name: "Exploiting a Race condition vulnerabililty", url: "https://medium.com/@vincenz/exploiting-a-race-condition-vulnerability-3f2cb387a72" },
            { name: "Race condition that could result to RCE a story with an app", url: "https://medium.com/bugbountywriteup/race-condition-that-could-result-to-rce-a-story-with-an-app-that-temporary-stored-an-uploaded-9a4065368ba3" },
            { name: "Creating thinking is our everything : Race condition and business logic", url: "https://medium.com/@04sabsas/bugbounty-writeup-creative-thinking-is-our-everything-race-condition-business-logic-error-2f3e82b9aa17" },
            { name: "Chaining improper authorization to Race condition to harvest credit card details", url: "https://medium.com/@ciph3r7r0ll/chaining-improper-authorization-to-race-condition-to-harvest-credit-card-details-a-bug-bounty-effe6e0f5076" },
            { name: "A Race condition bug in Facebook chat groups", url: "https://www.seekurity.com/blog/general/the-fuzz-the-bug-the-action-a-race-condition-bug-in-facebook-chat-groups-leads-to-spy-on-conversations/" },
            { name: "Race condition bypassing team limit", url: "https://medium.com/@arbazhussain/race-condition-bypassing-team-limit-b162e777ca3b" },
            { name: "Race condition on web", url: "https://www.josipfranjkovic.com/blog/race-conditions-on-web" },
            { name: "Race condition bugs on Facebook", url: "https://josipfranjkovic.blogspot.com/2015/04/race-conditions-on-facebook.html" },
            { name: "Hacking Banks With Race Conditions", url: "https://medium.com/swlh/hacking-banks-with-race-conditions-2f8d55b45a4b" },
            { name: "Race Condition Bug In Web App: A Use Case", url: "https://medium.com/@ciph3r7r0ll/race-condition-bug-in-web-app-a-use-case-21fd4df71f0e" },
            { name: "RACE Condition vulnerability found in bug-bounty program", url: "https://medium.com/@pravinponnusamy/race-condition-vulnerability-found-in-bug-bounty-program-573260454c43" },
            { name: "How to check Race Conditions in Web Applications", url: "https://medium.com/@valeriyshevchenko/how-to-check-race-conditions-in-web-applications-338f73937992" },
        ],
        "Remote Code Execution (RCE)": [
            { name: "Microsoft RCE bugbounty", url: "https://blog.securitybreached.org/2020/03/31/microsoft-rce-bugbounty/" },
            { name: "OTP bruteforce account takeover", url: "https://medium.com/@ranjitsinghnit/otp-bruteforce-account-takeover-faaac3d712a8" },
            { name: "Attacking helpdesk RCE chain on deskpro with bitdefender", url: "https://blog.redforce.io/attacking-helpdesks-part-1-rce-chain-on-deskpro-with-bitdefender-as-case-study/" },
            { name: "Remote image upload leads to RCE inject malicious code", url: "https://medium.com/@asdqwedev/remote-image-upload-leads-to-rce-inject-malicious-code-to-php-gd-image-90e1e8b2aada" },
            { name: "Finding a p1 in one minute with shodan.io RCE", url: "https://medium.com/@sw33tlie/finding-a-p1-in-one-minute-with-shodan-io-rce-735e08123f52" },
            { name: "From recon to optimizing RCE results simple story with one of the biggest ICT company", url: "https://medium.com/bugbountywriteup/from-recon-to-optimizing-rce-results-simple-story-with-one-of-the-biggest-ict-company-in-the-ea710bca487a" },
            { name: "Uploading backdoor for fun and profit RCE DB creds P1", url: "https://medium.com/@mohdaltaf163/uploading-backdoor-for-fun-and-profit-rce-db-cred-p1-2cdaa00e2125" },
            { name: "Responsible Disclosure breaking out of a sandboxed editor to perform RCE", url: "https://jatindhankhar.in/blog/responsible-disclosure-breaking-out-of-a-sandboxed-editor-to-perform-rce/" },
            { name: "Wordpress design flaw leads to woocommerce RCE", url: "https://blog.ripstech.com/2018/wordpress-design-flaw-leads-to-woocommerce-rce/" },
            { name: "Path traversal while uploading results in RCE", url: "https://blog.harshjaiswal.com/path-traversal-while-uploading-results-in-rce" },
            { name: "RCE jenkins instance", url: "https://blog.securitybreached.org/2018/09/07/rce-jenkins-instance-dosomething-org-bug-bounty-poc/" },
            { name: "Traversing the path to RCE", url: "https://hawkinsecurity.com/2018/08/27/traversing-the-path-to-rce/" },
            { name: "How I chained 4 bugs features into RCE on amazon", url: "http://blog.orange.tw/2018/08/how-i-chained-4-bugs-features-into-rce-on-amazon.html" },
            { name: "RCE due to showexceptions", url: "https://sites.google.com/view/harshjaiswalblog/rce-due-to-showexceptions" },
            { name: "Yahoo luminate RCE", url: "https://sites.google.com/securifyinc.com/secblogs/yahoo-luminate-rce" },
            { name: "Latex to RCE private bug bounty program", url: "https://medium.com/bugbountywriteup/latex-to-rce-private-bug-bounty-program-6a0b5b33d26a" },
            { name: "How I got hall of fame in two fortune 500 companies an RCE story", url: "https://medium.com/@emenalf/how-i-got-hall-of-fame-in-two-fortune-500-companies-an-rce-story-9c89cead81ff" },
            { name: "RCE by uploading a web config", url: "https://poc-server.com/blog/2018/05/22/rce-by-uploading-a-web-config/" },
            { name: "36k Google app engine RCE", url: "https://sites.google.com/site/testsitehacking/-36k-google-app-engine-rce" },
            { name: "How I found 2.9 RCE at yahoo", url: "https://medium.com/@kedrisec/how-i-found-2-9-rce-at-yahoo-bug-bounty-program-20ab50dbfac7" },
            { name: "Bypass firewall to get RCE", url: "https://medium.com/@logicbomb_1/bugbounty-how-i-was-able-to-bypass-firewall-to-get-rce-and-then-went-from-server-shell-to-get-783f71131b94" },
            { name: "RCE vulnerabilite in yahoo subdomain", url: "https://www.mohamedharon.com/2018/01/rce-vulnerabilite-in-yahoo-subdomain.html" },
            { name: "RCE in duolingos tinycards app from android", url: "https://wwws.nightwatchcybersecurity.com/2018/01/04/rce-in-duolingos-tinycards-app-for-android-cve-2017-16905/" },
            { name: "Unrestricted file upload to RCE", url: "https://blog.securitybreached.org/2017/12/19/unrestricted-file-upload-to-rce-bug-bounty-poc/" },
            { name: "Getting a RCE (CTF WAY)", url: "https://medium.com/@uranium238/getting-a-rce-ctf-way-2fd612fb643f" },
            { name: "RCE starwars", url: "https://blog.zsec.uk/rce-starwars/" },
            { name: "How I got 5500 from yahoo for RCE", url: "https://medium.com/bugbountywriteup/how-i-got-5500-from-yahoo-for-rce-92fffb7145e6" },
            { name: "RCE in Addthis", url: "https://whitehatnepal.tumblr.com/post/149933960267/rce-in-addthis" },
            { name: "Paypal RCE", url: "https://artsploit.blogspot.com/2016/01/paypal-rce.html" },
            { name: "My First RCE (Stressed Employee gets me 2x bounty)", url: "https://medium.com/@abhishake100/my-first-rce-stressed-employee-gets-me-2x-bounty-c4879c277e37" },
            { name: "Abusing ImageMagick to obtain RCE", url: "https://strynx.org/imagemagick-rce/" },
            { name: "How Snapdeal Kept their Users Data at Risk!", url: "https://medium.com/@nanda_kumar/bugbounty-how-snapdeal-indias-popular-e-commerce-website-kept-their-user-data-at-risk-3d02b4092d9c" },
            { name: "RCE via ImageTragick", url: "https://rezo.blog/hacking/2019/11/29/rce-via-imagetragick.html" },
            { name: "How I Cracked 2FA with Simple Factor Brute-force!", url: "https://medium.com/clouddevops/bugbounty-how-i-cracked-2fa-two-factor-authentication-with-simple-factor-brute-force-a1c0f3a2f1b4" },
            { name: "Found RCE but got Duplicated", url: "https://medium.com/@smilehackerofficial/how-i-found-rce-but-got-duplicated-ea7b8b010990" },
            { name: "“Recon” helped Samsung protect their production repositories of SamsungTv, eCommerce eStores", url: "https://blog.usejournal.com/how-recon-helped-samsung-protect-their-production-repositories-of-samsungtv-ecommerce-estores-4c51d6ec4fdd" },
            { name: "IDOR to RCE", url: "https://www.rahulr.in/2019/10/idor-to-rce.html?m=1" },
            { name: "RCE on AEM instance without JAVA knowledge", url: "https://medium.com/@byq/how-to-get-rce-on-aem-instance-without-java-knowledge-a995ceab0a83" },
            { name: "RCE with Flask Jinja tempelate Injection", url: "https://medium.com/@akshukatkar/rce-with-flask-jinja-template-injection-ea5d0201b870" },
            { name: "Race Condition that could result to RCE", url: "https://medium.com/bugbountywriteup/race-condition-that-could-result-to-rce-a-story-with-an-app-that-temporary-stored-an-uploaded-9a4065368ba3" },
            { name: "Chaining Two 0-Days to Compromise An Uber Wordpress", url: "https://www.rcesecurity.com/2019/09/H1-4420-From-Quiz-to-Admin-Chaining-Two-0-Days-to-Compromise-an-Uber-Wordpress/" },
            { name: "Oculus Identity Verification bypass through Brute Force", url: "https://medium.com/@karthiksoft007/oculus-identity-verification-bypass-through-brute-force-dbd0c0d3c37e" },
            { name: "Used RCE as Root on marathon Instance", url: "https://omespino.com/write-up-private-bug-bounty-usd-rce-as-root-on-marathon-instance/" },
            { name: "Two easy RCE in Atlassian Products", url: "https://medium.com/@valeriyshevchenko/two-easy-rce-in-atlassian-products-e8480eacdc7f" },
            { name: "RCE in Ruby using mustache templates", url: "https://rhys.io/post/rce-in-ruby-using-mustache-templates" },
            { name: "About a Sucuri RCE…and How Not to Handle Bug Bounty Reports", url: "https://www.rcesecurity.com/2019/06/about-a-sucuri-rce-and-how-not-to-handle-bug-bounty-reports/" },
            { name: "Source code disclosure vulnerability", url: "https://medium.com/@mohamedrserwah/source-code-disclose-vulnerability-b9e49584e2d2" },
            { name: "Bypassing custom Token Authentication in a Mobile App", url: "https://medium.com/@dortz/how-did-i-bypass-a-custom-brute-force-protection-and-why-that-solution-is-not-a-good-idea-4bec705004f9" },
            { name: "Facebook’s Burglary Shopping List", url: "https://www.7elements.co.uk/resources/blog/facebooks-burglary-shopping-list/" },
            { name: "From SSRF To RCE in PDFReacter", url: "https://medium.com/@armaanpathan/pdfreacter-ssrf-to-root-level-local-file-read-which-led-to-rce-eb460ffb3129" },
            { name: "Apache strust RCE", url: "https://www.mohamedharon.com/2019/04/apache-strust-rce.html" },
            { name: "Dell KACE K1000 Remote Code Execution", url: "https://www.rcesecurity.com/2019/04/dell-kace-k1000-remote-code-execution-the-story-of-bug-k1-18652/" },
            { name: "Handlebars Tempelate Injection and RCE", url: "https://mahmoudsec.blogspot.com/2019/04/handlebars-template-injection-and-rce.html" },
            { name: "Leaked Salesforce API access token at IKEA.com", url: "https://medium.com/@jonathanbouman/leaked-salesforce-api-access-token-at-ikea-com-132eea3844e0" },
            { name: "Zero Day RCE on Mozilla's AWS Network", url: "https://blog.assetnote.io/bug-bounty/2019/03/19/rce-on-mozilla-zero-day-webpagetest/" },
            { name: "Escalating SSRF to RCE", url: "https://medium.com/cesppa/escalating-ssrf-to-rce-f28c482eb8b9" },
            { name: "Fixed : Brute-force Instagram account’s passwords", url: "https://medium.com/@addictrao20/fixed-brute-force-instagram-accounts-passwords-938471b6e9d4" },
            { name: "Bug Bounty 101 — Always Check The Source Code", url: "https://medium.com/@spazzyy/bug-bounty-101-always-check-the-source-code-1adaf3f59567" },
            { name: "ASUS RCE vulnerability on rma.asus-europe.eu", url: "https://mustafakemalcan.com/asus-rce-vulnerability-on-rma-asus-europe-eu/" },
            { name: "Magento – RCE & Local File Read with low privilege admin rights", url: "https://blog.scrt.ch/2019/01/24/magento-rce-local-file-read-with-low-privilege-admin-rights/" },
            { name: "RCE in Nokia.com", url: "https://medium.com/@sampanna/rce-in-nokia-com-59b308e4e882" },
            { name: "Two RCE in SharePoint", url: "https://soroush.secproject.com/blog/2018/12/story-of-two-published-rces-in-sharepoint-workflows/" },
            { name: "Token Brute-Force to Account Take-over to Privilege Escalation to Organization Take-Over", url: "https://medium.com/bugbountywriteup/token-brute-force-to-account-take-over-to-privilege-escalation-to-organization-take-over-650d14c7ce7f" },
            { name: "RCE in Hubspot with EL injection in HubL", url: "https://www.betterhacker.com/2018/12/rce-in-hubspot-with-el-injection-in-hubl.html" },
            { name: "Github Desktop RCE", url: "https://pwning.re/2018/12/04/github-desktop-rce/" },
            { name: "eBay Source Code leak", url: "https://slashcrypto.org/2018/11/28/eBay-source-code-leak/" },
            { name: "Facebook source code disclosure in ads API", url: "https://www.amolbaikar.com/facebook-source-code-disclosure-in-ads-api/" },
            { name: "XS-Searching Google’s bug tracker to find out vulnerable source code", url: "https://medium.com/@luanherrera/xs-searching-googles-bug-tracker-to-find-out-vulnerable-source-code-50d8135b7549" },
        ],
        "Buffer Overflow Writeups": [
            { name: "Buffer Overflow Attack Book pdf", url: "http://www.cis.syr.edu/~wedu/seed/Book/book_sample_buffer.pdf" },
            { name: "Github Repository on Buffer Overflow Attack", url: "https://github.com/npapernot/buffer-overflow-attack" },
            { name: "Stack-Based Buffer Overflow Attacks: Explained and Examples", url: "https://blog.rapid7.com/2019/02/19/stack-based-buffer-overflow-attacks-what-you-need-to-know/" },
            { name: "How Buffer Overflow Attacks Work", url: "https://www.netsparker.com/blog/web-security/buffer-overflow-attacks/" },
            { name: "Binary Exploitation: Buffer Overflows", url: "https://blog.usejournal.com/binary-exploitation-buffer-overflows-a9dc63e8b546" },
            { name: "WHAT IS A BUFFER OVERFLOW? LEARN ABOUT BUFFER OVERRUN VULNERABILITIES, EXPLOITS & ATTACKS", url: "https://www.veracode.com/security/buffer-overflow" },
        ],
        "Android Pentesting": [
            { name: "Android Pentesting Lab (Step by Step guide for beginners!)", url: "https://medium.com/bugbountywriteup/android-pentesting-lab-4a6fe1a1d2e0" },
        ],
        "Contributing": [
            { name: "0xAsm0d3us", url: "https://twitter.com/0xAsm0d3us" },
        ],
        "Maintainers": [
            { name: "devanshbatham", url: "https://github.com/devanshbatham" },
            { name: "e13v3n-0xb", url: "https://github.com/e13v3n-0xb" },
        ],
            };
    
    let checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || {}; 
    const topicDropdown = document.getElementById("topicDropdown");
    const topicContentsContainer = document.getElementById("topicContents");
    const overallProgressBar = document.getElementById("overallProgressBar");
    const paginationContainer = document.createElement("div");
    paginationContainer.id = "pagination";
    topicContentsContainer.appendChild(paginationContainer);

    let currentPage = 1;
    const linksPerPage = 10;
    let currentTopic = null;
    let allLinksArray = [];
    let topicProgressBars = {}; 

    // Populate dropdown options including "All Links"
    const allLinksOption = document.createElement("option");
    allLinksOption.value = "All Links";
    allLinksOption.innerText = "All Links";
    topicDropdown.appendChild(allLinksOption);

    Object.keys(topics).forEach((topic) => {
        const option = document.createElement("option");
        option.value = topic;
        option.innerText = topic;
        topicDropdown.appendChild(option);
    });

    // Event listener for dropdown selection
    topicDropdown.addEventListener("change", function () {
        currentTopic = topicDropdown.value;
        currentPage = 1; 
        if (currentTopic === "All Links") {
            prepareAllLinksArray();
            showPage(currentPage);
        } else if (currentTopic) {
            showTopicContent(currentTopic);
        }
    });

    function prepareAllLinksArray() {
        allLinksArray = [];
        Object.keys(topics).forEach((topic) => {
            topics[topic].forEach((link, index) => {
                allLinksArray.push({ topic, link, index });
            });
        });
    }

    function showTopicContent(topic) {
        currentTopic = topic;
        currentPage = 1; 
        showPage(currentPage);
    }

    function showPage(pageNumber) {
        topicContentsContainer.innerHTML = `<h3>${currentTopic === "All Links" ? "All Links" : currentTopic}</h3>`;
        topicContentsContainer.appendChild(paginationContainer);

        let linksArray = currentTopic === "All Links" ? allLinksArray : topics[currentTopic].map((link, index) => ({ topic: currentTopic, link, index }));

        let start = (pageNumber - 1) * linksPerPage;
        let end = start + linksPerPage;
        let paginatedLinks = linksArray.slice(start, end);

        paginatedLinks.forEach(({ topic, link, index }) => {
            const key = `${topic}-${index}`;
            const linkItem = document.createElement("div");
            linkItem.className = "link-item";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = !!checkedItems[key];
            checkbox.addEventListener("change", () => handleCheckboxChange(topic, index));

            const anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.innerText = link.name;
            anchor.target = "_blank";

            linkItem.appendChild(checkbox);
            linkItem.appendChild(anchor);
            topicContentsContainer.appendChild(linkItem);
        });

        createPaginationControls(linksArray.length);
        updateProgress();
        updateTopicProgress(currentTopic);
    }

    function createPaginationControls(totalLinks) {
        paginationContainer.innerHTML = "";
        const totalPages = Math.ceil(totalLinks / linksPerPage);

        if (totalPages > 1) {
            const prevButton = document.createElement("button");
            prevButton.innerText = "Previous";
            prevButton.disabled = currentPage === 1;
            prevButton.addEventListener("click", function () {
                if (currentPage > 1) {
                    currentPage--;
                    showPage(currentPage);
                }
            });

            const nextButton = document.createElement("button");
            nextButton.innerText = "Next";
            nextButton.disabled = currentPage === totalPages;
            nextButton.addEventListener("click", function () {
                if (currentPage < totalPages) {
                    currentPage++;
                    showPage(currentPage);
                }
            });

            paginationContainer.appendChild(prevButton);
            paginationContainer.appendChild(document.createTextNode(` Page ${currentPage} of ${totalPages} `));
            paginationContainer.appendChild(nextButton);
        }
    }

    function handleCheckboxChange(topic, index) {
        const key = `${topic}-${index}`;
        checkedItems[key] = !checkedItems[key];
        localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
        updateProgress();
        updateTopicProgress(topic);
    }

    function updateProgress() {
        let totalLinks = 0;
        let totalChecked = 0;

        Object.keys(topics).forEach((topic) => {
            const topicLinks = topics[topic];
            totalLinks += topicLinks.length;

            const checkedCount = topicLinks.filter((_, index) => checkedItems[`${topic}-${index}`]).length;
            totalChecked += checkedCount;
        });

        const overallProgress = (totalChecked / totalLinks) * 100;
        overallProgressBar.style.width = `${overallProgress}%`;
        overallProgressBar.innerText = `${Math.round(overallProgress)}%`;
    }

    function updateTopicProgress(topic) {
        if (topic === "All Links") return;

        if (!topicProgressBars[topic]) {
            const progressContainer = document.createElement("div");
            progressContainer.className = "progress-container";
            progressContainer.innerHTML = `
                <span>${topic} Progress:</span>
                <div class="progress-bar"><div id="progress-${topic}" class="progress-fill"></div></div>
            `;
            topicContentsContainer.appendChild(progressContainer);
            topicProgressBars[topic] = document.getElementById(`progress-${topic}`);
        }

        const topicLinks = topics[topic];
        const checkedCount = topicLinks.filter((_, index) => checkedItems[`${topic}-${index}`]).length;
        const topicProgress = (checkedCount / topicLinks.length) * 100;

        topicProgressBars[topic].style.width = `${topicProgress}%`;
        topicProgressBars[topic].innerText = `${Math.round(topicProgress)}%`;
    }

    updateProgress();
});
