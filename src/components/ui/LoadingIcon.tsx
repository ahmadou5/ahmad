import { ReloadIcon } from '@radix-ui/react-icons'

const LoadingIcon = ({ className }: { className?: string }) => {
  return <ReloadIcon className={`mr-2 h-4 w-4 animate-spin ${className}`} />
}

export default LoadingIcon
