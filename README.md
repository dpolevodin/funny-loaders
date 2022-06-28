# React Funny Loaders

Look demo how it works:
[Demo](https://dpolevodin.github.io/funny-loaders)

## Install

```
npm i funny-loaders
```

## Usage

```js
import React from 'react';
import Panzer from "funny-loaders";

function App() {
    return (
        <div className="App">
            <Panzer patrolPathLength={20} size="normal" panzerSpeed={4}/>
            //or without props
            <Panzer />
        </div>
    );
}
```

### API

```js
size = "small" || "normal" || "big"
patrolPathLength: {number} in rem
panzerSpeed: {number} in seconds
```