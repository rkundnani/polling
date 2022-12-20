import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router:Router,private service : ApiService) { }
  data1:any;
  polls:any;
  data2:any;
  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.poll();
  }

  questions(){
    this.router.navigate(['/questions'])
  }
  questions1(){
    this.router.navigate(['/approval'])
  }

  poll(){
    this.service.poll().subscribe(data=>{
      this.data1=data;
      this.polls=this.data1.data.data
      console.log(this.data1);
      console.log(this.data1.data);
      console.log(this.data1.data.data);
      console.log(this.polls)
      
    })
  }

  navigate(){
    this.router.navigate(['/home']);
  }

  delete(poll: any){
    this.service.delete(poll).subscribe(data=>{
      this.data2=data;
      
    })
  }

}
