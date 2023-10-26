const firstStringUnique = (str) => {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1); // Вы забыли указать второй аргумент для set, который является значением
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) {
      return i;
    }
  }

  return -1;
};

// Пример использования функции:
const str = "leetcode";
const firstUniqueIndex = firstStringUnique(str);
console.log(`Индекс первого уникального символа: ${firstUniqueIndex}`);
