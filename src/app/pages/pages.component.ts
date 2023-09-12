import { SettingsService } from '@services/settings.service';
import { Component, OnInit } from '@angular/core';

declare function customInitFunction(): any;

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styles: [
    ]
})
export class PagesComponent implements OnInit {

    constructor(
        private settingsService: SettingsService
    ) { }

    ngOnInit(): void {
        customInitFunction();
    }

}
