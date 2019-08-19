# use-my-position
React Hook for using live position of device.

### Example
```tsx
import React from 'react'
import useMyPosition from 'use-my-position'

export default () => {
  const myPosition = useMyPosition()
  console.log(myPosition)
  return <span>Hello</span>
}

```