import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GameCoreComponent } from './game-core/game-core.component';
import { SetNamePopUpComponent } from './layouts/set-name-pop-up/set-name-pop-up.component';


@NgModule({
  declarations: [
    GameCoreComponent,
    SetNamePopUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TictacModule { }
