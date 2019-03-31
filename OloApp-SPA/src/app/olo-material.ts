import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatInputModule,
            MatFormFieldModule],

  exports: [MatButtonModule,
            MatCheckboxModule,
            MatInputModule,
            MatFormFieldModule]
})

export class OloMaterial {
}
