declare var google: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {

    
    console.log(google)
      google.accounts.id.initialize({
        client_id:'699061554537-a1mv7ji879hajq738vatqis16e47smpi.apps.googleusercontent.com',
        callback:(resp:any)=>{
          this.handelLogin(resp)
        }

      })
      google.accounts.id.renderButton(document.getElementById("google-btn"),{
        theme:'filled_blue',
        size:'large',
        shape:'rectangle', 
        width:350
      })
  }
  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]))
  }

  handelLogin(response:any){
    if(response){
      //decode the token
      const payLoad=this.decodeToken(response.credential)
      //Stor in Session
      sessionStorage.setItem("loggedInUser",JSON.stringify(payLoad))
      //navigate to home/browse
      this.router.navigate(['browse'])
    }
  }
}
