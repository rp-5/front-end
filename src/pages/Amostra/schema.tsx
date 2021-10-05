import * as yup from 'yup';

export const validationSchema = yup.object({
  amostra: yup.object().shape({
    numero: yup.number().typeError('Número da amostra deve ser um número').required('Número da amostra é obrigatório'),
    data: yup.date().typeError('Data da amostra é obrigatória').required('Data da amostra é obrigatório'),
  }),
  acao: yup.object().shape({
    nome: yup.string().required('Ação é obrigatório'),
  }),
  sintomas: yup.array().of(
    yup.object().shape({
      nome: yup.string().required('Nome do sintoma é obrigatório'),
      intensidade: yup.number().typeError('Intensidade deve ser um número').nullable().moreThan(-1, 'Intensidade deve ser 0 ou maior').required('Intensidade do sintoma é obrigatório'),
    })
  ),
  exames: yup.array().of(
    yup.object().shape({
      nome: yup.string().required('Nome do exame é obrigatório'),
      data: yup.date().typeError('Data do exame é obrigatória').required('Data do exame é obrigatória'),
      resultado: yup.string().typeError('Resultado do exame é obrigatório').required('Resultado do exame é obrigatório'),
    })
  ),
  proprietario: yup.object().shape({
    nome: yup.string().required('Nome do proprietário é obrigatório'),
    telefone: yup.string().required('Telefone do proprietário é obrigatório'),
    caes: yup.array().of(
      yup.object().shape({
        nome: yup.string().required('Nome do cão é obrigatório'),
        raca: yup.string().required('Raça do cão é obrigatório'),
        sexo: yup.string().required('Gênero do cão é obrigatório'),
        idade: yup.number().typeError('Idade deve ser um número').positive('Idade deve ser positiva').required('Idade do cão é obrigatório'),
        cor: yup.string().required('Cor do cão e obrigatório'),
        pelo: yup.string().required('Tipo de pelo do cão é obrigatório'),
        ambiente: yup.string().required('Ambiente da casa é obrigatório'),
      })),
    localizacoes: yup.array().of(
      yup.object().shape({
        endereco: yup.string().required('Rua do proprietário é obrigatório'),
        bairro: yup.string().required('Bairro do proprietário é obrigatório'),
        area: yup.string().required('Área do proprietário é obrigatório'),
        latitude: yup.number().typeError('Latitude deve ser um número'),
        longitude: yup.number().typeError('Longitude deve ser um número'),
      })),
  })
});