export default function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, index) => (
        <span key={index} className={`blob blob-${index + 1}`}></span>
      ))}
    </div>
  )
}

