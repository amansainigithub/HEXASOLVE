import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServiceComponent } from './components/services/service/service.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'services', component: ServiceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
