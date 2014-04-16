# Constantly Losing Stuff
## Lessons learned developing and using continuation-local-storage in Node

* Name      : Forrest L Norvell
* Twitter   : [@othiym23][]
* GitHub    : [othiym23][]

## Abstract

We've all kind of gotten our heads around the fact that asynchronous I/O in
JavaScript can be both fast and efficient. But there are some aspects of it
that are still hard! For instance, if you want to track the state of, say, an
individual web request, you might be able to get by with sticking the data onto
the side of the request object. But what if you need to pass that data on to,
say, a database call, where the request won't be in scope? What then?

Continuation-local storage is one answer. Using a simple module, maybe a few
shims, and a powerful and experimental new feature of the Node runtime (or a
powerful and experimental bit of monkeypatching), you can now create namespaces
that allow you to pass data through asynchronous call chains in Node without
modifying any intervening code or abusing the request or response objects! And
it turns out that something similar will work in the browser across XHR calls!

This talk will explain why there is a problem to be solved here, and how CLS
goes about solving it. It will also use CLS to illuminate the underlying
asynchronous listener patterns that make it possible, both in Node and in the
browser (using Angular's Zones.js). There are some tricky concepts at play, but
the basic API is surprisingly simple and is in production use in thousands of
apps (even if not all of their developers know it).

## Speaker Bio

![](https://raw.github.com/cascadiajs/2014.cascadiajs.com/master/images/othiym23.png)

Forrest has been a web developer and web development nerd since 1994. While he
developed continuation-local storage as an offshoot of his work for New Relic,
these days he helps npm deal with being one of the most popular packaging
systems on the planet by working for npm, Inc.

[@othiym23]:http://twitter.com/othiym23
[othiym23]:http://github.com/othiym23

