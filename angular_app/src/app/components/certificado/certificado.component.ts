import { Component, ElementRef, ViewChild } from '@angular/core';
import { AporteService } from 'src/app/services/aporte.service';
import { Aporte } from 'src/app/models/aporte';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css'],
  providers: [AporteService]
})
export class CertificadoComponent {
  @ViewChild('myData') myData!: ElementRef;

  dataUser: any;
  aporte: Aporte;
  usuario: any;
  data: any = [];
  constructor(private _aporteService: AporteService) {
    this.usuario = JSON.parse(localStorage.getItem('user') + '');
    this.aporte = new Aporte(0, this.usuario.id, 0, 0, 0, 0);

    this._aporteService.getData(this.aporte).subscribe(
      response => {
        this.data = response;
      }
    )
  }



  Generar(){
    this.setPdf();
  }



  setPdf() {
    setTimeout(() => {
      const data = this.myData.nativeElement;
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: 'a4'
      });
      html2canvas(data).then(canvas => {
        const imgWidth = 770;
        const imgHeight = canvas.height * imgWidth / canvas.width - 40 ;
        const contentDataURL = canvas.toDataURL('image/png');
        doc.addImage(contentDataURL, 'PNG', 40, 20, imgWidth, imgHeight);
        doc.save('certificado.pdf');
        doc.output('dataurlnewwindow');
      })
    }, 500);
  }
}
