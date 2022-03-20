# vue-screen-size

Get easy and reactive access to the width and height of your screen.

<p align="left">
  <a href="https://www.npmjs.com/package/vue-screen-size"><img src="https://img.shields.io/npm/v/vue-screen-size.svg" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/vue-screen-size"><img src="https://img.shields.io/npm/dm/vue-screen-size.svg" alt="NPM Downloads"></a>
  <a href="http://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjohndatserakis%2Fvue-screen-size&text=Check%20out%20vue-screen-size%20on%20GitHub&via=johndatserakis">
  <img src="https://img.shields.io/twitter/url/https/github.com/johndatserakis/vue-screen-size.svg?style=social" alt="Tweet"></a>
</p>

## Vue 3 Support

Vue 3 is supported from `v2.0.0` and beyond (current `master`). To use `vue-screen-size` with Vue 2, use `v1.0.1`.

## Links

- [Demo](https://johndatserakis.github.io/vue-screen-size/)
- [GitHub](https://github.com/johndatserakis/vue-screen-size)
- [npm](https://www.npmjs.com/package/vue-screen-size)

## Install

```bash
yarn add vue-screen-size
```

Or you can include it through the browser at the bottom of your page:

```html
<script src="https://unpkg.com/vue-screen-size/dist/vue-screen-size.min.js"></script>
```

## About

Sometimes when building an app you need to have access to the screen's dimensions. Usually that's going to be done in the css using `@media` - but sometimes you need to access that info right in your JavaScript.

The issue with this is you have to worry about adding event listeners and then removing them later. We wanted to just be able to import something quickly and then be able to forget about it later. So this `mixin` does just that - just use `Vue.use()` or `mixins: [],` and you're off.

There is something to consider - where and how you include this library. There are two ways, make sure to be aware of the differences:

## Usage Example 1 - Whole app has access (Not Recommended)

In this usage - your whole app - and every child component - has access to the `$vssWidth`, `$vssHeight`, and `$vssEvent` variables. This is sorta pollutive though, as multiple instances of the mixin are initialized and it's kinda wasteful. The is due to the way Vue mixins are passed down to child components. You can read more about this [here](https://vuejs.org/v2/guide/mixins.html#Global-Mixin). The second example is recommended.

```javascript
import { VueScreenSizeMixin } from 'vue-screen-size';

app.mixin(VueScreenSizeMixin);

// Access `this.$vssWidth`, `this.$vssHeight`, and `this.$vssEvent` anywhere in your app.
```

## Usage Example 2 - Just the component you install it on has access - (Recommended)

In this usage - the component you install it on will have access to the `$vssWidth`, `$vssHeight`, and `$vssEvent` variables. This may be a bit more restrictive, but it's less wasteful and should give you better performance.

```javascript
import { VueScreenSizeMixin } from 'vue-screen-size';

export default {
  mixins: [VueScreenSizeMixin],
};

// Access `this.$vssWidth`, `this.$vssHeight`, and `this.$vssEvent` in your component.
```

## Variables

| name       | type   | description                                    |
| ---------- | ------ | ---------------------------------------------- |
| $vssWidth  | Number | The width of your screen                       |
| $vssHeight | Number | The height of your screen                      |
| $vssEvent  | Object | The event object data from the resizing event. |

## Methods

| method              | parameters | description                                      |
| ------------------- | ---------- | ------------------------------------------------ |
| $vssDestroyListener | none       | Force the removal of the attached event listener |

## Development

```bash
# Install dependencies
yarn

# Serve with hot reload
yarn dev

# Run the tests
yarn test

# Build demo page
yarn build:example

# Build library
yarn build:library

# Build everything and run tests
yarn build
```

## Other

Go ahead and fork the project! Submit an issue if needed. Have fun!

## License

[MIT](http://opensource.org/licenses/MIT)
