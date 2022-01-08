var gamertokenCookies = gamertokenCookies || {
    init:function(custom){
        gamertokenCookies.default.document = window.document;

        if(!custom){
            this.checkCookie();
            return;
        }

        if(custom.backgroundcolor)
            gamertokenCookies.default.backgroundcolor = custom.backgroundcolor;
        if(custom.color)
            gamertokenCookies.default.color = custom.color;
		if(custom.domain=="wallet.gamertoken.com"){
			custom.domain="gamertoken.com";
		}		
        if(custom.domain)
            gamertokenCookies.default.domain = custom.domain;
        if(custom.onCall)
            gamertokenCookies.default.onCall = custom.onCall;
        if(custom.confirmText)
            gamertokenCookies.default.confirmText = custom.confirmText;
        if(custom.text)
            gamertokenCookies.default.text = custom.text;
        if(custom.cookieName)
            gamertokenCookies.default.cookieName = custom.cookieName;
        if(custom.alignment)
            gamertokenCookies.default.alignment = custom.alignment;
        if(custom.conclusive)
            gamertokenCookies.default.conclusive = custom.conclusive;
        if(custom.lang)
            gamertokenCookies.default.lang = custom.lang;
        if(custom.company)
            gamertokenCookies.default.company = custom.company;

        this.checkCookie();
    },
    checkCookie:function () {
        if(gamertokenCookies.default.document.cookie.indexOf(gamertokenCookies.default.cookieName) == -1){
            gamertokenCookies.showOverlay();
        }
        else{
            console.log(gamertokenCookies.onCall);
            if(gamertokenCookies.default.onCall)
                gamertokenCookies.default.onCall();
        }
    },
    showOverlay:function () {
        var alignment = '';
        if(this.default.alignment == 'top')
            alignment = 'top: 95px';
        else if(this.default.alignment == 'bottom')
            alignment = 'bottom: 0px';
        else if(this.default.alignment == 'center')
            alignment = 'top: 40%';
        var notificationBarStyles = 'left: 50%;position: fixed;width: 90%;z-index: 1000;transform: translate(-50%, -50%);background: rgba(17,21,27,0.95);background: -webkit-linear-gradient(rgba(44,49,64,1) 0%,rgba(17,21,27,0.95) 100%);background: -o-linear-gradient(rgba(44,49,64,1) 0%,rgba(17,21,27,0.95) 100%);background: linear-gradient(rgba(44,49,64,1) 60%,rgba(17,21,27,0.95) 100%);padding: 20px;border-radius:  5px;box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);color: '+this.default.color+';max-width: 700px;'+alignment+';font: 400 12px/1.2 Roboto,sans-serif;';

        if(this.default.alignment == 'center')
        {
            var overlay = document.createElement('div');
            overlay.id = this.default.cookieName+'Center';
            overlay.style.cssText = 'position:absolute; top:0px; left:0px; right:0px; bottom:0px;background:rgba(0,0,0,0.7);z-index:999';
            var overlayFragment = document.createDocumentFragment();
            overlayFragment.appendChild(overlay);
            document.body.appendChild(overlayFragment.cloneNode(true));
        }

        var cookieNotifier = document.createElement('div');
        cookieNotifier.id = this.default.cookieName;
        cookieNotifier.style.cssText = notificationBarStyles;

        if(!this.translation[this.default.lang] || !this.privacy[this.default.company][this.default.lang])
            this.default.lang = 'en';


        var innerHtml = '<div style="width: 100%;height: auto;box-sizing: border-box;"><div style="float: left; width: 80%;">';
        var innerText = this.translation[this.default.lang];
        innerText = innerText.replace('{privacyUrl}', this.privacy[this.default.company][this.default.lang])
        innerHtml += innerText;
        innerHtml += '</div><div id="closeCookieInfo" onclick="gamertokenCookies.acceptOverlay();" style="bobox-sizing: border-box !important;float: right;width: 20%;text-align: center;margin: 10px auto 0px;box-shadow: 1px 1px 4px rgba(0,0,0,0.3);text-decoration: none;border-radius: 20px;padding: 7px 25px;cursor: pointer;padding: 7px 35px;font-size: 18px;background: #01c6db;display: block;cursor: pointer;color: #fff;width: auto;padding: 5px 25px;text-decoration: none;"><a href="#" style="color: #fff;text-decoration: none;font: 700 15px/18px Verdana;display: block;">';
        innerHtml += this.default.confirmText;
        innerHtml += '</a></div></div><div style="clear:both;"></div>';

        cookieNotifier.innerHTML = innerHtml;

        var fragment = document.createDocumentFragment();
        fragment.appendChild(cookieNotifier);
        document.body.appendChild(fragment.cloneNode(true));
    },
    hideOverlay:function () {
        var op = 1;
        var el = document.getElementById(gamertokenCookies.default.cookieName);
        if(this.default.alignment == 'center')
            var elCenter = document.getElementById(gamertokenCookies.default.cookieName+'Center');
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                el.style.display = 'none';
                if(gamertokenCookies.default.alignment == 'center')
                    elCenter.style.display = 'none';
            }
            el.style.opacity = op;
            el.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 10);
    },
    acceptOverlay:function () {
        gamertokenCookies.hideOverlay();
        var date = new Date();
        var days = 2;
        date.setTime(date.getTime()+(days*24*60*60*1000));
        document.cookie = gamertokenCookies.default.cookieName+"=true; expires="+date.toGMTString()+"; path=/; domain="+gamertokenCookies.default.domain;
        if(gamertokenCookies.default.onCall)
            gamertokenCookies.default.onCall();
    }
};

