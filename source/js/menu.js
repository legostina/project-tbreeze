const data = fetch('/data/data.json');

data
.then((response) => response.json())
.then((responseData) => {
  console.log(responseData);

  const dataMenu = responseData.menu;
  console.log(dataMenu)
});

async function getMenu() {
  let responseMenu = await fetch('/data/data.json');
  let menu = await responseMenu.json();
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  console.log(JSON.stringify(menu, '', ' '));
  let responseFirstMenu = await fetch('/data/data.json');
  let firstMenu = await responseFirstMenu.json();
  console.log(JSON.stringify(firstMenu, '', ' '));
  return menu;
}
getMenu();
