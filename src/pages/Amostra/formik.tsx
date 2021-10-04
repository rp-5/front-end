interface AmostraObject {
  amostra: Amostra
  sintomas: Sintoma[]
  acao: Acao
  exames: Exame[]
  proprietario: Proprietario
}

interface Amostra {
  numero: number | string
  data?: string
  lvc: boolean
  morreu: boolean
}

interface Sintoma {
  nome: string
  intensidade: number
}

interface Acao {
  nome: string
}

interface Exame {
  data?: string
  nome: string
  resultado: number | string
}

interface Proprietario {
  nome: string
  telefone: string
  caes: Cao[]
  localizacoes: Localizacao[]
}

interface Cao {
  nome: string
  raca: string
  sexo: string
  idade: number | string
  vacina: boolean
  usaColeira: boolean
  cor: string
  pelo: string
  ambiente: string
  temContato: boolean
}

interface Localizacao {
  endereco: string
  complemento: string
  bairro: string
  area: string
  latitude: number | string
  longitude: number | string
}

export const initialValues: AmostraObject = {
  amostra: {
    numero: '',
    data: '',
    lvc: false,
    morreu: false
  },
  sintomas: [
    {
      nome: '',
      intensidade: 0,
    },
  ],
  acao: {
    nome: ''
  },
  exames: [
    {
      nome: '',
      resultado: '',
    }
  ],
  proprietario: {
    nome: '',
    telefone: '',
    caes: [
      {
        nome: '',
        idade: '',
        raca: '',
        sexo: '',
        usaColeira: false,
        vacina: false,
        cor: '',
        pelo: '',
        ambiente: '',
        temContato: false,
      }
    ],
    localizacoes: [
      {
        area: 'Urbana',
        bairro: '',
        endereco: '',
        latitude: '',
        longitude: '',
        complemento: '',
      }
    ]
  },
}