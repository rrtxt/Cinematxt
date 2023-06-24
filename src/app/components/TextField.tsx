import React, { InputHTMLAttributes } from "react"

const formClasses =
  'block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'

const Label = ({ id, children } : {id : string, children : React.ReactNode}) => {
  return (
    <label
      htmlFor={id}
      className='mb-2 block text-sm font-semibold text-white'
    >
      {children}
    </label>
  )
}

const TextField = ({ id, label, type = 'text', className, name, isRequired} : 
{id : string, label : string, type : string, className : string, name : string, isRequired : boolean}) => {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} name={name} className={formClasses} required={isRequired}/>
    </div>
  )
}

export default TextField