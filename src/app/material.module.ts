import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const modules = [MatIconModule, MatButtonModule];

@NgModule({
    imports: [...modules],
    exports: [...modules],
})
export class UiMaterialModule {}
