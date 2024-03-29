# Software Requirement System (SRS) for an Enterprise Resource Planning (ERP) Software for Colleges

## 1. Introduction

#### 1.1 Purpose

Enterprise Resource Planning (ERP) Software for Colleges is intended to help administrators, faculty and students keep track of various things which are tedious to do manually.

This document is meant to delineate the features of ERP System, so as to serve as a guide to the developers on one hand and a software validation document for the prospective client on the other.

#### 1.2 Scope

_In Scope_:

- a. Managing information about departments, admins, faculties and students
- b. Authentication facility for admins, faculties and students
- c. Setting up exams
- d. Showing timetable of daily classes and exams
- e. Allowing students to see available courses
- f. Storing and updating student attendance

_Out of scope_:

- a. College admissions
- b. Course enrolment
- c. Fee payment

#### 1.3 Definitions, Acronyms and Abbreviations

_Acronyms and Abbreviations_:

- a. ERP: Enterprise Resource Planning
- b. SRS: Software Requirement Specification
- c. GUI: Graphical User Interface

_Definitions_:

- a. **Admin**: College administrator with admin access to ERP
- b. **Department**: Specialising in a particular field of study offered by college, with multiple faculties under its aegis
- c. **Attendance**: A day-by-day record of presence or absence of a student to a particular course

## 2. Overall Description

#### 2.1 Product Perspective

The ERP System aims to make the tedious manual management of courses, attendance and time table generator easier and less time consuming. This is intended to be a standalone software, and should ideally depend on the minimal amount of external libraries.

#### 2.2 Product Functions

| Class of Use Cases             | Use Cases                                    | Description                                                                 |
| ------------------------------ | -------------------------------------------- | --------------------------------------------------------------------------- |
| Related to authorization       | Sign up                                      | Admin, faculty and students signup                                          |
|                                | Login                                        | Automatic role based login, with each type of user having its own dashboard |
|                                | Password Change                              | Change password in case user forgot password                                |
| Related to information display | View departments in college                  | See list of all departments in college                                      |
|                                | View all students admitted to department     | See all students of a particular department                                 |
|                                | View all courses provided by all departments | See all courses taught by a department                                      |
|                                | View all students in a particular course     | See all students enrolled in a particular course                            |
|                                | View companies attending placement drive     | See companies arriving for placement                                        |
|                                | Display exam timetable to all students       | Show exam time table for a particular department                            |
| Related to students            | Students to submit assignments               | Students submit their assigned work                                         |
|                                | Students to update personal information      | Students can update their personal info if it changes                       |
|                                | View attendance in every course              | View attendance of every course                                             |
|                                | Calculate overall results of a student       | Calculate marks per subject and overall                                     |
| Related to faculty             | Faculty to give assignments                  | Faculty can upload question papers for assignments                          |
|                                | Faculty to set exam papers                   | Faculty can upload question paper and duration for exams                    |
|                                | Faculty to report scores for each paper      | Faculty can give marks to every student per assignment or exam              |

#### 2.3 Principal Actors

The two principal actors in the ERP System are "admin", "faculty" and "user"

#### 2.4 General Constraints

- Requires an active Internet connection.

#### 2.5 Assumptions and Dependencies

- The user has a browser up to date with the minimum version requirements of the application

## 3 Specific Requirements

#### 3.1 Functional Requirements

We describe the functional requirements by giving various use cases.

#### Use case related to authorization

##### Use case 1: Create account

_Primary Actor_: User
_Pre-Condition_: Internet connection available

_Main Scenario_:

1. User visits website domain in the browser
2. User selects “Sign Up”
3. User provided with a form with fields: full name, email, password
4. Validate details’ format
5. Send verification link to email
6. User clicks on verification link
7. User logged in and redirected to home page

_Alternate Scenario_:

- 4(a) Details format mismatch
  - 4(a) 1. Prompt user to enter correct details in the field/s
  - 4(a) 2. Clear fields
- 4(b) Email exists in database
  - 4(b) 1. Inform the user that account with provided email exists
  - 4(b) 2. Clear fields

##### Use case 2: Login

_Primary Actor_: User
_Pre-condition_: None

_Main Scenario_ :

1. User starts application and is shown login form
2. Logs in with correct username and password
3. System checks username and password
4. Dashboard is displayed

_Alternate Scenario_:

- 2(a) User enters incorrect username or password
  - 2(a) 1. System informs user that either username or password is correct
  - 2(a) 2. Displays login form again

##### Use case 3: Reset Password

_Primary Actor_: User
_Pre-condition_: User has forgotten password

_Main scenario_:

1. User starts application and clicks on forgot password link
2. User enters username in given field
3. User receives email with reset link in their registered email
4. User clicks link and is taken to a form where they enter new password and confirm it in another field
5. After user submits, system updates user with new password

_Alternate scenario_:

- 2(a) User enters wrong username
  - 2(a) 1. System displays no such username registered
  - 2(a) 2. Shows login form again

_Alternate scenario 2_:

- 4(a) User enters password correctly in 1 field in reset password form but enters different password in confirmation field
  - 4(a) 1. System shows message that passwords do not match, please update and confirm again

---

