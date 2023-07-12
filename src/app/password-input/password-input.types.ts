import { strength } from "../services/pass-strength.service";

export enum segStyles {
  red = 'segment_red',
  green = 'segment_green',
  yellow = 'segment_yellow',
  grey = '',
}

export type passStrengthStyle = [segStyles, segStyles, segStyles];

export const passStrengthStyles: { [key in strength]: passStrengthStyle } = {
  easy: [segStyles.red, segStyles.grey, segStyles.grey],
  medium: [segStyles.yellow, segStyles.yellow, segStyles.grey],
  reliable: [segStyles.green, segStyles.green, segStyles.green],
  empty: [segStyles.grey, segStyles.grey, segStyles.grey],
  short: [segStyles.red, segStyles.red, segStyles.red],
};