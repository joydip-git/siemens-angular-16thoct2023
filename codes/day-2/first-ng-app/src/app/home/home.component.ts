import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    firstValue = 0
    secondValue = 0
    result = 0

    // updateFirstValue(f: number) {
    //     this.firstValue = f
    // }
    // updateSecondValue(s: number) {
    //     this.secondValue = s
    // }
    submitValues(frm: NgForm) {
        this.result = this.firstValue + this.secondValue
        console.log(frm)
    }
}