# JavaScript ♥ Unicode

* Name      : Mathias Bynens
* Twitter   : [@mathias][https://twitter.com/mathias]
* GitHub    : [mathiasbynens][https://github.com/mathiasbynens]
* Website   : [mathiasbynens.be][http://mathiasbynens.be/]

## Abstract

This presentation explains the various ways in which JavaScript relies on Unicode, what the consequences are for JavaScript developers, and how ECMAScript 6 will make our lives a bit easier in this regard.

First off, the basics of Unicode are explained. Once that’s out of the way, I’ll talk a little bit about different character encodings, only to determine the character encoding that JavaScript uses internally (which is kind of a mixture between UCS-2/UTF-16).

Then we’ll explore the various consequences of JavaScript exposing “characters” according to UCS-2/UTF-16, and I’ll explain why it can be problematic.

Finally, I’ll present robust ECMAScript 5-compatible workarounds to the issues encountered, and explain how ECMAScript 6 will make it easier to support full Unicode in JavaScript strings and regular expressions.

This talk is important because bad support for uncommon Unicode symbols is a very common cause for software bugs, *especially* in JavaScript programs.

If at any time you use JavaScript to handle any form of user input or data from a third party, there’s a chance those strings contain ‘special’ Unicode symbols, and you really have no choice but to make sure your code supports these properly. This presentation will explain the problems and offer solutions to each of them.

## Speaker Bio

![](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/mathiasbynens.png)

Mathias is a Belgian web standards freak. He likes HTML, CSS, JavaScript, Unicode, performance, and security. At Opera Software he’s a member of the Developer Relations team.
