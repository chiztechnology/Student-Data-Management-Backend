CREATE TABLE Students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    pseudonym VARCHAR(50) UNIQUE,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT,
    gender ENUM('Male', 'Female', 'Other'),
    grade_level INT
);

CREATE TABLE Surveys (
    survey_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    type VARCHAR(100),
    date DATE,
    responses TEXT,
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
);

CREATE TABLE TallyForms (
    form_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    type VARCHAR(100),
    date DATE,
    responses TEXT,
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
);

CREATE TABLE Tests (
    test_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    type VARCHAR(100),
    date DATE,
    score DECIMAL(5,2),
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
);

CREATE TABLE AttendanceRecords (
    attendance_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    date DATE,
    status ENUM('Present', 'Absent'),
    remarks TEXT,
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
);

CREATE TABLE ExamResults (
    result_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    type VARCHAR(100),
    date DATE,
    score DECIMAL(5,2),
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
);

CREATE TABLE Grades (
    grade_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    type VARCHAR(100),
    date DATE,
    score DECIMAL(5,2),
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
);
