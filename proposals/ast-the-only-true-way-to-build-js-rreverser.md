# Binary data in JavaScript

* Name      : Ingvar Stepanyan
* Twitter   : [@RReverser](https://twitter.com/RReverser)
* Github    : [RReverser](https://github.com/RReverser), [jDataView](https://github.com/jDataView)

## Abstract

From Makefiles to JavaScript-based Grunt, from Grunt to Gulp, from Gulp to Broccoli... Lots of plugins available for every build system that allow you to lint, modify, bundle, concatenate, minify and do a lot of other operations on JavaScript, but still - how do you debug it in production?

Earlier you would have to build and provide minified and development versions of your website or library and switch between them to check if everything works well for bundled file.

Nowadays, you probably tried to use SourceMap-enabled plugins so you could link real built file to real development sources, but as complexity of build pipeline grew, you gave up at the moment when figured out that `gulp-concat` doesn't support source maps or `grunt-umd` can't take source maps from previous step and so they screw entire idea of debugging real sources on production.

Did you know that this problem is actually not real but only limitation of existing build systems? Do you want to know how to enable debugging of real sources through entire build pipeline (whatever it contains) and, as a bonus, speed up builds of your website or library? Then this talk is for you.

## Speaker Bio

![RReverser](../images/rreverser.jpg)

Ingvar is Web Developer currently working at [Universal Mind](http://www.universalmind.com/), reverse engineer, organizer and speaker at IT events. He believes in JavaScript as full-featured cross-platform language that can be used not just for usual UI stuff but absolutely for any tasks from media processing and augmented reality to console utilities and browser-based serverless applications for low-level manipulating of complicated binary data including any popular modern formats.