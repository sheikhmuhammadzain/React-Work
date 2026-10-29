import React from 'react'

const TabButton = (props) => {
  return (
    <div onClick={props.onSelect}>
    {props.children}
    </div>
  )
}

export default TabButton