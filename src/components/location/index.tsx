import * as S from './styles';

const Location = () => {
  const now = new Date();
  const today = now.getDay(); // 0 = domingo, 1 = segunda...
  const hour = now.getHours();

  // Nomes dos dias
  const weekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  // Verifica se está aberto
  const isOpen =
    today >= 2 && today <= 6 && hour >= 9 && hour < 18; // terça (2) até sábado (6), entre 9h e 18h

  return (
    <S.Location>
      <S.LocationTitle>
        Aonde <span>Estamos</span>
      </S.LocationTitle>
      <S.LocationDescription>
        Venha nos visitar, esperamos por você !
      </S.LocationDescription>
      <div className="container">
        <S.LocationInfoList>
          <S.LocationInfo>
            <h2>
              <i className="ri-map-pin-line"></i>Nosso Endereço
            </h2>
            <p>Av. José Aírton Gondim Lamenha, 250</p>
            <p>São Jorge, Maceió - AL</p>
            <p>CEP: 57044-098</p>
          </S.LocationInfo>

          <S.LocationInfo>
            <h2>
              <i className="ri-time-line"></i>Horário de Funcionamento
            </h2>
            <div>
              <p>Terça à Sábado</p>
              <p>9h às 18h</p>
            </div>
            <div>
              <p>{weekDays[today]} (hoje)</p>
              <p className={isOpen ? 'open' : 'closed'}>
                {isOpen ? 'Aberto' : 'Fechado'}
              </p>
            </div>
          </S.LocationInfo>
        </S.LocationInfoList>

        <S.MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.976387614087!2d-35.74705868518066!3d-9.62613509312055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701459c1b0f0e0b%3A0x4c7b8f1e6a8b0e2!2sAv.%20Jos%C3%A9%20A%C3%ADrton%20Gondim%20Lamenha%2C%20250%2C%20Macei%C3%B3%20-%20AL%2C%2057044-098%2C%20Brazil!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Location Map"
          ></iframe>
        </S.MapContainer>
      </div>
    </S.Location>
  );
};

export default Location;
