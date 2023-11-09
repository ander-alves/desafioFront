function Navbar() {
  return (
    <>
      <div
        className="w-full bg-indigo-900 text-white
                flex justify-center py-4"
      >
        <div className="container flex justify-between items-center text-lg md:p-4">
          Desafio Bloco 03
          <div className="flex gap-4">
            <span>Categoria</span>
            <span>Cadastrar Categoria</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
