import {useState} from "react";

import {
    MAX_INSURENCE_DURATION_TUBERCULOSIS,
    MAX_INSURENCE_DURATION,
    EMPLOYER_DAYS_START,
    EMPLOYER_DAYS_END,
    WORKING_DAYS
} from "../../utils/constants.js";

const useCalculator = () => {

    const [compensationDetails, setCompensationDetails] = useState(null);
    const [tuberculosis, setTuberculosis] = useState(false);
    const [averageIncome, setAverageIncome] = useState(0);
    const [daysCount, setDaysCount] = useState(0);


    const getCompensationPerDay = () => Math.floor((averageIncome * 70) / 100 / WORKING_DAYS);

    const validateAverageIncome = () => averageIncome > 0;

    const calculateSickLeaveDays = () => {

        const compensationPerDay = getCompensationPerDay();

        const compensationDays = {
            employer: {
                days: 0,
                compensation: 0,
                dailyCompensation: 0
            },
            insurance: {
                days: 0,
                compensation: 0,
                dailyCompensation: 0
            },
            total: {
                days: daysCount,
                compensation: compensationPerDay * daysCount,
            }
        };

        if (daysCount >= EMPLOYER_DAYS_START) {


            if (daysCount > EMPLOYER_DAYS_END) {

                compensationDays.employer.compensation = compensationPerDay * EMPLOYER_DAYS_END;
                compensationDays.employer.dailyCompensation = compensationPerDay;
                compensationDays.employer.days = EMPLOYER_DAYS_END;

                compensationDays.insurance.compensation = compensationPerDay * (daysCount - EMPLOYER_DAYS_END);
                compensationDays.insurance.dailyCompensation = compensationPerDay;
                compensationDays.insurance.days = daysCount - EMPLOYER_DAYS_END;

            } else {
                compensationDays.employer.compensation = compensationPerDay * daysCount;
                compensationDays.employer.dailyCompensation = compensationPerDay;
                compensationDays.employer.days = daysCount;
            }
        }

        setCompensationDetails(compensationDays);
    };

    const validateDaysCount = () => {
        if (daysCount > MAX_INSURENCE_DURATION && !tuberculosis) return false;

        return !(daysCount > MAX_INSURENCE_DURATION_TUBERCULOSIS && tuberculosis);
    }

    const handleSubmit = () => {
        if (!validateDaysCount()) return console.warn('Maximum days count error');
        if (!validateAverageIncome()) return console.warn('Average income error');

        calculateSickLeaveDays();
    }

    return {
        getCompensationPerDay,
        calculateSickLeaveDays,
        compensationDetails,
        setAverageIncome,
        setTuberculosis,
        averageIncome,
        setDaysCount,
        handleSubmit,
        tuberculosis,
        daysCount,
    };
};

export default useCalculator;
