#Dependencies, Dependencies Dependencies!

* Name      : Dave Foley
* Twitter   : [@davidmfoley](https://twitter.com/davidmfoley)
* GitHub    : [davidmfoley](https://github.com/davidmfoley)

##Abstract

Why do codebases become harder to modify as they grow?
We have all experienced codebases that grew to the point that they "got away from us". How does this happen?

There are many answers, but since this is a 30 minute talk, we will pretend that the world is a simple place and focus only on the most important one:

*"Dependencies, Dependencies, Dependencies!"*

As codebases grow, they are primarily constrained by the dependency relationships between different functions, modules and packages, which make change more expensive and error-prone.
Understanding these relationships and their common patterns is an important step toward building better software and, more often, improving less-good software.

In this talk, I will cover:

- What is meant by "dependency".
- The meaning of "good" software design and how it relates to dependencies.
- A brief, incomplete, and totally biased history of object-oriented design thinking wherein I support my points and completely ignore and/or ridicule any contrary opinions.
- The main patterns for dependency management in javascript and the pros and cons of each.
- The application of all of the above to building and maintaining software "in the real world".

Throughout, I will show interesting visualizations of the dependency graphs of several javascript codebases, including a fairly large closed-source monolith and some well-known npm packages. I will briefly talk about the tool I built for analyzing such dependencies, [trucker](https://github.com/davidmfoley/node-trucker).

Due to unpopular demand, there will be no coffeescript in my talk this year. There will be no flying robots, remote-controlled segways, or 3D-printed turing machines. There will be lots of funny bits, in both the "laughing at me" and "laughing with me" senses. I will also try reasonably hard not to cuss on stage this time.

##Speaker Bio
![Dave profile pic](../images/davidmfoley.png)

Dave has been fortunate to be allowed to write code, lead teams, and build companies for over twenty years, despite his bad attitude, potty mouth, and lack of education. He was previously CTO of Substantial, a 60-person digital product studio in Seattle and San Francisco. He is available for interesting freelance work.
