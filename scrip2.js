  const ageCalculate = () => {
    const today = new Date();
    const inputDate = new Date(document.getElementById("date-input").value);
  
    const birthDetails = {
      second :inputDate.getSeconds(),
      minutes : inputDate.getMinutes(),
      hours : inputDate.getHours(),
      date: inputDate.getDate(),
      month: inputDate.getMonth() + 1,
      year: inputDate.getFullYear(),
    };
    const currentSecond  = today.getSeconds();
    const currentMinute = today.getMinutes();
    const currentHours  = today.getHours();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();
  
    if (isFutureDate(birthDetails, currentSecond,currentMinute,currentHours,currentYear, currentMonth, currentDate)) {
      alert("Not Born Yet");
      displayResult("-", "-", "-");
      return;
    }
  
    const { years, months, days } = calculateAge(birthDetails, currentYear, currentMonth, currentDate);
    displayResult(days, months, years);
  };
  
  const isFutureDate = (birthDetails,currentSecond,currentMinute,currentHours, currentYear, currentMonth, currentDate) => {
    return (
      birthDetails.year > currentYear ||
      (birthDetails.year === currentYear &&
        (birthDetails.month > currentMonth ||
          (birthDetails.month === currentMonth && 
            (birthDetails.date > currentDate ||
              ( birthDetails.date === currentDate &&
                (birthDetails.hours > currentHours ||
                  (birthDetails.hours === currentHours &&
                    (birthDetails.minutes > currentMinute ||
                      (birthDetails.minutes === currentMinute &&
                        (birthDetails.seconds > currentSecond ))))
               )))) ))
    );
  };
  const calculateAge = (birthDetails, currentYear, currentMonth, currentDate) => {
    let years = currentYear - birthDetails.year;
    let months, days, hours,minutes, seconds;
  
    if (currentMonth < birthDetails.month) {
      years--;
      months = 12 - (birthDetails.month - currentMonth);
    } else {
      months = currentMonth - birthDetails.month;
    }
  
    if (currentDate < birthDetails.date) {
      months--;
      const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1;
      const dayInLastMonth = getDaysInMonth(lastMonth, currentYear);
      days = dayInLastMonth - (birthDetails.date - currentDate);
    } else {
      days = currentDate - birthDetails.date;
    }

   /* if (currentHours < birthDetails.hours) {
      hours--;
      const last = currentMonth  currentMonth - 1;
      const dayInLastMonth = getDaysInMonth(lastMonth, currentYear);
      days = dayInLastMonth - (birthDetails.date - currentDate);
    } else {
      days = currentDate - birthDetails.date;
    }
     */

     let Hours = today.getHours()-birthdate.getHours();
     if(hours < 0) {
      hours += 24;
     }

     let Minutes = today.getMinutes()-birthdate.getMinutes();
     if(minutes < 0) {
      hours += 60;
     }

     let Seconds = today.getSeconds()-birthdate.getSeconds();
     if(seconds < 0) {
      seconds += 60;
     }



    return { years, months, days,hours, minutes, seconds };
  };
  
  const getDaysInMonth = (month, year) => {
    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    const daysInMonth = [
      31,
      isLeapYear ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    return daysInMonth[month - 1];
  };
  
  const displayResult = (bdate, bMonth, bYear) => {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bdate;
    document.getElementById("hours").textContent = bhour;
    document.getElementById("minutes").textContent = bminute;
    document.getElementById("seconds").textContent = bsecond;

  };
  
  document.getElementById("calc-age-btn").addEventListener("click", ageCalculate);
  