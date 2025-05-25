
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      event: "Festa de 15 anos",
      comment: "Excelente atendimento! As mesas e cadeiras chegaram limpas e pontuais. Minha filha ficou encantada com a festa!",
      rating: 5
    },
    {
      name: "João Silva",
      event: "Mudança de apartamento",
      comment: "Precisei transportar meus móveis com urgência. O frete foi rápido, seguro e o preço justo. Super recomendo!",
      rating: 5
    },
    {
      name: "Ana Costa",
      event: "Casamento",
      comment: "Contratei a locação para meu casamento. Tudo perfeito! Entrega pontual, móveis de qualidade e ótimo preço.",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      event: "Evento corporativo",
      comment: "Empresa séria e confiável. Já usei várias vezes para eventos da empresa e sempre superaram as expectativas.",
      rating: 5
    },
    {
      name: "Fernanda Lima",
      event: "Aniversário",
      comment: "Atendimento excepcional! Desde o primeiro contato até a retirada, tudo foi perfeito. Voltarei a contratar!",
      rating: 5
    },
    {
      name: "Roberto Mendes",
      event: "Frete de equipamentos",
      comment: "Profissionais muito cuidadosos. Transportaram meus equipamentos com total segurança. Preço honesto!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. Veja alguns depoimentos de quem já confiou em nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.event}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-8 mb-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">4.9</div>
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600">Avaliações</div>
              </div>
            </div>
            
            <p className="text-gray-600">
              Média de avaliações dos nossos clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
