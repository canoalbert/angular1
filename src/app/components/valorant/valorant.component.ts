import { Component, OnInit } from '@angular/core';
import { ValorantService } from "../../services/valorant.service";

@Component({
  selector: 'app-valorant',
  templateUrl: './valorant.component.html',
  styleUrls: ['./valorant.component.sass']
})
export class ValorantComponent implements OnInit {
  agents: any[] = [];
  loading = true;
  constructor(private valorantService: ValorantService) {}

  ngOnInit(): void {
    this.valorantService.getValorantInfo().subscribe((data: any) => {
      this.agents = data.data;
      this.loading = false;
    },
      (error) =>{
      console.error('Error al obtener datos de Valorant API', error);
      this.loading = false;
      });
  }

}
