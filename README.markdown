## Demo

A GitHub-hosted demo can be found here:  
[View project page](http://inputhistory.erming.io/)

## Install

Manual install:  
  1. Download [inputhistory.js](https://github.com/erming/inputhistory/blob/gh-pages/src/inputhistory.js)
  2. Include source: `<script src="inputhistory.js"></script>`

## Usage

To enable history on your inputs:

```js
$(".input").inputhistory();
```

### Prevent form submit

Normally, if your input is inside a form, it will trigger submit when pressing `<enter>`. If you don't want this behaviour you can turn it off with this option:

```js
$(".input").inputhistory({preventSubmit: true});
```

## Requirements

`inputhistory` is a jQuery plugin and requires jQuery 1.8 or higher.

## License

Available under [the MIT license](http://mths.be/mit).
