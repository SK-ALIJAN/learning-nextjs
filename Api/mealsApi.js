export async function mealsFetch() {
  let Url = "http://localhost:8000/meals";
  try {
    let res = await fetch(Url);
    let data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}
