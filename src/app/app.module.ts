import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { AboutComponent } from './about/about.component';
import { TipsComponent } from './tips/tips.component';
import { FullRegComponent } from './full-reg/full-reg.component';
import { LimitedRegComponent } from './limited-reg/limited-reg.component';
import { PastLittersComponent } from './past-litters/past-litters.component';
import { ParentsComponent } from './parents/parents.component';
import { CurrentLittersComponent } from './current-litters/current-litters.component';
import { GroomingComponent } from './grooming/grooming.component';
import { KennelingComponent } from './kenneling/kenneling.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    WaitingListComponent,
    AboutComponent,
    TipsComponent,
    FullRegComponent,
    LimitedRegComponent,
    PastLittersComponent,
    ParentsComponent,
    CurrentLittersComponent,
    GroomingComponent,
    KennelingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'waiting-list',
        component: WaitingListComponent
      },
      {
        path: 'tips',
        component: TipsComponent
      },
      {
        path: 'full-reg',
        component: FullRegComponent
      },
      {
        path: 'limited-reg',
        component: LimitedRegComponent
      },
      {
        path: 'parents',
        component: ParentsComponent
      },
      {
        path: 'past-litters',
        component: PastLittersComponent
      },
      {
        path: 'current-litters',
        component: CurrentLittersComponent
      },
      {
        path: 'grooming',
        component: GroomingComponent
      },
      {
        path: 'kenneling',
        component: KennelingComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
