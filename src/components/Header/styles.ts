import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.625rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  background: ${(props) => props.theme['green-500']};
  height: 50px;
  color: ${(props) => props.theme.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 160%;
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 1.25rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background 0.2s ease-in;
  }
`
