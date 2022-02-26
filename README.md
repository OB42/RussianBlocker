
# RussianBlocker
Detect Russian and Belarussian visitors to block or alert them and protest the war in Ukraine(works by checking timezone and languages as this is the easiest way to it unlimitedly for free on the frontend, should work 9 times out of 10, except for a few russians near the border)

Install

`<script src="https://cdn.jsdelivr.net/gh/ob42/RussianBlocker/RussianBlocker.js">`

Usage

    RussianBlocker.redirectToUkrainianAnthem(config/*optional*/)//redirect to a youtube video of the Ukrainian anthem
    
    RussianBlocker.redirectToRussianGovernmentComplaints(config/*optional*/)//first open an alert() then redirect the visitors to a complaint form on the russian governement website
    
    RussianBlocker.alert(config/*optional*/);//just open an alert() then let the visitors use the website
    
    if (RussianBlocker.shouldBeBlocked(false)){/*do what you want*/}//with optional boolean argument "alsoBlockBelarussian"

For all methods besides shouldBeBlocked you can use the optional config argument that way:

    {
      customMessage: "🇺🇦протест против войны🇺🇦",//change the default message for redirectToRussianGovernmentComplaints and alert methods
    
      oncePerDay: true,//set a cookie to only redirect/alert the users once per day
      
      alsoBlockBelarussian: true//if you want to be stricter you can also target Belarussia as their governement facilitated the invasion
    }


