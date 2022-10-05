import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {

  text1: string = 'Carlos Hurtado'
  color: string = 'red';

  myForm: FormGroup = this.formB.group({
    name: ['',Validators.required]
  });

  constructor(private formB: FormBuilder) { }

  ngOnInit(): void {
  }

  hasError(campo: string): boolean {
    return (
      (this.myForm.get(campo)?.invalid) ||
      false
    );
  }

  changeName() {
    this.text1 = Math.random().toString();
  }
  changeColor() {
    this.color = "#xxxxxx".replace(/x/g, y => (Math.random()*16|0).toString(16));
  }

}
