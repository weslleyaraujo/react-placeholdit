React Placeholdit
=========================
[![Circle CI](https://circleci.com/gh/hugobessaa/react-placeholdit.svg?style=svg)](https://circleci.com/gh/hugobessaa/react-placeholdit)

A simple React component to display [placehold.it](https://placehold.it/) images.

## Installation

```
npm install react-placeholdit
```

## Usage

To use this component first import it using your favorite module loader. In this
example we will be using the new ES6 module syntax.

```
import Placeholdit from 'react-placeholdit'
```

Once you have access to the `Placeholdit` component, use it as any other react
component. The `Placeholdit` component requires you to define it's dimensions.

```
<Placeholdit width="100" height="100" />
```

This will render

```
<img src="https://placehold.it/100x100" />
```

The `Placeholdit` component also allows you to pass any other props, like
`className`, `style` or `alt`. These will go straight to the rendered `img` tag.

## Options

```
<Placeholdit
  width={Number}  // required
  height={Number} // (default: width)
  format={String} // {gif,png,jpg,jpeg} (default: gif) 
  />
```
