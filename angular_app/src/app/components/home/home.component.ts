import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AporteService } from 'src/app/services/aporte.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AporteService]
})
export class HomeComponent implements OnInit {

  loggedIn: boolean = false;
  dataGeneral: any = [];
  constructor(private auth: AuthenticationService, private router: Router, private _aporteService: AporteService) {

  }

  ngOnInit(): void {
    this.auth.status().subscribe((res) => {
      this.loggedIn = res;
    }, (err) => {
    })
    this._aporteService.getGeneralData({}).subscribe(
      response => {
        this.dataGeneral = response;
        console.log(this.dataGeneral)
      }
    )
  }


  evento(letra: any) {
    if (letra == 'R') {
      this.router.navigate(['/register']);
    } else {
      this.router.navigate(['/login']);
    }
  }


}
