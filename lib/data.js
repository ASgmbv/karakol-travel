import fetch from "isomorphic-unfetch";

const TRELLO_KEY = "930e28f51398656200efdbdc9d0ad0cb";
const TRELLO_TOKEN =
  "67175ffe747f91e5a650b21c13a32db52e910a76240164423533944e97af72b8";
const BOARD_ID = "xBh6cnM0";
const BASE_URL = "https://api.trello.com/1";
const TOURS_LIST = "5f56254e70d88e0247c7f120";
const PRICE_ID = "5f563e2633617585b67b2fdd";
const DIFFICULTY_ID = "5f563e0f5a8e1b730a12a01f";
const GROUP_SIZE_ID = "5f563df5b3aa735cef4cc98e";
const DATE_ID = "5f563debeb77a9359cbb2a7b";
const DESTINATION_ID = "5f563de6ec115475fb5da3ae";

const url = `${BASE_URL}/lists/${TOURS_LIST}/cards?fields=name,desc,cover&key=${TRELLO_KEY}&token=${TRELLO_TOKEN}&customFieldItems=true&attachments=cover&attachment_fields=url`;

export const getTours = async () => {
  let tours = await fetch(url).then((r) => r.json());
  tours = tours.map(({ name, desc, customFieldItems, attachments }) => ({
    name: name || "Название",
    short_description: desc || "Описание",
    destination:
      customFieldItems.find((item) => item.id === DESTINATION_ID)?.value
        ?.text || "Дестинация",
    price:
      customFieldItems.find((item) => item.id === PRICE_ID)?.value?.number ||
      "Цена",
    difficulty:
      customFieldItems.find((item) => item.id === DIFFICULTY_ID)?.value?.text ||
      "Сложность",
    group_size:
      customFieldItems.find((item) => item.id === GROUP_SIZE_ID)?.value
        ?.number || "Группа",
    date:
      customFieldItems.find((item) => item.id === DATE_ID)?.value?.text ||
      "Дата",
    image: attachments[0]?.url || "test.jpg",
  }));
  return tours;
};
