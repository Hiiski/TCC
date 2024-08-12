import red from '/solvermei.svg'
import insta from '/instagram-icon.svg'
import Fernanda from '/fernanda.png'
import Thyago from '/thyago.png'
import Henrique from '/henrique.png'

export function Equipe() {
    return (
        <main className='font-alata text-dark-blue bg-sand'>
            <header>
            <div className='flex mb-20 font-medium text-4xl px-8 list-none'>
                <img src={red} alt=""/>
                <h2 className='font-super-ocean text-5xl ml-4 my-8 '>Equipe </h2>
                <h2 className='font-super-ocean text-4xl ml-4 my-8 text-dark-red'>Suntech </h2>

                <li className='underline underline-offset-8 text-3xl ml-20 uppercase underline hover:underline-offset-dark-red'><a href="/">O projeto</a></li>
                <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Guia">Guia</a></li>
                <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Peças">Peças</a></li>
                <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Referencias">Referências</a></li>
                <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Equipe">Equipe</a></li>
            </div>
            </header>
            
            <section>
            <div className='flex justify-around'>
                <div className='text-3xl text-center'>
                    <img src={Fernanda} alt="" />
                    <h3 className='font-bold'>Fernanda Leite</h3>
                    <h3>31A T.I.</h3>
                    <img className='h-10' src={insta} alt="" />
                    <p>@fefeleit_</p>
                </div>

                <div className='text-3xl text-center'>
                    <img src={Thyago} alt="" />
                    <h3 className='font-bold'>Thyago Albino</h3>
                    <h3>31A T.I.</h3>
                    <img className='h-10' src={insta} alt="" />
                    <p>@othyaguinh</p>
                </div>

                <div className='text-3xl text-center'>
                    <img src={Henrique} alt="" />
                    <h3 className='font-bold'>Henrique Soares</h3>
                    <h3>31A T.I.</h3>
                    <img className='h-10' src={insta} alt="" />
                    <p>@hiiskikkj</p>
                </div>
            </div>
            </section>

            <div className='flex justify-center bg-dark-red'>
                <p className='text-lg font-super-ocean text-white'>SunTech</p>
                <p className='ml-2 text-base font-alata text-white'>©2024</p>
            </div>
        </main>
    )
}
