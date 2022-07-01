export enum Permissions{
  Read ='read',
  Write ='write',
  Delete = 'delete'
}
export interface Permission{
  area: string
  enabled: [Permissions]
}
interface Role {
  _id: string
  name: string
  department:string
  permissions: Permission[]
}
export type { Role }
