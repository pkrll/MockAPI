# MockAPI

Simple MockAPI server.

Add new end points by making a POST request to `baseURL/add`. The body of the response should include the new end points with the name as the key and the response as the value:

```json
{
  "test": {
    "success": "true"
  },
  "foo": {
    "success": "true",
    "message": "bar"
  }
}
```
