import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PassStrengthService } from '../services/pass-strength.service';
import { passStrengthStyle, passStrengthStyles } from './password-input.types';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent implements OnInit, OnDestroy {
  constructor(private pass: PassStrengthService) {}

  password = new FormControl('');
  passStrength: passStrengthStyle = passStrengthStyles.empty;
  isShowPass: boolean = false;
  private passSub: Subscription | undefined;
  ngOnInit(): void {
    this.passSub = this.password.valueChanges.subscribe((value) => {
      const strength = this.pass.checkPassStrength(value || '');
      this.passStrength = passStrengthStyles[strength];
    });
  }

  ngOnDestroy(): void {
    this.passSub?.unsubscribe();
  }
}
