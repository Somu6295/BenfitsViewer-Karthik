import { Component, OnInit } from '@angular/core';
import { IBenefit } from 'src/app/model/benefit';
import { IProduct } from 'src/app/model/product';
import { ProductService } from 'src/app/service/products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  benefits: IBenefit[] = [];
  filteredBenefits: IBenefit[] = [];
  products: IProduct[] = [];
  serviceTypeCodes: string[] = [];
  filteredServiceTypeCodes: string[];
  selectedServiceTypeCode: string = "A";
  

  constructor(private productService : ProductService) { 
    this.benefits = this.productService.getBenefits();
    this.filteredBenefits = this.benefits;
    this.serviceTypeCodes = this.getServiceTypeCodes();
    this.filteredServiceTypeCodes = this.serviceTypeCodes;
  }
  ngOnInit() {
    
  }

  getServiceTypeCodes(): string[] {
    let serviceTypeCodes: string[] = [];
    this.benefits.forEach(data => {
      let codes: string[] = data.products.map((product) => {
        return product.name
      });
      serviceTypeCodes = this.serviceTypeCodes.concat(codes);
      serviceTypeCodes = serviceTypeCodes.filter((item, index) => this.serviceTypeCodes.indexOf(item) !== index);
    });
    return serviceTypeCodes;
  }

  filterServiceTypeCode(event: any) {
    this.filteredServiceTypeCodes = this.serviceTypeCodes.filter(code =>  code.toLowerCase().includes(event.query.toLowerCase()) );
  }

  filterBenefits(event: any): void {
    let benefits:IBenefit[] = [];
    this.benefits.forEach(data => {
      let products:IProduct[] = [];
      products = data.products.filter(product => product.name.toLowerCase() === this.selectedServiceTypeCode.toLowerCase());
      benefits.push({products: products})
    });
    this.filteredBenefits = benefits.filter(benefit => !!benefit && !!benefit.products && benefit.products.length > 0);
  }
}
