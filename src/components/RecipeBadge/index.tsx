import { IconType } from "react-icons";

function RecipeBadge({text, Icon}: {text: string, Icon: IconType}){
  return (
    <div className='flex flex-row w-fit items-center gap-1 p-1 border border-1 border-slate-100 rounded-md'>
    <Icon className='text-red-400' />
    <span className='text-sm text-gray-500'>
      {text}
    </span>
  </div>
  )
}
export default RecipeBadge;