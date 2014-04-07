# We Need to Stop (Manually) Writing AJAX

* Name     : Ian Bentley
* Twitter  : [@idbentley][]
* GitHub   : [idbentley][]
* Company  : [mongodb.org][MongoDB, Inc.]

## Abstract

Writing AJAX manually is error prone, time consuming, and difficult to test. It requires defining a
detailed API in some backend framework, in addition to the AJAX code itself on the frontend, which
ends up being the worst kind of callbacks - laced with conditional statements, and often complex logic.
Worst of all, if you make even a simple mistake in parsing the data passed from your frontend, you
end up with a cringe worthy 500 exception with a infinite spinner, or a "Whoops... Something went
wrong dialog". All this before you've even written any business logic!

There has to be a better way.

Node.js came to us with the promise that we can write our frontend and our backend in the same language,
that we can share libraries between the two codebases. In this talk I'll propose a simple object
oriented API abstraction that allows us to describe the intent of an API without writing any RESTful
endpoints, any query param parsing, no more worrying about best practices in naming conventions, or
concern about encoding json responses properly. Using simple inheritance, a declarative API delegates
all that hard work to a standard library, and lets you get on with writing your application logic.

## Speaker Bio

![](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/idbentley.png)

Hailing from the great white north, I've been writing full stack code for web applications longer than
I can well remember.  Currently hacking internal apps at MongoDB, Inc. Interests include Linux, Guitar
twangs, baking, and frenzied softball playing. I think a lot about Javascript, and the importance of
making it easier to write robust web applications.

[@idbentley]:http://twitter.com/idbentley
[idbentley]:http://github.com/idbentley