import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  PromoterRoutingModule } from './promoter-routing.module';
import { SgsComponentsModule } from 'src/app/sgs-components/sgs-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  PromoterSandbox   } from './promoter.sandbox'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { DirectivesModule } from 'src/app/shared/directives/directives.module'; 
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PromotorComponent } from './promotor.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SgsAddFormsComponent } from './components/sgs-add-forms/sgs-add-forms.component';
import { SgsEditFormsComponent } from './components/sgs-edit-forms/sgs-edit-forms.component';
import { SgsDetailsComponent } from './components/sgs-details/sgs-details.component';



@NgModule({
  declarations: [
    PromotorComponent,
    HeaderComponent,
    SideMenuComponent,
    SgsAddFormsComponent,
    SgsEditFormsComponent,
    SgsDetailsComponent
  ],
  imports: [
    CommonModule,
    PromoterRoutingModule,
    SgsComponentsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatRippleModule,
    MatButtonModule,
    DirectivesModule,
    MatSelectModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    PipesModule,
    MatTooltipModule,
    MatTabsModule,
    CKEditorModule,
    MatToolbarModule
  ],
  providers: [PromoterSandbox],
})
export class PromotorModule { }
