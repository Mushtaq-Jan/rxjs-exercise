import { Component } from "@angular/core";

@Component({
    selector: 'server-root',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 7;
    serverStatus: string = 'offline';
    textColor = 'white';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }


    getServerStatus()
    {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}