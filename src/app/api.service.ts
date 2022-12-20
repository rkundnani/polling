import { provideCloudinaryLoader } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  create(ques: any,opt1: any,opt2: any,opt3: any,opt4: any){
    return this.http.post("http://hackathon-env.eba-shfark3x.ap-south-1.elasticbeanstalk.com/addpoll",{'question' : ques , 'option1':opt1,'option2':opt2,'option3':opt3,'option4':opt4});
  }

  poll(){
    return this.http.get("http://hackathon-env.eba-shfark3x.ap-south-1.elasticbeanstalk.com/polls");
  }

  polls(){
    return this.http.get("http://hackathon-env.eba-shfark3x.ap-south-1.elasticbeanstalk.com/getuserpoll");
  }

  approve(pollId: any,status1: boolean){
    return this.http.post("http://hackathon-env.eba-shfark3x.ap-south-1.elasticbeanstalk.com/approvepoll",{'pollId':pollId,'approveStatus':status1});
  }

  delete(poll1:any){
    return this.http.get("http://hackathon-env.eba-shfark3x.ap-south-1.elasticbeanstalk.com/polls/"+poll1);

    
  }
}
