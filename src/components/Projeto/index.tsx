import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotão } from './styles'

export const Projeto = () => (
  <Card>
    <Titulo>Projeto</Titulo>
    <Paragrafo tipo="secundario">Descrição do projeto</Paragrafo>
    <LinkBotão>Visualizar</LinkBotão>
  </Card>
)
