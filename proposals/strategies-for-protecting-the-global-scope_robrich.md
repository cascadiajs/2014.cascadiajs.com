# Strategies for Protecting the Global Scope

* Name      : Rob Richardson
* Twitter   : [@rob_rich](https://twitter.com/rob_rich)
* GitHub    : [robrich](https://github.com/robrich)
* Website   : [robrich.org](http://robrich.org)

## Abstract

In JavaScript, it's really easy to clobber each other as we put things in the global namespace or in standard registries like jQuery plugins.  What if you build a calendar control and I build a calendar control and both are used on a page?  Which wins?  We'll discuss the dangers of polluting the global namespace, and 5 design patterns to avoid it: ignore it, nested objects, immediate invoking function expressions (IIFE), the revealing module pattern, and AMD / CommonJS module loading frameworks.

## Speaker Bio

![Rob Richardson](../images/robrich.png) is a software craftsman building web properties in ASP.NET and Node. He's a frequent speaker at user groups, community events, and conferences, and a diligent teacher and student of high quality software development.  You can find this and other talks on his blog at [http://robrich.org/presentations](http://robrich.org/presentations) and follow him on twitter at [@rob_rich](https://twitter.com/rob_rich).
