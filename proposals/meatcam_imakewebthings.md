# Meatcam

* Name: Caleb Troughton
* Twitter: [@foodgoesinmouth](https://twitter.com/foodgoesinmouth)
* GitHub: [imakewebthings](https://github.com/imakewebthings)
* Website: [imakewebthings.com](http://imakewebthings.com)

## Abstract

[Meatcam](http://meatcam.github.io) is an open-source hardware and software collaboration with one goal in mind: Create a wearable camera that will broadcast animated GIFs to [Meatspace TV](https://meatspaces.tv), a single-user channel-focused take on [Meatspace Chat](https://chat.meatspac.es). This talk will look specifically at three aspects of the project:

- The hardware, which consists of a Raspberry Pi, a deconstructed Logitech webcam, a pair of shop glasses, and a couple 3D printed prototype components. What does this set of hardware choices do to help us solve the problem quickly and what challenges do they present?
- The software, where a collection of Node modules interact with [`avconv`](http://libav.org/avconv.html) and [`gifsicle`](http://www.lcdf.org/gifsicle/) to capture webcam GIFs and send them to Meatspace. We'll look at how these modules work with each other and the resource constrained hardware.
- The use case: How did this project come about, and why does a wearable camera make sense for the Meatspace TV medium?

The presentation will also feature a live demo of the Meatcam in action.

##Speaker Bio

![](../images/imakewebthings.png)

Freelance full-stack web developer out of Portland, OR. Creator and sometimes-maintainer of [deck.js](http://imakewebthings.com/deck.js), [jQuery Waypoints](http://imakewebthings.com/jquery-waypoints), and [Tiny Question](http://tinyquestion.com). Willing to trade home-roasted coffee for hugs and stickers.
