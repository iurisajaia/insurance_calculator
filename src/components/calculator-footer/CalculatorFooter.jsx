const CalculatorFooter = ({compensationDetails}) => {
    return (
        <>
            <div className="calculator-row">
                <div className="calculator-row-item">
                    <h4>The employer compensates</h4>
                    <h3>{compensationDetails?.employer.days || 0} days</h3>
                </div>
                <div className="calculator-row-item">
                    <h4>Health Insurance compensates</h4>
                    <h3>{compensationDetails?.insurance.days || 0} days</h3>
                </div>
                <div className="calculator-row-item">
                    <h2>{compensationDetails?.employer.compensation || 0}€</h2>
                    <h5>Daily allowance {compensationDetails?.employer.dailyCompensation || 0}€</h5>
                </div>
                <div className="calculator-row-item">
                    <h2>{compensationDetails?.insurance.compensation || 0}€</h2>
                    <h5>Daily allowance {compensationDetails?.insurance.dailyCompensation || 0}€</h5>
                </div>
            </div>

            <div className="calculator-footer">
                <h3>Compensation total for {compensationDetails?.total.days || 0} days (net)</h3>
                <h2>{compensationDetails?.total.compensation || 0}€</h2>
            </div>
        </>
    )
}

export default CalculatorFooter;