import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NutricionService {



  constructor(
    private http: HttpClient
  ) { }


  getNutricionInfo (){
    let headers= new HttpHeaders();
    headers=headers.set('X-RapidAPI-Key', '6c8c6b0b58msh176f72c5deaf809p125301jsn2ea30a5da2b4').set('X-RapidAPI-Host', 'motivational-quotes1.p.rapidapi.com');
    return this.http.get("https://motivational-quotes1.p.rapidapi.com/search?q=tomato",{ headers});
  }
}
/*const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://edamam-recipe-search.p.rapidapi.com/search',
  params: {q: 'chicken'},
  headers: {
    'X-RapidAPI-Key': '6c8c6b0b58msh176f72c5deaf809p125301jsn2ea30a5da2b4',
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    'X-RapidAPI-Key': '6c8c6b0b58msh176f72c5deaf809p125301jsn2ea30a5da2b4',
    'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});/*/