import red from '/solvermei.svg'
import you from '/youtube.svg'
import jogo from '/volei.svg'





export default function Guia() {
  return (
    <section>
        <div className = 'bg-gray-500 flex mb-80 uppercase font-medium text-4xl px-8 list-none'>
            <img src= {red} alt="" />
            <li className='p-2'><a href="">O projeto</a></li>
            <li className='p-2'><a href="">Guia</a></li>
            <li className='p-2'><a href="">Peças</a></li>
            <li className='p-2'><a href="">Referencias</a></li>
            <li className='p-2'><a href="">Equipe</a></li>
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

        <div>
            <p>SunTech @2024</p>
        </div>
    
    </section>
  )
}
