import { OfficeService } from '../office.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {
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
