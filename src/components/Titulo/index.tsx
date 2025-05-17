import { Titulo as TituloEstitulo } from './style'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TituloEstitulo fontSize={props.fontSize}>{props.children}</TituloEstitulo>
)

export default Titulo
