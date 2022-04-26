const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const addPost = async ( event )  => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { name, apellidos } = JSON.parse(event.body) 
    
    const id = v4()

    const newPost = {
        id,
        name,
        apellidos,
     
    }

    await dynamodb.put({
        TableName: 'swTable',
        Item: newPost
    }).promise()

    return {
        status: 200,
        body: JSON.stringify(newPost)
    }

}

module.exports = {

    addPost
}