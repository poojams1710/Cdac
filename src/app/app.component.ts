import { Component,OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ArrayAssignment';
  form: FormGroup;
  currentEvent: any = { Number: '',Edit:''};
  
    
    constructor(private fb: FormBuilder,private service:DataService) {
        this.form = fb.group({
            Number:["",Validators.required],
            Edit:["", Validators.required]
        });
    }


    ngOnInit() {
      this.form = this.fb.group({
        Number: [this.currentEvent.Number, Validators.required],
        Edit: [this.currentEvent.Edit,Validators.required]
      });
      this.show();
    }

    onSubmit() {
      console.log(" form submitted");
    }

   show(){
     this.service.getData().subscribe(data =>{

     console.log(data);

     })


   }

  insert(){
    const eventData = {
      Number: this.form.get('Number').value,
   }
    this.service.postData(eventData).toPromise().then(()=>{
      console.log("posted");
    }).catch(err =>{console.log(err)})

  }
  update(){
    const eventData = {
      Edit: this.form.get('Edit').value,
      Number :this.form.get('Number').value
   }
    this.service.updateData(eventData).toPromise().then(()=>{
      console.log("updated");
    }).catch(err =>{console.log(err)})

  }

  delete(){
   
     const Num = this.form.get('Number').value;
   
    this.service.deleteData(Num).toPromise().then(()=>{
      console.log("deleted");
    }).catch(err =>{console.log(err)})


  }

}
