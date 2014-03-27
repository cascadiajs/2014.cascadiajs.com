#Adventures in Building a White-Label Web Platform with Node and Angular

* Name      : Nick Heiner
* Twitter   : [@nickheiner](https://twitter.com/nickheiner)
* GitHub    : [nickheiner](https://github.com/nickheiner)

##Abstract

My team builds a white-label product that is embedded into our client’s sites. Our legacy web app is a giant Java/Spring monolith. It worked for a while, but soon started running into scaling concerns with our ability to customize our product to fit our clients’ needs.
To solve the problem, we’re building a new system in Node and Angular, with help from Grunt, Yeoman, Sass, Browserify, and (previously) Bower. Instead of a monolithic set of JSPs, we provide a node.js sdk that lets anyone build a widget without knowing anything about how our general tech stack works. I would like to:
* Explain our system’s architecture and the challenges we’ve faced building it.
* Tell the story of our evolution from a bower-centric deploy system to an npm/browserify-centric one.
* Describe the challenges of isolating js and css components from one another on the page, and talk about the solutions we’ve found.
* Discuss the benefits of taking advantage of npm’s affordance for composing a system out of many tiny, focused modules

##Speaker Bio

![Nick profile pic](https://avatars1.githubusercontent.com/u/829827?s=250)

Nick is a web developer at [Opower](http://www.opower.com), where he uses node.js and angular to help people better understand
(and thereby reduce) their energy usage. He lives near Washington DC and enjoys speaking at local meetups.
Prior to Opower, he interned at Google and Microsoft. Nick has contributed to open source projects such as
Bower, Foundation, and Chai.
