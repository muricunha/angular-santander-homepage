import { Component, OnInit } from '@angular/core';
import { IArticleItem } from 'src/app/models/article.model';
import { ArticlesService } from 'src/app/services/articles.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: IArticleItem[] = []

  clientForm: FormGroup;
  submitted = false

  constructor(
    public fb: FormBuilder,
    private readonly articleService: ArticlesService) {
      this.clientForm = this.fb.group({
        cpf: new FormControl('',[
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11)
        ])
      })
    }

    submitForm(){
      this.submitted = true;
      if(this.clientForm.invalid){
        return;
      }
      console.log(JSON.stringify(this.clientForm.value))
    }

  ngOnInit(): void {
    this.listArticles();
  }

  private listArticles(){
    this.articleService.getAll().subscribe((data: IArticleItem[])=> {
      this.articles = data
    })
  }

}
