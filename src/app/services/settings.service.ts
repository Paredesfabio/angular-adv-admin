import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    private linkTheme = document.querySelector('#theme');

    constructor() {
        const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
        this.linkTheme?.setAttribute('href', url);
    }

    changeTheme(theme: string) {
        const url = `./assets/css/colors/${theme}.css`;
        this.linkTheme?.setAttribute('href', url);
        localStorage.setItem('theme',url);
        this.checkCurrentTheme();
    }

    checkCurrentTheme() {
        const links = document.querySelectorAll('.selector');
        links?.forEach(element => {
            element.classList.remove('working');
            const brtTheme = element.getAttribute('data-theme');
            const bthThemeUrl = `./assets/css/colors/${brtTheme}.css`;
            const currentTheme =  this.linkTheme?.getAttribute('href');
            if(bthThemeUrl === currentTheme){
                element.classList.add('working');
            }
        });
    }

}
