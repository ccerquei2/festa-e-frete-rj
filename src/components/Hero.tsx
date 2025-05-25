
import { Button } from '@/components/ui/button';
import { MessageCircle, Truck, Users } from 'lucide-react';

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5521964473264?text=Olá! Gostaria de saber mais sobre os serviços de locação e frete.', '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Soluções Completas para 
            <span className="text-blue-600"> Eventos</span> e 
            <span className="text-green-600"> Frete</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            Locação de mesas e cadeiras para festas + Serviços de frete por todo Rio de Janeiro
          </p>

          {/* Event Image Showcase */}
          <div className="mb-12 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <img 
                src="/lovable-uploads/3068e49f-16bb-456c-bc16-54885b698cd3.png" 
                alt="Evento elegante com mesas e cadeiras - Locação RJ"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Transformamos Seus Eventos em Momentos Inesquecíveis
                </h3>
                <p className="text-lg opacity-90">
                  Mesas e cadeiras de qualidade para casamentos, festas e celebrações
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Locação para Eventos</h3>
              <p className="text-gray-600 mb-6">
                Mesas e cadeiras de qualidade para tornar sua festa inesquecível. 
                Variedade, conforto e preços acessíveis.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✓ Entrega e retirada incluídas</li>
                <li>✓ Equipamentos higienizados</li>
                <li>✓ Variedade de modelos</li>
                <li>✓ Preços competitivos</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <Truck className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Frete no Rio de Janeiro</h3>
              <p className="text-gray-600 mb-6">
                Transporte seguro e pontual por toda a cidade. 
                Facilidade no agendamento e total confiabilidade.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✓ Cobertura em todo RJ</li>
                <li>✓ Pontualidade garantida</li>
                <li>✓ Carga protegida</li>
                <li>✓ Agendamento fácil</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full transition-all hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Fale Conosco no WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-full transition-all hover:scale-105"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
