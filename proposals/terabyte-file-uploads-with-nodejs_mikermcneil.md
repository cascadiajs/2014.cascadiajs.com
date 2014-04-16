#Terabyte File Uploads With Node.js
 - Name: Mike McNeil
 - Twitter: [@mikermcneil](https://twitter.com/mikermcneil)
 - Github: [mikermcneil](https://github.com/mikermcneil/)
 - Website: [michaelmcneil.com](http://michaelmcneil.org)
 - Lanyrd: [mikermcneil](http://lanyrd.com/profile/mikermcneil/)

##Abstract

File uploads in Node.js have gone through some tribulations recently.  Express uses Connect’s bodyParser, which works a lot like PHP file uploads.  Unfortunately, this creates a [security/DoS risk](http://andrewkelley.me/post/do-not-use-bodyparser-with-express-js.html).  What you’ll likely run into first though, is that this solution is completely untenable for the really big file uploads (i.e. anything bigger than a server’s disk space).

####In this talk, I’ll discuss:
- How file uploads work currently with the default Connect bodyParser
- Ways to work around this by deleting temporary files
- How file uploads work currently in Node.js to hosts like S3, OpenStack Swift, Azure, Box.net, DropBox, Gravatar, Google Drive, etc. 
- How to get streaming file uploads working currently (disabling bodyParser)
- Brief explanation of how HTTP multipart form uploads really work
- How we solved the problem with Skipper
  * Skipper is an opinionated variant of Connect's body parser designed to support streaming upload of monolithic files to a compatible blob receiver, while still allowing application code to run in a timely manner, without writing .tmp files to disk.
- Remaining challenges / opportunities
  * streaming thumbnailing
  * streaming encryption (crypto streams)
  * streaming compression (zlib streams - archiver module)

##Speaker Bio
![mikermcneil](../images/mikermcneil.png)

I'm Mike McNeil and I code and make business and stuff.

I got involved in Node.js early on, and after building a few early apps, recognized the need for an MVC solution to normalize patterns, and made a framework for that called Sails.js

I lead a team of very talented individuals at Balderdash, a UX-focused web and mobile studio in Austin, TX. This has funded the ongoing development of the framework, but also provided plenty of excellent opportunities to build out and utilize Sails in production, based on real-world use cases.


##Other Links/Open Source Projects
- [Sailsjs.org](http://sailsjs.org) - Node.js MVC framework
- [Balderdash](http://balderdash.co)
- [Skipper](https://github.com/balderdashy/skipper) - variant of Connect's bodyParser
- [Sails.js on Twitter](https://twitter.com/sailsjs)
