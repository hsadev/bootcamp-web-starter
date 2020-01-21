import styled from 'styled-components'


export const Button = styled.button`

      --c: ${({ theme }) => theme.colors.orange};
      color: var(--c);
      font-size: 16px;
      border: 0.3em solid var(--c);
      border-radius: 0.5em;
      width: 12em;
      height: 3em;
      text-transform: uppercase;
      font-weight: bold;
      font-family: sans-serif;
      letter-spacing: 0.1em;
      text-align: center;
      line-height: 3em;
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: 0.23s;
      margin: 1em;

  span {
      position: absolute;
      width: 25%;
      height: 100%;
      background-color: var(--c);
      transform: translateY(150%);
      border-radius: 50%;
      left: calc((var(--n) - 1) * 25%);
      transition: 0.5s;
      transition-delay: calc((var(--n) - 1) * 0.07s);
      z-index: -1;
  }

  &:hover {
      color: black;
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
