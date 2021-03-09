import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoContentComponent } from './global/no-content/no-content.component';
import { ContentComponent } from './content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { TopNavBarComponent } from './menu/top-nav-bar/top-nav-bar.component';
import { Footer } from './global/footer/footer.component';
import { NetworkActivitiesComponent } from './content/network-activities/network-activities.component';
import * as jQuery from 'jquery';
import { WidgetComponent } from './ui-elements/widget/widget.component';
import { HttpClientModule } from '@angular/common/http';
import { DealerInfoSearchComponent } from './pages/dealer-info-search/dealer-info-search.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DxDataGridModule, DxBulletModule, DxPopupModule, DxTemplateModule, } from 'devextreme-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './ui-elements/material/material.module';

export const AppRoutes2: Routes = [
  { path: '', component: ContentComponent },
  { path:'dealer', component: DealerInfoSearchComponent},
  { path:'newTransaction', component: NewTransactionComponent},
  { path: '**', component: NoContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NoContentComponent,
    ContentComponent,
    DealerInfoSearchComponent,
    TopNavBarComponent,
    Footer,
    NetworkActivitiesComponent,
    WidgetComponent,
    NewTransactionComponent
  ],
  imports: [BrowserModule, 
            RouterModule.forRoot(AppRoutes2, { useHash: true, relativeLinkResolution: 'legacy' }), 
            HttpClientModule, 
            FontAwesomeModule,
            DxDataGridModule,
            DxBulletModule,
            DxPopupModule,
            DxTemplateModule,
            MaterialModule,
            MatStepperModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule
          ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
