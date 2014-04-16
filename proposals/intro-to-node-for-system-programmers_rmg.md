# Intro to Node for System Programmers

* Name      : Ryan Graham
* Twitter   : [@rmgraham][]
* GitHub    : [rmg][]

## Abstract

You know C/C++ and are comfortable with the basics of select(2), fork(2), and
exec(3). Maybe you've written a daemon or two, or maybe you've even hacked on
kernel code. But you're tired of writing 50 lines of boilerplate just to *have*
an event loop, and dozens more for every type of event handler without actually
doing anything useful.

This talk introduces Node from the perspective of a systems programmer, rather
than a front-end or web developer, with an emphasis on gotchas, such as:

* Where's my select(2)? (or The event loop you didn't write)
* How do I popen(3) or fork(2)/exec(3)? (or child_process.fork()/child_process.exec()
  aren't what you think they are)
* How do I socket()/bind()/listen()/accept()? (or Yes, it really can be that easy)

## Speaker Bio

![](https://raw.github.com/cascadiajs/2014.cascadiajs.com/master/images/rmg.jpeg)

I'm leading the DevOps charge at StrongLoop where I'm automating all the things
and helping developers push to production. Some call it tools, some call it
DevOps, and some call it full-stack. I call it "building stuff for others like
me".

[@rmgraham]:http://twitter.com/rmgraham
[rmg]:http://github.com/rmg
