import React from 'react'
import Chip from 'material-ui/Chip'
import { blue300 } from 'material-ui/styles/colors'

export default function ({ value, text, isFocused, isDisabled, handleClick, handleRequestDelete, defaultStyle }, key) {
  return (
    <Chip
      key={key}
      style={{ ...defaultStyle, pointerEvents: isDisabled ? 'none' : undefined }}
      backgroundColor={isFocused ? blue300 : null}
      onTouchTap={handleClick}
      onRequestDelete={handleRequestDelete}
    >
      {text}
    </Chip>
  )
}
