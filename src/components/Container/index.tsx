
import React from "react"

function Container({children}: {children: React.ReactNode}){
  return (
  <div className="w-full bg-zinc-200 rounded-lg p-4">
    {children}
  </div>)
}

export default Container