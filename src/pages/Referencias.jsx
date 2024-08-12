import boy from '/menino.svg'
import red from '/solvermei.svg'

export function Referencias() {
    return (
        <main className='text-dark-blue font-alata bg-sand text-blue-700'>
            <header>
            <div className='flex mb-20 font-medium text-4xl px-8 list-none'>
                <img src={red} alt="" />
                <h2 className='ml-4 my-8 text-4xl font-super-ocean'>Referências Bibliográficas</h2>

                <li className='underline underline-offset-8 text-3xl ml-20 uppercase underline hover:underline-offset-dark-red'><a href="/">O projeto</a></li>
                <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Guia">Guia</a></li>
                <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Peças">Peças</a></li>
                <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Referencias">Referências</a></li>
                <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Equipe">Equipe</a></li>
            </div>
            </header>

            <section>
            <div>
                <p className='text-justify mx-40 my-20 text-2xl text-dark-blue'>O câncer de pele, no Brasil, corresponde a 33% de todos os diagnósticos da doença, sendo a principal causa a exposição excessiva ao sol. Estudos exploram diferentes aspectos da exposição ao sol e do uso do protetor solar, tendo como resultado uma quantidade significativa de pessoas que fazem o uso incorreto do protetor solar; Não o utilizando pelo simples fato de esquecerem ou não saberem como funciona o uso e a ação da proteção solar.</p>
            </div>

            <div className='mx-40 text-2xl flex'>
                <div className='text-justify flex flex-col'>
                    <h3 className='text-4xl mb-4 font-bold'>Artigos referenciais:</h3>
                    <p className=''>https://ojs.brazilianjournals.com.br/ojs/index.php/BRJD/article/view/21841</p>
                    <p className=''>https://periodicos.puc-campinas.edu.br/cienciasmedicas/article/view/1050</p>
                    <p className=''>https://sea.ufr.edu.br/index.php/SEA/article/view/1786</p>
                </div>
                <img src={boy} alt="" className='float-right'/>
            </div>
            </section>
            
            <div className='flex justify-center bg-dark-red'>
                <p className='text-lg font-super-ocean text-white'>SunTech</p>
                <p className='ml-2 text-base font-alata text-white'>©2024</p>
            </div>
        </main>
    )
}
