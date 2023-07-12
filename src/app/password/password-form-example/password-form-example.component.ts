import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-password-form-example',
  templateUrl: './password-form-example.component.html',
  styleUrls: ['./password-form-example.component.scss'],
})
export class PasswordFormExampleComponent implements OnInit, OnDestroy {
  form: FormGroup;
  password: string;
  isShow: boolean;
  isShowSub: Subscription;
  passSub: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      password: new FormControl(''),
      isShow: new FormControl(false),
    });
    this.isShowSub = this.form.controls['isShow'].valueChanges.subscribe(
      (value) => {
        this.isShow = value;
      }
    );
    this.passSub = this.form.controls['password'].valueChanges.subscribe(
      (value) => {
        this.password = value;
      }
    );
  }

  ngOnDestroy(): void {
    this.isShowSub.unsubscribe();
    this.passSub.unsubscribe();
  }
}
