import { useState, useEffect } from 'react'

interface IUseMyPosition {
  initialPosition?: Position,
  enableHighAccuracy?: boolean,
  immediate?: boolean
}

export default (props: IUseMyPosition) => {
  const [myPosition, setMyPosition]: [Position | undefined, Function] = useState(props.initialPosition)

  useEffect(() => {
    const watcher = navigator.geolocation.watchPosition(
      pos => setMyPosition(pos),
      undefined,
      { enableHighAccuracy: props.enableHighAccuracy }
    )
    if (props.immediate) {
      navigator.geolocation.getCurrentPosition(
        pos => setMyPosition(pos),
        undefined,
        { enableHighAccuracy: props.enableHighAccuracy }
      )
    }
    return () => navigator.geolocation.clearWatch(watcher)
  }, [])
  return myPosition
}
