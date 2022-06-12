**Instructions for launching thoth in dev mode with npm**

***Step 1 - Install:***

```
npm install --legacy-peer-deps
```

***Step 2 - ENV:***

Go to the server folder and make a copy of the .env file, rename it to ```.env.local``` and leave it next to the original .env file. Do the same inside of the client folder with it's .env file.

***Step 3 - Start Dockers:***

Note: On some versions of npm the run dev script in the root folder does not fire up the docker containers in the server folder. Try ```npm run dev``` from the project root and if you see errors during the process you may have to start some of the dockers manually. I recommend using terminal tabs if available. After you do this once you should just be able to run step 4 as normal.

From root of project:

```
cd server && docker-compose up
```
```
cd server/redis && docker-compose up
```
```
cd server/weaviate && docker-compose up
```

***Step 4 - Launching:***

```
npm run dev
```

Note: This runs the main server/client at the same time so you have to wait until the server finishes building the world otherwise the frontend may not load right away.