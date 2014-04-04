#Template Specialization with Express apps

* Name      : Poornima Venkatakrishnan
* Twitter   : [@poorni_venkat](https://twitter.com/poorni_venkat)
* Github    : [pvenkatakrishnan](http://github.com/pvenkatakrishnan)

##Abstract
#### What is Template Specialization ?
Template specialization is a way to dynamically switch partials in your views, to some other partial, based on some rules that you can specify in the form of a json config in you app.

#### Why would you want to do this ?
This may become important and very handy when:
* you are writing apps that need to be supported for multiple locales and parts of it can look different in different country/regions
* you want part of your views to look completely different across various devices (an alternate, more flexible solution to adaptive/responsive designs)
* you want to A/B test

#### How does this work?
Most templating engines provide a hook to be able to pre-process before each of the partials included in your base template gets rendered.
To be able to do template specialization, 3 things need to be setup:
* Setting up a rules config file which lets you specify which template maps to what and based on what rules. I have a written a simple rule parser called [karka](http://github.com/krakenjs/karka) that enables you to do this
* Generating and providing the specialization map in the context passed to the view engine that you provide to your express app using app.engine() function
* Using the hooks provided by the templating engine of your choice, switch one partial to another based on the specialization map that we generated in the previous step.

TADA !!!! Now you can dynamically make your views look different just based on what is in your request/response context.

#### Demo Time
* I will demo specialization using Dust templating engine in an express app as we use Dust extensively at Paypal Inc.
* This feature is very powerful in development of both thick and thin clients. In case of heavy client-side rendered apps, we can easily expose the specialization map in a data attribute and use that in the browser to switch partials. I will demo this as well.
* To prove that this powerful concept can be extended to any templating engine, the demo will feature another templating engine with specialization as well.

I'm sure the demo is going to be very fun. Hope you'll enjoy!

##Speaker Bio

![Poornima Venkatakrishnan](https://raw.githubusercontent.com/pvenkatakrishnan/2014.cascadiajs.com/master/images/poornima.jpeg)

Poornima is a web application Engineer writing a lot of nodejs code and loving it !! She used to be a mobile engineer but converted to a full-time web enthusiast.
When not coding, she is a proud mom of a toddler and also actively participates in fund raising shows for non-profit organizations in the bay area. She is originally from India, but now settled in the Silicon Valley working for Paypal Inc.
Currently part of the team that opensourced [Krakenjs](www.krakenjs.com) and working on a solution for 'template specialization' for Krakenjs. Checkout [her github repo](http://github.com/pvenkatakrishnan) if you are curious or visit [github.com/krakenjs](github.com/krakenjs)for all active development.

