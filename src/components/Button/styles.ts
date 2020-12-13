import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background: #ff9000;
  height: 55px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 1rem;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
