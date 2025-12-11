import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";
import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import { ENV } from "../lib/env.js";

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;

    const name = typeof fullName === "string" ? fullName.trim() : "";
    const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    const pass = typeof password === "string" ? password : "";

    try {
        if (!name || !normalizedEmail || !pass) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (pass.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(normalizedEmail)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        const existing = await User.findOne({ email: normalizedEmail });
        
        if (existing) {
            return res.status(409).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(pass, 10); 

        const newUser = new User({
            fullName: name,
            email: normalizedEmail,
            password: hashedPassword,
        });

        await newUser.save();
        generateToken(newUser._id, res);

        sendWelcomeEmail(newUser.email, newUser.fullName, ENV.CLIENT_URL)
            .catch(error => console.error("Failed to send welcome email:", error));

        return res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            profilePic: newUser.profilePic,
        });

    } catch (error) {
        console.error("Error in signup controller:", error);
        // Handle race-condition: duplicate key error for email uniqueness(MongoDB error code 11000)
        if (error.code === 11000 && (error.keyPattern?.email || error.keyValue?.email)) {
            return res.status(409).json({ message: "Email already exists" });
        }
        
        return res.status(500).json({ message: "Internal server error" });
    }
};