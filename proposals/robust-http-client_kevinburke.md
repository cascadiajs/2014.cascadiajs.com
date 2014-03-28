# Making Reliable AJAX Requests in the JavaScript Mobile Environment

* Name: Kevin Burke
* Twitter: [@ekrubnivek][twitter]
* Github:  [kevinburke][github]
* Website: [kev.inburke.com][site]

 [twitter]: https://twitter.com/ekrubnivek
 [github]: https://github.com/kevinburke
 [site]: http://kev.inburke.com

## Abstract

At times, getting an HTTP request from a phone to your server can be tougher
than getting Jumpman to the top of a Donkey Kong level. People run apps with
their phone in Airplane Mode, they go through tunnels, check scores at halftime
along with 80,000 other fans, and worse. This means that HTTP requests made by
your app can fail in interesting ways. Generic "catch all exceptions" error
handling can leave your users waiting around for data that will never arrive,
wondering if they've purchased an extra plane ticket to Walla Walla, or worse,
abandoning your app for its unreliability.

In this talk, we'll look at examples of how the default HTTP client, or the
default client plus some usual fixes, can get you in trouble and make your
users unhappy. We'll discuss the implications of request failures: which of
your requests are safe to retry? How can you avoid waiting forever for data
that will never come? How can you structure your network calls for maximum
reliability? I will show you some tools and frameworks that you can use to make
it easier to solve these problems. Finally, I will show you how to simulate
poor network conditions in your testing environment, so you can plan for and
route around failure.

You'll leave the talk with the knowledge necessary to write a robust,
well-tested app that can survive all kinds of horrible network conditions.

### Biography

Kevin is an API Engineer at Twilio, inventor of the Jenkins UI framework
[doony][doony], and a contributor to the Python HTTP framework
[urllib3][urllib3]. He once inadvertently left the play *Waiting for Godot* at
the intermission.

 [doony]: https://github.com/kevinburke/doony
 [urllib3]: https://github.com/shazow/urllib3
