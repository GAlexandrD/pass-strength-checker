import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import {
  PassStrengthService,
  strength,
} from '../../services/pass-strength.service';

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

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent implements OnChanges {
  @Input() password: string = '';
  strength: passStrengthStyle = passStrengthStyles.empty;

  constructor(private pass: PassStrengthService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const prev = changes['password'].previousValue;
    if (prev === this.password) return;
    const strength = this.pass.checkPassStrength(this.password || '');
    this.strength = passStrengthStyles[strength];
  }
}
