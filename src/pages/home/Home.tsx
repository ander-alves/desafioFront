function Home() {
    return (
        <div className="bg-indigo-900 min-h-screen flex flex-col items-center justify-center text-white">
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center'>
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl font-bold'>
                        Desafio Farmacia
                    </h2>
                    <p className='text-xl'>
                        Componente Home.
                    </p>
                </div>

                <div className="flex flex-col gap-4 md:items-end md:flex-row">
                    <button className='rounded text-white border-white border-solid border-2 py-2 px-4'>
                        Listar Categoria
                    </button>
                    <button className='rounded text-white border-white border-solid border-2 py-2 px-4'>
                        Deletar Categoria
                    </button>
                    <button className='rounded text-white border-white border-solid border-2 py-2 px-4'>
                        Cadastrar Categoria
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
