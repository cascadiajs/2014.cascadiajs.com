#Mind Your Microseconds: a Microprofiler for Node.js

* Name      : Alex Fernández
* Twitter   : [@pinchito][]
* GitHub    : [alexfernandez][]
* Lanyrd    : [pinchito][]

##Abstract

We have all heard that node.js is fast, but what do people exactly mean with "fast"?
It is very instructive to compare a highly optimized program written in C (memcached)
to our own node.js clone server (nodecached).
We can profile and optimize node.js code, reducing the wide margin with memcached,
and reaching 30k rps on a single core; but we can never close the gap entirely.

Once you go above 1000 requests per second you have to make every microsecond count.
Profilers are very useful tools, but they tend to generate too much information.
In this talk we will show how to profile your code in a different way,
focusing on hot sections and digging deeper in every iteration.
In the process we will discuss the merits of node.js, JavaScript
and optimization techniques in general. 

##Speaker Bio

![](https://raw.github.com/cascadiajs/2014.cascadiajs.com/master/images/alexfernandez.png)

Alex Fernández is a Spanish software engineer with more than 15 years of experience.
After working many years for large companies he has met his biggest scalability challenge
as a senior developer for MediaSmart Mobile,
a startup that routinely serves 20K requests per second.
He is still a shameless tinkerer.

[@pinchito]:http://twitter.com/pinchito
[alexfernandez]:http://github.com/alexfernandez
[pinchito]:http://lanyrd.com/profile/pinchito/

