const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  MCID: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: function () {
        return this.authType === "email"; 
    },
  },
  googleId: { 
    type: String, 
    unique: true, 
    sparse: true 
  },
  authType: { 
    type: String, 
    enum: ["email", "google"],
    required: true 
  },
  role: {
    type: String,
    enum: ["subscriber", "developer", "contributor"],
    default: "subscriber",
  },

  profile: {
    full_name: String,
    gender: {
      type: String,
      enum: ["male", "female", "trans"],
    },
    phone: String,
    location: String,
    DOB: Date,
    bio: String,
    avatar_url: String,
    fundGrade: {
      type: Number,
      default: 0,
    },
    points: {
      type: Number,
      default: 0,
    },
    eventCount: {
      type: Number,
      default: 0,
    },
    links: {
      website: String,
      github: String,
      linkedin: String,
      instagram: String,
      threads: String,
      twitter: String,
    },
    experience: {
      work: String,
      education: String,
    },
    skills: [String],
    address: {
      street: String,
      city: String,
      state: String,
      postal_code: String,
      country: String,
    }
  },

  metadata: {
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "banned"],
      default: "active",
    },
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
