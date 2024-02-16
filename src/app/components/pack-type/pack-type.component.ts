import {Component, Input} from '@angular/core';
import {PackHistory} from "../../models/PackHistory";
import {JsonPipe, NgOptimizedImage} from "@angular/common";
import {PackType} from "../../models/PackType";
import {PackService} from "../../services/pack.service";

@Component({
  selector: 'app-pack-type',
  standalone: true,
  imports: [
    JsonPipe,
    NgOptimizedImage
  ],
  templateUrl: './pack-type.component.html',
  styleUrl: './pack-type.component.css'
})
export class PackTypeComponent {

  @Input()
  packHistory: PackHistory;

  constructor(
    private packService: PackService
  ) { }


  openLegendaryPack(packType: PackType) {
    this.packService.openLegendaryPack(packType)
      .subscribe((ph: PackHistory) => {
        this.packHistory = ph;
      });
  }

  openNonLegendaryPack(PackType: PackType) {
    this.packService.openNonLegendaryPack(PackType)
      .subscribe((ph: PackHistory) => {
        this.packHistory = ph;
      });
  }
}
