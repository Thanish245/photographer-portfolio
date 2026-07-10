function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export { cn }
export default cn
