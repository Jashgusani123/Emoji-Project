function abc(search) {
    const filtered = emojiList.filter((e) => {
        if (e.description.indexOf(search.toUpperCase()) != -1) {
            return true;
        }
        if (e.aliases.some((elem) => elem.startsWith(search))) {
            return true;
        }
        if (e.tags.some((elem) => elem.startsWith(search))) {
            return true;
        }
    });

    let tbody = document.getElementById("search_result_container");
    tbody.innerHTML = "";
    filtered.forEach(e => {
        let row = document.createElement('tr');
        let emoji = document.createElement('td');
        let aliases = document.createElement('td');
        let desc = document.createElement('td');

        emoji.innerText = e.emoji;
        aliases.innerText = e.aliases.join(", ");
        desc.innerText = e.description;

        aliases.innerText = aliases.innerText.replaceAll('_', " ");


        emoji.classList.add("emoji");
        aliases.classList.add("aliases");
        desc.classList.add("desc");

        row.appendChild(emoji);
        row.appendChild(aliases);
        row.appendChild(desc);
        tbody.appendChild(row);
    });

}
document.getElementById("search_field").addEventListener("keyup", (e) => {
    const value = e.target.value;
    // console.log(value);
    abc(value);
})
function display() {
    emojiList.forEach((e) => {
        let tbody = document.getElementById("search_result_container");
        let row = document.createElement("tr");
        let emoji = document.createElement("td");
        let as = document.createElement("td");
        let dc = document.createElement("td");

        emoji.innerText = e.emoji;
        as.innerText = e.aliases;
        dc.innerText = e.description;

        emoji.classList.add("emoji");
        as.classList.add("aliases");
        dc.classList.add("desc");

        row.appendChild(emoji);
        row.appendChild(as);
        row.appendChild(dc);

        tbody.appendChild(row);
    })
}
window.onload = () => display();
