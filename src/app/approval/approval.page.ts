import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.page.html',
  styleUrls: ['./approval.page.scss'],
})
export class ApprovalPage implements OnInit {

  constructor(private router:Router,private service : ApiService) { }
  data1:any;
  polls:any;
  data2: any;
  data3: any;
  ngOnInit() {
  
  }

  ionViewWillEnter(){
    this.poll();
  }

  questions(){
    this.router.navigate(['/questions'])
  }

  poll(){
    this.service.polls().subscribe(data=>{
      this.data1=data;
      this.polls=this.data1.data.data
      console.log(this.data1);
      console.log(this.data1.data);
      console.log(this.data1.data.data);
      console.log(this.polls)
      console.log(this.polls[0].pollId)
    })
  }
  navigate(){
    this.router.navigate(['/dashboard']);
  }

  approve(poll1: any){
    this.service.approve(poll1,true).subscribe(data=>{
      this.data2=data;
      console.log(this.data2);
      console.log(this.data2.data.data.Message)
      this.poll();
    })
  }

  reject(poll1: any){
    this.service.approve(poll1,false).subscribe(data=>{
      this.data3=data;
      console.log(this.data3);
      console.log(this.data3.data.data.Message)
      this.poll();
    })
  }



  

}
