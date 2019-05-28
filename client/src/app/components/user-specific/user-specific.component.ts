import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-specific',
  templateUrl: './user-specific.component.html',
  styleUrls: ['./user-specific.component.scss']
})
export class UserSpecificComponent implements OnInit {
  @Input() user: User;
  constructor(private userService:UserService) { }


  ngOnInit() {
  }


}
