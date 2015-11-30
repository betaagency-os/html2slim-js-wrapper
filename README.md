# html2slim converter 

## Install

```sh
$ gem install html2haml haml2slim
$ npm i -S html2slim
```

## Usage

```js
var h2s = require('./index');

h2s('<h1>Gleb, ty <b class="sarcasm">zalil</b>?</h1>', function(err, slim){
  console.log(slim);
});
```

