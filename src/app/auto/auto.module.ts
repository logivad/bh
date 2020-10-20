import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoRoutingModule } from './auto-routing.module';
import { AutoComponent } from './auto.component';

@NgModule({
  declarations: [AutoComponent],
    imports: [
        CommonModule,
        AutoRoutingModule,
    ]
})
export class AutoModule { }
