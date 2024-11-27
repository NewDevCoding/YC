import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {
  searchParams: Promise<{ query?: string}>
}) {

  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: 'Molotovboi'},
    _id: 1,
    description: "description",
    image: "https://www.bing.com/images/search?view=detailV2&ccid=WFJXneUU&id=CFCE0F005AE6A2D2F10B6D091F015E2496B29F45&thid=OIP.WFJXneUUEulkT44T7nywoAHaDL&mediaurl=https%3A%2F%2Fespacio.fundaciontelefonica.com%2Fen%2Fwp-content%2Fuploads%2Fsites%2F4%2F2018%2F10%2FNOSOTROS_ROBOTS1400.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.5852579de51412e9644f8e13ee7cb0a0%3Frik%3DRZ%252byliReAR8JbQ%26pid%3DImgRaw%26r%3D0&exph=600&expw=1400&q=we+robots&simid=607994416000685635&FORM=IRPRST&ck=3D7B78F1B613740210EC35FC4780720E&selectedIndex=0&itb=0&adlt=strict&cw=608&ch=578&ajaxhist=0&ajaxserp=0",
    category: 'Robots',
    title: "We Robots",
  
  }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup Idea, <br/>Connect With Entrapreneurs</h1>

      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Make Your Projects Into Products
      </p>

      <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card-grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
            ) : (
             <p className="no-results">No Matches Found</p>
          )}
        </ul>

      </section>
    </>

  );
}
