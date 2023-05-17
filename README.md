# Application Setup

## Install

    yarn install

## Run the app

    yarn start
    
## Environment Variables
Add the below variables to the `.env` file in the root folder.

    PORT=<ADD_YOUR_PORT, (default:3000)>
    MONGO_URL=<ADD_YOUR_MONGO_URL_HERE, (required)>

# REST API


## Download File

### Request

`GET /file/download?id={fileID}`

### Response

    NOTE: Downloads/Streams the corresponding file

## Create Personal Details

### Request

`POST /api/personal_details`

### Response

    Status: 201 Created

    // on every first hit.
    {
        "message": "personal details schema created"
    }
    
    // on every second hit.
    {
        "_id": "64646f704d887d6d30431cdf"
        "name": "John Doe",
        "age": 25,
        "email": "johndoe@example.com"
    }

## Get All The File Ids

### Request (Additional)

`GET /file`

### Response

    Status: 200 Ok

    {
        "fileIds": ["file-1.txt", "file-2.txt"]
    }
    
