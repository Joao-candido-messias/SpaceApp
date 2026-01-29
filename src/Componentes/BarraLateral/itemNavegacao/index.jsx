import { Children } from "react";
import { styled } from "styled-components"

const ItemDeListaEstilizado = styled.li`

`
const ItemNavegacao = ({Children, iconeAtivo, iconeInativo, ativo=false})=>{
    return(
        <ItemDeListaEstilizado>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="Icone do item de navegação" />
            {Children}
        </ItemDeListaEstilizado>
        )    
}

export default ItemNavegacao