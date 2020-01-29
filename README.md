# @mh-solid-dev/react-filterize

# Installing

Using npm:

```
npm i @mh-solid-dev/react-filterize
```

Using yarn:

```
yarn add @mh-solid-dev/react-filterize
```

# Configuration

In order to define your filters you have to define an object.
This is an example which shows all available kinds of "FilterItemTypes":

```JSON
const filterDeclaration = {
  searchValue: {
      label: 'Suche:',
      type: 'text',
      value: '',
      placeholder: 'Suche',
      validate: (element, value) => true
  },
  own: {
      label: 'Nur Eigene:',
      type: 'switch',
      value: false,
      validate: (e, v) => true
  },
  status: {
      label: 'Status:',
      type: 'select',
      value: undefined,
      placeholder: {
        label: 'Bitte Status wählen:',
        value: undefined
      },
      validate: (e, v) => true,
      items: orderStateOptions,
  },
}
```

# Usage

```Javascript
import React, { useState } from 'react'
import Filterize from "@mh-solid-dev/react-filterize"

export default function exampleComponent({data}) {
  const [filteredData, setFilteredData] = useState(data)

  return (
    <Filterize
      data={data}
      onChange={setFilteredData}
      filterDeclaration={filterDeclaration}
      />
  )
}

```
