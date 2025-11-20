# Write your MySQL query statement below
SELECT firstName, lastName, city, state
FROM Person Person
LEFT JOIN Address Address
ON Person.personId = Address.personId;