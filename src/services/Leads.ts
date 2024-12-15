export const getLeads = async (): Promise<ILead[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockedLeads), 500));
};

const mockedLeads = [
  {
    name: "Jorge Ruiz",
    createdAt: new Date(),
    status: "Pending",
    country: "Mexico",
  },
  {
    name: "Bahar Zamir",
    createdAt: new Date(),
    status: "Pending",
    country: "Mexico",
  },
  {
    name: "Mary Lopez",
    createdAt: new Date(),
    status: "Pending",
    country: "Brazil",
  },
  {
    name: "Jorge Ruiz",
    createdAt: new Date(),
    status: "Pending",
    country: "Mexico",
  },
  {
    name: "Bahar Zamir",
    createdAt: new Date(),
    status: "Pending",
    country: "Mexico",
  },
  {
    name: "Mary Lopez",
    createdAt: new Date(),
    status: "Pending",
    country: "Brazil",
  },
  {
    name: "Jorge Ruiz",
    createdAt: new Date(),
    status: "Pending",
    country: "Mexico",
  },
  {
    name: "Bahar Zamir",
    createdAt: new Date(),
    status: "Pending",
    country: "Mexico",
  },
  {
    name: "Mary Lopez",
    createdAt: new Date(),
    status: "Pending",
    country: "Brazil",
  },
  {
    name: "Jorge Ruiz",
    createdAt: new Date(),
    status: "Pending",
    country: "Mexico",
  },
  {
    name: "Bahar Zamir",
    createdAt: new Date(),
    status: "Pending",
    country: "Mexico",
  },
  {
    name: "Mary Lopez",
    createdAt: new Date(),
    status: "Pending",
    country: "Brazil",
  },
];
