export async function individualMeal(slug) {
  let Url = `http://localhost:8000/meals?slug=${slug}`;
  try {
    let res = await fetch(Url);
    let data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}
