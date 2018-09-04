import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import theme from '@styles/theme';
import { actions } from '@redux/general';
import NavItem from '@atoms/NavItem/NavItem';

const HeaderOuter = styled.div`
  display: flex;
  height: ${({ theme }) => `${theme.sizes.header}`};
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.m}`};
  align-items: center;
  box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.4);
`;

const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.funGreen};
  font-weight: bold;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  height: 100%;
  border-right: 1px solid ${props => props.theme.colors.gray40};
  padding-right: ${props => props.theme.spacing.sm};
  margin-right: ${props => props.theme.spacing.sm};
`;

interface IProps {
  navItems: string[];
  doSomething: () => void;
}

export const updateVal = (val: number) => val % 3;

class Header extends React.Component<IProps, { selected: number }> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  public select = (val: number) => {
    this.setState({
      selected: updateVal(val),
    });
  }

  public render() {
    const { navItems, doSomething } = this.props;
    const { selected = 0 } = this.state;

    return (
      <HeaderOuter>
        <Logo src="/assets/logo.svg" alt="CBRE" />
        <Title>property book</Title>
        <Nav>
          {navItems.map((item, i) => (
            <NavItem
              key={i}
              select={() => this.select(i)}
              text={item}
            />
          ))}
        </Nav>
        <button onClick={doSomething}>test</button>
      </HeaderOuter>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  doSomething: () => dispatch(actions.doSomething()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Header);
