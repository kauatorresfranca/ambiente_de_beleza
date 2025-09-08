import * as S from './styles';
import { RiTimeLine, RiAwardLine } from 'react-icons/ri'; // Importa ícones do Remixicon

type ProfessionalProps = {
  image: string;
  name: string;
  description: string;
  experienceTime: string;
  isCertified: boolean;
  specialties: string[];
};

const ProfessionalItem = ({
  image,
  name,
  description,
  experienceTime,
  isCertified,
  specialties,
}: ProfessionalProps) => {
  return (
    <S.ProfessionalItem>
      <S.ProfessionalImage src={image} alt={`Foto de ${name}`} />
      <S.ProfessionalContent>
        <S.ProfessionalAdicionals>
          <S.ProfessionalAdicionalsItem>
            <RiTimeLine /> <p>{experienceTime}+ anos</p>
          </S.ProfessionalAdicionalsItem>
          <S.ProfessionalAdicionalsItem>
            {isCertified ? (
              <>
                <RiAwardLine /> <p>Certificado</p>
              </>
            ) : null}
          </S.ProfessionalAdicionalsItem>
        </S.ProfessionalAdicionals>
        <S.ProfessionalName>{name}</S.ProfessionalName>
        <S.ProfessionalDescription>{description}</S.ProfessionalDescription>
        <S.ProfessionalSpecialties>
          <h4>Especialidades:</h4>
          <S.ProfessionalSpecialtiesList>
            {specialties.map((specialty) => (
              <li key={specialty}>
                <p>{specialty}</p>
              </li>
            ))}
          </S.ProfessionalSpecialtiesList>
        </S.ProfessionalSpecialties>
      </S.ProfessionalContent>
    </S.ProfessionalItem>
  );
};

export default ProfessionalItem;