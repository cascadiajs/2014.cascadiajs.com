# Your Build is Growing Up - Bundling JavaScript Web Applications for Production and Beyond

* Name      : Ryan Roemer
* Twitter   : [@ryan_roemer][]
* Github    : [ryan-roemer][]
* Website   : [loose-bits.com][]

## Abstract

Thanks to great tools like Browserify and RequireJS, bundling small  JavaScript web applications into a single file for production has become straightforward and relatively easy.

However, as web application logic continues to massively shift to the frontend, we are seeing the rise of medium-to-massive JavaScript code bases that can become quite difficult to wrangle when it comes time for deployment and real world use. And, we're running into more and more scenarios where a "single bundle to rule them all" just doesn't have a good application fit.

In this talk, we'll tackle the tough questions about making code bases of all sizes flexible, nimble, and ready for battle:

* What happens once an app outgrows a single JavaScript bundle?
* How do we choose where to place dependencies, and how many different bundles to create?
* How do we decide which JavaScript resources to lazy load? How about for the mobile web?
* How do we package and load internationalization language packs?
* How can we make large builds still developer / debugging friendly, even in production?
* How do I extend / customize my build framework?

Fortunately, RequireJS is the swiss army knife we need once our JavaScript build grows beyond the "happy path" of our existing bundle tools. I will discuss some experiences from coordinating a team of 40 developers writing over 350 JavaScript files and over 20,000 lines of code, all of which is controlled by a single JavaScript infrastructure and RequireJS build.

We'll look at the various lessons learned that are applicable to JavaScript applications of **any size** that need "a bit more of the advanced stuff". We'll talk about slicing and dicing multiple bundles, allowing runtime defined JavaScript code injection, lazy loading rarely used resources. Finally, we'll use deep dependency introspection to enforce development conventions and make informed decisions about what should be included where.

## Speaker Bio

![ryan-roemer](../images/ryan-roemer.jpg)

Ryan is the CTO and co-founder of [Formidable Labs][formidable], a boutique
JavaScript development shop in (the delightfully weird neighborhood of) Fremont
in Seattle, WA. He helps lead the [Seattle Node.js Meetup][seanode] and is the
author of ["Backbone.js Testing"][bb-testing], a comprehensive test development
guide for modern Backbone.js web applications.

Ryan architects full-stack JavaScript applications and backend Node.js services,
and leads frontend development groups ranging from small startups to Fortune 500
engineering teams. Previously, Ryan was a distributed systems engineer, and in
his deep, dark past was a patent attorney, although it has been a long time
since he has put on his "lawyer" hat.

[@ryan_roemer]: http://twitter.com/ryan_roemer
[ryan-roemer]: http://github.com/ryan-roemer
[loose-bits.com]: http://loose-bits.com
[formidable]: http://formidablelabs.com/
[seanode]: http://www.meetup.com/Seattle-Node-js/
[bb-testing]: http://www.amazon.com/Backbone-js-Testing-Ryan-Roemer/dp/178216524X
