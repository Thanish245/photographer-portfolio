import { cn } from '../../utils/cn'

function Container({ className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={cn('mx-auto w-full max-w-[72rem] px-6 sm:px-8 lg:px-10', className)}
      {...props}
    />
  )
}

export default Container
