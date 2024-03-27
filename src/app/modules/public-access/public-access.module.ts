import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicAccessRoutingModule } from './public-access-routing.module';
import { SgsComponentsModule } from 'src/app/sgs-components/sgs-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { PublicAccessComponent } from './public-access.component';
import { PublicAccessHeaderComponent } from './components/public-access-header/public-access-header.component';
import { PublicAccessFooterComponent } from './components/public-access-footer/public-access-footer.component';
import { PublicAccessAboutComponent } from './components/public-access-about/public-access-about.component';
import { PublicAccessContactComponent } from './components/public-access-contact/public-access-contact.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';



@NgModule({
  declarations: [
    PublicAccessComponent,
    PublicAccessHeaderComponent,
    PublicAccessFooterComponent,
    PublicAccessAboutComponent,
    PublicAccessContactComponent,
    ProductComponent,
    ProductDetailComponent,
    BlogComponent,
    BlogDetailComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    PublicAccessRoutingModule,
    SgsComponentsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatRippleModule,
    MatButtonModule,
    DirectivesModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    PipesModule,
    MatTooltipModule,
    MatTabsModule

  ]
})
export class PublicAccessModule { }
