import * as React from 'react';
import styled from 'styled-components';

const Tab =  styled.div`
  display: flex;
  flex: 1;
  margin: ${({ theme }) => theme.spacing.tiny };
  height: 40px;
  min-width: 200px;
  max-width: 200px;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  :hover {
    background: ${({ theme }) => theme.colors.white }};
  }
`;

export default (props: { select?: () => void, colour: string, text: string }) => {
  return <Tab onClick={props.select}>{props.text}</Tab>;
};
