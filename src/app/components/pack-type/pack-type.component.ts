import {Component, Input} from '@angular/core';
import {PackHistory} from "../../models/PackHistory";
import {JsonPipe, NgOptimizedImage} from "@angular/common";

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

}
