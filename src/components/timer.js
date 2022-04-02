const BUDDY_WALK_DATE = "Oct 2, 2022  09:00:00";

function timer(eventDate) {
    const then = new Date(eventDate).getTime();
    const now = new Date().getTime();
    const distance = then - now;

    let time = "";
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    time += `${days}d ${hours}h ${minutes}m ${seconds}s`;

    return time;

}

let display = () => {
    console.log(timer(BUDDY_WALK_DATE));
}

setInterval(display, 1000);
