import Image from "next/image";
import UserInformation from "@/components/user-information";
import PostForm from "@/components/post-form";
import {SignedIn} from "@clerk/nextjs";

export default function Home() {
  const posts = []
  return (
    <main className={"grid grid-cols-8 mt-5 sm:px-5"}>
      <section className="hidden md:inline md:col-span-2">
        <UserInformation posts={posts}/>
      </section>

      <section className="col-span-full md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full">
        <SignedIn>
          <PostForm/>
        </SignedIn>
      {/*  <PostFeed posts={posts}/>*/}
      </section>

      <section className="hidden xl:inline justify-center col-span-2">
      {/*  <Widget/>*/}
      </section>
    </main>
  );
}
