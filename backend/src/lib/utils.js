import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const { JWT_SECRET } = ENV;
    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not configured");
    }
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent XSS attacks: Cross-Site Scripting
        sameSite: "strict",// prevent CSRF attacks: Cross-Site Request Forgery
        secure: process.env.NODE_ENV === "development" ? false : true, // only send cookie over HTTPS in production
    });

    return token;
}
