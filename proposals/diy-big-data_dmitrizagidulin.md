#DIY Big Data with Node.js, Riak and Solr

* Name      : Dmitri Zagidulin
* Twitter   : [@codenamedmitri](https://twitter.com/codenamedmitri)
* GitHub    : [dmitrizagidulin](https://github.com/dmitrizagidulin)

##Abstract
In the app dev trenches, "Big Data" is not just a buzzword, it's what happens when you have more reads and writes than a single server
can comfortably handle. This talk shows you how to create an easy, searchable, distributed storage layer for your JSON objects, that
can scale to multiple servers without operational headache.

Solr/Lucene is incredibly powerful for full text searching and geospatial querying, but is difficult to scale, and prefers an
external database to actually store the data that it's indexing. Riak is a fast distributed key/value store that, until recently, 
has had limited indexing capabilities. The RiakJson/[nrj](https://github.com/dmitrizagidulin/nrj) project takes advantage of the new Riak version's
best-of-breed approach of pairing distributed Solr with Riak K/V, and adds a developer-friendly Node.js API for creating and querying search indexes.

##Speaker Bio

![](../images/dmitrizagidulin.png)

Dmitri is a software engineer at [Basho Technologies](http://basho.com/), where he obsesses about open software, open data, and making distributed systems saner and easier to use for developers.

[@codenamedmitri]:http://twitter.com/codenamedmitri
[dmitrizagidulin]:http://github.com/dmitrizagidulin
