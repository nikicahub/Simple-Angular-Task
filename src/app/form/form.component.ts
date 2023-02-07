import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormModel } from './form.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  styleUrls: ['form.scss'],
  templateUrl: 'form.html',
})
export class FormComponent implements OnInit {
  //form group/model for saving and showing inputed data
  form !: FormGroup;
  formModelObj: FormModel = new FormModel();
  contactData !: any;

  //form fields
  name: string = "";
  lName: string = "";
  email: string = "";
  hobbie: string = "";

  //boolean showing output when form is filled
  showResult = false;

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.form = this.formbuilder.group({
      name: [''],
      lName: [''],
      email: [''],
      hobbie: ['']
    })

  }

  //toggle the view/hide of the textarea
  showOutput() {
    this.showResult = !this.showResult;
  }

  //store form data to the form model from the form fields
  storeFormData() {
    this.formModelObj.name = this.form.value.name;
    this.formModelObj.lName = this.form.value.lName;
    this.formModelObj.email = this.form.value.email;
    this.formModelObj.hobbie = this.form.value.hobbie;
  }

  //post form data to the server and reset form at the end
  postFormData() {
    this.showResult = true;
    this.storeFormData();
    this.api.postForm(this.formModelObj)
      .subscribe(res => {
        console.log(res);
        //alert the user about the changes being made and next step
        // alert("Form fields added to the database, please check the list page to see all inputs!");
        //reset form and hide the textarea
        this.form.reset();
        this.showResult = false;

      })
  }

  //reset form function + hide the textarea
  resetForm() {
    this.form.reset();
    this.showResult = false;
  }

  //clear the text area
  clearTextarea(textareaRef: HTMLTextAreaElement) {
    textareaRef.value = '';
  }

}
