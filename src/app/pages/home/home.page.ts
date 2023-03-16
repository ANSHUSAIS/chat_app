import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public segments : any = "chats";
  public new_chat: any = false;
  constructor(private Router:Router) { }

  ngOnInit() {
  }

  changeSegment = (event:any) =>{
    this.segments = event.target.value;
  }

  onWillDismiss = (event : any) =>{
    
  }

  cancel = () =>{
    this.new_chat = false;
  }

  confirm = () =>{

  }

  openModal = () =>{
    this.new_chat = true;
  }

  redirectToChat = () =>{
    this.Router.navigate(['home/chat']);
  }

}
