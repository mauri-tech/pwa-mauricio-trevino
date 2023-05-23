import { openDB } from "idb";

// Initialize the database
const initdb = async () => {
  try {
    const db = await openDB("jate", 1);
    if (db.objectStoreNames.contains("jate")) {
      console.log("jate database already exists");
      return;
    }
    db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
    console.log("jate database created");
  } catch (error) {
    console.error("Error initializing the database:", error);
  }
};

// Add content to the database
export const putDb = async (content) => {
  try {
    const jDb = await openDB("jate", 1);
    const tx = jDb.transaction("jate", "readwrite");
    const store = tx.objectStore("jate");
    const request = store.put({ id: 1, value: content });
    const result = await request;
    console.log("Result:", result);
  } catch (error) {
    console.error("Error adding content to the database:", error);
  }
};

// Retrieve content from the database
export const getDb = async () => {
  try {
    const jDb = await openDB("jate", 1);
    const tx = jDb.transaction("jate", "readonly");
    const store = tx.objectStore("jate");
    const request = store.getAll();
    const result = await request;
    console.log("Result:", result);
    return result.value;
  } catch (error) {
    console.error("Error retrieving content from the database:", error);
    return [];
  }
};

// Initialize the database when the module is loaded
initdb();
