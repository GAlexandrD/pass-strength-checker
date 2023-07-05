import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

enum styles {
  red = 'segment_red',
  green = 'segment_green',
  yellow = 'segment_yellow',
  grey = '',
}

type strength = [styles, styles, styles];

const symbolRegExp = /[^a-z0-9]/i;
const letterRegExp = /[a-zA-Z]/;
const digitRegExp = /[0-9]/;

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent implements OnInit {
  password = new FormControl('');
  passStrength: strength = [styles.grey, styles.grey, styles.grey];
  isShowPass: boolean = false;

  ngOnInit(): void {
    this.password.valueChanges.subscribe((value) => {
      const strength = this.checkPassStrength(value || '');
      this.passStrength = strength;
    });
  }

  checkPassStrength(pass: string): strength {
    const isEmpty = pass.length === 0;
    if (isEmpty) return [styles.grey, styles.grey, styles.grey];
    const isLongEnough = pass.length >= 8;
    if (!isLongEnough) return [styles.red, styles.red, styles.red];
    let complexity = 0;
    const hasLetter = letterRegExp.test(pass);
    const hasSymbol = symbolRegExp.test(pass);
    const hasDigit = digitRegExp.test(pass);
    if (hasDigit) complexity++;
    if (hasLetter) complexity++;
    if (hasSymbol) complexity++;
    if (complexity === 1) return [styles.red, styles.grey, styles.grey];
    if (complexity === 2) return [styles.yellow, styles.yellow, styles.grey];
    return [styles.green, styles.green, styles.green];
  }
}
