import boi from '/img 3boia.svg'
import red from '/solvermei.svg'

export function Referencias() {
    return (
        <section className='bg-sand text-blue-700'>
            <div className='flex mb-20 font-medium text-4xl px-8 list-none'>
                <img src={red} alt="" />
                <h2 className='ml-4 my-8'>Referências Bibliográficas</h2>

                <li className='ml-40 my-8 uppercase'><a href="/Home">O projeto</a></li>
                <li className='mx-10 my-8 uppercase'><a href="/Guia">Guia</a></li>
                <li className='mx-10 my-8 uppercase'><a href="/Peças">Peças</a></li>
                <li className='mx-10 my-8 uppercase'><a href="/Referencias">Referencias</a></li>
                <li className='mx-10 my-8 uppercase'><a href="/Equipe">Equipe</a></li>
            </div>
            
            <div>
                <p className='mx-40 my-20 text-2xl'>O câncer de pele, no Brasil, corresponde a 33% de todos os diagnósticos da doença, sendo a principal causa a exposição excessiva ao sol. Estudos exploram diferentes aspectos da exposição ao sol e do uso do protetor solar, tendo como resultado uma quantidade significativa de pessoas que fazem o uso incorreto do protetor solar; Não o utilizando pelo simples fato de esquecerem ou não saberem como funciona o uso e a ação da proteção solar.</p>
            </div>

            <div className='mx-40 text-2xl flex'>
                <div className='flex flex-col'>
                    <h3 className='text-4xl mb-4 font-bold'>Artigos referenciais:</h3>
                    <p className=''>https://ojs.brazilianjournals.com.br/ojs/index.php/BRJD/article/view/21841</p>
                    <p className=''>https://periodicos.puc-campinas.edu.br/cienciasmedicas/article/view/1050</p>
                    <p className=''>https://sea.ufr.edu.br/index.php/SEA/article/view/1786</p>
                </div>
                <img src={boi} alt="" className='float-right'/>
            </div>
            
            
            
            <div className='flex justify-center bg-red-800 font-bold text-white'>
                <p className=''>SunTech @2024</p>
            </div>

        

        </section>
    )
}
