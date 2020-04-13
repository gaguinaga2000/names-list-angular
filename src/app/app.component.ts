import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  searchFieldText: string = "";
  name = "";
  message: string = "";
  namesList: string[] = ["Gabriel", "Chris", "Dante", "Pavel"];
  filteredList: string[];
  showNames: boolean = true;

  ngOnInit() {
    this.filteredList = this.namesList;
  }
  //takes in a name and add it to namesList
  addName(name: string) {
    this.filteredList = this.namesList;

    if (
      !this.namesList.includes(this.name) &&
      !this.namesList.includes(this.name[0].toUpperCase() + this.name.substr(1))
    ) {
      this.namesList.push(name[0].toUpperCase() + name.substr(1));
      this.message = "";
      this.showNames = this.namesList.length !== 0;
    } else {
      this.message = "Name already on list.";
    }
    this.name = "";
  }

  getSearchedText($event: any) {
    this.searchFieldText = $event;

    this.filteredList = this.namesList.filter((name) => {
      return name.toLowerCase().includes(this.searchFieldText.toLowerCase());
    });
  } //END getSearchedText

  deleteName(index: number) {
    this.namesList.splice(index, 1);
    this.filteredList = this.namesList;
    this.showNames = this.namesList.length !== 0;
    console.log("filterd " + this.filteredList);
    console.log("namesLIst " + this.namesList);
  }

  getColor(index: number) {
    return index % 2 === 0
      ? "list-group-item-primary"
      : "list-group-item-secondary";
  }
}
