import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface Props {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
  onPress: () => void;
}

export var TransactionTypeButton = function ({ title, type, isActive, onPress, ...rest }: Props) {
  return (
    <Container isActive={isActive} type={type} onPress={onPress} {...rest}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
};
