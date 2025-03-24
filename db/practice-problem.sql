/*

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


Basic SQL Questions
Select all employees from the Sales department.

Find the total number of employees in each department.

Get the names of employees who were hired after 2020.

Find the average salary of employees.

List all employees sorted by their salary in descending order.

Intermediate SQL Questions
Find the total sales amount for each employee.

Find employees who have not placed any orders.

Find the department with the highest total salary.

Find the employee with the highest single order amount.

Find the total number of orders placed by each department.

delete duplicate records

Advanced SQL Question (Bonus)
Find the employees who earn more than the average salary of their department.
*/

CREATE DATABASE company;

DROP DATABASE org;

CREATE DATABASE org;
USE company;

CREATE TABLE employees(
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10, 2),
    hire_date DATE
);

CREATE TABLE orders(
    order_id INT PRIMARY KEY,
    employee_id INT,
    order_date DATE,
    amount DECIMAL(10, 2),
    FOREIGN KEY(employee_id) REFERENCES employees(employee_id)
);

SELECT * FROM sys.sys_config;

SELECT * FROM sys.user_summary;

SELECT "Test" FROM dual;

INSERT INTO employees (employee_id, first_name, last_name, department, salary, hire_date)
VALUES
(1, 'John', 'Doe', 'Sales', 50000.00, '2020-01-15'),
(2, 'Jane', 'Smith', 'HR', 60000.00, '2019-03-22'),
(3, 'Alice', 'Johnson', 'Sales', 55000.00, '2021-07-10'),
(4, 'Bob', 'Brown', 'IT', 70000.00, '2018-11-05'),
(5, 'Charlie', 'Davis', 'HR', 65000.00, '2022-02-18');

SELECT * from company.employees;

INSERT INTO orders (order_id, employee_id, order_date, amount)
VALUES
(101, 1, '2023-01-10', 200.00),
(102, 2, '2023-02-15', 300.00),
(103, 1, '2023-03-20', 150.00),
(104, 3, '2023-04-25', 400.00),
(105, 4, '2023-05-30', 250.00);

SELECT * FROM company.orders;

-- Basic SQL Questions

-- Select all employees from the Sales department.
SELECT * from company.employees;

-- Select all employees from the Sales department.

SELECT * FROM company.employees cemp WHERE cemp.department='Sales';

-- Find the total number of employees in each department.

SELECT cemp.department, COUNT(*) FROM company.employees cemp GROUP BY cemp.department;

-- Get the names of employees who were hired after 2020.
SELECT * FROM company.employees cemp WHERE cemp.hire_date > DATE('2020-12-31');

SELECT * FROM company.employees cemp WHERE cemp.hire_date > '2020-12-31';

SELECT * FROM company.employees cemp WHERE SUBSTRING_INDEX(cemp.hire_date,'-',1) > '2020';

SELECT CONCAT(cemp.first_name,' ',cemp.last_name) as "FULL NAME", SUBSTR(cemp.first_name,2), SUBSTRING_INDEX(cemp.hire_date,'-',1) as hire_year FROM company.employees cemp HAVING hire_year > '2020';

-- Find the average salary of employees.

SELECT AVG(cemp.salary) as average_salary FROM company.employees cemp;

-- salary grater than average salary
SELECT cemp.first_name, cemp.salary FROM company.employees cemp WHERE cemp.salary>(SELECT AVG(salary) FROM company.employees);

--List all employees sorted by their salary in descending order.

SELECT * FROM company.employees ORDER BY salary desc;
SELECT first_name, salary FROM company.employees ORDER BY salary desc;

-- Intermediate SQL Questions

--Find the total sales amount for each employee.

SELECT CONCAT(cemp.first_name,' ',cemp.last_name) as "full_name", SUM(cord.amount) FROM company.employees cemp, company.orders cord WHERE cemp.employee_id=cord.employee_id GROUP BY full_name;

SELECT CONCAT(cemp.first_name,' ',cemp.last_name) "full_name", SUM(cord.amount) FROM company.employees cemp JOIN company.orders cord on cemp.employee_id=cord.employee_id GROUP BY full_name;

SELECT NOW() FROM dual;

SELECT CURDATE() FROM dual;

--Find employees who have not placed any orders.

SELECT cemp.employee_id,cemp.first_name, COUNT(cord.order_id) "order_count" FROM company.employees cemp LEFT JOIN company.orders cord ON cemp.employee_id=cord.employee_id GROUP BY cemp.first_name,cemp.employee_id HAVING order_count=0;

--Find the department with the highest total salary.
SELECT cemp.department,SUM(cemp.salary) as "max_total_salary" FROM company.employees cemp GROUP BY cemp.department ORDER BY max_total_salary DESC LIMIT 1;

-- Find the employee with the highest single order amount.

SELECT cemp.first_name, MAX(cord.amount) max_ord_amt FROM company.employees cemp JOIN company.orders cord ON cemp.employee_id=cord.employee_id GROUP BY cemp.first_name ORDER BY max_ord_amt DESC LIMIT 1;

SELECT cemp.first_name, cord.amount FROM company.employees cemp JOIN company.orders cord ON cemp.employee_id=cord.employee_id ORDER BY cord.amount DESC LIMIT 1;

-- Find the total number of orders placed by each department.

SELECT cemp.department, COUNT(cord.order_id) orders_count FROM company.employees cemp JOIN company.orders cord ON cemp.employee_id=cord.employee_id GROUP BY cemp.department;

-- delete duplicate records
-- delete by first_name
DELETE FROM company.employees c_emp WHERE c_emp.first_name IN (SELECT c_emp.first_name FROM (SELECT cemp.first_name, COUNT(*) as row_counts FROM company.employees cemp GROUP BY cemp.first_name  HAVING row_counts>1) as tem) ;


/*

Advanced SQL Question (Bonus)
Find the employees who earn more than the average salary of their department.
*/