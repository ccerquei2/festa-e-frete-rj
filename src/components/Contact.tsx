
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5521964473264?text=Olá! Gostaria de mais informações sobre os serviços.', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para atender você! Faça seu orçamento sem compromisso 
            e descubra como podemos tornar seu evento especial ou resolver suas necessidades de frete.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <MessageCircle className="w-8 h-8 mr-3 text-green-500" />
                Fale Conosco Agora
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 text-lg">
                A forma mais rápida de nos contatar é pelo WhatsApp. 
                Responderemos em minutos!
              </p>
              
              <Button 
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg rounded-lg transition-all hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Iniciar Conversa no WhatsApp
              </Button>

              <div className="grid grid-cols-1 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-semibold">Telefone/WhatsApp</p>
                    <p className="text-gray-300">+55 21 96447-3264</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-red-400" />
                  <div>
                    <p className="font-semibold">Área de Atendimento</p>
                    <p className="text-gray-300">Todo o Rio de Janeiro</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <div>
                    <p className="font-semibold">Horário de Atendimento</p>
                    <p className="text-gray-300">Segunda a Sábado: 8h às 18h</p>
                    <p className="text-gray-300">Domingo: 9h às 15h</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Orçamento Gratuito</h3>
                <p className="mb-6 text-blue-100">
                  Solicite seu orçamento sem compromisso. 
                  Respondemos rapidamente com o melhor preço!
                </p>
                <Button 
                  onClick={() => window.open('https://wa.me/5521964473264?text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-600 to-teal-600 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Atendimento de Emergência</h3>
                <p className="mb-6 text-green-100">
                  Precisa com urgência? Temos serviço de atendimento 
                  para situações emergenciais!
                </p>
                <Button 
                  onClick={() => window.open('https://wa.me/5521964473264?text=URGENTE! Preciso de atendimento emergencial.', '_blank')}
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
                >
                  Contato Emergencial
                </Button>
              </CardContent>
            </Card>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Por que escolher nosso WhatsApp?</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Resposta rápida (geralmente em minutos)</li>
                <li>✓ Orçamento instantâneo</li>
                <li>✓ Agendamento direto</li>
                <li>✓ Fotos e detalhes por mensagem</li>
                <li>✓ Acompanhamento do serviço</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
