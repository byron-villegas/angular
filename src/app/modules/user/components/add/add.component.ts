import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  standalone: false
})
export class AddComponent implements OnInit {
  userForm: FormGroup;
  edadCalculada: number = 0;
  sexoSeleccionado: string = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userForm = this.formBuilder.group({
      rut: ['', [Validators.required, Validators.pattern(/\d{1,3}(?:\.\d{3}){2}-[0-9kK]$/), Validators.minLength(11), Validators.maxLength(12)]],
      nombres: ['', [Validators.required, Validators.pattern(/^[aA-zZáéíóúñÁÉÍÓÚÑ\s]*$/), Validators.minLength(3), Validators.maxLength(50)]],
      apellidos: ['', [Validators.required, Validators.pattern(/^[aA-zZáéíóúñÁÉÍÓÚÑ\s]*$/), Validators.minLength(3), Validators.maxLength(50)]],
      fechaNacimiento: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/), Validators.minLength(10), Validators.maxLength(10)]],
      edad: [0, [Validators.required, Validators.pattern(/^\d+$/), Validators.min(1), Validators.max(120)]],
      sexo: ['', [Validators.required, Validators.pattern(/^(M|F)$/)]],
      saldo: [0, [Validators.required, Validators.pattern(/^\d+$/), Validators.min(1), Validators.max(999999999)]]
    });
  }

  ngOnInit() {

  }

  get form() {
    return this.userForm;
  }

  get rut() {
    return this.userForm.get('rut');
  }

  get nombres() {
    return this.userForm.get('nombres');
  }

  get apellidos() {
    return this.userForm.get('apellidos');
  }

  get fechaNacimiento() {
    return this.userForm.get('fechaNacimiento');
  }

  get edad() {
    return this.userForm.get('edad');
  }

  get sexo() {
    return this.userForm.get('sexo');
  }

  get saldo() {
    return this.userForm.get('saldo');
  }

  onFechaNacimientoChange(): void {
    const fechaNacimiento = this.userForm.get('fechaNacimiento')?.value;
    if (fechaNacimiento) {
      const birthDate = new Date(fechaNacimiento);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        this.edadCalculada = age - 1;
      } else {
        this.edadCalculada = age;
      }

      this.userForm.patchValue({ edad: this.edadCalculada });
    }
  }

  onSexoChange(event: any): void {
    if (event.target.checked === false) {
      this.sexoSeleccionado = '';
      this.userForm.patchValue({ sexo: this.sexoSeleccionado });
      return;
    }

    if (event.target.value == 'M') {
      // deschequea el otro radio button
      const otherRadio = document.querySelector('input[id="sexoF"][value="F"]')
      if (otherRadio) {
        (otherRadio as HTMLInputElement).checked = false;
      }
    }

    if (event.target.value == 'F') {
      // deschequea el otro radio button
      const otherRadio = document.querySelector('input[id="sexoM"][value="M"]')
      if (otherRadio) {
        (otherRadio as HTMLInputElement).checked = false;
      }
    }

    this.sexoSeleccionado = event.target.value;
    this.userForm.patchValue({ sexo: this.sexoSeleccionado });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      UserService.addUser(this.userForm.value);
    }
  }
}
