#VNC-over-gif. Journey from a joke to useful utilities.

* Name      : Andrey Sidorov
* Twitter   : [@sidorares][]
* GitHub    : [sidorares][]
* Website   : [andreysidorov.com][]

##Abstract
There are two parts in this talk: part one is "pursuing a dumb idea to its extremes" describing [vnc to gif proxy](https://github.com/sidorares/vnc-over-gif) project and what I've learnt from it.
Part two is "connect everything to everything with node". I'll describe some of unusual combinations of protocols connected together and try to convince how easy it is to connect things using node.js
Examples include:
  - [mysql to postgres](https://github.com/sidorares/mysql-pg-proxy) proxy using mysql server-side protocol library and postgres client
  - [X11 screen](https://github.com/sidorares/node-x11) to gif stream over http
  - [vnc stream to video file](https://github.com/sidorares/rfbrecord)
  - [mysql to leveldb](https://github.com/eugeneware/sql-engine)
  - [node.js debugger agent to vim-connection](https://github.com/sidorares/node-vim-debugger)
  - mysql to anything using [binlog replication client](https://github.com/sidorares/node-mysql2/blob/master/examples/binlog-watcher.js)
  - [repl console to Chrome Devtools](https://github.com/sidorares/crconsole)
  - [vnc server to terminal window](https://github.com/sidorares/ansi-vnc)
  - expose Chrome resourses as filesystem using [fuse4js](https://github.com/bcle/fuse4js) and [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface)

##Speaker Bio

![](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/sidorares.jpeg)

Andrey Sidorov is software developer from Melbourne, Australia. Andrey enjoys implementing low-level network protocols in javascript. Among his side projects are clients for d-bus, x11, mysql, vnc, memcached, i3-rpc and ADB protocols. His pre-web and pre-javascript background is programing numerical calculations/compotational geometry for CAM systems in C++. He runs monthly Melbourne Node.JS meetup.

[@sidorares]:http://twitter.com/sidorares
[sidorares]:http://github.com/sidorares
[andreysidorov.com]:http://andreysidorov.com
