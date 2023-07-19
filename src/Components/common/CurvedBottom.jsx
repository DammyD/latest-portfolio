import React from 'react'

const CurvedBottom = () => {
  return (
    <div className='wave-border bottom'>
         <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style="stroke: none; fill: var(--shade-100);"></path>
        <path class="neon-path" d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98"
          style="stroke: var(--neon-color); fill: none;"></path>
      </svg>
    </div>
  )
}

export default CurvedBottom