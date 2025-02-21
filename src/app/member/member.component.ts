import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/Services/member.service';
import { Member } from '../Models/Member';
import { identifierName } from '@angular/compiler';


@Component({
  selector: 'app-member',//selector appel de membreComponent 
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  dataSource :Member[]=[

  ]
  constructor(private ms:MemberService) { }
  displayedColumns: string[] = ['ID', 'CIN', 'Name', 'Type','createdate','icon'];
  ngOnInit(): void {
    //recuperer la route actif et selon elle je met les valeurs dans le tableau


 this.ms.GetAllMembers().subscribe((data)=>{
   this.dataSource=data;
  })
}

delete(id:string) {

    this.ms.deleteMember(id).subscribe(()=>{
      this.ms.GetAllMembers().subscribe((data)=>{
        this.dataSource=data;
        }
      )
    })

}} 
