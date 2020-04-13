import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.sass"],
})
export class SearchInputComponent implements OnInit {
  //get the incoming property named: 'name' and assign it
  //to this component's variable, named: 'IncomingName'
  @Input("name")
  IncomingName: string;

  // searchFieldText: string = "";
  @Output() searchedText = new EventEmitter<string>();

  searchedTextMet(text: string) {
    this.searchedText.emit(text);
  }
  constructor() {}

  ngOnInit() {}

  // onKey(event: any) {
  //   // without type info
  //   this.values += event.target.value + " | ";
  //   // console.log(this.values);
  // }
}
