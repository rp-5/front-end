interface AmostraObject {
  amostra: Amostra
  sintomas: Sintoma[]
  acao: Acao
  exames: Exame[]
  proprietario: Proprietario
}

interface Amostra {
  numero?: number
  lvc: boolean
  morreu: boolean
}

interface Sintoma {
  nome: string
  intensidade?: number
}

interface Acao {
  nome: string
}

interface Exame {
  data: string
  nome: string
  resultado?: number
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
  idade: number
  vacina: boolean
  usaColeira: boolean
  cor: string
  pelo: string
  ambiente: string
  temContato: boolean
}

interface Localizacao {
  endereco: string
  complemento?: string
  bairro: string
  area: string
  latitude: number
  longitude: number
}

export const initialValues: AmostraObject = {
  amostra: {
    numero: undefined,
    lvc: false,
    morreu: false
  },
  sintomas: [
    {
      nome: '',
      intensidade: undefined,
    },
  ],
  acao: {
    nome: ''
  },
  exames: [
    {
      nome: '',
      data: '',
      resultado: undefined,
    }
  ],
  proprietario: {
    nome: '',
    telefone: '',
    caes: [
      {
        nome: '',
        idade: 0,
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
        area: '',
        bairro: '',
        endereco: '',
        latitude: 0,
        longitude: 0,
        complemento: '',
      }
    ]
  },
  // dogName: '',
  // dogRace: '',
  // dogGender: '',
  // dogAge: '',
  // dogIsVaccinated: '',
  // dogUsesCollar: '',
  // dogColor: '',
  // dogHair: '',
  // dogEnvironment: '',
  // dogHasContacts: '',
  // ownerName: '',
  // ownerPhone: '',
  // locations: [],
  // locationStreet: '',
  // locationComplement: '',
  // locationNeighborhood: '',
  // locationArea: '',
  // locationLatitude: '',
  // locationLongitude: '',
  // sampleN: '',
  // sampleNumber: '',
  // sampleDate: '',
  // sampleLVC: '',
  // sampleIsDead: '',
  // sintName: '',
  // sintIntensity: '',
  // exameName: '',
  // exameDate: '',
  // exameResult: '',
}