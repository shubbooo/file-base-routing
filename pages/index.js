import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helpers/api-util";

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  // console.log(featuredEvents);
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
