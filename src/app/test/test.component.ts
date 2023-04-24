import { Component,OnInit } from '@angular/core';
import { Health } from '../health';
import { HealthService } from '../health.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  useridvalue!:string;
  usernamevalue!:string;
  emailidvalue!:string;
  weightvalue!:number;
  heightvalue!:number;
  bloodpressurevalue!:number;
  heartratevalue!:number;
  constructor(private helathservice:HealthService){

  }
  onSubmit(){
    let health:Health={userid:this.useridvalue,username:this.usernamevalue,emailid:this.emailidvalue,weight:this.weightvalue,height:this.heightvalue,bloodpressure:this.bloodpressurevalue,heartrate:this.bloodpressurevalue};
    alert(JSON.stringify(health));
    this.helathservice.addHealth(health).subscribe(data =>{
      console.log(data);
    })
  }
  health:Health[]=[];
  ngOnInit(): void {
    this.helathservice.getHealth().subscribe((data:Health[])=>{
      this.health=data;
    })
  }
}
