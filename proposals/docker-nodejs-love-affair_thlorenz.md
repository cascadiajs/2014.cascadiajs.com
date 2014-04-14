# The docker and nodejs <3 affair talk 

* Name      : Thorsten Lorenz 
* Twitter   : [@thlorenz][]
* Github    : [thlorenz][]
* Website   : [thlorenz.com][]

## Abstract

[Docker][] is the newest kid on the block regarding deployment tools.

Coupled with nodejs you can do pretty cool stuff, like launch multiple versions of your website at the same time in
order to figure out when a visual bug was introduced.

I've been working on making that super simple with [spinup][] supported by [dockops][], [dockerify][] and others.

I will talk about docker itself, how it compares to VMs and how it fits in with nodejs.  I'll use above mentioned and
other projects to show what's possible now.  Additionally I'll introduce awesome ideas that are now implementable to
hopefully get more people on board with the docker/nodejs love affair.

### The talk

Never want to hear "works on my machine" anymore?

Want to know which version introduced a UI bug right after you discover it in order to narrow down the commit that introduced it?

Want all this without having to set this up manually either locally or on a CI server?

If you answered yes to any of these questions, this talk is for you.

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

[Docker]:https://www.docker.io/
[spinup]:https://github.com/thlorenz/spinup
[dockops]:https://github.com/thlorenz/dockops
[dockerify]:https://github.com/thlorenz/dockerify

[browserify]:https://github.com/substack/node-browserify
