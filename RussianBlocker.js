const RussianBlocker = (function (){
    //this should work most of the time, but will ignore the closest cities to the Ukrainian border as there is some overlap in timezone/languages near the border
    //this is the easiest way to do this without limitations or without paying for an API
    const isRussian = () => (new Date().getTimezoneOffset() < -120 && navigator.language == "ru");
    
    //I'm aware that Belarus is not Russia but they facilitated the invasion
    const isBelarussian = () => navigator.language == "be";
    
    const shouldBeBlocked = (alsoBlockBelarussian) => {
        return isRussian() ||  (alsoBlockBelarussian && isBelarussian()) ? true : false;
    };
    
    const shouldBeNotifiedToday = (oncePerDay) => {
        if (!oncePerDay) return true;
        var x = getCookie("RussianOrBelarussian");
        if (x == "" || x == null) {
            setCookie("RussianOrBelarussian", true, 1);
            return true;
        }
    }
    
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }
    
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    const alertWithCustomMessage = (config) => alert(config.customMessage ? config.customMessage : "🇺🇦протестуйте против войны!🇺🇦");

    const redirectToUkrainianAnthem = (config = {}) => {
        if (shouldBeNotifiedToday(config.oncePerDay) && shouldBeBlocked(config.alsoBlockBelarussian)) window.location = "https://www.youtube.com/watch?v=xDeQVaoTvJM";
    }

    //redirect Russians to government.ru contact form to push them to protest
    const redirectToRussianGovernmentComplaints = (config = {}) => {
        if (shouldBeNotifiedToday(config.oncePerDay) && shouldBeBlocked(config.alsoBlockBelarussian)) {
            alertWithCustomMessage(config)
            window.location = "http://services.government.ru/letters/";
        }
    }

    const alertRussians = (config = {}) => {
        if (shouldBeNotifiedToday(config.oncePerDay) && shouldBeBlocked(config.alsoBlockBelarussian)) {
            alertWithCustomMessage(config)
        }
    }
    return {
        redirectToUkrainianAnthem,
        redirectToRussianGovernmentComplaints,
        alert: alertRussians,
        shouldBeBlocked
    };
})();
