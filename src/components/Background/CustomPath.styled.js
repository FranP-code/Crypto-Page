import styled from 'styled-components'

export const CustomPath = styled.div`
    
top: ${props => props.top};
left: ${props => props.left};

clip-path: ${props => props.clipPath};

width: ${props => props.width};
height: ${props => props.height};

transform: ${props => props.transform};

top: calc(${props => props.top} + calc(100% * ${props => props.serieNumber}));
` 