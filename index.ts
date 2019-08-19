import { useState, useEffect } from 'react'

interface useMyPositionOptions {
  initialPosition?: Position,
  enableHighAccuracy?: boolean,
  immediate?: boolean
}

export default (options: useMyPositionOptions) => {
  const [myPosition, setMyPosition]: [Position | undefined, Function] = useState(options.initialPosition)

  useEffect(() => {
    const watcher = navigator.geolocation.watchPosition(
      pos => setMyPosition(pos),
      undefined,
      { enableHighAccuracy: options.enableHighAccuracy }
    )
    if (options.immediate) {
      navigator.geolocation.getCurrentPosition(
        pos => setMyPosition(pos),
        undefined,
        { enableHighAccuracy: options.enableHighAccuracy }
      )
    }
    return () => navigator.geolocation.clearWatch(watcher)
  }, [])
  return myPosition
}
