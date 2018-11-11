import {NgModule} from '@angular/core';
import {IsCurrentUserPipe} from './is-current-user/is-current-user';
import {BuildUrlPipe} from './build-url/build-url';
import { ColorFirstLetterPipe } from './color-first-letter/color-first-letter';

@NgModule({
    declarations: [IsCurrentUserPipe,
        IsCurrentUserPipe,
        BuildUrlPipe,
    ColorFirstLetterPipe],
    imports: [],
    exports: [IsCurrentUserPipe,
        IsCurrentUserPipe,
        BuildUrlPipe,
    ColorFirstLetterPipe
    ],
    providers: [
        IsCurrentUserPipe
    ]
})
export class PipesModule {
}
