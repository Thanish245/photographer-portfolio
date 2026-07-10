import { cn } from '../../utils/cn'
import { navigateTo } from '../../hooks/usePathname'

function AppLink({ href, className = '', onClick, children, ...props }) {
  const handleClick = (event) => {
    onClick?.(event)
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return
    }

    if (href.startsWith('/')) {
      event.preventDefault()
      navigateTo(href)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={cn(className)} {...props}>
      {children}
    </a>
  )
}

export default AppLink
