import {Component, OnInit} from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";
import {PackHistory} from "../../models/PackHistory";
import {PackService} from "../../services/pack.service";
import {Router} from "@angular/router";
import {PlotService} from "../../services/plot.service";

@Component({
  selector: 'app-inspector',
  standalone: true,
  imports: [
    JsonPipe,
    NgIf
  ],
  templateUrl: './inspector.component.html',
  styleUrl: './inspector.component.css'
})
export class InspectorComponent implements OnInit {

  packHistory: PackHistory;

  imageSrc: any;

  constructor(
    private packService: PackService,
    private router: Router,
    private plotService: PlotService
  ) {}

  ngOnInit() {
    this.packHistory = this.packService.packHistory;
    this.fetchImage();
  }

  goBack(){
    this.router.navigate(['']);

  }

  splitNameAtUppercase(input: string): string {
    let result: string   = "";

    for (let i = 0; i < input.length; i++) {
      const currentChar : string  = input[i];

      if (i > 0 && currentChar === currentChar.toUpperCase()) {
        result += " " + currentChar;
      } else {
        result += currentChar;
      }
    }

    return result;
  }

  fetchImage() {
    this.plotService.getImage(this.packHistory.packType).subscribe(
      (imageData: Blob) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageSrc = e.target.result;
        };
        reader.readAsDataURL(imageData);
      },
      (error) => {
        console.error('Error fetching image:', error);
      }
    );
  }

}
