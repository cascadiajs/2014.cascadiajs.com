# Integrating an open source JavaScript CDN (cdnjs) with NPM - how we're scaling our ability to keep up with pull requests via tooling

* Name      : Ryan Kirkman
* Twitter   : [@ryan_kirkman](https://twitter.com/ryan_kirkman)
* GitHub    : [ryankirkman](https://github.com/ryankirkman)

## Abstract

Scaling our ability to maintain cdnjs (an open source JavaScript CDN) with three maintainers has proved a challenge. With 36 pull requests from 22 individual authors touching 1,590 files and adding over one million lines of code in the last week alone, we realized manual maintenance was not going to cut it - it was time for some tooling.

Enter NPM. Our dream solution was keeping cdnjs in sync with NPM for specific projects that want to be hosted on cdnjs, so this is exactly what we set out to build.

We now have a completely automated update process that enables libraries available on cdnjs to sync with NPM for fast, automatic updates.

In this talk I will cover:
* A brief history of cdnjs
* How we implemented the NPM auto update tool in Node.js
* How we plan to expand our tooling in the future to enable automated library updating via git tags

## Speaker Bio

![](https://avatars3.githubusercontent.com/u/54405?s=256)

Ryan Kirkman is the co-founder of [cdnjs](http://cdnjs.com) and a software developer at [Sauce Labs](http://saucelabs.com) originally from Australia.