import { useState } from 'react';
import * as S from './styles';

type ServiceItemProps = {
  icon: React.ComponentType<any>; // Prop para o componente de ícone
  title: string;
  description: string;
  price: string;
  subServices: string[];
  serviceValue: string;
};

const ServiceItem = ({ icon: Icon, title, price, description, subServices, serviceValue }: ServiceItemProps) => {
  const [showAll, setShowAll] = useState(false);

  const handleScheduleClick = () => {
    window.history.pushState(null, '', `#scheduling?service=${serviceValue}`);
    window.dispatchEvent(new Event('hashchange'));
    const schedulingSection = document.getElementById('scheduling');
    if (schedulingSection) {
      schedulingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <S.ServiceItem>
      <Icon /> {/* Renderiza o ícone passado como prop */}
      <S.ServiceTitle>{title}</S.ServiceTitle>
      <S.ServiceText>{description}</S.ServiceText>
      <S.ServicePrice>{price}</S.ServicePrice>

      <S.ServiceJobList>
        {(showAll ? subServices : subServices.slice(0, 3)).map((service, index) => (
          <li key={index}>{service}</li>
        ))}

        {subServices.length > 3 && (
          <p onClick={() => setShowAll(!showAll)}>
            {showAll ? 'ver menos' : 'ver mais'}
          </p>
        )}
      </S.ServiceJobList>
      <S.ServiceButton onClick={handleScheduleClick} secondary>
        Agendar Serviço
      </S.ServiceButton>
    </S.ServiceItem>
  );
};

export default ServiceItem;