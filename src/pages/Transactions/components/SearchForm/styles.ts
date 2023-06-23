import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    border-radius: 6px;
    border: 0;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
      line-height: 1.4rem;
    }
  }

  button {
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.875rem 2rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['green-300']};
    background: transparent;
    color: ${(props) => props.theme['green-300']};
    cursor: pointer;
    font-weight: 700;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s ease-out, color 0.2s ease-out,
        border-color 0.2s ease-out;
    }
  }
`
