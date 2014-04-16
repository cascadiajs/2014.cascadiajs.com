# Cross-module testing in Node

* Name      : Ryan Graham
* Twitter   : [@rmgraham][]
* GitHub    : [rmg][]

## Abstract

How do you test related modules in CI when they're still in development? The
solution is a mix of JavaScript, Ruby, Jenkins, and laziness. This talk is about
the approach I've taken at StrongLoop for testing modules against unreleased
versions of their dependencies using feature branches without using an NPM
registry.

 * Why Jenkins?
 * Why Ruby?
 * Why not NPM?
 * How to resolve dependencies
 * How to auto-configure module tests
 * Conventions for maximizing developer & CI happiness

## Speaker Bio

![](https://raw.github.com/cascadiajs/2014.cascadiajs.com/master/images/rmg.png)

I'm leading the DevOps charge at StrongLoop where I'm automating all the things
and helping developers push to production. Some call it tools, some call it
DevOps, and some call it full-stack. I call it "building stuff for others like
me".

[@rmgraham]:http://twitter.com/rmgraham
[rmg]:http://github.com/rmg
