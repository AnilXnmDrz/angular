import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    allowNewServer=false
    errmsg=''
    serverStatus='click add server to create server'
    serverName='test server'
    serverCreated =false
    isOnline
    constructor(){
        this.isOnline= Math.random()?'Online':'Offline'
    }

    onClickServer(){

        if(this.serverName==""){
            return this.serverName='input field is empty'
        }
        this.serverCreated=true
        this.serverStatus=`server ${this.serverName} is created`
    }
    onUpdateServerName(event:Event){
        this.serverName=(<HTMLInputElement>event.target).value
        if(this.serverName !=''){
            this.allowNewServer=true
        }else{
            this.allowNewServer=false
        }
    }
    getColor(){
        return this.isOnline>0.5 ?'green' :'red'

    }
}