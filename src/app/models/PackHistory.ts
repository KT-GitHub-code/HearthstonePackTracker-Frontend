import {PackType} from "./PackType";

export class PackHistory {

  packType: PackType;
  currentCount: number;
  runs: number[];


  constructor(packType: PackType, currentCount: number, runs: number[]) {
    this.packType = packType;
    this.currentCount = currentCount;
    this.runs = runs;
  }
}
