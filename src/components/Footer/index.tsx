import { BsFacebook } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { BsGoogle } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"

function PageFooter(){
  return (
    
    <div className="flex flex-col justify-center items-center w-full bg-blue-900 p-4 gwaaap-3">
      <div className="flex flex-row text-2xl  text-slate-50 gap-3">
        <BsFacebook /> 
        <BsWhatsapp /> 
        <BsGoogle /> 
        <BsInstagram /> 
      </div>
      <span className="text-slate-50">
        2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.
      </span>
    </div>
  )
}

export default PageFooter