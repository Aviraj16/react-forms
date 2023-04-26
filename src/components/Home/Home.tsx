import classes from "./Home.module.css"

const Home = () => {
  return (
    <div className={classes["main-container"]}>
      <div className={classes["img-container"]}></div>
      <div>This site shows multiple forms which we use to show for login, signup and contact us</div>
    </div>
  )
}

export default Home