import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  status = true;

  constructor() { setTimeout(()=>{
    this.allowNewServer= true;
  }, 2000)}

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = this.status? 'Server was created!' : 'No server was created!';
    this.status = !this.status;
  }

}
