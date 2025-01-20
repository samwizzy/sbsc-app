import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Prod } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-side-main',
  templateUrl: './side-main.component.html',
  styleUrls: ['./side-main.component.scss'],
})
export class SideMainComponent implements OnInit {
  dataSource: MatTableDataSource<Prod> | null = null;
  displayedColumns: string[] = [
    'select',
    'title',
    // 'name',
    'price',
    'category',
    'rating',
    'image',
    'action',
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data) => {
      console.log(data, 'data');
      this.dataSource = new MatTableDataSource(data);
    });
  }

  checkboxLabel(row: any) {
    return '';
  }

  onDelete(row: any) {}

  onToggle(row: any) {}

  masterToggle() {}
}
