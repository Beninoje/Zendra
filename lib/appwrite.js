import {Account, Client, ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.noje.zendra",
    projectId: "6627ca79e98ec5192a04",
    databaseId: "6627cbd0aa1c8d18c135",
    storageId: "6627d24dd2d186c0b53c",
    userCollectionId: "6627cbd577aa1a3c6d79",
    videoCollectionId: "6627cc18e2572a7afda5",
}
// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;
const account = new Account(client);
export const createUser = () => {
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}
