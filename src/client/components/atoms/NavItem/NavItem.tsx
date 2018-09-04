import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  select?: () => void;
  text: string;
}

const NavItemOuter = styled.div`
  flex: 1;
  margin: 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.gray60};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  text-transform: capitalize;
  :hover {
    background: ${({ theme }) => theme.colors.white}};
  }
`;

const NavItem = (props: IProps) => {
  return <NavItemOuter onClick={props.select}>{props.text}</NavItemOuter>;
};

export default NavItem;
