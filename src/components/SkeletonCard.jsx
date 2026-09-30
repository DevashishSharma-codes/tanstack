import React from 'react'

const SkeletonCard = ({ count = 1 }) => {
  const skeletons = []

  for (let i = 0; i < count; i++) {
    skeletons.push(
      <div key={i} className="bg-neutral-900 p-2 rounded-xl border border-gray-800 animate-pulse">
        <div className="w-full aspect-[2/3] bg-neutral-800 rounded-lg"></div>
        <div className="h-4 bg-neutral-800 rounded mt-2 w-3/4"></div>
        <div className="h-3 bg-neutral-800 rounded mt-1 w-1/2"></div>
      </div>
    )
  }

  return <>{skeletons}</>
}

export default SkeletonCard
