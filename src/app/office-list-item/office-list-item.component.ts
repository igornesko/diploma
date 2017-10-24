import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-office-list-item',
  templateUrl: './office-list-item.component.html',
  styleUrls: ['./office-list-item.component.css']
})
export class OfficeListItemComponent implements OnInit {
  @Input() public office: any = {};
  public ngOnInit(): void {
  }
}
