import db from "@repo/database/client";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            Email:{label:"Email",type:"text",placeholder:"Enter your email"},
            phone: { label: "Phone number", type: "text", placeholder: "1231231231" },
            password: { label: "Password", type: "password" }
          },
          // TODO: User credentials type from next-aut
          async authorize(credentials: any) {
            // Do zod validation, OTP validation here
            console.log("hello")
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const existingUser = await db.user.findFirst({
                where: {
                    PhoneNumber: credentials.phone
                }
            });

            if (existingUser) {
                const passwordValidation = await bcrypt.compare(credentials.password, existingUser.Password);
                if (passwordValidation) {
                    return {
                        id: existingUser.id.toString(),
                        name: existingUser.Name,
                        email: existingUser.PhoneNumber
                    }
                }
                return null;
            }

            try {
                const user = await db.user.create({
                    data: {
                        Email:credentials.Email,
                        PhoneNumber: credentials.phone,
                        Password: hashedPassword
                    }
                });
            
                return {
                    id: user.id.toString(),
                    name: user.Name,
                    email: user.PhoneNumber
                }
            } catch(e) {
                console.error(e);
            }

            return null
          },
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        // TODO: can u fix the type here? Using any is bad
        async session({ token, session }: any) {
            session.user.id = token.sub

            return session
        }
    }
  }
 