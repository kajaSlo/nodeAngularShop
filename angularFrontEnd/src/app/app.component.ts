import { PageService } from './services/page.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

/*pages:any;


constructor(public pageService: PageService) { }

  ngOnInit() {


    this.pageService.getPages().subscribe(pages => {
        this.pageService.pagesBS.next(pages);
         this.pages = this.pageService.pagesBS;
       });
    }
    */
    get front() {
        if (localStorage.getItem("user") === "\"admin\"") {
            return false;
        }
        return true;
    }
}