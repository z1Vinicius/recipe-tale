function MenuItem({text, link}: {text: string, link: string}){
  return (
    <a href={link} className="font-semibold text-sm text-zinc-800 hover:text-zinc-950">{text}</a>
  )
  
}

export default MenuItem;