import React from "react"
import ContentLoader from "react-content-loader"

const PizzaItemsLoader = (props) => (
  <ContentLoader 
    speed={1.5}
    width={280}
    height={500}
    viewBox="0 0 280 460"
    backgroundColor="rgb(200, 200, 200)"
    foregroundColor="#ffffff"
    {...props}
  >
    <circle cx="140" cy="130" r="130" /> 
    <rect x="-1" y="270" rx="8" ry="8" width="280" height="24" /> 
    <rect x="0" y="300" rx="8" ry="8" width="280" height="85" /> 
    <rect x="0" y="400" rx="8" ry="8" width="280" height="45" />
  </ContentLoader>
)

export default PizzaItemsLoader

