import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
/*importing mat-table components*/
import { MatSort, MatTableDataSource, MatPaginator, MatCheckboxModule } from '@angular/material';
/*importing services*/
import { BankhttpService } from '../bankhttp.service';
/*importing selection model to provide checkboxes to the list of banks*/
import { SelectionModel } from '@angular/cdk/collections';

//transfered interface to models to reduce code redundancy
/*interface for the json data present in the api*/
/*export interface User {
  ifsc: string;
  bank_id: string;
  branch: string;
  address: string;
  city: string,
  district: string,
  state: string,
  bank_name: string
}*/


@Component({
  selector: 'app-delhicity',
  templateUrl: './delhicity.component.html',
  styleUrls: ['./delhicity.component.css'],
  styles: [
    `
      table {
        width: 100%;
      }
      
      
      th.mat-sort-header-sorted {
        color: black;
      }
    
    `
  ]
})
export class DelhicityComponent implements OnInit {
  public value = [];
  selectedRowIndex: any;
  displayedColumns: string[] = ['favorite', 'bank_name', 'ifsc', 'bank_id', 'branch', 'city', 'district', 'state'];
  dataSource;
  user;
  data
  //users: User[];
  users: BankModel[];


  selection = new SelectionModel<BankModel>(true, []);

  @ViewChild('button') button: ElementRef;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: BankModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ifsc + 1}`;
  }

  constructor(public bankHttpService: BankhttpService) {
    console.log('Delhi city component constructor is called');


    if (localStorage.getItem('fav') === '' || localStorage.getItem('fav') === null) {

    } else {
      this.value = JSON.parse(localStorage.getItem('fav'));
      console.log('from localStorage', this.value)
    }
  }

  ngOnInit() {
    console.log('Delhi city component onInit called');
    /*subscribing to the services*/
    this.bankHttpService.getDelhiBranches()
      .subscribe((users: BankModel[]) => {

        this.users = users;

        this.dataSource = new MatTableDataSource(users);

        this.dataSource.paginator = this.paginator;

        this.dataSource.sort = this.sort;
      });
  }

  /*filter the list of banks*/
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  toggle = true;
  status = 'Enable';
  selectedUser: any;


  /*function triggered when click event is performed on the checkboxes adjacent to the bank list*/
  activeSkill(element: any) {
    let checkExists: boolean = false;
    console.log(this.value)
    console.log(this.value.length)
    console.log(element.ifsc)
    for (let i = 0; i < this.value.length; i++) {
      if (element.ifsc === this.value[i].ifsc) {
        checkExists = true;
        console.log(checkExists)
      }
    }
    if (checkExists === false) {
      console.log(checkExists)
      this.value.push(element);
    }
    //localStorage.getItem('fav')
    /*storing the data selected during click event inside the local storage of the browser*/
    localStorage.setItem('fav', JSON.stringify(this.value));
  }
}
