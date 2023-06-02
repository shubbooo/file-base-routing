import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";
import { Fragment } from "react";

function AllEventsPage(props) {
  const router = useRouter();
  const { events } = props;

  // function findEventsHandler(year, month){
  //   const fullPath = '/events/${year}/${month}'
  //   console.log(fullPath);
  //   router.push(fullPath);
  // }

  function findEventHandler(year, month) {
    const fullpath = "/events/[y]/[m]";
    router.push({
      pathname: fullpath,
      query: { y: year, m: month },
    });
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
