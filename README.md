### CinemaTxt

CinemaTxt is a movie ticket booking website built with Next.js, allowing users to easily order tickets for currently playing movies. This repository contains the source code and project files for the CinemaTxt website.

# Features
- Browse for currently playing movies.
- View movie details such as title, synopsis, ratings, and ticket price.
- Select preferred seats and book tickets.
- Secure payment processing for ticket purchases.
- User registration and authentication system.

# Technologies Used
- Next.js framework for server-rendered React applications.
- React for building the user interface.
- TypeScript for static typing.
- Node.js for server-side JavaScript runtime.
- Tailwind CSS for styling the components.
- MySQL database for storing movie and user information.

# Installation
1. Clone the repository:

``` bash
git clone https://github.com/your-username/cinematxt.git
```

2. Install the required dependencies:

```bash
cd cinematxt
npm install
```
3. Set up the database:

Create a MySql database for the project.
Update the database configurations url in the environment variables or .env file.
Example : 
```
DATABASE_URL="mysql://root@localhost:3306/cinematxt"
```

4. Migrate and generate prisma client in your project
- Migrate prisma
```bash
npx prisma migrate dev --name init
```

- Generate Prisma client
```bash
npx prisma generate
```

5. Run the development server:
You can run the development server by using this command
```bash
npm run dev
```
Open your web browser and visit http://localhost:3000 to access the CinemaTxt website.


## Learn More

To learn more about Next.js and Prisma usage in this web take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Prisma Documentation](https://www.prisma.io/docs) - learn about Prisma and Prisma client.
