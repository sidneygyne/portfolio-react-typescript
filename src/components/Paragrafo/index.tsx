import { ReactNode } from 'react'
import { P } from './style'

export type Props = {
  children: ReactNode // Agora pode aceitar múltiplos elementos
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
