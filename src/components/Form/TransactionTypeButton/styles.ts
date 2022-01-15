import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { TouchableOpacityProps } from 'react-native';

interface IconProps {
  type: 'up' | 'down';
}

interface ButtonProps extends TouchableOpacityProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: ${RFPercentage(1)}px;
  padding: ${RFPercentage(2)}px;
  ${({ isActive, type }) =>
    isActive &&
    type === 'up' &&
    css`
      background-color: ${({ theme }) => theme.colors.sucess_light};
      border: none;
    `};
  ${({ isActive, type }) =>
    isActive &&
    type === 'down' &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
      border: none;
    `};
`;

export const Icon = styled(Feather)<IconProps>`
  margin-right: 14px;
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.sucess : theme.colors.attetion};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
