#Why Use Strict Mode in node?

* Name      : Poornima Venkatakrishnan
* Twitter   : [@poorni_venkat][]
* Github    : [pvenkatakrishnan][]

##Abstract

Strict Mode is a convenient code-inspecting tool while writing javascript.
It:
* Calls out any accidental global leaks
* Helps you write clean code
* Throws an error on common mistakes that you do writing javascript
* Disables some dangerous, to be avoided features (like eval)
* It enforces blocking out unnecessarily exposed information to foreign code. (eg. the properties arguments.callee and arguments.caller cannot be used)
* Some restrictions forces you to write more performant code (eg: you cannot declare functions within a block, like in a for loop). I learnt a lot about it from [Trevor Norris' talk @NodeDay](https://www.youtube.com/watch?v=l2aI4ZWBJng&feature=share&list=UUXe1qKfGweMKTnmRrMw9yOg&index=4)

In this talk, I will go over things you can do and things that are restricted (for a good reason).
I will also show some interesting patterns that can be simulated in javascript by creating immutable objects like:

1. Objects with read only properties
2. Object with non-extensible properties
3. Disabling being able to delete properties on an object

This may become important to you in node while writing modules, since requiring a module, loads it in a global cache and any file requiring the same module will get the cached version.

##Speaker Bio

![Poornima Venkatakrishnan](https://raw.githubusercontent.com/pvenkatakrishnan/2014.cascadiajs.com/master/images/poornima.jpeg)

Poornima is a web application Engineer writing a lot of nodejs code and loving it !! She used to be a mobile engineer but converted to a full-time web enthusiast. When not coding, she is a proud mom of a toddler and also actively participates in fund raising shows for non-profit organizations in the bay area. She is originally from India, but now settled in the Silicon Valley working for Paypal Inc. Currently part of the team that opensourced [Krakenjs](www.krakenjs.com) and working on a solution for 'template specialization' for Krakenjs. Checkout her github repo if you are curious or visit github.com/krakenjs for all active development.

