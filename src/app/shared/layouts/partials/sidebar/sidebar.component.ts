import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        console.log(this.route.routeConfig?.path);
    }

}
