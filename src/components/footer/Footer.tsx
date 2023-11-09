import {
    FacebookLogo,
    InstagramLogo,
    LinkedinLogo,
  } from "@phosphor-icons/react";
  
  function Footer() {
    const data = new Date().getFullYear();
  
    return (
      <div className="bg-red-700 text-white">
        <div className="container mx-auto flex flex-col items-center py-4">
          <p className="text-2xl font-bold">Desafio Farmácia | Copyright: {data}</p>
          <p className="text-lg mb-4">Acesse Minhas Redes Sociais</p>
          <div className="flex gap-4">
            <LinkedinLogo size={32} weight="bold" />
            <InstagramLogo size={32} weight="bold" />
            <FacebookLogo size={32} weight="bold" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  