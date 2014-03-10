#WebRTC DataChannels or: How I Learned To Stop Worrying And Flap My Arms

* Name      : Alastair Coote
* Twitter   : [@_alastair](http://twitter.com/_alastair)
* Github    : [alastaircoote](https://github.com/alastaircoote)
* Website   : [blogging.alastair.is](http://blogging.alastair.is)

##Abstract

WebRTC isn't just for webcam video - you can use it for peer to peer transfer of any data you want. Like, say, information about when users flap their arms. 

Let's backtrack. Remember Flappy Bird? Remember how annoying it was? Now imagine a version you play by flapping your arms instead of tapping your phone screen: [Flappy Arms](http://bit.ly/flappyarms). It pairs up your computer with your phone, letting you use your phone like a Wii controller. Initially it used WebSockets, but there was a problem: lag.

Now, if an infuriatingly annoying game is worth doing, it's worth doing well - so I started looking into solutions. WebRTC DataChannels let the game communicate peer to peer, WebSocket-style connections without passing through a server. I'll talk through how I set them up, the benefits, the problems, and why I ended up with a hybrid system that combines WebSockets with DataChannel connections.

This talk will be based on [a blog post I wrote](http://blogging.alastair.is/webrtc-datachannels-or-how-i-learned-to-stop-worrying-and-flap-my-arms/), with more live demos - and yes, I promise there will be arm flapping on stage.


##Speaker Bio

![alastaircoote](https://raw.github.com/alastaircoote/2014.cascadiajs.com/master/images/alastaircoote.jpg)

Alastair is a mobile-focused developer at The New York Times. He grew up in the UK and now lives in New York, but in between that spent two years living in British Columbia - and still misses it.

He [blogs](http://blogging.alastair.is), [tweets](http://twitter.com/_alastair) and likes to play around with stuff like [data-crunching on maps](http://experimenting.alastair.is/citibike/), [live-tweeting 3D maps](http://www.thetweetometer.com/) and [mean-spirited PSAs](http://www.ismytwitterpasswordsecure.com/). 

