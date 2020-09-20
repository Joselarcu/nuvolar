import { User } from './user'

export class Repository {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  owner: User
}
