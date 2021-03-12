import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerModel } from 'src/app/models/customer';

@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  providers: [CustomerService]
})
export class CreateCustomerComponent implements OnInit {
  constructor(
              private customerService: CustomerService
             ) {}

  newCustomer: CustomerModel = new CustomerModel()

  @Output() onHide = new EventEmitter();

  ngOnInit() {}

  onCreateClick() {
    if (this.newCustomer.first_name && this.newCustomer.last_name && this.newCustomer.phone_number) {
      this.customerService.createCustomer(this.newCustomer)
                          .subscribe(e => {
                            this.onHide.emit()
                          })
    }
    else {
      alert("You must enter a first name, last name, and a phone number")
    }
  }

  onCancelClick() {
    this.newCustomer = new CustomerModel()
    this.onHide.emit()
  }
}
