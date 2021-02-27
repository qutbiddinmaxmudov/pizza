import React from 'react'
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="270" rx="6" ry="6" width="280" height="25" />
      <circle cx="140" cy="130" r="130" />
      <rect x="0" y="305" rx="6" ry="6" width="280" height="84" />
      <rect x="128" y="400" rx="20" ry="20" width="150" height="45" />
      <rect x="0" y="408" rx="6" ry="6" width="90" height="30" />
    </ContentLoader>
  )
}

export default LoadingBlock
