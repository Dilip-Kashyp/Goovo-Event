"use client";
import React, { useEffect, useState } from "react";
import { Container, Stack, Typography } from "../common";
import { CircularProgress, Pagination } from "@mui/material";
import { HOME_PAGE_CONFIG } from "@/constants";
import { usegetEventData } from "@/api";
import EventCard from "./eventCard";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const itemsPerPage = 9;

  const { HEADER, SUBHEADER, ERROR } = HOME_PAGE_CONFIG;

  const fetchEvents = usegetEventData({
    mutationConfig: {
      onSuccess: (res) => {
        setEvents(res);
        setError("");
      },
      onError: (err) => {
        setError("Failed to fetch events. Please try again.");
      },
    },
  });

  useEffect(() => {
    fetchEvents.mutate({});
  }, []);

  const paginatedEvents = events?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleChange = (_, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Stack
        stackProps={{
          backgroundColor: "#FFFFFF",
          borderRadius: 4,
          marginTop: { sm: 8, xs: 4 },
          paddingBottom: 4,
          paddingTop: 4,
          gap: 4,
        }}
      >
        <Stack
          stackProps={{
            direction: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            padding: { sm: 0, xs: 2 },
          }}
        >
          <Typography {...HEADER} />
          <Typography {...SUBHEADER} />
        </Stack>

        {fetchEvents?.isPending || error ? (
          <Stack
            stackProps={{
              justifyContent: "center",
              alignItems: "center",
              minHeight: "40vh",
            }}
          >
            {fetchEvents?.isPending ? (
              <CircularProgress color="secondary" />
            ) : (
              <Typography {...ERROR(error)} />
            )}
          </Stack>
        ) : (
          <>
            <Stack
              stackProps={{
                direction: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 4,
              }}
            >
              {paginatedEvents.map((event, idx) => (
                <EventCard
                  key={idx}
                  title={event.eventName}
                  location={event.location}
                  date={event.date}
                  organizer={event.organizer}
                />
              ))}
            </Stack>
          </>
        )}

        <Stack
          stackProps={{ alignItems: "center", marginTop: { sm: 4, xs: 2 } }}
        >
          <Pagination
            count={Math.ceil(events?.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            color="secondary"
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default EventsPage;
