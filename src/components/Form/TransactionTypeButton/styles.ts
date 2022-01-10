import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  RectButton,
  RectButtonProps,
} from 'react-native-gesture-handler';

interface IconProps {
  type: 'up' | 'down';
}

interface ButtonProps extends RectButtonProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled.View<ButtonProps>`
  width: 48%;

  border-width: 1.5px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: ${RFPercentage(1)}px;
  ${({ isActive, type }) =>
    isActive &&
    type === 'up' &&
    css`
      background-color: ${({ theme }) =>
        theme.colors.sucess_light};
      border: none;
    `};
  ${({ isActive, type }) =>
    isActive &&
    type === 'down' &&
    css`
      background-color: ${({ theme }) =>
        theme.colors.attention_light};
      border: none;
    `};
`;

export const Icon = styled(Feather)<IconProps>`
  margin-right: 14px;
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === 'up'
      ? theme.colors.sucess
      : theme.colors.attetion};
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
