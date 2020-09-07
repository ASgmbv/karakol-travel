import fetch from "isomorphic-unfetch";

const TRELLO_KEY = "930e28f51398656200efdbdc9d0ad0cb";
const TRELLO_TOKEN =
  "67175ffe747f91e5a650b21c13a32db52e910a76240164423533944e97af72b8";
const BOARD_ID = "xBh6cnM0";
const BASE_URL = "https://api.trello.com/1";
const TOURS_LIST = "5f56254e70d88e0247c7f120";
const PRICE_ID = "5f563e2341e9a68e6f42c1d7";
const DIFFICULTY_ID = "5f563dd0cdc2c73f58a39479";
const GROUP_SIZE_ID = "5f563dc3201dde440f3b15d3";
const DATE_ID = "5f563d8921f89381f4feef1d";
const DESTINATION_ID = "5f563d7a8431e236a977d708";

const url = `${BASE_URL}/lists/${TOURS_LIST}/cards?fields=name,desc,cover&key=${TRELLO_KEY}&token=${TRELLO_TOKEN}&customFieldItems=true&attachments=cover&attachment_fields=url`;

export const getTours = async () => {
  let tours = await fetch(url).then((r) => r.json());
  tours = tours.map(({ name, desc, customFieldItems, attachments }) => ({
    name: name || "Название",
    short_description: desc || "Описание",
    destination:
      customFieldItems.find((item) => item.idCustomField === DESTINATION_ID)
        ?.value?.text || "Дестинация",
    price:
      customFieldItems.find((item) => item.idCustomField === PRICE_ID)?.value
        ?.number || 0,
    difficulty:
      customFieldItems.find((item) => item.idCustomField === DIFFICULTY_ID)
        ?.value?.text || "Сложность",
    group_size:
      customFieldItems.find((item) => item.idCustomField === GROUP_SIZE_ID)
        ?.value?.number || 0,
    date:
      customFieldItems.find((item) => item.idCustomField === DATE_ID)?.value
        ?.text || "Дата",
    image: attachments[0]?.url || "test.jpg",
  }));
  return tours;
};
