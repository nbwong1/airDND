import React from "react";
import { useQuery } from "@apollo/client";

import MeetuptList from "../components/MeetuptList";
import MeetupForm from "../components/MeetupForm";

import { QUERY_MEETUPS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_MEETUPS);
  const meetups = data?.meetups || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <MeetupForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MeetuptList meetups={meetups} title="Campaign Bulletin Board" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
