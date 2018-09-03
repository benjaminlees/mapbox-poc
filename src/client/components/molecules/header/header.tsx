import * as React from 'react';
import Tab from 'src/app/components/atoms/tab/tab';
import theme from 'src/app/styles/theme';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

interface Iprops {
  navItems: string[];
}

// this function does not do anything it is just used as
// a test case for testing and should be removed latter

export const updateVal = (val: number) => val % 3;

class Header extends React.Component<Iprops, {selected: number }> {
  constructor(props: Iprops) {
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
    const { navItems } = this.props;
    const { selected = 0 } = this.state;
    const { beige, darkBeige } = theme.colors;
    return (
      <Container>
        {navItems.map((item, i) =>
          <Tab key={i} select={() => this.select(i)} colour={i === selected ? beige : darkBeige} text={item} />)
        }
      </Container>
    );
  }
}

export default Header;
