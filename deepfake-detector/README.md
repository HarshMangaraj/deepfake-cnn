# Deepfake Detector

An open-source, minimalistic web application for detecting AI-generated (deepfake) images using a Convolutional Neural Network (CNN).

## Overview
Deepfake Detector allows users to upload images and instantly receive a verdict on whether the image is REAL or FAKE, along with a confidence score.

The frontend focuses on providing a clean, distraction-free user experience, while the backend utilizes a PyTorch ResNet18 model to classify the images with high accuracy.

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Radix UI, TanStack Router.
- **Backend**: FastAPI, PyTorch, Pillow.

## How It Works: The CNN Model
This project relies on a **Convolutional Neural Network (CNN)**. A CNN is a type of artificial intelligence specifically designed to analyze visual data like images.
We are using a variation of the **ResNet18** (Residual Network) architecture. 

Here's how it analyzes an image:
1. **Convolutions**: The model slides small "filters" across the image to detect features like edges, textures, and ultimately complex patterns (like skin inconsistencies, noise, or AI generation artifacts).
2. **Residual Connections**: ResNet18 allows information to "skip" layers, which helps the network learn deeper, more complex representations without degrading performance during training.
3. **Classification**: The final layer (the "fully connected" layer) has been modified to output exactly two probabilities: `REAL` or `FAKE`. The model compares the internal patterns it learned during training to the uploaded image to generate a confidence score.

## Setup Instructions

### Backend (FastAPI + PyTorch)
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows use: .venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   pip install python-multipart  # Required for FastAPI file uploads
   ```
4. Run the server:
   ```bash
   uvicorn main:app --reload
   ```
   *The API will be available at `http://127.0.0.1:8000`.*

### Frontend (React + Vite)
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies (we recommend bun, but npm/yarn works too):
   ```bash
   bun install
   ```
3. Start the development server:
   ```bash
   bun run dev
   ```
   *The app will be available at `http://localhost:5173`.*

---
*Built for transparency and media authenticity.*
