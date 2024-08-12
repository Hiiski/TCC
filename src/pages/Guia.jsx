import red from '/solvermei.svg'
import you from '/youtube.svg'
import jogo from '/volei.svg'

export function Guia() {
  return (
    <section className='bg-sand'>
      <div className='bg-gray-500 flex mb-20 uppercase font-medium text-4xl px-8 list-none text-white'>
        <img src={red} alt="" />
       
        <li className='ml-80 my-8'><a href="/">O projeto</a></li>
        <li className='mx-20 my-8'><a href="/Guia">Guia</a></li>
        <li className='mx-20 my-8'><a href="/Peças">Peças</a></li>
        <li className='mx-20 my-8'><a href="/Referencias">Referencias</a></li>
        <li className='mx-20 my-8'><a href="/Equipe">Equipe</a></li>
      </div>

        <div>
            <h2>Guia de Utilização</h2>
            <p>1.Cadastre-se no aplicativo, colocando suas informações e selecionando suas preferências.</p>
            <p> 2.Ligue o Bluetooth do seu celular.</p>
            <p>3.Após isso é só aguardar o aviso do SunTech para a reaplicação e recomendação do seu protetor solar.</p>
            <p>4.Para acionar o dispenser coloque suas mãos embaixo da torneira, e o protetor sairá automaticamente na quantidade correta para aplicação.</p>
            <p>5. Agora você pode guardar seus itens e aproveitar a praia!</p>
        </div>

        <div>
            <img src={you} alt="" />
            <img src={jogo} alt="" />
        </div>

        <div className='flex justify-center bg-red-800 font-bold text-white'>
            <p className=''>SunTech @2024</p>
        </div>

    
    </section>
  )
}
