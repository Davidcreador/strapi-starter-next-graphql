# Strapi + NextJs (SSG) + Graphql Starter Project

Next starter for creating a sites with Strapi.

This starter allows you to try Strapi with Next.js with the example of a simple blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. Do not hesitate to add new features etc ...

This Starter Project is not using Apollo instead its using Grapql and SSG for static generation files.

If you want to use the Apollo version of this starter? Please go to: https://github.com/strapi/strapi-starter-next-blog

### Features

- 2 Content types: Article, Category
- 2 Created articles
- 3 Created categories
- Permissions set to `true` for article and category
- Responsive design using UIkit

### Pages

- "/" display every articles
- "/article/:id" display one article
- "/category/:id" display articles depending on the category

### Getting started

**Clone the repository and install dependencies**

```bash
git clone https://github.com/Davidcreador/strapi-starter-next-graphql.git
cd strapi-starter-next-graphql

# Using yarn
yarn setup:yarn

# Using npm
npm run setup:npm
```

### Scaffold your project

This command will launch both of your backend and frontend server and do a data migration in your backend server

```bash
# Using yarn
yarn build:yarn
yarn develop:yarn

# Using npm
npm run build:npm
npm run develop:npm
```

Alternatively, you can still start your servers separately:

### Start the backend server

```bash
cd backend

# Using yarn
yarn build
yarn seed
yarn develop

# Using npm
npm run build
npm run seed
npm run develop
```

### Start the frontend server

```bash
cd frontend

# Using yarn
yarn develop

# Using npm
npm run develop
```

Next server is running here => [http://localhost:3000](http://localhost:3000)
Strapi server is running here => [http://localhost:1337](http://localhost:1337)

Enjoy this starter
