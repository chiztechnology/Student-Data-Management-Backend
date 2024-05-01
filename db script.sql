CREATE TABLE Students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pseudonym VARCHAR(50) UNIQUE,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT,
    gender ENUM('Male', 'Female', 'Other'),
    grade_level INT
);

CREATE TABLE Surveys (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    type VARCHAR(100),
    date DATE,
    responses TEXT,
    FOREIGN KEY (student_id) REFERENCES Students(id)
);

CREATE TABLE TallyForms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    type VARCHAR(100),
    date DATE,
    responses TEXT,
    FOREIGN KEY (student_id) REFERENCES Students(id)
);

CREATE TABLE Tests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    type VARCHAR(100),
    date DATE,
    score DECIMAL(5,2),
    FOREIGN KEY (student_id) REFERENCES Students(id)
);

CREATE TABLE AttendanceRecords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    date DATE,
    status ENUM('Present', 'Absent'),
    remarks TEXT,
    FOREIGN KEY (student_id) REFERENCES Students(id)
);

CREATE TABLE ExamResults (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    type VARCHAR(100),
    date DATE,
    score DECIMAL(5,2),
    FOREIGN KEY (student_id) REFERENCES Students(id)
);

CREATE TABLE Grades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    type VARCHAR(100),
    date DATE,
    score DECIMAL(5,2),
    FOREIGN KEY (student_id) REFERENCES Students(id)
);
