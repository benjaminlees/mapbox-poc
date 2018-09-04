import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import theme from '@styles/theme';
import { actions } from '@redux/general';
import NavItem from '@atoms/NavItem/NavItem';

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: ${props => props.theme.spacing.medium};
`;

const Title = styled.div`
  padding: ${props => props.theme.spacing.medium};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
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
    const { beige, darkBeige } = theme.colors;
    return (
      <Container>
        <img src="/assets/logo.svg" />
        <Title>property book</Title>
        <Nav>
          {navItems.map((item, i) => (
            <NavItem
              key={i}
              select={() => this.select(i)}
              colour={i === selected ? beige : darkBeige}
              text={item}
            />
          ))}
        </Nav>
        <button onClick={doSomething}>test</button>
      </Container>
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
