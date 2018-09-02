import { PageService } from './../../services/page.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from'@angular/platform-browser';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  private param: any;
  public pageBody: any;
  public pages: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pageService: PageService,
    private title: Title
  ) { }

  ngOnInit() {

    //getting all the pages from the pages collection

    this.pageService.getPages().subscribe(pages => {
      this.pages = pages;
  });

  this.route.params.subscribe(params => {
      this.param = params['page'];
      if (this.param === undefined) {
          this.param = 'home';
          this.title.setTitle('Home')
      }else{
            this.title.setTitle(this.param.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
            }

      this.pageService.getPage(this.param).subscribe(pageBody =>{
        if (pageBody == null){
          this.router.navigateByUrl('');
        }
        this.pageBody = pageBody;
      });
    })
  }

  get front() {
    if (localStorage.getItem("user") === "\"admin\"") {
        return false;
    }
    return true;
  }
}
