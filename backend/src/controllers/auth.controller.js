import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;

    const name = typeof fullName === "string" ? fullName.trim() : "";
    const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    const pass = typeof password === "string" ? password : ""; // Should also trim password

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

        // Remove the genSalt line - bcrypt.hash() auto-generates salt
        const hashedPassword = await bcrypt.hash(pass, 10); 

        const newUser = new User({
            fullName: name,
            email: normalizedEmail,
            password: hashedPassword,
        });

        // Remove the 'if (newUser)' check - it's always truthy after instantiation
        await newUser.save();
        generateToken(newUser._id, res);

        return res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            profilePic: newUser.profilePic,
        });

    } catch (error) {
        console.error("Error in signup controller:", error);
        
        // Handle race-condition: unique email constraint violation (MongoDB E11000)
        if (error.code === 11000 && (error.keyPattern?.email || error.keyValue?.email)) {
            return res.status(409).json({ message: "Email already exists" });
        }
        
        return res.status(500).json({ message: "Internal server error" });
    }
};