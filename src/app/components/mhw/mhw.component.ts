import { Component, OnInit, HostListener } from '@angular/core';
import { MhwService } from "../../services/mhw.service";

@Component({
  selector: 'app-mhw',
  templateUrl: './mhw.component.html',
  styleUrls: ['./mhw.component.sass']
})
export class MhwComponent implements OnInit {
  mhwData: any[] = [];
  loading = false;

  constructor(private mhwService: MhwService) {}

  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
    this.loading = true;
    this.mhwService.getMhwInfo().subscribe((data: any[]) => {
      this.mhwData = [...this.mhwData, ...data];
      this.loading = false;
    });
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const offset = 100; // Puedes ajustar este valor según tus necesidades
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition > documentHeight - offset && !this.loading) {
      this.loadData();
    }
  }
}
