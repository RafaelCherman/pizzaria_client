/*export class TableHeader {
  header!: string[];

}*/
export class TableHeader {
  header: string[];

  constructor(header: string[] = []) {
      this.header = header;
  }
}
