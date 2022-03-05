There are 9 HTTP request methods:

- GET
- PUT
- POST
- HEAD
- TRACE
- PATCH
- DELETE
- OPTIONS
- CONNECT

Let's talk about them in a bit more detail.

HTTP request methods are the actions initiated from the client-side to perform certain actions.

These HTTP request methods are sometimes called nouns or referred to as HTTP verbs.

📌 GET

The GET method is the most common of all these request methods. It is used to get the desired resources from the server.

The GET methods don't affect the state of the server.

📌 POST

The POST method is used to submit the information to the server. As we're submitting data, the POST method often changes the state of the server.

📌 PUT

The PUT method is used whenever you need to change the resource. The resource, which is already a part of resource collection.

📌 PATCH

The PATCH request method is used to modify only the necessary part of the data or response. The PATCH method doesn't modify the entire response.

📌 HEAD

The server sends the response without the body. The HEAD method asks for a response identical to that of a GET request, but it is faster as small data is transferred.

📌 DELETE

As the name says, the DELETE request method is used to delete the specified resource. It requests that the origin server delete the resource identified by the Request-URL.

📌 CONNECT

The CONNECT method establishes two-way communication between the client and the requested resource.

CONNECT request method is used to push your proxy to start an HTTP tunnel.

📌 OPTIONS

The OPTIONS method is used to describe the communication options available for the target resource. The client can either specify a URL for describing the communication options available for a specific resource or an asterisk (*) if they want to target the server.

📌 TRACE

The TRACE method is generally used for debugging. It performs a message loop-back test along the path to the desired data.