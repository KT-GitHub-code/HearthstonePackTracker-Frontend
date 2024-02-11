import {Component, OnInit} from '@angular/core';
import {PackService} from "../../services/pack.service";
import {PackTypeComponent} from "../pack-type/pack-type.component";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    PackTypeComponent, CommonModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  constructor(
    public packService: PackService
  ) {
  }

  ngOnInit() {
    this.fetchPacks();

  }

  private fetchPacks(): void {
    this.packService.getPacks()
      .subscribe((data) => {
      console.log(data);
    });
  }

}
