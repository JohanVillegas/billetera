import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AutorizacionService } from './autorizacion.service';

@Injectable()
export class GuardService implements CanActivate {

    constructor(private authService: AutorizacionService, private router: Router) {
    }

    canActivate(): Observable<boolean> {
        return this.authService.authState$
            .take(1)
            .map(authState => !!authState)
            .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['/login']);
                }
            });
    }
}
