# Modularize EVERYTHING, even your website

* Name      : Thorsten Lorenz 
* Twitter   : [@thlorenz][]
* Github    : [thlorenz][]
* Website   : [thlorenz.com][]

## Abstract

The small modules doing one thing approach is good for libraries, but how about when you are building a web site?

In preparation for building the website at my current company, I experimented with how this could be achieved. 
I created [see-eat-sleep] as an example how to separate a web app into smaller feature apps which get pulled together into one web app when going to production.

Seeing that this is possible I applied this approach to the website currently under development with great success. 

### What are the advantages of this approach?

- each feature app module can be developed on, launched and tested in isolation. This not only speeds up development, but allows larger teams to easily work alongside without conflicts.
- tests of each feature run faster
- bugs are easier to find (smaller code base)
- features can be versioned since each of them is hosted separately on npm
- bugs that get introduced are isolated and parts that introduce bugs can be rolled back
- clean architecture is enforced since the boundaries of each feature are physical

### What techniques are used to make this work?

- [browserify] to modularize client side JavaScript
- [handlebars] partials, namespaced server side and precompiled client side to modularize DOM pieces that together make up the page
- [sass-resolve] to modularize `.scss` files (adding sourcemaps to ease development)
- in order for features to communicate, a global event emitter is used

### The talk

Among narrating the points mentioned above, I will use the `see-eat-sleep` app to explain in example how a modularized web site can be built. I will also go into some challenges we encountered and how we overcame them.

## Speaker Bio

![headshot](../images/thlorenz.png)

I have been working with nodejs and JavaScript for over 3 years mostly in my spare time and made it my job about a year
ago.

The fast turnaround from idea to working module has proven addictive for me and led to lots of modules which ended up on
github and/or npm. I also contribute to other awesome open source efforts like [browserify][] to which I added source
map support.

[@thlorenz]:http://twitter.com/thlorenz
[thlorenz]:http://github.com/thlorenz
[thlorenz.com]:http://thlorenz.com

[see-eat-sleep]:https://github.com/thlorenz/see-eat-sleep
[handlebars]:http://handlebarsjs.com/
[sass-resolve]:https://github.com/thlorenz/sass-resolve

[browserify]:https://github.com/substack/node-browserify
