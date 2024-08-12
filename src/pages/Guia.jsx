import red from '/solvermei.svg'
import you from '/youtube.svg'
import jogo from '/volei.svg'

export function Guia() {
  return (
    <main className='text-3xl bg-sand text-dark-blue font-alata'>
      <section>
      <div className='flex mb-20 font-medium text-4xl px-8 list-none'>
        <img src={red} alt="" />
        <h2 className='text-5xl font-super-ocean'>Guia de Utilização</h2>

        <li className='underline underline-offset-8 text-3xl ml-20 uppercase underline hover:underline-offset-dark-red'><a href="/">O projeto</a></li>
        <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Guia">Guia</a></li>
        <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Peças">Peças</a></li>
        <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Referencias">Referências</a></li>
        <li className='underline underline-offset-8 text-3xl ml-20 uppercase'><a href="/Equipe">Equipe</a></li>
      </div>

        <div>
            <p className='leading-normal text-dark-blue text-justify p-20 mr-900'>
            1. Cadastre-se no aplicativo, colocando suas informações e selecionando suas preferências. <br /> 
            2. Ligue o Bluetooth do seu celular. <br /> 
            3. Após isso é só aguardar o aviso do SunTech para a reaplicação e recomendação do seu protetor solar. <br /> 
            4. Para acionar o dispenser coloque suas mãos embaixo da torneira, e o protetor sairá automaticamente na quantidade correta para aplicação. <br /> 
            5. Agora você pode guardar seus itens e aproveitar a praia! 
            </p>
        </div>

        <div>
            <img src={jogo} alt="" />
            <img src={you} alt="" />
        </div>

        <div className='flex justify-center bg-dark-red'>
          <p className='text-lg font-super-ocean text-white'>SunTech</p>
          <p className='ml-2 text-base font-alata text-white'>©2024</p>
        </div>
        </section>
    </main>
  )
}
