class teamMembers {
  _membersContainer = document.querySelector('.members-wall');
  _teamData = [
    {
      name: 'John Doe',
      description: 'Lead Developer',
      image: './images/tm-1.png',
      socialLinks: {
        facebook: 'https://facebook.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        github: 'https://github.com/johndoe',
      },
    },
    {
      name: 'Jane Smith',
      description: 'UI/UX Designer',
      image: './images/tm-2.png',
      socialLinks: {
        facebook: 'https://facebook.com/janesmith',
        instagram: 'https://instagram.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        github: 'https://github.com/janesmith',
      },
    },
    {
      name: 'Mike Johnson',
      description: 'Backend Developer',
      image: './images/tm-5.png',
      socialLinks: {
        facebook: 'https://facebook.com/mikejohnson',
        instagram: 'https://instagram.com/mikejohnson',
        twitter: 'https://twitter.com/mikejohnson',
        github: 'https://github.com/mikejohnson',
      },
    },
    {
      name: 'Sara Williams',
      description: 'Project Manager',
      image: './images/tm-6.png',
      socialLinks: {
        facebook: 'https://facebook.com/sarawilliams',
        instagram: 'https://instagram.com/sarawilliams',
        twitter: 'https://twitter.com/sarawilliams',
        github: 'https://github.com/sarawilliams',
      },
    },
    {
      name: 'Emily Brown',
      description: 'Frontend Developer',
      image: './images/tm-13.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/emilybrown',
        instagram: 'https://instagram.com/emilybrown',
        twitter: 'https://twitter.com/emilybrown',
        github: 'https://github.com/emilybrown',
      },
    },
    {
      name: 'Daniel Black',
      description: 'DevOps Engineer',
      image: './images/tm-4.png',
      socialLinks: {
        facebook: 'https://facebook.com/danielblack',
        instagram: 'https://instagram.com/danielblack',
        twitter: 'https://twitter.com/danielblack',
        github: 'https://github.com/danielblack',
      },
    },
    {
      name: 'Sophia Green',
      description: 'Marketing Specialist',
      image: './images/tm-10.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/sophiagreen',
        instagram: 'https://instagram.com/sophiagreen',
        twitter: 'https://twitter.com/sophiagreen',
        github: 'https://github.com/sophiagreen',
      },
    },
    {
      name: 'William White',
      description: 'QA Tester',
      image: './images/tm-14.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/williamwhite',
        instagram: 'https://instagram.com/williamwhite',
        twitter: 'https://twitter.com/williamwhite',
        github: 'https://github.com/williamwhite',
      },
    },
    {
      name: 'Olivia Black',
      description: 'HR Manager',
      image: './images/tm-12.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/oliviablack',
        instagram: 'https://instagram.com/oliviablack',
        twitter: 'https://twitter.com/oliviablack',
        github: 'https://github.com/oliviablack',
      },
    },
  ];

  // Method to create and display articles
  createMembers = () => {
    // Clear the container before adding articles
    this._membersContainer.innerHTML = '';

    // Loop through the articles array and create HTML elements dynamically
    this._teamData.forEach(member => {
      // Generate markup for each article
      const membersBox = this._generateMarkup(member);
      // Append the generated markup to the article container
      this._membersContainer.insertAdjacentHTML('beforeend', membersBox);
    });

    // Add event listeners for "read more" links after the articles are rendered
    // this._addReadMoreEventListeners();
  };

  // Generate HTML markup for each article
  _generateMarkup(member) {
    return `
           <div class="members-box "><img src="${member.image}" alt="">
                <ul>
                    <li><a href="${member.socialLinks.facebook}" target="_blank"><i class="fa-brands fa-facebook" style="color: #005eff;"></i></a></li>
                    <li><a href="${member.socialLinks.instagram}" target="_blank"><i class="fa-brands fa-instagram" style="color: #ff00ae;"></i></a></li>
                    <li><a href="${member.socialLinks.twitter}" target="_blank"><i class="fa-brands fa-x-twitter" style="color: #003ca3;"></i></a></li>
                    <li><a href="${member.socialLinks.github}" target="_blank"><i class="fa-brands fa-github" style="color: #000000;"></i></a></li>
                </ul>
                <h4>${member.name}</h4>
                <p>${member.description}</p>
            </div>`;
  }
}
export default new teamMembers();
