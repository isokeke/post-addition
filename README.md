# post-addition

A program that receives a POST request containing two variables in the request body. The program answers with the addition of these two numbers.

Sample request:

curl -i -H "Content-Type: application/json" --data '{"number1":5,"number2":6}' http://localhost:3000/addition

Answer:

{
"result": 11
}
