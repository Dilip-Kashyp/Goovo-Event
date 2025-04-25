export const HOME_PAGE_CONFIG = {
  HEADER: {
    typographyProps: {
      children: "Events",
      variant: "h4",
      sx: {
        textAlign: "center",
        fontWeight: 700,
      },
    },
  },
  SEARCH_BOX: {
    inputProps: {
      variant: "outlined",
      placeholder: "Search by event name, location, or organizer",
      fullWidth: true,
      sx: {
        width: { xs: 300, sm: 500 },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": { borderColor: "#E82677" },
        },
      },
    },
  },
  SUBHEADER: {
    typographyProps: {
      children:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      variant: "body1",
      sx: {
        textAlign: "center",
        color: "#A0A0A0",
        width: { sm: "50%", xs: "100%" },
      },
    },
  },
  ERROR: (title) => ({
    typographyProps: {
      variant: "h6",
      color: "error",
      children: title,
      sx: {
        fontWeight: 600,

        fontSize: { sm: "14px", xs: "14px" },
      },
    },
  }),
  TITLE: (title) => ({
    typographyProps: {
      variant: "body1",
      children: title,
      sx: {
        fontWeight: 600,

        fontSize: { sm: "14px", xs: "14px" },
      },
    },
  }),
  BADGE: (label = "FREE") => ({
    typographyProps: {
      children: label,
      variant: "caption",
      sx: {
        fontWeight: 600,
      },
    },
  }),
  DESCRIPTION: (
    desc = "Please add your content here. Keep it short and simple. And smile :)"
  ) => ({
    typographyProps: {
      children: desc,
      variant: "caption",
      sx: {
        color: "gray",
        lineHeight: 1.5,
      },
    },
  }),
  META: (color, text) => ({
    typographyProps: {
      variant: "caption",
      children: (
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              width: "13px",
              height: "13px",
              borderRadius: "50%",
              backgroundColor: color,
              display: "inline-block",
            }}
          />
          {text}
        </span>
      ),
      sx: {
        color: "#4B5563",
      },
    },
  }),
};
