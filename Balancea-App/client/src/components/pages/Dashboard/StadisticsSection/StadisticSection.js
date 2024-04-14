import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import styles from "./StadisticsSection.module.css";
import Dropdown from "../Dropdown/Dropdown";
import AuthContext from "../../../../context/AuthContext";

const StadisticsSection = () => {
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [incomePercentage, setIncomePercentage] = useState(0);
    const [expensePercentage, setExpensePercentage] = useState(0);
    const { userId } = useContext(AuthContext);

    const fetchData = async (type, startDate, endDate) => {
        try {
            const response = await axios.post("http://localhost:8000/api/transactions/period", {
                userId: userId,
                date: { $gte: new Date(startDate), $lt: new Date(endDate) },
                type: type,
            }, { withCredentials: true });
            const totalAmount = response.data.reduce((acc, el) => acc + el.amount, 0);
            return totalAmount;
        } catch (error) {
            console.error(error);
            return 0;
        }
    };

    const updateData = async (startDate, endDate) => {
        const income = await fetchData("income", startDate, endDate);
        const expenses = await fetchData("expense", startDate, endDate);
        setTotalIncome(income);
        setTotalExpenses(expenses);
    };

    useEffect(() => {
        const today = new Date();
        const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        updateData(startDate, endDate);
    }, [userId]);

    useEffect(() => {
        const incomeP = totalIncome > 0 ? Math.round((totalIncome - totalExpenses) / totalIncome * 100) : 0;
        const expensesP = totalExpenses > 0 ? Math.round((totalIncome - totalExpenses) / totalExpenses * 100) : 0;
        setIncomePercentage(incomeP);
        setExpensePercentage(expensesP);
    }, [totalIncome, totalExpenses]);

    const handleDateYearly = () => {
        const today = new Date();
        const startDate = new Date(today.getFullYear(), 0, 1);
        const endDate = new Date(today.getFullYear() + 1, 0, 0);
        updateData(startDate, endDate);
    };

    const handleDateMonthly = () => {
        const today = new Date();
        const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        updateData(startDate, endDate);
    };

    const handleDateWeekly = () => {
        const today = new Date();
        const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
        const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 7);
        updateData(startDate, endDate);
    };

    const handleDateDaily = () => {
        const today = new Date();
        const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        updateData(startDate, endDate);
    };

    const expensesPercentageCircleStyles = {
        "--percentage": expensePercentage, // Use state variable dynamically
    };

    const incomePercentageCircleStyles = {
        "--percentage": incomePercentage, // Use state variable dynamically
    };

    return (
        <div className={styles.stadistics}>
            <div className={styles.stadistics__label}>
                <h2 className={styles.stadistics__title}>Estadísticas</h2>
                <Dropdown 
                    actions={[handleDateYearly, handleDateMonthly, handleDateWeekly, handleDateDaily]}
                    options={["Último Año", "Último Mes", "Última Semana", "Hoy"]}>
                </Dropdown>
            </div>

            <div className={styles.stadistics__container}>
                <div className={styles.stadistics__card}>
                    <div className={styles.stadistics__description}>
                    <h4>Mi Saldo</h4>
                        <p>${totalIncome - totalExpenses}</p> 
                    </div>
                </div>
                <div className={styles.stadistics__card}>
                    <div className={styles.stadistics__description}>
                        <h4>Total Gastos</h4>
                        <p>${totalExpenses}</p>
                    </div>
                    <div 
                        className={`${styles.pie} ${styles.animate}`} 
                        style={expensesPercentageCircleStyles}>
                        {expensePercentage + "%"}
                    </div>
                </div>
                <div className={styles.stadistics__card}>
                    <div className={styles.stadistics__description}>
                        <h4>Total Ingresos</h4>
                        <p>${totalIncome}</p>
                    </div>
                    <div 
                        className={`${styles.pie} ${styles.animate}`} 
                        style={incomePercentageCircleStyles}>
                        {incomePercentage + "%"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StadisticsSection;
