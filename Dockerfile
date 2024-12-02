# Step 1: Use the official Node.js image as the base image
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Step 4: Install app dependencies
RUN npm install

# Step 5: Copy all other application files
COPY . .

# Step 6: Build the TypeScript application
RUN npm run build

# Step 7: Prepare a production environment
FROM node:18 AS production

# Step 8: Set the working directory for the production stage
WORKDIR /app

# Step 9: Copy package.json and package-lock.json from the build stage to reduce image size
COPY --from=build /app/package*.json ./

# Step 10: Install only the production dependencies
RUN npm install --production

# Step 11: Copy the build output and other necessary files from the build stage
COPY --from=build /app ./

# Step 12: Set the environment variables
ENV DATABASE_URL=postgres://postgres:tangus@db:5432/mydb

# Step 13: Expose the port that Next.js will run on
EXPOSE 3000

# Step 14: Start the Next.js app
CMD ["npm", "run", "start"]