#### Use case related to information display

##### Use case 1: View all departments in college

_Primary Actor_: User
_Pre-condition_: User is logged in

_Main Scenario_:

1. User navigates to page where all departments are listed

##### Use case 2: View all students enrolled in a department

_Primary Actor_: Faculty or Admin
_Pre-condition_: Faculty or Admin is logged in

_Main Scenario_:

1. Faculty or Admin navigates to page to see students
2. Faculty or Admin selects department and clicks submit
3. Sees list of student in that department

##### Use case 3: View all courses a department provides

_Primary Actor_: Faculty or Admin
_Pre-condition_: Faculty or Admin is logged in

_Main Scenario_:

1. Faculty or Admin navigates to page to see students
2. Faculty or Admin selects department and clicks submit
3. Sees list of students in that department

##### Use case 4: View all students enrolled in a course

_Primary Actor_: Faculty or Admin
_Pre-condition_: Faculty or Admin is logged in

_Main Scenario_:

1. Faculty or Admin navigates to page to see students
2. Faculty or Admin selects course and clicks submit
3. Sees list of student in that course

##### Use case 5: View companies attending placement drive

_Primary Actor_: User
_Pre-condition_: User is logged in

_Main Scenario_:

1. User navigates to placement page
2. User selects department and clicks submit
3. Sees list of companies which accept applications from that department

##### Use case 6: View exam time table of a particular department

_Primary Actor_: User
_Pre-condition_: User is logged in

_Main Scenario_:

1. User navigates to exam routine page
2. User selects department and clicks submit
3. Sees exam time table of that department

---

#### Use Case Related to Students

##### Use Case 1: Update Personal Details of student

_Primary Actor_: Student
_Pre-condition_: Student is logged in

_Main Scenario_:

1. Student navigates to Personal Profile Page
2. Student updates their details and saves
3. (...) Admin approves
4. Details updated

_Alternate Scenario_:

- 3(a) Admin denies request
  - 3(a) 1. Admin requests proof for update
  - 3(a) 2. Student submits proof of update
  - 3(a) 3. Admin approves after confirming valid proof

##### Use Case 2: Student submits assignments

_Primary Actor_: Student
_Pre-condition_: Student is logged in and on page of respective assignment

_Main Scenario_:

1. Student selects option to upload answer script
2. Student selects file from device
3. File is uploaded
4. Student clicks submit
5. Assignment submitted

_Alternate Scenario_:

- 3(a) File upload fails
  - 3(a) 1. Error message shown
  - 3(a) 2. Student asked to upload file again

##### Use Case 3: View attendance of particular course

_Primary Actor_: Student
_Pre-condition_: Student is logged in and on attendance page

_Main Scenario_:

1. Student selects course for which they want to see attendance
2. Students select date range for attendance, and clicks submit
3. Calendar with attendance shown

##### Use Case 4: Download marksheet of student

_Primary Actor_: Student
_Pre-condition_: Student is logged in and on marksheet page

_Main Scenario_:

1. Student selects semester for which they want to download marksheet
2. Student clicks submit
3. File starts downloading and is saved on student's device

---

#### Use cases related to Faculty

##### Use case 1: Create exam

_Primary Actor_: Faculty
_Pre-Condition_: Faculty logged in

_Main Scenario_:

1. Faculty selects the option of creating exam
2. Faculty selects course to which to provide question paper
3. Faculty uploads question paper
4. Faculty selects course, sets date and duration of exam
5. Faculty submits, exam is created
6. Exam routine is generated by system

_Alternate Scenario_:

- 3(a) Not able to upload questions (network failure, site down)
  - 3(a) 1. Error message is displayed to faculty
  - 3(a) 2. Reload page, to try again

##### Use Case 2: Providing Assignments

_Primary Actor_: Faculty
_Pre-Condition_: Faculty logged in

_Main Scenario_:

1. Faculty navigates to page to upload assignment
2. Faculty selects course to which to provide assignment
3. Faculty uploads question paper or provides a link to said assignment.
4. Faculty sets last date of submission.
5. Students receive notification mail about new assignment.

_Alternate Scenario 1_:

- 3(a) Not able to upload questions (network failure, site down)
  - 3(a) 1. Error message is displayed to faculty
  - 3(a) 2. Reload page, to try again

##### Use Case 3: Report Scores of students on assignments and exams

_Primary Actor_: Faculty
_Pre-Condition_: Faculty logged in

_Main Scenario_:

1. Faculty navigates to page to upload assignment
2. Faculty selects course to which to provide assignment
3. Faculty uploads question paper or provides a link to said assignment.
4. Faculty sets last date of submission.
5. Students receive notification mail about new assignment.

_Alternate Scenario 1_:

- 3(a) Not able to upload questions (network failure, site down)
  - 3(a) 1. Error message is displayed to faculty
  - 3(a) 2. Reload page, to try again

#### 3.2 Software Quality Attributes:

- The database management system should enforce “ACID” (Atomicity, Consistency, Isolation, Durability) properties so that there is no inconsistency between reads (view) and writes (addition/updating).
- The database schema should enforce integrity constraints, so that there is no disallowed duplication, reference error, etc.
