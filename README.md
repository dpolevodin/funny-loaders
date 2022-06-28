# React Funny Loaders
 
[Demo](http://jonjaques.github.io/react-loaders)

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