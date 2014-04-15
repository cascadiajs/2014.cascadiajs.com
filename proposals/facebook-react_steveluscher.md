#Rewiring Your Brain For React

* Name      : Steven Luscher
* Twitter   : [@steveluscher][]
* GitHub    : [steveluscher][]
* Website   : [Leanpub][]

##Abstract

Having borrowed from game engines and graphics libraries, Facebook's React library offers a whole new way to think about rendering and updating data-driven user interfaces on the web. In this talk, we will study examples of the React approach, as I gently rewire your brain to think about building UI in terms of describing it, and to worry less about keeping track of the DOM.

React embraces a rendering style called “immediate mode” that moves the management of your interface state out of the DOM and into Javascript, where performance is high enough that you can get away with murder. Between updates, React computes and schedules the smallest batch of operations required to keep the display up to date, so you can spend less time fishing through the DOM, and more time building great apps.

##Speaker Bio

![Photograph of Steven Luscher](https://raw.github.com/cascadiajs/2014.cascadiajs.com/images/steveluscher.png "Photo by Phillip Chin (http://www.chinphoto.com)")

I build web and mobile applications using HTML, CSS, Javascript, Ruby, and Objective-C. En-route to becoming a programmer, I made stops along the way to pursue formal education in graphic design, mathematics, and pedagogy; experiences which have served me well in the area of web application development.

In 2013, I delivered a [conference talk](https://github.com/steveluscher/react-supervanjs-2013) about React at Super VanJS. I currently work with a bunch of nerds at [Leanpub][], building a mammoth React-based application using Coffeescript, JSX, Node, and MongoDB.

[@steveluscher]:http://twitter.com/steveluscher
[steveluscher]:http://github.com/steveluscher
[Leanpub]:https://leanpub.com