# How Modern Webapps Change the Security Game

* Name      : Chris Foster
* Twitter   : [@chrisfosterelli][]
* GitHub    : [chrisfosterelli][]
* Website   : [http://fosterelli.co][]

## Abstract

The web has changed massively over the last few years, and as a result so has web security. Websites have been growing into full fledge Javascript applications that run right in the users browser. The databases and backends that we use have changed very quickly as well. While this new Javascript-focused web is exciting, developers often have not thought of how security affects them in this new structure. The most common pitfalls of five years ago have very little in common with the most common pitfalls today. This talk discusses how the vulnerability landscape has changed. What is no longer a problem? What are the new problems? What has changed? These are all paramount for a developer to know when developing modern web applications.

* XSS - Templating libraries that filter for you
* XSRF - How AJAX apps can solve this
* SQL Injection - Dealing with non-SQL databases
* Sending the proper headers
* Directory Traversal in Node
* Sandboxing the Node process
* Etc...
 
Many developers are taught security practices that make sense for PHP applications with SQL databases, but the web has evolved. So should our understanding of security. Newer web applications are often built as full client-side Javascript programs with REST backends and NoSQL databases. This talk provides a quick background on general security concepts, and then expands to teach developers about what they should know to build secure applications in a modern web stack.

Examples of each situation are provided with Node.js as the demonstration backend.

##Speaker Bio

![](https://pbs.twimg.com/profile_images/447497779871363072/8UZtzUuG.jpeg)

I'm a second year Bachelor of Computing Science student at Thompson River's University in Kamloops, B.C. I work part time at a web startup as a full stack Javascript developer. Security is a hobby of mine; I spent most of my teenage years browsing through security forms and IRC channels. I try to learn everything I can get my hands on, and love building/breaking things!

[@chrisfosterelli]:http://twitter.com/chrisfosterelli
[chrisfosterelli]:http://github.com/chrisfosterelli
[http://fosterelli.co]:http://fosterelli.co
