import UserServiceClient from "../src";

async function main() {
    // Initialize the client with your service URL
    const client = new UserServiceClient("http://localhost:5000");

    try {
        // Track user activity
        const trackingResult = await client.tracking.track(
            "BXTA0YkwdPrfxlurjBR25qbNFopEPOTE_ONEworks1_4308088",
            "ONEworks1_4308088",
            "visitor234",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            "2024-03-19T10:00:00Z"
        );
        console.log("Tracking Result:", trackingResult);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
