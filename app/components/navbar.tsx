
import { auth, signIn, signOut } from "@/auth";
import Image from "next/image"
import Link from "next/link"

const NavBar = async () => {
  const session = await auth();

//   error says that auth and signIn/Out are not functions
  

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
            <Link href="/">
                <Image src="/YCDirectory.png" alt="logo" width={144} height={38} />
            </Link>

            <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
                    <>
                        <Link href="/startup/create">
                            <span>Create</span>
                        </Link>

                        <form action={async () => {
                            "use server"

                            await signOut({ redirectTo: "/"})
                        }}>
                            <button type="submit">
                                Sign Out
                            </button>


                        </form>

                        <Link href={`/user/${session?.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                ): (
                    <form action={async () => {
                        "use server";

                        await signIn("github")
                    }}> 
                        <button type="submit">
                            Login
                        </button>
                    </form>
                )}
            </div>

        </nav>

    </header>
  )
}

export default NavBar