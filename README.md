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


lec-2 
HW
1. learn setting up github SSH on the system (although our. git is public)

Igniting the App - how to make react app as prod ready app
npm !== node package manager (on official npm site) npm manages packages nut it doesn't stand for node package manager --- basically a standard library for managing the packages
npm init (it'll ask ques,,,, answer them and it'll gonna create an app and you can see the info in package.json)
package.json is the cofig file for the npm
types of dependecies: normal and dev dependencies

bundlers are imp for making react app faster
transitive bunder: babel

CDN is not a good way to  make react app... instead install them in package (to avoid api call on unpkg.com)


# PARCEL
- dev build
- local server
- HMR = hot module replacement
- file watching algo is written in C++
- parcel is giving faster builds and dev experience bcoz it caches (parcel-cache folder)
- image optimization
- minification
- bundling
- compressing
- consistent hashing
- code splitting
- differential bundling - support older browswers
- diagonostic
- error handling
- also gives way to host app on https (for local)
- tree shaking
- different dev and prod build (npx parcel index.html for dev and npx parcel build index.html for prod)
  dist folder is the generated folder of build (rewrite this line)
  while building we got 3 files... all steps are done here and it has whole the code of our project

  .parcel-cache, node_modules and dist should not be pushed to git


parcel is not doing everything by its own.... it has some packages of its own to do its functions
read parcel docs (0 config tool)


# important
in package.json we can setup what all browsers can be supported (browswerlist.dev).... (gpt write it properly)
it will definitely work in the written ones... will work on the others as well but in the given ones it'll work for sure.

### gpt improvised notes ###

📝 Homework
1. Configure Git SSH

Learn how to set up SSH keys for GitHub.

Benefits:

Avoid entering username/password repeatedly.
Authenticate securely with GitHub.
Useful even if repositories are public.
🚀 From CDN React to Production React

Using React through CDN is useful for learning:

<script src="https://unpkg.com/react@19/..."></script>

However, it is not ideal for real applications because:

External dependency on CDN availability.
Additional network requests.
Version management becomes difficult.
Package management and build optimization are missing.

In real projects, React is installed locally:

npm install react react-dom
📦 npm

npm does not officially stand for "Node Package Manager".

npm is the world's largest package registry and package manager for JavaScript.

Its responsibilities include:

Installing packages.
Managing dependencies.
Versioning packages.
Running scripts.
Publishing packages.
Initializing a Project
npm init

It asks a series of questions and generates:

package.json
📄 package.json

package.json is the configuration file of a Node project.

It contains:

Project metadata.
Dependencies.
Scripts.
Version information.
Browser compatibility settings.
Package information.

Think of it as:

"Blueprint of the project."

📦 Types of Dependencies
Production Dependencies

Required when the application runs in production.

Examples:

npm install react react-dom

Stored under:

"dependencies"
Development Dependencies

Needed only during development.

Examples:

Parcel
Webpack
ESLint
Jest

Installed using:

npm install -D parcel

Stored under:

"devDependencies"
📦 Bundlers

Modern React applications need bundlers to:

Bundle files.
Optimize assets.
Create production builds.
Improve developer experience.

Examples:

Parcel
Vite
Webpack
🔗 Transitive Dependencies

A package may internally depend on many other packages.

For example:

Parcel
 ├── Babel
 ├── SWC
 ├── PostCSS
 └── Hundreds of internal packages

These nested dependencies are called:

Transitive dependencies.

You install one package, but npm installs its dependency tree automatically.

📦 Parcel

Parcel is a zero-configuration bundler.

Its aim is to provide an excellent developer experience with minimal setup.

Official docs:

https://parceljs.org/

Features of Parcel
1. Development Build

Runs a development server:

npx parcel index.html

Provides:

Fast compilation
Live updates
2. Local Server

Creates a local development server:

localhost:1234
3. Hot Module Replacement (HMR)

Updates only the changed module instead of refreshing the entire page.

Benefits:

Faster development.
Preserves application state.
Better developer experience.
4. File Watching

Parcel continuously watches project files.

Whenever a file changes:

Source file changes
        ↓
Parcel detects change
        ↓
