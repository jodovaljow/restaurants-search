import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';

import logo from '../../assets/logo.svg';

import { Container, Search } from './styles';

export default () => {
  const [inputValue, setInputValue] = useState();

  return (
    <Container>
      <Search>
        <img src={logo} alt="Logo do restaurante" />

        <TextField
          label="Pesquisar"
          outlined
          // helperText={<HelperText>Help Me!</HelperText>}
          // onTrailingIconSelect={() => this.setState({ value: '' })}
          // trailingIcon={<MaterialIcon role="button" icon="delete" />}
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue({ value: e.currentTarget.value })}
          />
        </TextField>
      </Search>
      Hello World
    </Container>
  );
};
