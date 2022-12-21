import CalculatorFooter from "../calculator-footer/CalculatorFooter.jsx";
import FormItem from "../form-item/FormItem.jsx";
import Button from "../button/Button.jsx";

import useCalculator from "./useCalculator.js";

import "./style.scss";


const Calculator = () => {

    const {
        compensationDetails,
        setAverageIncome,
        setTuberculosis,
        averageIncome,
        setDaysCount,
        tuberculosis,
        handleSubmit,
        daysCount,
    } = useCalculator();

    return (
        <div className="calculator-wrapper">
            <div className="p-20">
                <h2>Compensation Calculator</h2>

                <FormItem
                    onChange={setAverageIncome}
                    label="Average Income"
                    value={averageIncome}
                    suffix="€"
                />
                <FormItem
                    label="Days on sick-leave"
                    onChange={setDaysCount}
                    value={daysCount}
                    suffix="days"
                />
                <FormItem
                    label="I have tuberculosis"
                    value={tuberculosis}
                    onChange={setTuberculosis}
                    type="checkbox"
                />

                <Button label="Calculate" onClick={handleSubmit}/>

                <CalculatorFooter compensationDetails={compensationDetails}/>
            </div>
        </div>
    );
};

export default Calculator;
