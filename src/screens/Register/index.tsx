import React, { useState } from 'react';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../../components/Form/CategorySelect';
import { Container, Header, Title, Form, Fields, TransactionsTypes } from './styles';

export var Register = function () {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionsTypes>
            <TransactionTypeButton
              title="Incoming"
              type="up"
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              title="Outcome"
              type="down"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>
          <CategorySelect title="Categoria" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
};
