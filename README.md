# Weather Message Api

## Description

Weather Message API is an API that retrieves the city name from the URL path parameter and returns a weather forecast message for today's weather, temperature, and precipitation probability for that city. 

When a user specifies a particular city, the API fetches the weather information for that city, generates an appropriate message based on it, and returns it.

## Demo
<img width="1432" alt="スクリーンショット 2024-02-20 21 16 06" src="https://github.com/KeachT/weather-message-api/assets/62630204/1e68fb85-af15-46db-b8b4-54ffd988d2cc">

## Requirement

Node.js 18.15.0 +

## How To Use

1. Request Format:
   Send a GET request to the API endpoint with the city name as a path parameter.

    ```http
    GET /api/{city}
    ```

2. Response Format:

   - Successful Response:
   
      Status Code: 200 OK
     
      Content: JSON object containing today's weather forecast message for the specified city.

   - Error Response:

      Status Code: 404 Not Found

      Content: Message indicating that the city was not found or weather data is unavailable.

4. Example:

   Request:
   ```http
   GET /api/Tokyo
   ```

   Response:
   ```json
   {
   "message": "The weather in Tokyo is Rainy. The maximum temperature is 21.9°C, the minimum temperature is 7.9°C, and P.O.P is 58%.",
   "description": "The city's name is Tokyo."
   }
   ```


## Author

KeachT

## License

The MIT License (MIT)
https://opensource.org/licenses/mit-license.php