gamertokenCookies.default = {
    backgroundcolor: 'rgba(20, 16, 16, 0.8)',
    color: '#fff',
    confirmText: 'OK',
    denyText: false,
    domain: 'example.com',
    document: false,
    cookieName: 'gamertokenCookies',
    onCall: false,
    alignment: 'top',
    conclusive: false,
    lang: 'en',
    company: 'laurelfoundation',
};

gamertokenCookies.translation = {
    de: "Mit Ihrer weitergehenden Nutzung dieser Website stimmen Sie der Verwendung von Cookies auf Ihrem Gerät zu. Wenn Sie die Cookie-Einstellungen in Ihrem Browser ändern, sind bestimmte Funktionen möglicherweise nicht mehr verfügbar. Bitte lesen Sie unsere Datenschutzerklärung, um weitere Informationen zu erhalten. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Datenschutzerklärung</a>",
    en: "With your continued use of this site you agree to our use of cookies on your device. If you change the cookie settings in your browser certain features might no longer be available. Please read our Privacy Policy for further information. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Privacy Policy</a>",
    fr: "En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies sur votre appareil. Si vous modifiez les paramètres de cookies dans votre navigateur, certaines fonctionnalités peuvent ne plus être disponibles. Veuillez lire notre politique de confidentialité pour plus d'informations. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Vie privée</a>",
    it: "Con l'utilizzo di questo sito accetti il nostro uso dei cookie sul tuo dispositivo. Se modifichi le impostazioni dei cookie nel tuo browser alcune funzionalità potrebbero non essere più disponibili. Si prega di leggere la nostra politica sulla privacy per ulteriori informazioni. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Informativa sulla privacy</a>",
    pl: "Kontynuując korzystanie z tej witryny, wyrażasz zgodę na używanie przez nas plików cookie na Twoim urządzeniu. Jeśli zmienisz ustawienia plików cookie w przeglądarce, niektóre funkcje mogą być niedostępne. Więcej informacji możesz znaleźć w naszej Polityce prywatności. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Polityka prywatności</a>",
    ru: "Продолжая просматривать наш сайт, вы соглашаетесь на использование файлов cookie. Вы можете узнать больше, прочитав нашу политику в отношении файлов cookie. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Защита данных</a>",
    ar: "With your continued use of this site you agree to our use of cookies on your device. If you change the cookie settings in your browser certain features might no longer be available. Please read our Privacy Policy for further information. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Privacy Policy</a>",
    es: "Con el continuo uso de este sitio, aceptas el uso de cookies en tu dispositivo. Si cambias la configuración de las cookies en tu navegador, ciertas características podrían no estar disponibles. Por favor lee nuestras Políticas de Privacidad para más información. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Privacidad</a>",
    sv: "With your continued use of this site you agree to our use of cookies on your device. If you change the cookie settings in your browser certain features might no longer be available. Please read our Privacy Policy for further information. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Privacy Policy</a>",
    tr: 'Bu siteyi kullanmaya devam ettiğinizde, cihazınızda çerez kullanımını kabul etmiş olursunuz. Tarayıcınızın çerez ayarlarını değiştirirseniz, bazı özellikler artık kullanılamayabilir. Daha fazla bilgi için lütfen Gizlilik Politikamızı okuyunuz. <a style=\'border-bottom: 1px dotted #01c6db;color: #01c6db;\' href=\'{privacyUrl}\' target=\'_blank\'>Privacy Policy</a>',
    cs: "With your continued use of this site you agree to our use of cookies on your device. If you change the cookie settings in your browser certain features might no longer be available. Please read our Privacy Policy for further information. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Privacy Policy</a>",
    hr: "Ova stranica koriste kolačiće za pružanje boljeg korisničkog iskustva i funkcionalnosti. Postavke kolačića mogu se kontrolirati i konfigurirati u vašem internetskom pregledniku. Nastavkom pregleda internet stranica Ova stranica, smatra se da ste suglasni sa uporabom kolačića. Za daljnje informacije pročitajte našu Pravila o privatnosti. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Zaštita Podataka</a>",
    bs: "Ova stranica koriste kolačiće za pružanje boljeg korisničkog iskustva i funkcionalnosti. Postavke kolačića mogu se kontrolirati i konfigurirati u vašem internetskom pregledniku. Nastavkom pregleda internet stranica Ova stranica, smatra se da ste suglasni sa uporabom kolačića. Za daljnje informacije pročitajte našu Pravila o privatnosti. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Zaštita Podataka</a>",
    pt: "Com seu uso contínuo desse site, você concorda e aceito em usar cookies em seu dispositivo. Caso altere a configuração de cookies em seu navegador, alguns recursos ficarão indisponíveis. Favor leia nossa Política de Privacidade para mais informações. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Privacidade dos dados</a>",
    sk: "With your continued use of this site you agree to our use of cookies on your device. If you change the cookie settings in your browser certain features might no longer be available. Please read our Privacy Policy for further information. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Privacy Policy</a>",
    nl: "With your continued use of this site you agree to our use of cookies on your device. If you change the cookie settings in your browser certain features might no longer be available. Please read our Privacy Policy for further information. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'></a>",
    hu: "Ezen webhely folyamatos használatával Ön elfogadja a cookie-k használatát az eszközön. Ha módosítja a cookie-beállításokat a böngészőben, bizonyos funkciók már nem állnak rendelkezésre. Kérjük, olvassa el adatvédelmi szabályzatunkat további információkért. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>Titoktartás</a>",
	cn: "当您持续使用本网站，代表您同意我们在您的装置上使用Cookie。 如果您在浏览器中更改Cookie设置，某些功能可能不再可用。 请阅读我们的隐私政策了解更多信息。 <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>私有政策</a>",
	jp: "このサイトのご利用を続ける場合、お客様の端末でCookieを使用することに同意したものとみなされます。ブラウザのCookie設定を変更すると、特定の機能が使用できなくなる場合があります。詳細情報については、プライバシーポリシーをお読みください。 <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>プライバシーポリシー</a>",
	ko: "이 사이트에 접속해 계심에 따라 귀하의 기기에 저장된 쿠키를 사용하는 데 동의하시는 것으로 간주합니다. 브라우저의 쿠키 설정을 변경하실 경우 특정 기능들이 더 이상 작동하지 않을 수 있습니다. 자세한 내용은 저희의 IP 주소 & 쿠키 정책을 통해 확인하시기 바랍니다. <a style='border-bottom: 1px dotted #01c6db;color: #01c6db;' href='{privacyUrl}' target='_blank'>개인정보 처리방침</a>",
};

