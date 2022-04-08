import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   allowNewServer = false;
   serverCreationStatus = 'No server was created';
   serverName="testServer";
   serverId="0";
   serverCreated = false;
   servers = ['testserver','testserver 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.servers.push(this.serverId);
    this.serverCreationStatus = 'server was created';
  }

  onUpdateServerName(event: Event) {
     this.serverName= (<HTMLInputElement>event.target).value;
  }
}
