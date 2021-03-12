import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CustomerModel } from '../../models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { TransactionModel } from 'src/app/models/transaction';

@Component({
  selector: 'new-transaction',
  templateUrl: './new-transaction.component.html',
  providers: [ CustomerService, TransactionService ]
})
export class NewTransactionComponent implements OnInit {
  // Set our default values
  localState = { value: '' };
  screenHeight: number;
  screenWidth: number;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  newCustomer: CustomerModel = new CustomerModel();
  customerPhoneNumber: string = '';
  isExistingCustomer: boolean = null;
  existingCustomer: CustomerModel = new CustomerModel();
  recipientPhoneNumber: string = '';
  existingRecipient: CustomerModel = new CustomerModel();
  newTransactionAmount: string = '';
  updateUserVisible: boolean = false;
  createCustomerVisible: boolean = false;
  newTransaction: TransactionModel = new TransactionModel();

  // TypeScript public modifiers
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private transactionService: TransactionService
    ) {
      this.getScreenSize();
  }

  attributes = Object.keys(this.existingCustomer);

  existingCustomerCheck(isTrue: boolean) {
    this.isExistingCustomer = isTrue;
    if (!isTrue) {
      this.createCustomerVisible = true;
    }
  }

  @ViewChild('stepper') stepper

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
  }

  searchCustomer() {
    if (this.customerPhoneNumber.length > 0) {
      this.customerService.getCustomer(this.customerPhoneNumber)
                          .subscribe(data => {
                            if (data.length > 1) {

                            }
                            else {
                              this.existingCustomer = data[0]
                            }
                          })
    }
  }

  searchRecipient() {
    if (this.recipientPhoneNumber.length > 0) {
      this.customerService.getCustomer(this.recipientPhoneNumber)
                          .subscribe(data => {
                            if (data.length > 1) {

                            }
                            else {
                              this.existingRecipient = data[0]
                            }
                          })
    }
  }

  onUpdateCustomerClick() {
    this.updateUserVisible = true
  }

  onSaveCustomerClick() {
    this.updateUserVisible = false
  }

  onCancelCustomerClick() {
    this.updateUserVisible = false
    location.reload()
  }

  createTransaction() {
    this.transactionService.createTransaction(this.newTransaction)
                           .subscribe(data => {
                            this.stepper.reset()
                           })
  }

  onCreateCustomerClick() {
    this.createCustomerVisible = true;
  }

  onCreateCustomerHide() {
    this.createCustomerVisible = false;
    this.isExistingCustomer = null;
  }

  setTransactionFrom() {
    this.newTransaction.customer_id_from = this.existingCustomer.customer_id
  }

  setTransactionTo() {
    this.newTransaction.customer_id_to = this.existingRecipient.customer_id
    this.newTransaction.dealer_id = '1'
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
