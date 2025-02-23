import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../Services/member.service';
import { Member } from 'src/app/Models/Member';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  // Columns to display in the table
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type', 'actions'];
  dataSource = new MatTableDataSource<Member>(); // Data source for the table

  constructor(
    private memberService: MemberService, // Service to interact with the backend
    private router: Router, // Router for navigation , 
    private dialog: MatDialog // Dialog for confirmation
  ) {}

  ngOnInit(): void {
    this.loadMembers(); // Load members when the component initializes
  }

  // Load all members from the backend
  loadMembers(): void {
    this.memberService.GetAllMembers().subscribe(
      (data: Member[]) => {
        this.dataSource.data = data; // Set the data source for the table
      },
      (error) => {
        console.error('Error fetching members:', error);
      }
    );
  }

  // Navigate to the edit page for a specific member
  editElement(element: Member): void {
    this.router.navigate(['/edit', element.id]); // Navigate to the edit route with the member ID
  }

  // Delete a member
  deleteElement(element: Member): void {
    //ouvrir la boite de dialogue (confirmDialog componant )
    //2 attendre le retour de la boite de dialogue
    //3 si le retour est confirm supprimer le membre
    //4 sinon ne rien faire
   let dialogref = this.dialog.open(ConfirmDialogComponent);
    dialogref.afterClosed().subscribe((result)=>{
      if(result){
        this.memberService.deleteMember(element.id).subscribe(()=>{
          this.loadMembers();
        });
      }
    }
    )
    
  }
}