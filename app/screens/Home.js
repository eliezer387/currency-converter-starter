import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base');
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote');
  };

  handleTextChange = (text) => {
    console.log('change text', text);
  };

  handleSwapCurrency = () => {
    console.log('press swap');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <View />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          editable
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          onPress={this.handlePressQuoteCurrency}
          buttonText={TEMP_QUOTE_CURRENCY}
          editable={false}
          defaultValue={TEMP_QUOTE_PRICE}
        />
        <LastConverted
          date={TEMP_CONVERSION_DATE}
          quote={TEMP_QUOTE_CURRENCY}
          conversionRate={TEMP_CONVERSION_RATE}
          base={TEMP_BASE_CURRENCY}
        />
        <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
      </Container>
    );
  }
}

export default Home;