gamertokenCookies.privacy = {
    laurelfoundation: {
        en: 'https://gamertoken.io/documents/privacypolicy.pdf',
		cn: 'https://gamertoken.io/documents/CN-privacypolicy.pdf',
		jp: 'https://gamertoken.io/documents/JP-privacypolicy.pdf',
		ko: 'https://gamertoken.io/documents/KO-privacypolicy.pdf'
    }
};

$(document).ready(function(){
	   if(gamertokenCookies.default.conclusive && (gamertokenCookies.default.document.cookie.indexOf(gamertokenCookies.default.cookieName) == -1)){
            var links = document.getElementsByTagName("a");
            for(var i=0, max=links.length; i<max; i++) {
                if (links[i].getAttribute('target') != '_blank' && links[i].getAttribute('href') != '#') {
                    links[i].addEventListener('click', gamertokenCookies.acceptOverlay);
                }
            }

            var inputs = document.getElementsByTagName("input");
            for(var i=0, max=inputs.length; i<max; i++) {
                if (inputs[i].getAttribute('type') == 'submit') {
                    inputs[i].addEventListener('click', gamertokenCookies.acceptOverlay);
                }
            }
			
            var buttons = document.getElementsByTagName("button");
            for(var i=0, max=buttons.length; i<max; i++) {
                buttons[i].addEventListener('click', gamertokenCookies.acceptOverlay);
            }
        }
});