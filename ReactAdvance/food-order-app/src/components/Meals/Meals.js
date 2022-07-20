import{Fragment} from "react"
import AvailableMeals from "./AvailableMeals";
import MealsSummry from "./MealsSummary";

const Meals = () => {
return <Fragment>
    <MealsSummry />
    <AvailableMeals />
</Fragment>
}

export default Meals;