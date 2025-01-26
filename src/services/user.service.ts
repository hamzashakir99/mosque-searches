import { dbConnection } from "./db.connection";

export const createAccount = async (payload: {
    email: string;
    name: string;
    profile: string;
    email_verified: boolean;
}) => {
    try {
        const { db } = await dbConnection();
        const { email, name, profile, email_verified } = payload;
        return await db.collection("users").insertOne({
            email,
            name,
            profile,
            email_verified,
        });
    } catch (error) {
        console.error(error);
        return null;
    }
}