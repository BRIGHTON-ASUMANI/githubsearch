import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DetailspageService {

  private username: string;
  private apikey :string = "6a7c951ba598f4cf49f5b5343ac5ea98e09f9c8a";

  constructor(private http:HttpClient) {
      console.log("service is ready");
 }
 getprofileInfo(username){
   console.log(this.username);
   return this.http.get("https://api.github.com/users/"+username+"?access_token=" +this.apikey)

 }
 getprofileRepos(){
     return this.http.get("https://api.github.com/users/"+ this.username + "/repos" +"?access_token=" +this.apikey)


   }

 updateprofile(username:string){
   this.username=username;
 }

}
