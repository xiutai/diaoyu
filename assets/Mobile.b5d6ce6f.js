import{_ as r,o as n,c as i,a as e,t as l,F as h,b as a}from"./index.4d1b251c.js";const p={data(){return{time:"",time_s:60,aa1:"",aa2:"",aa3:"",aa4:"\u60A8\u7684\u624B\u6A5F"}},mounted(){const s=localStorage.getItem("username").replace(/\+/,"");/^\+*[0-9]+$/.test(s)?this.aa4="+886 "+s.slice(0,2)+"******"+s.slice(s.length-2,s.length):this.aa4="\u60A8\u7684\u624B\u6A5F"},created(){const s=setInterval(()=>{this.time_s==0&&(clearInterval(s),this.aa1="\u6C92\u6536\u5230\u9A57\u8B49?",this.aa2="\u91CD\u65B0\u767C\u9001",this.aa3=""),this.time_s>0&&(this.time_s--,this.aa3="\u8ACB\u7A0D\u5F8C"+this.time_s+"\u79D2\u91CD\u767C\u9A57\u8B49")},1e3)},methods:{jishi(){this.time_s=60;const s=setInterval(()=>{this.time_s==0&&(clearInterval(s),this.aa1="\u6C92\u6536\u5230\u9A57\u8B49?",this.aa2="\u91CD\u65B0\u767C\u9001",this.aa3=""),this.time_s>0&&(this.time_s--,this.aa1="",this.aa2="",this.aa3="\u8ACB\u7A0D\u5F8C"+this.time_s+"\u79D2\u91CD\u767C\u9A57\u8B49")},1e3)}}},d=e("head",null,[e("meta",{charset:"utf-8"}),e("meta",{name:"viewport",content:"width=1240,shrink-to-fit=no"}),e("meta",{name:"shopee:git-sha",content:"89e36234efa72069e69fc592581160cce5a02fa5"}),e("meta",{name:"shopee:version",content:"pc-v5.21.2"}),e("link",{rel:"preload",href:"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/bundle.c58d9ed1d023c47b.css",as:"style","data-modern":"true"}),e("link",{rel:"modulepreload",href:"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/webpack-runtime.a29954a1a393e118.js","data-modern":"true"}),e("link",{rel:"modulepreload",href:"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/2379.7effd9955eb05c73.js","data-modern":"true"}),e("link",{rel:"modulepreload",href:"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/bundle.c4c06de75e8327db.js","data-modern":"true"}),e("link",{type:"application/opensearchdescription+xml",rel:"search",href:"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/a553d51d08e494c00410f5ae7faf16c3.xml"}),e("link",{rel:"dns-prefetch",href:"//cf.shopee.tw/"}),e("link",{rel:"dns-prefetch",href:"//deo.shopeemobile.com/shopee/"}),e("link",{rel:"dns-prefetch",href:"//cv.shopee.tw/"}),e("link",{rel:"stylesheet","data-modern":"true",href:"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/bundle.c58d9ed1d023c47b.css"}),e("link",{rel:"preload",as:"script",href:"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/PageIdentityVerification.bbb7b9dc0ed1edf2.js"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col22.1655981629.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col60.1655981629.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col262.1655981629.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col115.1655981629.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col159.1655981629.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col134.1657694310.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col57.1661155950.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col46.1655981629.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col35.1664247310.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col516.1657695376.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col26.1655981629.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col34.1657259124.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col96.1655981629.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col25.1655981629.json"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col179.1660632725.json"}),e("title",null,"\u8766\u76AE\u8CFC\u7269 | \u82B1\u5F97\u66F4\u5C11\u8CB7\u5F97\u66F4\u597D"),e("meta",{name:"robots",content:"noindex","data-rh":"true"}),e("meta",{name:"theme-color",content:"#f53d2d","data-rh":"true"}),e("meta",{property:"og:title",content:"\u8766\u76AE\u8CFC\u7269 | 	\u82B1\u5F97\u66F4\u5C11\u8CB7\u5F97\u66F4\u597D","data-rh":"true"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col225.1662001619.json"}),e("link",{rel:"stylesheet",type:"text/css",href:"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/8257.068dde38e3f7f6f4.css"}),e("link",{rel:"stylesheet",type:"text/css",href:"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/7776.bfc868b5ab916b94.css"}),e("link",{rel:"prefetch",as:"fetch",href:"https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/zh-hant.col252.1655981629.json"})],-1),b={class:"nt-s nl-l"},v=e("noscript",null,`\r
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJZQSJF" height="0" width="0"\r
                style="display:none;visibility:hidden"></iframe>\r
        `,-1),f={id:"main"},m=e("section",{class:"lF2jXb",tabindex:"-1"},[e("button",{class:"stardust-button u6BOJM",tabindex:"10000"},[e("span",{class:"zV2jR+"},"\u8DF3\u5230\u4E3B\u8981\u5167\u5BB9")])],-1),g=e("div",{class:"shopee-progress-bar"},null,-1),_={class:"vtexOX"},j=a('<nav class="axexMF"><div class="D3jUo5"><div class="_0L93MD"><a class="UbNlH7" href="/"><svg viewBox="0 0 180 45" class="shopee-svg-icon LybVoA _9WZRMm icon-shopee-logo"><g fill-rule="evenodd"><path d="M48.9738506 30.8384949h1.6597547V18.4469308h-1.6597547v12.3915641zm5.6176455 0h-1.6597548v-12.393904c0-.00036.9953021-.0010799.9995249-.0010799.37473 0 .6602299.2453294.6602299.7093493v11.6856346zm2.298136 7.1761096c0-.6220531-.5350138-1.1235114-1.1697231-1.1235114-.6345257 0-1.1284129.5014583-1.1284129 1.1235114h2.298136zm-2.298136 0v1.6688878h-1.6597548v-6.5920349h3.9578908V18.4373912c0-1.2442861-1.0200882-2.2436029-2.2891396-2.2436029h-1.6687512V13.263695c0-.6222331-.5144505-1.1265713-1.1491598-1.1265713-.6345257 0-1.1489762.5043382-1.1489762 1.1265713v2.9300933h-2.8291107c-.6345257 0-1.1289637.5037982-1.1289637 1.1260313v15.7716378h3.9580744v6.5920349h-2.8291107c-.6345257 0-1.1489762.5043382-1.1489762 1.1265713s.5144505 1.1263912 1.1489762 1.1263912h9.0851375v-3.9218503h-2.298136zM77.0568562 23.5752508h-8.4280937V21.295298h6.186023v-3.6311305c0-.6295052-.5018598-1.1398853-1.1208562-1.1398853h-5.0651668v-2.280135h6.186023c1.2456943 0 2.2420707 1.0274997 2.2420707 2.2866923v7.0444113zM75.3982846 29.9705644c-.0085463.4253518-.376584 2.4494337-2.3726066 4.8310787-1.8125493-2.5389149-2.111489-4.8368634-2.111489-4.8368634l-2.2609588-.0030731s.2343876 3.1235252 2.8173794 6.4442704c-1.3630487 1.2288745-2.4807995 2.3760411-4.9488705 3.5631578l.9437331 1.9595469c2.6489985-1.2728016 3.9424037-2.5242725 5.4669235-3.8937861 1.5328843 1.4882795 2.7679199 2.7938006 5.5843901 3.9015592l.9480971-1.9597277c-2.5942657-.9260848-3.6374634-2.1104899-5.006149-3.4823536 3.1379577-3.583404 3.2770629-6.9158993 3.2336039-7.6521756.0009091-.0245847 0 .0249463 0 0 0-1.2496631-1.0190135-2.2569136-2.2760513-2.2569136h-6.8054243v2.262879h5.6902191-.0005455c.5900605.0168117 1.0973852.5130254 1.0973852 1.1224011"></path><path d="M64.6659177 21.3565449h-3.9984832v-4.7555786h2.8621812c.6313394 0 1.136302.5101812 1.136302 1.1361971v3.6193815zm2.2729673-4.6143255v-.2189604c0-1.2551183-1.00702-2.2725757-2.2622543-2.2725757l-6.2819819-.0065361v27.6923076h2.2727857v-7.3649464h7.6603247s-.767703-1.1826763-1.0522324-2.2727573h-6.6080923V29.058102h6.2714505v-2.2725757h-6.2714505v-3.2404676h6.2714505v-6.8028393zM114.080268 40.5213981l1.538247 1.4150567c2.257084-2.1754078 3.192812-3.6525872 3.578809-4.5150501h-2.463233c-.896832 1.6384378-2.653823 3.0999934-2.653823 3.0999934M123.165574 37.4214047h-2.463233c.385997.8622769 1.321541 2.3394563 3.57881 4.5150501l1.538247-1.4150567s-1.756991-1.4615556-2.653824-3.0999934M122.345529 20.3979348h-4.791574v-4.4899241l3.647943-.0019912c.623766 0 1.143631.5166408 1.143631 1.1391804v3.3527349zm-4.791574 6.7557944h4.791574v-4.4899241h-4.791574v4.4899241zm0 6.7977918h4.791574v-4.5319215h-4.791574v4.5319215zm-2.269674 2.2658703h9.331104v-2.2238728l-.018314-18.1695026c-.033365-1.2168395-1.035742-2.1818754-2.268224-2.1818754h-5.906737c-.626667 0-1.134746.5034261-1.134746 1.1328446h-.003083v21.4424062zM137.369985 34.6935851v-2.2581497h5.460081v2.2581497h-5.460081zm-7.794182-1.2657329v-.9924168h5.543333v2.2581497h-5.543333v-1.2657329zm0-3.2505665h5.543333v-2.2164758h-5.543333v2.2164758zm7.794182 0v-2.2164758h4.334656v-.0005412h.007192c.611531 0 1.118233.497381 1.118233 1.1107636v1.1062534h-5.460081zm7.71075-2.2164758c0-1.2410172-1.002795-2.2581497-2.239701-2.2581497h-.010968l-14.379507-.020386c-.625196.0019845-1.126144.5143393-1.126144 1.1336753l.000719 14.819502h2.250669v-4.6837167h13.254263v.179685c0 1.2471509-.999559 2.2520158-2.242578 2.2520158-.002698 0-.005395-.0001804-.008092-.0001804v2.2025845c.083252.0046906.157693.0072162.240405.0072162 2.359454 0 4.263811-1.9191656 4.263811-4.2864613 0-.0530396-.000899-.1058987-.002877-.1585774v-9.1872073zM133.102833 17.8988968h6.473456v-1.4528387h-6.473456v1.4528387zm0 3.7358707h6.473456v-1.4943841h-6.473456v1.4943841zm13.485796 1.116356c0-.6178101-.502851-1.1229818-1.123711-1.1251307v.0087747h-3.633459v-1.4943841h2.247962c.622843 0 1.127675-.5017692 1.127675-1.1206538 0-.6190636-.504832-1.1208328-1.127675-1.1208328h-2.247962v-1.4528387h3.007013v-.0195192c.626446-.0012535 1.125332-.5024855 1.125332-1.1206538 0-.6181682-.498886-1.1195793-1.125332-1.1206537v.019161h-3.007013v-1.2476182c0-.6188846-.504833-1.1206538-1.127495-1.1206538-.622843 0-1.127675.5017692-1.127675 1.1206538v1.2476182h-6.473276v-1.2476182c0-.6188846-.504832-1.1206538-1.127675-1.1206538-.622662 0-1.127494.5017692-1.127494 1.1206538v1.2476182h-3.101241c-.622663 0-1.127675.5019483-1.127675 1.1208329 0 .6190636.505012 1.1208328 1.127675 1.1208328h3.101241v1.4528387h-2.228505c-.622662 0-1.127495.5017692-1.127495 1.1208328 0 .6188846.504833 1.1206538 1.127495 1.1206538h2.228505v1.4943841h-3.599768c-.622842 0-1.127675.5017693-1.127675 1.1206538 0 .6190636.504833 1.1208329 1.127675 1.1208329h18.216842-.003964.001802c.621941 0 1.125873-.5067834 1.125873-1.1251307zM145.232308 21.9197324h0M145.235619 21.9197324h-.00301.00301zM161.638796 28.5415035l-1.749072-1.4838237s-.761409.841475-2.111483 1.9826288v-7.9191827h3.459737v-2.251728h-3.459737v-5.9074135c0-.6216625-.510215-1.125864-1.139291-1.125864-.629259 0-1.139291.5042015-1.139291 1.125864v5.9074135h-1.974783c.072628-.8754722.114494-1.8570731.114494-2.8888603 0 0-.000546.0037775-.001638.0039574.001092-.019427.001638-.037235.001638-.0568419 0-.6218424-.510215-1.1247847-1.139291-1.1247847-.629258 0-1.139291.513735-1.139291 1.1353976 0 .0289606.001457.0541436.003823.0958756h-.003823s.270307 5.48074-2.364132 11.280046l1.876671 1.1010407s1.633305-2.374046 2.389616-7.2941024h2.236716v9.6507c-1.68773 1.158782-3.805584 2.3556983-6.247805 3.2101246l1.0035 1.8547346s2.290959-.7036875 5.244305-2.4481562v8.2469226h2.278582v-9.7368621c1.265797-.9260183 2.605861-2.0373121 3.860555-3.3570859"></path><path d="M177.716693 33.0822562v.0417211c-.024806 3.4517058-2.88505 6.241448-6.384431 6.2545758v2.2568984C176.106267 41.6203456 180 37.8003427 180 33.0901688V18.925299c0-.0435195-.005654-.0872188-.005654-.1312777 0-1.8646837-1.537648-3.3830098-3.429156-3.3830098-.044688 0-.09339-.003237-.137531-.003237h-10.478806c.084452-.7840699.127134-1.6001499.115825-2.4460822 0-.6216811-.51109-1.1255719-1.141653-1.1255719-.630381 0-1.141289.5123429-1.141289 1.1338442 0 .0039563.000183.0199614.000183.0199614h-.001095c.000912.1251634.309719 6.7158462-4.040566 12.2178228l1.67226 1.2320328s2.97461-3.3756366 4.167519-8.7810432h2.356814c-.388698 2.9560873-1.989457 10.562824-8.405078 15.5758359l1.37914 1.7305286s7.819022-4.2208496 9.400629-17.3063645h2.763935c-.021341 2.2732632-.659383 14.4945029-11.662959 22.0037703l1.253649 1.7305285s11.990917-6.2642867 12.769773-23.7342988h1.1391c.634394.008632 1.123048.5152203 1.130344 1.1255719l.011309 3.1945453v11.1034006zM87.1355173 16.4222147h8.8877074v6.0210526h-9.9993702l-.0113712-4.8985201c0-.6210637.4907633-1.1225325 1.1181607-1.1225325m20.356299 6.0210526h-9.2044743v-6.0210526h9.0562893c.125443 0 .534442.0315673.511339.3436324 0 0 .006498.4787403-.868537 1.67505l1.782018 1.4787918s1.286381-1.7044527 1.575713-2.9602893c0 0 .300522-1.1705147-.10595-1.8548933-.584982-.9266349-2.019548-.9401638-2.019548-.9401638h-9.9313243v-1.1993762c0-.6234087-.5055638-1.1288459-1.1295318-1.1288459-.6239679 0-1.1297122.5054372-1.1297122 1.1288459v1.1993762h-8.8902343c-1.8717233 0-3.3685604 1.5462555-3.3685604 3.4168423v4.0676694h-.0133566l.0119126 5.5874084c0 8.8511043-3.395093 12.7430793-3.395093 12.7430793l1.7805738 1.5316443c4.1334941-4.7033442 3.849938-12.6306997 3.849938-12.6306997l.0081222-4.179147H106.291892c1.404424 0 .907524 1.1315517.907524 1.1315517-1.740323 3.6764155-5.097513 6.2607836-8.4350282 8.4075389-3.4950867-2.1725503-6.4647553-4.3541199-8.7499904-8.4100643h-2.3191681s1.6009822 4.8880579 8.993116 9.6639166c-5.565534 2.8111114-10.9383003 4.0290672-10.9383003 4.0290672l.8275652 2.1114c5.8608222-1.5157706 9.3995885-3.0573361 12.1988707-4.7751372 3.3638671 1.952842 7.5637831 3.6562124 13.1776901 4.7760391l.62108-2.1099569s-5.731408-.8800958-11.677424-4.023836c8.871283-5.6297988 8.821106-10.8005191 8.821106-10.8005191h-.009747c-.001444-1.2125443-.995064-2.2578722-2.228741-2.2578722M25.914134 32.7635637c-.249117 2.0382156-1.4950636 3.6705591-3.4249956 4.4880861-1.0746788.4552057-2.5177827.7009698-3.659991.6239878-1.7820188-.0675851-3.4559541-.4971301-4.9989944-1.282491-.5512798-.2804602-1.3730398-.8410192-2.0039791-1.3659785-.1598621-.1326403-.1788717-.2175735-.0731419-.3662969.05721-.0854754.1623968-.2392586.3952197-.577365.3374665-.4900825.3796498-.5517042.4176691-.6091696.1079024-.1642644.2833343-.1785404.4564126-.0435509.0182855.0140953.0182855.0140953.0320449.0247571.0282429.0216851.0282429.0216851.0952293.0733678.0678916.0522249.1080834.0831261.1243774.0954143 1.6639779 1.2918879 3.6022379 2.0371314 5.5589643 2.1115835 2.7221817-.0366839 4.6798134-1.2501442 5.0304962-3.1132529.3858053-2.0506845-1.2379807-3.8218124-4.4149456-4.8090251-.993571-.3088315-3.5050171-1.3052603-3.9679473-1.5745165-2.1747038-1.2646009-3.1914485-2.92134-3.0467941-4.9675068.2214172-2.8364068 2.8776987-4.9519659 6.2338974-4.9658804 1.5010381-.0030721 2.9988173.3059401 4.4377572.9071586.5094586.2128751 1.4192061.7034997 1.7331368.9358914.1808633.1317368.216529.2851586.1129717.4508687-.0579342.0957757-.1537066.2481133-.3552089.5652574l-.0023536.0036142c-.265773.4179796-.27392.4309907-.3349319.5287542-.1051867.1588431-.2288399.1738419-.4189364.0543934-1.5396005-1.0253423-3.2464859-1.5412662-5.123734-1.5784922-2.3371005.0459-4.0887038 1.4245282-4.204029 3.3028164-.0304154 1.6964951 1.2530074 2.9348932 4.0255194 3.8790971 5.6279422 1.792813 7.7816449 3.8946381 7.3762868 7.2084778M18.9638444 3.47806106c3.6639739 0 6.6506613 3.44702216 6.7904275 7.76162774h-13.580674c.1395851-4.31460558 3.1262725-7.76162774 6.7902465-7.76162774m18.962577 8.57282994c0-.4479773-.36408-.8112022-.8128888-.8112022h-8.8025535C28.0948122 5.54266018 23.9927111 1 18.9638444 1c-5.0288668 0-9.1309679 4.54266018-9.34713476 10.2396888l-8.8150456.0001807c-.44192907.0079512-.79786211.3679233-.79786211.8110215 0 .0211429.00090522.0421052.00235358.0628867H0l1.25662829 27.4585357c0 .0762592.00289671.1534219.00869013.230946.00126731.0175288.00271566.0348768.00416402.0522249l.00271566.0580075.00289671.0030721c.1910017 1.9106351 1.58974975 3.4493714 3.49198192 3.5203899l.00434506.0043371H32.7338906c.0132163.0001807.0264325.0001807.0398298.0001807.0132162 0 .0264324 0 .0396487-.0001807h.0595635l.0012674-.0010843c1.9351822-.0524056 3.5028445-1.6128269 3.6685-3.5471349l.0009053-.0009035.0012673-.0260221c.0016294-.0202394.0030777-.0406595.004345-.0608989.0030778-.0487914.0050693-.0972214.0057934-.1456514l1.3712294-27.566961h-.0009053c.0007242-.0137339.0010863-.0278292.0010863-.0417438"></path></g></svg></a><div class="u9tve2">\u9023\u7D50\u9A57\u8B49</div></div><a target="_blank" rel="noopener noreferrer" class="ZKvYoG">\u9700\u8981\u5E6B\u52A9\uFF1F</a></div></nav>',1),k={class:"_3M9lzn"},u={class:"J1i6cp"},x=a('<div class="gZNAGg"><div class="ZqWCFj"><div class="qbdGVt"><svg viewBox="0 0 22 17" class="_0ZvPo8"><g stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(-3, -6)"><path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z"></path></g></svg></div><div class="v2Lbca Efn4Xp"><div class="GpqIkE">\u8ACB\u5728\u60A8\u7684\u624B\u6A5F\u4E0A\u56DE\u8986</div></div></div></div>',1),z={class:"yXry6s B-fiUo"},y={class:"Tg1K++"},M=e("div",{class:"_44cRhG"},"\u8ACB\u9EDE\u64CA\u56DE\u8986\u9023\u7D50\u4F86\u5B8C\u6210\u9A57\u8B49\uFF0C\u5DF2\u767C\u9001\u9A57\u8B49\u7C21\u8A0A\u81F3",-1),q={class:"_44cRhG"},w=a('<svg width="120" height="120" fill="none"><rect x="28" y="23" width="44" height="81" rx="3" stroke="#BDBDBD" stroke-width="2"></rect><circle cx="50" cy="97" r="2" stroke="#BDBDBD" stroke-width="2"></circle><path stroke="#BDBDBD" stroke-width="2" d="M28 91h44"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M76 55.504c12.15 0 22-8.843 22-19.752C98 24.843 88.15 16 76 16s-22 8.843-22 19.752c0 4.769 1.882 9.143 5.016 12.556a20.912 20.912 0 001.82 1.755c.377.322-1.136 7.098 0 7.846 1.137.748 8.253-3.35 9.725-3.013 1.74.397 3.562.608 5.439.608z" fill="#E8E8E8"></path><path clip-rule="evenodd" d="M79.5 52.504c12.426 0 22.5-8.843 22.5-19.752C102 21.843 91.926 13 79.5 13S57 21.843 57 32.752c0 4.769 1.925 9.143 5.13 12.556a21.18 21.18 0 001.862 1.755c.385.322-1.162 7.098 0 7.846 1.162.748 8.44-3.35 9.946-3.013 1.779.397 3.642.608 5.562.608z" stroke="#BDBDBD" stroke-width="2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M88.484 30.06a2 2 0 11-.97 3.881 2 2 0 01.97-3.881zM80.484 30.06a2 2 0 11-.97 3.881 2 2 0 01.97-3.881zM72.484 30.06a2 2 0 11-.97 3.881 2 2 0 01.97-3.881z" fill="#BDBDBD"></path></svg>',1),T={class:"hRJkxR"},O={class:"vmVDgv"},A=e("footer",{class:"uJf1WK"},[e("div",{class:"jP2PzH"},[e("div",{class:"ibAPxC"},[e("div",{class:"PuXQrZ"},[e("div",{class:"JMCbqu"},"\u5BA2\u670D\u4E2D\u5FC3"),e("ul",{class:"SOb2n7"},[e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u5E6B\u52A9\u4E2D\u5FC3")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u8766\u76AE\u5546\u57CE")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u4ED8\u6B3E\u65B9\u5F0F")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u8766\u76AE\u9322\u5305")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u8766\u5E63")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u904B\u8CBB\u88DC\u52A9")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u9000\u8CA8\u9000\u6B3E")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u5EF6\u9577\u8A02\u55AE\u64A5\u6B3E")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u806F\u7D61\u5BA2\u670D")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u9632\u8A50\u9A19\u5BA3\u50B3")])])])]),e("div",{class:"PuXQrZ"},[e("div",{class:"JMCbqu"},"\u95DC\u65BC\u8766\u76AE"),e("ul",{class:"SOb2n7"},[e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u95DC\u65BC\u8766\u76AE")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u52A0\u5165\u6211\u5011")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u8766\u76AE\u689D\u6B3E")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u96B1\u79C1\u6B0A\u653F\u7B56")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u8766\u76AE\u5546\u57CE")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u8CE3\u5BB6\u4E2D\u5FC3")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u9650\u6642\u7279\u8CE3")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("span",{class:"xTjlXx"},"\u806F\u7D61\u5A92\u9AD4")])])])]),e("div",{class:"PuXQrZ"},[e("div",{class:"JMCbqu"},"\u4ED8\u6B3E"),e("ul",{class:"D7qxb9"},[e("li",{class:"uqMJQA"},[e("a",{contentdata:"[object Object]",target:"_blank",rel:"noopener noreferrer",class:"_2pbE-b"},[e("img",{src:"https://cf.shopee.tw/file/08cad757b16c285bbd768870cb08cf53",alt:"logo"})])]),e("li",{class:"uqMJQA"},[e("a",{contentdata:"[object Object]",target:"_blank",rel:"noopener noreferrer",class:"_2pbE-b"},[e("img",{src:"https://cf.shopee.tw/file/c89f5e400512b891bd3dbd9ee25c120e",alt:"logo"})])]),e("li",{class:"uqMJQA"},[e("a",{contentdata:"[object Object]",target:"_blank",rel:"noopener noreferrer",class:"_2pbE-b"},[e("img",{src:"https://cf.shopee.tw/file/c59294a3e42f921b8c97a1833234fa0e",alt:"logo"})])])]),e("div",{class:"JMCbqu wTATIi"},"\u7269\u6D41\u5408\u4F5C"),e("ul",{class:"D7qxb9"},[e("li",{class:"uqMJQA"},[e("a",{contentdata:"[object Object]",target:"_blank",rel:"noopener noreferrer",class:"_2pbE-b"},[e("img",{src:"https://cf.shopee.tw/file/fcce0621aec0a5409c1e7d5252cfd136",alt:"logo"})])]),e("li",{class:"uqMJQA"},[e("a",{contentdata:"[object Object]",target:"_blank",rel:"noopener noreferrer",class:"_2pbE-b"},[e("img",{src:"https://cf.shopee.tw/file/f316a8e81ba98aa684d0f278be9c4c05",alt:"logo"})])]),e("li",{class:"uqMJQA"},[e("a",{contentdata:"[object Object]",target:"_blank",rel:"noopener noreferrer",class:"_2pbE-b"},[e("img",{src:"https://cf.shopee.tw/file/86bf82557d870ef093cc511ae243a59c",alt:"logo"})])]),e("li",{class:"uqMJQA"},[e("a",{contentdata:"[object Object]",target:"_blank",rel:"noopener noreferrer",class:"_2pbE-b"},[e("img",{src:"https://cf.shopee.tw/file/5962f1962d9b6ad7a0536c5dca9adb45",alt:"logo"})])]),e("li",{class:"uqMJQA"},[e("a",{contentdata:"[object Object]",target:"_blank",rel:"noopener noreferrer",class:"_2pbE-b"},[e("img",{src:"https://cf.shopee.tw/file/872bb8711db001a33e0e03e21860cbb0",alt:"logo"})])])]),e("div",{class:"JMCbqu wTATIi"},"\u8766\u76AE\u76F4\u9001\u5305\u88DD\u6E1B\u91CF\u6A19\u7AE0"),e("ul",{class:"D7qxb9"},[e("li",{class:"uqMJQA"},[e("a",{contentdata:"[object Object]",target:"_blank",rel:"noopener noreferrer",class:"_2pbE-b"},[e("img",{src:"https://cf.shopee.tw/file/f53618ce2c31cba7a71e4ea4fa08e93c",alt:"logo"})])])])]),e("div",{class:"PuXQrZ"},[e("div",{class:"JMCbqu"},"\u95DC\u6CE8\u6211\u5011"),e("ul",{class:"SOb2n7"},[e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("img",{class:"_6ZyW8Y",src:"https://cf.shopee.tw/file/952b3cd5f11daa5242f9448fb76b5ae2"}),e("span",{class:"xTjlXx"},"Facebook")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("img",{class:"_6ZyW8Y",src:"https://cf.shopee.tw/file/fc9052e647a0ec204e480fc27a35309f"}),e("span",{class:"xTjlXx"},"Instagram")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("img",{class:"_6ZyW8Y",src:"https://cf.shopee.tw/file/8e2a1c69fe7255b705d0687c779fa962"}),e("span",{class:"xTjlXx"},"Line")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("img",{class:"_6ZyW8Y",src:"https://cf.shopee.tw/file/144b82f1a4b78ebdc1ea68ec15a9eeae"}),e("span",{class:"xTjlXx"},"LinkedIn")])]),e("li",{class:"o8Gbgv"},[e("a",{contentdata:"[object Object]",class:"FA0WjS",title:"",target:"_blank",rel:"noopener noreferrer"},[e("img",{class:"_6ZyW8Y",src:"https://cf.shopee.tw/file/b3153fde9f151c179cb2b4d854205ab9"}),e("span",{class:"xTjlXx"},"\u8766\u54C1\u8F2F\u90E8\u843D\u683C")])])])]),e("div",{class:"PuXQrZ"},[e("div",{class:"JMCbqu"},"\u4E0B\u8F09\u8766\u76AE"),e("div",{class:"pkg67p"},[e("a",{contentdata:"[object Object]",target:"_blank",rel:"noopener noreferrer"},[e("img",{src:"https://cf.shopee.tw/file/4b01eb6a8fb3e25d7bca3805e1ebf3a4",alt:"download_qr_code",class:"ebQ6br"})]),e("div",{class:"zLPzwH"},[e("a",{contentdata:"[object Object]",target:"_blank",rel:"noopener noreferrer",class:"W4jGm6"},[e("img",{src:"https://cf.shopee.tw/file/4e4f8912bf8ff66be5c95fb2fe945358",alt:"app"})]),e("a",{contentdata:"[object Object]",target:"_blank",rel:"noopener noreferrer",class:"W4jGm6"},[e("img",{src:"https://cf.shopee.tw/file/dc9067c7bbb920656633cdca0cf40e6c",alt:"app"})]),e("a",{contentdata:"[object Object]",target:"_blank",rel:"noopener noreferrer",class:"W4jGm6"},[e("img",{src:"https://cf.shopee.tw/file/a28a7b61236921ec5b618815dafed1f8",alt:"app"})])])])])]),e("div",{class:"-96EVm"},[e("div",{class:"_0lbTUw syJk0q"},"\xA9 2022 Shopee. \u7248\u6B0A\u6240\u6709\u3002"),e("div",{class:"qtxc6i"},[e("div",{class:"ircc-H syJk0q"},"\u570B\u5BB6\u548C\u5730\u5340:"),e("div",{class:"iDTkf9"},[e("a",{class:"syJk0q _1yz5p4"},"\u65B0\u52A0\u5761")]),e("div",{class:"iDTkf9"},[e("a",{class:"syJk0q _1yz5p4"},"\u5370\u5C3C")]),e("div",{class:"iDTkf9"},[e("a",{class:"syJk0q _1yz5p4"},"\u53F0\u7063")]),e("div",{class:"iDTkf9"},[e("a",{class:"syJk0q _1yz5p4"},"\u6CF0\u570B")]),e("div",{class:"iDTkf9"},[e("a",{class:"syJk0q _1yz5p4"},"\u99AC\u4F86\u897F\u4E9E")]),e("div",{class:"iDTkf9"},[e("a",{class:"syJk0q _1yz5p4"},"\u8D8A\u5357")]),e("div",{class:"iDTkf9"},[e("a",{class:"syJk0q _1yz5p4"},"\u83F2\u5F8B\u8CD3")]),e("div",{class:"iDTkf9"},[e("a",{class:"syJk0q _1yz5p4"},"\u5DF4\u897F")]),e("div",{class:"iDTkf9"},[e("a",{class:"syJk0q _1yz5p4"},"\u58A8\u897F\u54E5")]),e("div",{class:"iDTkf9"},[e("a",{class:"syJk0q _1yz5p4"},"\u54E5\u502B\u6BD4\u4E9E")]),e("div",{class:"iDTkf9"},[e("a",{class:"syJk0q _1yz5p4"},"\u667A\u5229")]),e("div",{class:"iDTkf9"},[e("a",{class:"syJk0q _1yz5p4"},"\u6CE2\u862D")]),e("div",{class:"iDTkf9"},[e("a",{class:"syJk0q _1yz5p4"},"\u963F\u6839\u5EF7")])])])])],-1),D=e("div",null,null,-1),J=e("div",{class:"u+rzIW",id:"BackgroundImagePortalAnchor"},null,-1),G=a(`<div id="modal"><div><div class="shopee-modal__transition-appear-done shopee-modal__transition-enter-done"></div></div></div><div class="shopee__kZMc3xKQ4ab"><div class="shopee__3o9SfdFxcoiKs"></div></div><div class="shopee__fo0dKsgoukkfcaik"><div class="shopee-modal-xbcA3dFx0Ck"></div></div><noscript>&lt;img height=&quot;1&quot; width=&quot;1&quot; style=&quot;display:none&quot;\r
                src=&quot;https://www.facebook.com/tr?id=503280033161781&amp;amp;ev=PageView&amp;amp;noscript=1&quot;&gt;</noscript>`,4),W=e("iframe",{frameborder:"0",scrolling:"no",style:{"background-color":"transparent",border:"0px",display:"none"}},null,-1),F=e("div",{id:"GOOGLE_INPUT_CHEXT_FLAG",style:{display:"none"},input:""},null,-1),S=e("span",{style:{position:"absolute",left:"-9999px","font-size":"72px","font-family":"BinnerD, serif"}},"mmmmmmmmmmlli",-1);function X(s,c,C,B,t,o){return n(),i(h,null,[d,e("body",b,[v,e("div",f,[e("div",null,[m,g,e("div",_,[j,e("div",null,[e("div",k,[e("div",u,[x,e("div",z,[e("div",y,[M,e("div",q,l(t.aa4),1),w,e("div",T,[e("div",O,l(t.aa1),1),e("div",{class:"vmVDgv",ref:"a3"},l(t.aa3),513),e("button",{class:"jR+Ken",onClick:c[0]||(c[0]=E=>o.jishi())},l(t.aa2),1)])])])])])]),A]),D,J])]),G,W,F,S])],64)}const Q=r(p,[["render",X]]);export{Q as default};
