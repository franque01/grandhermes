const Button = ({  icon, text, link, onClick, classN }) => {
  return (
    <div>
      <button onClick={onClick} className={`border border-dimblack py-1 px-3.5 rounded-2xl ${classN} shadow-md shadow-dimblackopacity hover:shadow-sm hover:shadow-slate-400 transition-all ease-in-out  `}>
        <a href={link} className="flex items-center justify-center ">
            {icon} {text}
        </a>
      </button>
    </div>
  )
}

export default Button
