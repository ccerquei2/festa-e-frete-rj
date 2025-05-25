
import { MessageCircle, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5521964473264', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Locação de Mesas e Cadeiras</li>
              <li>• Serviços de Frete no RJ</li>
              <li>• Transporte de Móveis</li>
              <li>• Eventos e Celebrações</li>
              <li>• Mudanças Pequenas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+55 21 96447-3264</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>Rio de Janeiro, RJ</span>
              </div>
              <button 
                onClick={openWhatsApp}
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat no WhatsApp</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Horário de Funcionamento</h3>
            <div className="space-y-2 text-gray-300">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 17h</p>
              <p>Domingo: 9h às 15h</p>
              <p className="text-green-400 mt-3">
                Atendimento de emergência disponível
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>Feito com</span>
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <span>para o Rio de Janeiro</span>
          </p>
          <p className="text-gray-500 mt-2">
            © 2024 - Locação e Frete RJ. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
