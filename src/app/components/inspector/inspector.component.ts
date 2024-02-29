import {Component, OnInit} from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";
import {PackHistory} from "../../models/PackHistory";
import {PackService} from "../../services/pack.service";
import {Router} from "@angular/router";

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

  constructor(
    private packService: PackService,
    private router: Router
  ) {}

  ngOnInit() {
    this.packHistory = this.packService.packHistory;
  }

  goBack(){
    this.router.navigate(['']);

  }

}