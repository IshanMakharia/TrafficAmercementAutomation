import requests
import json

# Define the JSON object
data = {
    "name": "John Doe",
    "ph":"9382789710",
    "rule":"021"
}

# Send a POST request to the API endpoint
response = requests.post("http://localhost:8800/api/fine/add", json=data)

# Print the response from the API
print(response.text)