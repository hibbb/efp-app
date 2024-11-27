import { useCallback, useEffect, useRef } from 'react'

export const useUserScroll = () => {
  const tableRef = useRef<HTMLDivElement>(null)
  const TopEightRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const ProfileCardRef = useRef<HTMLDivElement>(null)

  const handleWheel = useCallback((event: WheelEvent) => {
    if (tableRef.current) {
      if (window.innerWidth >= 1280) event.preventDefault()
      // Adjust the scroll position of the div
      tableRef.current.scrollTop += event.deltaY
      tableRef.current.scrollLeft += event.deltaX
    }

    if (containerRef.current) {
      // Adjust the scroll position of the div
      containerRef.current.scrollTop += event.deltaY
      containerRef.current.scrollLeft += event.deltaX
    }

    if (TopEightRef.current) {
      const topEightHeight = TopEightRef.current.scrollHeight
      const topEightOverflow = window.innerHeight - topEightHeight - 100
      if (window.innerWidth >= 1280)
        TopEightRef.current.style.top = `${topEightOverflow >= 0 ? 0 : topEightOverflow}px`
      else TopEightRef.current.style.top = '0px'
    }

    if (ProfileCardRef.current) {
      const profileCardHeight = ProfileCardRef.current.scrollHeight + 65
      const profileCardOverflow = window.innerHeight - profileCardHeight - 100
      if (window.innerWidth >= 1280)
        ProfileCardRef.current.style.top = `${profileCardOverflow >= 0 ? 0 : profileCardOverflow}px`
      else ProfileCardRef.current.style.top = '0px'
    }
  }, [])

  useEffect(() => {
    // Attach the wheel event listener to the window
    containerRef.current?.addEventListener('wheel', handleWheel, { passive: false })

    // Cleanup function to remove the event listener
    return () => {
      containerRef.current?.removeEventListener('wheel', handleWheel)
    }
  }, [handleWheel])

  return { tableRef, TopEightRef, containerRef, ProfileCardRef }
}