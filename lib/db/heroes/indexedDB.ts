const idbFactory = window.indexedDB;

const dbName = "heroesDB";
const dbVersion = 1;

const request = idbFactory.open(dbName, dbVersion);

request.onerror = (event) => {
  console.error(
    "Error opening IndexedDB:",
    (event.target as IDBOpenDBRequest).error
  );
};

request.onupgradeneeded = (event) => {
  const db = (event.target as IDBOpenDBRequest).result;

  if (!db.objectStoreNames.contains("heroes")) {
    const objectStore = db.createObjectStore("heroes", { keyPath: "id" });
    console.log("Created 'heroes' object store");

    objectStore.transaction.oncomplete = () => {
      console.log("Transaction completed");
    };

    objectStore.transaction.onerror = (error) => {
      console.error("Transaction error:", error);
    };
  }
};

request.onsuccess = (event) => {
  const target = event.target;
  if (target && target instanceof IDBOpenDBRequest) {
    const db = target.result;

    if (db) {
      console.log("IndexedDB database opened successfully");

      const transaction = db.transaction(["heroes"], "readwrite");
      const objectStore = transaction.objectStore("heroes");

      const heroesClasses = [
        {
          id: 1,
          title: "Warrior",
          bonus: "+1 to Strength",
          image: "/knight.png",
        },
        {
          id: 2,
          title: "Ranger",
          bonus: "+1 to Dexterity",
          image: "/ranger.png",
        },
        {
          id: 3,
          title: "Rogue",
          bonus: "+1 to Luck",
          image: "/rogue.png",
        },
      ];

      heroesClasses.forEach((hero) => {
        objectStore.add(hero);
      });

      const readTransaction = db.transaction(["heroes"], "readonly");
      const readStore = readTransaction.objectStore("heroes");

      const getRequest = readStore.getAll();

      getRequest.onsuccess = (event: Event) => {
        const heroesData = (event.target as IDBRequest).result;
        console.log(heroesData);
      };
    } else {
      console.error("IndexedDB database not found");
    }
  } else {
    console.error("Invalid event target");
  }
};

request.onerror = (event: Event) => {
  console.error("Error opening IndexedDB:", event);
};
