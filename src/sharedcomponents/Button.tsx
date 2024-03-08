import React, { FormEvent } from 'react'

const Button = ({ text, style = 'primary', shape = 'square', size='medium', action, width='standard' } : {
  text: string;
  style?: 'primary' | 'secondary';
  shape?: 'square' | 'pills';
  size?: 'small' | 'medium' | 'large'
  width?: 'full' | 'standard'
  action?: (e: any) => void
}) => {
  const buttonColor = (style === 'primary')
    ? 'bg-primary'
    : (style === 'secondary')
    ? 'bg-secondary'
    : 'bg-white'

  const buttonShape = (shape === 'square')
    ? 'rounded'
    : (shape === 'pills')
    ? 'rounded-full'
    : 'rounded'

  const buttonSize = (size === 'small')
    ? 'px-4 py-2 text-xs '
    : (size === 'large')
    ? 'px-6 py-4 text-sm'
    : 'px-4 py-2'

  const buttonWidth = (width === 'full')
    ? 'w-full'
    : ''

  return (
    <button
      className={`whitespace-nowrap ${buttonShape} ${buttonColor} ${buttonSize} ${buttonWidth} text-white`}
      onClick={action}
    >
      {text}
    </button>
  )
}

export default Button