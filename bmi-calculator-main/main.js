// BMI CALCULATOR USING INQUIRER+
import inquirer from "inquirer";
const questions = [
    { type: 'number', name: 'weight', message: 'weight(kg):' },
    { type: 'number', name: 'height', message: 'height(meter):' },
];
const calculateBMI = (weight, height) => weight / (height * height);
const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
        return 'Underweight';
    }
    else if (bmi >= 18.5 && bmi < 26) {
        return 'Normal weight';
    }
    else if (bmi >= 26 && bmi < 30) {
        return 'Overweight';
    }
    else {
        return 'Obese';
    }
};
const main = async () => {
    const { weight, height } = await inquirer.prompt(questions);
    const bmi = calculateBMI(weight, height);
    const bmiFormatted = bmi.toFixed(2);
    const bmiCategory = getBMICategory(bmi);
    console.log(`BMI: ${bmiFormatted} (${bmiCategory})`);
};
main();
