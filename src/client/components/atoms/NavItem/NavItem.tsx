import * as React from 'react';
import styled from 'styled-components';

const NavItemOuter = styled.div`
  display: flex;
  flex: 1;
  margin: ${({ theme }) => theme.spacing.tiny};
  height: 40px;
  min-width: 200px;
  max-width: 200px;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  :hover {
    background: ${({ theme }) => theme.colors.white}};
  }
`;

const NavItem = (props: { select?: () => void; colour: string; text: string }) => {
  return <NavItemOuter onClick={props.select}>{props.text}</NavItemOuter>;
};

export default NavItem;
