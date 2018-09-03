import * as React from 'react';
import styled from 'styled-components';
import theme from '@styles/theme';
import Tab from '../../atoms/tab/tab';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

interface IProps {
  navItems: string[];
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
