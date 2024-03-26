import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { CalenderComponent } from './components/calender/calender.component';
import { MailboxComponent } from './components/mailbox/mailbox.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { MorrisComponent } from './components/morris/morris.component';
import { FlotComponent } from './components/flot/flot.component';
import { InlineChartsComponent } from './components/inline-charts/inline-charts.component';
import { GeneralComponent } from './components/general/general.component';
import { IconsComponent } from './components/icons/icons.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { GeneralElementsComponent } from './components/general-elements/general-elements.component';
import { AdvancedElementsComponent } from './components/advanced-elements/advanced-elements.component';
import { EditorsComponent } from './components/editors/editors.component';
import { SimpleTablesComponent } from './components/simple-tables/simple-tables.component';
import { DataTablesComponent } from './components/data-tables/data-tables.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { BlankPageComponent } from './components/blank-page/blank-page.component';
import { FourHundredFourErrorComponent } from './components/four-hundred-four-error/four-hundred-four-error.component';
import { FiveHundredErrorComponent } from './components/five-hundred-error/five-hundred-error.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetsComponent,
    CalenderComponent,
    MailboxComponent,
    HeaderComponent,
    LeftSideComponent,
    RightSideComponent,
    MorrisComponent,
    FlotComponent,
    InlineChartsComponent,
    GeneralComponent,
    IconsComponent,
    ButtonsComponent,
    SlidersComponent,
    TimeLineComponent,
    GeneralElementsComponent,
    AdvancedElementsComponent,
    EditorsComponent,
    SimpleTablesComponent,
    DataTablesComponent,
    InvoiceComponent,
    LoginComponent,
    RegisterComponent,
    LockscreenComponent,
    BlankPageComponent,
    FourHundredFourErrorComponent,
    FiveHundredErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
