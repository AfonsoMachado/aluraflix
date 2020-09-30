/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  color: var(--white);
  border: 1px solid var(--white);
  background: var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  /* referenciando o botao */
  &:hover,
  &:focus {
  opacity: 0.5;
  }
`;
