import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { CharacterComponent } from './character/character.component';
import { ScenesComponent } from './scenes/scenes.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'scenes',
    component: ScenesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
