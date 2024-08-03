const Input = ({ type, placeholder, classN }) => {
  return (
    <div>      
        <input type={type} placeholder={placeholder} className={`placeholder:text-sm border border-dimblackopacity w-full px-4 py-2 rounded-2xl hover:border-dimblack transition eas-in-out ${classN} `} />
    </div>
  )
}

export default Input
