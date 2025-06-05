import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = {
  getOne: async (key: string): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log("error of getOne", error);
      return null;
    }
  },

  clear: async (): Promise<void | null> => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log("error of clear storage", error);
      return null;
    }
  },
};

