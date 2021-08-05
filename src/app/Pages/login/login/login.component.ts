import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { SweetAlert2Service } from './../../../shared/services/sweet-alert2.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string = 'americavirtual@gmail.com'
  pass: string = 'america'
  loginForm: FormGroup = this.FormBuilder.group({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  })
  constructor(
    private SweetAlert2Service: SweetAlert2Service,
    private FormBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.Validators()
  }

  campNotValid(camp: string) {
    return (
      this.loginForm.get(camp)?.invalid && this.loginForm.get(camp)?.touched
    )
  }

  Validators() {
    if (this.loginForm.value.user === this.userName && this.pass) {
      this.SweetAlert2Service.successAlert(
        'Los datos se ingresaron correctamente. Bienvenido!!',
      )
      this.router.navigateByUrl('/home')
    } else if (this.loginForm.value.password !== this.pass) {
      this.SweetAlert2Service.errorAlert(
        'La contraseña ingresada es incorrecta. Por favor usar "america"',
      )
    } else if (this.loginForm.value.user !== this.userName) {
      this.SweetAlert2Service.errorAlert(
        'El usuario ingresado es incorrecta. Usar "americavirtual@gmail.com"',
      )
    } else if (
      this.loginForm.value.password !== this.pass &&
      this.loginForm.value.user !== this.userName
    ) {
      this.SweetAlert2Service.errorAlert('Por favor ingrese bien los datos')
    }

    if (!this.loginForm.value.user && !this.loginForm.value.password) {
      this.SweetAlert2Service.infoAlert(
        'No puede darle a "iniciar sesion" sin agregar ningun dato',
      )
    } else if (!this.loginForm.value.user) {
      this.SweetAlert2Service.infoAlert(
        'No puede darle a "iniciar sesion" sin agregar el usuario',
      )
    } else if (!this.loginForm.value.password) {
      this.SweetAlert2Service.infoAlert(
        'No puede darle a "iniciar sesion" sin agregar la contraseña',
      )
    }
  }
}
