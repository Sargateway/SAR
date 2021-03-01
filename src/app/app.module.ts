import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DxDataGridModule, DxBulletModule, } from 'devextreme-angular';

export const AppRoutes2: Routes = [
  { path: '', component: ContentComponent },
  { path:'dealer', component: DealerInfoSearchComponent},
  /*{ path: 'inbox',  component: Inbox },
  { path: 'about', component: About },*/
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
    WidgetComponent
  ],
  imports: [BrowserModule, 
            RouterModule.forRoot(AppRoutes2, { useHash: true, relativeLinkResolution: 'legacy' }), 
            HttpClientModule, 
            FontAwesomeModule,
            DxDataGridModule,
            DxBulletModule
          ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
