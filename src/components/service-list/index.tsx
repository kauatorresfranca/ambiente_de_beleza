import ServiceItem from '../service-item'
import * as S from './styles'

const Services = [
  {
    id: 1,
    iconClassName: 'ri-sparkling-2-line', // brilho = unhas feitas
    title: 'Unhas',
    description: 'Beleza até a ponta dos dedos! Do cuidado básico ao luxo das técnicas modernas.',
    price: 'A partir de R$ 49,90',
    subServices: [
      'Manicure',
      'Pedicure',
      'Alongamento de unha',
      'Banho de gel',
      'Esmaltação em gel',
      'Unha postiça',
      'Spa dos pés',
    ],
  },
  {
    id: 2,
    iconClassName: 'ri-scissors-2-line', // tesoura = corte de cabelo
    title: 'Cabelo',
    description: 'Transforme seus fios com cortes modernos, escovas incríveis e tratamentos revitalizantes.',
    price: 'A partir de R$ 79,90',
    subServices: [
      'Corte',
      'Escova',
      'Penteado',
      'Hidratação',
      'Nutrição',
      'Reconstrução',
      'Cauterização',
      'Banho de verniz',
      'Banho de petróleo',
      'Botox orgânico',
      'Selagem orgânica',
      'Progressiva orgânica',
      'Terapia capilar',
    ],
  },
  {
    id: 3,
    iconClassName: 'ri-palette-line', // paleta de cores = química capilar
    title: 'Química Capilar',
    description: 'Cores vibrantes, mechas iluminadas e técnicas modernas para renovar o visual.',
    price: 'A partir de R$ 120,00',
    subServices: ['Luzes', 'Mechas', 'Moreno iluminado', 'Coloração', 'Permanente afro'],
  },
  {
    id: 4,
    iconClassName: 'ri-eye-line', // olhar = sobrancelhas e micropigmentação
    title: 'Sobrancelhas & Micropigmentação',
    description: 'Destaque seu olhar com design perfeito e técnicas avançadas de micropigmentação.',
    price: 'A partir de R$ 59,90',
    subServices: [
      'Design de sobrancelhas',
      'Micropigmentação de sobrancelhas',
      'Micropigmentação de olhos',
      'Micropigmentação de lábios',
    ],
  },
  {
    id: 5,
    iconClassName: 'ri-heart-3-line', // brilho/cuidado = estética e pele
    title: 'Estética & Bem-estar',
    description: 'Tratamentos de pele e cuidados estéticos para renovar sua beleza natural.',
    price: 'Sob consulta',
    subServices: [
      'Limpeza de pele',
      'Depilação',
      'Jato de plasma: linhas de expressão',
      'Jato de plasma: manchas e acne',
      'Jato de plasma: flacidez e estrias',
    ],
  },
  {
    id: 6,
    iconClassName: 'ri-gift-line', // presente = pacotes especiais
    title: 'Pacotes Especiais',
    description: 'Combine serviços exclusivos e viva uma experiência de beleza completa.',
    price: 'A partir de R$ 199,90',
    subServices: ['Dia da Noiva', 'Dia da Princesa', 'Pacote Relax', 'Pacote Premium'],
  },
]

const ServiceList = () => {
  return (
    <S.Services>
        <S.ServicesTitle>
          Nossos <span>Serviços</span>
        </S.ServicesTitle>
      <div className="container">
        <S.ServicesDescription>
          Do cuidado diário a momentos especiais, temos serviços personalizados para valorizar ainda mais sua beleza.
        </S.ServicesDescription>
        <S.ServicesList>
          {Services.map((service) => (
            <ServiceItem
              key={service.id}
              title={service.title}
              description={service.description}
              iconClassName={service.iconClassName}
              price={service.price}
              subServices={service.subServices}
            />
          ))}
        </S.ServicesList>
      </div>
    </S.Services>
  )
}

export default ServiceList
