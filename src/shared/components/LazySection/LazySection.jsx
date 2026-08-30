import { lazy, Suspense, useEffect, useRef, useState } from 'react'

import './LazySection.css'

function LazySection({ loader, fallback = null }) {
  const containerRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const element = containerRef.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '300px 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const Component = shouldLoad ? lazy(loader) : null

  return (
    <div ref={containerRef} className="lazy-section">
      {Component ? (
        <Suspense fallback={fallback}>
          <Component />
        </Suspense>
      ) : null}
    </div>
  )
}

export default LazySection