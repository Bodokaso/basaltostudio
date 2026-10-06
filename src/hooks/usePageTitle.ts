import { useEffect } from 'react'

const BASE_TITLE = 'Basalto Studio'

export function usePageTitle(title?: string) {
  useEffect(() => {
    const previous = document.title
    document.title = title ? `${title} · ${BASE_TITLE}` : previous
    return () => {
      document.title = previous
    }
  }, [title])
}
