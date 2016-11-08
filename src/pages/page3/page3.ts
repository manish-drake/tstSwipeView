import { Component } from '@angular/core';

@Component({
    selector: 'swipeView',
    templateUrl: 'page3.html'
})
export class Page3{
    onGoToClick(){
        var vid = <HTMLVideoElement>document.getElementById("_vid");
        vid.currentTime = 2145/1000;
        console.log("onGoToClick hit");
    }
}