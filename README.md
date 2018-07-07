
# EasyAuth

Authentication prototype with MEAN.

## Getting Started

* Download EasyAuth

```
$ git clone https://github.com/0xdbe/EasyAuth.git
$ cd EasyAuth
```

* Install node package

```
$ npm install
```

* Start EasyAuth

```
$ node app.js
```

## Testing

* Create user

curl --header "Content-Type: application/json" --request POST --data '{"username":"xyz","password":"xyz"}' http://localhost:3000/users

* Read All

curl http://localhost:3000/users

* Read by Id

curl http://localhost:3000/users/5b40d405f9ede13ede971342

* Update

curl --header "Content-Type: application/json" --request PUT --data '{"username":"xyz","password":"wxyz"}' http://localhost:3000/users/5b40d405f9ede13ede971342

* Delete

curl --request DELETE http://localhost:3000/users/5b40d405f9ede13ede971342
 