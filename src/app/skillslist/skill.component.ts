import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-skill',
    styleUrls: [],
    template: `
    <div><p><b>{{title}}</b> <span *ngIf="icon"> </span><i class="{{icon}}"></i></p>
    <div class="progress">
        <div class="progress-bar progress-bar-striped bg-primary" role="progressbar" [ngStyle]="barWidth()"
        attr.aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>`

})
export class Skill implements OnInit {

    @Input() title: string;
    @Input() value: string;
    public icon: string;



    constructor() { }

    ngOnInit() {
        this.getIcon();
    }

    private iconsPack: Object = {
        "HTML": "devicon-html5-plain-wordmark",
        "Javascript": "devicon-javascript-plain",
        "CSS": "devicon-css3-plain-wordmark",
        "Bootstrap": "devicon-bootstrap-plain-wordmark",
        "Python": "devicon-python-plain",
        "PHP": "devicon-php-plain",
        "C++": "devicon-cplusplus-plain",
        "C#": "devicon-csharp-plain",
        "Git": "devicon-git-plain",
        "SASS": "devicon-sass-original",
        "Java": "devicon-java-plain"
    };

    getIcon() {
        let icon = this.title;
        this.icon = this.iconsPack[icon];
    }

    barWidth() {
        const style = { 'width': this.value + "%" };
        return style;
    }

}
