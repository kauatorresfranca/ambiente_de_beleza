import ServiceItem from '../service-item'
import * as S from './styles'

const Services = [
  {
    id: 1,
    iconClassName: 'ri-scissors-line',
    title: 'Unhas',
    description: 'Cuidados completos para suas mãos e pés.',
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
    iconClassName: 'ri-scissors-line',
    title: 'Cabelo',
    description: 'Transforme seu visual com nossos serviços capilares.',
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
    iconClassName: 'ri-palette-line',
    title: 'Química',
    description: 'Resultados profissionais para realçar sua beleza.',
    price: 'A partir de R$ 120,00',
    subServices: [
      'Luzes',
      'Mechas',
      'Moreno iluminado',
      'Coloração',
      'Permanente afro',
    ],
  },
  {
    id: 4,
    iconClassName: 'ri-heart-line',
    title: 'Estética',
    description: 'Tratamentos para pele e bem-estar.',
    price: 'Sob consulta',
    subServices: [
      'Depilação',
      'Micropigmentação (sobrancelhas, contorno dos olhos e boca)',
      'Design de sobrancelhas',
      'Limpeza de pele',
      'Jato de plasma: Remoção de sinais (sinais, verrugas e sirigomas)',
      'Jato de plasma: Linhas de expressão',
      'Jato de plasma: Tratamento de acne',
      'Jato de plasma: Tratamento de manchas',
      'Jato de plasma: Flacidez',
      'Jato de plasma: Blefaroplastia sem corte',
      'Jato de plasma: Tratamento e camuflagem de estrias',
    ],
  },
]

const ServiceList = () => {
  return (
    <S.Services>
      <div className="container">
        <S.ServicesTitle>
          Nossos <span>Serviços</span>
        </S.ServicesTitle>
        <S.ServicesDescription>
          Oferecemos uma gama completa de serviços de beleza com qualidade e carinho especial
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
