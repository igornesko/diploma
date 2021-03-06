import { OfficeService } from '../office.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public offices: Array<any> = [];

  constructor(private officeService: OfficeService) { }

  public ngOnInit(): void {
    this.getOffices();
  }

  public getOffices(): void {
    this.officeService.getOffices().subscribe((offices: any[]) =>
      this.offices = offices, (error) => console.log(error));

  }
}
