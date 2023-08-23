import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IArticleItem } from 'src/app/models/article.model'
import { urlConfig } from '../config/urlsConfig';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private readonly httpClient: HttpClient) { }
  
  public getAll():Observable<IArticleItem[]> {
    return this.httpClient.get<IArticleItem[]>(urlConfig.articles)
  }
}

