#Distance Makes The Heart Grow Fonder: Keeping Apps Isolated On a Single Page

* Name      : Nick Heiner
* Twitter   : [@nickheiner](https://twitter.com/nickheiner)
* GitHub    : [nickheiner](https://github.com/nickheiner)

##Abstract

Most web apps don’t have to worry about sharing the browser with anyone else. They can muck with the query string, introduce global variables (like angular or $), and modify page-level CSS with reckless abandon. This makes development simpler, and most of the time is the right thing to do, because the app will never co-exist with any other app.
Unfortunately, it’s not always possible to live this simply. My team builds a white-label web platform, where our clients can pick and choose apps (or create their own) to compose their site. We want to create a development experience that allows you to write code [as if you have the page all to yourself](http://i.imgur.com/4qri6Qm.png), while safely being able to co-exist with other apps. In this talk, I’d like to share our solution and the snags we encountered.

[I have written a draft of this talk.](https://docs.google.com/document/d/1hxAKiz-iZKB7-pVdmph1nxTF2imKWtG-by8b3KQn1G0/edit)

##Speaker Bio

![Nick profile pic](https://avatars1.githubusercontent.com/u/829827?s=250)

Nick is a web developer at [Opower](http://www.opower.com), where he uses node.js and angular to help people better understand
(and thereby reduce) their energy usage. He lives near Washington DC and enjoys speaking at local meetups.
Prior to Opower, he interned at Google and Microsoft. Nick has contributed to open source projects such as
Bower, Foundation, and Chai.
