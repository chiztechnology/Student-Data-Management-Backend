# API Documentation

This document provides details about the endpoints available in our Student Data Management System API.

## Base URL

The base URL for all API endpoints is: `https:/localhost:{port}/api` (replace `{port}` by your port number)

## Endpoints

### Students

#### Get All Students

- **Endpoint:** `/students`
- **Method:** `GET`
- **Description:** Retrieves a list of all students.
- **Response:**
  - Status Code: `200 OK`
  - Body:
    ```json
    [
      {
        "student_id": 1,
        "pseudonym": "bravesilverlion",
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "age": 20,
        "gender": "Female",
        "grade_level": 12
      },
      ...
    ]
    ```

#### Get Student by ID

- **Endpoint:** `/students/{student_id}`
- **Method:** `GET`
- **Description:** Retrieves a single student by their ID.
- **Parameters:**
  - `{student_id}`: The unique identifier of the student.
- **Response:**
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "student_id": 1,
      "pseudonym": "bravesilverlion",
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "age": 20,
      "gender": "Female",
      "grade_level": 12
    }
    ```

#### Add Student

- **Endpoint:** `/students`
- **Method:** `POST`
- **Description:** Adds a new student.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 22,
    "gender": "Male",
    "grade_level": 11
  }

#### Response:
Status Code: 201 Created
Body:
```json
{
  "message": "Student added successfully",
  "student_id": 6
}
```

### Update Student
- **Endpoint:** : /students/{student_id}
- **Method** : PUT
- **Description** : Updates an existing student by their ID.
Parameters:
{student_id}: The unique identifier of the student.
Request Body:
```json
{
  "name": "Updated Name",
  "email": "updated@example.com"
}
```
Response:
Status Code: 200 OK
Body:
```json
{
  "message": "Student updated successfully"
}
```

### Delete Student
- **Endpoint:** : /students/{student_id}
- **Method** : DELETE
- **Description** : Deletes a student by their ID.
Parameters:
{student_id}: The unique identifier of the student.
Response:
Status Code: 204 No Content

### For Attendance records & Surveys
follow the same process. you can find the table schema [here for easy configuration](./db%20script.sql)