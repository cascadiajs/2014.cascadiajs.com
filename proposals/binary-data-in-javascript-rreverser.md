# Binary data in JavaScript

* Name      : Ingvar Stepanyan
* Twitter   : [@RReverser](https://twitter.com/RReverser)
* Github    : [RReverser](https://github.com/RReverser), [jDataView](https://github.com/jDataView)

## Abstract

When I firstly came to JavaScript 5 or 6 years ago, how did it tasks look like? You opened web page, moved mouse over menu, and submenu appeared. You put credentials into login form, their values were taken from this form, submitted to server and if they were not correct, you got "alert" message. 
5 years gone, old JS engines learned to do fast JIT compilation, creation of hidden classes, new JS engines like V8 appeared that allow compilation directly to native code, a lot of other inner operations were completely rewritten and optimized... 
So what changed? Now you open web page, move mouse over menu and submenu... no, it doesn't appear no more, it was ugly! Now it s l o w l y slides down. You put credentials into login form, their values... nope, of course, they are not taken directly, that was disgusting solution! Now they are bound to viewmodel, and submit button calls method from that viewmodel that takes bound values and only then submits them to server. And, of course, there is no more strange "alert" messages, no, now for that you get pretty box with rounded corners. 
Oh yeah, all those changes definitely worth all those years of development and optimizations of JS engines... 
I want to show that JS is now enough old and experienced language to be used for solving really serious tasks. Going to show [demo](https://github.com/RReverser/mpegts) with real-time video stream conversion and playing, tell how it works, about libraries for easy work with binary structures of any complexity and to show some other demos like reading/creating TAR archives, manual BMP parsing etc.

## Speaker Bio

![RReverser](../images/rreverser.jpg)

Ingvar is Web Developer currently working at [Universal Mind](http://www.universalmind.com/), reverse engineer, organizer and speaker at IT events. He believes in JavaScript as full-featured cross-platform language that can be used not just for usual UI stuff but absolutely for any tasks from media processing and augmented reality to console utilities and browser-based serverless applications for low-level manipulating of complicated binary data including any popular modern formats.