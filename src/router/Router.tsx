import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface RouterContextType {
  path: string
  navigate: (to: string) => void
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
})

export function useRouter() {
  return useContext(RouterContext)
}

function normalizePath(pathname: string): string {
  if (!pathname) return '/'
  const [cleanPath] = pathname.split('?')
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    return cleanPath.slice(0, -1)
  }
  return cleanPath
}

function resetScrollToTop() {
  if (typeof window === 'undefined') return
  try {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  } catch {
    window.scrollTo(0, 0)
  }
  if (document.documentElement) document.documentElement.scrollTop = 0
  if (document.body) document.body.scrollTop = 0
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const handlePopState = () => {
      const newPath = normalizePath(window.location.pathname)
      setPath(newPath)
      const hash = window.location.hash
      if (!hash) {
        resetScrollToTop()
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Centralized scroll restoration on route path changes
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) {
      resetScrollToTop()
      const raf = requestAnimationFrame(() => {
        resetScrollToTop()
      })
      return () => cancelAnimationFrame(raf)
    }
  }, [path])

  const navigate = (to: string) => {
    if (!to) return

    // Hash link on the current page (e.g. '#thesis')
    if (to.startsWith('#')) {
      const targetId = to.slice(1)
      const el = document.getElementById(targetId)
      if (el) {
        const navOffset = 80
        const targetY = Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - navOffset))
        window.scrollTo({ top: targetY, behavior: 'smooth' })
        window.history.pushState(null, '', to)
      }
      return
    }

    // Root hash link (e.g. '/#thesis' or '/#contact')
    if (to.startsWith('/#')) {
      const hash = to.slice(1) // '#thesis'
      const currentNorm = normalizePath(window.location.pathname)
      if (currentNorm === '/' || currentNorm === '/index.html') {
        const targetId = hash.slice(1)
        const el = document.getElementById(targetId)
        if (el) {
          const navOffset = 80
          const targetY = Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - navOffset))
          window.scrollTo({ top: targetY, behavior: 'smooth' })
          window.history.pushState(null, '', hash)
        }
        return
      } else {
        window.history.pushState(null, '', to)
        resetScrollToTop()
        setPath('/')
        setTimeout(() => {
          const targetId = hash.slice(1)
          const el = document.getElementById(targetId)
          if (el) {
            const navOffset = 80
            const targetY = Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - navOffset))
            window.scrollTo({ top: targetY, behavior: 'smooth' })
          }
        }, 120)
        return
      }
    }

    const [targetPath, hash] = to.split('#')
    const normalized = normalizePath(targetPath)

    if (normalized !== path) {
      window.history.pushState(null, '', to)
      if (!hash) {
        resetScrollToTop()
      }
      setPath(normalized)
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash)
          if (el) {
            const navOffset = 80
            const targetY = Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - navOffset))
            window.scrollTo({ top: targetY, behavior: 'smooth' })
          }
        }, 120)
      }
    } else if (hash) {
      const el = document.getElementById(hash)
      if (el) {
        const navOffset = 80
        const targetY = Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - navOffset))
        window.scrollTo({ top: targetY, behavior: 'smooth' })
        window.history.pushState(null, '', '#' + hash)
      }
    } else {
      resetScrollToTop()
    }
  }

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function Link({
  href,
  children,
  className = '',
  onClick,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const { navigate } = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e)
    if (e.defaultPrevented) return
    // Allow default browser handling for modifier keys (new tab, etc.)
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(href)
  }

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  )
}
