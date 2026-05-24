/**
 * Google Material Symbols (Outlined). Ensure index.html loads the font stylesheet.
 */
function MaterialSymbol({ name, className = '', filled = false, ...props }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`.trim()}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
      aria-hidden
      {...props}
    >
      {name}
    </span>
  )
}

export default MaterialSymbol
