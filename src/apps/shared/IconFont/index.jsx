import React from 'react'

const IconFont = (props) => {
  return (
      <svg className="icon" aria-hidden="true" style={{ fontSize: `${props.size}px` }}>
        <use xlinkHref={`#icon-${props.iconName}`}> </use>
        <style jsx="true">
        {`
          .icon {
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
          }
          ` }
      </style>
      </svg>
  )
}

export default IconFont
