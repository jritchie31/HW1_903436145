// Select all navigation links
const navLinks = document.querySelectorAll('.topnav a');

// Select all sections
const sections = document.querySelectorAll('section');

// Listen for the scroll event
window.addEventListener('scroll', () => {
  let currentSection = '';

  // Loop through each section to check if it's in the viewport
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  // Loop through each nav link and remove the 'active' class
  navLinks.forEach(link => {
    link.classList.remove('active');
    // Add 'active' class to the link corresponding to the current section
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

//Read in excel file to dynamically add the informaiton to the website

// Read in the CSV file to dynamically add the information to the website

// Wait for the document to be ready
$(document).ready(function () {
    // URL to the CSV file
    const csvUrl = 'https://raw.githubusercontent.com/jritchie31/HW1_903436145/refs/heads/main/Internships.csv'; // Update with the actual URL of your CSV file

    // Fetch and parse the CSV data
    $.ajax({
        url: csvUrl,
        dataType: 'text',
        success: function (data) {
            // Use PapaParse to parse the CSV file
            Papa.parse(data, {
                complete: function (results) {
                    // Get the parsed data (array of objects)
                    const papers = results.data;

                    // Loop through each entry in the CSV data
                    papers.forEach(function (row, index) {
                        // Skip the header row
                        if (index === 0) return;

                        // Extract job details
                        const company = row[0] || 'No Company';
                        const dates = row[1] || 'No Dates';
                        const role = row[2] || 'No Role';
                        const description = row[3] || 'No Description';

                        // Create a new div element for each job (timeline item)
                        const timelineItem = $('<div>', { class: 'timeline-item' });

                        // Add job details to the timeline item
                        timelineItem.append(`
                            <div class="timeline-content">
                                <h3>${company}</h3>
                                <span class="job-dates">${dates}</span>
                                <span class="job-role">Role: ${role}</span>
                                <h4>Description of Impact:</h4>
                                <p>${description}</p>
                            </div>
                        `);

                        // Append the timeline item to the container
                        $('#papers-container').append(timelineItem);
                    });
                },
                header: false, // No header row in this case
            });
        },
        error: function () {
            alert('Error loading CSV file');
        }
    });
});


// // Wait for the document to be ready
// $(document).ready(function () {
//     // URL to the CSV file
//     const csvUrl = 'https://raw.githubusercontent.com/jritchie31/HW1_903436145/refs/heads/main/Internships.csv'; // Update with the actual URL of your CSV file

//     // Fetch and parse the CSV data
//     $.ajax({
//         url: csvUrl,
//         dataType: 'text',
//         success: function (data) {
//             // Use PapaParse to parse the CSV file
//             Papa.parse(data, {
//                 complete: function (results) {
//                     // Get the parsed data (array of objects)
//                     const papers = results.data;

//                     // Loop through each paper in the CSV data
//                     papers.forEach(function (row, index) {
//                         // Skip the header row
//                         if (index === 0) return;

//                         // Extract paper details
//                         const title = row[0] || 'No Title';
//                         const Dates = row[1] || 'No Author';
//                         const year = row[2] || 'No Year';
//                         const doi = row[3] || 'No DOI';

//                         // Create a new div element for each paper
//                         const paperItem = $('<div>', { class: 'paper-item' });

//                         // Add paper details to the paper item
//                         paperItem.append(`<h3>${title}</h3>`);
//                         paperItem.append(`<p><strong>Dates:</strong> ${Dates}</p>`);
//                         paperItem.append(`<p><strong>Role:</strong> ${year}</p>`);
//                         paperItem.append(`<p><strong>DOI:</strong> <a href="https://doi.org/${doi}" target="_blank">${doi}</a></p>`);

//                         // Append the paper item to the container
//                         $('#papers-container').append(paperItem);
//                     });
//                 },
//                 header: false, // No header row in this case
//             });
//         },
//         error: function () {
//             alert('Error loading CSV file');
//         }
//     });
// });
