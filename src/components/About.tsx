
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre Nós
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Somos uma empresa familiar carioca com anos de experiência em eventos e logística. 
            Nossa missão é tornar sua festa especial e resolver suas necessidades de transporte 
            com eficiência e carinho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Qualidade</h3>
            <p className="text-gray-600">
              Equipamentos sempre limpos, revisados e em perfeito estado
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Experiência</h3>
            <p className="text-gray-600">
              Anos de experiência atendendo clientes satisfeitos
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pontualidade</h3>
            <p className="text-gray-600">
              Cumprimos rigorosamente os horários combinados
            </p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicação</h3>
            <p className="text-gray-600">
              Atendimento personalizado e cuidado especial com cada cliente
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa História
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Começamos como uma pequena empresa familiar no Rio de Janeiro, com o objetivo 
                de ajudar pessoas a realizarem seus eventos e resolverem suas necessidades de transporte.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ao longo dos anos, crescemos mantendo nossos valores de qualidade, confiabilidade 
                e atendimento personalizado. Cada cliente é tratado como família.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hoje, oferecemos serviços de locação de móveis para eventos e frete 
                no Rio de Janeiro, sempre priorizando a satisfação dos nossos clientes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">RJ</div>
                <div className="text-gray-600">Atuação Local</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
                <div className="text-gray-600">Atendimento</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Compromisso</div>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">❤️</div>
                <div className="text-gray-600">Familiar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
