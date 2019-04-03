import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { DinoService } from '../dino.service';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css'],
  providers: [DinoService]
})
export class ScenesComponent implements OnInit {
  dinoHealth: number;
  // @Input() dino;

  constructor(private dinoService: DinoService) { }

  ngOnInit() {
    console.log(this.dinoService.dino);
    // this.dinoHealth = this.dinoService.dino.energy;
    // console.log(this.dinoHealth);
  }

}
