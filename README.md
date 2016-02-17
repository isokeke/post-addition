# post-addition

http://post-addition.meteor.com/addition

A program that receives a POST request containing two variables in the request body. The program answers with the addition of these two numbers. I also included a HTML form that uses the POST method.

Sample request:
```
curl -i -H "Content-Type: application/json" --data '{"number1":5,"number2":6}' http://post-addition.meteor.com/addition
```
Answer:
```json
{
  "result": 11
}
```
