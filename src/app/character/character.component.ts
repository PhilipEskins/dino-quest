import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player.model'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  dinoDiet = "carnivore";

  constructor() {
    // this.dino.diet = form.controls['dinoDiet'].value;
  }

  ngOnInit() {
  }

  newDino(dinoDiet: string, dinoClass: string, dinoName: string) {
    const dino: Player = new Player(100, dinoDiet, dinoClass, dinoName, [])
    console.log(dino);
  }

}
