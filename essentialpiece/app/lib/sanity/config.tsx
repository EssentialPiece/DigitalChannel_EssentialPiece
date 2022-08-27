export const config = {
    apiVersion: "2022-08-26",
    dataset: process.env.SANITY_DATASET || "development",
    projectId: process.env.SANITY_PROJECT_ID || "",
    useCdn: false,
  };