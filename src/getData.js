 
const AWS = require('aws-sdk');

const getData = async ( event )  => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    try {


        const result = await dynamodb.scan({
            TableName: 'swTable'
        }).promise()
    
     
        const datos = result.Items;
     
        return {
            status: 200,
            body: {
                datos
            }
        }
    } catch (error) {
        console.log(error)
    }



}

module.exports = {
    getData
}