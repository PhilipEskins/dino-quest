import { Component, Input, OnInit, Injectable } from '@angular/core';
import { Player } from './player.model'

@Injectable()
export class DinoService {

  dino: Player;

  constructor() { }

  newDino(dinoDiet: string, dinoClass: string, dinoName: string) {
    this.dino =new Player (100, dinoDiet, dinoClass, dinoName, [])
    console.log(this.dino);
  }

}
