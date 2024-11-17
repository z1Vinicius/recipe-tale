import { BsFacebook } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { BsGoogle } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import PageLogo from './../../assets/logo.png'

function PageFooter(){
  return (
    
    <div className="flex flex-col justify-center items-start w-full bg-slate-50 p-4 gwaaap-3">
      <div className="flex flex-col w-52 gap-1">
        <img src={PageLogo} className='min-w-24 w-24 ' alt="" />
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rerum esse atque nisi debitis quia aliquam modi consequatur.</span>
      </div>
      <div className="flex flex-col w-full mt-3">
        <hr />
        <div className="flex justify-between items-center w-full  p-2 h-12">
          <span className="text-base text-slate-950">
            2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.
          </span>
          <div className="flex flex-row text-lg  text-zinc-700 gap-3">
            <BsFacebook className="hover:text-zinc-950 cursor-pointer"/> 
            <BsWhatsapp className="hover:text-zinc-950 cursor-pointer"/> 
            <BsGoogle className="hover:text-zinc-950 cursor-pointer"/> 
            <BsInstagram className="hover:text-zinc-950 cursor-pointer"/> 
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default PageFooter