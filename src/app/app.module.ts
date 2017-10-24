import { OfficeService } from './office.service';
import { routes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OfficeListComponent } from './office-list/office-list.component';
import { GridComponent } from './grid/grid.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { OfficeLogoComponent } from './office-logo/office-logo.component';
import { OfficeListItemComponent } from './office-list-item/office-list-item.component';
import { GridItemComponent } from './grid-item/grid-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OfficeListComponent,
    GridComponent,
    MapComponent,
    OfficeLogoComponent,
    OfficeListItemComponent,
    GridItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAZo14EQlYpEvQwlOZh-TgKbkH35yWXllw'
    }),
    routes,
  ],

  providers: [OfficeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
