import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
} from './styles';

export interface DataListProps
  extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de Site',
      amount: 'R$ 12.000,00',
      date: '13/04/2020',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
    },
    {
      id: '2',
      type: 'negative',
      title: 'Burguer King',
      amount: 'R$ 100,00',
      date: '10/04/2020',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
    },
    {
      id: '3',
      type: 'positive',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.200,00',
      date: '27/03/2020',
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://github.com/robertofortes23.png',
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Roberto</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Útima entrada dia 13 abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
          type="total"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionCard data={item} />
          )}
        />
      </Transactions>
    </Container>
  );
}
