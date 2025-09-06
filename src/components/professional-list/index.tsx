import ProfessionalItem from '../professional-item'
import professional1 from '../../assets/images/profissionals/profissional1.jpg'
import professional2 from '../../assets/images/profissionals/profissional2.jpg'
import professional3 from '../../assets/images/profissionals/profissional3.jpg'
import professional4 from '../../assets/images/profissionals/profissional4.jpg'
import * as S from './styles'

const professionals = [
    {
        image: `${professional1}`,
        name: 'Rosivangela Maria',
        position: 'Cabeleireira Profissional',
        description: 'Especialista em cortes femininos, coloração e luzes modernas.',
        experienceTime: '12',
        isCertified: true,
        specialties: ['Corte Feminino', 'Luzes', 'Coloração']
    },
    {
        image: `${professional2}`,
        name: 'Ary Silva',
        position: 'Barbeiro Profissional',
        description: 'Focado em cortes masculinos, barba e design de sobrancelhas.',
        experienceTime: '8',
        isCertified: true,
        specialties: ['Corte Masculino', 'Barba', 'Sobrancelha']
    },
    {
        image: `${professional3}`,
        name: 'Carla Souza',
        position: 'Manicure e Pedicure',
        description: 'Profissional em cuidados das mãos e pés, especialista em esmaltação em gel.',
        experienceTime: '6',
        isCertified: false,
        specialties: ['Manicure', 'Pedicure', 'Esmaltação em Gel']
    },
    {
        image: `${professional4}`,
        name: 'Mariana Oliveira',
        position: 'Maquiadora Profissional',
        description: 'Maquiagens para festas, casamentos e ensaios fotográficos.',
        experienceTime: '10',
        isCertified: true,
        specialties: ['Maquiagem Social', 'Noivas', 'Penteado']
    },
]

const ProfessionalList = () => {
    return (
        <S.Professionals id='professionals'>
            <S.ProfessionalsTitle>Nossa <span>Equipe</span></S.ProfessionalsTitle>
            <S.ProfessionalsDescription>
                Profissionais qualificados e experientes, dedicados a realçar sua beleza com carinho
            </S.ProfessionalsDescription>
            <div className="container">
                <S.ProfessionalList>
                    {professionals.map((professional => (
                        <ProfessionalItem
                            key={professional.name}
                            image={professional.image}
                            name={professional.name}
                            description={professional.description}
                            experienceTime={professional.experienceTime}
                            isCertified={professional.isCertified}
                            position={professional.position}
                            specialties={professional.specialties}
                        />
                    )))}
                </S.ProfessionalList>
            </div>
        </S.Professionals>
    )
}

export default ProfessionalList
