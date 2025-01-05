import LoadingSpinner from './LoadingSpinner'

export default function Loading() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center min-h-[60vh]">
        <LoadingSpinner />
      </div>
    </div>
  )
}

