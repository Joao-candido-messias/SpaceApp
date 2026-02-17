import { styled } from "styled-components"

const ItemDeListaEstilizado = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
  display: flex;
  align-items: center;
  gap: 22px;
  font-family: ${props => props.$ativo ? "'GandhiSans-Bold'" : "'GandhiSans-Regular'"};
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
  return (
    <ItemDeListaEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="Ícone do item de navegação" />
      {children}
    </ItemDeListaEstilizado>
  )
}

export default ItemNavegacao
