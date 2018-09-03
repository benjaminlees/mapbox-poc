import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import theme from '@styles/theme';
import { actions } from '@redux/general';
import Tab from '@atoms/tab/tab';

const Container = styled.div`
  display: flex;
  width: 100%;
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
        <button onClick={doSomething}>test</button>
        {navItems.map((item, i) =>
          <Tab key={i} select={() => this.select(i)} colour={i === selected ? beige : darkBeige} text={item} />)
        }
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  doSomething: () => dispatch(actions.doSomething())
});

export default connect(null, mapDispatchToProps)(Header);
