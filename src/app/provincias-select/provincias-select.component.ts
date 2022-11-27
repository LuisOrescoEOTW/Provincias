import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provincias-select',
  templateUrl: './provincias-select.component.html',
  styleUrls: ['./provincias-select.component.css']
})
export class ProvinciasSelectComponent implements OnInit{
  
  provincias: string[] = [
    'Buenos Aires',
    'Catamarca',
  ]
  
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
