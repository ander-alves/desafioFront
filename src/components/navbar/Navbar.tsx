function Navbar() {
  return (
    <>
      <div
        className="w-full bg-red-700 text-white
                flex justify-center py-4"
      >
        <div className="container flex justify-between items-center text-xl md:p-4 font-bold ">
          {" "}
          <a href="/home" className="hover:opacity-70"> Desafio Bloco 03</a>
          <div className="flex gap-4">
            <a href="/categorias" className="text-white hover:opacity-70">
              Categorias
            </a>
            <a
              href="/cadastrarcategoria"
              className="text-white hover:opacity-70"
            >
              Cadastrar Categoria
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
