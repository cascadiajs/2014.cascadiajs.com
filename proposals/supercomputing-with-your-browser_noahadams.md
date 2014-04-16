# Just Some General Purpose Supercomputing With Your Browser

* Name      : Noah Adams
* Twitter   : [@noah_adams][]
* GitHub    : [noahadams][]

## Abstract

Advancements in JavaScript engines, and APIs for communications and asynchronous workers have made distributed computing with the browser a reality. While others have implemented distributed hash tables and peer to peer CDNs, In this presentation I will outline the architecture of, and demonstrate a bare bones, but general purpose, distributed batch queue system, where browsers play the role of agents and clients.

We will discuss:

- jobs, agents and scheduling in a distributed batch-queue system
- a sandboxed agent capable of accepting jobs and streaming output, implemented using web workers and web sockets
- a simple job controller and scheduler implemented with node.js
- a job creation, submission, and output handling library for the browser
- an interactive demonstration showing live streaming of output from a set of nodes using the system

## Speaker Bio

![](https://raw.github.com/cascadiajs/2014.cascadiajs.com/master/images/noahadams.png)

Noah makes very much unintended use of the DOM and crafts suspiciously long URLs as an engineer on Mobify's product team. He used to do distributed computing at Apple, and in his spare time he likes to spend far too long scanning photographic negatives.

[@noah_adams]:http://twitter.com/noah_adams
[noahadams]:http://github.com/noahadams