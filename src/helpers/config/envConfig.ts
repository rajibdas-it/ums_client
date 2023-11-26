export const getBaseUrl = (): string => {
  return process.env.BASE_URL || "http://localhost:3030/api/v1";
};
