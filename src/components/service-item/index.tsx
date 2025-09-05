import { useState } from 'react'
import * as S from './styles'

type ServiceItemProps = {
  iconClassName: string
  title: string
  description: string
  price: string
  subServices: string[]
}

const ServiceItem = ({ iconClassName, title, price, description, subServices }: ServiceItemProps) => {
  const [showAll, setShowAll] = useState(false)

  return (
    <S.ServiceItem>
      <i className={iconClassName}></i>
      <S.ServiceTitle>{title}</S.ServiceTitle>
      <S.ServiceText>{description}</S.ServiceText>
      <S.ServicePrice>{price}</S.ServicePrice>

      <S.ServiceJobList>
        {(showAll ? subServices : subServices.slice(0, 3)).map((service, index) => (
          <li key={index}>{service}</li>
        ))}

        {subServices.length > 3 && (
          <p
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'ver menos' : 'ver mais'}
          </p>
        )}
      </S.ServiceJobList>

      <S.ServiceButton secundary>Agendar Serviço</S.ServiceButton>
    </S.ServiceItem>
  )
}

export default ServiceItem
