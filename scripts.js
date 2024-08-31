const jsonData = [
  {
    rank: 1,
    name: "IIT Madras",
    featured: true,
    course_fees: 209550,
    placement: {
      average_salary: 2140000,
      highest_salary: 4400000,
    },
    user_review: 8.6,
    ranking: {
      india_rank: 1,
      world_rank: 103,
    },
    logo: "IIT MADRAS.png",
  },
  {
    rank: 2,
    name: "IIT Delhi",
    featured: false,
    course_fees: 254650,
    placement: {
      average_salary: 2520000,
      highest_salary: 8000000,
    },
    user_review: 8.7,
    ranking: {
      india_rank: 2,
      world_rank: 185,
    },
    logo: "IIT DELHI.png",
  },
  {
    rank: 3,
    name: "Parul University",
    featured: false,
    course_fees: 149000,
    placement: {
      average_salary: 400000,
      highest_salary: 800000,
    },
    user_review: 8.1,
    ranking: {
      india_rank: 99,
      world_rank: 647,
    },
    logo: "./Parul Univeristy.jpg",
  },
  {
    rank: 4,
    name: "IIT Bombay",
    featured: true,
    course_fees: 229300,
    placement: {
      average_salary: 2192000,
      highest_salary: 5000000,
    },
    user_review: 8.8,
    ranking: {
      india_rank: 3,
      world_rank: 152,
    },
    logo: "./IIT Bombay.png",
  },
  {
    rank: 5,
    name: "BITS Pilani",
    featured: true,
    course_fees: 320000,
    placement: {
      average_salary: 1700000,
      highest_salary: 4500000,
    },
    user_review: 8.5,
    ranking: {
      india_rank: 7,
      world_rank: 200,
    },
    logo: "./BITS Pilani.png",
  },
  {
    rank: 6,
    name: "IIT Kanpur",
    featured: false,
    course_fees: 210000,
    placement: {
      average_salary: 2300000,
      highest_salary: 6000000,
    },
    user_review: 8.7,
    ranking: {
      india_rank: 4,
      world_rank: 180,
    },
    logo: "./IIT Kanpur.png",
  },
  {
    rank: 7,
    name: "IIT Kharagpur",
    featured: true,
    course_fees: 220000,
    placement: {
      average_salary: 2200000,
      highest_salary: 5500000,
    },
    user_review: 8.6,
    ranking: {
      india_rank: 5,
      world_rank: 190,
    },
    logo: "./IIT Kharagpur.jpeg",
  },
  {
    rank: 8,
    name: "IIT Roorkee",
    featured: false,
    course_fees: 205000,
    placement: {
      average_salary: 2000000,
      highest_salary: 5000000,
    },
    user_review: 8.4,
    ranking: {
      india_rank: 6,
      world_rank: 210,
    },
    logo: "./IIT Roorkee.jpeg",
  },
  {
    rank: 9,
    name: "IIT Guwahati",
    featured: false,
    course_fees: 215000,
    placement: {
      average_salary: 2100000,
      highest_salary: 5100000,
    },
    user_review: 8.5,
    ranking: {
      india_rank: 8,
      world_rank: 215,
    },
    logo: "./IIT Guwahati.png",
  },
  {
    rank: 10,
    name: "NIT Trichy",
    featured: true,
    course_fees: 150000,
    placement: {
      average_salary: 1200000,
      highest_salary: 3500000,
    },
    user_review: 8.3,
    ranking: {
      india_rank: 9,
      world_rank: 300,
    },
    logo: "./NIT Trichy.png",
  },
  {
    rank: 11,
    name: "VIT Vellore",
    featured: true,
    course_fees: 170000,
    placement: {
      average_salary: 1100000,
      highest_salary: 3000000,
    },
    user_review: 8.0,
    ranking: {
      india_rank: 10,
      world_rank: 350,
    },
    logo: "path/to/iit-madras-logo.png",
  },
  {
    rank: 12,
    name: "Amity University",
    featured: false,
    course_fees: 200000,
    placement: {
      average_salary: 900000,
      highest_salary: 2500000,
    },
    user_review: 7.5,
    ranking: {
      india_rank: 50,
      world_rank: 500,
    },
    logo: "path/to/iit-madras-logo.png",
  },
  {
    rank: 13,
    name: "Manipal University",
    featured: false,
    course_fees: 250000,
    placement: {
      average_salary: 1300000,
      highest_salary: 3200000,
    },
    user_review: 8.2,
    ranking: {
      india_rank: 12,
      world_rank: 280,
    },
    logo: "path/to/iit-madras-logo.png",
  },
  {
    rank: 14,
    name: "SRM University",
    featured: true,
    course_fees: 180000,
    placement: {
      average_salary: 1000000,
      highest_salary: 2800000,
    },
    user_review: 7.8,
    ranking: {
      india_rank: 15,
      world_rank: 400,
    },
    logo: "path/to/iit-madras-logo.png",
  },
  {
    rank: 15,
    name: "Thapar Institute of Engineering and Technology",
    featured: false,
    course_fees: 190000,
    placement: {
      average_salary: 1400000,
      highest_salary: 3600000,
    },
    user_review: 8.3,
    ranking: {
      india_rank: 14,
      world_rank: 310,
    },
    logo: "path/to/iit-madras-logo.png",
  },
];

let currentIndex = 0;
const rowsPerPage = 10;

function loadTableRows(data = jsonData) {
  const tableBody = document.querySelector("tbody");
  const dataSlice = data.slice(currentIndex, currentIndex + rowsPerPage);

  dataSlice.forEach((college) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${college.rank}</td>
            <td>
                <img src="${college.logo}" alt="${
      college.name
    } logo" class="college-logo">
                ${college.name}${
      college.featured ? ' <span class="featured">Featured</span>' : ""
    }
            </td>
            <td>${college.course_fees}</td>
            <td>${college.placement.average_salary} / ${
      college.placement.highest_salary
    }</td>
            <td>${college.user_review}</td>
            <td>${college.ranking.india_rank} / ${
      college.ranking.world_rank
    }</td>
        `;

    tableBody.appendChild(row);
  });

  currentIndex += rowsPerPage;
}

// Infinite Scroll
document.addEventListener("scroll", () => {
  const container = document.querySelector(".table-container");
  if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
    loadTableRows();
  }
});

// Search functionality
document.querySelector("#search-input").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredData = jsonData.filter((college) =>
    college.name.toLowerCase().includes(searchTerm)
  );

  currentIndex = 0;
  document.querySelector("tbody").innerHTML = "";
  loadTableRows(filteredData);
});

// Sorting functionality
document
  .querySelector("#sort-rating-asc")
  .addEventListener("click", () => sortTableBy("user_review", true));
document
  .querySelector("#sort-rating-desc")
  .addEventListener("click", () => sortTableBy("user_review", false));
document
  .querySelector("#sort-rank-asc")
  .addEventListener("click", () => sortTableBy("rank", true));
document
  .querySelector("#sort-rank-desc")
  .addEventListener("click", () => sortTableBy("rank", false));
document
  .querySelector("#sort-fees-asc")
  .addEventListener("click", () => sortTableBy("course_fees", true));
document
  .querySelector("#sort-fees-desc")
  .addEventListener("click", () => sortTableBy("course_fees", false));

function sortTableBy(column, ascending = true) {
  jsonData.sort((a, b) => {
    if (ascending) {
      return a[column] - b[column];
    } else {
      return b[column] - a[column];
    }
  });
  currentIndex = 0;
  document.querySelector("tbody").innerHTML = "";
  loadTableRows();
}

loadTableRows(); // Load initial rows
