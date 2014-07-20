# Decisions, Open Source, Graph Theory, and Static Analysis

* Name      : Charlie Robbins
* Twitter   : [@indexzero](http://twitter.com/indexzero)
* GitHub    : [indexzero](http://github.com/indexzero)
* Website   : [http://sudomakethought.com/](http://sudomakethought.com)

## Abstract

Decisions. Both authors and consumers of Open Source modules have to make them almost every day. Modules have gotten smaller and that's a good thing, but it also means that more and more of these decisions have to be made. This presents problems for both sides of the table.

First, many module authors are completely unaware with respect to how their modules(s) are being used and what constitutes a "breaking change" for their user base. Second, users are basing their decisions on subjective data: who wrote it, how many people have starred it or are watching it, and which people in thier own personal networks are using it.

![](https://i.cloudup.com/_A9IkZpSud-1200x1200.png)

While in many cases these are satisfactory decision making criteria they suffer from fundamental blind spots that can be improved with basic machine focused tooling to show relationships between modules through using static analysis and graph theory on a very large existing dataset &mdash; npm.

## Speaker Bio

Charlie is the Founder & CEO of [Nodejitsu](https://nodejitsu.com). An open source enthusiast, he the curator of [EmpireJS](http://2014.empirejs.org), [EmpireNode](https://empirenode.org) as well as the author of many popular Node.js modules such as [forever](https://github.com/nodejitsu/forever), [winston](https://github.com/flatiron/winston), [nconf](https://github.com/flatiron/nconf), and [node-http-proxy](https://github.com/nodejitsu/node-http-proxy). Before falling in love with Node.js & Javascript he was a developer in the enterprise software world, where he worked for Microsoft and consulted at many large financial institutions.