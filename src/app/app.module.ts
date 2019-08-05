import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule} from '@angular/common/http';
import { app_routing } from './router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GraficaComponent } from './grafica/grafica.component';
import { CambioComponent } from './cambio/cambio.component';
import { AppService } from './app.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,    HighchartsChartModule,
    HttpClientModule,
    RouterModule,
    app_routing ],
  declarations: [ AppComponent, HelloComponent, GraficaComponent, CambioComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
