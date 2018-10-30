import {Pipe, PipeTransform} from '@angular/core';

/**
 * Generated class for the ColorFirstLetterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
    name: 'colorFirstLetter',
})
export class ColorFirstLetterPipe implements PipeTransform {
    /**
     * Takes a value and makes it lowercase.
     */
    private mapColors = {
        'a': 'E22639',
        'b': '2E96B4',
        'c': 'C3233D',
        'd': 'FAD768',
        'e': '61BA79',
        'f': '7E171E',
        'g': 'E19B35',
        'h': '58599F',
        'i': '124266',
        'j': '2DA86D',
        'k': '4FB554',
        'l': 'A680B8',
        'm': 'B4569C',
        'n': '282C6F',
        'o': 'CC7832',
        'p': 'FABDCD',
        'q': '706D64',
        'r': '3AC0C4',
        's': 'F38C6D',
        't': 'CFB491',
        'u': '323183',
        'v': '7458A0',
        'w': '71549E',
        'x': 'E7E937',
        'y': 'F3E83C',
        'z': '4D5D2A'
    };
    private defaultColor = '000000';

    transform(value: string, ...args) {
        if (!value || value === '') {
            return `#${this.defaultColor}`;
        }
        const letterLowerCase = value.substring(0, 1).toLowerCase();
        const color = this.mapColors.hasOwnProperty(letterLowerCase) ? this.mapColors[letterLowerCase] : this.defaultColor;
        return `#${color}`;
    }
}
