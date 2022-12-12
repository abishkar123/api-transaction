# transaction API  
 this api for our eact transaction app which is at ` .. link to ract app repo ..`
  .. what this api is 

  # HOW to use 
  1. Clone this project by Running ` gir clone http...`
  2. Run `cd api-transaction`
  3. Run ` npm i`
  4. Run  ` npm run dev`  you mush have `nodemon` install in your system, otherwise run ` npm i nodemon -g` to install globally 

  How to project will be server al `http://localhsot:8000`

## API 
this api server will be have 2 api endpoints 
1. user endpoint 
2. transction API 

all the endpoint will follow th follwong path `{rooturl}/api.v1` . this will alow clidnet to creat user , login and more.

### Tranasction API 
user api will use the following path `{rooturl}/api.v1/ transaction.` this api will allow client to do CRUD operation on transcation table

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION         |
| --- | ---- | ------ | ---------- | -----------------   |
| 1.  | `/`  | GET    | TRUE       |  allow user to fetch their own transcation                       |
| 2.  | `/`  | POST   | TRUE       |  allow user to post new transaction, data should be send as `{}` |
| 3.  | `/`  | PATCH  | No         |         |                                                         
| 4.  | `/`  | DELETE | No         | allow user to detete signle or mutiple of their own taransaction only. client should send the data as `[id1, id2]`                  |