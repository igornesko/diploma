import { Component,  OnInit } from '@angular/core';
import { OfficeService } from '../office.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public zoom: number = 2;
  public offices: Array<any> = [];

  constructor(private officeService: OfficeService) { }

  public ngOnInit(): void {
    this.getOffices();
  }
  public getOffices(): void {
    this.officeService.getOffices().subscribe((offices: any[]) =>
      this.offices = offices.map(office => {
        office.latitude = parseFloat(office.latitude);
        office.longitude = parseFloat(office.longitude);
        return office;
      }), (error) => console.log(error));
  }
}
