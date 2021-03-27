let datesOrdered = 0;

const sortingTasks = (tasks) => {
    tasks.sort((a, b) => {
        compareDates(new Date(a.due_date), new Date(b.due_date));
        if(datesOrdered !== 0) return datesOrdered;
        //Both have the same due_date
        if(a.importance > b.importance) return -1;
        if(a.importance < b.importance) return 1;
        return 0;
    })
}

const compareDates = (dateA, dateB) => {
    const dateStrA = dateA.getFullYear() + "-" + ("0"+(dateA.getMonth()+1)).slice(-2) + "-" + ("0" + dateA.getDate()).slice(-2);
    const dateStrB = dateB.getFullYear() + "-" + ("0"+(dateB.getMonth()+1)).slice(-2) + "-" + ("0" + dateB.getDate()).slice(-2);
    if(dateStrA < dateStrB) datesOrdered = -1;
    else if(dateStrA > dateStrB) datesOrdered = 1;
    else datesOrdered = 0;
}

const showDateAsString = (date) => {
    return ("0" + date.getDate()).slice(-2) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + date.getFullYear();
}

export { sortingTasks, showDateAsString };