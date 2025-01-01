export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-24">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

