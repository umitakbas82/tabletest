import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  showTable: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  
  toggleShowTable(): void {
    this.showTable = !this.showTable;
}
}
