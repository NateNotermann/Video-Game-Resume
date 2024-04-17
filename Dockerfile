
# FROM nginx:alpine

# # Set the working directory
# WORKDIR /usr/share/nginx/html

# # Copy custom Nginx configuration file
# COPY nginx.conf /etc/nginx/nginx.conf

# # Copy your web application files
# COPY . .

# EXPOSE 80










# layer 1. 
# Base image (operating system)
# FROM node:12

# # layer 2
#     #working directory
# WORKDIR /app


# # layer 3
#     # COPY takes 2 arguments. 
#     # 1. Local package.json location.  2. Place we want to copy it in the container to.
# COPY package*.json ./

# # layer 4
# RUN npm install

# # Copy index.html from root to public directory
# COPY index.html public/
# COPY index.js src/

# # layer 5
#     #Copy over source code. 
# COPY . . 

# # layer 7
#     # Listen on port 8080
# EXPOSE 8080 

# # layer 8
#     # Command. Only one per container.
# CMD [ "npm", "start"]