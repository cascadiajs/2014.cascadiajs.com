#A GIF Odyssey

* Name      : Glen Maddern
* Twitter   : [@glenmaddern](https://twitter.com/glenmaddern)
* GitHub    : [geelen](https://github.com/geelen)
* Website   : [glenmaddern.com](http://glenmaddern.com/)

##Abstract

This talk is about pursuing a dumb idea to its extremes. In this case, the dumb idea was to scrape GIFs off Tumblr, play them back fullscreen, and beat-match them to music from Rdio. An instant GIF party, if you will. It’s been my hobby project for over a year, and covers a huge range of web technologies.

We’ll explore some of the things I’ve learned along the way. Such as:

- How inflexible, inefficient the GIF format is, but how ubiquitous and beautiful GIFs themselves are
- Writing a binary GIF parser in JS vs using Emscripten to compile existing C code
- Repurposing CloudFront to circumvent same-origin policy problems and proxy someone else’s CDN
- Wrapping up complicated JS logic into a Web Component with a pleasing API
- Synchronising audio, metadata, GIFs and resources from 3 external APIs within a requestAnimationFrame loop
- The incredible depth of audio analysis information available from the EchoNest API
- Using Heroku and a few lines of NodeJS to refactor an external API
- The potential of using a computer’s microphone to do ambient beat detection of music playing elsewhere in the room

I hope you learn something along the way too.

##Why I think this is a good talk

This is a topic I'm passionate about. I believe side projects can be the best way to explore and learn new technologies, and the more fun the project, the more reason to keep exploring it. This has been the most fun side-project I've ever done, and I've learned an incredible amount. It's all made possible because of the ubiquity of JS and the power of browsers, and I want to convey a sense of possibility and excitement to the audience.

I have presented this topic at Mountain West JS and JSConf AU, and also spun off a project called X-Gif - a polymer component for flexible GIF playback. This was some of the feedback:
- https://twitter.com/marcysutton/status/454113091572072448
- https://twitter.com/brianleroux/status/454112698779725824
- https://twitter.com/jbasdf/status/446377858265391104
- https://twitter.com/jedgar/status/446060150622027776
- https://twitter.com/HIGGDOTTEL/status/446800778003759104

While I have presented this topic before, the talk itself changes as I discover and tackle new parts of the problem. So far I've been really pleased with the way it's been received, and I'd love to present it to a new audience.

##Speaker Bio

![Photo of Glen Maddern](https://raw.github.com/cascadiajs/2014.cascadiajs.com/master/images/glenmaddern.jpg)

Glen Maddern is an independent web developer from Melbourne, Australia, with a background in mathematical simulations and distributed computing. Since 2009, he's been working exclusively on the web and most recently, almost entirely on the front-end. He believes there's never been a more potent target for ideas than the browser and the web, and loves the incredible pace at which new ideas are emerging, and the new ways ideas can be demonstrated, shared and built upon. He runs the Melbourne AngularJS meetup and was an organiser of the inaugural CSSConf AU.
