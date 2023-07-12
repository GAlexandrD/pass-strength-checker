import { Injectable } from '@angular/core';

export enum strength {
  empty = 'empty',
  easy = 'easy',
  medium = 'medium',
  reliable = 'reliable',
  short = 'short',
}

@Injectable({
  providedIn: 'root',
})
export class PassStrengthService {
  private symbolRegExp = /[^a-z0-9]/i;
  private letterRegExp = /[a-zA-Z]/;
  private digitRegExp = /[0-9]/;

  constructor() {}

  checkPassStrength(pass: string): strength {
    const isEmpty = pass.length === 0;
    if (isEmpty) return strength.empty;
    const isLongEnough = pass.length >= 8;
    if (!isLongEnough) return strength.short;
    let complexity = 0;
    const hasLetter = this.letterRegExp.test(pass);
    const hasSymbol = this.symbolRegExp.test(pass);
    const hasDigit = this.digitRegExp.test(pass);
    if (hasDigit) complexity++;
    if (hasLetter) complexity++;
    if (hasSymbol) complexity++;
    if (complexity === 1) return strength.easy;
    if (complexity === 2) return strength.medium;
    return strength.reliable;
  }
}
