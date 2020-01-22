import styled from 'styled-components'


export const ButtonStyle = styled.button`

    --c: ${({ theme }) => theme.colors.orange};
    color: var(--c);
    background-color: white;
    font-size: 16px;
    border: 3px solid var(--c);
    border-radius: 0.5em;
    width: 12em;
    height: 3em;
    text-transform: uppercase;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.family};
    text-align: center;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.25s;
    padding: 10px;
    margin: 10px;

span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.04s);
    z-index: -1;
}

&:hover {
    color: white;
}

&:hover span {
    transform: translateY(0) scale(3.2);
}

span:nth-child(1) {
    --n: 1;
}

span:nth-child(2) {
    --n: 2;
}

span:nth-child(3) {
    --n: 3;
}

span:nth-child(4) {
    --n: 4;
}
`
