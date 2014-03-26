#Automating Frontend Performance Testing 

* Name      : Parashuram N
* Twitter   : [@nparashuram](http://twitter.com/nparashuram)
* GitHub    : [axemclion](http://github.com/axemclion)
* Website   : [nparashuram.com](http://nparashuram.com)

##Abstract

### TL;DR
Ways to fetch and tabulate web performance metrics every time a web site is deployed; and making it part of a continuous integration system; to check performance regressions. 

### Long Version
When shipping, developers usually care about backend performance and scalability. With tools like YSlow and Page Speed, front end performance engineering got the spotlight. However, even today, front end developers have to check the developer tools timeline or the confusing about:tracing graphs to see how smooth their web sites are. This is still hard to measure and it is painfully easy to slow down a smooth feeling webpage in the battle to make it pretty.

During this talk, I would detail my experiments with using a NodeJS port of Chromium Telemetry Smoothness and Loading benchmarks and how they could be integrated into a continuous integration system to get useful graphs. The fact that this NodeJS tool works on ‘cloudified’ browsers, makes the deal even sweeter. The idea is to have a way to see how fast a developer slows down their website over a series of commits :)

### Links
* (Browser Performance)[http://github.com/axemclion/perfjankie] tool
* (Bootstrap performance over the years)[http://axemclion.github.io/bootstrap-perf] using the tool above
* Using the tool with (Karma for Angular)[http://github.com/axemclion/karma-telemetry]
* (Blog post about Automating performance)[http://blog.nparashuram.com/2014/01/making-frontend-performance-testing.html]

##Speaker Bio

!()[https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/axemclion.png]

Parashuram is a Senior Program Manager at Microsoft Open Technologies Inc and a front end developer. He loves to work on open source projects both as a part of his day job and as his hobby projects. He is a front end developer and like experimenting with making web applications do what they could not.