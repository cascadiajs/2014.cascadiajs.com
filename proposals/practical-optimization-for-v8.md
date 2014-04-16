#Practical Optimization for v8
## (is it okay to write Javascript yet?)

* Name      : David Manning
* Twitter   : [@davidlymanning][]
* GitHub    : [dlmanning][]
* Website   : [dlmanning.github.io][]

##Abstract

Writing Javascript is fun, but writing performant code that makes efficient use of v8’s JIT compiler is a dark and arcane art. In the absence of clear answers, misinformation and superstition abound. Can we trust microbenchmarks? Should we try to write Javascript like C++? Can sacrificing a chicken on the first full moon of Spring really reduce garbage collection cycles? My talk will absolutely not settle all of these debates!

However, I will provide a few practical strategies everyone can implement to help make their code more efficient. Specifically I plan to discuss:

* Closures vs. the prototype chain
* The benefits of inlining functions and when v8 is doing it for you
* Why functional programming is bad
* Why functional programming is great
* Why optimization isn’t worth worrying about except when it is

##Speaker Bio

![](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/david-manning.png)

I'm an independent Javascript consultant living in Portland, OR. I teach math at Portland Community College. I definitely don't do web development for Somali pirates.

[@davidlymanning]:http://twitter.com/davidlymanning
[dlmanning]:http://github.com/dlmanning
[dlmanning.github.io]:http://dlmanning.github.io
