## SYST24444 Mobile Web-Based Application Development - Assignment 4
Program: **Computer Programming @ Sheridan College** <br>
Note: The following assignment was completed during Semester 3 (2024) <br>

## The Task:
Create a reactive form for Shirt Orders.  

## The Details: 
The form must have the following:
<ul>
  <li>Input for student: ID, first name, last name</li>
  <li>Dropdown select box for shirt sizes: S, M, L, XL, XXL</li>
  <li>Radio buttons for shirt colors: blue, orange, black</li>
  <li>Check boxes for shirt inclusions: campus name, sheridan logo</li>
  <li>Date picker</li>
  <li>Submit button</li>
  <li>Output Area</li>
</ul>

Code must contain the following:
<ul>
  <li>imports needed to setup and HttpClient (both app.modules.ts and app.component.ts</li>
  <li>imports needed to create a Reactive Form</li>
  <li>variable that: 
    <ul>
      <li>includes path to JSON file</li>
      <li>hold JSON file</li>
    </ul>
  </li>
  <li>class to hold controlDefaults from JSON</li>
  <li>variable to: 
    <ul>
      <li>set class structure created</li>
      <li>hold sizes array from JSON</li>
      <li>hold current date</li>
      <li>be of type FormGroup</li>
    </ul>
  </li>
</ul>

Inside the ngOnInit() block:
<ul>
  <li>code the http.get call to retrieve the JSON file and load the applicable variables</li>
  <li>setup the Reactive Form Group:
     <ul>KEY for From Control
      <li>ID</li>
      <li>First Name</li>
      <li>Last Name</li>
      <li>Size</li>
      <li>Colour</li>
      <li>Checkbox1</li>
      <li>Checkbox2</li>
      <li>Date</li>
    </ul>
  </li>
</ul>

The submit button function: <br>
<ul>
  <li>Declare a local variable that will include the following based on Checkbox settings: 
    <ul>
      <li>Neither box checked - No Inclusions</li>
      <li>Campus Name only checked - Name added</li>
      <li>Sheridan Logo only checked - Logo added</li>
      <li>Both checked - Name and Logo added</li>
    </ul>
  </li>
  <li>Use document.querySelector to find output area from form and create an output of all form data using Template Literals
    <ul>
      <li>Line 1:	[ID] / [First] [Last]</li>
      <li>Line 2:	Ordered [shirt size] size shirt in colour [colour]</li>
      <li>Line 3:	Includes: [local variable data based on check box status]</li>
      <li>Line 4: Ordered: [date formatted to DayofWeek, Month DD, YYYY]</li>
    </ul>
  </li>
</ul>

## The Final Product: 
![screencapture-localhost-4200-2025-01-28-13_55_15](https://github.com/user-attachments/assets/82cf6cb8-3840-4775-8d71-0052057f6502)

## Thoughts/Comments: 
The final assignment for this class felt very well rounded. I asked my professor for a lot of feedback since, again, how data was being passed around was confusing and I needed to make sure the variables were properly declared. 
