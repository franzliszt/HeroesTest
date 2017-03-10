import { Component, Input } from '@angular/core';

@Component({
    selector: "test",
    template: `<h2>{{test}}</h2>`
})
export class Test {
    @Input()
    test: string;
}