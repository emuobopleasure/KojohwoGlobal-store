import React from 'react'
import { databases } from '../appwrite';

const TestSubscriber = () => {
    const addSubscriber = async () => {
        try {
            const response = await databases.createDocument(
                "68c30bfb001b796428f4", // databaseId
                "subscribers",         // collectionId
                "unique()",            // auto-generate ID
                {
                    email: "test@example.com", // must match your schema
                }
            );
            console.log("✅ Subscriber added:", response);
        } catch (error) {
            console.error("❌ Error adding subscriber:", error);
        }
    };
    return (
        <button onClick={addSubscriber}></button>
    )
}

export default TestSubscriber