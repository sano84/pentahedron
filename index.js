function toggleDegrees(e) {
    const currentDegrees = +e.currentTarget.dataset.degrees || 0;
    const newDegrees = currentDegrees + 120;
    e.currentTarget.style.transform = `rotate3d(0, -1, 0, ${newDegrees}deg)`;
    e.currentTarget.dataset.degrees = newDegrees;
}

document.querySelector(".prism").addEventListener("click", toggleDegrees);