import {styled} from 'styled-components'
import tags from './tags.json'

const TagsContainer = styled.div`
    color:#D9D9D9;
    display: flex;
    gap:1em; 
    margin-top: 2em;
    font-size: 24px;
    align-items: center;          
`

const TagsButton = styled.button`
    height: 49px;
    min-width: 77px;
    padding: 8px 10px;  
    border-radius: 10px;
    border:2px solid transparent;
    &:hover {border-color: #C98CF1;}
    background-color:#D9D9D94D;
    color:#D9D9D9;
    cursor: pointer;    
    /* border-image: linear-gradient(
        to left,
        #C98CF1,
        #7B78E5
    ) 1; */
`

const Tags = () =>{
    return(
        <TagsContainer>
            <p>Busque por tags:</p>
            {tags.map(tag => <TagsButton key={tag.id}>{tag.titulo}</TagsButton>) }
        </TagsContainer>
    )
}

export default Tags 