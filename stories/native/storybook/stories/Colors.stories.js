import React from 'react';
import {View} from 'react-native';
import {Colors} from './bundle.native';
import {storiesOf} from '@storybook/react-native';

const Row = ({children, reverse}) => (
  <View
    style={{
      display: 'flex',
      flexDirection: reverse ? 'row-reverse' : 'row',
      marginBottom: 20,
      justifyContent: reverse ? 'flex-end' : 'flex-start',
    }}>
    {children}
  </View>
);

const Column = ({children, reverse}) => (
  <View
    style={{
      display: 'flex',
      flexDirection: reverse ? 'column-reverse' : 'column',
      marginRight: 20,
    }}>
    {children}
  </View>
);

const Box = ({color}) => (
  <View
    style={{backgroundColor: color, height: 50, marginBottom: 20, width: 50}}
  />
);

storiesOf('Colors', module)
  .add('Institutional', () => (
    <>
      <Row reverse>
        <Box color={Colors.Institutional.Orange.c50} />
        <Box color={Colors.Institutional.Orange.c100} />
        <Box color={Colors.Institutional.Orange.c200} />
        <Box color={Colors.Institutional.Orange.c300} />
        <Box color={Colors.Institutional.Orange.c400} />
        <Box color={Colors.Institutional.Orange.c500} />
        <Box color={Colors.Institutional.Orange.c600} />
        <Box color={Colors.Institutional.Orange.c700} />
        <Box color={Colors.Institutional.Orange.c800} />
        <Box color={Colors.Institutional.Orange.c900} />
      </Row>
      <Row reverse>
        <Box color={Colors.Institutional.Blue.c50} />
        <Box color={Colors.Institutional.Blue.c100} />
        <Box color={Colors.Institutional.Blue.c200} />
        <Box color={Colors.Institutional.Blue.c300} />
        <Box color={Colors.Institutional.Blue.c400} />
        <Box color={Colors.Institutional.Blue.c500} />
        <Box color={Colors.Institutional.Blue.c600} />
        <Box color={Colors.Institutional.Blue.c700} />
        <Box color={Colors.Institutional.Blue.c800} />
        <Box color={Colors.Institutional.Blue.c900} />
      </Row>
    </>
  ))
  .add('Primary', () => (
    <Row>
      <Column reverse>
        <Box color={Colors.Primary.Milhouse.c100} />
        <Box color={Colors.Primary.Milhouse.c200} />
        <Box color={Colors.Primary.Milhouse.c300} />
        <Box color={Colors.Primary.Milhouse.c400} />
        <Box color={Colors.Primary.Milhouse.c500} />
        <Box color={Colors.Primary.Milhouse.c600} />
      </Column>
      <Column reverse>
        <Box color={Colors.Primary.Mario.c100} />
        <Box color={Colors.Primary.Mario.c200} />
        <Box color={Colors.Primary.Mario.c300} />
        <Box color={Colors.Primary.Mario.c400} />
        <Box color={Colors.Primary.Mario.c500} />
        <Box color={Colors.Primary.Mario.c600} />
      </Column>
      <Column reverse>
        <Box color={Colors.Primary.Luigi.c100} />
        <Box color={Colors.Primary.Luigi.c200} />
        <Box color={Colors.Primary.Luigi.c300} />
        <Box color={Colors.Primary.Luigi.c400} />
        <Box color={Colors.Primary.Luigi.c500} />
        <Box color={Colors.Primary.Luigi.c600} />
      </Column>
      <Column reverse>
        <Box color={Colors.Primary.Randy.c100} />
        <Box color={Colors.Primary.Randy.c200} />
        <Box color={Colors.Primary.Randy.c300} />
        <Box color={Colors.Primary.Randy.c400} />
        <Box color={Colors.Primary.Randy.c500} />
        <Box color={Colors.Primary.Randy.c600} />
      </Column>
      <Column reverse>
        <Box color={Colors.Primary.Kirby.c100} />
        <Box color={Colors.Primary.Kirby.c200} />
        <Box color={Colors.Primary.Kirby.c300} />
        <Box color={Colors.Primary.Kirby.c400} />
        <Box color={Colors.Primary.Kirby.c500} />
        <Box color={Colors.Primary.Kirby.c600} />
      </Column>
    </Row>
  ))
  .add('Secondary', () => (
    <Row>
      <Column>
        <Box color={Colors.Secondary.c1} />
        <Box color={Colors.Secondary.c2} />
        <Box color={Colors.Secondary.c3} />
        <Box color={Colors.Secondary.c4} />
        <Box color={Colors.Secondary.c5} />
      </Column>
      <Column>
        <Box color={Colors.Secondary.c6} />
        <Box color={Colors.Secondary.c7} />
        <Box color={Colors.Secondary.c8} />
        <Box color={Colors.Secondary.c9} />
        <Box color={Colors.Secondary.c10} />
      </Column>
      <Column>
        <Box color={Colors.Secondary.c11} />
        <Box color={Colors.Secondary.c12} />
        <Box color={Colors.Secondary.c13} />
        <Box color={Colors.Secondary.c14} />
        <Box color={Colors.Secondary.c15} />
      </Column>
      <Column>
        <Box color={Colors.Secondary.c16} />
        <Box color={Colors.Secondary.c17} />
        <Box color={Colors.Secondary.c18} />
        <Box color={Colors.Secondary.c19} />
        <Box color={Colors.Secondary.c20} />
      </Column>
    </Row>
  ))
  .add('Neutral', () => (
    <>
      <Row reverse>
        <Box color={Colors.Neutral.c0} />
        <Box color={Colors.Neutral.c300} />
        <Box color={Colors.Neutral.c400} />
        <Box color={Colors.Neutral.c500} />
        <Box color={Colors.Neutral.c600} />
        <Box color={Colors.Neutral.c700} />
        <Box color={Colors.Neutral.c800} />
        <Box color={Colors.Neutral.c900} />
        <Box color={Colors.Neutral.c1000} />
      </Row>
    </>
  ));
