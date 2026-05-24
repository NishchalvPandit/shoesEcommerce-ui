export function Button({ children, variant = 'primary', type = 'button', ...props }) {
  return (
    <button type={type} className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  )
}

export function IconButton({ children, label, ...props }) {
  return (
    <button type="button" className="btn btn-icon" aria-label={label} {...props}>
      {children}
    </button>
  )
}
