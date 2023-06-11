import {Component, OnDestroy} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AdminService} from "../../services/admin.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnDestroy{
  private adminSubscription: Subscription | undefined;
  constructor(private adminService: AdminService, private router: Router) {
  }
  emailInput: string ='';
  passwordInput: string = '';
  errorMessage: string = '';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  getErrorMessage(){
    return this.errorMessage;
  }
  submit() {
    this.adminSubscription = this.adminService.getCredentials(this.emailInput, this.passwordInput).subscribe({
      next: (res) => {
        if(res.length == 1){
          this.router.navigate(['admin/list']).then()
        }else {
          this.errorMessage = "Les identifiants sont incorrectes !"
        }
      },
      error: () => {
        this.errorMessage = "Une erreur s'est produite lors de la récupération des informations.";
      }
    })
  }

  ngOnDestroy(): void {
    if(this.adminSubscription){
      this.adminSubscription.unsubscribe();
    }
  }
}
