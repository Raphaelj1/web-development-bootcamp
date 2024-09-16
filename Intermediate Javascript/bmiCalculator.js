function calcBmi(weight, height) {
    const bmi = weight / Math.pow(height, 2);
    console.log('Your BMI is ' + bmi + ' kg per meter squared')
    return Math.round(bmi);
}