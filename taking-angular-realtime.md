# Taking AngularJS Realtime with WebSockets and D3

* Name: Joe lepper
* Twitter: [@josephlepper][]
* GitHub: [joeLepper][]
* Website: [joelepper.com][]

## Abstract

As we enter the era of the Internet of Things (IoT), we'll find ourselves coding more and more applications that visualize real-time data. The current method for getting this data into a live browser session is long-polling (regularly pinging an endpoint and checking for new data). But long-polling is soooooo booooooring.

With the websocket spec now being [supported](http://caniuse.com/#feat=websockets) by all browser makers (including IE > 9), we have an alternative to constantly harassing the server for updates. We'll take a look at how simple it can be to integrate websockets into an AngularJS application and visualize incoming IoT data using D3. As a demonstration, we'll record moisture readings from an Arduino and watch them update a chart in real time.


## Speaker Bio

![](https://camo.githubusercontent.com/fe6f151919b83cb46a4598293e3b26df05391d7a/687474703a2f2f692e696d6775722e636f6d2f615a396972764f2e676966)

In another life Joe Lepper was an English teacher. But these days he's a software engineer happily working on the browser monitoring team at New Relic, helping to build tools to make it easier to gain visibility into how front-end applications function. He is passionate about JavaScript, object-oriented CSS, and front-end operations. Lately when he plays dressup he usually ends up as the horsey.


[@josephlepper]:http://twitter.com/josephlepper
[joeLepper]:http://github.com/joeLepper
[joelepper.com]:http://joelepper.com