import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player.model'
import { DinoService } from '../dino.service'
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [DinoService]
})
export class CharacterComponent implements OnInit {

  dinoDiet = "carnivore";

  constructor(private dinoService: DinoService) {
    // this.dino.diet = form.controls['dinoDiet'].value;
  }

  ngOnInit() {
  }
  //
  // newDino(dinoDiet: string, dinoClass: string, dinoName: string) {
  //   const dino: Player = new Player(100, dinoDiet, dinoClass, dinoName, [])
  //   console.log(dino);
  // }

}
