
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Users, Truck, Clock, Shield, Star, MapPin, Calendar } from 'lucide-react';

const Services = () => {
  const openWhatsApp = (service: string) => {
    const message = `Olá! Tenho interesse no serviço de ${service}. Gostaria de mais informações.`;
    window.open(`https://wa.me/5521964473264?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para seus eventos e necessidades de transporte no Rio de Janeiro
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Table and Chair Rental */}
          <Card className="bg-white shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
              <div className="flex items-center mb-4">
                <Users className="w-12 h-12 mr-4" />
                <div>
                  <CardTitle className="text-3xl font-bold">Locação de Mesas e Cadeiras</CardTitle>
                  <CardDescription className="text-blue-100 text-lg">
                    Para festas, eventos e celebrações
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Qualidade Garantida</h4>
                    <p className="text-gray-600">Móveis em excelente estado, limpos e higienizados</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Confiabilidade</h4>
                    <p className="text-gray-600">Entrega pontual e retirada no prazo combinado</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Variedade</h4>
                    <p className="text-gray-600">Diferentes modelos para todos os tipos de evento</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Preços Acessíveis</h4>
                    <p className="text-gray-600">Tarifas competitivas para seu orçamento</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Ideal para:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Festas de aniversário</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Casamentos</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Eventos corporativos</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Confraternizações</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Formaturas</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Reuniões familiares</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => openWhatsApp('locação de mesas e cadeiras')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Orçamento para Evento
              </Button>
            </CardContent>
          </Card>

          {/* Freight Services */}
          <Card className="bg-white shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8">
              <div className="flex items-center mb-4">
                <Truck className="w-12 h-12 mr-4" />
                <div>
                  <CardTitle className="text-3xl font-bold">Serviços de Frete</CardTitle>
                  <CardDescription className="text-green-100 text-lg">
                    Cobertura completa no Rio de Janeiro
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pontualidade</h4>
                    <p className="text-gray-600">Horários respeitados e entregas no prazo</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Segurança</h4>
                    <p className="text-gray-600">Carga protegida durante todo o transporte</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cobertura Total</h4>
                    <p className="text-gray-600">Atendemos toda a cidade do Rio de Janeiro</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Agendamento Fácil</h4>
                    <p className="text-gray-600">Processo simples e rápido pelo WhatsApp</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Transportamos:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Móveis e eletrodomésticos</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Mudanças pequenas</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Materiais de construção</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Equipamentos</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Produtos diversos</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>E muito mais!</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => openWhatsApp('frete')}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar Frete Agora
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Precisa dos Dois Serviços?</h3>
            <p className="text-lg mb-6">
              Oferecemos descontos especiais para clientes que contratam locação e frete juntos!
            </p>
            <Button 
              onClick={() => openWhatsApp('locação e frete')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Combo Promocional
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
