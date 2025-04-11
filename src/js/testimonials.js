class testiMonialsData {
  _testimonialsContainer = document.querySelector('.testimonials-wall');
  _testimonialsData = [
    {
      name: 'Mohamed Farag',
      position: 'Full Stack Developer',
      image: './avatar/avatar-01.png',
      rating: 4, // Out of 5 stars
      review:
        'Great experience working with the team. The project was delivered on time and met all requirements. Highly recommended!',
    },
    {
      name: 'John Doe',
      position: 'Frontend Developer',
      image: './avatar/avatar-06.png',
      rating: 5, // Out of 5 stars
      review:
        "Impressed with the team's work. They exceeded expectations and delivered excellent results. Will work with them again!",
    },
    {
      name: 'Sarah Lee',
      position: 'UI/UX Designer',
      image: './avatar/avatar-03.png',
      rating: 4, // Out of 5 stars
      review:
        'Creative and efficient team. The design process was smooth, and communication was clear. Very happy with the outcome.',
    },
    {
      name: 'Mike Johnson',
      position: 'Backend Developer',
      image: './avatar/avatar-04.png',
      rating: 5, // Out of 5 stars
      review:
        'Fantastic collaboration! They understood the requirements well and delivered top-notch backend solutions.',
    },
    {
      name: 'Emily Brown',
      position: 'Project Manager',
      image: './avatar/avatar-05.png',
      rating: 4, // Out of 5 stars
      review:
        'The team is highly skilled and professional. Their ability to meet deadlines and provide quality work is impressive.',
    },
    {
      name: 'Daniel Black',
      position: 'DevOps Engineer',
      image: './avatar/avatar-02.png',
      rating: 5, // Out of 5 stars
      review:
        'Excellent service and great communication. The team delivered high-quality work that was easy to integrate.',
    },
  ];
  // Function to generate and display testimonials
  createTestimonialBox() {
    // Clear the container before adding testimonials
    this._testimonialsContainer.innerHTML = '';
    // Loop through the testimonials array and create HTML elements dynamically
    this._testimonialsData.forEach(testimonial => {
      const testimonialBox = this._generateTestimonials(testimonial);
      // Append the generated markup to the article container
      this._testimonialsContainer.insertAdjacentHTML(
        'beforeend',
        testimonialBox
      );
    });
  }

  // Function to create a testimonial box with dynamic stars
  _generateTestimonials(testimonial) {
    // Create the filled stars dynamically
    let filledStars = '';
    let emptyStars = '';
    // Loop to generate filled stars
    for (let i = 0; i < testimonial.rating; i++) {
      filledStars += `<i class="fa-solid fa-star" style="color: #ffd500;"></i>`;
    }
    // Loop to generate empty stars
    for (let i = testimonial.rating; i < 5; i++) {
      emptyStars += `<i class="fa-regular fa-star" style="color: #ffd500;"></i>`;
    }
    // Generate the testimonial box HTML
    return `
      <div class="testimonials-box">
        <img src="${testimonial.image}" alt="${testimonial.name}">
        <h5>${testimonial.name}</h5>
        <p>${testimonial.position}</p>
        <span>${filledStars}${emptyStars}</span>
        <p>${testimonial.review}</p>
      </div>
    `;
  }
}
// Call the function to generate testimonials
export default new testiMonialsData();
