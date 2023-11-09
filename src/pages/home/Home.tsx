function Home() {
    return (
      <>
        <div className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white" style={{ backgroundImage: 'url("https://img.freepik.com/vetores-gratis/projeto-do-fundo-da-farmacia_1300-137.jpg?w=740&t=st=1699548307~exp=1699548907~hmac=4d60f458bb87a04ce842b2f7374acb93f59e42c1d6e7ceff2477ae7f76a94101")' }}>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center  bg-black bg-opacity-50 p-4 rounded">
            <div className="flex flex-col gap-4 items-center justify-center py-4 ">
              <h2 className="text-5xl font-bold text-white">Desafio Farmácia</h2>
              <p className="text-xl">Componente Home Farmácia.</p>
            </div>
            <div className="flex flex-col gap-4 md:items-end md:flex-row">
              <button className="rounded text-white border-white border-solid border-2 py-2 px-4 transition-transform transform hover:scale-110">
                <a href="/categorias">Listar Categorias</a>
              </button>
              <button className="rounded text-white border-white border-solid border-2 py-2 px-4 transition-transform transform hover:scale-110">
                <a href="/cadastrarcategoria">Cadastrar Categoria</a>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Home;
  