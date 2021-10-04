import * as yup from 'yup';

export const validationSchema = yup.object({
  amostra: yup.object().shape({
    numero: yup.string().required('Número da amostra é obrigatório.'),
    data: yup.date().required('Data da amostra é obrigatório'),
  }),
  acao: yup.object().shape({
    nome: yup.string().required('Ação é obrigatório.'),
  }),
  sintomas: yup.array().of(
    yup.object().shape({
      nome: yup.string().required('Nome do sintoma é obrigatório'),
      intensidade: yup.number().positive('Intensidade deve ser positiva').required('Intensidade do sintoma é obrigatório'),
    })
  ),
  exames: yup.array().of(
    yup.object().shape({
      nome: yup.string().required('Nome do exame é obrigatório'),
      data: yup.date().required('Data do exame é obrigatória'),
      resultado: yup.string().required('Resultado do exame é obrigatório'),
    })
  ),
  proprietario: yup.object().shape({
    nome: yup.string().required('Nome do proprietário é obrigatório.'),
    telefone: yup.string().required('Telefone do proprietário é obrigatório.'),
    caes: yup.array().of(
      yup.object().shape({
        nome: yup.string().required('Nome do cão é obrigatório.'),
        raca: yup.string().required('Raça do cão é obrigatório.'),
        sexo: yup.string().required('Gênero do cão é obrigatório.'),
        idade: yup.number().positive('Idade deve ser positiva').required('Idade do cão é obrigatório.'),
        cor: yup.string().required('Cor do cão e obrigatório.'),
        pelo: yup.string().required('Tipo de pelo do cão é obrigatório.'),
        ambiente: yup.string().required('Ambiente da casa é obrigatório.'),
      })),
    localizacoes: yup.array().of(
      yup.object().shape({
        endereco: yup.string().required('Rua do proprietário é obrigatório.'),
        bairro: yup.string().required('Bairro do proprietário é obrigatório.'),
        area: yup.string().required('Área do proprietário é obrigatório.'),
        latitude: yup.string().required('Latitude do proprietário é obrigatório.'),
        longitude: yup.string().required('Longitude do proprietário é obrigatório.'),
      })),
  })
});