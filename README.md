
# RussianBlocker
Detect Russian and Belarussian visitors to block or alert them to protest the war in Ukraine(works by checking timezone and languages as this is the easiest way to do it unlimitedly for free on the frontend, should work 9 times out of 10, except for a few russians near the border)
Disclaimer:might be buggy by 27/03 because of summer time, hopefully this will be behind us by then, or I'll edit the code at that time

Install

`<script src="https://cdn.jsdelivr.net/gh/ob42/RussianBlocker/RussianBlocker.js">`

Usage

    RussianBlocker.redirectToUkrainianAnthem(config/*optional*/)//redirect to a youtube video of the Ukrainian anthem
    
    RussianBlocker.redirectToRussianGovernmentComplaints(config/*optional*/)//first open an alert()(you can customize the message) then redirect the visitors to a complaint form on the russian governement website
    
    RussianBlocker.alert(config/*optional*/);//just open an alert() then let the visitors use the website
    
    if (RussianBlocker.shouldBeBlocked(false)){/*do what you want*/}//with optional boolean argument "alsoBlockBelarussian"

For all methods besides shouldBeBlocked you can use the optional config argument that way:

    {
      customMessage: "default:🇺🇦протестуйте против войны!🇺🇦(protest the war, might not be a perfect translation)",//change the default message for redirectToRussianGovernmentComplaints and alert methods
    
      oncePerDay: true,//set a cookie to redirect/alert the users only once per day
      
      alsoBlockBelarussian: true//if you want to be stricter you can also target Belarus as their governement facilitated the invasion
    }


Feel free to send PR/issues if you see any areas that could be improved
