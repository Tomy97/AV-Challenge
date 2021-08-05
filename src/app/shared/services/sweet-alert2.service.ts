import { Injectable } from '@angular/core'
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root',
})
export class SweetAlert2Service {
  constructor() {}

  successAlert(title: string) {
    Swal.fire({
      icon: 'success',
      width: '30rem',
      title,
      position: 'top',
      timer: 3000,
      showConfirmButton: false,
    })
  }

  errorAlert(title: string) {
    Swal.fire({
      icon: 'error',
      width: '30rem',
      title,
      position: 'top',
      timer: 3000,
      showConfirmButton: false,
    })
  }

  infoAlert(title: string) {
    Swal.fire({
      icon: 'info',
      width: '30rem',
      title,
      position: 'top',
      timer: 3000,
      showConfirmButton: false,
    })
  }
}
