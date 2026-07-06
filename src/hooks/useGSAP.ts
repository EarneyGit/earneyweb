'use client'

import { useEffect, useLayoutEffect, useRef, DependencyList } from 'react'
import { gsap } from 'gsap'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

interface UseGSAPOptions {
  scope?: React.RefObject<HTMLElement | null>
  dependencies?: DependencyList
  revertOnUpdate?: boolean
}

/**
 * React-safe GSAP hook using gsap.context() for cleanup.
 * Respects server-side rendering — only runs on client.
 */
export function useGSAP(
  callback: (context: gsap.Context) => void,
  options: UseGSAPOptions = {}
) {
  const { scope, dependencies = [], revertOnUpdate = true } = options
  const contextRef = useRef<gsap.Context | null>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      callback(self)
    }, scope?.current ?? undefined)

    contextRef.current = ctx

    return () => {
      if (revertOnUpdate) ctx.revert()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return contextRef
}
