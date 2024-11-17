// pages/api/auth/[...nextauth].ts

import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, auth, signIn, signOut } =  NextAuth({
       providers: [GitHub],
       // Add other NextAuth configuration options here if needed
    });




// import NextAuth from 'next-auth';
// import GitHubProvider from 'next-auth/providers/github';

// export const { handlers, auth, signIn, signOut } =  NextAuth({
//   providers: [
//     GitHubProvider({
//       clientId: "Ov23lij60Uk6TRyBudCb",   // GitHub OAuth client ID
//       clientSecret: "f469e836bd9cfe4eef6d9b2f2cb2f1dac0507865",   // GitHub OAuth client secret
//     })
//   ],
//   // Add other NextAuth configuration options here if needed
// });
