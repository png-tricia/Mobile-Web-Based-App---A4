import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

/* CREATE A CLASS TO HOLD controlDefaults FROM JSON */
class conDefaults {
  controlID!: string;
  controlFirst!: string;
  controlLast!: string;
  controlSize!: string;
  controlColour!: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A4gariandp';

  constructor(private http: HttpClient) { }

  /* VARIABLE THAT INCLUDES PATH TO THE JSON FILE */
  url = '../assets/data/A4Form.json';
  /* VARIABLE TO HOLD JSON FILE */
  A4FormData!: any;

  /* VARIABLE SET TO THE CLASS STRUCTURE CREATED */
  cDefaults!: conDefaults;
  /* EMPTY ARRAY TO HOLD SIZES ARRAY FROM JSON */
  sizeArray!: any[];
  /* VARAIBLE THAT HOLDS CURRENT DATE */
  currentDate = new Date();
  /* VARIABLE THAT IS OF TYPE FormGroup */
  gariandpForm!: FormGroup;

  /* LOCAL VARIABLES */
  studentId!: string;
  studentFirst!: string;
  studentLast!: string;
  studentSize!: string;
  studentColour!: string;

  /* SIMILAR TO THE HTTPAPP WE DID */
  getLocal() {
    this.http.get(this.url).subscribe((res) => {
      this.A4FormData = res;
      this.studentId = this.A4FormData.controlDefaults.controlID;
      this.studentFirst = this.A4FormData.controlDefaults.controlFirst;
      this.studentLast = this.A4FormData.controlDefaults.controlLast;
      this.studentSize = this.A4FormData.controlDefaults.controlSize;
      this.studentColour = this.A4FormData.controlDefaults.controlColour;
      this.sizeArray = this.A4FormData.shirtSizes;
    });
  }

  ngOnInit() {
    this.getLocal();
    this.gariandpForm = new FormGroup({
      id991446494: new FormControl(this.studentId),
      Patricia: new FormControl(this.studentFirst),
      Gariando: new FormControl(this.studentLast),
      gariandpsize: new FormControl(this.studentSize),
      gariandpcolor: new FormControl(this.studentColour),
      gariandpinclude1: new FormControl(false),
      gariandpinclude2: new FormControl(false),
      gariandpdate: new FormControl(this.currentDate)
    });
  }

  onSubmit() {
    /* W3SCHOOLS DOCS - HTML DOM Document querySelector() */

    /* INITIALIZE EMPTY STRING */
    document.querySelector("#formoutput")!.innerHTML = "";

    /* QUERY SELECTOR */
    document.querySelector("#formoutput")!.innerHTML +=
      `${this.gariandpForm.value.id991446494} /  ${this.gariandpForm.value.Patricia} ${this.gariandpForm.value.Gariando}`;

    document.querySelector("#formoutput")!.innerHTML +=
      `<br>Ordered ${this.gariandpForm.value.gariandpsize} size shirt in colour ${this.gariandpForm.value.gariandpcolor}`;

    /* CHECKBOX COMBOS */
    if (this.gariandpForm.value.gariandpinclude1 == true && this.gariandpForm.value.gariandpinclude2 == false) {
      document.querySelector("#formoutput")!.innerHTML +=
        `<br>Includes: Name added`;
    } else if (this.gariandpForm.value.gariandpinclude1 == false && this.gariandpForm.value.gariandpinclude2 == true) {
      document.querySelector("#formoutput")!.innerHTML +=
        `<br>Includes: Logo added`;
    } else if (this.gariandpForm.value.gariandpinclude1 == true && this.gariandpForm.value.gariandpinclude2 == true) {
      document.querySelector("#formoutput")!.innerHTML +=
        `<br>Includes: Name and Logo added`;
    } else {
      document.querySelector("#formoutput")!.innerHTML +=
        `<br>Includes: No inclusions`;
    }

    document.querySelector("#formoutput")!.innerHTML += `<br>Ordered: ${this.gariandpForm.value.gariandpdate}`;
  }

}
