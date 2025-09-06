import * as S from './styles'

type ProfessionalProps = {
    image: string;
    name: string
    position: string
    description: string
    experienceTime: string
    isCertified: boolean
    specialties: string[]
}

const ProfessionalItem = ({image, name, position, description, experienceTime, isCertified, specialties } : ProfessionalProps) => {
    return (
        <S.ProfessionalItem>
            <S.ProfessionalImage src={image} alt="" />
            <S.ProfessionalContent>
                <S.ProfessionalName>{name}</S.ProfessionalName>
                <S.ProfessionalPosition>{position}</S.ProfessionalPosition>
                <S.ProfessionalDescription>{description}</S.ProfessionalDescription>
                <S.ProfessionalAdicionals>
                    <S.ProfessionalAdicionalsItem>
                        <i className='ri-time-line'></i> <p>{experienceTime}+ anos</p>
                    </S.ProfessionalAdicionalsItem>
                    <S.ProfessionalAdicionalsItem>
                        {isCertified ? (<><i className="ri-award-line"></i> <p> Certificado</p></>) : (<></>)}
                    </S.ProfessionalAdicionalsItem>
                </S.ProfessionalAdicionals>
                <S.ProfessionalSpecialties>
                    <h4>Especialidades:</h4>
                    <S.ProfessionalSpecialtiesList>
                        {specialties.map((specialty => (
                            <li key={specialty}><p>{specialty}</p></li>
                        )))}
                    </S.ProfessionalSpecialtiesList>
                </S.ProfessionalSpecialties>
                <S.ProfessionalButton secundary>Agendar com {name.split(' ')[0]}</S.ProfessionalButton>
            </S.ProfessionalContent>
        </S.ProfessionalItem>
    )
}

export default ProfessionalItem