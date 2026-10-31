function LoadingCircle({ className = 'h-10 w-10' }) {
  return <span className={`loader-ring ${className}`} role="status" aria-label="Loading" />
}

export default LoadingCircle
