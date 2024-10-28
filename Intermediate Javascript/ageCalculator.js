function calcDays(age, ageTarget = 30) {
    // using default value of 30 for target age
    const yearsRemaining = ageTarget - age;
    const monthsRemaining = yearsRemaining * 12;
    const weeksRemaining = yearsRemaining * 56;
    const daysRemaining = yearsRemaining * 365;
    
    console.log(`You have ${yearsRemaining} years left till ${ageTarget}`);
    console.log(`You have ${monthsRemaining} months left till ${ageTarget}`);
    console.log(`You have ${weeksRemaining} weeks left till ${ageTarget}`);
    console.log(`You have ${daysRemaining} days left till ${ageTarget}`);
    console.log(`Make every second count...`);
}