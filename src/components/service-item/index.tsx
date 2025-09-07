import { useState } from 'react';
import * as S from './styles';

type ServiceItemProps = {
  iconClassName: string;
  title: string;
  description: string;
  price: string;
  subServices: string[];
  serviceValue: string;
};

const ServiceItem = ({ iconClassName, title, price, description, subServices, serviceValue }: ServiceItemProps) => {
  const [showAll, setShowAll] = useState(false);

  const handleScheduleClick = () => {
    // Update URL with service query parameter
    window.history.pushState(null, '', `#scheduling?service=${serviceValue}`);
    // Trigger hashchange event to notify Scheduling component
    window.dispatchEvent(new Event('hashchange'));
    // Scroll to scheduling section
    const schedulingSection = document.getElementById('scheduling');
    if (schedulingSection) {
      schedulingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <p onClick={() => setShowAll(!showAll)}>
            {showAll ? 'ver menos' : 'ver mais'}
          </p>
        )}
      </S.ServiceJobList>

      <button onClick={handleScheduleClick}>
        <S.ServiceButton secundary>Agendar Serviço</S.ServiceButton>
      </button>
    </S.ServiceItem>
  );
};

export default ServiceItem;