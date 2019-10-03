import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-skill',
    styleUrls: [],
    template: `
    <div class="skill"><p><b>{{title}}</b> <ng-container *ngIf="icon"> </ng-container><i class="{{icon}}"></i></p>
    <div class="progress">
        <div class="progress-bar progress-bar-striped bg-{{color}}" role="progressbar" [ngStyle]="barWidth()"
        attr.aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>`,
    styles: ['p { color: #5c3d9c; font-family: "Nunito", Sans-serif; }']

})
export class Skill implements OnInit {

    @Input() title: string;
    @Input() value: string;
    @Input() area: string;
    public icon: string;
    public color: string;



    constructor() { }

    ngOnInit() {
        this.getIcon();
        this.setColor();
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
        "Java": "devicon-java-plain",
        "Databases & SQL": "devicon-postgresql-plain",
        "TypeScript": "devicon-typescript-plain",
        "React": "devicon-react-original"
    };

    getIcon() {
        let icon = this.title;
        this.icon = this.iconsPack[icon];
    }

    setColor() {
        let color: string;
        if (this.area == 'programming') {
            color = 'primary';
        } else if (this.area == 'web') {
            color = 'danger';
        } else if (this.area == 'other') {
            color = 'success';
        } else {
            color = 'dark';
        }
        this.color = color;
    }

    barWidth() {
        const style = { 'width': this.value + "%" };
        return style;
    }

}
