# Clarity in Abstraction.
## Or Don't Repeat Yourself, Separate Concerns, and Other Tired Advice.

* Name      : Nick Niemeir
* Twitter   : [@nickniemeir][]
* GitHub    : [nrn][]
* Website   : [nrn.io][]

##Abstract

Code is not only an asset, it's a liability. Any program is a few untested
assumptions, a couple of copy pasted lines, and some out of place DOM
manipulation away from becoming an unmaintainable nightmare. The bigger the
program the easier it is to slide down that slippery slope. As systems grow you
have to constantly reassess past decisions and evaluate the direction you're
heading to have any hope of maintaining flexibility.

One way to deal with this mess is layers of vocabulary that describe the
problem at each level.  This idea is straight up stolen from Abelson and
Sussman's SCIP.  You solve each problem once, in a reusable and composable
way, and then you build the next level of solutions on those basic parts. In
the end you have the ability to build software that focuses on the issue at
hand, each layer gets to leave the implementation details of the layer below
out of it. This has lots of big advantages, including fixing bugs in one place
to solve them everywhere, having the appropriate level of abstraction to deal
with each problem, and the ability to understand one problem in its entirety
without understanding the rest of the system.

But wait Nick, that's just the small module principle that NPM already supports
so well! Exactly. We're just talking about one way to look at what makes a good
module, and how to draw the lines around your problems in order to leave
yourself with a flexible maintainable program.

This talk will have lots of walking through real code examples, and practical
advice.

##Speaker Bio

![](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/nrn.jpeg)

Nick is a JavaScript nerd. When he isn't at his day job as a JavaScript agent
engineer at New Relic, he is helping friends with their node projects, or
giving his opinions about JavaScript to unsuspecting passers by. His wife
Janice doesn't care about the perils of a large API surface, and while his 6
month old son Felix likes to pair program with him, he is a keyboard hog and
won't write tests.

[@nickniemeir]:http://twitter.com/nickniemeir
[nrn]:http://github.com/nrn
[nrn.io]:http://nrn.io

