import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {
  FormService,
  CommandService,
  UserService,
  ExternalLibsService
} from './services';

const MODULES = [
  CommonModule,
  // YouTubePlayerModule
];

const COMPONENTS = [
  VideoPlayerComponent,
  CarouselComponent
];

const SERVICES = [
  FormService,
  CommandService,
  UserService,
  ExternalLibsService
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  providers:[
    ...SERVICES
  ]
})
export class SharedModule { }
