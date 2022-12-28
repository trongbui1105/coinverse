const components = {
  Text: {
    variants: {
      body1: {
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "16px",
        color: "rgb(5, 15, 25)",
      },
      body2: {
        fontSize: "18px",
        lineHeight: "1.3",
        color: "rgb(45,45,45)",
      },
      h1: {
        fontSize: "62px",
        fontWeight: 700,
        lineHeight: "1.15",
      },
      h2: {
        fontSize: "32px",
        fontWeight: 700,
        lineHeight: "1.3",
      },
      h3: {
        fontSize: "20px",
        fontWeight: 700,
        lineHeight: "1.4",
      },
      p: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "1.6",
      },
    },
  },
  Button: {
    baseStyle: {},
    variants: {
      primary: {
        borderRadius: "4px",
        fontWeight: 500,
        color: "rgb(255, 255, 255)",
        cursor: "pointer",
        padding: "10px 12px",
        fontSize: "14px",
        lineHeight: "14px",
        height: "auto",
        border: "1px solid rgb(0, 82, 255)",
        backgroundColor: "rgb(0, 82, 255)",
      },
    },
  },
  Link: {
    baseStyle: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "16px",
      color: "rgb(5, 15, 25)",
      textAlign: "center",
    },
  },
};

export default components;
