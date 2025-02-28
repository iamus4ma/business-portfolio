export function Card({ className = "", ...props }) {
  return <div className={`rounded-lg border bg-card text-card-foreground shadow ${className}`} {...props} />
}

