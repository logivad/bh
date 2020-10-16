import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})
export class IconsService {
    constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
        console.log('IconsService');
    }

    registerIcons() {
        this.iconRegistry.addSvgIcon(
            'feed',
            this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/feed.svg'),
        );
    }
}
