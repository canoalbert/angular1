import {Component, OnInit} from '@angular/core';
import { FinalsSpaceService } from "../../services/finals-space.service";

@Component({
  selector: 'app-finals-space',
  templateUrl: './finals-space.component.html',
  styleUrls: ['./finals-space.component.sass']
})
export class FinalsSpaceComponent implements OnInit {
  finalSpaceCharacters: any[] = [];
  loading = true;
  constructor(private finalsSpaceService: FinalsSpaceService) {}

  ngOnInit(): void {
    this.finalsSpaceService.getFinalsInfo().subscribe(
        (data: any) => {
          this.finalSpaceCharacters = data;
          this.loading = false;
        },
        (error) => {
          console.error('Error al obtener datos de la API Final Space', error);
          this.loading = false;
        }
    );
  }
}
