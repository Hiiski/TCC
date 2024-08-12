import red from '/solvermei.svg'

export function Equipe() {
    return (
        <section className='bg-sand'>
            <div className='flex mb-20 font-medium text-4xl px-8 list-none'>
                <img src={red} alt="" />
                <h2 className='ml-4 my-8'>Equipe Suntech</h2>

                <li className='ml-40 my-8 uppercase'><a href="/">O projeto</a></li>
                <li className='mx-10 my-8 uppercase'><a href="/Guia">Guia</a></li>
                <li className='mx-10 my-8 uppercase'><a href="/Peças">Peças</a></li>
                <li className='mx-10 my-8 uppercase'><a href="/Referencias">Referencias</a></li>
                <li className='mx-10 my-8 uppercase'><a href="/Equipe">Equipe</a></li>
            </div>
            
            <div className='flex justify-around'>
                <div>
                    <img src={red} alt="" />
                        <h3>Fernanda Leite</h3>
                        <h3>31A T.I.</h3>
                        <p>@fefeleit_</p>
                </div>

                <div>
                    <img src={red} alt="" />
                        <h3>Thyago Albino</h3>
                        <h3>31A T.I.</h3>
                        <p>@othyaguinh</p>
                </div>

                <div>
                    <img src={red} alt="" />
                    <h3>Henrique Soares</h3>
                    <h3>31A T.I.</h3>
                    <p>@hiiskikkj</p>
                </div>
            </div>



            <div className='flex justify-center bg-red-800 font-bold text-white'>
                <p className=''>SunTech @2024</p>
            </div>

        </section>
    )
}
