const data = {
    "id": 4,
    "title": "viernes de rumba",
    "author": "v10"
};

fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => console.log("Success:", data))
.catch((error) => console.log("Error:", error));