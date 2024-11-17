function HeaderButton({text, routeName, primary}: {text: string, routeName?: string, primary?: boolean}){
  return (
    <button className={`flex items-center justify-center p-2 pl-3 pr-3 rounded-lg ${primary ? " bg-red-400 hover:bg-red-500" : "bg-white hover:bg-slate-50 border border-1 border-slate-200"} shadow-sm`} >
      <span className={`text-sm font-medium ${primary ? "text-slate-50" : "text-black"}`}>{text}</span>
    </button>
  )
}
export default HeaderButton;