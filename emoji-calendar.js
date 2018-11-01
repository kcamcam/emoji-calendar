// Title    - Emoji Holiday
// Author   - Kevin Camellini
// Date     - October 31, 2018
//
// This file inserts a holiday themed emoji into the #calendar-emoji element 
// located in the DOM, depending on the time of the year and inserts a 
// default emoji the rest of the year.
//
// Note: holidays correspond to canadian holidays

// current date 
let date = new Date();
let current_month = date.getMonth() + 1;
let current_day = date.getDate();
let current_year = date.getFullYear();

// // variables for debugging
// current_month = 5;
// current_day = 21;

// holidays
// New Years Day - January 1st
let new_years_day = (current_month == 1 && current_day == 1);
// Valentines day - February 14th
let valentines_day = (current_month == 2 && current_day == 14);
// St Patricks Day - March 19th
let st_pats_day = (current_month == 3 && current_day == 19);
// Easter - first Sunday of April
let easter = (
    current_month == 4 && current_day == getFirstSunday(1,current_year));
// Victorday Day - The Monday preceding May 25th
let victoria_day = (
    current_month == 5 && 
    current_day == getQueensBirthday(25,current_year));
// St Jean - June 25th
let st_jean = (current_month == 6 && current_day == 25);
// Canada Day - June 27th to July 1st
let canada = (
    (current_month == 6 && current_day > 27 ) ||
    (current_month == 7 && current_day == 1));
// Independance Day (US) - July 4th
let usa = (current_month == 7 && current_day == 4);
// Labor Day - September 3
let labor_day = (current_month == 9 && current_day == 3);
// Thanksgiving - The second Monday of October
let thanks_giving = (
    current_month == 10 && 
    current_day == getSecondMonday(10,current_year));
// Halloween 25 to 31 of October
let halloween = (
    current_month == 10 && 
    (current_day >= 25 && current_day <= 31));
// Rememberance Day - November 11th
let rememberance = (current_month == 11 && current_day == 11);
// Christmas - December 12th to 30th
let christmas = (
    current_month == 12 &&
    (current_day >= 12 && current_day <= 25));
// Boxing Day - December 26th
let boxing_day = (current_month == 12 && current_day == 26);
// New Years Eve - December 31st
let new_years_eve = (current_month == 12 && current_day == 31);

function getEmoji(default_emoji){
    if (new_years_day){
        return "🎉";
    }else if (valentines_day){
        return "💝";
    }else if (st_pats_day){
        return "🍀";
    }else if (easter){
        return "🐣";
    }else if (victoria_day){
        return "👸";
    }else if (st_jean){
        return "⚜️";
    }else if (canada){
        return "🇨🇦";
    }else if (usa){
        return "🇺🇸";
    }else if (labor_day){
        return "🛠";
    }else if (thanks_giving){
        return "🦃";
    }else if (halloween){
        return "🎃";
    }else if (rememberance){
        return "🎖";
    }else if (christmas){
        return "🎄";
    }else if (boxing_day){
        return "🥊";
    }else if (new_years_eve){
        return "🎊";
    }else {
        return default_emoji;
    }
}

// get second monday of the month for a certain year
// return the day of of that monday 
// used for getting thanksgiving canada
function getSecondMonday(month, year) {
    // get day returns day of the week from 0 to 6
    // sunday is 0 saturday is 6
    let first_day_week = (new Date(month+"/1/"+year)).getDay();
    // if the first day of the week of the current month is
    // Sunday or Monday
    // second monday is 14 days away from (2 - first_day_week)
    // elsif the first day of the week of the current month is
    // Tusday, Wednesday, Thursday, Friday or Saturday
    // second monday is 7 days away from (2 - first_day_week)
    return ((monday = 2 - first_day_week) < 1) ? monday + 14 : monday + 7;
}
// console.log(getSecondMonday(10, 2019));

// get the immediate preceding monday before May 25
// used for getting the queens birthday canada
function getQueensBirthday(day, year){
    day--;
    let temp_date = new Date("5/"+day+"/"+year);
    let day_of_the_week = temp_date.getDay();
    // get day returns day of the week from 0 to 6
    // sunday is 0, monday is 1...
    if (day_of_the_week == 1)
        return day;
    return getQueensBirthday(day, year);
}
// console.log(getQueensBirthday(25,2015));

// get the first sunday of April
// return the day of that sunday
// used for getting easter sunday
function getFirstSunday(day,year) {
    let temp_date = new Date("4/"+day+"/"+year);
    let day_of_the_week = temp_date.getDay();
    // get day returns day of the week from 0 to 6
    // sunday is 0, monday is 1...
    if (day_of_the_week == 0)
        return day;
    day++;
    return getFirstSunday(day, year);
}
// console.log(getFirstSunday(1,2018));

// function to insert emoji into the DOM
// default emoji passed in as a parameter
// the function inserts the emoji into the DOM
// element with ID #calendar-emoji
// and returns the current emoji being passed
// into the element
function insertEmoji(default_emoji){
    let curr_emoji = getEmoji(default_emoji);
    console.log("Current Holiday Emoji: " + curr_emoji);
    document.getElementById("emoji-calendar").innerHTML = curr_emoji;
    return curr_emoji;
}

insertEmoji("📆");