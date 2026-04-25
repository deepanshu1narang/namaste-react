# namaste-react

📘 Namaste React — Lecture 1 (Clean Notes)
🔹 React Fundamentals
React is not tied to build tools like:
npx create-react-app
npm create vite

👉 These are just tooling for convenience, not React itself.

React is a JavaScript library (not a framework)
Can be used inside any existing app
Can be added via CDN
🔹 Using React via CDN

Example:

<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="./app.js"></script>
⚠️ Order matters
React → ReactDOM → Your Script
Why?
ReactDOM depends on React
Your script depends on both

👉 Wrong order = runtime errors

🔹 What is a CDN (Content Delivery Network)?

A CDN is a distributed network of servers that delivers static files like:

JS
CSS
Images
Why use it?
Faster delivery (nearest server)
Reduced latency
Better performance
Key idea:

CDN gives you the same file, just from a closer/optimized server

🔹 What is CORS (Cross-Origin Resource Sharing)?
Origin = protocol + domain + port

Examples:

http://localhost:3000 ≠ http://localhost:5000
https://site.com ≠ http://site.com
Problem

Browser blocks requests to different origins unless allowed.

fetch("https://api.example.com")

👉 May fail due to CORS

Important
✅ Server sends response
❌ Browser may block access
Fix (backend):
Access-Control-Allow-Origin: *

or specific origin.

Key takeaway:

CORS is a browser security feature, not a React issue

🔹 What is crossOrigin?

Used in HTML tags like:

<script src="..." crossOrigin="anonymous"></script>
Purpose:

Controls:

whether credentials (cookies) are sent
how cross-origin requests behave
Values:
1. anonymous
No cookies sent
Most common (CDNs)
2. use-credentials
Sends cookies/auth headers
Requires strict backend config
When relevant?
Loading scripts from CDN
Images/fonts from other domains
Canvas operations (very important)
🔹 React Internals Warning
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
Internal React APIs
Not meant for public use
Can break anytime

👉 Ignore in real development

🔹 React.createElement
Syntax:
const element = React.createElement(
  "div",
  { id: "container" },
  "Hello World"
);
Multiple children:
const element = React.createElement(
  "div",
  {},
  [child1, child2]
);
Important:
Returns a JavaScript object (Virtual DOM element)
NOT actual HTML
🔹 Rendering to DOM
ReactDOM.render(element, document.getElementById("root"));
What happens:
Converts React element → real DOM
Injects into target container
🔹 Library vs Framework
React = Library
Focused on UI
Can be used anywhere
No strict structure
Framework (contrast)
Full structure + rules
Opinionated (e.g., Angular)
🔹 Final Flow (Mental Model)
React.createElement → JS Object (Virtual DOM)
        ↓
ReactDOM.render → Converts to Real DOM
        ↓
Displayed in browser
🔹 Transition

“Goodbye React.createElement”

👉 Because next:

JSX (syntactic sugar)
Cleaner and readable
🔥 Extra Insight (connect everything)
CDN → where files come from
CORS → whether browser allows access
crossOrigin → how cross-origin requests behave
🧠 Revision Checklist

You should be able to answer:

Why order of scripts matters?
Why CORS error happens only in browser?
Can CDN cause CORS issues?
Why React is called a library?
What does React.createElement return?