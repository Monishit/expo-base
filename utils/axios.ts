import AsyncStorage from "@react-native-async-storage/async-storage";
import type { AxiosRequestConfig } from "axios";
import axios from "axios";

// Define API host URL in `.env.local` as EXPO_API_URL

interface AxiosClientArgs extends AxiosRequestConfig {
  toolkit: {
    fulfillWithValue: (data: any) => any;
    rejectWithValue: (error: any) => any;
  };
}

const AxiosClient = async (args: AxiosClientArgs) => {
  const { toolkit, headers = {}, data, ...rest } = args;

  // Async function to retrieve the token from AsyncStorage
  const getToken = async () => {
    try {
      const tempToken = await AsyncStorage.getItem("tempToken");
      console.log("temp Token retrieved:", tempToken); // Log the actual token value
      return tempToken; // Return the token value
    } catch (error) {
      console.error("Error fetching temp token:", error); // Log any errors encountered
      return null;
    }
  };

  // Await the token retrieval before making the request
  const tempToken = await getToken();
  console.log("Using temp token:", tempToken); // Log the token to verify
  const getFinalToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log("Token", token);
      return token;
    } catch (error) {
      console.error("Error fetching token:", error);
      return null;
    }
  };

  const token = await getFinalToken();

  // Set Content-Type header conditionally
  const contentType =
    data instanceof FormData ? "multipart/form-data" : "application/json";

  // Prepare headers with Authorization if the token exists
  const headersWithAuth = {
    "x-client-id": "ignita",
    "Content-Type": contentType,
    ...(token && token !== "null" && token !== "undefined"
      ? { Authorization: token }
      : {}),
    ...headers,
  };

  // Make the axios request only after token is retrieved
  return axios({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    ...rest,
    data,
    headers: headersWithAuth, // Use the headers with the token included
  })
    .then((response) => toolkit.fulfillWithValue(response.data))
    .catch((error) => toolkit.rejectWithValue(error.response?.data || error));
};

// Add interceptor for handling errors globally
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== "undefined") {
      console.log("error.response :>> ", error.response?.status);

      if (error.response?.status === 401) {
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("auth");
        AsyncStorage.clear();
        // router.push("/(auth)/signin");
      }
    }

    return Promise.reject(error.response?.data || "Something went wrong.");
  }
);

export default AxiosClient;
