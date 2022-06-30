interface Agent {
  _id: string
  name: string
  image: string
  department: string
  branch: string
  role: string
  status: string
}
interface AgentDetails {
  _id: string
  name: string
  image: string
  department: string
  branch: string
  role: string
  status: boolean
  email: string
  phones: [PhoneInterface]
  identification: [IdentificationInterface]
  birth_date: Date
}
interface PhoneInterface {
  ddd: string
  ddi: string
  number: string
}
interface IdentificationInterface {
  type: string
  number: string
}

export type { Agent, AgentDetails, PhoneInterface, IdentificationInterface }
