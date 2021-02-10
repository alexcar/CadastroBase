import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PessoaFiscaDataSource, PessoaFiscaItem } from './pessoa-fisca-datasource';

@Component({
  selector: 'app-pessoa-fisca',
  templateUrl: './pessoa-fisca.component.html',
  styleUrls: ['./pessoa-fisca.component.css']
})
export class PessoaFiscaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<PessoaFiscaItem>;
  dataSource!: PessoaFiscaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new PessoaFiscaDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
