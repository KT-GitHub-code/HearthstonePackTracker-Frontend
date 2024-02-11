import {PackType} from "./PackType";
import {PackHistory} from "./PackHistory";

export class FullPackHistory {
  packHistories: Map<PackType, PackHistory>;

  constructor() {
    this.packHistories = new Map<PackType, PackHistory>();
  }
}
