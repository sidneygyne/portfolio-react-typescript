import { ReactNode } from 'react'
import { P } from './style'

export type Props = {
  children: ReactNode // Agora pode aceitar múltiplos elementos
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
