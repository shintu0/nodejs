-- CREATE DATABASE record_company;

-- USE record_company;
-- CREATE TABLE test(
--   test BIGINT
-- );

-- ALTER TABLE test 
-- ADD another_column VARCHAR(25); 

-- SELECT * FROM test;

-- DROP TABLE band;

-- CREATE TABLE band
-- (
--   id INTEGER NOT NULL AUTO_INCREMENT,
--   name VARCHAR(255) NOT NULL,
--   PRIMARY KEY(id)
-- );

-- CREATE TABLE albums
-- (
--   id INTEGER NOT NULL AUTO_INCREMENT,
--   name VARCHAR(255) NOT NULL,
--   release_year INTEGER,
--   band_id INTEGER NOT NULL,
--   PRIMARY KEY(id),
--   FOREIGN KEY(band_id) REFERENCES band(id)
-- );

-- Create Employees Table
CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10, 2),
    hire_date DATE
);

-- Insert into Employees
INSERT INTO Employees (employee_id, first_name, last_name, department, salary, hire_date)
VALUES
(1, 'John', 'Doe', 'Sales', 50000.00, '2020-01-15'),
(2, 'Jane', 'Smith', 'HR', 60000.00, '2019-03-22'),
(3, 'Alice', 'Johnson', 'Sales', 55000.00, '2021-07-10'),
(4, 'Bob', 'Brown', 'IT', 70000.00, '2018-11-05'),
(5, 'Charlie', 'Davis', 'HR', 65000.00, '2022-02-18');

-- Create Orders Table
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    employee_id INT,
    order_date DATE,
    amount DECIMAL(10, 2),
    FOREIGN KEY (employee_id) REFERENCES Employees(employee_id)
);

-- Insert into Orders
INSERT INTO Orders (order_id, employee_id, order_date, amount)
VALUES
(101, 1, '2023-01-10', 200.00),
(102, 2, '2023-02-15', 300.00),
(103, 1, '2023-03-20', 150.00),
(104, 3, '2023-04-25', 400.00),
(105, 4, '2023-05-30', 250.00);

-- Verify Data
SELECT * FROM Employees;
SELECT * FROM Orders;
