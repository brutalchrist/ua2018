# Examples talk UA 2018

## Frontend

- Node version: 9.7.0 (use [nvm](https://github.com/creationix/nvm))
- Install dependencies

```bash
$ yarn install
```
- Run project 

```bash
$ yarn run start
```

## Backend

- Install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
- Run MongoDB 

```bash
$ mongod
```
- Setup database

```bash
$ mongo
> use ua2018
> db.indicators.insert({"code" : "uf"})
> db.indicators.insert({"code" : "utm"})
> db.indicators.insert({"code" : "utm"})
```

- Test database

```bash
$ mongo
> use ua2018
> db.indicators.find()
{ "_id" : ObjectId("5af2fd7c877ccb55dff58995"), "code" : "uf" }
{ "_id" : ObjectId("5af2fdb1877ccb55dff58996"), "code" : "utm" }
{ "_id" : ObjectId("5af2fdb6877ccb55dff58997"), "code" : "utm" }
```

- Install Sails.js

```bash
$ yarn global add sails
```

- Install depencencies

```bash
$ yarn install
```

- Run project

```bash
$ sails lift
```

- Test API

```bash
$ curl -i http://127.0.0.1:1337/indicators
  HTTP/1.1 200 OK
  X-Powered-By: Sails <sailsjs.com>
  Content-Type: application/json; charset=utf-8
  Content-Length: 196
  ETag: W/"c4-ZtGTxJy6EgqCWVUGiL1IZDNjbRk"
  set-cookie: sails.sid=s%3Aq93zrvkrbFoe__bMyJm1RKxY5-WJ6vvr.JEgUK5Sb0BhGPMKKV9ioz9qY%2FOa2D2L8%2FEeWRJiXY9E; Path=/; HttpOnly
  Date: Wed, 09 May 2018 14:00:37 GMT
  Connection: keep-alive

  [
    {
      "code": "uf",
      "id": "5aefcf395bdf992b6c2ba270"
    },
    {
      "code": "utm",
      "id": "5aefcf575bdf992b6c2ba283"
    },
    {
      "code": "ipc",
      "id": "5aefcf5f5bdf992b6c2ba287"
    }
  ]
```
