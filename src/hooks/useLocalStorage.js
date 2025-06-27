const useLocalStorage = () => {
  const getLocalStorage = (key) => {
    const findLocalStorage = localStorage.getItem(key);
    if (findLocalStorage) {
      return findLocalStorage;
    } else {
      return null;
    }
  };

  const setLocalStorage = (key, value) => {
    if (key && value) {
      const findLocalStorage = localStorage.getItem(key);
      if (findLocalStorage) {
        return;
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
  };

  const deleteLocalStorage = (key, deleteKey) => {
    if (key && !deleteKey) {
      localStorage.removeItem(key);
    }
    //obje olarak tutulan datanın içindeki field ismine göre silme
    if (key && deleteKey) {
      console.log("key", key);
      console.log("deleteKey", deleteKey);
      const findLocalStorage = localStorage.getItem(key);
      if (findLocalStorage) {
        const parsedObject = JSON.parse(findLocalStorage);
        const updatedObject = removeKeyInObject(deleteKey, parsedObject);
        localStorage.setItem(key, JSON.stringify(updatedObject));
      }
    }
  };

  const removeKeyInObject = (key, obj) => {
    console.log("key", key);
    console.log("obj", obj);
    const { [key]: omitted, ...res } = obj;
    return res;
  };

  return { getLocalStorage, setLocalStorage, deleteLocalStorage };
};

export default useLocalStorage;
