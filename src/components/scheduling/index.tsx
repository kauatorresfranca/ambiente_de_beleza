import * as S from './styles';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';

// Definindo constantes para horários e dias válidos
const BUSINESS_DAYS = [2, 3, 4, 5, 6]; // Terça (2) a Sábado (6)
const BUSINESS_HOURS = Array.from(
  { length: 21 }, // 21 intervalos de 30 minutos entre 9:00 e 19:00
  (_, i) => {
    const hour = Math.floor(i / 2) + 9;
    const minutes = i % 2 === 0 ? '00' : '30';
    return `${hour}:${minutes}`;
  }
);
const WHATSAPP_NUMBER = '+558281218676';

const Scheduling = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    service: '',
    preferredTime: '',
    notes: '',
  });
  const [dateError, setDateError] = useState('');

  // Função para filtrar dias válidos (terça a sábado)
  const filterBusinessDays = (date: Date) => {
    const day = date.getDay();
    return BUSINESS_DAYS.includes(day);
  };

  // Função para obter a data mínima (hoje) e máxima (30 dias à frente)
  const getMinMaxDates = () => {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30); // Limite de 30 dias
    return { min: today, max: maxDate };
  };

  // Função para formatar a data no formato DD/MM/YYYY
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Função para atualizar os dados do formulário
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para gerar a URL do WhatsApp
  const getWhatsAppUrl = () => {
    if (!formData.fullName || !formData.service || !selectedDate || !formData.preferredTime) {
      return '#'; // Retorna um link inativo se os campos obrigatórios não estiverem preenchidos
    }
    const message = `Olá, sou ${formData.fullName}, quero agendar uma sessão de ${
      formData.service === 'haircut'
        ? 'Corte de Cabelo'
        : formData.service === 'coloring'
        ? 'Coloração'
        : 'Manicure'
    } e gostaria de saber se tem horário disponível para dia ${formatDate(
      selectedDate
    )} às ${formData.preferredTime}.${
      formData.notes.trim() ? ` Observações: ${formData.notes}` : ''
    }`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  return (
    <S.Scheduling>
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
                required
                aria-required="true"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="service">Serviço Desejado *</label>
              <select
                id="service"
                name="service"
                required
                aria-required="true"
                value={formData.service}
                onChange={handleInputChange}
              >
                <option value="">Selecione um serviço</option>
                <option value="haircut">Corte de Cabelo</option>
                <option value="coloring">Coloração</option>
                <option value="manicure">Manicure</option>
              </select>
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
                    setDateError('');
                  }}
                  filterDate={filterBusinessDays}
                  minDate={getMinMaxDates().min}
                  maxDate={getMinMaxDates().max}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Selecione uma data"
                  required
                  aria-required="true"
                  className="date-picker"
                  locale={ptBR}
                  popperPlacement="bottom"
                  popperClassName="date-picker-popper"
                />
              </S.DatePickerWrapper>
              {dateError && <S.ErrorMessage>{dateError}</S.ErrorMessage>}
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="preferredTime">Horário Preferido *</label>
              <select
                id="preferredTime"
                name="preferredTime"
                required
                aria-required="true"
                disabled={!selectedDate}
                value={formData.preferredTime}
                onChange={handleInputChange}
              >
                <option value="">Selecione um horário</option>
                {BUSINESS_HOURS.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </S.InputGroup>
          </S.SchedulingFormLine>
          <S.SchedulingFormLine>
            <S.InputGroup>
              <label htmlFor="notes">Observações</label>
              <textarea
                id="notes"
                name="notes"
                placeholder="Alguma observação ou preferência adicional?"
                value={formData.notes}
                onChange={handleInputChange}
              />
            </S.InputGroup>
          </S.SchedulingFormLine>
          <S.SchedulingFormLine>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (getWhatsAppUrl() === '#') {
                  e.preventDefault();
                  alert('Por favor, preencha todos os campos obrigatórios.');
                }
              }}
            >
              <S.ProfessionalButton primary={true}>
                Enviar via WhatsApp
              </S.ProfessionalButton>
            </a>
          </S.SchedulingFormLine>
        </S.SchedulingForm>
      </div>
    </S.Scheduling>
  );
};

export default Scheduling;