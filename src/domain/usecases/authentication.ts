import { Account } from '@/domain/entities/account'

export interface Authentication {
  auth: (params: Authentication.Input) => Promise<Authentication.Output>
}

export namespace Authentication {
  export type Input = {
    email: string
    password: string
  }

  export type Output = Account
}
