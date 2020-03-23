import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const MODULES = [
  CommonModule,
  // YouTubePlayerModule
];

const COMPONENTS = [
  VideoPlayerComponent,
  CarouselComponent
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
  ]
})
export class SharedModule { }
