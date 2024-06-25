import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestapiService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  form: FormGroup;
  countries: any[] = [];
  cities: any[] = [];
  cityData: any;
  displayedColumns: string[] = ['value', 'year'];
  popullationData: any;

  constructor(private fb: FormBuilder, private restAPI: RestapiService) {
    this.form = this.fb.group({
      selectedCountry: [''],
      selectedCity: ['']
    });
  }

  ngOnInit(): void {
    this.loadCountries();
    this.onCountryChange();
  }

  onSelectCountry(data:any){
    this.cities=data.cities
    console.log(data)
  }


  loadCountries(): void {
    const cPath = '/countries';
    this.restAPI.getAPI(cPath).subscribe((data) => {
      this.countries = data.data;
    }, err => {
      console.error(err);
    });
  }

  onCountryChange(): void {
    this.form.get('selectedCountry')?.valueChanges.subscribe(country => {
      this.cities = this.countries.find(c => c.country === country)?.cities || [];
      this.form.get('selectedCity')?.setValue('');
      this.cityData = null;
    });
  }

  onChangeCity(): void {
        const cPath = '/countries/population/cities?city='+this.form.get('selectedCity').value;
        const bodyObj = { city:this.form.get('selectedCity').value };
        this.restAPI.postAPI(cPath, bodyObj).subscribe((data) => {
          this.cityData = data.data;
          this.popullationData=data.data.filter(item=>item.city === this.form.get('selectedCity').value );
          console.log(this.popullationData)
        }, err => {
          console.error(err);
        });
      }
  
}


