import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query: string }> }) {
  const query = (await searchParams).query;

  const posts = [
    { _createdAt: new Date('2024-01-29T15:32:00'), views: 102, author: { _id: 1, name: 'John Doe' }, _id: 1, description: 'Revolutionary robotics platform for manufacturing automation', title: 'AutoBot Manufacturing', category: 'Robotics', image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
    { _createdAt: new Date('2024-01-27T09:15:00'), views: 89, author: { _id: 2, name: 'Jane Smith' }, _id: 2, description: 'AI-powered companion robots for elderly care', title: 'CareBot Solutions', category: 'Healthcare', image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
    { _createdAt: new Date('2024-01-25T12:45:00'), views: 156, author: { _id: 3, name: 'Alice Johnson' }, _id: 3, description: 'Educational robotics kits for STEM learning', title: 'RoboLearn', category: 'Education', image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
    { _createdAt: new Date('2024-01-22T17:20:00'), views: 203, author: { _id: 4, name: 'Bob Brown' }, _id: 4, description: 'Agricultural robots for sustainable farming', title: 'FarmBot Tech', category: 'AgriTech', image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
    { _createdAt: new Date('2024-01-15T11:05:00'), views: 167, author: { _id: 5, name: 'Charlie Davis' }, _id: 5, description: 'Robotic solutions for warehouse logistics', title: 'LogiRobo', category: 'Logistics', image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect with Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on Pitches, and get Noticed on Virtual Competitions.
        </p>

        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          { posts?.length > 0 ? 
          (
            posts.map((post) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) 
          : (<p className="no-result">No startups found</p>) }
        </ul>
      </section>
    </>
  );
}
