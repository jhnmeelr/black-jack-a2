/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { BlackJackGame } from '../models/BlackJackGame';

export function moduleFactory() {
    return new BlackJackGame();
}
/**
 * @experimental
 */
export var BlackJackGameModule = (function () {
    function BlackJackGameModule() {
    }
    BlackJackGameModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        { provide: BlackJackGame, useFactory: moduleFactory },
                    ],
                },] },
    ];
    /** @nocollapse */
    BlackJackGameModule.ctorParameters = [];
    return BlackJackGameModule;
}());