Rebuilds only affected modules
        ↓
Updates browser

Parcel uses efficient native file watching mechanisms (implemented in lower-level languages like C++ through underlying tools) to achieve very fast updates.

5. Caching

Parcel stores build artifacts inside:

.parcel-cache/

This avoids rebuilding everything every time.

Result:

Faster builds.
Better HMR performance.
6. Image Optimization

Automatically optimizes images for efficient delivery.

7. Minification

Removes unnecessary characters from code:

Spaces
Comments
Formatting

Result:

Smaller bundle size.

8. Bundling

Combines multiple files into optimized bundles.

9. Compression

Produces compressed assets to reduce transfer size.

10. Consistent Hashing

Generated file names contain hashes:

index.45af8d.js

This enables efficient browser caching.

11. Code Splitting

Loads code only when required.

Benefits:

Faster initial load.
Smaller bundles.
12. Differential Bundling

Parcel generates bundles suitable for different browsers.

Modern browsers receive modern JavaScript.

Older browsers receive compatible bundles.

13. Diagnostics

Provides detailed build and error information.

Makes debugging easier.

14. Error Handling

Displays meaningful errors during development.

15. HTTPS Support

Parcel can serve local applications over HTTPS.

Useful for:

Service Workers
PWA development
Browser APIs requiring secure context
16. Tree Shaking

Removes unused code from the final bundle.

Result:

Smaller production bundles.

Development Build vs Production Build
Development
npx parcel index.html

Focus:

Fast rebuilds.
Debugging.
HMR.
Production
npx parcel build index.html

Focus:

Optimization.
Minification.
Compression.
Tree shaking.
Performance.
Dist Folder

When running:

npx parcel build index.html

Parcel generates a:

dist/

folder.

The dist folder contains the final production-ready output of your application.

It includes:

Bundled JavaScript files.
Optimized assets.
Minified code.
Hashed filenames.

This folder is what gets deployed to servers.

Everything Parcel does—bundling, optimization, compression, tree shaking, hashing—is reflected in the generated files inside dist.

Important Folders
node_modules/

Contains all installed packages and their transitive dependencies.

Generated automatically.

.parcel-cache/

Contains cache data used for faster rebuilds.

Generated automatically.

dist/

Contains generated production build files.

Generated automatically.

These folders should NOT be pushed to GitHub

Add them to:

node_modules
.parcel-cache
dist

because they can always be recreated.

Browser Compatibility (Browserslist)

Browser support can be configured inside package.json.

Example:

"browserslist": [
  "last 2 versions",
  ">0.2%",
  "not dead"
]

or

"browserslist": [
  "Chrome >= 90",
  "Firefox >= 90"
]

Parcel uses this information to generate appropriate bundles.

Meaning

It guarantees support for the specified browsers.

The application may still work on others, but the listed browsers are the officially targeted environments.

Useful resource:

https://browsersl.ist/

Revision Checklist

By the end of this lecture, you should understand:

✅ Why CDN isn't preferred in production.

✅ What npm actually is.

✅ Purpose of package.json.

✅ Difference between dependencies and devDependencies.

✅ What transitive dependencies are.

✅ Why bundlers are needed.

✅ Parcel features.

✅ Difference between development and production builds.

✅ Purpose of dist, node_modules, and .parcel-cache.

✅ Why generated folders are ignored in Git.

✅ How Browserslist controls browser support.

Mental Model
Source Code
     ↓
Parcel
     ↓
Bundling + Optimization + Minification + Tree Shaking + Hashing
     ↓
dist/
     ↓
Deploy
     ↓
Browser

These first two lectures are building the foundation of "how React works under the hood" rather than just "how to write components." That's what will help later when you move into React Native, Vite, Webpack, Module Federation, and advanced frontend architecture.

Revision Checklist

✅ Why CDN isn't preferred for production
✅ npm and package.json
✅ dependencies vs devDependencies
✅ Transitive dependencies
✅ Purpose of a bundler
✅ Parcel features
✅ Development vs Production build
✅ Role of dist, .parcel-cache, and node_modules
✅ Why these folders are ignored in Git
✅ Browserslist and browser support