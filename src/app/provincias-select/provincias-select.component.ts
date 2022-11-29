import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../services/provincias.service';
import { Provincia} from ''

@Component({
  selector: 'app-provincias-select',
  templateUrl: './provincias-select.component.html',
  styleUrls: ['./provincias-select.component.css']
})
export class ProvinciasSelectComponent implements OnInit{

  provincias: Provincia[] = [];

  provinciaSeleccionada: Provincia = {
    nombre:'',
    id=0,
    url='',
  }
  
  constructor(private provinciasService: ProvinciasService){
    this.provinciasService.getProvincias().subscribe((data: any) => {
      console.log(data);
      this.provincias = data;
    });
  }

  ngOnInit(): void {
    
  }
}
