import * as S from './styles'

type ServiceItemProps = {
  iconClassName: string
  title: string
  description: string
  price: string
  subServices: string[]
}

const ServiceItem = ({ iconClassName, title, price, description, subServices }: ServiceItemProps) => {
  return (
    <S.ServiceItem>
      <i className={iconClassName}></i>
      <S.ServiceTitle>{title}</S.ServiceTitle>
      <S.ServiceText>{description}</S.ServiceText>
      <S.ServicePrice>{price}</S.ServicePrice>
      <S.ServiceJobList>
        {subServices.slice(0, 3).map((service, index) => (
          <li key={index}>{service}</li>
        ))}
        {subServices.length > 3 && <p>ver mais</p>}
      </S.ServiceJobList>
      <S.ServiceButton secundary>Agendar Serviço</S.ServiceButton>
    </S.ServiceItem>
  )
}

export default ServiceItem
