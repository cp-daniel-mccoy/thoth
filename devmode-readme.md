**Instructioons for launching thoth in dev mode with npm**

***Step 1 - Install:***

```
npm install --legacy-peer-deps
```

***Step 2 - Start Dockers:***

Note: On some versions of npm the run dev script in the root folder does not fire up the docker containers in the server folder. Try ```npm run dev``` from the project root and if you see errors during the process you may have to start some of the dockers manually. I recommend using terminal tabs if available.

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

***Step 3 - Launching:***

```
npm run dev
```

Note: This runs the main server/client at the same time so you have to wait until the server finishes building the world otherwise the frontend may not load right away.