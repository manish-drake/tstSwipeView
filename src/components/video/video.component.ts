import { Component } from '@angular/core';
@Component({
    selector: 'video-component',
    templateUrl: 'video.component.html'
})
export class VideoComponent{

    vidSrc = "assets/videos/sample1.mp4";

    onGoToClick(){
        var vid = <HTMLVideoElement>document.getElementById("_vid");
        vid.currentTime = 2145/1000;
        console.log("onGoToClick hit");
    }
}