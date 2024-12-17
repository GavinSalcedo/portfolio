import React, { ReactElement } from 'react'

function CardContainer({ children }: { children: ReactElement }) {
  return (
    <div className="hover:bg-slate-800/50 p-6 rounded-lg cursor-pointer">
      {children}
    </div>
  )
}

export default CardContainer
