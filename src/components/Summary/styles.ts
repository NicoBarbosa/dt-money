import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardPorps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardPorps>`
  background: ${(props) => props.theme['gray-600']};
  padding: 2rem;
  border-radius: 6px;
  max-height: 137px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    span {
      color: ${(props) => props.theme['gray-300']};
      line-height: 160%;
    }
  }

  strong {
    color: ${(props) => props.theme['gray-100']};
    display: block;
    margin-top: 0.75rem;
    font-size: 2rem;
    font-weight: 700;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}
`
