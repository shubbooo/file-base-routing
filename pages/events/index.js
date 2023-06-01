import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

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

export default AllEventsPage;
