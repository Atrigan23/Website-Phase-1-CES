import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className="flex  hover:bg-[#6d7eff] justify-center items-center gap-2 bg-[#00309e] text-white px-4 py-3 m- rounded-full">{label}
    <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-8 h-8" />
    </button>
    
  )
}

export default Button