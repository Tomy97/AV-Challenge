import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { SweetAlert2Service } from './../../../shared/services/sweet-alert2.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string = 'americavirtual@gmail.com'
  pass: string = 'america'
  loginForm: FormGroup = this.FormBuilder.group({
    user: new FormControl ('', [Validators.required]),
    password: new FormControl ('', [Validators.required, Validators.minLength(4) ]),})
  constructor(
    private SweetAlert2Service: SweetAlert2Service,
    private FormBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    
  }
  
  onSubmit() {
    this.Validators()
  }

  campNotValid(camp: string) {
    return (
      this.loginForm.get(camp)?.invalid &&
      this.loginForm.get(camp)?.touched
    )
  }

  Validators() {
    console.log(this.loginForm.value);
    
     if (this.loginForm.value === this.userName && this.pass) {
       this.SweetAlert2Service.successAlert('Los datos se ingresaron correctamente. Bienvenido')
       localStorage.getItem('datos')
    } else if (this.loginForm.value === this.userName && !this.pass) {
      this.SweetAlert2Service.errorAlert('La contraseña ingresada es incorrecta. Por favor usar "america"')
    } else if (this.loginForm.value === !this.userName && this.pass) {
      this.SweetAlert2Service.errorAlert('El usuario ingresado es incorrecta. Usar "americavirtual@gmail.com"')
    } else if (!this.loginForm.value) {
      this.SweetAlert2Service.infoAlert('No puede darle a "iniciar sesion" sin agregar ningun dato')
    }
  }
}
