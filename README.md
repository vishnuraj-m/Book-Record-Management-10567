# Book-Record-Management-10567

 This is book record management API backend for the management of records and books

## Routes and Endpoints

## /users

POST: create user ✅
GET: Get all list of users ✅

## /users/{id}

GET: Get user by id ✅
PUT: Update a user by id ✅
DELETE: Delete a user by id (check if he/ she still has an issued book) (is there any fine to be paid)

## /users/subscription-details/{id}

GET: Get user subscription details
    1. Date of subscription
    2. Valid till
    3. FIne if any

## /books

GET: Get all books
POST: Create/Add a new book

## /books/{id}

GET: Get book by id
POST: Update a book by id

## /books/issued

GET: Get all issued books

## /books/issued/withFine

GET: all issued books with fine

## Subscription Types ====>

 Basic(3 months)
 Standard(6 months)
 Premium(12 months)

 If the subscription date is 01/08/22
 and subscription type is standard
 the valid till date will be 01/02/23

 If an issued book and the issued book is to be returned at 01/01/23
 and he is misses it, then he gets a fine of Rs- 100/

 If he has an issued book and the issued book is to be returned at 01/01/23
 If he is missed the date of return, and his subscription also expires, then he will get a fine RS- 300/
