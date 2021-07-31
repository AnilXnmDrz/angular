import { Component} from "@angular/core";



@Component({
    selector:'app-errorAlert',
    templateUrl:'./errorAlert.component.html',
    styleUrls:['./errorAlert.component.css']
})
export class ErrorAlert{
    customError="this is custom error";

    showCustomError(){
        return this.customError
    }

}