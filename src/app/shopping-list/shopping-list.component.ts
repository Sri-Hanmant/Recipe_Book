import { Ingredient } from "./../shared/ingredient.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Potatoes", 5),
    new Ingredient("Capsicum", 3),
  ];
  constructor() {}

  ngOnInit() {}
}
