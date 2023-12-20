import SubmitBtn from "@/components/meals/mealSubmittingBtn";
import classes from "./page.module.css";
import { redirect } from "next/navigation";

export default function ShareMealPage() {
  // in Next js every event handler excuted in client , to get rid of it
  // we can explicitly turn function to server and pass to action in form and get the data using get method ()
  // make sure input feild right name attribute
  async function shareMeal(formdata) {
    "use server";
    let meal = {
      name: formdata.get("name"),
      email: formdata.get("email"),
      title: formdata.get("title"),
      summary: formdata.get("summary"),
      instructions: formdata.get("instructions"),
    };
    // here i am getting form data

    redirect("/meals");
  }
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          IMAGE PICKER
          <p className={classes.actions}>
            <SubmitBtn />
          </p>
        </form>
      </main>
    </>
  );
}
