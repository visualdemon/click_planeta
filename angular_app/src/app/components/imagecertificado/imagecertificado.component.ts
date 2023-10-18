import { Component, ElementRef, ViewChild } from '@angular/core';
import { AporteService } from 'src/app/services/aporte.service';
import { Aporte } from 'src/app/models/aporte';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-imagecertificado',
  templateUrl: './imagecertificado.component.html',
  styleUrls: ['./imagecertificado.component.css']
})
export class ImagecertificadoComponent {

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

    this.setPdf();


  }


  setPdf() {
    setTimeout(() => {
      const data = this.myData.nativeElement;
      const doc = new jsPDF('p', 'pt', 'a4');
      html2canvas(data).then(canvas => {
        const imgWidth = 600;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');
        doc.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
        doc.save('certificado.pdf');
        doc.output('dataurlnewwindow');
      })
    }, 500);
  }
}
