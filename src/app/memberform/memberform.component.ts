import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MemberService } from '../../Services/member.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-memberform',
  templateUrl: './memberform.component.html',
  styleUrls: ['./memberform.component.css']
})
export class MemberformComponent implements OnInit {
constructor(private MS: MemberService, private router: Router, private activatedRoute: ActivatedRoute) { }

form!: FormGroup;
ngOnInit(){
  const idcourant=this.activatedRoute.snapshot.params['id']
  if(idcourant){
    this.MS.getMemberById(idcourant).subscribe((a)=>{
      this.form = new FormGroup({
        id: new FormControl(a.id),
        cin: new FormControl(a.cin),
        name: new FormControl(a.name),
        type: new FormControl(a.type),
        createdate: new FormControl(a.createdate),
      })
    });
  }
  else {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.form = new FormGroup({
  
    cin: new FormControl(null),
    name: new FormControl(null),
    type: new FormControl(null),
    createdate: new FormControl(null),
  }) };
}
sub() {
  const idcourant=this.activatedRoute.snapshot.params['id']
  if(idcourant){
    this.MS.updateMember(idcourant,this.form.value).subscribe();
    this.router.navigate(['']) /////
  }
  else{   
  console.log(this.form.value);
  this.MS.addMember(this.form.value).subscribe();
  this.router.navigate(['']) /////
  }
}}
