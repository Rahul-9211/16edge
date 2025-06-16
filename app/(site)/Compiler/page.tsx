"use client"; // Required for client-side components in Next.js App Router

import React, { useState } from "react";
import Editor from "@monaco-editor/react"; // Monaco Editor for code editing

// Define the structure of the API response
interface CompileResponse {
  output: string;
  error: string;
  cpuTime: string;
}

const JSCompiler: React.FC = () => {
  console.log('JSCompiler component rendering');
  const [code, setCode] = useState<string>("console.log('Hello, World!');"); // Default JavaScript code
  const [stdin, setStdin] = useState<string>(""); // User's stdin input
  const [output, setOutput] = useState<string>(""); // Output from the API
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const compileCode = async () => {
    console.log(process.env.NEXT_PUBLIC_COMPILER_KEY);
    setLoading(true); // Set loading to true while fetching

    // Create a new options object for each request
    const url = "https://onecompiler-apis.p.rapidapi.com/api/v1/run";
    const options: RequestInit = {
      method: "POST",
      headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_COMPILER_KEY || "", // Replace with your API key
        "x-rapidapi-host": "onecompiler-apis.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: "javascript", // JavaScript language
        stdin: stdin, // User's stdin input
        files: [
          {
            name: "index.js", // File name for JavaScript
            content: code, // User's code input
          },
        ],
      }),
    };

    try {
      const response = await fetch(url, options); // Make the API call
      const result: CompileResponse = await response.json(); // Parse the response as JSON
      console.log(result);
      setOutput(result.output || result.error || "No output"); // Set the output
    } catch (error) {
      console.error("Error:", error);
      setOutput("An error occurred while compiling the code.");
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#1e1e1e", // Dark background
        color: "#ffffff", // White text
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Side: Code Editor */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          borderRight: "1px solid #333", // Dark border
        }}
      >
        <h2 style={{ color: "#ffffff", marginBottom: "10px" }}>Code Editor</h2>
        <Editor
          height="calc(100% - 50px)" // Adjust height to fit the container
          defaultLanguage="javascript"
          defaultValue={code}
          theme="vs-dark" // Dark theme for Monaco Editor
          onChange={(value) => setCode(value || "")} // Update code state on change
        />
      </div>

      {/* Right Side: Input, Output, and Compile Button */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column", // Stack input and output vertically
          padding: "10px",
        }}
      >
        {/* Top: Compile Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "10px",
          }}
        >
          <button
            onClick={compileCode}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
            disabled={loading}
          >
            {loading ? "Compiling..." : "Compile Code"}
          </button>
        </div>

        {/* Middle: Input Field */}
        <div style={{ flex: 1, marginBottom: "10px" }}>
          <h2 style={{ color: "#ffffff", marginBottom: "10px" }}>Input</h2>
          <input
            type="text"
            value={stdin}
            onChange={(e) => setStdin(e.target.value)}
            placeholder="Enter input for your program"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#333", // Dark input background
              color: "#fff", // White text
              border: "1px solid #555", // Dark border
              borderRadius: "5px",
            }}
          />
        </div>

        {/* Bottom: Output */}
        <div style={{ flex: 2 }}>
          <h2 style={{ color: "#ffffff", marginBottom: "5px" }}>Output</h2>
          <pre
            style={{
              backgroundColor: "#333", // Dark background for output
              color: "#00FF00", // Green text for output
              padding: "10px",
              border: "1px solid #555", // Dark border
              borderRadius: "5px",
              height: "90%",
              overflow: "auto",
            }}
          >
            {output}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default JSCompiler;
