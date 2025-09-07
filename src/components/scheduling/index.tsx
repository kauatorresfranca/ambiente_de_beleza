import * as S from './styles';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';

const BUSINESS_DAYS = [2, 3, 4, 5, 6]; // Terça (2) a Sábado (6)
const BUSINESS_HOURS = Array.from(
  { length: 21 },
  (_, i) => {
    const hour = Math.floor(i / 2) + 9;
    const minutes = i % 2 === 0 ? '00' : '30';
    return `${hour}:${minutes}`;
  }
);

const SERVICES = [
  { value: 'nails', label: 'Unhas' },
  { value: 'hair', label: 'Cabelo' },
  { value: 'hair_chemistry', label: 'Química Capilar' },
  { value: 'eyebrows_micropigmentation', label: 'Sobrancelhas & Micropigmentação' },
  { value: 'aesthetics_wellness', label: 'Estética & Bem-estar' },
  { value: 'special_packages', label: 'Pacotes Especiais' },
];

const WHATSAPP_NUMBER = '+558281218676';

const Scheduling = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    service: '',
    preferredTime: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const filterBusinessDays = (date: Date) => BUSINESS_DAYS.includes(date.getDay());

  const getMinMaxDates = () => {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30);
    return { min: today, max: maxDate };
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // limpa erro ao digitar
  };

  const validateField = (name: string, value: string | Date | null) => {
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      setErrors((prev) => ({ ...prev, [name]: 'Este campo é obrigatório.' }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const getWhatsAppUrl = () => {
    if (!formData.fullName || !formData.service || !selectedDate || !formData.preferredTime) {
      return '#';
    }
    const selectedService = SERVICES.find((service) => service.value === formData.service);
    const serviceLabel = selectedService ? selectedService.label : formData.service;
    const message = `Olá, sou ${formData.fullName}, quero agendar uma sessão de ${serviceLabel} e gostaria de saber se tem horário disponível para dia ${formatDate(
      selectedDate
    )} às ${formData.preferredTime}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName) newErrors.fullName = 'Informe seu nome completo.';
    if (!formData.service) newErrors.service = 'Selecione um serviço.';
    if (!selectedDate) newErrors.preferredDate = 'Selecione uma data.';
    if (!formData.preferredTime) newErrors.preferredTime = 'Selecione um horário.';

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
    }
  };

  return (
    <S.Scheduling id='scheduling'>
      <div className="container">
        <S.SchedulingTitle>
          Agende seu <span>horário</span>
        </S.SchedulingTitle>
        <S.SchedulingDescription>
          Agende seu horário conosco e transforme sua beleza em nosso ambiente acolhedor
        </S.SchedulingDescription>
        <S.SchedulingForm>
          <h3>
            <i className="ri-calendar-schedule-line"></i>Formulário de Agendamento
          </h3>

          <S.SchedulingFormLine>
            <S.InputGroup>
              <label htmlFor="fullName">Nome Completo *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Seu nome completo"
                value={formData.fullName}
                onChange={handleInputChange}
                onBlur={() => validateField('fullName', formData.fullName)}
                className={errors.fullName ? 'error' : ''}
              />
              {errors.fullName && <S.ErrorMessage>{errors.fullName}</S.ErrorMessage>}
            </S.InputGroup>

            <S.InputGroup>
              <label htmlFor="service">Serviço Desejado *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                onBlur={() => validateField('service', formData.service)}
                className={errors.service ? 'error' : ''}
              >
                <option value="">Selecione um serviço</option>
                {SERVICES.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
              {errors.service && <S.ErrorMessage>{errors.service}</S.ErrorMessage>}
            </S.InputGroup>
          </S.SchedulingFormLine>

          <S.SchedulingFormLine>
            <S.InputGroup>
              <label htmlFor="preferredDate">Data Preferida *</label>
              <S.DatePickerWrapper>
                <DatePicker
                  id="preferredDate"
                  name="preferredDate"
                  selected={selectedDate}
                  onChange={(date: Date | null) => {
                    setSelectedDate(date);
                    setErrors((prev) => ({ ...prev, preferredDate: '' }));
                  }}
                  onBlur={() => validateField('preferredDate', selectedDate)}
                  filterDate={filterBusinessDays}
                  minDate={getMinMaxDates().min}
                  maxDate={getMinMaxDates().max}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Selecione uma data"
                  className={`date-picker ${errors.preferredDate ? 'error' : ''}`}
                  locale={ptBR}
                  popperPlacement="bottom"
                  popperClassName="date-picker-popper"
                />
              </S.DatePickerWrapper>
              {errors.preferredDate && <S.ErrorMessage>{errors.preferredDate}</S.ErrorMessage>}
            </S.InputGroup>

            <S.InputGroup>
              <label htmlFor="preferredTime">Horário Preferido *</label>
              <select
                id="preferredTime"
                name="preferredTime"
                disabled={!selectedDate}
                value={formData.preferredTime}
                onChange={handleInputChange}
                onBlur={() => validateField('preferredTime', formData.preferredTime)}
                className={errors.preferredTime ? 'error' : ''}
              >
                <option value="">Selecione um horário</option>
                {BUSINESS_HOURS.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              {errors.preferredTime && <S.ErrorMessage>{errors.preferredTime}</S.ErrorMessage>}
            </S.InputGroup>
          </S.SchedulingFormLine>

          <S.SchedulingFormLine>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSubmit}
            >
              <S.ProfessionalButton primary={true}>
                Agendar
              </S.ProfessionalButton>
            </a>
          </S.SchedulingFormLine>
        </S.SchedulingForm>
      </div>
    </S.Scheduling>
  );
};

export default Scheduling;
