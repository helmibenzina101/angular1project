import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/Models/Member';
// decorateur qui permet d'injecter un service dans un autre service ou un composant
@Injectable({
  providedIn: 'root'//injecter le service dans toute la  root
})
export class MemberService {

//fonction qui envoie une requette Get vers le back end pour recuperer les membres
constructor(private http:HttpClient) {
 
 }
 GetAllMembers():Observable<Member[]>   
 {
  return this.http.get<Member[]>('http://localhost:3000/members')
 }
 addMember(member:Member):Observable<void>
  {
    return this.http.post<void>('http://localhost:3000/members',member)
  }
  deleteMember (id:string) : Observable<void>
  {
    return this.http.delete<void>(`http://localhost:3000/members/${id}`)
  }
  getMemberById(id:string):Observable<Member>
  {
    return this.http.get<Member>(`http://localhost:3000/members/${id}`)
  }

}
