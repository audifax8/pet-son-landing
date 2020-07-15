import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-animation-loader',
  templateUrl: './animation-loader.component.html',
  styleUrls: ['./animation-loader.component.scss']
})
export class AnimationLoaderComponent implements OnInit {

  showLoadingAnimation$;

  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  constructor(
    private readonly confS: ConfigService
  ) { }

  ngOnInit(): void {
    this.showLoadingAnimation$ = this.confS.showLoading$;
  }

}
