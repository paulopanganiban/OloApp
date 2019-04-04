// import { NgModule } from '@angular/core';
// import { MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatMenuModule} from '@angular/material/menu';
// @NgModule({
//   imports: [MatButtonModule,
//             MatCheckboxModule,
//             MatInputModule,
//             MatFormFieldModule,
//             MatDatepickerModule,
//             MatNativeDateModule,
//             MatButtonToggleModule,
//             MatSlideToggleModule,
//             MatPaginatorModule,
//             MatMenuModule],

//   exports: [MatButtonModule,
//             MatCheckboxModule,
//             MatInputModule,
//             MatFormFieldModule,
//             MatDatepickerModule,
//             MatNativeDateModule,
//             MatButtonToggleModule,
//             MatSlideToggleModule,
//             MatPaginatorModule,
//             MatMenuModule]
// })

// export class OloMaterial {
// }
import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    // Material
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ]
})
export class OloMaterial {}
