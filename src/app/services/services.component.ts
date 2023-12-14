import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private router:Router){}

  ngOnInit(): void {
    
  }

  saveServices(){}

  addService(){
    this.router.navigate(['add-services']);
  }

  listServices(){
    this.router.navigate(['list-services']);
  }
}
