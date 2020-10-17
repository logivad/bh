import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavComponent } from './main-nav/main-nav.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { UiMaterialModule } from '../material.module';
import {RouterModule} from '@angular/router';

const components = [MainNavComponent, NavMenuComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, UiMaterialModule, RouterModule],
    exports: [...components],
})
export class UiModule {}
