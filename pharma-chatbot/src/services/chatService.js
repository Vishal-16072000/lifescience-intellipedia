
const mockResponses = {
  paracetamol: {
    text: "Here are the available suppliers of Paracetamol.",
    actions: [
      {
        label: "View Supplier Data",
        path: "/suppliers",
      },
      {
        label: "View Complete Summary",
        path: "/product-summary",
      },
    ],
  },
};

export const getBotResponse = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const query = message.toLowerCase();

      if (query.includes("paracetamol")) {
        resolve(mockResponses.paracetamol);
      } else {
        resolve({
          text: "I can help you explore pharmaceutical products and their supplier information. Try asking about Paracetamol.",
          actions: [],
        });
      }
    }, 1000);
  });
};
