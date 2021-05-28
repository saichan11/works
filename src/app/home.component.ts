import { Component, OnInit } from '@angular/core';
import { BankhttpService } from '../bankhttp.service';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   public searchString: string;
   public nativeBranch;

   constructor(public bankHttpService : BankhttpService) {
      console.log('Home component constructor is called');
   }


   ngOnInit() {
      console.log('Home component onIniti called');

      this.bankHttpService.getBankBranches().subscribe(
         data=>{
            console.log('logging data');
            console.log(data);
            this.nativeBranch = data;
            console.log(this.nativeBranch)
         },
         error=>{
            console.log('Some error occured');
            console.log(error.errorMessage);
         }
      )
   }
}
